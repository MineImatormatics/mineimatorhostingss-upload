(function(e) {
	function t(t) {
		for (var s, n, o = t[0], l = t[1], c = t[2], d = 0, p = []; d < o.length; d++) n = o[d], Object.prototype.hasOwnProperty.call(r, n) && r[n] && p.push(r[n][0]), r[n] = 0;
		for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
		u && u(t);
		while (p.length) p.shift()();
		return i.push.apply(i, c || []), a()
	}

	function a() {
		for (var e, t = 0; t < i.length; t++) {
			for (var a = i[t], s = !0, o = 1; o < a.length; o++) {
				var l = a[o];
				0 !== r[l] && (s = !1)
			}
			s && (i.splice(t--, 1), e = n(n.s = a[0]))
		}
		return e
	}
	var s = {},
		r = {
			app: 0
		},
		i = [];

	function n(t) {
		if (s[t]) return s[t].exports;
		var a = s[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports
	}
	n.m = e, n.c = s, n.d = function(e, t, a) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: a
		})
	}, n.r = function(e) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function(e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" === typeof e && e && e.__esModule) return e;
		var a = Object.create(null);
		if (n.r(a), Object.defineProperty(a, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var s in e) n.d(a, s, function(t) {
				return e[t]
			}.bind(null, s));
		return a
	}, n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "/";
	var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
		l = o.push.bind(o);
	o.push = t, o = o.slice();
	for (var c = 0; c < o.length; c++) t(o[c]);
	var u = l;
	i.push([0, "chunk-vendors"]), a()
})({
	0: function(e, t, a) {
		e.exports = a("cd49")
	},
	cd49: function(e, t, a) {
		"use strict";
		a.r(t);
		a("e260"), a("e6cf"), a("cca6"), a("a79d");
		var s = a("2b0e"),
			r = a("4eb5"),
			i = a.n(r),
			n = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					attrs: {
						id: "font-sans antialiased text-gray-900 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
					}
				}, [a("h1", {
					staticClass: "mt-4 text-4xl font-semibold text-center "
				}, [e._v("MineImatorHostingSS Uploader")]), a("p", {
					staticClass: "text-center"
				}, [e._v("Upload your image below and directly receive a link for it.")]), a("Upload")], 1)
			},
			o = [],
			l = function() {
				var e = this,
					t = e.$createElement,
					a = e._self._c || t;
				return a("div", {
					staticClass: "flex flex-col justify-center max-w-lg mx-auto mt-6 space-y-4 align-center sm:pt-5",
					on: {
						paste: e.addFileTroughPaste
					}
				}, [a("div", {
					staticClass: "flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md bg-gray-50",
					class: [e.dragging ? "bg-indigo-50" : ""],
					on: {
						drop: [function(t) {
							return t.preventDefault(), e.addFile(t)
						}, function(t) {
							e.dragging = !1
						}],
						dragover: [function(e) {
							e.preventDefault()
						}, function(t) {
							e.dragging = !0
						}],
						dragleave: function(t) {
							e.dragging = !1
						}
					}
				}, [e.file ? a("div", {
					staticClass: "flex flex-col items-center space-y-3"
				}, [a("h2", {
					staticClass: "mb-2 text-2xl"
				}, [e._v("Ready to upload")]), e.srcFile ? a("img", {
					staticClass: "border-indigo-200 border-dashed border-3 max-h-64",
					attrs: {
						src: e.srcFile,
						alt: "Image to upload"
					}
				}) : e._e(), a("div", {
					staticClass: "inline-flex items-center"
				}, [a("svg", {
					staticClass: "w-4 h-4 mr-1 text-gray-700 fill-current",
					attrs: {
						viewBox: "0 0 512 512"
					}
				}, [a("path", {
					attrs: {
						d: "M416,64H96a64.07,64.07,0,0,0-64,64V384a64.07,64.07,0,0,0,64,64H416a64.07,64.07,0,0,0,64-64V128A64.07,64.07,0,0,0,416,64Zm-80,64a48,48,0,1,1-48,48A48.05,48.05,0,0,1,336,128ZM96,416a32,32,0,0,1-32-32V316.37l94.84-84.3a48.06,48.06,0,0,1,65.8,1.9l64.95,64.81L172.37,416Zm352-32a32,32,0,0,1-32,32H217.63L339.05,294.58a47.72,47.72,0,0,1,61.64-.16L448,333.84Z"
					}
				})]), e._v(" " + e._s(e.file.name) + " "), a("span", {
					staticClass: "ml-2"
				}, [e._v("(" + e._s(e._f("fileSize")(e.file.size)) + ")")]), a("button", {
					staticClass: "ml-3 rounded hover:bg-gray-200",
					attrs: {
						title: "Remove"
					},
					on: {
						click: function(t) {
							return e.removeFile()
						}
					}
				}, [a("svg", {
					staticClass: "w-4 h-4",
					attrs: {
						fill: "currentColor",
						viewBox: "0 0 20 20"
					}
				}, [a("path", {
					attrs: {
						d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
						"clip-rule": "evenodd",
						"fill-rule": "evenodd"
					}
				})])])]), a("div", {
					staticClass: "px-4 py-3 text-right sm:px-6"
				}, [a("span", {
					staticClass: "inline-flex rounded-md shadow-sm"
				}, [a("button", {
					staticClass: "inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700",
					attrs: {
						type: "submit",
						disabled: e.uploadDisabled
					},
					on: {
						click: e.upload
					}
				}, [e._v(" " + e._s(e.uploading ? "Uploading..." : "Upload") + " ")])])])]) : a("div", {
					staticClass: "text-center"
				}, [a("svg", {
					staticClass: "w-12 h-12 mx-auto text-gray-400",
					attrs: {
						stroke: "currentColor",
						fill: "none",
						viewBox: "0 0 48 48"
					}
				}, [a("path", {
					attrs: {
						d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0\n            01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4\n            4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
						"stroke-width": "2",
						"stroke-linecap": "round",
						"stroke-linejoin": "round"
					}
				})]), a("p", {
					staticClass: "mt-1 text-sm text-gray-600"
				}, [a("label", {
					staticClass: "font-medium text-indigo-600 transition duration-150 ease-in-out cursor-pointer hover:text-indigo-500 focus:outline-none focus:underline"
				}, [e._v(" Upload a file "), a("input", {
					staticClass: "fixed hidden",
					attrs: {
						type: "file",
						name: "image"
					},
					on: {
						change: e.addFileTroughInput
					}
				})]), e._v(" or drag and drop ")]), a("p", {
					staticClass: "mt-1 text-xs text-gray-500"
				}, [e._v(" PNG, JPG, GIF up to 10MB ")])])]), e.error ? a("div", {
					staticClass: "p-4 rounded-md bg-red-50"
				}, [a("div", {
					staticClass: "flex"
				}, [a("div", {
					staticClass: "flex-shrink-0"
				}, [a("svg", {
					staticClass: "w-5 h-5 text-red-400",
					attrs: {
						fill: "currentColor",
						viewBox: "0 0 20 20"
					}
				}, [a("path", {
					attrs: {
						"fill-rule": "evenodd",
						d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
						"clip-rule": "evenodd"
					}
				})])]), a("div", {
					staticClass: "ml-3"
				}, [a("h3", {
					staticClass: "text-sm font-medium leading-5 text-red-800"
				}, [e._v(" " + e._s(e.error) + " ")])])])]) : e._e(), e.success ? a("div", {
					staticClass: "p-4 rounded-md bg-green-50"
				}, [a("div", {
					staticClass: "flex"
				}, [a("div", {
					staticClass: "flex-shrink-0"
				}, [a("svg", {
					staticClass: "w-5 h-5 text-green-400",
					attrs: {
						fill: "currentColor",
						viewBox: "0 0 20 20"
					}
				}, [a("path", {
					attrs: {
						"fill-rule": "evenodd",
						d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
						"clip-rule": "evenodd"
					}
				})])]), a("div", {
					staticClass: "ml-3"
				}, [a("h3", {
					staticClass: "text-sm font-medium leading-5 text-green-800"
				}, [e._v(" Success ")]), a("div", {
					staticClass: "mt-2 text-sm leading-5 text-green-700"
				}, [a("p", [a("a", {
					attrs: {
						href: e.successData.link
					}
				}, [e._v(e._s(e.successData.link))])])]), a("div", {
					staticClass: "mt-4"
				}, [a("div", {
					staticClass: "-mx-2 -my-1.5 flex"
				}, [e.copied ? a("button", {
					staticClass: "ml-3 px-2 py-1.5 inline-flex items-center rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
				}, [a("svg", {
					staticClass: "w-5 h-5 mr-2 -ml-1",
					attrs: {
						fill: "currentColor",
						viewBox: "0 0 20 20"
					}
				}, [a("path", {
					attrs: {
						d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
						"clip-rule": "evenodd",
						"fill-rule": "evenodd"
					}
				})]), e._v(" Copied ")]) : a("div", [a("button", {
					directives: [{
						name: "clipboard",
						rawName: "v-clipboard",
						value: e.successData.link,
						expression: "successData.link"
					}, {
						name: "clipboard",
						rawName: "v-clipboard:success",
						value: e.copySuccess,
						expression: "copySuccess",
						arg: "success"
					}],
					staticClass: "ml-3 px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
				}, [e._v(" Copy link ")]), e.successData.mp4 ? a("button", {
					directives: [{
						name: "clipboard",
						rawName: "v-clipboard",
						value: e.successData.mp4,
						expression: "successData.mp4"
					}, {
						name: "clipboard",
						rawName: "v-clipboard:success",
						value: e.copySuccess,
						expression: "copySuccess",
						arg: "success"
					}],
					staticClass: "ml-3 px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
				}, [e._v(" Copy MP4 link ")]) : e._e(), e.successData.gifv ? a("button", {
					directives: [{
						name: "clipboard",
						rawName: "v-clipboard",
						value: e.successData.gifv,
						expression: "successData.gifv"
					}, {
						name: "clipboard",
						rawName: "v-clipboard:success",
						value: e.copySuccess,
						expression: "copySuccess",
						arg: "success"
					}],
					staticClass: "ml-3 px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150"
				}, [e._v(" Copy GIFV link ")]) : e._e()])])])])])]) : e._e()])
			},
			c = [],
			u = (a("99af"), a("b680"), a("d3b7"), a("ac1f"), a("1276"), a("53ca")),
			d = (a("96cf"), a("1da1")),
			p = /video|image/,
			f = {
				data: function() {
					return {
						file: null,
						success: !1,
						error: null,
						dragging: !1,
						successData: null,
						uploading: !1,
						copied: !1,
						srcFile: null
					}
				},
				computed: {
					uploadDisabled: function() {
						return this.file && !1
					}
				},
				filters: {
					fileSize: function(e) {
						var t = 1e3;
						if (Math.abs(e) < t) return "".concat(e, " B");
						var a = ["kB", "MB", "GB"],
							s = -1;
						do {
							e /= t, s += 1
						} while (Math.abs(e) >= t && s < a.length - 1);
						return "".concat(e.toFixed(1), " ").concat(a[s])
					}
				},
				methods: {
					removeFile: function() {
						this.error = null, this.file = null, this.srcFile = null, this.uploading = !1
					},
					setupReader: function() {
						var e = this;
						if ("image" === this.file.type.split("/")[0]) {
							var t = new FileReader;
							t.onload = function(t) {
								e.srcFile = t.target.result
							}, t.readAsDataURL(this.file)
						}
					},
					addFile: function(e) {
						this.removeFile();
						var t = e.dataTransfer.files[0];
						p.test(t.type.split("/")[0]) ? t && (this.file = t, this.setupReader()) : this.error = "File type not supported"
					},
					addFileTroughInput: function(e) {
						this.removeFile();
						var t = e.target.files[0];
						t && (p.test(t.type.split("/")[0]) ? (this.file = t, this.setupReader()) : this.error = "File type not supported")
					},
					addFileTroughPaste: function(e) {
						this.removeFile();
						for (var t = e.clipboardData.items, a = 0; a < t.length; a++) "image" === t[a].type.split("/")[0] && (this.file = t[a].getAsFile(), this.setupReader())
					},
					postImage: function(e, t) {
						return fetch("https://api.imgur.com/3/image", {
							method: "POST",
							headers: {
								Authorization: "Client-ID ".concat(e)
							},
							body: t
						})
					},
					upload: function() {
						var e = this;
						return Object(d["a"])(regeneratorRuntime.mark((function t() {
							var a, s, r;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return a = new FormData, a.append("image", e.file), e.uploading = !0, t.prev = 3, t.next = 6, e.postImage("e4f58fc81daec99", a);
									case 6:
										if (s = t.sent, s.ok) {
											t.next = 14;
											break
										}
										if (429 !== s.status) {
											t.next = 12;
											break
										}
										return t.next = 11, e.postImage("dd4b67388d6b5ac", a);
									case 11:
										s = t.sent;
									case 12:
										if (s.ok) {
											t.next = 14;
											break
										}
										throw new Error("Rate limit exceeded, please try again later.");
									case 14:
										return t.next = 16, s.json();
									case 16:
										if (r = t.sent, r.success) {
											t.next = 21;
											break
										}
										return e.success = !1, "object" === Object(u["a"])(r.data.error) && r.data.error.message ? e.error = r.data.error.message : e.error = r.data.errors || r.data.error, t.abrupt("return");
									case 21:
										e.successData = r.data, e.file = null, e.success = !0, t.next = 30;
										break;
									case 26:
										t.prev = 26, t.t0 = t["catch"](3), e.error = t.t0.message, console.error(JSON.stringify(t.t0.message));
									case 30:
										return t.prev = 30, e.uploading = !1, t.finish(30);
									case 33:
									case "end":
										return t.stop()
								}
							}), t, null, [
								[3, 26, 30, 33]
							])
						})))()
					},
					copySuccess: function() {
						var e = this;
						this.copied = !0, setTimeout((function() {
							e.copied = !1
						}), 2050)
					}
				}
			},
			m = f,
			g = a("2877"),
			v = Object(g["a"])(m, l, c, !1, null, null, null),
			x = v.exports,
			h = s["a"].extend({
				name: "App",
				components: {
					Upload: x
				}
			}),
			b = h,
			y = Object(g["a"])(b, n, o, !1, null, null, null),
			C = y.exports;
		a("def6");
		s["a"].use(i.a), s["a"].config.productionTip = !1, new s["a"]({
			render: function(e) {
				return e(C)
			}
		}).$mount("#app")
	},
	def6: function(e, t, a) {}
});