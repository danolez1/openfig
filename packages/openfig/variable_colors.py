class ColorVariables:
    def __init__(self, raw_nodes):
        self.raw_nodes = raw_nodes
        self.references = {}
        for node_id, node in raw_nodes.items():
            if node.get('type') not in ('VARIABLE', 'VARIABLE_SET'):
                continue
            for reference in (node_id, node.get('key'), self.guid(node.get('publishID'))):
                if reference:
                    self.references[reference] = node_id
        self.definitions = {}
        for node_id, node in raw_nodes.items():
            if node.get('type') != 'VARIABLE':
                continue
            collection_id = self.reference(node.get('variableSetID'))
            collection = raw_nodes.get(collection_id, {})
            modes = collection.get('variableSetModes') or []
            if isinstance(modes, dict):
                modes = modes.get('entries', [])
            values = {}
            for entry in (node.get('variableDataValues') or {}).get('entries', []):
                mode_id = self.guid(entry.get('modeID'))
                value = (entry.get('variableData') or {}).get('value') or {}
                if value.get('colorValue'):
                    color = value['colorValue']
                    values[mode_id] = {'color': [float(color.get(key, 1 if key == 'a' else 0)) for key in ('r', 'g', 'b', 'a')]}
                elif value.get('alias'):
                    values[mode_id] = {'alias': self.reference(value['alias'])}
            self.definitions[node_id] = {
                'collection': collection_id,
                'defaultMode': self.guid(modes[0].get('id')) if modes else next(iter(values), None),
                'values': values,
            }
        self.mode_cache = {}

    @staticmethod
    def guid(value):
        if not isinstance(value, dict) or 'sessionID' not in value or 'localID' not in value:
            return None
        return f"{value['sessionID']}:{value['localID']}"

    def reference(self, value):
        if not isinstance(value, dict):
            return None
        key = (value.get('assetRef') or {}).get('key') or self.guid(value.get('guid')) or self.guid(value)
        return self.references.get(key)

    def binding(self, value):
        return self.reference(((value or {}).get('value') or {}).get('alias'))

    def local_modes(self, source_id):
        node = self.raw_nodes.get(source_id, {})
        result = {}
        for entry in (node.get('variableModeBySetMap') or {}).get('entries', []):
            collection_id = self.reference(entry.get('variableSetID'))
            mode_id = self.guid(entry.get('variableModeID'))
            if collection_id and mode_id:
                result[collection_id] = mode_id
        return result

    def modes_for(self, node_id, flat_nodes, visiting=None):
        if node_id in self.mode_cache:
            return self.mode_cache[node_id]
        visiting = set() if visiting is None else visiting
        if node_id in visiting:
            return {}
        visiting.add(node_id)
        source_id = node_id.rsplit('::', 1)[-1]
        source = self.raw_nodes.get(source_id, {})
        parent_id = (flat_nodes.get(node_id) or {}).get('parentId') or self.guid((source.get('parentIndex') or {}).get('guid'))
        inherited = self.modes_for(parent_id, flat_nodes, visiting) if parent_id and parent_id != node_id else {}
        result = {**inherited, **self.local_modes(source_id)}
        self.mode_cache[node_id] = result
        return result

    def color(self, variable_id, modes, visiting=None):
        visiting = set() if visiting is None else visiting
        if variable_id in visiting:
            return None
        visiting.add(variable_id)
        definition = self.definitions.get(variable_id)
        if not definition:
            return None
        values = definition['values']
        value = values.get(modes.get(definition['collection'])) or values.get(definition['defaultMode']) or next(iter(values.values()), {})
        if value.get('color') is not None:
            return value['color']
        return self.color(value.get('alias'), modes, visiting) if value.get('alias') else None

    def resolve(self, value, modes):
        if isinstance(value, list):
            return [self.resolve(item, modes) for item in value]
        if not isinstance(value, dict):
            return value
        result = {key: self.resolve(item, modes) for key, item in value.items()}
        color = self.color(result.get('colorVariable'), modes)
        if color is not None:
            if result.get('type') == 'SOLID' and 'opacity' in result:
                factor = result.get('colorVariableOpacityFactor')
                if factor is None:
                    authored_color = result.get('color') or []
                    authored_alpha = float(authored_color[3] if len(authored_color) > 3 else 1) * float(result['opacity'])
                    # Cached paint opacity already includes the bound variable's alpha.
                    factor = authored_alpha / color[3] if color[3] else 1
                result['colorVariableOpacityFactor'] = factor
                result['opacity'] = factor
            result['color'] = color
        return result
