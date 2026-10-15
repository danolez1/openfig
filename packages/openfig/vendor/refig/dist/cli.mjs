#!/usr/bin/env node
import { a as figFileToRestLikeDocument, c as figBytesToGridaDocument, d as grida, i as exportSettingToRenderOptions, l as restJsonToGridaDocument, n as FigmaRenderer, r as collectExportsFromDocument, s as fig2grida, t as FigmaDocument, u as iofigma } from "./lib-66MnzYX9.mjs";
import { createReadStream, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
import { program } from "commander";
//#region ../../node_modules/.pnpm/@grida+fonts@0.0.0/node_modules/@grida/fonts/dist/chunk-WQYZ3GYH.mjs
var Typr;
((Typr2) => {
	function findTable(data, tab, foff) {
		const bin = Typr2.B;
		const numTables = bin.readUshort(data, foff + 4);
		let offset = foff + 12;
		for (let i = 0; i < numTables; i++) {
			const tag = bin.readASCII(data, offset, 4);
			bin.readUint(data, offset + 4);
			const toffset = bin.readUint(data, offset + 8);
			const length = bin.readUint(data, offset + 12);
			if (tag == tab) return [toffset, length];
			offset += 16;
		}
		return null;
	}
	Typr2.findTable = findTable;
	function parse(buff) {
		const bin = Typr2.B;
		const readFont = function(data2, idx, offset, tmap2) {
			const T2 = Typr2.T;
			const prsr = {
				cmap: T2.cmap,
				head: T2.head,
				hhea: T2.hhea,
				maxp: T2.maxp,
				hmtx: T2.hmtx,
				name: T2.name,
				"OS/2": T2.OS2,
				post: T2.post,
				loca: T2.loca,
				kern: T2.kern,
				glyf: T2.glyf,
				"CFF ": T2.CFF,
				GSUB: T2.GSUB,
				CBLC: T2.CBLC,
				CBDT: T2.CBDT,
				"SVG ": T2.SVG,
				COLR: T2.colr,
				CPAL: T2.cpal,
				sbix: T2.sbix,
				fvar: T2.fvar,
				gvar: T2.gvar,
				avar: T2.avar,
				STAT: T2.STAT,
				HVAR: T2.HVAR
			};
			const obj = {
				_data: data2,
				_index: idx,
				_offset: offset
			};
			for (const t in prsr) {
				const tab = Typr2.findTable(data2, t, offset);
				if (tab) {
					const off = tab[0];
					let tobj = tmap2[off];
					if (tobj == null) tobj = prsr[t].parseTab(data2, off, tab[1], obj);
					obj[t] = tmap2[off] = tobj;
				}
			}
			return obj;
		};
		function woffToOtf(data2) {
			const numTables = bin.readUshort(data2, 12);
			const totalSize = bin.readUint(data2, 16);
			const otf = new Uint8Array(totalSize);
			let toff = 12 + numTables * 16;
			bin.writeASCII(otf, 0, "OTTO");
			bin.writeUshort(otf, 4, numTables);
			let off = 44;
			for (let i = 0; i < numTables; i++) {
				const tag2 = bin.readASCII(data2, off, 4);
				const tof = bin.readUint(data2, off + 4);
				const cLe = bin.readUint(data2, off + 8);
				const oLe = bin.readUint(data2, off + 12);
				off += 20;
				let tab = data2.slice(tof, tof + cLe);
				if (cLe != oLe) console.warn("pako inflate not available, using original data");
				const to = 12 + i * 16;
				bin.writeASCII(otf, to, tag2);
				bin.writeUint(otf, to + 8, toff);
				bin.writeUint(otf, to + 12, oLe);
				otf.set(tab, toff);
				toff += oLe;
			}
			return otf;
		}
		let data = buff instanceof Uint8Array ? buff : new Uint8Array(buff);
		if (data[0] == 119) data = woffToOtf(data);
		const tmap = {};
		if (bin.readASCII(data, 0, 4) == "ttcf") {
			let offset = 4;
			bin.readUshort(data, offset);
			offset += 2;
			bin.readUshort(data, offset);
			offset += 2;
			const numF = bin.readUint(data, offset);
			offset += 4;
			const fnts = [];
			for (let i = 0; i < numF; i++) {
				const foff = bin.readUint(data, offset);
				offset += 4;
				fnts.push(readFont(data, i, foff, tmap));
			}
			return fnts;
		}
		const fnt = readFont(data, 0, 0, tmap);
		const fvar = fnt["fvar"];
		if (fvar && fvar[1] && Array.isArray(fvar[1])) {
			const out = [fnt];
			for (let i = 0; i < fvar[1].length; i++) {
				const fv = fvar[1][i];
				const obj = {
					_data: fnt._data,
					_index: i,
					_offset: fnt._offset
				};
				out.push(obj);
				for (const p in fnt) obj[p] = fnt[p];
				const name = obj["name"] = JSON.parse(JSON.stringify(obj["name"]));
				name["fontSubfamily"] = fv[0];
			}
			return out;
		}
		return [fnt];
	}
	Typr2.parse = parse;
	((B2) => {
		function readFixed(data, offset) {
			return Typr2.B.readInt(data, offset) / 65536;
		}
		B2.readFixed = readFixed;
		function readF2dot14(data, offset) {
			return Typr2.B.readShort(data, offset) / 16384;
		}
		B2.readF2dot14 = readF2dot14;
		function readInt(buff, offset) {
			const a = Typr2.B.t.uint8;
			a[0] = buff[offset + 3];
			a[1] = buff[offset + 2];
			a[2] = buff[offset + 1];
			a[3] = buff[offset];
			return Typr2.B.t.int32[0];
		}
		B2.readInt = readInt;
		function readInt8(buff, offset) {
			const a = Typr2.B.t.uint8;
			a[0] = buff[offset];
			return Typr2.B.t.int8[0];
		}
		B2.readInt8 = readInt8;
		function readShort(buff, offset) {
			const a = Typr2.B.t.uint16;
			a[0] = buff[offset] << 8 | buff[offset + 1];
			return Typr2.B.t.int16[0];
		}
		B2.readShort = readShort;
		function readUshort(buff, offset) {
			return buff[offset] << 8 | buff[offset + 1];
		}
		B2.readUshort = readUshort;
		function writeUshort(buff, offset, value) {
			buff[offset] = value >> 8 & 255;
			buff[offset + 1] = value & 255;
		}
		B2.writeUshort = writeUshort;
		function readUshorts(buff, offset, length) {
			const arr = [];
			for (let i = 0; i < length; i++) {
				const v = Typr2.B.readUshort(buff, offset + i * 2);
				arr.push(v);
			}
			return arr;
		}
		B2.readUshorts = readUshorts;
		function readUint(buff, offset) {
			const a = Typr2.B.t.uint8;
			a[3] = buff[offset];
			a[2] = buff[offset + 1];
			a[1] = buff[offset + 2];
			a[0] = buff[offset + 3];
			return Typr2.B.t.uint32[0];
		}
		B2.readUint = readUint;
		function writeUint(buff, offset, value) {
			buff[offset] = value >> 24 & 255;
			buff[offset + 1] = value >> 16 & 255;
			buff[offset + 2] = value >> 8 & 255;
			buff[offset + 3] = value >> 0 & 255;
		}
		B2.writeUint = writeUint;
		function readUint64(buff, offset) {
			return Typr2.B.readUint(buff, offset) * 4294967296 + Typr2.B.readUint(buff, offset + 4);
		}
		B2.readUint64 = readUint64;
		function readASCII(buff, offset, length) {
			let s = "";
			for (let i = 0; i < length; i++) s += String.fromCharCode(buff[offset + i]);
			return s;
		}
		B2.readASCII = readASCII;
		function writeASCII(buff, offset, str) {
			for (let i = 0; i < str.length; i++) buff[offset + i] = str.charCodeAt(i);
		}
		B2.writeASCII = writeASCII;
		function readUnicode(buff, offset, length) {
			let s = "";
			for (let i = 0; i < length; i++) {
				const c = buff[offset++] << 8 | buff[offset++];
				s += String.fromCharCode(c);
			}
			return s;
		}
		B2.readUnicode = readUnicode;
		B2._tdec = typeof TextDecoder !== "undefined" ? new TextDecoder() : null;
		function readUTF8(buff, offset, length) {
			const tdec = Typr2.B._tdec;
			if (tdec && offset == 0 && length == buff.length) return tdec.decode(buff);
			return Typr2.B.readASCII(buff, offset, length);
		}
		B2.readUTF8 = readUTF8;
		function readBytes(buff, offset, length) {
			const arr = [];
			for (let i = 0; i < length; i++) arr.push(buff[offset + i]);
			return arr;
		}
		B2.readBytes = readBytes;
		function readASCIIArray(buff, offset, length) {
			const s = [];
			for (let i = 0; i < length; i++) s.push(String.fromCharCode(buff[offset + i]));
			return s;
		}
		B2.readASCIIArray = readASCIIArray;
		B2.t = (function() {
			const ab = /* @__PURE__ */ new ArrayBuffer(8);
			return {
				buff: ab,
				int8: new Int8Array(ab),
				uint8: new Uint8Array(ab),
				int16: new Int16Array(ab),
				uint16: new Uint16Array(ab),
				int32: new Int32Array(ab),
				uint32: new Uint32Array(ab)
			};
		})();
	})(Typr2.B || (Typr2.B = {}));
	((T2) => {
		T2.CFF = {
			parseTab: function(data, offset, length) {
				const bin = Typr2.B;
				const CFF2 = Typr2.T.CFF;
				data = new Uint8Array(data.buffer, offset, length);
				offset = 0;
				data[offset];
				offset++;
				data[offset];
				offset++;
				data[offset];
				offset++;
				data[offset];
				offset++;
				const ninds = [];
				offset = CFF2.readIndex(data, offset, ninds);
				const names = [];
				for (let i = 0; i < ninds.length - 1; i++) names.push(bin.readASCII(data, offset + ninds[i], ninds[i + 1] - ninds[i]));
				offset += ninds[ninds.length - 1];
				const tdinds = [];
				offset = CFF2.readIndex(data, offset, tdinds);
				const topDicts = [];
				for (let i = 0; i < tdinds.length - 1; i++) topDicts.push(CFF2.readDict(data, offset + tdinds[i], offset + tdinds[i + 1]));
				offset += tdinds[tdinds.length - 1];
				const topdict = topDicts[0];
				const sinds = [];
				offset = CFF2.readIndex(data, offset, sinds);
				const strings = [];
				for (let i = 0; i < sinds.length - 1; i++) strings.push(bin.readASCII(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
				offset += sinds[sinds.length - 1];
				CFF2.readSubrs(data, offset, topdict);
				if (topdict["CharStrings"]) topdict["CharStrings"] = CFF2.readBytes(data, topdict["CharStrings"]);
				if (topdict["ROS"]) {
					offset = topdict["FDArray"];
					const fdind = [];
					offset = CFF2.readIndex(data, offset, fdind);
					topdict["FDArray"] = [];
					for (let i = 0; i < fdind.length - 1; i++) {
						const dict = CFF2.readDict(data, offset + fdind[i], offset + fdind[i + 1]);
						CFF2._readFDict(data, dict, strings);
						topdict["FDArray"].push(dict);
					}
					offset += fdind[fdind.length - 1];
					offset = topdict["FDSelect"];
					topdict["FDSelect"] = [];
					const fmt = data[offset];
					offset++;
					if (fmt == 3) {
						const rns = bin.readUshort(data, offset);
						offset += 2;
						for (let i = 0; i < rns + 1; i++) {
							topdict["FDSelect"].push(bin.readUshort(data, offset), data[offset + 2]);
							offset += 3;
						}
					} else throw new Error(`Unknown format: ${fmt}`);
				}
				if (topdict["charset"] && topdict["CharStrings"]) topdict["charset"] = CFF2.readCharset(data, topdict["charset"], topdict["CharStrings"].length);
				CFF2._readFDict(data, topdict, strings);
				return topdict;
			},
			_readFDict: function(data, dict, ss) {
				const CFF2 = Typr2.T.CFF;
				let offset;
				if (dict["Private"]) {
					offset = dict["Private"][1];
					dict["Private"] = CFF2.readDict(data, offset, offset + dict["Private"][0]);
					if (dict["Private"]["Subrs"]) CFF2.readSubrs(data, offset + dict["Private"]["Subrs"], dict["Private"]);
				}
				for (const p in dict) if ([
					"FamilyName",
					"FontName",
					"FullName",
					"Notice",
					"version",
					"Copyright"
				].indexOf(p) != -1) dict[p] = ss[dict[p] - 426 + 35];
			},
			readSubrs: function(data, offset, obj) {
				obj["Subrs"] = Typr2.T.CFF.readBytes(data, offset);
				let bias;
				const nSubrs = obj["Subrs"].length + 1;
				if (nSubrs < 1240) bias = 107;
				else if (nSubrs < 33900) bias = 1131;
				else bias = 32768;
				obj["Bias"] = bias;
			},
			readBytes: function(data, offset) {
				Typr2.B;
				const arr = [];
				offset = Typr2.T.CFF.readIndex(data, offset, arr);
				const subrs = [];
				const arl = arr.length - 1;
				const no = data.byteOffset + offset;
				for (let i = 0; i < arl; i++) {
					const ari = arr[i];
					subrs.push(new Uint8Array(data.buffer, no + ari, arr[i + 1] - ari));
				}
				return subrs;
			},
			tableSE: [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17,
				18,
				19,
				20,
				21,
				22,
				23,
				24,
				25,
				26,
				27,
				28,
				29,
				30,
				31,
				32,
				33,
				34,
				35,
				36,
				37,
				38,
				39,
				40,
				41,
				42,
				43,
				44,
				45,
				46,
				47,
				48,
				49,
				50,
				51,
				52,
				53,
				54,
				55,
				56,
				57,
				58,
				59,
				60,
				61,
				62,
				63,
				64,
				65,
				66,
				67,
				68,
				69,
				70,
				71,
				72,
				73,
				74,
				75,
				76,
				77,
				78,
				79,
				80,
				81,
				82,
				83,
				84,
				85,
				86,
				87,
				88,
				89,
				90,
				91,
				92,
				93,
				94,
				95,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				96,
				97,
				98,
				99,
				100,
				101,
				102,
				103,
				104,
				105,
				106,
				107,
				108,
				109,
				110,
				0,
				111,
				112,
				113,
				114,
				0,
				115,
				116,
				117,
				118,
				119,
				120,
				121,
				122,
				0,
				123,
				0,
				124,
				125,
				126,
				127,
				128,
				129,
				130,
				131,
				0,
				132,
				133,
				0,
				134,
				135,
				136,
				137,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				138,
				0,
				139,
				0,
				0,
				0,
				0,
				140,
				141,
				142,
				143,
				0,
				0,
				0,
				0,
				0,
				144,
				0,
				0,
				0,
				145,
				0,
				0,
				146,
				147,
				148,
				149,
				0,
				0,
				0,
				0
			],
			glyphByUnicode: function(cff, code) {
				if (!cff["charset"]) return -1;
				for (let i = 0; i < cff["charset"].length; i++) if (cff["charset"][i] == code) return i;
				return -1;
			},
			glyphBySE: function(cff, charcode) {
				if (charcode < 0 || charcode > 255) return -1;
				return Typr2.T.CFF.glyphByUnicode(cff, Typr2.T.CFF.tableSE[charcode]);
			},
			readCharset: function(data, offset, num) {
				const bin = Typr2.B;
				const charset = [0];
				const format = data[offset];
				offset++;
				if (format == 0) for (let i = 0; i < num; i++) {
					const first = bin.readUshort(data, offset);
					offset += 2;
					charset.push(first);
				}
				else if (format == 1 || format == 2) while (charset.length < num) {
					let first = bin.readUshort(data, offset);
					offset += 2;
					let nLeft = 0;
					if (format == 1) {
						nLeft = data[offset];
						offset++;
					} else {
						nLeft = bin.readUshort(data, offset);
						offset += 2;
					}
					for (let i = 0; i <= nLeft; i++) {
						charset.push(first);
						first++;
					}
				}
				else throw new Error(`Unknown format: ${format}`);
				return charset;
			},
			readIndex: function(data, offset, inds) {
				const bin = Typr2.B;
				const count = bin.readUshort(data, offset) + 1;
				offset += 2;
				const offsize = data[offset];
				offset++;
				if (offsize == 1) for (let i = 0; i < count; i++) inds.push(data[offset + i]);
				else if (offsize == 2) for (let i = 0; i < count; i++) inds.push(bin.readUshort(data, offset + i * 2));
				else if (offsize == 3) for (let i = 0; i < count; i++) inds.push(bin.readUint(data, offset + i * 3 - 1) & 16777215);
				else if (offsize == 4) for (let i = 0; i < count; i++) inds.push(bin.readUint(data, offset + i * 4));
				else if (count != 1) throw new Error(`Unsupported offset size: ${offsize}, count: ${count}`);
				offset += count * offsize;
				return offset - 1;
			},
			getCharString: function(data, offset, o) {
				const bin = Typr2.B;
				const b0 = data[offset];
				const b1 = data[offset + 1];
				data[offset + 2];
				data[offset + 3];
				data[offset + 4];
				let vs = 1;
				let op = null;
				let val = null;
				if (b0 <= 20) {
					op = b0;
					vs = 1;
				}
				if (b0 == 12) {
					op = b0 * 100 + b1;
					vs = 2;
				}
				if (21 <= b0 && b0 <= 27) {
					op = b0;
					vs = 1;
				}
				if (b0 == 28) {
					val = bin.readShort(data, offset + 1);
					vs = 3;
				}
				if (29 <= b0 && b0 <= 31) {
					op = b0;
					vs = 1;
				}
				if (32 <= b0 && b0 <= 246) {
					val = b0 - 139;
					vs = 1;
				}
				if (247 <= b0 && b0 <= 250) {
					val = (b0 - 247) * 256 + b1 + 108;
					vs = 2;
				}
				if (251 <= b0 && b0 <= 254) {
					val = -(b0 - 251) * 256 - b1 - 108;
					vs = 2;
				}
				if (b0 == 255) {
					val = bin.readInt(data, offset + 1) / 65535;
					vs = 5;
				}
				o.val = val != null ? val : "o" + op;
				o.size = vs;
			},
			readCharString: function(data, offset, length) {
				const end = offset + length;
				const bin = Typr2.B;
				const arr = [];
				while (offset < end) {
					const b0 = data[offset];
					const b1 = data[offset + 1];
					data[offset + 2];
					data[offset + 3];
					data[offset + 4];
					let vs = 1;
					let op = null;
					let val = null;
					if (b0 <= 20) {
						op = b0;
						vs = 1;
					}
					if (b0 == 12) {
						op = b0 * 100 + b1;
						vs = 2;
					}
					if (b0 == 19 || b0 == 20) {
						op = b0;
						vs = 2;
					}
					if (21 <= b0 && b0 <= 27) {
						op = b0;
						vs = 1;
					}
					if (b0 == 28) {
						val = bin.readShort(data, offset + 1);
						vs = 3;
					}
					if (29 <= b0 && b0 <= 31) {
						op = b0;
						vs = 1;
					}
					if (32 <= b0 && b0 <= 246) {
						val = b0 - 139;
						vs = 1;
					}
					if (247 <= b0 && b0 <= 250) {
						val = (b0 - 247) * 256 + b1 + 108;
						vs = 2;
					}
					if (251 <= b0 && b0 <= 254) {
						val = -(b0 - 251) * 256 - b1 - 108;
						vs = 2;
					}
					if (b0 == 255) {
						val = bin.readInt(data, offset + 1) / 65535;
						vs = 5;
					}
					arr.push(val != null ? val : "o" + op);
					offset += vs;
				}
				return arr;
			},
			readDict: function(data, offset, end) {
				const bin = Typr2.B;
				const dict = {};
				const carr = [];
				while (offset < end) {
					const b0 = data[offset];
					const b1 = data[offset + 1];
					data[offset + 2];
					data[offset + 3];
					data[offset + 4];
					let vs = 1;
					let key = null;
					let val = null;
					if (b0 == 28) {
						val = bin.readShort(data, offset + 1);
						vs = 3;
					}
					if (b0 == 29) {
						val = bin.readInt(data, offset + 1);
						vs = 5;
					}
					if (32 <= b0 && b0 <= 246) {
						val = b0 - 139;
						vs = 1;
					}
					if (247 <= b0 && b0 <= 250) {
						val = (b0 - 247) * 256 + b1 + 108;
						vs = 2;
					}
					if (251 <= b0 && b0 <= 254) {
						val = -(b0 - 251) * 256 - b1 - 108;
						vs = 2;
					}
					if (b0 == 255) {
						val = bin.readInt(data, offset + 1) / 65535;
						vs = 5;
						throw new Error("Unknown number");
					}
					if (b0 == 30) {
						const nibs = [];
						vs = 1;
						while (true) {
							const b = data[offset + vs];
							vs++;
							const nib0 = b >> 4;
							const nib1 = b & 15;
							if (nib0 != 15) nibs.push(nib0);
							if (nib1 != 15) nibs.push(nib1);
							if (nib1 == 15) break;
						}
						let s = "";
						const chars = [
							0,
							1,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9,
							".",
							"e",
							"e-",
							"reserved",
							"-",
							"endOfNumber"
						];
						for (let i = 0; i < nibs.length; i++) s += chars[nibs[i]];
						val = parseFloat(s);
					}
					if (b0 <= 21) {
						key = [
							"version",
							"Notice",
							"FullName",
							"FamilyName",
							"Weight",
							"FontBBox",
							"BlueValues",
							"OtherBlues",
							"FamilyBlues",
							"FamilyOtherBlues",
							"StdHW",
							"StdVW",
							"escape",
							"UniqueID",
							"XUID",
							"charset",
							"Encoding",
							"CharStrings",
							"Private",
							"Subrs",
							"defaultWidthX",
							"nominalWidthX"
						][b0];
						vs = 1;
						if (b0 == 12) {
							key = [
								"Copyright",
								"isFixedPitch",
								"ItalicAngle",
								"UnderlinePosition",
								"UnderlineThickness",
								"PaintType",
								"CharstringType",
								"FontMatrix",
								"StrokeWidth",
								"BlueScale",
								"BlueShift",
								"BlueFuzz",
								"StemSnapH",
								"StemSnapV",
								"ForceBold",
								"",
								"",
								"LanguageGroup",
								"ExpansionFactor",
								"initialRandomSeed",
								"SyntheticBase",
								"PostScript",
								"BaseFontName",
								"BaseFontBlend",
								"",
								"",
								"",
								"",
								"",
								"",
								"ROS",
								"CIDFontVersion",
								"CIDFontRevision",
								"CIDFontType",
								"CIDCount",
								"UIDBase",
								"FDArray",
								"FDSelect",
								"FontName"
							][b1];
							vs = 2;
						}
					}
					if (key != null) {
						dict[key] = carr.length == 1 ? carr[0] : carr;
						carr.length = 0;
					} else carr.push(val);
					offset += vs;
				}
				return dict;
			}
		};
		T2.cmap = {
			parseTab: function(data, offset, length) {
				const obj = {
					tables: [],
					ids: {},
					off: offset
				};
				data = new Uint8Array(data.buffer, offset, length);
				offset = 0;
				const bin = Typr2.B;
				const rU = bin.readUshort;
				const cmap2 = Typr2.T.cmap;
				rU(data, offset);
				offset += 2;
				const numTables = rU(data, offset);
				offset += 2;
				const offs = [];
				for (let i = 0; i < numTables; i++) {
					const platformID = rU(data, offset);
					offset += 2;
					const encodingID = rU(data, offset);
					offset += 2;
					const noffset = bin.readUint(data, offset);
					offset += 4;
					const id = "p" + platformID + "e" + encodingID;
					const tind = offs.indexOf(noffset);
					if (tind == -1) {
						obj.tables.length;
						const subt = { format: 0 };
						offs.push(noffset);
						const format = subt.format = rU(data, noffset);
						if (format == 0) Object.assign(subt, cmap2.parse0(data, noffset, subt));
						else if (format == 4) Object.assign(subt, cmap2.parse4(data, noffset, subt));
						else if (format == 6) Object.assign(subt, cmap2.parse6(data, noffset, subt));
						else if (format == 12) Object.assign(subt, cmap2.parse12(data, noffset, subt));
						obj.tables.push(subt);
					}
					if (obj.ids[id] != null) console.log("multiple tables for one platform+encoding: " + id);
					obj.ids[id] = tind;
				}
				return obj;
			},
			parse0: function(data, offset, obj) {
				const bin = Typr2.B;
				offset += 2;
				const len = bin.readUshort(data, offset);
				offset += 2;
				bin.readUshort(data, offset);
				offset += 2;
				obj.map = [];
				for (let i = 0; i < len - 6; i++) obj.map.push(data[offset + i]);
				return obj;
			},
			parse4: function(data, offset, obj) {
				const bin = Typr2.B;
				const rU = bin.readUshort;
				const rUs = bin.readUshorts;
				const offset0 = offset;
				offset += 2;
				const length = rU(data, offset);
				offset += 2;
				rU(data, offset);
				offset += 2;
				const segCountX2 = rU(data, offset);
				offset += 2;
				const segCount = segCountX2 >>> 1;
				obj.searchRange = rU(data, offset);
				offset += 2;
				obj.entrySelector = rU(data, offset);
				offset += 2;
				obj.rangeShift = rU(data, offset);
				offset += 2;
				obj.endCount = rUs(data, offset, segCount);
				offset += segCount * 2;
				offset += 2;
				obj.startCount = rUs(data, offset, segCount);
				offset += segCount * 2;
				obj.idDelta = [];
				for (let i = 0; i < segCount; i++) {
					obj.idDelta.push(bin.readShort(data, offset));
					offset += 2;
				}
				obj.idRangeOffset = rUs(data, offset, segCount);
				offset += segCount * 2;
				obj.glyphIdArray = rUs(data, offset, offset0 + length - offset >> 1);
				return obj;
			},
			parse6: function(data, offset, obj) {
				const bin = Typr2.B;
				offset += 2;
				bin.readUshort(data, offset);
				offset += 2;
				bin.readUshort(data, offset);
				offset += 2;
				obj.firstCode = bin.readUshort(data, offset);
				offset += 2;
				const entryCount = bin.readUshort(data, offset);
				offset += 2;
				obj.glyphIdArray = [];
				for (let i = 0; i < entryCount; i++) {
					obj.glyphIdArray.push(bin.readUshort(data, offset));
					offset += 2;
				}
				return obj;
			},
			parse12: function(data, offset, obj) {
				const rU = Typr2.B.readUint;
				offset += 4;
				rU(data, offset);
				offset += 4;
				rU(data, offset);
				offset += 4;
				const nGroups = rU(data, offset) * 3;
				offset += 4;
				const gps = obj.groups = new Uint32Array(nGroups);
				for (let i = 0; i < nGroups; i += 3) {
					gps[i] = rU(data, offset + (i << 2));
					gps[i + 1] = rU(data, offset + (i << 2) + 4);
					gps[i + 2] = rU(data, offset + (i << 2) + 8);
				}
				return obj;
			}
		};
		T2.head = { parseTab: function(data, offset, length) {
			const bin = Typr2.B;
			const obj = {};
			bin.readFixed(data, offset);
			offset += 4;
			obj.fontRevision = bin.readFixed(data, offset);
			offset += 4;
			bin.readUint(data, offset);
			offset += 4;
			bin.readUint(data, offset);
			offset += 4;
			obj.flags = bin.readUshort(data, offset);
			offset += 2;
			obj.unitsPerEm = bin.readUshort(data, offset);
			offset += 2;
			obj.created = bin.readUint64(data, offset);
			offset += 8;
			obj.modified = bin.readUint64(data, offset);
			offset += 8;
			obj.xMin = bin.readShort(data, offset);
			offset += 2;
			obj.yMin = bin.readShort(data, offset);
			offset += 2;
			obj.xMax = bin.readShort(data, offset);
			offset += 2;
			obj.yMax = bin.readShort(data, offset);
			offset += 2;
			obj.macStyle = bin.readUshort(data, offset);
			offset += 2;
			obj.lowestRecPPEM = bin.readUshort(data, offset);
			offset += 2;
			obj.fontDirectionHint = bin.readShort(data, offset);
			offset += 2;
			obj.indexToLocFormat = bin.readShort(data, offset);
			offset += 2;
			obj.glyphDataFormat = bin.readShort(data, offset);
			offset += 2;
			return obj;
		} };
		T2.hhea = { parseTab: function(data, offset, length) {
			const bin = Typr2.B;
			const obj = {};
			bin.readFixed(data, offset);
			offset += 4;
			const keys = [
				"ascender",
				"descender",
				"lineGap",
				"advanceWidthMax",
				"minLeftSideBearing",
				"minRightSideBearing",
				"xMaxExtent",
				"caretSlopeRise",
				"caretSlopeRun",
				"caretOffset",
				"res0",
				"res1",
				"res2",
				"res3",
				"metricDataFormat",
				"numberOfHMetrics"
			];
			for (let i = 0; i < keys.length; i++) {
				const key = keys[i];
				obj[key] = (key == "advanceWidthMax" || key == "numberOfHMetrics" ? bin.readUshort : bin.readShort)(data, offset + i * 2);
			}
			return obj;
		} };
		T2.maxp = { parseTab: function(data, offset, length) {
			const bin = Typr2.B;
			const obj = {};
			bin.readUint(data, offset);
			offset += 4;
			obj.numGlyphs = bin.readUshort(data, offset);
			offset += 2;
			return obj;
		} };
		T2.hmtx = { parseTab: function(data, offset, length, font) {
			const bin = Typr2.B;
			const aWidth = [];
			const lsBearing = [];
			const nG = font["maxp"]?.["numGlyphs"] || 0;
			const nH = font["hhea"]?.["numberOfHMetrics"] || 0;
			let aw = 0, lsb = 0, i = 0;
			while (i < nH) {
				aw = bin.readUshort(data, offset + (i << 2));
				lsb = bin.readShort(data, offset + (i << 2) + 2);
				aWidth.push(aw);
				lsBearing.push(lsb);
				i++;
			}
			while (i < nG) {
				aWidth.push(aw);
				lsBearing.push(lsb);
				i++;
			}
			return {
				aWidth,
				lsBearing
			};
		} };
		T2.loca = { parseTab: function(data, offset, length, font) {
			const bin = Typr2.B;
			const obj = [];
			const ver = font["head"]?.["indexToLocFormat"] || 0;
			const len = (font["maxp"]?.["numGlyphs"] || 0) + 1;
			if (ver == 0) for (let i = 0; i < len; i++) obj.push(bin.readUshort(data, offset + (i << 1)) << 1);
			if (ver == 1) for (let i = 0; i < len; i++) obj.push(bin.readUint(data, offset + (i << 2)));
			return obj;
		} };
		T2.glyf = {
			parseTab: function(data, offset, length, font) {
				const obj = [];
				const ng = font["maxp"]?.["numGlyphs"] || 0;
				for (let g = 0; g < ng; g++) obj.push(null);
				return obj;
			},
			_parseGlyf: function(font, g) {
				const bin = Typr2.B;
				const data = font["_data"];
				const loca2 = font["loca"];
				if (!loca2) return null;
				if (loca2[g] == loca2[g + 1]) return null;
				const tableInfo = Typr2.findTable(data, "glyf", font["_offset"]);
				if (!tableInfo) return null;
				const offset = tableInfo[0] + loca2[g];
				const gl = {};
				gl.noc = bin.readShort(data, offset);
				let currentOffset = offset + 2;
				gl.xMin = bin.readShort(data, currentOffset);
				currentOffset += 2;
				gl.yMin = bin.readShort(data, currentOffset);
				currentOffset += 2;
				gl.xMax = bin.readShort(data, currentOffset);
				currentOffset += 2;
				gl.yMax = bin.readShort(data, currentOffset);
				currentOffset += 2;
				if (gl.xMin >= gl.xMax || gl.yMin >= gl.yMax) return null;
				if (gl.noc > 0) {
					gl.endPts = [];
					for (let i = 0; i < gl.noc; i++) {
						gl.endPts.push(bin.readUshort(data, currentOffset));
						currentOffset += 2;
					}
					const instructionLength = bin.readUshort(data, currentOffset);
					currentOffset += 2;
					if (data.length - currentOffset < instructionLength) return null;
					gl.instructions = bin.readBytes(data, currentOffset, instructionLength);
					currentOffset += instructionLength;
					const crdnum = gl.endPts[gl.noc - 1] + 1;
					gl.flags = [];
					for (let i = 0; i < crdnum; i++) {
						const flag = data[currentOffset];
						currentOffset++;
						gl.flags.push(flag);
						if ((flag & 8) != 0) {
							const rep = data[currentOffset];
							currentOffset++;
							for (let j = 0; j < rep; j++) {
								gl.flags.push(flag);
								i++;
							}
						}
					}
					gl.xs = [];
					for (let i = 0; i < crdnum; i++) {
						const i8 = (gl.flags[i] & 2) != 0;
						const same = (gl.flags[i] & 16) != 0;
						if (i8) {
							gl.xs.push(same ? data[currentOffset] : -data[currentOffset]);
							currentOffset++;
						} else if (same) gl.xs.push(0);
						else {
							gl.xs.push(bin.readShort(data, currentOffset));
							currentOffset += 2;
						}
					}
					gl.ys = [];
					for (let i = 0; i < crdnum; i++) {
						const i8 = (gl.flags[i] & 4) != 0;
						const same = (gl.flags[i] & 32) != 0;
						if (i8) {
							gl.ys.push(same ? data[currentOffset] : -data[currentOffset]);
							currentOffset++;
						} else if (same) gl.ys.push(0);
						else {
							gl.ys.push(bin.readShort(data, currentOffset));
							currentOffset += 2;
						}
					}
					let x = 0;
					let y = 0;
					for (let i = 0; i < crdnum; i++) {
						x += gl.xs[i];
						y += gl.ys[i];
						gl.xs[i] = x;
						gl.ys[i] = y;
					}
				} else {
					const ARG_1_AND_2_ARE_WORDS = 1;
					const ARGS_ARE_XY_VALUES = 2;
					const WE_HAVE_A_SCALE = 8;
					const MORE_COMPONENTS = 32;
					const WE_HAVE_AN_X_AND_Y_SCALE = 64;
					const WE_HAVE_A_TWO_BY_TWO = 128;
					const WE_HAVE_INSTRUCTIONS = 256;
					gl.parts = [];
					let flags;
					do {
						flags = bin.readUshort(data, currentOffset);
						currentOffset += 2;
						const part = {
							m: {
								a: 1,
								b: 0,
								c: 0,
								d: 1,
								tx: 0,
								ty: 0
							},
							p1: -1,
							p2: -1
						};
						gl.parts.push(part);
						part.glyphIndex = bin.readUshort(data, currentOffset);
						currentOffset += 2;
						let arg1, arg2;
						if (flags & ARG_1_AND_2_ARE_WORDS) {
							arg1 = bin.readShort(data, currentOffset);
							currentOffset += 2;
							arg2 = bin.readShort(data, currentOffset);
							currentOffset += 2;
						} else {
							arg1 = bin.readInt8(data, currentOffset);
							currentOffset++;
							arg2 = bin.readInt8(data, currentOffset);
							currentOffset++;
						}
						if (flags & ARGS_ARE_XY_VALUES) {
							part.m.tx = arg1;
							part.m.ty = arg2;
						} else {
							part.p1 = arg1;
							part.p2 = arg2;
						}
						if (flags & WE_HAVE_A_SCALE) {
							part.m.a = part.m.d = bin.readF2dot14(data, currentOffset);
							currentOffset += 2;
						} else if (flags & WE_HAVE_AN_X_AND_Y_SCALE) {
							part.m.a = bin.readF2dot14(data, currentOffset);
							currentOffset += 2;
							part.m.d = bin.readF2dot14(data, currentOffset);
							currentOffset += 2;
						} else if (flags & WE_HAVE_A_TWO_BY_TWO) {
							part.m.a = bin.readF2dot14(data, currentOffset);
							currentOffset += 2;
							part.m.b = bin.readF2dot14(data, currentOffset);
							currentOffset += 2;
							part.m.c = bin.readF2dot14(data, currentOffset);
							currentOffset += 2;
							part.m.d = bin.readF2dot14(data, currentOffset);
							currentOffset += 2;
						}
					} while (flags & MORE_COMPONENTS);
					if (flags & WE_HAVE_INSTRUCTIONS) {
						const numInstr = bin.readUshort(data, currentOffset);
						currentOffset += 2;
						gl.instr = [];
						for (let i = 0; i < numInstr; i++) {
							gl.instr.push(data[currentOffset]);
							currentOffset++;
						}
					}
				}
				return gl;
			}
		};
		T2.name = {
			parseTab: function(data, offset, length) {
				const bin = Typr2.B;
				const obj = {};
				bin.readUshort(data, offset);
				offset += 2;
				const count = bin.readUshort(data, offset);
				offset += 2;
				const stringOffset = bin.readUshort(data, offset);
				offset += 2;
				const ooo = offset - 6 + stringOffset;
				const names = [
					"copyright",
					"fontFamily",
					"fontSubfamily",
					"ID",
					"fullName",
					"version",
					"postScriptName",
					"trademark",
					"manufacturer",
					"designer",
					"description",
					"urlVendor",
					"urlDesigner",
					"licence",
					"licenceURL",
					"---",
					"typoFamilyName",
					"typoSubfamilyName",
					"compatibleFull",
					"sampleText",
					"postScriptCID",
					"wwsFamilyName",
					"wwsSubfamilyName",
					"lightPalette",
					"darkPalette"
				];
				const rU = bin.readUshort;
				for (let i = 0; i < count; i++) {
					const platformID = rU(data, offset);
					offset += 2;
					const encodingID = rU(data, offset);
					offset += 2;
					const languageID = rU(data, offset);
					offset += 2;
					const nameID = rU(data, offset);
					offset += 2;
					const slen = rU(data, offset);
					offset += 2;
					const noffset = rU(data, offset);
					offset += 2;
					const soff = ooo + noffset;
					let str;
					if (platformID == 0) str = bin.readUnicode(data, soff, slen / 2);
					else if (platformID == 3 && encodingID == 0) str = bin.readUnicode(data, soff, slen / 2);
					else if (platformID == 1 && encodingID == 25) str = bin.readUnicode(data, soff, slen / 2);
					else if (encodingID == 0) str = bin.readASCII(data, soff, slen);
					else if (encodingID == 1) str = bin.readUnicode(data, soff, slen / 2);
					else if (encodingID == 3) str = bin.readUnicode(data, soff, slen / 2);
					else if (encodingID == 4) str = bin.readUnicode(data, soff, slen / 2);
					else if (encodingID == 5) str = bin.readUnicode(data, soff, slen / 2);
					else if (encodingID == 10) str = bin.readUnicode(data, soff, slen / 2);
					else if (platformID == 1) {
						str = bin.readASCII(data, soff, slen);
						console.log("reading unknown MAC encoding " + encodingID + " as ASCII");
					} else {
						console.log("unknown encoding " + encodingID + ", platformID: " + platformID);
						str = bin.readASCII(data, soff, slen);
					}
					const tid = "p" + platformID + "," + languageID.toString(16);
					if (obj[tid] == null) obj[tid] = {};
					let name2 = names[nameID];
					if (name2 == null) name2 = "_" + nameID;
					obj[tid][name2] = str;
					obj[tid]["_lang"] = languageID;
				}
				const out = Typr2.T.name.selectOne(obj);
				const ff = "fontFamily";
				if (out[ff] == null) {
					for (const p in obj) if (obj[p][ff] != null) out[ff] = obj[p][ff];
				}
				return out;
			},
			selectOne: function(obj) {
				const psn = "postScriptName";
				for (const p in obj) if (obj[p][psn] != null && obj[p]["_lang"] == 1033) return obj[p];
				for (const p in obj) if (obj[p][psn] != null && obj[p]["_lang"] == 0) return obj[p];
				for (const p in obj) if (obj[p][psn] != null && obj[p]["_lang"] == 3084) return obj[p];
				for (const p in obj) if (obj[p][psn] != null) return obj[p];
				let out;
				for (const p in obj) {
					out = obj[p];
					break;
				}
				console.log("returning name table with languageID " + out._lang);
				if (out[psn] == null && out["ID"] != null) out[psn] = out["ID"];
				return out;
			}
		};
		T2.OS2 = {
			parseTab: function(data, offset, length) {
				const ver = Typr2.B.readUshort(data, offset);
				offset += 2;
				const OS22 = Typr2.T.OS2;
				const obj = {};
				if (ver == 0) OS22.version0(data, offset, obj);
				else if (ver == 1) OS22.version1(data, offset, obj);
				else if (ver == 2 || ver == 3 || ver == 4) OS22.version2(data, offset, obj);
				else if (ver == 5) OS22.version5(data, offset, obj);
				else throw new Error("unknown OS/2 table version: " + ver);
				return obj;
			},
			version0: function(data, offset, obj) {
				const bin = Typr2.B;
				obj["xAvgCharWidth"] = bin.readShort(data, offset);
				offset += 2;
				obj["usWeightClass"] = bin.readUshort(data, offset);
				offset += 2;
				obj["usWidthClass"] = bin.readUshort(data, offset);
				offset += 2;
				obj["fsType"] = bin.readUshort(data, offset);
				offset += 2;
				obj["ySubscriptXSize"] = bin.readShort(data, offset);
				offset += 2;
				obj["ySubscriptYSize"] = bin.readShort(data, offset);
				offset += 2;
				obj["ySubscriptXOffset"] = bin.readShort(data, offset);
				offset += 2;
				obj["ySubscriptYOffset"] = bin.readShort(data, offset);
				offset += 2;
				obj["ySuperscriptXSize"] = bin.readShort(data, offset);
				offset += 2;
				obj["ySuperscriptYSize"] = bin.readShort(data, offset);
				offset += 2;
				obj["ySuperscriptXOffset"] = bin.readShort(data, offset);
				offset += 2;
				obj["ySuperscriptYOffset"] = bin.readShort(data, offset);
				offset += 2;
				obj["yStrikeoutSize"] = bin.readShort(data, offset);
				offset += 2;
				obj["yStrikeoutPosition"] = bin.readShort(data, offset);
				offset += 2;
				obj["sFamilyClass"] = bin.readShort(data, offset);
				offset += 2;
				obj["panose"] = bin.readBytes(data, offset, 10);
				offset += 10;
				obj["ulUnicodeRange1"] = bin.readUint(data, offset);
				offset += 4;
				obj["ulUnicodeRange2"] = bin.readUint(data, offset);
				offset += 4;
				obj["ulUnicodeRange3"] = bin.readUint(data, offset);
				offset += 4;
				obj["ulUnicodeRange4"] = bin.readUint(data, offset);
				offset += 4;
				obj["achVendID"] = bin.readASCII(data, offset, 4);
				offset += 4;
				obj["fsSelection"] = bin.readUshort(data, offset);
				offset += 2;
				obj["usFirstCharIndex"] = bin.readUshort(data, offset);
				offset += 2;
				obj["usLastCharIndex"] = bin.readUshort(data, offset);
				offset += 2;
				obj["sTypoAscender"] = bin.readShort(data, offset);
				offset += 2;
				obj["sTypoDescender"] = bin.readShort(data, offset);
				offset += 2;
				obj["sTypoLineGap"] = bin.readShort(data, offset);
				offset += 2;
				obj["usWinAscent"] = bin.readUshort(data, offset);
				offset += 2;
				obj["usWinDescent"] = bin.readUshort(data, offset);
				offset += 2;
				return offset;
			},
			version1: function(data, offset, obj) {
				const bin = Typr2.B;
				offset = Typr2.T.OS2.version0(data, offset, obj);
				obj["ulCodePageRange1"] = bin.readUint(data, offset);
				offset += 4;
				obj["ulCodePageRange2"] = bin.readUint(data, offset);
				offset += 4;
				return offset;
			},
			version2: function(data, offset, obj) {
				const bin = Typr2.B;
				const rU = bin.readUshort;
				offset = Typr2.T.OS2.version1(data, offset, obj);
				obj["sxHeight"] = bin.readShort(data, offset);
				offset += 2;
				obj["sCapHeight"] = bin.readShort(data, offset);
				offset += 2;
				obj["usDefault"] = rU(data, offset);
				offset += 2;
				obj["usBreak"] = rU(data, offset);
				offset += 2;
				obj["usMaxContext"] = rU(data, offset);
				offset += 2;
				return offset;
			},
			version5: function(data, offset, obj) {
				const rU = Typr2.B.readUshort;
				offset = Typr2.T.OS2.version2(data, offset, obj);
				obj["usLowerOpticalPointSize"] = rU(data, offset);
				offset += 2;
				obj["usUpperOpticalPointSize"] = rU(data, offset);
				offset += 2;
				return offset;
			}
		};
		T2.post = { parseTab: function(data, offset, length) {
			const bin = Typr2.B;
			const obj = {};
			obj.version = bin.readFixed(data, offset);
			offset += 4;
			obj.italicAngle = bin.readFixed(data, offset);
			offset += 4;
			obj.underlinePosition = bin.readShort(data, offset);
			offset += 2;
			obj.underlineThickness = bin.readShort(data, offset);
			offset += 2;
			return obj;
		} };
		T2.kern = {
			parseTab: function(data, offset, length, font) {
				const bin = Typr2.B;
				const kern2 = Typr2.T.kern;
				if (bin.readUshort(data, offset) == 1) return kern2.parseV1(data, offset, length, font);
				const nTables = bin.readUshort(data, offset + 2);
				offset += 4;
				const map = {
					glyph1: [],
					rval: []
				};
				for (let i = 0; i < nTables; i++) {
					offset += 2;
					bin.readUshort(data, offset);
					offset += 2;
					const coverage = bin.readUshort(data, offset);
					offset += 2;
					let format = coverage >>> 8;
					format &= 15;
					if (format == 0) offset = kern2.readFormat0(data, offset, map);
				}
				return map;
			},
			parseV1: function(data, offset, length, font) {
				const bin = Typr2.B;
				const kern2 = Typr2.T.kern;
				bin.readFixed(data, offset);
				const nTables = bin.readUint(data, offset + 4);
				offset += 8;
				const map = {
					glyph1: [],
					rval: []
				};
				for (let i = 0; i < nTables; i++) {
					bin.readUint(data, offset);
					offset += 4;
					const coverage = bin.readUshort(data, offset);
					offset += 2;
					bin.readUshort(data, offset);
					offset += 2;
					if ((coverage & 255) == 0) offset = kern2.readFormat0(data, offset, map);
				}
				return map;
			},
			readFormat0: function(data, offset, map) {
				const bin = Typr2.B;
				const rUs = bin.readUshort;
				let pleft = -1;
				const nPairs = rUs(data, offset);
				rUs(data, offset + 2);
				rUs(data, offset + 4);
				rUs(data, offset + 6);
				offset += 8;
				for (let j = 0; j < nPairs; j++) {
					const left = rUs(data, offset);
					offset += 2;
					const right = rUs(data, offset);
					offset += 2;
					const value = bin.readShort(data, offset);
					offset += 2;
					if (left != pleft) {
						map.glyph1.push(left);
						map.rval.push({
							glyph2: [],
							vals: []
						});
					}
					const rval = map.rval[map.rval.length - 1];
					rval.glyph2.push(right);
					rval.vals.push(value);
					pleft = left;
				}
				return offset;
			}
		};
		T2.GSUB = { parseTab: function(data, offset, length, obj) {
			const bin = Typr2.B;
			const rU = bin.readUshort;
			let off = offset;
			rU(data, off);
			off += 2;
			rU(data, off);
			off += 2;
			rU(data, off);
			off += 2;
			const flO = rU(data, off);
			off += 2;
			rU(data, off);
			off += 2;
			const name2 = obj.name || {};
			const flBase = offset + flO;
			let foff = flBase;
			const fcnt = rU(data, foff);
			foff += 2;
			const features = {};
			for (let i = 0; i < fcnt; i++) {
				const tag = bin.readASCII(data, foff, 4);
				foff += 4;
				const fo = rU(data, foff);
				foff += 2;
				const rOff = flBase + fo;
				const pOff = rU(data, rOff);
				const lcnt = rU(data, rOff + 2);
				const lookups = [];
				let lo = rOff + 4;
				for (let j = 0; j < lcnt; j++) {
					lookups.push(rU(data, lo));
					lo += 2;
				}
				const feat = {
					tag,
					lookups
				};
				if (pOff !== 0) {
					const po = rOff + pOff;
					if (/^ss\d\d$/i.test(tag)) feat.uiName = name2["_" + rU(data, po + 2)];
					else if (/^cv\d\d$/i.test(tag)) {
						const ui = rU(data, po + 2);
						const ti = rU(data, po + 4);
						const si = rU(data, po + 6);
						const pcnt = rU(data, po + 8);
						const first = rU(data, po + 10);
						const labels = [];
						for (let k = 0; k < pcnt; k++) {
							const str = name2["_" + (first + k)];
							if (str) labels.push(str);
						}
						feat.uiName = name2["_" + ui];
						feat.tooltip = name2["_" + ti];
						feat.sampleText = name2["_" + si];
						if (labels.length) feat.paramLabels = labels;
					}
				}
				features[tag] = feat;
			}
			return { features };
		} };
		T2.CBLC = { parseTab: function(data, offset, length) {
			const bin = Typr2.B;
			const ooff = offset;
			bin.readUshort(data, offset);
			offset += 2;
			bin.readUshort(data, offset);
			offset += 2;
			const numSizes = bin.readUint(data, offset);
			offset += 4;
			const out = [];
			for (let i = 0; i < numSizes; i++) {
				const off = bin.readUint(data, offset);
				offset += 4;
				bin.readUint(data, offset);
				offset += 4;
				bin.readUint(data, offset);
				offset += 4;
				offset += 4;
				offset += 24;
				bin.readUshort(data, offset);
				offset += 2;
				bin.readUshort(data, offset);
				offset += 2;
				offset += 4;
				let coff = ooff + off;
				for (let j = 0; j < 3; j++) {
					const fgI = bin.readUshort(data, coff);
					coff += 2;
					const lgI = bin.readUshort(data, coff);
					coff += 2;
					const nxt = bin.readUint(data, coff);
					coff += 4;
					const gcnt = lgI - fgI + 1;
					let ioff = ooff + off + nxt;
					const inF = bin.readUshort(data, ioff);
					ioff += 2;
					if (inF != 1) throw new Error(`Invalid format: ${inF}`);
					const imF = bin.readUshort(data, ioff);
					ioff += 2;
					const imgo = bin.readUint(data, ioff);
					ioff += 4;
					const oarr = [];
					for (let gi = 0; gi < gcnt; gi++) {
						const sbitO = bin.readUint(data, ioff + gi * 4);
						oarr.push(imgo + sbitO);
					}
					out.push([
						fgI,
						lgI,
						imF,
						oarr
					]);
				}
			}
			return out;
		} };
		T2.CBDT = { parseTab: function(data, offset, length) {
			return new Uint8Array(data.buffer, data.byteOffset + offset, length);
		} };
		T2.SVG = { parseTab: function(data, offset, length) {
			const bin = Typr2.B;
			const obj = {
				entries: [],
				svgs: []
			};
			const offset0 = offset;
			bin.readUshort(data, offset);
			offset += 2;
			const svgDocIndexOffset = bin.readUint(data, offset);
			offset += 4;
			bin.readUint(data, offset);
			offset += 4;
			offset = svgDocIndexOffset + offset0;
			const numEntries = bin.readUshort(data, offset);
			offset += 2;
			for (let i = 0; i < numEntries; i++) {
				const startGlyphID = bin.readUshort(data, offset);
				offset += 2;
				const endGlyphID = bin.readUshort(data, offset);
				offset += 2;
				const svgDocOffset = bin.readUint(data, offset);
				offset += 4;
				const svgDocLength = bin.readUint(data, offset);
				offset += 4;
				const sbuf = new Uint8Array(data.buffer, offset0 + svgDocOffset + svgDocIndexOffset, svgDocLength);
				const svg = bin.readUTF8(sbuf, 0, sbuf.length);
				for (let f = startGlyphID; f <= endGlyphID; f++) obj.entries[f] = obj.svgs.length;
				obj.svgs.push(svg);
			}
			return obj;
		} };
		T2.colr = { parseTab: function(data, offset, length) {
			const bin = Typr2.B;
			const ooff = offset;
			offset += 2;
			const num = bin.readUshort(data, offset);
			offset += 2;
			const boff = bin.readUint(data, offset);
			offset += 4;
			const loff = bin.readUint(data, offset);
			offset += 4;
			const lnum = bin.readUshort(data, offset);
			offset += 2;
			const base = {};
			let coff = ooff + boff;
			for (let i = 0; i < num; i++) {
				base["g" + bin.readUshort(data, coff)] = [bin.readUshort(data, coff + 2), bin.readUshort(data, coff + 4)];
				coff += 6;
			}
			const lays = [];
			coff = ooff + loff;
			for (let i = 0; i < lnum; i++) {
				lays.push(bin.readUshort(data, coff), bin.readUshort(data, coff + 2));
				coff += 4;
			}
			return [base, lays];
		} };
		T2.cpal = { parseTab: function(data, offset, length) {
			const bin = Typr2.B;
			const ooff = offset;
			const vsn = bin.readUshort(data, offset);
			offset += 2;
			if (vsn == 0) {
				bin.readUshort(data, offset);
				offset += 2;
				bin.readUshort(data, offset);
				offset += 2;
				const tot = bin.readUshort(data, offset);
				offset += 2;
				const fst = bin.readUint(data, offset);
				offset += 4;
				return new Uint8Array(data.buffer, ooff + fst, tot * 4);
			} else throw new Error(`Unknown color palette version: ${vsn}`);
		} };
		T2.sbix = { parseTab: function(data, offset, length, obj) {
			const numGlyphs = obj["maxp"]["numGlyphs"];
			const ooff = offset;
			const bin = Typr2.B;
			const numStrikes = bin.readUint(data, offset + 4);
			const out = [];
			for (let si = numStrikes - 1; si < numStrikes; si++) {
				const off = ooff + bin.readUint(data, offset + 8 + si * 4);
				for (let gi = 0; gi < numGlyphs; gi++) {
					const aoff = bin.readUint(data, off + 4 + gi * 4);
					const noff = bin.readUint(data, off + 4 + gi * 4 + 4);
					if (aoff == noff) {
						out[gi] = null;
						continue;
					}
					const go = off + aoff;
					const tag = bin.readASCII(data, go + 4, 4);
					if (tag != "png ") throw new Error(`Invalid tag: ${tag}`);
					out[gi] = new Uint8Array(data.buffer, data.byteOffset + go + 8, noff - aoff - 8);
				}
			}
			return out;
		} };
		T2.fvar = { parseTab: function(data, offset, length, obj) {
			const name2 = obj["name"];
			let off = offset;
			const bin = Typr2.B;
			const axes = [];
			const inst = [];
			off += 8;
			const acnt = bin.readUshort(data, off);
			off += 2;
			off += 2;
			const icnt = bin.readUshort(data, off);
			off += 2;
			const isiz = bin.readUshort(data, off);
			off += 2;
			for (let i = 0; i < acnt; i++) {
				const tag = bin.readASCII(data, off, 4);
				const min = bin.readFixed(data, off + 4);
				const def = bin.readFixed(data, off + 8);
				const max = bin.readFixed(data, off + 12);
				const flg = bin.readUshort(data, off + 16);
				const nid = bin.readUshort(data, off + 18);
				axes.push([
					tag,
					min,
					def,
					max,
					flg,
					name2["_" + nid]
				]);
				off += 20;
			}
			for (let i = 0; i < icnt; i++) {
				const snid = bin.readUshort(data, off);
				let pnid = null;
				const flg = bin.readUshort(data, off + 2);
				const crd = [];
				for (let j = 0; j < acnt; j++) crd.push(bin.readFixed(data, off + 4 + j * 4));
				off += 4 + acnt * 4;
				if ((isiz & 3) == 2) {
					pnid = bin.readUshort(data, off);
					off += 2;
				}
				inst.push([
					name2["_" + snid],
					flg,
					crd,
					pnid
				]);
			}
			return [axes, inst];
		} };
		T2.gvar = { parseTab: function(data, offset, length, obj) {
			const EMBEDDED_PEAK_TUPLE = 32768;
			const INTERMEDIATE_REGION = 16384;
			const PRIVATE_POINT_NUMBERS = 8192;
			const DELTAS_ARE_ZERO = 128;
			const DELTAS_ARE_WORDS = 64;
			const POINTS_ARE_WORDS = 128;
			const SHARED_POINT_NUMBERS = 32768;
			const bin = Typr2.B;
			function readTuple(data2, o, acnt2) {
				const tup = [];
				for (let j = 0; j < acnt2; j++) tup.push(bin.readF2dot14(data2, o + j * 2));
				return tup;
			}
			function readTupleVarHeader(data2, off2, vcnt, acnt2, eoff) {
				const out = [];
				for (let j = 0; j < vcnt; j++) {
					const dsiz = bin.readUshort(data2, off2);
					off2 += 2;
					let tind = bin.readUshort(data2, off2);
					const flag = tind & 61440;
					tind = tind & 4095;
					off2 += 2;
					let peak = null;
					let start = null;
					let end = null;
					if (flag & EMBEDDED_PEAK_TUPLE) {
						peak = readTuple(data2, off2, acnt2);
						off2 += acnt2 * 2;
					}
					if (flag & INTERMEDIATE_REGION) {
						start = readTuple(data2, off2, acnt2);
						off2 += acnt2 * 2;
					}
					if (flag & INTERMEDIATE_REGION) {
						end = readTuple(data2, off2, acnt2);
						off2 += acnt2 * 2;
					}
					out.push([
						dsiz,
						tind,
						flag,
						start,
						peak,
						end
					]);
				}
				return out;
			}
			function readPointNumbers(data2, off2, gid) {
				let cnt = data2[off2];
				off2++;
				if (cnt == 0) return [[], off2];
				if (127 < cnt) cnt = (cnt & 127) << 8 | data2[off2++];
				const pts = [];
				let last = 0;
				while (pts.length < cnt) {
					const v = data2[off2++];
					const wds = (v & POINTS_ARE_WORDS) != 0;
					const vv = (v & 127) + 1;
					for (let i = 0; i < vv; i++) {
						let dif = 0;
						if (wds) {
							dif = bin.readUshort(data2, off2);
							off2 += 2;
						} else {
							dif = data2[off2];
							off2++;
						}
						last += dif;
						pts.push(last);
					}
				}
				return [pts, off2];
			}
			let off = offset + 4;
			const acnt = bin.readUshort(data, off);
			off += 2;
			const tcnt = bin.readUshort(data, off);
			off += 2;
			const toff = bin.readUint(data, off);
			off += 4;
			const gcnt = bin.readUshort(data, off);
			off += 2;
			bin.readUshort(data, off);
			off += 2;
			const goff = bin.readUint(data, off);
			off += 4;
			const offs = [];
			for (let i = 0; i < gcnt + 1; i++) offs.push(bin.readUint(data, off + i * 4));
			const tups = [];
			const mins = [];
			const maxs = [];
			off = offset + toff;
			for (let i = 0; i < tcnt; i++) {
				const peak = readTuple(data, off + i * acnt * 2, acnt);
				const imin = [];
				const imax = [];
				tups.push(peak);
				mins.push(imin);
				maxs.push(imax);
				for (let k = 0; k < acnt; k++) {
					imin[k] = Math.min(peak[k], 0);
					imax[k] = Math.max(peak[k], 0);
				}
			}
			const i8 = new Int8Array(data.buffer);
			const tabs = [];
			for (let i = 0; i < gcnt; i++) {
				off = offset + goff + offs[i];
				let vcnt = bin.readUshort(data, off);
				off += 2;
				const snum = vcnt & SHARED_POINT_NUMBERS;
				vcnt &= 4095;
				const soff = bin.readUshort(data, off);
				off += 2;
				const hdr = readTupleVarHeader(data, off, vcnt, acnt, offset + goff + offs[i + 1]);
				const tab = [];
				tabs.push(tab);
				off = offset + goff + offs[i] + soff;
				let sind = null;
				if (snum) {
					const oo = readPointNumbers(data, off, i);
					sind = oo[0];
					off = oo[1];
				}
				for (let j = 0; j < vcnt; j++) {
					const vr = hdr[j];
					const end = off + vr[0];
					let ind = sind;
					if (vr[2] & PRIVATE_POINT_NUMBERS) {
						const oo = readPointNumbers(data, off, i);
						ind = oo[0];
						off = oo[1];
					}
					const ds = [];
					while (off < end) {
						const cb = data[off++];
						const cnt = (cb & 63) + 1;
						if (cb & DELTAS_ARE_ZERO) for (let k = 0; k < cnt; k++) ds.push(0);
						else if (cb & DELTAS_ARE_WORDS) {
							for (let k = 0; k < cnt; k++) ds.push(bin.readShort(data, off + k * 2));
							off += cnt * 2;
						} else {
							for (let k = 0; k < cnt; k++) ds.push(i8[off + k]);
							off += cnt;
						}
					}
					const ti = vr[1];
					const outInd = ind && ind.length * 2 == ds.length ? ind : null;
					tab.push([
						[
							vr[3] ? vr[3] : mins[ti],
							vr[4] ? vr[4] : tups[ti],
							vr[5] ? vr[5] : maxs[ti]
						],
						ds,
						outInd
					]);
				}
			}
			return tabs;
		} };
		T2.avar = { parseTab: function(data, offset, length, obj) {
			let off = offset;
			const bin = Typr2.B;
			const out = [];
			off += 6;
			const acnt = bin.readUshort(data, off);
			off += 2;
			for (let ai = 0; ai < acnt; ai++) {
				const cnt = bin.readUshort(data, off);
				off += 2;
				const poly = [];
				out.push(poly);
				for (let i = 0; i < cnt; i++) {
					const x = bin.readF2dot14(data, off);
					const y = bin.readF2dot14(data, off + 2);
					off += 4;
					poly.push(x, y);
				}
			}
			return out;
		} };
		T2.STAT = { parseTab: function(data, offset, length, font) {
			const bin = Typr2.B;
			let off = offset;
			const majorVersion = bin.readUshort(data, off);
			off += 2;
			const minorVersion = bin.readUshort(data, off);
			off += 2;
			const designAxisSize = bin.readUshort(data, off);
			off += 2;
			const designAxisCount = bin.readUshort(data, off);
			off += 2;
			const designAxesOffset = bin.readUint(data, off);
			off += 4;
			const axisValueCount = bin.readUshort(data, off);
			off += 2;
			const axisValueOffsetsOffset = bin.readUint(data, off);
			off += 4;
			let elidedFallbackNameID;
			if (majorVersion > 1 || majorVersion === 1 && minorVersion >= 1) {
				elidedFallbackNameID = bin.readUshort(data, off);
				off += 2;
			}
			const name2 = font.name || {};
			const designAxes = [];
			if (designAxisCount > 0) {
				let aoff = offset + designAxesOffset;
				for (let i = 0; i < designAxisCount; i++) {
					const tag = bin.readASCII(data, aoff, 4);
					const axisNameID = bin.readUshort(data, aoff + 4);
					const ordering = bin.readUshort(data, aoff + 6);
					designAxes.push({
						tag,
						name: name2["_" + axisNameID],
						ordering
					});
					aoff += designAxisSize;
				}
			}
			const valueOffsets = [];
			if (axisValueCount > 0) {
				const arrBase = offset + axisValueOffsetsOffset;
				let voff = arrBase;
				for (let i = 0; i < axisValueCount; i++) {
					const relOff = bin.readUshort(data, voff);
					valueOffsets.push(arrBase + relOff);
					voff += 2;
				}
			}
			const axisValues = [];
			for (const rel of valueOffsets) {
				let voff = rel;
				const format = bin.readUshort(data, voff);
				voff += 2;
				if (format === 1) {
					const axisIndex = bin.readUshort(data, voff);
					voff += 2;
					const flags = bin.readUshort(data, voff);
					voff += 2;
					const valueNameID = bin.readUshort(data, voff);
					voff += 2;
					const value = bin.readFixed(data, voff);
					axisValues.push({
						format: 1,
						axisIndex,
						flags,
						name: name2["_" + valueNameID],
						value
					});
				} else if (format === 2) {
					const axisIndex = bin.readUshort(data, voff);
					voff += 2;
					const flags = bin.readUshort(data, voff);
					voff += 2;
					const valueNameID = bin.readUshort(data, voff);
					voff += 2;
					const nominalValue = bin.readFixed(data, voff);
					voff += 4;
					const rangeMinValue = bin.readFixed(data, voff);
					voff += 4;
					const rangeMaxValue = bin.readFixed(data, voff);
					axisValues.push({
						format: 2,
						axisIndex,
						flags,
						name: name2["_" + valueNameID],
						nominalValue,
						rangeMinValue,
						rangeMaxValue
					});
				} else if (format === 3) {
					const axisIndex = bin.readUshort(data, voff);
					voff += 2;
					const flags = bin.readUshort(data, voff);
					voff += 2;
					const valueNameID = bin.readUshort(data, voff);
					voff += 2;
					const value = bin.readFixed(data, voff);
					voff += 4;
					const linkedValue = bin.readFixed(data, voff);
					axisValues.push({
						format: 3,
						axisIndex,
						flags,
						name: name2["_" + valueNameID],
						value,
						linkedValue
					});
				} else if (format === 4) {
					const axisCount = bin.readUshort(data, voff);
					voff += 2;
					const flags = bin.readUshort(data, voff);
					voff += 2;
					const valueNameID = bin.readUshort(data, voff);
					voff += 2;
					const axisValuesArr = [];
					for (let i = 0; i < axisCount; i++) {
						const axisIndex = bin.readUshort(data, voff);
						const value = bin.readFixed(data, voff + 2);
						voff += 6;
						axisValuesArr.push({
							axisIndex,
							value
						});
					}
					axisValues.push({
						format: 4,
						flags,
						name: name2["_" + valueNameID],
						axisValues: axisValuesArr
					});
				}
			}
			return {
				majorVersion,
				minorVersion,
				designAxes,
				axisValues,
				elidedFallbackNameID
			};
		} };
		T2.HVAR = { parseTab: function(data, offset, length, obj) {
			let off = offset;
			const oo = offset;
			const bin = Typr2.B;
			off += 4;
			const varO = bin.readUint(data, off);
			off += 4;
			const advO = bin.readUint(data, off);
			off += 4;
			const lsbO = bin.readUint(data, off);
			off += 4;
			const rsbO = bin.readUint(data, off);
			off += 4;
			if (lsbO != 0 || rsbO != 0) throw new Error(`Invalid offset: ${lsbO}`);
			off = oo + varO;
			const ioff = off;
			const fmt = bin.readUshort(data, off);
			off += 2;
			if (fmt != 1) throw new Error("Invalid format");
			const vregO = bin.readUint(data, off);
			off += 4;
			const vcnt = bin.readUshort(data, off);
			off += 2;
			const offs = [];
			for (let i = 0; i < vcnt; i++) offs.push(bin.readUint(data, off + i * 4));
			off += vcnt * 4;
			off = ioff + vregO;
			const acnt = bin.readUshort(data, off);
			off += 2;
			const rcnt = bin.readUshort(data, off);
			off += 2;
			const regs = [];
			for (let i = 0; i < rcnt; i++) {
				const crd = [
					[],
					[],
					[]
				];
				regs.push(crd);
				for (let j = 0; j < acnt; j++) {
					crd[0].push(bin.readF2dot14(data, off + 0));
					crd[1].push(bin.readF2dot14(data, off + 2));
					crd[2].push(bin.readF2dot14(data, off + 4));
					off += 6;
				}
			}
			const i8 = new Int8Array(data.buffer);
			const varStore = [];
			for (let i = 0; i < offs.length; i++) {
				off = oo + varO + offs[i];
				const vdata = [];
				varStore.push(vdata);
				const icnt = bin.readUshort(data, off);
				off += 2;
				const dcnt = bin.readUshort(data, off);
				off += 2;
				if (dcnt & 32768) throw new Error("Invalid delta count");
				const rcnt2 = bin.readUshort(data, off);
				off += 2;
				const ixs = [];
				for (let j = 0; j < rcnt2; j++) ixs.push(bin.readUshort(data, off + j * 2));
				off += rcnt2 * 2;
				for (let k = 0; k < icnt; k++) {
					const deltaData = [];
					for (let ri = 0; ri < rcnt2; ri++) {
						deltaData.push(ri < dcnt ? bin.readShort(data, off) : i8[off]);
						off += ri < dcnt ? 2 : 1;
					}
					const dd = new Array(regs.length);
					dd.fill(0);
					vdata.push(dd);
					for (let j = 0; j < ixs.length; j++) if (ixs[j] < dd.length && j < deltaData.length) dd[ixs[j]] = deltaData[j];
				}
			}
			off = oo + advO;
			if (data[off++] != 0) throw new Error("Invalid format");
			const entryFormat = data[off++];
			const mapCount = bin.readUshort(data, off);
			off += 2;
			const INNER_INDEX_BIT_COUNT_MASK = 15;
			const entrySize = ((entryFormat & 48) >> 4) + 1;
			const dfs = [];
			for (let i = 0; i < mapCount; i++) {
				let entry = 0;
				if (entrySize == 1) entry = data[off++];
				else {
					entry = bin.readUshort(data, off);
					off += 2;
				}
				const outerIndex = entry >> (entryFormat & INNER_INDEX_BIT_COUNT_MASK) + 1;
				const innerIndex = entry & (1 << (entryFormat & INNER_INDEX_BIT_COUNT_MASK) + 1) - 1;
				if (outerIndex < varStore.length && varStore[outerIndex] && innerIndex < varStore[outerIndex].length) dfs.push(varStore[outerIndex][innerIndex]);
				else {
					const defaultDelta = new Array(regs.length);
					defaultDelta.fill(0);
					dfs.push(defaultDelta);
				}
			}
			return [regs, dfs];
		} };
	})(Typr2.T || (Typr2.T = {}));
})(Typr || (Typr = {}));
var typr_default = Typr;
//#endregion
//#region cli.ts
/**
* refig CLI — headless Figma renderer
*/
const FORMAT_SET = new Set([
	"png",
	"jpeg",
	"webp",
	"pdf",
	"svg"
]);
/** Conventional name for REST API response when using a project directory. */
const DOCUMENT_JSON = "document.json";
/** Subdirectory name for images when using a project directory. */
const IMAGES_SUBDIR = "images";
/** Subdirectory name for fonts when using a project directory. */
const FONTS_SUBDIR = "fonts";
const FONT_EXTENSIONS = new Set([".ttf", ".otf"]);
/** .fig (ZIP) files >= 2GB cannot be read via readFileSync due to Node.js buffer limit. */
const LARGE_FILE_THRESHOLD = 2 * 1024 * 1024 * 1024;
function formatFromOutFile(outPath) {
	const ext = path.extname(outPath).replace(/^\./, "").toLowerCase();
	if (ext === "jpg") return "jpeg";
	return FORMAT_SET.has(ext) ? ext : "png";
}
const EXT_BY_FORMAT = {
	png: "png",
	jpeg: "jpeg",
	jpg: "jpeg",
	webp: "webp",
	svg: "svg",
	pdf: "pdf"
};
/** Sanitize for use in filenames: replace : / \ with _. */
function sanitizeForFilename(s) {
	return String(s).replace(/[:/\\]/g, "_").replace(/\s+/g, "_") || "_";
}
/**
* Resolve CLI input to document path and optional images/fonts directories.
* - If input is a directory: document at <input>/document.json; images at <input>/images/; fonts at <input>/fonts/ if present.
* - If input is a file: document is that file; images/fonts only if --images/--fonts provided.
*/
function resolveInput(inputPath, explicitImagesDir, explicitFontsDir) {
	const resolved = path.resolve(inputPath);
	if (statSync(resolved).isDirectory()) {
		const documentPath = path.join(resolved, DOCUMENT_JSON);
		if (!existsSync(documentPath)) throw new Error(`Input directory must contain ${DOCUMENT_JSON}; not found: ${documentPath}`);
		const imagesDir = path.join(resolved, IMAGES_SUBDIR);
		const useImagesDir = existsSync(imagesDir) && statSync(imagesDir).isDirectory() ? imagesDir : void 0;
		const fontsDir = path.join(resolved, FONTS_SUBDIR);
		const useFontsDir = existsSync(fontsDir) && statSync(fontsDir).isDirectory() ? fontsDir : void 0;
		return {
			documentPath,
			imagesDir: explicitImagesDir ? path.resolve(explicitImagesDir) : useImagesDir,
			fontsDir: explicitFontsDir ? path.resolve(explicitFontsDir) : useFontsDir,
			isRestJson: true
		};
	}
	return {
		documentPath: resolved,
		imagesDir: explicitImagesDir ? path.resolve(explicitImagesDir) : void 0,
		fontsDir: explicitFontsDir ? path.resolve(explicitFontsDir) : void 0,
		isRestJson: resolved.toLowerCase().endsWith(".json")
	};
}
/**
* Read image files from a directory.
* Uses filename (without extension) as ref for lookup.
* @returns Record of ref -> image bytes
*/
function readImagesFromDir(dirPath) {
	const out = {};
	for (const file of readdirSync(dirPath)) {
		const fullPath = path.join(dirPath, file);
		if (!statSync(fullPath).isFile()) continue;
		const ref = path.basename(file).replace(/\.[^.]+$/, "");
		if (!ref) continue;
		const buf = readFileSync(fullPath);
		out[ref] = new Uint8Array(buf);
	}
	return out;
}
/**
* Recursively walk directory for .ttf and .otf files.
*/
function* walkFontFiles(dirPath) {
	for (const entry of readdirSync(dirPath, { withFileTypes: true })) {
		const fullPath = path.join(dirPath, entry.name);
		if (entry.isDirectory()) yield* walkFontFiles(fullPath);
		else if (entry.isFile()) {
			const ext = path.extname(entry.name).toLowerCase();
			if (FONT_EXTENSIONS.has(ext)) yield fullPath;
		}
	}
}
/**
* Read font files from a directory (recursively).
* Parses each .ttf/.otf to get family from name table; groups multiple files per family.
* Fallback: basename without extension if parse fails.
* @returns Record of family -> Uint8Array[] (array for in-place push, no realloc per add)
*/
function readFontsFromDir(dirPath) {
	const out = {};
	for (const fullPath of walkFontFiles(dirPath)) {
		const file = path.basename(fullPath);
		const buf = readFileSync(fullPath);
		const bytes = new Uint8Array(buf);
		const basenameNoExt = file.replace(/\.[^.]+$/, "") || file;
		let family;
		try {
			const [font] = typr_default.parse(bytes);
			family = (font?.name)?.fontFamily ?? basenameNoExt;
		} catch {
			family = basenameNoExt;
		}
		if (!family) continue;
		const existing = out[family];
		if (existing === void 0) out[family] = [bytes];
		else existing.push(bytes);
	}
	return out;
}
function exportAllOutputBasename(nodeId, suffix, format) {
	const ext = EXT_BY_FORMAT[format] ?? "png";
	const safeId = sanitizeForFilename(nodeId);
	const trimmedSuffix = suffix.trim();
	return `${trimmedSuffix ? `${safeId}_${sanitizeForFilename(trimmedSuffix)}` : safeId}.${ext}`;
}
async function runExportAll(documentPath, outDir, imagesDir, fontsDir, skipDefaultFonts) {
	const isFig = documentPath.toLowerCase().endsWith(".fig") || documentPath.toLowerCase().endsWith(".deck");
	let document;
	let items;
	let rendererOptions = {};
	if (isFig) {
		const useStreaming = statSync(documentPath).size >= LARGE_FILE_THRESHOLD;
		let figFile;
		if (useStreaming) {
			const stream = createReadStream(documentPath, { highWaterMark: 1024 * 1024 });
			figFile = await iofigma.kiwi.parseFileFromStream(stream);
			document = new FigmaDocument(figFile);
		} else {
			const bytes = new Uint8Array(readFileSync(documentPath));
			figFile = iofigma.kiwi.parseFile(bytes);
			document = new FigmaDocument(bytes);
		}
		items = collectExportsFromDocument(figFileToRestLikeDocument(figFile));
		const imagesMap = iofigma.kiwi.extractImages(figFile.zip_files);
		const images = {};
		imagesMap.forEach((imgBytes, ref) => {
			images[ref] = imgBytes;
		});
		if (Object.keys(images).length > 0) rendererOptions = { images };
	} else {
		document = new FigmaDocument(JSON.parse(readFileSync(documentPath, "utf8")));
		items = collectExportsFromDocument(document.payload);
		if (imagesDir) rendererOptions = {
			...rendererOptions,
			images: readImagesFromDir(imagesDir)
		};
	}
	if (fontsDir) rendererOptions = {
		...rendererOptions,
		fonts: readFontsFromDir(fontsDir)
	};
	if (skipDefaultFonts || process.env.REFIG_SKIP_DEFAULT_FONTS === "1") rendererOptions = {
		...rendererOptions,
		loadFigmaDefaultFonts: false
	};
	if (items.length === 0) {
		process.stdout.write("No nodes with export settings found.\n");
		return;
	}
	const renderer = new FigmaRenderer(document, rendererOptions);
	try {
		for (const { nodeId: nid, node, setting } of items) {
			const options = exportSettingToRenderOptions(node, setting);
			const result = await renderer.render(nid, options);
			const basename = exportAllOutputBasename(nid, setting.suffix, result.format);
			const filePath = path.join(outDir, basename);
			writeFileSync(filePath, Buffer.from(result.data));
			process.stdout.write(`wrote ${filePath} (${result.mimeType}, ${result.data.byteLength} bytes)\n`);
		}
		process.stdout.write(`Exported ${items.length} file(s) to ${outDir}\n`);
	} finally {
		renderer.dispose();
	}
}
async function runSingleNode(documentPath, nodeId, outPath, opts) {
	const format = (opts.format ?? formatFromOutFile(outPath)).toLowerCase();
	if (!FORMAT_SET.has(format)) throw new Error(`Unsupported --format "${format}"`);
	const isJson = documentPath.toLowerCase().endsWith(".json");
	let document;
	if (isJson) document = new FigmaDocument(JSON.parse(readFileSync(documentPath, "utf8")));
	else if ((documentPath.toLowerCase().endsWith(".fig") || documentPath.toLowerCase().endsWith(".deck")) && statSync(documentPath).size >= LARGE_FILE_THRESHOLD) {
		const stream = createReadStream(documentPath, { highWaterMark: 1024 * 1024 });
		document = new FigmaDocument(await iofigma.kiwi.parseFileFromStream(stream));
	} else document = new FigmaDocument(new Uint8Array(readFileSync(documentPath)));
	const rendererOptions = {};
	if (isJson && opts.imagesDir) rendererOptions.images = readImagesFromDir(opts.imagesDir);
	if (opts.fontsDir) rendererOptions.fonts = readFontsFromDir(opts.fontsDir);
	if (opts.skipDefaultFonts || process.env.REFIG_SKIP_DEFAULT_FONTS === "1") rendererOptions.loadFigmaDefaultFonts = false;
	const renderer = new FigmaRenderer(document, rendererOptions);
	try {
		const result = await renderer.render(nodeId, {
			format,
			width: opts.width,
			height: opts.height,
			scale: opts.scale
		});
		mkdirSync(path.dirname(outPath), { recursive: true });
		writeFileSync(outPath, Buffer.from(result.data));
		process.stdout.write(`wrote ${outPath} (${result.mimeType}, ${result.data.byteLength} bytes)\n`);
	} finally {
		renderer.dispose();
	}
}
async function runConvert(inputPath, outPath, opts) {
	const lower = outPath.toLowerCase();
	const isGrida1 = lower.endsWith(".grida1");
	lower.endsWith(".grida") || !isGrida1 && lower.endsWith(".grida1");
	const { documentPath, imagesDir, isRestJson } = resolveInput(inputPath, opts.imagesDir, void 0);
	if (isGrida1) {
		let result;
		if (isRestJson) result = restJsonToGridaDocument(JSON.parse(readFileSync(documentPath, "utf8")), {
			images: imagesDir ? readImagesFromDir(imagesDir) : void 0,
			preserve_figma_ids: opts.preserveFigmaIds
		});
		else result = figBytesToGridaDocument(new Uint8Array(readFileSync(documentPath)), { preserve_figma_ids: opts.preserveFigmaIds });
		const snapshot = {
			version: grida.program.document.SCHEMA_VERSION,
			document: result.document
		};
		mkdirSync(path.dirname(outPath), { recursive: true });
		writeFileSync(outPath, JSON.stringify(snapshot));
		const nodeCount = Object.keys(result.document.nodes).length;
		process.stdout.write(`wrote ${outPath} (.grida1 snapshot, ${nodeCount} nodes, ${result.pageNames.length} page(s))\n`);
	} else {
		let input;
		if (isRestJson) input = JSON.parse(readFileSync(documentPath, "utf8"));
		else input = new Uint8Array(readFileSync(documentPath));
		const archiveResult = fig2grida(input, { preserve_figma_ids: opts.preserveFigmaIds });
		mkdirSync(path.dirname(outPath), { recursive: true });
		writeFileSync(outPath, Buffer.from(archiveResult.bytes));
		process.stdout.write(`wrote ${outPath} (.grida archive, ${archiveResult.nodeCount} nodes, ${archiveResult.pageNames.length} page(s), ${archiveResult.imageCount} image(s))\n`);
	}
}
async function main() {
	program.name("refig").description("Headless Figma renderer — render .fig and REST API JSON to PNG/JPEG/WebP/PDF/SVG");
	program.command("convert").description("Convert a Figma file to .grida (FlatBuffers archive) or .grida1 (JSON snapshot) without rendering").argument("<input>", "Path to .fig, JSON file (REST API response), or directory containing document.json (and optionally images/)").requiredOption("-o, --out <path>", "Output file path (.grida or .grida1 — format inferred from extension)").option("--images <dir>", "Directory of image files for REST API document (optional)").option("--preserve-figma-ids", "Keep original Figma node IDs in the output (default: false)").action(async (input, options) => {
		const outPath = path.resolve(String(options.out).trim());
		await runConvert(input.trim(), outPath, {
			imagesDir: typeof options.images === "string" ? options.images : void 0,
			preserveFigmaIds: options.preserveFigmaIds === true
		});
	});
	program.argument("<input>", "Path to .fig, JSON file (REST API response), or directory containing document.json (and optionally images/, fonts/)").option("--out <path>", "Output file path (single node) or output directory (--export-all); when omitted, uses OS temp directory (valid with --export-all or with both --format and --node)").option("--images <dir>", "Directory of image files for REST API document (optional; not used if <input> is a dir with images/)").option("--fonts <dir>", "Directory of font files (TTF/OTF) for custom fonts (optional; not used if <input> is a dir with fonts/)").option("--node <id>", "Figma node ID to render (required unless --export-all)").option("--export-all", "Export every node that has exportSettings (REST JSON or .fig)").option("--format <fmt>", "png | jpeg | webp | pdf | svg (single-node only; default: from --out extension)").option("--width <px>", "Viewport width (single-node only)", "1024").option("--height <px>", "Viewport height (single-node only)", "1024").option("--scale <n>", "Raster scale factor (single-node only)", "1").option("--skip-default-fonts", "Do not load Figma default fonts (same as REFIG_SKIP_DEFAULT_FONTS=1)").action(async (input, options) => {
		const outPath = String(options.out ?? "").trim();
		const exportAll = options.exportAll === true;
		const nodeId = String(options.node ?? "").trim();
		const explicitImagesDir = typeof options.images === "string" ? options.images : void 0;
		const explicitFontsDir = typeof options.fonts === "string" ? options.fonts : void 0;
		const { documentPath, imagesDir, fontsDir } = resolveInput(input.trim(), explicitImagesDir, explicitFontsDir);
		if (exportAll) {
			if (nodeId) program.error("--node must not be used with --export-all");
			await runExportAll(documentPath, outPath ? (() => {
				const resolved = path.resolve(outPath);
				if (existsSync(resolved)) {
					if (!statSync(resolved).isDirectory()) program.error("--out must be a directory when using --export-all");
				} else mkdirSync(resolved, { recursive: true });
				return resolved;
			})() : mkdtempSync(path.join(tmpdir(), "refig-export-")), imagesDir, fontsDir, options.skipDefaultFonts === true);
			return;
		}
		if (!nodeId) program.error("--node is required (or use --export-all)");
		const width = Number(options.width ?? 1024);
		const height = Number(options.height ?? 1024);
		const scale = Number(options.scale ?? 1);
		const formatOption = typeof options.format === "string" ? options.format : void 0;
		let singleOutPath;
		if (outPath) singleOutPath = path.resolve(outPath);
		else {
			if (!formatOption) program.error("When --out is omitted, both --node and --format are required");
			const format = formatOption.toLowerCase();
			if (!FORMAT_SET.has(format)) program.error(`Unsupported --format "${format}"`);
			const ext = EXT_BY_FORMAT[format] ?? "png";
			singleOutPath = path.join(tmpdir(), `refig-${sanitizeForFilename(nodeId)}.${ext}`);
		}
		await runSingleNode(documentPath, nodeId, singleOutPath, {
			format: formatOption,
			width,
			height,
			scale,
			imagesDir,
			fontsDir,
			skipDefaultFonts: options.skipDefaultFonts === true
		});
	});
	await program.parseAsync(process.argv);
}
main().catch((err) => {
	const message = err instanceof Error ? err.message : String(err);
	process.stderr.write(`${message}\n`);
	process.exit(1);
});
//#endregion
export {};
