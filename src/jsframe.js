/*! jsframe v1.6.2 Copyright (c) 2007-2020 Tom Misawa */ ! function(e, t) { if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else { var r = t(); for (var n in r)("object" == typeof exports ? exports : e)[n] = r[n] } }(window, (function() {
    return function(e) { var t = {};

        function r(n) { if (t[n]) return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports } return r.m = e, r.c = t, r.d = function(e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) { return e[t] }.bind(null, o)); return n }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "", r(r.s = 10) }([function(e, t, r) { "use strict"; var n, o = function() { return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n },
            a = function() { var e = {}; return function(t) { if (void 0 === e[t]) { var r = document.querySelector(t); if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try { r = r.contentDocument.head } catch (e) { r = null }
                        e[t] = r } return e[t] } }(),
            i = [];

        function l(e) { for (var t = -1, r = 0; r < i.length; r++)
                if (i[r].identifier === e) { t = r; break }
            return t }

        function s(e, t) { for (var r = {}, n = [], o = 0; o < e.length; o++) { var a = e[o],
                    s = t.base ? a[0] + t.base : a[0],
                    d = r[s] || 0,
                    u = "".concat(s, " ").concat(d);
                r[s] = d + 1; var c = l(u),
                    m = { css: a[1], media: a[2], sourceMap: a[3] }; - 1 !== c ? (i[c].references++, i[c].updater(m)) : i.push({ identifier: u, updater: y(m, t), references: 1 }), n.push(u) } return n }

        function d(e) { var t = document.createElement("style"),
                n = e.attributes || {}; if (void 0 === n.nonce) { var o = r.nc;
                o && (n.nonce = o) } if (Object.keys(n).forEach((function(e) { t.setAttribute(e, n[e]) })), "function" == typeof e.insert) e.insert(t);
            else { var i = a(e.insert || "head"); if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                i.appendChild(t) } return t } var u, c = (u = [], function(e, t) { return u[e] = t, u.filter(Boolean).join("\n") });

        function m(e, t, r, n) { var o = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css; if (e.styleSheet) e.styleSheet.cssText = c(t, o);
            else { var a = document.createTextNode(o),
                    i = e.childNodes;
                i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(a, i[t]) : e.appendChild(a) } }

        function p(e, t, r) { var n = r.css,
                o = r.media,
                a = r.sourceMap; if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), a && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet) e.styleSheet.cssText = n;
            else { for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n)) } } var h = null,
            f = 0;

        function y(e, t) { var r, n, o; if (t.singleton) { var a = f++;
                r = h || (h = d(t)), n = m.bind(null, r, a, !1), o = m.bind(null, r, a, !0) } else r = d(t), n = p.bind(null, r, t), o = function() {! function(e) { if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e) }(r) }; return n(e),
                function(t) { if (t) { if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        n(e = t) } else o() } }
        e.exports = function(e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o()); var r = s(e = e || [], t); return function(e) { if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) { for (var n = 0; n < r.length; n++) { var o = l(r[n]);
                        i[o].references-- } for (var a = s(e, t), d = 0; d < r.length; d++) { var u = l(r[d]);
                        0 === i[u].references && (i[u].updater(), i.splice(u, 1)) }
                    r = a } } } }, function(e, t, r) { "use strict";
        e.exports = function(e) { var t = []; return t.toString = function() { return this.map((function(t) { var r = function(e, t) { var r = e[1] || "",
                            n = e[3]; if (!n) return r; if (t && "function" == typeof btoa) { var o = (i = n, l = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(s, " */")),
                                a = n.sources.map((function(e) { return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */") })); return [r].concat(a).concat([o]).join("\n") } var i, l, s; return [r].join("\n") }(t, e); return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r })).join("") }, t.i = function(e, r, n) { "string" == typeof e && (e = [
                    [null, e, ""]
                ]); var o = {}; if (n)
                    for (var a = 0; a < this.length; a++) { var i = this[a][0];
                        null != i && (o[i] = !0) }
                for (var l = 0; l < e.length; l++) { var s = [].concat(e[l]);
                    n && o[s[0]] || (r && (s[2] ? s[2] = "".concat(r, " and ").concat(s[2]) : s[2] = r), t.push(s)) } }, t } }, function(e, t, r) {
        /*! merge-deeply v2.1.0 Copyright (c) 2019-2020 riversun.org@gmail.com */
        e.exports = function(e) { var t = {};

            function r(n) { if (t[n]) return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports } return r.m = e, r.c = t, r.d = function(e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                    for (var o in e) r.d(n, o, function(t) { return e[t] }.bind(null, o)); return n }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/", r(r.s = 0) }([function(e, t, r) { e.exports = r(1) }, function(e, t, r) { "use strict";

            function n(e) { return function(e) { if (Array.isArray(e)) return i(e) }(e) || function(e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e) }(e) || a(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function o(e, t) { return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) { var r = [],
                            n = !0,
                            o = !1,
                            a = void 0; try { for (var i, l = e[Symbol.iterator](); !(n = (i = l.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0); } catch (e) { o = !0, a = e } finally { try { n || null == l.return || l.return() } finally { if (o) throw a } } return r } }(e, t) || a(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function a(e, t) { if (e) { if ("string" == typeof e) return i(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0 } }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]; return n }

            function l(e) { return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function s(e, t, r) { var a = function(e) { return e && "object" === l(e) && !Array.isArray(e) },
                    i = r && r.concatArray,
                    d = {};
                r && r.assignToObject && (d = r.assignToObject, r.assignToObject = null); var u, c, m, p = null; if (p = d === e ? e : Object.assign(d, e), a(e) && a(t))
                    for (var h = 0, f = Object.entries(t); h < f.length; h++) { var y = o(f[h], 2),
                            b = y[0],
                            g = y[1],
                            v = e[b];
                        i && Array.isArray(g) && Array.isArray(v) && t !== e ? p[b] = v.concat.apply(v, n(g)) : a(g) && Object.prototype.hasOwnProperty.call(e, b) ? p[b] = s(v, g, r) : Object.assign(p, (m = g, (c = b) in (u = {}) ? Object.defineProperty(u, c, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : u[c] = m, u)) }
                return p }

            function d(e) { var t = null,
                    r = null,
                    n = e.op; if (!n) throw Error('The initialization property "op" cannot be omitted. "merge","overwrite-merge","clone" can be specified.'); var o = "merge" === n,
                    a = "clone" === n,
                    i = "overwrite-merge" === n; if (o) { if (t = e.object1, r = e.object2, !t || !r) throw Error("object1 or object2 is not specified.") } else if (i) { if (t = e.object1, r = e.object2, !t || !r) throw Error("object1 or object2 is not specified."); if (0 === Object.keys(r).length) return null } else { if (!a) throw Error('An invalid "op" property value "'.concat(n, '" has been specified.'));
                    t = e.object1, r = {} } var l, d = Object.create(Object.getPrototypeOf(t)),
                    u = null,
                    c = (l = t, Object.getPrototypeOf(l) !== Object.prototype); return o && c || a ? (s(t, t, { assignToObject: d, concatArray: e && e.concatArray }), u = d) : u = {}, s(a ? u : t, r, { assignToObject: i ? t : u, concatArray: e && e.concatArray }), u }
            r.r(t), r.d(t, "default", (function() { return d })) }]).default
    }, function(e, t) { CALIGN = {}, CALIGN.LEFT_TOP = "LEFT_TOP", CALIGN.HCENTER_TOP = "CENTER_TOP", CALIGN.RIGHT_TOP = "RIGHT_TOP", CALIGN.LEFT_VCENTER = "LEFT_CENTER", CALIGN.HCENTER_VCENTER = "CENTER_CENTER", CALIGN.CENTER = CALIGN.HCENTER_VCENTER, CALIGN.RIGHT_VCENTER = "RIGHT_CENTER", CALIGN.LEFT_BOTTOM = "LEFT_BOTTOM", CALIGN.HCENTER_BOTTOM = "CENTER_BOTTOM", CALIGN.RIGHT_BOTTOM = "RIGHT_BOTTOM", e.exports = CALIGN }, function(e, t, r) { var n = r(16);

        function o() { this.fps = 30, this.durationMillis = 200, this.targetFrame = null, this._crrAlpha = 1, this._toAlpha = 1, this._crrWidth = 0, this._crrHeight = 0, this._toWidth = 0, this._toHeight = 0, this._toX = 0, this._toY = 0, this.pinnedAnimationEnabled = !1, this._pinX = 0, this._pinY = 0, this._pinAnchor = null }
        o.prototype.set = function(e) { var t = this;
            t.targetFrame = e, t.fromWidth(e.getWidth()), t.fromHeight(e.getHeight()), t.toWidth(e.getWidth()), t.toHeight(e.getHeight()); var r = e.getPosition(); return t.fromPosition(r.x, r.y, r.anchor), t }, o.prototype.get = function() { return this.targetFrame }, o.prototype.setDuration = function(e) { return this.durationMillis = e, this }, o.prototype.setFPS = function(e) { return this.fps = e, this }, o.prototype.fromPosition = function(e, t, r) { var n = this; return n.pinnedAnimationEnabled = !0, n._pinX = e, n._pinY = t, n.toPosition(e, t), r && (n._pinAnchor = r), n }, o.prototype.fromWidth = function(e) { return this._crrWidth = e, this }, o.prototype.fromHeight = function(e) { return this._crrHeight = e, this }, o.prototype.toWidth = function(e) { return this._toWidth = e, this }, o.prototype.toHeight = function(e) { return this._toHeight = e, this }, o.prototype.fromAlpha = function(e) { return this._crrAlpha = e, this }, o.prototype.toAlpha = function(e) { return this._toAlpha = e, this }, o.prototype.ease = function(e) { return this._ease = e, this }, o.prototype.toPosition = function(e, t) { return this._toX = e, this._toY = t, this }, o.prototype.toX = function(e) { return this._toX = e, this }, o.prototype.toY = function(e) { return this._toY = e, this }, o.prototype.start = function(e, t) { var r = this,
                o = r._crrWidth,
                a = r._crrHeight,
                i = r._pinX,
                l = r._pinY,
                s = r._crrAlpha; return new Promise((function(d, u) { var c = parseInt(r.fps * (r.durationMillis / 1e3));
                0 == c && (c = 1); var m = (r._toWidth - o) / c,
                    p = (r._toHeight - a) / c,
                    h = (r._toX - i) / c,
                    f = (r._toY - l) / c,
                    y = (r._toAlpha - s) / c;
                r._ease && (y /= 1.24); var b = r.durationMillis / c,
                    g = 0;

                function v() { var e = new n;
                    e.setIntervalMillis(b), e.setCallback((function(e) { if (g == c) { var n = r._toWidth,
                                u = r._toHeight,
                                b = i + h * g,
                                v = l + f * g,
                                C = r._toAlpha;
                            r.pinnedAnimationEnabled && r.targetFrame._setPositionInternally(b, v, r._pinAnchor, n, u), r.targetFrame.htmlElement.style && (r.targetFrame.htmlElement.style.opacity = C), r.targetFrame.setSize(n, u, !0), r._crrWidth = n, r._crrHeight = u, r._pinX = b, r._pinY = v } if (g == c + 1) return e.stopTimer(), r.targetFrame.htmlElement.style && (r.targetFrame.htmlElement.style.opacity = r._toAlpha), void d(r);
                        n = o + m * g, u = a + p * g, b = i + h * g, v = l + f * g, C = s + y * g; if (r.pinnedAnimationEnabled && r.targetFrame._setPositionInternally(b, v, r._pinAnchor, n, u), r.targetFrame.htmlElement.style && (r.targetFrame.htmlElement.style.opacity = C), r.targetFrame.setSize(n, u, !0), 0 == g) { var B = r.targetFrame.parentCanvas; if (B) B.getWindow(r.targetFrame.id) && r.targetFrame.show({ requestFocus: t }) }
                        g++ })), e.startTimer() } if (e) { var C = new n;
                    C.setIntervalMillis(e), C.setCallback((function(e) { e.stopTimer(), v() })), C.startTimer() } else v() })) }, e.exports = o }, function(e, t, r) {
        /*! event-listener-helper(https://github.com/riversun/event-listener-helper) v1.0.2 Copyright (c) 2020 riversun.org@gmail.com */
        e.exports = function(e) { var t = {};

            function r(n) { if (t[n]) return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports } return r.m = e, r.c = t, r.d = function(e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                    for (var o in e) r.d(n, o, function(t) { return e[t] }.bind(null, o)); return n }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/", r(r.s = 0) }([function(e, t, r) { e.exports = r(1) }, function(e, t, r) { "use strict";

            function n(e) { return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

            function o(e, t) { return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) { var r = [],
                            n = !0,
                            o = !1,
                            a = void 0; try { for (var i, l = e[Symbol.iterator](); !(n = (i = l.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0); } catch (e) { o = !0, a = e } finally { try { n || null == l.return || l.return() } finally { if (o) throw a } } return r } }(e, t) || i(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function a(e) { if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (e = i(e))) { var t = 0,
                            r = function() {}; return { s: r, n: function() { return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] } }, e: function(e) { throw e }, f: r } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var n, o, a = !0,
                    l = !1; return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return a = e.done, e }, e: function(e) { l = !0, o = e }, f: function() { try { a || null == n.return || n.return() } finally { if (l) throw o } } } }

            function i(e, t) { if (e) { if ("string" == typeof e) return l(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0 } }

            function l(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]; return n }

            function s(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } }
            r.r(t), r.d(t, "default", (function() { return d })); var d = function() {
                function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.evTargetListenersMap = new Map, this.listenerNum = 0 } var t, r; return t = e, (r = [{ key: "addEventListener", value: function(e, t, r, n) { var o = this,
                            a = null; if (n && (a = this._cloneJson(n)), arguments.length > 4) throw Error("Too many arguments. Number of arguments can be specified 4.");
                        this._checkTypeOfOptions(a); var i = null;
                        a && a.listenerName && (i = a.listenerName); var l = null;
                        a && a.once && (delete a.once, a.callbackOnce = !0, l = function(n) { r(n), o.removeEventListener(e, t, null, a) }); var s = { listenerName: null, success: !0 };
                        l ? e.addEventListener(t, l, a) : e.addEventListener(t, r, a); var d = this.evTargetListenersMap.get(e);
                        d || (d = new Map, this.evTargetListenersMap.set(e, d)); var u = d.get(t); if (u || (u = new Map, d.set(t, u)), null !== i) { if (u.has(i)) throw Error('The listenerName "'.concat(i, '" is already used for the specified event type ').concat(t));
                            u.set(i, { listener: r, onceListener: l, options: a }), s.listenerName = i } else { var c = "listener-".concat(this.listenerNum);
                            a || (a = {}), a.listenerName = c, u.set(c, { listener: r, onceListener: l, options: a }), s.listenerName = c, this.listenerNum += 1 } return s } }, { key: "removeEventListener", value: function(e, t, r, n) { if (arguments.length < 3) throw Error("Three or four arguments are required.");
                        this._checkTypeOfOptions(n); var o = null;
                        n && n.listenerName && (o = n.listenerName); var a = { success: !1, message: "unknown error" },
                            i = this.evTargetListenersMap.get(e); if (!i) return a.message = "DOM element ".concat(e, "(id=").concat(e.id, ") doesn't have any listeners."), a; var l = i.get(t); if (!l) return a.message = "DOM element ".concat(e, "(id=").concat(e.id, ") doesn't have \"").concat(t, '" listeners.'), a; if (o) { var s = l.get(o); if (!s) return a.message = "DOM element ".concat(e, "(id=").concat(e.id, ") doesn't have \"").concat(t, '" listener "').concat(o, '"'), a;
                            l.delete(o), s.options && s.options.callbackOnce ? e.removeEventListener(t, s.onceListener, s.options) : e.removeEventListener(t, s.listener, s.options), a.success = !0 } else if (!o) { if (!r) return a.message = "options.listenerName is not found", a; var d = "listener",
                                u = r,
                                c = this._searchKeyInValueContent(l, d, u); if (c) { var m = l.get(c),
                                    p = m.onceListener,
                                    h = m.options;
                                l.delete(c), p ? e.removeEventListener(t, p, h) : e.removeEventListener(t, r, h), a.success = !0 } else a.success = !1, a.message = "Specified listener could not be deleted from DOM element ".concat(e, "(id=").concat(e.id, ").\n        Since the specified listener is not registered as an event listener,\n        it may have been registered outside of event-listener-helper.") } return a } }, { key: "getEventListeners", value: function(e, t) { return e ? t ? this._getEventListenersWith2Args(e, t) : this._getEventListenersWith1Arg(e) : [] } }, { key: "_getEventListenersWith1Arg", value: function(e) { var t = [],
                            r = this.evTargetListenersMap.get(e); if (!r) return t; var n, i = a(r); try { for (i.s(); !(n = i.n()).done;) { var l, s = o(n.value, 2),
                                    d = s[0],
                                    u = s[1],
                                    c = [],
                                    m = a(u.values()); try { for (m.s(); !(l = m.n()).done;) { var p = l.value;
                                        c.push(this._getFrozenListenerDef(p)) } } catch (e) { m.e(e) } finally { m.f() }
                                c.length > 0 && t.push({ eventType: d, listeners: c }) } } catch (e) { i.e(e) } finally { i.f() } return t } }, { key: "_getEventListenersWith2Args", value: function(e, t) { if (2 !== arguments.length) throw Error("Only two arguments can be specified"); var r = [],
                            n = this.evTargetListenersMap.get(e); if (!n) return r; var o = n.get(t); if (!o) return r; var i, l = a(o.values()); try { for (l.s(); !(i = l.n()).done;) { var s = i.value,
                                    d = this._getFrozenListenerDef(s);
                                r.push(d) } } catch (e) { l.e(e) } finally { l.f() } return r } }, { key: "getEventListener", value: function(e, t, r) { if (3 !== arguments.length) throw Error("Only 3 arguments can be specified"); var n = this.evTargetListenersMap.get(e); if (!n) return null; var o = n.get(t); if (!o) return null; var a = o.get(r),
                            i = this._getFrozenListenerDef(a); return i } }, { key: "hasEventListeners", value: function(e, t) { if (2 !== arguments.length) throw Error("Only two arguments can be specified"); var r = this.evTargetListenersMap.get(e); if (!r) return !1; var n = r.get(t); return !(!n || 0 === n.size) } }, { key: "hasEventListener", value: function(e, t, r) { if (3 !== arguments.length) throw Error("Only 3 arguments can be specified"); var n = this.evTargetListenersMap.get(e); if (!n) return !1; var o = n.get(t); if (!o) return !1; var a = o.get(r); return !!a } }, { key: "_getFrozenListenerDef", value: function(e) { if (!e) return null; var t = {},
                            r = null,
                            n = e.options; return n && (r = {}, t.options = r, n.capture && (r.capture = n.capture), n.callbackOnce && (r.once = n.callbackOnce), n.listenerName && (r.listenerName = n.listenerName)), t.listener = e.listener, Object.freeze(r), Object.freeze(t), t } }, { key: "clearAllEventListeners", value: function() { var e, t = a(this.getAllEventTargets()); try { for (t.s(); !(e = t.n()).done;) { var r = e.value;
                                this.clearEventListeners(r) } } catch (e) { t.e(e) } finally { t.f() } } }, { key: "clearEventListeners", value: function(e, t) { if (!e) throw Error("At least the EventTarget must be specified as an argument"); var r = this.getEventListeners(e, t); if (t) { if (t) { var n, o = a(r); try { for (o.s(); !(n = o.n()).done;) { var i = n.value;
                                        this.removeEventListener(e, t, null, i.options) } } catch (e) { o.e(e) } finally { o.f() } } } else { var l, s = a(r); try { for (s.s(); !(l = s.n()).done;) { var d, u = l.value,
                                        c = u.eventType,
                                        m = a(u.listeners); try { for (m.s(); !(d = m.n()).done;) { var p = d.value.options;
                                            this.removeEventListener(e, c, null, p) } } catch (e) { m.e(e) } finally { m.f() } } } catch (e) { s.e(e) } finally { s.f() } } } }, { key: "clearEventListener", value: function(e, t, r) { var n = this.getEventListener(e, t, r);
                        n && n.options && this.removeEventListener(e, t, null, n.options) } }, { key: "getAllEventTargets", value: function() { return Array.from(this.evTargetListenersMap.keys()) } }, { key: "searchEventListenersByName", value: function(e) { var t, r = [],
                            n = a(this.getAllEventTargets()); try { for (n.s(); !(t = n.n()).done;) { var o, i = t.value,
                                    l = this.evTargetListenersMap.get(i),
                                    s = a(l.keys()); try { for (s.s(); !(o = s.n()).done;) { var d = o.value,
                                            u = l.get(d),
                                            c = this._getFrozenListenerDef(u.get(e));
                                        c && r.push(c) } } catch (e) { s.e(e) } finally { s.f() } } } catch (e) { n.e(e) } finally { n.f() } return r } }, { key: "_searchKeyInValueContent", value: function(e, t, r) { var n, i = a(e); try { for (i.s(); !(n = i.n()).done;) { var l = o(n.value, 2),
                                    s = l[0]; if (l[1][t] === r) return s } } catch (e) { i.e(e) } finally { i.f() } return null } }, { key: "_checkTypeOfOptions", value: function(e) { if ("object" !== n(e) && void 0 !== e) throw "boolean" == typeof e ? new Error("Type of boolean is not accepted as the fourth argument you specify.\n      If you want to enable useCapture, specify {capture: true} as the fourth parameter instead.") : new Error("Type of ".concat(n(e), " is not accepted as the fourth argument you specify.\n      If you want to specify options, specify an object like {capture: true, listenerName:'my-listener-01'}.")) } }, { key: "_cloneJson", value: function(e) { return JSON.parse(JSON.stringify(e)) } }]) && s(t.prototype, r), e }() }]).default
    }, function(e, t) { e.exports = function(e, t) {
            function r() {}
            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e, e.superConstructor = t, e.superClass = t.prototype } }, function(e, t, r) { var n = r(2),
            o = r(8),
            a = r(18),
            i = r(19);

        function l() {}

        function s(e, t) { var r = t.querySelectorAll("img");
            t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e); for (var n = 0; n < r.length; n++) { var o = r[n];
                e !== o && t.removeChild(o) } }
        l.prototype.buildChildMenuAppearance = function(e) { return new i(e) }, l.prototype.buildTextButtonAppearance = function(e) { return e ? n({ op: "clone", object1: e, concatArray: !0 }) : new o }, l.prototype.buildImageButtonAppearance = function(e) { return e ? n({ op: "clone", object1: e }) : new a }, l.prototype.buildButton = function(e) { return this.buildTextButton(e) }, l.prototype.appendChildMenuTo = function(e, t) { var r = document.createElement("div");
            r.classList.add("jsframe-child-menu"), r.innerHTML = e.childMenuHTML, r.style.position = "absolute", r.style.pointerEvents = "none", r.style.width = e.childMenuWidth + "px", r.style.display = "none"; var n = e.xOffset,
                o = parseInt(t.style.height, 10) + e.yOffset + 2; "LEFT" === e.childMenuAlign ? r.style.left = n + "px" : "RIGHT" === e.childMenuAlign ? r.style.right = n + "px" : "CENTER" === e.childMenuAlign && (n = -e.childMenuWidth / 2 + parseInt(t.style.height, 10) / 2, r.style.left = n + "px"), r.style.top = o + "px", r.firstChild.style.pointerEvents = "auto", t.appendChild(r) }, l.prototype.buildTextButton = function(e) { var t = e.size,
                r = t,
                n = t;
            null != e.width && (r = e.width), null != e.height && (n = e.height); var o = document.createElement("div"),
                a = e.borderWidth,
                i = e.borderRadius,
                l = e.borderColorDefault,
                d = e.borderColorFocused,
                u = e.borderColorHovered,
                c = e.borderColorPressed,
                m = e.borderStyleDefault,
                p = e.borderStyleFocused,
                h = e.borderStyleHovered,
                f = e.borderStylePressed,
                y = e.backgroundColorDefault,
                b = e.backgroundColorFocused,
                g = e.backgroundColorHovered,
                v = e.backgroundColorPressed,
                C = e.backgroundBoxShadow,
                B = e.fa,
                E = e.caption,
                w = e.imageDefault,
                x = e.imageFocused,
                A = e.imageHovered,
                F = e.imagePressed;
            w && (w.style.pointerEvents = "none"), x && (x.style.pointerEvents = "none"), A && (A.style.pointerEvents = "none"), F && (F.style.pointerEvents = "none"); var T = e.captionColorDefault,
                I = e.captionColorFocused,
                _ = e.captionColorHovered,
                S = e.captionColorPressed,
                D = e.captionShiftYpx,
                M = e.captionFontRatio;
            o._hasFrameFocus = !1, o._isMouseDown = !1, o.style.position = "absolute", o.style.top = "0px", o.style.left = "0px", o.style.width = r + "px", o.style.height = n + "px", e.cursor ? o.style.cursor = e.cursor : o.style.cursor = "pointer", o.style.margin = "0px", o.style.padding = "0px", o.style.boxSizing = "content-box", o.style.fontFamily = "sans-serif", o.onmousedown = function(e) { o._isMouseDown = !0, o._handleFocusDrawing("onmousedown") }, o.onmouseout = function(e) { o._isMouseDown = !1, o._handleFocusDrawing("onmouseout") }, o.onmouseover = function(e) { o._handleHoverDrawing() }, o.onmouseup = function(e) { o._isMouseDown = !1, o._handleFocusDrawing("onmouseup") }, o._onTakeFocus = function() { o._hasFrameFocus = !0, o._handleFocusDrawing("_onTakeFocus") }, o._onReleaseFocus = function() { o._hasFrameFocus = !1, o._handleFocusDrawing("_onReleaseFocus") }, o._handleFocusDrawing = function(e) { o._hasFrameFocus ? o._isMouseDown ? (o.style.borderColor = c, o.style.borderStyle = f, o.style.backgroundColor = v, o.style.color = S, F && s(F, o)) : (o.style.borderColor = d, o.style.borderStyle = p, o.style.backgroundColor = b, o.style.color = I, x && s(x, o)) : o._isMouseDown ? (o.style.borderColor = c, o.style.borderStyle = f, o.style.backgroundColor = v, o.style.color = S, F && s(F, o)) : (o.style.borderColor = l, o.style.borderStyle = m, o.style.backgroundColor = y, o.style.color = T, w && s(w, o)) }, o._handleHoverDrawing = function() { o._hasFrameFocus, u && (o.style.borderColor = u), h && (o.style.borderStyle = h), g && (o.style.backgroundColor = g), _ && (o.style.color = _), A && s(A, o) }, o.style.padding = "0px", o.style.textAlign = "center", o.style.fontSize = n * M + "px", o.style.lineHeight = n + "px", o.style.borderWidth = "1px", null != a && (o.style.borderWidth = a + "px"), null != C && (o.style.boxShadow = C), o.style.borderRadius = i + parseInt(o.style.borderWidth) + "px"; if (w) s(w, o);
            else if (E) {
                (k = document.createElement("span")).style.width = "100%", k.style.marginTop = D + "px", k.style.display = "inline-block", k.style.textAlign = "center", k.style.fontFamily = "sans-serif", k.appendChild(document.createTextNode(E)), o.appendChild(k) } else if (B) { var k;
                (k = document.createElement("span")).style.pointerEvents = "none", k.style.width = "100%", k.style.marginTop = D + "px", k.style.display = "inline-block", k.style.textAlign = "center", k.style.fontFamily = "sans-serif", k.innerHTML = '<i class="' + B + '"></i>', o.appendChild(k) } else 0; return o._handleFocusDrawing(), o }, e.exports = l }, function(e, t) { e.exports = function() { this.size = 14, this.width = null, this.height = null, this.borderRadius = 2, this.borderWidth = 0, this.borderColorDefault = "#aaaaaa", this.borderColorFocused = this.borderColorDefault, this.borderColorHovered = null, this.borderColorPressed = this.borderColorDefault, this.borderStyleDefault = "solid", this.borderStyleFocused = this.borderStyleDefault, this.borderStyleHovered = null, this.borderStylePressed = this.borderStyleDefault, this.backgroundBoxShadow = null, this.backgroundColorDefault = "transparent", this.backgroundColorFocused = this.backgroundColorDefault, this.backgroundColorHovered = null, this.backgroundColorPressed = this.backgroundColorDefault, this.caption = null, this.captionColorDefault = "white", this.captionColorFocused = this.captionColorDefault, this.captionColorHovered = null, this.captionColorPressed = this.captionColorDefault, this.captionShiftYpx = 0, this.captionFontRatio = 1 } }, function(e, t) { var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };

        function n(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

        function o(e) { return e && "object" === (void 0 === e ? "undefined" : r(e)) && !Array.isArray(e) }
        e.exports.objectAssign = function e(t) { for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) a[i - 1] = arguments[i]; if (!a.length) return t; var l = a.shift(); if (o(t) && o(l))
                for (var s in l) o(l[s]) ? (t[s] || Object.assign(t, n({}, s, {})), e(t[s], l[s])) : Object.assign(t, n({}, s, l[s])); return e.apply(void 0, [t].concat(a)) } }, function(e, t, r) { e.exports = { JSFrame: r(11) } }, function(e, t, r) { "use strict";
        r(12); var n = r(14),
            o = r(3),
            a = r(15),
            i = r(6),
            l = r(17),
            s = r(7),
            d = r(4),
            u = r(5),
            c = { yosemite: r(21), redstone: r(24), popup: r(27), toast: r(30), material: r(31) },
            m = { yosemite: r(34) },
            p = {};

        function h(e, t, r, n, o, a, i, l) { var s = this; if (s.movable = !0, s.id = e, s.property = {}, s.extra = {}, s.parentCanvas = null, s.htmlElement = null, s.pullUpDisabled = !1, l && (s.pullUpDisabled = l.pullUpDisabled), s.htmlElement = document.createElement(p.CBEAN.HTML_ELEMENT), s.htmlElement.id = p.CBEAN.HTML_ELEMENT_ID_PREFIX + e, s.htmlElement.style.position = "absolute", s.htmlElement.style.left = parseInt(t, 10) + "px", s.htmlElement.style.top = parseInt(r, 10) + "px", s.htmlElement.style.width = parseInt(n, 10) + "px", s.htmlElement.style.height = parseInt(o, 10) + "px", null !== a && (s.htmlElement.style.zIndex = a), s.htmlElement.style.borderColor = "#000000", s.htmlElement.style.fontSize = "1px", s.htmlElement.parent = s, s.htmlElement.onmousedown = s.onmouseDown, "ontouchstart" in window) { s.htmlElement.ontouchstart = function(e) { s.onmouseDown.bind(this)(e) } }
            s.htmlElement.typeName = p.CBEAN.TYPE_NAME, s.htmlElement.usage = "nothing", s.htmlElement.isRangeLimited = !1, s.htmlElement.argX = 1, s.htmlElement.argY = 1, s.externalAreaClickedListener = null, s.onMoveListener = null }

        function f(e, t, r, n, o, a) { var i = this;
            i.enablePullUp = !0, i.currentObject = null, i.onTopObject = null, i.offsetX = 0, i.offsetY = 0, i.mouseDownSource = null, i.id = t, i.canvasElement = null, i.parentElement = e, i.beanList = new Array, i.beanIdName = {}, i.beanNameId = {}, i.eventData = new function() { this.x = 0, this.y = 0, this.screenX = 0, this.screenY = 0, this.deltaX = 0, this.deltaY = 0, this.isMoved = !1, this.targetTypeName = null, this.targetUsage = null, this.targetObject = null }, i.baseZIndex = 0, i.setBaseZIndex = function(e) { i.baseZIndex = e }, i.getBaseZIndex = function() { return i.baseZIndex }, i.canvasElement = document.createElement(p.CANVAS.HTML_ELEMENT), i.canvasElement.style.zIndex = 2e3, i.canvasElement.id = i.id, i.canvasElement.style.boxSizing = "border-box", i.canvasElement.style.position = "absolute", i.canvasElement.style.left = parseInt(r) + "px", i.canvasElement.style.top = parseInt(n) + "px", i.canvasElement.style.width = parseInt(o) + p.CANVAS.WIDTH_ADJUST_20180722 + "px", i.canvasElement.style.height = parseInt(a) + p.CANVAS.HEIGHT_ADJUST_20180722 + "px", i.canvasElement.style.backgroundColor = "transparent", i.canvasElement.style.borderStyle = "none", i.canvasElement.style.margin = "0px", i.canvasElement.style.borderWidth = "0px", i.canvasElement.style.borderColor = "transparent", i.parentElement.appendChild(i.canvasElement) }

        function y(e, t, r, n, a, i, l, s) { var d = this;
            y.superConstructor.call(this, e, t, r, n, a, i, l, s), d.anchor = o.LEFT_TOP, d.showTitleBar = s.showTitleBar, d.canvasNetHeight = null, d.canvasNetWidth = null, d.frameHeightAdjust = s.frameHeightAdjust, d.frameComponentMap = {}, d.canvas = null, d.myCanvasId = null, d.floatingButton = null, d.titleBarClassNameDefault = "jsframe-titlebar-default", d.titleBarClassNameFocused = "jsframe-titlebar-focused", d.titleBarHeight = s.titleBarHeight, d.titleBarCaption = s.titleBarCaption, d.titleBarCaptionLeftMargin = s.titleBarCaptionLeftMargin, d.titleBarCaptionFontSize = s.titleBarCaptionFontSize, d.titleBarCaptionFontWeight = s.titleBarCaptionFontWeight, d.titleBarBorderBottomDefault = s.titleBarBorderBottomDefault, d.titleBarBorderBottomFocused = s.titleBarBorderBottomFocused, d.titleBarCaptionTextShadow = s.titleBarCaptionTextShadow, d.titleBarCaptionTextAlign = s.titleBarCaptionTextAlign, d.titleAdjustWidth = 2, d.windowId = e, d.exBorderWidth = 0, d.myCanvasId = e + "_canvas"; var u = document.createElement("img"); if (u.src = "", u.style.position = "absolute", u.style.left = "2px", u.style.top = "2px", u.style.width = "16px", u.style.height = "16px", u.style.visibility = "hidden", d.titleBar = document.createElement("div"), d.titleBar.className = "jsframetitlebar", d.showTitleBar) { if (d.titleBar.id = e + "_title", d.titleBar.style.position = "absolute", d.titleBar.style.boxSizing = "border-box", d.titleBar.style.top = "0px", d.titleBar.style.left = "0px", d.titleBar.style.width = n - d.titleAdjustWidth + p.CANVAS.WIDTH_ADJUST_20180722 + "px", d.titleBar.style.userSelect = "none", d.titleBarHeight) { var c = 0;
                    d.titleBarBorderBottomDefault && (c = 0), d.titleBar.style.height = parseInt(d.titleBarHeight, 10) + 0 + "px" }
                d.titleBarColorDefault && (d.titleBar.style.background = d.titleBarColorDefault), d.titleBar.style.zIndex = 0, d.titleBar.style.color = d.titleBarCaptionColorDefault, d.titleBar.style.fontSize = d.titleBarCaptionFontSize, d.titleBar.style.fontWeight = d.titleBarCaptionFontWeight, d.titleBar.style.textShadow = d.titleBarCaptionTextShadow, d.titleBar.style.textAlign = d.titleBarCaptionTextAlign, d.titleBar.style.lineHeight = d.titleBar.style.height, d.titleBar.style.borderBottom = d.titleBarBorderBottomDefault, d.titleBar.style.overflow = "hidden"; var m = document.createTextNode(""),
                    h = document.createElement("span");
                h.id = d.id + "_titleBarText", null != d.titleBarCaptionLeftMargin ? (h.style.position = "absolute", h.style.left = parseInt(d.titleBarCaptionLeftMargin, 10) + "px") : (h.style.position = "absolute", h.style.left = "0px", h.style.right = "0px"), h.style.top = "0px", h.appendChild(m), d.titleBar.appendChild(h) }
            d.htmlElement.appendChild(d.titleBar); var b = parseInt(d.titleBarHeight, 10) - c,
                g = parseInt(d.titleAdjustWidth, 10); if (d.showTitleBar || (b = 0, g = 0, c = 0), d.canvasNetWidth = n - g, d.canvasNetHeight = a - b - g - 1 - c + d.frameHeightAdjust, d.htmlElement.style.cursor = "move", d.canvas = new f(d.htmlElement, d.myCanvasId, 0, b, n - g, a - b - g), d.canvas.enablePullUp = !1, d.canvas.canvasElement.style.backgroundColor = p.CFRAME.CANVAS_ELEMENT_BGCOLOR, d.canvas.canvasElement.style.cursor = "default", d.canvas.canvasElement.onmousedown = d.canvasMouseDown, "ontouchstart" in window) { d.canvas.canvasElement.ontouchstart = function(e) { var t = e.changedTouches[0];
                    d.canvasMouseDown.bind(this)(t) } }
            d.canvas.canvasElement.parentCFrame = d; var C, B, E, w = parseInt(d.canvas.canvasElement.style.width, 10),
                x = parseInt(d.canvas.canvasElement.style.height, 10),
                A = s.resizeAreaWidth,
                F = s.resizeAreaHeight,
                T = s.resizeAreaOffset;
            s.resizeAreaVisible && (C = "rgba(255, 0, 0, 0.5)", B = "rgba(0, 0, 255, 0.5)", E = "rgba(0, 255, 0, 0.5)"); var I = new v(d.myCanvasId + "_RD", w + T, x + T, A, F, 0, "RD", C);
            I.htmlElement.style.cursor = "se-resize", I.htmlElement.argX = 0, I.htmlElement.argY = 0; var _ = new v(d.myCanvasId + "_DD", 0, x + T, w + T, F, 0, "DD", B);
            _.htmlElement.style.cursor = "n-resize", _.htmlElement.argX = 0, _.htmlElement.argY = 0; var S = new v(d.myCanvasId + "_RR", w + T, 0, A, x + T, 0, "RR", E); for (var D in S.htmlElement.style.cursor = "w-resize", S.htmlElement.argY = 0, S.htmlElement.argX = 0, d.canvas.addBean(I), d.canvas.addBean(_), d.canvas.addBean(S), d.removeMarkers = function() { d.canvas.removeBean(I.id), d.canvas.removeBean(_.id), d.canvas.removeBean(S.id), d.htmlElement.style.cursor = "default" }, d.removeMarkers2 = function() { d.canvas.removeBean(I.id), d.canvas.removeBean(_.id), d.canvas.removeBean(S.id) }, d.enableMarkers = function(e) { e ? (I.htmlElement.style.display = "flex", _.htmlElement.style.display = "flex", S.htmlElement.style.display = "flex", I.htmlElement.style.cursor = "se-resize", _.htmlElement.style.cursor = "n-resize", S.htmlElement.style.cursor = "w-resize") : (I.htmlElement.style.display = "none", _.htmlElement.style.display = "none", S.htmlElement.style.display = "none") }, s.frameComponents) { var M = s.frameComponents[D];
                M.setFrame(d), "closeButton" == M.id && (M.htmlElement.onclick = d.close), M.htmlElement.querySelector(".jsframe-child-menu") && d.eventListenerHelper.addEventListener(M.htmlElement, "click", (function(e) { var t = e.target.getAttribute("component-id"); if (d.hideFrameComponentChildMenus({ exceptFrameComponentId: t }), t) { var r = d.getFrameComponentElement(t).querySelector(".jsframe-child-menu");
                        r && ("table" == r.style.display ? r.style.display = "none" : r.style.display = "table") } }), { listenerName: "frame-component_child-menu-listener" }), d.addFrameComponent(M) }
            d.htmlElement.style.backgroundColor = "transparent", d.htmlElement.oncontextmenu = this.contextMenu;
            d.caribValue = 0, d.exBorderWidth && (d.htmlElement.style.borderWidth = d.exBorderWidth + "px"), d.htmlElement.style.width = parseInt(d.htmlElement.style.width, 10) - 0 + "px", d.htmlElement.style.height = parseInt(d.htmlElement.style.height, 10) - 0 + 1 + "px", d.htmlElement.typeName = "cwindow", d.htmlElement.overflow = "auto", d.htmlElement.style.boxSizing = "content-box", s.frameBorderStyle && (d.htmlElement.style.borderStyle = s.frameBorderStyle), s.frameBoxShadow && (d.htmlElement.style.boxShadow = s.frameBoxShadow), parseInt(s.frameBorderWidthDefault, 10) >= 0 && (d.htmlElement.style.borderWidth = s.frameBorderWidthDefault, d.htmlElement.style.borderColor = s.frameBorderColorDefault), parseInt(s.frameBorderRadius, 10) >= 0 && (d.htmlElement.style.borderRadius = s.frameBorderRadius), d.onCloseFrameListener = null }

        function b(e, t, r, o, a, i) { var l = t,
                s = r,
                d = o,
                c = a,
                m = i.zindex,
                p = this;
            this.jsFrame = null, this.control = null, this.minFrameWidth = 128, this.minWindowHeight = 32, this.eventListenerHelper = new u, this.overrayTransparentScreenEnabled = !1, this.overrayTransparentScreenOnResize = !0, this.titleBarColorFocused = i.titleBarColorFocused, this.titleBarColorDefault = i.titleBarColorDefault, this.titleBarCaptionColorDefault = i.titleBarCaptionColorDefault, this.titleBarCaptionColorFocused = i.titleBarCaptionColorFocused, b.superConstructor.call(p, e, l, s, d, c, m, null, i), p.frameBorderColorDefault = i.frameBorderColorDefault, p.frameBorderColorFocused = i.frameBorderColorFocused, p.frameBorderWidthDefault = i.frameBorderWidthDefault, p.frameBorderWidthFocused = i.frameBorderWidthFocused, p.iframe = null, p.ifDelta = 0, p.resizable = !0, p.onMouseMoveOnIframe = null, p.onMouseUpOnIframe = null, p._hasFocus = !1, p._hasFocusTime = 0, p.htmlElement.typeName = "cifwindow"; var h = "riversun_" + e;
            p.dframe = document.createElement("div"), p.iframe = document.createElement("iframe"), p.iframe.name = h, p.iframe.id = h, p.iframe.frameBorder = "0", p.iframe.zIndex = -1, p.iframe.allowTransparency = "true", p.iframe.width = p.canvasNetWidth - p.ifDelta + 0, p.iframe.height = p.canvasNetHeight - p.ifDelta + 0, p.showTitleBar = i.showTitleBar, p.getFrameInnerBorderRadius = i.getFrameInnerBorderRadius, p.frameBorderRadius = i.frameBorderRadius, p.adjustFrameBorderRadius(), p.useIframe = !1, p.canvas.canvasElement.appendChild(p.iframe), p.canvas.canvasElement.appendChild(p.dframe), this.setUseIframe = function(e) { p.useIframe = e, p.iframe.style.visibility = "hidden", p.iframe.style.position = "absolute", p.iframe.style.left = "0px", p.iframe.style.top = "0px", p.iframe.style.width = "100%", p.iframe.style.height = "100%", p.dframe.style.visibility = "hidden", p.dframe.style.position = "absolute", p.dframe.style.left = "0px", p.dframe.style.boxSizing = "content-box", p.dframe.style.top = "0px", p.dframe.style.width = "100%", p.dframe.style.height = "100%", p.dframe.style.backgroundColor = "white", e ? (p.iframe.style.visibility = "visible", p.dframe.style.visibility = "hidden") : (p.iframe.style.visibility = "hidden", p.dframe.style.visibility = "visible") }, p.setUseIframe(i.useIframe), (p.overrayTransparentScreenEnabled || p.overrayTransparentScreenOnResize) && (p.transparence = document.createElement("span"), p.transparence.style.position = "absolute", p.transparence.style.left = "0px", p.transparence.style.top = "0px", p.transparence.style.width = "0px", p.transparence.style.height = "0px", p.transparence.style.zIndex = 4, p.transparence.style.borderWidth = "0px", p.transparence.style.borderColor = "#ff00ee", p.transparence.style.borderStyle = "none", p.transparence.style.cursor = "default", p.transparence.style.pointerEvents = "none", p.canvas.canvasElement.style.backgroundColor = i.frameBackgroundColor, p.canvas.canvasElement.appendChild(p.transparence)), p.eventEmitter = new n, p.appearance = i }

        function g(e, t, r, n, o, a) { g.superConstructor.call(this, e, t, r, n, o, a); var i = this;
            document.addEventListener("click", (function(e) { for (var t in i.beanList) { i.beanList[t].onBodyClicked(e) } })) }

        function v(e, t, r, n, o, a, i, l) { var s = this;
            v.superConstructor.call(this, e, t, r, n, o, a, i), s.htmlElement.typeName = "cmarkerwindow", s.htmlElement.usage = i, s.htmlElement.isRangeLimited = !1, s.htmlElement.style.borderStyle = "none", s.htmlElement.style.zIndex = 1, l && (s.htmlElement.style.background = l), s.getWindowType = function() { return "CMarkerWindow" } }

        function C(e) { var t, r = this,
                n = null;
            (r.isWindowManagerFixed = !0, e && 0 == e.fixed && (r.isWindowManagerFixed = !1), e && e.parentElement && (n = e.parentElement), r.hAlign = "left", r.vAlign = "top", e && e.horizontalAlign && (r.hAlign = e.horizontalAlign), e && e.verticalAlign && (r.vAlign = e.verticalAlign), r.pullToRefresh = !1, e && "boolean" == typeof e.pullToRefresh && (r.pullToRefresh = e.pullToRefresh), r.touchActionManipulation = !0, e && "boolean" == typeof e.touchActionManipulation && (r.touchActionManipulation = e.touchActionManipulation), n) ? r.isWindowManagerFixed ? ((t = document.createElement("div")).id = "jsFrame_fixed_" + r.generateUUID(), t.setAttribute("style", "position:fixed;" + r.hAlign + ":0px;" + r.vAlign + ":0px;margin:0px;padding:0px;"), n.appendChild(t)) : ((t = document.createElement("div")).id = "jsFrame_absolute_" + r.generateUUID(), t.setAttribute("style", "position:absolute;" + r.hAlign + ":0px;" + r.vAlign + ":0px;margin:0px;padding:0px;"), n.appendChild(t)): r.isWindowManagerFixed ? ((t = document.createElement("div")).id = "jsFrame_fixed_" + r.generateUUID(), t.setAttribute("style", "position:fixed;" + r.hAlign + ":0px;" + r.vAlign + ":0px;margin:0px;padding:0px;"), document.body.appendChild(t), n = t) : ((t = document.createElement("div")).id = "jsFrame_absolute_" + r.generateUUID(), t.setAttribute("style", "position:absolute;" + r.hAlign + ":0px;" + r.vAlign + ":0px;margin:0px;padding:0px;"), document.body.appendChild(t), n = t); if (document.addEventListener("mouseup", o), document.addEventListener("mousemove", a), "ontouchend" in window) { document.addEventListener("touchend", (function(e) { o.bind(this)(e) })) } if ("ontouchmove" in window) { r.touchActionManipulation && r.doEnableTouchActionManipulation(), r.pullToRefresh || r.doDisablePullToRefresh();
                document.addEventListener("touchmove", (function(e) { e.preventDefault(), a.bind(this)(e) })) }

            function o(e) { r.windowManager.windowMouseUp(e) }

            function a(e) { r.windowManager.windowMouseMove(e) }
            r.windowManager = new g(n, "windowManager_" + r.generateUUID(), 0, 0, 0, 0), r.domPartsBuilder = null }
        p.CBEAN = {}, p.CBEAN.HTML_ELEMENT = "span", p.CBEAN.HTML_ELEMENT_ID_PREFIX = "htmlElement_", p.CBEAN.TYPE_NAME = "bean", h.prototype.getWindowType = function() { return "CBeanFrame" }, h.prototype.setOnMoveListener = function(e) { this.onMoveListener = e }, h.prototype._onMove = function(e) { this.onMoveListener && this.onMoveListener(e) }, h.prototype.setMovable = function(e) { var t = this; return e ? (t.htmlElement.argX = 1, t.htmlElement.argY = 1) : (t.htmlElement.argX = 0, t.htmlElement.argY = 0), t.movable = e, t }, h.prototype.setParentCanvas = function(e) { return this.parentCanvas = e, this.htmlElement.parentCanvas = this.parentCanvas, this }, h.prototype.setOnExternalAreaClickedListener = function(e) { return this.externalAreaClickedListener = e, this }, h.prototype.onBodyClicked = function(e) { var t = this,
                r = e.pageX,
                n = e.pageY,
                o = parseInt(t.htmlElement.style.left),
                a = parseInt(t.htmlElement.style.top),
                i = parseInt(t.htmlElement.style.width),
                l = parseInt(t.htmlElement.style.height);
            o < r && r < o + i && a < n && n < a + l || t.externalAreaClickedListener && t.externalAreaClickedListener() }, h.prototype.onmouseDown = function(e) { var t = e; if ("touchstart" === e.type) { var r = e.changedTouches; if (1 !== e.touches.length) return !0;
                t = r[0] } var n = this.parent; if (0 == t.button || "touchstart" === e.type) { if (n.pullUpDisabled) return !1;
                this.parentCanvas.currentObject = this, this.parentCanvas.pullUp(n.id) } else if (2 == t.button) return !1; return this.parentCanvas.currentObject && (this.parentCanvas.offsetX = t.pageX - parseInt(this.parentCanvas.currentObject.style.left, 10), this.parentCanvas.offsetY = t.pageY - parseInt(this.parentCanvas.currentObject.style.top, 10)), !1 }, p.CANVAS = {}, p.CANVAS.HTML_ELEMENT = "div", p.CANVAS.WIDTH_ADJUST_20180722 = 2, p.CANVAS.HEIGHT_ADJUST_20180722 = 3, f.prototype.mouseMove = function(e) { var t = this,
                r = e; if ("touchmove" === e.type) { var n = e.changedTouches; if (1 !== e.touches.length) return !0;
                r = n[0] } if (t.currentObject) { t.eventData.targetTypeName = t.currentObject.typeName, t.eventData.targetUsage = t.currentObject.usage, t.eventData.targetObject = t.currentObject; var o = r.pageX - t.offsetX,
                    a = r.pageY - t.offsetY,
                    i = (r.pageX, r.pageY, t.currentObject.style.left),
                    l = t.currentObject.style.top,
                    s = parseInt(o, 10),
                    d = parseInt(a, 10),
                    u = s + parseInt(t.currentObject.style.width, 10),
                    c = d + parseInt(t.currentObject.style.height, 10),
                    m = parseInt(t.canvasElement.style.width, 10),
                    p = parseInt(t.canvasElement.style.height, 10),
                    h = 0,
                    f = 0; if (1 == t.currentObject.isRangeLimited && (s <= 0 || u > m || d <= 0 || c > p)) h = 0, f = 0;
                else { h = parseInt(o, 10) - parseInt(i, 10), f = parseInt(a, 10) - parseInt(l, 10), t.currentObject.style.left = parseInt(t.currentObject.style.left) + h * t.currentObject.argX + "px", t.currentObject.style.top = parseInt(t.currentObject.style.top) + f * t.currentObject.argY + "px"; var y = t.currentObject.parent;
                    y && y._onMove && y._onMove() } return t.eventData.deltaX = h, t.eventData.deltaY = f, t.eventData } return null }, f.prototype.mouseUp = function(e) { this.currentObject = null, this.mouseDownSource = null }, f.prototype.pullUp = function(e) { var t = this,
                r = [],
                n = t.beanList; for (var o in n) r.push(n[o]); var a = n[e];
            t.enablePullUp && t.pullUpSort(a, r, t.baseZIndex), t.onTopObject = a }, f.prototype.pullUpSort = function(e, t, r) { for (var n in e.htmlElement.style.zIndex = t.length + r, t.sort((function(e, t) { return -parseInt(e.htmlElement.style.zIndex, 10) + parseInt(t.htmlElement.style.zIndex, 10) })), t) t[n].htmlElement.style.zIndex = t.length - 1 - n + r }, f.prototype.removeBean = function(e) { var t = this.beanList,
                r = t[e];
            this.canvasElement.removeChild(r.htmlElement), delete t[e] }, f.prototype.addBean = function(e) { var t = this,
                r = t.beanList,
                n = t.beanIdName,
                o = t.beanNameId;
            r[e.id] = e, e.property.name && (o[e.property.name] = e.id, n[e.id] = e.property.name); var a = 0; for (var i in r) a++;
            e.htmlElement.style.zIndex = a + t.baseZIndex, e.setParentCanvas(t), this.canvasElement.appendChild(e.htmlElement) }, f.prototype.getParentElement = function() { return this.parentElement }, p.CFRAME = {}, p.CFRAME.CANVAS_ELEMENT_BGCOLOR = "transparent", p.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX = "window__modal_window_background_", i(y, h), y.prototype.setTitleBarClassName = function(e, t) { return e && (this.titleBarClassNameDefault = e, this.titleBarClassNameFocused = e), t && (this.titleBarClassNameFocused = t), this }, y.prototype.addFrameComponent = function(e) { return this.frameComponentMap[e.id] = e, this.canvas.canvasElement.appendChild(e.htmlElement), this }, y.prototype.getFrameComponentElement = function(e) { return this.frameComponentMap[e] ? this.frameComponentMap[e].htmlElement : null }, y.prototype.removeFrameComponentById = function(e) { var t = this.frameComponentMap[e];
            this.canvas.canvasElement.removeChild(t.htmlElement), delete this.frameComponentMap[e] }, y.prototype.showFrameComponent = function(e, t) { var r = this.getFrameComponentElement(e); return r && (r.style.display = t || "flex"), this }, y.prototype.hideFrameComponent = function(e) { var t = this.getFrameComponentElement(e); return t && (t.style.display = "none"), this }, y.prototype.hideAllVisibleFrameComponents = function() { var e = this.frameComponentMap; for (var t in e)
                if (e.hasOwnProperty(t)) { var r = e[t].htmlElement; "none" === r.style.display && (r._alreadyNone = !0), r.style.display = "none" } }, y.prototype.showAllVisibleFrameComponents = function() { var e = this.frameComponentMap; for (var t in e)
                if (e.hasOwnProperty(t)) { var r = e[t].htmlElement;
                    r._alreadyNone ? r._alreadyNone = null : r.style.display = "flex" } }, y.prototype.hideFrameComponentChildMenus = function(e) { var t = this.frameComponentMap; for (var r in t)
                if (t.hasOwnProperty(r)) { if (e && e.exceptFrameComponentId && r === e.exceptFrameComponentId) continue; var n = t[r];
                    n.childMenu && (n.childMenu.style.display = "none") } }, y.prototype.setTitle = function(e) { var t = this; if (t.title = e, t.showTitleBar) { var r = document.createTextNode(e);
                t.titleBar.firstChild.replaceChild(r, t.titleBar.firstChild.firstChild) } return t }, y.prototype.resize = function(e, t, r, n) { var o = this,
                a = parseInt(o.htmlElement.style.left, 10),
                i = parseInt(o.htmlElement.style.top, 10),
                l = parseInt(o.htmlElement.style.width, 10),
                s = parseInt(o.htmlElement.style.height, 10);
            o.htmlElement.style.left = parseInt(a + e, 10) + "px", o.htmlElement.style.top = parseInt(i + t, 10) + "px", o.htmlElement.style.width = parseInt(l + r, 10) + "px", o.htmlElement.style.height = parseInt(s + n, 10) + "px"; var d = parseInt(o.canvas.canvasElement.style.width, 10),
                u = parseInt(o.canvas.canvasElement.style.height, 10); for (var c in o.canvas.canvasElement.style.width = d + r + "px", o.canvas.canvasElement.style.height = u + n + "px", o.showTitleBar && (o.titleBar.style.width = d + r + "px"), o.canvas.beanList) { var m = o.canvas.beanList[c]; "cmarkerwindow" == m.htmlElement.typeName && ("RD" == m.htmlElement.usage ? (m.htmlElement.style.left = parseInt(m.htmlElement.style.left, 10) + r + "px", m.htmlElement.style.top = parseInt(m.htmlElement.style.top, 10) + n + "px") : "DD" == m.htmlElement.usage ? (m.htmlElement.style.width = parseInt(m.htmlElement.style.width, 10) + r + "px", m.htmlElement.style.top = parseInt(m.htmlElement.style.top, 10) + n + "px") : "RR" == m.htmlElement.usage && (m.htmlElement.style.left = parseInt(m.htmlElement.style.left, 10) + r + "px", m.htmlElement.style.height = parseInt(m.htmlElement.style.height, 10) + n + "px")) } }, y.prototype.canvasMouseDown = function(e) { null == this.parentCFrame.parentCanvas.mouseDownSource && (this.parentCFrame.parentCanvas.mouseDownSource = "childcanvas") }, y.prototype.mouseUp = function(e) { this.canvas.mouseUp(e) }, y.prototype.close = function(e) { var t = this.parentObject.parentCanvas,
                r = this.parentObject,
                n = r.id;
            r.closeInternally(e, t, n) }, y.prototype.closeFrame = function(e) { var t = this.parentCanvas;
            this.closeInternally(e, t, this.windowId) }, y.prototype.closeInternally = function(e, t, r) { var n = this;
            t && (t.removeBean(r), n.modalBackgroundWindowId && (t.removeBean(n.modalBackgroundWindowId), n.modalBackgroundWindowId = null), n.onCloseFrameListener && n.onCloseFrameListener(n)) }, y.prototype.setOnCloseFrameListener = function(e) { this.onCloseFrameListener = e }, y.prototype.contextMenu = function() { return !1 }, y.prototype.setTitleBarTextColor = function(e) { this.titleBar.style.color = e }, y.prototype.setPosition = function(e, t, r) { var n = this.getWidth(),
                o = this.getHeight(); return this._setPositionInternally(e, t, r, n, o), this }, y.prototype._setPositionInternally = function(e, t, r, n, a) { var i = this;
            r && (i.anchor = r), r && o.LEFT_TOP != r ? o.HCENTER_TOP == r ? (i.htmlElement.style.left = -n / 2 + e + "px", i.htmlElement.style.top = t + "px") : o.RIGHT_TOP == r ? (i.htmlElement.style.left = -n + e + "px", i.htmlElement.style.top = t + "px") : o.LEFT_VCENTER == r ? (i.htmlElement.style.left = e + "px", i.htmlElement.style.top = -a / 2 + t + "px") : o.HCENTER_VCENTER == r ? (i.htmlElement.style.left = -n / 2 + e + "px", i.htmlElement.style.top = -a / 2 + t + "px") : o.RIGHT_VCENTER == r ? (i.htmlElement.style.left = -n + e + "px", i.htmlElement.style.top = -a / 2 + t + "px") : o.LEFT_BOTTOM == r ? (i.htmlElement.style.left = e + "px", i.htmlElement.style.top = -a + t + "px") : o.HCENTER_BOTTOM == r ? (i.htmlElement.style.left = -n / 2 + e + "px", i.htmlElement.style.top = -a + t + "px") : o.RIGHT_BOTTOM == r && (i.htmlElement.style.left = -n + e + "px", i.htmlElement.style.top = -a + t + "px") : (i.htmlElement.style.left = e + "px", i.htmlElement.style.top = t + "px") }, y.prototype.getPosition = function() { var e, t, r = this,
                n = r.getWidth(),
                a = r.getHeight(),
                i = r.anchor; return i && o.LEFT_TOP != i ? o.HCENTER_TOP == i ? (e = parseInt(r.htmlElement.style.left, 10) + n / 2, t = parseInt(r.htmlElement.style.top, 10)) : o.RIGHT_TOP == i ? (e = parseInt(r.htmlElement.style.left, 10) + n, t = parseInt(r.htmlElement.style.top, 10)) : o.LEFT_VCENTER == i ? (e = parseInt(r.htmlElement.style.left, 10), t = parseInt(r.htmlElement.style.top, 10) + a / 2) : o.HCENTER_VCENTER == i ? (e = parseInt(r.htmlElement.style.left, 10) + n / 2, t = parseInt(r.htmlElement.style.top, 10) + a / 2) : o.RIGHT_VCENTER == i ? (e = parseInt(r.htmlElement.style.left, 10) + n, t = parseInt(r.htmlElement.style.top, 10) + a / 2) : o.LEFT_BOTTOM == i ? (e = parseInt(r.htmlElement.style.left, 10), t = parseInt(r.htmlElement.style.top, 10) + a) : o.HCENTER_BOTTOM == i ? (e = parseInt(r.htmlElement.style.left, 10) + n / 2, t = parseInt(r.htmlElement.style.top, 10) + a) : o.RIGHT_BOTTOM == i && (e = parseInt(r.htmlElement.style.left, 10) + n, t = parseInt(r.htmlElement.style.top, 10) + a) : (e = parseInt(r.htmlElement.style.left, 10), t = parseInt(r.htmlElement.style.top, 10)), { x: e, y: t, anchor: i } }, y.prototype.getLeft = function() { return parseInt(this.htmlElement.style.left, 10) }, y.prototype.getTop = function() { return parseInt(this.htmlElement.style.top, 10) }, y.prototype.getWidth = function() { return parseInt(this.htmlElement.style.width, 10) }, y.prototype.getHeight = function() { return parseInt(this.htmlElement.style.height, 10) }, y.prototype.getSize = function() { return { width: this.getWidth(), height: this.getHeight() } }, y.prototype.setSize = function(e, t, r) { var n = !0; return r && (n = !1), this.resize(0, 0, e - this.getWidth(), t - this.getHeight(), n), this }, y.prototype.getWindowId = function() { return this.windowId }, y.prototype.getName = function() { return this.property.name }, y.prototype.setName = function(e) { this.property.name = e }, i(b, y), b.prototype.getFrameView = function() { return this.dframe }, b.prototype.getFrameAppearance = function() { return this.appearance }, b.prototype.setHTML = function(e) { this.dframe.innerHTML = e }, b.prototype.setFrameInFrame = function(e) { var t = this.dframe ? this.dframe.firstChild : null;
            t && (Date.now || (Date.now = function() { return (new Date).getTime() }), e ? this.eventEmitter.only("resize", "fif-listener", (function() { t.setAttribute(a.MATCH_PARENT_CHANGE_MARKER_ATTR, Date.now()) })) : (t.removeAttribute(a.MATCH_PARENT_CHANGE_MARKER_ATTR), this.eventEmitter.only("resize", "fif-listener", (function() {})))) }, b.prototype.$ = function(e) { return this.useIframe ? this.iframe.contentWindow.document.querySelector(e) : this.dframe.querySelector(e) }, b.prototype.on = function(e, t, r) { var n = this,
                o = n.getFrameComponentElement(e);
            o && n.eventListenerHelper.addEventListener(o, t, (function(o) { r(n, o, { type: "frameComponent", id: e, eventType: t }) }), { listenerName: "frame-component-listener" }), "frame" !== e && "window" !== e || ("move" !== t || n.eventEmitter.hasListenerFuncs("move") || n.setOnMoveListener((function(e) { n.eventEmitter.emit("move", n._getCurrentSizePos()) })), n.eventEmitter.on(t, r)); var a = n.$(e); if (a && (n.eventListenerHelper.hasEventListener(a, t, "frame-dom-listener") && n.eventListenerHelper.removeEventListener(a, t, null, { listenerName: "frame-dom-listener" }), n.eventListenerHelper.addEventListener(a, t, (function(o) { r(n, o, { type: "dom", id: e, eventType: t }) }), { listenerName: "frame-dom-listener" })), !a) { var i = n.canvas.canvasElement.querySelector(e);
                i && i.addEventListener(t, (function(o) { r(n, o, { type: "dom", id: e, eventType: t }) })) } }, b.prototype.adjustFrameBorderRadius = function() { var e = this; if (parseInt(e.frameBorderRadius, 10) > 0) { var t = e.getFrameInnerBorderRadius(e, e._hasFocus),
                    r = t.frameAppearance,
                    n = t.innerBorderRadius,
                    o = parseInt(r.titleBarHeight, 10);
                e.showTitleBar ? (e.canvas.canvasElement.style.borderBottomRightRadius = n, e.canvas.canvasElement.style.borderBottomLeftRadius = n, e.iframe.style.borderBottomRightRadius = n, e.iframe.style.borderBottomLeftRadius = n, e.titleBar.style.borderTopLeftRadius = n, e.titleBar.style.borderTopRightRadius = n) : (e.canvas.canvasElement.style.borderRadius = n, e.iframe.style.borderRadius = n), e.dframe && (0 === o && (e.dframe.style.borderTopRightRadius || (e.dframe.style.borderTopRightRadius = n), e.dframe.style.borderTopLeftRadius || (e.dframe.style.borderTopLeftRadius = n)), e.dframe.style.borderBottomRightRadius = n, e.dframe.style.borderBottomLeftRadius = n) } }, b.prototype.handleReleasingFocus = function(e) { var t = this,
                r = t._hasFocus; for (var n in t._hasFocus = !1, t.titleBar.className = t.titleBarClassNameDefault, t.titleBarColorDefault && (t.titleBar.style.background = t.titleBarColorDefault), t.titleBar.style.color = t.titleBarCaptionColorDefault, t.frameBorderColorDefault && (t.htmlElement.style.borderColor = t.frameBorderColorDefault), t.frameBorderWidthDefault && (t.htmlElement.style.borderWidth = t.frameBorderWidthDefault, t.adjustFrameBorderRadius()), "cifwindow" == t.htmlElement.typeName && t.overrayTransparentScreenEnabled && (t.transparence.style.width = parseInt(t.iframe.width, 10) + "px", t.transparence.style.height = parseInt(t.iframe.height, 10) + "px"), t.frameComponentMap) { t.frameComponentMap[n].handleReleasingFocus() } return t.titleBarBorderBottomDefault && (t.titleBar.style.borderBottom = t.titleBarBorderBottomDefault), r && t.eventEmitter.emit("blur", { target: t }), t }, b.prototype.handleTakingFocus = function(e) { var t = this,
                r = t._hasFocus; for (var n in t._hasFocus = !0, t._hasFocus = Date.now(), t.overrayTransparentScreenEnabled && (t.transparence.style.width = "0px", t.transparence.style.height = "0px"), t.titleBar.className = t.titleBarClassNameFocused, t.titleBarColorFocused && (t.titleBar.style.background = t.titleBarColorFocused), t.titleBar.style.color = t.titleBarCaptionColorFocused, t.frameBorderColorFocused && (t.htmlElement.style.borderColor = t.frameBorderColorFocused), t.frameBorderWidthFocused && (t.htmlElement.style.borderWidth = t.frameBorderWidthFocused, t.adjustFrameBorderRadius()), t.titleBarBorderBottomFocused && (t.titleBar.style.borderBottom = t.titleBarBorderBottomFocused), t.frameComponentMap) { t.frameComponentMap[n].handleTakingFocus() } return r || t.eventEmitter.emit("focus", { target: t }), t }, y.prototype.show = function(e) { return this.htmlElement.style.display = "flex", e && 0 == e.requestFocus || this.requestFocus(), this }, y.prototype.showModal = function(e) { var t = this,
                r = new l;
            r.showTitleBar = !0, r.showCloseButton = !1, r.frameBorderRadius = "0px", r.frameBorderStyle = "none", r.frameBorderWidthDefault = "0px", r.frameBorderWidthFocused = "0px", r.frameBoxShadow = null, r.frameBackgroundColor = "transparent", r.frameComponents = [], r.frameHeightAdjust = 0, r.titleBarHeight = "0px", r.titleBarBorderBottomFocused = null, r.titleBarCaptionLeftMargin = "0px", r.onInitialize = function() {}, r.pullUpDisabled = !0; var n = t.parentCanvas,
                o = p.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX + t.id,
                a = new b(o, 0, 0, 1, 1, r);
            a.setSize(window.innerWidth, window.innerHeight, !0), a.setResizable(!1), window.addEventListener("resize", (function() { a.setSize(window.innerWidth, window.innerHeight, !0) })), t.modalBackgroundWindowId = o, a.hide(), n.addWindow(a), a.setTitle("").getFrameView().innerHTML = '<div class="jsframe-modal-window-background"></div>', a.getFrameView().style.backgroundColor = "rgba(0,0,0,0.0)", a.show(), t.show(), e && t.setOnCloseFrameListener(e) }, y.prototype.getWindowManager = function() { return this.parentCanvas }, b.prototype.hide = function() { return this.htmlElement.style.display = "none", this }, b.prototype.onmouseDown = function(e) { document.body.ondrag = function() { return !1 }, this.decorator = y.prototype.onmouseDown, this.decorator(e); var t = this.parent,
                r = this.parentCanvas; for (var n in r.beanList) { var o = r.beanList[n];
                n == t.getWindowId() || o.handleReleasingFocus() }
            t.handleTakingFocus() }, b.prototype.mouseUp = function(e) {
            (this.overrayTransparentScreenEnabled || this.overrayTransparentScreenOnResize) && (this.parentCanvas.onTopObject == this ? (this.transparence.style.width = "0px", this.transparence.style.height = "0px") : this.overrayTransparentScreenEnabled && (this.transparence.style.width = parseInt(this.iframe.width) + "px", this.transparence.style.height = parseInt(this.iframe.height) + "px")), this.decorator = y.prototype.mouseUp, this.decorator(e), document.body.ondrag = null, document.body.onselectstart = null, this.transparence.style.pointerEvents = "none" }, b.prototype.setMinFrameSize = function(e, t) { this.minFrameWidth = e, this.minWindowHeight = t }, b.prototype.resize = function(e, t, r, n, o) { if (!this.resizable && o) return null; var a = this.getSize(),
                i = parseInt(this.htmlElement.style.left, 10),
                l = parseInt(this.htmlElement.style.top, 10),
                s = parseInt(this.htmlElement.style.width, 10),
                d = parseInt(this.htmlElement.style.height, 10);
            o && s + r < this.minFrameWidth & r < 0 && (this.htmlElement.style.width = s + "px", r = 0), o && d + n < this.minWindowHeight & n < 0 && (this.htmlElement.style.height = d + "px", n = 0), this.htmlElement.style.left = i + e + "px", this.htmlElement.style.top = l + t + "px", this.htmlElement.style.width = s + r + "px", this.htmlElement.style.height = d + n + "px"; var u = parseInt(this.canvas.canvasElement.style.width, 10),
                c = parseInt(this.canvas.canvasElement.style.height, 10); for (var m in this.canvas.canvasElement.style.width = u + r + "px", this.canvas.canvasElement.style.height = c + n + "px", this.titleBar.style.width = u - this.ifDelta + r + 0 + "px", this.iframe.width = u - this.ifDelta + r + 0 + "px", this.iframe.height = c - this.ifDelta + n + this.frameHeightAdjust + "px", (this.overrayTransparentScreenEnabled || this.overrayTransparentScreenOnResize) && (this.transparence.style.width = parseInt(this.iframe.width) + "px", this.transparence.style.height = parseInt(this.iframe.height) + "px"), this.frameComponentMap) { this.frameComponentMap[m].updateAlign() } for (var p in this.canvas.beanList) { var h = this.canvas.beanList[p]; "cmarkerwindow" == h.htmlElement.typeName && ("RD" == h.htmlElement.usage ? (h.htmlElement.style.left = parseInt(h.htmlElement.style.left) + r + "px", h.htmlElement.style.top = parseInt(h.htmlElement.style.top) + n + "px") : "DD" == h.htmlElement.usage ? (h.htmlElement.style.width = parseInt(h.htmlElement.style.width) + r + "px", h.htmlElement.style.top = parseInt(h.htmlElement.style.top) + n + "px") : "RR" == h.htmlElement.usage && (h.htmlElement.style.left = parseInt(h.htmlElement.style.left) + r + "px", h.htmlElement.style.height = parseInt(h.htmlElement.style.height) + n + "px")) } var f = this.getSize();
            a.width === f.width && a.height === f.height || this.eventEmitter.emit("resize", this._getCurrentSizePos()) }, b.prototype._getCurrentSizePos = function() { var e = this.getSize(); return { target: this, pos: this.getPosition(), size: e } }, b.prototype.resizeDirect = function(e, t, r) { if (!this.resizable && r) return null;
            this.htmlElement.style.width = e + "px", this.htmlElement.style.height = t + "px";
            parseInt(this.canvas.canvasElement.style.width), parseInt(this.canvas.canvasElement.style.height); for (var n in this.canvas.canvasElement.style.width = e + "px", this.canvas.canvasElement.style.height = t - this.titleBar.style.height + "px", this.titleBar.style.width = e - this.ifDelta + "px", this.iframe.width = e - this.ifDelta + "px", this.iframe.height = t - this.ifDelta + this.frameHeightAdjust + "px", (this.overrayTransparentScreenEnabled || this.overrayTransparentScreenOnResize) && (this.transparence.style.width = parseInt(this.iframe.width) + "px", this.transparence.style.height = parseInt(this.iframe.height) + "px"), this.frameComponentMap) { this.frameComponentMap[n].updateAlign() } for (var o in this.canvas.beanList) { var a = this.canvas.beanList[o]; "cmarkerwindow" == a.htmlElement.typeName && ("RD" == a.htmlElement.usage ? (a.htmlElement.style.left = e + "px", a.htmlElement.style.top = t + "px") : "DD" == a.htmlElement.usage ? (a.htmlElement.style.width = e + "px", a.htmlElement.style.top = t + "px") : "RR" == a.htmlElement.usage && (a.htmlElement.style.left = e + "px", a.htmlElement.style.height = t + "px")) } }, b.prototype.requestFocus = function() { var e = this.parentCanvas.beanList; for (var t in e) { var r = e[t];
                t == this.getWindowId() ? r.handleTakingFocus() : r.handleReleasingFocus() }
            this.parentCanvas.pullUp(this.id) }, b.prototype.setUrl = function(e) { var t = this; return new Promise((function(r, n) { e ? t.setUseIframe(!0) : (t.setUseIframe(!1), r()), t.iframe.src = e, t.iframe.onload = function() { var e = function(e) { var r = e.pageX,
                            n = e.pageY; if ("touchmove" === e.type) { var o = e.changedTouches; if (1 !== e.touches.length) return !0;
                            r = o[0].pageX, n = o[0].pageY } var a = t.getLeft(),
                            i = t.getTop(),
                            l = document.createEvent("MouseEvents");
                        l.initMouseEvent("mousemove", !0, !1, window, e.detail, e.screenX, e.screenY, r + a, n + i, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null), t.parentCanvas.windowMouseMove(l), t.onMouseMoveOnIframe && t.onMouseMoveOnIframe(l) };
                    t.iframe.contentWindow.document.onmousemove = e, t.iframe.contentWindow.document.ontouchmove = e; var n = function(e) { var r = e.pageX,
                            n = e.pageY; if ("touchend" === e.type) { var o = e.changedTouches;
                            r = o[0].pageX, n = o[0].pageY } var a = t.getLeft(),
                            i = t.getTop(),
                            l = document.createEvent("MouseEvents");
                        l.initMouseEvent("mouseup", !0, !1, window, e.detail, e.screenX, e.screenY, r + a, n + i, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null), t.parentCanvas.windowMouseUp(l), t.onMouseUpOnIframe && t.onMouseUpOnIframe(l) };
                    t.iframe.contentWindow.document.onmouseup = n, t.iframe.contentWindow.document.ontouchend = n, r(t, t.iframe.contentWindow.document) } })) }, b.prototype.getIfDocument = function() { return this.iframe.contentWindow.document }, b.prototype.setScrolling = function(e) { this.iframe.scrolling = e }, b.prototype.getScrolling = function(e) { return this.iframe.scrolling }, b.prototype.setResizable = function(e) { return this.resizable = e, this.enableMarkers(e), this }, b.prototype.setControl = function(e) { e && (e.frame = this, this.control = this.jsFrame.createWindowEventHelper(e), this.control.setupDefaultEvents()) }, i(g, f), g.prototype.getWindow = function(e) { return this.beanList[e] }, g.prototype.addWindow = function(e) { var t = e.getWindowId(),
                r = e.getName();
            this.beanIdName[t] = r, this.beanNameId[r] = t, this.addBean(e) }, g.prototype.containsWindowName = function(e) { return !!this.beanNameId[e] }, g.prototype.getWindowByName = function(e) { var t = this.beanNameId[e]; return t ? this.getWindow(t) : null }, g.prototype.windowMouseMove = function(e) { if (null == this.currentObject) return null; var t = !1,
                r = this.beanList; for (var n in r) { var o = r[n],
                    a = o.canvas.mouseMove(e); if (t |= null != a, null != a && "cmarkerwindow" == a.targetTypeName) { var i = a.targetObject;
                    o.transparence.style.pointerEvents = "auto", "RD" == i.usage ? o.resize(0, 0, a.deltaX, a.deltaY, !0) : "DD" == i.usage ? o.resize(0, 0, 0, a.deltaY, !0) : "RR" == i.usage && o.resize(0, 0, a.deltaX, 0, !0) } }
            t || "childcanvas" == this.mouseDownSource || this.mouseMove(e) }, g.prototype.windowMouseUp = function(e) { this.mouseUp(e); var t = this.beanList; for (var r in t) { t[r].mouseUp(e) } }, g.prototype.removeBean = function(e) { var t = this,
                r = t.beanList,
                n = r[e]; if (null != n) { var o = n._hasFocus;
                t.canvasElement.removeChild(n.htmlElement), delete r[e]; var a = t.beanIdName[e];
                a && (delete t.beanIdName[e], delete t.beanNameId[a]); var i = 0,
                    l = null; if (o) { for (var e in r) { var s = r[e];
                        i <= s._hasFocusTime && !s.pullUpDisabled && (i = s._hasFocusTime, l = s) }
                    l && l.requestFocus() }
                n.parentCanvas = null } }, i(v, h), C.prototype.doEnableTouchActionManipulation = function() { var e = document.documentElement.getAttribute("style");
            e ? e.endsWith(";") || (e += ";") : e = "", -1 === e.indexOf("touch-action") && (e += "-ms-touch-action: manipulation;touch-action: manipulation;", document.documentElement.setAttribute("style", e)) }, C.prototype.doDisablePullToRefresh = function() { var e = document.body.getAttribute("style");
            e ? e.endsWith(";") || (e += ";") : e = "", -1 === e.indexOf("overscroll-behavior-y") && (e += "overscroll-behavior-y: contain;", document.body.setAttribute("style", e)) }, C.prototype.getDomPartsBuilder = function() { return this.domPartsBuilder || (this.domPartsBuilder = new s), this.domPartsBuilder }, C.prototype.create = function(e) { var t = {};
            t.name = e.name; var r, n = e.title,
                o = e.left,
                a = e.top,
                i = e.width,
                l = e.height,
                s = e.appearance,
                d = e.preset,
                u = (e.presetParam, e.appearanceName),
                c = e.appearanceParam,
                m = e.style,
                p = e.minWidth,
                h = e.minHeight,
                f = e.html,
                y = e.resizable,
                b = e.movable,
                g = e.url,
                v = e.urlLoaded,
                C = e.presetParam;
            d ? (r = this.getPresetWindow(d).getPresetWindow(C), s = this.createPresetStyle(r.appearanceName, { appearanceParam: r.appearanceParam })) : u && (s = this.createPresetStyle(u, { appearanceParam: c })); if (e.clientHeight) { var B = parseInt(s.titleBarHeight || 0) - s.frameHeightAdjust;
                l = e.clientHeight + B } var E = this.createFrame(o, a, i, l, s, t); if (n && E.setTitle(n), f && E.setHTML(f), g) { var w = E.setUrl(g);
                v && w.then(v) } if (0 == y && E.setResizable(!1), 0 == b && E.setMovable(!1), p && h && (E.minFrameWidth = p), h && (E.minWindowHeight = h, e.clientHeight && (E.minWindowHeight = h + B)), m) { var x = E.getFrameView(); for (var A in m) m.hasOwnProperty(A) && (x.style[A] = m[A]) } return r && r.setupPresetWindow(E), E }, C.prototype.createFrame = function(e, t, r, n, o, a) { o || (o = this.createFrameAppearance()), o.initialize(), e || (e = 0), t || (t = 0), r || (r = 128), n || (n = 128); var i = new b("window_" + this.generateUUID(), e, t, r, n, o); if (i.jsFrame = this, a && a.name && i.setName(a.name), i.hide(), this.windowManager.addWindow(i), o.getTitleBarStyle) { var l = o.getTitleBarStyle();
                l && i.setTitleBarClassName(l.titleBarClassNameDefault, l.titleBarClassNameFocused) } else o.titleBarClassNameDefault && o.titleBarClassNameFocused ? i.setTitleBarClassName(o.titleBarClassNameDefault, o.titleBarClassNameFocused) : o.titleBarClassNameDefault && i.setTitleBarClassName(o.titleBarClassNameDefault, o.titleBarClassNameDefault); return i }, C.prototype.containsWindowName = function(e) { return this.windowManager.containsWindowName(e) }, C.prototype.getWindowByName = function(e) { return this.windowManager.getWindowByName(e) }, C.prototype.generateUUID = function() { var e = Date.now(); return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) { var r = (e + 16 * Math.random()) % 16 | 0; return e = Math.floor(e / 16), ("x" == t ? r : 3 & r | 8).toString(16) })) }, C.prototype.createFrameAppearance = function() { return new l }, C.prototype.createAnimator = function() { return new d }, C.prototype.createWindowEventHelper = function(e) { return e || (e = {}), e.verticalAlign = this.vAlign, e.horizontalAlign = this.hAlign, new a(e) }, C.prototype.getPresetWindow = function(e, t) { return m[e] ? m[e] : null }, C.prototype.createPresetStyle = function(e, t) { var r = this.createFrameAppearance(); if (t && t.focusedFrameOnly && (r.focusedFrameOnly = t.focusedFrameOnly), c[e]) { var n = c[e],
                    o = null; return t && t.appearanceParam && (o = t.appearanceParam), n.getStyle(r, o) } return r }, C.prototype.showToast = function(e) { if (e) { var t = this,
                    r = 60,
                    n = 260,
                    o = 1e3,
                    a = window.innerHeight - 10 - r / 2,
                    i = window.innerHeight - 20 - r / 2,
                    l = "",
                    s = !1,
                    d = { borderRadius: "10px", background: "rgba(0,0,0,0.8)" };
                e.style && (d = e.style), e.height && (r = e.height), e.width && (n = e.width), e.duration && (o = e.duration), e.align && ("top" == e.align ? (a = 10 + r / 2, i = 20 + r / 2) : "center" == e.align && (a = window.innerHeight / 2, i = window.innerHeight / 2)), e.html && (l = e.html), e.text && (l = e.text), s = 1 == e.closeButton; var u = t.createPresetStyle("toast");
                d.borderRadius && (u.frameBorderRadius = d.borderRadius), e.closeButtonColor && (u.captionClor = e.closeButtonColor); var c = t.create({ name: "toast_" + t.generateUUID(), width: n, height: r, movable: !1, resizable: !1, appearance: u, style: d, html: '<div id="my_element" style="box-sizing:border-box;display: flex;justify-content: center;align-items: center;padding:10px;font-size:16px;color:darkgray;height:' + r + 'px">' + l + "</div>" });
                s || c.hideFrameComponent("closeButton"); var m = window.innerWidth / 2; "right" == t.hAlign && (m = -m), "bottom" == t.vAlign && (a -= window.innerHeight, i -= window.innerHeight), t.createAnimator().set(c).setDuration(300).fromPosition(m, a, "CENTER_CENTER").toPosition(m, i, "CENTER_CENTER").toAlpha(1).fromAlpha(0).start(0, !1).then((function(e) { return e.setDuration(300).fromPosition(m, i, "CENTER_CENTER").toPosition(m, a, "CENTER_CENTER").fromAlpha(1).toAlpha(.5).start(o, !1) })).then((function(e) { e.get().closeFrame() })) } }, Object.freeze(p), e.exports = C }, function(e, t, r) { var n = r(0),
            o = r(13); "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]); var a = { insert: "head", singleton: !1 };
        n(o, a);
        e.exports = o.locals || {} }, function(e, t, r) {
        (t = r(1)(!1)).push([e.i, ".jsframe-titlebar-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-titlebar-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-modal-window-background {\n    background: rgba(0, 0, 0, 0.6);\n    height: 100%;\n    widdth: 100%\n}", ""]), e.exports = t }, function(e, t, r) {
        /*! event-emitter(https://github.com/riversun/event-emitter) v1.2.1 Copyright (c) 2020 riversun.org@gmail.com */
        e.exports = function(e) { var t = {};

            function r(n) { if (t[n]) return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports } return r.m = e, r.c = t, r.d = function(e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, r.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, r.t = function(e, t) { if (1 & t && (e = r(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                    for (var o in e) r.d(n, o, function(t) { return e[t] }.bind(null, o)); return n }, r.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return r.d(t, "a", t), t }, r.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, r.p = "/", r(r.s = 0) }([function(e, t, r) { e.exports = r(1) }, function(e, t, r) { "use strict";

            function n(e) { if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) { if (Array.isArray(e) || (e = function(e, t) { if (e) { if ("string" == typeof e) return o(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(r) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0 } }(e))) { var t = 0,
                            r = function() {}; return { s: r, n: function() { return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] } }, e: function(e) { throw e }, f: r } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var n, a, i = !0,
                    l = !1; return { s: function() { n = e[Symbol.iterator]() }, n: function() { var e = n.next(); return i = e.done, e }, e: function(e) { l = !0, a = e }, f: function() { try { i || null == n.return || n.return() } finally { if (l) throw a } } } }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]; return n }

            function a(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function i(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } }

            function l(e, t, r) { return t && i(e.prototype, t), r && i(e, r), e }
            r.r(t), r.d(t, "default", (function() { return s })), r.d(t, "EventListenerList", (function() { return d })), r.d(t, "EventListenerMap", (function() { return u })); var s = function() {
                    function e(t) { if (a(this, e), this.onListeners = new Map, this.onlyListeners = new Map, t) { var r, o = n(t); try { for (o.s(); !(r = o.n()).done;) { var i = r.value,
                                        l = new d;
                                    this.onListeners.set(i, l) } } catch (e) { o.e(e) } finally { o.f() } }
                        this.childEventEmitters = [] } return l(e, [{ key: "on", value: function(e, t) { var r = this.onListeners.get(e);
                            r || (r = new d, this.onListeners.set(e, r)), r.addListenerFunc(t) } }, { key: "only", value: function(e, t, r) { var n = this.onlyListeners.get(e);
                            n || (n = new u, this.onlyListeners.set(e, n)), n.putListenerFunc(t, r) } }, { key: "pipe", value: function(e) { this.childEventEmitters.push(e) } }, { key: "emit", value: function(e, t) { var r = this.onListeners.get(e);
                            r && (t.eventType = e, r.callListenerFunc(t)); var o = this.onlyListeners.get(e);
                            o && o.callListenerFunc(t); var a, i = n(this.childEventEmitters); try { for (i.s(); !(a = i.n()).done;) a.value.emit(e, t) } catch (e) { i.e(e) } finally { i.f() } } }, { key: "hasListenerFuncs", value: function(e) { if (this.onListeners.has(e)) { var t = this.onListeners.get(e); if (t && t.hasListenerFunc()) return !0 } var r, o = n(this.childEventEmitters); try { for (o.s(); !(r = o.n()).done;)
                                    if (r.value.hasListenerFuncs(e)) return !0 } catch (e) { o.e(e) } finally { o.f() } return !1 } }, { key: "clearAll", value: function() { var e, t = n(this.onListeners.values()); try { for (t.s(); !(e = t.n()).done;) e.value.clearAll() } catch (e) { t.e(e) } finally { t.f() }
                            this.onListeners.clear(); var r, o = n(this.onlyListeners.values()); try { for (o.s(); !(r = o.n()).done;) r.value.clearAll() } catch (e) { o.e(e) } finally { o.f() }
                            this.onlyListeners.clear(), this.childEventEmitters = [] } }]), e }(),
                d = function() {
                    function e() { a(this, e), this.listenerFuncs = [] } return l(e, [{ key: "clearAll", value: function() { this.listenerFuncs = [] } }, { key: "hasListenerFunc", value: function() { return this.listenerFuncs.length > 0 } }, { key: "addListenerFunc", value: function(e) { this.listenerFuncs.push(e) } }, { key: "callListenerFunc", value: function(e) { var t, r = n(this.listenerFuncs); try { for (r.s(); !(t = r.n()).done;)(0, t.value)(e) } catch (e) { r.e(e) } finally { r.f() } } }]), e }(),
                u = function() {
                    function e() { a(this, e), this.listenerFuncMap = new Map } return l(e, [{ key: "clearAll", value: function() { this.listenerFuncMap.clear() } }, { key: "hasListenerFunc", value: function(e) { return this.listenerFuncMap.has(e) } }, { key: "putListenerFunc", value: function(e, t) { this.listenerFuncMap.set(e, t) } }, { key: "callListenerFunc", value: function(e) { var t, r = n(this.listenerFuncMap.values()); try { for (r.s(); !(t = r.n()).done;)(0, t.value)(e) } catch (e) { r.e(e) } finally { r.f() } } }]), e }() }]).default
    }, function(e, t, r) { "use strict"; var n = r(4),
            o = r(3),
            a = r(2),
            i = r(5);

        function l(e) { this.eventListenerHelper = new i, this.windowMode = "default", this.styleDisplay = "flex", this.horizontalAlign = "left", this.verticalAlign = "top", this.keyListener = null, this.minimizeButton = null, this.maximizeButton = null, this.demaximizeButton = null, this.deminimizeButton = null, this.opts = e, this.isWindowManagerFixed = e.frame.jsFrame.isWindowManagerFixed, e.styleDisplay && (this.styleDisplay = e.styleDisplay), e.minimizeButton && (this.minimizeButton = e.minimizeButton), e.deminimizeButton && (this.deminimizeButton = e.deminimizeButton), e.maximizeButton && (this.maximizeButton = e.maximizeButton), e.demaximizeButton && (this.demaximizeButton = e.demaximizeButton), e.hideButton && (this.hideButton = e.hideButton), e.hideButtons && (this.hideButtons = e.hideButtons), this.maximizeParam = e.maximizeParam, this.demaximizeParam = e.demaximizeParam, this.minimizeParam = e.minimizeParam, this.deminimizeParam = e.deminimizeParam, this.hideParam = e.hideParam, this.dehideParam = e.dehideParam, e.horizontalAlign && (this.horizontalAlign = e.horizontalAlign), e.verticalAlign && (this.verticalAlign = e.verticalAlign), this.animationEnabled = !1, this.animationDuration = 100, this.frame = e.frame, this.hideFrameBorder = !0, this.hideTitleBar = !0, this.restoreKey = null, this.restoreDuration = null, this.restoreCallback = null, this.statsStore = {}, e.animation && (this.animationEnabled = e.animation), e.animationDuration && (this.animationDuration = e.animationDuration), this.eventListeners = {}, this.resizeListener = this.handleOnResize.bind(this), this.maximizeParam && this.maximizeParam.matchParent && (this.resizeListener = this.handleOnVirtualResize.bind(this)) }
        l.MATCH_PARENT_CHANGE_MARKER_ATTR = "__jsframe-mp-marker", l.prototype.on = function(e, t) { this.eventListeners[e] = t }, l.prototype.doMaximize = function(e) { var t = this; if ("hid" === t.windowMode) throw Error("[JSrame] It is not possible to change directly from the hid state to the maximized state"); if ("maximized" !== t.windowMode && "maximizing" !== t.windowMode) { t.windowMode = "maximizing"; var r = t.frame; if (e && e.matchParent) { var n = r.getWindowManager().getParentElement(); if (!t.matchParentResizeObserver) { var o = new MutationObserver((function() { t.resizeListener() }));
                        o.observe(n, { attributeFilter: [l.MATCH_PARENT_CHANGE_MARKER_ATTR], attributes: !0 }), t.matchParentResizeObserver = o } } else t.eventListenerHelper.hasEventListener(window, "resize", "window-resize-listener") || t.eventListenerHelper.addEventListener(window, "resize", t.resizeListener, { listenerName: "window-resize-listener" });
                t.saveCurrentWindowStats("maximize_mode"), t.hideTitleBar = !!e && e.fullScreen, t.hideTitleBar ? r.hideAllVisibleFrameComponents() : (t.maximizeButton && r.hideFrameComponent(t.maximizeButton), t.demaximizeButton && r.showFrameComponent(t.demaximizeButton, t.styleDisplay)), r.setMovable(!1), r.setResizable(!1), e && e.restoreKey && (t.restoreKey = e.restoreKey), e && e.restoreDuration && (t.restoreDuration = e.restoreDuration), e && e.restoreCallback && (t.restoreCallback = e.restoreCallback), t.renderMaximizedMode({ animation: t.animationEnabled, callback: e && e.callback ? e.callback : null, duration: e && e.duration ? e.duration : null, matchParent: !(!e || !e.matchParent) && e.matchParent }) } }, l.prototype.renderMaximizedMode = function(e) { var t = this,
                r = t.frame,
                n = t.loadWindowStats("maximize_mode"),
                o = 0,
                a = 0,
                i = 0,
                l = 0;
            t.hideTitleBar && (o = 0, a = -n.titleBarHeight); var s = window.innerWidth,
                d = window.innerHeight; if (e.matchParent) { var u = r.getWindowManager().getParentElement();
                s = u.clientWidth, d = u.clientHeight }
            t.hideFrameBorder ? (i = s, l = d + (t.hideTitleBar ? n.titleBarHeight : 0)) : (i = s - 2 * n.frameBorderWidthDefault, l = d - 2 * n.frameBorderWidthDefault + (t.hideTitleBar ? n.titleBarHeight : 0)), "right" == t.horizontalAlign && (o = -i), "bottom" == t.verticalAlign && (a = -l); var c = function(n) { var s = n && n.disableCallback;
                r.setPosition(o, a), t.hideFrameBorder && (r.frameBorderWidthDefault = 0, r.frameBorderWidthFocused = 0, r.htmlElement.style.borderWidth = "0px"), r.setSize(i, l, !0), s || (t.hideTitleBar && (t.restoreKey && (t.keyListener = function(e) { e.code === t.restoreKey && t.doCommand("restore") }), window.addEventListener("keydown", t.keyListener), r.iframe && r.iframe.contentWindow.addEventListener("keydown", t.keyListener)), t.windowMode = "maximized", e && e.callback && e.callback(t.frame, { eventType: "maximized" }), t.eventListeners.maximized && t.eventListeners.maximized(t.frame, { eventType: "maximized" })) };
            e && e.animation ? t.animateFrame({ frame: r, from: n, to: { left: o, top: a, width: i, height: l }, duration: e.duration ? e.duration : t.animationDuration, callback: c }) : e && "handleOnResize" === e.caller ? c({ disableCallback: !0 }) : c() }, l.prototype.getWindowMode = function() { return this.windowMode }, l.prototype.doDemaximize = function(e) { var t = this,
                r = t.frame; if ("hid" === t.windowMode) throw Error("[JSFrame] demaximize(=recovery from maximized) cannot be performed in hid state.");
            t.hasWindowStats("maximize_mode") && (t.hideTitleBar || (t.maximizeButton && r.showFrameComponent(t.maximizeButton, t.styleDisplay), t.demaximizeButton && r.hideFrameComponent(t.demaximizeButton)), t.restoreWindow({ restorePosition: !0, restoreMode: "maximize_mode", animation: t.animationEnabled, callback: e && e.callback ? e.callback : null, forceShowFrameComponents: t.animationEnabled && t.hideTitleBar, duration: e && e.duration ? e.duration : null, eventType: "demaximized" })) }, l.prototype.handleOnResize = function() { this.renderMaximizedMode({ caller: "handleOnResize" }) }, l.prototype.handleOnVirtualResize = function() { this.renderMaximizedMode({ caller: "handleOnResize", matchParent: !0 }) }, l.prototype.doMinimize = function(e) { var t = this; if ("minimized" !== t.windowMode && "minimizing" !== t.windowMode) { t.windowMode = "minimizing"; var r = t.frame;
                t.saveCurrentWindowStats("minimize_mode"), r.setResizable(!1), t.renderMinimizedMode({ animation: t.animationEnabled, callback: e && e.callback ? e.callback : null, duration: e && e.duration ? e.duration : null, toWidth: e && e.toWidth ? e.toWidth : null }) } }, l.prototype.renderMinimizedMode = function(e) { var t = this,
                r = t.frame,
                n = t.loadWindowStats("minimize_mode"),
                o = t.getCurrentWindowStats(),
                a = t.getCurrentWindowStats();
            a.height = n.titleBarHeight, e && e.toWidth && (a.width = e.toWidth); var i = function() { r.setSize(a.width, a.height, !0), t.windowMode = "minimized", t.minimizeButton && r.hideFrameComponent(t.minimizeButton), t.deminimizeButton && r.showFrameComponent(t.deminimizeButton, t.styleDisplay), e.callback && e.callback(t.frame, { eventType: "minimized" }), t.eventListeners.minimized && t.eventListeners.minimized(t.frame, { eventType: "minimized" }) };
            e && e.animation ? t.animateFrame({ toAlpha: 1, duration: e.duration ? e.duration : t.animationDuration, frame: r, from: o, to: a, callback: i }) : i() }, l.prototype.doDeminimize = function(e) { var t = this,
                r = t.frame;
            t.hasWindowStats("minimize_mode") && (t.minimizeButton && r.showFrameComponent(t.minimizeButton, t.styleDisplay), t.deminimizeButton && r.hideFrameComponent(t.deminimizeButton), t.restoreWindow({ restorePosition: !1, restoreMode: "minimize_mode", animation: t.animationEnabled, duration: e && e.duration ? e.duration : null, callback: e && e.callback ? e.callback : null, eventType: "deminimized" })) }, l.prototype.doHide = function(e) { var t = this; if ("hid" !== t.windowMode && "hiding" !== t.windowMode) { t.windowMode = "hiding"; var r = t.frame;
                t.saveCurrentWindowStats("hide_mode"), r.setResizable(!1); var n = { animation: t.animationEnabled };
                e && a({ op: "overwrite-merge", object1: n, object2: e }), t.renderHideMode(n) } }, l.prototype.renderHideMode = function(e) { var t = this,
                r = t.frame,
                n = t.loadWindowStats("hide_mode"),
                a = t.getCurrentWindowStats(),
                i = { x: 0, y: 0 },
                l = e.toElement;
            e.offset && (i = e.offset); var s = 0,
                d = 0,
                u = e && e.align ? e.align : "LEFT_TOP"; if (u && o.LEFT_TOP != u) { if (o.HCENTER_TOP == u) s = a.left + a.width / 2, d = a.top;
                else if (o.RIGHT_TOP == u) s = a.left + a.width, d = a.top;
                else if (o.LEFT_VCENTER == u) s = a.left, d = a.top + a.height / 2;
                else if (o.HCENTER_VCENTER == u) s = a.left + a.width / 2, d = a.top + a.height / 2;
                else if (o.RIGHT_VCENTER == u) s = a.left + a.width, d = a.top + a.height / 2;
                else if (o.LEFT_BOTTOM == u) s = a.left, d = a.top + a.height;
                else if (o.HCENTER_BOTTOM == u) s = a.left + a.width / 2, d = a.top + a.height;
                else if (o.RIGHT_BOTTOM == u) s = a.left + a.width, d = a.top + a.height;
                else if ("ABSOLUTE" == u)
                    if (l) { var c = l.getBoundingClientRect();
                        t.isWindowManagerFixed ? (s = c.left, d = c.top) : (s = c.left + window.pageXOffset, d = c.top + window.pageYOffset) } else s = i.x, d = i.y } else s = a.left, d = a.top; var m = { left: s, top: d, width: 0, height: n.titleBarHeight },
                p = function() { r.setSize(m.width, m.height, !0), t.windowMode = "hid", e && e.callback && e.callback(t.frame, { eventType: "hid" }), t.eventListeners.hid && t.eventListeners.hid(t.frame, { eventType: "hid" }) };
            r.hideAllVisibleFrameComponents(), e && e.animation ? t.animateFrame({ fromAlpha: e.silent ? 0 : 1, toAlpha: 0, ease: !0, duration: e.duration ? e.duration : t.animationDuration, frame: r, from: a, to: m, callback: p }) : p() }, l.prototype.doDehide = function(e) { this.frame;
            this.hasWindowStats("hide_mode") && this.restoreWindow({ duration: e && e.duration ? e.duration : null, restorePosition: !0, restoreMode: "hide_mode", animation: this.animationEnabled, forceShowFrameComponents: !0, callback: e && e.callback ? e.callback : null, eventType: "dehided" }) }, l.prototype.loadWindowStats = function(e) { return this.statsStore[e] }, l.prototype.saveCurrentWindowStats = function(e) { var t = this,
                r = t.getCurrentWindowStats(); if (t.hasWindowStats(e)) { var n = t.loadWindowStats(e),
                    o = !t.windowStatsEquals(r, n); return o && (t.statsStore[e] = r), o } return t.statsStore[e] = r, !0 }, l.prototype.windowStatsEquals = function(e, t) { return !(!e || !t) && JSON.stringify(e) === JSON.stringify(t) }, l.prototype.clearWindowStats = function(e) { this.statsStore[e] = null }, l.prototype.hasWindowStats = function(e) { return this.statsStore[e] }, l.prototype.getCurrentWindowStats = function() { var e = this.frame,
                t = parseInt(e.titleBar.style.height, 10),
                r = e.frameBorderWidthDefault,
                n = e.frameBorderWidthFocused; return { left: e.getLeft(), top: e.getTop(), width: e.getWidth(), height: e.getHeight(), titleBarHeight: t, frameBorderWidthDefault: r, frameBorderWidthFocused: n, resizable: e.resizable, movable: e.movable } }, l.prototype.restoreWindow = function(e) { var t = this,
                r = t.frame,
                n = t.loadWindowStats(e.restoreMode),
                o = t.getCurrentWindowStats();
            r.frameBorderWidthDefault = n.frameBorderWidthDefault, r.frameBorderWidthFocused = n.frameBorderWidthFocused, r.htmlElement.style.borderWidth = r.frameBorderWidthFocused; var a = function() { e && 0 == e.restorePosition && (n.left = o.left, n.top = o.top), r.setPosition(n.left, n.top);
                r.setSize(n.width, n.height, !0), r.setResizable(n.resizable), r.setMovable(n.movable), t.clearWindowStats(e.restoreMode), t.keyListener && (window.removeEventListener("keydown", t.keyListener), r.iframe && r.iframe.contentWindow.removeEventListener("keydown", t.keyListener), t.keyListener = null), t.windowMode = "default", e && e.forceShowFrameComponents && r.showAllVisibleFrameComponents(), r.show(); var a = "restored";
                e && e.eventType && (a = e.eventType), e && e.callback && e.callback(t.frame, { eventType: a }), t.eventListeners[a] && t.eventListeners[a](t.frame, { eventType: a }) };
            e && e.animation ? t.animateFrame({ duration: e.duration ? e.duration : t.animationDuration, frame: r, fromAlpha: 0, toAlpha: 1, from: o, to: n, callback: a }) : a(), t.eventListenerHelper.removeEventListener(window, "resize", t.resizeListener), t.matchParentResizeObserver && (t.matchParentResizeObserver.disconnect(), t.matchParentResizeObserver = null) }, l.prototype.animateFrame = function(e) { var t = isNaN(e.fromAlpha) ? 1 : e.fromAlpha,
                r = e.from,
                o = e.to;
            (new n).set(e.frame).setDuration(e.duration ? e.duration : this.animationDuration).fromPosition(r.left, r.top, "LEFT_TOP").toPosition(o.left, o.top, "LEFT_TOP").fromWidth(r.width).fromHeight(r.height).toWidth(o.width).toHeight(o.height).fromAlpha(t).toAlpha(0 == e.toAlpha ? 0 : 1).ease(e.ease).start(0, !1).then((function(t) { e.callback() })) }, l.prototype.doCommand = function(e, t) { var r = this; "maximize" === e && r._defaultFunctionMaximize(r.frame), "demaximize" === e && r._defaultFunctionDemaximize(r.frame), "restore" === e && r._defaultFunctionRestoreFromFullscreen(r.frame), "minimize" === e && r._defaultFunctionMinimize(r.frame), "deminimize" === e && r._defaultFunctionDeminimize(r.frame), "hide" === e && r._defaultFunctionHide(r.frame), "dehide" === e && r._defaultFunctionDehide(r.frame) }, l.prototype._defaultFunctionMaximize = function(e, t) { var r = this.opts,
                n = { fullScreen: !0 === r.maximizeWithoutTitleBar, restoreKey: r.restoreKey ? r.restoreKey : "Escape", restoreDuration: r.restoreDuration };
            this.maximizeParam && a({ op: "overwrite-merge", object1: n, object2: this.maximizeParam }), e.control.doMaximize(n) }, l.prototype._defaultFunctionDemaximize = function(e, t) { e.control.doDemaximize({}) }, l.prototype._defaultFunctionRestoreFromFullscreen = function(e, t) { e.control.doDemaximize({ duration: this.restoreDuration ? this.restoreDuration : null, callback: this.restoreCallback ? this.restoreCallback : null }) }, l.prototype._defaultFunctionMinimize = function(e, t) { e.control.doMinimize(this.minimizeParam) }, l.prototype._defaultFunctionDeminimize = function(e, t) { e.control.doDeminimize(this.deminimizeParam) }, l.prototype._defaultFunctionHide = function(e, t) { var r = { align: "CENTER_BOTTOM" };
            this.hideParam && (r = this.hideParam), e.control.doHide(r) }, l.prototype._defaultFunctionDehide = function(e, t) { e.control.doDehide(this.dehideParam) }, l.prototype.setupDefaultEvents = function() { var e = this; if (e.maximizeButton && e.frame.on(e.maximizeButton, "click", e._defaultFunctionMaximize.bind(e)), e.demaximizeButton && e.frame.on(e.demaximizeButton, "click", e._defaultFunctionDemaximize.bind(e)), e.minimizeButton && e.frame.on(e.minimizeButton, "click", e._defaultFunctionMinimize.bind(e)), e.deminimizeButton && e.frame.on(e.deminimizeButton, "click", e._defaultFunctionDeminimize.bind(e)), e.hideButton && e.frame.on(e.hideButton, "click", e._defaultFunctionHide.bind(e)), e.hideButtons)
                for (var t in e.hideButtons) { var r = e.hideButtons[t];
                    r && e.frame.on(r, "click", e._defaultFunctionHide.bind(e)) } }, e.exports = l }, function(e, t) { var r = function() {
            function e() { var e = this;
                e._timerId = null, e._isRunning = !1, e._timerInterval = 0, e._internalCallback = function() { e._timerMethod && e._timerMethod(e);
                    e._isRunning && (clearTimeout(e._timerId), e._timerId = setTimeout(e._internalCallback, e._timerInterval)) }, e._timerMethod = null } return e.prototype.setCallback = function(e) { return this._timerMethod = e, this }, e.prototype.setIntervalMillis = function(e) { return this._timerInterval = e, this }, e.prototype.stopTimer = function() { return this._isRunning = !1, this }, e.prototype.startTimer = function() { var e = this; return e._timerInterval > 0 && (e._timerId = setTimeout(e._internalCallback, e._timerInterval), e._isRunning = !0), e }, e }();
        e.exports = r }, function(e, t, r) { var n = r(7),
            o = r(20);

        function a() { var e = this;
            this.showTitleBar = !0, this.showCloseButton = !0, this.titleBarCaption = "", this.titleBarCaptionFontSize = "12px", this.titleBarCaptionFontWeight = "bold", this.titleBarHeight = "24px", this.useIframe = !1, this.useFrame = !0, this.titleBarClassNameDefault = null, this.titleBarClassNameFocused = null, this.setUseIFrame = function(t) { return e.useIframe = t, e.useFrame = !t, e }, this.titleBarCaptionLeftMargin = "5px", this.titleBarColorDefault = null, this.titleBarColorFocused = null, this.titleBarCaptionColorDefault = "", this.titleBarCaptionColorFocused = "", this.titleBarCaptionTextShadow = "0 1px 0 rgba(255,255,255,.7)", this.titleBarCaptionTextAlign = "center", this.titleBarBorderBottomDefault = "1px solid rgba(0,0,0,0.2)", this.titleBarBorderBottomFocused = null, this.frameBorderRadius = "6px", this.frameBorderWidthDefault = "1px", this.frameBorderWidthFocused = this.frameBorderWidthDefault, this.frameBorderColorDefault = "rgba(1, 1, 1, 0.2)", this.frameBorderColorFocused = this.frameBorderColorDefault, this.frameBorderStyle = "solid", this.frameBoxShadow = "2px 3px 16px rgba(0,0,0,.6)", this.frameBackgroundColor = "transparent", this._partsBuilder = null, this.frameComponents = [], this.frameHeightAdjust = 1, this.resizeAreaWidth = 20, this.resizeAreaHeight = 20, this.resizeAreaOffset = 0, this.resizeAreaVisible = !1, this.getFrameInnerBorderRadius = function(t, r) { return t ? r ? { frameAppearance: e, innerBorderRadius: parseInt(t.frameBorderRadius, 10) - parseInt(t.frameBorderWidthFocused, 10) + "px" } : { frameAppearance: e, innerBorderRadius: parseInt(t.frameBorderRadius, 10) - parseInt(t.frameBorderWidthDefault, 10) + "px" } : null }, this.onInitialize = function() { if (e.showCloseButton) { var t = e.getPartsBuilder(),
                        r = t.buildTextButtonAppearance();
                    r.size = 14, r.captionShiftYpx = 0, r.captionFontRatio = 1, r.borderRadius = 2, r.backgroundColorPressed = "transparent", r.backgroundColorDefault = "transparent", r.caption = "✖", r.captionColorDefault = "gray", r.captionColorFocused = "gray", r.captionColorHovered = "silver", r.captionColorPressed = "black", r.borderWidth = 0, r.borderColorDefault = "#aaaaaa", r.borderStyle = "solid"; var n = t.buildTextButton(r);
                    e.addFrameComponent("closeButton", n, -10, -18, "RIGHT_TOP") } }, this.onTitleBarStyleInitialize = function() {} }
        a.prototype.getPartsBuilder = function() { return null === this._partsBuilder && (this._partsBuilder = new n), this._partsBuilder }, a.prototype.initialize = function() { this.onInitialize() }, a.prototype.addFrameComponent = function(e, t, r, n, a, i) { var l = new o(e, t, r, n, a, i); return t._onTakeFocus && t._onReleaseFocus && l.setFocusCallback(t._onTakeFocus, t._onReleaseFocus), this.frameComponents.push(l), l }, e.exports = a }, function(e, t, r) {
        function n() { this.imageDefault = null, this.imageHovered = null, this.imagePressed = null, this.imageFocused = null, this.imageStore = {} }
        r(6)(n, r(8)), n.prototype._setImage = function(e, t, r) { var n = this.imageStore[e]; if (n) return n; var o = document.createElement("img"); if (o.src = e, t && r) { var a = "margin:0px;padding:0px;width:" + t + "px;height:" + r + "px";
                o.setAttribute("style", a) } return this.imageStore[e] = o, o }, n.prototype.setSrc = function(e) { var t = this;
            e.default && (t.imageDefault = t._setImage(e.default, e.width, e.height)), e.hovered && (t.imageHovered = t._setImage(e.hovered, e.width, e.height)), e.pressed && (t.imagePressed = t._setImage(e.pressed, e.width, e.height)), e.focused && (t.imageFocused = t._setImage(e.focused, e.width, e.height)) }, e.exports = n }, function(e, t) { e.exports = function(e) { this.childMenuHTML = "", this.childMenuWidth = 0, this.childMenuAlign = "LEFT", this.yOffset = 0, this.xOffset = 0 } }, function(e, t) {
        function r(e, t, r, n, o, a) { var i = this;
            i.id = e, i.x = r, i.y = n, i.frame = null, i._focusTakingCallabck = null, i._focusReleasingCallabck = null, i.frameComponentAlign = o || CALIGN.LEFT_TOP, i.htmlElement = t, i.htmlElement.style.zIndex = 50, i.htmlElement.setAttribute("component-id", e), a && a.childMenu ? i.childMenu = a.childMenu : t.querySelector(".jsframe-child-menu") && (i.childMenu = t.querySelector(".jsframe-child-menu")) }
        r.prototype.setFocusCallback = function(e, t) { this._focusTakingCallabck = e, this._focusReleasingCallabck = t }, r.prototype.setFrame = function(e) { this.frame = e, this.htmlElement.parentObject = e, this.updateAlign() }, r.prototype.updateAlign = function() { var e = this,
                t = e.frameComponentAlign,
                r = e.frame,
                n = e.htmlElement.style;
            n.userSelect = "none"; var o = e.x,
                a = e.y,
                i = r.getWidth(),
                l = r.getHeight(),
                s = n.width,
                d = n.height;
            CALIGN.LEFT_TOP == t ? (n.left = o + "px", n.top = a + "px") : CALIGN.HCENTER_TOP == t ? (n.left = parseInt(i) / 2 - parseInt(s) / 2 + o + "px", n.top = a + "px") : CALIGN.RIGHT_TOP == t ? (n.left = parseInt(i) - parseInt(s) + o + "px", n.top = a + "px") : CALIGN.LEFT_VCENTER == t ? (n.left = o + "px", n.top = parseInt(l) / 2 - parseInt(d) / 2 + a + "px") : CALIGN.HCENTER_VCENTER == t ? (n.left = parseInt(i) / 2 - parseInt(s) / 2 + o + "px", n.top = parseInt(l) / 2 - parseInt(d) / 2 + a + "px") : CALIGN.RIGHT_VCENTER == t ? (n.left = parseInt(i) - parseInt(s) + o + "px", n.top = parseInt(l) / 2 - parseInt(d) / 2 + a + "px") : CALIGN.LEFT_BOTTOM == t ? (n.left = o + "px", n.top = parseInt(l) - parseInt(d) + a + "px") : CALIGN.HCENTER_BOTTOM == t ? (n.left = parseInt(i) / 2 - parseInt(s) / 2 + o + "px", n.top = parseInt(l) - parseInt(d) + a + "px") : CALIGN.RIGHT_BOTTOM == t && (n.left = parseInt(i) - parseInt(s) + o + "px", n.top = parseInt(l) - parseInt(d) + a + "px") }, r.prototype.handleTakingFocus = function() { this._focusTakingCallabck && this._focusTakingCallabck() }, r.prototype.handleReleasingFocus = function() { this._focusReleasingCallabck && this._focusReleasingCallabck() }, e.exports = r }, function(e, t, r) { r(22); var n = r(9);
        e.exports.getStyle = function(e, t) { var r = { titleBar: { greenButton: "maximize" } },
                o = r; return t && n.objectAssign(r, t), e.showTitleBar = !0, e.showCloseButton = !0, e.titleBarCaptionFontSize = "11px", e.titleBarCaptionFontWeight = "normal", e.titleBarCaptionLeftMargin = null, e.titleBarCaptionColorDefault = "#4d494d", e.titleBarCaptionColorFocused = "#4d494d", e.titleBarHeight = "26px", e.titleBarColorDefault = null, e.titleBarColorFocused = null, e.titleBarBorderBottomDefault = "1px solid #b1aeb1", e.titleBarBorderBottomFocused = e.titleBarBorderBottomDefault, e.frameBorderRadius = "6px", e.frameBorderWidthDefault = "1px", e.frameBorderWidthFocused = "1px", e.frameBorderColorDefault = "#acacac", e.frameBorderColorFocused = "#acacac", e.frameBorderStyle = "solid", e.frameBoxShadow = "0px 0px 20px rgba(0, 0, 0, 0.3)", e.frameBackgroundColor = "transparent", e.frameComponents = new Array, e.getTitleBarStyle = function() { return e.focusedFrameOnly ? { titleBarClassNameDefault: "jsframe-preset-style-yosemite-focused", titleBarClassNameFocused: "jsframe-preset-style-yosemite-focused" } : { titleBarClassNameDefault: "jsframe-preset-style-yosemite-default", titleBarClassNameFocused: "jsframe-preset-style-yosemite-focused" } }, e.onInitialize = function() { var t = e.getPartsBuilder(),
                    r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAWElEQVQoU2NkIBIwEqmOAa6wgZWlH6Sp4fefQjCNxkdRyMjAUPCf4f8CkEJGBsaE/wwME2AaUaxuYGWeD1IAUgjS0PD7byLMaaQrBLmJKKuJ9gyhYCI6HAGlFDALf9s7eQAAAABJRU5ErkJggg==",
                    n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVElEQVQoU2NkIBIwoqvjixFoAIl9WvIBTMMAhkLeGP79IMnPSz46kq8QZN1/hv/2IBMYGRgMQPR/BoYLED7jQZAzwFYTrRDZLdRxI7KJRAcPrvAHAATYKgvLH0fAAAAAAElFTkSuQmCC"; "fullscreen" === o.titleBar.greenButton && (n = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAZElEQVQoU2NkIBIwEqmOAUWhQIKAwL8///czMDAYwAz4tOQjWA1cIUjRhwUfPqArxlDIF8N/nomF0RFdMTaF/xkYGC6gK/605KMhitV8MfwghSCAohhkAy6FKIphniIvePCFKQDzGzsLS+7n2AAAAABJRU5ErkJggg=="); var a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=",
                    i = "margin:0px;padding:0px;width:10px;height:10px",
                    l = document.createElement("img");
                l.src = n, l.setAttribute("style", i); var s = document.createElement("img");
                s.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiUlEQVQoU2NkwAIEogQMPiz7cAFZihGbQt4Y/v0MjIwLPy/+sAAmj1MhIwODw39GxkSYYrwKQabBFGNVyBfL1///P6MBzFrmf4yFjCCH/2X63w93C+P/C58WfypEdzvYRN5YgQTG///ng61iYDjweclHR6wKkRUTVAhTzPD/fzxeE2FWYQtskBwAKwQ7tVjAL4MAAAAASUVORK5CYII=", s.setAttribute("style", i); var d = document.createElement("img");
                d.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMUlEQVQoU2NkIBIwEqmOgUYKa7w4Ghj+M9hjdQYjw8GWbT8awFYTrZAYD9HIM8RYDQBsEAwLkq4IAgAAAABJRU5ErkJggg==", d.setAttribute("style", i); var u = document.createElement("img");
                u.src = r, u.setAttribute("style", i); var c = document.createElement("img");
                c.src = a, c.setAttribute("style", "margin:0px;padding:0px;width:6px;height:6px"); var m = t.buildImageButtonAppearance();
                m.imageDefault = c, m.imageHovered = u, m.imagePressed = u, m.imageFocused = c, m.size = 10, m.borderRadius = 5, m.borderWidth = 1, m.borderColorDefault = "#c6c6c6", m.borderColorFocused = "#d3524e", m.borderColorHovered = m.borderColorFocused, m.borderColorPressed = "#e64842", m.borderStyleDefault = "solid", m.borderStyleFocused = m.borderStyleDefault, m.borderStyleHovered = m.borderStyleDefault, m.borderStylePressed = m.borderStyleDefault, m.backgroundColorDefault = "#d0d0d0", m.backgroundColorFocused = "#fc615c", m.backgroundColorHovered = m.backgroundColorFocused, m.backgroundColorPressed = m.backgroundColorDefault, m.setSrc({ default: a, focused: a, hovered: r, pressed: r }); var p = t.buildButton(m),
                    h = 8,
                    f = -19,
                    y = "LEFT_TOP";
                e.addFrameComponent(o.closeButtonName || "closeButton", p, h, f, y); var b = t.buildImageButtonAppearance(m);
                b.borderColorDefault = "#c6c6c6", b.borderColorFocused = "#e6b347", b.borderColorHovered = b.borderColorFocused, b.borderColorPressed = "#e1a12d", b.backgroundColorDefault = "#d0d0d0", b.backgroundColorFocused = "#fdbe40", b.backgroundColorHovered = b.backgroundColorFocused, b.backgroundColorPressed = b.backgroundColorDefault, b.imageDefault = c, b.imageHovered = d, b.imagePressed = d, b.imageFocused = c; var g = t.buildButton(b),
                    v = t.buildButton(b);
                v.style.display = "none";
                h = 28, f = -19, y = "LEFT_TOP";
                e.addFrameComponent("minimizeButton", g, h, f, y), e.addFrameComponent("deminimizeButton", v, h, f, y); var C = t.buildImageButtonAppearance(m);
                C.borderColorDefault = "#c6c6c6", C.borderColorFocused = "#67b657", C.borderColorHovered = C.borderColorFocused, C.borderColorPressed = "#00af38", C.backgroundColorDefault = "#d0d0d0", C.backgroundColorFocused = "#34ca49", C.backgroundColorHovered = C.backgroundColorFocused, C.backgroundColorPressed = C.backgroundColorDefault, C.imageDefault = c, C.imageHovered = l, C.imagePressed = l, C.imageFocused = c; var B = t.buildButton(C),
                    E = t.buildImageButtonAppearance(m);
                E.borderColorDefault = "#c6c6c6", E.borderColorFocused = "#67b657", E.borderColorHovered = E.borderColorFocused, E.borderColorPressed = "#00af38", E.backgroundColorDefault = "#d0d0d0", E.backgroundColorFocused = "#34ca49", E.backgroundColorHovered = E.backgroundColorFocused, E.backgroundColorPressed = E.backgroundColorDefault, E.imageDefault = c, E.imageHovered = s, E.imagePressed = s, E.imageFocused = c; var w = t.buildButton(E);
                w.style.display = "none";
                h = 48, f = -19, y = "LEFT_TOP";
                e.addFrameComponent("dezoomButton", w, h, f, y), e.addFrameComponent("zoomButton", B, h, f, y) }, e } }, function(e, t, r) { var n = r(0),
            o = r(23); "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]); var a = { insert: "head", singleton: !1 };
        n(o, a);
        e.exports = o.locals || {} }, function(e, t, r) {
        (t = r(1)(!1)).push([e.i, ".jsframe-preset-style-yosemite-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-yosemite-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n", ""]), e.exports = t }, function(e, t, r) { r(25), e.exports.getStyle = function(e) { return e.showTitleBar = !0, e.showCloseButton = !0, e.titleBarCaptionFontSize = "12px", e.titleBarCaptionFontWeight = "normal", e.titleBarCaptionLeftMargin = "10px", e.titleBarCaptionColorDefault = "#9b9a9b", e.titleBarCaptionColorFocused = "#4d494d", e.titleBarHeight = "30px", e.titleBarColorDefault = null, e.titleBarColorFocused = null, e.titleBarBorderBottomDefault = "solid 1px #aaaaaa", e.titleBarBorderBottomFocused = "solid 1px #1883d7", e.frameBorderRadius = "0px", e.frameBorderWidthDefault = "1px", e.frameBorderWidthFocused = "1px", e.frameBorderColorDefault = "#aaaaaa", e.frameBorderColorFocused = "#1883d7", e.frameBorderStyle = "solid", e.frameBoxShadow = null, e.frameBackgroundColor = "transparent", e.frameComponents = new Array, e.frameHeightAdjust = 0, e.getTitleBarStyle = function() { return e.focusedFrameOnly ? { titleBarClassNameDefault: "jsframe-preset-style-redstone-focused", titleBarClassNameFocused: "jsframe-preset-style-redstone-focused" } : { titleBarClassNameDefault: "jsframe-preset-style-redstone-default", titleBarClassNameFocused: "jsframe-preset-style-redstone-focused" } }, e.onInitialize = function() { var t = e.getPartsBuilder(),
                    r = t.buildTextButtonAppearance();
                r.width = 45, r.height = 28, r.borderRadius = 0, r.borderWidth = 0, r.borderColorDefault = "#c6c6c6", r.borderColorFocused = "#fc615c", r.borderColorHovered = r.borderColorFocused, r.borderColorPressed = "#e64842", r.borderStyleDefault = "solid", r.borderStyleFocused = r.borderStyleDefault, r.borderStyleHovered = r.borderStyleDefault, r.borderStylePressed = r.borderStyleDefault, r.backgroundColorDefault = "white", r.backgroundColorFocused = "white", r.backgroundColorHovered = "#e81123", r.backgroundColorPressed = "#f1707a", r.caption = "╳", r.captionColorDefault = "#9b9a9b", r.captionColorFocused = "black", r.captionColorHovered = "white", r.captionColorPressed = "white", r.captionShiftYpx = 1, r.captionFontRatio = .6; var n = t.buildTextButton(r),
                    o = 0,
                    a = -parseInt(e.titleBarHeight),
                    i = "RIGHT_TOP";
                e.addFrameComponent("closeButton", n, o, a, i); var l = t.buildTextButtonAppearance();
                l.width = 45, l.height = 28, l.borderRadius = 0, l.borderWidth = 0, l.borderColorDefault = "#c6c6c6", l.borderColorFocused = "#fc615c", l.borderColorHovered = l.borderColorFocused, l.borderColorPressed = "#e64842", l.borderStyleDefault = "solid", l.borderStyleFocused = l.borderStyleDefault, l.borderStyleHovered = l.borderStyleDefault, l.borderStylePressed = l.borderStyleDefault, l.backgroundColorDefault = "white", l.backgroundColorFocused = "white", l.backgroundColorHovered = "#e5e5e5", l.backgroundColorPressed = "#cccccc", l.caption = "☐", l.captionColorDefault = "#9b9a9b", l.captionColorFocused = "black", l.captionColorHovered = "black", l.captionColorPressed = "black", l.captionShiftYpx = 1, l.captionFontRatio = .55; var s = t.buildTextButton(l);
                o = -46, a = -parseInt(e.titleBarHeight), i = "RIGHT_TOP";
                e.addFrameComponent("maximizeButton", s, o, a, i); var d = t.buildTextButtonAppearance();
                d.width = 45, d.height = 28, d.borderRadius = 0, d.borderWidth = 0, d.borderColorDefault = "#c6c6c6", d.borderColorFocused = "#fc615c", d.borderColorHovered = d.borderColorFocused, d.borderColorPressed = "#e64842", d.borderStyleDefault = "solid", d.borderStyleFocused = d.borderStyleDefault, d.borderStyleHovered = d.borderStyleDefault, d.borderStylePressed = d.borderStyleDefault, d.backgroundColorDefault = "white", d.backgroundColorFocused = "white", d.backgroundColorHovered = "#e5e5e5", d.backgroundColorPressed = "#cccccc", d.caption = "＿", d.captionColorDefault = "#9b9a9b", d.captionColorFocused = "black", d.captionColorHovered = "black", d.captionColorPressed = "black", d.captionShiftYpx = -2, d.captionFontRatio = .3; var u = t.buildTextButton(d);
                o = -92, a = -parseInt(e.titleBarHeight), i = "RIGHT_TOP";
                e.addFrameComponent("minimizeButton", u, o, a, i); var c = t.buildTextButtonAppearance();
                c.width = 45, c.height = 28, c.borderRadius = 0, c.borderWidth = 0, c.borderColorDefault = "#c6c6c6", c.borderColorFocused = "#fc615c", c.borderColorHovered = c.borderColorFocused, c.borderColorPressed = "#e64842", c.borderStyleDefault = "solid", c.borderStyleFocused = c.borderStyleDefault, c.borderStyleHovered = c.borderStyleDefault, c.borderStylePressed = c.borderStyleDefault, c.backgroundColorDefault = "white", c.backgroundColorFocused = "white", c.backgroundColorHovered = "#e5e5e5", c.backgroundColorPressed = "#cccccc", c.caption = "▣", c.captionColorDefault = "#9b9a9b", c.captionColorFocused = "black", c.captionColorHovered = "black", c.captionColorPressed = "black", c.captionShiftYpx = 1, c.captionFontRatio = .6; var m = t.buildTextButton(c);
                o = -92, a = -parseInt(e.titleBarHeight), i = "RIGHT_TOP";
                m.style.display = "none", e.addFrameComponent("deminimizeButton", m, o, a, i); var p = t.buildTextButtonAppearance();
                p.width = 45, p.height = 28, p.borderRadius = 0, p.borderWidth = 0, p.borderColorDefault = "#c6c6c6", p.borderColorFocused = "#fc615c", p.borderColorHovered = p.borderColorFocused, p.borderColorPressed = "#e64842", p.borderStyleDefault = "solid", p.borderStyleFocused = p.borderStyleDefault, p.borderStyleHovered = p.borderStyleDefault, p.borderStylePressed = p.borderStyleDefault, p.backgroundColorDefault = "white", p.backgroundColorFocused = "white", p.backgroundColorHovered = "#e5e5e5", p.backgroundColorPressed = "#cccccc", p.caption = "❏", p.captionColorDefault = "#9b9a9b", p.captionColorFocused = "black", p.captionColorHovered = "black", p.captionColorPressed = "black", p.captionShiftYpx = 1, p.captionFontRatio = .55; var h = t.buildTextButton(p);
                o = -46, a = -parseInt(e.titleBarHeight), i = "RIGHT_TOP";
                h.style.display = "none", e.addFrameComponent("restoreButton", h, o, a, i) }, e } }, function(e, t, r) { var n = r(0),
            o = r(26); "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]); var a = { insert: "head", singleton: !1 };
        n(o, a);
        e.exports = o.locals || {} }, function(e, t, r) {
        (t = r(1)(!1)).push([e.i, ".jsframe-preset-style-redstone-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-redstone-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n", ""]), e.exports = t }, function(e, t, r) { r(28), e.exports.getStyle = function(e) { return e.showTitleBar = !1, e.showCloseButton = !0, e.titleBarCaptionFontSize = "12px", e.titleBarCaptionFontWeight = "normal", e.titleBarCaptionLeftMargin = "10px", e.titleBarCaptionColorDefault = "#4d494d", e.titleBarCaptionColorFocused = "#4d494d", e.titleBarHeight = "5px", e.titleBarColorDefault = "white", e.titleBarColorFocused = "white", e.titleBarBorderBottomDefault = null, e.titleBarBorderBottomFocused = null, e.frameBorderRadius = "6px", e.frameBorderWidthDefault = "1px", e.frameBorderWidthFocused = "1px", e.frameBorderColorDefault = "#aaaaaa", e.frameBorderColorFocused = "#aaaaaa", e.frameBorderStyle = "solid", e.frameBoxShadow = "2px 2px 5px  rgba(0, 0, 0, 0.5)", e.frameBackgroundColor = "white", e.frameComponents = new Array, e.frameHeightAdjust = 2, e.getTitleBarStyle = function() { return e.focusedFrameOnly ? { titleBarClassNameDefault: "jsframe-preset-style-popup-focused", titleBarClassNameFocused: "jsframe-preset-style-popup-focused" } : { titleBarClassNameDefault: "jsframe-preset-style-popup-default", titleBarClassNameFocused: "jsframe-preset-style-popup-focused" } }, e.onInitialize = function() { var t = e.getPartsBuilder(),
                    r = t.buildTextButtonAppearance();
                r.width = 20, r.height = 20, r.borderRadius = 10, r.borderWidth = 1, r.borderColorDefault = "#cccccc", r.borderColorFocused = "#cccccc", r.borderColorHovered = "#dddddd", r.borderColorPressed = "#eeeeee", r.borderStyleDefault = "solid", r.borderStyleFocused = r.borderStyleDefault, r.borderStyleHovered = r.borderStyleDefault, r.borderStylePressed = r.borderStyleDefault, r.backgroundColorDefault = "white", r.backgroundColorFocused = "white", r.backgroundColorHovered = "#eeeeee", r.backgroundColorPressed = "#dddddd", r.backgroundBoxShadow = "2px 2px 5px  rgba(0, 0, 0, 0.5)", r.caption = "✖", r.captionColorDefault = "black", r.captionColorFocused = "black", r.captionColorHovered = "white", r.captionColorPressed = "white", r.captionShiftYpx = 1, r.captionFontRatio = .6; var n = t.buildTextButton(r),
                    o = -6 - parseInt(e.titleBarHeight);
                e.addFrameComponent("closeButton", n, 10, o, "RIGHT_TOP") }, e } }, function(e, t, r) { var n = r(0),
            o = r(29); "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]); var a = { insert: "head", singleton: !1 };
        n(o, a);
        e.exports = o.locals || {} }, function(e, t, r) {
        (t = r(1)(!1)).push([e.i, ".jsframe-preset-style-popup-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-popup-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n", ""]), e.exports = t }, function(e, t) { e.exports.getStyle = function(e) { return e.showTitleBar = !1, e.showCloseButton = !0, e.titleBarCaptionFontSize = "0px", e.titleBarCaptionFontWeight = "normal", e.titleBarCaptionLeftMargin = "0px", e.titleBarCaptionColorDefault = "transparent", e.titleBarCaptionColorFocused = "transparent", e.titleBarHeight = "0px", e.titleBarColorDefault = "transparent", e.titleBarColorFocused = "transparent", e.titleBarBorderBottomDefault = null, e.titleBarBorderBottomFocused = null, e.frameBorderRadius = "10px", e.frameBorderWidthDefault = "0px", e.frameBorderWidthFocused = "0px", e.frameBorderColorDefault = "transparent", e.frameBorderColorFocused = "transparent", e.frameBorderStyle = "solid", e.frameBoxShadow = "2px 2px 15px  rgba(0, 0, 0, 0.5)", e.frameBackgroundColor = "transparent", e.frameComponents = [], e.frameHeightAdjust = 1, e.captionClor = "darkgray", e.pullUpDisabled = !1, e.getTitleBarStyle = function() { return e.focusedFrameOnly, { titleBarClassNameDefault: " ", titleBarClassNameFocused: " " } }, e.onInitialize = function() { var t = e.getPartsBuilder(),
                    r = t.buildTextButtonAppearance();
                r.width = 20, r.height = 20, r.borderRadius = 10, r.borderWidth = 0, r.borderColorDefault = "#cccccc", r.borderColorFocused = "#cccccc", r.borderColorHovered = "#dddddd", r.borderColorPressed = "#eeeeee", r.borderStyleDefault = "solid", r.borderStyleFocused = r.borderStyleDefault, r.borderStyleHovered = r.borderStyleDefault, r.borderStylePressed = r.borderStyleDefault, r.backgroundColorDefault = "transparent", r.backgroundColorFocused = "transparent", r.backgroundColorHovered = "transparent", r.backgroundColorPressed = "transparent", r.backgroundBoxShadow = null, r.caption = "✖", r.captionColorDefault = e.captionClor, r.captionColorFocused = e.captionClor, r.captionColorHovered = e.captionClor, r.captionColorPressed = e.captionClor, r.captionShiftYpx = 1, r.captionFontRatio = .6; var n = t.buildTextButton(r);
                e.addFrameComponent("closeButton", n, -6, 3, "RIGHT_TOP") }, e } }, function(e, t, r) { r(32); var n = r(9);

        function o(e, t, r) { var n, o = e.getPartsBuilder(),
                i = 0; for (var l in n = r ? t.titleBar.buttonsOnLeft : t.titleBar.buttons) { var s = n[l],
                    d = o.buildTextButtonAppearance();
                d.fa = s.fa, d.width = t.titleBar.buttonWidth, d.height = t.titleBar.buttonHeight, d.borderRadius = 0, d.borderWidth = 0, d.borderColorDefault = "#c6c6c6", d.borderColorFocused = "#fc615c", d.borderColorHovered = d.borderColorFocused, d.borderColorPressed = "#e64842", d.borderStyleDefault = "solid", d.borderStyleFocused = d.borderStyleDefault, d.borderStyleHovered = d.borderStyleDefault, d.borderStylePressed = d.borderStyleDefault, d.backgroundColorDefault = "transparent", d.backgroundColorFocused = "transparent", d.backgroundColorHovered = "transparent", d.backgroundColorPressed = "transparent"; var u = a(t.titleBar.buttonColor);
                d.captionColorDefault = t.titleBar.buttonColor, d.captionColorFocused = t.titleBar.buttonColor, d.captionColorHovered = u.hovered, d.captionColorPressed = u.pressed, d.captionShiftYpx = 0, d.captionFontRatio = 1; var c = o.buildTextButton(d);
                s.visible ? c.style.display = "flex" : (r ? i -= t.titleBar.buttonWidth : i += t.titleBar.buttonWidth, c.style.display = "none"); var m, p, h = parseInt(e.titleBarHeight),
                    f = i,
                    y = -h + (h - d.height) / 2;
                m = r ? "LEFT_TOP" : "RIGHT_TOP", s.childMenuHTML && ((p = document.createElement("div")).id = s.name + "_child_menu", p.innerHTML = s.childMenuHTML, p.style.position = "absolute", p.style.width = (s.childMenuWidth ? s.childMenuWidth : 200) + "px", p.style.top = parseInt(c.style.top, 10) + parseInt(c.style.height, 10) / 2 + h / 2 + "px", p.style.left = c.style.left, p.style.display = "none", c.appendChild(p)), e.addFrameComponent(s.name, c, f, y, m, { childMenu: p }), i += r ? t.titleBar.buttonWidth : -t.titleBar.buttonWidth } }

        function a(e) { var t = document.createElement("canvas");
            t.height = 1, t.width = 1; var r = t.getContext("2d");
            r.fillStyle = e, r.fillRect(0, 0, 1, 1); var n = r.getImageData(0, 0, 1, 1).data,
                o = n[0],
                a = n[1],
                i = n[2],
                l = n[3] / 255,
                s = .85 * l; return { src: "rgb(" + o + "," + a + "," + i + "," + s + ")", hovered: "rgb(" + o + "," + a + "," + i + "," + s + ")", pressed: "rgb(" + o + "," + a + "," + i + "," + .75 * l + ")" } }
        e.exports.getStyle = function(e, t) { var r = { border: { color: "transparent", width: 0, radius: 6 }, control: { maximizeWithoutTitleBar: !1, restoreKey: "Escape" }, titleBar: { color: "white", background: "black", leftMargin: 20, height: 30, fontSize: 12, buttonWidth: 36, buttonHeight: 16, buttonColor: "white", buttons: [{ fa: "fas fa-times", name: "closeButton", visible: !0 }, { fa: "far fa-window-maximize", name: "maximizeButton", visible: !0 }, { fa: "far fa-window-restore", name: "restoreButton", visible: !1 }, { fa: "far fa-window-minimize", name: "minimizeButton", visible: !0 }, { fa: "fas fa-caret-up", name: "deminimizeButton", visible: !1 }], buttonsOnLeft: [] } },
                a = r; return t && n.objectAssign(r, t), e.showTitleBar = !0, e.showCloseButton = !0, e.titleBarCaptionFontSize = a.titleBar.fontSize + "px", e.titleBarCaptionFontWeight = "normal", e.titleBarCaptionLeftMargin = a.titleBar.leftMargin + "px", e.titleBarCaptionColorDefault = a.titleBar.color, e.titleBarCaptionColorFocused = a.titleBar.color, e.titleBarCaptionTextShadow = null, e.titleBarCaptionTextAlign = "left", e.titleBarHeight = a.titleBar.height + "px", e.titleBarColorDefault = a.titleBar.background, e.titleBarColorFocused = a.titleBar.background, e.titleBarBorderBottomDefault = "solid 0px #aaaaaa", e.titleBarBorderBottomFocused = "solid 0px #1883d7", e.frameBorderRadius = a.border.radius + "px", e.frameBorderWidthDefault = a.border.width + "px", e.frameBorderWidthFocused = a.border.width + "px", e.frameBorderColorDefault = a.border.color, e.frameBorderColorFocused = a.border.color, e.frameBorderStyle = "solid", e.frameBoxShadow = a.border.shadow, e.frameBackgroundColor = "transparent", e.frameComponents = new Array, e.frameHeightAdjust = 0, e.getTitleBarStyle = function() { return e.focusedFrameOnly, { titleBarClassNameDefault: " ", titleBarClassNameFocused: " " } }, e.onInitialize = function() { o(e, a, !1), o(e, a, !0) }, e } }, function(e, t, r) { var n = r(0),
            o = r(33); "string" == typeof(o = o.__esModule ? o.default : o) && (o = [
            [e.i, o, ""]
        ]); var a = { insert: "head", singleton: !1 };
        n(o, a);
        e.exports = o.locals || {} }, function(e, t, r) {
        (t = r(1)(!1)).push([e.i, ".jsframe-preset-style-material-default {\n    background: black;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-material-focused {\n    background: black;\n    border-top-left-radius: 36px;\n    border-top-right-radius: 36px;\n}\n", ""]), e.exports = t }, function(e, t, r) { var n = r(2);
        e.exports.getPresetWindow = function(e) { var t = { appearanceName: "yosemite", appearanceParam: {} },
                r = {};
            e && (r = e); var o = "fullscreen" === r.maximizeButtonBehavior,
                a = "minimize" === r.minimizeButtonBehavior ? "minimizeButton" : null,
                i = "hide" === r.minimizeButtonBehavior ? "minimizeButton" : null,
                l = "hide" === r.closeButtonBehavior ? "custom-close-button" : null,
                s = r.control,
                d = l,
                u = r.closeButtonName; return o && (t.appearanceParam.titleBar = { greenButton: "fullscreen" }), t.appearanceParam.closeButtonName = d || u || "closeButton", t.setupPresetWindow = function(e) { var t = { maximizeButton: "zoomButton", maximizeParam: { fullScreen: o, restoreKey: "Escape" }, demaximizeButton: "dezoomButton", deminimizeButton: "deminimizeButton", minimizeButton: a, hideButtons: [i, l], hideParam: { align: "CENTER_CENTER", duration: 300 }, dehideParam: { duration: 300 }, styleDisplay: "inline", animation: !0, animationDuration: 100 };
                s && n({ op: "overwrite-merge", object1: t, object2: s }), e.setControl(t) }, t } }])
}));