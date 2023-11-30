/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Sl =
  function (r, t) {
    return (
      (Sl =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, n) {
            e.__proto__ = n;
          }) ||
        function (e, n) {
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }),
      Sl(r, t)
    );
  };
function O(r, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Class extends value " + String(t) + " is not a constructor or null"
    );
  Sl(r, t);
  function e() {
    this.constructor = r;
  }
  r.prototype =
    t === null ? Object.create(t) : ((e.prototype = t.prototype), new e());
}
var j_ = (function () {
    function r() {
      (this.firefox = !1),
        (this.ie = !1),
        (this.edge = !1),
        (this.newEdge = !1),
        (this.weChat = !1);
    }
    return r;
  })(),
  t1 = (function () {
    function r() {
      (this.browser = new j_()),
        (this.node = !1),
        (this.wxa = !1),
        (this.worker = !1),
        (this.svgSupported = !1),
        (this.touchEventsSupported = !1),
        (this.pointerEventsSupported = !1),
        (this.domSupported = !1),
        (this.transformSupported = !1),
        (this.transform3dSupported = !1),
        (this.hasGlobalWindow = typeof window < "u");
    }
    return r;
  })(),
  Kr = new t1();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function"
  ? ((Kr.wxa = !0), (Kr.touchEventsSupported = !0))
  : typeof document > "u" && typeof self < "u"
  ? (Kr.worker = !0)
  : typeof navigator > "u"
  ? ((Kr.node = !0), (Kr.svgSupported = !0))
  : e1(navigator.userAgent, Kr);
function e1(r, t) {
  var e = t.browser,
    n = r.match(/Firefox\/([\d.]+)/),
    i = r.match(/MSIE\s([\d.]+)/) || r.match(/Trident\/.+?rv:(([\d.]+))/),
    a = r.match(/Edge?\/([\d.]+)/),
    o = /micromessenger/i.test(r);
  n && ((e.firefox = !0), (e.version = n[1])),
    i && ((e.ie = !0), (e.version = i[1])),
    a &&
      ((e.edge = !0),
      (e.version = a[1]),
      (e.newEdge = +a[1].split(".")[0] > 18)),
    o && (e.weChat = !0),
    (t.svgSupported = typeof SVGRect < "u"),
    (t.touchEventsSupported = "ontouchstart" in window && !e.ie && !e.edge),
    (t.pointerEventsSupported =
      "onpointerdown" in window && (e.edge || (e.ie && +e.version >= 11))),
    (t.domSupported = typeof document < "u");
  var s = document.documentElement.style;
  (t.transform3dSupported =
    ((e.ie && "transition" in s) ||
      e.edge ||
      ("WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix()) ||
      "MozPerspective" in s) &&
    !("OTransition" in s)),
    (t.transformSupported =
      t.transform3dSupported || (e.ie && +e.version >= 9));
}
const j = Kr;
var Nf = 12,
  r1 = "sans-serif",
  sn = Nf + "px " + r1,
  n1 = 20,
  i1 = 100,
  a1 =
    "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function o1(r) {
  var t = {};
  if (typeof JSON > "u") return t;
  for (var e = 0; e < r.length; e++) {
    var n = String.fromCharCode(e + 32),
      i = (r.charCodeAt(e) - n1) / i1;
    t[n] = i;
  }
  return t;
}
var s1 = o1(a1),
  dn = {
    createCanvas: function () {
      return typeof document < "u" && document.createElement("canvas");
    },
    measureText: (function () {
      var r, t;
      return function (e, n) {
        if (!r) {
          var i = dn.createCanvas();
          r = i && i.getContext("2d");
        }
        if (r) return t !== n && (t = r.font = n || sn), r.measureText(e);
        (e = e || ""), (n = n || sn);
        var a = /^([0-9]*?)px$/.exec(n),
          o = +(a && a[1]) || Nf,
          s = 0;
        if (n.indexOf("mono") >= 0) s = o * e.length;
        else
          for (var u = 0; u < e.length; u++) {
            var l = s1[e[u]];
            s += l == null ? o : l * o;
          }
        return { width: s };
      };
    })(),
    loadImage: function (r, t, e) {
      var n = new Image();
      return (n.onload = t), (n.onerror = e), (n.src = r), n;
    },
  },
  gg = oi(
    [
      "Function",
      "RegExp",
      "Date",
      "Error",
      "CanvasGradient",
      "CanvasPattern",
      "Image",
      "Canvas",
    ],
    function (r, t) {
      return (r["[object " + t + "]"] = !0), r;
    },
    {}
  ),
  yg = oi(
    [
      "Int8",
      "Uint8",
      "Uint8Clamped",
      "Int16",
      "Uint16",
      "Int32",
      "Uint32",
      "Float32",
      "Float64",
    ],
    function (r, t) {
      return (r["[object " + t + "Array]"] = !0), r;
    },
    {}
  ),
  ai = Object.prototype.toString,
  ds = Array.prototype,
  u1 = ds.forEach,
  l1 = ds.filter,
  Ff = ds.slice,
  f1 = ds.map,
  tv = function () {}.constructor,
  ka = tv ? tv.prototype : null,
  zf = "__proto__",
  h1 = 2311;
function mg() {
  return h1++;
}
function Gf() {
  for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, r);
}
function K(r) {
  if (r == null || typeof r != "object") return r;
  var t = r,
    e = ai.call(r);
  if (e === "[object Array]") {
    if (!Ui(r)) {
      t = [];
      for (var n = 0, i = r.length; n < i; n++) t[n] = K(r[n]);
    }
  } else if (yg[e]) {
    if (!Ui(r)) {
      var a = r.constructor;
      if (a.from) t = a.from(r);
      else {
        t = new a(r.length);
        for (var n = 0, i = r.length; n < i; n++) t[n] = r[n];
      }
    }
  } else if (!gg[e] && !Ui(r) && !ra(r)) {
    t = {};
    for (var o in r) r.hasOwnProperty(o) && o !== zf && (t[o] = K(r[o]));
  }
  return t;
}
function Q(r, t, e) {
  if (!H(t) || !H(r)) return e ? K(t) : r;
  for (var n in t)
    if (t.hasOwnProperty(n) && n !== zf) {
      var i = r[n],
        a = t[n];
      H(a) &&
      H(i) &&
      !N(a) &&
      !N(i) &&
      !ra(a) &&
      !ra(i) &&
      !ev(a) &&
      !ev(i) &&
      !Ui(a) &&
      !Ui(i)
        ? Q(i, a, e)
        : (e || !(n in r)) && (r[n] = K(t[n]));
    }
  return r;
}
function k(r, t) {
  if (Object.assign) Object.assign(r, t);
  else for (var e in t) t.hasOwnProperty(e) && e !== zf && (r[e] = t[e]);
  return r;
}
function q(r, t, e) {
  for (var n = pt(t), i = 0; i < n.length; i++) {
    var a = n[i];
    (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
  }
  return r;
}
dn.createCanvas;
function J(r, t) {
  if (r) {
    if (r.indexOf) return r.indexOf(t);
    for (var e = 0, n = r.length; e < n; e++) if (r[e] === t) return e;
  }
  return -1;
}
function v1(r, t) {
  var e = r.prototype;
  function n() {}
  (n.prototype = t.prototype), (r.prototype = new n());
  for (var i in e) e.hasOwnProperty(i) && (r.prototype[i] = e[i]);
  (r.prototype.constructor = r), (r.superClass = t);
}
function Ne(r, t, e) {
  if (
    ((r = "prototype" in r ? r.prototype : r),
    (t = "prototype" in t ? t.prototype : t),
    Object.getOwnPropertyNames)
  )
    for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
      var a = n[i];
      a !== "constructor" && (e ? t[a] != null : r[a] == null) && (r[a] = t[a]);
    }
  else q(r, t, e);
}
function Ht(r) {
  return !r || typeof r == "string" ? !1 : typeof r.length == "number";
}
function C(r, t, e) {
  if (!!(r && t))
    if (r.forEach && r.forEach === u1) r.forEach(t, e);
    else if (r.length === +r.length)
      for (var n = 0, i = r.length; n < i; n++) t.call(e, r[n], n, r);
    else for (var a in r) r.hasOwnProperty(a) && t.call(e, r[a], a, r);
}
function z(r, t, e) {
  if (!r) return [];
  if (!t) return Hf(r);
  if (r.map && r.map === f1) return r.map(t, e);
  for (var n = [], i = 0, a = r.length; i < a; i++)
    n.push(t.call(e, r[i], i, r));
  return n;
}
function oi(r, t, e, n) {
  if (!!(r && t)) {
    for (var i = 0, a = r.length; i < a; i++) e = t.call(n, e, r[i], i, r);
    return e;
  }
}
function xt(r, t, e) {
  if (!r) return [];
  if (!t) return Hf(r);
  if (r.filter && r.filter === l1) return r.filter(t, e);
  for (var n = [], i = 0, a = r.length; i < a; i++)
    t.call(e, r[i], i, r) && n.push(r[i]);
  return n;
}
function pt(r) {
  if (!r) return [];
  if (Object.keys) return Object.keys(r);
  var t = [];
  for (var e in r) r.hasOwnProperty(e) && t.push(e);
  return t;
}
function c1(r, t) {
  for (var e = [], n = 2; n < arguments.length; n++) e[n - 2] = arguments[n];
  return function () {
    return r.apply(t, e.concat(Ff.call(arguments)));
  };
}
var Y = ka && U(ka.bind) ? ka.call.bind(ka.bind) : c1;
function ot(r) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return function () {
    return r.apply(this, t.concat(Ff.call(arguments)));
  };
}
function N(r) {
  return Array.isArray ? Array.isArray(r) : ai.call(r) === "[object Array]";
}
function U(r) {
  return typeof r == "function";
}
function G(r) {
  return typeof r == "string";
}
function xl(r) {
  return ai.call(r) === "[object String]";
}
function ft(r) {
  return typeof r == "number";
}
function H(r) {
  var t = typeof r;
  return t === "function" || (!!r && t === "object");
}
function ev(r) {
  return !!gg[ai.call(r)];
}
function jt(r) {
  return !!yg[ai.call(r)];
}
function ra(r) {
  return (
    typeof r == "object" &&
    typeof r.nodeType == "number" &&
    typeof r.ownerDocument == "object"
  );
}
function ps(r) {
  return r.colorStops != null;
}
function d1(r) {
  return r.image != null;
}
function p1(r) {
  return ai.call(r) === "[object RegExp]";
}
function zo(r) {
  return r !== r;
}
function na() {
  for (var r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
  for (var e = 0, n = r.length; e < n; e++) if (r[e] != null) return r[e];
}
function nt(r, t) {
  return r != null ? r : t;
}
function xo(r, t, e) {
  return r != null ? r : t != null ? t : e;
}
function Hf(r) {
  for (var t = [], e = 1; e < arguments.length; e++) t[e - 1] = arguments[e];
  return Ff.apply(r, t);
}
function _g(r) {
  if (typeof r == "number") return [r, r, r, r];
  var t = r.length;
  return t === 2
    ? [r[0], r[1], r[0], r[1]]
    : t === 3
    ? [r[0], r[1], r[2], r[1]]
    : r;
}
function ke(r, t) {
  if (!r) throw new Error(t);
}
function Pe(r) {
  return r == null
    ? null
    : typeof r.trim == "function"
    ? r.trim()
    : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var Sg = "__ec_primitive__";
function Go(r) {
  r[Sg] = !0;
}
function Ui(r) {
  return r[Sg];
}
var g1 = (function () {
  function r(t) {
    this.data = {};
    var e = N(t);
    this.data = {};
    var n = this;
    t instanceof r ? t.each(i) : t && C(t, i);
    function i(a, o) {
      e ? n.set(a, o) : n.set(o, a);
    }
  }
  return (
    (r.prototype.get = function (t) {
      return this.data.hasOwnProperty(t) ? this.data[t] : null;
    }),
    (r.prototype.set = function (t, e) {
      return (this.data[t] = e);
    }),
    (r.prototype.each = function (t, e) {
      for (var n in this.data)
        this.data.hasOwnProperty(n) && t.call(e, this.data[n], n);
    }),
    (r.prototype.keys = function () {
      return pt(this.data);
    }),
    (r.prototype.removeKey = function (t) {
      delete this.data[t];
    }),
    r
  );
})();
function W(r) {
  return new g1(r);
}
function y1(r, t) {
  for (var e = new r.constructor(r.length + t.length), n = 0; n < r.length; n++)
    e[n] = r[n];
  for (var i = r.length, n = 0; n < t.length; n++) e[n + i] = t[n];
  return e;
}
function gs(r, t) {
  var e;
  if (Object.create) e = Object.create(r);
  else {
    var n = function () {};
    (n.prototype = r), (e = new n());
  }
  return t && k(e, t), e;
}
function xg(r) {
  var t = r.style;
  (t.webkitUserSelect = "none"),
    (t.userSelect = "none"),
    (t.webkitTapHighlightColor = "rgba(0,0,0,0)"),
    (t["-webkit-touch-callout"] = "none");
}
function Ze(r, t) {
  return r.hasOwnProperty(t);
}
function Gt() {}
var m1 = 180 / Math.PI;
function si(r, t) {
  return r == null && (r = 0), t == null && (t = 0), [r, t];
}
function _1(r) {
  return [r[0], r[1]];
}
function rv(r, t, e) {
  return (r[0] = t[0] + e[0]), (r[1] = t[1] + e[1]), r;
}
function S1(r, t, e) {
  return (r[0] = t[0] - e[0]), (r[1] = t[1] - e[1]), r;
}
function x1(r) {
  return Math.sqrt(w1(r));
}
function w1(r) {
  return r[0] * r[0] + r[1] * r[1];
}
function Xs(r, t, e) {
  return (r[0] = t[0] * e), (r[1] = t[1] * e), r;
}
function b1(r, t) {
  var e = x1(t);
  return (
    e === 0 ? ((r[0] = 0), (r[1] = 0)) : ((r[0] = t[0] / e), (r[1] = t[1] / e)),
    r
  );
}
function wl(r, t) {
  return Math.sqrt(
    (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1])
  );
}
var bl = wl;
function T1(r, t) {
  return (r[0] - t[0]) * (r[0] - t[0]) + (r[1] - t[1]) * (r[1] - t[1]);
}
var Yn = T1;
function wo(r, t, e, n) {
  return (
    (r[0] = t[0] + n * (e[0] - t[0])), (r[1] = t[1] + n * (e[1] - t[1])), r
  );
}
function fe(r, t, e) {
  var n = t[0],
    i = t[1];
  return (
    (r[0] = e[0] * n + e[2] * i + e[4]), (r[1] = e[1] * n + e[3] * i + e[5]), r
  );
}
function Fn(r, t, e) {
  return (r[0] = Math.min(t[0], e[0])), (r[1] = Math.min(t[1], e[1])), r;
}
function zn(r, t, e) {
  return (r[0] = Math.max(t[0], e[0])), (r[1] = Math.max(t[1], e[1])), r;
}
var mn = (function () {
    function r(t, e) {
      (this.target = t), (this.topTarget = e && e.topTarget);
    }
    return r;
  })(),
  C1 = (function () {
    function r(t) {
      (this.handler = t),
        t.on("mousedown", this._dragStart, this),
        t.on("mousemove", this._drag, this),
        t.on("mouseup", this._dragEnd, this);
    }
    return (
      (r.prototype._dragStart = function (t) {
        for (var e = t.target; e && !e.draggable; )
          e = e.parent || e.__hostTarget;
        e &&
          ((this._draggingTarget = e),
          (e.dragging = !0),
          (this._x = t.offsetX),
          (this._y = t.offsetY),
          this.handler.dispatchToElement(new mn(e, t), "dragstart", t.event));
      }),
      (r.prototype._drag = function (t) {
        var e = this._draggingTarget;
        if (e) {
          var n = t.offsetX,
            i = t.offsetY,
            a = n - this._x,
            o = i - this._y;
          (this._x = n),
            (this._y = i),
            e.drift(a, o, t),
            this.handler.dispatchToElement(new mn(e, t), "drag", t.event);
          var s = this.handler.findHover(n, i, e).target,
            u = this._dropTarget;
          (this._dropTarget = s),
            e !== s &&
              (u &&
                s !== u &&
                this.handler.dispatchToElement(
                  new mn(u, t),
                  "dragleave",
                  t.event
                ),
              s &&
                s !== u &&
                this.handler.dispatchToElement(
                  new mn(s, t),
                  "dragenter",
                  t.event
                ));
        }
      }),
      (r.prototype._dragEnd = function (t) {
        var e = this._draggingTarget;
        e && (e.dragging = !1),
          this.handler.dispatchToElement(new mn(e, t), "dragend", t.event),
          this._dropTarget &&
            this.handler.dispatchToElement(
              new mn(this._dropTarget, t),
              "drop",
              t.event
            ),
          (this._draggingTarget = null),
          (this._dropTarget = null);
      }),
      r
    );
  })();
const M1 = C1;
var D1 = (function () {
  function r(t) {
    t && (this._$eventProcessor = t);
  }
  return (
    (r.prototype.on = function (t, e, n, i) {
      this._$handlers || (this._$handlers = {});
      var a = this._$handlers;
      if ((typeof e == "function" && ((i = n), (n = e), (e = null)), !n || !t))
        return this;
      var o = this._$eventProcessor;
      e != null && o && o.normalizeQuery && (e = o.normalizeQuery(e)),
        a[t] || (a[t] = []);
      for (var s = 0; s < a[t].length; s++) if (a[t][s].h === n) return this;
      var u = {
          h: n,
          query: e,
          ctx: i || this,
          callAtLast: n.zrEventfulCallAtLast,
        },
        l = a[t].length - 1,
        f = a[t][l];
      return f && f.callAtLast ? a[t].splice(l, 0, u) : a[t].push(u), this;
    }),
    (r.prototype.isSilent = function (t) {
      var e = this._$handlers;
      return !e || !e[t] || !e[t].length;
    }),
    (r.prototype.off = function (t, e) {
      var n = this._$handlers;
      if (!n) return this;
      if (!t) return (this._$handlers = {}), this;
      if (e) {
        if (n[t]) {
          for (var i = [], a = 0, o = n[t].length; a < o; a++)
            n[t][a].h !== e && i.push(n[t][a]);
          n[t] = i;
        }
        n[t] && n[t].length === 0 && delete n[t];
      } else delete n[t];
      return this;
    }),
    (r.prototype.trigger = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      if (!this._$handlers) return this;
      var i = this._$handlers[t],
        a = this._$eventProcessor;
      if (i)
        for (var o = e.length, s = i.length, u = 0; u < s; u++) {
          var l = i[u];
          if (!(a && a.filter && l.query != null && !a.filter(t, l.query)))
            switch (o) {
              case 0:
                l.h.call(l.ctx);
                break;
              case 1:
                l.h.call(l.ctx, e[0]);
                break;
              case 2:
                l.h.call(l.ctx, e[0], e[1]);
                break;
              default:
                l.h.apply(l.ctx, e);
                break;
            }
        }
      return a && a.afterTrigger && a.afterTrigger(t), this;
    }),
    (r.prototype.triggerWithContext = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      if (!this._$handlers) return this;
      var i = this._$handlers[t],
        a = this._$eventProcessor;
      if (i)
        for (var o = e.length, s = e[o - 1], u = i.length, l = 0; l < u; l++) {
          var f = i[l];
          if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
            switch (o) {
              case 0:
                f.h.call(s);
                break;
              case 1:
                f.h.call(s, e[0]);
                break;
              case 2:
                f.h.call(s, e[0], e[1]);
                break;
              default:
                f.h.apply(s, e.slice(1, o - 1));
                break;
            }
        }
      return a && a.afterTrigger && a.afterTrigger(t), this;
    }),
    r
  );
})();
const ce = D1;
var A1 = Math.log(2);
function Tl(r, t, e, n, i, a) {
  var o = n + "-" + i,
    s = r.length;
  if (a.hasOwnProperty(o)) return a[o];
  if (t === 1) {
    var u = Math.round(Math.log(((1 << s) - 1) & ~i) / A1);
    return r[e][u];
  }
  for (var l = n | (1 << e), f = e + 1; n & (1 << f); ) f++;
  for (var h = 0, c = 0, v = 0; c < s; c++) {
    var d = 1 << c;
    d & i ||
      ((h += (v % 2 ? -1 : 1) * r[e][c] * Tl(r, t - 1, f, l, i | d, a)), v++);
  }
  return (a[o] = h), h;
}
function nv(r, t) {
  var e = [
      [r[0], r[1], 1, 0, 0, 0, -t[0] * r[0], -t[0] * r[1]],
      [0, 0, 0, r[0], r[1], 1, -t[1] * r[0], -t[1] * r[1]],
      [r[2], r[3], 1, 0, 0, 0, -t[2] * r[2], -t[2] * r[3]],
      [0, 0, 0, r[2], r[3], 1, -t[3] * r[2], -t[3] * r[3]],
      [r[4], r[5], 1, 0, 0, 0, -t[4] * r[4], -t[4] * r[5]],
      [0, 0, 0, r[4], r[5], 1, -t[5] * r[4], -t[5] * r[5]],
      [r[6], r[7], 1, 0, 0, 0, -t[6] * r[6], -t[6] * r[7]],
      [0, 0, 0, r[6], r[7], 1, -t[7] * r[6], -t[7] * r[7]],
    ],
    n = {},
    i = Tl(e, 8, 0, 0, 0, n);
  if (i !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0),
          (a[s] +=
            ((((o + s) % 2 ? -1 : 1) *
              Tl(e, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n)) /
              i) *
            t[o]);
    return function (u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      (u[0] = (l * a[0] + f * a[1] + a[2]) / h),
        (u[1] = (l * a[3] + f * a[4] + a[5]) / h);
    };
  }
}
var iv = "___zrEVENTSAVED",
  qs = [];
function L1(r, t, e, n, i) {
  return Cl(qs, t, n, i, !0) && Cl(r, e, qs[0], qs[1]);
}
function Cl(r, t, e, n, i) {
  if (t.getBoundingClientRect && j.domSupported && !wg(t)) {
    var a = t[iv] || (t[iv] = {}),
      o = I1(t, a),
      s = P1(o, a, i);
    if (s) return s(r, e, n), !0;
  }
  return !1;
}
function I1(r, t) {
  var e = t.markers;
  if (e) return e;
  e = t.markers = [];
  for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"),
      s = o.style,
      u = a % 2,
      l = (a >> 1) % 2;
    (s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      n[u] + ":0",
      i[l] + ":0",
      n[1 - u] + ":auto",
      i[1 - l] + ":auto",
      "",
    ].join("!important;")),
      r.appendChild(o),
      e.push(o);
  }
  return e;
}
function P1(r, t, e) {
  for (
    var n = e ? "invTrans" : "trans",
      i = t[n],
      a = t.srcCoords,
      o = [],
      s = [],
      u = !0,
      l = 0;
    l < 4;
    l++
  ) {
    var f = r[l].getBoundingClientRect(),
      h = 2 * l,
      c = f.left,
      v = f.top;
    o.push(c, v),
      (u = u && a && c === a[h] && v === a[h + 1]),
      s.push(r[l].offsetLeft, r[l].offsetTop);
  }
  return u && i ? i : ((t.srcCoords = o), (t[n] = e ? nv(s, o) : nv(o, s)));
}
function wg(r) {
  return r.nodeName.toUpperCase() === "CANVAS";
}
var R1 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
  Ks = [],
  E1 = j.browser.firefox && +j.browser.version.split(".")[0] < 39;
function Ml(r, t, e, n) {
  return (
    (e = e || {}),
    n
      ? av(r, t, e)
      : E1 && t.layerX != null && t.layerX !== t.offsetX
      ? ((e.zrX = t.layerX), (e.zrY = t.layerY))
      : t.offsetX != null
      ? ((e.zrX = t.offsetX), (e.zrY = t.offsetY))
      : av(r, t, e),
    e
  );
}
function av(r, t, e) {
  if (j.domSupported && r.getBoundingClientRect) {
    var n = t.clientX,
      i = t.clientY;
    if (wg(r)) {
      var a = r.getBoundingClientRect();
      (e.zrX = n - a.left), (e.zrY = i - a.top);
      return;
    } else if (Cl(Ks, r, n, i)) {
      (e.zrX = Ks[0]), (e.zrY = Ks[1]);
      return;
    }
  }
  e.zrX = e.zrY = 0;
}
function Vf(r) {
  return r || window.event;
}
function ie(r, t, e) {
  if (((t = Vf(t)), t.zrX != null)) return t;
  var n = t.type,
    i = n && n.indexOf("touch") >= 0;
  if (i) {
    var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && Ml(r, o, t, e);
  } else {
    Ml(r, t, t, e);
    var a = O1(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return (
    t.which == null &&
      s !== void 0 &&
      R1.test(t.type) &&
      (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0),
    t
  );
}
function O1(r) {
  var t = r.wheelDelta;
  if (t) return t;
  var e = r.deltaX,
    n = r.deltaY;
  if (e == null || n == null) return t;
  var i = Math.abs(n !== 0 ? n : e),
    a = n > 0 ? -1 : n < 0 ? 1 : e > 0 ? -1 : 1;
  return 3 * i * a;
}
function Dl(r, t, e, n) {
  r.addEventListener(t, e, n);
}
function k1(r, t, e, n) {
  r.removeEventListener(t, e, n);
}
var Jn = function (r) {
  r.preventDefault(), r.stopPropagation(), (r.cancelBubble = !0);
};
function ov(r) {
  return r.which === 2 || r.which === 3;
}
var B1 = (function () {
  function r() {
    this._track = [];
  }
  return (
    (r.prototype.recognize = function (t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t);
    }),
    (r.prototype.clear = function () {
      return (this._track.length = 0), this;
    }),
    (r.prototype._doTrack = function (t, e, n) {
      var i = t.touches;
      if (!!i) {
        for (
          var a = { points: [], touches: [], target: e, event: t },
            o = 0,
            s = i.length;
          o < s;
          o++
        ) {
          var u = i[o],
            l = Ml(n, u, {});
          a.points.push([l.zrX, l.zrY]), a.touches.push(u);
        }
        this._track.push(a);
      }
    }),
    (r.prototype._recognize = function (t) {
      for (var e in Qs)
        if (Qs.hasOwnProperty(e)) {
          var n = Qs[e](this._track, t);
          if (n) return n;
        }
    }),
    r
  );
})();
function sv(r) {
  var t = r[1][0] - r[0][0],
    e = r[1][1] - r[0][1];
  return Math.sqrt(t * t + e * e);
}
function N1(r) {
  return [(r[0][0] + r[1][0]) / 2, (r[0][1] + r[1][1]) / 2];
}
var Qs = {
    pinch: function (r, t) {
      var e = r.length;
      if (!!e) {
        var n = (r[e - 1] || {}).points,
          i = (r[e - 2] || {}).points || n;
        if (i && i.length > 1 && n && n.length > 1) {
          var a = sv(n) / sv(i);
          !isFinite(a) && (a = 1), (t.pinchScale = a);
          var o = N1(n);
          return (
            (t.pinchX = o[0]),
            (t.pinchY = o[1]),
            { type: "pinch", target: r[0].target, event: t }
          );
        }
      }
    },
  },
  bg = "silent";
function F1(r, t, e) {
  return {
    type: r,
    event: e,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: e.zrX,
    offsetY: e.zrY,
    gestureEvent: e.gestureEvent,
    pinchX: e.pinchX,
    pinchY: e.pinchY,
    pinchScale: e.pinchScale,
    wheelDelta: e.zrDelta,
    zrByTouch: e.zrByTouch,
    which: e.which,
    stop: z1,
  };
}
function z1() {
  Jn(this.event);
}
var G1 = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.handler = null), e;
    }
    return (
      (t.prototype.dispose = function () {}),
      (t.prototype.setCursor = function () {}),
      t
    );
  })(ce),
  hi = (function () {
    function r(t, e) {
      (this.x = t), (this.y = e);
    }
    return r;
  })(),
  H1 = [
    "click",
    "dblclick",
    "mousewheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu",
  ],
  Tg = (function (r) {
    O(t, r);
    function t(e, n, i, a) {
      var o = r.call(this) || this;
      return (
        (o._hovered = new hi(0, 0)),
        (o.storage = e),
        (o.painter = n),
        (o.painterRoot = a),
        (i = i || new G1()),
        (o.proxy = null),
        o.setHandlerProxy(i),
        (o._draggingMgr = new M1(o)),
        o
      );
    }
    return (
      (t.prototype.setHandlerProxy = function (e) {
        this.proxy && this.proxy.dispose(),
          e &&
            (C(
              H1,
              function (n) {
                e.on && e.on(n, this[n], this);
              },
              this
            ),
            (e.handler = this)),
          (this.proxy = e);
      }),
      (t.prototype.mousemove = function (e) {
        var n = e.zrX,
          i = e.zrY,
          a = Cg(this, n, i),
          o = this._hovered,
          s = o.target;
        s && !s.__zr && ((o = this.findHover(o.x, o.y)), (s = o.target));
        var u = (this._hovered = a ? new hi(n, i) : this.findHover(n, i)),
          l = u.target,
          f = this.proxy;
        f.setCursor && f.setCursor(l ? l.cursor : "default"),
          s && l !== s && this.dispatchToElement(o, "mouseout", e),
          this.dispatchToElement(u, "mousemove", e),
          l && l !== s && this.dispatchToElement(u, "mouseover", e);
      }),
      (t.prototype.mouseout = function (e) {
        var n = e.zrEventControl;
        n !== "only_globalout" &&
          this.dispatchToElement(this._hovered, "mouseout", e),
          n !== "no_globalout" &&
            this.trigger("globalout", { type: "globalout", event: e });
      }),
      (t.prototype.resize = function () {
        this._hovered = new hi(0, 0);
      }),
      (t.prototype.dispatch = function (e, n) {
        var i = this[e];
        i && i.call(this, n);
      }),
      (t.prototype.dispose = function () {
        this.proxy.dispose(),
          (this.storage = null),
          (this.proxy = null),
          (this.painter = null);
      }),
      (t.prototype.setCursorStyle = function (e) {
        var n = this.proxy;
        n.setCursor && n.setCursor(e);
      }),
      (t.prototype.dispatchToElement = function (e, n, i) {
        e = e || {};
        var a = e.target;
        if (!(a && a.silent)) {
          for (
            var o = "on" + n, s = F1(n, e, i);
            a &&
            (a[o] && (s.cancelBubble = !!a[o].call(a, s)),
            a.trigger(n, s),
            (a = a.__hostTarget ? a.__hostTarget : a.parent),
            !s.cancelBubble);

          );
          s.cancelBubble ||
            (this.trigger(n, s),
            this.painter &&
              this.painter.eachOtherLayer &&
              this.painter.eachOtherLayer(function (u) {
                typeof u[o] == "function" && u[o].call(u, s),
                  u.trigger && u.trigger(n, s);
              }));
        }
      }),
      (t.prototype.findHover = function (e, n, i) {
        for (
          var a = this.storage.getDisplayList(),
            o = new hi(e, n),
            s = a.length - 1;
          s >= 0;
          s--
        ) {
          var u = void 0;
          if (
            a[s] !== i &&
            !a[s].ignore &&
            (u = V1(a[s], e, n)) &&
            (!o.topTarget && (o.topTarget = a[s]), u !== bg)
          ) {
            o.target = a[s];
            break;
          }
        }
        return o;
      }),
      (t.prototype.processGesture = function (e, n) {
        this._gestureMgr || (this._gestureMgr = new B1());
        var i = this._gestureMgr;
        n === "start" && i.clear();
        var a = i.recognize(
          e,
          this.findHover(e.zrX, e.zrY, null).target,
          this.proxy.dom
        );
        if ((n === "end" && i.clear(), a)) {
          var o = a.type;
          e.gestureEvent = o;
          var s = new hi();
          (s.target = a.target), this.dispatchToElement(s, o, a.event);
        }
      }),
      t
    );
  })(ce);
C(
  ["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"],
  function (r) {
    Tg.prototype[r] = function (t) {
      var e = t.zrX,
        n = t.zrY,
        i = Cg(this, e, n),
        a,
        o;
      if (
        ((r !== "mouseup" || !i) &&
          ((a = this.findHover(e, n)), (o = a.target)),
        r === "mousedown")
      )
        (this._downEl = o),
          (this._downPoint = [t.zrX, t.zrY]),
          (this._upEl = o);
      else if (r === "mouseup") this._upEl = o;
      else if (r === "click") {
        if (
          this._downEl !== this._upEl ||
          !this._downPoint ||
          bl(this._downPoint, [t.zrX, t.zrY]) > 4
        )
          return;
        this._downPoint = null;
      }
      this.dispatchToElement(a, r, t);
    };
  }
);
function V1(r, t, e) {
  if (r[r.rectHover ? "rectContain" : "contain"](t, e)) {
    for (var n = r, i = void 0, a = !1; n; ) {
      if ((n.ignoreClip && (a = !0), !a)) {
        var o = n.getClipPath();
        if (o && !o.contain(t, e)) return !1;
        n.silent && (i = !0);
      }
      var s = n.__hostTarget;
      n = s || n.parent;
    }
    return i ? bg : !0;
  }
  return !1;
}
function Cg(r, t, e) {
  var n = r.painter;
  return t < 0 || t > n.getWidth() || e < 0 || e > n.getHeight();
}
const W1 = Tg;
var Mg = 32,
  vi = 7;
function U1(r) {
  for (var t = 0; r >= Mg; ) (t |= r & 1), (r >>= 1);
  return r + t;
}
function uv(r, t, e, n) {
  var i = t + 1;
  if (i === e) return 1;
  if (n(r[i++], r[t]) < 0) {
    for (; i < e && n(r[i], r[i - 1]) < 0; ) i++;
    Y1(r, t, i);
  } else for (; i < e && n(r[i], r[i - 1]) >= 0; ) i++;
  return i - t;
}
function Y1(r, t, e) {
  for (e--; t < e; ) {
    var n = r[t];
    (r[t++] = r[e]), (r[e--] = n);
  }
}
function lv(r, t, e, n, i) {
  for (n === t && n++; n < e; n++) {
    for (var a = r[n], o = t, s = n, u; o < s; )
      (u = (o + s) >>> 1), i(a, r[u]) < 0 ? (s = u) : (o = u + 1);
    var l = n - o;
    switch (l) {
      case 3:
        r[o + 3] = r[o + 2];
      case 2:
        r[o + 2] = r[o + 1];
      case 1:
        r[o + 1] = r[o];
        break;
      default:
        for (; l > 0; ) (r[o + l] = r[o + l - 1]), l--;
    }
    r[o] = a;
  }
}
function Js(r, t, e, n, i, a) {
  var o = 0,
    s = 0,
    u = 1;
  if (a(r, t[e + i]) > 0) {
    for (s = n - i; u < s && a(r, t[e + i + u]) > 0; )
      (o = u), (u = (u << 1) + 1), u <= 0 && (u = s);
    u > s && (u = s), (o += i), (u += i);
  } else {
    for (s = i + 1; u < s && a(r, t[e + i - u]) <= 0; )
      (o = u), (u = (u << 1) + 1), u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    (o = i - u), (u = i - l);
  }
  for (o++; o < u; ) {
    var f = o + ((u - o) >>> 1);
    a(r, t[e + f]) > 0 ? (o = f + 1) : (u = f);
  }
  return u;
}
function js(r, t, e, n, i, a) {
  var o = 0,
    s = 0,
    u = 1;
  if (a(r, t[e + i]) < 0) {
    for (s = i + 1; u < s && a(r, t[e + i - u]) < 0; )
      (o = u), (u = (u << 1) + 1), u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    (o = i - u), (u = i - l);
  } else {
    for (s = n - i; u < s && a(r, t[e + i + u]) >= 0; )
      (o = u), (u = (u << 1) + 1), u <= 0 && (u = s);
    u > s && (u = s), (o += i), (u += i);
  }
  for (o++; o < u; ) {
    var f = o + ((u - o) >>> 1);
    a(r, t[e + f]) < 0 ? (u = f) : (o = f + 1);
  }
  return u;
}
function $1(r, t) {
  var e = vi,
    n,
    i,
    a = 0;
  r.length;
  var o = [];
  (n = []), (i = []);
  function s(v, d) {
    (n[a] = v), (i[a] = d), (a += 1);
  }
  function u() {
    for (; a > 1; ) {
      var v = a - 2;
      if (
        (v >= 1 && i[v - 1] <= i[v] + i[v + 1]) ||
        (v >= 2 && i[v - 2] <= i[v] + i[v - 1])
      )
        i[v - 1] < i[v + 1] && v--;
      else if (i[v] > i[v + 1]) break;
      f(v);
    }
  }
  function l() {
    for (; a > 1; ) {
      var v = a - 2;
      v > 0 && i[v - 1] < i[v + 1] && v--, f(v);
    }
  }
  function f(v) {
    var d = n[v],
      g = i[v],
      p = n[v + 1],
      y = i[v + 1];
    (i[v] = g + y),
      v === a - 3 && ((n[v + 1] = n[v + 2]), (i[v + 1] = i[v + 2])),
      a--;
    var m = js(r[p], r, d, g, 0, t);
    (d += m),
      (g -= m),
      g !== 0 &&
        ((y = Js(r[d + g - 1], r, p, y, y - 1, t)),
        y !== 0 && (g <= y ? h(d, g, p, y) : c(d, g, p, y)));
  }
  function h(v, d, g, p) {
    var y = 0;
    for (y = 0; y < d; y++) o[y] = r[v + y];
    var m = 0,
      _ = g,
      S = v;
    if (((r[S++] = r[_++]), --p === 0)) {
      for (y = 0; y < d; y++) r[S + y] = o[m + y];
      return;
    }
    if (d === 1) {
      for (y = 0; y < p; y++) r[S + y] = r[_ + y];
      r[S + p] = o[m];
      return;
    }
    for (var w = e, x, b, T; ; ) {
      (x = 0), (b = 0), (T = !1);
      do
        if (t(r[_], o[m]) < 0) {
          if (((r[S++] = r[_++]), b++, (x = 0), --p === 0)) {
            T = !0;
            break;
          }
        } else if (((r[S++] = o[m++]), x++, (b = 0), --d === 1)) {
          T = !0;
          break;
        }
      while ((x | b) < w);
      if (T) break;
      do {
        if (((x = js(r[_], o, m, d, 0, t)), x !== 0)) {
          for (y = 0; y < x; y++) r[S + y] = o[m + y];
          if (((S += x), (m += x), (d -= x), d <= 1)) {
            T = !0;
            break;
          }
        }
        if (((r[S++] = r[_++]), --p === 0)) {
          T = !0;
          break;
        }
        if (((b = Js(o[m], r, _, p, 0, t)), b !== 0)) {
          for (y = 0; y < b; y++) r[S + y] = r[_ + y];
          if (((S += b), (_ += b), (p -= b), p === 0)) {
            T = !0;
            break;
          }
        }
        if (((r[S++] = o[m++]), --d === 1)) {
          T = !0;
          break;
        }
        w--;
      } while (x >= vi || b >= vi);
      if (T) break;
      w < 0 && (w = 0), (w += 2);
    }
    if (((e = w), e < 1 && (e = 1), d === 1)) {
      for (y = 0; y < p; y++) r[S + y] = r[_ + y];
      r[S + p] = o[m];
    } else {
      if (d === 0) throw new Error();
      for (y = 0; y < d; y++) r[S + y] = o[m + y];
    }
  }
  function c(v, d, g, p) {
    var y = 0;
    for (y = 0; y < p; y++) o[y] = r[g + y];
    var m = v + d - 1,
      _ = p - 1,
      S = g + p - 1,
      w = 0,
      x = 0;
    if (((r[S--] = r[m--]), --d === 0)) {
      for (w = S - (p - 1), y = 0; y < p; y++) r[w + y] = o[y];
      return;
    }
    if (p === 1) {
      for (S -= d, m -= d, x = S + 1, w = m + 1, y = d - 1; y >= 0; y--)
        r[x + y] = r[w + y];
      r[S] = o[_];
      return;
    }
    for (var b = e; ; ) {
      var T = 0,
        M = 0,
        D = !1;
      do
        if (t(o[_], r[m]) < 0) {
          if (((r[S--] = r[m--]), T++, (M = 0), --d === 0)) {
            D = !0;
            break;
          }
        } else if (((r[S--] = o[_--]), M++, (T = 0), --p === 1)) {
          D = !0;
          break;
        }
      while ((T | M) < b);
      if (D) break;
      do {
        if (((T = d - js(o[_], r, v, d, d - 1, t)), T !== 0)) {
          for (
            S -= T, m -= T, d -= T, x = S + 1, w = m + 1, y = T - 1;
            y >= 0;
            y--
          )
            r[x + y] = r[w + y];
          if (d === 0) {
            D = !0;
            break;
          }
        }
        if (((r[S--] = o[_--]), --p === 1)) {
          D = !0;
          break;
        }
        if (((M = p - Js(r[m], o, 0, p, p - 1, t)), M !== 0)) {
          for (S -= M, _ -= M, p -= M, x = S + 1, w = _ + 1, y = 0; y < M; y++)
            r[x + y] = o[w + y];
          if (p <= 1) {
            D = !0;
            break;
          }
        }
        if (((r[S--] = r[m--]), --d === 0)) {
          D = !0;
          break;
        }
        b--;
      } while (T >= vi || M >= vi);
      if (D) break;
      b < 0 && (b = 0), (b += 2);
    }
    if (((e = b), e < 1 && (e = 1), p === 1)) {
      for (S -= d, m -= d, x = S + 1, w = m + 1, y = d - 1; y >= 0; y--)
        r[x + y] = r[w + y];
      r[S] = o[_];
    } else {
      if (p === 0) throw new Error();
      for (w = S - (p - 1), y = 0; y < p; y++) r[w + y] = o[y];
    }
  }
  return { mergeRuns: u, forceMergeRuns: l, pushRun: s };
}
function bo(r, t, e, n) {
  e || (e = 0), n || (n = r.length);
  var i = n - e;
  if (!(i < 2)) {
    var a = 0;
    if (i < Mg) {
      (a = uv(r, e, n, t)), lv(r, e, n, e + a, t);
      return;
    }
    var o = $1(r, t),
      s = U1(i);
    do {
      if (((a = uv(r, e, n, t)), a < s)) {
        var u = i;
        u > s && (u = s), lv(r, e, e + u, e + a, t), (a = u);
      }
      o.pushRun(e, a), o.mergeRuns(), (i -= a), (e += a);
    } while (i !== 0);
    o.forceMergeRuns();
  }
}
var Qt = 1,
  Bi = 2,
  kn = 4,
  fv = !1;
function tu() {
  fv ||
    ((fv = !0),
    console.warn(
      "z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"
    ));
}
function hv(r, t) {
  return r.zlevel === t.zlevel
    ? r.z === t.z
      ? r.z2 - t.z2
      : r.z - t.z
    : r.zlevel - t.zlevel;
}
var Z1 = (function () {
  function r() {
    (this._roots = []),
      (this._displayList = []),
      (this._displayListLen = 0),
      (this.displayableSortFunc = hv);
  }
  return (
    (r.prototype.traverse = function (t, e) {
      for (var n = 0; n < this._roots.length; n++)
        this._roots[n].traverse(t, e);
    }),
    (r.prototype.getDisplayList = function (t, e) {
      e = e || !1;
      var n = this._displayList;
      return (t || !n.length) && this.updateDisplayList(e), n;
    }),
    (r.prototype.updateDisplayList = function (t) {
      this._displayListLen = 0;
      for (
        var e = this._roots, n = this._displayList, i = 0, a = e.length;
        i < a;
        i++
      )
        this._updateAndAddDisplayable(e[i], null, t);
      (n.length = this._displayListLen), bo(n, hv);
    }),
    (r.prototype._updateAndAddDisplayable = function (t, e, n) {
      if (!(t.ignore && !n)) {
        t.beforeUpdate(), t.update(), t.afterUpdate();
        var i = t.getClipPath();
        if (t.ignoreClip) e = null;
        else if (i) {
          e ? (e = e.slice()) : (e = []);
          for (var a = i, o = t; a; )
            (a.parent = o),
              a.updateTransform(),
              e.push(a),
              (o = a),
              (a = a.getClipPath());
        }
        if (t.childrenRef) {
          for (var s = t.childrenRef(), u = 0; u < s.length; u++) {
            var l = s[u];
            t.__dirty && (l.__dirty |= Qt),
              this._updateAndAddDisplayable(l, e, n);
          }
          t.__dirty = 0;
        } else {
          var f = t;
          e && e.length
            ? (f.__clipPaths = e)
            : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []),
            isNaN(f.z) && (tu(), (f.z = 0)),
            isNaN(f.z2) && (tu(), (f.z2 = 0)),
            isNaN(f.zlevel) && (tu(), (f.zlevel = 0)),
            (this._displayList[this._displayListLen++] = f);
        }
        var h = t.getDecalElement && t.getDecalElement();
        h && this._updateAndAddDisplayable(h, e, n);
        var c = t.getTextGuideLine();
        c && this._updateAndAddDisplayable(c, e, n);
        var v = t.getTextContent();
        v && this._updateAndAddDisplayable(v, e, n);
      }
    }),
    (r.prototype.addRoot = function (t) {
      (t.__zr && t.__zr.storage === this) || this._roots.push(t);
    }),
    (r.prototype.delRoot = function (t) {
      if (t instanceof Array) {
        for (var e = 0, n = t.length; e < n; e++) this.delRoot(t[e]);
        return;
      }
      var i = J(this._roots, t);
      i >= 0 && this._roots.splice(i, 1);
    }),
    (r.prototype.delAllRoots = function () {
      (this._roots = []), (this._displayList = []), (this._displayListLen = 0);
    }),
    (r.prototype.getRoots = function () {
      return this._roots;
    }),
    (r.prototype.dispose = function () {
      (this._displayList = null), (this._roots = null);
    }),
    r
  );
})();
const X1 = Z1;
var Dg;
Dg =
  (j.hasGlobalWindow &&
    ((window.requestAnimationFrame &&
      window.requestAnimationFrame.bind(window)) ||
      (window.msRequestAnimationFrame &&
        window.msRequestAnimationFrame.bind(window)) ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame)) ||
  function (r) {
    return setTimeout(r, 16);
  };
const Al = Dg;
var To = {
  linear: function (r) {
    return r;
  },
  quadraticIn: function (r) {
    return r * r;
  },
  quadraticOut: function (r) {
    return r * (2 - r);
  },
  quadraticInOut: function (r) {
    return (r *= 2) < 1 ? 0.5 * r * r : -0.5 * (--r * (r - 2) - 1);
  },
  cubicIn: function (r) {
    return r * r * r;
  },
  cubicOut: function (r) {
    return --r * r * r + 1;
  },
  cubicInOut: function (r) {
    return (r *= 2) < 1 ? 0.5 * r * r * r : 0.5 * ((r -= 2) * r * r + 2);
  },
  quarticIn: function (r) {
    return r * r * r * r;
  },
  quarticOut: function (r) {
    return 1 - --r * r * r * r;
  },
  quarticInOut: function (r) {
    return (r *= 2) < 1
      ? 0.5 * r * r * r * r
      : -0.5 * ((r -= 2) * r * r * r - 2);
  },
  quinticIn: function (r) {
    return r * r * r * r * r;
  },
  quinticOut: function (r) {
    return --r * r * r * r * r + 1;
  },
  quinticInOut: function (r) {
    return (r *= 2) < 1
      ? 0.5 * r * r * r * r * r
      : 0.5 * ((r -= 2) * r * r * r * r + 2);
  },
  sinusoidalIn: function (r) {
    return 1 - Math.cos((r * Math.PI) / 2);
  },
  sinusoidalOut: function (r) {
    return Math.sin((r * Math.PI) / 2);
  },
  sinusoidalInOut: function (r) {
    return 0.5 * (1 - Math.cos(Math.PI * r));
  },
  exponentialIn: function (r) {
    return r === 0 ? 0 : Math.pow(1024, r - 1);
  },
  exponentialOut: function (r) {
    return r === 1 ? 1 : 1 - Math.pow(2, -10 * r);
  },
  exponentialInOut: function (r) {
    return r === 0
      ? 0
      : r === 1
      ? 1
      : (r *= 2) < 1
      ? 0.5 * Math.pow(1024, r - 1)
      : 0.5 * (-Math.pow(2, -10 * (r - 1)) + 2);
  },
  circularIn: function (r) {
    return 1 - Math.sqrt(1 - r * r);
  },
  circularOut: function (r) {
    return Math.sqrt(1 - --r * r);
  },
  circularInOut: function (r) {
    return (r *= 2) < 1
      ? -0.5 * (Math.sqrt(1 - r * r) - 1)
      : 0.5 * (Math.sqrt(1 - (r -= 2) * r) + 1);
  },
  elasticIn: function (r) {
    var t,
      e = 0.1,
      n = 0.4;
    return r === 0
      ? 0
      : r === 1
      ? 1
      : (!e || e < 1
          ? ((e = 1), (t = n / 4))
          : (t = (n * Math.asin(1 / e)) / (2 * Math.PI)),
        -(
          e *
          Math.pow(2, 10 * (r -= 1)) *
          Math.sin(((r - t) * (2 * Math.PI)) / n)
        ));
  },
  elasticOut: function (r) {
    var t,
      e = 0.1,
      n = 0.4;
    return r === 0
      ? 0
      : r === 1
      ? 1
      : (!e || e < 1
          ? ((e = 1), (t = n / 4))
          : (t = (n * Math.asin(1 / e)) / (2 * Math.PI)),
        e * Math.pow(2, -10 * r) * Math.sin(((r - t) * (2 * Math.PI)) / n) + 1);
  },
  elasticInOut: function (r) {
    var t,
      e = 0.1,
      n = 0.4;
    return r === 0
      ? 0
      : r === 1
      ? 1
      : (!e || e < 1
          ? ((e = 1), (t = n / 4))
          : (t = (n * Math.asin(1 / e)) / (2 * Math.PI)),
        (r *= 2) < 1
          ? -0.5 *
            (e *
              Math.pow(2, 10 * (r -= 1)) *
              Math.sin(((r - t) * (2 * Math.PI)) / n))
          : e *
              Math.pow(2, -10 * (r -= 1)) *
              Math.sin(((r - t) * (2 * Math.PI)) / n) *
              0.5 +
            1);
  },
  backIn: function (r) {
    var t = 1.70158;
    return r * r * ((t + 1) * r - t);
  },
  backOut: function (r) {
    var t = 1.70158;
    return --r * r * ((t + 1) * r + t) + 1;
  },
  backInOut: function (r) {
    var t = 2.5949095;
    return (r *= 2) < 1
      ? 0.5 * (r * r * ((t + 1) * r - t))
      : 0.5 * ((r -= 2) * r * ((t + 1) * r + t) + 2);
  },
  bounceIn: function (r) {
    return 1 - To.bounceOut(1 - r);
  },
  bounceOut: function (r) {
    return r < 1 / 2.75
      ? 7.5625 * r * r
      : r < 2 / 2.75
      ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75
      : r < 2.5 / 2.75
      ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375
      : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375;
  },
  bounceInOut: function (r) {
    return r < 0.5
      ? To.bounceIn(r * 2) * 0.5
      : To.bounceOut(r * 2 - 1) * 0.5 + 0.5;
  },
};
const Ag = To;
var Ba = Math.pow,
  gr = Math.sqrt,
  Ho = 1e-8,
  Lg = 1e-4,
  vv = gr(3),
  Na = 1 / 3,
  Ie = si(),
  se = si(),
  $n = si();
function vr(r) {
  return r > -Ho && r < Ho;
}
function Ig(r) {
  return r > Ho || r < -Ho;
}
function Tt(r, t, e, n, i) {
  var a = 1 - i;
  return a * a * (a * r + 3 * i * t) + i * i * (i * n + 3 * a * e);
}
function cv(r, t, e, n, i) {
  var a = 1 - i;
  return 3 * (((t - r) * a + 2 * (e - t) * i) * a + (n - e) * i * i);
}
function Vo(r, t, e, n, i, a) {
  var o = n + 3 * (t - e) - r,
    s = 3 * (e - t * 2 + r),
    u = 3 * (t - r),
    l = r - i,
    f = s * s - 3 * o * u,
    h = s * u - 9 * o * l,
    c = u * u - 3 * s * l,
    v = 0;
  if (vr(f) && vr(h))
    if (vr(s)) a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[v++] = d);
    }
  else {
    var g = h * h - 4 * f * c;
    if (vr(g)) {
      var p = h / f,
        d = -s / o + p,
        y = -p / 2;
      d >= 0 && d <= 1 && (a[v++] = d), y >= 0 && y <= 1 && (a[v++] = y);
    } else if (g > 0) {
      var m = gr(g),
        _ = f * s + 1.5 * o * (-h + m),
        S = f * s + 1.5 * o * (-h - m);
      _ < 0 ? (_ = -Ba(-_, Na)) : (_ = Ba(_, Na)),
        S < 0 ? (S = -Ba(-S, Na)) : (S = Ba(S, Na));
      var d = (-s - (_ + S)) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d);
    } else {
      var w = (2 * f * s - 3 * o * h) / (2 * gr(f * f * f)),
        x = Math.acos(w) / 3,
        b = gr(f),
        T = Math.cos(x),
        d = (-s - 2 * b * T) / (3 * o),
        y = (-s + b * (T + vv * Math.sin(x))) / (3 * o),
        M = (-s + b * (T - vv * Math.sin(x))) / (3 * o);
      d >= 0 && d <= 1 && (a[v++] = d),
        y >= 0 && y <= 1 && (a[v++] = y),
        M >= 0 && M <= 1 && (a[v++] = M);
    }
  }
  return v;
}
function Pg(r, t, e, n, i) {
  var a = 6 * e - 12 * t + 6 * r,
    o = 9 * t + 3 * n - 3 * r - 9 * e,
    s = 3 * t - 3 * r,
    u = 0;
  if (vr(o)) {
    if (Ig(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (vr(f)) i[0] = -a / (2 * o);
    else if (f > 0) {
      var h = gr(f),
        l = (-a + h) / (2 * o),
        c = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (i[u++] = l), c >= 0 && c <= 1 && (i[u++] = c);
    }
  }
  return u;
}
function Sr(r, t, e, n, i, a) {
  var o = (t - r) * i + r,
    s = (e - t) * i + t,
    u = (n - e) * i + e,
    l = (s - o) * i + o,
    f = (u - s) * i + s,
    h = (f - l) * i + l;
  (a[0] = r),
    (a[1] = o),
    (a[2] = l),
    (a[3] = h),
    (a[4] = h),
    (a[5] = f),
    (a[6] = u),
    (a[7] = n);
}
function Rg(r, t, e, n, i, a, o, s, u, l, f) {
  var h,
    c = 0.005,
    v = 1 / 0,
    d,
    g,
    p,
    y;
  (Ie[0] = u), (Ie[1] = l);
  for (var m = 0; m < 1; m += 0.05)
    (se[0] = Tt(r, e, i, o, m)),
      (se[1] = Tt(t, n, a, s, m)),
      (p = Yn(Ie, se)),
      p < v && ((h = m), (v = p));
  v = 1 / 0;
  for (var _ = 0; _ < 32 && !(c < Lg); _++)
    (d = h - c),
      (g = h + c),
      (se[0] = Tt(r, e, i, o, d)),
      (se[1] = Tt(t, n, a, s, d)),
      (p = Yn(se, Ie)),
      d >= 0 && p < v
        ? ((h = d), (v = p))
        : (($n[0] = Tt(r, e, i, o, g)),
          ($n[1] = Tt(t, n, a, s, g)),
          (y = Yn($n, Ie)),
          g <= 1 && y < v ? ((h = g), (v = y)) : (c *= 0.5));
  return f && ((f[0] = Tt(r, e, i, o, h)), (f[1] = Tt(t, n, a, s, h))), gr(v);
}
function q1(r, t, e, n, i, a, o, s, u) {
  for (var l = r, f = t, h = 0, c = 1 / u, v = 1; v <= u; v++) {
    var d = v * c,
      g = Tt(r, e, i, o, d),
      p = Tt(t, n, a, s, d),
      y = g - l,
      m = p - f;
    (h += Math.sqrt(y * y + m * m)), (l = g), (f = p);
  }
  return h;
}
function Ot(r, t, e, n) {
  var i = 1 - n;
  return i * (i * r + 2 * n * t) + n * n * e;
}
function dv(r, t, e, n) {
  return 2 * ((1 - n) * (t - r) + n * (e - t));
}
function K1(r, t, e, n, i) {
  var a = r - 2 * t + e,
    o = 2 * (t - r),
    s = r - n,
    u = 0;
  if (vr(a)) {
    if (Ig(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (vr(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l);
    } else if (f > 0) {
      var h = gr(f),
        l = (-o + h) / (2 * a),
        c = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l), c >= 0 && c <= 1 && (i[u++] = c);
    }
  }
  return u;
}
function Eg(r, t, e) {
  var n = r + e - 2 * t;
  return n === 0 ? 0.5 : (r - t) / n;
}
function Wo(r, t, e, n, i) {
  var a = (t - r) * n + r,
    o = (e - t) * n + t,
    s = (o - a) * n + a;
  (i[0] = r), (i[1] = a), (i[2] = s), (i[3] = s), (i[4] = o), (i[5] = e);
}
function Og(r, t, e, n, i, a, o, s, u) {
  var l,
    f = 0.005,
    h = 1 / 0;
  (Ie[0] = o), (Ie[1] = s);
  for (var c = 0; c < 1; c += 0.05) {
    (se[0] = Ot(r, e, i, c)), (se[1] = Ot(t, n, a, c));
    var v = Yn(Ie, se);
    v < h && ((l = c), (h = v));
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < Lg); d++) {
    var g = l - f,
      p = l + f;
    (se[0] = Ot(r, e, i, g)), (se[1] = Ot(t, n, a, g));
    var v = Yn(se, Ie);
    if (g >= 0 && v < h) (l = g), (h = v);
    else {
      ($n[0] = Ot(r, e, i, p)), ($n[1] = Ot(t, n, a, p));
      var y = Yn($n, Ie);
      p <= 1 && y < h ? ((l = p), (h = y)) : (f *= 0.5);
    }
  }
  return u && ((u[0] = Ot(r, e, i, l)), (u[1] = Ot(t, n, a, l))), gr(h);
}
function Q1(r, t, e, n, i, a, o) {
  for (var s = r, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var c = h * f,
      v = Ot(r, e, i, c),
      d = Ot(t, n, a, c),
      g = v - s,
      p = d - u;
    (l += Math.sqrt(g * g + p * p)), (s = v), (u = d);
  }
  return l;
}
var J1 = /cubic-bezier\(([0-9,\.e ]+)\)/;
function kg(r) {
  var t = r && J1.exec(r);
  if (t) {
    var e = t[1].split(","),
      n = +Pe(e[0]),
      i = +Pe(e[1]),
      a = +Pe(e[2]),
      o = +Pe(e[3]);
    if (isNaN(n + i + a + o)) return;
    var s = [];
    return function (u) {
      return u <= 0
        ? 0
        : u >= 1
        ? 1
        : Vo(0, n, a, 1, u, s) && Tt(0, i, o, 1, s[0]);
    };
  }
}
var j1 = (function () {
  function r(t) {
    (this._inited = !1),
      (this._startTime = 0),
      (this._pausedTime = 0),
      (this._paused = !1),
      (this._life = t.life || 1e3),
      (this._delay = t.delay || 0),
      (this.loop = t.loop || !1),
      (this.onframe = t.onframe || Gt),
      (this.ondestroy = t.ondestroy || Gt),
      (this.onrestart = t.onrestart || Gt),
      t.easing && this.setEasing(t.easing);
  }
  return (
    (r.prototype.step = function (t, e) {
      if (
        (this._inited ||
          ((this._startTime = t + this._delay), (this._inited = !0)),
        this._paused)
      ) {
        this._pausedTime += e;
        return;
      }
      var n = this._life,
        i = t - this._startTime - this._pausedTime,
        a = i / n;
      a < 0 && (a = 0), (a = Math.min(a, 1));
      var o = this.easingFunc,
        s = o ? o(a) : a;
      if ((this.onframe(s), a === 1))
        if (this.loop) {
          var u = i % n;
          (this._startTime = t - u), (this._pausedTime = 0), this.onrestart();
        } else return !0;
      return !1;
    }),
    (r.prototype.pause = function () {
      this._paused = !0;
    }),
    (r.prototype.resume = function () {
      this._paused = !1;
    }),
    (r.prototype.setEasing = function (t) {
      (this.easing = t), (this.easingFunc = U(t) ? t : Ag[t] || kg(t));
    }),
    r
  );
})();
const tS = j1;
var Bg = (function () {
    function r(t) {
      this.value = t;
    }
    return r;
  })(),
  eS = (function () {
    function r() {
      this._len = 0;
    }
    return (
      (r.prototype.insert = function (t) {
        var e = new Bg(t);
        return this.insertEntry(e), e;
      }),
      (r.prototype.insertEntry = function (t) {
        this.head
          ? ((this.tail.next = t),
            (t.prev = this.tail),
            (t.next = null),
            (this.tail = t))
          : (this.head = this.tail = t),
          this._len++;
      }),
      (r.prototype.remove = function (t) {
        var e = t.prev,
          n = t.next;
        e ? (e.next = n) : (this.head = n),
          n ? (n.prev = e) : (this.tail = e),
          (t.next = t.prev = null),
          this._len--;
      }),
      (r.prototype.len = function () {
        return this._len;
      }),
      (r.prototype.clear = function () {
        (this.head = this.tail = null), (this._len = 0);
      }),
      r
    );
  })(),
  rS = (function () {
    function r(t) {
      (this._list = new eS()),
        (this._maxSize = 10),
        (this._map = {}),
        (this._maxSize = t);
    }
    return (
      (r.prototype.put = function (t, e) {
        var n = this._list,
          i = this._map,
          a = null;
        if (i[t] == null) {
          var o = n.len(),
            s = this._lastRemovedEntry;
          if (o >= this._maxSize && o > 0) {
            var u = n.head;
            n.remove(u),
              delete i[u.key],
              (a = u.value),
              (this._lastRemovedEntry = u);
          }
          s ? (s.value = e) : (s = new Bg(e)),
            (s.key = t),
            n.insertEntry(s),
            (i[t] = s);
        }
        return a;
      }),
      (r.prototype.get = function (t) {
        var e = this._map[t],
          n = this._list;
        if (e != null)
          return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value;
      }),
      (r.prototype.clear = function () {
        this._list.clear(), (this._map = {});
      }),
      (r.prototype.len = function () {
        return this._list.len();
      }),
      r
    );
  })();
const Ta = rS;
var pv = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1],
};
function yr(r) {
  return (r = Math.round(r)), r < 0 ? 0 : r > 255 ? 255 : r;
}
function Ll(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function eu(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%"
    ? yr((parseFloat(t) / 100) * 255)
    : yr(parseInt(t, 10));
}
function Uo(r) {
  var t = r;
  return t.length && t.charAt(t.length - 1) === "%"
    ? Ll(parseFloat(t) / 100)
    : Ll(parseFloat(t));
}
function ru(r, t, e) {
  return (
    e < 0 ? (e += 1) : e > 1 && (e -= 1),
    e * 6 < 1
      ? r + (t - r) * e * 6
      : e * 2 < 1
      ? t
      : e * 3 < 2
      ? r + (t - r) * (2 / 3 - e) * 6
      : r
  );
}
function Fa(r, t, e) {
  return r + (t - r) * e;
}
function ne(r, t, e, n, i) {
  return (r[0] = t), (r[1] = e), (r[2] = n), (r[3] = i), r;
}
function Il(r, t) {
  return (r[0] = t[0]), (r[1] = t[1]), (r[2] = t[2]), (r[3] = t[3]), r;
}
var Ng = new Ta(20),
  za = null;
function _n(r, t) {
  za && Il(za, t), (za = Ng.put(r, za || t.slice()));
}
function $e(r, t) {
  if (!!r) {
    t = t || [];
    var e = Ng.get(r);
    if (e) return Il(t, e);
    r = r + "";
    var n = r.replace(/ /g, "").toLowerCase();
    if (n in pv) return Il(t, pv[n]), _n(r, t), t;
    var i = n.length;
    if (n.charAt(0) === "#") {
      if (i === 4 || i === 5) {
        var a = parseInt(n.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          ne(t, 0, 0, 0, 1);
          return;
        }
        return (
          ne(
            t,
            ((a & 3840) >> 4) | ((a & 3840) >> 8),
            (a & 240) | ((a & 240) >> 4),
            (a & 15) | ((a & 15) << 4),
            i === 5 ? parseInt(n.slice(4), 16) / 15 : 1
          ),
          _n(r, t),
          t
        );
      } else if (i === 7 || i === 9) {
        var a = parseInt(n.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          ne(t, 0, 0, 0, 1);
          return;
        }
        return (
          ne(
            t,
            (a & 16711680) >> 16,
            (a & 65280) >> 8,
            a & 255,
            i === 9 ? parseInt(n.slice(7), 16) / 255 : 1
          ),
          _n(r, t),
          t
        );
      }
      return;
    }
    var o = n.indexOf("("),
      s = n.indexOf(")");
    if (o !== -1 && s + 1 === i) {
      var u = n.substr(0, o),
        l = n.substr(o + 1, s - (o + 1)).split(","),
        f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3
              ? ne(t, +l[0], +l[1], +l[2], 1)
              : ne(t, 0, 0, 0, 1);
          f = Uo(l.pop());
        case "rgb":
          if (l.length !== 3) {
            ne(t, 0, 0, 0, 1);
            return;
          }
          return ne(t, eu(l[0]), eu(l[1]), eu(l[2]), f), _n(r, t), t;
        case "hsla":
          if (l.length !== 4) {
            ne(t, 0, 0, 0, 1);
            return;
          }
          return (l[3] = Uo(l[3])), gv(l, t), _n(r, t), t;
        case "hsl":
          if (l.length !== 3) {
            ne(t, 0, 0, 0, 1);
            return;
          }
          return gv(l, t), _n(r, t), t;
        default:
          return;
      }
    }
    ne(t, 0, 0, 0, 1);
  }
}
function gv(r, t) {
  var e = (((parseFloat(r[0]) % 360) + 360) % 360) / 360,
    n = Uo(r[1]),
    i = Uo(r[2]),
    a = i <= 0.5 ? i * (n + 1) : i + n - i * n,
    o = i * 2 - a;
  return (
    (t = t || []),
    ne(
      t,
      yr(ru(o, a, e + 1 / 3) * 255),
      yr(ru(o, a, e) * 255),
      yr(ru(o, a, e - 1 / 3) * 255),
      1
    ),
    r.length === 4 && (t[3] = r[3]),
    t
  );
}
function yv(r, t) {
  var e = $e(r);
  if (e) {
    for (var n = 0; n < 3; n++)
      t < 0
        ? (e[n] = (e[n] * (1 - t)) | 0)
        : (e[n] = ((255 - e[n]) * t + e[n]) | 0),
        e[n] > 255 ? (e[n] = 255) : e[n] < 0 && (e[n] = 0);
    return ys(e, e.length === 4 ? "rgba" : "rgb");
  }
}
function nS(r, t, e) {
  if (!(!(t && t.length) || !(r >= 0 && r <= 1))) {
    var n = r * (t.length - 1),
      i = Math.floor(n),
      a = Math.ceil(n),
      o = $e(t[i]),
      s = $e(t[a]),
      u = n - i,
      l = ys(
        [
          yr(Fa(o[0], s[0], u)),
          yr(Fa(o[1], s[1], u)),
          yr(Fa(o[2], s[2], u)),
          Ll(Fa(o[3], s[3], u)),
        ],
        "rgba"
      );
    return e ? { color: l, leftIndex: i, rightIndex: a, value: n } : l;
  }
}
function ys(r, t) {
  if (!(!r || !r.length)) {
    var e = r[0] + "," + r[1] + "," + r[2];
    return (
      (t === "rgba" || t === "hsva" || t === "hsla") && (e += "," + r[3]),
      t + "(" + e + ")"
    );
  }
}
function Yo(r, t) {
  var e = $e(r);
  return e
    ? ((0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2]) * e[3]) / 255 +
        (1 - e[3]) * t
    : 0;
}
function iS(r) {
  return r.type === "linear";
}
function aS(r) {
  return r.type === "radial";
}
(function () {
  return j.hasGlobalWindow && U(window.btoa)
    ? function (r) {
        return window.btoa(unescape(r));
      }
    : typeof Buffer < "u"
    ? function (r) {
        return Buffer.from(r).toString("base64");
      }
    : function (r) {
        return null;
      };
})();
var Pl = Array.prototype.slice;
function We(r, t, e) {
  return (t - r) * e + r;
}
function nu(r, t, e, n) {
  for (var i = t.length, a = 0; a < i; a++) r[a] = We(t[a], e[a], n);
  return r;
}
function oS(r, t, e, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++) r[o][s] = We(t[o][s], e[o][s], n);
  }
  return r;
}
function Ga(r, t, e, n) {
  for (var i = t.length, a = 0; a < i; a++) r[a] = t[a] + e[a] * n;
  return r;
}
function mv(r, t, e, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    r[o] || (r[o] = []);
    for (var s = 0; s < a; s++) r[o][s] = t[o][s] + e[o][s] * n;
  }
  return r;
}
function sS(r, t) {
  for (
    var e = r.length,
      n = t.length,
      i = e > n ? t : r,
      a = Math.min(e, n),
      o = i[a - 1] || { color: [0, 0, 0, 0], offset: 0 },
      s = a;
    s < Math.max(e, n);
    s++
  )
    i.push({ offset: o.offset, color: o.color.slice() });
}
function uS(r, t, e) {
  var n = r,
    i = t;
  if (!(!n.push || !i.push)) {
    var a = n.length,
      o = i.length;
    if (a !== o) {
      var s = a > o;
      if (s) n.length = o;
      else for (var u = a; u < o; u++) n.push(e === 1 ? i[u] : Pl.call(i[u]));
    }
    for (var l = n[0] && n[0].length, u = 0; u < n.length; u++)
      if (e === 1) isNaN(n[u]) && (n[u] = i[u]);
      else for (var f = 0; f < l; f++) isNaN(n[u][f]) && (n[u][f] = i[u][f]);
  }
}
function Co(r) {
  if (Ht(r)) {
    var t = r.length;
    if (Ht(r[0])) {
      for (var e = [], n = 0; n < t; n++) e.push(Pl.call(r[n]));
      return e;
    }
    return Pl.call(r);
  }
  return r;
}
function Mo(r) {
  return (
    (r[0] = Math.floor(r[0]) || 0),
    (r[1] = Math.floor(r[1]) || 0),
    (r[2] = Math.floor(r[2]) || 0),
    (r[3] = r[3] == null ? 1 : r[3]),
    "rgba(" + r.join(",") + ")"
  );
}
function lS(r) {
  return Ht(r && r[0]) ? 2 : 1;
}
var Ha = 0,
  Do = 1,
  Fg = 2,
  Ni = 3,
  Rl = 4,
  El = 5,
  _v = 6;
function Sv(r) {
  return r === Rl || r === El;
}
function Va(r) {
  return r === Do || r === Fg;
}
var ci = [0, 0, 0, 0],
  fS = (function () {
    function r(t) {
      (this.keyframes = []),
        (this.discrete = !1),
        (this._invalid = !1),
        (this._needsSort = !1),
        (this._lastFr = 0),
        (this._lastFrP = 0),
        (this.propName = t);
    }
    return (
      (r.prototype.isFinished = function () {
        return this._finished;
      }),
      (r.prototype.setFinished = function () {
        (this._finished = !0),
          this._additiveTrack && this._additiveTrack.setFinished();
      }),
      (r.prototype.needsAnimate = function () {
        return this.keyframes.length >= 1;
      }),
      (r.prototype.getAdditiveTrack = function () {
        return this._additiveTrack;
      }),
      (r.prototype.addKeyframe = function (t, e, n) {
        this._needsSort = !0;
        var i = this.keyframes,
          a = i.length,
          o = !1,
          s = _v,
          u = e;
        if (Ht(e)) {
          var l = lS(e);
          (s = l),
            ((l === 1 && !ft(e[0])) || (l === 2 && !ft(e[0][0]))) && (o = !0);
        } else if (ft(e) && !zo(e)) s = Ha;
        else if (G(e))
          if (!isNaN(+e)) s = Ha;
          else {
            var f = $e(e);
            f && ((u = f), (s = Ni));
          }
        else if (ps(e)) {
          var h = k({}, u);
          (h.colorStops = z(e.colorStops, function (v) {
            return { offset: v.offset, color: $e(v.color) };
          })),
            iS(e) ? (s = Rl) : aS(e) && (s = El),
            (u = h);
        }
        a === 0
          ? (this.valType = s)
          : (s !== this.valType || s === _v) && (o = !0),
          (this.discrete = this.discrete || o);
        var c = { time: t, value: u, rawValue: e, percent: 0 };
        return (
          n && ((c.easing = n), (c.easingFunc = U(n) ? n : Ag[n] || kg(n))),
          i.push(c),
          c
        );
      }),
      (r.prototype.prepare = function (t, e) {
        var n = this.keyframes;
        this._needsSort &&
          n.sort(function (g, p) {
            return g.time - p.time;
          });
        for (
          var i = this.valType,
            a = n.length,
            o = n[a - 1],
            s = this.discrete,
            u = Va(i),
            l = Sv(i),
            f = 0;
          f < a;
          f++
        ) {
          var h = n[f],
            c = h.value,
            v = o.value;
          (h.percent = h.time / t),
            s ||
              (u && f !== a - 1
                ? uS(c, v, i)
                : l && sS(c.colorStops, v.colorStops));
        }
        if (
          !s &&
          i !== El &&
          e &&
          this.needsAnimate() &&
          e.needsAnimate() &&
          i === e.valType &&
          !e._finished
        ) {
          this._additiveTrack = e;
          for (var d = n[0].value, f = 0; f < a; f++)
            i === Ha
              ? (n[f].additiveValue = n[f].value - d)
              : i === Ni
              ? (n[f].additiveValue = Ga([], n[f].value, d, -1))
              : Va(i) &&
                (n[f].additiveValue =
                  i === Do
                    ? Ga([], n[f].value, d, -1)
                    : mv([], n[f].value, d, -1));
        }
      }),
      (r.prototype.step = function (t, e) {
        if (!this._finished) {
          this._additiveTrack &&
            this._additiveTrack._finished &&
            (this._additiveTrack = null);
          var n = this._additiveTrack != null,
            i = n ? "additiveValue" : "value",
            a = this.valType,
            o = this.keyframes,
            s = o.length,
            u = this.propName,
            l = a === Ni,
            f,
            h = this._lastFr,
            c = Math.min,
            v,
            d;
          if (s === 1) v = d = o[0];
          else {
            if (e < 0) f = 0;
            else if (e < this._lastFrP) {
              var g = c(h + 1, s - 1);
              for (f = g; f >= 0 && !(o[f].percent <= e); f--);
              f = c(f, s - 2);
            } else {
              for (f = h; f < s && !(o[f].percent > e); f++);
              f = c(f - 1, s - 2);
            }
            (d = o[f + 1]), (v = o[f]);
          }
          if (!!(v && d)) {
            (this._lastFr = f), (this._lastFrP = e);
            var p = d.percent - v.percent,
              y = p === 0 ? 1 : c((e - v.percent) / p, 1);
            d.easingFunc && (y = d.easingFunc(y));
            var m = n ? this._additiveValue : l ? ci : t[u];
            if (
              ((Va(a) || l) && !m && (m = this._additiveValue = []),
              this.discrete)
            )
              t[u] = y < 1 ? v.rawValue : d.rawValue;
            else if (Va(a))
              a === Do ? nu(m, v[i], d[i], y) : oS(m, v[i], d[i], y);
            else if (Sv(a)) {
              var _ = v[i],
                S = d[i],
                w = a === Rl;
              (t[u] = {
                type: w ? "linear" : "radial",
                x: We(_.x, S.x, y),
                y: We(_.y, S.y, y),
                colorStops: z(_.colorStops, function (b, T) {
                  var M = S.colorStops[T];
                  return {
                    offset: We(b.offset, M.offset, y),
                    color: Mo(nu([], b.color, M.color, y)),
                  };
                }),
                global: S.global,
              }),
                w
                  ? ((t[u].x2 = We(_.x2, S.x2, y)),
                    (t[u].y2 = We(_.y2, S.y2, y)))
                  : (t[u].r = We(_.r, S.r, y));
            } else if (l) nu(m, v[i], d[i], y), n || (t[u] = Mo(m));
            else {
              var x = We(v[i], d[i], y);
              n ? (this._additiveValue = x) : (t[u] = x);
            }
            n && this._addToTarget(t);
          }
        }
      }),
      (r.prototype._addToTarget = function (t) {
        var e = this.valType,
          n = this.propName,
          i = this._additiveValue;
        e === Ha
          ? (t[n] = t[n] + i)
          : e === Ni
          ? ($e(t[n], ci), Ga(ci, ci, i, 1), (t[n] = Mo(ci)))
          : e === Do
          ? Ga(t[n], t[n], i, 1)
          : e === Fg && mv(t[n], t[n], i, 1);
      }),
      r
    );
  })(),
  hS = (function () {
    function r(t, e, n, i) {
      if (
        ((this._tracks = {}),
        (this._trackKeys = []),
        (this._maxTime = 0),
        (this._started = 0),
        (this._clip = null),
        (this._target = t),
        (this._loop = e),
        e && i)
      ) {
        Gf("Can' use additive animation on looped animation.");
        return;
      }
      (this._additiveAnimators = i), (this._allowDiscrete = n);
    }
    return (
      (r.prototype.getMaxTime = function () {
        return this._maxTime;
      }),
      (r.prototype.getDelay = function () {
        return this._delay;
      }),
      (r.prototype.getLoop = function () {
        return this._loop;
      }),
      (r.prototype.getTarget = function () {
        return this._target;
      }),
      (r.prototype.changeTarget = function (t) {
        this._target = t;
      }),
      (r.prototype.when = function (t, e, n) {
        return this.whenWithKeys(t, e, pt(e), n);
      }),
      (r.prototype.whenWithKeys = function (t, e, n, i) {
        for (var a = this._tracks, o = 0; o < n.length; o++) {
          var s = n[o],
            u = a[s];
          if (!u) {
            u = a[s] = new fS(s);
            var l = void 0,
              f = this._getAdditiveTrack(s);
            if (f) {
              var h = f.keyframes,
                c = h[h.length - 1];
              (l = c && c.value), f.valType === Ni && l && (l = Mo(l));
            } else l = this._target[s];
            if (l == null) continue;
            t > 0 && u.addKeyframe(0, Co(l), i), this._trackKeys.push(s);
          }
          u.addKeyframe(t, Co(e[s]), i);
        }
        return (this._maxTime = Math.max(this._maxTime, t)), this;
      }),
      (r.prototype.pause = function () {
        this._clip.pause(), (this._paused = !0);
      }),
      (r.prototype.resume = function () {
        this._clip.resume(), (this._paused = !1);
      }),
      (r.prototype.isPaused = function () {
        return !!this._paused;
      }),
      (r.prototype.duration = function (t) {
        return (this._maxTime = t), (this._force = !0), this;
      }),
      (r.prototype._doneCallback = function () {
        this._setTracksFinished(), (this._clip = null);
        var t = this._doneCbs;
        if (t) for (var e = t.length, n = 0; n < e; n++) t[n].call(this);
      }),
      (r.prototype._abortedCallback = function () {
        this._setTracksFinished();
        var t = this.animation,
          e = this._abortedCbs;
        if ((t && t.removeClip(this._clip), (this._clip = null), e))
          for (var n = 0; n < e.length; n++) e[n].call(this);
      }),
      (r.prototype._setTracksFinished = function () {
        for (
          var t = this._tracks, e = this._trackKeys, n = 0;
          n < e.length;
          n++
        )
          t[e[n]].setFinished();
      }),
      (r.prototype._getAdditiveTrack = function (t) {
        var e,
          n = this._additiveAnimators;
        if (n)
          for (var i = 0; i < n.length; i++) {
            var a = n[i].getTrack(t);
            a && (e = a);
          }
        return e;
      }),
      (r.prototype.start = function (t) {
        if (!(this._started > 0)) {
          this._started = 1;
          for (
            var e = this, n = [], i = this._maxTime || 0, a = 0;
            a < this._trackKeys.length;
            a++
          ) {
            var o = this._trackKeys[a],
              s = this._tracks[o],
              u = this._getAdditiveTrack(o),
              l = s.keyframes,
              f = l.length;
            if ((s.prepare(i, u), s.needsAnimate()))
              if (!this._allowDiscrete && s.discrete) {
                var h = l[f - 1];
                h && (e._target[s.propName] = h.rawValue), s.setFinished();
              } else n.push(s);
          }
          if (n.length || this._force) {
            var c = new tS({
              life: i,
              loop: this._loop,
              delay: this._delay || 0,
              onframe: function (v) {
                e._started = 2;
                var d = e._additiveAnimators;
                if (d) {
                  for (var g = !1, p = 0; p < d.length; p++)
                    if (d[p]._clip) {
                      g = !0;
                      break;
                    }
                  g || (e._additiveAnimators = null);
                }
                for (var p = 0; p < n.length; p++) n[p].step(e._target, v);
                var y = e._onframeCbs;
                if (y) for (var p = 0; p < y.length; p++) y[p](e._target, v);
              },
              ondestroy: function () {
                e._doneCallback();
              },
            });
            (this._clip = c),
              this.animation && this.animation.addClip(c),
              t && c.setEasing(t);
          } else this._doneCallback();
          return this;
        }
      }),
      (r.prototype.stop = function (t) {
        if (!!this._clip) {
          var e = this._clip;
          t && e.onframe(1), this._abortedCallback();
        }
      }),
      (r.prototype.delay = function (t) {
        return (this._delay = t), this;
      }),
      (r.prototype.during = function (t) {
        return (
          t &&
            (this._onframeCbs || (this._onframeCbs = []),
            this._onframeCbs.push(t)),
          this
        );
      }),
      (r.prototype.done = function (t) {
        return (
          t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)),
          this
        );
      }),
      (r.prototype.aborted = function (t) {
        return (
          t &&
            (this._abortedCbs || (this._abortedCbs = []),
            this._abortedCbs.push(t)),
          this
        );
      }),
      (r.prototype.getClip = function () {
        return this._clip;
      }),
      (r.prototype.getTrack = function (t) {
        return this._tracks[t];
      }),
      (r.prototype.getTracks = function () {
        var t = this;
        return z(this._trackKeys, function (e) {
          return t._tracks[e];
        });
      }),
      (r.prototype.stopTracks = function (t, e) {
        if (!t.length || !this._clip) return !0;
        for (
          var n = this._tracks, i = this._trackKeys, a = 0;
          a < t.length;
          a++
        ) {
          var o = n[t[a]];
          o &&
            !o.isFinished() &&
            (e
              ? o.step(this._target, 1)
              : this._started === 1 && o.step(this._target, 0),
            o.setFinished());
        }
        for (var s = !0, a = 0; a < i.length; a++)
          if (!n[i[a]].isFinished()) {
            s = !1;
            break;
          }
        return s && this._abortedCallback(), s;
      }),
      (r.prototype.saveTo = function (t, e, n) {
        if (!!t) {
          e = e || this._trackKeys;
          for (var i = 0; i < e.length; i++) {
            var a = e[i],
              o = this._tracks[a];
            if (!(!o || o.isFinished())) {
              var s = o.keyframes,
                u = s[n ? 0 : s.length - 1];
              u && (t[a] = Co(u.rawValue));
            }
          }
        }
      }),
      (r.prototype.__changeFinalValue = function (t, e) {
        e = e || pt(t);
        for (var n = 0; n < e.length; n++) {
          var i = e[n],
            a = this._tracks[i];
          if (!!a) {
            var o = a.keyframes;
            if (o.length > 1) {
              var s = o.pop();
              a.addKeyframe(s.time, t[i]),
                a.prepare(this._maxTime, a.getAdditiveTrack());
            }
          }
        }
      }),
      r
    );
  })();
const Wf = hS;
function Gn() {
  return new Date().getTime();
}
var vS = (function (r) {
  O(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return (
      (n._running = !1),
      (n._time = 0),
      (n._pausedTime = 0),
      (n._pauseStart = 0),
      (n._paused = !1),
      (e = e || {}),
      (n.stage = e.stage || {}),
      n
    );
  }
  return (
    (t.prototype.addClip = function (e) {
      e.animation && this.removeClip(e),
        this._head
          ? ((this._tail.next = e),
            (e.prev = this._tail),
            (e.next = null),
            (this._tail = e))
          : (this._head = this._tail = e),
        (e.animation = this);
    }),
    (t.prototype.addAnimator = function (e) {
      e.animation = this;
      var n = e.getClip();
      n && this.addClip(n);
    }),
    (t.prototype.removeClip = function (e) {
      if (!!e.animation) {
        var n = e.prev,
          i = e.next;
        n ? (n.next = i) : (this._head = i),
          i ? (i.prev = n) : (this._tail = n),
          (e.next = e.prev = e.animation = null);
      }
    }),
    (t.prototype.removeAnimator = function (e) {
      var n = e.getClip();
      n && this.removeClip(n), (e.animation = null);
    }),
    (t.prototype.update = function (e) {
      for (
        var n = Gn() - this._pausedTime, i = n - this._time, a = this._head;
        a;

      ) {
        var o = a.next,
          s = a.step(n, i);
        s && (a.ondestroy(), this.removeClip(a)), (a = o);
      }
      (this._time = n),
        e ||
          (this.trigger("frame", i), this.stage.update && this.stage.update());
    }),
    (t.prototype._startLoop = function () {
      var e = this;
      this._running = !0;
      function n() {
        e._running && (Al(n), !e._paused && e.update());
      }
      Al(n);
    }),
    (t.prototype.start = function () {
      this._running ||
        ((this._time = Gn()), (this._pausedTime = 0), this._startLoop());
    }),
    (t.prototype.stop = function () {
      this._running = !1;
    }),
    (t.prototype.pause = function () {
      this._paused || ((this._pauseStart = Gn()), (this._paused = !0));
    }),
    (t.prototype.resume = function () {
      this._paused &&
        ((this._pausedTime += Gn() - this._pauseStart), (this._paused = !1));
    }),
    (t.prototype.clear = function () {
      for (var e = this._head; e; ) {
        var n = e.next;
        (e.prev = e.next = e.animation = null), (e = n);
      }
      this._head = this._tail = null;
    }),
    (t.prototype.isFinished = function () {
      return this._head == null;
    }),
    (t.prototype.animate = function (e, n) {
      (n = n || {}), this.start();
      var i = new Wf(e, n.loop);
      return this.addAnimator(i), i;
    }),
    t
  );
})(ce);
const cS = vS;
var dS = 300,
  iu = j.domSupported,
  au = (function () {
    var r = [
        "click",
        "dblclick",
        "mousewheel",
        "wheel",
        "mouseout",
        "mouseup",
        "mousedown",
        "mousemove",
        "contextmenu",
      ],
      t = ["touchstart", "touchend", "touchmove"],
      e = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 },
      n = z(r, function (i) {
        var a = i.replace("mouse", "pointer");
        return e.hasOwnProperty(a) ? a : i;
      });
    return { mouse: r, touch: t, pointer: n };
  })(),
  xv = {
    mouse: ["mousemove", "mouseup"],
    pointer: ["pointermove", "pointerup"],
  },
  wv = !1;
function Ol(r) {
  var t = r.pointerType;
  return t === "pen" || t === "touch";
}
function pS(r) {
  (r.touching = !0),
    r.touchTimer != null && (clearTimeout(r.touchTimer), (r.touchTimer = null)),
    (r.touchTimer = setTimeout(function () {
      (r.touching = !1), (r.touchTimer = null);
    }, 700));
}
function ou(r) {
  r && (r.zrByTouch = !0);
}
function gS(r, t) {
  return ie(r.dom, new yS(r, t), !0);
}
function zg(r, t) {
  for (
    var e = t, n = !1;
    e &&
    e.nodeType !== 9 &&
    !(n = e.domBelongToZr || (e !== t && e === r.painterRoot));

  )
    e = e.parentNode;
  return n;
}
var yS = (function () {
    function r(t, e) {
      (this.stopPropagation = Gt),
        (this.stopImmediatePropagation = Gt),
        (this.preventDefault = Gt),
        (this.type = e.type),
        (this.target = this.currentTarget = t.dom),
        (this.pointerType = e.pointerType),
        (this.clientX = e.clientX),
        (this.clientY = e.clientY);
    }
    return r;
  })(),
  me = {
    mousedown: function (r) {
      (r = ie(this.dom, r)),
        (this.__mayPointerCapture = [r.zrX, r.zrY]),
        this.trigger("mousedown", r);
    },
    mousemove: function (r) {
      r = ie(this.dom, r);
      var t = this.__mayPointerCapture;
      t &&
        (r.zrX !== t[0] || r.zrY !== t[1]) &&
        this.__togglePointerCapture(!0),
        this.trigger("mousemove", r);
    },
    mouseup: function (r) {
      (r = ie(this.dom, r)),
        this.__togglePointerCapture(!1),
        this.trigger("mouseup", r);
    },
    mouseout: function (r) {
      r = ie(this.dom, r);
      var t = r.toElement || r.relatedTarget;
      zg(this, t) ||
        (this.__pointerCapturing && (r.zrEventControl = "no_globalout"),
        this.trigger("mouseout", r));
    },
    wheel: function (r) {
      (wv = !0), (r = ie(this.dom, r)), this.trigger("mousewheel", r);
    },
    mousewheel: function (r) {
      wv || ((r = ie(this.dom, r)), this.trigger("mousewheel", r));
    },
    touchstart: function (r) {
      (r = ie(this.dom, r)),
        ou(r),
        (this.__lastTouchMoment = new Date()),
        this.handler.processGesture(r, "start"),
        me.mousemove.call(this, r),
        me.mousedown.call(this, r);
    },
    touchmove: function (r) {
      (r = ie(this.dom, r)),
        ou(r),
        this.handler.processGesture(r, "change"),
        me.mousemove.call(this, r);
    },
    touchend: function (r) {
      (r = ie(this.dom, r)),
        ou(r),
        this.handler.processGesture(r, "end"),
        me.mouseup.call(this, r),
        +new Date() - +this.__lastTouchMoment < dS && me.click.call(this, r);
    },
    pointerdown: function (r) {
      me.mousedown.call(this, r);
    },
    pointermove: function (r) {
      Ol(r) || me.mousemove.call(this, r);
    },
    pointerup: function (r) {
      me.mouseup.call(this, r);
    },
    pointerout: function (r) {
      Ol(r) || me.mouseout.call(this, r);
    },
  };
C(["click", "dblclick", "contextmenu"], function (r) {
  me[r] = function (t) {
    (t = ie(this.dom, t)), this.trigger(r, t);
  };
});
var kl = {
  pointermove: function (r) {
    Ol(r) || kl.mousemove.call(this, r);
  },
  pointerup: function (r) {
    kl.mouseup.call(this, r);
  },
  mousemove: function (r) {
    this.trigger("mousemove", r);
  },
  mouseup: function (r) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1),
      this.trigger("mouseup", r),
      t && ((r.zrEventControl = "only_globalout"), this.trigger("mouseout", r));
  },
};
function mS(r, t) {
  var e = t.domHandlers;
  j.pointerEventsSupported
    ? C(au.pointer, function (n) {
        Ao(t, n, function (i) {
          e[n].call(r, i);
        });
      })
    : (j.touchEventsSupported &&
        C(au.touch, function (n) {
          Ao(t, n, function (i) {
            e[n].call(r, i), pS(t);
          });
        }),
      C(au.mouse, function (n) {
        Ao(t, n, function (i) {
          (i = Vf(i)), t.touching || e[n].call(r, i);
        });
      }));
}
function _S(r, t) {
  j.pointerEventsSupported
    ? C(xv.pointer, e)
    : j.touchEventsSupported || C(xv.mouse, e);
  function e(n) {
    function i(a) {
      (a = Vf(a)),
        zg(r, a.target) || ((a = gS(r, a)), t.domHandlers[n].call(r, a));
    }
    Ao(t, n, i, { capture: !0 });
  }
}
function Ao(r, t, e, n) {
  (r.mounted[t] = e), (r.listenerOpts[t] = n), Dl(r.domTarget, t, e, n);
}
function su(r) {
  var t = r.mounted;
  for (var e in t)
    t.hasOwnProperty(e) && k1(r.domTarget, e, t[e], r.listenerOpts[e]);
  r.mounted = {};
}
var bv = (function () {
    function r(t, e) {
      (this.mounted = {}),
        (this.listenerOpts = {}),
        (this.touching = !1),
        (this.domTarget = t),
        (this.domHandlers = e);
    }
    return r;
  })(),
  SS = (function (r) {
    O(t, r);
    function t(e, n) {
      var i = r.call(this) || this;
      return (
        (i.__pointerCapturing = !1),
        (i.dom = e),
        (i.painterRoot = n),
        (i._localHandlerScope = new bv(e, me)),
        iu && (i._globalHandlerScope = new bv(document, kl)),
        mS(i, i._localHandlerScope),
        i
      );
    }
    return (
      (t.prototype.dispose = function () {
        su(this._localHandlerScope), iu && su(this._globalHandlerScope);
      }),
      (t.prototype.setCursor = function (e) {
        this.dom.style && (this.dom.style.cursor = e || "default");
      }),
      (t.prototype.__togglePointerCapture = function (e) {
        if (
          ((this.__mayPointerCapture = null),
          iu && +this.__pointerCapturing ^ +e)
        ) {
          this.__pointerCapturing = e;
          var n = this._globalHandlerScope;
          e ? _S(this, n) : su(n);
        }
      }),
      t
    );
  })(ce);
const xS = SS;
var Gg = 1;
j.hasGlobalWindow &&
  (Gg = Math.max(
    window.devicePixelRatio ||
      (window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI) ||
      1,
    1
  ));
var $o = Gg,
  Bl = 0.4,
  Nl = "#333",
  Fl = "#ccc",
  wS = "#eee";
function ia() {
  return [1, 0, 0, 1, 0, 0];
}
function Uf(r) {
  return (
    (r[0] = 1), (r[1] = 0), (r[2] = 0), (r[3] = 1), (r[4] = 0), (r[5] = 0), r
  );
}
function bS(r, t) {
  return (
    (r[0] = t[0]),
    (r[1] = t[1]),
    (r[2] = t[2]),
    (r[3] = t[3]),
    (r[4] = t[4]),
    (r[5] = t[5]),
    r
  );
}
function Zn(r, t, e) {
  var n = t[0] * e[0] + t[2] * e[1],
    i = t[1] * e[0] + t[3] * e[1],
    a = t[0] * e[2] + t[2] * e[3],
    o = t[1] * e[2] + t[3] * e[3],
    s = t[0] * e[4] + t[2] * e[5] + t[4],
    u = t[1] * e[4] + t[3] * e[5] + t[5];
  return (
    (r[0] = n), (r[1] = i), (r[2] = a), (r[3] = o), (r[4] = s), (r[5] = u), r
  );
}
function zl(r, t, e) {
  return (
    (r[0] = t[0]),
    (r[1] = t[1]),
    (r[2] = t[2]),
    (r[3] = t[3]),
    (r[4] = t[4] + e[0]),
    (r[5] = t[5] + e[1]),
    r
  );
}
function Yf(r, t, e) {
  var n = t[0],
    i = t[2],
    a = t[4],
    o = t[1],
    s = t[3],
    u = t[5],
    l = Math.sin(e),
    f = Math.cos(e);
  return (
    (r[0] = n * f + o * l),
    (r[1] = -n * l + o * f),
    (r[2] = i * f + s * l),
    (r[3] = -i * l + f * s),
    (r[4] = f * a + l * u),
    (r[5] = f * u - l * a),
    r
  );
}
function TS(r, t, e) {
  var n = e[0],
    i = e[1];
  return (
    (r[0] = t[0] * n),
    (r[1] = t[1] * i),
    (r[2] = t[2] * n),
    (r[3] = t[3] * i),
    (r[4] = t[4] * n),
    (r[5] = t[5] * i),
    r
  );
}
function ms(r, t) {
  var e = t[0],
    n = t[2],
    i = t[4],
    a = t[1],
    o = t[3],
    s = t[5],
    u = e * o - a * n;
  return u
    ? ((u = 1 / u),
      (r[0] = o * u),
      (r[1] = -a * u),
      (r[2] = -n * u),
      (r[3] = e * u),
      (r[4] = (n * s - o * i) * u),
      (r[5] = (a * i - e * s) * u),
      r)
    : null;
}
var Tv = Uf,
  Cv = 5e-5;
function Cr(r) {
  return r > Cv || r < -Cv;
}
var Mr = [],
  Sn = [],
  uu = ia(),
  lu = Math.abs,
  CS = (function () {
    function r() {}
    return (
      (r.prototype.getLocalTransform = function (t) {
        return r.getLocalTransform(this, t);
      }),
      (r.prototype.setPosition = function (t) {
        (this.x = t[0]), (this.y = t[1]);
      }),
      (r.prototype.setScale = function (t) {
        (this.scaleX = t[0]), (this.scaleY = t[1]);
      }),
      (r.prototype.setSkew = function (t) {
        (this.skewX = t[0]), (this.skewY = t[1]);
      }),
      (r.prototype.setOrigin = function (t) {
        (this.originX = t[0]), (this.originY = t[1]);
      }),
      (r.prototype.needLocalTransform = function () {
        return (
          Cr(this.rotation) ||
          Cr(this.x) ||
          Cr(this.y) ||
          Cr(this.scaleX - 1) ||
          Cr(this.scaleY - 1) ||
          Cr(this.skewX) ||
          Cr(this.skewY)
        );
      }),
      (r.prototype.updateTransform = function () {
        var t = this.parent && this.parent.transform,
          e = this.needLocalTransform(),
          n = this.transform;
        if (!(e || t)) {
          n && Tv(n);
          return;
        }
        (n = n || ia()),
          e ? this.getLocalTransform(n) : Tv(n),
          t && (e ? Zn(n, t, n) : bS(n, t)),
          (this.transform = n),
          this._resolveGlobalScaleRatio(n);
      }),
      (r.prototype._resolveGlobalScaleRatio = function (t) {
        var e = this.globalScaleRatio;
        if (e != null && e !== 1) {
          this.getGlobalScale(Mr);
          var n = Mr[0] < 0 ? -1 : 1,
            i = Mr[1] < 0 ? -1 : 1,
            a = ((Mr[0] - n) * e + n) / Mr[0] || 0,
            o = ((Mr[1] - i) * e + i) / Mr[1] || 0;
          (t[0] *= a), (t[1] *= a), (t[2] *= o), (t[3] *= o);
        }
        (this.invTransform = this.invTransform || ia()),
          ms(this.invTransform, t);
      }),
      (r.prototype.getComputedTransform = function () {
        for (var t = this, e = []; t; ) e.push(t), (t = t.parent);
        for (; (t = e.pop()); ) t.updateTransform();
        return this.transform;
      }),
      (r.prototype.setLocalTransform = function (t) {
        if (!!t) {
          var e = t[0] * t[0] + t[1] * t[1],
            n = t[2] * t[2] + t[3] * t[3],
            i = Math.atan2(t[1], t[0]),
            a = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
          (n = Math.sqrt(n) * Math.cos(a)),
            (e = Math.sqrt(e)),
            (this.skewX = a),
            (this.skewY = 0),
            (this.rotation = -i),
            (this.x = +t[4]),
            (this.y = +t[5]),
            (this.scaleX = e),
            (this.scaleY = n),
            (this.originX = 0),
            (this.originY = 0);
        }
      }),
      (r.prototype.decomposeTransform = function () {
        if (!!this.transform) {
          var t = this.parent,
            e = this.transform;
          t && t.transform && (Zn(Sn, t.invTransform, e), (e = Sn));
          var n = this.originX,
            i = this.originY;
          (n || i) &&
            ((uu[4] = n),
            (uu[5] = i),
            Zn(Sn, e, uu),
            (Sn[4] -= n),
            (Sn[5] -= i),
            (e = Sn)),
            this.setLocalTransform(e);
        }
      }),
      (r.prototype.getGlobalScale = function (t) {
        var e = this.transform;
        return (
          (t = t || []),
          e
            ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])),
              (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])),
              e[0] < 0 && (t[0] = -t[0]),
              e[3] < 0 && (t[1] = -t[1]),
              t)
            : ((t[0] = 1), (t[1] = 1), t)
        );
      }),
      (r.prototype.transformCoordToLocal = function (t, e) {
        var n = [t, e],
          i = this.invTransform;
        return i && fe(n, n, i), n;
      }),
      (r.prototype.transformCoordToGlobal = function (t, e) {
        var n = [t, e],
          i = this.transform;
        return i && fe(n, n, i), n;
      }),
      (r.prototype.getLineScale = function () {
        var t = this.transform;
        return t && lu(t[0] - 1) > 1e-10 && lu(t[3] - 1) > 1e-10
          ? Math.sqrt(lu(t[0] * t[3] - t[2] * t[1]))
          : 1;
      }),
      (r.prototype.copyTransform = function (t) {
        MS(this, t);
      }),
      (r.getLocalTransform = function (t, e) {
        e = e || [];
        var n = t.originX || 0,
          i = t.originY || 0,
          a = t.scaleX,
          o = t.scaleY,
          s = t.anchorX,
          u = t.anchorY,
          l = t.rotation || 0,
          f = t.x,
          h = t.y,
          c = t.skewX ? Math.tan(t.skewX) : 0,
          v = t.skewY ? Math.tan(-t.skewY) : 0;
        if (n || i || s || u) {
          var d = n + s,
            g = i + u;
          (e[4] = -d * a - c * g * o), (e[5] = -g * o - v * d * a);
        } else e[4] = e[5] = 0;
        return (
          (e[0] = a),
          (e[3] = o),
          (e[1] = v * a),
          (e[2] = c * o),
          l && Yf(e, e, l),
          (e[4] += n + f),
          (e[5] += i + h),
          e
        );
      }),
      (r.initDefaultProps = (function () {
        var t = r.prototype;
        (t.scaleX = t.scaleY = t.globalScaleRatio = 1),
          (t.x =
            t.y =
            t.originX =
            t.originY =
            t.skewX =
            t.skewY =
            t.rotation =
            t.anchorX =
            t.anchorY =
              0);
      })()),
      r
    );
  })(),
  aa = [
    "x",
    "y",
    "originX",
    "originY",
    "anchorX",
    "anchorY",
    "rotation",
    "scaleX",
    "scaleY",
    "skewX",
    "skewY",
  ];
function MS(r, t) {
  for (var e = 0; e < aa.length; e++) {
    var n = aa[e];
    r[n] = t[n];
  }
}
const Ca = CS;
var DS = (function () {
  function r(t, e) {
    (this.x = t || 0), (this.y = e || 0);
  }
  return (
    (r.prototype.copy = function (t) {
      return (this.x = t.x), (this.y = t.y), this;
    }),
    (r.prototype.clone = function () {
      return new r(this.x, this.y);
    }),
    (r.prototype.set = function (t, e) {
      return (this.x = t), (this.y = e), this;
    }),
    (r.prototype.equal = function (t) {
      return t.x === this.x && t.y === this.y;
    }),
    (r.prototype.add = function (t) {
      return (this.x += t.x), (this.y += t.y), this;
    }),
    (r.prototype.scale = function (t) {
      (this.x *= t), (this.y *= t);
    }),
    (r.prototype.scaleAndAdd = function (t, e) {
      (this.x += t.x * e), (this.y += t.y * e);
    }),
    (r.prototype.sub = function (t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    }),
    (r.prototype.dot = function (t) {
      return this.x * t.x + this.y * t.y;
    }),
    (r.prototype.len = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }),
    (r.prototype.lenSquare = function () {
      return this.x * this.x + this.y * this.y;
    }),
    (r.prototype.normalize = function () {
      var t = this.len();
      return (this.x /= t), (this.y /= t), this;
    }),
    (r.prototype.distance = function (t) {
      var e = this.x - t.x,
        n = this.y - t.y;
      return Math.sqrt(e * e + n * n);
    }),
    (r.prototype.distanceSquare = function (t) {
      var e = this.x - t.x,
        n = this.y - t.y;
      return e * e + n * n;
    }),
    (r.prototype.negate = function () {
      return (this.x = -this.x), (this.y = -this.y), this;
    }),
    (r.prototype.transform = function (t) {
      if (!!t) {
        var e = this.x,
          n = this.y;
        return (
          (this.x = t[0] * e + t[2] * n + t[4]),
          (this.y = t[1] * e + t[3] * n + t[5]),
          this
        );
      }
    }),
    (r.prototype.toArray = function (t) {
      return (t[0] = this.x), (t[1] = this.y), t;
    }),
    (r.prototype.fromArray = function (t) {
      (this.x = t[0]), (this.y = t[1]);
    }),
    (r.set = function (t, e, n) {
      (t.x = e), (t.y = n);
    }),
    (r.copy = function (t, e) {
      (t.x = e.x), (t.y = e.y);
    }),
    (r.len = function (t) {
      return Math.sqrt(t.x * t.x + t.y * t.y);
    }),
    (r.lenSquare = function (t) {
      return t.x * t.x + t.y * t.y;
    }),
    (r.dot = function (t, e) {
      return t.x * e.x + t.y * e.y;
    }),
    (r.add = function (t, e, n) {
      (t.x = e.x + n.x), (t.y = e.y + n.y);
    }),
    (r.sub = function (t, e, n) {
      (t.x = e.x - n.x), (t.y = e.y - n.y);
    }),
    (r.scale = function (t, e, n) {
      (t.x = e.x * n), (t.y = e.y * n);
    }),
    (r.scaleAndAdd = function (t, e, n, i) {
      (t.x = e.x + n.x * i), (t.y = e.y + n.y * i);
    }),
    (r.lerp = function (t, e, n, i) {
      var a = 1 - i;
      (t.x = a * e.x + i * n.x), (t.y = a * e.y + i * n.y);
    }),
    r
  );
})();
const Z = DS;
var Wa = Math.min,
  Ua = Math.max,
  Dr = new Z(),
  Ar = new Z(),
  Lr = new Z(),
  Ir = new Z(),
  di = new Z(),
  pi = new Z(),
  AS = (function () {
    function r(t, e, n, i) {
      n < 0 && ((t = t + n), (n = -n)),
        i < 0 && ((e = e + i), (i = -i)),
        (this.x = t),
        (this.y = e),
        (this.width = n),
        (this.height = i);
    }
    return (
      (r.prototype.union = function (t) {
        var e = Wa(t.x, this.x),
          n = Wa(t.y, this.y);
        isFinite(this.x) && isFinite(this.width)
          ? (this.width = Ua(t.x + t.width, this.x + this.width) - e)
          : (this.width = t.width),
          isFinite(this.y) && isFinite(this.height)
            ? (this.height = Ua(t.y + t.height, this.y + this.height) - n)
            : (this.height = t.height),
          (this.x = e),
          (this.y = n);
      }),
      (r.prototype.applyTransform = function (t) {
        r.applyTransform(this, this, t);
      }),
      (r.prototype.calculateTransform = function (t) {
        var e = this,
          n = t.width / e.width,
          i = t.height / e.height,
          a = ia();
        return (
          zl(a, a, [-e.x, -e.y]), TS(a, a, [n, i]), zl(a, a, [t.x, t.y]), a
        );
      }),
      (r.prototype.intersect = function (t, e) {
        if (!t) return !1;
        t instanceof r || (t = r.create(t));
        var n = this,
          i = n.x,
          a = n.x + n.width,
          o = n.y,
          s = n.y + n.height,
          u = t.x,
          l = t.x + t.width,
          f = t.y,
          h = t.y + t.height,
          c = !(a < u || l < i || s < f || h < o);
        if (e) {
          var v = 1 / 0,
            d = 0,
            g = Math.abs(a - u),
            p = Math.abs(l - i),
            y = Math.abs(s - f),
            m = Math.abs(h - o),
            _ = Math.min(g, p),
            S = Math.min(y, m);
          a < u || l < i
            ? _ > d && ((d = _), g < p ? Z.set(pi, -g, 0) : Z.set(pi, p, 0))
            : _ < v && ((v = _), g < p ? Z.set(di, g, 0) : Z.set(di, -p, 0)),
            s < f || h < o
              ? S > d && ((d = S), y < m ? Z.set(pi, 0, -y) : Z.set(pi, 0, m))
              : _ < v && ((v = _), y < m ? Z.set(di, 0, y) : Z.set(di, 0, -m));
        }
        return e && Z.copy(e, c ? di : pi), c;
      }),
      (r.prototype.contain = function (t, e) {
        var n = this;
        return (
          t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
        );
      }),
      (r.prototype.clone = function () {
        return new r(this.x, this.y, this.width, this.height);
      }),
      (r.prototype.copy = function (t) {
        r.copy(this, t);
      }),
      (r.prototype.plain = function () {
        return { x: this.x, y: this.y, width: this.width, height: this.height };
      }),
      (r.prototype.isFinite = function () {
        return (
          isFinite(this.x) &&
          isFinite(this.y) &&
          isFinite(this.width) &&
          isFinite(this.height)
        );
      }),
      (r.prototype.isZero = function () {
        return this.width === 0 || this.height === 0;
      }),
      (r.create = function (t) {
        return new r(t.x, t.y, t.width, t.height);
      }),
      (r.copy = function (t, e) {
        (t.x = e.x), (t.y = e.y), (t.width = e.width), (t.height = e.height);
      }),
      (r.applyTransform = function (t, e, n) {
        if (!n) {
          t !== e && r.copy(t, e);
          return;
        }
        if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
          var i = n[0],
            a = n[3],
            o = n[4],
            s = n[5];
          (t.x = e.x * i + o),
            (t.y = e.y * a + s),
            (t.width = e.width * i),
            (t.height = e.height * a),
            t.width < 0 && ((t.x += t.width), (t.width = -t.width)),
            t.height < 0 && ((t.y += t.height), (t.height = -t.height));
          return;
        }
        (Dr.x = Lr.x = e.x),
          (Dr.y = Ir.y = e.y),
          (Ar.x = Ir.x = e.x + e.width),
          (Ar.y = Lr.y = e.y + e.height),
          Dr.transform(n),
          Ir.transform(n),
          Ar.transform(n),
          Lr.transform(n),
          (t.x = Wa(Dr.x, Ar.x, Lr.x, Ir.x)),
          (t.y = Wa(Dr.y, Ar.y, Lr.y, Ir.y));
        var u = Ua(Dr.x, Ar.x, Lr.x, Ir.x),
          l = Ua(Dr.y, Ar.y, Lr.y, Ir.y);
        (t.width = u - t.x), (t.height = l - t.y);
      }),
      r
    );
  })();
const at = AS;
var Mv = {};
function Jt(r, t) {
  t = t || sn;
  var e = Mv[t];
  e || (e = Mv[t] = new Ta(500));
  var n = e.get(r);
  return n == null && ((n = dn.measureText(r, t).width), e.put(r, n)), n;
}
function Dv(r, t, e, n) {
  var i = Jt(r, t),
    a = $f(t),
    o = Fi(0, i, e),
    s = Bn(0, a, n),
    u = new at(o, s, i, a);
  return u;
}
function _s(r, t, e, n) {
  var i = ((r || "") + "").split(`
`),
    a = i.length;
  if (a === 1) return Dv(i[0], t, e, n);
  for (var o = new at(0, 0, 0, 0), s = 0; s < i.length; s++) {
    var u = Dv(i[s], t, e, n);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function Fi(r, t, e) {
  return e === "right" ? (r -= t) : e === "center" && (r -= t / 2), r;
}
function Bn(r, t, e) {
  return e === "middle" ? (r -= t / 2) : e === "bottom" && (r -= t), r;
}
function $f(r) {
  return Jt("\u56FD", r);
}
function un(r, t) {
  return typeof r == "string"
    ? r.lastIndexOf("%") >= 0
      ? (parseFloat(r) / 100) * t
      : parseFloat(r)
    : r;
}
function Hg(r, t, e) {
  var n = t.position || "inside",
    i = t.distance != null ? t.distance : 5,
    a = e.height,
    o = e.width,
    s = a / 2,
    u = e.x,
    l = e.y,
    f = "left",
    h = "top";
  if (n instanceof Array)
    (u += un(n[0], e.width)), (l += un(n[1], e.height)), (f = null), (h = null);
  else
    switch (n) {
      case "left":
        (u -= i), (l += s), (f = "right"), (h = "middle");
        break;
      case "right":
        (u += i + o), (l += s), (h = "middle");
        break;
      case "top":
        (u += o / 2), (l -= i), (f = "center"), (h = "bottom");
        break;
      case "bottom":
        (u += o / 2), (l += a + i), (f = "center");
        break;
      case "inside":
        (u += o / 2), (l += s), (f = "center"), (h = "middle");
        break;
      case "insideLeft":
        (u += i), (l += s), (h = "middle");
        break;
      case "insideRight":
        (u += o - i), (l += s), (f = "right"), (h = "middle");
        break;
      case "insideTop":
        (u += o / 2), (l += i), (f = "center");
        break;
      case "insideBottom":
        (u += o / 2), (l += a - i), (f = "center"), (h = "bottom");
        break;
      case "insideTopLeft":
        (u += i), (l += i);
        break;
      case "insideTopRight":
        (u += o - i), (l += i), (f = "right");
        break;
      case "insideBottomLeft":
        (u += i), (l += a - i), (h = "bottom");
        break;
      case "insideBottomRight":
        (u += o - i), (l += a - i), (f = "right"), (h = "bottom");
        break;
    }
  return (
    (r = r || {}), (r.x = u), (r.y = l), (r.align = f), (r.verticalAlign = h), r
  );
}
var fu = "__zr_normal__",
  hu = aa.concat(["ignore"]),
  LS = oi(
    aa,
    function (r, t) {
      return (r[t] = !0), r;
    },
    { ignore: !1 }
  ),
  xn = {},
  IS = new at(0, 0, 0, 0),
  Zf = (function () {
    function r(t) {
      (this.id = mg()),
        (this.animators = []),
        (this.currentStates = []),
        (this.states = {}),
        this._init(t);
    }
    return (
      (r.prototype._init = function (t) {
        this.attr(t);
      }),
      (r.prototype.drift = function (t, e, n) {
        switch (this.draggable) {
          case "horizontal":
            e = 0;
            break;
          case "vertical":
            t = 0;
            break;
        }
        var i = this.transform;
        i || (i = this.transform = [1, 0, 0, 1, 0, 0]),
          (i[4] += t),
          (i[5] += e),
          this.decomposeTransform(),
          this.markRedraw();
      }),
      (r.prototype.beforeUpdate = function () {}),
      (r.prototype.afterUpdate = function () {}),
      (r.prototype.update = function () {
        this.updateTransform(), this.__dirty && this.updateInnerText();
      }),
      (r.prototype.updateInnerText = function (t) {
        var e = this._textContent;
        if (e && (!e.ignore || t)) {
          this.textConfig || (this.textConfig = {});
          var n = this.textConfig,
            i = n.local,
            a = e.innerTransformable,
            o = void 0,
            s = void 0,
            u = !1;
          a.parent = i ? this : null;
          var l = !1;
          if ((a.copyTransform(e), n.position != null)) {
            var f = IS;
            n.layoutRect
              ? f.copy(n.layoutRect)
              : f.copy(this.getBoundingRect()),
              i || f.applyTransform(this.transform),
              this.calculateTextPosition
                ? this.calculateTextPosition(xn, n, f)
                : Hg(xn, n, f),
              (a.x = xn.x),
              (a.y = xn.y),
              (o = xn.align),
              (s = xn.verticalAlign);
            var h = n.origin;
            if (h && n.rotation != null) {
              var c = void 0,
                v = void 0;
              h === "center"
                ? ((c = f.width * 0.5), (v = f.height * 0.5))
                : ((c = un(h[0], f.width)), (v = un(h[1], f.height))),
                (l = !0),
                (a.originX = -a.x + c + (i ? 0 : f.x)),
                (a.originY = -a.y + v + (i ? 0 : f.y));
            }
          }
          n.rotation != null && (a.rotation = n.rotation);
          var d = n.offset;
          d &&
            ((a.x += d[0]),
            (a.y += d[1]),
            l || ((a.originX = -d[0]), (a.originY = -d[1])));
          var g =
              n.inside == null
                ? typeof n.position == "string" &&
                  n.position.indexOf("inside") >= 0
                : n.inside,
            p =
              this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}),
            y = void 0,
            m = void 0,
            _ = void 0;
          g && this.canBeInsideText()
            ? ((y = n.insideFill),
              (m = n.insideStroke),
              (y == null || y === "auto") && (y = this.getInsideTextFill()),
              (m == null || m === "auto") &&
                ((m = this.getInsideTextStroke(y)), (_ = !0)))
            : ((y = n.outsideFill),
              (m = n.outsideStroke),
              (y == null || y === "auto") && (y = this.getOutsideFill()),
              (m == null || m === "auto") &&
                ((m = this.getOutsideStroke(y)), (_ = !0))),
            (y = y || "#000"),
            (y !== p.fill ||
              m !== p.stroke ||
              _ !== p.autoStroke ||
              o !== p.align ||
              s !== p.verticalAlign) &&
              ((u = !0),
              (p.fill = y),
              (p.stroke = m),
              (p.autoStroke = _),
              (p.align = o),
              (p.verticalAlign = s),
              e.setDefaultTextStyle(p)),
            (e.__dirty |= Qt),
            u && e.dirtyStyle(!0);
        }
      }),
      (r.prototype.canBeInsideText = function () {
        return !0;
      }),
      (r.prototype.getInsideTextFill = function () {
        return "#fff";
      }),
      (r.prototype.getInsideTextStroke = function (t) {
        return "#000";
      }),
      (r.prototype.getOutsideFill = function () {
        return this.__zr && this.__zr.isDarkMode() ? Fl : Nl;
      }),
      (r.prototype.getOutsideStroke = function (t) {
        var e = this.__zr && this.__zr.getBackgroundColor(),
          n = typeof e == "string" && $e(e);
        n || (n = [255, 255, 255, 1]);
        for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
          n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
        return (n[3] = 1), ys(n, "rgba");
      }),
      (r.prototype.traverse = function (t, e) {}),
      (r.prototype.attrKV = function (t, e) {
        t === "textConfig"
          ? this.setTextConfig(e)
          : t === "textContent"
          ? this.setTextContent(e)
          : t === "clipPath"
          ? this.setClipPath(e)
          : t === "extra"
          ? ((this.extra = this.extra || {}), k(this.extra, e))
          : (this[t] = e);
      }),
      (r.prototype.hide = function () {
        (this.ignore = !0), this.markRedraw();
      }),
      (r.prototype.show = function () {
        (this.ignore = !1), this.markRedraw();
      }),
      (r.prototype.attr = function (t, e) {
        if (typeof t == "string") this.attrKV(t, e);
        else if (H(t))
          for (var n = t, i = pt(n), a = 0; a < i.length; a++) {
            var o = i[a];
            this.attrKV(o, t[o]);
          }
        return this.markRedraw(), this;
      }),
      (r.prototype.saveCurrentToNormalState = function (t) {
        this._innerSaveToNormal(t);
        for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
          var i = this.animators[n],
            a = i.__fromStateTransition;
          if (!(i.getLoop() || (a && a !== fu))) {
            var o = i.targetName,
              s = o ? e[o] : e;
            i.saveTo(s);
          }
        }
      }),
      (r.prototype._innerSaveToNormal = function (t) {
        var e = this._normalState;
        e || (e = this._normalState = {}),
          t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
          this._savePrimaryToNormal(t, e, hu);
      }),
      (r.prototype._savePrimaryToNormal = function (t, e, n) {
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          t[a] != null && !(a in e) && (e[a] = this[a]);
        }
      }),
      (r.prototype.hasState = function () {
        return this.currentStates.length > 0;
      }),
      (r.prototype.getState = function (t) {
        return this.states[t];
      }),
      (r.prototype.ensureState = function (t) {
        var e = this.states;
        return e[t] || (e[t] = {}), e[t];
      }),
      (r.prototype.clearStates = function (t) {
        this.useState(fu, !1, t);
      }),
      (r.prototype.useState = function (t, e, n, i) {
        var a = t === fu,
          o = this.hasState();
        if (!(!o && a)) {
          var s = this.currentStates,
            u = this.stateTransition;
          if (!(J(s, t) >= 0 && (e || s.length === 1))) {
            var l;
            if (
              (this.stateProxy && !a && (l = this.stateProxy(t)),
              l || (l = this.states && this.states[t]),
              !l && !a)
            ) {
              Gf("State " + t + " not exists.");
              return;
            }
            a || this.saveCurrentToNormalState(l);
            var f = !!((l && l.hoverLayer) || i);
            f && this._toggleHoverLayerFlag(!0),
              this._applyStateObj(
                t,
                l,
                this._normalState,
                e,
                !n && !this.__inHover && u && u.duration > 0,
                u
              );
            var h = this._textContent,
              c = this._textGuide;
            return (
              h && h.useState(t, e, n, f),
              c && c.useState(t, e, n, f),
              a
                ? ((this.currentStates = []), (this._normalState = {}))
                : e
                ? this.currentStates.push(t)
                : (this.currentStates = [t]),
              this._updateAnimationTargets(),
              this.markRedraw(),
              !f &&
                this.__inHover &&
                (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~Qt)),
              l
            );
          }
        }
      }),
      (r.prototype.useStates = function (t, e, n) {
        if (!t.length) this.clearStates();
        else {
          var i = [],
            a = this.currentStates,
            o = t.length,
            s = o === a.length;
          if (s) {
            for (var u = 0; u < o; u++)
              if (t[u] !== a[u]) {
                s = !1;
                break;
              }
          }
          if (s) return;
          for (var u = 0; u < o; u++) {
            var l = t[u],
              f = void 0;
            this.stateProxy && (f = this.stateProxy(l, t)),
              f || (f = this.states[l]),
              f && i.push(f);
          }
          var h = i[o - 1],
            c = !!((h && h.hoverLayer) || n);
          c && this._toggleHoverLayerFlag(!0);
          var v = this._mergeStates(i),
            d = this.stateTransition;
          this.saveCurrentToNormalState(v),
            this._applyStateObj(
              t.join(","),
              v,
              this._normalState,
              !1,
              !e && !this.__inHover && d && d.duration > 0,
              d
            );
          var g = this._textContent,
            p = this._textGuide;
          g && g.useStates(t, e, c),
            p && p.useStates(t, e, c),
            this._updateAnimationTargets(),
            (this.currentStates = t.slice()),
            this.markRedraw(),
            !c &&
              this.__inHover &&
              (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~Qt));
        }
      }),
      (r.prototype._updateAnimationTargets = function () {
        for (var t = 0; t < this.animators.length; t++) {
          var e = this.animators[t];
          e.targetName && e.changeTarget(this[e.targetName]);
        }
      }),
      (r.prototype.removeState = function (t) {
        var e = J(this.currentStates, t);
        if (e >= 0) {
          var n = this.currentStates.slice();
          n.splice(e, 1), this.useStates(n);
        }
      }),
      (r.prototype.replaceState = function (t, e, n) {
        var i = this.currentStates.slice(),
          a = J(i, t),
          o = J(i, e) >= 0;
        a >= 0 ? (o ? i.splice(a, 1) : (i[a] = e)) : n && !o && i.push(e),
          this.useStates(i);
      }),
      (r.prototype.toggleState = function (t, e) {
        e ? this.useState(t, !0) : this.removeState(t);
      }),
      (r.prototype._mergeStates = function (t) {
        for (var e = {}, n, i = 0; i < t.length; i++) {
          var a = t[i];
          k(e, a), a.textConfig && ((n = n || {}), k(n, a.textConfig));
        }
        return n && (e.textConfig = n), e;
      }),
      (r.prototype._applyStateObj = function (t, e, n, i, a, o) {
        var s = !(e && i);
        e && e.textConfig
          ? ((this.textConfig = k({}, i ? this.textConfig : n.textConfig)),
            k(this.textConfig, e.textConfig))
          : s && n.textConfig && (this.textConfig = n.textConfig);
        for (var u = {}, l = !1, f = 0; f < hu.length; f++) {
          var h = hu[f],
            c = a && LS[h];
          e && e[h] != null
            ? c
              ? ((l = !0), (u[h] = e[h]))
              : (this[h] = e[h])
            : s &&
              n[h] != null &&
              (c ? ((l = !0), (u[h] = n[h])) : (this[h] = n[h]));
        }
        if (!a)
          for (var f = 0; f < this.animators.length; f++) {
            var v = this.animators[f],
              d = v.targetName;
            v.getLoop() || v.__changeFinalValue(d ? (e || n)[d] : e || n);
          }
        l && this._transitionState(t, u, o);
      }),
      (r.prototype._attachComponent = function (t) {
        if (!(t.__zr && !t.__hostTarget) && t !== this) {
          var e = this.__zr;
          e && t.addSelfToZr(e), (t.__zr = e), (t.__hostTarget = this);
        }
      }),
      (r.prototype._detachComponent = function (t) {
        t.__zr && t.removeSelfFromZr(t.__zr),
          (t.__zr = null),
          (t.__hostTarget = null);
      }),
      (r.prototype.getClipPath = function () {
        return this._clipPath;
      }),
      (r.prototype.setClipPath = function (t) {
        this._clipPath && this._clipPath !== t && this.removeClipPath(),
          this._attachComponent(t),
          (this._clipPath = t),
          this.markRedraw();
      }),
      (r.prototype.removeClipPath = function () {
        var t = this._clipPath;
        t &&
          (this._detachComponent(t),
          (this._clipPath = null),
          this.markRedraw());
      }),
      (r.prototype.getTextContent = function () {
        return this._textContent;
      }),
      (r.prototype.setTextContent = function (t) {
        var e = this._textContent;
        e !== t &&
          (e && e !== t && this.removeTextContent(),
          (t.innerTransformable = new Ca()),
          this._attachComponent(t),
          (this._textContent = t),
          this.markRedraw());
      }),
      (r.prototype.setTextConfig = function (t) {
        this.textConfig || (this.textConfig = {}),
          k(this.textConfig, t),
          this.markRedraw();
      }),
      (r.prototype.removeTextConfig = function () {
        (this.textConfig = null), this.markRedraw();
      }),
      (r.prototype.removeTextContent = function () {
        var t = this._textContent;
        t &&
          ((t.innerTransformable = null),
          this._detachComponent(t),
          (this._textContent = null),
          (this._innerTextDefaultStyle = null),
          this.markRedraw());
      }),
      (r.prototype.getTextGuideLine = function () {
        return this._textGuide;
      }),
      (r.prototype.setTextGuideLine = function (t) {
        this._textGuide && this._textGuide !== t && this.removeTextGuideLine(),
          this._attachComponent(t),
          (this._textGuide = t),
          this.markRedraw();
      }),
      (r.prototype.removeTextGuideLine = function () {
        var t = this._textGuide;
        t &&
          (this._detachComponent(t),
          (this._textGuide = null),
          this.markRedraw());
      }),
      (r.prototype.markRedraw = function () {
        this.__dirty |= Qt;
        var t = this.__zr;
        t && (this.__inHover ? t.refreshHover() : t.refresh()),
          this.__hostTarget && this.__hostTarget.markRedraw();
      }),
      (r.prototype.dirty = function () {
        this.markRedraw();
      }),
      (r.prototype._toggleHoverLayerFlag = function (t) {
        this.__inHover = t;
        var e = this._textContent,
          n = this._textGuide;
        e && (e.__inHover = t), n && (n.__inHover = t);
      }),
      (r.prototype.addSelfToZr = function (t) {
        if (this.__zr !== t) {
          this.__zr = t;
          var e = this.animators;
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
          this._clipPath && this._clipPath.addSelfToZr(t),
            this._textContent && this._textContent.addSelfToZr(t),
            this._textGuide && this._textGuide.addSelfToZr(t);
        }
      }),
      (r.prototype.removeSelfFromZr = function (t) {
        if (!!this.__zr) {
          this.__zr = null;
          var e = this.animators;
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
          this._clipPath && this._clipPath.removeSelfFromZr(t),
            this._textContent && this._textContent.removeSelfFromZr(t),
            this._textGuide && this._textGuide.removeSelfFromZr(t);
        }
      }),
      (r.prototype.animate = function (t, e, n) {
        var i = t ? this[t] : this,
          a = new Wf(i, e, n);
        return t && (a.targetName = t), this.addAnimator(a, t), a;
      }),
      (r.prototype.addAnimator = function (t, e) {
        var n = this.__zr,
          i = this;
        t
          .during(function () {
            i.updateDuringAnimation(e);
          })
          .done(function () {
            var a = i.animators,
              o = J(a, t);
            o >= 0 && a.splice(o, 1);
          }),
          this.animators.push(t),
          n && n.animation.addAnimator(t),
          n && n.wakeUp();
      }),
      (r.prototype.updateDuringAnimation = function (t) {
        this.markRedraw();
      }),
      (r.prototype.stopAnimation = function (t, e) {
        for (var n = this.animators, i = n.length, a = [], o = 0; o < i; o++) {
          var s = n[o];
          !t || t === s.scope ? s.stop(e) : a.push(s);
        }
        return (this.animators = a), this;
      }),
      (r.prototype.animateTo = function (t, e, n) {
        vu(this, t, e, n);
      }),
      (r.prototype.animateFrom = function (t, e, n) {
        vu(this, t, e, n, !0);
      }),
      (r.prototype._transitionState = function (t, e, n, i) {
        for (var a = vu(this, e, n, i), o = 0; o < a.length; o++)
          a[o].__fromStateTransition = t;
      }),
      (r.prototype.getBoundingRect = function () {
        return null;
      }),
      (r.prototype.getPaintRect = function () {
        return null;
      }),
      (r.initDefaultProps = (function () {
        var t = r.prototype;
        (t.type = "element"),
          (t.name = ""),
          (t.ignore =
            t.silent =
            t.isGroup =
            t.draggable =
            t.dragging =
            t.ignoreClip =
            t.__inHover =
              !1),
          (t.__dirty = Qt);
        function e(n, i, a, o) {
          Object.defineProperty(t, n, {
            get: function () {
              if (!this[i]) {
                var u = (this[i] = []);
                s(this, u);
              }
              return this[i];
            },
            set: function (u) {
              (this[a] = u[0]), (this[o] = u[1]), (this[i] = u), s(this, u);
            },
          });
          function s(u, l) {
            Object.defineProperty(l, 0, {
              get: function () {
                return u[a];
              },
              set: function (f) {
                u[a] = f;
              },
            }),
              Object.defineProperty(l, 1, {
                get: function () {
                  return u[o];
                },
                set: function (f) {
                  u[o] = f;
                },
              });
          }
        }
        Object.defineProperty &&
          (e("position", "_legacyPos", "x", "y"),
          e("scale", "_legacyScale", "scaleX", "scaleY"),
          e("origin", "_legacyOrigin", "originX", "originY"));
      })()),
      r
    );
  })();
Ne(Zf, ce);
Ne(Zf, Ca);
function vu(r, t, e, n, i) {
  e = e || {};
  var a = [];
  Vg(r, "", r, t, e, n, a, i);
  var o = a.length,
    s = !1,
    u = e.done,
    l = e.aborted,
    f = function () {
      (s = !0), o--, o <= 0 && (s ? u && u() : l && l());
    },
    h = function () {
      o--, o <= 0 && (s ? u && u() : l && l());
    };
  o || (u && u()),
    a.length > 0 &&
      e.during &&
      a[0].during(function (d, g) {
        e.during(g);
      });
  for (var c = 0; c < a.length; c++) {
    var v = a[c];
    f && v.done(f),
      h && v.aborted(h),
      e.force && v.duration(e.duration),
      v.start(e.easing);
  }
  return a;
}
function cu(r, t, e) {
  for (var n = 0; n < e; n++) r[n] = t[n];
}
function PS(r) {
  return Ht(r[0]);
}
function RS(r, t, e) {
  if (Ht(t[e]))
    if ((Ht(r[e]) || (r[e] = []), jt(t[e]))) {
      var n = t[e].length;
      r[e].length !== n &&
        ((r[e] = new t[e].constructor(n)), cu(r[e], t[e], n));
    } else {
      var i = t[e],
        a = r[e],
        o = i.length;
      if (PS(i))
        for (var s = i[0].length, u = 0; u < o; u++)
          a[u] ? cu(a[u], i[u], s) : (a[u] = Array.prototype.slice.call(i[u]));
      else cu(a, i, o);
      a.length = i.length;
    }
  else r[e] = t[e];
}
function ES(r, t) {
  return r === t || (Ht(r) && Ht(t) && OS(r, t));
}
function OS(r, t) {
  var e = r.length;
  if (e !== t.length) return !1;
  for (var n = 0; n < e; n++) if (r[n] !== t[n]) return !1;
  return !0;
}
function Vg(r, t, e, n, i, a, o, s) {
  for (
    var u = pt(n),
      l = i.duration,
      f = i.delay,
      h = i.additive,
      c = i.setToFinal,
      v = !H(a),
      d = r.animators,
      g = [],
      p = 0;
    p < u.length;
    p++
  ) {
    var y = u[p],
      m = n[y];
    if (m != null && e[y] != null && (v || a[y]))
      if (H(m) && !Ht(m) && !ps(m)) {
        if (t) {
          s || ((e[y] = m), r.updateDuringAnimation(t));
          continue;
        }
        Vg(r, y, e[y], m, i, a && a[y], o, s);
      } else g.push(y);
    else s || ((e[y] = m), r.updateDuringAnimation(t), g.push(y));
  }
  var _ = g.length;
  if (!h && _)
    for (var S = 0; S < d.length; S++) {
      var w = d[S];
      if (w.targetName === t) {
        var x = w.stopTracks(g);
        if (x) {
          var b = J(d, w);
          d.splice(b, 1);
        }
      }
    }
  if (
    (i.force ||
      ((g = xt(g, function (A) {
        return !ES(n[A], e[A]);
      })),
      (_ = g.length)),
    _ > 0 || (i.force && !o.length))
  ) {
    var T = void 0,
      M = void 0,
      D = void 0;
    if (s) {
      (M = {}), c && (T = {});
      for (var S = 0; S < _; S++) {
        var y = g[S];
        (M[y] = e[y]), c ? (T[y] = n[y]) : (e[y] = n[y]);
      }
    } else if (c) {
      D = {};
      for (var S = 0; S < _; S++) {
        var y = g[S];
        (D[y] = Co(e[y])), RS(e, n, y);
      }
    }
    var w = new Wf(
      e,
      !1,
      !1,
      h
        ? xt(d, function (L) {
            return L.targetName === t;
          })
        : null
    );
    (w.targetName = t),
      i.scope && (w.scope = i.scope),
      c && T && w.whenWithKeys(0, T, g),
      D && w.whenWithKeys(0, D, g),
      w.whenWithKeys(l == null ? 500 : l, s ? M : n, g).delay(f || 0),
      r.addAnimator(w, t),
      o.push(w);
  }
}
const Wg = Zf;
var Ug = (function (r) {
  O(t, r);
  function t(e) {
    var n = r.call(this) || this;
    return (n.isGroup = !0), (n._children = []), n.attr(e), n;
  }
  return (
    (t.prototype.childrenRef = function () {
      return this._children;
    }),
    (t.prototype.children = function () {
      return this._children.slice();
    }),
    (t.prototype.childAt = function (e) {
      return this._children[e];
    }),
    (t.prototype.childOfName = function (e) {
      for (var n = this._children, i = 0; i < n.length; i++)
        if (n[i].name === e) return n[i];
    }),
    (t.prototype.childCount = function () {
      return this._children.length;
    }),
    (t.prototype.add = function (e) {
      return (
        e &&
          e !== this &&
          e.parent !== this &&
          (this._children.push(e), this._doAdd(e)),
        this
      );
    }),
    (t.prototype.addBefore = function (e, n) {
      if (e && e !== this && e.parent !== this && n && n.parent === this) {
        var i = this._children,
          a = i.indexOf(n);
        a >= 0 && (i.splice(a, 0, e), this._doAdd(e));
      }
      return this;
    }),
    (t.prototype.replace = function (e, n) {
      var i = J(this._children, e);
      return i >= 0 && this.replaceAt(n, i), this;
    }),
    (t.prototype.replaceAt = function (e, n) {
      var i = this._children,
        a = i[n];
      if (e && e !== this && e.parent !== this && e !== a) {
        (i[n] = e), (a.parent = null);
        var o = this.__zr;
        o && a.removeSelfFromZr(o), this._doAdd(e);
      }
      return this;
    }),
    (t.prototype._doAdd = function (e) {
      e.parent && e.parent.remove(e), (e.parent = this);
      var n = this.__zr;
      n && n !== e.__zr && e.addSelfToZr(n), n && n.refresh();
    }),
    (t.prototype.remove = function (e) {
      var n = this.__zr,
        i = this._children,
        a = J(i, e);
      return a < 0
        ? this
        : (i.splice(a, 1),
          (e.parent = null),
          n && e.removeSelfFromZr(n),
          n && n.refresh(),
          this);
    }),
    (t.prototype.removeAll = function () {
      for (var e = this._children, n = this.__zr, i = 0; i < e.length; i++) {
        var a = e[i];
        n && a.removeSelfFromZr(n), (a.parent = null);
      }
      return (e.length = 0), this;
    }),
    (t.prototype.eachChild = function (e, n) {
      for (var i = this._children, a = 0; a < i.length; a++) {
        var o = i[a];
        e.call(n, o, a);
      }
      return this;
    }),
    (t.prototype.traverse = function (e, n) {
      for (var i = 0; i < this._children.length; i++) {
        var a = this._children[i],
          o = e.call(n, a);
        a.isGroup && !o && a.traverse(e, n);
      }
      return this;
    }),
    (t.prototype.addSelfToZr = function (e) {
      r.prototype.addSelfToZr.call(this, e);
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];
        i.addSelfToZr(e);
      }
    }),
    (t.prototype.removeSelfFromZr = function (e) {
      r.prototype.removeSelfFromZr.call(this, e);
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];
        i.removeSelfFromZr(e);
      }
    }),
    (t.prototype.getBoundingRect = function (e) {
      for (
        var n = new at(0, 0, 0, 0),
          i = e || this._children,
          a = [],
          o = null,
          s = 0;
        s < i.length;
        s++
      ) {
        var u = i[s];
        if (!(u.ignore || u.invisible)) {
          var l = u.getBoundingRect(),
            f = u.getLocalTransform(a);
          f
            ? (at.applyTransform(n, l, f), (o = o || n.clone()), o.union(n))
            : ((o = o || l.clone()), o.union(l));
        }
      }
      return o || n;
    }),
    t
  );
})(Wg);
Ug.prototype.type = "group";
const bt = Ug;
/*!
 * ZRender, a high performance 2d drawing library.
 *
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 *
 * LICENSE
 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
 */ var Lo = {},
  Yg = {};
function kS(r) {
  delete Yg[r];
}
function BS(r) {
  if (!r) return !1;
  if (typeof r == "string") return Yo(r, 1) < Bl;
  if (r.colorStops) {
    for (var t = r.colorStops, e = 0, n = t.length, i = 0; i < n; i++)
      e += Yo(t[i].color, 1);
    return (e /= n), e < Bl;
  }
  return !1;
}
var NS = (function () {
  function r(t, e, n) {
    var i = this;
    (this._sleepAfterStill = 10),
      (this._stillFrameAccum = 0),
      (this._needsRefresh = !0),
      (this._needsRefreshHover = !0),
      (this._darkMode = !1),
      (n = n || {}),
      (this.dom = e),
      (this.id = t);
    var a = new X1(),
      o = n.renderer || "canvas";
    Lo[o] || (o = pt(Lo)[0]),
      (n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect);
    var s = new Lo[o](e, a, n, t),
      u = n.ssr || s.ssrOnly;
    (this.storage = a), (this.painter = s);
    var l =
      !j.node && !j.worker && !u ? new xS(s.getViewportRoot(), s.root) : null;
    (this.handler = new W1(a, s, l, s.root)),
      (this.animation = new cS({
        stage: {
          update: u
            ? null
            : function () {
                return i._flush(!0);
              },
        },
      })),
      u || this.animation.start();
  }
  return (
    (r.prototype.add = function (t) {
      !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
    }),
    (r.prototype.remove = function (t) {
      !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
    }),
    (r.prototype.configLayer = function (t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e),
        this.refresh();
    }),
    (r.prototype.setBackgroundColor = function (t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
        this.refresh(),
        (this._backgroundColor = t),
        (this._darkMode = BS(t));
    }),
    (r.prototype.getBackgroundColor = function () {
      return this._backgroundColor;
    }),
    (r.prototype.setDarkMode = function (t) {
      this._darkMode = t;
    }),
    (r.prototype.isDarkMode = function () {
      return this._darkMode;
    }),
    (r.prototype.refreshImmediately = function (t) {
      t || this.animation.update(!0),
        (this._needsRefresh = !1),
        this.painter.refresh(),
        (this._needsRefresh = !1);
    }),
    (r.prototype.refresh = function () {
      (this._needsRefresh = !0), this.animation.start();
    }),
    (r.prototype.flush = function () {
      this._flush(!1);
    }),
    (r.prototype._flush = function (t) {
      var e,
        n = Gn();
      this._needsRefresh && ((e = !0), this.refreshImmediately(t)),
        this._needsRefreshHover && ((e = !0), this.refreshHoverImmediately());
      var i = Gn();
      e
        ? ((this._stillFrameAccum = 0),
          this.trigger("rendered", { elapsedTime: i - n }))
        : this._sleepAfterStill > 0 &&
          (this._stillFrameAccum++,
          this._stillFrameAccum > this._sleepAfterStill &&
            this.animation.stop());
    }),
    (r.prototype.setSleepAfterStill = function (t) {
      this._sleepAfterStill = t;
    }),
    (r.prototype.wakeUp = function () {
      this.animation.start(), (this._stillFrameAccum = 0);
    }),
    (r.prototype.refreshHover = function () {
      this._needsRefreshHover = !0;
    }),
    (r.prototype.refreshHoverImmediately = function () {
      (this._needsRefreshHover = !1),
        this.painter.refreshHover &&
          this.painter.getType() === "canvas" &&
          this.painter.refreshHover();
    }),
    (r.prototype.resize = function (t) {
      (t = t || {}),
        this.painter.resize(t.width, t.height),
        this.handler.resize();
    }),
    (r.prototype.clearAnimation = function () {
      this.animation.clear();
    }),
    (r.prototype.getWidth = function () {
      return this.painter.getWidth();
    }),
    (r.prototype.getHeight = function () {
      return this.painter.getHeight();
    }),
    (r.prototype.setCursorStyle = function (t) {
      this.handler.setCursorStyle(t);
    }),
    (r.prototype.findHover = function (t, e) {
      return this.handler.findHover(t, e);
    }),
    (r.prototype.on = function (t, e, n) {
      return this.handler.on(t, e, n), this;
    }),
    (r.prototype.off = function (t, e) {
      this.handler.off(t, e);
    }),
    (r.prototype.trigger = function (t, e) {
      this.handler.trigger(t, e);
    }),
    (r.prototype.clear = function () {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof bt && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }),
    (r.prototype.dispose = function () {
      this.animation.stop(),
        this.clear(),
        this.storage.dispose(),
        this.painter.dispose(),
        this.handler.dispose(),
        (this.animation = this.storage = this.painter = this.handler = null),
        kS(this.id);
    }),
    r
  );
})();
function Av(r, t) {
  var e = new NS(mg(), r, t);
  return (Yg[e.id] = e), e;
}
function FS(r, t) {
  Lo[r] = t;
}
var Lv = 1e-4,
  $g = 20;
function zS(r) {
  return r.replace(/^\s+|\s+$/g, "");
}
function Et(r, t, e, n) {
  var i = t[0],
    a = t[1],
    o = e[0],
    s = e[1],
    u = a - i,
    l = s - o;
  if (u === 0) return l === 0 ? o : (o + s) / 2;
  if (n)
    if (u > 0) {
      if (r <= i) return o;
      if (r >= a) return s;
    } else {
      if (r >= i) return o;
      if (r <= a) return s;
    }
  else {
    if (r === i) return o;
    if (r === a) return s;
  }
  return ((r - i) / u) * l + o;
}
function Ct(r, t) {
  switch (r) {
    case "center":
    case "middle":
      r = "50%";
      break;
    case "left":
    case "top":
      r = "0%";
      break;
    case "right":
    case "bottom":
      r = "100%";
      break;
  }
  return G(r)
    ? zS(r).match(/%$/)
      ? (parseFloat(r) / 100) * t
      : parseFloat(r)
    : r == null
    ? NaN
    : +r;
}
function wt(r, t, e) {
  return (
    t == null && (t = 10),
    (t = Math.min(Math.max(0, t), $g)),
    (r = (+r).toFixed(t)),
    e ? r : +r
  );
}
function zi(r) {
  return (
    r.sort(function (t, e) {
      return t - e;
    }),
    r
  );
}
function Ue(r) {
  if (((r = +r), isNaN(r))) return 0;
  if (r > 1e-14) {
    for (var t = 1, e = 0; e < 15; e++, t *= 10)
      if (Math.round(r * t) / t === r) return e;
  }
  return GS(r);
}
function GS(r) {
  var t = r.toString().toLowerCase(),
    e = t.indexOf("e"),
    n = e > 0 ? +t.slice(e + 1) : 0,
    i = e > 0 ? e : t.length,
    a = t.indexOf("."),
    o = a < 0 ? 0 : i - 1 - a;
  return Math.max(0, o - n);
}
function Zg(r, t) {
  var e = Math.log,
    n = Math.LN10,
    i = Math.floor(e(r[1] - r[0]) / n),
    a = Math.round(e(Math.abs(t[1] - t[0])) / n),
    o = Math.min(Math.max(-i + a, 0), 20);
  return isFinite(o) ? o : 20;
}
function HS(r, t) {
  var e = Math.max(Ue(r), Ue(t)),
    n = r + t;
  return e > $g ? n : wt(n, e);
}
function Xg(r) {
  var t = Math.PI * 2;
  return ((r % t) + t) % t;
}
function Zo(r) {
  return r > -Lv && r < Lv;
}
var VS =
  /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function Xe(r) {
  if (r instanceof Date) return r;
  if (G(r)) {
    var t = VS.exec(r);
    if (!t) return new Date(NaN);
    if (t[8]) {
      var e = +t[4] || 0;
      return (
        t[8].toUpperCase() !== "Z" && (e -= +t[8].slice(0, 3)),
        new Date(
          Date.UTC(
            +t[1],
            +(t[2] || 1) - 1,
            +t[3] || 1,
            e,
            +(t[5] || 0),
            +t[6] || 0,
            t[7] ? +t[7].substring(0, 3) : 0
          )
        )
      );
    } else
      return new Date(
        +t[1],
        +(t[2] || 1) - 1,
        +t[3] || 1,
        +t[4] || 0,
        +(t[5] || 0),
        +t[6] || 0,
        t[7] ? +t[7].substring(0, 3) : 0
      );
  } else if (r == null) return new Date(NaN);
  return new Date(Math.round(r));
}
function WS(r) {
  return Math.pow(10, Xf(r));
}
function Xf(r) {
  if (r === 0) return 0;
  var t = Math.floor(Math.log(r) / Math.LN10);
  return r / Math.pow(10, t) >= 10 && t++, t;
}
function qg(r, t) {
  var e = Xf(r),
    n = Math.pow(10, e),
    i = r / n,
    a;
  return (
    t
      ? i < 1.5
        ? (a = 1)
        : i < 2.5
        ? (a = 2)
        : i < 4
        ? (a = 3)
        : i < 7
        ? (a = 5)
        : (a = 10)
      : i < 1
      ? (a = 1)
      : i < 2
      ? (a = 2)
      : i < 3
      ? (a = 3)
      : i < 5
      ? (a = 5)
      : (a = 10),
    (r = a * n),
    e >= -20 ? +r.toFixed(e < 0 ? -e : 0) : r
  );
}
function xr(r) {
  var t = parseFloat(r);
  return t == r && (t !== 0 || !G(r) || r.indexOf("x") <= 0) ? t : NaN;
}
function US(r) {
  return !isNaN(xr(r));
}
function Kg() {
  return Math.round(Math.random() * 9);
}
function Qg(r, t) {
  return t === 0 ? r : Qg(t, r % t);
}
function Iv(r, t) {
  return r == null ? t : t == null ? r : (r * t) / Qg(r, t);
}
function et(r) {
  throw new Error(r);
}
function Pv(r, t, e) {
  return (t - r) * e + r;
}
var Jg = "series\0",
  jg = "\0_ec_\0";
function _t(r) {
  return r instanceof Array ? r : r == null ? [] : [r];
}
function Rv(r, t, e) {
  if (r) {
    (r[t] = r[t] || {}),
      (r.emphasis = r.emphasis || {}),
      (r.emphasis[t] = r.emphasis[t] || {});
    for (var n = 0, i = e.length; n < i; n++) {
      var a = e[n];
      !r.emphasis[t].hasOwnProperty(a) &&
        r[t].hasOwnProperty(a) &&
        (r.emphasis[t][a] = r[t][a]);
    }
  }
}
var Ev = [
  "fontStyle",
  "fontWeight",
  "fontSize",
  "fontFamily",
  "rich",
  "tag",
  "color",
  "textBorderColor",
  "textBorderWidth",
  "width",
  "height",
  "lineHeight",
  "align",
  "verticalAlign",
  "baseline",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "textShadowColor",
  "textShadowBlur",
  "textShadowOffsetX",
  "textShadowOffsetY",
  "backgroundColor",
  "borderColor",
  "borderWidth",
  "borderRadius",
  "padding",
];
function Ma(r) {
  return H(r) && !N(r) && !(r instanceof Date) ? r.value : r;
}
function YS(r) {
  return H(r) && !(r instanceof Array);
}
function $S(r, t, e) {
  var n = e === "normalMerge",
    i = e === "replaceMerge",
    a = e === "replaceAll";
  (r = r || []), (t = (t || []).slice());
  var o = W();
  C(t, function (u, l) {
    if (!H(u)) {
      t[l] = null;
      return;
    }
  });
  var s = ZS(r, o, e);
  return (
    (n || i) && XS(s, r, o, t),
    n && qS(s, t),
    n || i ? KS(s, t, i) : a && QS(s, t),
    JS(s),
    s
  );
}
function ZS(r, t, e) {
  var n = [];
  if (e === "replaceAll") return n;
  for (var i = 0; i < r.length; i++) {
    var a = r[i];
    a && a.id != null && t.set(a.id, i),
      n.push({
        existing: e === "replaceMerge" || oa(a) ? null : a,
        newOption: null,
        keyInfo: null,
        brandNew: null,
      });
  }
  return n;
}
function XS(r, t, e, n) {
  C(n, function (i, a) {
    if (!(!i || i.id == null)) {
      var o = Yi(i.id),
        s = e.get(o);
      if (s != null) {
        var u = r[s];
        ke(!u.newOption, 'Duplicated option on id "' + o + '".'),
          (u.newOption = i),
          (u.existing = t[s]),
          (n[a] = null);
      }
    }
  });
}
function qS(r, t) {
  C(t, function (e, n) {
    if (!(!e || e.name == null))
      for (var i = 0; i < r.length; i++) {
        var a = r[i].existing;
        if (
          !r[i].newOption &&
          a &&
          (a.id == null || e.id == null) &&
          !oa(e) &&
          !oa(a) &&
          ty("name", a, e)
        ) {
          (r[i].newOption = e), (t[n] = null);
          return;
        }
      }
  });
}
function KS(r, t, e) {
  C(t, function (n) {
    if (!!n) {
      for (
        var i, a = 0;
        (i = r[a]) &&
        (i.newOption ||
          oa(i.existing) ||
          (i.existing && n.id != null && !ty("id", n, i.existing)));

      )
        a++;
      i
        ? ((i.newOption = n), (i.brandNew = e))
        : r.push({ newOption: n, brandNew: e, existing: null, keyInfo: null }),
        a++;
    }
  });
}
function QS(r, t) {
  C(t, function (e) {
    r.push({ newOption: e, brandNew: !0, existing: null, keyInfo: null });
  });
}
function JS(r) {
  var t = W();
  C(r, function (e) {
    var n = e.existing;
    n && t.set(n.id, e);
  }),
    C(r, function (e) {
      var n = e.newOption;
      ke(
        !n || n.id == null || !t.get(n.id) || t.get(n.id) === e,
        "id duplicates: " + (n && n.id)
      ),
        n && n.id != null && t.set(n.id, e),
        !e.keyInfo && (e.keyInfo = {});
    }),
    C(r, function (e, n) {
      var i = e.existing,
        a = e.newOption,
        o = e.keyInfo;
      if (!!H(a)) {
        if (((o.name = a.name != null ? Yi(a.name) : i ? i.name : Jg + n), i))
          o.id = Yi(i.id);
        else if (a.id != null) o.id = Yi(a.id);
        else {
          var s = 0;
          do o.id = "\0" + o.name + "\0" + s++;
          while (t.get(o.id));
        }
        t.set(o.id, e);
      }
    });
}
function ty(r, t, e) {
  var n = Ee(t[r], null),
    i = Ee(e[r], null);
  return n != null && i != null && n === i;
}
function Yi(r) {
  return Ee(r, "");
}
function Ee(r, t) {
  return r == null ? t : G(r) ? r : ft(r) || xl(r) ? r + "" : t;
}
function qf(r) {
  var t = r.name;
  return !!(t && t.indexOf(Jg));
}
function oa(r) {
  return r && r.id != null && Yi(r.id).indexOf(jg) === 0;
}
function jS(r) {
  return jg + r;
}
function tx(r, t, e) {
  C(r, function (n) {
    var i = n.newOption;
    H(i) &&
      ((n.keyInfo.mainType = t), (n.keyInfo.subType = ex(t, i, n.existing, e)));
  });
}
function ex(r, t, e, n) {
  var i = t.type ? t.type : e ? e.subType : n.determineSubType(r, t);
  return i;
}
function ln(r, t) {
  if (t.dataIndexInside != null) return t.dataIndexInside;
  if (t.dataIndex != null)
    return N(t.dataIndex)
      ? z(t.dataIndex, function (e) {
          return r.indexOfRawIndex(e);
        })
      : r.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return N(t.name)
      ? z(t.name, function (e) {
          return r.indexOfName(e);
        })
      : r.indexOfName(t.name);
}
function gt() {
  var r = "__ec_inner_" + rx++;
  return function (t) {
    return t[r] || (t[r] = {});
  };
}
var rx = Kg();
function $i(r, t, e) {
  var n = Kf(t, e),
    i = n.mainTypeSpecified,
    a = n.queryOptionMap,
    o = n.others,
    s = o,
    u = e ? e.defaultMainType : null;
  return (
    !i && u && a.set(u, {}),
    a.each(function (l, f) {
      var h = Da(r, f, l, {
        useDefault: u === f,
        enableAll: e && e.enableAll != null ? e.enableAll : !0,
        enableNone: e && e.enableNone != null ? e.enableNone : !0,
      });
      (s[f + "Models"] = h.models), (s[f + "Model"] = h.models[0]);
    }),
    s
  );
}
function Kf(r, t) {
  var e;
  if (G(r)) {
    var n = {};
    (n[r + "Index"] = 0), (e = n);
  } else e = r;
  var i = W(),
    a = {},
    o = !1;
  return (
    C(e, function (s, u) {
      if (u === "dataIndex" || u === "dataIndexInside") {
        a[u] = s;
        return;
      }
      var l = u.match(/^(\w+)(Index|Id|Name)$/) || [],
        f = l[1],
        h = (l[2] || "").toLowerCase();
      if (
        !(!f || !h || (t && t.includeMainTypes && J(t.includeMainTypes, f) < 0))
      ) {
        o = o || !!f;
        var c = i.get(f) || i.set(f, {});
        c[h] = s;
      }
    }),
    { mainTypeSpecified: o, queryOptionMap: i, others: a }
  );
}
var zt = { useDefault: !0, enableAll: !1, enableNone: !1 },
  nx = { useDefault: !1, enableAll: !0, enableNone: !0 };
function Da(r, t, e, n) {
  n = n || zt;
  var i = e.index,
    a = e.id,
    o = e.name,
    s = { models: null, specified: i != null || a != null || o != null };
  if (!s.specified) {
    var u = void 0;
    return (s.models = n.useDefault && (u = r.getComponent(t)) ? [u] : []), s;
  }
  return i === "none" || i === !1
    ? (ke(
        n.enableNone,
        '`"none"` or `false` is not a valid value on index option.'
      ),
      (s.models = []),
      s)
    : (i === "all" &&
        (ke(n.enableAll, '`"all"` is not a valid value on index option.'),
        (i = a = o = null)),
      (s.models = r.queryComponents({ mainType: t, index: i, id: a, name: o })),
      s);
}
function ey(r, t, e) {
  r.setAttribute ? r.setAttribute(t, e) : (r[t] = e);
}
function ix(r, t) {
  return r.getAttribute ? r.getAttribute(t) : r[t];
}
function ax(r) {
  return r === "auto" ? (j.domSupported ? "html" : "richText") : r || "html";
}
function ry(r, t, e, n, i) {
  var a = t == null || t === "auto";
  if (n == null) return n;
  if (ft(n)) {
    var o = Pv(e || 0, n, i);
    return wt(o, a ? Math.max(Ue(e || 0), Ue(n)) : t);
  } else {
    if (G(n)) return i < 1 ? e : n;
    for (
      var s = [], u = e, l = n, f = Math.max(u ? u.length : 0, l.length), h = 0;
      h < f;
      ++h
    ) {
      var c = r.getDimensionInfo(h);
      if (c && c.type === "ordinal") s[h] = (i < 1 && u ? u : l)[h];
      else {
        var v = u && u[h] ? u[h] : 0,
          d = l[h],
          o = Pv(v, d, i);
        s[h] = wt(o, a ? Math.max(Ue(v), Ue(d)) : t);
      }
    }
    return s;
  }
}
var ox = ".",
  Pr = "___EC__COMPONENT__CONTAINER___",
  ny = "___EC__EXTENDED_CLASS___";
function Re(r) {
  var t = { main: "", sub: "" };
  if (r) {
    var e = r.split(ox);
    (t.main = e[0] || ""), (t.sub = e[1] || "");
  }
  return t;
}
function sx(r) {
  ke(
    /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r),
    'componentType "' + r + '" illegal'
  );
}
function ux(r) {
  return !!(r && r[ny]);
}
function Qf(r, t) {
  (r.$constructor = r),
    (r.extend = function (e) {
      var n = this,
        i;
      return (
        lx(n)
          ? (i = (function (a) {
              O(o, a);
              function o() {
                return a.apply(this, arguments) || this;
              }
              return o;
            })(n))
          : ((i = function () {
              (e.$constructor || n).apply(this, arguments);
            }),
            v1(i, this)),
        k(i.prototype, e),
        (i[ny] = !0),
        (i.extend = this.extend),
        (i.superCall = vx),
        (i.superApply = cx),
        (i.superClass = n),
        i
      );
    });
}
function lx(r) {
  return U(r) && /^class\s/.test(Function.prototype.toString.call(r));
}
function iy(r, t) {
  r.extend = t.extend;
}
var fx = Math.round(Math.random() * 10);
function hx(r) {
  var t = ["__\0is_clz", fx++].join("_");
  (r.prototype[t] = !0),
    (r.isInstance = function (e) {
      return !!(e && e[t]);
    });
}
function vx(r, t) {
  for (var e = [], n = 2; n < arguments.length; n++) e[n - 2] = arguments[n];
  return this.superClass.prototype[t].apply(r, e);
}
function cx(r, t, e) {
  return this.superClass.prototype[t].apply(r, e);
}
function Ss(r) {
  var t = {};
  (r.registerClass = function (n) {
    var i = n.type || n.prototype.type;
    if (i) {
      sx(i), (n.prototype.type = i);
      var a = Re(i);
      if (!a.sub) t[a.main] = n;
      else if (a.sub !== Pr) {
        var o = e(a);
        o[a.sub] = n;
      }
    }
    return n;
  }),
    (r.getClass = function (n, i, a) {
      var o = t[n];
      if ((o && o[Pr] && (o = i ? o[i] : null), a && !o))
        throw new Error(
          i
            ? "Component " + n + "." + (i || "") + " is used but not imported."
            : n + ".type should be specified."
        );
      return o;
    }),
    (r.getClassesByMainType = function (n) {
      var i = Re(n),
        a = [],
        o = t[i.main];
      return (
        o && o[Pr]
          ? C(o, function (s, u) {
              u !== Pr && a.push(s);
            })
          : a.push(o),
        a
      );
    }),
    (r.hasClass = function (n) {
      var i = Re(n);
      return !!t[i.main];
    }),
    (r.getAllClassMainTypes = function () {
      var n = [];
      return (
        C(t, function (i, a) {
          n.push(a);
        }),
        n
      );
    }),
    (r.hasSubTypes = function (n) {
      var i = Re(n),
        a = t[i.main];
      return a && a[Pr];
    });
  function e(n) {
    var i = t[n.main];
    return (!i || !i[Pr]) && ((i = t[n.main] = {}), (i[Pr] = !0)), i;
  }
}
function sa(r, t) {
  for (var e = 0; e < r.length; e++) r[e][1] || (r[e][1] = r[e][0]);
  return (
    (t = t || !1),
    function (n, i, a) {
      for (var o = {}, s = 0; s < r.length; s++) {
        var u = r[s][1];
        if (!((i && J(i, u) >= 0) || (a && J(a, u) < 0))) {
          var l = n.getShallow(u, t);
          l != null && (o[r[s][0]] = l);
        }
      }
      return o;
    }
  );
}
var dx = [
    ["fill", "color"],
    ["shadowBlur"],
    ["shadowOffsetX"],
    ["shadowOffsetY"],
    ["opacity"],
    ["shadowColor"],
  ],
  px = sa(dx),
  gx = (function () {
    function r() {}
    return (
      (r.prototype.getAreaStyle = function (t, e) {
        return px(this, t, e);
      }),
      r
    );
  })(),
  Gl = new Ta(50);
function yx(r) {
  if (typeof r == "string") {
    var t = Gl.get(r);
    return t && t.image;
  } else return r;
}
function ay(r, t, e, n, i) {
  if (r)
    if (typeof r == "string") {
      if ((t && t.__zrImageSrc === r) || !e) return t;
      var a = Gl.get(r),
        o = { hostEl: e, cb: n, cbPayload: i };
      if (a) (t = a.image), !xs(t) && a.pending.push(o);
      else {
        var s = dn.loadImage(r, Ov, Ov);
        (s.__zrImageSrc = r),
          Gl.put(r, (s.__cachedImgObj = { image: s, pending: [o] }));
      }
      return t;
    } else return r;
  else return t;
}
function Ov() {
  var r = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < r.pending.length; t++) {
    var e = r.pending[t],
      n = e.cb;
    n && n(this, e.cbPayload), e.hostEl.dirty();
  }
  r.pending.length = 0;
}
function xs(r) {
  return r && r.width && r.height;
}
var du = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function mx(r, t, e, n, i) {
  if (!t) return "";
  var a = (r + "").split(`
`);
  i = oy(t, e, n, i);
  for (var o = 0, s = a.length; o < s; o++) a[o] = sy(a[o], i);
  return a.join(`
`);
}
function oy(r, t, e, n) {
  n = n || {};
  var i = k({}, n);
  (i.font = t), (e = nt(e, "...")), (i.maxIterations = nt(n.maxIterations, 2));
  var a = (i.minChar = nt(n.minChar, 0));
  i.cnCharWidth = Jt("\u56FD", t);
  var o = (i.ascCharWidth = Jt("a", t));
  i.placeholder = nt(n.placeholder, "");
  for (var s = (r = Math.max(0, r - 1)), u = 0; u < a && s >= o; u++) s -= o;
  var l = Jt(e, t);
  return (
    l > s && ((e = ""), (l = 0)),
    (s = r - l),
    (i.ellipsis = e),
    (i.ellipsisWidth = l),
    (i.contentWidth = s),
    (i.containerWidth = r),
    i
  );
}
function sy(r, t) {
  var e = t.containerWidth,
    n = t.font,
    i = t.contentWidth;
  if (!e) return "";
  var a = Jt(r, n);
  if (a <= e) return r;
  for (var o = 0; ; o++) {
    if (a <= i || o >= t.maxIterations) {
      r += t.ellipsis;
      break;
    }
    var s =
      o === 0
        ? _x(r, i, t.ascCharWidth, t.cnCharWidth)
        : a > 0
        ? Math.floor((r.length * i) / a)
        : 0;
    (r = r.substr(0, s)), (a = Jt(r, n));
  }
  return r === "" && (r = t.placeholder), r;
}
function _x(r, t, e, n) {
  for (var i = 0, a = 0, o = r.length; a < o && i < t; a++) {
    var s = r.charCodeAt(a);
    i += 0 <= s && s <= 127 ? e : n;
  }
  return a;
}
function Sx(r, t) {
  r != null && (r += "");
  var e = t.overflow,
    n = t.padding,
    i = t.font,
    a = e === "truncate",
    o = $f(i),
    s = nt(t.lineHeight, o),
    u = !!t.backgroundColor,
    l = t.lineOverflow === "truncate",
    f = t.width,
    h;
  f != null && (e === "break" || e === "breakAll")
    ? (h = r ? uy(r, t.font, f, e === "breakAll", 0).lines : [])
    : (h = r
        ? r.split(`
`)
        : []);
  var c = h.length * s,
    v = nt(t.height, c);
  if (c > v && l) {
    var d = Math.floor(v / s);
    h = h.slice(0, d);
  }
  if (r && a && f != null)
    for (
      var g = oy(f, i, t.ellipsis, {
          minChar: t.truncateMinChar,
          placeholder: t.placeholder,
        }),
        p = 0;
      p < h.length;
      p++
    )
      h[p] = sy(h[p], g);
  for (var y = v, m = 0, p = 0; p < h.length; p++) m = Math.max(Jt(h[p], i), m);
  f == null && (f = m);
  var _ = m;
  return (
    n && ((y += n[0] + n[2]), (_ += n[1] + n[3]), (f += n[1] + n[3])),
    u && (_ = f),
    {
      lines: h,
      height: v,
      outerWidth: _,
      outerHeight: y,
      lineHeight: s,
      calculatedLineHeight: o,
      contentWidth: m,
      contentHeight: c,
      width: f,
    }
  );
}
var xx = (function () {
    function r() {}
    return r;
  })(),
  kv = (function () {
    function r(t) {
      (this.tokens = []), t && (this.tokens = t);
    }
    return r;
  })(),
  bx = (function () {
    function r() {
      (this.width = 0),
        (this.height = 0),
        (this.contentWidth = 0),
        (this.contentHeight = 0),
        (this.outerWidth = 0),
        (this.outerHeight = 0),
        (this.lines = []);
    }
    return r;
  })();
function Tx(r, t) {
  var e = new bx();
  if ((r != null && (r += ""), !r)) return e;
  for (
    var n = t.width,
      i = t.height,
      a = t.overflow,
      o =
        (a === "break" || a === "breakAll") && n != null
          ? { width: n, accumWidth: 0, breakAll: a === "breakAll" }
          : null,
      s = (du.lastIndex = 0),
      u;
    (u = du.exec(r)) != null;

  ) {
    var l = u.index;
    l > s && pu(e, r.substring(s, l), t, o),
      pu(e, u[2], t, o, u[1]),
      (s = du.lastIndex);
  }
  s < r.length && pu(e, r.substring(s, r.length), t, o);
  var f = [],
    h = 0,
    c = 0,
    v = t.padding,
    d = a === "truncate",
    g = t.lineOverflow === "truncate";
  function p(F, B, $) {
    (F.width = B), (F.lineHeight = $), (h += $), (c = Math.max(c, B));
  }
  t: for (var y = 0; y < e.lines.length; y++) {
    for (var m = e.lines[y], _ = 0, S = 0, w = 0; w < m.tokens.length; w++) {
      var x = m.tokens[w],
        b = (x.styleName && t.rich[x.styleName]) || {},
        T = (x.textPadding = b.padding),
        M = T ? T[1] + T[3] : 0,
        D = (x.font = b.font || t.font);
      x.contentHeight = $f(D);
      var A = nt(b.height, x.contentHeight);
      if (
        ((x.innerHeight = A),
        T && (A += T[0] + T[2]),
        (x.height = A),
        (x.lineHeight = xo(b.lineHeight, t.lineHeight, A)),
        (x.align = (b && b.align) || t.align),
        (x.verticalAlign = (b && b.verticalAlign) || "middle"),
        g && i != null && h + x.lineHeight > i)
      ) {
        w > 0
          ? ((m.tokens = m.tokens.slice(0, w)),
            p(m, S, _),
            (e.lines = e.lines.slice(0, y + 1)))
          : (e.lines = e.lines.slice(0, y));
        break t;
      }
      var L = b.width,
        I = L == null || L === "auto";
      if (typeof L == "string" && L.charAt(L.length - 1) === "%")
        (x.percentWidth = L), f.push(x), (x.contentWidth = Jt(x.text, D));
      else {
        if (I) {
          var P = b.backgroundColor,
            E = P && P.image;
          E &&
            ((E = yx(E)),
            xs(E) && (x.width = Math.max(x.width, (E.width * A) / E.height)));
        }
        var R = d && n != null ? n - S : null;
        R != null && R < x.width
          ? !I || R < M
            ? ((x.text = ""), (x.width = x.contentWidth = 0))
            : ((x.text = mx(x.text, R - M, D, t.ellipsis, {
                minChar: t.truncateMinChar,
              })),
              (x.width = x.contentWidth = Jt(x.text, D)))
          : (x.contentWidth = Jt(x.text, D));
      }
      (x.width += M), (S += x.width), b && (_ = Math.max(_, x.lineHeight));
    }
    p(m, S, _);
  }
  (e.outerWidth = e.width = nt(n, c)),
    (e.outerHeight = e.height = nt(i, h)),
    (e.contentHeight = h),
    (e.contentWidth = c),
    v && ((e.outerWidth += v[1] + v[3]), (e.outerHeight += v[0] + v[2]));
  for (var y = 0; y < f.length; y++) {
    var x = f[y],
      V = x.percentWidth;
    x.width = (parseInt(V, 10) / 100) * e.width;
  }
  return e;
}
function pu(r, t, e, n, i) {
  var a = t === "",
    o = (i && e.rich[i]) || {},
    s = r.lines,
    u = o.font || e.font,
    l = !1,
    f,
    h;
  if (n) {
    var c = o.padding,
      v = c ? c[1] + c[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = un(o.width, n.width) + v;
      s.length > 0 &&
        d + n.accumWidth > n.width &&
        ((f = t.split(`
`)),
        (l = !0)),
        (n.accumWidth = d);
    } else {
      var g = uy(t, u, n.width, n.breakAll, n.accumWidth);
      (n.accumWidth = g.accumWidth + v), (h = g.linesWidths), (f = g.lines);
    }
  } else
    f = t.split(`
`);
  for (var p = 0; p < f.length; p++) {
    var y = f[p],
      m = new xx();
    if (
      ((m.styleName = i),
      (m.text = y),
      (m.isLineHolder = !y && !a),
      typeof o.width == "number"
        ? (m.width = o.width)
        : (m.width = h ? h[p] : Jt(y, u)),
      !p && !l)
    ) {
      var _ = (s[s.length - 1] || (s[0] = new kv())).tokens,
        S = _.length;
      S === 1 && _[0].isLineHolder ? (_[0] = m) : (y || !S || a) && _.push(m);
    } else s.push(new kv([m]));
  }
}
function Cx(r) {
  var t = r.charCodeAt(0);
  return t >= 33 && t <= 383;
}
var Mx = oi(
  ",&?/;] ".split(""),
  function (r, t) {
    return (r[t] = !0), r;
  },
  {}
);
function Dx(r) {
  return Cx(r) ? !!Mx[r] : !0;
}
function uy(r, t, e, n, i) {
  for (
    var a = [], o = [], s = "", u = "", l = 0, f = 0, h = 0;
    h < r.length;
    h++
  ) {
    var c = r.charAt(h);
    if (
      c ===
      `
`
    ) {
      u && ((s += u), (f += l)),
        a.push(s),
        o.push(f),
        (s = ""),
        (u = ""),
        (l = 0),
        (f = 0);
      continue;
    }
    var v = Jt(c, t),
      d = n ? !1 : !Dx(c);
    if (a.length ? f + v > e : i + f + v > e) {
      f
        ? (s || u) &&
          (d
            ? (s || ((s = u), (u = ""), (l = 0), (f = l)),
              a.push(s),
              o.push(f - l),
              (u += c),
              (l += v),
              (s = ""),
              (f = l))
            : (u && ((s += u), (u = ""), (l = 0)),
              a.push(s),
              o.push(f),
              (s = c),
              (f = v)))
        : d
        ? (a.push(u), o.push(l), (u = c), (l = v))
        : (a.push(c), o.push(v));
      continue;
    }
    (f += v),
      d ? ((u += c), (l += v)) : (u && ((s += u), (u = ""), (l = 0)), (s += c));
  }
  return (
    !a.length && !s && ((s = r), (u = ""), (l = 0)),
    u && (s += u),
    s && (a.push(s), o.push(f)),
    a.length === 1 && (f += i),
    { accumWidth: f, lines: a, linesWidths: o }
  );
}
var Hl = "__zr_style_" + Math.round(Math.random() * 10),
  rn = {
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: "#000",
    opacity: 1,
    blend: "source-over",
  },
  ws = {
    style: {
      shadowBlur: !0,
      shadowOffsetX: !0,
      shadowOffsetY: !0,
      shadowColor: !0,
      opacity: !0,
    },
  };
rn[Hl] = !0;
var Bv = ["z", "z2", "invisible"],
  Ax = ["invisible"],
  Lx = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype._init = function (e) {
        for (var n = pt(e), i = 0; i < n.length; i++) {
          var a = n[i];
          a === "style"
            ? this.useStyle(e[a])
            : r.prototype.attrKV.call(this, a, e[a]);
        }
        this.style || this.useStyle({});
      }),
      (t.prototype.beforeBrush = function () {}),
      (t.prototype.afterBrush = function () {}),
      (t.prototype.innerBeforeBrush = function () {}),
      (t.prototype.innerAfterBrush = function () {}),
      (t.prototype.shouldBePainted = function (e, n, i, a) {
        var o = this.transform;
        if (
          this.ignore ||
          this.invisible ||
          this.style.opacity === 0 ||
          (this.culling && Ix(this, e, n)) ||
          (o && !o[0] && !o[3])
        )
          return !1;
        if (i && this.__clipPaths) {
          for (var s = 0; s < this.__clipPaths.length; ++s)
            if (this.__clipPaths[s].isZeroArea()) return !1;
        }
        if (a && this.parent)
          for (var u = this.parent; u; ) {
            if (u.ignore) return !1;
            u = u.parent;
          }
        return !0;
      }),
      (t.prototype.contain = function (e, n) {
        return this.rectContain(e, n);
      }),
      (t.prototype.traverse = function (e, n) {
        e.call(n, this);
      }),
      (t.prototype.rectContain = function (e, n) {
        var i = this.transformCoordToLocal(e, n),
          a = this.getBoundingRect();
        return a.contain(i[0], i[1]);
      }),
      (t.prototype.getPaintRect = function () {
        var e = this._paintRect;
        if (!this._paintRect || this.__dirty) {
          var n = this.transform,
            i = this.getBoundingRect(),
            a = this.style,
            o = a.shadowBlur || 0,
            s = a.shadowOffsetX || 0,
            u = a.shadowOffsetY || 0;
          (e = this._paintRect || (this._paintRect = new at(0, 0, 0, 0))),
            n ? at.applyTransform(e, i, n) : e.copy(i),
            (o || s || u) &&
              ((e.width += o * 2 + Math.abs(s)),
              (e.height += o * 2 + Math.abs(u)),
              (e.x = Math.min(e.x, e.x + s - o)),
              (e.y = Math.min(e.y, e.y + u - o)));
          var l = this.dirtyRectTolerance;
          e.isZero() ||
            ((e.x = Math.floor(e.x - l)),
            (e.y = Math.floor(e.y - l)),
            (e.width = Math.ceil(e.width + 1 + l * 2)),
            (e.height = Math.ceil(e.height + 1 + l * 2)));
        }
        return e;
      }),
      (t.prototype.setPrevPaintRect = function (e) {
        e
          ? ((this._prevPaintRect = this._prevPaintRect || new at(0, 0, 0, 0)),
            this._prevPaintRect.copy(e))
          : (this._prevPaintRect = null);
      }),
      (t.prototype.getPrevPaintRect = function () {
        return this._prevPaintRect;
      }),
      (t.prototype.animateStyle = function (e) {
        return this.animate("style", e);
      }),
      (t.prototype.updateDuringAnimation = function (e) {
        e === "style" ? this.dirtyStyle() : this.markRedraw();
      }),
      (t.prototype.attrKV = function (e, n) {
        e !== "style"
          ? r.prototype.attrKV.call(this, e, n)
          : this.style
          ? this.setStyle(n)
          : this.useStyle(n);
      }),
      (t.prototype.setStyle = function (e, n) {
        return (
          typeof e == "string" ? (this.style[e] = n) : k(this.style, e),
          this.dirtyStyle(),
          this
        );
      }),
      (t.prototype.dirtyStyle = function (e) {
        e || this.markRedraw(),
          (this.__dirty |= Bi),
          this._rect && (this._rect = null);
      }),
      (t.prototype.dirty = function () {
        this.dirtyStyle();
      }),
      (t.prototype.styleChanged = function () {
        return !!(this.__dirty & Bi);
      }),
      (t.prototype.styleUpdated = function () {
        this.__dirty &= ~Bi;
      }),
      (t.prototype.createStyle = function (e) {
        return gs(rn, e);
      }),
      (t.prototype.useStyle = function (e) {
        e[Hl] || (e = this.createStyle(e)),
          this.__inHover ? (this.__hoverStyle = e) : (this.style = e),
          this.dirtyStyle();
      }),
      (t.prototype.isStyleObject = function (e) {
        return e[Hl];
      }),
      (t.prototype._innerSaveToNormal = function (e) {
        r.prototype._innerSaveToNormal.call(this, e);
        var n = this._normalState;
        e.style &&
          !n.style &&
          (n.style = this._mergeStyle(this.createStyle(), this.style)),
          this._savePrimaryToNormal(e, n, Bv);
      }),
      (t.prototype._applyStateObj = function (e, n, i, a, o, s) {
        r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
        var u = !(n && a),
          l;
        if (
          (n && n.style
            ? o
              ? a
                ? (l = n.style)
                : ((l = this._mergeStyle(this.createStyle(), i.style)),
                  this._mergeStyle(l, n.style))
              : ((l = this._mergeStyle(
                  this.createStyle(),
                  a ? this.style : i.style
                )),
                this._mergeStyle(l, n.style))
            : u && (l = i.style),
          l)
        )
          if (o) {
            var f = this.style;
            if (((this.style = this.createStyle(u ? {} : f)), u))
              for (var h = pt(f), c = 0; c < h.length; c++) {
                var v = h[c];
                v in l && ((l[v] = l[v]), (this.style[v] = f[v]));
              }
            for (var d = pt(l), c = 0; c < d.length; c++) {
              var v = d[c];
              this.style[v] = this.style[v];
            }
            this._transitionState(
              e,
              { style: l },
              s,
              this.getAnimationStyleProps()
            );
          } else this.useStyle(l);
        for (var g = this.__inHover ? Ax : Bv, c = 0; c < g.length; c++) {
          var v = g[c];
          n && n[v] != null
            ? (this[v] = n[v])
            : u && i[v] != null && (this[v] = i[v]);
        }
      }),
      (t.prototype._mergeStates = function (e) {
        for (
          var n = r.prototype._mergeStates.call(this, e), i, a = 0;
          a < e.length;
          a++
        ) {
          var o = e[a];
          o.style && ((i = i || {}), this._mergeStyle(i, o.style));
        }
        return i && (n.style = i), n;
      }),
      (t.prototype._mergeStyle = function (e, n) {
        return k(e, n), e;
      }),
      (t.prototype.getAnimationStyleProps = function () {
        return ws;
      }),
      (t.initDefaultProps = (function () {
        var e = t.prototype;
        (e.type = "displayable"),
          (e.invisible = !1),
          (e.z = 0),
          (e.z2 = 0),
          (e.zlevel = 0),
          (e.culling = !1),
          (e.cursor = "pointer"),
          (e.rectHover = !1),
          (e.incremental = !1),
          (e._rect = null),
          (e.dirtyRectTolerance = 0),
          (e.__dirty = Qt | Bi);
      })()),
      t
    );
  })(Wg),
  gu = new at(0, 0, 0, 0),
  yu = new at(0, 0, 0, 0);
function Ix(r, t, e) {
  return (
    gu.copy(r.getBoundingRect()),
    r.transform && gu.applyTransform(r.transform),
    (yu.width = t),
    (yu.height = e),
    !gu.intersect(yu)
  );
}
const ui = Lx;
var Yt = Math.min,
  $t = Math.max,
  mu = Math.sin,
  _u = Math.cos,
  Rr = Math.PI * 2,
  Ya = si(),
  $a = si(),
  Za = si();
function ly(r, t, e) {
  if (r.length !== 0) {
    for (
      var n = r[0], i = n[0], a = n[0], o = n[1], s = n[1], u = 1;
      u < r.length;
      u++
    )
      (n = r[u]),
        (i = Yt(i, n[0])),
        (a = $t(a, n[0])),
        (o = Yt(o, n[1])),
        (s = $t(s, n[1]));
    (t[0] = i), (t[1] = o), (e[0] = a), (e[1] = s);
  }
}
function Nv(r, t, e, n, i, a) {
  (i[0] = Yt(r, e)), (i[1] = Yt(t, n)), (a[0] = $t(r, e)), (a[1] = $t(t, n));
}
var Fv = [],
  zv = [];
function Px(r, t, e, n, i, a, o, s, u, l) {
  var f = Pg,
    h = Tt,
    c = f(r, e, i, o, Fv);
  (u[0] = 1 / 0), (u[1] = 1 / 0), (l[0] = -1 / 0), (l[1] = -1 / 0);
  for (var v = 0; v < c; v++) {
    var d = h(r, e, i, o, Fv[v]);
    (u[0] = Yt(d, u[0])), (l[0] = $t(d, l[0]));
  }
  c = f(t, n, a, s, zv);
  for (var v = 0; v < c; v++) {
    var g = h(t, n, a, s, zv[v]);
    (u[1] = Yt(g, u[1])), (l[1] = $t(g, l[1]));
  }
  (u[0] = Yt(r, u[0])),
    (l[0] = $t(r, l[0])),
    (u[0] = Yt(o, u[0])),
    (l[0] = $t(o, l[0])),
    (u[1] = Yt(t, u[1])),
    (l[1] = $t(t, l[1])),
    (u[1] = Yt(s, u[1])),
    (l[1] = $t(s, l[1]));
}
function Rx(r, t, e, n, i, a, o, s) {
  var u = Eg,
    l = Ot,
    f = $t(Yt(u(r, e, i), 1), 0),
    h = $t(Yt(u(t, n, a), 1), 0),
    c = l(r, e, i, f),
    v = l(t, n, a, h);
  (o[0] = Yt(r, i, c)),
    (o[1] = Yt(t, a, v)),
    (s[0] = $t(r, i, c)),
    (s[1] = $t(t, a, v));
}
function Ex(r, t, e, n, i, a, o, s, u) {
  var l = Fn,
    f = zn,
    h = Math.abs(i - a);
  if (h % Rr < 1e-4 && h > 1e-4) {
    (s[0] = r - e), (s[1] = t - n), (u[0] = r + e), (u[1] = t + n);
    return;
  }
  if (
    ((Ya[0] = _u(i) * e + r),
    (Ya[1] = mu(i) * n + t),
    ($a[0] = _u(a) * e + r),
    ($a[1] = mu(a) * n + t),
    l(s, Ya, $a),
    f(u, Ya, $a),
    (i = i % Rr),
    i < 0 && (i = i + Rr),
    (a = a % Rr),
    a < 0 && (a = a + Rr),
    i > a && !o ? (a += Rr) : i < a && o && (i += Rr),
    o)
  ) {
    var c = a;
    (a = i), (i = c);
  }
  for (var v = 0; v < a; v += Math.PI / 2)
    v > i &&
      ((Za[0] = _u(v) * e + r),
      (Za[1] = mu(v) * n + t),
      l(s, Za, s),
      f(u, Za, u));
}
var st = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
  Er = [],
  Or = [],
  Ce = [],
  er = [],
  Me = [],
  De = [],
  Su = Math.min,
  xu = Math.max,
  kr = Math.cos,
  Br = Math.sin,
  Ge = Math.abs,
  Vl = Math.PI,
  lr = Vl * 2,
  wu = typeof Float32Array < "u",
  gi = [];
function bu(r) {
  var t = Math.round((r / Vl) * 1e8) / 1e8;
  return (t % 2) * Vl;
}
function Ox(r, t) {
  var e = bu(r[0]);
  e < 0 && (e += lr);
  var n = e - r[0],
    i = r[1];
  (i += n),
    !t && i - e >= lr
      ? (i = e + lr)
      : t && e - i >= lr
      ? (i = e - lr)
      : !t && e > i
      ? (i = e + (lr - bu(e - i)))
      : t && e < i && (i = e - (lr - bu(i - e))),
    (r[0] = e),
    (r[1] = i);
}
var kx = (function () {
  function r(t) {
    (this.dpr = 1),
      (this._xi = 0),
      (this._yi = 0),
      (this._x0 = 0),
      (this._y0 = 0),
      (this._len = 0),
      t && (this._saveData = !1),
      this._saveData && (this.data = []);
  }
  return (
    (r.prototype.increaseVersion = function () {
      this._version++;
    }),
    (r.prototype.getVersion = function () {
      return this._version;
    }),
    (r.prototype.setScale = function (t, e, n) {
      (n = n || 0),
        n > 0 &&
          ((this._ux = Ge(n / $o / t) || 0), (this._uy = Ge(n / $o / e) || 0));
    }),
    (r.prototype.setDPR = function (t) {
      this.dpr = t;
    }),
    (r.prototype.setContext = function (t) {
      this._ctx = t;
    }),
    (r.prototype.getContext = function () {
      return this._ctx;
    }),
    (r.prototype.beginPath = function () {
      return this._ctx && this._ctx.beginPath(), this.reset(), this;
    }),
    (r.prototype.reset = function () {
      this._saveData && (this._len = 0),
        this._pathSegLen && ((this._pathSegLen = null), (this._pathLen = 0)),
        this._version++;
    }),
    (r.prototype.moveTo = function (t, e) {
      return (
        this._drawPendingPt(),
        this.addData(st.M, t, e),
        this._ctx && this._ctx.moveTo(t, e),
        (this._x0 = t),
        (this._y0 = e),
        (this._xi = t),
        (this._yi = e),
        this
      );
    }),
    (r.prototype.lineTo = function (t, e) {
      var n = Ge(t - this._xi),
        i = Ge(e - this._yi),
        a = n > this._ux || i > this._uy;
      if (
        (this.addData(st.L, t, e), this._ctx && a && this._ctx.lineTo(t, e), a)
      )
        (this._xi = t), (this._yi = e), (this._pendingPtDist = 0);
      else {
        var o = n * n + i * i;
        o > this._pendingPtDist &&
          ((this._pendingPtX = t),
          (this._pendingPtY = e),
          (this._pendingPtDist = o));
      }
      return this;
    }),
    (r.prototype.bezierCurveTo = function (t, e, n, i, a, o) {
      return (
        this._drawPendingPt(),
        this.addData(st.C, t, e, n, i, a, o),
        this._ctx && this._ctx.bezierCurveTo(t, e, n, i, a, o),
        (this._xi = a),
        (this._yi = o),
        this
      );
    }),
    (r.prototype.quadraticCurveTo = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this.addData(st.Q, t, e, n, i),
        this._ctx && this._ctx.quadraticCurveTo(t, e, n, i),
        (this._xi = n),
        (this._yi = i),
        this
      );
    }),
    (r.prototype.arc = function (t, e, n, i, a, o) {
      this._drawPendingPt(),
        (gi[0] = i),
        (gi[1] = a),
        Ox(gi, o),
        (i = gi[0]),
        (a = gi[1]);
      var s = a - i;
      return (
        this.addData(st.A, t, e, n, n, i, s, 0, o ? 0 : 1),
        this._ctx && this._ctx.arc(t, e, n, i, a, o),
        (this._xi = kr(a) * n + t),
        (this._yi = Br(a) * n + e),
        this
      );
    }),
    (r.prototype.arcTo = function (t, e, n, i, a) {
      return (
        this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, a), this
      );
    }),
    (r.prototype.rect = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this._ctx && this._ctx.rect(t, e, n, i),
        this.addData(st.R, t, e, n, i),
        this
      );
    }),
    (r.prototype.closePath = function () {
      this._drawPendingPt(), this.addData(st.Z);
      var t = this._ctx,
        e = this._x0,
        n = this._y0;
      return t && t.closePath(), (this._xi = e), (this._yi = n), this;
    }),
    (r.prototype.fill = function (t) {
      t && t.fill(), this.toStatic();
    }),
    (r.prototype.stroke = function (t) {
      t && t.stroke(), this.toStatic();
    }),
    (r.prototype.len = function () {
      return this._len;
    }),
    (r.prototype.setData = function (t) {
      var e = t.length;
      !(this.data && this.data.length === e) &&
        wu &&
        (this.data = new Float32Array(e));
      for (var n = 0; n < e; n++) this.data[n] = t[n];
      this._len = e;
    }),
    (r.prototype.appendPath = function (t) {
      t instanceof Array || (t = [t]);
      for (var e = t.length, n = 0, i = this._len, a = 0; a < e; a++)
        n += t[a].len();
      wu &&
        this.data instanceof Float32Array &&
        (this.data = new Float32Array(i + n));
      for (var a = 0; a < e; a++)
        for (var o = t[a].data, s = 0; s < o.length; s++) this.data[i++] = o[s];
      this._len = i;
    }),
    (r.prototype.addData = function (t, e, n, i, a, o, s, u, l) {
      if (!!this._saveData) {
        var f = this.data;
        this._len + arguments.length > f.length &&
          (this._expandData(), (f = this.data));
        for (var h = 0; h < arguments.length; h++)
          f[this._len++] = arguments[h];
      }
    }),
    (r.prototype._drawPendingPt = function () {
      this._pendingPtDist > 0 &&
        (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY),
        (this._pendingPtDist = 0));
    }),
    (r.prototype._expandData = function () {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
        this.data = t;
      }
    }),
    (r.prototype.toStatic = function () {
      if (!!this._saveData) {
        this._drawPendingPt();
        var t = this.data;
        t instanceof Array &&
          ((t.length = this._len),
          wu && this._len > 11 && (this.data = new Float32Array(t)));
      }
    }),
    (r.prototype.getBoundingRect = function () {
      (Ce[0] = Ce[1] = Me[0] = Me[1] = Number.MAX_VALUE),
        (er[0] = er[1] = De[0] = De[1] = -Number.MAX_VALUE);
      var t = this.data,
        e = 0,
        n = 0,
        i = 0,
        a = 0,
        o;
      for (o = 0; o < this._len; ) {
        var s = t[o++],
          u = o === 1;
        switch ((u && ((e = t[o]), (n = t[o + 1]), (i = e), (a = n)), s)) {
          case st.M:
            (e = i = t[o++]),
              (n = a = t[o++]),
              (Me[0] = i),
              (Me[1] = a),
              (De[0] = i),
              (De[1] = a);
            break;
          case st.L:
            Nv(e, n, t[o], t[o + 1], Me, De), (e = t[o++]), (n = t[o++]);
            break;
          case st.C:
            Px(e, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], Me, De),
              (e = t[o++]),
              (n = t[o++]);
            break;
          case st.Q:
            Rx(e, n, t[o++], t[o++], t[o], t[o + 1], Me, De),
              (e = t[o++]),
              (n = t[o++]);
            break;
          case st.A:
            var l = t[o++],
              f = t[o++],
              h = t[o++],
              c = t[o++],
              v = t[o++],
              d = t[o++] + v;
            o += 1;
            var g = !t[o++];
            u && ((i = kr(v) * h + l), (a = Br(v) * c + f)),
              Ex(l, f, h, c, v, d, g, Me, De),
              (e = kr(d) * h + l),
              (n = Br(d) * c + f);
            break;
          case st.R:
            (i = e = t[o++]), (a = n = t[o++]);
            var p = t[o++],
              y = t[o++];
            Nv(i, a, i + p, a + y, Me, De);
            break;
          case st.Z:
            (e = i), (n = a);
            break;
        }
        Fn(Ce, Ce, Me), zn(er, er, De);
      }
      return (
        o === 0 && (Ce[0] = Ce[1] = er[0] = er[1] = 0),
        new at(Ce[0], Ce[1], er[0] - Ce[0], er[1] - Ce[1])
      );
    }),
    (r.prototype._calculateLength = function () {
      var t = this.data,
        e = this._len,
        n = this._ux,
        i = this._uy,
        a = 0,
        o = 0,
        s = 0,
        u = 0;
      this._pathSegLen || (this._pathSegLen = []);
      for (var l = this._pathSegLen, f = 0, h = 0, c = 0; c < e; ) {
        var v = t[c++],
          d = c === 1;
        d && ((a = t[c]), (o = t[c + 1]), (s = a), (u = o));
        var g = -1;
        switch (v) {
          case st.M:
            (a = s = t[c++]), (o = u = t[c++]);
            break;
          case st.L: {
            var p = t[c++],
              y = t[c++],
              m = p - a,
              _ = y - o;
            (Ge(m) > n || Ge(_) > i || c === e - 1) &&
              ((g = Math.sqrt(m * m + _ * _)), (a = p), (o = y));
            break;
          }
          case st.C: {
            var S = t[c++],
              w = t[c++],
              p = t[c++],
              y = t[c++],
              x = t[c++],
              b = t[c++];
            (g = q1(a, o, S, w, p, y, x, b, 10)), (a = x), (o = b);
            break;
          }
          case st.Q: {
            var S = t[c++],
              w = t[c++],
              p = t[c++],
              y = t[c++];
            (g = Q1(a, o, S, w, p, y, 10)), (a = p), (o = y);
            break;
          }
          case st.A:
            var T = t[c++],
              M = t[c++],
              D = t[c++],
              A = t[c++],
              L = t[c++],
              I = t[c++],
              P = I + L;
            (c += 1),
              t[c++],
              d && ((s = kr(L) * D + T), (u = Br(L) * A + M)),
              (g = xu(D, A) * Su(lr, Math.abs(I))),
              (a = kr(P) * D + T),
              (o = Br(P) * A + M);
            break;
          case st.R: {
            (s = a = t[c++]), (u = o = t[c++]);
            var E = t[c++],
              R = t[c++];
            g = E * 2 + R * 2;
            break;
          }
          case st.Z: {
            var m = s - a,
              _ = u - o;
            (g = Math.sqrt(m * m + _ * _)), (a = s), (o = u);
            break;
          }
        }
        g >= 0 && ((l[h++] = g), (f += g));
      }
      return (this._pathLen = f), f;
    }),
    (r.prototype.rebuildPath = function (t, e) {
      var n = this.data,
        i = this._ux,
        a = this._uy,
        o = this._len,
        s,
        u,
        l,
        f,
        h,
        c,
        v = e < 1,
        d,
        g,
        p = 0,
        y = 0,
        m,
        _ = 0,
        S,
        w;
      if (
        v &&
        (this._pathSegLen || this._calculateLength(),
        (d = this._pathSegLen),
        (g = this._pathLen),
        (m = e * g),
        !m)
      )
        return;
      t: for (var x = 0; x < o; ) {
        var b = n[x++],
          T = x === 1;
        switch (
          (T && ((l = n[x]), (f = n[x + 1]), (s = l), (u = f)),
          b !== st.L && _ > 0 && (t.lineTo(S, w), (_ = 0)),
          b)
        ) {
          case st.M:
            (s = l = n[x++]), (u = f = n[x++]), t.moveTo(l, f);
            break;
          case st.L: {
            (h = n[x++]), (c = n[x++]);
            var M = Ge(h - l),
              D = Ge(c - f);
            if (M > i || D > a) {
              if (v) {
                var A = d[y++];
                if (p + A > m) {
                  var L = (m - p) / A;
                  t.lineTo(l * (1 - L) + h * L, f * (1 - L) + c * L);
                  break t;
                }
                p += A;
              }
              t.lineTo(h, c), (l = h), (f = c), (_ = 0);
            } else {
              var I = M * M + D * D;
              I > _ && ((S = h), (w = c), (_ = I));
            }
            break;
          }
          case st.C: {
            var P = n[x++],
              E = n[x++],
              R = n[x++],
              V = n[x++],
              F = n[x++],
              B = n[x++];
            if (v) {
              var A = d[y++];
              if (p + A > m) {
                var L = (m - p) / A;
                Sr(l, P, R, F, L, Er),
                  Sr(f, E, V, B, L, Or),
                  t.bezierCurveTo(Er[1], Or[1], Er[2], Or[2], Er[3], Or[3]);
                break t;
              }
              p += A;
            }
            t.bezierCurveTo(P, E, R, V, F, B), (l = F), (f = B);
            break;
          }
          case st.Q: {
            var P = n[x++],
              E = n[x++],
              R = n[x++],
              V = n[x++];
            if (v) {
              var A = d[y++];
              if (p + A > m) {
                var L = (m - p) / A;
                Wo(l, P, R, L, Er),
                  Wo(f, E, V, L, Or),
                  t.quadraticCurveTo(Er[1], Or[1], Er[2], Or[2]);
                break t;
              }
              p += A;
            }
            t.quadraticCurveTo(P, E, R, V), (l = R), (f = V);
            break;
          }
          case st.A:
            var $ = n[x++],
              it = n[x++],
              lt = n[x++],
              ht = n[x++],
              vt = n[x++],
              Lt = n[x++],
              dt = n[x++],
              pe = !n[x++],
              ze = lt > ht ? lt : ht,
              It = Ge(lt - ht) > 0.001,
              St = vt + Lt,
              X = !1;
            if (v) {
              var A = d[y++];
              p + A > m && ((St = vt + (Lt * (m - p)) / A), (X = !0)), (p += A);
            }
            if (
              (It && t.ellipse
                ? t.ellipse($, it, lt, ht, dt, vt, St, pe)
                : t.arc($, it, ze, vt, St, pe),
              X)
            )
              break t;
            T && ((s = kr(vt) * lt + $), (u = Br(vt) * ht + it)),
              (l = kr(St) * lt + $),
              (f = Br(St) * ht + it);
            break;
          case st.R:
            (s = l = n[x]), (u = f = n[x + 1]), (h = n[x++]), (c = n[x++]);
            var tt = n[x++],
              Tr = n[x++];
            if (v) {
              var A = d[y++];
              if (p + A > m) {
                var Bt = m - p;
                t.moveTo(h, c),
                  t.lineTo(h + Su(Bt, tt), c),
                  (Bt -= tt),
                  Bt > 0 && t.lineTo(h + tt, c + Su(Bt, Tr)),
                  (Bt -= Tr),
                  Bt > 0 && t.lineTo(h + xu(tt - Bt, 0), c + Tr),
                  (Bt -= tt),
                  Bt > 0 && t.lineTo(h, c + xu(Tr - Bt, 0));
                break t;
              }
              p += A;
            }
            t.rect(h, c, tt, Tr);
            break;
          case st.Z:
            if (v) {
              var A = d[y++];
              if (p + A > m) {
                var L = (m - p) / A;
                t.lineTo(l * (1 - L) + s * L, f * (1 - L) + u * L);
                break t;
              }
              p += A;
            }
            t.closePath(), (l = s), (f = u);
        }
      }
    }),
    (r.prototype.clone = function () {
      var t = new r(),
        e = this.data;
      return (
        (t.data = e.slice ? e.slice() : Array.prototype.slice.call(e)),
        (t._len = this._len),
        t
      );
    }),
    (r.CMD = st),
    (r.initDefaultProps = (function () {
      var t = r.prototype;
      (t._saveData = !0),
        (t._ux = 0),
        (t._uy = 0),
        (t._pendingPtDist = 0),
        (t._version = 0);
    })()),
    r
  );
})();
const qe = kx;
function wn(r, t, e, n, i, a, o) {
  if (i === 0) return !1;
  var s = i,
    u = 0,
    l = r;
  if (
    (o > t + s && o > n + s) ||
    (o < t - s && o < n - s) ||
    (a > r + s && a > e + s) ||
    (a < r - s && a < e - s)
  )
    return !1;
  if (r !== e) (u = (t - n) / (r - e)), (l = (r * n - e * t) / (r - e));
  else return Math.abs(a - r) <= s / 2;
  var f = u * a - o + l,
    h = (f * f) / (u * u + 1);
  return h <= ((s / 2) * s) / 2;
}
function Bx(r, t, e, n, i, a, o, s, u, l, f) {
  if (u === 0) return !1;
  var h = u;
  if (
    (f > t + h && f > n + h && f > a + h && f > s + h) ||
    (f < t - h && f < n - h && f < a - h && f < s - h) ||
    (l > r + h && l > e + h && l > i + h && l > o + h) ||
    (l < r - h && l < e - h && l < i - h && l < o - h)
  )
    return !1;
  var c = Rg(r, t, e, n, i, a, o, s, l, f, null);
  return c <= h / 2;
}
function Nx(r, t, e, n, i, a, o, s, u) {
  if (o === 0) return !1;
  var l = o;
  if (
    (u > t + l && u > n + l && u > a + l) ||
    (u < t - l && u < n - l && u < a - l) ||
    (s > r + l && s > e + l && s > i + l) ||
    (s < r - l && s < e - l && s < i - l)
  )
    return !1;
  var f = Og(r, t, e, n, i, a, s, u, null);
  return f <= l / 2;
}
var Gv = Math.PI * 2;
function cr(r) {
  return (r %= Gv), r < 0 && (r += Gv), r;
}
var yi = Math.PI * 2;
function Fx(r, t, e, n, i, a, o, s, u) {
  if (o === 0) return !1;
  var l = o;
  (s -= r), (u -= t);
  var f = Math.sqrt(s * s + u * u);
  if (f - l > e || f + l < e) return !1;
  if (Math.abs(n - i) % yi < 1e-4) return !0;
  if (a) {
    var h = n;
    (n = cr(i)), (i = cr(h));
  } else (n = cr(n)), (i = cr(i));
  n > i && (i += yi);
  var c = Math.atan2(u, s);
  return c < 0 && (c += yi), (c >= n && c <= i) || (c + yi >= n && c + yi <= i);
}
function Nr(r, t, e, n, i, a) {
  if ((a > t && a > n) || (a < t && a < n) || n === t) return 0;
  var o = (a - t) / (n - t),
    s = n < t ? 1 : -1;
  (o === 1 || o === 0) && (s = n < t ? 0.5 : -0.5);
  var u = o * (e - r) + r;
  return u === i ? 1 / 0 : u > i ? s : 0;
}
var rr = qe.CMD,
  Fr = Math.PI * 2,
  zx = 1e-4;
function Gx(r, t) {
  return Math.abs(r - t) < zx;
}
var Ft = [-1, -1, -1],
  oe = [-1, -1];
function Hx() {
  var r = oe[0];
  (oe[0] = oe[1]), (oe[1] = r);
}
function Vx(r, t, e, n, i, a, o, s, u, l) {
  if ((l > t && l > n && l > a && l > s) || (l < t && l < n && l < a && l < s))
    return 0;
  var f = Vo(t, n, a, s, l, Ft);
  if (f === 0) return 0;
  for (var h = 0, c = -1, v = void 0, d = void 0, g = 0; g < f; g++) {
    var p = Ft[g],
      y = p === 0 || p === 1 ? 0.5 : 1,
      m = Tt(r, e, i, o, p);
    m < u ||
      (c < 0 &&
        ((c = Pg(t, n, a, s, oe)),
        oe[1] < oe[0] && c > 1 && Hx(),
        (v = Tt(t, n, a, s, oe[0])),
        c > 1 && (d = Tt(t, n, a, s, oe[1]))),
      c === 2
        ? p < oe[0]
          ? (h += v < t ? y : -y)
          : p < oe[1]
          ? (h += d < v ? y : -y)
          : (h += s < d ? y : -y)
        : p < oe[0]
        ? (h += v < t ? y : -y)
        : (h += s < v ? y : -y));
  }
  return h;
}
function Wx(r, t, e, n, i, a, o, s) {
  if ((s > t && s > n && s > a) || (s < t && s < n && s < a)) return 0;
  var u = K1(t, n, a, s, Ft);
  if (u === 0) return 0;
  var l = Eg(t, n, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = Ot(t, n, a, l), c = 0; c < u; c++) {
      var v = Ft[c] === 0 || Ft[c] === 1 ? 0.5 : 1,
        d = Ot(r, e, i, Ft[c]);
      d < o || (Ft[c] < l ? (f += h < t ? v : -v) : (f += a < h ? v : -v));
    }
    return f;
  } else {
    var v = Ft[0] === 0 || Ft[0] === 1 ? 0.5 : 1,
      d = Ot(r, e, i, Ft[0]);
    return d < o ? 0 : a < t ? v : -v;
  }
}
function Ux(r, t, e, n, i, a, o, s) {
  if (((s -= t), s > e || s < -e)) return 0;
  var u = Math.sqrt(e * e - s * s);
  (Ft[0] = -u), (Ft[1] = u);
  var l = Math.abs(n - i);
  if (l < 1e-4) return 0;
  if (l >= Fr - 1e-4) {
    (n = 0), (i = Fr);
    var f = a ? 1 : -1;
    return o >= Ft[0] + r && o <= Ft[1] + r ? f : 0;
  }
  if (n > i) {
    var h = n;
    (n = i), (i = h);
  }
  n < 0 && ((n += Fr), (i += Fr));
  for (var c = 0, v = 0; v < 2; v++) {
    var d = Ft[v];
    if (d + r > o) {
      var g = Math.atan2(s, d),
        f = a ? 1 : -1;
      g < 0 && (g = Fr + g),
        ((g >= n && g <= i) || (g + Fr >= n && g + Fr <= i)) &&
          (g > Math.PI / 2 && g < Math.PI * 1.5 && (f = -f), (c += f));
    }
  }
  return c;
}
function fy(r, t, e, n, i) {
  for (
    var a = r.data, o = r.len(), s = 0, u = 0, l = 0, f = 0, h = 0, c, v, d = 0;
    d < o;

  ) {
    var g = a[d++],
      p = d === 1;
    switch (
      (g === rr.M && d > 1 && (e || (s += Nr(u, l, f, h, n, i))),
      p && ((u = a[d]), (l = a[d + 1]), (f = u), (h = l)),
      g)
    ) {
      case rr.M:
        (f = a[d++]), (h = a[d++]), (u = f), (l = h);
        break;
      case rr.L:
        if (e) {
          if (wn(u, l, a[d], a[d + 1], t, n, i)) return !0;
        } else s += Nr(u, l, a[d], a[d + 1], n, i) || 0;
        (u = a[d++]), (l = a[d++]);
        break;
      case rr.C:
        if (e) {
          if (Bx(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s +=
            Vx(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        (u = a[d++]), (l = a[d++]);
        break;
      case rr.Q:
        if (e) {
          if (Nx(u, l, a[d++], a[d++], a[d], a[d + 1], t, n, i)) return !0;
        } else s += Wx(u, l, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        (u = a[d++]), (l = a[d++]);
        break;
      case rr.A:
        var y = a[d++],
          m = a[d++],
          _ = a[d++],
          S = a[d++],
          w = a[d++],
          x = a[d++];
        d += 1;
        var b = !!(1 - a[d++]);
        (c = Math.cos(w) * _ + y),
          (v = Math.sin(w) * S + m),
          p ? ((f = c), (h = v)) : (s += Nr(u, l, c, v, n, i));
        var T = ((n - y) * S) / _ + y;
        if (e) {
          if (Fx(y, m, S, w, w + x, b, t, T, i)) return !0;
        } else s += Ux(y, m, S, w, w + x, b, T, i);
        (u = Math.cos(w + x) * _ + y), (l = Math.sin(w + x) * S + m);
        break;
      case rr.R:
        (f = u = a[d++]), (h = l = a[d++]);
        var M = a[d++],
          D = a[d++];
        if (((c = f + M), (v = h + D), e)) {
          if (
            wn(f, h, c, h, t, n, i) ||
            wn(c, h, c, v, t, n, i) ||
            wn(c, v, f, v, t, n, i) ||
            wn(f, v, f, h, t, n, i)
          )
            return !0;
        } else (s += Nr(c, h, c, v, n, i)), (s += Nr(f, v, f, h, n, i));
        break;
      case rr.Z:
        if (e) {
          if (wn(u, l, f, h, t, n, i)) return !0;
        } else s += Nr(u, l, f, h, n, i);
        (u = f), (l = h);
        break;
    }
  }
  return !e && !Gx(l, h) && (s += Nr(u, l, f, h, n, i) || 0), s !== 0;
}
function Yx(r, t, e) {
  return fy(r, 0, !1, t, e);
}
function $x(r, t, e, n) {
  return fy(r, t, !0, e, n);
}
var hy = q(
    {
      fill: "#000",
      stroke: null,
      strokePercent: 1,
      fillOpacity: 1,
      strokeOpacity: 1,
      lineDashOffset: 0,
      lineWidth: 1,
      lineCap: "butt",
      miterLimit: 10,
      strokeNoScale: !1,
      strokeFirst: !1,
    },
    rn
  ),
  Zx = {
    style: q(
      {
        fill: !0,
        stroke: !0,
        strokePercent: !0,
        fillOpacity: !0,
        strokeOpacity: !0,
        lineDashOffset: !0,
        lineWidth: !0,
        miterLimit: !0,
      },
      ws.style
    ),
  },
  Tu = aa.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]),
  Xx = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.update = function () {
        var e = this;
        r.prototype.update.call(this);
        var n = this.style;
        if (n.decal) {
          var i = (this._decalEl = this._decalEl || new t());
          i.buildPath === t.prototype.buildPath &&
            (i.buildPath = function (u) {
              e.buildPath(u, e.shape);
            }),
            (i.silent = !0);
          var a = i.style;
          for (var o in n) a[o] !== n[o] && (a[o] = n[o]);
          (a.fill = n.fill ? n.decal : null),
            (a.decal = null),
            (a.shadowColor = null),
            n.strokeFirst && (a.stroke = null);
          for (var s = 0; s < Tu.length; ++s) i[Tu[s]] = this[Tu[s]];
          i.__dirty |= Qt;
        } else this._decalEl && (this._decalEl = null);
      }),
      (t.prototype.getDecalElement = function () {
        return this._decalEl;
      }),
      (t.prototype._init = function (e) {
        var n = pt(e);
        this.shape = this.getDefaultShape();
        var i = this.getDefaultStyle();
        i && this.useStyle(i);
        for (var a = 0; a < n.length; a++) {
          var o = n[a],
            s = e[o];
          o === "style"
            ? this.style
              ? k(this.style, s)
              : this.useStyle(s)
            : o === "shape"
            ? k(this.shape, s)
            : r.prototype.attrKV.call(this, o, s);
        }
        this.style || this.useStyle({});
      }),
      (t.prototype.getDefaultStyle = function () {
        return null;
      }),
      (t.prototype.getDefaultShape = function () {
        return {};
      }),
      (t.prototype.canBeInsideText = function () {
        return this.hasFill();
      }),
      (t.prototype.getInsideTextFill = function () {
        var e = this.style.fill;
        if (e !== "none") {
          if (G(e)) {
            var n = Yo(e, 0);
            return n > 0.5 ? Nl : n > 0.2 ? wS : Fl;
          } else if (e) return Fl;
        }
        return Nl;
      }),
      (t.prototype.getInsideTextStroke = function (e) {
        var n = this.style.fill;
        if (G(n)) {
          var i = this.__zr,
            a = !!(i && i.isDarkMode()),
            o = Yo(e, 0) < Bl;
          if (a === o) return n;
        }
      }),
      (t.prototype.buildPath = function (e, n, i) {}),
      (t.prototype.pathUpdated = function () {
        this.__dirty &= ~kn;
      }),
      (t.prototype.getUpdatedPathProxy = function (e) {
        return (
          !this.path && this.createPathProxy(),
          this.path.beginPath(),
          this.buildPath(this.path, this.shape, e),
          this.path
        );
      }),
      (t.prototype.createPathProxy = function () {
        this.path = new qe(!1);
      }),
      (t.prototype.hasStroke = function () {
        var e = this.style,
          n = e.stroke;
        return !(n == null || n === "none" || !(e.lineWidth > 0));
      }),
      (t.prototype.hasFill = function () {
        var e = this.style,
          n = e.fill;
        return n != null && n !== "none";
      }),
      (t.prototype.getBoundingRect = function () {
        var e = this._rect,
          n = this.style,
          i = !e;
        if (i) {
          var a = !1;
          this.path || ((a = !0), this.createPathProxy());
          var o = this.path;
          (a || this.__dirty & kn) &&
            (o.beginPath(),
            this.buildPath(o, this.shape, !1),
            this.pathUpdated()),
            (e = o.getBoundingRect());
        }
        if (
          ((this._rect = e),
          this.hasStroke() && this.path && this.path.len() > 0)
        ) {
          var s = this._rectStroke || (this._rectStroke = e.clone());
          if (this.__dirty || i) {
            s.copy(e);
            var u = n.strokeNoScale ? this.getLineScale() : 1,
              l = n.lineWidth;
            if (!this.hasFill()) {
              var f = this.strokeContainThreshold;
              l = Math.max(l, f == null ? 4 : f);
            }
            u > 1e-10 &&
              ((s.width += l / u),
              (s.height += l / u),
              (s.x -= l / u / 2),
              (s.y -= l / u / 2));
          }
          return s;
        }
        return e;
      }),
      (t.prototype.contain = function (e, n) {
        var i = this.transformCoordToLocal(e, n),
          a = this.getBoundingRect(),
          o = this.style;
        if (((e = i[0]), (n = i[1]), a.contain(e, n))) {
          var s = this.path;
          if (this.hasStroke()) {
            var u = o.lineWidth,
              l = o.strokeNoScale ? this.getLineScale() : 1;
            if (
              l > 1e-10 &&
              (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)),
              $x(s, u / l, e, n))
            )
              return !0;
          }
          if (this.hasFill()) return Yx(s, e, n);
        }
        return !1;
      }),
      (t.prototype.dirtyShape = function () {
        (this.__dirty |= kn),
          this._rect && (this._rect = null),
          this._decalEl && this._decalEl.dirtyShape(),
          this.markRedraw();
      }),
      (t.prototype.dirty = function () {
        this.dirtyStyle(), this.dirtyShape();
      }),
      (t.prototype.animateShape = function (e) {
        return this.animate("shape", e);
      }),
      (t.prototype.updateDuringAnimation = function (e) {
        e === "style"
          ? this.dirtyStyle()
          : e === "shape"
          ? this.dirtyShape()
          : this.markRedraw();
      }),
      (t.prototype.attrKV = function (e, n) {
        e === "shape" ? this.setShape(n) : r.prototype.attrKV.call(this, e, n);
      }),
      (t.prototype.setShape = function (e, n) {
        var i = this.shape;
        return (
          i || (i = this.shape = {}),
          typeof e == "string" ? (i[e] = n) : k(i, e),
          this.dirtyShape(),
          this
        );
      }),
      (t.prototype.shapeChanged = function () {
        return !!(this.__dirty & kn);
      }),
      (t.prototype.createStyle = function (e) {
        return gs(hy, e);
      }),
      (t.prototype._innerSaveToNormal = function (e) {
        r.prototype._innerSaveToNormal.call(this, e);
        var n = this._normalState;
        e.shape && !n.shape && (n.shape = k({}, this.shape));
      }),
      (t.prototype._applyStateObj = function (e, n, i, a, o, s) {
        r.prototype._applyStateObj.call(this, e, n, i, a, o, s);
        var u = !(n && a),
          l;
        if (
          (n && n.shape
            ? o
              ? a
                ? (l = n.shape)
                : ((l = k({}, i.shape)), k(l, n.shape))
              : ((l = k({}, a ? this.shape : i.shape)), k(l, n.shape))
            : u && (l = i.shape),
          l)
        )
          if (o) {
            this.shape = k({}, this.shape);
            for (var f = {}, h = pt(l), c = 0; c < h.length; c++) {
              var v = h[c];
              typeof l[v] == "object" ? (this.shape[v] = l[v]) : (f[v] = l[v]);
            }
            this._transitionState(e, { shape: f }, s);
          } else (this.shape = l), this.dirtyShape();
      }),
      (t.prototype._mergeStates = function (e) {
        for (
          var n = r.prototype._mergeStates.call(this, e), i, a = 0;
          a < e.length;
          a++
        ) {
          var o = e[a];
          o.shape && ((i = i || {}), this._mergeStyle(i, o.shape));
        }
        return i && (n.shape = i), n;
      }),
      (t.prototype.getAnimationStyleProps = function () {
        return Zx;
      }),
      (t.prototype.isZeroArea = function () {
        return !1;
      }),
      (t.extend = function (e) {
        var n = (function (a) {
          O(o, a);
          function o(s) {
            var u = a.call(this, s) || this;
            return e.init && e.init.call(u, s), u;
          }
          return (
            (o.prototype.getDefaultStyle = function () {
              return K(e.style);
            }),
            (o.prototype.getDefaultShape = function () {
              return K(e.shape);
            }),
            o
          );
        })(t);
        for (var i in e) typeof e[i] == "function" && (n.prototype[i] = e[i]);
        return n;
      }),
      (t.initDefaultProps = (function () {
        var e = t.prototype;
        (e.type = "path"),
          (e.strokeContainThreshold = 5),
          (e.segmentIgnoreThreshold = 0),
          (e.subPixelOptimize = !1),
          (e.autoBatch = !1),
          (e.__dirty = Qt | Bi | kn);
      })()),
      t
    );
  })(ui);
const rt = Xx;
var qx = q(
    {
      strokeFirst: !0,
      font: sn,
      x: 0,
      y: 0,
      textAlign: "left",
      textBaseline: "top",
      miterLimit: 2,
    },
    hy
  ),
  vy = (function (r) {
    O(t, r);
    function t() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.hasStroke = function () {
        var e = this.style,
          n = e.stroke;
        return n != null && n !== "none" && e.lineWidth > 0;
      }),
      (t.prototype.hasFill = function () {
        var e = this.style,
          n = e.fill;
        return n != null && n !== "none";
      }),
      (t.prototype.createStyle = function (e) {
        return gs(qx, e);
      }),
      (t.prototype.setBoundingRect = function (e) {
        this._rect = e;
      }),
      (t.prototype.getBoundingRect = function () {
        var e = this.style;
        if (!this._rect) {
          var n = e.text;
          n != null ? (n += "") : (n = "");
          var i = _s(n, e.font, e.textAlign, e.textBaseline);
          if (((i.x += e.x || 0), (i.y += e.y || 0), this.hasStroke())) {
            var a = e.lineWidth;
            (i.x -= a / 2), (i.y -= a / 2), (i.width += a), (i.height += a);
          }
          this._rect = i;
        }
        return this._rect;
      }),
      (t.initDefaultProps = (function () {
        var e = t.prototype;
        e.dirtyRectTolerance = 10;
      })()),
      t
    );
  })(ui);
vy.prototype.type = "tspan";
const Wl = vy;
var Kx = q({ x: 0, y: 0 }, rn),
  Qx = {
    style: q(
      {
        x: !0,
        y: !0,
        width: !0,
        height: !0,
        sx: !0,
        sy: !0,
        sWidth: !0,
        sHeight: !0,
      },
      ws.style
    ),
  };
function Jx(r) {
  return !!(r && typeof r != "string" && r.width && r.height);
}
var cy = (function (r) {
  O(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.createStyle = function (e) {
      return gs(Kx, e);
    }),
    (t.prototype._getSize = function (e) {
      var n = this.style,
        i = n[e];
      if (i != null) return i;
      var a = Jx(n.image) ? n.image : this.__image;
      if (!a) return 0;
      var o = e === "width" ? "height" : "width",
        s = n[o];
      return s == null ? a[e] : (a[e] / a[o]) * s;
    }),
    (t.prototype.getWidth = function () {
      return this._getSize("width");
    }),
    (t.prototype.getHeight = function () {
      return this._getSize("height");
    }),
    (t.prototype.getAnimationStyleProps = function () {
      return Qx;
    }),
    (t.prototype.getBoundingRect = function () {
      var e = this.style;
      return (
        this._rect ||
          (this._rect = new at(
            e.x || 0,
            e.y || 0,
            this.getWidth(),
            this.getHeight()
          )),
        this._rect
      );
    }),
    t
  );
})(ui);
cy.prototype.type = "image";
const pn = cy;
function jx(r, t) {
  var e = t.x,
    n = t.y,
    i = t.width,
    a = t.height,
    o = t.r,
    s,
    u,
    l,
    f;
  i < 0 && ((e = e + i), (i = -i)),
    a < 0 && ((n = n + a), (a = -a)),
    typeof o == "number"
      ? (s = u = l = f = o)
      : o instanceof Array
      ? o.length === 1
        ? (s = u = l = f = o[0])
        : o.length === 2
        ? ((s = l = o[0]), (u = f = o[1]))
        : o.length === 3
        ? ((s = o[0]), (u = f = o[1]), (l = o[2]))
        : ((s = o[0]), (u = o[1]), (l = o[2]), (f = o[3]))
      : (s = u = l = f = 0);
  var h;
  s + u > i && ((h = s + u), (s *= i / h), (u *= i / h)),
    l + f > i && ((h = l + f), (l *= i / h), (f *= i / h)),
    u + l > a && ((h = u + l), (u *= a / h), (l *= a / h)),
    s + f > a && ((h = s + f), (s *= a / h), (f *= a / h)),
    r.moveTo(e + s, n),
    r.lineTo(e + i - u, n),
    u !== 0 && r.arc(e + i - u, n + u, u, -Math.PI / 2, 0),
    r.lineTo(e + i, n + a - l),
    l !== 0 && r.arc(e + i - l, n + a - l, l, 0, Math.PI / 2),
    r.lineTo(e + f, n + a),
    f !== 0 && r.arc(e + f, n + a - f, f, Math.PI / 2, Math.PI),
    r.lineTo(e, n + s),
    s !== 0 && r.arc(e + s, n + s, s, Math.PI, Math.PI * 1.5);
}
var Hn = Math.round;
function dy(r, t, e) {
  if (!!t) {
    var n = t.x1,
      i = t.x2,
      a = t.y1,
      o = t.y2;
    (r.x1 = n), (r.x2 = i), (r.y1 = a), (r.y2 = o);
    var s = e && e.lineWidth;
    return (
      s &&
        (Hn(n * 2) === Hn(i * 2) && (r.x1 = r.x2 = jr(n, s, !0)),
        Hn(a * 2) === Hn(o * 2) && (r.y1 = r.y2 = jr(a, s, !0))),
      r
    );
  }
}
function py(r, t, e) {
  if (!!t) {
    var n = t.x,
      i = t.y,
      a = t.width,
      o = t.height;
    (r.x = n), (r.y = i), (r.width = a), (r.height = o);
    var s = e && e.lineWidth;
    return (
      s &&
        ((r.x = jr(n, s, !0)),
        (r.y = jr(i, s, !0)),
        (r.width = Math.max(jr(n + a, s, !1) - r.x, a === 0 ? 0 : 1)),
        (r.height = Math.max(jr(i + o, s, !1) - r.y, o === 0 ? 0 : 1))),
      r
    );
  }
}
function jr(r, t, e) {
  if (!t) return r;
  var n = Hn(r * 2);
  return (n + Hn(t)) % 2 === 0 ? n / 2 : (n + (e ? 1 : -1)) / 2;
}
var tw = (function () {
    function r() {
      (this.x = 0), (this.y = 0), (this.width = 0), (this.height = 0);
    }
    return r;
  })(),
  ew = {},
  gy = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new tw();
      }),
      (t.prototype.buildPath = function (e, n) {
        var i, a, o, s;
        if (this.subPixelOptimize) {
          var u = py(ew, n, this.style);
          (i = u.x),
            (a = u.y),
            (o = u.width),
            (s = u.height),
            (u.r = n.r),
            (n = u);
        } else (i = n.x), (a = n.y), (o = n.width), (s = n.height);
        n.r ? jx(e, n) : e.rect(i, a, o, s);
      }),
      (t.prototype.isZeroArea = function () {
        return !this.shape.width || !this.shape.height;
      }),
      t
    );
  })(rt);
gy.prototype.type = "rect";
const yt = gy;
var Hv = { fill: "#000" },
  Vv = 2,
  rw = {
    style: q(
      {
        fill: !0,
        stroke: !0,
        fillOpacity: !0,
        strokeOpacity: !0,
        lineWidth: !0,
        fontSize: !0,
        lineHeight: !0,
        width: !0,
        height: !0,
        textShadowColor: !0,
        textShadowBlur: !0,
        textShadowOffsetX: !0,
        textShadowOffsetY: !0,
        backgroundColor: !0,
        padding: !0,
        borderColor: !0,
        borderWidth: !0,
        borderRadius: !0,
      },
      ws.style
    ),
  },
  yy = (function (r) {
    O(t, r);
    function t(e) {
      var n = r.call(this) || this;
      return (
        (n.type = "text"),
        (n._children = []),
        (n._defaultStyle = Hv),
        n.attr(e),
        n
      );
    }
    return (
      (t.prototype.childrenRef = function () {
        return this._children;
      }),
      (t.prototype.update = function () {
        r.prototype.update.call(this),
          this.styleChanged() && this._updateSubTexts();
        for (var e = 0; e < this._children.length; e++) {
          var n = this._children[e];
          (n.zlevel = this.zlevel),
            (n.z = this.z),
            (n.z2 = this.z2),
            (n.culling = this.culling),
            (n.cursor = this.cursor),
            (n.invisible = this.invisible);
        }
      }),
      (t.prototype.updateTransform = function () {
        var e = this.innerTransformable;
        e
          ? (e.updateTransform(), e.transform && (this.transform = e.transform))
          : r.prototype.updateTransform.call(this);
      }),
      (t.prototype.getLocalTransform = function (e) {
        var n = this.innerTransformable;
        return n
          ? n.getLocalTransform(e)
          : r.prototype.getLocalTransform.call(this, e);
      }),
      (t.prototype.getComputedTransform = function () {
        return (
          this.__hostTarget &&
            (this.__hostTarget.getComputedTransform(),
            this.__hostTarget.updateInnerText(!0)),
          r.prototype.getComputedTransform.call(this)
        );
      }),
      (t.prototype._updateSubTexts = function () {
        (this._childCursor = 0),
          sw(this.style),
          this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(),
          (this._children.length = this._childCursor),
          this.styleUpdated();
      }),
      (t.prototype.addSelfToZr = function (e) {
        r.prototype.addSelfToZr.call(this, e);
        for (var n = 0; n < this._children.length; n++)
          this._children[n].__zr = e;
      }),
      (t.prototype.removeSelfFromZr = function (e) {
        r.prototype.removeSelfFromZr.call(this, e);
        for (var n = 0; n < this._children.length; n++)
          this._children[n].__zr = null;
      }),
      (t.prototype.getBoundingRect = function () {
        if ((this.styleChanged() && this._updateSubTexts(), !this._rect)) {
          for (
            var e = new at(0, 0, 0, 0),
              n = this._children,
              i = [],
              a = null,
              o = 0;
            o < n.length;
            o++
          ) {
            var s = n[o],
              u = s.getBoundingRect(),
              l = s.getLocalTransform(i);
            l
              ? (e.copy(u),
                e.applyTransform(l),
                (a = a || e.clone()),
                a.union(e))
              : ((a = a || u.clone()), a.union(u));
          }
          this._rect = a || e;
        }
        return this._rect;
      }),
      (t.prototype.setDefaultTextStyle = function (e) {
        this._defaultStyle = e || Hv;
      }),
      (t.prototype.setTextContent = function (e) {}),
      (t.prototype._mergeStyle = function (e, n) {
        if (!n) return e;
        var i = n.rich,
          a = e.rich || (i && {});
        return (
          k(e, n),
          i && a ? (this._mergeRich(a, i), (e.rich = a)) : a && (e.rich = a),
          e
        );
      }),
      (t.prototype._mergeRich = function (e, n) {
        for (var i = pt(n), a = 0; a < i.length; a++) {
          var o = i[a];
          (e[o] = e[o] || {}), k(e[o], n[o]);
        }
      }),
      (t.prototype.getAnimationStyleProps = function () {
        return rw;
      }),
      (t.prototype._getOrCreateChild = function (e) {
        var n = this._children[this._childCursor];
        return (
          (!n || !(n instanceof e)) && (n = new e()),
          (this._children[this._childCursor++] = n),
          (n.__zr = this.__zr),
          (n.parent = this),
          n
        );
      }),
      (t.prototype._updatePlainTexts = function () {
        var e = this.style,
          n = e.font || sn,
          i = e.padding,
          a = qv(e),
          o = Sx(a, e),
          s = Cu(e),
          u = !!e.backgroundColor,
          l = o.outerHeight,
          f = o.outerWidth,
          h = o.contentWidth,
          c = o.lines,
          v = o.lineHeight,
          d = this._defaultStyle,
          g = e.x || 0,
          p = e.y || 0,
          y = e.align || d.align || "left",
          m = e.verticalAlign || d.verticalAlign || "top",
          _ = g,
          S = Bn(p, o.contentHeight, m);
        if (s || i) {
          var w = Fi(g, f, y),
            x = Bn(p, l, m);
          s && this._renderBackground(e, e, w, x, f, l);
        }
        (S += v / 2),
          i &&
            ((_ = Xv(g, y, i)),
            m === "top" ? (S += i[0]) : m === "bottom" && (S -= i[2]));
        for (
          var b = 0,
            T = !1,
            M = Zv(("fill" in e) ? e.fill : ((T = !0), d.fill)),
            D = $v(
              ("stroke" in e)
                ? e.stroke
                : !u && (!d.autoStroke || T)
                ? ((b = Vv), d.stroke)
                : null
            ),
            A = e.textShadowBlur > 0,
            L =
              e.width != null &&
              (e.overflow === "truncate" ||
                e.overflow === "break" ||
                e.overflow === "breakAll"),
            I = o.calculatedLineHeight,
            P = 0;
          P < c.length;
          P++
        ) {
          var E = this._getOrCreateChild(Wl),
            R = E.createStyle();
          E.useStyle(R),
            (R.text = c[P]),
            (R.x = _),
            (R.y = S),
            y && (R.textAlign = y),
            (R.textBaseline = "middle"),
            (R.opacity = e.opacity),
            (R.strokeFirst = !0),
            A &&
              ((R.shadowBlur = e.textShadowBlur || 0),
              (R.shadowColor = e.textShadowColor || "transparent"),
              (R.shadowOffsetX = e.textShadowOffsetX || 0),
              (R.shadowOffsetY = e.textShadowOffsetY || 0)),
            (R.stroke = D),
            (R.fill = M),
            D &&
              ((R.lineWidth = e.lineWidth || b),
              (R.lineDash = e.lineDash),
              (R.lineDashOffset = e.lineDashOffset || 0)),
            (R.font = n),
            Uv(R, e),
            (S += v),
            L &&
              E.setBoundingRect(
                new at(
                  Fi(R.x, e.width, R.textAlign),
                  Bn(R.y, I, R.textBaseline),
                  h,
                  I
                )
              );
        }
      }),
      (t.prototype._updateRichTexts = function () {
        var e = this.style,
          n = qv(e),
          i = Tx(n, e),
          a = i.width,
          o = i.outerWidth,
          s = i.outerHeight,
          u = e.padding,
          l = e.x || 0,
          f = e.y || 0,
          h = this._defaultStyle,
          c = e.align || h.align,
          v = e.verticalAlign || h.verticalAlign,
          d = Fi(l, o, c),
          g = Bn(f, s, v),
          p = d,
          y = g;
        u && ((p += u[3]), (y += u[0]));
        var m = p + a;
        Cu(e) && this._renderBackground(e, e, d, g, o, s);
        for (var _ = !!e.backgroundColor, S = 0; S < i.lines.length; S++) {
          for (
            var w = i.lines[S],
              x = w.tokens,
              b = x.length,
              T = w.lineHeight,
              M = w.width,
              D = 0,
              A = p,
              L = m,
              I = b - 1,
              P = void 0;
            D < b && ((P = x[D]), !P.align || P.align === "left");

          )
            this._placeToken(P, e, T, y, A, "left", _),
              (M -= P.width),
              (A += P.width),
              D++;
          for (; I >= 0 && ((P = x[I]), P.align === "right"); )
            this._placeToken(P, e, T, y, L, "right", _),
              (M -= P.width),
              (L -= P.width),
              I--;
          for (A += (a - (A - p) - (m - L) - M) / 2; D <= I; )
            (P = x[D]),
              this._placeToken(P, e, T, y, A + P.width / 2, "center", _),
              (A += P.width),
              D++;
          y += T;
        }
      }),
      (t.prototype._placeToken = function (e, n, i, a, o, s, u) {
        var l = n.rich[e.styleName] || {};
        l.text = e.text;
        var f = e.verticalAlign,
          h = a + i / 2;
        f === "top"
          ? (h = a + e.height / 2)
          : f === "bottom" && (h = a + i - e.height / 2);
        var c = !e.isLineHolder && Cu(l);
        c &&
          this._renderBackground(
            l,
            n,
            s === "right" ? o - e.width : s === "center" ? o - e.width / 2 : o,
            h - e.height / 2,
            e.width,
            e.height
          );
        var v = !!l.backgroundColor,
          d = e.textPadding;
        d &&
          ((o = Xv(o, s, d)), (h -= e.height / 2 - d[0] - e.innerHeight / 2));
        var g = this._getOrCreateChild(Wl),
          p = g.createStyle();
        g.useStyle(p);
        var y = this._defaultStyle,
          m = !1,
          _ = 0,
          S = Zv(
            "fill" in l ? l.fill : "fill" in n ? n.fill : ((m = !0), y.fill)
          ),
          w = $v(
            "stroke" in l
              ? l.stroke
              : "stroke" in n
              ? n.stroke
              : !v && !u && (!y.autoStroke || m)
              ? ((_ = Vv), y.stroke)
              : null
          ),
          x = l.textShadowBlur > 0 || n.textShadowBlur > 0;
        (p.text = e.text),
          (p.x = o),
          (p.y = h),
          x &&
            ((p.shadowBlur = l.textShadowBlur || n.textShadowBlur || 0),
            (p.shadowColor =
              l.textShadowColor || n.textShadowColor || "transparent"),
            (p.shadowOffsetX = l.textShadowOffsetX || n.textShadowOffsetX || 0),
            (p.shadowOffsetY =
              l.textShadowOffsetY || n.textShadowOffsetY || 0)),
          (p.textAlign = s),
          (p.textBaseline = "middle"),
          (p.font = e.font || sn),
          (p.opacity = xo(l.opacity, n.opacity, 1)),
          Uv(p, l),
          w &&
            ((p.lineWidth = xo(l.lineWidth, n.lineWidth, _)),
            (p.lineDash = nt(l.lineDash, n.lineDash)),
            (p.lineDashOffset = n.lineDashOffset || 0),
            (p.stroke = w)),
          S && (p.fill = S);
        var b = e.contentWidth,
          T = e.contentHeight;
        g.setBoundingRect(
          new at(Fi(p.x, b, p.textAlign), Bn(p.y, T, p.textBaseline), b, T)
        );
      }),
      (t.prototype._renderBackground = function (e, n, i, a, o, s) {
        var u = e.backgroundColor,
          l = e.borderWidth,
          f = e.borderColor,
          h = u && u.image,
          c = u && !h,
          v = e.borderRadius,
          d = this,
          g,
          p;
        if (c || e.lineHeight || (l && f)) {
          (g = this._getOrCreateChild(yt)),
            g.useStyle(g.createStyle()),
            (g.style.fill = null);
          var y = g.shape;
          (y.x = i),
            (y.y = a),
            (y.width = o),
            (y.height = s),
            (y.r = v),
            g.dirtyShape();
        }
        if (c) {
          var m = g.style;
          (m.fill = u || null), (m.fillOpacity = nt(e.fillOpacity, 1));
        } else if (h) {
          (p = this._getOrCreateChild(pn)),
            (p.onload = function () {
              d.dirtyStyle();
            });
          var _ = p.style;
          (_.image = u.image),
            (_.x = i),
            (_.y = a),
            (_.width = o),
            (_.height = s);
        }
        if (l && f) {
          var m = g.style;
          (m.lineWidth = l),
            (m.stroke = f),
            (m.strokeOpacity = nt(e.strokeOpacity, 1)),
            (m.lineDash = e.borderDash),
            (m.lineDashOffset = e.borderDashOffset || 0),
            (g.strokeContainThreshold = 0),
            g.hasFill() &&
              g.hasStroke() &&
              ((m.strokeFirst = !0), (m.lineWidth *= 2));
        }
        var S = (g || p).style;
        (S.shadowBlur = e.shadowBlur || 0),
          (S.shadowColor = e.shadowColor || "transparent"),
          (S.shadowOffsetX = e.shadowOffsetX || 0),
          (S.shadowOffsetY = e.shadowOffsetY || 0),
          (S.opacity = xo(e.opacity, n.opacity, 1));
      }),
      (t.makeFont = function (e) {
        var n = "";
        return (
          ow(e) &&
            (n = [
              e.fontStyle,
              e.fontWeight,
              aw(e.fontSize),
              e.fontFamily || "sans-serif",
            ].join(" ")),
          (n && Pe(n)) || e.textFont || e.font
        );
      }),
      t
    );
  })(ui),
  nw = { left: !0, right: 1, center: 1 },
  iw = { top: 1, bottom: 1, middle: 1 },
  Wv = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function aw(r) {
  return typeof r == "string" &&
    (r.indexOf("px") !== -1 ||
      r.indexOf("rem") !== -1 ||
      r.indexOf("em") !== -1)
    ? r
    : isNaN(+r)
    ? Nf + "px"
    : r + "px";
}
function Uv(r, t) {
  for (var e = 0; e < Wv.length; e++) {
    var n = Wv[e],
      i = t[n];
    i != null && (r[n] = i);
  }
}
function ow(r) {
  return r.fontSize != null || r.fontFamily || r.fontWeight;
}
function sw(r) {
  return Yv(r), C(r.rich, Yv), r;
}
function Yv(r) {
  if (r) {
    r.font = yy.makeFont(r);
    var t = r.align;
    t === "middle" && (t = "center"),
      (r.align = t == null || nw[t] ? t : "left");
    var e = r.verticalAlign;
    e === "center" && (e = "middle"),
      (r.verticalAlign = e == null || iw[e] ? e : "top");
    var n = r.padding;
    n && (r.padding = _g(r.padding));
  }
}
function $v(r, t) {
  return r == null || t <= 0 || r === "transparent" || r === "none"
    ? null
    : r.image || r.colorStops
    ? "#000"
    : r;
}
function Zv(r) {
  return r == null || r === "none"
    ? null
    : r.image || r.colorStops
    ? "#000"
    : r;
}
function Xv(r, t, e) {
  return t === "right"
    ? r - e[1]
    : t === "center"
    ? r + e[3] / 2 - e[1] / 2
    : r + e[3];
}
function qv(r) {
  var t = r.text;
  return t != null && (t += ""), t;
}
function Cu(r) {
  return !!(
    r.backgroundColor ||
    r.lineHeight ||
    (r.borderWidth && r.borderColor)
  );
}
const Dt = yy;
var ut = gt(),
  uw = function (r, t, e, n) {
    if (n) {
      var i = ut(n);
      (i.dataIndex = e),
        (i.dataType = t),
        (i.seriesIndex = r),
        n.type === "group" &&
          n.traverse(function (a) {
            var o = ut(a);
            (o.seriesIndex = r), (o.dataIndex = e), (o.dataType = t);
          });
    }
  },
  Kv = 1,
  Qv = {},
  my = gt(),
  Jf = gt(),
  jf = 0,
  bs = 1,
  Ts = 2,
  he = ["emphasis", "blur", "select"],
  Xo = ["normal", "emphasis", "blur", "select"],
  lw = 10,
  fw = 9,
  nn = "highlight",
  Io = "downplay",
  Zi = "select",
  Po = "unselect",
  Xi = "toggleSelect";
function bn(r) {
  return r != null && r !== "none";
}
var Jv = new Ta(100);
function jv(r) {
  if (G(r)) {
    var t = Jv.get(r);
    return t || ((t = yv(r, -0.1)), Jv.put(r, t)), t;
  } else if (ps(r)) {
    var e = k({}, r);
    return (
      (e.colorStops = z(r.colorStops, function (n) {
        return { offset: n.offset, color: yv(n.color, -0.1) };
      })),
      e
    );
  }
  return r;
}
function Cs(r, t, e) {
  r.onHoverStateChange && (r.hoverState || 0) !== e && r.onHoverStateChange(t),
    (r.hoverState = e);
}
function _y(r) {
  Cs(r, "emphasis", Ts);
}
function Sy(r) {
  r.hoverState === Ts && Cs(r, "normal", jf);
}
function th(r) {
  Cs(r, "blur", bs);
}
function xy(r) {
  r.hoverState === bs && Cs(r, "normal", jf);
}
function hw(r) {
  r.selected = !0;
}
function vw(r) {
  r.selected = !1;
}
function tc(r, t, e) {
  t(r, e);
}
function Je(r, t, e) {
  tc(r, t, e),
    r.isGroup &&
      r.traverse(function (n) {
        tc(n, t, e);
      });
}
function ec(r, t) {
  switch (t) {
    case "emphasis":
      r.hoverState = Ts;
      break;
    case "normal":
      r.hoverState = jf;
      break;
    case "blur":
      r.hoverState = bs;
      break;
    case "select":
      r.selected = !0;
  }
}
function cw(r, t, e, n) {
  for (var i = r.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o],
      u = i[s];
    a[s] = u == null ? n && n[s] : u;
  }
  for (var o = 0; o < r.animators.length; o++) {
    var l = r.animators[o];
    l.__fromStateTransition &&
      l.__fromStateTransition.indexOf(e) < 0 &&
      l.targetName === "style" &&
      l.saveTo(a, t);
  }
  return a;
}
function dw(r, t, e, n) {
  var i = e && J(e, "select") >= 0,
    a = !1;
  if (r instanceof rt) {
    var o = my(r),
      s = (i && o.selectFill) || o.normalFill,
      u = (i && o.selectStroke) || o.normalStroke;
    if (bn(s) || bn(u)) {
      n = n || {};
      var l = n.style || {};
      l.fill === "inherit"
        ? ((a = !0), (n = k({}, n)), (l = k({}, l)), (l.fill = s))
        : !bn(l.fill) && bn(s)
        ? ((a = !0), (n = k({}, n)), (l = k({}, l)), (l.fill = jv(s)))
        : !bn(l.stroke) &&
          bn(u) &&
          (a || ((n = k({}, n)), (l = k({}, l))), (l.stroke = jv(u))),
        (n.style = l);
    }
  }
  if (n && n.z2 == null) {
    a || (n = k({}, n));
    var f = r.z2EmphasisLift;
    n.z2 = r.z2 + (f != null ? f : lw);
  }
  return n;
}
function pw(r, t, e) {
  if (e && e.z2 == null) {
    e = k({}, e);
    var n = r.z2SelectLift;
    e.z2 = r.z2 + (n != null ? n : fw);
  }
  return e;
}
function gw(r, t, e) {
  var n = J(r.currentStates, t) >= 0,
    i = r.style.opacity,
    a = n ? null : cw(r, ["opacity"], t, { opacity: 1 });
  e = e || {};
  var o = e.style || {};
  return (
    o.opacity == null &&
      ((e = k({}, e)),
      (o = k({ opacity: n ? i : a.opacity * 0.1 }, o)),
      (e.style = o)),
    e
  );
}
function Mu(r, t) {
  var e = this.states[r];
  if (this.style) {
    if (r === "emphasis") return dw(this, r, t, e);
    if (r === "blur") return gw(this, r, e);
    if (r === "select") return pw(this, r, e);
  }
  return e;
}
function yw(r) {
  r.stateProxy = Mu;
  var t = r.getTextContent(),
    e = r.getTextGuideLine();
  t && (t.stateProxy = Mu), e && (e.stateProxy = Mu);
}
function rc(r, t) {
  !Cy(r, t) && !r.__highByOuter && Je(r, _y);
}
function nc(r, t) {
  !Cy(r, t) && !r.__highByOuter && Je(r, Sy);
}
function jn(r, t) {
  (r.__highByOuter |= 1 << (t || 0)), Je(r, _y);
}
function ti(r, t) {
  !(r.__highByOuter &= ~(1 << (t || 0))) && Je(r, Sy);
}
function mw(r) {
  Je(r, th);
}
function wy(r) {
  Je(r, xy);
}
function by(r) {
  Je(r, hw);
}
function Ty(r) {
  Je(r, vw);
}
function Cy(r, t) {
  return r.__highDownSilentOnTouch && t.zrByTouch;
}
function My(r) {
  var t = r.getModel(),
    e = [],
    n = [];
  t.eachComponent(function (i, a) {
    var o = Jf(a),
      s = i === "series",
      u = s ? r.getViewOfSeriesModel(a) : r.getViewOfComponentModel(a);
    !s && n.push(u),
      o.isBlured &&
        (u.group.traverse(function (l) {
          xy(l);
        }),
        s && e.push(a)),
      (o.isBlured = !1);
  }),
    C(n, function (i) {
      i && i.toggleBlurSeries && i.toggleBlurSeries(e, !1, t);
    });
}
function Ul(r, t, e, n) {
  var i = n.getModel();
  e = e || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var c = l.getItemGraphicEl(f[h]);
      c && wy(c);
    }
  }
  if (r != null && !(!t || t === "none")) {
    var o = i.getSeriesByIndex(r),
      s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    i.eachSeries(function (l) {
      var f = o === l,
        h = l.coordinateSystem;
      h && h.master && (h = h.master);
      var c = h && s ? h === s : f;
      if (
        !(
          (e === "series" && !f) ||
          (e === "coordinateSystem" && !c) ||
          (t === "series" && f)
        )
      ) {
        var v = n.getViewOfSeriesModel(l);
        if (
          (v.group.traverse(function (p) {
            th(p);
          }),
          Ht(t))
        )
          a(l.getData(), t);
        else if (H(t))
          for (var d = pt(t), g = 0; g < d.length; g++)
            a(l.getData(d[g]), t[d[g]]);
        u.push(l), (Jf(l).isBlured = !0);
      }
    }),
      i.eachComponent(function (l, f) {
        if (l !== "series") {
          var h = n.getViewOfComponentModel(f);
          h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, i);
        }
      });
  }
}
function Yl(r, t, e) {
  if (!(r == null || t == null)) {
    var n = e.getModel().getComponent(r, t);
    if (!!n) {
      Jf(n).isBlured = !0;
      var i = e.getViewOfComponentModel(n);
      !i ||
        !i.focusBlurEnabled ||
        i.group.traverse(function (a) {
          th(a);
        });
    }
  }
}
function _w(r, t, e) {
  var n = r.seriesIndex,
    i = r.getData(t.dataType);
  if (!!i) {
    var a = ln(i, t);
    a = (N(a) ? a[0] : a) || 0;
    var o = i.getItemGraphicEl(a);
    if (!o)
      for (var s = i.count(), u = 0; !o && u < s; ) o = i.getItemGraphicEl(u++);
    if (o) {
      var l = ut(o);
      Ul(n, l.focus, l.blurScope, e);
    } else {
      var f = r.get(["emphasis", "focus"]),
        h = r.get(["emphasis", "blurScope"]);
      f != null && Ul(n, f, h, e);
    }
  }
}
function eh(r, t, e, n) {
  var i = { focusSelf: !1, dispatchers: null };
  if (r == null || r === "series" || t == null || e == null) return i;
  var a = n.getModel().getComponent(r, t);
  if (!a) return i;
  var o = n.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers) return i;
  for (var s = o.findHighDownDispatchers(e), u, l = 0; l < s.length; l++)
    if (ut(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return { focusSelf: u, dispatchers: s };
}
function Sw(r, t, e) {
  var n = ut(r),
    i = eh(n.componentMainType, n.componentIndex, n.componentHighDownName, e),
    a = i.dispatchers,
    o = i.focusSelf;
  a
    ? (o && Yl(n.componentMainType, n.componentIndex, e),
      C(a, function (s) {
        return rc(s, t);
      }))
    : (Ul(n.seriesIndex, n.focus, n.blurScope, e),
      n.focus === "self" && Yl(n.componentMainType, n.componentIndex, e),
      rc(r, t));
}
function xw(r, t, e) {
  My(e);
  var n = ut(r),
    i = eh(
      n.componentMainType,
      n.componentIndex,
      n.componentHighDownName,
      e
    ).dispatchers;
  i
    ? C(i, function (a) {
        return nc(a, t);
      })
    : nc(r, t);
}
function ww(r, t, e) {
  if (!!Xl(t)) {
    var n = t.dataType,
      i = r.getData(n),
      a = ln(i, t);
    N(a) || (a = [a]),
      r[t.type === Xi ? "toggleSelect" : t.type === Zi ? "select" : "unselect"](
        a,
        n
      );
  }
}
function ic(r) {
  var t = r.getAllData();
  C(t, function (e) {
    var n = e.data,
      i = e.type;
    n.eachItemGraphicEl(function (a, o) {
      r.isSelected(o, i) ? by(a) : Ty(a);
    });
  });
}
function bw(r) {
  var t = [];
  return (
    r.eachSeries(function (e) {
      var n = e.getAllData();
      C(n, function (i) {
        i.data;
        var a = i.type,
          o = e.getSelectedDataIndices();
        if (o.length > 0) {
          var s = { dataIndex: o, seriesIndex: e.seriesIndex };
          a != null && (s.dataType = a), t.push(s);
        }
      });
    }),
    t
  );
}
function qo(r, t, e) {
  Dy(r, !0), Je(r, yw), Cw(r, t, e);
}
function Tw(r) {
  Dy(r, !1);
}
function $l(r, t, e, n) {
  n ? Tw(r) : qo(r, t, e);
}
function Cw(r, t, e) {
  var n = ut(r);
  t != null ? ((n.focus = t), (n.blurScope = e)) : n.focus && (n.focus = null);
}
var ac = ["emphasis", "blur", "select"],
  Mw = {
    itemStyle: "getItemStyle",
    lineStyle: "getLineStyle",
    areaStyle: "getAreaStyle",
  };
function oc(r, t, e, n) {
  e = e || "itemStyle";
  for (var i = 0; i < ac.length; i++) {
    var a = ac[i],
      o = t.getModel([a, e]),
      s = r.ensureState(a);
    s.style = n ? n(o) : o[Mw[e]]();
  }
}
function Dy(r, t) {
  var e = t === !1,
    n = r;
  r.highDownSilentOnTouch &&
    (n.__highDownSilentOnTouch = r.highDownSilentOnTouch),
    (!e || n.__highDownDispatcher) &&
      ((n.__highByOuter = n.__highByOuter || 0), (n.__highDownDispatcher = !e));
}
function Zl(r) {
  return !!(r && r.__highDownDispatcher);
}
function Dw(r) {
  var t = Qv[r];
  return t == null && Kv <= 32 && (t = Qv[r] = Kv++), t;
}
function Xl(r) {
  var t = r.type;
  return t === Zi || t === Po || t === Xi;
}
function sc(r) {
  var t = r.type;
  return t === nn || t === Io;
}
function Aw(r) {
  var t = my(r);
  (t.normalFill = r.style.fill), (t.normalStroke = r.style.stroke);
  var e = r.states.select || {};
  (t.selectFill = (e.style && e.style.fill) || null),
    (t.selectStroke = (e.style && e.style.stroke) || null);
}
var Tn = qe.CMD,
  Lw = [[], [], []],
  uc = Math.sqrt,
  Iw = Math.atan2;
function Ay(r, t) {
  if (!!t) {
    var e = r.data,
      n = r.len(),
      i,
      a,
      o,
      s,
      u,
      l,
      f = Tn.M,
      h = Tn.C,
      c = Tn.L,
      v = Tn.R,
      d = Tn.A,
      g = Tn.Q;
    for (o = 0, s = 0; o < n; ) {
      switch (((i = e[o++]), (s = o), (a = 0), i)) {
        case f:
          a = 1;
          break;
        case c:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case g:
          a = 2;
          break;
        case d:
          var p = t[4],
            y = t[5],
            m = uc(t[0] * t[0] + t[1] * t[1]),
            _ = uc(t[2] * t[2] + t[3] * t[3]),
            S = Iw(-t[1] / _, t[0] / m);
          (e[o] *= m),
            (e[o++] += p),
            (e[o] *= _),
            (e[o++] += y),
            (e[o++] *= m),
            (e[o++] *= _),
            (e[o++] += S),
            (e[o++] += S),
            (o += 2),
            (s = o);
          break;
        case v:
          (l[0] = e[o++]),
            (l[1] = e[o++]),
            fe(l, l, t),
            (e[s++] = l[0]),
            (e[s++] = l[1]),
            (l[0] += e[o++]),
            (l[1] += e[o++]),
            fe(l, l, t),
            (e[s++] = l[0]),
            (e[s++] = l[1]);
      }
      for (u = 0; u < a; u++) {
        var w = Lw[u];
        (w[0] = e[o++]),
          (w[1] = e[o++]),
          fe(w, w, t),
          (e[s++] = w[0]),
          (e[s++] = w[1]);
      }
    }
    r.increaseVersion();
  }
}
var Du = Math.sqrt,
  Xa = Math.sin,
  qa = Math.cos,
  mi = Math.PI;
function lc(r) {
  return Math.sqrt(r[0] * r[0] + r[1] * r[1]);
}
function ql(r, t) {
  return (r[0] * t[0] + r[1] * t[1]) / (lc(r) * lc(t));
}
function fc(r, t) {
  return (r[0] * t[1] < r[1] * t[0] ? -1 : 1) * Math.acos(ql(r, t));
}
function hc(r, t, e, n, i, a, o, s, u, l, f) {
  var h = u * (mi / 180),
    c = (qa(h) * (r - e)) / 2 + (Xa(h) * (t - n)) / 2,
    v = (-1 * Xa(h) * (r - e)) / 2 + (qa(h) * (t - n)) / 2,
    d = (c * c) / (o * o) + (v * v) / (s * s);
  d > 1 && ((o *= Du(d)), (s *= Du(d)));
  var g =
      (i === a ? -1 : 1) *
        Du(
          (o * o * (s * s) - o * o * (v * v) - s * s * (c * c)) /
            (o * o * (v * v) + s * s * (c * c))
        ) || 0,
    p = (g * o * v) / s,
    y = (g * -s * c) / o,
    m = (r + e) / 2 + qa(h) * p - Xa(h) * y,
    _ = (t + n) / 2 + Xa(h) * p + qa(h) * y,
    S = fc([1, 0], [(c - p) / o, (v - y) / s]),
    w = [(c - p) / o, (v - y) / s],
    x = [(-1 * c - p) / o, (-1 * v - y) / s],
    b = fc(w, x);
  if ((ql(w, x) <= -1 && (b = mi), ql(w, x) >= 1 && (b = 0), b < 0)) {
    var T = Math.round((b / mi) * 1e6) / 1e6;
    b = mi * 2 + (T % 2) * mi;
  }
  f.addData(l, m, _, o, s, S, b, h, a);
}
var Pw = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
  Rw = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function Ew(r) {
  var t = new qe();
  if (!r) return t;
  var e = 0,
    n = 0,
    i = e,
    a = n,
    o,
    s = qe.CMD,
    u = r.match(Pw);
  if (!u) return t;
  for (var l = 0; l < u.length; l++) {
    for (
      var f = u[l],
        h = f.charAt(0),
        c = void 0,
        v = f.match(Rw) || [],
        d = v.length,
        g = 0;
      g < d;
      g++
    )
      v[g] = parseFloat(v[g]);
    for (var p = 0; p < d; ) {
      var y = void 0,
        m = void 0,
        _ = void 0,
        S = void 0,
        w = void 0,
        x = void 0,
        b = void 0,
        T = e,
        M = n,
        D = void 0,
        A = void 0;
      switch (h) {
        case "l":
          (e += v[p++]), (n += v[p++]), (c = s.L), t.addData(c, e, n);
          break;
        case "L":
          (e = v[p++]), (n = v[p++]), (c = s.L), t.addData(c, e, n);
          break;
        case "m":
          (e += v[p++]),
            (n += v[p++]),
            (c = s.M),
            t.addData(c, e, n),
            (i = e),
            (a = n),
            (h = "l");
          break;
        case "M":
          (e = v[p++]),
            (n = v[p++]),
            (c = s.M),
            t.addData(c, e, n),
            (i = e),
            (a = n),
            (h = "L");
          break;
        case "h":
          (e += v[p++]), (c = s.L), t.addData(c, e, n);
          break;
        case "H":
          (e = v[p++]), (c = s.L), t.addData(c, e, n);
          break;
        case "v":
          (n += v[p++]), (c = s.L), t.addData(c, e, n);
          break;
        case "V":
          (n = v[p++]), (c = s.L), t.addData(c, e, n);
          break;
        case "C":
          (c = s.C),
            t.addData(c, v[p++], v[p++], v[p++], v[p++], v[p++], v[p++]),
            (e = v[p - 2]),
            (n = v[p - 1]);
          break;
        case "c":
          (c = s.C),
            t.addData(
              c,
              v[p++] + e,
              v[p++] + n,
              v[p++] + e,
              v[p++] + n,
              v[p++] + e,
              v[p++] + n
            ),
            (e += v[p - 2]),
            (n += v[p - 1]);
          break;
        case "S":
          (y = e),
            (m = n),
            (D = t.len()),
            (A = t.data),
            o === s.C && ((y += e - A[D - 4]), (m += n - A[D - 3])),
            (c = s.C),
            (T = v[p++]),
            (M = v[p++]),
            (e = v[p++]),
            (n = v[p++]),
            t.addData(c, y, m, T, M, e, n);
          break;
        case "s":
          (y = e),
            (m = n),
            (D = t.len()),
            (A = t.data),
            o === s.C && ((y += e - A[D - 4]), (m += n - A[D - 3])),
            (c = s.C),
            (T = e + v[p++]),
            (M = n + v[p++]),
            (e += v[p++]),
            (n += v[p++]),
            t.addData(c, y, m, T, M, e, n);
          break;
        case "Q":
          (T = v[p++]),
            (M = v[p++]),
            (e = v[p++]),
            (n = v[p++]),
            (c = s.Q),
            t.addData(c, T, M, e, n);
          break;
        case "q":
          (T = v[p++] + e),
            (M = v[p++] + n),
            (e += v[p++]),
            (n += v[p++]),
            (c = s.Q),
            t.addData(c, T, M, e, n);
          break;
        case "T":
          (y = e),
            (m = n),
            (D = t.len()),
            (A = t.data),
            o === s.Q && ((y += e - A[D - 4]), (m += n - A[D - 3])),
            (e = v[p++]),
            (n = v[p++]),
            (c = s.Q),
            t.addData(c, y, m, e, n);
          break;
        case "t":
          (y = e),
            (m = n),
            (D = t.len()),
            (A = t.data),
            o === s.Q && ((y += e - A[D - 4]), (m += n - A[D - 3])),
            (e += v[p++]),
            (n += v[p++]),
            (c = s.Q),
            t.addData(c, y, m, e, n);
          break;
        case "A":
          (_ = v[p++]),
            (S = v[p++]),
            (w = v[p++]),
            (x = v[p++]),
            (b = v[p++]),
            (T = e),
            (M = n),
            (e = v[p++]),
            (n = v[p++]),
            (c = s.A),
            hc(T, M, e, n, x, b, _, S, w, c, t);
          break;
        case "a":
          (_ = v[p++]),
            (S = v[p++]),
            (w = v[p++]),
            (x = v[p++]),
            (b = v[p++]),
            (T = e),
            (M = n),
            (e += v[p++]),
            (n += v[p++]),
            (c = s.A),
            hc(T, M, e, n, x, b, _, S, w, c, t);
          break;
      }
    }
    (h === "z" || h === "Z") && ((c = s.Z), t.addData(c), (e = i), (n = a)),
      (o = c);
  }
  return t.toStatic(), t;
}
var Ly = (function (r) {
  O(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (t.prototype.applyTransform = function (e) {}), t;
})(rt);
function Iy(r) {
  return r.setData != null;
}
function Py(r, t) {
  var e = Ew(r),
    n = k({}, t);
  return (
    (n.buildPath = function (i) {
      if (Iy(i)) {
        i.setData(e.data);
        var a = i.getContext();
        a && i.rebuildPath(a, 1);
      } else {
        var a = i;
        e.rebuildPath(a, 1);
      }
    }),
    (n.applyTransform = function (i) {
      Ay(e, i), this.dirtyShape();
    }),
    n
  );
}
function Ow(r, t) {
  return new Ly(Py(r, t));
}
function kw(r, t) {
  var e = Py(r, t),
    n = (function (i) {
      O(a, i);
      function a(o) {
        var s = i.call(this, o) || this;
        return (
          (s.applyTransform = e.applyTransform), (s.buildPath = e.buildPath), s
        );
      }
      return a;
    })(Ly);
  return n;
}
function Bw(r, t) {
  for (var e = [], n = r.length, i = 0; i < n; i++) {
    var a = r[i];
    e.push(a.getUpdatedPathProxy(!0));
  }
  var o = new rt(t);
  return (
    o.createPathProxy(),
    (o.buildPath = function (s) {
      if (Iy(s)) {
        s.appendPath(e);
        var u = s.getContext();
        u && s.rebuildPath(u, 1);
      }
    }),
    o
  );
}
function rh(r, t) {
  t = t || {};
  var e = new rt();
  return (
    r.shape && e.setShape(r.shape),
    e.setStyle(r.style),
    t.bakeTransform
      ? Ay(e.path, r.getComputedTransform())
      : t.toLocal
      ? e.setLocalTransform(r.getComputedTransform())
      : e.copyTransform(r),
    (e.buildPath = r.buildPath),
    (e.applyTransform = e.applyTransform),
    (e.z = r.z),
    (e.z2 = r.z2),
    (e.zlevel = r.zlevel),
    e
  );
}
var Nw = (function () {
    function r() {
      (this.cx = 0), (this.cy = 0), (this.r = 0);
    }
    return r;
  })(),
  Ry = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new Nw();
      }),
      (t.prototype.buildPath = function (e, n) {
        e.moveTo(n.cx + n.r, n.cy), e.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
      }),
      t
    );
  })(rt);
Ry.prototype.type = "circle";
const nh = Ry;
var Fw = (function () {
    function r() {
      (this.cx = 0), (this.cy = 0), (this.rx = 0), (this.ry = 0);
    }
    return r;
  })(),
  Ey = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new Fw();
      }),
      (t.prototype.buildPath = function (e, n) {
        var i = 0.5522848,
          a = n.cx,
          o = n.cy,
          s = n.rx,
          u = n.ry,
          l = s * i,
          f = u * i;
        e.moveTo(a - s, o),
          e.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u),
          e.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o),
          e.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u),
          e.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o),
          e.closePath();
      }),
      t
    );
  })(rt);
Ey.prototype.type = "ellipse";
const Oy = Ey;
var ky = Math.PI,
  Au = ky * 2,
  zr = Math.sin,
  Cn = Math.cos,
  zw = Math.acos,
  Pt = Math.atan2,
  vc = Math.abs,
  qi = Math.sqrt,
  Gi = Math.max,
  Ae = Math.min,
  ye = 1e-4;
function Gw(r, t, e, n, i, a, o, s) {
  var u = e - r,
    l = n - t,
    f = o - i,
    h = s - a,
    c = h * u - f * l;
  if (!(c * c < ye))
    return (c = (f * (t - a) - h * (r - i)) / c), [r + c * u, t + c * l];
}
function Ka(r, t, e, n, i, a, o) {
  var s = r - e,
    u = t - n,
    l = (o ? a : -a) / qi(s * s + u * u),
    f = l * u,
    h = -l * s,
    c = r + f,
    v = t + h,
    d = e + f,
    g = n + h,
    p = (c + d) / 2,
    y = (v + g) / 2,
    m = d - c,
    _ = g - v,
    S = m * m + _ * _,
    w = i - a,
    x = c * g - d * v,
    b = (_ < 0 ? -1 : 1) * qi(Gi(0, w * w * S - x * x)),
    T = (x * _ - m * b) / S,
    M = (-x * m - _ * b) / S,
    D = (x * _ + m * b) / S,
    A = (-x * m + _ * b) / S,
    L = T - p,
    I = M - y,
    P = D - p,
    E = A - y;
  return (
    L * L + I * I > P * P + E * E && ((T = D), (M = A)),
    { cx: T, cy: M, x0: -f, y0: -h, x1: T * (i / w - 1), y1: M * (i / w - 1) }
  );
}
function Hw(r) {
  var t;
  if (N(r)) {
    var e = r.length;
    if (!e) return r;
    e === 1
      ? (t = [r[0], r[0], 0, 0])
      : e === 2
      ? (t = [r[0], r[0], r[1], r[1]])
      : e === 3
      ? (t = r.concat(r[2]))
      : (t = r);
  } else t = [r, r, r, r];
  return t;
}
function Vw(r, t) {
  var e,
    n = Gi(t.r, 0),
    i = Gi(t.r0 || 0, 0),
    a = n > 0,
    o = i > 0;
  if (!(!a && !o)) {
    if ((a || ((n = i), (i = 0)), i > n)) {
      var s = n;
      (n = i), (i = s);
    }
    var u = t.startAngle,
      l = t.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = t.cx,
        h = t.cy,
        c = !!t.clockwise,
        v = vc(l - u),
        d = v > Au && v % Au;
      if ((d > ye && (v = d), !(n > ye))) r.moveTo(f, h);
      else if (v > Au - ye)
        r.moveTo(f + n * Cn(u), h + n * zr(u)),
          r.arc(f, h, n, u, l, !c),
          i > ye &&
            (r.moveTo(f + i * Cn(l), h + i * zr(l)), r.arc(f, h, i, l, u, c));
      else {
        var g = void 0,
          p = void 0,
          y = void 0,
          m = void 0,
          _ = void 0,
          S = void 0,
          w = void 0,
          x = void 0,
          b = void 0,
          T = void 0,
          M = void 0,
          D = void 0,
          A = void 0,
          L = void 0,
          I = void 0,
          P = void 0,
          E = n * Cn(u),
          R = n * zr(u),
          V = i * Cn(l),
          F = i * zr(l),
          B = v > ye;
        if (B) {
          var $ = t.cornerRadius;
          $ && ((e = Hw($)), (g = e[0]), (p = e[1]), (y = e[2]), (m = e[3]));
          var it = vc(n - i) / 2;
          if (
            ((_ = Ae(it, y)),
            (S = Ae(it, m)),
            (w = Ae(it, g)),
            (x = Ae(it, p)),
            (M = b = Gi(_, S)),
            (D = T = Gi(w, x)),
            (b > ye || T > ye) &&
              ((A = n * Cn(l)),
              (L = n * zr(l)),
              (I = i * Cn(u)),
              (P = i * zr(u)),
              v < ky))
          ) {
            var lt = Gw(E, R, I, P, A, L, V, F);
            if (lt) {
              var ht = E - lt[0],
                vt = R - lt[1],
                Lt = A - lt[0],
                dt = L - lt[1],
                pe =
                  1 /
                  zr(
                    zw(
                      (ht * Lt + vt * dt) /
                        (qi(ht * ht + vt * vt) * qi(Lt * Lt + dt * dt))
                    ) / 2
                  ),
                ze = qi(lt[0] * lt[0] + lt[1] * lt[1]);
              (M = Ae(b, (n - ze) / (pe + 1))),
                (D = Ae(T, (i - ze) / (pe - 1)));
            }
          }
        }
        if (!B) r.moveTo(f + E, h + R);
        else if (M > ye) {
          var It = Ae(y, M),
            St = Ae(m, M),
            X = Ka(I, P, E, R, n, It, c),
            tt = Ka(A, L, V, F, n, St, c);
          r.moveTo(f + X.cx + X.x0, h + X.cy + X.y0),
            M < b && It === St
              ? r.arc(
                  f + X.cx,
                  h + X.cy,
                  M,
                  Pt(X.y0, X.x0),
                  Pt(tt.y0, tt.x0),
                  !c
                )
              : (It > 0 &&
                  r.arc(
                    f + X.cx,
                    h + X.cy,
                    It,
                    Pt(X.y0, X.x0),
                    Pt(X.y1, X.x1),
                    !c
                  ),
                r.arc(
                  f,
                  h,
                  n,
                  Pt(X.cy + X.y1, X.cx + X.x1),
                  Pt(tt.cy + tt.y1, tt.cx + tt.x1),
                  !c
                ),
                St > 0 &&
                  r.arc(
                    f + tt.cx,
                    h + tt.cy,
                    St,
                    Pt(tt.y1, tt.x1),
                    Pt(tt.y0, tt.x0),
                    !c
                  ));
        } else r.moveTo(f + E, h + R), r.arc(f, h, n, u, l, !c);
        if (!(i > ye) || !B) r.lineTo(f + V, h + F);
        else if (D > ye) {
          var It = Ae(g, D),
            St = Ae(p, D),
            X = Ka(V, F, A, L, i, -St, c),
            tt = Ka(E, R, I, P, i, -It, c);
          r.lineTo(f + X.cx + X.x0, h + X.cy + X.y0),
            D < T && It === St
              ? r.arc(
                  f + X.cx,
                  h + X.cy,
                  D,
                  Pt(X.y0, X.x0),
                  Pt(tt.y0, tt.x0),
                  !c
                )
              : (St > 0 &&
                  r.arc(
                    f + X.cx,
                    h + X.cy,
                    St,
                    Pt(X.y0, X.x0),
                    Pt(X.y1, X.x1),
                    !c
                  ),
                r.arc(
                  f,
                  h,
                  i,
                  Pt(X.cy + X.y1, X.cx + X.x1),
                  Pt(tt.cy + tt.y1, tt.cx + tt.x1),
                  c
                ),
                It > 0 &&
                  r.arc(
                    f + tt.cx,
                    h + tt.cy,
                    It,
                    Pt(tt.y1, tt.x1),
                    Pt(tt.y0, tt.x0),
                    !c
                  ));
        } else r.lineTo(f + V, h + F), r.arc(f, h, i, l, u, c);
      }
      r.closePath();
    }
  }
}
var Ww = (function () {
    function r() {
      (this.cx = 0),
        (this.cy = 0),
        (this.r0 = 0),
        (this.r = 0),
        (this.startAngle = 0),
        (this.endAngle = Math.PI * 2),
        (this.clockwise = !0),
        (this.cornerRadius = 0);
    }
    return r;
  })(),
  By = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new Ww();
      }),
      (t.prototype.buildPath = function (e, n) {
        Vw(e, n);
      }),
      (t.prototype.isZeroArea = function () {
        return (
          this.shape.startAngle === this.shape.endAngle ||
          this.shape.r === this.shape.r0
        );
      }),
      t
    );
  })(rt);
By.prototype.type = "sector";
const ua = By;
var Uw = (function () {
    function r() {
      (this.cx = 0), (this.cy = 0), (this.r = 0), (this.r0 = 0);
    }
    return r;
  })(),
  Ny = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new Uw();
      }),
      (t.prototype.buildPath = function (e, n) {
        var i = n.cx,
          a = n.cy,
          o = Math.PI * 2;
        e.moveTo(i + n.r, a),
          e.arc(i, a, n.r, 0, o, !1),
          e.moveTo(i + n.r0, a),
          e.arc(i, a, n.r0, 0, o, !0);
      }),
      t
    );
  })(rt);
Ny.prototype.type = "ring";
const Fy = Ny;
function Yw(r, t, e, n) {
  var i = [],
    a = [],
    o = [],
    s = [],
    u,
    l,
    f,
    h;
  if (n) {
    (f = [1 / 0, 1 / 0]), (h = [-1 / 0, -1 / 0]);
    for (var c = 0, v = r.length; c < v; c++) Fn(f, f, r[c]), zn(h, h, r[c]);
    Fn(f, f, n[0]), zn(h, h, n[1]);
  }
  for (var c = 0, v = r.length; c < v; c++) {
    var d = r[c];
    if (e) (u = r[c ? c - 1 : v - 1]), (l = r[(c + 1) % v]);
    else if (c === 0 || c === v - 1) {
      i.push(_1(r[c]));
      continue;
    } else (u = r[c - 1]), (l = r[c + 1]);
    S1(a, l, u), Xs(a, a, t);
    var g = wl(d, u),
      p = wl(d, l),
      y = g + p;
    y !== 0 && ((g /= y), (p /= y)), Xs(o, a, -g), Xs(s, a, p);
    var m = rv([], d, o),
      _ = rv([], d, s);
    n && (zn(m, m, f), Fn(m, m, h), zn(_, _, f), Fn(_, _, h)),
      i.push(m),
      i.push(_);
  }
  return e && i.push(i.shift()), i;
}
function zy(r, t, e) {
  var n = t.smooth,
    i = t.points;
  if (i && i.length >= 2) {
    if (n) {
      var a = Yw(i, n, e, t.smoothConstraint);
      r.moveTo(i[0][0], i[0][1]);
      for (var o = i.length, s = 0; s < (e ? o : o - 1); s++) {
        var u = a[s * 2],
          l = a[s * 2 + 1],
          f = i[(s + 1) % o];
        r.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      r.moveTo(i[0][0], i[0][1]);
      for (var s = 1, h = i.length; s < h; s++) r.lineTo(i[s][0], i[s][1]);
    }
    e && r.closePath();
  }
}
var $w = (function () {
    function r() {
      (this.points = null), (this.smooth = 0), (this.smoothConstraint = null);
    }
    return r;
  })(),
  Gy = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new $w();
      }),
      (t.prototype.buildPath = function (e, n) {
        zy(e, n, !0);
      }),
      t
    );
  })(rt);
Gy.prototype.type = "polygon";
const Aa = Gy;
var Zw = (function () {
    function r() {
      (this.points = null),
        (this.percent = 1),
        (this.smooth = 0),
        (this.smoothConstraint = null);
    }
    return r;
  })(),
  Hy = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultStyle = function () {
        return { stroke: "#000", fill: null };
      }),
      (t.prototype.getDefaultShape = function () {
        return new Zw();
      }),
      (t.prototype.buildPath = function (e, n) {
        zy(e, n, !1);
      }),
      t
    );
  })(rt);
Hy.prototype.type = "polyline";
const La = Hy;
var Xw = {},
  qw = (function () {
    function r() {
      (this.x1 = 0),
        (this.y1 = 0),
        (this.x2 = 0),
        (this.y2 = 0),
        (this.percent = 1);
    }
    return r;
  })(),
  Vy = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultStyle = function () {
        return { stroke: "#000", fill: null };
      }),
      (t.prototype.getDefaultShape = function () {
        return new qw();
      }),
      (t.prototype.buildPath = function (e, n) {
        var i, a, o, s;
        if (this.subPixelOptimize) {
          var u = dy(Xw, n, this.style);
          (i = u.x1), (a = u.y1), (o = u.x2), (s = u.y2);
        } else (i = n.x1), (a = n.y1), (o = n.x2), (s = n.y2);
        var l = n.percent;
        l !== 0 &&
          (e.moveTo(i, a),
          l < 1 && ((o = i * (1 - l) + o * l), (s = a * (1 - l) + s * l)),
          e.lineTo(o, s));
      }),
      (t.prototype.pointAt = function (e) {
        var n = this.shape;
        return [n.x1 * (1 - e) + n.x2 * e, n.y1 * (1 - e) + n.y2 * e];
      }),
      t
    );
  })(rt);
Vy.prototype.type = "line";
const fn = Vy;
var Wt = [],
  Kw = (function () {
    function r() {
      (this.x1 = 0),
        (this.y1 = 0),
        (this.x2 = 0),
        (this.y2 = 0),
        (this.cpx1 = 0),
        (this.cpy1 = 0),
        (this.percent = 1);
    }
    return r;
  })();
function cc(r, t, e) {
  var n = r.cpx2,
    i = r.cpy2;
  return n != null || i != null
    ? [
        (e ? cv : Tt)(r.x1, r.cpx1, r.cpx2, r.x2, t),
        (e ? cv : Tt)(r.y1, r.cpy1, r.cpy2, r.y2, t),
      ]
    : [
        (e ? dv : Ot)(r.x1, r.cpx1, r.x2, t),
        (e ? dv : Ot)(r.y1, r.cpy1, r.y2, t),
      ];
}
var Wy = (function (r) {
  O(t, r);
  function t(e) {
    return r.call(this, e) || this;
  }
  return (
    (t.prototype.getDefaultStyle = function () {
      return { stroke: "#000", fill: null };
    }),
    (t.prototype.getDefaultShape = function () {
      return new Kw();
    }),
    (t.prototype.buildPath = function (e, n) {
      var i = n.x1,
        a = n.y1,
        o = n.x2,
        s = n.y2,
        u = n.cpx1,
        l = n.cpy1,
        f = n.cpx2,
        h = n.cpy2,
        c = n.percent;
      c !== 0 &&
        (e.moveTo(i, a),
        f == null || h == null
          ? (c < 1 &&
              (Wo(i, u, o, c, Wt),
              (u = Wt[1]),
              (o = Wt[2]),
              Wo(a, l, s, c, Wt),
              (l = Wt[1]),
              (s = Wt[2])),
            e.quadraticCurveTo(u, l, o, s))
          : (c < 1 &&
              (Sr(i, u, f, o, c, Wt),
              (u = Wt[1]),
              (f = Wt[2]),
              (o = Wt[3]),
              Sr(a, l, h, s, c, Wt),
              (l = Wt[1]),
              (h = Wt[2]),
              (s = Wt[3])),
            e.bezierCurveTo(u, l, f, h, o, s)));
    }),
    (t.prototype.pointAt = function (e) {
      return cc(this.shape, e, !1);
    }),
    (t.prototype.tangentAt = function (e) {
      var n = cc(this.shape, e, !0);
      return b1(n, n);
    }),
    t
  );
})(rt);
Wy.prototype.type = "bezier-curve";
const Uy = Wy;
var Qw = (function () {
    function r() {
      (this.cx = 0),
        (this.cy = 0),
        (this.r = 0),
        (this.startAngle = 0),
        (this.endAngle = Math.PI * 2),
        (this.clockwise = !0);
    }
    return r;
  })(),
  Yy = (function (r) {
    O(t, r);
    function t(e) {
      return r.call(this, e) || this;
    }
    return (
      (t.prototype.getDefaultStyle = function () {
        return { stroke: "#000", fill: null };
      }),
      (t.prototype.getDefaultShape = function () {
        return new Qw();
      }),
      (t.prototype.buildPath = function (e, n) {
        var i = n.cx,
          a = n.cy,
          o = Math.max(n.r, 0),
          s = n.startAngle,
          u = n.endAngle,
          l = n.clockwise,
          f = Math.cos(s),
          h = Math.sin(s);
        e.moveTo(f * o + i, h * o + a), e.arc(i, a, o, s, u, !l);
      }),
      t
    );
  })(rt);
Yy.prototype.type = "arc";
const ih = Yy;
var Jw = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = "compound"), e;
  }
  return (
    (t.prototype._updatePathDirty = function () {
      for (
        var e = this.shape.paths, n = this.shapeChanged(), i = 0;
        i < e.length;
        i++
      )
        n = n || e[i].shapeChanged();
      n && this.dirtyShape();
    }),
    (t.prototype.beforeBrush = function () {
      this._updatePathDirty();
      for (
        var e = this.shape.paths || [], n = this.getGlobalScale(), i = 0;
        i < e.length;
        i++
      )
        e[i].path || e[i].createPathProxy(),
          e[i].path.setScale(n[0], n[1], e[i].segmentIgnoreThreshold);
    }),
    (t.prototype.buildPath = function (e, n) {
      for (var i = n.paths || [], a = 0; a < i.length; a++)
        i[a].buildPath(e, i[a].shape, !0);
    }),
    (t.prototype.afterBrush = function () {
      for (var e = this.shape.paths || [], n = 0; n < e.length; n++)
        e[n].pathUpdated();
    }),
    (t.prototype.getBoundingRect = function () {
      return (
        this._updatePathDirty.call(this),
        rt.prototype.getBoundingRect.call(this)
      );
    }),
    t
  );
})(rt);
const jw = Jw;
var tb = (function () {
  function r(t) {
    this.colorStops = t || [];
  }
  return (
    (r.prototype.addColorStop = function (t, e) {
      this.colorStops.push({ offset: t, color: e });
    }),
    r
  );
})();
const $y = tb;
var eb = (function (r) {
  O(t, r);
  function t(e, n, i, a, o, s) {
    var u = r.call(this, o) || this;
    return (
      (u.x = e == null ? 0 : e),
      (u.y = n == null ? 0 : n),
      (u.x2 = i == null ? 1 : i),
      (u.y2 = a == null ? 0 : a),
      (u.type = "linear"),
      (u.global = s || !1),
      u
    );
  }
  return t;
})($y);
const Zy = eb;
var rb = (function (r) {
  O(t, r);
  function t(e, n, i, a, o) {
    var s = r.call(this, a) || this;
    return (
      (s.x = e == null ? 0.5 : e),
      (s.y = n == null ? 0.5 : n),
      (s.r = i == null ? 0.5 : i),
      (s.type = "radial"),
      (s.global = o || !1),
      s
    );
  }
  return t;
})($y);
const nb = rb;
var Gr = [0, 0],
  Hr = [0, 0],
  Qa = new Z(),
  Ja = new Z(),
  ib = (function () {
    function r(t, e) {
      (this._corners = []), (this._axes = []), (this._origin = [0, 0]);
      for (var n = 0; n < 4; n++) this._corners[n] = new Z();
      for (var n = 0; n < 2; n++) this._axes[n] = new Z();
      t && this.fromBoundingRect(t, e);
    }
    return (
      (r.prototype.fromBoundingRect = function (t, e) {
        var n = this._corners,
          i = this._axes,
          a = t.x,
          o = t.y,
          s = a + t.width,
          u = o + t.height;
        if ((n[0].set(a, o), n[1].set(s, o), n[2].set(s, u), n[3].set(a, u), e))
          for (var l = 0; l < 4; l++) n[l].transform(e);
        Z.sub(i[0], n[1], n[0]),
          Z.sub(i[1], n[3], n[0]),
          i[0].normalize(),
          i[1].normalize();
        for (var l = 0; l < 2; l++) this._origin[l] = i[l].dot(n[0]);
      }),
      (r.prototype.intersect = function (t, e) {
        var n = !0,
          i = !e;
        return (
          Qa.set(1 / 0, 1 / 0),
          Ja.set(0, 0),
          (!this._intersectCheckOneSide(this, t, Qa, Ja, i, 1) &&
            ((n = !1), i)) ||
            (!this._intersectCheckOneSide(t, this, Qa, Ja, i, -1) &&
              ((n = !1), i)) ||
            i ||
            Z.copy(e, n ? Qa : Ja),
          n
        );
      }),
      (r.prototype._intersectCheckOneSide = function (t, e, n, i, a, o) {
        for (var s = !0, u = 0; u < 2; u++) {
          var l = this._axes[u];
          if (
            (this._getProjMinMaxOnAxis(u, t._corners, Gr),
            this._getProjMinMaxOnAxis(u, e._corners, Hr),
            Gr[1] < Hr[0] || Gr[0] > Hr[1])
          ) {
            if (((s = !1), a)) return s;
            var f = Math.abs(Hr[0] - Gr[1]),
              h = Math.abs(Gr[0] - Hr[1]);
            Math.min(f, h) > i.len() &&
              (f < h ? Z.scale(i, l, -f * o) : Z.scale(i, l, h * o));
          } else if (n) {
            var f = Math.abs(Hr[0] - Gr[1]),
              h = Math.abs(Gr[0] - Hr[1]);
            Math.min(f, h) < n.len() &&
              (f < h ? Z.scale(n, l, f * o) : Z.scale(n, l, -h * o));
          }
        }
        return s;
      }),
      (r.prototype._getProjMinMaxOnAxis = function (t, e, n) {
        for (
          var i = this._axes[t],
            a = this._origin,
            o = e[0].dot(i) + a[t],
            s = o,
            u = o,
            l = 1;
          l < e.length;
          l++
        ) {
          var f = e[l].dot(i) + a[t];
          (s = Math.min(f, s)), (u = Math.max(f, u));
        }
        (n[0] = s), (n[1] = u);
      }),
      r
    );
  })();
const Ko = ib;
var ab = [],
  ob = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.notClear = !0),
        (e.incremental = !0),
        (e._displayables = []),
        (e._temporaryDisplayables = []),
        (e._cursor = 0),
        e
      );
    }
    return (
      (t.prototype.traverse = function (e, n) {
        e.call(n, this);
      }),
      (t.prototype.useStyle = function () {
        this.style = {};
      }),
      (t.prototype.getCursor = function () {
        return this._cursor;
      }),
      (t.prototype.innerAfterBrush = function () {
        this._cursor = this._displayables.length;
      }),
      (t.prototype.clearDisplaybles = function () {
        (this._displayables = []),
          (this._temporaryDisplayables = []),
          (this._cursor = 0),
          this.markRedraw(),
          (this.notClear = !1);
      }),
      (t.prototype.clearTemporalDisplayables = function () {
        this._temporaryDisplayables = [];
      }),
      (t.prototype.addDisplayable = function (e, n) {
        n ? this._temporaryDisplayables.push(e) : this._displayables.push(e),
          this.markRedraw();
      }),
      (t.prototype.addDisplayables = function (e, n) {
        n = n || !1;
        for (var i = 0; i < e.length; i++) this.addDisplayable(e[i], n);
      }),
      (t.prototype.getDisplayables = function () {
        return this._displayables;
      }),
      (t.prototype.getTemporalDisplayables = function () {
        return this._temporaryDisplayables;
      }),
      (t.prototype.eachPendingDisplayable = function (e) {
        for (var n = this._cursor; n < this._displayables.length; n++)
          e && e(this._displayables[n]);
        for (var n = 0; n < this._temporaryDisplayables.length; n++)
          e && e(this._temporaryDisplayables[n]);
      }),
      (t.prototype.update = function () {
        this.updateTransform();
        for (var e = this._cursor; e < this._displayables.length; e++) {
          var n = this._displayables[e];
          (n.parent = this), n.update(), (n.parent = null);
        }
        for (var e = 0; e < this._temporaryDisplayables.length; e++) {
          var n = this._temporaryDisplayables[e];
          (n.parent = this), n.update(), (n.parent = null);
        }
      }),
      (t.prototype.getBoundingRect = function () {
        if (!this._rect) {
          for (
            var e = new at(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0;
            n < this._displayables.length;
            n++
          ) {
            var i = this._displayables[n],
              a = i.getBoundingRect().clone();
            i.needLocalTransform() && a.applyTransform(i.getLocalTransform(ab)),
              e.union(a);
          }
          this._rect = e;
        }
        return this._rect;
      }),
      (t.prototype.contain = function (e, n) {
        var i = this.transformCoordToLocal(e, n),
          a = this.getBoundingRect();
        if (a.contain(i[0], i[1]))
          for (var o = 0; o < this._displayables.length; o++) {
            var s = this._displayables[o];
            if (s.contain(e, n)) return !0;
          }
        return !1;
      }),
      t
    );
  })(ui);
const sb = ob;
var Xy = gt();
function Ms(r, t, e, n, i) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(),
    u = r === "update";
  if (s) {
    var l = void 0,
      f = void 0,
      h = void 0;
    n
      ? ((l = nt(n.duration, 200)), (f = nt(n.easing, "cubicOut")), (h = 0))
      : ((l = t.getShallow(
          u ? "animationDurationUpdate" : "animationDuration"
        )),
        (f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing")),
        (h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay"))),
      a &&
        (a.duration != null && (l = a.duration),
        a.easing != null && (f = a.easing),
        a.delay != null && (h = a.delay)),
      U(h) && (h = h(e, i)),
      U(l) && (l = l(e));
    var c = { duration: l || 0, delay: h, easing: f };
    return c;
  } else return null;
}
function ah(r, t, e, n, i, a, o) {
  var s = !1,
    u;
  U(i)
    ? ((o = a), (a = i), (i = null))
    : H(i) &&
      ((a = i.cb),
      (o = i.during),
      (s = i.isFrom),
      (u = i.removeOpt),
      (i = i.dataIndex));
  var l = r === "leave";
  l || t.stopAnimation("leave");
  var f = Ms(
    r,
    n,
    i,
    l ? u || {} : null,
    n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null
  );
  if (f && f.duration > 0) {
    var h = f.duration,
      c = f.delay,
      v = f.easing,
      d = {
        duration: h,
        delay: c || 0,
        easing: v,
        done: a,
        force: !!a || !!o,
        setToFinal: !l,
        scope: r,
        during: o,
      };
    s ? t.animateFrom(e, d) : t.animateTo(e, d);
  } else t.stopAnimation(), !s && t.attr(e), o && o(1), a && a();
}
function we(r, t, e, n, i, a) {
  ah("update", r, t, e, n, i, a);
}
function Ke(r, t, e, n, i, a) {
  ah("enter", r, t, e, n, i, a);
}
function Xn(r) {
  if (!r.__zr) return !0;
  for (var t = 0; t < r.animators.length; t++) {
    var e = r.animators[t];
    if (e.scope === "leave") return !0;
  }
  return !1;
}
function Qo(r, t, e, n, i, a) {
  Xn(r) || ah("leave", r, t, e, n, i, a);
}
function dc(r, t, e, n) {
  r.removeTextContent(),
    r.removeTextGuideLine(),
    Qo(r, { style: { opacity: 0 } }, t, e, n);
}
function ub(r, t, e) {
  function n() {
    r.parent && r.parent.remove(r);
  }
  r.isGroup
    ? r.traverse(function (i) {
        i.isGroup || dc(i, t, e, n);
      })
    : dc(r, t, e, n);
}
function lb(r) {
  Xy(r).oldStyle = r.style;
}
function fb(r) {
  return Xy(r).oldStyle;
}
var Jo = Math.max,
  jo = Math.min,
  Kl = {};
function hb(r) {
  return rt.extend(r);
}
var vb = kw;
function cb(r, t) {
  return vb(r, t);
}
function be(r, t) {
  Kl[r] = t;
}
function db(r) {
  if (Kl.hasOwnProperty(r)) return Kl[r];
}
function oh(r, t, e, n) {
  var i = Ow(r, t);
  return e && (n === "center" && (e = Ky(e, i.getBoundingRect())), Qy(i, e)), i;
}
function qy(r, t, e) {
  var n = new pn({
    style: { image: r, x: t.x, y: t.y, width: t.width, height: t.height },
    onload: function (i) {
      if (e === "center") {
        var a = { width: i.width, height: i.height };
        n.setStyle(Ky(t, a));
      }
    },
  });
  return n;
}
function Ky(r, t) {
  var e = t.width / t.height,
    n = r.height * e,
    i;
  n <= r.width ? (i = r.height) : ((n = r.width), (i = n / e));
  var a = r.x + r.width / 2,
    o = r.y + r.height / 2;
  return { x: a - n / 2, y: o - i / 2, width: n, height: i };
}
var pb = Bw;
function Qy(r, t) {
  if (!!r.applyTransform) {
    var e = r.getBoundingRect(),
      n = e.calculateTransform(t);
    r.applyTransform(n);
  }
}
function gb(r) {
  return dy(r.shape, r.shape, r.style), r;
}
function yb(r) {
  return py(r.shape, r.shape, r.style), r;
}
var mb = jr;
function Ds(r, t) {
  for (var e = Uf([]); r && r !== t; )
    Zn(e, r.getLocalTransform(), e), (r = r.parent);
  return e;
}
function la(r, t, e) {
  return (
    t && !Ht(t) && (t = Ca.getLocalTransform(t)),
    e && (t = ms([], t)),
    fe([], r, t)
  );
}
function sh(r, t, e) {
  var n =
      t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs((2 * t[4]) / t[0]),
    i =
      t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs((2 * t[4]) / t[2]),
    a = [
      r === "left" ? -n : r === "right" ? n : 0,
      r === "top" ? -i : r === "bottom" ? i : 0,
    ];
  return (
    (a = la(a, t, e)),
    Math.abs(a[0]) > Math.abs(a[1])
      ? a[0] > 0
        ? "right"
        : "left"
      : a[1] > 0
      ? "bottom"
      : "top"
  );
}
function pc(r) {
  return !r.isGroup;
}
function _b(r) {
  return r.shape != null;
}
function Jy(r, t, e) {
  if (!r || !t) return;
  function n(o) {
    var s = {};
    return (
      o.traverse(function (u) {
        pc(u) && u.anid && (s[u.anid] = u);
      }),
      s
    );
  }
  function i(o) {
    var s = { x: o.x, y: o.y, rotation: o.rotation };
    return _b(o) && (s.shape = k({}, o.shape)), s;
  }
  var a = n(r);
  t.traverse(function (o) {
    if (pc(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = i(o);
        o.attr(i(s)), we(o, u, e, ut(o).dataIndex);
      }
    }
  });
}
function jy(r, t) {
  return z(r, function (e) {
    var n = e[0];
    (n = Jo(n, t.x)), (n = jo(n, t.x + t.width));
    var i = e[1];
    return (i = Jo(i, t.y)), (i = jo(i, t.y + t.height)), [n, i];
  });
}
function Sb(r, t) {
  var e = Jo(r.x, t.x),
    n = jo(r.x + r.width, t.x + t.width),
    i = Jo(r.y, t.y),
    a = jo(r.y + r.height, t.y + t.height);
  if (n >= e && a >= i) return { x: e, y: i, width: n - e, height: a - i };
}
function As(r, t, e) {
  var n = k({ rectHover: !0 }, t),
    i = (n.style = { strokeNoScale: !0 });
  if (((e = e || { x: -1, y: -1, width: 2, height: 2 }), r))
    return r.indexOf("image://") === 0
      ? ((i.image = r.slice(8)), q(i, e), new pn(n))
      : oh(r.replace("path://", ""), n, e, "center");
}
function xb(r, t, e, n, i) {
  for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
    var s = i[a];
    if (tm(r, t, e, n, s[0], s[1], o[0], o[1])) return !0;
    o = s;
  }
}
function tm(r, t, e, n, i, a, o, s) {
  var u = e - r,
    l = n - t,
    f = o - i,
    h = s - a,
    c = Lu(f, h, u, l);
  if (wb(c)) return !1;
  var v = r - i,
    d = t - a,
    g = Lu(v, d, u, l) / c;
  if (g < 0 || g > 1) return !1;
  var p = Lu(v, d, f, h) / c;
  return !(p < 0 || p > 1);
}
function Lu(r, t, e, n) {
  return r * n - e * t;
}
function wb(r) {
  return r <= 1e-6 && r >= -1e-6;
}
function Ls(r) {
  var t = r.itemTooltipOption,
    e = r.componentModel,
    n = r.itemName,
    i = G(t) ? { formatter: t } : t,
    a = e.mainType,
    o = e.componentIndex,
    s = { componentType: a, name: n, $vars: ["name"] };
  s[a + "Index"] = o;
  var u = r.formatterParamsExtra;
  u &&
    C(pt(u), function (f) {
      Ze(s, f) || ((s[f] = u[f]), s.$vars.push(f));
    });
  var l = ut(r.el);
  (l.componentMainType = a),
    (l.componentIndex = o),
    (l.tooltipConfig = {
      name: n,
      option: q({ content: n, formatterParams: s }, i),
    });
}
function gc(r, t) {
  var e;
  r.isGroup && (e = t(r)), e || r.traverse(t);
}
function uh(r, t) {
  if (r)
    if (N(r)) for (var e = 0; e < r.length; e++) gc(r[e], t);
    else gc(r, t);
}
be("circle", nh);
be("ellipse", Oy);
be("sector", ua);
be("ring", Fy);
be("polygon", Aa);
be("polyline", La);
be("rect", yt);
be("line", fn);
be("bezierCurve", Uy);
be("arc", ih);
const bb = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      updateProps: we,
      initProps: Ke,
      removeElement: Qo,
      removeElementWithFadeOut: ub,
      isElementRemoved: Xn,
      extendShape: hb,
      extendPath: cb,
      registerShape: be,
      getShapeClass: db,
      makePath: oh,
      makeImage: qy,
      mergePath: pb,
      resizePath: Qy,
      subPixelOptimizeLine: gb,
      subPixelOptimizeRect: yb,
      subPixelOptimize: mb,
      getTransform: Ds,
      applyTransform: la,
      transformDirection: sh,
      groupTransition: Jy,
      clipPointsByRect: jy,
      clipRectByRect: Sb,
      createIcon: As,
      linePolygonIntersect: xb,
      lineLineIntersect: tm,
      setTooltipConfig: Ls,
      traverseElements: uh,
      Group: bt,
      Image: pn,
      Text: Dt,
      Circle: nh,
      Ellipse: Oy,
      Sector: ua,
      Ring: Fy,
      Polygon: Aa,
      Polyline: La,
      Rect: yt,
      Line: fn,
      BezierCurve: Uy,
      Arc: ih,
      IncrementalDisplayable: sb,
      CompoundPath: jw,
      LinearGradient: Zy,
      RadialGradient: nb,
      BoundingRect: at,
      OrientedBoundingRect: Ko,
      Point: Z,
      Path: rt,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var Is = {};
function em(r, t) {
  for (var e = 0; e < he.length; e++) {
    var n = he[e],
      i = t[n],
      a = r.ensureState(n);
    (a.style = a.style || {}), (a.style.text = i);
  }
  var o = r.currentStates.slice();
  r.clearStates(!0), r.setStyle({ text: t.normal }), r.useStates(o, !0);
}
function Ql(r, t, e) {
  var n = r.labelFetcher,
    i = r.labelDataIndex,
    a = r.labelDimIndex,
    o = t.normal,
    s;
  n &&
    (s = n.getFormattedLabel(
      i,
      "normal",
      null,
      a,
      o && o.get("formatter"),
      e != null ? { interpolatedValue: e } : null
    )),
    s == null &&
      (s = U(r.defaultText) ? r.defaultText(i, r, e) : r.defaultText);
  for (var u = { normal: s }, l = 0; l < he.length; l++) {
    var f = he[l],
      h = t[f];
    u[f] = nt(
      n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null,
      s
    );
  }
  return u;
}
function lh(r, t, e, n) {
  e = e || Is;
  for (var i = r instanceof Dt, a = !1, o = 0; o < Xo.length; o++) {
    var s = t[Xo[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = i ? r : r.getTextContent();
  if (a) {
    i ||
      (u || ((u = new Dt()), r.setTextContent(u)),
      r.stateProxy && (u.stateProxy = r.stateProxy));
    var l = Ql(e, t),
      f = t.normal,
      h = !!f.getShallow("show"),
      c = Qe(f, n && n.normal, e, !1, !i);
    (c.text = l.normal), i || r.setTextConfig(yc(f, e, !1));
    for (var o = 0; o < he.length; o++) {
      var v = he[o],
        s = t[v];
      if (s) {
        var d = u.ensureState(v),
          g = !!nt(s.getShallow("show"), h);
        if (
          (g !== h && (d.ignore = !g),
          (d.style = Qe(s, n && n[v], e, !0, !i)),
          (d.style.text = l[v]),
          !i)
        ) {
          var p = r.ensureState(v);
          p.textConfig = yc(s, e, !0);
        }
      }
    }
    (u.silent = !!f.getShallow("silent")),
      u.style.x != null && (c.x = u.style.x),
      u.style.y != null && (c.y = u.style.y),
      (u.ignore = !h),
      u.useStyle(c),
      u.dirty(),
      e.enableTextSetter &&
        (Ps(u).setLabelText = function (y) {
          var m = Ql(e, t, y);
          em(u, m);
        });
  } else u && (u.ignore = !0);
  r.dirty();
}
function fh(r, t) {
  t = t || "label";
  for (var e = { normal: r.getModel(t) }, n = 0; n < he.length; n++) {
    var i = he[n];
    e[i] = r.getModel([i, t]);
  }
  return e;
}
function Qe(r, t, e, n, i) {
  var a = {};
  return Tb(a, r, e, n, i), t && k(a, t), a;
}
function yc(r, t, e) {
  t = t || {};
  var n = {},
    i,
    a = r.getShallow("rotate"),
    o = nt(r.getShallow("distance"), e ? null : 5),
    s = r.getShallow("offset");
  return (
    (i = r.getShallow("position") || (e ? null : "inside")),
    i === "outside" && (i = t.defaultOutsidePosition || "top"),
    i != null && (n.position = i),
    s != null && (n.offset = s),
    a != null && ((a *= Math.PI / 180), (n.rotation = a)),
    o != null && (n.distance = o),
    (n.outsideFill =
      r.get("color") === "inherit" ? t.inheritColor || null : "auto"),
    n
  );
}
function Tb(r, t, e, n, i) {
  e = e || Is;
  var a = t.ecModel,
    o = a && a.option.textStyle,
    s = Cb(t),
    u;
  if (s) {
    u = {};
    for (var l in s)
      if (s.hasOwnProperty(l)) {
        var f = t.getModel(["rich", l]);
        xc((u[l] = {}), f, o, e, n, i, !1, !0);
      }
  }
  u && (r.rich = u);
  var h = t.get("overflow");
  h && (r.overflow = h);
  var c = t.get("minMargin");
  c != null && (r.margin = c), xc(r, t, o, e, n, i, !0, !1);
}
function Cb(r) {
  for (var t; r && r !== r.ecModel; ) {
    var e = (r.option || Is).rich;
    if (e) {
      t = t || {};
      for (var n = pt(e), i = 0; i < n.length; i++) {
        var a = n[i];
        t[a] = 1;
      }
    }
    r = r.parentModel;
  }
  return t;
}
var mc = [
    "fontStyle",
    "fontWeight",
    "fontSize",
    "fontFamily",
    "textShadowColor",
    "textShadowBlur",
    "textShadowOffsetX",
    "textShadowOffsetY",
  ],
  _c = ["align", "lineHeight", "width", "height", "tag", "verticalAlign"],
  Sc = [
    "padding",
    "borderWidth",
    "borderRadius",
    "borderDashOffset",
    "backgroundColor",
    "borderColor",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
  ];
function xc(r, t, e, n, i, a, o, s) {
  e = (!i && e) || Is;
  var u = n && n.inheritColor,
    l = t.getShallow("color"),
    f = t.getShallow("textBorderColor"),
    h = nt(t.getShallow("opacity"), e.opacity);
  (l === "inherit" || l === "auto") && (u ? (l = u) : (l = null)),
    (f === "inherit" || f === "auto") && (u ? (f = u) : (f = null)),
    a || ((l = l || e.color), (f = f || e.textBorderColor)),
    l != null && (r.fill = l),
    f != null && (r.stroke = f);
  var c = nt(t.getShallow("textBorderWidth"), e.textBorderWidth);
  c != null && (r.lineWidth = c);
  var v = nt(t.getShallow("textBorderType"), e.textBorderType);
  v != null && (r.lineDash = v);
  var d = nt(t.getShallow("textBorderDashOffset"), e.textBorderDashOffset);
  d != null && (r.lineDashOffset = d),
    !i && h == null && !s && (h = n && n.defaultOpacity),
    h != null && (r.opacity = h),
    !i && !a && r.fill == null && n.inheritColor && (r.fill = n.inheritColor);
  for (var g = 0; g < mc.length; g++) {
    var p = mc[g],
      y = nt(t.getShallow(p), e[p]);
    y != null && (r[p] = y);
  }
  for (var g = 0; g < _c.length; g++) {
    var p = _c[g],
      y = t.getShallow(p);
    y != null && (r[p] = y);
  }
  if (r.verticalAlign == null) {
    var m = t.getShallow("baseline");
    m != null && (r.verticalAlign = m);
  }
  if (!o || !n.disableBox) {
    for (var g = 0; g < Sc.length; g++) {
      var p = Sc[g],
        y = t.getShallow(p);
      y != null && (r[p] = y);
    }
    var _ = t.getShallow("borderType");
    _ != null && (r.borderDash = _),
      (r.backgroundColor === "auto" || r.backgroundColor === "inherit") &&
        u &&
        (r.backgroundColor = u),
      (r.borderColor === "auto" || r.borderColor === "inherit") &&
        u &&
        (r.borderColor = u);
  }
}
function Mb(r, t) {
  var e = t && t.getModel("textStyle");
  return Pe(
    [
      r.fontStyle || (e && e.getShallow("fontStyle")) || "",
      r.fontWeight || (e && e.getShallow("fontWeight")) || "",
      (r.fontSize || (e && e.getShallow("fontSize")) || 12) + "px",
      r.fontFamily || (e && e.getShallow("fontFamily")) || "sans-serif",
    ].join(" ")
  );
}
var Ps = gt();
function Db(r, t, e, n, i) {
  var a = Ps(r);
  if (!a.valueAnimation || a.prevValue === a.value) return;
  var o = a.defaultInterpolatedText,
    s = nt(a.interpolatedValue, a.prevValue),
    u = a.value;
  function l(f) {
    var h = ry(e, a.precision, s, u, f);
    a.interpolatedValue = f === 1 ? null : h;
    var c = Ql(
      { labelDataIndex: t, labelFetcher: i, defaultText: o ? o(h) : h + "" },
      a.statesModels,
      h
    );
    em(r, c);
  }
  (r.percent = 0),
    (a.prevValue == null ? Ke : we)(r, { percent: 1 }, n, t, null, l);
}
var Ab = ["textStyle", "color"],
  Iu = [
    "fontStyle",
    "fontWeight",
    "fontSize",
    "fontFamily",
    "padding",
    "lineHeight",
    "rich",
    "width",
    "height",
    "overflow",
  ],
  Pu = new Dt(),
  Lb = (function () {
    function r() {}
    return (
      (r.prototype.getTextColor = function (t) {
        var e = this.ecModel;
        return this.getShallow("color") || (!t && e ? e.get(Ab) : null);
      }),
      (r.prototype.getFont = function () {
        return Mb(
          {
            fontStyle: this.getShallow("fontStyle"),
            fontWeight: this.getShallow("fontWeight"),
            fontSize: this.getShallow("fontSize"),
            fontFamily: this.getShallow("fontFamily"),
          },
          this.ecModel
        );
      }),
      (r.prototype.getTextRect = function (t) {
        for (
          var e = {
              text: t,
              verticalAlign:
                this.getShallow("verticalAlign") || this.getShallow("baseline"),
            },
            n = 0;
          n < Iu.length;
          n++
        )
          e[Iu[n]] = this.getShallow(Iu[n]);
        return Pu.useStyle(e), Pu.update(), Pu.getBoundingRect();
      }),
      r
    );
  })();
const Ib = Lb;
var rm = [
    ["lineWidth", "width"],
    ["stroke", "color"],
    ["opacity"],
    ["shadowBlur"],
    ["shadowOffsetX"],
    ["shadowOffsetY"],
    ["shadowColor"],
    ["lineDash", "type"],
    ["lineDashOffset", "dashOffset"],
    ["lineCap", "cap"],
    ["lineJoin", "join"],
    ["miterLimit"],
  ],
  Pb = sa(rm),
  Rb = (function () {
    function r() {}
    return (
      (r.prototype.getLineStyle = function (t) {
        return Pb(this, t);
      }),
      r
    );
  })(),
  nm = [
    ["fill", "color"],
    ["stroke", "borderColor"],
    ["lineWidth", "borderWidth"],
    ["opacity"],
    ["shadowBlur"],
    ["shadowOffsetX"],
    ["shadowOffsetY"],
    ["shadowColor"],
    ["lineDash", "borderType"],
    ["lineDashOffset", "borderDashOffset"],
    ["lineCap", "borderCap"],
    ["lineJoin", "borderJoin"],
    ["miterLimit", "borderMiterLimit"],
  ],
  Eb = sa(nm),
  Ob = (function () {
    function r() {}
    return (
      (r.prototype.getItemStyle = function (t, e) {
        return Eb(this, t, e);
      }),
      r
    );
  })(),
  gn = (function () {
    function r(t, e, n) {
      (this.parentModel = e), (this.ecModel = n), (this.option = t);
    }
    return (
      (r.prototype.init = function (t, e, n) {}),
      (r.prototype.mergeOption = function (t, e) {
        Q(this.option, t, !0);
      }),
      (r.prototype.get = function (t, e) {
        return t == null
          ? this.option
          : this._doGet(this.parsePath(t), !e && this.parentModel);
      }),
      (r.prototype.getShallow = function (t, e) {
        var n = this.option,
          i = n == null ? n : n[t];
        if (i == null && !e) {
          var a = this.parentModel;
          a && (i = a.getShallow(t));
        }
        return i;
      }),
      (r.prototype.getModel = function (t, e) {
        var n = t != null,
          i = n ? this.parsePath(t) : null,
          a = n ? this._doGet(i) : this.option;
        return (
          (e =
            e ||
            (this.parentModel &&
              this.parentModel.getModel(this.resolveParentPath(i)))),
          new r(a, e, this.ecModel)
        );
      }),
      (r.prototype.isEmpty = function () {
        return this.option == null;
      }),
      (r.prototype.restoreData = function () {}),
      (r.prototype.clone = function () {
        var t = this.constructor;
        return new t(K(this.option));
      }),
      (r.prototype.parsePath = function (t) {
        return typeof t == "string" ? t.split(".") : t;
      }),
      (r.prototype.resolveParentPath = function (t) {
        return t;
      }),
      (r.prototype.isAnimationEnabled = function () {
        if (!j.node && this.option) {
          if (this.option.animation != null) return !!this.option.animation;
          if (this.parentModel) return this.parentModel.isAnimationEnabled();
        }
      }),
      (r.prototype._doGet = function (t, e) {
        var n = this.option;
        if (!t) return n;
        for (
          var i = 0;
          i < t.length &&
          !(
            !!t[i] &&
            ((n = n && typeof n == "object" ? n[t[i]] : null), n == null)
          );
          i++
        );
        return (
          n == null &&
            e &&
            (n = e._doGet(this.resolveParentPath(t), e.parentModel)),
          n
        );
      }),
      r
    );
  })();
Qf(gn);
hx(gn);
Ne(gn, Rb);
Ne(gn, Ob);
Ne(gn, gx);
Ne(gn, Ib);
const At = gn;
var kb = Math.round(Math.random() * 10);
function Ia(r) {
  return [r || "", kb++].join("_");
}
function Bb(r) {
  var t = {};
  (r.registerSubTypeDefaulter = function (e, n) {
    var i = Re(e);
    t[i.main] = n;
  }),
    (r.determineSubType = function (e, n) {
      var i = n.type;
      if (!i) {
        var a = Re(e).main;
        r.hasSubTypes(e) && t[a] && (i = t[a](n));
      }
      return i;
    });
}
function Nb(r, t) {
  r.topologicalTravel = function (a, o, s, u) {
    if (!a.length) return;
    var l = e(o),
      f = l.graph,
      h = l.noEntryList,
      c = {};
    for (
      C(a, function (m) {
        c[m] = !0;
      });
      h.length;

    ) {
      var v = h.pop(),
        d = f[v],
        g = !!c[v];
      g && (s.call(u, v, d.originalDeps.slice()), delete c[v]),
        C(d.successor, g ? y : p);
    }
    C(c, function () {
      var m = "";
      throw new Error(m);
    });
    function p(m) {
      f[m].entryCount--, f[m].entryCount === 0 && h.push(m);
    }
    function y(m) {
      (c[m] = !0), p(m);
    }
  };
  function e(a) {
    var o = {},
      s = [];
    return (
      C(a, function (u) {
        var l = n(o, u),
          f = (l.originalDeps = t(u)),
          h = i(f, a);
        (l.entryCount = h.length),
          l.entryCount === 0 && s.push(u),
          C(h, function (c) {
            J(l.predecessor, c) < 0 && l.predecessor.push(c);
            var v = n(o, c);
            J(v.successor, c) < 0 && v.successor.push(u);
          });
      }),
      { graph: o, noEntryList: s }
    );
  }
  function n(a, o) {
    return a[o] || (a[o] = { predecessor: [], successor: [] }), a[o];
  }
  function i(a, o) {
    var s = [];
    return (
      C(a, function (u) {
        J(o, u) >= 0 && s.push(u);
      }),
      s
    );
  }
}
function hh(r, t) {
  return Q(Q({}, r, !0), t, !0);
}
const Fb = {
    time: {
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthAbbr: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    legend: { selector: { all: "All", inverse: "Inv" } },
    toolbox: {
      brush: {
        title: {
          rect: "Box Select",
          polygon: "Lasso Select",
          lineX: "Horizontally Select",
          lineY: "Vertically Select",
          keep: "Keep Selections",
          clear: "Clear Selections",
        },
      },
      dataView: { title: "Data View", lang: ["Data View", "Close", "Refresh"] },
      dataZoom: { title: { zoom: "Zoom", back: "Zoom Reset" } },
      magicType: {
        title: {
          line: "Switch to Line Chart",
          bar: "Switch to Bar Chart",
          stack: "Stack",
          tiled: "Tile",
        },
      },
      restore: { title: "Restore" },
      saveAsImage: {
        title: "Save as Image",
        lang: ["Right Click to Save Image"],
      },
    },
    series: {
      typeNames: {
        pie: "Pie chart",
        bar: "Bar chart",
        line: "Line chart",
        scatter: "Scatter plot",
        effectScatter: "Ripple scatter plot",
        radar: "Radar chart",
        tree: "Tree",
        treemap: "Treemap",
        boxplot: "Boxplot",
        candlestick: "Candlestick",
        k: "K line chart",
        heatmap: "Heat map",
        map: "Map",
        parallel: "Parallel coordinate map",
        lines: "Line graph",
        graph: "Relationship graph",
        sankey: "Sankey diagram",
        funnel: "Funnel chart",
        gauge: "Gauge",
        pictorialBar: "Pictorial bar",
        themeRiver: "Theme River Map",
        sunburst: "Sunburst",
      },
    },
    aria: {
      general: {
        withTitle: 'This is a chart about "{title}"',
        withoutTitle: "This is a chart",
      },
      series: {
        single: {
          prefix: "",
          withName: " with type {seriesType} named {seriesName}.",
          withoutName: " with type {seriesType}.",
        },
        multiple: {
          prefix: ". It consists of {seriesCount} series count.",
          withName:
            " The {seriesId} series is a {seriesType} representing {seriesName}.",
          withoutName: " The {seriesId} series is a {seriesType}.",
          separator: { middle: "", end: "" },
        },
      },
      data: {
        allData: "The data is as follows: ",
        partialData: "The first {displayCnt} items are: ",
        withName: "the data for {name} is {value}",
        withoutName: "{value}",
        separator: { middle: ", ", end: ". " },
      },
    },
  },
  zb = {
    time: {
      month: [
        "\u4E00\u6708",
        "\u4E8C\u6708",
        "\u4E09\u6708",
        "\u56DB\u6708",
        "\u4E94\u6708",
        "\u516D\u6708",
        "\u4E03\u6708",
        "\u516B\u6708",
        "\u4E5D\u6708",
        "\u5341\u6708",
        "\u5341\u4E00\u6708",
        "\u5341\u4E8C\u6708",
      ],
      monthAbbr: [
        "1\u6708",
        "2\u6708",
        "3\u6708",
        "4\u6708",
        "5\u6708",
        "6\u6708",
        "7\u6708",
        "8\u6708",
        "9\u6708",
        "10\u6708",
        "11\u6708",
        "12\u6708",
      ],
      dayOfWeek: [
        "\u661F\u671F\u65E5",
        "\u661F\u671F\u4E00",
        "\u661F\u671F\u4E8C",
        "\u661F\u671F\u4E09",
        "\u661F\u671F\u56DB",
        "\u661F\u671F\u4E94",
        "\u661F\u671F\u516D",
      ],
      dayOfWeekAbbr: [
        "\u65E5",
        "\u4E00",
        "\u4E8C",
        "\u4E09",
        "\u56DB",
        "\u4E94",
        "\u516D",
      ],
    },
    legend: { selector: { all: "\u5168\u9009", inverse: "\u53CD\u9009" } },
    toolbox: {
      brush: {
        title: {
          rect: "\u77E9\u5F62\u9009\u62E9",
          polygon: "\u5708\u9009",
          lineX: "\u6A2A\u5411\u9009\u62E9",
          lineY: "\u7EB5\u5411\u9009\u62E9",
          keep: "\u4FDD\u6301\u9009\u62E9",
          clear: "\u6E05\u9664\u9009\u62E9",
        },
      },
      dataView: {
        title: "\u6570\u636E\u89C6\u56FE",
        lang: ["\u6570\u636E\u89C6\u56FE", "\u5173\u95ED", "\u5237\u65B0"],
      },
      dataZoom: {
        title: {
          zoom: "\u533A\u57DF\u7F29\u653E",
          back: "\u533A\u57DF\u7F29\u653E\u8FD8\u539F",
        },
      },
      magicType: {
        title: {
          line: "\u5207\u6362\u4E3A\u6298\u7EBF\u56FE",
          bar: "\u5207\u6362\u4E3A\u67F1\u72B6\u56FE",
          stack: "\u5207\u6362\u4E3A\u5806\u53E0",
          tiled: "\u5207\u6362\u4E3A\u5E73\u94FA",
        },
      },
      restore: { title: "\u8FD8\u539F" },
      saveAsImage: {
        title: "\u4FDD\u5B58\u4E3A\u56FE\u7247",
        lang: ["\u53F3\u952E\u53E6\u5B58\u4E3A\u56FE\u7247"],
      },
    },
    series: {
      typeNames: {
        pie: "\u997C\u56FE",
        bar: "\u67F1\u72B6\u56FE",
        line: "\u6298\u7EBF\u56FE",
        scatter: "\u6563\u70B9\u56FE",
        effectScatter: "\u6D9F\u6F2A\u6563\u70B9\u56FE",
        radar: "\u96F7\u8FBE\u56FE",
        tree: "\u6811\u56FE",
        treemap: "\u77E9\u5F62\u6811\u56FE",
        boxplot: "\u7BB1\u578B\u56FE",
        candlestick: "K\u7EBF\u56FE",
        k: "K\u7EBF\u56FE",
        heatmap: "\u70ED\u529B\u56FE",
        map: "\u5730\u56FE",
        parallel: "\u5E73\u884C\u5750\u6807\u56FE",
        lines: "\u7EBF\u56FE",
        graph: "\u5173\u7CFB\u56FE",
        sankey: "\u6851\u57FA\u56FE",
        funnel: "\u6F0F\u6597\u56FE",
        gauge: "\u4EEA\u8868\u76D8\u56FE",
        pictorialBar: "\u8C61\u5F62\u67F1\u56FE",
        themeRiver: "\u4E3B\u9898\u6CB3\u6D41\u56FE",
        sunburst: "\u65ED\u65E5\u56FE",
      },
    },
    aria: {
      general: {
        withTitle:
          "\u8FD9\u662F\u4E00\u4E2A\u5173\u4E8E\u201C{title}\u201D\u7684\u56FE\u8868\u3002",
        withoutTitle: "\u8FD9\u662F\u4E00\u4E2A\u56FE\u8868\uFF0C",
      },
      series: {
        single: {
          prefix: "",
          withName:
            "\u56FE\u8868\u7C7B\u578B\u662F{seriesType}\uFF0C\u8868\u793A{seriesName}\u3002",
          withoutName: "\u56FE\u8868\u7C7B\u578B\u662F{seriesType}\u3002",
        },
        multiple: {
          prefix:
            "\u5B83\u7531{seriesCount}\u4E2A\u56FE\u8868\u7CFB\u5217\u7EC4\u6210\u3002",
          withName:
            "\u7B2C{seriesId}\u4E2A\u7CFB\u5217\u662F\u4E00\u4E2A\u8868\u793A{seriesName}\u7684{seriesType}\uFF0C",
          withoutName:
            "\u7B2C{seriesId}\u4E2A\u7CFB\u5217\u662F\u4E00\u4E2A{seriesType}\uFF0C",
          separator: { middle: "\uFF1B", end: "\u3002" },
        },
      },
      data: {
        allData: "\u5176\u6570\u636E\u662F\u2014\u2014",
        partialData:
          "\u5176\u4E2D\uFF0C\u524D{displayCnt}\u9879\u662F\u2014\u2014",
        withName: "{name}\u7684\u6570\u636E\u662F{value}",
        withoutName: "{value}",
        separator: { middle: "\uFF0C", end: "" },
      },
    },
  };
var ts = "ZH",
  vh = "EN",
  fa = vh,
  Ro = {},
  ch = {},
  im = j.domSupported
    ? (function () {
        var r = (
          document.documentElement.lang ||
          navigator.language ||
          navigator.browserLanguage
        ).toUpperCase();
        return r.indexOf(ts) > -1 ? ts : fa;
      })()
    : fa;
function am(r, t) {
  (r = r.toUpperCase()), (ch[r] = new At(t)), (Ro[r] = t);
}
function Gb(r) {
  if (G(r)) {
    var t = Ro[r.toUpperCase()] || {};
    return r === ts || r === vh ? K(t) : Q(K(t), K(Ro[fa]), !1);
  } else return Q(K(r), K(Ro[fa]), !1);
}
function Hb(r) {
  return ch[r];
}
function Vb() {
  return ch[fa];
}
am(vh, Fb);
am(ts, zb);
var dh = 1e3,
  ph = dh * 60,
  Ki = ph * 60,
  le = Ki * 24,
  wc = le * 365,
  Hi = {
    year: "{yyyy}",
    month: "{MMM}",
    day: "{d}",
    hour: "{HH}:{mm}",
    minute: "{HH}:{mm}",
    second: "{HH}:{mm}:{ss}",
    millisecond: "{HH}:{mm}:{ss} {SSS}",
    none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}",
  },
  ja = "{yyyy}-{MM}-{dd}",
  bc = {
    year: "{yyyy}",
    month: "{yyyy}-{MM}",
    day: ja,
    hour: ja + " " + Hi.hour,
    minute: ja + " " + Hi.minute,
    second: ja + " " + Hi.second,
    millisecond: Hi.none,
  },
  Ru = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  om = [
    "year",
    "half-year",
    "quarter",
    "month",
    "week",
    "half-week",
    "day",
    "half-day",
    "quarter-day",
    "hour",
    "minute",
    "second",
    "millisecond",
  ];
function Vr(r, t) {
  return (r += ""), "0000".substr(0, t - r.length) + r;
}
function qn(r) {
  switch (r) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return r;
  }
}
function Wb(r) {
  return r === qn(r);
}
function Ub(r) {
  switch (r) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function Rs(r, t, e, n) {
  var i = Xe(r),
    a = i[gh(e)](),
    o = i[Kn(e)]() + 1,
    s = Math.floor((o - 1) / 4) + 1,
    u = i[Es(e)](),
    l = i["get" + (e ? "UTC" : "") + "Day"](),
    f = i[ha(e)](),
    h = ((f - 1) % 12) + 1,
    c = i[Os(e)](),
    v = i[ks(e)](),
    d = i[Bs(e)](),
    g = n instanceof At ? n : Hb(n || im) || Vb(),
    p = g.getModel("time"),
    y = p.get("month"),
    m = p.get("monthAbbr"),
    _ = p.get("dayOfWeek"),
    S = p.get("dayOfWeekAbbr");
  return (t || "")
    .replace(/{yyyy}/g, a + "")
    .replace(/{yy}/g, (a % 100) + "")
    .replace(/{Q}/g, s + "")
    .replace(/{MMMM}/g, y[o - 1])
    .replace(/{MMM}/g, m[o - 1])
    .replace(/{MM}/g, Vr(o, 2))
    .replace(/{M}/g, o + "")
    .replace(/{dd}/g, Vr(u, 2))
    .replace(/{d}/g, u + "")
    .replace(/{eeee}/g, _[l])
    .replace(/{ee}/g, S[l])
    .replace(/{e}/g, l + "")
    .replace(/{HH}/g, Vr(f, 2))
    .replace(/{H}/g, f + "")
    .replace(/{hh}/g, Vr(h + "", 2))
    .replace(/{h}/g, h + "")
    .replace(/{mm}/g, Vr(c, 2))
    .replace(/{m}/g, c + "")
    .replace(/{ss}/g, Vr(v, 2))
    .replace(/{s}/g, v + "")
    .replace(/{SSS}/g, Vr(d, 3))
    .replace(/{S}/g, d + "");
}
function Yb(r, t, e, n, i) {
  var a = null;
  if (G(e)) a = e;
  else if (U(e)) a = e(r.value, t, { level: r.level });
  else {
    var o = k({}, Hi);
    if (r.level > 0)
      for (var s = 0; s < Ru.length; ++s)
        o[Ru[s]] = "{primary|" + o[Ru[s]] + "}";
    var u = e ? (e.inherit === !1 ? e : q(e, o)) : o,
      l = sm(r.value, i);
    if (u[l]) a = u[l];
    else if (u.inherit) {
      for (var f = om.indexOf(l), s = f - 1; s >= 0; --s)
        if (u[l]) {
          a = u[l];
          break;
        }
      a = a || o.none;
    }
    if (N(a)) {
      var h = r.level == null ? 0 : r.level >= 0 ? r.level : a.length + r.level;
      (h = Math.min(h, a.length - 1)), (a = a[h]);
    }
  }
  return Rs(new Date(r.value), a, i, n);
}
function sm(r, t) {
  var e = Xe(r),
    n = e[Kn(t)]() + 1,
    i = e[Es(t)](),
    a = e[ha(t)](),
    o = e[Os(t)](),
    s = e[ks(t)](),
    u = e[Bs(t)](),
    l = u === 0,
    f = l && s === 0,
    h = f && o === 0,
    c = h && a === 0,
    v = c && i === 1,
    d = v && n === 1;
  return d
    ? "year"
    : v
    ? "month"
    : c
    ? "day"
    : h
    ? "hour"
    : f
    ? "minute"
    : l
    ? "second"
    : "millisecond";
}
function Tc(r, t, e) {
  var n = ft(r) ? Xe(r) : r;
  switch (((t = t || sm(r, e)), t)) {
    case "year":
      return n[gh(e)]();
    case "half-year":
      return n[Kn(e)]() >= 6 ? 1 : 0;
    case "quarter":
      return Math.floor((n[Kn(e)]() + 1) / 4);
    case "month":
      return n[Kn(e)]();
    case "day":
      return n[Es(e)]();
    case "half-day":
      return n[ha(e)]() / 24;
    case "hour":
      return n[ha(e)]();
    case "minute":
      return n[Os(e)]();
    case "second":
      return n[ks(e)]();
    case "millisecond":
      return n[Bs(e)]();
  }
}
function gh(r) {
  return r ? "getUTCFullYear" : "getFullYear";
}
function Kn(r) {
  return r ? "getUTCMonth" : "getMonth";
}
function Es(r) {
  return r ? "getUTCDate" : "getDate";
}
function ha(r) {
  return r ? "getUTCHours" : "getHours";
}
function Os(r) {
  return r ? "getUTCMinutes" : "getMinutes";
}
function ks(r) {
  return r ? "getUTCSeconds" : "getSeconds";
}
function Bs(r) {
  return r ? "getUTCMilliseconds" : "getMilliseconds";
}
function $b(r) {
  return r ? "setUTCFullYear" : "setFullYear";
}
function um(r) {
  return r ? "setUTCMonth" : "setMonth";
}
function lm(r) {
  return r ? "setUTCDate" : "setDate";
}
function fm(r) {
  return r ? "setUTCHours" : "setHours";
}
function hm(r) {
  return r ? "setUTCMinutes" : "setMinutes";
}
function vm(r) {
  return r ? "setUTCSeconds" : "setSeconds";
}
function cm(r) {
  return r ? "setUTCMilliseconds" : "setMilliseconds";
}
function dm(r) {
  if (!US(r)) return G(r) ? r : "-";
  var t = (r + "").split(".");
  return (
    t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") +
    (t.length > 1 ? "." + t[1] : "")
  );
}
function pm(r, t) {
  return (
    (r = (r || "").toLowerCase().replace(/-(.)/g, function (e, n) {
      return n.toUpperCase();
    })),
    t && r && (r = r.charAt(0).toUpperCase() + r.slice(1)),
    r
  );
}
var Ns = _g,
  Zb = /([&<>"'])/g,
  Xb = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function ue(r) {
  return r == null
    ? ""
    : (r + "").replace(Zb, function (t, e) {
        return Xb[e];
      });
}
function Jl(r, t, e) {
  var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function i(f) {
    return f && Pe(f) ? f : "-";
  }
  function a(f) {
    return !!(f != null && !isNaN(f) && isFinite(f));
  }
  var o = t === "time",
    s = r instanceof Date;
  if (o || s) {
    var u = o ? Xe(r) : r;
    if (isNaN(+u)) {
      if (s) return "-";
    } else return Rs(u, n, e);
  }
  if (t === "ordinal") return xl(r) ? i(r) : ft(r) && a(r) ? r + "" : "-";
  var l = xr(r);
  return a(l) ? dm(l) : xl(r) ? i(r) : typeof r == "boolean" ? r + "" : "-";
}
var Cc = ["a", "b", "c", "d", "e", "f", "g"],
  Eu = function (r, t) {
    return "{" + r + (t == null ? "" : t) + "}";
  };
function gm(r, t, e) {
  N(t) || (t = [t]);
  var n = t.length;
  if (!n) return "";
  for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
    var o = Cc[a];
    r = r.replace(Eu(o), Eu(o, 0));
  }
  for (var s = 0; s < n; s++)
    for (var u = 0; u < i.length; u++) {
      var l = t[s][i[u]];
      r = r.replace(Eu(Cc[u], s), e ? ue(l) : l);
    }
  return r;
}
function qb(r, t) {
  var e = G(r) ? { color: r, extraCssText: t } : r || {},
    n = e.color,
    i = e.type;
  t = e.extraCssText;
  var a = e.renderMode || "html";
  if (!n) return "";
  if (a === "html")
    return i === "subItem"
      ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
          ue(n) +
          ";" +
          (t || "") +
          '"></span>'
      : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
          ue(n) +
          ";" +
          (t || "") +
          '"></span>';
  var o = e.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style:
      i === "subItem"
        ? { width: 4, height: 4, borderRadius: 2, backgroundColor: n }
        : { width: 10, height: 10, borderRadius: 5, backgroundColor: n },
  };
}
function hn(r, t) {
  return (
    (t = t || "transparent"),
    G(r) ? r : (H(r) && r.colorStops && (r.colorStops[0] || {}).color) || t
  );
}
function Mc(r, t) {
  if (t === "_blank" || t === "blank") {
    var e = window.open();
    (e.opener = null), (e.location.href = r);
  } else window.open(r, t);
}
var Eo = C,
  Kb = ["left", "right", "top", "bottom", "width", "height"],
  to = [
    ["width", "left", "right"],
    ["height", "top", "bottom"],
  ];
function yh(r, t, e, n, i) {
  var a = 0,
    o = 0;
  n == null && (n = 1 / 0), i == null && (i = 1 / 0);
  var s = 0;
  t.eachChild(function (u, l) {
    var f = u.getBoundingRect(),
      h = t.childAt(l + 1),
      c = h && h.getBoundingRect(),
      v,
      d;
    if (r === "horizontal") {
      var g = f.width + (c ? -c.x + f.x : 0);
      (v = a + g),
        v > n || u.newline
          ? ((a = 0), (v = g), (o += s + e), (s = f.height))
          : (s = Math.max(s, f.height));
    } else {
      var p = f.height + (c ? -c.y + f.y : 0);
      (d = o + p),
        d > i || u.newline
          ? ((a += s + e), (o = 0), (d = p), (s = f.width))
          : (s = Math.max(s, f.width));
    }
    u.newline ||
      ((u.x = a),
      (u.y = o),
      u.markRedraw(),
      r === "horizontal" ? (a = v + e) : (o = d + e));
  });
}
var Qn = yh;
ot(yh, "vertical");
ot(yh, "horizontal");
function wr(r, t, e) {
  e = Ns(e || 0);
  var n = t.width,
    i = t.height,
    a = Ct(r.left, n),
    o = Ct(r.top, i),
    s = Ct(r.right, n),
    u = Ct(r.bottom, i),
    l = Ct(r.width, n),
    f = Ct(r.height, i),
    h = e[2] + e[0],
    c = e[1] + e[3],
    v = r.aspect;
  switch (
    (isNaN(l) && (l = n - s - c - a),
    isNaN(f) && (f = i - u - h - o),
    v != null &&
      (isNaN(l) && isNaN(f) && (v > n / i ? (l = n * 0.8) : (f = i * 0.8)),
      isNaN(l) && (l = v * f),
      isNaN(f) && (f = l / v)),
    isNaN(a) && (a = n - s - l - c),
    isNaN(o) && (o = i - u - f - h),
    r.left || r.right)
  ) {
    case "center":
      a = n / 2 - l / 2 - e[3];
      break;
    case "right":
      a = n - l - c;
      break;
  }
  switch (r.top || r.bottom) {
    case "middle":
    case "center":
      o = i / 2 - f / 2 - e[0];
      break;
    case "bottom":
      o = i - f - h;
      break;
  }
  (a = a || 0),
    (o = o || 0),
    isNaN(l) && (l = n - c - a - (s || 0)),
    isNaN(f) && (f = i - h - o - (u || 0));
  var d = new at(a + e[3], o + e[0], l, f);
  return (d.margin = e), d;
}
function Qb(r, t, e, n, i, a) {
  var o = !i || !i.hv || i.hv[0],
    s = !i || !i.hv || i.hv[1],
    u = (i && i.boundingMode) || "all";
  if (((a = a || r), (a.x = r.x), (a.y = r.y), !o && !s)) return !1;
  var l;
  if (u === "raw")
    l =
      r.type === "group"
        ? new at(0, 0, +t.width || 0, +t.height || 0)
        : r.getBoundingRect();
  else if (((l = r.getBoundingRect()), r.needLocalTransform())) {
    var f = r.getLocalTransform();
    (l = l.clone()), l.applyTransform(f);
  }
  var h = wr(q({ width: l.width, height: l.height }, t), e, n),
    c = o ? h.x - l.x : 0,
    v = s ? h.y - l.y : 0;
  return (
    u === "raw" ? ((a.x = c), (a.y = v)) : ((a.x += c), (a.y += v)),
    a === r && r.markRedraw(),
    !0
  );
}
function va(r) {
  var t = r.layoutMode || r.constructor.layoutMode;
  return H(t) ? t : t ? { type: t } : null;
}
function ei(r, t, e) {
  var n = e && e.ignoreSize;
  !N(n) && (n = [n, n]);
  var i = o(to[0], 0),
    a = o(to[1], 1);
  l(to[0], r, i), l(to[1], r, a);
  function o(f, h) {
    var c = {},
      v = 0,
      d = {},
      g = 0,
      p = 2;
    if (
      (Eo(f, function (_) {
        d[_] = r[_];
      }),
      Eo(f, function (_) {
        s(t, _) && (c[_] = d[_] = t[_]), u(c, _) && v++, u(d, _) && g++;
      }),
      n[h])
    )
      return u(t, f[1]) ? (d[f[2]] = null) : u(t, f[2]) && (d[f[1]] = null), d;
    if (g === p || !v) return d;
    if (v >= p) return c;
    for (var y = 0; y < f.length; y++) {
      var m = f[y];
      if (!s(c, m) && s(r, m)) {
        c[m] = r[m];
        break;
      }
    }
    return c;
  }
  function s(f, h) {
    return f.hasOwnProperty(h);
  }
  function u(f, h) {
    return f[h] != null && f[h] !== "auto";
  }
  function l(f, h, c) {
    Eo(f, function (v) {
      h[v] = c[v];
    });
  }
}
function Pa(r) {
  return Jb({}, r);
}
function Jb(r, t) {
  return (
    t &&
      r &&
      Eo(Kb, function (e) {
        t.hasOwnProperty(e) && (r[e] = t[e]);
      }),
    r
  );
}
var jb = gt(),
  li = (function (r) {
    O(t, r);
    function t(e, n, i) {
      var a = r.call(this, e, n, i) || this;
      return (a.uid = Ia("ec_cpt_model")), a;
    }
    return (
      (t.prototype.init = function (e, n, i) {
        this.mergeDefaultAndTheme(e, i);
      }),
      (t.prototype.mergeDefaultAndTheme = function (e, n) {
        var i = va(this),
          a = i ? Pa(e) : {},
          o = n.getTheme();
        Q(e, o.get(this.mainType)),
          Q(e, this.getDefaultOption()),
          i && ei(e, a, i);
      }),
      (t.prototype.mergeOption = function (e, n) {
        Q(this.option, e, !0);
        var i = va(this);
        i && ei(this.option, e, i);
      }),
      (t.prototype.optionUpdated = function (e, n) {}),
      (t.prototype.getDefaultOption = function () {
        var e = this.constructor;
        if (!ux(e)) return e.defaultOption;
        var n = jb(this);
        if (!n.defaultOption) {
          for (var i = [], a = e; a; ) {
            var o = a.prototype.defaultOption;
            o && i.push(o), (a = a.superClass);
          }
          for (var s = {}, u = i.length - 1; u >= 0; u--) s = Q(s, i[u], !0);
          n.defaultOption = s;
        }
        return n.defaultOption;
      }),
      (t.prototype.getReferringComponents = function (e, n) {
        var i = e + "Index",
          a = e + "Id";
        return Da(
          this.ecModel,
          e,
          { index: this.get(i, !0), id: this.get(a, !0) },
          n
        );
      }),
      (t.prototype.getBoxLayoutParams = function () {
        var e = this;
        return {
          left: e.get("left"),
          top: e.get("top"),
          right: e.get("right"),
          bottom: e.get("bottom"),
          width: e.get("width"),
          height: e.get("height"),
        };
      }),
      (t.prototype.getZLevelKey = function () {
        return "";
      }),
      (t.prototype.setZLevel = function (e) {
        this.option.zlevel = e;
      }),
      (t.protoInitialize = (function () {
        var e = t.prototype;
        (e.type = "component"),
          (e.id = ""),
          (e.name = ""),
          (e.mainType = ""),
          (e.subType = ""),
          (e.componentIndex = 0);
      })()),
      t
    );
  })(At);
iy(li, At);
Ss(li);
Bb(li);
Nb(li, tT);
function tT(r) {
  var t = [];
  return (
    C(li.getClassesByMainType(r), function (e) {
      t = t.concat(e.dependencies || e.prototype.dependencies || []);
    }),
    (t = z(t, function (e) {
      return Re(e).main;
    })),
    r !== "dataset" && J(t, "dataset") <= 0 && t.unshift("dataset"),
    t
  );
}
const ct = li;
var ym = "";
typeof navigator < "u" && (ym = navigator.platform || "");
var Mn = "rgba(0, 0, 0, 0.2)";
const eT = {
  darkMode: "auto",
  colorBy: "series",
  color: [
    "#5470c6",
    "#91cc75",
    "#fac858",
    "#ee6666",
    "#73c0de",
    "#3ba272",
    "#fc8452",
    "#9a60b4",
    "#ea7ccc",
  ],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [
        {
          color: Mn,
          dashArrayX: [1, 0],
          dashArrayY: [2, 5],
          symbolSize: 1,
          rotation: Math.PI / 6,
        },
        {
          color: Mn,
          symbol: "circle",
          dashArrayX: [
            [8, 8],
            [0, 8, 8, 0],
          ],
          dashArrayY: [6, 0],
          symbolSize: 0.8,
        },
        {
          color: Mn,
          dashArrayX: [1, 0],
          dashArrayY: [4, 3],
          rotation: -Math.PI / 4,
        },
        {
          color: Mn,
          dashArrayX: [
            [6, 6],
            [0, 6, 6, 0],
          ],
          dashArrayY: [6, 0],
        },
        {
          color: Mn,
          dashArrayX: [
            [1, 0],
            [1, 6],
          ],
          dashArrayY: [1, 0, 6, 0],
          rotation: Math.PI / 4,
        },
        {
          color: Mn,
          symbol: "triangle",
          dashArrayX: [
            [9, 9],
            [0, 9, 9, 0],
          ],
          dashArrayY: [7, 2],
          symbolSize: 0.75,
        },
      ],
    },
  },
  textStyle: {
    fontFamily: ym.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
  },
  blendMode: null,
  stateAnimation: { duration: 300, easing: "cubicOut" },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  progressiveThreshold: 3e3,
  progressive: 400,
  hoverLayerThreshold: 3e3,
  useUTC: !1,
};
var mm = W([
    "tooltip",
    "label",
    "itemName",
    "itemId",
    "itemGroupId",
    "seriesName",
  ]),
  de = "original",
  Vt = "arrayRows",
  Te = "objectRows",
  je = "keyedColumns",
  mr = "typedArray",
  _m = "unknown",
  Oe = "column",
  fi = "row",
  qt = { Must: 1, Might: 2, Not: 3 },
  Sm = gt();
function rT(r) {
  Sm(r).datasetMap = W();
}
function nT(r, t, e) {
  var n = {},
    i = xm(t);
  if (!i || !r) return n;
  var a = [],
    o = [],
    s = t.ecModel,
    u = Sm(s).datasetMap,
    l = i.uid + "_" + e.seriesLayoutBy,
    f,
    h;
  (r = r.slice()),
    C(r, function (g, p) {
      var y = H(g) ? g : (r[p] = { name: g });
      y.type === "ordinal" && f == null && ((f = p), (h = d(y))),
        (n[y.name] = []);
    });
  var c = u.get(l) || u.set(l, { categoryWayDim: h, valueWayDim: 0 });
  C(r, function (g, p) {
    var y = g.name,
      m = d(g);
    if (f == null) {
      var _ = c.valueWayDim;
      v(n[y], _, m), v(o, _, m), (c.valueWayDim += m);
    } else if (f === p) v(n[y], 0, m), v(a, 0, m);
    else {
      var _ = c.categoryWayDim;
      v(n[y], _, m), v(o, _, m), (c.categoryWayDim += m);
    }
  });
  function v(g, p, y) {
    for (var m = 0; m < y; m++) g.push(p + m);
  }
  function d(g) {
    var p = g.dimsDef;
    return p ? p.length : 1;
  }
  return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
}
function xm(r) {
  var t = r.get("data", !0);
  if (!t)
    return Da(
      r.ecModel,
      "dataset",
      { index: r.get("datasetIndex", !0), id: r.get("datasetId", !0) },
      zt
    ).models[0];
}
function iT(r) {
  return !r.get("transform", !0) && !r.get("fromTransformResult", !0)
    ? []
    : Da(
        r.ecModel,
        "dataset",
        {
          index: r.get("fromDatasetIndex", !0),
          id: r.get("fromDatasetId", !0),
        },
        zt
      ).models;
}
function wm(r, t) {
  return aT(
    r.data,
    r.sourceFormat,
    r.seriesLayoutBy,
    r.dimensionsDefine,
    r.startIndex,
    t
  );
}
function aT(r, t, e, n, i, a) {
  var o,
    s = 5;
  if (jt(r)) return qt.Not;
  var u, l;
  if (n) {
    var f = n[a];
    H(f) ? ((u = f.name), (l = f.type)) : G(f) && (u = f);
  }
  if (l != null) return l === "ordinal" ? qt.Must : qt.Not;
  if (t === Vt) {
    var h = r;
    if (e === fi) {
      for (var c = h[a], v = 0; v < (c || []).length && v < s; v++)
        if ((o = S(c[i + v])) != null) return o;
    } else
      for (var v = 0; v < h.length && v < s; v++) {
        var d = h[i + v];
        if (d && (o = S(d[a])) != null) return o;
      }
  } else if (t === Te) {
    var g = r;
    if (!u) return qt.Not;
    for (var v = 0; v < g.length && v < s; v++) {
      var p = g[v];
      if (p && (o = S(p[u])) != null) return o;
    }
  } else if (t === je) {
    var y = r;
    if (!u) return qt.Not;
    var c = y[u];
    if (!c || jt(c)) return qt.Not;
    for (var v = 0; v < c.length && v < s; v++)
      if ((o = S(c[v])) != null) return o;
  } else if (t === de)
    for (var m = r, v = 0; v < m.length && v < s; v++) {
      var p = m[v],
        _ = Ma(p);
      if (!N(_)) return qt.Not;
      if ((o = S(_[a])) != null) return o;
    }
  function S(w) {
    var x = G(w);
    if (w != null && isFinite(w) && w !== "") return x ? qt.Might : qt.Not;
    if (x && w !== "-") return qt.Must;
  }
  return qt.Not;
}
var jl = W();
function oT(r, t) {
  ke(jl.get(r) == null && t), jl.set(r, t);
}
function sT(r, t, e) {
  var n = jl.get(t);
  if (!n) return e;
  var i = n(r);
  return i ? e.concat(i) : e;
}
var Dc = gt();
gt();
var mh = (function () {
  function r() {}
  return (
    (r.prototype.getColorFromPalette = function (t, e, n) {
      var i = _t(this.get("color", !0)),
        a = this.get("colorLayer", !0);
      return lT(this, Dc, i, a, t, e, n);
    }),
    (r.prototype.clearColorPalette = function () {
      fT(this, Dc);
    }),
    r
  );
})();
function uT(r, t) {
  for (var e = r.length, n = 0; n < e; n++) if (r[n].length > t) return r[n];
  return r[e - 1];
}
function lT(r, t, e, n, i, a, o) {
  a = a || r;
  var s = t(a),
    u = s.paletteIdx || 0,
    l = (s.paletteNameMap = s.paletteNameMap || {});
  if (l.hasOwnProperty(i)) return l[i];
  var f = o == null || !n ? e : uT(n, o);
  if (((f = f || e), !(!f || !f.length))) {
    var h = f[u];
    return i && (l[i] = h), (s.paletteIdx = (u + 1) % f.length), h;
  }
}
function fT(r, t) {
  (t(r).paletteIdx = 0), (t(r).paletteNameMap = {});
}
var eo,
  _i,
  Ac,
  Lc = "\0_ec_inner",
  hT = 1,
  bm = (function (r) {
    O(t, r);
    function t() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.init = function (e, n, i, a, o, s) {
        (a = a || {}),
          (this.option = null),
          (this._theme = new At(a)),
          (this._locale = new At(o)),
          (this._optionManager = s);
      }),
      (t.prototype.setOption = function (e, n, i) {
        var a = Rc(n);
        this._optionManager.setOption(e, i, a), this._resetOption(null, a);
      }),
      (t.prototype.resetOption = function (e, n) {
        return this._resetOption(e, Rc(n));
      }),
      (t.prototype._resetOption = function (e, n) {
        var i = !1,
          a = this._optionManager;
        if (!e || e === "recreate") {
          var o = a.mountOption(e === "recreate");
          !this.option || e === "recreate"
            ? Ac(this, o)
            : (this.restoreData(), this._mergeOption(o, n)),
            (i = !0);
        }
        if (
          ((e === "timeline" || e === "media") && this.restoreData(),
          !e || e === "recreate" || e === "timeline")
        ) {
          var s = a.getTimelineOption(this);
          s && ((i = !0), this._mergeOption(s, n));
        }
        if (!e || e === "recreate" || e === "media") {
          var u = a.getMediaOption(this);
          u.length &&
            C(
              u,
              function (l) {
                (i = !0), this._mergeOption(l, n);
              },
              this
            );
        }
        return i;
      }),
      (t.prototype.mergeOption = function (e) {
        this._mergeOption(e, null);
      }),
      (t.prototype._mergeOption = function (e, n) {
        var i = this.option,
          a = this._componentsMap,
          o = this._componentsCount,
          s = [],
          u = W(),
          l = n && n.replaceMergeMainTypeMap;
        rT(this),
          C(e, function (h, c) {
            h != null &&
              (ct.hasClass(c)
                ? c && (s.push(c), u.set(c, !0))
                : (i[c] = i[c] == null ? K(h) : Q(i[c], h, !0)));
          }),
          l &&
            l.each(function (h, c) {
              ct.hasClass(c) && !u.get(c) && (s.push(c), u.set(c, !0));
            }),
          ct.topologicalTravel(s, ct.getAllClassMainTypes(), f, this);
        function f(h) {
          var c = sT(this, h, _t(e[h])),
            v = a.get(h),
            d = v
              ? l && l.get(h)
                ? "replaceMerge"
                : "normalMerge"
              : "replaceAll",
            g = $S(v, c, d);
          tx(g, h, ct), (i[h] = null), a.set(h, null), o.set(h, 0);
          var p = [],
            y = [],
            m = 0,
            _;
          C(
            g,
            function (S, w) {
              var x = S.existing,
                b = S.newOption;
              if (!b) x && (x.mergeOption({}, this), x.optionUpdated({}, !1));
              else {
                var T = h === "series",
                  M = ct.getClass(h, S.keyInfo.subType, !T);
                if (!M) return;
                if (h === "tooltip") {
                  if (_) return;
                  _ = !0;
                }
                if (x && x.constructor === M)
                  (x.name = S.keyInfo.name),
                    x.mergeOption(b, this),
                    x.optionUpdated(b, !1);
                else {
                  var D = k({ componentIndex: w }, S.keyInfo);
                  (x = new M(b, this, this, D)),
                    k(x, D),
                    S.brandNew && (x.__requireNewView = !0),
                    x.init(b, this, this),
                    x.optionUpdated(null, !0);
                }
              }
              x
                ? (p.push(x.option), y.push(x), m++)
                : (p.push(void 0), y.push(void 0));
            },
            this
          ),
            (i[h] = p),
            a.set(h, y),
            o.set(h, m),
            h === "series" && eo(this);
        }
        this._seriesIndices || eo(this);
      }),
      (t.prototype.getOption = function () {
        var e = K(this.option);
        return (
          C(e, function (n, i) {
            if (ct.hasClass(i)) {
              for (var a = _t(n), o = a.length, s = !1, u = o - 1; u >= 0; u--)
                a[u] && !oa(a[u]) ? (s = !0) : ((a[u] = null), !s && o--);
              (a.length = o), (e[i] = a);
            }
          }),
          delete e[Lc],
          e
        );
      }),
      (t.prototype.getTheme = function () {
        return this._theme;
      }),
      (t.prototype.getLocaleModel = function () {
        return this._locale;
      }),
      (t.prototype.setUpdatePayload = function (e) {
        this._payload = e;
      }),
      (t.prototype.getUpdatePayload = function () {
        return this._payload;
      }),
      (t.prototype.getComponent = function (e, n) {
        var i = this._componentsMap.get(e);
        if (i) {
          var a = i[n || 0];
          if (a) return a;
          if (n == null) {
            for (var o = 0; o < i.length; o++) if (i[o]) return i[o];
          }
        }
      }),
      (t.prototype.queryComponents = function (e) {
        var n = e.mainType;
        if (!n) return [];
        var i = e.index,
          a = e.id,
          o = e.name,
          s = this._componentsMap.get(n);
        if (!s || !s.length) return [];
        var u;
        return (
          i != null
            ? ((u = []),
              C(_t(i), function (l) {
                s[l] && u.push(s[l]);
              }))
            : a != null
            ? (u = Ic("id", a, s))
            : o != null
            ? (u = Ic("name", o, s))
            : (u = xt(s, function (l) {
                return !!l;
              })),
          Pc(u, e)
        );
      }),
      (t.prototype.findComponents = function (e) {
        var n = e.query,
          i = e.mainType,
          a = s(n),
          o = a
            ? this.queryComponents(a)
            : xt(this._componentsMap.get(i), function (l) {
                return !!l;
              });
        return u(Pc(o, e));
        function s(l) {
          var f = i + "Index",
            h = i + "Id",
            c = i + "Name";
          return l && (l[f] != null || l[h] != null || l[c] != null)
            ? { mainType: i, index: l[f], id: l[h], name: l[c] }
            : null;
        }
        function u(l) {
          return e.filter ? xt(l, e.filter) : l;
        }
      }),
      (t.prototype.eachComponent = function (e, n, i) {
        var a = this._componentsMap;
        if (U(e)) {
          var o = n,
            s = e;
          a.each(function (h, c) {
            for (var v = 0; h && v < h.length; v++) {
              var d = h[v];
              d && s.call(o, c, d, d.componentIndex);
            }
          });
        } else
          for (
            var u = G(e) ? a.get(e) : H(e) ? this.findComponents(e) : null,
              l = 0;
            u && l < u.length;
            l++
          ) {
            var f = u[l];
            f && n.call(i, f, f.componentIndex);
          }
      }),
      (t.prototype.getSeriesByName = function (e) {
        var n = Ee(e, null);
        return xt(this._componentsMap.get("series"), function (i) {
          return !!i && n != null && i.name === n;
        });
      }),
      (t.prototype.getSeriesByIndex = function (e) {
        return this._componentsMap.get("series")[e];
      }),
      (t.prototype.getSeriesByType = function (e) {
        return xt(this._componentsMap.get("series"), function (n) {
          return !!n && n.subType === e;
        });
      }),
      (t.prototype.getSeries = function () {
        return xt(this._componentsMap.get("series"), function (e) {
          return !!e;
        });
      }),
      (t.prototype.getSeriesCount = function () {
        return this._componentsCount.get("series");
      }),
      (t.prototype.eachSeries = function (e, n) {
        _i(this),
          C(
            this._seriesIndices,
            function (i) {
              var a = this._componentsMap.get("series")[i];
              e.call(n, a, i);
            },
            this
          );
      }),
      (t.prototype.eachRawSeries = function (e, n) {
        C(this._componentsMap.get("series"), function (i) {
          i && e.call(n, i, i.componentIndex);
        });
      }),
      (t.prototype.eachSeriesByType = function (e, n, i) {
        _i(this),
          C(
            this._seriesIndices,
            function (a) {
              var o = this._componentsMap.get("series")[a];
              o.subType === e && n.call(i, o, a);
            },
            this
          );
      }),
      (t.prototype.eachRawSeriesByType = function (e, n, i) {
        return C(this.getSeriesByType(e), n, i);
      }),
      (t.prototype.isSeriesFiltered = function (e) {
        return _i(this), this._seriesIndicesMap.get(e.componentIndex) == null;
      }),
      (t.prototype.getCurrentSeriesIndices = function () {
        return (this._seriesIndices || []).slice();
      }),
      (t.prototype.filterSeries = function (e, n) {
        _i(this);
        var i = [];
        C(
          this._seriesIndices,
          function (a) {
            var o = this._componentsMap.get("series")[a];
            e.call(n, o, a) && i.push(a);
          },
          this
        ),
          (this._seriesIndices = i),
          (this._seriesIndicesMap = W(i));
      }),
      (t.prototype.restoreData = function (e) {
        eo(this);
        var n = this._componentsMap,
          i = [];
        n.each(function (a, o) {
          ct.hasClass(o) && i.push(o);
        }),
          ct.topologicalTravel(i, ct.getAllClassMainTypes(), function (a) {
            C(n.get(a), function (o) {
              o && (a !== "series" || !vT(o, e)) && o.restoreData();
            });
          });
      }),
      (t.internalField = (function () {
        (eo = function (e) {
          var n = (e._seriesIndices = []);
          C(e._componentsMap.get("series"), function (i) {
            i && n.push(i.componentIndex);
          }),
            (e._seriesIndicesMap = W(n));
        }),
          (_i = function (e) {}),
          (Ac = function (e, n) {
            (e.option = {}),
              (e.option[Lc] = hT),
              (e._componentsMap = W({ series: [] })),
              (e._componentsCount = W());
            var i = n.aria;
            H(i) && i.enabled == null && (i.enabled = !0),
              cT(n, e._theme.option),
              Q(n, eT, !1),
              e._mergeOption(n, null);
          });
      })()),
      t
    );
  })(At);
function vT(r, t) {
  if (t) {
    var e = t.seriesIndex,
      n = t.seriesId,
      i = t.seriesName;
    return (
      (e != null && r.componentIndex !== e) ||
      (n != null && r.id !== n) ||
      (i != null && r.name !== i)
    );
  }
}
function cT(r, t) {
  var e = r.color && !r.colorLayer;
  C(t, function (n, i) {
    (i === "colorLayer" && e) ||
      ct.hasClass(i) ||
      (typeof n == "object"
        ? (r[i] = r[i] ? Q(r[i], n, !1) : K(n))
        : r[i] == null && (r[i] = n));
  });
}
function Ic(r, t, e) {
  if (N(t)) {
    var n = W();
    return (
      C(t, function (a) {
        if (a != null) {
          var o = Ee(a, null);
          o != null && n.set(a, !0);
        }
      }),
      xt(e, function (a) {
        return a && n.get(a[r]);
      })
    );
  } else {
    var i = Ee(t, null);
    return xt(e, function (a) {
      return a && i != null && a[r] === i;
    });
  }
}
function Pc(r, t) {
  return t.hasOwnProperty("subType")
    ? xt(r, function (e) {
        return e && e.subType === t.subType;
      })
    : r;
}
function Rc(r) {
  var t = W();
  return (
    r &&
      C(_t(r.replaceMerge), function (e) {
        t.set(e, !0);
      }),
    { replaceMergeMainTypeMap: t }
  );
}
Ne(bm, mh);
const Tm = bm;
var dT = [
    "getDom",
    "getZr",
    "getWidth",
    "getHeight",
    "getDevicePixelRatio",
    "dispatchAction",
    "isSSR",
    "isDisposed",
    "on",
    "off",
    "getDataURL",
    "getConnectedDataURL",
    "getOption",
    "getId",
    "updateLabelLayout",
  ],
  pT = (function () {
    function r(t) {
      C(
        dT,
        function (e) {
          this[e] = Y(t[e], t);
        },
        this
      );
    }
    return r;
  })();
const Cm = pT;
var Ou = {},
  gT = (function () {
    function r() {
      this._coordinateSystems = [];
    }
    return (
      (r.prototype.create = function (t, e) {
        var n = [];
        C(Ou, function (i, a) {
          var o = i.create(t, e);
          n = n.concat(o || []);
        }),
          (this._coordinateSystems = n);
      }),
      (r.prototype.update = function (t, e) {
        C(this._coordinateSystems, function (n) {
          n.update && n.update(t, e);
        });
      }),
      (r.prototype.getCoordinateSystems = function () {
        return this._coordinateSystems.slice();
      }),
      (r.register = function (t, e) {
        Ou[t] = e;
      }),
      (r.get = function (t) {
        return Ou[t];
      }),
      r
    );
  })();
const _h = gT;
var yT = /^(min|max)?(.+)$/,
  mT = (function () {
    function r(t) {
      (this._timelineOptions = []),
        (this._mediaList = []),
        (this._currentMediaIndices = []),
        (this._api = t);
    }
    return (
      (r.prototype.setOption = function (t, e, n) {
        t &&
          (C(_t(t.series), function (o) {
            o && o.data && jt(o.data) && Go(o.data);
          }),
          C(_t(t.dataset), function (o) {
            o && o.source && jt(o.source) && Go(o.source);
          })),
          (t = K(t));
        var i = this._optionBackup,
          a = _T(t, e, !i);
        (this._newBaseOption = a.baseOption),
          i
            ? (a.timelineOptions.length &&
                (i.timelineOptions = a.timelineOptions),
              a.mediaList.length && (i.mediaList = a.mediaList),
              a.mediaDefault && (i.mediaDefault = a.mediaDefault))
            : (this._optionBackup = a);
      }),
      (r.prototype.mountOption = function (t) {
        var e = this._optionBackup;
        return (
          (this._timelineOptions = e.timelineOptions),
          (this._mediaList = e.mediaList),
          (this._mediaDefault = e.mediaDefault),
          (this._currentMediaIndices = []),
          K(t ? e.baseOption : this._newBaseOption)
        );
      }),
      (r.prototype.getTimelineOption = function (t) {
        var e,
          n = this._timelineOptions;
        if (n.length) {
          var i = t.getComponent("timeline");
          i && (e = K(n[i.getCurrentIndex()]));
        }
        return e;
      }),
      (r.prototype.getMediaOption = function (t) {
        var e = this._api.getWidth(),
          n = this._api.getHeight(),
          i = this._mediaList,
          a = this._mediaDefault,
          o = [],
          s = [];
        if (!i.length && !a) return s;
        for (var u = 0, l = i.length; u < l; u++)
          ST(i[u].query, e, n) && o.push(u);
        return (
          !o.length && a && (o = [-1]),
          o.length &&
            !wT(o, this._currentMediaIndices) &&
            (s = z(o, function (f) {
              return K(f === -1 ? a.option : i[f].option);
            })),
          (this._currentMediaIndices = o),
          s
        );
      }),
      r
    );
  })();
function _T(r, t, e) {
  var n = [],
    i,
    a,
    o = r.baseOption,
    s = r.timeline,
    u = r.options,
    l = r.media,
    f = !!r.media,
    h = !!(u || s || (o && o.timeline));
  o
    ? ((a = o), a.timeline || (a.timeline = s))
    : ((h || f) && (r.options = r.media = null), (a = r)),
    f &&
      N(l) &&
      C(l, function (v) {
        v && v.option && (v.query ? n.push(v) : i || (i = v));
      }),
    c(a),
    C(u, function (v) {
      return c(v);
    }),
    C(n, function (v) {
      return c(v.option);
    });
  function c(v) {
    C(t, function (d) {
      d(v, e);
    });
  }
  return {
    baseOption: a,
    timelineOptions: u || [],
    mediaDefault: i,
    mediaList: n,
  };
}
function ST(r, t, e) {
  var n = { width: t, height: e, aspectratio: t / e },
    i = !0;
  return (
    C(r, function (a, o) {
      var s = o.match(yT);
      if (!(!s || !s[1] || !s[2])) {
        var u = s[1],
          l = s[2].toLowerCase();
        xT(n[l], a, u) || (i = !1);
      }
    }),
    i
  );
}
function xT(r, t, e) {
  return e === "min" ? r >= t : e === "max" ? r <= t : r === t;
}
function wT(r, t) {
  return r.join(",") === t.join(",");
}
const bT = mT;
var ge = C,
  ca = H,
  Ec = [
    "areaStyle",
    "lineStyle",
    "nodeStyle",
    "linkStyle",
    "chordStyle",
    "label",
    "labelLine",
  ];
function ku(r) {
  var t = r && r.itemStyle;
  if (!!t)
    for (var e = 0, n = Ec.length; e < n; e++) {
      var i = Ec[e],
        a = t.normal,
        o = t.emphasis;
      a &&
        a[i] &&
        ((r[i] = r[i] || {}),
        r[i].normal ? Q(r[i].normal, a[i]) : (r[i].normal = a[i]),
        (a[i] = null)),
        o &&
          o[i] &&
          ((r[i] = r[i] || {}),
          r[i].emphasis ? Q(r[i].emphasis, o[i]) : (r[i].emphasis = o[i]),
          (o[i] = null));
    }
}
function kt(r, t, e) {
  if (r && r[t] && (r[t].normal || r[t].emphasis)) {
    var n = r[t].normal,
      i = r[t].emphasis;
    n && (e ? ((r[t].normal = r[t].emphasis = null), q(r[t], n)) : (r[t] = n)),
      i &&
        ((r.emphasis = r.emphasis || {}),
        (r.emphasis[t] = i),
        i.focus && (r.emphasis.focus = i.focus),
        i.blurScope && (r.emphasis.blurScope = i.blurScope));
  }
}
function Vi(r) {
  kt(r, "itemStyle"),
    kt(r, "lineStyle"),
    kt(r, "areaStyle"),
    kt(r, "label"),
    kt(r, "labelLine"),
    kt(r, "upperLabel"),
    kt(r, "edgeLabel");
}
function mt(r, t) {
  var e = ca(r) && r[t],
    n = ca(e) && e.textStyle;
  if (n)
    for (var i = 0, a = Ev.length; i < a; i++) {
      var o = Ev[i];
      n.hasOwnProperty(o) && (e[o] = n[o]);
    }
}
function ae(r) {
  r && (Vi(r), mt(r, "label"), r.emphasis && mt(r.emphasis, "label"));
}
function TT(r) {
  if (!!ca(r)) {
    ku(r),
      Vi(r),
      mt(r, "label"),
      mt(r, "upperLabel"),
      mt(r, "edgeLabel"),
      r.emphasis &&
        (mt(r.emphasis, "label"),
        mt(r.emphasis, "upperLabel"),
        mt(r.emphasis, "edgeLabel"));
    var t = r.markPoint;
    t && (ku(t), ae(t));
    var e = r.markLine;
    e && (ku(e), ae(e));
    var n = r.markArea;
    n && ae(n);
    var i = r.data;
    if (r.type === "graph") {
      i = i || r.nodes;
      var a = r.links || r.edges;
      if (a && !jt(a)) for (var o = 0; o < a.length; o++) ae(a[o]);
      C(r.categories, function (l) {
        Vi(l);
      });
    }
    if (i && !jt(i)) for (var o = 0; o < i.length; o++) ae(i[o]);
    if (((t = r.markPoint), t && t.data))
      for (var s = t.data, o = 0; o < s.length; o++) ae(s[o]);
    if (((e = r.markLine), e && e.data))
      for (var u = e.data, o = 0; o < u.length; o++)
        N(u[o]) ? (ae(u[o][0]), ae(u[o][1])) : ae(u[o]);
    r.type === "gauge"
      ? (mt(r, "axisLabel"), mt(r, "title"), mt(r, "detail"))
      : r.type === "treemap"
      ? (kt(r.breadcrumb, "itemStyle"),
        C(r.levels, function (l) {
          Vi(l);
        }))
      : r.type === "tree" && Vi(r.leaves);
  }
}
function He(r) {
  return N(r) ? r : r ? [r] : [];
}
function Oc(r) {
  return (N(r) ? r[0] : r) || {};
}
function CT(r, t) {
  ge(He(r.series), function (n) {
    ca(n) && TT(n);
  });
  var e = [
    "xAxis",
    "yAxis",
    "radiusAxis",
    "angleAxis",
    "singleAxis",
    "parallelAxis",
    "radar",
  ];
  t && e.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"),
    ge(e, function (n) {
      ge(He(r[n]), function (i) {
        i && (mt(i, "axisLabel"), mt(i.axisPointer, "label"));
      });
    }),
    ge(He(r.parallel), function (n) {
      var i = n && n.parallelAxisDefault;
      mt(i, "axisLabel"), mt(i && i.axisPointer, "label");
    }),
    ge(He(r.calendar), function (n) {
      kt(n, "itemStyle"),
        mt(n, "dayLabel"),
        mt(n, "monthLabel"),
        mt(n, "yearLabel");
    }),
    ge(He(r.radar), function (n) {
      mt(n, "name"),
        n.name && n.axisName == null && ((n.axisName = n.name), delete n.name),
        n.nameGap != null &&
          n.axisNameGap == null &&
          ((n.axisNameGap = n.nameGap), delete n.nameGap);
    }),
    ge(He(r.geo), function (n) {
      ca(n) &&
        (ae(n),
        ge(He(n.regions), function (i) {
          ae(i);
        }));
    }),
    ge(He(r.timeline), function (n) {
      ae(n), kt(n, "label"), kt(n, "itemStyle"), kt(n, "controlStyle", !0);
      var i = n.data;
      N(i) &&
        C(i, function (a) {
          H(a) && (kt(a, "label"), kt(a, "itemStyle"));
        });
    }),
    ge(He(r.toolbox), function (n) {
      kt(n, "iconStyle"),
        ge(n.feature, function (i) {
          kt(i, "iconStyle");
        });
    }),
    mt(Oc(r.axisPointer), "label"),
    mt(Oc(r.tooltip).axisPointer, "label");
}
function MT(r, t) {
  for (
    var e = t.split(","), n = r, i = 0;
    i < e.length && ((n = n && n[e[i]]), n != null);
    i++
  );
  return n;
}
function DT(r, t, e, n) {
  for (var i = t.split(","), a = r, o, s = 0; s < i.length - 1; s++)
    (o = i[s]), a[o] == null && (a[o] = {}), (a = a[o]);
  (n || a[i[s]] == null) && (a[i[s]] = e);
}
function kc(r) {
  r &&
    C(AT, function (t) {
      t[0] in r && !(t[1] in r) && (r[t[1]] = r[t[0]]);
    });
}
var AT = [
    ["x", "left"],
    ["y", "top"],
    ["x2", "right"],
    ["y2", "bottom"],
  ],
  LT = [
    "grid",
    "geo",
    "parallel",
    "legend",
    "toolbox",
    "title",
    "visualMap",
    "dataZoom",
    "timeline",
  ],
  Bu = [
    ["borderRadius", "barBorderRadius"],
    ["borderColor", "barBorderColor"],
    ["borderWidth", "barBorderWidth"],
  ];
function Si(r) {
  var t = r && r.itemStyle;
  if (t)
    for (var e = 0; e < Bu.length; e++) {
      var n = Bu[e][1],
        i = Bu[e][0];
      t[n] != null && (t[i] = t[n]);
    }
}
function Bc(r) {
  !r ||
    (r.alignTo === "edge" &&
      r.margin != null &&
      r.edgeDistance == null &&
      (r.edgeDistance = r.margin));
}
function Nc(r) {
  !r || (r.downplay && !r.blur && (r.blur = r.downplay));
}
function IT(r) {
  !r ||
    (r.focusNodeAdjacency != null &&
      ((r.emphasis = r.emphasis || {}),
      r.emphasis.focus == null && (r.emphasis.focus = "adjacency")));
}
function Mm(r, t) {
  if (r)
    for (var e = 0; e < r.length; e++) t(r[e]), r[e] && Mm(r[e].children, t);
}
function Dm(r, t) {
  CT(r, t),
    (r.series = _t(r.series)),
    C(r.series, function (e) {
      if (!!H(e)) {
        var n = e.type;
        if (n === "line") e.clipOverflow != null && (e.clip = e.clipOverflow);
        else if (n === "pie" || n === "gauge") {
          e.clockWise != null && (e.clockwise = e.clockWise), Bc(e.label);
          var i = e.data;
          if (i && !jt(i)) for (var a = 0; a < i.length; a++) Bc(i[a]);
          e.hoverOffset != null &&
            ((e.emphasis = e.emphasis || {}),
            (e.emphasis.scaleSize = null) &&
              (e.emphasis.scaleSize = e.hoverOffset));
        } else if (n === "gauge") {
          var o = MT(e, "pointer.color");
          o != null && DT(e, "itemStyle.color", o);
        } else if (n === "bar") {
          Si(e), Si(e.backgroundStyle), Si(e.emphasis);
          var i = e.data;
          if (i && !jt(i))
            for (var a = 0; a < i.length; a++)
              typeof i[a] == "object" && (Si(i[a]), Si(i[a] && i[a].emphasis));
        } else if (n === "sunburst") {
          var s = e.highlightPolicy;
          s &&
            ((e.emphasis = e.emphasis || {}),
            e.emphasis.focus || (e.emphasis.focus = s)),
            Nc(e),
            Mm(e.data, Nc);
        } else
          n === "graph" || n === "sankey"
            ? IT(e)
            : n === "map" &&
              (e.mapType && !e.map && (e.map = e.mapType),
              e.mapLocation && q(e, e.mapLocation));
        e.hoverAnimation != null &&
          ((e.emphasis = e.emphasis || {}),
          e.emphasis &&
            e.emphasis.scale == null &&
            (e.emphasis.scale = e.hoverAnimation)),
          kc(e);
      }
    }),
    r.dataRange && (r.visualMap = r.dataRange),
    C(LT, function (e) {
      var n = r[e];
      n &&
        (N(n) || (n = [n]),
        C(n, function (i) {
          kc(i);
        }));
    });
}
function PT(r) {
  var t = W();
  r.eachSeries(function (e) {
    var n = e.get("stack");
    if (n) {
      var i = t.get(n) || t.set(n, []),
        a = e.getData(),
        o = {
          stackResultDimension: a.getCalculationInfo("stackResultDimension"),
          stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
          stackedDimension: a.getCalculationInfo("stackedDimension"),
          stackedByDimension: a.getCalculationInfo("stackedByDimension"),
          isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
          data: a,
          seriesModel: e,
        };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      i.length &&
        a.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel),
        i.push(o);
    }
  }),
    t.each(RT);
}
function RT(r) {
  C(r, function (t, e) {
    var n = [],
      i = [NaN, NaN],
      a = [t.stackResultDimension, t.stackedOverDimension],
      o = t.data,
      s = t.isStackedByIndex;
    o.modify(a, function (u, l, f) {
      var h = o.get(t.stackedDimension, f);
      if (isNaN(h)) return i;
      var c, v;
      s ? (v = o.getRawIndex(f)) : (c = o.get(t.stackedByDimension, f));
      for (var d = NaN, g = e - 1; g >= 0; g--) {
        var p = r[g];
        if ((s || (v = p.data.rawIndexOf(p.stackedByDimension, c)), v >= 0)) {
          var y = p.data.getByRawIndex(p.stackResultDimension, v);
          if ((h >= 0 && y > 0) || (h <= 0 && y < 0)) {
            (h = HS(h, y)), (d = y);
            break;
          }
        }
      }
      return (n[0] = h), (n[1] = d), n;
    });
  });
}
var Fs = (function () {
  function r(t) {
    (this.data = t.data || (t.sourceFormat === je ? {} : [])),
      (this.sourceFormat = t.sourceFormat || _m),
      (this.seriesLayoutBy = t.seriesLayoutBy || Oe),
      (this.startIndex = t.startIndex || 0),
      (this.dimensionsDetectedCount = t.dimensionsDetectedCount),
      (this.metaRawOption = t.metaRawOption);
    var e = (this.dimensionsDefine = t.dimensionsDefine);
    if (e)
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.type == null && wm(this, n) === qt.Must && (i.type = "ordinal");
      }
  }
  return r;
})();
function Sh(r) {
  return r instanceof Fs;
}
function tf(r, t, e) {
  e = e || Am(r);
  var n = t.seriesLayoutBy,
    i = OT(r, e, n, t.sourceHeader, t.dimensions),
    a = new Fs({
      data: r,
      sourceFormat: e,
      seriesLayoutBy: n,
      dimensionsDefine: i.dimensionsDefine,
      startIndex: i.startIndex,
      dimensionsDetectedCount: i.dimensionsDetectedCount,
      metaRawOption: K(t),
    });
  return a;
}
function xh(r) {
  return new Fs({ data: r, sourceFormat: jt(r) ? mr : de });
}
function ET(r) {
  return new Fs({
    data: r.data,
    sourceFormat: r.sourceFormat,
    seriesLayoutBy: r.seriesLayoutBy,
    dimensionsDefine: K(r.dimensionsDefine),
    startIndex: r.startIndex,
    dimensionsDetectedCount: r.dimensionsDetectedCount,
  });
}
function Am(r) {
  var t = _m;
  if (jt(r)) t = mr;
  else if (N(r)) {
    r.length === 0 && (t = Vt);
    for (var e = 0, n = r.length; e < n; e++) {
      var i = r[e];
      if (i != null) {
        if (N(i)) {
          t = Vt;
          break;
        } else if (H(i)) {
          t = Te;
          break;
        }
      }
    }
  } else if (H(r)) {
    for (var a in r)
      if (Ze(r, a) && Ht(r[a])) {
        t = je;
        break;
      }
  }
  return t;
}
function OT(r, t, e, n, i) {
  var a, o;
  if (!r)
    return {
      dimensionsDefine: Fc(i),
      startIndex: o,
      dimensionsDetectedCount: a,
    };
  if (t === Vt) {
    var s = r;
    n === "auto" || n == null
      ? zc(
          function (l) {
            l != null && l !== "-" && (G(l) ? o == null && (o = 1) : (o = 0));
          },
          e,
          s,
          10
        )
      : (o = ft(n) ? n : n ? 1 : 0),
      !i &&
        o === 1 &&
        ((i = []),
        zc(
          function (l, f) {
            i[f] = l != null ? l + "" : "";
          },
          e,
          s,
          1 / 0
        )),
      (a = i ? i.length : e === fi ? s.length : s[0] ? s[0].length : null);
  } else if (t === Te) i || (i = kT(r));
  else if (t === je)
    i ||
      ((i = []),
      C(r, function (l, f) {
        i.push(f);
      }));
  else if (t === de) {
    var u = Ma(r[0]);
    a = (N(u) && u.length) || 1;
  }
  return { startIndex: o, dimensionsDefine: Fc(i), dimensionsDetectedCount: a };
}
function kT(r) {
  for (var t = 0, e; t < r.length && !(e = r[t++]); );
  if (e) {
    var n = [];
    return (
      C(e, function (i, a) {
        n.push(a);
      }),
      n
    );
  }
}
function Fc(r) {
  if (!!r) {
    var t = W();
    return z(r, function (e, n) {
      e = H(e) ? e : { name: e };
      var i = { name: e.name, displayName: e.displayName, type: e.type };
      if (i.name == null) return i;
      (i.name += ""), i.displayName == null && (i.displayName = i.name);
      var a = t.get(i.name);
      return a ? (i.name += "-" + a.count++) : t.set(i.name, { count: 1 }), i;
    });
  }
}
function zc(r, t, e, n) {
  if (t === fi)
    for (var i = 0; i < e.length && i < n; i++) r(e[i] ? e[i][0] : null, i);
  else for (var a = e[0] || [], i = 0; i < a.length && i < n; i++) r(a[i], i);
}
function Lm(r) {
  var t = r.sourceFormat;
  return t === Te || t === je;
}
var Wr,
  Ur,
  Yr,
  Gc,
  Hc,
  Im = (function () {
    function r(t, e) {
      var n = Sh(t) ? t : xh(t);
      this._source = n;
      var i = (this._data = n.data);
      n.sourceFormat === mr &&
        ((this._offset = 0), (this._dimSize = e), (this._data = i)),
        Hc(this, i, n);
    }
    return (
      (r.prototype.getSource = function () {
        return this._source;
      }),
      (r.prototype.count = function () {
        return 0;
      }),
      (r.prototype.getItem = function (t, e) {}),
      (r.prototype.appendData = function (t) {}),
      (r.prototype.clean = function () {}),
      (r.protoInitialize = (function () {
        var t = r.prototype;
        (t.pure = !1), (t.persistent = !0);
      })()),
      (r.internalField = (function () {
        var t;
        Hc = function (o, s, u) {
          var l = u.sourceFormat,
            f = u.seriesLayoutBy,
            h = u.startIndex,
            c = u.dimensionsDefine,
            v = Gc[wh(l, f)];
          if ((k(o, v), l === mr))
            (o.getItem = e), (o.count = i), (o.fillStorage = n);
          else {
            var d = Pm(l, f);
            o.getItem = Y(d, null, s, h, c);
            var g = Rm(l, f);
            o.count = Y(g, null, s, h, c);
          }
        };
        var e = function (o, s) {
            (o = o - this._offset), (s = s || []);
            for (
              var u = this._data, l = this._dimSize, f = l * o, h = 0;
              h < l;
              h++
            )
              s[h] = u[f + h];
            return s;
          },
          n = function (o, s, u, l) {
            for (var f = this._data, h = this._dimSize, c = 0; c < h; c++) {
              for (
                var v = l[c],
                  d = v[0] == null ? 1 / 0 : v[0],
                  g = v[1] == null ? -1 / 0 : v[1],
                  p = s - o,
                  y = u[c],
                  m = 0;
                m < p;
                m++
              ) {
                var _ = f[m * h + c];
                (y[o + m] = _), _ < d && (d = _), _ > g && (g = _);
              }
              (v[0] = d), (v[1] = g);
            }
          },
          i = function () {
            return this._data ? this._data.length / this._dimSize : 0;
          };
        Gc =
          ((t = {}),
          (t[Vt + "_" + Oe] = { pure: !0, appendData: a }),
          (t[Vt + "_" + fi] = {
            pure: !0,
            appendData: function () {
              throw new Error(
                'Do not support appendData when set seriesLayoutBy: "row".'
              );
            },
          }),
          (t[Te] = { pure: !0, appendData: a }),
          (t[je] = {
            pure: !0,
            appendData: function (o) {
              var s = this._data;
              C(o, function (u, l) {
                for (
                  var f = s[l] || (s[l] = []), h = 0;
                  h < (u || []).length;
                  h++
                )
                  f.push(u[h]);
              });
            },
          }),
          (t[de] = { appendData: a }),
          (t[mr] = {
            persistent: !1,
            pure: !0,
            appendData: function (o) {
              this._data = o;
            },
            clean: function () {
              (this._offset += this.count()), (this._data = null);
            },
          }),
          t);
        function a(o) {
          for (var s = 0; s < o.length; s++) this._data.push(o[s]);
        }
      })()),
      r
    );
  })(),
  Vc = function (r, t, e, n) {
    return r[n];
  },
  BT =
    ((Wr = {}),
    (Wr[Vt + "_" + Oe] = function (r, t, e, n) {
      return r[n + t];
    }),
    (Wr[Vt + "_" + fi] = function (r, t, e, n, i) {
      n += t;
      for (var a = i || [], o = r, s = 0; s < o.length; s++) {
        var u = o[s];
        a[s] = u ? u[n] : null;
      }
      return a;
    }),
    (Wr[Te] = Vc),
    (Wr[je] = function (r, t, e, n, i) {
      for (var a = i || [], o = 0; o < e.length; o++) {
        var s = e[o].name,
          u = r[s];
        a[o] = u ? u[n] : null;
      }
      return a;
    }),
    (Wr[de] = Vc),
    Wr);
function Pm(r, t) {
  var e = BT[wh(r, t)];
  return e;
}
var Wc = function (r, t, e) {
    return r.length;
  },
  NT =
    ((Ur = {}),
    (Ur[Vt + "_" + Oe] = function (r, t, e) {
      return Math.max(0, r.length - t);
    }),
    (Ur[Vt + "_" + fi] = function (r, t, e) {
      var n = r[0];
      return n ? Math.max(0, n.length - t) : 0;
    }),
    (Ur[Te] = Wc),
    (Ur[je] = function (r, t, e) {
      var n = e[0].name,
        i = r[n];
      return i ? i.length : 0;
    }),
    (Ur[de] = Wc),
    Ur);
function Rm(r, t) {
  var e = NT[wh(r, t)];
  return e;
}
var Nu = function (r, t, e) {
    return r[t];
  },
  FT =
    ((Yr = {}),
    (Yr[Vt] = Nu),
    (Yr[Te] = function (r, t, e) {
      return r[e];
    }),
    (Yr[je] = Nu),
    (Yr[de] = function (r, t, e) {
      var n = Ma(r);
      return n instanceof Array ? n[t] : n;
    }),
    (Yr[mr] = Nu),
    Yr);
function Em(r) {
  var t = FT[r];
  return t;
}
function wh(r, t) {
  return r === Vt ? r + "_" + t : r;
}
function ri(r, t, e) {
  if (!!r) {
    var n = r.getRawDataItem(t);
    if (n != null) {
      var i = r.getStore(),
        a = i.getSource().sourceFormat;
      if (e != null) {
        var o = r.getDimensionIndex(e),
          s = i.getDimensionProperty(o);
        return Em(a)(n, o, s);
      } else {
        var u = n;
        return a === de && (u = Ma(n)), u;
      }
    }
  }
}
var zT = /\{@(.+?)\}/g,
  GT = (function () {
    function r() {}
    return (
      (r.prototype.getDataParams = function (t, e) {
        var n = this.getData(e),
          i = this.getRawValue(t, e),
          a = n.getRawIndex(t),
          o = n.getName(t),
          s = n.getRawDataItem(t),
          u = n.getItemVisual(t, "style"),
          l = u && u[n.getItemVisual(t, "drawType") || "fill"],
          f = u && u.stroke,
          h = this.mainType,
          c = h === "series",
          v = n.userOutput && n.userOutput.get();
        return {
          componentType: h,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: c ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: c ? this.id : null,
          seriesName: c ? this.name : null,
          name: o,
          dataIndex: a,
          data: s,
          dataType: e,
          value: i,
          color: l,
          borderColor: f,
          dimensionNames: v ? v.fullDimensions : null,
          encode: v ? v.encode : null,
          $vars: ["seriesName", "name", "value"],
        };
      }),
      (r.prototype.getFormattedLabel = function (t, e, n, i, a, o) {
        e = e || "normal";
        var s = this.getData(n),
          u = this.getDataParams(t, n);
        if (
          (o && (u.value = o.interpolatedValue),
          i != null && N(u.value) && (u.value = u.value[i]),
          !a)
        ) {
          var l = s.getItemModel(t);
          a = l.get(
            e === "normal" ? ["label", "formatter"] : [e, "label", "formatter"]
          );
        }
        if (U(a)) return (u.status = e), (u.dimensionIndex = i), a(u);
        if (G(a)) {
          var f = gm(a, u);
          return f.replace(zT, function (h, c) {
            var v = c.length,
              d = c;
            d.charAt(0) === "[" &&
              d.charAt(v - 1) === "]" &&
              (d = +d.slice(1, v - 1));
            var g = ri(s, t, d);
            if (o && N(o.interpolatedValue)) {
              var p = s.getDimensionIndex(d);
              p >= 0 && (g = o.interpolatedValue[p]);
            }
            return g != null ? g + "" : "";
          });
        }
      }),
      (r.prototype.getRawValue = function (t, e) {
        return ri(this.getData(e), t);
      }),
      (r.prototype.formatTooltip = function (t, e, n) {}),
      r
    );
  })();
function Uc(r) {
  var t, e;
  return H(r) ? r.type && (e = r) : (t = r), { text: t, frag: e };
}
function Qi(r) {
  return new HT(r);
}
var HT = (function () {
    function r(t) {
      (t = t || {}),
        (this._reset = t.reset),
        (this._plan = t.plan),
        (this._count = t.count),
        (this._onDirty = t.onDirty),
        (this._dirty = !0);
    }
    return (
      (r.prototype.perform = function (t) {
        var e = this._upstream,
          n = t && t.skip;
        if (this._dirty && e) {
          var i = this.context;
          i.data = i.outputData = e.context.outputData;
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var a;
        this._plan && !n && (a = this._plan(this.context));
        var o = f(this._modBy),
          s = this._modDataCount || 0,
          u = f(t && t.modBy),
          l = (t && t.modDataCount) || 0;
        (o !== u || s !== l) && (a = "reset");
        function f(m) {
          return !(m >= 1) && (m = 1), m;
        }
        var h;
        (this._dirty || a === "reset") &&
          ((this._dirty = !1), (h = this._doReset(n))),
          (this._modBy = u),
          (this._modDataCount = l);
        var c = t && t.step;
        if (
          (e
            ? (this._dueEnd = e._outputDueEnd)
            : (this._dueEnd = this._count ? this._count(this.context) : 1 / 0),
          this._progress)
        ) {
          var v = this._dueIndex,
            d = Math.min(c != null ? this._dueIndex + c : 1 / 0, this._dueEnd);
          if (!n && (h || v < d)) {
            var g = this._progress;
            if (N(g))
              for (var p = 0; p < g.length; p++)
                this._doProgress(g[p], v, d, u, l);
            else this._doProgress(g, v, d, u, l);
          }
          this._dueIndex = d;
          var y = this._settedOutputEnd != null ? this._settedOutputEnd : d;
          this._outputDueEnd = y;
        } else
          this._dueIndex = this._outputDueEnd =
            this._settedOutputEnd != null
              ? this._settedOutputEnd
              : this._dueEnd;
        return this.unfinished();
      }),
      (r.prototype.dirty = function () {
        (this._dirty = !0), this._onDirty && this._onDirty(this.context);
      }),
      (r.prototype._doProgress = function (t, e, n, i, a) {
        Yc.reset(e, n, i, a),
          (this._callingProgress = t),
          this._callingProgress(
            { start: e, end: n, count: n - e, next: Yc.next },
            this.context
          );
      }),
      (r.prototype._doReset = function (t) {
        (this._dueIndex = this._outputDueEnd = this._dueEnd = 0),
          (this._settedOutputEnd = null);
        var e, n;
        !t &&
          this._reset &&
          ((e = this._reset(this.context)),
          e && e.progress && ((n = e.forceFirstProgress), (e = e.progress)),
          N(e) && !e.length && (e = null)),
          (this._progress = e),
          (this._modBy = this._modDataCount = null);
        var i = this._downstream;
        return i && i.dirty(), n;
      }),
      (r.prototype.unfinished = function () {
        return this._progress && this._dueIndex < this._dueEnd;
      }),
      (r.prototype.pipe = function (t) {
        (this._downstream !== t || this._dirty) &&
          ((this._downstream = t), (t._upstream = this), t.dirty());
      }),
      (r.prototype.dispose = function () {
        this._disposed ||
          (this._upstream && (this._upstream._downstream = null),
          this._downstream && (this._downstream._upstream = null),
          (this._dirty = !1),
          (this._disposed = !0));
      }),
      (r.prototype.getUpstream = function () {
        return this._upstream;
      }),
      (r.prototype.getDownstream = function () {
        return this._downstream;
      }),
      (r.prototype.setOutputEnd = function (t) {
        this._outputDueEnd = this._settedOutputEnd = t;
      }),
      r
    );
  })(),
  Yc = (function () {
    var r,
      t,
      e,
      n,
      i,
      a = {
        reset: function (u, l, f, h) {
          (t = u),
            (r = l),
            (e = f),
            (n = h),
            (i = Math.ceil(n / e)),
            (a.next = e > 1 && n > 0 ? s : o);
        },
      };
    return a;
    function o() {
      return t < r ? t++ : null;
    }
    function s() {
      var u = (t % i) * e + Math.ceil(t / i),
        l = t >= r ? null : u < n ? u : t;
      return t++, l;
    }
  })();
function Oo(r, t) {
  var e = t && t.type;
  return e === "ordinal"
    ? r
    : (e === "time" && !ft(r) && r != null && r !== "-" && (r = +Xe(r)),
      r == null || r === "" ? NaN : +r);
}
var VT = W({
  number: function (r) {
    return parseFloat(r);
  },
  time: function (r) {
    return +Xe(r);
  },
  trim: function (r) {
    return G(r) ? Pe(r) : r;
  },
});
function Om(r) {
  return VT.get(r);
}
var km = {
    lt: function (r, t) {
      return r < t;
    },
    lte: function (r, t) {
      return r <= t;
    },
    gt: function (r, t) {
      return r > t;
    },
    gte: function (r, t) {
      return r >= t;
    },
  },
  WT = (function () {
    function r(t, e) {
      if (!ft(e)) {
        var n = "";
        et(n);
      }
      (this._opFn = km[t]), (this._rvalFloat = xr(e));
    }
    return (
      (r.prototype.evaluate = function (t) {
        return ft(t)
          ? this._opFn(t, this._rvalFloat)
          : this._opFn(xr(t), this._rvalFloat);
      }),
      r
    );
  })(),
  Bm = (function () {
    function r(t, e) {
      var n = t === "desc";
      (this._resultLT = n ? 1 : -1),
        e == null && (e = n ? "min" : "max"),
        (this._incomparable = e === "min" ? -1 / 0 : 1 / 0);
    }
    return (
      (r.prototype.evaluate = function (t, e) {
        var n = ft(t) ? t : xr(t),
          i = ft(e) ? e : xr(e),
          a = isNaN(n),
          o = isNaN(i);
        if (
          (a && (n = this._incomparable), o && (i = this._incomparable), a && o)
        ) {
          var s = G(t),
            u = G(e);
          s && (n = u ? t : 0), u && (i = s ? e : 0);
        }
        return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
      }),
      r
    );
  })(),
  UT = (function () {
    function r(t, e) {
      (this._rval = e),
        (this._isEQ = t),
        (this._rvalTypeof = typeof e),
        (this._rvalFloat = xr(e));
    }
    return (
      (r.prototype.evaluate = function (t) {
        var e = t === this._rval;
        if (!e) {
          var n = typeof t;
          n !== this._rvalTypeof &&
            (n === "number" || this._rvalTypeof === "number") &&
            (e = xr(t) === this._rvalFloat);
        }
        return this._isEQ ? e : !e;
      }),
      r
    );
  })();
function YT(r, t) {
  return r === "eq" || r === "ne"
    ? new UT(r === "eq", t)
    : Ze(km, r)
    ? new WT(r, t)
    : null;
}
var $T = (function () {
  function r() {}
  return (
    (r.prototype.getRawData = function () {
      throw new Error("not supported");
    }),
    (r.prototype.getRawDataItem = function (t) {
      throw new Error("not supported");
    }),
    (r.prototype.cloneRawData = function () {}),
    (r.prototype.getDimensionInfo = function (t) {}),
    (r.prototype.cloneAllDimensionInfo = function () {}),
    (r.prototype.count = function () {}),
    (r.prototype.retrieveValue = function (t, e) {}),
    (r.prototype.retrieveValueFromItem = function (t, e) {}),
    (r.prototype.convertValue = function (t, e) {
      return Oo(t, e);
    }),
    r
  );
})();
function ZT(r, t) {
  var e = new $T(),
    n = r.data,
    i = (e.sourceFormat = r.sourceFormat),
    a = r.startIndex,
    o = "";
  r.seriesLayoutBy !== Oe && et(o);
  var s = [],
    u = {},
    l = r.dimensionsDefine;
  if (l)
    C(l, function (g, p) {
      var y = g.name,
        m = { index: p, name: y, displayName: g.displayName };
      if ((s.push(m), y != null)) {
        var _ = "";
        Ze(u, y) && et(_), (u[y] = m);
      }
    });
  else for (var f = 0; f < r.dimensionsDetectedCount; f++) s.push({ index: f });
  var h = Pm(i, Oe);
  t.__isBuiltIn &&
    ((e.getRawDataItem = function (g) {
      return h(n, a, s, g);
    }),
    (e.getRawData = Y(XT, null, r))),
    (e.cloneRawData = Y(qT, null, r));
  var c = Rm(i, Oe);
  e.count = Y(c, null, n, a, s);
  var v = Em(i);
  e.retrieveValue = function (g, p) {
    var y = h(n, a, s, g);
    return d(y, p);
  };
  var d = (e.retrieveValueFromItem = function (g, p) {
    if (g != null) {
      var y = s[p];
      if (y) return v(g, p, y.name);
    }
  });
  return (
    (e.getDimensionInfo = Y(KT, null, s, u)),
    (e.cloneAllDimensionInfo = Y(QT, null, s)),
    e
  );
}
function XT(r) {
  var t = r.sourceFormat;
  if (!bh(t)) {
    var e = "";
    et(e);
  }
  return r.data;
}
function qT(r) {
  var t = r.sourceFormat,
    e = r.data;
  if (!bh(t)) {
    var n = "";
    et(n);
  }
  if (t === Vt) {
    for (var i = [], a = 0, o = e.length; a < o; a++) i.push(e[a].slice());
    return i;
  } else if (t === Te) {
    for (var i = [], a = 0, o = e.length; a < o; a++) i.push(k({}, e[a]));
    return i;
  }
}
function KT(r, t, e) {
  if (e != null) {
    if (ft(e) || (!isNaN(e) && !Ze(t, e))) return r[e];
    if (Ze(t, e)) return t[e];
  }
}
function QT(r) {
  return K(r);
}
var Nm = W();
function JT(r) {
  r = K(r);
  var t = r.type,
    e = "";
  t || et(e);
  var n = t.split(":");
  n.length !== 2 && et(e);
  var i = !1;
  n[0] === "echarts" && ((t = n[1]), (i = !0)),
    (r.__isBuiltIn = i),
    Nm.set(t, r);
}
function jT(r, t, e) {
  var n = _t(r),
    i = n.length,
    a = "";
  i || et(a);
  for (var o = 0, s = i; o < s; o++) {
    var u = n[o];
    (t = tC(u, t)), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function tC(r, t, e, n) {
  var i = "";
  t.length || et(i), H(r) || et(i);
  var a = r.type,
    o = Nm.get(a);
  o || et(i);
  var s = z(t, function (l) {
      return ZT(l, o);
    }),
    u = _t(
      o.transform({ upstream: s[0], upstreamList: s, config: K(r.config) })
    );
  return z(u, function (l, f) {
    var h = "";
    H(l) || et(h), l.data || et(h);
    var c = Am(l.data);
    bh(c) || et(h);
    var v,
      d = t[0];
    if (d && f === 0 && !l.dimensions) {
      var g = d.startIndex;
      g && (l.data = d.data.slice(0, g).concat(l.data)),
        (v = {
          seriesLayoutBy: Oe,
          sourceHeader: g,
          dimensions: d.metaRawOption.dimensions,
        });
    } else v = { seriesLayoutBy: Oe, sourceHeader: 0, dimensions: l.dimensions };
    return tf(l.data, v, null);
  });
}
function bh(r) {
  return r === Vt || r === Te;
}
var zs = "undefined",
  eC = typeof Uint32Array === zs ? Array : Uint32Array,
  rC = typeof Uint16Array === zs ? Array : Uint16Array,
  Fm = typeof Int32Array === zs ? Array : Int32Array,
  $c = typeof Float64Array === zs ? Array : Float64Array,
  zm = { float: $c, int: Fm, ordinal: Array, number: Array, time: $c },
  Fu;
function xi(r) {
  return r > 65535 ? eC : rC;
}
function Dn() {
  return [1 / 0, -1 / 0];
}
function nC(r) {
  var t = r.constructor;
  return t === Array ? r.slice() : new t(r);
}
function Zc(r, t, e, n, i) {
  var a = zm[e || "float"];
  if (i) {
    var o = r[t],
      s = o && o.length;
    if (s !== n) {
      for (var u = new a(n), l = 0; l < s; l++) u[l] = o[l];
      r[t] = u;
    }
  } else r[t] = new a(n);
}
var iC = (function () {
  function r() {
    (this._chunks = []),
      (this._rawExtent = []),
      (this._extent = []),
      (this._count = 0),
      (this._rawCount = 0),
      (this._calcDimNameToIdx = W());
  }
  return (
    (r.prototype.initData = function (t, e, n) {
      (this._provider = t),
        (this._chunks = []),
        (this._indices = null),
        (this.getRawIndex = this._getRawIdxIdentity);
      var i = t.getSource(),
        a = (this.defaultDimValueGetter = Fu[i.sourceFormat]);
      (this._dimValueGetter = n || a),
        (this._rawExtent = []),
        Lm(i),
        (this._dimensions = z(e, function (o) {
          return { type: o.type, property: o.property };
        })),
        this._initDataFromProvider(0, t.count());
    }),
    (r.prototype.getProvider = function () {
      return this._provider;
    }),
    (r.prototype.getSource = function () {
      return this._provider.getSource();
    }),
    (r.prototype.ensureCalculationDimension = function (t, e) {
      var n = this._calcDimNameToIdx,
        i = this._dimensions,
        a = n.get(t);
      if (a != null) {
        if (i[a].type === e) return a;
      } else a = i.length;
      return (
        (i[a] = { type: e }),
        n.set(t, a),
        (this._chunks[a] = new zm[e || "float"](this._rawCount)),
        (this._rawExtent[a] = Dn()),
        a
      );
    }),
    (r.prototype.collectOrdinalMeta = function (t, e) {
      var n = this._chunks[t],
        i = this._dimensions[t],
        a = this._rawExtent,
        o = i.ordinalOffset || 0,
        s = n.length;
      o === 0 && (a[t] = Dn());
      for (var u = a[t], l = o; l < s; l++) {
        var f = (n[l] = e.parseAndCollect(n[l]));
        isNaN(f) || ((u[0] = Math.min(f, u[0])), (u[1] = Math.max(f, u[1])));
      }
      (i.ordinalMeta = e), (i.ordinalOffset = s), (i.type = "ordinal");
    }),
    (r.prototype.getOrdinalMeta = function (t) {
      var e = this._dimensions[t],
        n = e.ordinalMeta;
      return n;
    }),
    (r.prototype.getDimensionProperty = function (t) {
      var e = this._dimensions[t];
      return e && e.property;
    }),
    (r.prototype.appendData = function (t) {
      var e = this._provider,
        n = this.count();
      e.appendData(t);
      var i = e.count();
      return (
        e.persistent || (i += n),
        n < i && this._initDataFromProvider(n, i, !0),
        [n, i]
      );
    }),
    (r.prototype.appendValues = function (t, e) {
      for (
        var n = this._chunks,
          i = this._dimensions,
          a = i.length,
          o = this._rawExtent,
          s = this.count(),
          u = s + Math.max(t.length, e || 0),
          l = 0;
        l < a;
        l++
      ) {
        var f = i[l];
        Zc(n, l, f.type, u, !0);
      }
      for (var h = [], c = s; c < u; c++)
        for (var v = c - s, d = 0; d < a; d++) {
          var f = i[d],
            g = Fu.arrayRows.call(this, t[v] || h, f.property, v, d);
          n[d][c] = g;
          var p = o[d];
          g < p[0] && (p[0] = g), g > p[1] && (p[1] = g);
        }
      return (this._rawCount = this._count = u), { start: s, end: u };
    }),
    (r.prototype._initDataFromProvider = function (t, e, n) {
      for (
        var i = this._provider,
          a = this._chunks,
          o = this._dimensions,
          s = o.length,
          u = this._rawExtent,
          l = z(o, function (m) {
            return m.property;
          }),
          f = 0;
        f < s;
        f++
      ) {
        var h = o[f];
        u[f] || (u[f] = Dn()), Zc(a, f, h.type, e, n);
      }
      if (i.fillStorage) i.fillStorage(t, e, a, u);
      else
        for (var c = [], v = t; v < e; v++) {
          c = i.getItem(v, c);
          for (var d = 0; d < s; d++) {
            var g = a[d],
              p = this._dimValueGetter(c, l[d], v, d);
            g[v] = p;
            var y = u[d];
            p < y[0] && (y[0] = p), p > y[1] && (y[1] = p);
          }
        }
      !i.persistent && i.clean && i.clean(),
        (this._rawCount = this._count = e),
        (this._extent = []);
    }),
    (r.prototype.count = function () {
      return this._count;
    }),
    (r.prototype.get = function (t, e) {
      if (!(e >= 0 && e < this._count)) return NaN;
      var n = this._chunks[t];
      return n ? n[this.getRawIndex(e)] : NaN;
    }),
    (r.prototype.getValues = function (t, e) {
      var n = [],
        i = [];
      if (e == null) {
        (e = t), (t = []);
        for (var a = 0; a < this._dimensions.length; a++) i.push(a);
      } else i = t;
      for (var a = 0, o = i.length; a < o; a++) n.push(this.get(i[a], e));
      return n;
    }),
    (r.prototype.getByRawIndex = function (t, e) {
      if (!(e >= 0 && e < this._rawCount)) return NaN;
      var n = this._chunks[t];
      return n ? n[e] : NaN;
    }),
    (r.prototype.getSum = function (t) {
      var e = this._chunks[t],
        n = 0;
      if (e)
        for (var i = 0, a = this.count(); i < a; i++) {
          var o = this.get(t, i);
          isNaN(o) || (n += o);
        }
      return n;
    }),
    (r.prototype.getMedian = function (t) {
      var e = [];
      this.each([t], function (a) {
        isNaN(a) || e.push(a);
      });
      var n = e.sort(function (a, o) {
          return a - o;
        }),
        i = this.count();
      return i === 0
        ? 0
        : i % 2 === 1
        ? n[(i - 1) / 2]
        : (n[i / 2] + n[i / 2 - 1]) / 2;
    }),
    (r.prototype.indexOfRawIndex = function (t) {
      if (t >= this._rawCount || t < 0) return -1;
      if (!this._indices) return t;
      var e = this._indices,
        n = e[t];
      if (n != null && n < this._count && n === t) return t;
      for (var i = 0, a = this._count - 1; i <= a; ) {
        var o = ((i + a) / 2) | 0;
        if (e[o] < t) i = o + 1;
        else if (e[o] > t) a = o - 1;
        else return o;
      }
      return -1;
    }),
    (r.prototype.indicesOfNearest = function (t, e, n) {
      var i = this._chunks,
        a = i[t],
        o = [];
      if (!a) return o;
      n == null && (n = 1 / 0);
      for (var s = 1 / 0, u = -1, l = 0, f = 0, h = this.count(); f < h; f++) {
        var c = this.getRawIndex(f),
          v = e - a[c],
          d = Math.abs(v);
        d <= n &&
          ((d < s || (d === s && v >= 0 && u < 0)) &&
            ((s = d), (u = v), (l = 0)),
          v === u && (o[l++] = f));
      }
      return (o.length = l), o;
    }),
    (r.prototype.getIndices = function () {
      var t,
        e = this._indices;
      if (e) {
        var n = e.constructor,
          i = this._count;
        if (n === Array) {
          t = new n(i);
          for (var a = 0; a < i; a++) t[a] = e[a];
        } else t = new n(e.buffer, 0, i);
      } else {
        var n = xi(this._rawCount);
        t = new n(this.count());
        for (var a = 0; a < t.length; a++) t[a] = a;
      }
      return t;
    }),
    (r.prototype.filter = function (t, e) {
      if (!this._count) return this;
      for (
        var n = this.clone(),
          i = n.count(),
          a = xi(n._rawCount),
          o = new a(i),
          s = [],
          u = t.length,
          l = 0,
          f = t[0],
          h = n._chunks,
          c = 0;
        c < i;
        c++
      ) {
        var v = void 0,
          d = n.getRawIndex(c);
        if (u === 0) v = e(c);
        else if (u === 1) {
          var g = h[f][d];
          v = e(g, c);
        } else {
          for (var p = 0; p < u; p++) s[p] = h[t[p]][d];
          (s[p] = c), (v = e.apply(null, s));
        }
        v && (o[l++] = d);
      }
      return (
        l < i && (n._indices = o),
        (n._count = l),
        (n._extent = []),
        n._updateGetRawIdx(),
        n
      );
    }),
    (r.prototype.selectRange = function (t) {
      var e = this.clone(),
        n = e._count;
      if (!n) return this;
      var i = pt(t),
        a = i.length;
      if (!a) return this;
      var o = e.count(),
        s = xi(e._rawCount),
        u = new s(o),
        l = 0,
        f = i[0],
        h = t[f][0],
        c = t[f][1],
        v = e._chunks,
        d = !1;
      if (!e._indices) {
        var g = 0;
        if (a === 1) {
          for (var p = v[i[0]], y = 0; y < n; y++) {
            var m = p[y];
            ((m >= h && m <= c) || isNaN(m)) && (u[l++] = g), g++;
          }
          d = !0;
        } else if (a === 2) {
          for (
            var p = v[i[0]], _ = v[i[1]], S = t[i[1]][0], w = t[i[1]][1], y = 0;
            y < n;
            y++
          ) {
            var m = p[y],
              x = _[y];
            ((m >= h && m <= c) || isNaN(m)) &&
              ((x >= S && x <= w) || isNaN(x)) &&
              (u[l++] = g),
              g++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var y = 0; y < o; y++) {
            var b = e.getRawIndex(y),
              m = v[i[0]][b];
            ((m >= h && m <= c) || isNaN(m)) && (u[l++] = b);
          }
        else
          for (var y = 0; y < o; y++) {
            for (var T = !0, b = e.getRawIndex(y), M = 0; M < a; M++) {
              var D = i[M],
                m = v[D][b];
              (m < t[D][0] || m > t[D][1]) && (T = !1);
            }
            T && (u[l++] = e.getRawIndex(y));
          }
      return (
        l < o && (e._indices = u),
        (e._count = l),
        (e._extent = []),
        e._updateGetRawIdx(),
        e
      );
    }),
    (r.prototype.map = function (t, e) {
      var n = this.clone(t);
      return this._updateDims(n, t, e), n;
    }),
    (r.prototype.modify = function (t, e) {
      this._updateDims(this, t, e);
    }),
    (r.prototype._updateDims = function (t, e, n) {
      for (
        var i = t._chunks,
          a = [],
          o = e.length,
          s = t.count(),
          u = [],
          l = t._rawExtent,
          f = 0;
        f < e.length;
        f++
      )
        l[e[f]] = Dn();
      for (var h = 0; h < s; h++) {
        for (var c = t.getRawIndex(h), v = 0; v < o; v++) u[v] = i[e[v]][c];
        u[o] = h;
        var d = n && n.apply(null, u);
        if (d != null) {
          typeof d != "object" && ((a[0] = d), (d = a));
          for (var f = 0; f < d.length; f++) {
            var g = e[f],
              p = d[f],
              y = l[g],
              m = i[g];
            m && (m[c] = p), p < y[0] && (y[0] = p), p > y[1] && (y[1] = p);
          }
        }
      }
    }),
    (r.prototype.lttbDownSample = function (t, e) {
      var n = this.clone([t], !0),
        i = n._chunks,
        a = i[t],
        o = this.count(),
        s = 0,
        u = Math.floor(1 / e),
        l = this.getRawIndex(0),
        f,
        h,
        c,
        v = new (xi(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      v[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (
          var g = Math.min(d + u, o - 1),
            p = Math.min(d + u * 2, o),
            y = (p + g) / 2,
            m = 0,
            _ = g;
          _ < p;
          _++
        ) {
          var S = this.getRawIndex(_),
            w = a[S];
          isNaN(w) || (m += w);
        }
        m /= p - g;
        var x = d,
          b = Math.min(d + u, o),
          T = d - 1,
          M = a[l];
        (f = -1), (c = x);
        for (var D = -1, A = 0, _ = x; _ < b; _++) {
          var S = this.getRawIndex(_),
            w = a[S];
          if (isNaN(w)) {
            A++, D < 0 && (D = S);
            continue;
          }
          (h = Math.abs((T - y) * (w - M) - (T - _) * (m - M))),
            h > f && ((f = h), (c = S));
        }
        A > 0 && A < b - x && ((v[s++] = Math.min(D, c)), (c = Math.max(D, c))),
          (v[s++] = c),
          (l = c);
      }
      return (
        (v[s++] = this.getRawIndex(o - 1)),
        (n._count = s),
        (n._indices = v),
        (n.getRawIndex = this._getRawIdx),
        n
      );
    }),
    (r.prototype.downSample = function (t, e, n, i) {
      for (
        var a = this.clone([t], !0),
          o = a._chunks,
          s = [],
          u = Math.floor(1 / e),
          l = o[t],
          f = this.count(),
          h = (a._rawExtent[t] = Dn()),
          c = new (xi(this._rawCount))(Math.ceil(f / u)),
          v = 0,
          d = 0;
        d < f;
        d += u
      ) {
        u > f - d && ((u = f - d), (s.length = u));
        for (var g = 0; g < u; g++) {
          var p = this.getRawIndex(d + g);
          s[g] = l[p];
        }
        var y = n(s),
          m = this.getRawIndex(Math.min(d + i(s, y) || 0, f - 1));
        (l[m] = y),
          y < h[0] && (h[0] = y),
          y > h[1] && (h[1] = y),
          (c[v++] = m);
      }
      return (a._count = v), (a._indices = c), a._updateGetRawIdx(), a;
    }),
    (r.prototype.each = function (t, e) {
      if (!!this._count)
        for (
          var n = t.length, i = this._chunks, a = 0, o = this.count();
          a < o;
          a++
        ) {
          var s = this.getRawIndex(a);
          switch (n) {
            case 0:
              e(a);
              break;
            case 1:
              e(i[t[0]][s], a);
              break;
            case 2:
              e(i[t[0]][s], i[t[1]][s], a);
              break;
            default:
              for (var u = 0, l = []; u < n; u++) l[u] = i[t[u]][s];
              (l[u] = a), e.apply(null, l);
          }
        }
    }),
    (r.prototype.getDataExtent = function (t) {
      var e = this._chunks[t],
        n = Dn();
      if (!e) return n;
      var i = this.count(),
        a = !this._indices,
        o;
      if (a) return this._rawExtent[t].slice();
      if (((o = this._extent[t]), o)) return o.slice();
      o = n;
      for (var s = o[0], u = o[1], l = 0; l < i; l++) {
        var f = this.getRawIndex(l),
          h = e[f];
        h < s && (s = h), h > u && (u = h);
      }
      return (o = [s, u]), (this._extent[t] = o), o;
    }),
    (r.prototype.getRawDataItem = function (t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent) return this._provider.getItem(e);
      for (var n = [], i = this._chunks, a = 0; a < i.length; a++)
        n.push(i[a][e]);
      return n;
    }),
    (r.prototype.clone = function (t, e) {
      var n = new r(),
        i = this._chunks,
        a =
          t &&
          oi(
            t,
            function (s, u) {
              return (s[u] = !0), s;
            },
            {}
          );
      if (a)
        for (var o = 0; o < i.length; o++)
          n._chunks[o] = a[o] ? nC(i[o]) : i[o];
      else n._chunks = i;
      return (
        this._copyCommonProps(n),
        e || (n._indices = this._cloneIndices()),
        n._updateGetRawIdx(),
        n
      );
    }),
    (r.prototype._copyCommonProps = function (t) {
      (t._count = this._count),
        (t._rawCount = this._rawCount),
        (t._provider = this._provider),
        (t._dimensions = this._dimensions),
        (t._extent = K(this._extent)),
        (t._rawExtent = K(this._rawExtent));
    }),
    (r.prototype._cloneIndices = function () {
      if (this._indices) {
        var t = this._indices.constructor,
          e = void 0;
        if (t === Array) {
          var n = this._indices.length;
          e = new t(n);
          for (var i = 0; i < n; i++) e[i] = this._indices[i];
        } else e = new t(this._indices);
        return e;
      }
      return null;
    }),
    (r.prototype._getRawIdxIdentity = function (t) {
      return t;
    }),
    (r.prototype._getRawIdx = function (t) {
      return t < this._count && t >= 0 ? this._indices[t] : -1;
    }),
    (r.prototype._updateGetRawIdx = function () {
      this.getRawIndex = this._indices
        ? this._getRawIdx
        : this._getRawIdxIdentity;
    }),
    (r.internalField = (function () {
      function t(e, n, i, a) {
        return Oo(e[a], this._dimensions[a]);
      }
      Fu = {
        arrayRows: t,
        objectRows: function (e, n, i, a) {
          return Oo(e[n], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function (e, n, i, a) {
          var o = e && (e.value == null ? e : e.value);
          return Oo(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function (e, n, i, a) {
          return e[a];
        },
      };
    })()),
    r
  );
})();
const ef = iC;
var Gm = (function () {
  function r(t) {
    (this._sourceList = []),
      (this._storeList = []),
      (this._upstreamSignList = []),
      (this._versionSignBase = 0),
      (this._dirty = !0),
      (this._sourceHost = t);
  }
  return (
    (r.prototype.dirty = function () {
      this._setLocalSource([], []), (this._storeList = []), (this._dirty = !0);
    }),
    (r.prototype._setLocalSource = function (t, e) {
      (this._sourceList = t),
        (this._upstreamSignList = e),
        this._versionSignBase++,
        this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }),
    (r.prototype._getVersionSign = function () {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }),
    (r.prototype.prepareSource = function () {
      this._isDirty() && (this._createSource(), (this._dirty = !1));
    }),
    (r.prototype._createSource = function () {
      this._setLocalSource([], []);
      var t = this._sourceHost,
        e = this._getUpstreamSourceManagers(),
        n = !!e.length,
        i,
        a;
      if (ro(t)) {
        var o = t,
          s = void 0,
          u = void 0,
          l = void 0;
        if (n) {
          var f = e[0];
          f.prepareSource(),
            (l = f.getSource()),
            (s = l.data),
            (u = l.sourceFormat),
            (a = [f._getVersionSign()]);
        } else (s = o.get("data", !0)), (u = jt(s) ? mr : de), (a = []);
        var h = this._getSourceMetaRawOption() || {},
          c = (l && l.metaRawOption) || {},
          v = nt(h.seriesLayoutBy, c.seriesLayoutBy) || null,
          d = nt(h.sourceHeader, c.sourceHeader),
          g = nt(h.dimensions, c.dimensions),
          p = v !== c.seriesLayoutBy || !!d != !!c.sourceHeader || g;
        i = p
          ? [tf(s, { seriesLayoutBy: v, sourceHeader: d, dimensions: g }, u)]
          : [];
      } else {
        var y = t;
        if (n) {
          var m = this._applyTransform(e);
          (i = m.sourceList), (a = m.upstreamSignList);
        } else {
          var _ = y.get("source", !0);
          (i = [tf(_, this._getSourceMetaRawOption(), null)]), (a = []);
        }
      }
      this._setLocalSource(i, a);
    }),
    (r.prototype._applyTransform = function (t) {
      var e = this._sourceHost,
        n = e.get("transform", !0),
        i = e.get("fromTransformResult", !0);
      if (i != null) {
        var a = "";
        t.length !== 1 && qc(a);
      }
      var o,
        s = [],
        u = [];
      return (
        C(t, function (l) {
          l.prepareSource();
          var f = l.getSource(i || 0),
            h = "";
          i != null && !f && qc(h), s.push(f), u.push(l._getVersionSign());
        }),
        n
          ? (o = jT(n, s, { datasetIndex: e.componentIndex }))
          : i != null && (o = [ET(s[0])]),
        { sourceList: o, upstreamSignList: u }
      );
    }),
    (r.prototype._isDirty = function () {
      if (this._dirty) return !0;
      for (
        var t = this._getUpstreamSourceManagers(), e = 0;
        e < t.length;
        e++
      ) {
        var n = t[e];
        if (n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign())
          return !0;
      }
    }),
    (r.prototype.getSource = function (t) {
      t = t || 0;
      var e = this._sourceList[t];
      if (!e) {
        var n = this._getUpstreamSourceManagers();
        return n[0] && n[0].getSource(t);
      }
      return e;
    }),
    (r.prototype.getSharedDataStore = function (t) {
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }),
    (r.prototype._innerGetDataStore = function (t, e, n) {
      var i = 0,
        a = this._storeList,
        o = a[i];
      o || (o = a[i] = {});
      var s = o[n];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        ro(this._sourceHost) && u
          ? (s = u._innerGetDataStore(t, e, n))
          : ((s = new ef()), s.initData(new Im(e, t.length), t)),
          (o[n] = s);
      }
      return s;
    }),
    (r.prototype._getUpstreamSourceManagers = function () {
      var t = this._sourceHost;
      if (ro(t)) {
        var e = xm(t);
        return e ? [e.getSourceManager()] : [];
      } else
        return z(iT(t), function (n) {
          return n.getSourceManager();
        });
    }),
    (r.prototype._getSourceMetaRawOption = function () {
      var t = this._sourceHost,
        e,
        n,
        i;
      if (ro(t))
        (e = t.get("seriesLayoutBy", !0)),
          (n = t.get("sourceHeader", !0)),
          (i = t.get("dimensions", !0));
      else if (!this._getUpstreamSourceManagers().length) {
        var a = t;
        (e = a.get("seriesLayoutBy", !0)),
          (n = a.get("sourceHeader", !0)),
          (i = a.get("dimensions", !0));
      }
      return { seriesLayoutBy: e, sourceHeader: n, dimensions: i };
    }),
    r
  );
})();
function Xc(r) {
  var t = r.option.transform;
  t && Go(r.option.transform);
}
function ro(r) {
  return r.mainType === "series";
}
function qc(r) {
  throw new Error(r);
}
var Hm = "line-height:1";
function Vm(r, t) {
  var e = r.color || "#6e7079",
    n = r.fontSize || 12,
    i = r.fontWeight || "400",
    a = r.color || "#464646",
    o = r.fontSize || 14,
    s = r.fontWeight || "900";
  return t === "html"
    ? {
        nameStyle:
          "font-size:" +
          ue(n + "") +
          "px;color:" +
          ue(e) +
          ";font-weight:" +
          ue(i + ""),
        valueStyle:
          "font-size:" +
          ue(o + "") +
          "px;color:" +
          ue(a) +
          ";font-weight:" +
          ue(s + ""),
      }
    : {
        nameStyle: { fontSize: n, fill: e, fontWeight: i },
        valueStyle: { fontSize: o, fill: a, fontWeight: s },
      };
}
var aC = [0, 10, 20, 30],
  oC = [
    "",
    `
`,
    `

`,
    `


`,
  ];
function da(r, t) {
  return (t.type = r), t;
}
function rf(r) {
  return r.type === "section";
}
function Wm(r) {
  return rf(r) ? sC : uC;
}
function Um(r) {
  if (rf(r)) {
    var t = 0,
      e = r.blocks.length,
      n = e > 1 || (e > 0 && !r.noHeader);
    return (
      C(r.blocks, function (i) {
        var a = Um(i);
        a >= t && (t = a + +(n && (!a || (rf(i) && !i.noHeader))));
      }),
      t
    );
  }
  return 0;
}
function sC(r, t, e, n) {
  var i = t.noHeader,
    a = lC(Um(t)),
    o = [],
    s = t.blocks || [];
  ke(!s || N(s)), (s = s || []);
  var u = r.orderMode;
  if (t.sortBlocks && u) {
    s = s.slice();
    var l = { valueAsc: "asc", valueDesc: "desc" };
    if (Ze(l, u)) {
      var f = new Bm(l[u], null);
      s.sort(function (d, g) {
        return f.evaluate(d.sortParam, g.sortParam);
      });
    } else u === "seriesDesc" && s.reverse();
  }
  C(s, function (d, g) {
    var p = t.valueFormatter,
      y = Wm(d)(
        p ? k(k({}, r), { valueFormatter: p }) : r,
        d,
        g > 0 ? a.html : 0,
        n
      );
    y != null && o.push(y);
  });
  var h =
    r.renderMode === "richText"
      ? o.join(a.richText)
      : nf(o.join(""), i ? e : a.html);
  if (i) return h;
  var c = Jl(t.header, "ordinal", r.useUTC),
    v = Vm(n, r.renderMode).nameStyle;
  return r.renderMode === "richText"
    ? Ym(r, c, v) + a.richText + h
    : nf('<div style="' + v + ";" + Hm + ';">' + ue(c) + "</div>" + h, e);
}
function uC(r, t, e, n) {
  var i = r.renderMode,
    a = t.noName,
    o = t.noValue,
    s = !t.markerType,
    u = t.name,
    l = r.useUTC,
    f =
      t.valueFormatter ||
      r.valueFormatter ||
      function (S) {
        return (
          (S = N(S) ? S : [S]),
          z(S, function (w, x) {
            return Jl(w, N(v) ? v[x] : v, l);
          })
        );
      };
  if (!(a && o)) {
    var h = s
        ? ""
        : r.markupStyleCreator.makeTooltipMarker(
            t.markerType,
            t.markerColor || "#333",
            i
          ),
      c = a ? "" : Jl(u, "ordinal", l),
      v = t.valueType,
      d = o ? [] : f(t.value),
      g = !s || !a,
      p = !s && a,
      y = Vm(n, i),
      m = y.nameStyle,
      _ = y.valueStyle;
    return i === "richText"
      ? (s ? "" : h) + (a ? "" : Ym(r, c, m)) + (o ? "" : vC(r, d, g, p, _))
      : nf(
          (s ? "" : h) + (a ? "" : fC(c, !s, m)) + (o ? "" : hC(d, g, p, _)),
          e
        );
  }
}
function Kc(r, t, e, n, i, a) {
  if (!!r) {
    var o = Wm(r),
      s = {
        useUTC: i,
        renderMode: e,
        orderMode: n,
        markupStyleCreator: t,
        valueFormatter: r.valueFormatter,
      };
    return o(s, r, 0, a);
  }
}
function lC(r) {
  return { html: aC[r], richText: oC[r] };
}
function nf(r, t) {
  var e = '<div style="clear:both"></div>',
    n = "margin: " + t + "px 0 0";
  return '<div style="' + n + ";" + Hm + ';">' + r + e + "</div>";
}
function fC(r, t, e) {
  var n = t ? "margin-left:2px" : "";
  return '<span style="' + e + ";" + n + '">' + ue(r) + "</span>";
}
function hC(r, t, e, n) {
  var i = e ? "10px" : "20px",
    a = t ? "float:right;margin-left:" + i : "";
  return (
    (r = N(r) ? r : [r]),
    '<span style="' +
      a +
      ";" +
      n +
      '">' +
      z(r, function (o) {
        return ue(o);
      }).join("&nbsp;&nbsp;") +
      "</span>"
  );
}
function Ym(r, t, e) {
  return r.markupStyleCreator.wrapRichTextStyle(t, e);
}
function vC(r, t, e, n, i) {
  var a = [i],
    o = n ? 10 : 20;
  return (
    e && a.push({ padding: [0, 0, 0, o], align: "right" }),
    r.markupStyleCreator.wrapRichTextStyle(N(t) ? t.join("  ") : t, a)
  );
}
function cC(r, t) {
  var e = r.getData().getItemVisual(t, "style"),
    n = e[r.visualDrawType];
  return hn(n);
}
function $m(r, t) {
  var e = r.get("padding");
  return e != null ? e : t === "richText" ? [8, 10] : 10;
}
var zu = (function () {
  function r() {
    (this.richTextStyles = {}), (this._nextStyleNameId = Kg());
  }
  return (
    (r.prototype._generateStyleName = function () {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }),
    (r.prototype.makeTooltipMarker = function (t, e, n) {
      var i = n === "richText" ? this._generateStyleName() : null,
        a = qb({ color: e, type: t, renderMode: n, markerId: i });
      return G(a) ? a : ((this.richTextStyles[i] = a.style), a.content);
    }),
    (r.prototype.wrapRichTextStyle = function (t, e) {
      var n = {};
      N(e)
        ? C(e, function (a) {
            return k(n, a);
          })
        : k(n, e);
      var i = this._generateStyleName();
      return (this.richTextStyles[i] = n), "{" + i + "|" + t + "}";
    }),
    r
  );
})();
function dC(r) {
  var t = r.series,
    e = r.dataIndex,
    n = r.multipleSeries,
    i = t.getData(),
    a = i.mapDimensionsAll("defaultedTooltip"),
    o = a.length,
    s = t.getRawValue(e),
    u = N(s),
    l = cC(t, e),
    f,
    h,
    c,
    v;
  if (o > 1 || (u && !o)) {
    var d = pC(s, t, e, a, l);
    (f = d.inlineValues),
      (h = d.inlineValueTypes),
      (c = d.blocks),
      (v = d.inlineValues[0]);
  } else if (o) {
    var g = i.getDimensionInfo(a[0]);
    (v = f = ri(i, e, a[0])), (h = g.type);
  } else v = f = u ? s[0] : s;
  var p = qf(t),
    y = (p && t.name) || "",
    m = i.getName(e),
    _ = n ? y : m;
  return da("section", {
    header: y,
    noHeader: n || !p,
    sortParam: v,
    blocks: [
      da("nameValue", {
        markerType: "item",
        markerColor: l,
        name: _,
        noName: !Pe(_),
        value: f,
        valueType: h,
      }),
    ].concat(c || []),
  });
}
function pC(r, t, e, n, i) {
  var a = t.getData(),
    o = oi(
      r,
      function (h, c, v) {
        var d = a.getDimensionInfo(v);
        return (h = h || (d && d.tooltip !== !1 && d.displayName != null));
      },
      !1
    ),
    s = [],
    u = [],
    l = [];
  n.length
    ? C(n, function (h) {
        f(ri(a, e, h), h);
      })
    : C(r, f);
  function f(h, c) {
    var v = a.getDimensionInfo(c);
    !v ||
      v.otherDims.tooltip === !1 ||
      (o
        ? l.push(
            da("nameValue", {
              markerType: "subItem",
              markerColor: i,
              name: v.displayName,
              value: h,
              valueType: v.type,
            })
          )
        : (s.push(h), u.push(v.type)));
  }
  return { inlineValues: s, inlineValueTypes: u, blocks: l };
}
var nr = gt();
function no(r, t) {
  return r.getName(t) || r.getId(t);
}
var ko = "__universalTransitionEnabled",
  Gs = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e._selectedDataIndicesMap = {}), e;
    }
    return (
      (t.prototype.init = function (e, n, i) {
        (this.seriesIndex = this.componentIndex),
          (this.dataTask = Qi({ count: yC, reset: mC })),
          (this.dataTask.context = { model: this }),
          this.mergeDefaultAndTheme(e, i);
        var a = (nr(this).sourceManager = new Gm(this));
        a.prepareSource();
        var o = this.getInitialData(e, i);
        Jc(o, this),
          (this.dataTask.context.data = o),
          (nr(this).dataBeforeProcessed = o),
          Qc(this),
          this._initSelectedMapFromData(o);
      }),
      (t.prototype.mergeDefaultAndTheme = function (e, n) {
        var i = va(this),
          a = i ? Pa(e) : {},
          o = this.subType;
        ct.hasClass(o) && (o += "Series"),
          Q(e, n.getTheme().get(this.subType)),
          Q(e, this.getDefaultOption()),
          Rv(e, "label", ["show"]),
          this.fillDataTextStyle(e.data),
          i && ei(e, a, i);
      }),
      (t.prototype.mergeOption = function (e, n) {
        (e = Q(this.option, e, !0)), this.fillDataTextStyle(e.data);
        var i = va(this);
        i && ei(this.option, e, i);
        var a = nr(this).sourceManager;
        a.dirty(), a.prepareSource();
        var o = this.getInitialData(e, n);
        Jc(o, this),
          this.dataTask.dirty(),
          (this.dataTask.context.data = o),
          (nr(this).dataBeforeProcessed = o),
          Qc(this),
          this._initSelectedMapFromData(o);
      }),
      (t.prototype.fillDataTextStyle = function (e) {
        if (e && !jt(e))
          for (var n = ["show"], i = 0; i < e.length; i++)
            e[i] && e[i].label && Rv(e[i], "label", n);
      }),
      (t.prototype.getInitialData = function (e, n) {}),
      (t.prototype.appendData = function (e) {
        var n = this.getRawData();
        n.appendData(e.data);
      }),
      (t.prototype.getData = function (e) {
        var n = af(this);
        if (n) {
          var i = n.context.data;
          return e == null ? i : i.getLinkedData(e);
        } else return nr(this).data;
      }),
      (t.prototype.getAllData = function () {
        var e = this.getData();
        return e && e.getLinkedDataAll ? e.getLinkedDataAll() : [{ data: e }];
      }),
      (t.prototype.setData = function (e) {
        var n = af(this);
        if (n) {
          var i = n.context;
          (i.outputData = e), n !== this.dataTask && (i.data = e);
        }
        nr(this).data = e;
      }),
      (t.prototype.getEncode = function () {
        var e = this.get("encode", !0);
        if (e) return W(e);
      }),
      (t.prototype.getSourceManager = function () {
        return nr(this).sourceManager;
      }),
      (t.prototype.getSource = function () {
        return this.getSourceManager().getSource();
      }),
      (t.prototype.getRawData = function () {
        return nr(this).dataBeforeProcessed;
      }),
      (t.prototype.getColorBy = function () {
        var e = this.get("colorBy");
        return e || "series";
      }),
      (t.prototype.isColorBySeries = function () {
        return this.getColorBy() === "series";
      }),
      (t.prototype.getBaseAxis = function () {
        var e = this.coordinateSystem;
        return e && e.getBaseAxis && e.getBaseAxis();
      }),
      (t.prototype.formatTooltip = function (e, n, i) {
        return dC({ series: this, dataIndex: e, multipleSeries: n });
      }),
      (t.prototype.isAnimationEnabled = function () {
        var e = this.ecModel;
        if (j.node && !(e && e.ssr)) return !1;
        var n = this.getShallow("animation");
        return (
          n &&
            this.getData().count() > this.getShallow("animationThreshold") &&
            (n = !1),
          !!n
        );
      }),
      (t.prototype.restoreData = function () {
        this.dataTask.dirty();
      }),
      (t.prototype.getColorFromPalette = function (e, n, i) {
        var a = this.ecModel,
          o = mh.prototype.getColorFromPalette.call(this, e, n, i);
        return o || (o = a.getColorFromPalette(e, n, i)), o;
      }),
      (t.prototype.coordDimToDataDim = function (e) {
        return this.getRawData().mapDimensionsAll(e);
      }),
      (t.prototype.getProgressive = function () {
        return this.get("progressive");
      }),
      (t.prototype.getProgressiveThreshold = function () {
        return this.get("progressiveThreshold");
      }),
      (t.prototype.select = function (e, n) {
        this._innerSelect(this.getData(n), e);
      }),
      (t.prototype.unselect = function (e, n) {
        var i = this.option.selectedMap;
        if (!!i) {
          var a = this.option.selectedMode,
            o = this.getData(n);
          if (a === "series" || i === "all") {
            (this.option.selectedMap = {}), (this._selectedDataIndicesMap = {});
            return;
          }
          for (var s = 0; s < e.length; s++) {
            var u = e[s],
              l = no(o, u);
            (i[l] = !1), (this._selectedDataIndicesMap[l] = -1);
          }
        }
      }),
      (t.prototype.toggleSelect = function (e, n) {
        for (var i = [], a = 0; a < e.length; a++)
          (i[0] = e[a]),
            this.isSelected(e[a], n) ? this.unselect(i, n) : this.select(i, n);
      }),
      (t.prototype.getSelectedDataIndices = function () {
        if (this.option.selectedMap === "all")
          return [].slice.call(this.getData().getIndices());
        for (
          var e = this._selectedDataIndicesMap, n = pt(e), i = [], a = 0;
          a < n.length;
          a++
        ) {
          var o = e[n[a]];
          o >= 0 && i.push(o);
        }
        return i;
      }),
      (t.prototype.isSelected = function (e, n) {
        var i = this.option.selectedMap;
        if (!i) return !1;
        var a = this.getData(n);
        return (
          (i === "all" || i[no(a, e)]) &&
          !a.getItemModel(e).get(["select", "disabled"])
        );
      }),
      (t.prototype.isUniversalTransitionEnabled = function () {
        if (this[ko]) return !0;
        var e = this.option.universalTransition;
        return e ? (e === !0 ? !0 : e && e.enabled) : !1;
      }),
      (t.prototype._innerSelect = function (e, n) {
        var i,
          a,
          o = this.option,
          s = o.selectedMode,
          u = n.length;
        if (!(!s || !u)) {
          if (s === "series") o.selectedMap = "all";
          else if (s === "multiple") {
            H(o.selectedMap) || (o.selectedMap = {});
            for (var l = o.selectedMap, f = 0; f < u; f++) {
              var h = n[f],
                c = no(e, h);
              (l[c] = !0), (this._selectedDataIndicesMap[c] = e.getRawIndex(h));
            }
          } else if (s === "single" || s === !0) {
            var v = n[u - 1],
              c = no(e, v);
            (o.selectedMap = ((i = {}), (i[c] = !0), i)),
              (this._selectedDataIndicesMap =
                ((a = {}), (a[c] = e.getRawIndex(v)), a));
          }
        }
      }),
      (t.prototype._initSelectedMapFromData = function (e) {
        if (!this.option.selectedMap) {
          var n = [];
          e.hasItemOption &&
            e.each(function (i) {
              var a = e.getRawDataItem(i);
              a && a.selected && n.push(i);
            }),
            n.length > 0 && this._innerSelect(e, n);
        }
      }),
      (t.registerClass = function (e) {
        return ct.registerClass(e);
      }),
      (t.protoInitialize = (function () {
        var e = t.prototype;
        (e.type = "series.__base__"),
          (e.seriesIndex = 0),
          (e.ignoreStyleOnData = !1),
          (e.hasSymbolVisual = !1),
          (e.defaultSymbol = "circle"),
          (e.visualStyleAccessPath = "itemStyle"),
          (e.visualDrawType = "fill");
      })()),
      t
    );
  })(ct);
Ne(Gs, GT);
Ne(Gs, mh);
iy(Gs, ct);
function Qc(r) {
  var t = r.name;
  qf(r) || (r.name = gC(r) || t);
}
function gC(r) {
  var t = r.getRawData(),
    e = t.mapDimensionsAll("seriesName"),
    n = [];
  return (
    C(e, function (i) {
      var a = t.getDimensionInfo(i);
      a.displayName && n.push(a.displayName);
    }),
    n.join(" ")
  );
}
function yC(r) {
  return r.model.getRawData().count();
}
function mC(r) {
  var t = r.model;
  return t.setData(t.getRawData().cloneShallow()), _C;
}
function _C(r, t) {
  t.outputData &&
    r.end > t.outputData.count() &&
    t.model.getRawData().cloneShallow(t.outputData);
}
function Jc(r, t) {
  C(y1(r.CHANGABLE_METHODS, r.DOWNSAMPLE_METHODS), function (e) {
    r.wrapMethod(e, ot(SC, t));
  });
}
function SC(r, t) {
  var e = af(r);
  return e && e.setOutputEnd((t || this).count()), t;
}
function af(r) {
  var t = (r.ecModel || {}).scheduler,
    e = t && t.getPipeline(r.uid);
  if (e) {
    var n = e.currentTask;
    if (n) {
      var i = n.agentStubMap;
      i && (n = i.get(r.uid));
    }
    return n;
  }
}
const pa = Gs;
var Th = (function () {
  function r() {
    (this.group = new bt()), (this.uid = Ia("viewComponent"));
  }
  return (
    (r.prototype.init = function (t, e) {}),
    (r.prototype.render = function (t, e, n, i) {}),
    (r.prototype.dispose = function (t, e) {}),
    (r.prototype.updateView = function (t, e, n, i) {}),
    (r.prototype.updateLayout = function (t, e, n, i) {}),
    (r.prototype.updateVisual = function (t, e, n, i) {}),
    (r.prototype.toggleBlurSeries = function (t, e, n) {}),
    (r.prototype.eachRendered = function (t) {
      var e = this.group;
      e && e.traverse(t);
    }),
    r
  );
})();
Qf(Th);
Ss(Th);
const ve = Th;
function Zm() {
  var r = gt();
  return function (t) {
    var e = r(t),
      n = t.pipelineContext,
      i = !!e.large,
      a = !!e.progressiveRender,
      o = (e.large = !!(n && n.large)),
      s = (e.progressiveRender = !!(n && n.progressiveRender));
    return (i !== o || a !== s) && "reset";
  };
}
var Xm = gt(),
  xC = Zm(),
  Ch = (function () {
    function r() {
      (this.group = new bt()),
        (this.uid = Ia("viewChart")),
        (this.renderTask = Qi({ plan: wC, reset: bC })),
        (this.renderTask.context = { view: this });
    }
    return (
      (r.prototype.init = function (t, e) {}),
      (r.prototype.render = function (t, e, n, i) {}),
      (r.prototype.highlight = function (t, e, n, i) {
        var a = t.getData(i && i.dataType);
        !a || td(a, i, "emphasis");
      }),
      (r.prototype.downplay = function (t, e, n, i) {
        var a = t.getData(i && i.dataType);
        !a || td(a, i, "normal");
      }),
      (r.prototype.remove = function (t, e) {
        this.group.removeAll();
      }),
      (r.prototype.dispose = function (t, e) {}),
      (r.prototype.updateView = function (t, e, n, i) {
        this.render(t, e, n, i);
      }),
      (r.prototype.updateLayout = function (t, e, n, i) {
        this.render(t, e, n, i);
      }),
      (r.prototype.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i);
      }),
      (r.prototype.eachRendered = function (t) {
        uh(this.group, t);
      }),
      (r.markUpdateMethod = function (t, e) {
        Xm(t).updateMethod = e;
      }),
      (r.protoInitialize = (function () {
        var t = r.prototype;
        t.type = "chart";
      })()),
      r
    );
  })();
function jc(r, t, e) {
  r && Zl(r) && (t === "emphasis" ? jn : ti)(r, e);
}
function td(r, t, e) {
  var n = ln(r, t),
    i = t && t.highlightKey != null ? Dw(t.highlightKey) : null;
  n != null
    ? C(_t(n), function (a) {
        jc(r.getItemGraphicEl(a), e, i);
      })
    : r.eachItemGraphicEl(function (a) {
        jc(a, e, i);
      });
}
Qf(Ch);
Ss(Ch);
function wC(r) {
  return xC(r.model);
}
function bC(r) {
  var t = r.model,
    e = r.ecModel,
    n = r.api,
    i = r.payload,
    a = t.pipelineContext.progressiveRender,
    o = r.view,
    s = i && Xm(i).updateMethod,
    u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, e, n, i), TC[u];
}
var TC = {
  incrementalPrepareRender: {
    progress: function (r, t) {
      t.view.incrementalRender(r, t.model, t.ecModel, t.api, t.payload);
    },
  },
  render: {
    forceFirstProgress: !0,
    progress: function (r, t) {
      t.view.render(t.model, t.ecModel, t.api, t.payload);
    },
  },
};
const _r = Ch;
var es = "\0__throttleOriginMethod",
  ed = "\0__throttleRate",
  rd = "\0__throttleType";
function qm(r, t, e) {
  var n,
    i = 0,
    a = 0,
    o = null,
    s,
    u,
    l,
    f;
  t = t || 0;
  function h() {
    (a = new Date().getTime()), (o = null), r.apply(u, l || []);
  }
  var c = function () {
    for (var v = [], d = 0; d < arguments.length; d++) v[d] = arguments[d];
    (n = new Date().getTime()), (u = this), (l = v);
    var g = f || t,
      p = f || e;
    (f = null),
      (s = n - (p ? i : a) - g),
      clearTimeout(o),
      p ? (o = setTimeout(h, g)) : s >= 0 ? h() : (o = setTimeout(h, -s)),
      (i = n);
  };
  return (
    (c.clear = function () {
      o && (clearTimeout(o), (o = null));
    }),
    (c.debounceNextCall = function (v) {
      f = v;
    }),
    c
  );
}
function Hs(r, t, e, n) {
  var i = r[t];
  if (!!i) {
    var a = i[es] || i,
      o = i[rd],
      s = i[ed];
    if (s !== e || o !== n) {
      if (e == null || !n) return (r[t] = a);
      (i = r[t] = qm(a, e, n === "debounce")),
        (i[es] = a),
        (i[rd] = n),
        (i[ed] = e);
    }
    return i;
  }
}
function rs(r, t) {
  var e = r[t];
  e && e[es] && (e.clear && e.clear(), (r[t] = e[es]));
}
var nd = gt(),
  id = { itemStyle: sa(nm, !0), lineStyle: sa(rm, !0) },
  CC = { lineStyle: "stroke", itemStyle: "fill" };
function Km(r, t) {
  var e = r.visualStyleMapper || id[t];
  return e || (console.warn("Unkown style type '" + t + "'."), id.itemStyle);
}
function Qm(r, t) {
  var e = r.visualDrawType || CC[t];
  return e || (console.warn("Unkown style type '" + t + "'."), "fill");
}
var MC = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (r, t) {
      var e = r.getData(),
        n = r.visualStyleAccessPath || "itemStyle",
        i = r.getModel(n),
        a = Km(r, n),
        o = a(i),
        s = i.getShallow("decal");
      s && (e.setVisual("decal", s), (s.dirty = !0));
      var u = Qm(r, n),
        l = o[u],
        f = U(l) ? l : null,
        h = o.fill === "auto" || o.stroke === "auto";
      if (!o[u] || f || h) {
        var c = r.getColorFromPalette(r.name, null, t.getSeriesCount());
        o[u] || ((o[u] = c), e.setVisual("colorFromPalette", !0)),
          (o.fill = o.fill === "auto" || U(o.fill) ? c : o.fill),
          (o.stroke = o.stroke === "auto" || U(o.stroke) ? c : o.stroke);
      }
      if (
        (e.setVisual("style", o),
        e.setVisual("drawType", u),
        !t.isSeriesFiltered(r) && f)
      )
        return (
          e.setVisual("colorFromPalette", !1),
          {
            dataEach: function (v, d) {
              var g = r.getDataParams(d),
                p = k({}, o);
              (p[u] = f(g)), v.setItemVisual(d, "style", p);
            },
          }
        );
    },
  },
  wi = new At(),
  DC = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (r, t) {
      if (!(r.ignoreStyleOnData || t.isSeriesFiltered(r))) {
        var e = r.getData(),
          n = r.visualStyleAccessPath || "itemStyle",
          i = Km(r, n),
          a = e.getVisual("drawType");
        return {
          dataEach: e.hasItemOption
            ? function (o, s) {
                var u = o.getRawDataItem(s);
                if (u && u[n]) {
                  wi.option = u[n];
                  var l = i(wi),
                    f = o.ensureUniqueItemVisual(s, "style");
                  k(f, l),
                    wi.option.decal &&
                      (o.setItemVisual(s, "decal", wi.option.decal),
                      (wi.option.decal.dirty = !0)),
                    a in l && o.setItemVisual(s, "colorFromPalette", !1);
                }
              }
            : null,
        };
      }
    },
  },
  AC = {
    performRawSeries: !0,
    overallReset: function (r) {
      var t = W();
      r.eachSeries(function (e) {
        var n = e.getColorBy();
        if (!e.isColorBySeries()) {
          var i = e.type + "-" + n,
            a = t.get(i);
          a || ((a = {}), t.set(i, a)), (nd(e).scope = a);
        }
      }),
        r.eachSeries(function (e) {
          if (!(e.isColorBySeries() || r.isSeriesFiltered(e))) {
            var n = e.getRawData(),
              i = {},
              a = e.getData(),
              o = nd(e).scope,
              s = e.visualStyleAccessPath || "itemStyle",
              u = Qm(e, s);
            a.each(function (l) {
              var f = a.getRawIndex(l);
              i[f] = l;
            }),
              n.each(function (l) {
                var f = i[l],
                  h = a.getItemVisual(f, "colorFromPalette");
                if (h) {
                  var c = a.ensureUniqueItemVisual(f, "style"),
                    v = n.getName(l) || l + "",
                    d = n.count();
                  c[u] = e.getColorFromPalette(v, o, d);
                }
              });
          }
        });
    },
  },
  io = Math.PI;
function LC(r, t) {
  (t = t || {}),
    q(t, {
      text: "loading",
      textColor: "#000",
      fontSize: 12,
      fontWeight: "normal",
      fontStyle: "normal",
      fontFamily: "sans-serif",
      maskColor: "rgba(255, 255, 255, 0.8)",
      showSpinner: !0,
      color: "#5470c6",
      spinnerRadius: 10,
      lineWidth: 5,
      zlevel: 0,
    });
  var e = new bt(),
    n = new yt({ style: { fill: t.maskColor }, zlevel: t.zlevel, z: 1e4 });
  e.add(n);
  var i = new Dt({
      style: {
        text: t.text,
        fill: t.textColor,
        fontSize: t.fontSize,
        fontWeight: t.fontWeight,
        fontStyle: t.fontStyle,
        fontFamily: t.fontFamily,
      },
      zlevel: t.zlevel,
      z: 10001,
    }),
    a = new yt({
      style: { fill: "none" },
      textContent: i,
      textConfig: { position: "right", distance: 10 },
      zlevel: t.zlevel,
      z: 10001,
    });
  e.add(a);
  var o;
  return (
    t.showSpinner &&
      ((o = new ih({
        shape: {
          startAngle: -io / 2,
          endAngle: -io / 2 + 0.1,
          r: t.spinnerRadius,
        },
        style: { stroke: t.color, lineCap: "round", lineWidth: t.lineWidth },
        zlevel: t.zlevel,
        z: 10001,
      })),
      o
        .animateShape(!0)
        .when(1e3, { endAngle: (io * 3) / 2 })
        .start("circularInOut"),
      o
        .animateShape(!0)
        .when(1e3, { startAngle: (io * 3) / 2 })
        .delay(300)
        .start("circularInOut"),
      e.add(o)),
    (e.resize = function () {
      var s = i.getBoundingRect().width,
        u = t.showSpinner ? t.spinnerRadius : 0,
        l =
          (r.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 -
          (t.showSpinner && s ? 0 : 5 + s / 2) +
          (t.showSpinner ? 0 : s / 2) +
          (s ? 0 : u),
        f = r.getHeight() / 2;
      t.showSpinner && o.setShape({ cx: l, cy: f }),
        a.setShape({ x: l - u, y: f - u, width: u * 2, height: u * 2 }),
        n.setShape({ x: 0, y: 0, width: r.getWidth(), height: r.getHeight() });
    }),
    e.resize(),
    e
  );
}
var IC = (function () {
  function r(t, e, n, i) {
    (this._stageTaskMap = W()),
      (this.ecInstance = t),
      (this.api = e),
      (n = this._dataProcessorHandlers = n.slice()),
      (i = this._visualHandlers = i.slice()),
      (this._allHandlers = n.concat(i));
  }
  return (
    (r.prototype.restoreData = function (t, e) {
      t.restoreData(e),
        this._stageTaskMap.each(function (n) {
          var i = n.overallTask;
          i && i.dirty();
        });
    }),
    (r.prototype.getPerformArgs = function (t, e) {
      if (!!t.__pipeline) {
        var n = this._pipelineMap.get(t.__pipeline.id),
          i = n.context,
          a =
            !e &&
            n.progressiveEnabled &&
            (!i || i.progressiveRender) &&
            t.__idxInPipeline > n.blockIndex,
          o = a ? n.step : null,
          s = i && i.modDataCount,
          u = s != null ? Math.ceil(s / o) : null;
        return { step: o, modBy: u, modDataCount: s };
      }
    }),
    (r.prototype.getPipeline = function (t) {
      return this._pipelineMap.get(t);
    }),
    (r.prototype.updateStreamModes = function (t, e) {
      var n = this._pipelineMap.get(t.uid),
        i = t.getData(),
        a = i.count(),
        o =
          n.progressiveEnabled &&
          e.incrementalPrepareRender &&
          a >= n.threshold,
        s = t.get("large") && a >= t.get("largeThreshold"),
        u = t.get("progressiveChunkMode") === "mod" ? a : null;
      t.pipelineContext = n.context = {
        progressiveRender: o,
        modDataCount: u,
        large: s,
      };
    }),
    (r.prototype.restorePipelines = function (t) {
      var e = this,
        n = (e._pipelineMap = W());
      t.eachSeries(function (i) {
        var a = i.getProgressive(),
          o = i.uid;
        n.set(o, {
          id: o,
          head: null,
          tail: null,
          threshold: i.getProgressiveThreshold(),
          progressiveEnabled:
            a && !(i.preventIncremental && i.preventIncremental()),
          blockIndex: -1,
          step: Math.round(a || 700),
          count: 0,
        }),
          e._pipe(i, i.dataTask);
      });
    }),
    (r.prototype.prepareStageTasks = function () {
      var t = this._stageTaskMap,
        e = this.api.getModel(),
        n = this.api;
      C(
        this._allHandlers,
        function (i) {
          var a = t.get(i.uid) || t.set(i.uid, {}),
            o = "";
          ke(!(i.reset && i.overallReset), o),
            i.reset && this._createSeriesStageTask(i, a, e, n),
            i.overallReset && this._createOverallStageTask(i, a, e, n);
        },
        this
      );
    }),
    (r.prototype.prepareView = function (t, e, n, i) {
      var a = t.renderTask,
        o = a.context;
      (o.model = e),
        (o.ecModel = n),
        (o.api = i),
        (a.__block = !t.incrementalPrepareRender),
        this._pipe(e, a);
    }),
    (r.prototype.performDataProcessorTasks = function (t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, { block: !0 });
    }),
    (r.prototype.performVisualTasks = function (t, e, n) {
      this._performStageTasks(this._visualHandlers, t, e, n);
    }),
    (r.prototype._performStageTasks = function (t, e, n, i) {
      i = i || {};
      var a = !1,
        o = this;
      C(t, function (u, l) {
        if (!(i.visualType && i.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid),
            h = f.seriesTaskMap,
            c = f.overallTask;
          if (c) {
            var v,
              d = c.agentStubMap;
            d.each(function (p) {
              s(i, p) && (p.dirty(), (v = !0));
            }),
              v && c.dirty(),
              o.updatePayload(c, n);
            var g = o.getPerformArgs(c, i.block);
            d.each(function (p) {
              p.perform(g);
            }),
              c.perform(g) && (a = !0);
          } else
            h &&
              h.each(function (p, y) {
                s(i, p) && p.dirty();
                var m = o.getPerformArgs(p, i.block);
                (m.skip =
                  !u.performRawSeries && e.isSeriesFiltered(p.context.model)),
                  o.updatePayload(p, n),
                  p.perform(m) && (a = !0);
              });
        }
      });
      function s(u, l) {
        return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }),
    (r.prototype.performSeriesTasks = function (t) {
      var e;
      t.eachSeries(function (n) {
        e = n.dataTask.perform() || e;
      }),
        (this.unfinished = e || this.unfinished);
    }),
    (r.prototype.plan = function () {
      this._pipelineMap.each(function (t) {
        var e = t.tail;
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline;
            break;
          }
          e = e.getUpstream();
        } while (e);
      });
    }),
    (r.prototype.updatePayload = function (t, e) {
      e !== "remain" && (t.context.payload = e);
    }),
    (r.prototype._createSeriesStageTask = function (t, e, n, i) {
      var a = this,
        o = e.seriesTaskMap,
        s = (e.seriesTaskMap = W()),
        u = t.seriesType,
        l = t.getTargetSeries;
      t.createOnAllSeries
        ? n.eachRawSeries(f)
        : u
        ? n.eachRawSeriesByType(u, f)
        : l && l(n, i).each(f);
      function f(h) {
        var c = h.uid,
          v = s.set(
            c,
            (o && o.get(c)) || Qi({ plan: kC, reset: BC, count: FC })
          );
        (v.context = {
          model: h,
          ecModel: n,
          api: i,
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a,
        }),
          a._pipe(h, v);
      }
    }),
    (r.prototype._createOverallStageTask = function (t, e, n, i) {
      var a = this,
        o = (e.overallTask = e.overallTask || Qi({ reset: PC }));
      o.context = {
        ecModel: n,
        api: i,
        overallReset: t.overallReset,
        scheduler: a,
      };
      var s = o.agentStubMap,
        u = (o.agentStubMap = W()),
        l = t.seriesType,
        f = t.getTargetSeries,
        h = !0,
        c = !1,
        v = "";
      ke(!t.createOnAllSeries, v),
        l
          ? n.eachRawSeriesByType(l, d)
          : f
          ? f(n, i).each(d)
          : ((h = !1), C(n.getSeries(), d));
      function d(g) {
        var p = g.uid,
          y = u.set(
            p,
            (s && s.get(p)) || ((c = !0), Qi({ reset: RC, onDirty: OC }))
          );
        (y.context = { model: g, overallProgress: h }),
          (y.agent = o),
          (y.__block = h),
          a._pipe(g, y);
      }
      c && o.dirty();
    }),
    (r.prototype._pipe = function (t, e) {
      var n = t.uid,
        i = this._pipelineMap.get(n);
      !i.head && (i.head = e),
        i.tail && i.tail.pipe(e),
        (i.tail = e),
        (e.__idxInPipeline = i.count++),
        (e.__pipeline = i);
    }),
    (r.wrapStageHandler = function (t, e) {
      return (
        U(t) && (t = { overallReset: t, seriesType: zC(t) }),
        (t.uid = Ia("stageHandler")),
        e && (t.visualType = e),
        t
      );
    }),
    r
  );
})();
function PC(r) {
  r.overallReset(r.ecModel, r.api, r.payload);
}
function RC(r) {
  return r.overallProgress && EC;
}
function EC() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function OC() {
  this.agent && this.agent.dirty();
}
function kC(r) {
  return r.plan ? r.plan(r.model, r.ecModel, r.api, r.payload) : null;
}
function BC(r) {
  r.useClearVisual && r.data.clearAllVisual();
  var t = (r.resetDefines = _t(r.reset(r.model, r.ecModel, r.api, r.payload)));
  return t.length > 1
    ? z(t, function (e, n) {
        return Jm(n);
      })
    : NC;
}
var NC = Jm(0);
function Jm(r) {
  return function (t, e) {
    var n = e.data,
      i = e.resetDefines[r];
    if (i && i.dataEach) for (var a = t.start; a < t.end; a++) i.dataEach(n, a);
    else i && i.progress && i.progress(t, n);
  };
}
function FC(r) {
  return r.data.count();
}
function zC(r) {
  ns = null;
  try {
    r(ga, jm);
  } catch {}
  return ns;
}
var ga = {},
  jm = {},
  ns;
t0(ga, Tm);
t0(jm, Cm);
ga.eachSeriesByType = ga.eachRawSeriesByType = function (r) {
  ns = r;
};
ga.eachComponent = function (r) {
  r.mainType === "series" && r.subType && (ns = r.subType);
};
function t0(r, t) {
  for (var e in t.prototype) r[e] = Gt;
}
const e0 = IC;
var ad = [
  "#37A2DA",
  "#32C5E9",
  "#67E0E3",
  "#9FE6B8",
  "#FFDB5C",
  "#ff9f7f",
  "#fb7293",
  "#E062AE",
  "#E690D1",
  "#e7bcf3",
  "#9d96f5",
  "#8378EA",
  "#96BFFF",
];
const GC = {
  color: ad,
  colorLayer: [
    ["#37A2DA", "#ffd85c", "#fd7b5f"],
    ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
    [
      "#37A2DA",
      "#32C5E9",
      "#9FE6B8",
      "#FFDB5C",
      "#ff9f7f",
      "#fb7293",
      "#e7bcf3",
      "#8378EA",
      "#96BFFF",
    ],
    ad,
  ],
};
var Nt = "#B9B8CE",
  od = "#100C2A",
  ao = function () {
    return {
      axisLine: { lineStyle: { color: Nt } },
      splitLine: { lineStyle: { color: "#484753" } },
      splitArea: {
        areaStyle: {
          color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"],
        },
      },
      minorSplitLine: { lineStyle: { color: "#20203B" } },
    };
  },
  sd = [
    "#4992ff",
    "#7cffb2",
    "#fddd60",
    "#ff6e76",
    "#58d9f9",
    "#05c091",
    "#ff8a45",
    "#8d48e3",
    "#dd79ff",
  ],
  r0 = {
    darkMode: !0,
    color: sd,
    backgroundColor: od,
    axisPointer: {
      lineStyle: { color: "#817f91" },
      crossStyle: { color: "#817f91" },
      label: { color: "#fff" },
    },
    legend: { textStyle: { color: Nt } },
    textStyle: { color: Nt },
    title: {
      textStyle: { color: "#EEF1FA" },
      subtextStyle: { color: "#B9B8CE" },
    },
    toolbox: { iconStyle: { borderColor: Nt } },
    dataZoom: {
      borderColor: "#71708A",
      textStyle: { color: Nt },
      brushStyle: { color: "rgba(135,163,206,0.3)" },
      handleStyle: { color: "#353450", borderColor: "#C5CBE3" },
      moveHandleStyle: { color: "#B0B6C3", opacity: 0.3 },
      fillerColor: "rgba(135,163,206,0.2)",
      emphasis: {
        handleStyle: { borderColor: "#91B7F2", color: "#4D587D" },
        moveHandleStyle: { color: "#636D9A", opacity: 0.7 },
      },
      dataBackground: {
        lineStyle: { color: "#71708A", width: 1 },
        areaStyle: { color: "#71708A" },
      },
      selectedDataBackground: {
        lineStyle: { color: "#87A3CE" },
        areaStyle: { color: "#87A3CE" },
      },
    },
    visualMap: { textStyle: { color: Nt } },
    timeline: {
      lineStyle: { color: Nt },
      label: { color: Nt },
      controlStyle: { color: Nt, borderColor: Nt },
    },
    calendar: {
      itemStyle: { color: od },
      dayLabel: { color: Nt },
      monthLabel: { color: Nt },
      yearLabel: { color: Nt },
    },
    timeAxis: ao(),
    logAxis: ao(),
    valueAxis: ao(),
    categoryAxis: ao(),
    line: { symbol: "circle" },
    graph: { color: sd },
    gauge: {
      title: { color: Nt },
      axisLine: { lineStyle: { color: [[1, "rgba(207,212,219,0.2)"]] } },
      axisLabel: { color: Nt },
      detail: { color: "#EEF1FA" },
    },
    candlestick: {
      itemStyle: {
        color: "#f64e56",
        color0: "#54ea92",
        borderColor: "#f64e56",
        borderColor0: "#54ea92",
      },
    },
  };
r0.categoryAxis.splitLine.show = !1;
const HC = r0;
var VC = (function () {
    function r() {}
    return (
      (r.prototype.normalizeQuery = function (t) {
        var e = {},
          n = {},
          i = {};
        if (G(t)) {
          var a = Re(t);
          (e.mainType = a.main || null), (e.subType = a.sub || null);
        } else {
          var o = ["Index", "Name", "Id"],
            s = { name: 1, dataIndex: 1, dataType: 1 };
          C(t, function (u, l) {
            for (var f = !1, h = 0; h < o.length; h++) {
              var c = o[h],
                v = l.lastIndexOf(c);
              if (v > 0 && v === l.length - c.length) {
                var d = l.slice(0, v);
                d !== "data" &&
                  ((e.mainType = d), (e[c.toLowerCase()] = u), (f = !0));
              }
            }
            s.hasOwnProperty(l) && ((n[l] = u), (f = !0)), f || (i[l] = u);
          });
        }
        return { cptQuery: e, dataQuery: n, otherQuery: i };
      }),
      (r.prototype.filter = function (t, e) {
        var n = this.eventInfo;
        if (!n) return !0;
        var i = n.targetEl,
          a = n.packedEvent,
          o = n.model,
          s = n.view;
        if (!o || !s) return !0;
        var u = e.cptQuery,
          l = e.dataQuery;
        return (
          f(u, o, "mainType") &&
          f(u, o, "subType") &&
          f(u, o, "index", "componentIndex") &&
          f(u, o, "name") &&
          f(u, o, "id") &&
          f(l, a, "name") &&
          f(l, a, "dataIndex") &&
          f(l, a, "dataType") &&
          (!s.filterForExposedEvent ||
            s.filterForExposedEvent(t, e.otherQuery, i, a))
        );
        function f(h, c, v, d) {
          return h[v] == null || c[d || v] === h[v];
        }
      }),
      (r.prototype.afterTrigger = function () {
        this.eventInfo = null;
      }),
      r
    );
  })(),
  of = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"],
  ud = of.concat(["symbolKeepAspect"]),
  WC = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (r, t) {
      var e = r.getData();
      if (
        (r.legendIcon && e.setVisual("legendIcon", r.legendIcon),
        !r.hasSymbolVisual)
      )
        return;
      for (var n = {}, i = {}, a = !1, o = 0; o < of.length; o++) {
        var s = of[o],
          u = r.get(s);
        U(u) ? ((a = !0), (i[s] = u)) : (n[s] = u);
      }
      if (
        ((n.symbol = n.symbol || r.defaultSymbol),
        e.setVisual(
          k(
            {
              legendIcon: r.legendIcon || n.symbol,
              symbolKeepAspect: r.get("symbolKeepAspect"),
            },
            n
          )
        ),
        t.isSeriesFiltered(r))
      )
        return;
      var l = pt(i);
      function f(h, c) {
        for (
          var v = r.getRawValue(c), d = r.getDataParams(c), g = 0;
          g < l.length;
          g++
        ) {
          var p = l[g];
          h.setItemVisual(c, p, i[p](v, d));
        }
      }
      return { dataEach: a ? f : null };
    },
  },
  UC = {
    createOnAllSeries: !0,
    performRawSeries: !0,
    reset: function (r, t) {
      if (!r.hasSymbolVisual || t.isSeriesFiltered(r)) return;
      var e = r.getData();
      function n(i, a) {
        for (var o = i.getItemModel(a), s = 0; s < ud.length; s++) {
          var u = ud[s],
            l = o.getShallow(u, !0);
          l != null && i.setItemVisual(a, u, l);
        }
      }
      return { dataEach: e.hasItemOption ? n : null };
    },
  };
function YC(r, t, e) {
  switch (e) {
    case "color":
      var n = r.getItemVisual(t, "style");
      return n[r.getVisual("drawType")];
    case "opacity":
      return r.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getItemVisual(t, e);
  }
}
function $C(r, t) {
  switch (t) {
    case "color":
      var e = r.getVisual("style");
      return e[r.getVisual("drawType")];
    case "opacity":
      return r.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return r.getVisual(t);
  }
}
function An(r, t, e, n, i) {
  var a = r + t;
  e.isSilent(a) ||
    n.eachComponent({ mainType: "series", subType: "pie" }, function (o) {
      for (
        var s = o.seriesIndex, u = o.option.selectedMap, l = i.selected, f = 0;
        f < l.length;
        f++
      )
        if (l[f].seriesIndex === s) {
          var h = o.getData(),
            c = ln(h, i.fromActionPayload);
          e.trigger(a, {
            type: a,
            seriesId: o.id,
            name: N(c) ? h.getName(c[0]) : h.getName(c),
            selected: G(u) ? u : k({}, u),
          });
        }
    });
}
function ZC(r, t, e) {
  r.on("selectchanged", function (n) {
    var i = e.getModel();
    n.isFromClick
      ? (An("map", "selectchanged", t, i, n),
        An("pie", "selectchanged", t, i, n))
      : n.fromAction === "select"
      ? (An("map", "selected", t, i, n), An("pie", "selected", t, i, n))
      : n.fromAction === "unselect" &&
        (An("map", "unselected", t, i, n), An("pie", "unselected", t, i, n));
  });
}
function Wi(r, t, e) {
  for (var n; r && !(t(r) && ((n = r), e)); ) r = r.__hostTarget || r.parent;
  return n;
}
var XC = Math.round(Math.random() * 9),
  qC = typeof Object.defineProperty == "function",
  KC = (function () {
    function r() {
      this._id = "__ec_inner_" + XC++;
    }
    return (
      (r.prototype.get = function (t) {
        return this._guard(t)[this._id];
      }),
      (r.prototype.set = function (t, e) {
        var n = this._guard(t);
        return (
          qC
            ? Object.defineProperty(n, this._id, {
                value: e,
                enumerable: !1,
                configurable: !0,
              })
            : (n[this._id] = e),
          this
        );
      }),
      (r.prototype.delete = function (t) {
        return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
      }),
      (r.prototype.has = function (t) {
        return !!this._guard(t)[this._id];
      }),
      (r.prototype._guard = function (t) {
        if (t !== Object(t))
          throw TypeError("Value of WeakMap is not a non-null object.");
        return t;
      }),
      r
    );
  })();
const QC = KC;
var JC = rt.extend({
    type: "triangle",
    shape: { cx: 0, cy: 0, width: 0, height: 0 },
    buildPath: function (r, t) {
      var e = t.cx,
        n = t.cy,
        i = t.width / 2,
        a = t.height / 2;
      r.moveTo(e, n - a),
        r.lineTo(e + i, n + a),
        r.lineTo(e - i, n + a),
        r.closePath();
    },
  }),
  jC = rt.extend({
    type: "diamond",
    shape: { cx: 0, cy: 0, width: 0, height: 0 },
    buildPath: function (r, t) {
      var e = t.cx,
        n = t.cy,
        i = t.width / 2,
        a = t.height / 2;
      r.moveTo(e, n - a),
        r.lineTo(e + i, n),
        r.lineTo(e, n + a),
        r.lineTo(e - i, n),
        r.closePath();
    },
  }),
  tM = rt.extend({
    type: "pin",
    shape: { x: 0, y: 0, width: 0, height: 0 },
    buildPath: function (r, t) {
      var e = t.x,
        n = t.y,
        i = (t.width / 5) * 3,
        a = Math.max(i, t.height),
        o = i / 2,
        s = (o * o) / (a - o),
        u = n - a + o + s,
        l = Math.asin(s / o),
        f = Math.cos(l) * o,
        h = Math.sin(l),
        c = Math.cos(l),
        v = o * 0.6,
        d = o * 0.7;
      r.moveTo(e - f, u + s),
        r.arc(e, u, o, Math.PI - l, Math.PI * 2 + l),
        r.bezierCurveTo(e + f - h * v, u + s + c * v, e, n - d, e, n),
        r.bezierCurveTo(e, n - d, e - f + h * v, u + s + c * v, e - f, u + s),
        r.closePath();
    },
  }),
  eM = rt.extend({
    type: "arrow",
    shape: { x: 0, y: 0, width: 0, height: 0 },
    buildPath: function (r, t) {
      var e = t.height,
        n = t.width,
        i = t.x,
        a = t.y,
        o = (n / 3) * 2;
      r.moveTo(i, a),
        r.lineTo(i + o, a + e),
        r.lineTo(i, a + (e / 4) * 3),
        r.lineTo(i - o, a + e),
        r.lineTo(i, a),
        r.closePath();
    },
  }),
  rM = {
    line: fn,
    rect: yt,
    roundRect: yt,
    square: yt,
    circle: nh,
    diamond: jC,
    pin: tM,
    arrow: eM,
    triangle: JC,
  },
  nM = {
    line: function (r, t, e, n, i) {
      (i.x1 = r), (i.y1 = t + n / 2), (i.x2 = r + e), (i.y2 = t + n / 2);
    },
    rect: function (r, t, e, n, i) {
      (i.x = r), (i.y = t), (i.width = e), (i.height = n);
    },
    roundRect: function (r, t, e, n, i) {
      (i.x = r),
        (i.y = t),
        (i.width = e),
        (i.height = n),
        (i.r = Math.min(e, n) / 4);
    },
    square: function (r, t, e, n, i) {
      var a = Math.min(e, n);
      (i.x = r), (i.y = t), (i.width = a), (i.height = a);
    },
    circle: function (r, t, e, n, i) {
      (i.cx = r + e / 2), (i.cy = t + n / 2), (i.r = Math.min(e, n) / 2);
    },
    diamond: function (r, t, e, n, i) {
      (i.cx = r + e / 2), (i.cy = t + n / 2), (i.width = e), (i.height = n);
    },
    pin: function (r, t, e, n, i) {
      (i.x = r + e / 2), (i.y = t + n / 2), (i.width = e), (i.height = n);
    },
    arrow: function (r, t, e, n, i) {
      (i.x = r + e / 2), (i.y = t + n / 2), (i.width = e), (i.height = n);
    },
    triangle: function (r, t, e, n, i) {
      (i.cx = r + e / 2), (i.cy = t + n / 2), (i.width = e), (i.height = n);
    },
  },
  is = {};
C(rM, function (r, t) {
  is[t] = new r();
});
var iM = rt.extend({
  type: "symbol",
  shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 },
  calculateTextPosition: function (r, t, e) {
    var n = Hg(r, t, e),
      i = this.shape;
    return (
      i &&
        i.symbolType === "pin" &&
        t.position === "inside" &&
        (n.y = e.y + e.height * 0.4),
      n
    );
  },
  buildPath: function (r, t, e) {
    var n = t.symbolType;
    if (n !== "none") {
      var i = is[n];
      i || ((n = "rect"), (i = is[n])),
        nM[n](t.x, t.y, t.width, t.height, i.shape),
        i.buildPath(r, i.shape, e);
    }
  },
});
function aM(r, t) {
  if (this.type !== "image") {
    var e = this.style;
    this.__isEmptyBrush
      ? ((e.stroke = r), (e.fill = t || "#fff"), (e.lineWidth = 2))
      : this.shape.symbolType === "line"
      ? (e.stroke = r)
      : (e.fill = r),
      this.markRedraw();
  }
}
function br(r, t, e, n, i, a, o) {
  var s = r.indexOf("empty") === 0;
  s && (r = r.substr(5, 1).toLowerCase() + r.substr(6));
  var u;
  return (
    r.indexOf("image://") === 0
      ? (u = qy(r.slice(8), new at(t, e, n, i), o ? "center" : "cover"))
      : r.indexOf("path://") === 0
      ? (u = oh(r.slice(7), {}, new at(t, e, n, i), o ? "center" : "cover"))
      : (u = new iM({
          shape: { symbolType: r, x: t, y: e, width: n, height: i },
        })),
    (u.__isEmptyBrush = s),
    (u.setColor = aM),
    a && u.setColor(a),
    u
  );
}
function oM(r) {
  return N(r) || (r = [+r, +r]), [r[0] || 0, r[1] || 0];
}
function n0(r, t) {
  if (r != null)
    return (
      N(r) || (r = [r, r]), [Ct(r[0], t[0]) || 0, Ct(nt(r[1], r[0]), t[1]) || 0]
    );
}
function sM(r, t, e) {
  var n = t.x == null ? 0 : t.x,
    i = t.x2 == null ? 1 : t.x2,
    a = t.y == null ? 0 : t.y,
    o = t.y2 == null ? 0 : t.y2;
  t.global ||
    ((n = n * e.width + e.x),
    (i = i * e.width + e.x),
    (a = a * e.height + e.y),
    (o = o * e.height + e.y)),
    (n = isNaN(n) ? 0 : n),
    (i = isNaN(i) ? 1 : i),
    (a = isNaN(a) ? 0 : a),
    (o = isNaN(o) ? 0 : o);
  var s = r.createLinearGradient(n, a, i, o);
  return s;
}
function uM(r, t, e) {
  var n = e.width,
    i = e.height,
    a = Math.min(n, i),
    o = t.x == null ? 0.5 : t.x,
    s = t.y == null ? 0.5 : t.y,
    u = t.r == null ? 0.5 : t.r;
  t.global || ((o = o * n + e.x), (s = s * i + e.y), (u = u * a));
  var l = r.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function sf(r, t, e) {
  for (
    var n = t.type === "radial" ? uM(r, t, e) : sM(r, t, e),
      i = t.colorStops,
      a = 0;
    a < i.length;
    a++
  )
    n.addColorStop(i[a].offset, i[a].color);
  return n;
}
function lM(r, t) {
  if (r === t || (!r && !t)) return !1;
  if (!r || !t || r.length !== t.length) return !0;
  for (var e = 0; e < r.length; e++) if (r[e] !== t[e]) return !0;
  return !1;
}
function oo(r) {
  return parseInt(r, 10);
}
function so(r, t, e) {
  var n = ["width", "height"][t],
    i = ["clientWidth", "clientHeight"][t],
    a = ["paddingLeft", "paddingTop"][t],
    o = ["paddingRight", "paddingBottom"][t];
  if (e[n] != null && e[n] !== "auto") return parseFloat(e[n]);
  var s = document.defaultView.getComputedStyle(r);
  return (
    ((r[i] || oo(s[n]) || oo(r.style[n])) - (oo(s[a]) || 0) - (oo(s[o]) || 0)) |
    0
  );
}
function fM(r, t) {
  return !r || r === "solid" || !(t > 0)
    ? null
    : r === "dashed"
    ? [4 * t, 2 * t]
    : r === "dotted"
    ? [t]
    : ft(r)
    ? [r]
    : N(r)
    ? r
    : null;
}
function i0(r) {
  var t = r.style,
    e = t.lineDash && t.lineWidth > 0 && fM(t.lineDash, t.lineWidth),
    n = t.lineDashOffset;
  if (e) {
    var i = t.strokeNoScale && r.getLineScale ? r.getLineScale() : 1;
    i &&
      i !== 1 &&
      ((e = z(e, function (a) {
        return a / i;
      })),
      (n /= i));
  }
  return [e, n];
}
var hM = new qe(!0);
function as(r) {
  var t = r.stroke;
  return !(t == null || t === "none" || !(r.lineWidth > 0));
}
function ld(r) {
  return typeof r == "string" && r !== "none";
}
function os(r) {
  var t = r.fill;
  return t != null && t !== "none";
}
function fd(r, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var e = r.globalAlpha;
    (r.globalAlpha = t.fillOpacity * t.opacity), r.fill(), (r.globalAlpha = e);
  } else r.fill();
}
function hd(r, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var e = r.globalAlpha;
    (r.globalAlpha = t.strokeOpacity * t.opacity),
      r.stroke(),
      (r.globalAlpha = e);
  } else r.stroke();
}
function uf(r, t, e) {
  var n = ay(t.image, t.__image, e);
  if (xs(n)) {
    var i = r.createPattern(n, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && i && i.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0),
        a.rotateSelf(0, 0, (t.rotation || 0) * m1),
        a.scaleSelf(t.scaleX || 1, t.scaleY || 1),
        i.setTransform(a);
    }
    return i;
  }
}
function vM(r, t, e, n) {
  var i,
    a = as(e),
    o = os(e),
    s = e.strokePercent,
    u = s < 1,
    l = !t.path;
  (!t.silent || u) && l && t.createPathProxy();
  var f = t.path || hM,
    h = t.__dirty;
  if (!n) {
    var c = e.fill,
      v = e.stroke,
      d = o && !!c.colorStops,
      g = a && !!v.colorStops,
      p = o && !!c.image,
      y = a && !!v.image,
      m = void 0,
      _ = void 0,
      S = void 0,
      w = void 0,
      x = void 0;
    (d || g) && (x = t.getBoundingRect()),
      d &&
        ((m = h ? sf(r, c, x) : t.__canvasFillGradient),
        (t.__canvasFillGradient = m)),
      g &&
        ((_ = h ? sf(r, v, x) : t.__canvasStrokeGradient),
        (t.__canvasStrokeGradient = _)),
      p &&
        ((S =
          h || !t.__canvasFillPattern ? uf(r, c, t) : t.__canvasFillPattern),
        (t.__canvasFillPattern = S)),
      y &&
        ((w =
          h || !t.__canvasStrokePattern
            ? uf(r, v, t)
            : t.__canvasStrokePattern),
        (t.__canvasStrokePattern = S)),
      d ? (r.fillStyle = m) : p && (S ? (r.fillStyle = S) : (o = !1)),
      g ? (r.strokeStyle = _) : y && (w ? (r.strokeStyle = w) : (a = !1));
  }
  var b = t.getGlobalScale();
  f.setScale(b[0], b[1], t.segmentIgnoreThreshold);
  var T, M;
  r.setLineDash && e.lineDash && ((i = i0(t)), (T = i[0]), (M = i[1]));
  var D = !0;
  (l || h & kn) &&
    (f.setDPR(r.dpr),
    u ? f.setContext(null) : (f.setContext(r), (D = !1)),
    f.reset(),
    t.buildPath(f, t.shape, n),
    f.toStatic(),
    t.pathUpdated()),
    D && f.rebuildPath(r, u ? s : 1),
    T && (r.setLineDash(T), (r.lineDashOffset = M)),
    n ||
      (e.strokeFirst
        ? (a && hd(r, e), o && fd(r, e))
        : (o && fd(r, e), a && hd(r, e))),
    T && r.setLineDash([]);
}
function cM(r, t, e) {
  var n = (t.__image = ay(e.image, t.__image, t, t.onload));
  if (!(!n || !xs(n))) {
    var i = e.x || 0,
      a = e.y || 0,
      o = t.getWidth(),
      s = t.getHeight(),
      u = n.width / n.height;
    if (
      (o == null && s != null
        ? (o = s * u)
        : s == null && o != null
        ? (s = o / u)
        : o == null && s == null && ((o = n.width), (s = n.height)),
      e.sWidth && e.sHeight)
    ) {
      var l = e.sx || 0,
        f = e.sy || 0;
      r.drawImage(n, l, f, e.sWidth, e.sHeight, i, a, o, s);
    } else if (e.sx && e.sy) {
      var l = e.sx,
        f = e.sy,
        h = o - l,
        c = s - f;
      r.drawImage(n, l, f, h, c, i, a, o, s);
    } else r.drawImage(n, i, a, o, s);
  }
}
function dM(r, t, e) {
  var n,
    i = e.text;
  if ((i != null && (i += ""), i)) {
    (r.font = e.font || sn),
      (r.textAlign = e.textAlign),
      (r.textBaseline = e.textBaseline);
    var a = void 0,
      o = void 0;
    r.setLineDash && e.lineDash && ((n = i0(t)), (a = n[0]), (o = n[1])),
      a && (r.setLineDash(a), (r.lineDashOffset = o)),
      e.strokeFirst
        ? (as(e) && r.strokeText(i, e.x, e.y), os(e) && r.fillText(i, e.x, e.y))
        : (os(e) && r.fillText(i, e.x, e.y),
          as(e) && r.strokeText(i, e.x, e.y)),
      a && r.setLineDash([]);
  }
}
var vd = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"],
  cd = [
    ["lineCap", "butt"],
    ["lineJoin", "miter"],
    ["miterLimit", 10],
  ];
function a0(r, t, e, n, i) {
  var a = !1;
  if (!n && ((e = e || {}), t === e)) return !1;
  if (n || t.opacity !== e.opacity) {
    Zt(r, i), (a = !0);
    var o = Math.max(Math.min(t.opacity, 1), 0);
    r.globalAlpha = isNaN(o) ? rn.opacity : o;
  }
  (n || t.blend !== e.blend) &&
    (a || (Zt(r, i), (a = !0)),
    (r.globalCompositeOperation = t.blend || rn.blend));
  for (var s = 0; s < vd.length; s++) {
    var u = vd[s];
    (n || t[u] !== e[u]) &&
      (a || (Zt(r, i), (a = !0)), (r[u] = r.dpr * (t[u] || 0)));
  }
  return (
    (n || t.shadowColor !== e.shadowColor) &&
      (a || (Zt(r, i), (a = !0)),
      (r.shadowColor = t.shadowColor || rn.shadowColor)),
    a
  );
}
function dd(r, t, e, n, i) {
  var a = ya(t, i.inHover),
    o = n ? null : (e && ya(e, i.inHover)) || {};
  if (a === o) return !1;
  var s = a0(r, a, o, n, i);
  if (
    ((n || a.fill !== o.fill) &&
      (s || (Zt(r, i), (s = !0)), ld(a.fill) && (r.fillStyle = a.fill)),
    (n || a.stroke !== o.stroke) &&
      (s || (Zt(r, i), (s = !0)), ld(a.stroke) && (r.strokeStyle = a.stroke)),
    (n || a.opacity !== o.opacity) &&
      (s || (Zt(r, i), (s = !0)),
      (r.globalAlpha = a.opacity == null ? 1 : a.opacity)),
    t.hasStroke())
  ) {
    var u = a.lineWidth,
      l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    r.lineWidth !== l && (s || (Zt(r, i), (s = !0)), (r.lineWidth = l));
  }
  for (var f = 0; f < cd.length; f++) {
    var h = cd[f],
      c = h[0];
    (n || a[c] !== o[c]) && (s || (Zt(r, i), (s = !0)), (r[c] = a[c] || h[1]));
  }
  return s;
}
function pM(r, t, e, n, i) {
  return a0(r, ya(t, i.inHover), e && ya(e, i.inHover), n, i);
}
function o0(r, t) {
  var e = t.transform,
    n = r.dpr || 1;
  e
    ? r.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5])
    : r.setTransform(n, 0, 0, n, 0, 0);
}
function gM(r, t, e) {
  for (var n = !1, i = 0; i < r.length; i++) {
    var a = r[i];
    (n = n || a.isZeroArea()),
      o0(t, a),
      t.beginPath(),
      a.buildPath(t, a.shape),
      t.clip();
  }
  e.allClipped = n;
}
function yM(r, t) {
  return r && t
    ? r[0] !== t[0] ||
        r[1] !== t[1] ||
        r[2] !== t[2] ||
        r[3] !== t[3] ||
        r[4] !== t[4] ||
        r[5] !== t[5]
    : !(!r && !t);
}
var pd = 1,
  gd = 2,
  yd = 3,
  md = 4;
function mM(r) {
  var t = os(r),
    e = as(r);
  return !(
    r.lineDash ||
    !(+t ^ +e) ||
    (t && typeof r.fill != "string") ||
    (e && typeof r.stroke != "string") ||
    r.strokePercent < 1 ||
    r.strokeOpacity < 1 ||
    r.fillOpacity < 1
  );
}
function Zt(r, t) {
  t.batchFill && r.fill(),
    t.batchStroke && r.stroke(),
    (t.batchFill = ""),
    (t.batchStroke = "");
}
function ya(r, t) {
  return (t && r.__hoverStyle) || r.style;
}
function s0(r, t) {
  tn(r, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function tn(r, t, e, n) {
  var i = t.transform;
  if (!t.shouldBePainted(e.viewWidth, e.viewHeight, !1, !1)) {
    (t.__dirty &= ~Qt), (t.__isRendered = !1);
    return;
  }
  var a = t.__clipPaths,
    o = e.prevElClipPaths,
    s = !1,
    u = !1;
  if (
    ((!o || lM(a, o)) &&
      (o &&
        o.length &&
        (Zt(r, e),
        r.restore(),
        (u = s = !0),
        (e.prevElClipPaths = null),
        (e.allClipped = !1),
        (e.prevEl = null)),
      a && a.length && (Zt(r, e), r.save(), gM(a, r, e), (s = !0)),
      (e.prevElClipPaths = a)),
    e.allClipped)
  ) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var l = e.prevEl;
  l || (u = s = !0);
  var f = t instanceof rt && t.autoBatch && mM(t.style);
  s || yM(i, l.transform) ? (Zt(r, e), o0(r, t)) : f || Zt(r, e);
  var h = ya(t, e.inHover);
  t instanceof rt
    ? (e.lastDrawType !== pd && ((u = !0), (e.lastDrawType = pd)),
      dd(r, t, l, u, e),
      (!f || (!e.batchFill && !e.batchStroke)) && r.beginPath(),
      vM(r, t, h, f),
      f && ((e.batchFill = h.fill || ""), (e.batchStroke = h.stroke || "")))
    : t instanceof Wl
    ? (e.lastDrawType !== yd && ((u = !0), (e.lastDrawType = yd)),
      dd(r, t, l, u, e),
      dM(r, t, h))
    : t instanceof pn
    ? (e.lastDrawType !== gd && ((u = !0), (e.lastDrawType = gd)),
      pM(r, t, l, u, e),
      cM(r, t, h))
    : t.getTemporalDisplayables &&
      (e.lastDrawType !== md && ((u = !0), (e.lastDrawType = md)), _M(r, t, e)),
    f && n && Zt(r, e),
    t.innerAfterBrush(),
    t.afterBrush && t.afterBrush(),
    (e.prevEl = t),
    (t.__dirty = 0),
    (t.__isRendered = !0);
}
function _M(r, t, e) {
  var n = t.getDisplayables(),
    i = t.getTemporalDisplayables();
  r.save();
  var a = {
      prevElClipPaths: null,
      prevEl: null,
      allClipped: !1,
      viewWidth: e.viewWidth,
      viewHeight: e.viewHeight,
      inHover: e.inHover,
    },
    o,
    s;
  for (o = t.getCursor(), s = n.length; o < s; o++) {
    var u = n[o];
    u.beforeBrush && u.beforeBrush(),
      u.innerBeforeBrush(),
      tn(r, u, a, o === s - 1),
      u.innerAfterBrush(),
      u.afterBrush && u.afterBrush(),
      (a.prevEl = u);
  }
  for (var l = 0, f = i.length; l < f; l++) {
    var u = i[l];
    u.beforeBrush && u.beforeBrush(),
      u.innerBeforeBrush(),
      tn(r, u, a, l === f - 1),
      u.innerAfterBrush(),
      u.afterBrush && u.afterBrush(),
      (a.prevEl = u);
  }
  t.clearTemporalDisplayables(), (t.notClear = !0), r.restore();
}
var Gu = new QC(),
  _d = new Ta(100),
  Sd = [
    "symbol",
    "symbolSize",
    "symbolKeepAspect",
    "color",
    "backgroundColor",
    "dashArrayX",
    "dashArrayY",
    "maxTileWidth",
    "maxTileHeight",
  ];
function xd(r, t) {
  if (r === "none") return null;
  var e = t.getDevicePixelRatio(),
    n = t.getZr(),
    i = n.painter.type === "svg";
  r.dirty && Gu.delete(r);
  var a = Gu.get(r);
  if (a) return a;
  var o = q(r, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512,
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = { repeat: "repeat" };
  return (
    u(s),
    (s.rotation = o.rotation),
    (s.scaleX = s.scaleY = i ? 1 : 1 / e),
    Gu.set(r, s),
    (r.dirty = !1),
    s
  );
  function u(l) {
    for (var f = [e], h = !0, c = 0; c < Sd.length; ++c) {
      var v = o[Sd[c]];
      if (v != null && !N(v) && !G(v) && !ft(v) && typeof v != "boolean") {
        h = !1;
        break;
      }
      f.push(v);
    }
    var d;
    if (h) {
      d = f.join(",") + (i ? "-svg" : "");
      var g = _d.get(d);
      g && (i ? (l.svgElement = g) : (l.image = g));
    }
    var p = l0(o.dashArrayX),
      y = SM(o.dashArrayY),
      m = u0(o.symbol),
      _ = xM(p),
      S = f0(y),
      w = !i && dn.createCanvas(),
      x = i && { tag: "g", attrs: {}, key: "dcl", children: [] },
      b = M(),
      T;
    w &&
      ((w.width = b.width * e),
      (w.height = b.height * e),
      (T = w.getContext("2d"))),
      D(),
      h && _d.put(d, w || x),
      (l.image = w),
      (l.svgElement = x),
      (l.svgWidth = b.width),
      (l.svgHeight = b.height);
    function M() {
      for (var A = 1, L = 0, I = _.length; L < I; ++L) A = Iv(A, _[L]);
      for (var P = 1, L = 0, I = m.length; L < I; ++L) P = Iv(P, m[L].length);
      A *= P;
      var E = S * _.length * m.length;
      return {
        width: Math.max(1, Math.min(A, o.maxTileWidth)),
        height: Math.max(1, Math.min(E, o.maxTileHeight)),
      };
    }
    function D() {
      T &&
        (T.clearRect(0, 0, w.width, w.height),
        o.backgroundColor &&
          ((T.fillStyle = o.backgroundColor),
          T.fillRect(0, 0, w.width, w.height)));
      for (var A = 0, L = 0; L < y.length; ++L) A += y[L];
      if (A <= 0) return;
      for (var I = -S, P = 0, E = 0, R = 0; I < b.height; ) {
        if (P % 2 === 0) {
          for (
            var V = (E / 2) % m.length, F = 0, B = 0, $ = 0;
            F < b.width * 2;

          ) {
            for (var it = 0, L = 0; L < p[R].length; ++L) it += p[R][L];
            if (it <= 0) break;
            if (B % 2 === 0) {
              var lt = (1 - o.symbolSize) * 0.5,
                ht = F + p[R][B] * lt,
                vt = I + y[P] * lt,
                Lt = p[R][B] * o.symbolSize,
                dt = y[P] * o.symbolSize,
                pe = ($ / 2) % m[V].length;
              ze(ht, vt, Lt, dt, m[V][pe]);
            }
            (F += p[R][B]), ++$, ++B, B === p[R].length && (B = 0);
          }
          ++R, R === p.length && (R = 0);
        }
        (I += y[P]), ++E, ++P, P === y.length && (P = 0);
      }
      function ze(It, St, X, tt, Tr) {
        var Bt = i ? 1 : e,
          Jh = br(
            Tr,
            It * Bt,
            St * Bt,
            X * Bt,
            tt * Bt,
            o.color,
            o.symbolKeepAspect
          );
        if (i) {
          var jh = n.painter.renderOneToVNode(Jh);
          jh && x.children.push(jh);
        } else s0(T, Jh);
      }
    }
  }
}
function u0(r) {
  if (!r || r.length === 0) return [["rect"]];
  if (G(r)) return [[r]];
  for (var t = !0, e = 0; e < r.length; ++e)
    if (!G(r[e])) {
      t = !1;
      break;
    }
  if (t) return u0([r]);
  for (var n = [], e = 0; e < r.length; ++e)
    G(r[e]) ? n.push([r[e]]) : n.push(r[e]);
  return n;
}
function l0(r) {
  if (!r || r.length === 0) return [[0, 0]];
  if (ft(r)) {
    var t = Math.ceil(r);
    return [[t, t]];
  }
  for (var e = !0, n = 0; n < r.length; ++n)
    if (!ft(r[n])) {
      e = !1;
      break;
    }
  if (e) return l0([r]);
  for (var i = [], n = 0; n < r.length; ++n)
    if (ft(r[n])) {
      var t = Math.ceil(r[n]);
      i.push([t, t]);
    } else {
      var t = z(r[n], function (s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t);
    }
  return i;
}
function SM(r) {
  if (!r || (typeof r == "object" && r.length === 0)) return [0, 0];
  if (ft(r)) {
    var t = Math.ceil(r);
    return [t, t];
  }
  var e = z(r, function (n) {
    return Math.ceil(n);
  });
  return r.length % 2 ? e.concat(e) : e;
}
function xM(r) {
  return z(r, function (t) {
    return f0(t);
  });
}
function f0(r) {
  for (var t = 0, e = 0; e < r.length; ++e) t += r[e];
  return r.length % 2 === 1 ? t * 2 : t;
}
function wM(r, t) {
  r.eachRawSeries(function (e) {
    if (!r.isSeriesFiltered(e)) {
      var n = e.getData();
      n.hasItemVisual() &&
        n.each(function (o) {
          var s = n.getItemVisual(o, "decal");
          if (s) {
            var u = n.ensureUniqueItemVisual(o, "style");
            u.decal = xd(s, t);
          }
        });
      var i = n.getVisual("decal");
      if (i) {
        var a = n.getVisual("style");
        a.decal = xd(i, t);
      }
    }
  });
}
var bM = new ce();
const _e = bM;
var h0 = {};
function TM(r, t) {
  h0[r] = t;
}
function CM(r) {
  return h0[r];
}
var MM = typeof window < "u",
  DM = 1,
  AM = 800,
  LM = 900,
  IM = 1e3,
  PM = 2e3,
  RM = 5e3,
  v0 = 1e3,
  EM = 1100,
  Mh = 2e3,
  c0 = 3e3,
  OM = 4e3,
  Vs = 4500,
  kM = 4600,
  BM = 5e3,
  NM = 6e3,
  d0 = 7e3,
  FM = {
    PROCESSOR: { FILTER: IM, SERIES_FILTER: AM, STATISTIC: RM },
    VISUAL: {
      LAYOUT: v0,
      PROGRESSIVE_LAYOUT: EM,
      GLOBAL: Mh,
      CHART: c0,
      POST_CHART_LAYOUT: kM,
      COMPONENT: OM,
      BRUSH: BM,
      CHART_ITEM: Vs,
      ARIA: NM,
      DECAL: d0,
    },
  },
  Rt = "__flagInMainProcess",
  Ut = "__pendingUpdate",
  Hu = "__needsUpdateStatus",
  wd = /^[a-zA-Z0-9_]+$/,
  Vu = "__connectUpdateStatus",
  bd = 0,
  zM = 1,
  GM = 2;
function p0(r) {
  return function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    if (this.isDisposed()) {
      this.id;
      return;
    }
    return y0(this, r, t);
  };
}
function g0(r) {
  return function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return y0(this, r, t);
  };
}
function y0(r, t, e) {
  return (e[0] = e[0] && e[0].toLowerCase()), ce.prototype[t].apply(r, e);
}
var m0 = (function (r) {
    O(t, r);
    function t() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return t;
  })(ce),
  _0 = m0.prototype;
_0.on = g0("on");
_0.off = g0("off");
var Ln,
  Wu,
  uo,
  ir,
  Uu,
  Yu,
  $u,
  bi,
  Ti,
  Td,
  Cd,
  Zu,
  Md,
  lo,
  Dd,
  S0,
  te,
  Ad,
  x0 = (function (r) {
    O(t, r);
    function t(e, n, i) {
      var a = r.call(this, new VC()) || this;
      (a._chartsViews = []),
        (a._chartsMap = {}),
        (a._componentsViews = []),
        (a._componentsMap = {}),
        (a._pendingActions = []),
        (i = i || {}),
        G(n) && (n = w0[n]),
        (a._dom = e);
      var o = "canvas",
        s = !1,
        u = (a._zr = Av(e, {
          renderer: i.renderer || o,
          devicePixelRatio: i.devicePixelRatio,
          width: i.width,
          height: i.height,
          ssr: i.ssr,
          useDirtyRect: i.useDirtyRect == null ? s : i.useDirtyRect,
        }));
      (a._ssr = i.ssr),
        (a._throttledZrFlush = qm(Y(u.flush, u), 17)),
        (n = K(n)),
        n && Dm(n, !0),
        (a._theme = n),
        (a._locale = Gb(i.locale || im)),
        (a._coordSysMgr = new _h());
      var l = (a._api = Dd(a));
      function f(h, c) {
        return h.__prio - c.__prio;
      }
      return (
        bo(us, f),
        bo(lf, f),
        (a._scheduler = new e0(a, l, lf, us)),
        (a._messageCenter = new m0()),
        a._initEvents(),
        (a.resize = Y(a.resize, a)),
        u.animation.on("frame", a._onframe, a),
        Td(u, a),
        Cd(u, a),
        Go(a),
        a
      );
    }
    return (
      (t.prototype._onframe = function () {
        if (!this._disposed) {
          Ad(this);
          var e = this._scheduler;
          if (this[Ut]) {
            var n = this[Ut].silent;
            this[Rt] = !0;
            try {
              Ln(this), ir.update.call(this, null, this[Ut].updateParams);
            } catch (u) {
              throw ((this[Rt] = !1), (this[Ut] = null), u);
            }
            this._zr.flush(),
              (this[Rt] = !1),
              (this[Ut] = null),
              bi.call(this, n),
              Ti.call(this, n);
          } else if (e.unfinished) {
            var i = DM,
              a = this._model,
              o = this._api;
            e.unfinished = !1;
            do {
              var s = +new Date();
              e.performSeriesTasks(a),
                e.performDataProcessorTasks(a),
                Yu(this, a),
                e.performVisualTasks(a),
                lo(this, this._model, o, "remain", {}),
                (i -= +new Date() - s);
            } while (i > 0 && e.unfinished);
            e.unfinished || this._zr.flush();
          }
        }
      }),
      (t.prototype.getDom = function () {
        return this._dom;
      }),
      (t.prototype.getId = function () {
        return this.id;
      }),
      (t.prototype.getZr = function () {
        return this._zr;
      }),
      (t.prototype.isSSR = function () {
        return this._ssr;
      }),
      (t.prototype.setOption = function (e, n, i) {
        if (!this[Rt]) {
          if (this._disposed) {
            this.id;
            return;
          }
          var a, o, s;
          if (
            (H(n) &&
              ((i = n.lazyUpdate),
              (a = n.silent),
              (o = n.replaceMerge),
              (s = n.transition),
              (n = n.notMerge)),
            (this[Rt] = !0),
            !this._model || n)
          ) {
            var u = new bT(this._api),
              l = this._theme,
              f = (this._model = new Tm());
            (f.scheduler = this._scheduler),
              (f.ssr = this._ssr),
              f.init(null, null, null, l, this._locale, u);
          }
          this._model.setOption(e, { replaceMerge: o }, ff);
          var h = { seriesTransition: s, optionChanged: !0 };
          if (i)
            (this[Ut] = { silent: a, updateParams: h }),
              (this[Rt] = !1),
              this.getZr().wakeUp();
          else {
            try {
              Ln(this), ir.update.call(this, null, h);
            } catch (c) {
              throw ((this[Ut] = null), (this[Rt] = !1), c);
            }
            this._ssr || this._zr.flush(),
              (this[Ut] = null),
              (this[Rt] = !1),
              bi.call(this, a),
              Ti.call(this, a);
          }
        }
      }),
      (t.prototype.setTheme = function () {}),
      (t.prototype.getModel = function () {
        return this._model;
      }),
      (t.prototype.getOption = function () {
        return this._model && this._model.getOption();
      }),
      (t.prototype.getWidth = function () {
        return this._zr.getWidth();
      }),
      (t.prototype.getHeight = function () {
        return this._zr.getHeight();
      }),
      (t.prototype.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || (MM && window.devicePixelRatio) || 1;
      }),
      (t.prototype.getRenderedCanvas = function (e) {
        return this.renderToCanvas(e);
      }),
      (t.prototype.renderToCanvas = function (e) {
        e = e || {};
        var n = this._zr.painter;
        return n.getRenderedCanvas({
          backgroundColor:
            e.backgroundColor || this._model.get("backgroundColor"),
          pixelRatio: e.pixelRatio || this.getDevicePixelRatio(),
        });
      }),
      (t.prototype.renderToSVGString = function (e) {
        e = e || {};
        var n = this._zr.painter;
        return n.renderToString({ useViewBox: e.useViewBox });
      }),
      (t.prototype.getSvgDataURL = function () {
        if (!!j.svgSupported) {
          var e = this._zr,
            n = e.storage.getDisplayList();
          return (
            C(n, function (i) {
              i.stopAnimation(null, !0);
            }),
            e.painter.toDataURL()
          );
        }
      }),
      (t.prototype.getDataURL = function (e) {
        if (this._disposed) {
          this.id;
          return;
        }
        e = e || {};
        var n = e.excludeComponents,
          i = this._model,
          a = [],
          o = this;
        C(n, function (u) {
          i.eachComponent({ mainType: u }, function (l) {
            var f = o._componentsMap[l.__viewId];
            f.group.ignore || (a.push(f), (f.group.ignore = !0));
          });
        });
        var s =
          this._zr.painter.getType() === "svg"
            ? this.getSvgDataURL()
            : this.renderToCanvas(e).toDataURL(
                "image/" + ((e && e.type) || "png")
              );
        return (
          C(a, function (u) {
            u.group.ignore = !1;
          }),
          s
        );
      }),
      (t.prototype.getConnectedDataURL = function (e) {
        if (this._disposed) {
          this.id;
          return;
        }
        var n = e.type === "svg",
          i = this.group,
          a = Math.min,
          o = Math.max,
          s = 1 / 0;
        if (Ld[i]) {
          var u = s,
            l = s,
            f = -s,
            h = -s,
            c = [],
            v = (e && e.pixelRatio) || this.getDevicePixelRatio();
          C(ji, function (_, S) {
            if (_.group === i) {
              var w = n
                  ? _.getZr().painter.getSvgDom().innerHTML
                  : _.renderToCanvas(K(e)),
                x = _.getDom().getBoundingClientRect();
              (u = a(x.left, u)),
                (l = a(x.top, l)),
                (f = o(x.right, f)),
                (h = o(x.bottom, h)),
                c.push({ dom: w, left: x.left, top: x.top });
            }
          }),
            (u *= v),
            (l *= v),
            (f *= v),
            (h *= v);
          var d = f - u,
            g = h - l,
            p = dn.createCanvas(),
            y = Av(p, { renderer: n ? "svg" : "canvas" });
          if ((y.resize({ width: d, height: g }), n)) {
            var m = "";
            return (
              C(c, function (_) {
                var S = _.left - u,
                  w = _.top - l;
                m +=
                  '<g transform="translate(' +
                  S +
                  "," +
                  w +
                  ')">' +
                  _.dom +
                  "</g>";
              }),
              (y.painter.getSvgRoot().innerHTML = m),
              e.connectedBackgroundColor &&
                y.painter.setBackgroundColor(e.connectedBackgroundColor),
              y.refreshImmediately(),
              y.painter.toDataURL()
            );
          } else
            return (
              e.connectedBackgroundColor &&
                y.add(
                  new yt({
                    shape: { x: 0, y: 0, width: d, height: g },
                    style: { fill: e.connectedBackgroundColor },
                  })
                ),
              C(c, function (_) {
                var S = new pn({
                  style: { x: _.left * v - u, y: _.top * v - l, image: _.dom },
                });
                y.add(S);
              }),
              y.refreshImmediately(),
              p.toDataURL("image/" + ((e && e.type) || "png"))
            );
        } else return this.getDataURL(e);
      }),
      (t.prototype.convertToPixel = function (e, n) {
        return Uu(this, "convertToPixel", e, n);
      }),
      (t.prototype.convertFromPixel = function (e, n) {
        return Uu(this, "convertFromPixel", e, n);
      }),
      (t.prototype.containPixel = function (e, n) {
        if (this._disposed) {
          this.id;
          return;
        }
        var i = this._model,
          a,
          o = $i(i, e);
        return (
          C(
            o,
            function (s, u) {
              u.indexOf("Models") >= 0 &&
                C(
                  s,
                  function (l) {
                    var f = l.coordinateSystem;
                    if (f && f.containPoint) a = a || !!f.containPoint(n);
                    else if (u === "seriesModels") {
                      var h = this._chartsMap[l.__viewId];
                      h && h.containPoint && (a = a || h.containPoint(n, l));
                    }
                  },
                  this
                );
            },
            this
          ),
          !!a
        );
      }),
      (t.prototype.getVisual = function (e, n) {
        var i = this._model,
          a = $i(i, e, { defaultMainType: "series" }),
          o = a.seriesModel,
          s = o.getData(),
          u = a.hasOwnProperty("dataIndexInside")
            ? a.dataIndexInside
            : a.hasOwnProperty("dataIndex")
            ? s.indexOfRawIndex(a.dataIndex)
            : null;
        return u != null ? YC(s, u, n) : $C(s, n);
      }),
      (t.prototype.getViewOfComponentModel = function (e) {
        return this._componentsMap[e.__viewId];
      }),
      (t.prototype.getViewOfSeriesModel = function (e) {
        return this._chartsMap[e.__viewId];
      }),
      (t.prototype._initEvents = function () {
        var e = this;
        C(HM, function (n) {
          var i = function (a) {
            var o = e.getModel(),
              s = a.target,
              u,
              l = n === "globalout";
            if (
              (l
                ? (u = {})
                : s &&
                  Wi(
                    s,
                    function (d) {
                      var g = ut(d);
                      if (g && g.dataIndex != null) {
                        var p =
                          g.dataModel || o.getSeriesByIndex(g.seriesIndex);
                        return (
                          (u =
                            (p && p.getDataParams(g.dataIndex, g.dataType)) ||
                            {}),
                          !0
                        );
                      } else if (g.eventData)
                        return (u = k({}, g.eventData)), !0;
                    },
                    !0
                  ),
              u)
            ) {
              var f = u.componentType,
                h = u.componentIndex;
              (f === "markLine" || f === "markPoint" || f === "markArea") &&
                ((f = "series"), (h = u.seriesIndex));
              var c = f && h != null && o.getComponent(f, h),
                v =
                  c &&
                  e[c.mainType === "series" ? "_chartsMap" : "_componentsMap"][
                    c.__viewId
                  ];
              (u.event = a),
                (u.type = n),
                (e._$eventProcessor.eventInfo = {
                  targetEl: s,
                  packedEvent: u,
                  model: c,
                  view: v,
                }),
                e.trigger(n, u);
            }
          };
          (i.zrEventfulCallAtLast = !0), e._zr.on(n, i, e);
        }),
          C(Ji, function (n, i) {
            e._messageCenter.on(
              i,
              function (a) {
                this.trigger(i, a);
              },
              e
            );
          }),
          C(["selectchanged"], function (n) {
            e._messageCenter.on(
              n,
              function (i) {
                this.trigger(n, i);
              },
              e
            );
          }),
          ZC(this._messageCenter, this, this._api);
      }),
      (t.prototype.isDisposed = function () {
        return this._disposed;
      }),
      (t.prototype.clear = function () {
        if (this._disposed) {
          this.id;
          return;
        }
        this.setOption({ series: [] }, !0);
      }),
      (t.prototype.dispose = function () {
        if (this._disposed) {
          this.id;
          return;
        }
        this._disposed = !0;
        var e = this.getDom();
        e && ey(this.getDom(), Ah, "");
        var n = this,
          i = n._api,
          a = n._model;
        C(n._componentsViews, function (o) {
          o.dispose(a, i);
        }),
          C(n._chartsViews, function (o) {
            o.dispose(a, i);
          }),
          n._zr.dispose(),
          (n._dom =
            n._model =
            n._chartsMap =
            n._componentsMap =
            n._chartsViews =
            n._componentsViews =
            n._scheduler =
            n._api =
            n._zr =
            n._throttledZrFlush =
            n._theme =
            n._coordSysMgr =
            n._messageCenter =
              null),
          delete ji[n.id];
      }),
      (t.prototype.resize = function (e) {
        if (!this[Rt]) {
          if (this._disposed) {
            this.id;
            return;
          }
          this._zr.resize(e);
          var n = this._model;
          if ((this._loadingFX && this._loadingFX.resize(), !!n)) {
            var i = n.resetOption("media"),
              a = e && e.silent;
            this[Ut] &&
              (a == null && (a = this[Ut].silent), (i = !0), (this[Ut] = null)),
              (this[Rt] = !0);
            try {
              i && Ln(this),
                ir.update.call(this, {
                  type: "resize",
                  animation: k({ duration: 0 }, e && e.animation),
                });
            } catch (o) {
              throw ((this[Rt] = !1), o);
            }
            (this[Rt] = !1), bi.call(this, a), Ti.call(this, a);
          }
        }
      }),
      (t.prototype.showLoading = function (e, n) {
        if (this._disposed) {
          this.id;
          return;
        }
        if (
          (H(e) && ((n = e), (e = "")),
          (e = e || "default"),
          this.hideLoading(),
          !!hf[e])
        ) {
          var i = hf[e](this._api, n),
            a = this._zr;
          (this._loadingFX = i), a.add(i);
        }
      }),
      (t.prototype.hideLoading = function () {
        if (this._disposed) {
          this.id;
          return;
        }
        this._loadingFX && this._zr.remove(this._loadingFX),
          (this._loadingFX = null);
      }),
      (t.prototype.makeActionFromEvent = function (e) {
        var n = k({}, e);
        return (n.type = Ji[e.type]), n;
      }),
      (t.prototype.dispatchAction = function (e, n) {
        if (this._disposed) {
          this.id;
          return;
        }
        if ((H(n) || (n = { silent: !!n }), !!ss[e.type] && !!this._model)) {
          if (this[Rt]) {
            this._pendingActions.push(e);
            return;
          }
          var i = n.silent;
          $u.call(this, e, i);
          var a = n.flush;
          a
            ? this._zr.flush()
            : a !== !1 && j.browser.weChat && this._throttledZrFlush(),
            bi.call(this, i),
            Ti.call(this, i);
        }
      }),
      (t.prototype.updateLabelLayout = function () {
        _e.trigger("series:layoutlabels", this._model, this._api, {
          updatedSeries: [],
        });
      }),
      (t.prototype.appendData = function (e) {
        if (this._disposed) {
          this.id;
          return;
        }
        var n = e.seriesIndex,
          i = this.getModel(),
          a = i.getSeriesByIndex(n);
        a.appendData(e),
          (this._scheduler.unfinished = !0),
          this.getZr().wakeUp();
      }),
      (t.internalField = (function () {
        (Ln = function (h) {
          var c = h._scheduler;
          c.restorePipelines(h._model),
            c.prepareStageTasks(),
            Wu(h, !0),
            Wu(h, !1),
            c.plan();
        }),
          (Wu = function (h, c) {
            for (
              var v = h._model,
                d = h._scheduler,
                g = c ? h._componentsViews : h._chartsViews,
                p = c ? h._componentsMap : h._chartsMap,
                y = h._zr,
                m = h._api,
                _ = 0;
              _ < g.length;
              _++
            )
              g[_].__alive = !1;
            c
              ? v.eachComponent(function (x, b) {
                  x !== "series" && S(b);
                })
              : v.eachSeries(S);
            function S(x) {
              var b = x.__requireNewView;
              x.__requireNewView = !1;
              var T = "_ec_" + x.id + "_" + x.type,
                M = !b && p[T];
              if (!M) {
                var D = Re(x.type),
                  A = c ? ve.getClass(D.main, D.sub) : _r.getClass(D.sub);
                (M = new A()),
                  M.init(v, m),
                  (p[T] = M),
                  g.push(M),
                  y.add(M.group);
              }
              (x.__viewId = M.__id = T),
                (M.__alive = !0),
                (M.__model = x),
                (M.group.__ecComponentInfo = {
                  mainType: x.mainType,
                  index: x.componentIndex,
                }),
                !c && d.prepareView(M, x, v, m);
            }
            for (var _ = 0; _ < g.length; ) {
              var w = g[_];
              w.__alive
                ? _++
                : (!c && w.renderTask.dispose(),
                  y.remove(w.group),
                  w.dispose(v, m),
                  g.splice(_, 1),
                  p[w.__id] === w && delete p[w.__id],
                  (w.__id = w.group.__ecComponentInfo = null));
            }
          }),
          (uo = function (h, c, v, d, g) {
            var p = h._model;
            if ((p.setUpdatePayload(v), !d)) {
              C([].concat(h._componentsViews).concat(h._chartsViews), w);
              return;
            }
            var y = {};
            (y[d + "Id"] = v[d + "Id"]),
              (y[d + "Index"] = v[d + "Index"]),
              (y[d + "Name"] = v[d + "Name"]);
            var m = { mainType: d, query: y };
            g && (m.subType = g);
            var _ = v.excludeSeriesId,
              S;
            _ != null &&
              ((S = W()),
              C(_t(_), function (x) {
                var b = Ee(x, null);
                b != null && S.set(b, !0);
              })),
              p &&
                p.eachComponent(
                  m,
                  function (x) {
                    var b = S && S.get(x.id) !== null;
                    if (!b)
                      if (sc(v))
                        if (x instanceof pa)
                          v.type === nn &&
                            !v.notBlur &&
                            !x.get(["emphasis", "disabled"]) &&
                            _w(x, v, h._api);
                        else {
                          var T = eh(
                              x.mainType,
                              x.componentIndex,
                              v.name,
                              h._api
                            ),
                            M = T.focusSelf,
                            D = T.dispatchers;
                          v.type === nn &&
                            M &&
                            !v.notBlur &&
                            Yl(x.mainType, x.componentIndex, h._api),
                            D &&
                              C(D, function (A) {
                                v.type === nn ? jn(A) : ti(A);
                              });
                        }
                      else
                        Xl(v) &&
                          x instanceof pa &&
                          (ww(x, v, h._api), ic(x), te(h));
                  },
                  h
                ),
              p &&
                p.eachComponent(
                  m,
                  function (x) {
                    var b = S && S.get(x.id) !== null;
                    b ||
                      w(
                        h[d === "series" ? "_chartsMap" : "_componentsMap"][
                          x.__viewId
                        ]
                      );
                  },
                  h
                );
            function w(x) {
              x && x.__alive && x[c] && x[c](x.__model, p, h._api, v);
            }
          }),
          (ir = {
            prepareAndUpdate: function (h) {
              Ln(this),
                ir.update.call(this, h, { optionChanged: h.newOption != null });
            },
            update: function (h, c) {
              var v = this._model,
                d = this._api,
                g = this._zr,
                p = this._coordSysMgr,
                y = this._scheduler;
              if (!!v) {
                v.setUpdatePayload(h),
                  y.restoreData(v, h),
                  y.performSeriesTasks(v),
                  p.create(v, d),
                  y.performDataProcessorTasks(v, h),
                  Yu(this, v),
                  p.update(v, d),
                  e(v),
                  y.performVisualTasks(v, h),
                  Zu(this, v, d, h, c);
                var m = v.get("backgroundColor") || "transparent",
                  _ = v.get("darkMode");
                g.setBackgroundColor(m),
                  _ != null && _ !== "auto" && g.setDarkMode(_),
                  _e.trigger("afterupdate", v, d);
              }
            },
            updateTransform: function (h) {
              var c = this,
                v = this._model,
                d = this._api;
              if (!!v) {
                v.setUpdatePayload(h);
                var g = [];
                v.eachComponent(function (y, m) {
                  if (y !== "series") {
                    var _ = c.getViewOfComponentModel(m);
                    if (_ && _.__alive)
                      if (_.updateTransform) {
                        var S = _.updateTransform(m, v, d, h);
                        S && S.update && g.push(_);
                      } else g.push(_);
                  }
                });
                var p = W();
                v.eachSeries(function (y) {
                  var m = c._chartsMap[y.__viewId];
                  if (m.updateTransform) {
                    var _ = m.updateTransform(y, v, d, h);
                    _ && _.update && p.set(y.uid, 1);
                  } else p.set(y.uid, 1);
                }),
                  e(v),
                  this._scheduler.performVisualTasks(v, h, {
                    setDirty: !0,
                    dirtyMap: p,
                  }),
                  lo(this, v, d, h, {}, p),
                  _e.trigger("afterupdate", v, d);
              }
            },
            updateView: function (h) {
              var c = this._model;
              !c ||
                (c.setUpdatePayload(h),
                _r.markUpdateMethod(h, "updateView"),
                e(c),
                this._scheduler.performVisualTasks(c, h, { setDirty: !0 }),
                Zu(this, c, this._api, h, {}),
                _e.trigger("afterupdate", c, this._api));
            },
            updateVisual: function (h) {
              var c = this,
                v = this._model;
              !v ||
                (v.setUpdatePayload(h),
                v.eachSeries(function (d) {
                  d.getData().clearAllVisual();
                }),
                _r.markUpdateMethod(h, "updateVisual"),
                e(v),
                this._scheduler.performVisualTasks(v, h, {
                  visualType: "visual",
                  setDirty: !0,
                }),
                v.eachComponent(function (d, g) {
                  if (d !== "series") {
                    var p = c.getViewOfComponentModel(g);
                    p && p.__alive && p.updateVisual(g, v, c._api, h);
                  }
                }),
                v.eachSeries(function (d) {
                  var g = c._chartsMap[d.__viewId];
                  g.updateVisual(d, v, c._api, h);
                }),
                _e.trigger("afterupdate", v, this._api));
            },
            updateLayout: function (h) {
              ir.update.call(this, h);
            },
          }),
          (Uu = function (h, c, v, d) {
            if (h._disposed) {
              h.id;
              return;
            }
            for (
              var g = h._model,
                p = h._coordSysMgr.getCoordinateSystems(),
                y,
                m = $i(g, v),
                _ = 0;
              _ < p.length;
              _++
            ) {
              var S = p[_];
              if (S[c] && (y = S[c](g, m, d)) != null) return y;
            }
          }),
          (Yu = function (h, c) {
            var v = h._chartsMap,
              d = h._scheduler;
            c.eachSeries(function (g) {
              d.updateStreamModes(g, v[g.__viewId]);
            });
          }),
          ($u = function (h, c) {
            var v = this,
              d = this.getModel(),
              g = h.type,
              p = h.escapeConnect,
              y = ss[g],
              m = y.actionInfo,
              _ = (m.update || "update").split(":"),
              S = _.pop(),
              w = _[0] != null && Re(_[0]);
            this[Rt] = !0;
            var x = [h],
              b = !1;
            h.batch &&
              ((b = !0),
              (x = z(h.batch, function (P) {
                return (P = q(k({}, P), h)), (P.batch = null), P;
              })));
            var T = [],
              M,
              D = Xl(h),
              A = sc(h);
            if (
              (A && My(this._api),
              C(x, function (P) {
                if (
                  ((M = y.action(P, v._model, v._api)),
                  (M = M || k({}, P)),
                  (M.type = m.event || M.type),
                  T.push(M),
                  A)
                ) {
                  var E = Kf(h),
                    R = E.queryOptionMap,
                    V = E.mainTypeSpecified,
                    F = V ? R.keys()[0] : "series";
                  uo(v, S, P, F), te(v);
                } else D ? (uo(v, S, P, "series"), te(v)) : w && uo(v, S, P, w.main, w.sub);
              }),
              S !== "none" && !A && !D && !w)
            )
              try {
                this[Ut]
                  ? (Ln(this), ir.update.call(this, h), (this[Ut] = null))
                  : ir[S].call(this, h);
              } catch (P) {
                throw ((this[Rt] = !1), P);
              }
            if (
              (b
                ? (M = { type: m.event || g, escapeConnect: p, batch: T })
                : (M = T[0]),
              (this[Rt] = !1),
              !c)
            ) {
              var L = this._messageCenter;
              if ((L.trigger(M.type, M), D)) {
                var I = {
                  type: "selectchanged",
                  escapeConnect: p,
                  selected: bw(d),
                  isFromClick: h.isFromClick || !1,
                  fromAction: h.type,
                  fromActionPayload: h,
                };
                L.trigger(I.type, I);
              }
            }
          }),
          (bi = function (h) {
            for (var c = this._pendingActions; c.length; ) {
              var v = c.shift();
              $u.call(this, v, h);
            }
          }),
          (Ti = function (h) {
            !h && this.trigger("updated");
          }),
          (Td = function (h, c) {
            h.on("rendered", function (v) {
              c.trigger("rendered", v),
                h.animation.isFinished() &&
                  !c[Ut] &&
                  !c._scheduler.unfinished &&
                  !c._pendingActions.length &&
                  c.trigger("finished");
            });
          }),
          (Cd = function (h, c) {
            h.on("mouseover", function (v) {
              var d = v.target,
                g = Wi(d, Zl);
              g && (Sw(g, v, c._api), te(c));
            })
              .on("mouseout", function (v) {
                var d = v.target,
                  g = Wi(d, Zl);
                g && (xw(g, v, c._api), te(c));
              })
              .on("click", function (v) {
                var d = v.target,
                  g = Wi(
                    d,
                    function (m) {
                      return ut(m).dataIndex != null;
                    },
                    !0
                  );
                if (g) {
                  var p = g.selected ? "unselect" : "select",
                    y = ut(g);
                  c._api.dispatchAction({
                    type: p,
                    dataType: y.dataType,
                    dataIndexInside: y.dataIndex,
                    seriesIndex: y.seriesIndex,
                    isFromClick: !0,
                  });
                }
              });
          });
        function e(h) {
          h.clearColorPalette(),
            h.eachSeries(function (c) {
              c.clearColorPalette();
            });
        }
        function n(h) {
          var c = [],
            v = [],
            d = !1;
          if (
            (h.eachComponent(function (m, _) {
              var S = _.get("zlevel") || 0,
                w = _.get("z") || 0,
                x = _.getZLevelKey();
              (d = d || !!x),
                (m === "series" ? v : c).push({
                  zlevel: S,
                  z: w,
                  idx: _.componentIndex,
                  type: m,
                  key: x,
                });
            }),
            d)
          ) {
            var g = c.concat(v),
              p,
              y;
            bo(g, function (m, _) {
              return m.zlevel === _.zlevel ? m.z - _.z : m.zlevel - _.zlevel;
            }),
              C(g, function (m) {
                var _ = h.getComponent(m.type, m.idx),
                  S = m.zlevel,
                  w = m.key;
                p != null && (S = Math.max(p, S)),
                  w
                    ? (S === p && w !== y && S++, (y = w))
                    : y && (S === p && S++, (y = "")),
                  (p = S),
                  _.setZLevel(S);
              });
          }
        }
        (Zu = function (h, c, v, d, g) {
          n(c),
            Md(h, c, v, d, g),
            C(h._chartsViews, function (p) {
              p.__alive = !1;
            }),
            lo(h, c, v, d, g),
            C(h._chartsViews, function (p) {
              p.__alive || p.remove(c, v);
            });
        }),
          (Md = function (h, c, v, d, g, p) {
            C(p || h._componentsViews, function (y) {
              var m = y.__model;
              l(m, y), y.render(m, c, v, d), s(m, y), f(m, y);
            });
          }),
          (lo = function (h, c, v, d, g, p) {
            var y = h._scheduler;
            (g = k(g || {}, { updatedSeries: c.getSeries() })),
              _e.trigger("series:beforeupdate", c, v, g);
            var m = !1;
            c.eachSeries(function (_) {
              var S = h._chartsMap[_.__viewId];
              S.__alive = !0;
              var w = S.renderTask;
              y.updatePayload(w, d),
                l(_, S),
                p && p.get(_.uid) && w.dirty(),
                w.perform(y.getPerformArgs(w)) && (m = !0),
                (S.group.silent = !!_.get("silent")),
                o(_, S),
                ic(_);
            }),
              (y.unfinished = m || y.unfinished),
              _e.trigger("series:layoutlabels", c, v, g),
              _e.trigger("series:transition", c, v, g),
              c.eachSeries(function (_) {
                var S = h._chartsMap[_.__viewId];
                s(_, S), f(_, S);
              }),
              a(h, c),
              _e.trigger("series:afterupdate", c, v, g);
          }),
          (te = function (h) {
            (h[Hu] = !0), h.getZr().wakeUp();
          }),
          (Ad = function (h) {
            !h[Hu] ||
              (h.getZr().storage.traverse(function (c) {
                Xn(c) || i(c);
              }),
              (h[Hu] = !1));
          });
        function i(h) {
          for (var c = [], v = h.currentStates, d = 0; d < v.length; d++) {
            var g = v[d];
            g === "emphasis" || g === "blur" || g === "select" || c.push(g);
          }
          h.selected && h.states.select && c.push("select"),
            h.hoverState === Ts && h.states.emphasis
              ? c.push("emphasis")
              : h.hoverState === bs && h.states.blur && c.push("blur"),
            h.useStates(c);
        }
        function a(h, c) {
          var v = h._zr,
            d = v.storage,
            g = 0;
          d.traverse(function (p) {
            p.isGroup || g++;
          }),
            g > c.get("hoverLayerThreshold") &&
              !j.node &&
              !j.worker &&
              c.eachSeries(function (p) {
                if (!p.preventUsingHoverLayer) {
                  var y = h._chartsMap[p.__viewId];
                  y.__alive &&
                    y.eachRendered(function (m) {
                      m.states.emphasis && (m.states.emphasis.hoverLayer = !0);
                    });
                }
              });
        }
        function o(h, c) {
          var v = h.get("blendMode") || null;
          c.eachRendered(function (d) {
            d.isGroup || (d.style.blend = v);
          });
        }
        function s(h, c) {
          if (!h.preventAutoZ) {
            var v = h.get("z") || 0,
              d = h.get("zlevel") || 0;
            c.eachRendered(function (g) {
              return u(g, v, d, -1 / 0), !0;
            });
          }
        }
        function u(h, c, v, d) {
          var g = h.getTextContent(),
            p = h.getTextGuideLine(),
            y = h.isGroup;
          if (y)
            for (var m = h.childrenRef(), _ = 0; _ < m.length; _++)
              d = Math.max(u(m[_], c, v, d), d);
          else (h.z = c), (h.zlevel = v), (d = Math.max(h.z2, d));
          if (
            (g && ((g.z = c), (g.zlevel = v), isFinite(d) && (g.z2 = d + 2)), p)
          ) {
            var S = h.textGuideLineConfig;
            (p.z = c),
              (p.zlevel = v),
              isFinite(d) && (p.z2 = d + (S && S.showAbove ? 1 : -1));
          }
          return d;
        }
        function l(h, c) {
          c.eachRendered(function (v) {
            if (!Xn(v)) {
              var d = v.getTextContent(),
                g = v.getTextGuideLine();
              v.stateTransition && (v.stateTransition = null),
                d && d.stateTransition && (d.stateTransition = null),
                g && g.stateTransition && (g.stateTransition = null),
                v.hasState()
                  ? ((v.prevStates = v.currentStates), v.clearStates())
                  : v.prevStates && (v.prevStates = null);
            }
          });
        }
        function f(h, c) {
          var v = h.getModel("stateAnimation"),
            d = h.isAnimationEnabled(),
            g = v.get("duration"),
            p =
              g > 0
                ? {
                    duration: g,
                    delay: v.get("delay"),
                    easing: v.get("easing"),
                  }
                : null;
          c.eachRendered(function (y) {
            if (y.states && y.states.emphasis) {
              if (Xn(y)) return;
              if ((y instanceof rt && Aw(y), y.__dirty)) {
                var m = y.prevStates;
                m && y.useStates(m);
              }
              if (d) {
                y.stateTransition = p;
                var _ = y.getTextContent(),
                  S = y.getTextGuideLine();
                _ && (_.stateTransition = p), S && (S.stateTransition = p);
              }
              y.__dirty && i(y);
            }
          });
        }
        (Dd = function (h) {
          return new ((function (c) {
            O(v, c);
            function v() {
              return (c !== null && c.apply(this, arguments)) || this;
            }
            return (
              (v.prototype.getCoordinateSystems = function () {
                return h._coordSysMgr.getCoordinateSystems();
              }),
              (v.prototype.getComponentByElement = function (d) {
                for (; d; ) {
                  var g = d.__ecComponentInfo;
                  if (g != null)
                    return h._model.getComponent(g.mainType, g.index);
                  d = d.parent;
                }
              }),
              (v.prototype.enterEmphasis = function (d, g) {
                jn(d, g), te(h);
              }),
              (v.prototype.leaveEmphasis = function (d, g) {
                ti(d, g), te(h);
              }),
              (v.prototype.enterBlur = function (d) {
                mw(d), te(h);
              }),
              (v.prototype.leaveBlur = function (d) {
                wy(d), te(h);
              }),
              (v.prototype.enterSelect = function (d) {
                by(d), te(h);
              }),
              (v.prototype.leaveSelect = function (d) {
                Ty(d), te(h);
              }),
              (v.prototype.getModel = function () {
                return h.getModel();
              }),
              (v.prototype.getViewOfComponentModel = function (d) {
                return h.getViewOfComponentModel(d);
              }),
              (v.prototype.getViewOfSeriesModel = function (d) {
                return h.getViewOfSeriesModel(d);
              }),
              v
            );
          })(Cm))(h);
        }),
          (S0 = function (h) {
            function c(v, d) {
              for (var g = 0; g < v.length; g++) {
                var p = v[g];
                p[Vu] = d;
              }
            }
            C(Ji, function (v, d) {
              h._messageCenter.on(d, function (g) {
                if (Ld[h.group] && h[Vu] !== bd) {
                  if (g && g.escapeConnect) return;
                  var p = h.makeActionFromEvent(g),
                    y = [];
                  C(ji, function (m) {
                    m !== h && m.group === h.group && y.push(m);
                  }),
                    c(y, bd),
                    C(y, function (m) {
                      m[Vu] !== zM && m.dispatchAction(p);
                    }),
                    c(y, GM);
                }
              });
            });
          });
      })()),
      t
    );
  })(ce),
  Dh = x0.prototype;
Dh.on = p0("on");
Dh.off = p0("off");
Dh.one = function (r, t, e) {
  var n = this;
  function i() {
    for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
    t && t.apply && t.apply(this, a), n.off(r, i);
  }
  this.on.call(this, r, i, e);
};
var HM = [
  "click",
  "dblclick",
  "mouseover",
  "mouseout",
  "mousemove",
  "mousedown",
  "mouseup",
  "globalout",
  "contextmenu",
];
var ss = {},
  Ji = {},
  lf = [],
  ff = [],
  us = [],
  w0 = {},
  hf = {},
  ji = {},
  Ld = {},
  VM = +new Date() - 0,
  Ah = "_echarts_instance_";
function $R(r, t, e) {
  var n = !(e && e.ssr);
  if (n) {
    var i = WM(r);
    if (i) return i;
  }
  var a = new x0(r, t, e);
  return (
    (a.id = "ec_" + VM++),
    (ji[a.id] = a),
    n && ey(r, Ah, a.id),
    S0(a),
    _e.trigger("afterinit", a),
    a
  );
}
function WM(r) {
  return ji[ix(r, Ah)];
}
function b0(r, t) {
  w0[r] = t;
}
function T0(r) {
  J(ff, r) < 0 && ff.push(r);
}
function C0(r, t) {
  Ih(lf, r, t, PM);
}
function UM(r) {
  Lh("afterinit", r);
}
function YM(r) {
  Lh("afterupdate", r);
}
function Lh(r, t) {
  _e.on(r, t);
}
function Fe(r, t, e) {
  U(t) && ((e = t), (t = ""));
  var n = H(r) ? r.type : [r, (r = { event: t })][0];
  (r.event = (r.event || n).toLowerCase()),
    (t = r.event),
    !Ji[t] &&
      (ke(wd.test(n) && wd.test(t)),
      ss[n] || (ss[n] = { action: e, actionInfo: r }),
      (Ji[t] = n));
}
function $M(r, t) {
  _h.register(r, t);
}
function ZM(r, t) {
  Ih(us, r, t, v0, "layout");
}
function yn(r, t) {
  Ih(us, r, t, c0, "visual");
}
var Id = [];
function Ih(r, t, e, n, i) {
  if (((U(t) || H(t)) && ((e = t), (t = n)), !(J(Id, e) >= 0))) {
    Id.push(e);
    var a = e0.wrapStageHandler(e, i);
    (a.__prio = t), (a.__raw = e), r.push(a);
  }
}
function M0(r, t) {
  hf[r] = t;
}
function XM(r, t, e) {
  var n = CM("registerMap");
  n && n(r, t, e);
}
var qM = JT;
yn(Mh, MC);
yn(Vs, DC);
yn(Vs, AC);
yn(Mh, WC);
yn(Vs, UC);
yn(d0, wM);
T0(Dm);
C0(LM, PT);
M0("default", LC);
Fe({ type: nn, event: nn, update: nn }, Gt);
Fe({ type: Io, event: Io, update: Io }, Gt);
Fe({ type: Zi, event: Zi, update: Zi }, Gt);
Fe({ type: Po, event: Po, update: Po }, Gt);
Fe({ type: Xi, event: Xi, update: Xi }, Gt);
b0("light", GC);
b0("dark", HC);
function Ci(r) {
  return r == null ? 0 : r.length || 1;
}
function Pd(r) {
  return r;
}
var KM = (function () {
  function r(t, e, n, i, a, o) {
    (this._old = t),
      (this._new = e),
      (this._oldKeyGetter = n || Pd),
      (this._newKeyGetter = i || Pd),
      (this.context = a),
      (this._diffModeMultiple = o === "multiple");
  }
  return (
    (r.prototype.add = function (t) {
      return (this._add = t), this;
    }),
    (r.prototype.update = function (t) {
      return (this._update = t), this;
    }),
    (r.prototype.updateManyToOne = function (t) {
      return (this._updateManyToOne = t), this;
    }),
    (r.prototype.updateOneToMany = function (t) {
      return (this._updateOneToMany = t), this;
    }),
    (r.prototype.updateManyToMany = function (t) {
      return (this._updateManyToMany = t), this;
    }),
    (r.prototype.remove = function (t) {
      return (this._remove = t), this;
    }),
    (r.prototype.execute = function () {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }),
    (r.prototype._executeOneToOne = function () {
      var t = this._old,
        e = this._new,
        n = {},
        i = new Array(t.length),
        a = new Array(e.length);
      this._initIndexMap(t, null, i, "_oldKeyGetter"),
        this._initIndexMap(e, n, a, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var s = i[o],
          u = n[s],
          l = Ci(u);
        if (l > 1) {
          var f = u.shift();
          u.length === 1 && (n[s] = u[0]), this._update && this._update(f, o);
        } else
          l === 1
            ? ((n[s] = null), this._update && this._update(u, o))
            : this._remove && this._remove(o);
      }
      this._performRestAdd(a, n);
    }),
    (r.prototype._executeMultiple = function () {
      var t = this._old,
        e = this._new,
        n = {},
        i = {},
        a = [],
        o = [];
      this._initIndexMap(t, n, a, "_oldKeyGetter"),
        this._initIndexMap(e, i, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var u = a[s],
          l = n[u],
          f = i[u],
          h = Ci(l),
          c = Ci(f);
        if (h > 1 && c === 1)
          this._updateManyToOne && this._updateManyToOne(f, l), (i[u] = null);
        else if (h === 1 && c > 1)
          this._updateOneToMany && this._updateOneToMany(f, l), (i[u] = null);
        else if (h === 1 && c === 1)
          this._update && this._update(f, l), (i[u] = null);
        else if (h > 1 && c > 1)
          this._updateManyToMany && this._updateManyToMany(f, l), (i[u] = null);
        else if (h > 1)
          for (var v = 0; v < h; v++) this._remove && this._remove(l[v]);
        else this._remove && this._remove(l);
      }
      this._performRestAdd(o, i);
    }),
    (r.prototype._performRestAdd = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          a = e[i],
          o = Ci(a);
        if (o > 1) for (var s = 0; s < o; s++) this._add && this._add(a[s]);
        else o === 1 && this._add && this._add(a);
        e[i] = null;
      }
    }),
    (r.prototype._initIndexMap = function (t, e, n, i) {
      for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var s = "_ec_" + this[i](t[o], o);
        if ((a || (n[o] = s), !!e)) {
          var u = e[s],
            l = Ci(u);
          l === 0
            ? ((e[s] = o), a && n.push(s))
            : l === 1
            ? (e[s] = [u, o])
            : u.push(o);
        }
      }
    }),
    r
  );
})();
const ma = KM;
var QM = (function () {
  function r(t, e) {
    (this._encode = t), (this._schema = e);
  }
  return (
    (r.prototype.get = function () {
      return {
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode,
      };
    }),
    (r.prototype._getFullDimensionNames = function () {
      return (
        this._cachedDimNames ||
          (this._cachedDimNames = this._schema
            ? this._schema.makeOutputDimensionNames()
            : []),
        this._cachedDimNames
      );
    }),
    r
  );
})();
function JM(r, t) {
  var e = {},
    n = (e.encode = {}),
    i = W(),
    a = [],
    o = [],
    s = {};
  C(r.dimensions, function (c) {
    var v = r.getDimensionInfo(c),
      d = v.coordDim;
    if (d) {
      var g = v.coordDimIndex;
      (Xu(n, d)[g] = c),
        v.isExtraCoord ||
          (i.set(d, 1),
          tD(v.type) && (a[0] = c),
          (Xu(s, d)[g] = r.getDimensionIndex(v.name))),
        v.defaultTooltip && o.push(c);
    }
    mm.each(function (p, y) {
      var m = Xu(n, y),
        _ = v.otherDims[y];
      _ != null && _ !== !1 && (m[_] = v.name);
    });
  });
  var u = [],
    l = {};
  i.each(function (c, v) {
    var d = n[v];
    (l[v] = d[0]), (u = u.concat(d));
  }),
    (e.dataDimsOnCoord = u),
    (e.dataDimIndicesOnCoord = z(u, function (c) {
      return r.getDimensionInfo(c).storeDimIndex;
    })),
    (e.encodeFirstDimNotExtra = l);
  var f = n.label;
  f && f.length && (a = f.slice());
  var h = n.tooltip;
  return (
    h && h.length ? (o = h.slice()) : o.length || (o = a.slice()),
    (n.defaultedLabel = a),
    (n.defaultedTooltip = o),
    (e.userOutput = new QM(s, t)),
    e
  );
}
function Xu(r, t) {
  return r.hasOwnProperty(t) || (r[t] = []), r[t];
}
function jM(r) {
  return r === "category" ? "ordinal" : r === "time" ? "time" : "float";
}
function tD(r) {
  return !(r === "ordinal" || r === "time");
}
var eD = (function () {
  function r(t) {
    (this.otherDims = {}), t != null && k(this, t);
  }
  return r;
})();
const Bo = eD;
var rD = gt(),
  nD = { float: "f", int: "i", ordinal: "o", number: "n", time: "t" },
  D0 = (function () {
    function r(t) {
      (this.dimensions = t.dimensions),
        (this._dimOmitted = t.dimensionOmitted),
        (this.source = t.source),
        (this._fullDimCount = t.fullDimensionCount),
        this._updateDimOmitted(t.dimensionOmitted);
    }
    return (
      (r.prototype.isDimensionOmitted = function () {
        return this._dimOmitted;
      }),
      (r.prototype._updateDimOmitted = function (t) {
        (this._dimOmitted = t),
          t && (this._dimNameMap || (this._dimNameMap = I0(this.source)));
      }),
      (r.prototype.getSourceDimensionIndex = function (t) {
        return nt(this._dimNameMap.get(t), -1);
      }),
      (r.prototype.getSourceDimension = function (t) {
        var e = this.source.dimensionsDefine;
        if (e) return e[t];
      }),
      (r.prototype.makeStoreSchema = function () {
        for (
          var t = this._fullDimCount,
            e = Lm(this.source),
            n = !P0(t),
            i = "",
            a = [],
            o = 0,
            s = 0;
          o < t;
          o++
        ) {
          var u = void 0,
            l = void 0,
            f = void 0,
            h = this.dimensions[s];
          if (h && h.storeDimIndex === o)
            (u = e ? h.name : null), (l = h.type), (f = h.ordinalMeta), s++;
          else {
            var c = this.getSourceDimension(o);
            c && ((u = e ? c.name : null), (l = c.type));
          }
          a.push({ property: u, type: l, ordinalMeta: f }),
            e &&
              u != null &&
              (!h || !h.isCalculationCoord) &&
              (i += n ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u),
            (i += "$"),
            (i += nD[l] || "f"),
            f && (i += f.uid),
            (i += "$");
        }
        var v = this.source,
          d = [v.seriesLayoutBy, v.startIndex, i].join("$$");
        return { dimensions: a, hash: d };
      }),
      (r.prototype.makeOutputDimensionNames = function () {
        for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
          var i = void 0,
            a = this.dimensions[n];
          if (a && a.storeDimIndex === e)
            a.isCalculationCoord || (i = a.name), n++;
          else {
            var o = this.getSourceDimension(e);
            o && (i = o.name);
          }
          t.push(i);
        }
        return t;
      }),
      (r.prototype.appendCalculationDimension = function (t) {
        this.dimensions.push(t),
          (t.isCalculationCoord = !0),
          this._fullDimCount++,
          this._updateDimOmitted(!0);
      }),
      r
    );
  })();
function A0(r) {
  return r instanceof D0;
}
function L0(r) {
  for (var t = W(), e = 0; e < (r || []).length; e++) {
    var n = r[e],
      i = H(n) ? n.name : n;
    i != null && t.get(i) == null && t.set(i, e);
  }
  return t;
}
function I0(r) {
  var t = rD(r);
  return t.dimNameMap || (t.dimNameMap = L0(r.dimensionsDefine));
}
function P0(r) {
  return r > 30;
}
var Mi = H,
  ar = z,
  iD = typeof Int32Array > "u" ? Array : Int32Array,
  aD = "e\0\0",
  Rd = -1,
  oD = [
    "hasItemOption",
    "_nameList",
    "_idList",
    "_invertedIndicesMap",
    "_dimSummary",
    "userOutput",
    "_rawData",
    "_dimValueGetter",
    "_nameDimIdx",
    "_idDimIdx",
    "_nameRepeatCount",
  ],
  sD = ["_approximateExtent"],
  Ed,
  fo,
  Di,
  Ai,
  qu,
  ho,
  Ku,
  uD = (function () {
    function r(t, e) {
      (this.type = "list"),
        (this._dimOmitted = !1),
        (this._nameList = []),
        (this._idList = []),
        (this._visual = {}),
        (this._layout = {}),
        (this._itemVisuals = []),
        (this._itemLayouts = []),
        (this._graphicEls = []),
        (this._approximateExtent = {}),
        (this._calculationInfo = {}),
        (this.hasItemOption = !1),
        (this.TRANSFERABLE_METHODS = [
          "cloneShallow",
          "downSample",
          "lttbDownSample",
          "map",
        ]),
        (this.CHANGABLE_METHODS = ["filterSelf", "selectRange"]),
        (this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"]);
      var n,
        i = !1;
      A0(t)
        ? ((n = t.dimensions),
          (this._dimOmitted = t.isDimensionOmitted()),
          (this._schema = t))
        : ((i = !0), (n = t)),
        (n = n || ["x", "y"]);
      for (
        var a = {}, o = [], s = {}, u = !1, l = {}, f = 0;
        f < n.length;
        f++
      ) {
        var h = n[f],
          c = G(h) ? new Bo({ name: h }) : h instanceof Bo ? h : new Bo(h),
          v = c.name;
        (c.type = c.type || "float"),
          c.coordDim || ((c.coordDim = v), (c.coordDimIndex = 0));
        var d = (c.otherDims = c.otherDims || {});
        o.push(v),
          (a[v] = c),
          l[v] != null && (u = !0),
          c.createInvertedIndices && (s[v] = []),
          d.itemName === 0 && (this._nameDimIdx = f),
          d.itemId === 0 && (this._idDimIdx = f),
          i && (c.storeDimIndex = f);
      }
      if (
        ((this.dimensions = o),
        (this._dimInfos = a),
        this._initGetDimensionInfo(u),
        (this.hostModel = e),
        (this._invertedIndicesMap = s),
        this._dimOmitted)
      ) {
        var g = (this._dimIdxToName = W());
        C(o, function (p) {
          g.set(a[p].storeDimIndex, p);
        });
      }
    }
    return (
      (r.prototype.getDimension = function (t) {
        var e = this._recognizeDimIndex(t);
        if (e == null) return t;
        if (((e = t), !this._dimOmitted)) return this.dimensions[e];
        var n = this._dimIdxToName.get(e);
        if (n != null) return n;
        var i = this._schema.getSourceDimension(e);
        if (i) return i.name;
      }),
      (r.prototype.getDimensionIndex = function (t) {
        var e = this._recognizeDimIndex(t);
        if (e != null) return e;
        if (t == null) return -1;
        var n = this._getDimInfo(t);
        return n
          ? n.storeDimIndex
          : this._dimOmitted
          ? this._schema.getSourceDimensionIndex(t)
          : -1;
      }),
      (r.prototype._recognizeDimIndex = function (t) {
        if (
          ft(t) ||
          (t != null &&
            !isNaN(t) &&
            !this._getDimInfo(t) &&
            (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        )
          return +t;
      }),
      (r.prototype._getStoreDimIndex = function (t) {
        var e = this.getDimensionIndex(t);
        return e;
      }),
      (r.prototype.getDimensionInfo = function (t) {
        return this._getDimInfo(this.getDimension(t));
      }),
      (r.prototype._initGetDimensionInfo = function (t) {
        var e = this._dimInfos;
        this._getDimInfo = t
          ? function (n) {
              return e.hasOwnProperty(n) ? e[n] : void 0;
            }
          : function (n) {
              return e[n];
            };
      }),
      (r.prototype.getDimensionsOnCoord = function () {
        return this._dimSummary.dataDimsOnCoord.slice();
      }),
      (r.prototype.mapDimension = function (t, e) {
        var n = this._dimSummary;
        if (e == null) return n.encodeFirstDimNotExtra[t];
        var i = n.encode[t];
        return i ? i[e] : null;
      }),
      (r.prototype.mapDimensionsAll = function (t) {
        var e = this._dimSummary,
          n = e.encode[t];
        return (n || []).slice();
      }),
      (r.prototype.getStore = function () {
        return this._store;
      }),
      (r.prototype.initData = function (t, e, n) {
        var i = this,
          a;
        if ((t instanceof ef && (a = t), !a)) {
          var o = this.dimensions,
            s = Sh(t) || Ht(t) ? new Im(t, o.length) : t;
          a = new ef();
          var u = ar(o, function (l) {
            return { type: i._dimInfos[l].type, property: l };
          });
          a.initData(s, u, n);
        }
        (this._store = a),
          (this._nameList = (e || []).slice()),
          (this._idList = []),
          (this._nameRepeatCount = {}),
          this._doInit(0, a.count()),
          (this._dimSummary = JM(this, this._schema)),
          (this.userOutput = this._dimSummary.userOutput);
      }),
      (r.prototype.appendData = function (t) {
        var e = this._store.appendData(t);
        this._doInit(e[0], e[1]);
      }),
      (r.prototype.appendValues = function (t, e) {
        var n = this._store.appendValues(t, e.length),
          i = n.start,
          a = n.end,
          o = this._shouldMakeIdFromName();
        if ((this._updateOrdinalMeta(), e))
          for (var s = i; s < a; s++) {
            var u = s - i;
            (this._nameList[s] = e[u]), o && Ku(this, s);
          }
      }),
      (r.prototype._updateOrdinalMeta = function () {
        for (
          var t = this._store, e = this.dimensions, n = 0;
          n < e.length;
          n++
        ) {
          var i = this._dimInfos[e[n]];
          i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
        }
      }),
      (r.prototype._shouldMakeIdFromName = function () {
        var t = this._store.getProvider();
        return (
          this._idDimIdx == null &&
          t.getSource().sourceFormat !== mr &&
          !t.fillStorage
        );
      }),
      (r.prototype._doInit = function (t, e) {
        if (!(t >= e)) {
          var n = this._store,
            i = n.getProvider();
          this._updateOrdinalMeta();
          var a = this._nameList,
            o = this._idList,
            s = i.getSource().sourceFormat,
            u = s === de;
          if (u && !i.pure)
            for (var l = [], f = t; f < e; f++) {
              var h = i.getItem(f, l);
              if (
                (!this.hasItemOption && YS(h) && (this.hasItemOption = !0), h)
              ) {
                var c = h.name;
                a[f] == null && c != null && (a[f] = Ee(c, null));
                var v = h.id;
                o[f] == null && v != null && (o[f] = Ee(v, null));
              }
            }
          if (this._shouldMakeIdFromName())
            for (var f = t; f < e; f++) Ku(this, f);
          Ed(this);
        }
      }),
      (r.prototype.getApproximateExtent = function (t) {
        return (
          this._approximateExtent[t] ||
          this._store.getDataExtent(this._getStoreDimIndex(t))
        );
      }),
      (r.prototype.setApproximateExtent = function (t, e) {
        (e = this.getDimension(e)), (this._approximateExtent[e] = t.slice());
      }),
      (r.prototype.getCalculationInfo = function (t) {
        return this._calculationInfo[t];
      }),
      (r.prototype.setCalculationInfo = function (t, e) {
        Mi(t) ? k(this._calculationInfo, t) : (this._calculationInfo[t] = e);
      }),
      (r.prototype.getName = function (t) {
        var e = this.getRawIndex(t),
          n = this._nameList[e];
        return (
          n == null &&
            this._nameDimIdx != null &&
            (n = Di(this, this._nameDimIdx, e)),
          n == null && (n = ""),
          n
        );
      }),
      (r.prototype._getCategory = function (t, e) {
        var n = this._store.get(t, e),
          i = this._store.getOrdinalMeta(t);
        return i ? i.categories[n] : n;
      }),
      (r.prototype.getId = function (t) {
        return fo(this, this.getRawIndex(t));
      }),
      (r.prototype.count = function () {
        return this._store.count();
      }),
      (r.prototype.get = function (t, e) {
        var n = this._store,
          i = this._dimInfos[t];
        if (i) return n.get(i.storeDimIndex, e);
      }),
      (r.prototype.getByRawIndex = function (t, e) {
        var n = this._store,
          i = this._dimInfos[t];
        if (i) return n.getByRawIndex(i.storeDimIndex, e);
      }),
      (r.prototype.getIndices = function () {
        return this._store.getIndices();
      }),
      (r.prototype.getDataExtent = function (t) {
        return this._store.getDataExtent(this._getStoreDimIndex(t));
      }),
      (r.prototype.getSum = function (t) {
        return this._store.getSum(this._getStoreDimIndex(t));
      }),
      (r.prototype.getMedian = function (t) {
        return this._store.getMedian(this._getStoreDimIndex(t));
      }),
      (r.prototype.getValues = function (t, e) {
        var n = this,
          i = this._store;
        return N(t)
          ? i.getValues(
              ar(t, function (a) {
                return n._getStoreDimIndex(a);
              }),
              e
            )
          : i.getValues(t);
      }),
      (r.prototype.hasValue = function (t) {
        for (
          var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length;
          n < i;
          n++
        )
          if (isNaN(this._store.get(e[n], t))) return !1;
        return !0;
      }),
      (r.prototype.indexOfName = function (t) {
        for (var e = 0, n = this._store.count(); e < n; e++)
          if (this.getName(e) === t) return e;
        return -1;
      }),
      (r.prototype.getRawIndex = function (t) {
        return this._store.getRawIndex(t);
      }),
      (r.prototype.indexOfRawIndex = function (t) {
        return this._store.indexOfRawIndex(t);
      }),
      (r.prototype.rawIndexOf = function (t, e) {
        var n = t && this._invertedIndicesMap[t],
          i = n[e];
        return i == null || isNaN(i) ? Rd : i;
      }),
      (r.prototype.indicesOfNearest = function (t, e, n) {
        return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
      }),
      (r.prototype.each = function (t, e, n) {
        U(t) && ((n = e), (e = t), (t = []));
        var i = n || this,
          a = ar(Ai(t), this._getStoreDimIndex, this);
        this._store.each(a, i ? Y(e, i) : e);
      }),
      (r.prototype.filterSelf = function (t, e, n) {
        U(t) && ((n = e), (e = t), (t = []));
        var i = n || this,
          a = ar(Ai(t), this._getStoreDimIndex, this);
        return (this._store = this._store.filter(a, i ? Y(e, i) : e)), this;
      }),
      (r.prototype.selectRange = function (t) {
        var e = this,
          n = {},
          i = pt(t);
        return (
          C(i, function (a) {
            var o = e._getStoreDimIndex(a);
            n[o] = t[a];
          }),
          (this._store = this._store.selectRange(n)),
          this
        );
      }),
      (r.prototype.mapArray = function (t, e, n) {
        U(t) && ((n = e), (e = t), (t = [])), (n = n || this);
        var i = [];
        return (
          this.each(
            t,
            function () {
              i.push(e && e.apply(this, arguments));
            },
            n
          ),
          i
        );
      }),
      (r.prototype.map = function (t, e, n, i) {
        var a = n || i || this,
          o = ar(Ai(t), this._getStoreDimIndex, this),
          s = ho(this);
        return (s._store = this._store.map(o, a ? Y(e, a) : e)), s;
      }),
      (r.prototype.modify = function (t, e, n, i) {
        var a = n || i || this,
          o = ar(Ai(t), this._getStoreDimIndex, this);
        this._store.modify(o, a ? Y(e, a) : e);
      }),
      (r.prototype.downSample = function (t, e, n, i) {
        var a = ho(this);
        return (
          (a._store = this._store.downSample(
            this._getStoreDimIndex(t),
            e,
            n,
            i
          )),
          a
        );
      }),
      (r.prototype.lttbDownSample = function (t, e) {
        var n = ho(this);
        return (
          (n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e)),
          n
        );
      }),
      (r.prototype.getRawDataItem = function (t) {
        return this._store.getRawDataItem(t);
      }),
      (r.prototype.getItemModel = function (t) {
        var e = this.hostModel,
          n = this.getRawDataItem(t);
        return new At(n, e, e && e.ecModel);
      }),
      (r.prototype.diff = function (t) {
        var e = this;
        return new ma(
          t ? t.getStore().getIndices() : [],
          this.getStore().getIndices(),
          function (n) {
            return fo(t, n);
          },
          function (n) {
            return fo(e, n);
          }
        );
      }),
      (r.prototype.getVisual = function (t) {
        var e = this._visual;
        return e && e[t];
      }),
      (r.prototype.setVisual = function (t, e) {
        (this._visual = this._visual || {}),
          Mi(t) ? k(this._visual, t) : (this._visual[t] = e);
      }),
      (r.prototype.getItemVisual = function (t, e) {
        var n = this._itemVisuals[t],
          i = n && n[e];
        return i == null ? this.getVisual(e) : i;
      }),
      (r.prototype.hasItemVisual = function () {
        return this._itemVisuals.length > 0;
      }),
      (r.prototype.ensureUniqueItemVisual = function (t, e) {
        var n = this._itemVisuals,
          i = n[t];
        i || (i = n[t] = {});
        var a = i[e];
        return (
          a == null &&
            ((a = this.getVisual(e)),
            N(a) ? (a = a.slice()) : Mi(a) && (a = k({}, a)),
            (i[e] = a)),
          a
        );
      }),
      (r.prototype.setItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t] || {};
        (this._itemVisuals[t] = i), Mi(e) ? k(i, e) : (i[e] = n);
      }),
      (r.prototype.clearAllVisual = function () {
        (this._visual = {}), (this._itemVisuals = []);
      }),
      (r.prototype.setLayout = function (t, e) {
        Mi(t) ? k(this._layout, t) : (this._layout[t] = e);
      }),
      (r.prototype.getLayout = function (t) {
        return this._layout[t];
      }),
      (r.prototype.getItemLayout = function (t) {
        return this._itemLayouts[t];
      }),
      (r.prototype.setItemLayout = function (t, e, n) {
        this._itemLayouts[t] = n ? k(this._itemLayouts[t] || {}, e) : e;
      }),
      (r.prototype.clearItemLayouts = function () {
        this._itemLayouts.length = 0;
      }),
      (r.prototype.setItemGraphicEl = function (t, e) {
        var n = this.hostModel && this.hostModel.seriesIndex;
        uw(n, this.dataType, t, e), (this._graphicEls[t] = e);
      }),
      (r.prototype.getItemGraphicEl = function (t) {
        return this._graphicEls[t];
      }),
      (r.prototype.eachItemGraphicEl = function (t, e) {
        C(this._graphicEls, function (n, i) {
          n && t && t.call(e, n, i);
        });
      }),
      (r.prototype.cloneShallow = function (t) {
        return (
          t ||
            (t = new r(
              this._schema
                ? this._schema
                : ar(this.dimensions, this._getDimInfo, this),
              this.hostModel
            )),
          qu(t, this),
          (t._store = this._store),
          t
        );
      }),
      (r.prototype.wrapMethod = function (t, e) {
        var n = this[t];
        !U(n) ||
          ((this.__wrappedMethods = this.__wrappedMethods || []),
          this.__wrappedMethods.push(t),
          (this[t] = function () {
            var i = n.apply(this, arguments);
            return e.apply(this, [i].concat(Hf(arguments)));
          }));
      }),
      (r.internalField = (function () {
        (Ed = function (t) {
          var e = t._invertedIndicesMap;
          C(e, function (n, i) {
            var a = t._dimInfos[i],
              o = a.ordinalMeta,
              s = t._store;
            if (o) {
              n = e[i] = new iD(o.categories.length);
              for (var u = 0; u < n.length; u++) n[u] = Rd;
              for (var u = 0; u < s.count(); u++)
                n[s.get(a.storeDimIndex, u)] = u;
            }
          });
        }),
          (Di = function (t, e, n) {
            return Ee(t._getCategory(e, n), null);
          }),
          (fo = function (t, e) {
            var n = t._idList[e];
            return (
              n == null && t._idDimIdx != null && (n = Di(t, t._idDimIdx, e)),
              n == null && (n = aD + e),
              n
            );
          }),
          (Ai = function (t) {
            return N(t) || (t = t != null ? [t] : []), t;
          }),
          (ho = function (t) {
            var e = new r(
              t._schema ? t._schema : ar(t.dimensions, t._getDimInfo, t),
              t.hostModel
            );
            return qu(e, t), e;
          }),
          (qu = function (t, e) {
            C(oD.concat(e.__wrappedMethods || []), function (n) {
              e.hasOwnProperty(n) && (t[n] = e[n]);
            }),
              (t.__wrappedMethods = e.__wrappedMethods),
              C(sD, function (n) {
                t[n] = K(e[n]);
              }),
              (t._calculationInfo = k({}, e._calculationInfo));
          }),
          (Ku = function (t, e) {
            var n = t._nameList,
              i = t._idList,
              a = t._nameDimIdx,
              o = t._idDimIdx,
              s = n[e],
              u = i[e];
            if (
              (s == null && a != null && (n[e] = s = Di(t, a, e)),
              u == null && o != null && (i[e] = u = Di(t, o, e)),
              u == null && s != null)
            ) {
              var l = t._nameRepeatCount,
                f = (l[s] = (l[s] || 0) + 1);
              (u = s), f > 1 && (u += "__ec__" + f), (i[e] = u);
            }
          });
      })()),
      r
    );
  })();
const lD = uD;
function fD(r, t) {
  Sh(r) || (r = xh(r)), (t = t || {});
  var e = t.coordDimensions || [],
    n = t.dimensionsDefine || r.dimensionsDefine || [],
    i = W(),
    a = [],
    o = vD(r, e, n, t.dimensionsCount),
    s = t.canOmitUnusedDimensions && P0(o),
    u = n === r.dimensionsDefine,
    l = u ? I0(r) : L0(n),
    f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(r, o));
  for (var h = W(f), c = new Fm(o), v = 0; v < c.length; v++) c[v] = -1;
  function d(M) {
    var D = c[M];
    if (D < 0) {
      var A = n[M],
        L = H(A) ? A : { name: A },
        I = new Bo(),
        P = L.name;
      P != null && l.get(P) != null && (I.name = I.displayName = P),
        L.type != null && (I.type = L.type),
        L.displayName != null && (I.displayName = L.displayName);
      var E = a.length;
      return (c[M] = E), (I.storeDimIndex = M), a.push(I), I;
    }
    return a[D];
  }
  if (!s) for (var v = 0; v < o; v++) d(v);
  h.each(function (M, D) {
    var A = _t(M).slice();
    if (A.length === 1 && !G(A[0]) && A[0] < 0) {
      h.set(D, !1);
      return;
    }
    var L = h.set(D, []);
    C(A, function (I, P) {
      var E = G(I) ? l.get(I) : I;
      E != null && E < o && ((L[P] = E), p(d(E), D, P));
    });
  });
  var g = 0;
  C(e, function (M) {
    var D, A, L, I;
    if (G(M)) (D = M), (I = {});
    else {
      (I = M), (D = I.name);
      var P = I.ordinalMeta;
      (I.ordinalMeta = null),
        (I = k({}, I)),
        (I.ordinalMeta = P),
        (A = I.dimsDef),
        (L = I.otherDims),
        (I.name =
          I.coordDim =
          I.coordDimIndex =
          I.dimsDef =
          I.otherDims =
            null);
    }
    var E = h.get(D);
    if (E !== !1) {
      if (((E = _t(E)), !E.length))
        for (var R = 0; R < ((A && A.length) || 1); R++) {
          for (; g < o && d(g).coordDim != null; ) g++;
          g < o && E.push(g++);
        }
      C(E, function (V, F) {
        var B = d(V);
        if (
          (u && I.type != null && (B.type = I.type),
          p(q(B, I), D, F),
          B.name == null && A)
        ) {
          var $ = A[F];
          !H($) && ($ = { name: $ }),
            (B.name = B.displayName = $.name),
            (B.defaultTooltip = $.defaultTooltip);
        }
        L && q(B.otherDims, L);
      });
    }
  });
  function p(M, D, A) {
    mm.get(D) != null
      ? (M.otherDims[D] = A)
      : ((M.coordDim = D), (M.coordDimIndex = A), i.set(D, !0));
  }
  var y = t.generateCoord,
    m = t.generateCoordCount,
    _ = m != null;
  m = y ? m || 1 : 0;
  var S = y || "value";
  function w(M) {
    M.name == null && (M.name = M.coordDim);
  }
  if (s)
    C(a, function (M) {
      w(M);
    }),
      a.sort(function (M, D) {
        return M.storeDimIndex - D.storeDimIndex;
      });
  else
    for (var x = 0; x < o; x++) {
      var b = d(x),
        T = b.coordDim;
      T == null &&
        ((b.coordDim = cD(S, i, _)),
        (b.coordDimIndex = 0),
        (!y || m <= 0) && (b.isExtraCoord = !0),
        m--),
        w(b),
        b.type == null &&
          (wm(r, x) === qt.Must ||
            (b.isExtraCoord &&
              (b.otherDims.itemName != null ||
                b.otherDims.seriesName != null))) &&
          (b.type = "ordinal");
    }
  return (
    hD(a),
    new D0({
      source: r,
      dimensions: a,
      fullDimensionCount: o,
      dimensionOmitted: s,
    })
  );
}
function hD(r) {
  for (var t = W(), e = 0; e < r.length; e++) {
    var n = r[e],
      i = n.name,
      a = t.get(i) || 0;
    a > 0 && (n.name = i + (a - 1)), a++, t.set(i, a);
  }
}
function vD(r, t, e, n) {
  var i = Math.max(r.dimensionsDetectedCount || 1, t.length, e.length, n || 0);
  return (
    C(t, function (a) {
      var o;
      H(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
    }),
    i
  );
}
function cD(r, t, e) {
  var n = t.data;
  if (e || n.hasOwnProperty(r)) {
    for (var i = 0; n.hasOwnProperty(r + i); ) i++;
    r += i;
  }
  return t.set(r, !0), r;
}
var dD = (function () {
  function r(t) {
    (this.coordSysDims = []),
      (this.axisMap = W()),
      (this.categoryAxisMap = W()),
      (this.coordSysName = t);
  }
  return r;
})();
function pD(r) {
  var t = r.get("coordinateSystem"),
    e = new dD(t),
    n = gD[t];
  if (n) return n(r, e, e.axisMap, e.categoryAxisMap), e;
}
var gD = {
  cartesian2d: function (r, t, e, n) {
    var i = r.getReferringComponents("xAxis", zt).models[0],
      a = r.getReferringComponents("yAxis", zt).models[0];
    (t.coordSysDims = ["x", "y"]),
      e.set("x", i),
      e.set("y", a),
      In(i) && (n.set("x", i), (t.firstCategoryDimIndex = 0)),
      In(a) &&
        (n.set("y", a),
        t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function (r, t, e, n) {
    var i = r.getReferringComponents("singleAxis", zt).models[0];
    (t.coordSysDims = ["single"]),
      e.set("single", i),
      In(i) && (n.set("single", i), (t.firstCategoryDimIndex = 0));
  },
  polar: function (r, t, e, n) {
    var i = r.getReferringComponents("polar", zt).models[0],
      a = i.findAxisModel("radiusAxis"),
      o = i.findAxisModel("angleAxis");
    (t.coordSysDims = ["radius", "angle"]),
      e.set("radius", a),
      e.set("angle", o),
      In(a) && (n.set("radius", a), (t.firstCategoryDimIndex = 0)),
      In(o) &&
        (n.set("angle", o),
        t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function (r, t, e, n) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function (r, t, e, n) {
    var i = r.ecModel,
      a = i.getComponent("parallel", r.get("parallelIndex")),
      o = (t.coordSysDims = a.dimensions.slice());
    C(a.parallelAxisIndex, function (s, u) {
      var l = i.getComponent("parallelAxis", s),
        f = o[u];
      e.set(f, l),
        In(l) &&
          (n.set(f, l),
          t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = u));
    });
  },
};
function In(r) {
  return r.get("type") === "category";
}
function yD(r, t, e) {
  e = e || {};
  var n = e.byIndex,
    i = e.stackedCoordDimension,
    a,
    o,
    s;
  mD(t) ? (a = t) : ((o = t.schema), (a = o.dimensions), (s = t.store));
  var u = !!(r && r.get("stack")),
    l,
    f,
    h,
    c;
  if (
    (C(a, function (m, _) {
      G(m) && (a[_] = m = { name: m }),
        u &&
          !m.isExtraCoord &&
          (!n && !l && m.ordinalMeta && (l = m),
          !f &&
            m.type !== "ordinal" &&
            m.type !== "time" &&
            (!i || i === m.coordDim) &&
            (f = m));
    }),
    f && !n && !l && (n = !0),
    f)
  ) {
    (h = "__\0ecstackresult_" + r.id),
      (c = "__\0ecstackedover_" + r.id),
      l && (l.createInvertedIndices = !0);
    var v = f.coordDim,
      d = f.type,
      g = 0;
    C(a, function (m) {
      m.coordDim === v && g++;
    });
    var p = {
        name: h,
        coordDim: v,
        coordDimIndex: g,
        type: d,
        isExtraCoord: !0,
        isCalculationCoord: !0,
        storeDimIndex: a.length,
      },
      y = {
        name: c,
        coordDim: c,
        coordDimIndex: g + 1,
        type: d,
        isExtraCoord: !0,
        isCalculationCoord: !0,
        storeDimIndex: a.length + 1,
      };
    o
      ? (s &&
          ((p.storeDimIndex = s.ensureCalculationDimension(c, d)),
          (y.storeDimIndex = s.ensureCalculationDimension(h, d))),
        o.appendCalculationDimension(p),
        o.appendCalculationDimension(y))
      : (a.push(p), a.push(y));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: n,
    stackedOverDimension: c,
    stackResultDimension: h,
  };
}
function mD(r) {
  return !A0(r.schema);
}
function _a(r, t) {
  return !!t && t === r.getCalculationInfo("stackedDimension");
}
function _D(r, t) {
  return _a(r, t) ? r.getCalculationInfo("stackResultDimension") : t;
}
function SD(r, t) {
  var e = r.get("coordinateSystem"),
    n = _h.get(e),
    i;
  return (
    t &&
      t.coordSysDims &&
      (i = z(t.coordSysDims, function (a) {
        var o = { name: a },
          s = t.axisMap.get(a);
        if (s) {
          var u = s.get("type");
          o.type = jM(u);
        }
        return o;
      })),
    i ||
      (i = (n &&
        (n.getDimensionsInfo
          ? n.getDimensionsInfo()
          : n.dimensions.slice())) || ["x", "y"]),
    i
  );
}
function xD(r, t, e) {
  var n, i;
  return (
    e &&
      C(r, function (a, o) {
        var s = a.coordDim,
          u = e.categoryAxisMap.get(s);
        u &&
          (n == null && (n = o),
          (a.ordinalMeta = u.getOrdinalMeta()),
          t && (a.createInvertedIndices = !0)),
          a.otherDims.itemName != null && (i = !0);
      }),
    !i && n != null && (r[n].otherDims.itemName = 0),
    n
  );
}
function wD(r, t, e) {
  e = e || {};
  var n = t.getSourceManager(),
    i,
    a = !1;
  r
    ? ((a = !0), (i = xh(r)))
    : ((i = n.getSource()), (a = i.sourceFormat === de));
  var o = pD(t),
    s = SD(t, o),
    u = e.useEncodeDefaulter,
    l = U(u) ? u : u ? ot(nT, s, t) : null,
    f = {
      coordDimensions: s,
      generateCoord: e.generateCoord,
      encodeDefine: t.getEncode(),
      encodeDefaulter: l,
      canOmitUnusedDimensions: !a,
    },
    h = fD(i, f),
    c = xD(h.dimensions, e.createInvertedIndices, o),
    v = a ? null : n.getSharedDataStore(h),
    d = yD(t, { schema: h, store: v }),
    g = new lD(h, t);
  g.setCalculationInfo(d);
  var p =
    c != null && bD(i)
      ? function (y, m, _, S) {
          return S === c ? _ : this.defaultDimValueGetter(y, m, _, S);
        }
      : null;
  return (g.hasItemOption = !1), g.initData(a ? i : v, null, p), g;
}
function bD(r) {
  if (r.sourceFormat === de) {
    var t = TD(r.data || []);
    return !N(Ma(t));
  }
}
function TD(r) {
  for (var t = 0; t < r.length && r[t] == null; ) t++;
  return r[t];
}
var R0 = (function () {
  function r(t) {
    (this._setting = t || {}), (this._extent = [1 / 0, -1 / 0]);
  }
  return (
    (r.prototype.getSetting = function (t) {
      return this._setting[t];
    }),
    (r.prototype.unionExtent = function (t) {
      var e = this._extent;
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
    }),
    (r.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }),
    (r.prototype.getExtent = function () {
      return this._extent.slice();
    }),
    (r.prototype.setExtent = function (t, e) {
      var n = this._extent;
      isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
    }),
    (r.prototype.isInExtentRange = function (t) {
      return this._extent[0] <= t && this._extent[1] >= t;
    }),
    (r.prototype.isBlank = function () {
      return this._isBlank;
    }),
    (r.prototype.setBlank = function (t) {
      this._isBlank = t;
    }),
    r
  );
})();
Ss(R0);
const tr = R0;
var CD = 0,
  MD = (function () {
    function r(t) {
      (this.categories = t.categories || []),
        (this._needCollect = t.needCollect),
        (this._deduplication = t.deduplication),
        (this.uid = ++CD);
    }
    return (
      (r.createByAxisModel = function (t) {
        var e = t.option,
          n = e.data,
          i = n && z(n, DD);
        return new r({
          categories: i,
          needCollect: !i,
          deduplication: e.dedplication !== !1,
        });
      }),
      (r.prototype.getOrdinal = function (t) {
        return this._getOrCreateMap().get(t);
      }),
      (r.prototype.parseAndCollect = function (t) {
        var e,
          n = this._needCollect;
        if (!G(t) && !n) return t;
        if (n && !this._deduplication)
          return (e = this.categories.length), (this.categories[e] = t), e;
        var i = this._getOrCreateMap();
        return (
          (e = i.get(t)),
          e == null &&
            (n
              ? ((e = this.categories.length),
                (this.categories[e] = t),
                i.set(t, e))
              : (e = NaN)),
          e
        );
      }),
      (r.prototype._getOrCreateMap = function () {
        return this._map || (this._map = W(this.categories));
      }),
      r
    );
  })();
function DD(r) {
  return H(r) && r.value != null ? r.value : r + "";
}
const vf = MD;
function cf(r) {
  return r.type === "interval" || r.type === "log";
}
function AD(r, t, e, n) {
  var i = {},
    a = r[1] - r[0],
    o = (i.interval = qg(a / t, !0));
  e != null && o < e && (o = i.interval = e),
    n != null && o > n && (o = i.interval = n);
  var s = (i.intervalPrecision = E0(o)),
    u = (i.niceTickExtent = [
      wt(Math.ceil(r[0] / o) * o, s),
      wt(Math.floor(r[1] / o) * o, s),
    ]);
  return LD(u, r), i;
}
function Qu(r) {
  var t = Math.pow(10, Xf(r)),
    e = r / t;
  return (
    e ? (e === 2 ? (e = 3) : e === 3 ? (e = 5) : (e *= 2)) : (e = 1), wt(e * t)
  );
}
function E0(r) {
  return Ue(r) + 2;
}
function Od(r, t, e) {
  r[t] = Math.max(Math.min(r[t], e[1]), e[0]);
}
function LD(r, t) {
  !isFinite(r[0]) && (r[0] = t[0]),
    !isFinite(r[1]) && (r[1] = t[1]),
    Od(r, 0, t),
    Od(r, 1, t),
    r[0] > r[1] && (r[0] = r[1]);
}
function Ws(r, t) {
  return r >= t[0] && r <= t[1];
}
function Us(r, t) {
  return t[1] === t[0] ? 0.5 : (r - t[0]) / (t[1] - t[0]);
}
function Ys(r, t) {
  return r * (t[1] - t[0]) + t[0];
}
var O0 = (function (r) {
  O(t, r);
  function t(e) {
    var n = r.call(this, e) || this;
    n.type = "ordinal";
    var i = n.getSetting("ordinalMeta");
    return (
      i || (i = new vf({})),
      N(i) &&
        (i = new vf({
          categories: z(i, function (a) {
            return H(a) ? a.value : a;
          }),
        })),
      (n._ordinalMeta = i),
      (n._extent = n.getSetting("extent") || [0, i.categories.length - 1]),
      n
    );
  }
  return (
    (t.prototype.parse = function (e) {
      return e == null
        ? NaN
        : G(e)
        ? this._ordinalMeta.getOrdinal(e)
        : Math.round(e);
    }),
    (t.prototype.contain = function (e) {
      return (
        (e = this.parse(e)),
        Ws(e, this._extent) && this._ordinalMeta.categories[e] != null
      );
    }),
    (t.prototype.normalize = function (e) {
      return (e = this._getTickNumber(this.parse(e))), Us(e, this._extent);
    }),
    (t.prototype.scale = function (e) {
      return (e = Math.round(Ys(e, this._extent))), this.getRawOrdinalNumber(e);
    }),
    (t.prototype.getTicks = function () {
      for (var e = [], n = this._extent, i = n[0]; i <= n[1]; )
        e.push({ value: i }), i++;
      return e;
    }),
    (t.prototype.getMinorTicks = function (e) {}),
    (t.prototype.setSortInfo = function (e) {
      if (e == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (
        var n = e.ordinalNumbers,
          i = (this._ordinalNumbersByTick = []),
          a = (this._ticksByOrdinalNumber = []),
          o = 0,
          s = this._ordinalMeta.categories.length,
          u = Math.min(s, n.length);
        o < u;
        ++o
      ) {
        var l = n[o];
        (i[o] = l), (a[l] = o);
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; ) f++;
        i.push(f), (a[f] = o);
      }
    }),
    (t.prototype._getTickNumber = function (e) {
      var n = this._ticksByOrdinalNumber;
      return n && e >= 0 && e < n.length ? n[e] : e;
    }),
    (t.prototype.getRawOrdinalNumber = function (e) {
      var n = this._ordinalNumbersByTick;
      return n && e >= 0 && e < n.length ? n[e] : e;
    }),
    (t.prototype.getLabel = function (e) {
      if (!this.isBlank()) {
        var n = this.getRawOrdinalNumber(e.value),
          i = this._ordinalMeta.categories[n];
        return i == null ? "" : i + "";
      }
    }),
    (t.prototype.count = function () {
      return this._extent[1] - this._extent[0] + 1;
    }),
    (t.prototype.unionExtentFromData = function (e, n) {
      this.unionExtent(e.getApproximateExtent(n));
    }),
    (t.prototype.isInExtentRange = function (e) {
      return (
        (e = this._getTickNumber(e)),
        this._extent[0] <= e && this._extent[1] >= e
      );
    }),
    (t.prototype.getOrdinalMeta = function () {
      return this._ordinalMeta;
    }),
    (t.prototype.calcNiceTicks = function () {}),
    (t.prototype.calcNiceExtent = function () {}),
    (t.type = "ordinal"),
    t
  );
})(tr);
tr.registerClass(O0);
const k0 = O0;
var $r = wt,
  B0 = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = "interval"), (e._interval = 0), (e._intervalPrecision = 2), e
      );
    }
    return (
      (t.prototype.parse = function (e) {
        return e;
      }),
      (t.prototype.contain = function (e) {
        return Ws(e, this._extent);
      }),
      (t.prototype.normalize = function (e) {
        return Us(e, this._extent);
      }),
      (t.prototype.scale = function (e) {
        return Ys(e, this._extent);
      }),
      (t.prototype.setExtent = function (e, n) {
        var i = this._extent;
        isNaN(e) || (i[0] = parseFloat(e)), isNaN(n) || (i[1] = parseFloat(n));
      }),
      (t.prototype.unionExtent = function (e) {
        var n = this._extent;
        e[0] < n[0] && (n[0] = e[0]),
          e[1] > n[1] && (n[1] = e[1]),
          this.setExtent(n[0], n[1]);
      }),
      (t.prototype.getInterval = function () {
        return this._interval;
      }),
      (t.prototype.setInterval = function (e) {
        (this._interval = e),
          (this._niceExtent = this._extent.slice()),
          (this._intervalPrecision = E0(e));
      }),
      (t.prototype.getTicks = function (e) {
        var n = this._interval,
          i = this._extent,
          a = this._niceExtent,
          o = this._intervalPrecision,
          s = [];
        if (!n) return s;
        var u = 1e4;
        i[0] < a[0] &&
          (e ? s.push({ value: $r(a[0] - n, o) }) : s.push({ value: i[0] }));
        for (
          var l = a[0];
          l <= a[1] &&
          (s.push({ value: l }),
          (l = $r(l + n, o)),
          l !== s[s.length - 1].value);

        )
          if (s.length > u) return [];
        var f = s.length ? s[s.length - 1].value : a[1];
        return (
          i[1] > f &&
            (e ? s.push({ value: $r(f + n, o) }) : s.push({ value: i[1] })),
          s
        );
      }),
      (t.prototype.getMinorTicks = function (e) {
        for (
          var n = this.getTicks(!0), i = [], a = this.getExtent(), o = 1;
          o < n.length;
          o++
        ) {
          for (
            var s = n[o],
              u = n[o - 1],
              l = 0,
              f = [],
              h = s.value - u.value,
              c = h / e;
            l < e - 1;

          ) {
            var v = $r(u.value + (l + 1) * c);
            v > a[0] && v < a[1] && f.push(v), l++;
          }
          i.push(f);
        }
        return i;
      }),
      (t.prototype.getLabel = function (e, n) {
        if (e == null) return "";
        var i = n && n.precision;
        i == null
          ? (i = Ue(e.value) || 0)
          : i === "auto" && (i = this._intervalPrecision);
        var a = $r(e.value, i, !0);
        return dm(a);
      }),
      (t.prototype.calcNiceTicks = function (e, n, i) {
        e = e || 5;
        var a = this._extent,
          o = a[1] - a[0];
        if (!!isFinite(o)) {
          o < 0 && ((o = -o), a.reverse());
          var s = AD(a, e, n, i);
          (this._intervalPrecision = s.intervalPrecision),
            (this._interval = s.interval),
            (this._niceExtent = s.niceTickExtent);
        }
      }),
      (t.prototype.calcNiceExtent = function (e) {
        var n = this._extent;
        if (n[0] === n[1])
          if (n[0] !== 0) {
            var i = n[0];
            e.fixMax || (n[1] += i / 2), (n[0] -= i / 2);
          } else n[1] = 1;
        var a = n[1] - n[0];
        isFinite(a) || ((n[0] = 0), (n[1] = 1)),
          this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
        var o = this._interval;
        e.fixMin || (n[0] = $r(Math.floor(n[0] / o) * o)),
          e.fixMax || (n[1] = $r(Math.ceil(n[1] / o) * o));
      }),
      (t.prototype.setNiceExtent = function (e, n) {
        this._niceExtent = [e, n];
      }),
      (t.type = "interval"),
      t
    );
  })(tr);
tr.registerClass(B0);
const Ra = B0;
var N0 = typeof Float32Array < "u",
  ID = N0 ? Float32Array : Array;
function Vn(r) {
  return N(r) ? (N0 ? new Float32Array(r) : r) : new ID(r);
}
var PD = "__ec_stack_";
function F0(r) {
  return r.get("stack") || PD + r.seriesIndex;
}
function z0(r) {
  return r.dim + r.index;
}
function RD(r, t) {
  var e = [];
  return (
    t.eachSeriesByType(r, function (n) {
      ND(n) && e.push(n);
    }),
    e
  );
}
function ED(r) {
  var t = {};
  C(r, function (u) {
    var l = u.coordinateSystem,
      f = l.getBaseAxis();
    if (!(f.type !== "time" && f.type !== "value"))
      for (
        var h = u.getData(),
          c = f.dim + "_" + f.index,
          v = h.getDimensionIndex(h.mapDimension(f.dim)),
          d = h.getStore(),
          g = 0,
          p = d.count();
        g < p;
        ++g
      ) {
        var y = d.get(v, g);
        t[c] ? t[c].push(y) : (t[c] = [y]);
      }
  });
  var e = {};
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = t[n];
      if (i) {
        i.sort(function (u, l) {
          return u - l;
        });
        for (var a = null, o = 1; o < i.length; ++o) {
          var s = i[o] - i[o - 1];
          s > 0 && (a = a === null ? s : Math.min(a, s));
        }
        e[n] = a;
      }
    }
  return e;
}
function OD(r) {
  var t = ED(r),
    e = [];
  return (
    C(r, function (n) {
      var i = n.coordinateSystem,
        a = i.getBaseAxis(),
        o = a.getExtent(),
        s;
      if (a.type === "category") s = a.getBandWidth();
      else if (a.type === "value" || a.type === "time") {
        var u = a.dim + "_" + a.index,
          l = t[u],
          f = Math.abs(o[1] - o[0]),
          h = a.scale.getExtent(),
          c = Math.abs(h[1] - h[0]);
        s = l ? (f / c) * l : f;
      } else {
        var v = n.getData();
        s = Math.abs(o[1] - o[0]) / v.count();
      }
      var d = Ct(n.get("barWidth"), s),
        g = Ct(n.get("barMaxWidth"), s),
        p = Ct(n.get("barMinWidth") || (FD(n) ? 0.5 : 1), s),
        y = n.get("barGap"),
        m = n.get("barCategoryGap");
      e.push({
        bandWidth: s,
        barWidth: d,
        barMaxWidth: g,
        barMinWidth: p,
        barGap: y,
        barCategoryGap: m,
        axisKey: z0(a),
        stackId: F0(n),
      });
    }),
    kD(e)
  );
}
function kD(r) {
  var t = {};
  C(r, function (n, i) {
    var a = n.axisKey,
      o = n.bandWidth,
      s = t[a] || {
        bandWidth: o,
        remainedWidth: o,
        autoWidthCount: 0,
        categoryGap: null,
        gap: "20%",
        stacks: {},
      },
      u = s.stacks;
    t[a] = s;
    var l = n.stackId;
    u[l] || s.autoWidthCount++, (u[l] = u[l] || { width: 0, maxWidth: 0 });
    var f = n.barWidth;
    f &&
      !u[l].width &&
      ((u[l].width = f),
      (f = Math.min(s.remainedWidth, f)),
      (s.remainedWidth -= f));
    var h = n.barMaxWidth;
    h && (u[l].maxWidth = h);
    var c = n.barMinWidth;
    c && (u[l].minWidth = c);
    var v = n.barGap;
    v != null && (s.gap = v);
    var d = n.barCategoryGap;
    d != null && (s.categoryGap = d);
  });
  var e = {};
  return (
    C(t, function (n, i) {
      e[i] = {};
      var a = n.stacks,
        o = n.bandWidth,
        s = n.categoryGap;
      if (s == null) {
        var u = pt(a).length;
        s = Math.max(35 - u * 4, 15) + "%";
      }
      var l = Ct(s, o),
        f = Ct(n.gap, 1),
        h = n.remainedWidth,
        c = n.autoWidthCount,
        v = (h - l) / (c + (c - 1) * f);
      (v = Math.max(v, 0)),
        C(a, function (y) {
          var m = y.maxWidth,
            _ = y.minWidth;
          if (y.width) {
            var S = y.width;
            m && (S = Math.min(S, m)),
              _ && (S = Math.max(S, _)),
              (y.width = S),
              (h -= S + f * S),
              c--;
          } else {
            var S = v;
            m && m < S && (S = Math.min(m, h)),
              _ && _ > S && (S = _),
              S !== v && ((y.width = S), (h -= S + f * S), c--);
          }
        }),
        (v = (h - l) / (c + (c - 1) * f)),
        (v = Math.max(v, 0));
      var d = 0,
        g;
      C(a, function (y, m) {
        y.width || (y.width = v), (g = y), (d += y.width * (1 + f));
      }),
        g && (d -= g.width * f);
      var p = -d / 2;
      C(a, function (y, m) {
        (e[i][m] = e[i][m] || { bandWidth: o, offset: p, width: y.width }),
          (p += y.width * (1 + f));
      });
    }),
    e
  );
}
function BD(r, t, e) {
  if (r && t) {
    var n = r[z0(t)];
    return n != null && e != null ? n[F0(e)] : n;
  }
}
function ND(r) {
  return r.coordinateSystem && r.coordinateSystem.type === "cartesian2d";
}
function FD(r) {
  return r.pipelineContext && r.pipelineContext.large;
}
var zD = function (r, t, e, n) {
    for (; e < n; ) {
      var i = (e + n) >>> 1;
      r[i][1] < t ? (e = i + 1) : (n = i);
    }
    return e;
  },
  G0 = (function (r) {
    O(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return (n.type = "time"), n;
    }
    return (
      (t.prototype.getLabel = function (e) {
        var n = this.getSetting("useUTC");
        return Rs(
          e.value,
          bc[Ub(qn(this._minLevelUnit))] || bc.second,
          n,
          this.getSetting("locale")
        );
      }),
      (t.prototype.getFormattedLabel = function (e, n, i) {
        var a = this.getSetting("useUTC"),
          o = this.getSetting("locale");
        return Yb(e, n, i, o, a);
      }),
      (t.prototype.getTicks = function () {
        var e = this._interval,
          n = this._extent,
          i = [];
        if (!e) return i;
        i.push({ value: n[0], level: 0 });
        var a = this.getSetting("useUTC"),
          o = $D(this._minLevelUnit, this._approxInterval, a, n);
        return (i = i.concat(o)), i.push({ value: n[1], level: 0 }), i;
      }),
      (t.prototype.calcNiceExtent = function (e) {
        var n = this._extent;
        if (
          (n[0] === n[1] && ((n[0] -= le), (n[1] += le)),
          n[1] === -1 / 0 && n[0] === 1 / 0)
        ) {
          var i = new Date();
          (n[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate())),
            (n[0] = n[1] - le);
        }
        this.calcNiceTicks(e.splitNumber, e.minInterval, e.maxInterval);
      }),
      (t.prototype.calcNiceTicks = function (e, n, i) {
        e = e || 10;
        var a = this._extent,
          o = a[1] - a[0];
        (this._approxInterval = o / e),
          n != null && this._approxInterval < n && (this._approxInterval = n),
          i != null && this._approxInterval > i && (this._approxInterval = i);
        var s = vo.length,
          u = Math.min(zD(vo, this._approxInterval, 0, s), s - 1);
        (this._interval = vo[u][1]),
          (this._minLevelUnit = vo[Math.max(u - 1, 0)][0]);
      }),
      (t.prototype.parse = function (e) {
        return ft(e) ? e : +Xe(e);
      }),
      (t.prototype.contain = function (e) {
        return Ws(this.parse(e), this._extent);
      }),
      (t.prototype.normalize = function (e) {
        return Us(this.parse(e), this._extent);
      }),
      (t.prototype.scale = function (e) {
        return Ys(e, this._extent);
      }),
      (t.type = "time"),
      t
    );
  })(Ra),
  vo = [
    ["second", dh],
    ["minute", ph],
    ["hour", Ki],
    ["quarter-day", Ki * 6],
    ["half-day", Ki * 12],
    ["day", le * 1.2],
    ["half-week", le * 3.5],
    ["week", le * 7],
    ["month", le * 31],
    ["quarter", le * 95],
    ["half-year", wc / 2],
    ["year", wc],
  ];
function GD(r, t, e, n) {
  var i = Xe(t),
    a = Xe(e),
    o = function (d) {
      return Tc(i, d, n) === Tc(a, d, n);
    },
    s = function () {
      return o("year");
    },
    u = function () {
      return s() && o("month");
    },
    l = function () {
      return u() && o("day");
    },
    f = function () {
      return l() && o("hour");
    },
    h = function () {
      return f() && o("minute");
    },
    c = function () {
      return h() && o("second");
    },
    v = function () {
      return c() && o("millisecond");
    };
  switch (r) {
    case "year":
      return s();
    case "month":
      return u();
    case "day":
      return l();
    case "hour":
      return f();
    case "minute":
      return h();
    case "second":
      return c();
    case "millisecond":
      return v();
  }
}
function HD(r, t) {
  return (r /= le), r > 16 ? 16 : r > 7.5 ? 7 : r > 3.5 ? 4 : r > 1.5 ? 2 : 1;
}
function VD(r) {
  var t = 30 * le;
  return (r /= t), r > 6 ? 6 : r > 3 ? 3 : r > 2 ? 2 : 1;
}
function WD(r) {
  return (r /= Ki), r > 12 ? 12 : r > 6 ? 6 : r > 3.5 ? 4 : r > 2 ? 2 : 1;
}
function kd(r, t) {
  return (
    (r /= t ? ph : dh),
    r > 30
      ? 30
      : r > 20
      ? 20
      : r > 15
      ? 15
      : r > 10
      ? 10
      : r > 5
      ? 5
      : r > 2
      ? 2
      : 1
  );
}
function UD(r) {
  return qg(r, !0);
}
function YD(r, t, e) {
  var n = new Date(r);
  switch (qn(t)) {
    case "year":
    case "month":
      n[um(e)](0);
    case "day":
      n[lm(e)](1);
    case "hour":
      n[fm(e)](0);
    case "minute":
      n[hm(e)](0);
    case "second":
      n[vm(e)](0), n[cm(e)](0);
  }
  return n.getTime();
}
function $D(r, t, e, n) {
  var i = 1e4,
    a = om,
    o = 0;
  function s(D, A, L, I, P, E, R) {
    for (var V = new Date(A), F = A, B = V[I](); F < L && F <= n[1]; )
      R.push({ value: F }), (B += D), V[P](B), (F = V.getTime());
    R.push({ value: F, notAdd: !0 });
  }
  function u(D, A, L) {
    var I = [],
      P = !A.length;
    if (!GD(qn(D), n[0], n[1], e)) {
      P && (A = [{ value: YD(new Date(n[0]), D, e) }, { value: n[1] }]);
      for (var E = 0; E < A.length - 1; E++) {
        var R = A[E].value,
          V = A[E + 1].value;
        if (R !== V) {
          var F = void 0,
            B = void 0,
            $ = void 0,
            it = !1;
          switch (D) {
            case "year":
              (F = Math.max(1, Math.round(t / le / 365))),
                (B = gh(e)),
                ($ = $b(e));
              break;
            case "half-year":
            case "quarter":
            case "month":
              (F = VD(t)), (B = Kn(e)), ($ = um(e));
              break;
            case "week":
            case "half-week":
            case "day":
              (F = HD(t)), (B = Es(e)), ($ = lm(e)), (it = !0);
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              (F = WD(t)), (B = ha(e)), ($ = fm(e));
              break;
            case "minute":
              (F = kd(t, !0)), (B = Os(e)), ($ = hm(e));
              break;
            case "second":
              (F = kd(t, !1)), (B = ks(e)), ($ = vm(e));
              break;
            case "millisecond":
              (F = UD(t)), (B = Bs(e)), ($ = cm(e));
              break;
          }
          s(F, R, V, B, $, it, I),
            D === "year" &&
              L.length > 1 &&
              E === 0 &&
              L.unshift({ value: L[0].value - F });
        }
      }
      for (var E = 0; E < I.length; E++) L.push(I[E]);
      return I;
    }
  }
  for (var l = [], f = [], h = 0, c = 0, v = 0; v < a.length && o++ < i; ++v) {
    var d = qn(a[v]);
    if (!!Wb(a[v])) {
      u(a[v], l[l.length - 1] || [], f);
      var g = a[v + 1] ? qn(a[v + 1]) : null;
      if (d !== g) {
        if (f.length) {
          (c = h),
            f.sort(function (D, A) {
              return D.value - A.value;
            });
          for (var p = [], y = 0; y < f.length; ++y) {
            var m = f[y].value;
            (y === 0 || f[y - 1].value !== m) &&
              (p.push(f[y]), m >= n[0] && m <= n[1] && h++);
          }
          var _ = (n[1] - n[0]) / t;
          if ((h > _ * 1.5 && c > _ / 1.5) || (l.push(p), h > _ || r === a[v]))
            break;
        }
        f = [];
      }
    }
  }
  for (
    var S = xt(
        z(l, function (D) {
          return xt(D, function (A) {
            return A.value >= n[0] && A.value <= n[1] && !A.notAdd;
          });
        }),
        function (D) {
          return D.length > 0;
        }
      ),
      w = [],
      x = S.length - 1,
      v = 0;
    v < S.length;
    ++v
  )
    for (var b = S[v], T = 0; T < b.length; ++T)
      w.push({ value: b[T].value, level: x - v });
  w.sort(function (D, A) {
    return D.value - A.value;
  });
  for (var M = [], v = 0; v < w.length; ++v)
    (v === 0 || w[v].value !== w[v - 1].value) && M.push(w[v]);
  return M;
}
tr.registerClass(G0);
const ZD = G0;
var Bd = tr.prototype,
  ta = Ra.prototype,
  XD = wt,
  qD = Math.floor,
  KD = Math.ceil,
  co = Math.pow,
  ee = Math.log,
  Ph = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = "log"),
        (e.base = 10),
        (e._originalScale = new Ra()),
        (e._interval = 0),
        e
      );
    }
    return (
      (t.prototype.getTicks = function (e) {
        var n = this._originalScale,
          i = this._extent,
          a = n.getExtent(),
          o = ta.getTicks.call(this, e);
        return z(
          o,
          function (s) {
            var u = s.value,
              l = wt(co(this.base, u));
            return (
              (l = u === i[0] && this._fixMin ? po(l, a[0]) : l),
              (l = u === i[1] && this._fixMax ? po(l, a[1]) : l),
              { value: l }
            );
          },
          this
        );
      }),
      (t.prototype.setExtent = function (e, n) {
        var i = this.base;
        (e = ee(e) / ee(i)), (n = ee(n) / ee(i)), ta.setExtent.call(this, e, n);
      }),
      (t.prototype.getExtent = function () {
        var e = this.base,
          n = Bd.getExtent.call(this);
        (n[0] = co(e, n[0])), (n[1] = co(e, n[1]));
        var i = this._originalScale,
          a = i.getExtent();
        return (
          this._fixMin && (n[0] = po(n[0], a[0])),
          this._fixMax && (n[1] = po(n[1], a[1])),
          n
        );
      }),
      (t.prototype.unionExtent = function (e) {
        this._originalScale.unionExtent(e);
        var n = this.base;
        (e[0] = ee(e[0]) / ee(n)),
          (e[1] = ee(e[1]) / ee(n)),
          Bd.unionExtent.call(this, e);
      }),
      (t.prototype.unionExtentFromData = function (e, n) {
        this.unionExtent(e.getApproximateExtent(n));
      }),
      (t.prototype.calcNiceTicks = function (e) {
        e = e || 10;
        var n = this._extent,
          i = n[1] - n[0];
        if (!(i === 1 / 0 || i <= 0)) {
          var a = WS(i),
            o = (e / i) * a;
          for (
            o <= 0.5 && (a *= 10);
            !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0;

          )
            a *= 10;
          var s = [wt(KD(n[0] / a) * a), wt(qD(n[1] / a) * a)];
          (this._interval = a), (this._niceExtent = s);
        }
      }),
      (t.prototype.calcNiceExtent = function (e) {
        ta.calcNiceExtent.call(this, e),
          (this._fixMin = e.fixMin),
          (this._fixMax = e.fixMax);
      }),
      (t.prototype.parse = function (e) {
        return e;
      }),
      (t.prototype.contain = function (e) {
        return (e = ee(e) / ee(this.base)), Ws(e, this._extent);
      }),
      (t.prototype.normalize = function (e) {
        return (e = ee(e) / ee(this.base)), Us(e, this._extent);
      }),
      (t.prototype.scale = function (e) {
        return (e = Ys(e, this._extent)), co(this.base, e);
      }),
      (t.type = "log"),
      t
    );
  })(tr),
  H0 = Ph.prototype;
H0.getMinorTicks = ta.getMinorTicks;
H0.getLabel = ta.getLabel;
function po(r, t) {
  return XD(r, Ue(t));
}
tr.registerClass(Ph);
const QD = Ph;
var JD = (function () {
    function r(t, e, n) {
      this._prepareParams(t, e, n);
    }
    return (
      (r.prototype._prepareParams = function (t, e, n) {
        n[1] < n[0] && (n = [NaN, NaN]),
          (this._dataMin = n[0]),
          (this._dataMax = n[1]);
        var i = (this._isOrdinal = t.type === "ordinal");
        this._needCrossZero =
          t.type === "interval" && e.getNeedCrossZero && e.getNeedCrossZero();
        var a = (this._modelMinRaw = e.get("min", !0));
        U(a)
          ? (this._modelMinNum = go(t, a({ min: n[0], max: n[1] })))
          : a !== "dataMin" && (this._modelMinNum = go(t, a));
        var o = (this._modelMaxRaw = e.get("max", !0));
        if (
          (U(o)
            ? (this._modelMaxNum = go(t, o({ min: n[0], max: n[1] })))
            : o !== "dataMax" && (this._modelMaxNum = go(t, o)),
          i)
        )
          this._axisDataLen = e.getCategories().length;
        else {
          var s = e.get("boundaryGap"),
            u = N(s) ? s : [s || 0, s || 0];
          typeof u[0] == "boolean" || typeof u[1] == "boolean"
            ? (this._boundaryGapInner = [0, 0])
            : (this._boundaryGapInner = [un(u[0], 1), un(u[1], 1)]);
        }
      }),
      (r.prototype.calculate = function () {
        var t = this._isOrdinal,
          e = this._dataMin,
          n = this._dataMax,
          i = this._axisDataLen,
          a = this._boundaryGapInner,
          o = t ? null : n - e || Math.abs(e),
          s = this._modelMinRaw === "dataMin" ? e : this._modelMinNum,
          u = this._modelMaxRaw === "dataMax" ? n : this._modelMaxNum,
          l = s != null,
          f = u != null;
        s == null && (s = t ? (i ? 0 : NaN) : e - a[0] * o),
          u == null && (u = t ? (i ? i - 1 : NaN) : n + a[1] * o),
          (s == null || !isFinite(s)) && (s = NaN),
          (u == null || !isFinite(u)) && (u = NaN);
        var h = zo(s) || zo(u) || (t && !i);
        this._needCrossZero &&
          (s > 0 && u > 0 && !l && (s = 0), s < 0 && u < 0 && !f && (u = 0));
        var c = this._determinedMin,
          v = this._determinedMax;
        return (
          c != null && ((s = c), (l = !0)),
          v != null && ((u = v), (f = !0)),
          { min: s, max: u, minFixed: l, maxFixed: f, isBlank: h }
        );
      }),
      (r.prototype.modifyDataMinMax = function (t, e) {
        this[tA[t]] = e;
      }),
      (r.prototype.setDeterminedMinMax = function (t, e) {
        var n = jD[t];
        this[n] = e;
      }),
      (r.prototype.freeze = function () {
        this.frozen = !0;
      }),
      r
    );
  })(),
  jD = { min: "_determinedMin", max: "_determinedMax" },
  tA = { min: "_dataMin", max: "_dataMax" };
function V0(r, t, e) {
  var n = r.rawExtentInfo;
  return n || ((n = new JD(r, t, e)), (r.rawExtentInfo = n), n);
}
function go(r, t) {
  return t == null ? null : zo(t) ? NaN : r.parse(t);
}
function W0(r, t) {
  var e = r.type,
    n = V0(r, t, r.getExtent()).calculate();
  r.setBlank(n.isBlank);
  var i = n.min,
    a = n.max,
    o = t.ecModel;
  if (o && e === "time") {
    var s = RD("bar", o),
      u = !1;
    if (
      (C(s, function (h) {
        u = u || h.getBaseAxis() === t.axis;
      }),
      u)
    ) {
      var l = OD(s),
        f = eA(i, a, t, l);
      (i = f.min), (a = f.max);
    }
  }
  return { extent: [i, a], fixMin: n.minFixed, fixMax: n.maxFixed };
}
function eA(r, t, e, n) {
  var i = e.axis.getExtent(),
    a = i[1] - i[0],
    o = BD(n, e.axis);
  if (o === void 0) return { min: r, max: t };
  var s = 1 / 0;
  C(o, function (v) {
    s = Math.min(v.offset, s);
  });
  var u = -1 / 0;
  C(o, function (v) {
    u = Math.max(v.offset + v.width, u);
  }),
    (s = Math.abs(s)),
    (u = Math.abs(u));
  var l = s + u,
    f = t - r,
    h = 1 - (s + u) / a,
    c = f / h - f;
  return (t += c * (u / l)), (r -= c * (s / l)), { min: r, max: t };
}
function Nd(r, t) {
  var e = t,
    n = W0(r, e),
    i = n.extent,
    a = e.get("splitNumber");
  r instanceof QD && (r.base = e.get("logBase"));
  var o = r.type,
    s = e.get("interval"),
    u = o === "interval" || o === "time";
  r.setExtent(i[0], i[1]),
    r.calcNiceExtent({
      splitNumber: a,
      fixMin: n.fixMin,
      fixMax: n.fixMax,
      minInterval: u ? e.get("minInterval") : null,
      maxInterval: u ? e.get("maxInterval") : null,
    }),
    s != null && r.setInterval && r.setInterval(s);
}
function rA(r, t) {
  if (((t = t || r.get("type")), t))
    switch (t) {
      case "category":
        return new k0({
          ordinalMeta: r.getOrdinalMeta
            ? r.getOrdinalMeta()
            : r.getCategories(),
          extent: [1 / 0, -1 / 0],
        });
      case "time":
        return new ZD({
          locale: r.ecModel.getLocaleModel(),
          useUTC: r.ecModel.get("useUTC"),
        });
      default:
        return new (tr.getClass(t) || Ra)();
    }
}
function nA(r) {
  var t = r.scale.getExtent(),
    e = t[0],
    n = t[1];
  return !((e > 0 && n > 0) || (e < 0 && n < 0));
}
function Ea(r) {
  var t = r.getLabelModel().get("formatter"),
    e = r.type === "category" ? r.scale.getExtent()[0] : null;
  return r.scale.type === "time"
    ? (function (n) {
        return function (i, a) {
          return r.scale.getFormattedLabel(i, a, n);
        };
      })(t)
    : G(t)
    ? (function (n) {
        return function (i) {
          var a = r.scale.getLabel(i),
            o = n.replace("{value}", a != null ? a : "");
          return o;
        };
      })(t)
    : U(t)
    ? (function (n) {
        return function (i, a) {
          return (
            e != null && (a = i.value - e),
            n(Rh(r, i), a, i.level != null ? { level: i.level } : null)
          );
        };
      })(t)
    : function (n) {
        return r.scale.getLabel(n);
      };
}
function Rh(r, t) {
  return r.type === "category" ? r.scale.getLabel(t) : t.value;
}
function iA(r) {
  var t = r.model,
    e = r.scale;
  if (!(!t.get(["axisLabel", "show"]) || e.isBlank())) {
    var n,
      i,
      a = e.getExtent();
    e instanceof k0 ? (i = e.count()) : ((n = e.getTicks()), (i = n.length));
    var o = r.getLabelModel(),
      s = Ea(r),
      u,
      l = 1;
    i > 40 && (l = Math.ceil(i / 40));
    for (var f = 0; f < i; f += l) {
      var h = n ? n[f] : { value: a[0] + f },
        c = s(h, f),
        v = o.getTextRect(c),
        d = aA(v, o.get("rotate") || 0);
      u ? u.union(d) : (u = d);
    }
    return u;
  }
}
function aA(r, t) {
  var e = (t * Math.PI) / 180,
    n = r.width,
    i = r.height,
    a = n * Math.abs(Math.cos(e)) + Math.abs(i * Math.sin(e)),
    o = n * Math.abs(Math.sin(e)) + Math.abs(i * Math.cos(e)),
    s = new at(r.x, r.y, a, o);
  return s;
}
function Eh(r) {
  var t = r.get("interval");
  return t == null ? "auto" : t;
}
function U0(r) {
  return r.type === "category" && Eh(r.getLabelModel()) === 0;
}
function Y0(r, t) {
  var e = {};
  return (
    C(r.mapDimensionsAll(t), function (n) {
      e[_D(r, n)] = !0;
    }),
    pt(e)
  );
}
function oA(r, t, e) {
  t &&
    C(Y0(t, e), function (n) {
      var i = t.getApproximateExtent(n);
      i[0] < r[0] && (r[0] = i[0]), i[1] > r[1] && (r[1] = i[1]);
    });
}
var sA = (function () {
    function r() {}
    return (
      (r.prototype.getNeedCrossZero = function () {
        var t = this.option;
        return !t.scale;
      }),
      (r.prototype.getCoordSysModel = function () {}),
      r
    );
  })(),
  Fd = [],
  uA = {
    registerPreprocessor: T0,
    registerProcessor: C0,
    registerPostInit: UM,
    registerPostUpdate: YM,
    registerUpdateLifecycle: Lh,
    registerAction: Fe,
    registerCoordinateSystem: $M,
    registerLayout: ZM,
    registerVisual: yn,
    registerTransform: qM,
    registerLoading: M0,
    registerMap: XM,
    registerImpl: TM,
    PRIORITY: FM,
    ComponentModel: ct,
    ComponentView: ve,
    SeriesModel: pa,
    ChartView: _r,
    registerComponentModel: function (r) {
      ct.registerClass(r);
    },
    registerComponentView: function (r) {
      ve.registerClass(r);
    },
    registerSeriesModel: function (r) {
      pa.registerClass(r);
    },
    registerChartView: function (r) {
      _r.registerClass(r);
    },
    registerSubTypeDefaulter: function (r, t) {
      ct.registerSubTypeDefaulter(r, t);
    },
    registerPainter: function (r, t) {
      FS(r, t);
    },
  };
function Be(r) {
  if (N(r)) {
    C(r, function (t) {
      Be(t);
    });
    return;
  }
  J(Fd, r) >= 0 || (Fd.push(r), U(r) && (r = { install: r }), r.install(uA));
}
var Sa = gt();
function lA(r) {
  return r.type === "category" ? hA(r) : cA(r);
}
function fA(r, t) {
  return r.type === "category"
    ? vA(r, t)
    : {
        ticks: z(r.scale.getTicks(), function (e) {
          return e.value;
        }),
      };
}
function hA(r) {
  var t = r.getLabelModel(),
    e = $0(r, t);
  return !t.get("show") || r.scale.isBlank()
    ? { labels: [], labelCategoryInterval: e.labelCategoryInterval }
    : e;
}
function $0(r, t) {
  var e = Z0(r, "labels"),
    n = Eh(t),
    i = X0(e, n);
  if (i) return i;
  var a, o;
  return (
    U(n) ? (a = Q0(r, n)) : ((o = n === "auto" ? dA(r) : n), (a = K0(r, o))),
    q0(e, n, { labels: a, labelCategoryInterval: o })
  );
}
function vA(r, t) {
  var e = Z0(r, "ticks"),
    n = Eh(t),
    i = X0(e, n);
  if (i) return i;
  var a, o;
  if (((!t.get("show") || r.scale.isBlank()) && (a = []), U(n)))
    a = Q0(r, n, !0);
  else if (n === "auto") {
    var s = $0(r, r.getLabelModel());
    (o = s.labelCategoryInterval),
      (a = z(s.labels, function (u) {
        return u.tickValue;
      }));
  } else (o = n), (a = K0(r, o, !0));
  return q0(e, n, { ticks: a, tickCategoryInterval: o });
}
function cA(r) {
  var t = r.scale.getTicks(),
    e = Ea(r);
  return {
    labels: z(t, function (n, i) {
      return {
        level: n.level,
        formattedLabel: e(n, i),
        rawLabel: r.scale.getLabel(n),
        tickValue: n.value,
      };
    }),
  };
}
function Z0(r, t) {
  return Sa(r)[t] || (Sa(r)[t] = []);
}
function X0(r, t) {
  for (var e = 0; e < r.length; e++) if (r[e].key === t) return r[e].value;
}
function q0(r, t, e) {
  return r.push({ key: t, value: e }), e;
}
function dA(r) {
  var t = Sa(r).autoInterval;
  return t != null ? t : (Sa(r).autoInterval = r.calculateCategoryInterval());
}
function pA(r) {
  var t = gA(r),
    e = Ea(r),
    n = ((t.axisRotate - t.labelRotate) / 180) * Math.PI,
    i = r.scale,
    a = i.getExtent(),
    o = i.count();
  if (a[1] - a[0] < 1) return 0;
  var s = 1;
  o > 40 && (s = Math.max(1, Math.floor(o / 40)));
  for (
    var u = a[0],
      l = r.dataToCoord(u + 1) - r.dataToCoord(u),
      f = Math.abs(l * Math.cos(n)),
      h = Math.abs(l * Math.sin(n)),
      c = 0,
      v = 0;
    u <= a[1];
    u += s
  ) {
    var d = 0,
      g = 0,
      p = _s(e({ value: u }), t.font, "center", "top");
    (d = p.width * 1.3),
      (g = p.height * 1.3),
      (c = Math.max(c, d, 7)),
      (v = Math.max(v, g, 7));
  }
  var y = c / f,
    m = v / h;
  isNaN(y) && (y = 1 / 0), isNaN(m) && (m = 1 / 0);
  var _ = Math.max(0, Math.floor(Math.min(y, m))),
    S = Sa(r.model),
    w = r.getExtent(),
    x = S.lastAutoInterval,
    b = S.lastTickCount;
  return (
    x != null &&
    b != null &&
    Math.abs(x - _) <= 1 &&
    Math.abs(b - o) <= 1 &&
    x > _ &&
    S.axisExtent0 === w[0] &&
    S.axisExtent1 === w[1]
      ? (_ = x)
      : ((S.lastTickCount = o),
        (S.lastAutoInterval = _),
        (S.axisExtent0 = w[0]),
        (S.axisExtent1 = w[1])),
    _
  );
}
function gA(r) {
  var t = r.getLabelModel();
  return {
    axisRotate: r.getRotate
      ? r.getRotate()
      : r.isHorizontal && !r.isHorizontal()
      ? 90
      : 0,
    labelRotate: t.get("rotate") || 0,
    font: t.getFont(),
  };
}
function K0(r, t, e) {
  var n = Ea(r),
    i = r.scale,
    a = i.getExtent(),
    o = r.getLabelModel(),
    s = [],
    u = Math.max((t || 0) + 1, 1),
    l = a[0],
    f = i.count();
  l !== 0 && u > 1 && f / u > 2 && (l = Math.round(Math.ceil(l / u) * u));
  var h = U0(r),
    c = o.get("showMinLabel") || h,
    v = o.get("showMaxLabel") || h;
  c && l !== a[0] && g(a[0]);
  for (var d = l; d <= a[1]; d += u) g(d);
  v && d - u !== a[1] && g(a[1]);
  function g(p) {
    var y = { value: p };
    s.push(
      e ? p : { formattedLabel: n(y), rawLabel: i.getLabel(y), tickValue: p }
    );
  }
  return s;
}
function Q0(r, t, e) {
  var n = r.scale,
    i = Ea(r),
    a = [];
  return (
    C(n.getTicks(), function (o) {
      var s = n.getLabel(o),
        u = o.value;
      t(o.value, s) &&
        a.push(e ? u : { formattedLabel: i(o), rawLabel: s, tickValue: u });
    }),
    a
  );
}
var zd = [0, 1],
  yA = (function () {
    function r(t, e, n) {
      (this.onBand = !1),
        (this.inverse = !1),
        (this.dim = t),
        (this.scale = e),
        (this._extent = n || [0, 0]);
    }
    return (
      (r.prototype.contain = function (t) {
        var e = this._extent,
          n = Math.min(e[0], e[1]),
          i = Math.max(e[0], e[1]);
        return t >= n && t <= i;
      }),
      (r.prototype.containData = function (t) {
        return this.scale.contain(t);
      }),
      (r.prototype.getExtent = function () {
        return this._extent.slice();
      }),
      (r.prototype.getPixelPrecision = function (t) {
        return Zg(t || this.scale.getExtent(), this._extent);
      }),
      (r.prototype.setExtent = function (t, e) {
        var n = this._extent;
        (n[0] = t), (n[1] = e);
      }),
      (r.prototype.dataToCoord = function (t, e) {
        var n = this._extent,
          i = this.scale;
        return (
          (t = i.normalize(t)),
          this.onBand &&
            i.type === "ordinal" &&
            ((n = n.slice()), Gd(n, i.count())),
          Et(t, zd, n, e)
        );
      }),
      (r.prototype.coordToData = function (t, e) {
        var n = this._extent,
          i = this.scale;
        this.onBand &&
          i.type === "ordinal" &&
          ((n = n.slice()), Gd(n, i.count()));
        var a = Et(t, n, zd, e);
        return this.scale.scale(a);
      }),
      (r.prototype.pointToData = function (t, e) {}),
      (r.prototype.getTicksCoords = function (t) {
        t = t || {};
        var e = t.tickModel || this.getTickModel(),
          n = fA(this, e),
          i = n.ticks,
          a = z(
            i,
            function (s) {
              return {
                coord: this.dataToCoord(
                  this.scale.type === "ordinal"
                    ? this.scale.getRawOrdinalNumber(s)
                    : s
                ),
                tickValue: s,
              };
            },
            this
          ),
          o = e.get("alignWithLabel");
        return mA(this, a, o, t.clamp), a;
      }),
      (r.prototype.getMinorTicksCoords = function () {
        if (this.scale.type === "ordinal") return [];
        var t = this.model.getModel("minorTick"),
          e = t.get("splitNumber");
        (e > 0 && e < 100) || (e = 5);
        var n = this.scale.getMinorTicks(e),
          i = z(
            n,
            function (a) {
              return z(
                a,
                function (o) {
                  return { coord: this.dataToCoord(o), tickValue: o };
                },
                this
              );
            },
            this
          );
        return i;
      }),
      (r.prototype.getViewLabels = function () {
        return lA(this).labels;
      }),
      (r.prototype.getLabelModel = function () {
        return this.model.getModel("axisLabel");
      }),
      (r.prototype.getTickModel = function () {
        return this.model.getModel("axisTick");
      }),
      (r.prototype.getBandWidth = function () {
        var t = this._extent,
          e = this.scale.getExtent(),
          n = e[1] - e[0] + (this.onBand ? 1 : 0);
        n === 0 && (n = 1);
        var i = Math.abs(t[1] - t[0]);
        return Math.abs(i) / n;
      }),
      (r.prototype.calculateCategoryInterval = function () {
        return pA(this);
      }),
      r
    );
  })();
function Gd(r, t) {
  var e = r[1] - r[0],
    n = t,
    i = e / n / 2;
  (r[0] += i), (r[1] -= i);
}
function mA(r, t, e, n) {
  var i = t.length;
  if (!r.onBand || e || !i) return;
  var a = r.getExtent(),
    o,
    s;
  if (i === 1) (t[0].coord = a[0]), (o = t[1] = { coord: a[0] });
  else {
    var u = t[i - 1].tickValue - t[0].tickValue,
      l = (t[i - 1].coord - t[0].coord) / u;
    C(t, function (v) {
      v.coord -= l / 2;
    });
    var f = r.scale.getExtent();
    (s = 1 + f[1] - t[i - 1].tickValue),
      (o = { coord: t[i - 1].coord + l * s }),
      t.push(o);
  }
  var h = a[0] > a[1];
  c(t[0].coord, a[0]) && (n ? (t[0].coord = a[0]) : t.shift()),
    n && c(a[0], t[0].coord) && t.unshift({ coord: a[0] }),
    c(a[1], o.coord) && (n ? (o.coord = a[1]) : t.pop()),
    n && c(o.coord, a[1]) && t.push({ coord: a[1] });
  function c(v, d) {
    return (v = wt(v)), (d = wt(d)), h ? v > d : v < d;
  }
}
const _A = yA;
var Li = Math.PI * 2,
  Zr = qe.CMD,
  SA = ["top", "right", "bottom", "left"];
function xA(r, t, e, n, i) {
  var a = e.width,
    o = e.height;
  switch (r) {
    case "top":
      n.set(e.x + a / 2, e.y - t), i.set(0, -1);
      break;
    case "bottom":
      n.set(e.x + a / 2, e.y + o + t), i.set(0, 1);
      break;
    case "left":
      n.set(e.x - t, e.y + o / 2), i.set(-1, 0);
      break;
    case "right":
      n.set(e.x + a + t, e.y + o / 2), i.set(1, 0);
      break;
  }
}
function wA(r, t, e, n, i, a, o, s, u) {
  (o -= r), (s -= t);
  var l = Math.sqrt(o * o + s * s);
  (o /= l), (s /= l);
  var f = o * e + r,
    h = s * e + t;
  if (Math.abs(n - i) % Li < 1e-4) return (u[0] = f), (u[1] = h), l - e;
  if (a) {
    var c = n;
    (n = cr(i)), (i = cr(c));
  } else (n = cr(n)), (i = cr(i));
  n > i && (i += Li);
  var v = Math.atan2(s, o);
  if ((v < 0 && (v += Li), (v >= n && v <= i) || (v + Li >= n && v + Li <= i)))
    return (u[0] = f), (u[1] = h), l - e;
  var d = e * Math.cos(n) + r,
    g = e * Math.sin(n) + t,
    p = e * Math.cos(i) + r,
    y = e * Math.sin(i) + t,
    m = (d - o) * (d - o) + (g - s) * (g - s),
    _ = (p - o) * (p - o) + (y - s) * (y - s);
  return m < _
    ? ((u[0] = d), (u[1] = g), Math.sqrt(m))
    : ((u[0] = p), (u[1] = y), Math.sqrt(_));
}
function df(r, t, e, n, i, a, o, s) {
  var u = i - r,
    l = a - t,
    f = e - r,
    h = n - t,
    c = Math.sqrt(f * f + h * h);
  (f /= c), (h /= c);
  var v = u * f + l * h,
    d = v / c;
  s && (d = Math.min(Math.max(d, 0), 1)), (d *= c);
  var g = (o[0] = r + d * f),
    p = (o[1] = t + d * h);
  return Math.sqrt((g - i) * (g - i) + (p - a) * (p - a));
}
function J0(r, t, e, n, i, a, o) {
  e < 0 && ((r = r + e), (e = -e)), n < 0 && ((t = t + n), (n = -n));
  var s = r + e,
    u = t + n,
    l = (o[0] = Math.min(Math.max(i, r), s)),
    f = (o[1] = Math.min(Math.max(a, t), u));
  return Math.sqrt((l - i) * (l - i) + (f - a) * (f - a));
}
var Se = [];
function bA(r, t, e) {
  var n = J0(t.x, t.y, t.width, t.height, r.x, r.y, Se);
  return e.set(Se[0], Se[1]), n;
}
function TA(r, t, e) {
  for (
    var n = 0,
      i = 0,
      a = 0,
      o = 0,
      s,
      u,
      l = 1 / 0,
      f = t.data,
      h = r.x,
      c = r.y,
      v = 0;
    v < f.length;

  ) {
    var d = f[v++];
    v === 1 && ((n = f[v]), (i = f[v + 1]), (a = n), (o = i));
    var g = l;
    switch (d) {
      case Zr.M:
        (a = f[v++]), (o = f[v++]), (n = a), (i = o);
        break;
      case Zr.L:
        (g = df(n, i, f[v], f[v + 1], h, c, Se, !0)),
          (n = f[v++]),
          (i = f[v++]);
        break;
      case Zr.C:
        (g = Rg(
          n,
          i,
          f[v++],
          f[v++],
          f[v++],
          f[v++],
          f[v],
          f[v + 1],
          h,
          c,
          Se
        )),
          (n = f[v++]),
          (i = f[v++]);
        break;
      case Zr.Q:
        (g = Og(n, i, f[v++], f[v++], f[v], f[v + 1], h, c, Se)),
          (n = f[v++]),
          (i = f[v++]);
        break;
      case Zr.A:
        var p = f[v++],
          y = f[v++],
          m = f[v++],
          _ = f[v++],
          S = f[v++],
          w = f[v++];
        v += 1;
        var x = !!(1 - f[v++]);
        (s = Math.cos(S) * m + p),
          (u = Math.sin(S) * _ + y),
          v <= 1 && ((a = s), (o = u));
        var b = ((h - p) * _) / m + p;
        (g = wA(p, y, _, S, S + w, x, b, c, Se)),
          (n = Math.cos(S + w) * m + p),
          (i = Math.sin(S + w) * _ + y);
        break;
      case Zr.R:
        (a = n = f[v++]), (o = i = f[v++]);
        var T = f[v++],
          M = f[v++];
        g = J0(a, o, T, M, h, c, Se);
        break;
      case Zr.Z:
        (g = df(n, i, a, o, h, c, Se, !0)), (n = a), (i = o);
        break;
    }
    g < l && ((l = g), e.set(Se[0], Se[1]));
  }
  return l;
}
var en = new Z(),
  Mt = new Z(),
  Kt = new Z(),
  Wn = new Z(),
  Ii = new Z();
function Hd(r, t) {
  if (!!r) {
    var e = r.getTextGuideLine(),
      n = r.getTextContent();
    if (!!(n && e)) {
      var i = r.textGuideLineConfig || {},
        a = [
          [0, 0],
          [0, 0],
          [0, 0],
        ],
        o = i.candidates || SA,
        s = n.getBoundingRect().clone();
      s.applyTransform(n.getComputedTransform());
      var u = 1 / 0,
        l = i.anchor,
        f = r.getComputedTransform(),
        h = f && ms([], f),
        c = t.get("length2") || 0;
      l && Kt.copy(l);
      for (var v = 0; v < o.length; v++) {
        var d = o[v];
        xA(d, 0, s, en, Wn), Z.scaleAndAdd(Mt, en, Wn, c), Mt.transform(h);
        var g = r.getBoundingRect(),
          p = l
            ? l.distance(Mt)
            : r instanceof rt
            ? TA(Mt, r.path, Kt)
            : bA(Mt, g, Kt);
        p < u &&
          ((u = p),
          Mt.transform(f),
          Kt.transform(f),
          Kt.toArray(a[0]),
          Mt.toArray(a[1]),
          en.toArray(a[2]));
      }
      CA(a, t.get("minTurnAngle")), e.setShape({ points: a });
    }
  }
}
var Vd = [],
  Xr = new Z();
function CA(r, t) {
  if (t <= 180 && t > 0) {
    (t = (t / 180) * Math.PI),
      en.fromArray(r[0]),
      Mt.fromArray(r[1]),
      Kt.fromArray(r[2]),
      Z.sub(Wn, en, Mt),
      Z.sub(Ii, Kt, Mt);
    var e = Wn.len(),
      n = Ii.len();
    if (!(e < 0.001 || n < 0.001)) {
      Wn.scale(1 / e), Ii.scale(1 / n);
      var i = Wn.dot(Ii),
        a = Math.cos(t);
      if (a < i) {
        var o = df(Mt.x, Mt.y, Kt.x, Kt.y, en.x, en.y, Vd, !1);
        Xr.fromArray(Vd), Xr.scaleAndAdd(Ii, o / Math.tan(Math.PI - t));
        var s =
          Kt.x !== Mt.x
            ? (Xr.x - Mt.x) / (Kt.x - Mt.x)
            : (Xr.y - Mt.y) / (Kt.y - Mt.y);
        if (isNaN(s)) return;
        s < 0 ? Z.copy(Xr, Mt) : s > 1 && Z.copy(Xr, Kt), Xr.toArray(r[1]);
      }
    }
  }
}
function Wd(r, t, e, n) {
  var i = e === "normal",
    a = i ? r : r.ensureState(e);
  a.ignore = t;
  var o = n.get("smooth");
  o && o === !0 && (o = 0.3),
    (a.shape = a.shape || {}),
    o > 0 && (a.shape.smooth = o);
  var s = n.getModel("lineStyle").getLineStyle();
  i ? r.useStyle(s) : (a.style = s);
}
function MA(r, t) {
  var e = t.smooth,
    n = t.points;
  if (!!n)
    if ((r.moveTo(n[0][0], n[0][1]), e > 0 && n.length >= 3)) {
      var i = bl(n[0], n[1]),
        a = bl(n[1], n[2]);
      if (!i || !a) {
        r.lineTo(n[1][0], n[1][1]), r.lineTo(n[2][0], n[2][1]);
        return;
      }
      var o = Math.min(i, a) * e,
        s = wo([], n[1], n[0], o / i),
        u = wo([], n[1], n[2], o / a),
        l = wo([], s, u, 0.5);
      r.bezierCurveTo(s[0], s[1], s[0], s[1], l[0], l[1]),
        r.bezierCurveTo(u[0], u[1], u[0], u[1], n[2][0], n[2][1]);
    } else for (var f = 1; f < n.length; f++) r.lineTo(n[f][0], n[f][1]);
}
function DA(r, t, e) {
  var n = r.getTextGuideLine(),
    i = r.getTextContent();
  if (!i) {
    n && r.removeTextGuideLine();
    return;
  }
  for (
    var a = t.normal, o = a.get("show"), s = i.ignore, u = 0;
    u < Xo.length;
    u++
  ) {
    var l = Xo[u],
      f = t[l],
      h = l === "normal";
    if (f) {
      var c = f.get("show"),
        v = h ? s : nt(i.states[l] && i.states[l].ignore, s);
      if (v || !nt(c, o)) {
        var d = h ? n : n && n.states[l];
        d && (d.ignore = !0);
        continue;
      }
      n ||
        ((n = new La()),
        r.setTextGuideLine(n),
        !h && (s || !o) && Wd(n, !0, "normal", t.normal),
        r.stateProxy && (n.stateProxy = r.stateProxy)),
        Wd(n, !1, l, f);
    }
  }
  if (n) {
    q(n.style, e), (n.style.fill = null);
    var g = a.get("showAbove"),
      p = (r.textGuideLineConfig = r.textGuideLineConfig || {});
    (p.showAbove = g || !1), (n.buildPath = MA);
  }
}
function AA(r, t) {
  t = t || "labelLine";
  for (var e = { normal: r.getModel(t) }, n = 0; n < he.length; n++) {
    var i = he[n];
    e[i] = r.getModel([i, t]);
  }
  return e;
}
function j0(r) {
  for (var t = [], e = 0; e < r.length; e++) {
    var n = r[e];
    if (!n.defaultAttr.ignore) {
      var i = n.label,
        a = i.getComputedTransform(),
        o = i.getBoundingRect(),
        s = !a || (a[1] < 1e-5 && a[2] < 1e-5),
        u = i.style.margin || 0,
        l = o.clone();
      l.applyTransform(a),
        (l.x -= u / 2),
        (l.y -= u / 2),
        (l.width += u),
        (l.height += u);
      var f = s ? new Ko(o, a) : null;
      t.push({
        label: i,
        labelLine: n.labelLine,
        rect: l,
        localRect: o,
        obb: f,
        priority: n.priority,
        defaultAttr: n.defaultAttr,
        layoutOption: n.computedLayoutOption,
        axisAligned: s,
        transform: a,
      });
    }
  }
  return t;
}
function t_(r, t, e, n, i, a) {
  var o = r.length;
  if (o < 2) return;
  r.sort(function (T, M) {
    return T.rect[t] - M.rect[t];
  });
  for (var s = 0, u, l = !1, f = 0, h = 0; h < o; h++) {
    var c = r[h],
      v = c.rect;
    (u = v[t] - s), u < 0 && ((v[t] -= u), (c.label[t] -= u), (l = !0));
    var d = Math.max(-u, 0);
    (f += d), (s = v[t] + v[e]);
  }
  f > 0 && a && w(-f / o, 0, o);
  var g = r[0],
    p = r[o - 1],
    y,
    m;
  _(),
    y < 0 && x(-y, 0.8),
    m < 0 && x(m, 0.8),
    _(),
    S(y, m, 1),
    S(m, y, -1),
    _(),
    y < 0 && b(-y),
    m < 0 && b(m);
  function _() {
    (y = g.rect[t] - n), (m = i - p.rect[t] - p.rect[e]);
  }
  function S(T, M, D) {
    if (T < 0) {
      var A = Math.min(M, -T);
      if (A > 0) {
        w(A * D, 0, o);
        var L = A + T;
        L < 0 && x(-L * D, 1);
      } else x(-T * D, 1);
    }
  }
  function w(T, M, D) {
    T !== 0 && (l = !0);
    for (var A = M; A < D; A++) {
      var L = r[A],
        I = L.rect;
      (I[t] += T), (L.label[t] += T);
    }
  }
  function x(T, M) {
    for (var D = [], A = 0, L = 1; L < o; L++) {
      var I = r[L - 1].rect,
        P = Math.max(r[L].rect[t] - I[t] - I[e], 0);
      D.push(P), (A += P);
    }
    if (!!A) {
      var E = Math.min(Math.abs(T) / A, M);
      if (T > 0)
        for (var L = 0; L < o - 1; L++) {
          var R = D[L] * E;
          w(R, 0, L + 1);
        }
      else
        for (var L = o - 1; L > 0; L--) {
          var R = D[L - 1] * E;
          w(-R, L, o);
        }
    }
  }
  function b(T) {
    var M = T < 0 ? -1 : 1;
    T = Math.abs(T);
    for (var D = Math.ceil(T / (o - 1)), A = 0; A < o - 1; A++)
      if ((M > 0 ? w(D, 0, A + 1) : w(-D, o - A - 1, o), (T -= D), T <= 0))
        return;
  }
  return l;
}
function LA(r, t, e, n) {
  return t_(r, "x", "width", t, e, n);
}
function IA(r, t, e, n) {
  return t_(r, "y", "height", t, e, n);
}
function e_(r) {
  var t = [];
  r.sort(function (g, p) {
    return p.priority - g.priority;
  });
  var e = new at(0, 0, 0, 0);
  function n(g) {
    if (!g.ignore) {
      var p = g.ensureState("emphasis");
      p.ignore == null && (p.ignore = !1);
    }
    g.ignore = !0;
  }
  for (var i = 0; i < r.length; i++) {
    var a = r[i],
      o = a.axisAligned,
      s = a.localRect,
      u = a.transform,
      l = a.label,
      f = a.labelLine;
    e.copy(a.rect),
      (e.width -= 0.1),
      (e.height -= 0.1),
      (e.x += 0.05),
      (e.y += 0.05);
    for (var h = a.obb, c = !1, v = 0; v < t.length; v++) {
      var d = t[v];
      if (!!e.intersect(d.rect)) {
        if (o && d.axisAligned) {
          c = !0;
          break;
        }
        if (
          (d.obb || (d.obb = new Ko(d.localRect, d.transform)),
          h || (h = new Ko(s, u)),
          h.intersect(d.obb))
        ) {
          c = !0;
          break;
        }
      }
    }
    c
      ? (n(l), f && n(f))
      : (l.attr("ignore", a.defaultAttr.ignore),
        f && f.attr("ignore", a.defaultAttr.labelGuideIgnore),
        t.push(a));
  }
}
function PA(r) {
  if (r) {
    for (var t = [], e = 0; e < r.length; e++) t.push(r[e].slice());
    return t;
  }
}
function RA(r, t) {
  var e = r.label,
    n = t && t.getTextGuideLine();
  return {
    dataIndex: r.dataIndex,
    dataType: r.dataType,
    seriesIndex: r.seriesModel.seriesIndex,
    text: r.label.style.text,
    rect: r.hostRect,
    labelRect: r.rect,
    align: e.style.align,
    verticalAlign: e.style.verticalAlign,
    labelLinePoints: PA(n && n.shape.points),
  };
}
var Ud = ["align", "verticalAlign", "width", "height", "fontSize"],
  Xt = new Ca(),
  Ju = gt(),
  EA = gt();
function yo(r, t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    t[i] != null && (r[i] = t[i]);
  }
}
var mo = ["x", "y", "rotation"],
  OA = (function () {
    function r() {
      (this._labelList = []), (this._chartViewList = []);
    }
    return (
      (r.prototype.clearLabels = function () {
        (this._labelList = []), (this._chartViewList = []);
      }),
      (r.prototype._addLabel = function (t, e, n, i, a) {
        var o = i.style,
          s = i.__hostTarget,
          u = s.textConfig || {},
          l = i.getComputedTransform(),
          f = i.getBoundingRect().plain();
        at.applyTransform(f, f, l),
          l
            ? Xt.setLocalTransform(l)
            : ((Xt.x = Xt.y = Xt.rotation = Xt.originX = Xt.originY = 0),
              (Xt.scaleX = Xt.scaleY = 1));
        var h = i.__hostTarget,
          c;
        if (h) {
          c = h.getBoundingRect().plain();
          var v = h.getComputedTransform();
          at.applyTransform(c, c, v);
        }
        var d = c && h.getTextGuideLine();
        this._labelList.push({
          label: i,
          labelLine: d,
          seriesModel: n,
          dataIndex: t,
          dataType: e,
          layoutOption: a,
          computedLayoutOption: null,
          rect: f,
          hostRect: c,
          priority: c ? c.width * c.height : 0,
          defaultAttr: {
            ignore: i.ignore,
            labelGuideIgnore: d && d.ignore,
            x: Xt.x,
            y: Xt.y,
            scaleX: Xt.scaleX,
            scaleY: Xt.scaleY,
            rotation: Xt.rotation,
            style: {
              x: o.x,
              y: o.y,
              align: o.align,
              verticalAlign: o.verticalAlign,
              width: o.width,
              height: o.height,
              fontSize: o.fontSize,
            },
            cursor: i.cursor,
            attachedPos: u.position,
            attachedRot: u.rotation,
          },
        });
      }),
      (r.prototype.addLabelsOfSeries = function (t) {
        var e = this;
        this._chartViewList.push(t);
        var n = t.__model,
          i = n.get("labelLayout");
        !(U(i) || pt(i).length) ||
          t.group.traverse(function (a) {
            if (a.ignore) return !0;
            var o = a.getTextContent(),
              s = ut(a);
            o &&
              !o.disableLabelLayout &&
              e._addLabel(s.dataIndex, s.dataType, n, o, i);
          });
      }),
      (r.prototype.updateLayoutConfig = function (t) {
        var e = t.getWidth(),
          n = t.getHeight();
        function i(_, S) {
          return function () {
            Hd(_, S);
          };
        }
        for (var a = 0; a < this._labelList.length; a++) {
          var o = this._labelList[a],
            s = o.label,
            u = s.__hostTarget,
            l = o.defaultAttr,
            f = void 0;
          U(o.layoutOption)
            ? (f = o.layoutOption(RA(o, u)))
            : (f = o.layoutOption),
            (f = f || {}),
            (o.computedLayoutOption = f);
          var h = Math.PI / 180;
          u &&
            u.setTextConfig({
              local: !1,
              position: f.x != null || f.y != null ? null : l.attachedPos,
              rotation: f.rotate != null ? f.rotate * h : l.attachedRot,
              offset: [f.dx || 0, f.dy || 0],
            });
          var c = !1;
          if (
            (f.x != null
              ? ((s.x = Ct(f.x, e)), s.setStyle("x", 0), (c = !0))
              : ((s.x = l.x), s.setStyle("x", l.style.x)),
            f.y != null
              ? ((s.y = Ct(f.y, n)), s.setStyle("y", 0), (c = !0))
              : ((s.y = l.y), s.setStyle("y", l.style.y)),
            f.labelLinePoints)
          ) {
            var v = u.getTextGuideLine();
            v && (v.setShape({ points: f.labelLinePoints }), (c = !1));
          }
          var d = Ju(s);
          (d.needsUpdateLabelLine = c),
            (s.rotation = f.rotate != null ? f.rotate * h : l.rotation),
            (s.scaleX = l.scaleX),
            (s.scaleY = l.scaleY);
          for (var g = 0; g < Ud.length; g++) {
            var p = Ud[g];
            s.setStyle(p, f[p] != null ? f[p] : l.style[p]);
          }
          if (f.draggable) {
            if (((s.draggable = !0), (s.cursor = "move"), u)) {
              var y = o.seriesModel;
              if (o.dataIndex != null) {
                var m = o.seriesModel.getData(o.dataType);
                y = m.getItemModel(o.dataIndex);
              }
              s.on("drag", i(u, y.getModel("labelLine")));
            }
          } else s.off("drag"), (s.cursor = l.cursor);
        }
      }),
      (r.prototype.layout = function (t) {
        var e = t.getWidth(),
          n = t.getHeight(),
          i = j0(this._labelList),
          a = xt(i, function (u) {
            return u.layoutOption.moveOverlap === "shiftX";
          }),
          o = xt(i, function (u) {
            return u.layoutOption.moveOverlap === "shiftY";
          });
        LA(a, 0, e), IA(o, 0, n);
        var s = xt(i, function (u) {
          return u.layoutOption.hideOverlap;
        });
        e_(s);
      }),
      (r.prototype.processLabelsOverall = function () {
        var t = this;
        C(this._chartViewList, function (e) {
          var n = e.__model,
            i = e.ignoreLabelLineUpdate,
            a = n.isAnimationEnabled();
          e.group.traverse(function (o) {
            if (o.ignore && !o.forceLabelAnimation) return !0;
            var s = !i,
              u = o.getTextContent();
            !s && u && (s = Ju(u).needsUpdateLabelLine),
              s && t._updateLabelLine(o, n),
              a && t._animateLabels(o, n);
          });
        });
      }),
      (r.prototype._updateLabelLine = function (t, e) {
        var n = t.getTextContent(),
          i = ut(t),
          a = i.dataIndex;
        if (n && a != null) {
          var o = e.getData(i.dataType),
            s = o.getItemModel(a),
            u = {},
            l = o.getItemVisual(a, "style"),
            f = o.getVisual("drawType");
          u.stroke = l[f];
          var h = s.getModel("labelLine");
          DA(t, AA(s), u), Hd(t, h);
        }
      }),
      (r.prototype._animateLabels = function (t, e) {
        var n = t.getTextContent(),
          i = t.getTextGuideLine();
        if (
          n &&
          (t.forceLabelAnimation ||
            (!n.ignore && !n.invisible && !t.disableLabelAnimation && !Xn(t)))
        ) {
          var a = Ju(n),
            o = a.oldLayout,
            s = ut(t),
            u = s.dataIndex,
            l = { x: n.x, y: n.y, rotation: n.rotation },
            f = e.getData(s.dataType);
          if (o) {
            n.attr(o);
            var c = t.prevStates;
            c &&
              (J(c, "select") >= 0 && n.attr(a.oldLayoutSelect),
              J(c, "emphasis") >= 0 && n.attr(a.oldLayoutEmphasis)),
              we(n, l, e, u);
          } else if ((n.attr(l), !Ps(n).valueAnimation)) {
            var h = nt(n.style.opacity, 1);
            (n.style.opacity = 0), Ke(n, { style: { opacity: h } }, e, u);
          }
          if (((a.oldLayout = l), n.states.select)) {
            var v = (a.oldLayoutSelect = {});
            yo(v, l, mo), yo(v, n.states.select, mo);
          }
          if (n.states.emphasis) {
            var d = (a.oldLayoutEmphasis = {});
            yo(d, l, mo), yo(d, n.states.emphasis, mo);
          }
          Db(n, u, f, e, e);
        }
        if (i && !i.ignore && !i.invisible) {
          var a = EA(i),
            o = a.oldLayout,
            g = { points: i.shape.points };
          o
            ? (i.attr({ shape: o }), we(i, { shape: g }, e))
            : (i.setShape(g),
              (i.style.strokePercent = 0),
              Ke(i, { style: { strokePercent: 1 } }, e)),
            (a.oldLayout = g);
        }
      }),
      r
    );
  })();
const kA = OA;
var ju = gt();
function ZR(r) {
  r.registerUpdateLifecycle("series:beforeupdate", function (t, e, n) {
    var i = ju(e).labelManager;
    i || (i = ju(e).labelManager = new kA()), i.clearLabels();
  }),
    r.registerUpdateLifecycle("series:layoutlabels", function (t, e, n) {
      var i = ju(e).labelManager;
      n.updatedSeries.forEach(function (a) {
        i.addLabelsOfSeries(e.getViewOfSeriesModel(a));
      }),
        i.updateLayoutConfig(e),
        i.layout(e),
        i.processLabelsOverall();
    });
}
var BA = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), (e.hasSymbolVisual = !0), e;
  }
  return (
    (t.prototype.getInitialData = function (e) {
      return wD(null, this, { useEncodeDefaulter: !0 });
    }),
    (t.prototype.getLegendIcon = function (e) {
      var n = new bt(),
        i = br(
          "line",
          0,
          e.itemHeight / 2,
          e.itemWidth,
          0,
          e.lineStyle.stroke,
          !1
        );
      n.add(i), i.setStyle(e.lineStyle);
      var a = this.getData().getVisual("symbol"),
        o = this.getData().getVisual("symbolRotate"),
        s = a === "none" ? "circle" : a,
        u = e.itemHeight * 0.8,
        l = br(
          s,
          (e.itemWidth - u) / 2,
          (e.itemHeight - u) / 2,
          u,
          u,
          e.itemStyle.fill
        );
      n.add(l), l.setStyle(e.itemStyle);
      var f = e.iconRotate === "inherit" ? o : e.iconRotate || 0;
      return (
        (l.rotation = (f * Math.PI) / 180),
        l.setOrigin([e.itemWidth / 2, e.itemHeight / 2]),
        s.indexOf("empty") > -1 &&
          ((l.style.stroke = l.style.fill),
          (l.style.fill = "#fff"),
          (l.style.lineWidth = 2)),
        n
      );
    }),
    (t.type = "series.line"),
    (t.dependencies = ["grid", "polar"]),
    (t.defaultOption = {
      z: 3,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      clip: !0,
      label: { position: "top" },
      endLabel: { show: !1, valueAnimation: !0, distance: 8 },
      lineStyle: { width: 2, type: "solid" },
      emphasis: { scale: !0 },
      step: !1,
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: !0,
      showAllSymbol: "auto",
      connectNulls: !1,
      sampling: "none",
      animationEasing: "linear",
      progressive: 0,
      hoverLayerThreshold: 1 / 0,
      universalTransition: { divideShape: "clone" },
      triggerLineEvent: !1,
    }),
    t
  );
})(pa);
const NA = BA;
function r_(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel"),
    n = e.length;
  if (n === 1) {
    var i = ri(r, t, e[0]);
    return i != null ? i + "" : null;
  } else if (n) {
    for (var a = [], o = 0; o < e.length; o++) a.push(ri(r, t, e[o]));
    return a.join(" ");
  }
}
function FA(r, t) {
  var e = r.mapDimensionsAll("defaultedLabel");
  if (!N(t)) return t + "";
  for (var n = [], i = 0; i < e.length; i++) {
    var a = r.getDimensionIndex(e[i]);
    a >= 0 && n.push(t[a]);
  }
  return n.join(" ");
}
var zA = (function (r) {
  O(t, r);
  function t(e, n, i, a) {
    var o = r.call(this) || this;
    return o.updateData(e, n, i, a), o;
  }
  return (
    (t.prototype._createSymbol = function (e, n, i, a, o) {
      this.removeAll();
      var s = br(e, -1, -1, 2, 2, null, o);
      s.attr({ z2: 100, culling: !0, scaleX: a[0] / 2, scaleY: a[1] / 2 }),
        (s.drift = GA),
        (this._symbolType = e),
        this.add(s);
    }),
    (t.prototype.stopSymbolAnimation = function (e) {
      this.childAt(0).stopAnimation(null, e);
    }),
    (t.prototype.getSymbolType = function () {
      return this._symbolType;
    }),
    (t.prototype.getSymbolPath = function () {
      return this.childAt(0);
    }),
    (t.prototype.highlight = function () {
      jn(this.childAt(0));
    }),
    (t.prototype.downplay = function () {
      ti(this.childAt(0));
    }),
    (t.prototype.setZ = function (e, n) {
      var i = this.childAt(0);
      (i.zlevel = e), (i.z = n);
    }),
    (t.prototype.setDraggable = function (e) {
      var n = this.childAt(0);
      (n.draggable = e), (n.cursor = e ? "move" : n.cursor);
    }),
    (t.prototype.updateData = function (e, n, i, a) {
      this.silent = !1;
      var o = e.getItemVisual(n, "symbol") || "circle",
        s = e.hostModel,
        u = t.getSymbolSize(e, n),
        l = o !== this._symbolType,
        f = a && a.disableAnimation;
      if (l) {
        var h = e.getItemVisual(n, "symbolKeepAspect");
        this._createSymbol(o, e, n, u, h);
      } else {
        var c = this.childAt(0);
        c.silent = !1;
        var v = { scaleX: u[0] / 2, scaleY: u[1] / 2 };
        f ? c.attr(v) : we(c, v, s, n), lb(c);
      }
      if ((this._updateCommon(e, n, u, i, a), l)) {
        var c = this.childAt(0);
        if (!f) {
          var v = {
            scaleX: this._sizeX,
            scaleY: this._sizeY,
            style: { opacity: c.style.opacity },
          };
          (c.scaleX = c.scaleY = 0), (c.style.opacity = 0), Ke(c, v, s, n);
        }
      }
      f && this.childAt(0).stopAnimation("leave");
    }),
    (t.prototype._updateCommon = function (e, n, i, a, o) {
      var s = this.childAt(0),
        u = e.hostModel,
        l,
        f,
        h,
        c,
        v,
        d,
        g,
        p,
        y;
      if (
        (a &&
          ((l = a.emphasisItemStyle),
          (f = a.blurItemStyle),
          (h = a.selectItemStyle),
          (c = a.focus),
          (v = a.blurScope),
          (g = a.labelStatesModels),
          (p = a.hoverScale),
          (y = a.cursorStyle),
          (d = a.emphasisDisabled)),
        !a || e.hasItemOption)
      ) {
        var m = a && a.itemModel ? a.itemModel : e.getItemModel(n),
          _ = m.getModel("emphasis");
        (l = _.getModel("itemStyle").getItemStyle()),
          (h = m.getModel(["select", "itemStyle"]).getItemStyle()),
          (f = m.getModel(["blur", "itemStyle"]).getItemStyle()),
          (c = _.get("focus")),
          (v = _.get("blurScope")),
          (d = _.get("disabled")),
          (g = fh(m)),
          (p = _.getShallow("scale")),
          (y = m.getShallow("cursor"));
      }
      var S = e.getItemVisual(n, "symbolRotate");
      s.attr("rotation", ((S || 0) * Math.PI) / 180 || 0);
      var w = n0(e.getItemVisual(n, "symbolOffset"), i);
      w && ((s.x = w[0]), (s.y = w[1])), y && s.attr("cursor", y);
      var x = e.getItemVisual(n, "style"),
        b = x.fill;
      if (s instanceof pn) {
        var T = s.style;
        s.useStyle(
          k(
            {
              image: T.image,
              x: T.x,
              y: T.y,
              width: T.width,
              height: T.height,
            },
            x
          )
        );
      } else
        s.__isEmptyBrush ? s.useStyle(k({}, x)) : s.useStyle(x),
          (s.style.decal = null),
          s.setColor(b, o && o.symbolInnerColor),
          (s.style.strokeNoScale = !0);
      var M = e.getItemVisual(n, "liftZ"),
        D = this._z2;
      M != null
        ? D == null && ((this._z2 = s.z2), (s.z2 += M))
        : D != null && ((s.z2 = D), (this._z2 = null));
      var A = o && o.useNameLabel;
      lh(s, g, {
        labelFetcher: u,
        labelDataIndex: n,
        defaultText: L,
        inheritColor: b,
        defaultOpacity: x.opacity,
      });
      function L(E) {
        return A ? e.getName(E) : r_(e, E);
      }
      (this._sizeX = i[0] / 2), (this._sizeY = i[1] / 2);
      var I = s.ensureState("emphasis");
      if (
        ((I.style = l),
        (s.ensureState("select").style = h),
        (s.ensureState("blur").style = f),
        p)
      ) {
        var P = Math.max(ft(p) ? p : 1.1, 3 / this._sizeY);
        (I.scaleX = this._sizeX * P), (I.scaleY = this._sizeY * P);
      }
      this.setSymbolScale(1), $l(this, c, v, d);
    }),
    (t.prototype.setSymbolScale = function (e) {
      this.scaleX = this.scaleY = e;
    }),
    (t.prototype.fadeOut = function (e, n, i) {
      var a = this.childAt(0),
        o = ut(this).dataIndex,
        s = i && i.animation;
      if (((this.silent = a.silent = !0), i && i.fadeLabel)) {
        var u = a.getTextContent();
        u &&
          Qo(u, { style: { opacity: 0 } }, n, {
            dataIndex: o,
            removeOpt: s,
            cb: function () {
              a.removeTextContent();
            },
          });
      } else a.removeTextContent();
      Qo(a, { style: { opacity: 0 }, scaleX: 0, scaleY: 0 }, n, {
        dataIndex: o,
        cb: e,
        removeOpt: s,
      });
    }),
    (t.getSymbolSize = function (e, n) {
      return oM(e.getItemVisual(n, "symbolSize"));
    }),
    t
  );
})(bt);
function GA(r, t) {
  this.parent.drift(r, t);
}
const Oh = zA;
function tl(r, t, e, n) {
  return (
    t &&
    !isNaN(t[0]) &&
    !isNaN(t[1]) &&
    !(n.isIgnore && n.isIgnore(e)) &&
    !(n.clipShape && !n.clipShape.contain(t[0], t[1])) &&
    r.getItemVisual(e, "symbol") !== "none"
  );
}
function Yd(r) {
  return r != null && !H(r) && (r = { isIgnore: r }), r || {};
}
function $d(r) {
  var t = r.hostModel,
    e = t.getModel("emphasis");
  return {
    emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
    blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
    selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
    focus: e.get("focus"),
    blurScope: e.get("blurScope"),
    emphasisDisabled: e.get("disabled"),
    hoverScale: e.get("scale"),
    labelStatesModels: fh(t),
    cursorStyle: t.get("cursor"),
  };
}
var HA = (function () {
  function r(t) {
    (this.group = new bt()), (this._SymbolCtor = t || Oh);
  }
  return (
    (r.prototype.updateData = function (t, e) {
      (this._progressiveEls = null), (e = Yd(e));
      var n = this.group,
        i = t.hostModel,
        a = this._data,
        o = this._SymbolCtor,
        s = e.disableAnimation,
        u = $d(t),
        l = { disableAnimation: s },
        f =
          e.getSymbolPoint ||
          function (h) {
            return t.getItemLayout(h);
          };
      a || n.removeAll(),
        t
          .diff(a)
          .add(function (h) {
            var c = f(h);
            if (tl(t, c, h, e)) {
              var v = new o(t, h, u, l);
              v.setPosition(c), t.setItemGraphicEl(h, v), n.add(v);
            }
          })
          .update(function (h, c) {
            var v = a.getItemGraphicEl(c),
              d = f(h);
            if (!tl(t, d, h, e)) {
              n.remove(v);
              return;
            }
            var g = t.getItemVisual(h, "symbol") || "circle",
              p = v && v.getSymbolType && v.getSymbolType();
            if (!v || (p && p !== g))
              n.remove(v), (v = new o(t, h, u, l)), v.setPosition(d);
            else {
              v.updateData(t, h, u, l);
              var y = { x: d[0], y: d[1] };
              s ? v.attr(y) : we(v, y, i);
            }
            n.add(v), t.setItemGraphicEl(h, v);
          })
          .remove(function (h) {
            var c = a.getItemGraphicEl(h);
            c &&
              c.fadeOut(function () {
                n.remove(c);
              }, i);
          })
          .execute(),
        (this._getSymbolPoint = f),
        (this._data = t);
    }),
    (r.prototype.updateLayout = function () {
      var t = this,
        e = this._data;
      e &&
        e.eachItemGraphicEl(function (n, i) {
          var a = t._getSymbolPoint(i);
          n.setPosition(a), n.markRedraw();
        });
    }),
    (r.prototype.incrementalPrepareUpdate = function (t) {
      (this._seriesScope = $d(t)), (this._data = null), this.group.removeAll();
    }),
    (r.prototype.incrementalUpdate = function (t, e, n) {
      (this._progressiveEls = []), (n = Yd(n));
      function i(u) {
        u.isGroup ||
          ((u.incremental = !0), (u.ensureState("emphasis").hoverLayer = !0));
      }
      for (var a = t.start; a < t.end; a++) {
        var o = e.getItemLayout(a);
        if (tl(e, o, a, n)) {
          var s = new this._SymbolCtor(e, a, this._seriesScope);
          s.traverse(i),
            s.setPosition(o),
            this.group.add(s),
            e.setItemGraphicEl(a, s),
            this._progressiveEls.push(s);
        }
      }
    }),
    (r.prototype.eachRendered = function (t) {
      uh(this._progressiveEls || this.group, t);
    }),
    (r.prototype.remove = function (t) {
      var e = this.group,
        n = this._data;
      n && t
        ? n.eachItemGraphicEl(function (i) {
            i.fadeOut(function () {
              e.remove(i);
            }, n.hostModel);
          })
        : e.removeAll();
    }),
    r
  );
})();
const VA = HA;
function n_(r, t, e) {
  var n = r.getBaseAxis(),
    i = r.getOtherAxis(n),
    a = WA(i, e),
    o = n.dim,
    s = i.dim,
    u = t.mapDimension(s),
    l = t.mapDimension(o),
    f = s === "x" || s === "radius" ? 1 : 0,
    h = z(r.dimensions, function (d) {
      return t.mapDimension(d);
    }),
    c = !1,
    v = t.getCalculationInfo("stackResultDimension");
  return (
    _a(t, h[0]) && ((c = !0), (h[0] = v)),
    _a(t, h[1]) && ((c = !0), (h[1] = v)),
    {
      dataDimsForPoint: h,
      valueStart: a,
      valueAxisDim: s,
      baseAxisDim: o,
      stacked: !!c,
      valueDim: u,
      baseDim: l,
      baseDataOffset: f,
      stackedOverDimension: t.getCalculationInfo("stackedOverDimension"),
    }
  );
}
function WA(r, t) {
  var e = 0,
    n = r.scale.getExtent();
  return (
    t === "start"
      ? (e = n[0])
      : t === "end"
      ? (e = n[1])
      : ft(t) && !isNaN(t)
      ? (e = t)
      : n[0] > 0
      ? (e = n[0])
      : n[1] < 0 && (e = n[1]),
    e
  );
}
function i_(r, t, e, n) {
  var i = NaN;
  r.stacked && (i = e.get(e.getCalculationInfo("stackedOverDimension"), n)),
    isNaN(i) && (i = r.valueStart);
  var a = r.baseDataOffset,
    o = [];
  return (o[a] = e.get(r.baseDim, n)), (o[1 - a] = i), t.dataToPoint(o);
}
function UA(r, t) {
  var e = [];
  return (
    t
      .diff(r)
      .add(function (n) {
        e.push({ cmd: "+", idx: n });
      })
      .update(function (n, i) {
        e.push({ cmd: "=", idx: i, idx1: n });
      })
      .remove(function (n) {
        e.push({ cmd: "-", idx: n });
      })
      .execute(),
    e
  );
}
function YA(r, t, e, n, i, a, o, s) {
  for (
    var u = UA(r, t),
      l = [],
      f = [],
      h = [],
      c = [],
      v = [],
      d = [],
      g = [],
      p = n_(i, t, o),
      y = r.getLayout("points") || [],
      m = t.getLayout("points") || [],
      _ = 0;
    _ < u.length;
    _++
  ) {
    var S = u[_],
      w = !0,
      x = void 0,
      b = void 0;
    switch (S.cmd) {
      case "=":
        (x = S.idx * 2), (b = S.idx1 * 2);
        var T = y[x],
          M = y[x + 1],
          D = m[b],
          A = m[b + 1];
        (isNaN(T) || isNaN(M)) && ((T = D), (M = A)),
          l.push(T, M),
          f.push(D, A),
          h.push(e[x], e[x + 1]),
          c.push(n[b], n[b + 1]),
          g.push(t.getRawIndex(S.idx1));
        break;
      case "+":
        var L = S.idx,
          I = p.dataDimsForPoint,
          P = i.dataToPoint([t.get(I[0], L), t.get(I[1], L)]);
        (b = L * 2), l.push(P[0], P[1]), f.push(m[b], m[b + 1]);
        var E = i_(p, i, t, L);
        h.push(E[0], E[1]), c.push(n[b], n[b + 1]), g.push(t.getRawIndex(L));
        break;
      case "-":
        w = !1;
    }
    w && (v.push(S), d.push(d.length));
  }
  d.sort(function (Lt, dt) {
    return g[Lt] - g[dt];
  });
  for (
    var R = l.length,
      V = Vn(R),
      F = Vn(R),
      B = Vn(R),
      $ = Vn(R),
      it = [],
      _ = 0;
    _ < d.length;
    _++
  ) {
    var lt = d[_],
      ht = _ * 2,
      vt = lt * 2;
    (V[ht] = l[vt]),
      (V[ht + 1] = l[vt + 1]),
      (F[ht] = f[vt]),
      (F[ht + 1] = f[vt + 1]),
      (B[ht] = h[vt]),
      (B[ht + 1] = h[vt + 1]),
      ($[ht] = c[vt]),
      ($[ht + 1] = c[vt + 1]),
      (it[_] = v[lt]);
  }
  return {
    current: V,
    next: F,
    stackedOnCurrent: B,
    stackedOnNext: $,
    status: it,
  };
}
var or = Math.min,
  sr = Math.max;
function an(r, t) {
  return isNaN(r) || isNaN(t);
}
function pf(r, t, e, n, i, a, o, s, u) {
  for (var l, f, h, c, v, d, g = e, p = 0; p < n; p++) {
    var y = t[g * 2],
      m = t[g * 2 + 1];
    if (g >= i || g < 0) break;
    if (an(y, m)) {
      if (u) {
        g += a;
        continue;
      }
      break;
    }
    if (g === e) r[a > 0 ? "moveTo" : "lineTo"](y, m), (h = y), (c = m);
    else {
      var _ = y - l,
        S = m - f;
      if (_ * _ + S * S < 0.5) {
        g += a;
        continue;
      }
      if (o > 0) {
        for (
          var w = g + a, x = t[w * 2], b = t[w * 2 + 1];
          x === y && b === m && p < n;

        )
          p++,
            (w += a),
            (g += a),
            (x = t[w * 2]),
            (b = t[w * 2 + 1]),
            (y = t[g * 2]),
            (m = t[g * 2 + 1]),
            (_ = y - l),
            (S = m - f);
        var T = p + 1;
        if (u)
          for (; an(x, b) && T < n; )
            T++, (w += a), (x = t[w * 2]), (b = t[w * 2 + 1]);
        var M = 0.5,
          D = 0,
          A = 0,
          L = void 0,
          I = void 0;
        if (T >= n || an(x, b)) (v = y), (d = m);
        else {
          (D = x - l), (A = b - f);
          var P = y - l,
            E = x - y,
            R = m - f,
            V = b - m,
            F = void 0,
            B = void 0;
          if (s === "x") {
            (F = Math.abs(P)), (B = Math.abs(E));
            var $ = D > 0 ? 1 : -1;
            (v = y - $ * F * o), (d = m), (L = y + $ * B * o), (I = m);
          } else if (s === "y") {
            (F = Math.abs(R)), (B = Math.abs(V));
            var it = A > 0 ? 1 : -1;
            (v = y), (d = m - it * F * o), (L = y), (I = m + it * B * o);
          } else
            (F = Math.sqrt(P * P + R * R)),
              (B = Math.sqrt(E * E + V * V)),
              (M = B / (B + F)),
              (v = y - D * o * (1 - M)),
              (d = m - A * o * (1 - M)),
              (L = y + D * o * M),
              (I = m + A * o * M),
              (L = or(L, sr(x, y))),
              (I = or(I, sr(b, m))),
              (L = sr(L, or(x, y))),
              (I = sr(I, or(b, m))),
              (D = L - y),
              (A = I - m),
              (v = y - (D * F) / B),
              (d = m - (A * F) / B),
              (v = or(v, sr(l, y))),
              (d = or(d, sr(f, m))),
              (v = sr(v, or(l, y))),
              (d = sr(d, or(f, m))),
              (D = y - v),
              (A = m - d),
              (L = y + (D * B) / F),
              (I = m + (A * B) / F);
        }
        r.bezierCurveTo(h, c, v, d, y, m), (h = L), (c = I);
      } else r.lineTo(y, m);
    }
    (l = y), (f = m), (g += a);
  }
  return p;
}
var a_ = (function () {
    function r() {
      (this.smooth = 0), (this.smoothConstraint = !0);
    }
    return r;
  })(),
  $A = (function (r) {
    O(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return (n.type = "ec-polyline"), n;
    }
    return (
      (t.prototype.getDefaultStyle = function () {
        return { stroke: "#000", fill: null };
      }),
      (t.prototype.getDefaultShape = function () {
        return new a_();
      }),
      (t.prototype.buildPath = function (e, n) {
        var i = n.points,
          a = 0,
          o = i.length / 2;
        if (n.connectNulls) {
          for (; o > 0 && an(i[o * 2 - 2], i[o * 2 - 1]); o--);
          for (; a < o && an(i[a * 2], i[a * 2 + 1]); a++);
        }
        for (; a < o; )
          a +=
            pf(e, i, a, o, o, 1, n.smooth, n.smoothMonotone, n.connectNulls) +
            1;
      }),
      (t.prototype.getPointOn = function (e, n) {
        this.path ||
          (this.createPathProxy(), this.buildPath(this.path, this.shape));
        for (
          var i = this.path,
            a = i.data,
            o = qe.CMD,
            s,
            u,
            l = n === "x",
            f = [],
            h = 0;
          h < a.length;

        ) {
          var c = a[h++],
            v = void 0,
            d = void 0,
            g = void 0,
            p = void 0,
            y = void 0,
            m = void 0,
            _ = void 0;
          switch (c) {
            case o.M:
              (s = a[h++]), (u = a[h++]);
              break;
            case o.L:
              if (
                ((v = a[h++]),
                (d = a[h++]),
                (_ = l ? (e - s) / (v - s) : (e - u) / (d - u)),
                _ <= 1 && _ >= 0)
              ) {
                var S = l ? (d - u) * _ + u : (v - s) * _ + s;
                return l ? [e, S] : [S, e];
              }
              (s = v), (u = d);
              break;
            case o.C:
              (v = a[h++]),
                (d = a[h++]),
                (g = a[h++]),
                (p = a[h++]),
                (y = a[h++]),
                (m = a[h++]);
              var w = l ? Vo(s, v, g, y, e, f) : Vo(u, d, p, m, e, f);
              if (w > 0)
                for (var x = 0; x < w; x++) {
                  var b = f[x];
                  if (b <= 1 && b >= 0) {
                    var S = l ? Tt(u, d, p, m, b) : Tt(s, v, g, y, b);
                    return l ? [e, S] : [S, e];
                  }
                }
              (s = y), (u = m);
              break;
          }
        }
      }),
      t
    );
  })(rt),
  ZA = (function (r) {
    O(t, r);
    function t() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return t;
  })(a_),
  XA = (function (r) {
    O(t, r);
    function t(e) {
      var n = r.call(this, e) || this;
      return (n.type = "ec-polygon"), n;
    }
    return (
      (t.prototype.getDefaultShape = function () {
        return new ZA();
      }),
      (t.prototype.buildPath = function (e, n) {
        var i = n.points,
          a = n.stackedOnPoints,
          o = 0,
          s = i.length / 2,
          u = n.smoothMonotone;
        if (n.connectNulls) {
          for (; s > 0 && an(i[s * 2 - 2], i[s * 2 - 1]); s--);
          for (; o < s && an(i[o * 2], i[o * 2 + 1]); o++);
        }
        for (; o < s; ) {
          var l = pf(e, i, o, s, s, 1, n.smooth, u, n.connectNulls);
          pf(e, a, o + l - 1, l, s, -1, n.stackedOnSmooth, u, n.connectNulls),
            (o += l + 1),
            e.closePath();
        }
      }),
      t
    );
  })(rt);
function qA(r, t, e, n, i) {
  var a = r.getArea(),
    o = a.x,
    s = a.y,
    u = a.width,
    l = a.height,
    f = e.get(["lineStyle", "width"]) || 2;
  (o -= f / 2),
    (s -= f / 2),
    (u += f),
    (l += f),
    (o = Math.floor(o)),
    (u = Math.round(u));
  var h = new yt({ shape: { x: o, y: s, width: u, height: l } });
  if (t) {
    var c = r.getBaseAxis(),
      v = c.isHorizontal(),
      d = c.inverse;
    v
      ? (d && (h.shape.x += u), (h.shape.width = 0))
      : (d || (h.shape.y += l), (h.shape.height = 0));
    var g = U(i)
      ? function (p) {
          i(p, h);
        }
      : null;
    Ke(h, { shape: { width: u, height: l, x: o, y: s } }, e, null, n, g);
  }
  return h;
}
function KA(r, t, e) {
  var n = r.getArea(),
    i = wt(n.r0, 1),
    a = wt(n.r, 1),
    o = new ua({
      shape: {
        cx: wt(r.cx, 1),
        cy: wt(r.cy, 1),
        r0: i,
        r: a,
        startAngle: n.startAngle,
        endAngle: n.endAngle,
        clockwise: n.clockwise,
      },
    });
  if (t) {
    var s = r.getBaseAxis().dim === "angle";
    s ? (o.shape.endAngle = n.startAngle) : (o.shape.r = i),
      Ke(o, { shape: { endAngle: n.endAngle, r: a } }, e);
  }
  return o;
}
function QA(r, t) {
  return r.type === t;
}
function Zd(r, t) {
  if (r.length === t.length) {
    for (var e = 0; e < r.length; e++) if (r[e] !== t[e]) return;
    return !0;
  }
}
function Xd(r) {
  for (
    var t = 1 / 0, e = 1 / 0, n = -1 / 0, i = -1 / 0, a = 0;
    a < r.length;

  ) {
    var o = r[a++],
      s = r[a++];
    isNaN(o) || ((t = Math.min(o, t)), (n = Math.max(o, n))),
      isNaN(s) || ((e = Math.min(s, e)), (i = Math.max(s, i)));
  }
  return [
    [t, e],
    [n, i],
  ];
}
function qd(r, t) {
  var e = Xd(r),
    n = e[0],
    i = e[1],
    a = Xd(t),
    o = a[0],
    s = a[1];
  return Math.max(
    Math.abs(n[0] - o[0]),
    Math.abs(n[1] - o[1]),
    Math.abs(i[0] - s[0]),
    Math.abs(i[1] - s[1])
  );
}
function Kd(r) {
  return ft(r) ? r : r ? 0.5 : 0;
}
function JA(r, t, e) {
  if (!e.valueDim) return [];
  for (var n = t.count(), i = Vn(n * 2), a = 0; a < n; a++) {
    var o = i_(e, r, t, a);
    (i[a * 2] = o[0]), (i[a * 2 + 1] = o[1]);
  }
  return i;
}
function ur(r, t, e, n) {
  var i = t.getBaseAxis(),
    a = i.dim === "x" || i.dim === "radius" ? 0 : 1,
    o = [],
    s = 0,
    u = [],
    l = [],
    f = [],
    h = [];
  if (n) {
    for (s = 0; s < r.length; s += 2)
      !isNaN(r[s]) && !isNaN(r[s + 1]) && h.push(r[s], r[s + 1]);
    r = h;
  }
  for (s = 0; s < r.length - 2; s += 2)
    switch (
      ((f[0] = r[s + 2]),
      (f[1] = r[s + 3]),
      (l[0] = r[s]),
      (l[1] = r[s + 1]),
      o.push(l[0], l[1]),
      e)
    ) {
      case "end":
        (u[a] = f[a]), (u[1 - a] = l[1 - a]), o.push(u[0], u[1]);
        break;
      case "middle":
        var c = (l[a] + f[a]) / 2,
          v = [];
        (u[a] = v[a] = c),
          (u[1 - a] = l[1 - a]),
          (v[1 - a] = f[1 - a]),
          o.push(u[0], u[1]),
          o.push(v[0], v[1]);
        break;
      default:
        (u[a] = l[a]), (u[1 - a] = f[1 - a]), o.push(u[0], u[1]);
    }
  return o.push(r[s++], r[s++]), o;
}
function jA(r, t) {
  var e = [],
    n = r.length,
    i,
    a;
  function o(f, h, c) {
    var v = f.coord,
      d = (c - v) / (h.coord - v),
      g = nS(d, [f.color, h.color]);
    return { coord: c, color: g };
  }
  for (var s = 0; s < n; s++) {
    var u = r[s],
      l = u.coord;
    if (l < 0) i = u;
    else if (l > t) {
      a ? e.push(o(a, u, t)) : i && e.push(o(i, u, 0), o(i, u, t));
      break;
    } else i && (e.push(o(i, u, 0)), (i = null)), e.push(u), (a = u);
  }
  return e;
}
function t2(r, t, e) {
  var n = r.getVisual("visualMeta");
  if (!(!n || !n.length || !r.count()) && t.type === "cartesian2d") {
    for (var i, a, o = n.length - 1; o >= 0; o--) {
      var s = r.getDimensionInfo(n[o].dimension);
      if (((i = s && s.coordDim), i === "x" || i === "y")) {
        a = n[o];
        break;
      }
    }
    if (!!a) {
      var u = t.getAxis(i),
        l = z(a.stops, function (_) {
          return {
            coord: u.toGlobalCoord(u.dataToCoord(_.value)),
            color: _.color,
          };
        }),
        f = l.length,
        h = a.outerColors.slice();
      f && l[0].coord > l[f - 1].coord && (l.reverse(), h.reverse());
      var c = jA(l, i === "x" ? e.getWidth() : e.getHeight()),
        v = c.length;
      if (!v && f)
        return l[0].coord < 0
          ? h[1]
            ? h[1]
            : l[f - 1].color
          : h[0]
          ? h[0]
          : l[0].color;
      var d = 10,
        g = c[0].coord - d,
        p = c[v - 1].coord + d,
        y = p - g;
      if (y < 0.001) return "transparent";
      C(c, function (_) {
        _.offset = (_.coord - g) / y;
      }),
        c.push({
          offset: v ? c[v - 1].offset : 0.5,
          color: h[1] || "transparent",
        }),
        c.unshift({
          offset: v ? c[0].offset : 0.5,
          color: h[0] || "transparent",
        });
      var m = new Zy(0, 0, 0, 0, c, !0);
      return (m[i] = g), (m[i + "2"] = p), m;
    }
  }
}
function e2(r, t, e) {
  var n = r.get("showAllSymbol"),
    i = n === "auto";
  if (!(n && !i)) {
    var a = e.getAxesByScale("ordinal")[0];
    if (!!a && !(i && r2(a, t))) {
      var o = t.mapDimension(a.dim),
        s = {};
      return (
        C(a.getViewLabels(), function (u) {
          var l = a.scale.getRawOrdinalNumber(u.tickValue);
          s[l] = 1;
        }),
        function (u) {
          return !s.hasOwnProperty(t.get(o, u));
        }
      );
    }
  }
}
function r2(r, t) {
  var e = r.getExtent(),
    n = Math.abs(e[1] - e[0]) / r.scale.count();
  isNaN(n) && (n = 0);
  for (
    var i = t.count(), a = Math.max(1, Math.round(i / 5)), o = 0;
    o < i;
    o += a
  )
    if (Oh.getSymbolSize(t, o)[r.isHorizontal() ? 1 : 0] * 1.5 > n) return !1;
  return !0;
}
function n2(r, t) {
  return isNaN(r) || isNaN(t);
}
function i2(r) {
  for (var t = r.length / 2; t > 0 && n2(r[t * 2 - 2], r[t * 2 - 1]); t--);
  return t - 1;
}
function Qd(r, t) {
  return [r[t * 2], r[t * 2 + 1]];
}
function a2(r, t, e) {
  for (
    var n = r.length / 2, i = e === "x" ? 0 : 1, a, o, s = 0, u = -1, l = 0;
    l < n;
    l++
  )
    if (((o = r[l * 2 + i]), !(isNaN(o) || isNaN(r[l * 2 + 1 - i])))) {
      if (l === 0) {
        a = o;
        continue;
      }
      if ((a <= t && o >= t) || (a >= t && o <= t)) {
        u = l;
        break;
      }
      (s = l), (a = o);
    }
  return { range: [s, u], t: (t - a) / (o - a) };
}
function o_(r) {
  if (r.get(["endLabel", "show"])) return !0;
  for (var t = 0; t < he.length; t++)
    if (r.get([he[t], "endLabel", "show"])) return !0;
  return !1;
}
function el(r, t, e, n) {
  if (QA(t, "cartesian2d")) {
    var i = n.getModel("endLabel"),
      a = i.get("valueAnimation"),
      o = n.getData(),
      s = { lastFrameIndex: 0 },
      u = o_(n)
        ? function (v, d) {
            r._endLabelOnDuring(v, d, o, s, a, i, t);
          }
        : null,
      l = t.getBaseAxis().isHorizontal(),
      f = qA(
        t,
        e,
        n,
        function () {
          var v = r._endLabel;
          v &&
            e &&
            s.originalX != null &&
            v.attr({ x: s.originalX, y: s.originalY });
        },
        u
      );
    if (!n.get("clip", !0)) {
      var h = f.shape,
        c = Math.max(h.width, h.height);
      l ? ((h.y -= c), (h.height += c * 2)) : ((h.x -= c), (h.width += c * 2));
    }
    return u && u(1, f), f;
  } else return KA(t, e, n);
}
function o2(r, t) {
  var e = t.getBaseAxis(),
    n = e.isHorizontal(),
    i = e.inverse,
    a = n ? (i ? "right" : "left") : "center",
    o = n ? "middle" : i ? "top" : "bottom";
  return {
    normal: {
      align: r.get("align") || a,
      verticalAlign: r.get("verticalAlign") || o,
    },
  };
}
var s2 = (function (r) {
  O(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.init = function () {
      var e = new bt(),
        n = new VA();
      this.group.add(n.group), (this._symbolDraw = n), (this._lineGroup = e);
    }),
    (t.prototype.render = function (e, n, i) {
      var a = this,
        o = e.coordinateSystem,
        s = this.group,
        u = e.getData(),
        l = e.getModel("lineStyle"),
        f = e.getModel("areaStyle"),
        h = u.getLayout("points") || [],
        c = o.type === "polar",
        v = this._coordSys,
        d = this._symbolDraw,
        g = this._polyline,
        p = this._polygon,
        y = this._lineGroup,
        m = e.get("animation"),
        _ = !f.isEmpty(),
        S = f.get("origin"),
        w = n_(o, u, S),
        x = _ && JA(o, u, w),
        b = e.get("showSymbol"),
        T = e.get("connectNulls"),
        M = b && !c && e2(e, u, o),
        D = this._data;
      D &&
        D.eachItemGraphicEl(function (dt, pe) {
          dt.__temp && (s.remove(dt), D.setItemGraphicEl(pe, null));
        }),
        b || d.remove(),
        s.add(y);
      var A = c ? !1 : e.get("step"),
        L;
      o &&
        o.getArea &&
        e.get("clip", !0) &&
        ((L = o.getArea()),
        L.width != null
          ? ((L.x -= 0.1), (L.y -= 0.1), (L.width += 0.2), (L.height += 0.2))
          : L.r0 && ((L.r0 -= 0.5), (L.r += 0.5))),
        (this._clipShapeForSymbol = L);
      var I = t2(u, o, i) || u.getVisual("style")[u.getVisual("drawType")];
      if (!(g && v.type === o.type && A === this._step))
        b &&
          d.updateData(u, {
            isIgnore: M,
            clipShape: L,
            disableAnimation: !0,
            getSymbolPoint: function (dt) {
              return [h[dt * 2], h[dt * 2 + 1]];
            },
          }),
          m && this._initSymbolLabelAnimation(u, o, L),
          A && ((h = ur(h, o, A, T)), x && (x = ur(x, o, A, T))),
          (g = this._newPolyline(h)),
          _ && (p = this._newPolygon(h, x)),
          c || this._initOrUpdateEndLabel(e, o, hn(I)),
          y.setClipPath(el(this, o, !0, e));
      else {
        _ && !p
          ? (p = this._newPolygon(h, x))
          : p && !_ && (y.remove(p), (p = this._polygon = null)),
          c || this._initOrUpdateEndLabel(e, o, hn(I));
        var P = y.getClipPath();
        if (P) {
          var E = el(this, o, !1, e);
          Ke(P, { shape: E.shape }, e);
        } else y.setClipPath(el(this, o, !0, e));
        b &&
          d.updateData(u, {
            isIgnore: M,
            clipShape: L,
            disableAnimation: !0,
            getSymbolPoint: function (dt) {
              return [h[dt * 2], h[dt * 2 + 1]];
            },
          }),
          (!Zd(this._stackedOnPoints, x) || !Zd(this._points, h)) &&
            (m
              ? this._doUpdateAnimation(u, x, o, i, A, S, T)
              : (A && ((h = ur(h, o, A, T)), x && (x = ur(x, o, A, T))),
                g.setShape({ points: h }),
                p && p.setShape({ points: h, stackedOnPoints: x })));
      }
      var R = e.getModel("emphasis"),
        V = R.get("focus"),
        F = R.get("blurScope"),
        B = R.get("disabled");
      if (
        (g.useStyle(
          q(l.getLineStyle(), { fill: "none", stroke: I, lineJoin: "bevel" })
        ),
        oc(g, e, "lineStyle"),
        g.style.lineWidth > 0 &&
          e.get(["emphasis", "lineStyle", "width"]) === "bolder")
      ) {
        var $ = g.getState("emphasis").style;
        $.lineWidth = +g.style.lineWidth + 1;
      }
      (ut(g).seriesIndex = e.seriesIndex), $l(g, V, F, B);
      var it = Kd(e.get("smooth")),
        lt = e.get("smoothMonotone");
      if (
        (g.setShape({ smooth: it, smoothMonotone: lt, connectNulls: T }), p)
      ) {
        var ht = u.getCalculationInfo("stackedOnSeries"),
          vt = 0;
        p.useStyle(
          q(f.getAreaStyle(), {
            fill: I,
            opacity: 0.7,
            lineJoin: "bevel",
            decal: u.getVisual("style").decal,
          })
        ),
          ht && (vt = Kd(ht.get("smooth"))),
          p.setShape({
            smooth: it,
            stackedOnSmooth: vt,
            smoothMonotone: lt,
            connectNulls: T,
          }),
          oc(p, e, "areaStyle"),
          (ut(p).seriesIndex = e.seriesIndex),
          $l(p, V, F, B);
      }
      var Lt = function (dt) {
        a._changePolyState(dt);
      };
      u.eachItemGraphicEl(function (dt) {
        dt && (dt.onHoverStateChange = Lt);
      }),
        (this._polyline.onHoverStateChange = Lt),
        (this._data = u),
        (this._coordSys = o),
        (this._stackedOnPoints = x),
        (this._points = h),
        (this._step = A),
        (this._valueOrigin = S),
        e.get("triggerLineEvent") &&
          (this.packEventData(e, g), p && this.packEventData(e, p));
    }),
    (t.prototype.packEventData = function (e, n) {
      ut(n).eventData = {
        componentType: "series",
        componentSubType: "line",
        componentIndex: e.componentIndex,
        seriesIndex: e.seriesIndex,
        seriesName: e.name,
        seriesType: "line",
      };
    }),
    (t.prototype.highlight = function (e, n, i, a) {
      var o = e.getData(),
        s = ln(o, a);
      if (
        (this._changePolyState("emphasis"),
        !(s instanceof Array) && s != null && s >= 0)
      ) {
        var u = o.getLayout("points"),
          l = o.getItemGraphicEl(s);
        if (!l) {
          var f = u[s * 2],
            h = u[s * 2 + 1];
          if (
            isNaN(f) ||
            isNaN(h) ||
            (this._clipShapeForSymbol &&
              !this._clipShapeForSymbol.contain(f, h))
          )
            return;
          var c = e.get("zlevel"),
            v = e.get("z");
          (l = new Oh(o, s)), (l.x = f), (l.y = h), l.setZ(c, v);
          var d = l.getSymbolPath().getTextContent();
          d && ((d.zlevel = c), (d.z = v), (d.z2 = this._polyline.z2 + 1)),
            (l.__temp = !0),
            o.setItemGraphicEl(s, l),
            l.stopSymbolAnimation(!0),
            this.group.add(l);
        }
        l.highlight();
      } else _r.prototype.highlight.call(this, e, n, i, a);
    }),
    (t.prototype.downplay = function (e, n, i, a) {
      var o = e.getData(),
        s = ln(o, a);
      if ((this._changePolyState("normal"), s != null && s >= 0)) {
        var u = o.getItemGraphicEl(s);
        u &&
          (u.__temp
            ? (o.setItemGraphicEl(s, null), this.group.remove(u))
            : u.downplay());
      } else _r.prototype.downplay.call(this, e, n, i, a);
    }),
    (t.prototype._changePolyState = function (e) {
      var n = this._polygon;
      ec(this._polyline, e), n && ec(n, e);
    }),
    (t.prototype._newPolyline = function (e) {
      var n = this._polyline;
      return (
        n && this._lineGroup.remove(n),
        (n = new $A({
          shape: { points: e },
          segmentIgnoreThreshold: 2,
          z2: 10,
        })),
        this._lineGroup.add(n),
        (this._polyline = n),
        n
      );
    }),
    (t.prototype._newPolygon = function (e, n) {
      var i = this._polygon;
      return (
        i && this._lineGroup.remove(i),
        (i = new XA({
          shape: { points: e, stackedOnPoints: n },
          segmentIgnoreThreshold: 2,
        })),
        this._lineGroup.add(i),
        (this._polygon = i),
        i
      );
    }),
    (t.prototype._initSymbolLabelAnimation = function (e, n, i) {
      var a,
        o,
        s = n.getBaseAxis(),
        u = s.inverse;
      n.type === "cartesian2d"
        ? ((a = s.isHorizontal()), (o = !1))
        : n.type === "polar" && ((a = s.dim === "angle"), (o = !0));
      var l = e.hostModel,
        f = l.get("animationDuration");
      U(f) && (f = f(null));
      var h = l.get("animationDelay") || 0,
        c = U(h) ? h(null) : h;
      e.eachItemGraphicEl(function (v, d) {
        var g = v;
        if (g) {
          var p = [v.x, v.y],
            y = void 0,
            m = void 0,
            _ = void 0;
          if (i)
            if (o) {
              var S = i,
                w = n.pointToCoord(p);
              a
                ? ((y = S.startAngle),
                  (m = S.endAngle),
                  (_ = (-w[1] / 180) * Math.PI))
                : ((y = S.r0), (m = S.r), (_ = w[0]));
            } else {
              var x = i;
              a
                ? ((y = x.x), (m = x.x + x.width), (_ = v.x))
                : ((y = x.y + x.height), (m = x.y), (_ = v.y));
            }
          var b = m === y ? 0 : (_ - y) / (m - y);
          u && (b = 1 - b);
          var T = U(h) ? h(d) : f * b + c,
            M = g.getSymbolPath(),
            D = M.getTextContent();
          g.attr({ scaleX: 0, scaleY: 0 }),
            g.animateTo(
              { scaleX: 1, scaleY: 1 },
              { duration: 200, setToFinal: !0, delay: T }
            ),
            D &&
              D.animateFrom(
                { style: { opacity: 0 } },
                { duration: 300, delay: T }
              ),
            (M.disableLabelAnimation = !0);
        }
      });
    }),
    (t.prototype._initOrUpdateEndLabel = function (e, n, i) {
      var a = e.getModel("endLabel");
      if (o_(e)) {
        var o = e.getData(),
          s = this._polyline,
          u = o.getLayout("points");
        if (!u) {
          s.removeTextContent(), (this._endLabel = null);
          return;
        }
        var l = this._endLabel;
        l ||
          ((l = this._endLabel = new Dt({ z2: 200 })),
          (l.ignoreClip = !0),
          s.setTextContent(this._endLabel),
          (s.disableLabelAnimation = !0));
        var f = i2(u);
        f >= 0 &&
          (lh(
            s,
            fh(e, "endLabel"),
            {
              inheritColor: i,
              labelFetcher: e,
              labelDataIndex: f,
              defaultText: function (h, c, v) {
                return v != null ? FA(o, v) : r_(o, h);
              },
              enableTextSetter: !0,
            },
            o2(a, n)
          ),
          (s.textConfig.position = null));
      } else
        this._endLabel &&
          (this._polyline.removeTextContent(), (this._endLabel = null));
    }),
    (t.prototype._endLabelOnDuring = function (e, n, i, a, o, s, u) {
      var l = this._endLabel,
        f = this._polyline;
      if (l) {
        e < 1 &&
          a.originalX == null &&
          ((a.originalX = l.x), (a.originalY = l.y));
        var h = i.getLayout("points"),
          c = i.hostModel,
          v = c.get("connectNulls"),
          d = s.get("precision"),
          g = s.get("distance") || 0,
          p = u.getBaseAxis(),
          y = p.isHorizontal(),
          m = p.inverse,
          _ = n.shape,
          S = m ? (y ? _.x : _.y + _.height) : y ? _.x + _.width : _.y,
          w = (y ? g : 0) * (m ? -1 : 1),
          x = (y ? 0 : -g) * (m ? -1 : 1),
          b = y ? "x" : "y",
          T = a2(h, S, b),
          M = T.range,
          D = M[1] - M[0],
          A = void 0;
        if (D >= 1) {
          if (D > 1 && !v) {
            var L = Qd(h, M[0]);
            l.attr({ x: L[0] + w, y: L[1] + x }),
              o && (A = c.getRawValue(M[0]));
          } else {
            var L = f.getPointOn(S, b);
            L && l.attr({ x: L[0] + w, y: L[1] + x });
            var I = c.getRawValue(M[0]),
              P = c.getRawValue(M[1]);
            o && (A = ry(i, d, I, P, T.t));
          }
          a.lastFrameIndex = M[0];
        } else {
          var E = e === 1 || a.lastFrameIndex > 0 ? M[0] : 0,
            L = Qd(h, E);
          o && (A = c.getRawValue(E)), l.attr({ x: L[0] + w, y: L[1] + x });
        }
        o && Ps(l).setLabelText(A);
      }
    }),
    (t.prototype._doUpdateAnimation = function (e, n, i, a, o, s, u) {
      var l = this._polyline,
        f = this._polygon,
        h = e.hostModel,
        c = YA(
          this._data,
          e,
          this._stackedOnPoints,
          n,
          this._coordSys,
          i,
          this._valueOrigin
        ),
        v = c.current,
        d = c.stackedOnCurrent,
        g = c.next,
        p = c.stackedOnNext;
      if (
        (o &&
          ((v = ur(c.current, i, o, u)),
          (d = ur(c.stackedOnCurrent, i, o, u)),
          (g = ur(c.next, i, o, u)),
          (p = ur(c.stackedOnNext, i, o, u))),
        qd(v, g) > 3e3 || (f && qd(d, p) > 3e3))
      ) {
        l.stopAnimation(),
          l.setShape({ points: g }),
          f &&
            (f.stopAnimation(), f.setShape({ points: g, stackedOnPoints: p }));
        return;
      }
      (l.shape.__points = c.current), (l.shape.points = v);
      var y = { shape: { points: g } };
      c.current !== v && (y.shape.__points = c.next),
        l.stopAnimation(),
        we(l, y, h),
        f &&
          (f.setShape({ points: v, stackedOnPoints: d }),
          f.stopAnimation(),
          we(f, { shape: { stackedOnPoints: p } }, h),
          l.shape.points !== f.shape.points &&
            (f.shape.points = l.shape.points));
      for (var m = [], _ = c.status, S = 0; S < _.length; S++) {
        var w = _[S].cmd;
        if (w === "=") {
          var x = e.getItemGraphicEl(_[S].idx1);
          x && m.push({ el: x, ptIdx: S });
        }
      }
      l.animators &&
        l.animators.length &&
        l.animators[0].during(function () {
          f && f.dirtyShape();
          for (var b = l.shape.__points, T = 0; T < m.length; T++) {
            var M = m[T].el,
              D = m[T].ptIdx * 2;
            (M.x = b[D]), (M.y = b[D + 1]), M.markRedraw();
          }
        });
    }),
    (t.prototype.remove = function (e) {
      var n = this.group,
        i = this._data;
      this._lineGroup.removeAll(),
        this._symbolDraw.remove(!0),
        i &&
          i.eachItemGraphicEl(function (a, o) {
            a.__temp && (n.remove(a), i.setItemGraphicEl(o, null));
          }),
        (this._polyline =
          this._polygon =
          this._coordSys =
          this._points =
          this._stackedOnPoints =
          this._endLabel =
          this._data =
            null);
    }),
    (t.type = "line"),
    t
  );
})(_r);
const u2 = s2;
function l2(r, t) {
  return {
    seriesType: r,
    plan: Zm(),
    reset: function (e) {
      var n = e.getData(),
        i = e.coordinateSystem,
        a = e.pipelineContext,
        o = t || a.large;
      if (!!i) {
        var s = z(i.dimensions, function (v) {
            return n.mapDimension(v);
          }).slice(0, 2),
          u = s.length,
          l = n.getCalculationInfo("stackResultDimension");
        _a(n, s[0]) && (s[0] = l), _a(n, s[1]) && (s[1] = l);
        var f = n.getStore(),
          h = n.getDimensionIndex(s[0]),
          c = n.getDimensionIndex(s[1]);
        return (
          u && {
            progress: function (v, d) {
              for (
                var g = v.end - v.start,
                  p = o && Vn(g * u),
                  y = [],
                  m = [],
                  _ = v.start,
                  S = 0;
                _ < v.end;
                _++
              ) {
                var w = void 0;
                if (u === 1) {
                  var x = f.get(h, _);
                  w = i.dataToPoint(x, null, m);
                } else
                  (y[0] = f.get(h, _)),
                    (y[1] = f.get(c, _)),
                    (w = i.dataToPoint(y, null, m));
                o
                  ? ((p[S++] = w[0]), (p[S++] = w[1]))
                  : d.setItemLayout(_, w.slice());
              }
              o && d.setLayout("points", p);
            },
          }
        );
      }
    },
  };
}
var f2 = {
    average: function (r) {
      for (var t = 0, e = 0, n = 0; n < r.length; n++)
        isNaN(r[n]) || ((t += r[n]), e++);
      return e === 0 ? NaN : t / e;
    },
    sum: function (r) {
      for (var t = 0, e = 0; e < r.length; e++) t += r[e] || 0;
      return t;
    },
    max: function (r) {
      for (var t = -1 / 0, e = 0; e < r.length; e++) r[e] > t && (t = r[e]);
      return isFinite(t) ? t : NaN;
    },
    min: function (r) {
      for (var t = 1 / 0, e = 0; e < r.length; e++) r[e] < t && (t = r[e]);
      return isFinite(t) ? t : NaN;
    },
    nearest: function (r) {
      return r[0];
    },
  },
  h2 = function (r) {
    return Math.round(r.length / 2);
  };
function v2(r) {
  return {
    seriesType: r,
    reset: function (t, e, n) {
      var i = t.getData(),
        a = t.get("sampling"),
        o = t.coordinateSystem,
        s = i.count();
      if (s > 10 && o.type === "cartesian2d" && a) {
        var u = o.getBaseAxis(),
          l = o.getOtherAxis(u),
          f = u.getExtent(),
          h = n.getDevicePixelRatio(),
          c = Math.abs(f[1] - f[0]) * (h || 1),
          v = Math.round(s / c);
        if (isFinite(v) && v > 1) {
          a === "lttb" &&
            t.setData(i.lttbDownSample(i.mapDimension(l.dim), 1 / v));
          var d = void 0;
          G(a) ? (d = f2[a]) : U(a) && (d = a),
            d && t.setData(i.downSample(i.mapDimension(l.dim), 1 / v, d, h2));
        }
      }
    },
  };
}
function XR(r) {
  r.registerChartView(u2),
    r.registerSeriesModel(NA),
    r.registerLayout(l2("line", !0)),
    r.registerVisual({
      seriesType: "line",
      reset: function (t) {
        var e = t.getData(),
          n = t.getModel("lineStyle").getLineStyle();
        n && !n.stroke && (n.stroke = e.getVisual("style").fill),
          e.setVisual("legendLineStyle", n);
      },
    }),
    r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, v2("line"));
}
var c2 = (function (r) {
  O(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.type = "grid"),
    (t.dependencies = ["xAxis", "yAxis"]),
    (t.layoutMode = "box"),
    (t.defaultOption = {
      show: !1,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 70,
      containLabel: !1,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc",
    }),
    t
  );
})(ct);
const d2 = c2;
var gf = (function (r) {
  O(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.getCoordSysModel = function () {
      return this.getReferringComponents("grid", zt).models[0];
    }),
    (t.type = "cartesian2dAxis"),
    t
  );
})(ct);
Ne(gf, sA);
var s_ = {
    show: !0,
    z: 0,
    inverse: !1,
    name: "",
    nameLocation: "end",
    nameRotate: null,
    nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." },
    nameTextStyle: {},
    nameGap: 15,
    silent: !1,
    triggerEvent: !1,
    tooltip: { show: !1 },
    axisPointer: {},
    axisLine: {
      show: !0,
      onZero: !0,
      onZeroAxisIndex: null,
      lineStyle: { color: "#6E7079", width: 1, type: "solid" },
      symbol: ["none", "none"],
      symbolSize: [10, 15],
    },
    axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } },
    axisLabel: {
      show: !0,
      inside: !1,
      rotate: 0,
      showMinLabel: null,
      showMaxLabel: null,
      margin: 8,
      fontSize: 12,
    },
    splitLine: {
      show: !0,
      lineStyle: { color: ["#E0E6F1"], width: 1, type: "solid" },
    },
    splitArea: {
      show: !1,
      areaStyle: { color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"] },
    },
  },
  p2 = Q(
    {
      boundaryGap: !0,
      deduplication: null,
      splitLine: { show: !1 },
      axisTick: { alignWithLabel: !1, interval: "auto" },
      axisLabel: { interval: "auto" },
    },
    s_
  ),
  kh = Q(
    {
      boundaryGap: [0, 0],
      axisLine: { show: "auto" },
      axisTick: { show: "auto" },
      splitNumber: 5,
      minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} },
      minorSplitLine: { show: !1, lineStyle: { color: "#F4F7FD", width: 1 } },
    },
    s_
  ),
  g2 = Q(
    {
      splitNumber: 6,
      axisLabel: {
        showMinLabel: !1,
        showMaxLabel: !1,
        rich: { primary: { fontWeight: "bold" } },
      },
      splitLine: { show: !1 },
    },
    kh
  ),
  y2 = q({ logBase: 10 }, kh);
const m2 = { category: p2, value: kh, time: g2, log: y2 };
var _2 = { value: 1, category: 1, time: 1, log: 1 };
function Jd(r, t, e, n) {
  C(_2, function (i, a) {
    var o = Q(Q({}, m2[a], !0), n, !0),
      s = (function (u) {
        O(l, u);
        function l() {
          var f = (u !== null && u.apply(this, arguments)) || this;
          return (f.type = t + "Axis." + a), f;
        }
        return (
          (l.prototype.mergeDefaultAndTheme = function (f, h) {
            var c = va(this),
              v = c ? Pa(f) : {},
              d = h.getTheme();
            Q(f, d.get(a + "Axis")),
              Q(f, this.getDefaultOption()),
              (f.type = jd(f)),
              c && ei(f, v, c);
          }),
          (l.prototype.optionUpdated = function () {
            var f = this.option;
            f.type === "category" &&
              (this.__ordinalMeta = vf.createByAxisModel(this));
          }),
          (l.prototype.getCategories = function (f) {
            var h = this.option;
            if (h.type === "category")
              return f ? h.data : this.__ordinalMeta.categories;
          }),
          (l.prototype.getOrdinalMeta = function () {
            return this.__ordinalMeta;
          }),
          (l.type = t + "Axis." + a),
          (l.defaultOption = o),
          l
        );
      })(e);
    r.registerComponentModel(s);
  }),
    r.registerSubTypeDefaulter(t + "Axis", jd);
}
function jd(r) {
  return r.type || (r.data ? "category" : "value");
}
var S2 = (function () {
  function r(t) {
    (this.type = "cartesian"),
      (this._dimList = []),
      (this._axes = {}),
      (this.name = t || "");
  }
  return (
    (r.prototype.getAxis = function (t) {
      return this._axes[t];
    }),
    (r.prototype.getAxes = function () {
      return z(
        this._dimList,
        function (t) {
          return this._axes[t];
        },
        this
      );
    }),
    (r.prototype.getAxesByScale = function (t) {
      return (
        (t = t.toLowerCase()),
        xt(this.getAxes(), function (e) {
          return e.scale.type === t;
        })
      );
    }),
    (r.prototype.addAxis = function (t) {
      var e = t.dim;
      (this._axes[e] = t), this._dimList.push(e);
    }),
    r
  );
})();
const x2 = S2;
var yf = ["x", "y"];
function tp(r) {
  return r.type === "interval" || r.type === "time";
}
var w2 = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = "cartesian2d"), (e.dimensions = yf), e;
    }
    return (
      (t.prototype.calcAffineTransform = function () {
        this._transform = this._invTransform = null;
        var e = this.getAxis("x").scale,
          n = this.getAxis("y").scale;
        if (!(!tp(e) || !tp(n))) {
          var i = e.getExtent(),
            a = n.getExtent(),
            o = this.dataToPoint([i[0], a[0]]),
            s = this.dataToPoint([i[1], a[1]]),
            u = i[1] - i[0],
            l = a[1] - a[0];
          if (!(!u || !l)) {
            var f = (s[0] - o[0]) / u,
              h = (s[1] - o[1]) / l,
              c = o[0] - i[0] * f,
              v = o[1] - a[0] * h,
              d = (this._transform = [f, 0, 0, h, c, v]);
            this._invTransform = ms([], d);
          }
        }
      }),
      (t.prototype.getBaseAxis = function () {
        return (
          this.getAxesByScale("ordinal")[0] ||
          this.getAxesByScale("time")[0] ||
          this.getAxis("x")
        );
      }),
      (t.prototype.containPoint = function (e) {
        var n = this.getAxis("x"),
          i = this.getAxis("y");
        return (
          n.contain(n.toLocalCoord(e[0])) && i.contain(i.toLocalCoord(e[1]))
        );
      }),
      (t.prototype.containData = function (e) {
        return (
          this.getAxis("x").containData(e[0]) &&
          this.getAxis("y").containData(e[1])
        );
      }),
      (t.prototype.dataToPoint = function (e, n, i) {
        i = i || [];
        var a = e[0],
          o = e[1];
        if (
          this._transform &&
          a != null &&
          isFinite(a) &&
          o != null &&
          isFinite(o)
        )
          return fe(i, e, this._transform);
        var s = this.getAxis("x"),
          u = this.getAxis("y");
        return (
          (i[0] = s.toGlobalCoord(s.dataToCoord(a, n))),
          (i[1] = u.toGlobalCoord(u.dataToCoord(o, n))),
          i
        );
      }),
      (t.prototype.clampData = function (e, n) {
        var i = this.getAxis("x").scale,
          a = this.getAxis("y").scale,
          o = i.getExtent(),
          s = a.getExtent(),
          u = i.parse(e[0]),
          l = a.parse(e[1]);
        return (
          (n = n || []),
          (n[0] = Math.min(
            Math.max(Math.min(o[0], o[1]), u),
            Math.max(o[0], o[1])
          )),
          (n[1] = Math.min(
            Math.max(Math.min(s[0], s[1]), l),
            Math.max(s[0], s[1])
          )),
          n
        );
      }),
      (t.prototype.pointToData = function (e, n) {
        var i = [];
        if (this._invTransform) return fe(i, e, this._invTransform);
        var a = this.getAxis("x"),
          o = this.getAxis("y");
        return (
          (i[0] = a.coordToData(a.toLocalCoord(e[0]), n)),
          (i[1] = o.coordToData(o.toLocalCoord(e[1]), n)),
          i
        );
      }),
      (t.prototype.getOtherAxis = function (e) {
        return this.getAxis(e.dim === "x" ? "y" : "x");
      }),
      (t.prototype.getArea = function () {
        var e = this.getAxis("x").getGlobalExtent(),
          n = this.getAxis("y").getGlobalExtent(),
          i = Math.min(e[0], e[1]),
          a = Math.min(n[0], n[1]),
          o = Math.max(e[0], e[1]) - i,
          s = Math.max(n[0], n[1]) - a;
        return new at(i, a, o, s);
      }),
      t
    );
  })(x2),
  b2 = (function (r) {
    O(t, r);
    function t(e, n, i, a, o) {
      var s = r.call(this, e, n, i) || this;
      return (
        (s.index = 0), (s.type = a || "value"), (s.position = o || "bottom"), s
      );
    }
    return (
      (t.prototype.isHorizontal = function () {
        var e = this.position;
        return e === "top" || e === "bottom";
      }),
      (t.prototype.getGlobalExtent = function (e) {
        var n = this.getExtent();
        return (
          (n[0] = this.toGlobalCoord(n[0])),
          (n[1] = this.toGlobalCoord(n[1])),
          e && n[0] > n[1] && n.reverse(),
          n
        );
      }),
      (t.prototype.pointToData = function (e, n) {
        return this.coordToData(
          this.toLocalCoord(e[this.dim === "x" ? 0 : 1]),
          n
        );
      }),
      (t.prototype.setCategorySortInfo = function (e) {
        if (this.type !== "category") return !1;
        (this.model.option.categorySortInfo = e), this.scale.setSortInfo(e);
      }),
      t
    );
  })(_A);
const T2 = b2;
function mf(r, t, e) {
  e = e || {};
  var n = r.coordinateSystem,
    i = t.axis,
    a = {},
    o = i.getAxesOnZeroOf()[0],
    s = i.position,
    u = o ? "onZero" : s,
    l = i.dim,
    f = n.getRect(),
    h = [f.x, f.x + f.width, f.y, f.y + f.height],
    c = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
    v = t.get("offset") || 0,
    d = l === "x" ? [h[2] - v, h[3] + v] : [h[0] - v, h[1] + v];
  if (o) {
    var g = o.toGlobalCoord(o.dataToCoord(0));
    d[c.onZero] = Math.max(Math.min(g, d[1]), d[0]);
  }
  (a.position = [l === "y" ? d[c[u]] : h[0], l === "x" ? d[c[u]] : h[3]]),
    (a.rotation = (Math.PI / 2) * (l === "x" ? 0 : 1));
  var p = { top: -1, bottom: 1, left: -1, right: 1 };
  (a.labelDirection = a.tickDirection = a.nameDirection = p[s]),
    (a.labelOffset = o ? d[c[s]] - d[c.onZero] : 0),
    t.get(["axisTick", "inside"]) && (a.tickDirection = -a.tickDirection),
    na(e.labelInside, t.get(["axisLabel", "inside"])) &&
      (a.labelDirection = -a.labelDirection);
  var y = t.get(["axisLabel", "rotate"]);
  return (a.labelRotate = u === "top" ? -y : y), (a.z2 = 1), a;
}
function ep(r) {
  return r.get("coordinateSystem") === "cartesian2d";
}
function rp(r) {
  var t = { xAxisModel: null, yAxisModel: null };
  return (
    C(t, function (e, n) {
      var i = n.replace(/Model$/, ""),
        a = r.getReferringComponents(i, zt).models[0];
      t[n] = a;
    }),
    t
  );
}
var rl = Math.log;
function C2(r, t, e) {
  var n = Ra.prototype,
    i = n.getTicks.call(e),
    a = n.getTicks.call(e, !0),
    o = i.length - 1,
    s = n.getInterval.call(e),
    u = W0(r, t),
    l = u.extent,
    f = u.fixMin,
    h = u.fixMax;
  if (r.type === "log") {
    var c = rl(r.base);
    l = [rl(l[0]) / c, rl(l[1]) / c];
  }
  r.setExtent(l[0], l[1]),
    r.calcNiceExtent({ splitNumber: o, fixMin: f, fixMax: h });
  var v = n.getExtent.call(r);
  f && (l[0] = v[0]), h && (l[1] = v[1]);
  var d = n.getInterval.call(r),
    g = l[0],
    p = l[1];
  if (f && h) d = (p - g) / o;
  else if (f)
    for (p = l[0] + d * o; p < l[1] && isFinite(p) && isFinite(l[1]); )
      (d = Qu(d)), (p = l[0] + d * o);
  else if (h)
    for (g = l[1] - d * o; g > l[0] && isFinite(g) && isFinite(l[0]); )
      (d = Qu(d)), (g = l[1] - d * o);
  else {
    var y = r.getTicks().length - 1;
    y > o && (d = Qu(d));
    var m = d * o;
    (p = Math.ceil(l[1] / d) * d),
      (g = wt(p - m)),
      g < 0 && l[0] >= 0
        ? ((g = 0), (p = wt(m)))
        : p > 0 && l[1] <= 0 && ((p = 0), (g = -wt(m)));
  }
  var _ = (i[0].value - a[0].value) / s,
    S = (i[o].value - a[o].value) / s;
  n.setExtent.call(r, g + d * _, p + d * S),
    n.setInterval.call(r, d),
    (_ || S) && n.setNiceExtent.call(r, g + d, p - d);
}
var M2 = (function () {
  function r(t, e, n) {
    (this.type = "grid"),
      (this._coordsMap = {}),
      (this._coordsList = []),
      (this._axesMap = {}),
      (this._axesList = []),
      (this.axisPointerEnabled = !0),
      (this.dimensions = yf),
      this._initCartesian(t, e, n),
      (this.model = t);
  }
  return (
    (r.prototype.getRect = function () {
      return this._rect;
    }),
    (r.prototype.update = function (t, e) {
      var n = this._axesMap;
      this._updateScale(t, this.model);
      function i(o) {
        var s,
          u = pt(o),
          l = u.length;
        if (!!l) {
          for (var f = [], h = l - 1; h >= 0; h--) {
            var c = +u[h],
              v = o[c],
              d = v.model,
              g = v.scale;
            cf(g) && d.get("alignTicks") && d.get("interval") == null
              ? f.push(v)
              : (Nd(g, d), cf(g) && (s = v));
          }
          f.length &&
            (s || ((s = f.pop()), Nd(s.scale, s.model)),
            C(f, function (p) {
              C2(p.scale, p.model, s.scale);
            }));
        }
      }
      i(n.x), i(n.y);
      var a = {};
      C(n.x, function (o) {
        np(n, "y", o, a);
      }),
        C(n.y, function (o) {
          np(n, "x", o, a);
        }),
        this.resize(this.model, e);
    }),
    (r.prototype.resize = function (t, e, n) {
      var i = t.getBoxLayoutParams(),
        a = !n && t.get("containLabel"),
        o = wr(i, { width: e.getWidth(), height: e.getHeight() });
      this._rect = o;
      var s = this._axesList;
      u(),
        a &&
          (C(s, function (l) {
            if (!l.model.get(["axisLabel", "inside"])) {
              var f = iA(l);
              if (f) {
                var h = l.isHorizontal() ? "height" : "width",
                  c = l.model.get(["axisLabel", "margin"]);
                (o[h] -= f[h] + c),
                  l.position === "top"
                    ? (o.y += f.height + c)
                    : l.position === "left" && (o.x += f.width + c);
              }
            }
          }),
          u()),
        C(this._coordsList, function (l) {
          l.calcAffineTransform();
        });
      function u() {
        C(s, function (l) {
          var f = l.isHorizontal(),
            h = f ? [0, o.width] : [0, o.height],
            c = l.inverse ? 1 : 0;
          l.setExtent(h[c], h[1 - c]), D2(l, f ? o.x : o.y);
        });
      }
    }),
    (r.prototype.getAxis = function (t, e) {
      var n = this._axesMap[t];
      if (n != null) return n[e || 0];
    }),
    (r.prototype.getAxes = function () {
      return this._axesList.slice();
    }),
    (r.prototype.getCartesian = function (t, e) {
      if (t != null && e != null) {
        var n = "x" + t + "y" + e;
        return this._coordsMap[n];
      }
      H(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex));
      for (var i = 0, a = this._coordsList; i < a.length; i++)
        if (a[i].getAxis("x").index === t || a[i].getAxis("y").index === e)
          return a[i];
    }),
    (r.prototype.getCartesians = function () {
      return this._coordsList.slice();
    }),
    (r.prototype.convertToPixel = function (t, e, n) {
      var i = this._findConvertTarget(e);
      return i.cartesian
        ? i.cartesian.dataToPoint(n)
        : i.axis
        ? i.axis.toGlobalCoord(i.axis.dataToCoord(n))
        : null;
    }),
    (r.prototype.convertFromPixel = function (t, e, n) {
      var i = this._findConvertTarget(e);
      return i.cartesian
        ? i.cartesian.pointToData(n)
        : i.axis
        ? i.axis.coordToData(i.axis.toLocalCoord(n))
        : null;
    }),
    (r.prototype._findConvertTarget = function (t) {
      var e = t.seriesModel,
        n =
          t.xAxisModel ||
          (e && e.getReferringComponents("xAxis", zt).models[0]),
        i =
          t.yAxisModel ||
          (e && e.getReferringComponents("yAxis", zt).models[0]),
        a = t.gridModel,
        o = this._coordsList,
        s,
        u;
      if (e) (s = e.coordinateSystem), J(o, s) < 0 && (s = null);
      else if (n && i)
        s = this.getCartesian(n.componentIndex, i.componentIndex);
      else if (n) u = this.getAxis("x", n.componentIndex);
      else if (i) u = this.getAxis("y", i.componentIndex);
      else if (a) {
        var l = a.coordinateSystem;
        l === this && (s = this._coordsList[0]);
      }
      return { cartesian: s, axis: u };
    }),
    (r.prototype.containPoint = function (t) {
      var e = this._coordsList[0];
      if (e) return e.containPoint(t);
    }),
    (r.prototype._initCartesian = function (t, e, n) {
      var i = this,
        a = this,
        o = { left: !1, right: !1, top: !1, bottom: !1 },
        s = { x: {}, y: {} },
        u = { x: 0, y: 0 };
      if (
        (e.eachComponent("xAxis", l("x"), this),
        e.eachComponent("yAxis", l("y"), this),
        !u.x || !u.y)
      ) {
        (this._axesMap = {}), (this._axesList = []);
        return;
      }
      (this._axesMap = s),
        C(s.x, function (f, h) {
          C(s.y, function (c, v) {
            var d = "x" + h + "y" + v,
              g = new w2(d);
            (g.master = i),
              (g.model = t),
              (i._coordsMap[d] = g),
              i._coordsList.push(g),
              g.addAxis(f),
              g.addAxis(c);
          });
        });
      function l(f) {
        return function (h, c) {
          if (!!nl(h, t)) {
            var v = h.get("position");
            f === "x"
              ? v !== "top" &&
                v !== "bottom" &&
                (v = o.bottom ? "top" : "bottom")
              : v !== "left" &&
                v !== "right" &&
                (v = o.left ? "right" : "left"),
              (o[v] = !0);
            var d = new T2(f, rA(h), [0, 0], h.get("type"), v),
              g = d.type === "category";
            (d.onBand = g && h.get("boundaryGap")),
              (d.inverse = h.get("inverse")),
              (h.axis = d),
              (d.model = h),
              (d.grid = a),
              (d.index = c),
              a._axesList.push(d),
              (s[f][c] = d),
              u[f]++;
          }
        };
      }
    }),
    (r.prototype._updateScale = function (t, e) {
      C(this._axesList, function (i) {
        if ((i.scale.setExtent(1 / 0, -1 / 0), i.type === "category")) {
          var a = i.model.get("categorySortInfo");
          i.scale.setSortInfo(a);
        }
      }),
        t.eachSeries(function (i) {
          if (ep(i)) {
            var a = rp(i),
              o = a.xAxisModel,
              s = a.yAxisModel;
            if (!nl(o, e) || !nl(s, e)) return;
            var u = this.getCartesian(o.componentIndex, s.componentIndex),
              l = i.getData(),
              f = u.getAxis("x"),
              h = u.getAxis("y");
            n(l, f), n(l, h);
          }
        }, this);
      function n(i, a) {
        C(Y0(i, a.dim), function (o) {
          a.scale.unionExtentFromData(i, o);
        });
      }
    }),
    (r.prototype.getTooltipAxes = function (t) {
      var e = [],
        n = [];
      return (
        C(this.getCartesians(), function (i) {
          var a = t != null && t !== "auto" ? i.getAxis(t) : i.getBaseAxis(),
            o = i.getOtherAxis(a);
          J(e, a) < 0 && e.push(a), J(n, o) < 0 && n.push(o);
        }),
        { baseAxes: e, otherAxes: n }
      );
    }),
    (r.create = function (t, e) {
      var n = [];
      return (
        t.eachComponent("grid", function (i, a) {
          var o = new r(i, t, e);
          (o.name = "grid_" + a),
            o.resize(i, e, !0),
            (i.coordinateSystem = o),
            n.push(o);
        }),
        t.eachSeries(function (i) {
          if (!!ep(i)) {
            var a = rp(i),
              o = a.xAxisModel,
              s = a.yAxisModel,
              u = o.getCoordSysModel(),
              l = u.coordinateSystem;
            i.coordinateSystem = l.getCartesian(
              o.componentIndex,
              s.componentIndex
            );
          }
        }),
        n
      );
    }),
    (r.dimensions = yf),
    r
  );
})();
function nl(r, t) {
  return r.getCoordSysModel() === t;
}
function np(r, t, e, n) {
  e.getAxesOnZeroOf = function () {
    return a ? [a] : [];
  };
  var i = r[t],
    a,
    o = e.model,
    s = o.get(["axisLine", "onZero"]),
    u = o.get(["axisLine", "onZeroAxisIndex"]);
  if (!s) return;
  if (u != null) ip(i[u]) && (a = i[u]);
  else
    for (var l in i)
      if (i.hasOwnProperty(l) && ip(i[l]) && !n[f(i[l])]) {
        a = i[l];
        break;
      }
  a && (n[f(a)] = !0);
  function f(h) {
    return h.dim + "_" + h.index;
  }
}
function ip(r) {
  return r && r.type !== "category" && r.type !== "time" && nA(r);
}
function D2(r, t) {
  var e = r.getExtent(),
    n = e[0] + e[1];
  (r.toGlobalCoord =
    r.dim === "x"
      ? function (i) {
          return i + t;
        }
      : function (i) {
          return n - i + t;
        }),
    (r.toLocalCoord =
      r.dim === "x"
        ? function (i) {
            return i - t;
          }
        : function (i) {
            return n - i + t;
          });
}
const A2 = M2;
var dr = Math.PI,
  on = (function () {
    function r(t, e) {
      (this.group = new bt()),
        (this.opt = e),
        (this.axisModel = t),
        q(e, {
          labelOffset: 0,
          nameDirection: 1,
          tickDirection: 1,
          labelDirection: 1,
          silent: !0,
          handleAutoShown: function () {
            return !0;
          },
        });
      var n = new bt({
        x: e.position[0],
        y: e.position[1],
        rotation: e.rotation,
      });
      n.updateTransform(), (this._transformGroup = n);
    }
    return (
      (r.prototype.hasBuilder = function (t) {
        return !!ap[t];
      }),
      (r.prototype.add = function (t) {
        ap[t](this.opt, this.axisModel, this.group, this._transformGroup);
      }),
      (r.prototype.getGroup = function () {
        return this.group;
      }),
      (r.innerTextLayout = function (t, e, n) {
        var i = Xg(e - t),
          a,
          o;
        return (
          Zo(i)
            ? ((o = n > 0 ? "top" : "bottom"), (a = "center"))
            : Zo(i - dr)
            ? ((o = n > 0 ? "bottom" : "top"), (a = "center"))
            : ((o = "middle"),
              i > 0 && i < dr
                ? (a = n > 0 ? "right" : "left")
                : (a = n > 0 ? "left" : "right")),
          { rotation: i, textAlign: a, textVerticalAlign: o }
        );
      }),
      (r.makeAxisEventDataBase = function (t) {
        var e = { componentType: t.mainType, componentIndex: t.componentIndex };
        return (e[t.mainType + "Index"] = t.componentIndex), e;
      }),
      (r.isLabelSilent = function (t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || (e && e.show));
      }),
      r
    );
  })(),
  ap = {
    axisLine: function (r, t, e, n) {
      var i = t.get(["axisLine", "show"]);
      if (
        (i === "auto" &&
          r.handleAutoShown &&
          (i = r.handleAutoShown("axisLine")),
        !!i)
      ) {
        var a = t.axis.getExtent(),
          o = n.transform,
          s = [a[0], 0],
          u = [a[1], 0];
        o && (fe(s, s, o), fe(u, u, o));
        var l = k(
            { lineCap: "round" },
            t.getModel(["axisLine", "lineStyle"]).getLineStyle()
          ),
          f = new fn({
            subPixelOptimize: !0,
            shape: { x1: s[0], y1: s[1], x2: u[0], y2: u[1] },
            style: l,
            strokeContainThreshold: r.strokeContainThreshold || 5,
            silent: !0,
            z2: 1,
          });
        (f.anid = "line"), e.add(f);
        var h = t.get(["axisLine", "symbol"]);
        if (h != null) {
          var c = t.get(["axisLine", "symbolSize"]);
          G(h) && (h = [h, h]), (G(c) || ft(c)) && (c = [c, c]);
          var v = n0(t.get(["axisLine", "symbolOffset"]) || 0, c),
            d = c[0],
            g = c[1];
          C(
            [
              { rotate: r.rotation + Math.PI / 2, offset: v[0], r: 0 },
              {
                rotate: r.rotation - Math.PI / 2,
                offset: v[1],
                r: Math.sqrt(
                  (s[0] - u[0]) * (s[0] - u[0]) + (s[1] - u[1]) * (s[1] - u[1])
                ),
              },
            ],
            function (p, y) {
              if (h[y] !== "none" && h[y] != null) {
                var m = br(h[y], -d / 2, -g / 2, d, g, l.stroke, !0),
                  _ = p.r + p.offset;
                m.attr({
                  rotation: p.rotate,
                  x: s[0] + _ * Math.cos(r.rotation),
                  y: s[1] - _ * Math.sin(r.rotation),
                  silent: !0,
                  z2: 11,
                }),
                  e.add(m);
              }
            }
          );
        }
      }
    },
    axisTickLabel: function (r, t, e, n) {
      var i = P2(e, n, t, r),
        a = E2(e, n, t, r);
      if (
        (I2(t, a, i),
        R2(e, n, t, r.tickDirection),
        t.get(["axisLabel", "hideOverlap"]))
      ) {
        var o = j0(
          z(a, function (s) {
            return {
              label: s,
              priority: s.z2,
              defaultAttr: { ignore: s.ignore },
            };
          })
        );
        e_(o);
      }
    },
    axisName: function (r, t, e, n) {
      var i = na(r.axisName, t.get("name"));
      if (!!i) {
        var a = t.get("nameLocation"),
          o = r.nameDirection,
          s = t.getModel("nameTextStyle"),
          u = t.get("nameGap") || 0,
          l = t.axis.getExtent(),
          f = l[0] > l[1] ? -1 : 1,
          h = [
            a === "start"
              ? l[0] - f * u
              : a === "end"
              ? l[1] + f * u
              : (l[0] + l[1]) / 2,
            sp(a) ? r.labelOffset + o * u : 0,
          ],
          c,
          v = t.get("nameRotate");
        v != null && (v = (v * dr) / 180);
        var d;
        sp(a)
          ? (c = on.innerTextLayout(r.rotation, v != null ? v : r.rotation, o))
          : ((c = L2(r.rotation, a, v || 0, l)),
            (d = r.axisNameAvailableWidth),
            d != null &&
              ((d = Math.abs(d / Math.sin(c.rotation))),
              !isFinite(d) && (d = null)));
        var g = s.getFont(),
          p = t.get("nameTruncate", !0) || {},
          y = p.ellipsis,
          m = na(r.nameTruncateMaxWidth, p.maxWidth, d),
          _ = new Dt({
            x: h[0],
            y: h[1],
            rotation: c.rotation,
            silent: on.isLabelSilent(t),
            style: Qe(s, {
              text: i,
              font: g,
              overflow: "truncate",
              width: m,
              ellipsis: y,
              fill:
                s.getTextColor() || t.get(["axisLine", "lineStyle", "color"]),
              align: s.get("align") || c.textAlign,
              verticalAlign: s.get("verticalAlign") || c.textVerticalAlign,
            }),
            z2: 1,
          });
        if (
          (Ls({ el: _, componentModel: t, itemName: i }),
          (_.__fullText = i),
          (_.anid = "name"),
          t.get("triggerEvent"))
        ) {
          var S = on.makeAxisEventDataBase(t);
          (S.targetType = "axisName"), (S.name = i), (ut(_).eventData = S);
        }
        n.add(_), _.updateTransform(), e.add(_), _.decomposeTransform();
      }
    },
  };
function L2(r, t, e, n) {
  var i = Xg(e - r),
    a,
    o,
    s = n[0] > n[1],
    u = (t === "start" && !s) || (t !== "start" && s);
  return (
    Zo(i - dr / 2)
      ? ((o = u ? "bottom" : "top"), (a = "center"))
      : Zo(i - dr * 1.5)
      ? ((o = u ? "top" : "bottom"), (a = "center"))
      : ((o = "middle"),
        i < dr * 1.5 && i > dr / 2
          ? (a = u ? "left" : "right")
          : (a = u ? "right" : "left")),
    { rotation: i, textAlign: a, textVerticalAlign: o }
  );
}
function I2(r, t, e) {
  if (!U0(r.axis)) {
    var n = r.get(["axisLabel", "showMinLabel"]),
      i = r.get(["axisLabel", "showMaxLabel"]);
    (t = t || []), (e = e || []);
    var a = t[0],
      o = t[1],
      s = t[t.length - 1],
      u = t[t.length - 2],
      l = e[0],
      f = e[1],
      h = e[e.length - 1],
      c = e[e.length - 2];
    n === !1
      ? (re(a), re(l))
      : op(a, o) && (n ? (re(o), re(f)) : (re(a), re(l))),
      i === !1
        ? (re(s), re(h))
        : op(u, s) && (i ? (re(u), re(c)) : (re(s), re(h)));
  }
}
function re(r) {
  r && (r.ignore = !0);
}
function op(r, t) {
  var e = r && r.getBoundingRect().clone(),
    n = t && t.getBoundingRect().clone();
  if (!(!e || !n)) {
    var i = Uf([]);
    return (
      Yf(i, i, -r.rotation),
      e.applyTransform(Zn([], i, r.getLocalTransform())),
      n.applyTransform(Zn([], i, t.getLocalTransform())),
      e.intersect(n)
    );
  }
}
function sp(r) {
  return r === "middle" || r === "center";
}
function u_(r, t, e, n, i) {
  for (var a = [], o = [], s = [], u = 0; u < r.length; u++) {
    var l = r[u].coord;
    (o[0] = l),
      (o[1] = 0),
      (s[0] = l),
      (s[1] = e),
      t && (fe(o, o, t), fe(s, s, t));
    var f = new fn({
      subPixelOptimize: !0,
      shape: { x1: o[0], y1: o[1], x2: s[0], y2: s[1] },
      style: n,
      z2: 2,
      autoBatch: !0,
      silent: !0,
    });
    (f.anid = i + "_" + r[u].tickValue), a.push(f);
  }
  return a;
}
function P2(r, t, e, n) {
  var i = e.axis,
    a = e.getModel("axisTick"),
    o = a.get("show");
  if (
    (o === "auto" && n.handleAutoShown && (o = n.handleAutoShown("axisTick")),
    !(!o || i.scale.isBlank()))
  ) {
    for (
      var s = a.getModel("lineStyle"),
        u = n.tickDirection * a.get("length"),
        l = i.getTicksCoords(),
        f = u_(
          l,
          t.transform,
          u,
          q(s.getLineStyle(), {
            stroke: e.get(["axisLine", "lineStyle", "color"]),
          }),
          "ticks"
        ),
        h = 0;
      h < f.length;
      h++
    )
      r.add(f[h]);
    return f;
  }
}
function R2(r, t, e, n) {
  var i = e.axis,
    a = e.getModel("minorTick");
  if (!(!a.get("show") || i.scale.isBlank())) {
    var o = i.getMinorTicksCoords();
    if (!!o.length)
      for (
        var s = a.getModel("lineStyle"),
          u = n * a.get("length"),
          l = q(
            s.getLineStyle(),
            q(e.getModel("axisTick").getLineStyle(), {
              stroke: e.get(["axisLine", "lineStyle", "color"]),
            })
          ),
          f = 0;
        f < o.length;
        f++
      )
        for (
          var h = u_(o[f], t.transform, u, l, "minorticks_" + f), c = 0;
          c < h.length;
          c++
        )
          r.add(h[c]);
  }
}
function E2(r, t, e, n) {
  var i = e.axis,
    a = na(n.axisLabelShow, e.get(["axisLabel", "show"]));
  if (!(!a || i.scale.isBlank())) {
    var o = e.getModel("axisLabel"),
      s = o.get("margin"),
      u = i.getViewLabels(),
      l = ((na(n.labelRotate, o.get("rotate")) || 0) * dr) / 180,
      f = on.innerTextLayout(n.rotation, l, n.labelDirection),
      h = e.getCategories && e.getCategories(!0),
      c = [],
      v = on.isLabelSilent(e),
      d = e.get("triggerEvent");
    return (
      C(u, function (g, p) {
        var y =
            i.scale.type === "ordinal"
              ? i.scale.getRawOrdinalNumber(g.tickValue)
              : g.tickValue,
          m = g.formattedLabel,
          _ = g.rawLabel,
          S = o;
        if (h && h[y]) {
          var w = h[y];
          H(w) && w.textStyle && (S = new At(w.textStyle, o, e.ecModel));
        }
        var x = S.getTextColor() || e.get(["axisLine", "lineStyle", "color"]),
          b = i.dataToCoord(y),
          T = new Dt({
            x: b,
            y: n.labelOffset + n.labelDirection * s,
            rotation: f.rotation,
            silent: v,
            z2: 10 + (g.level || 0),
            style: Qe(S, {
              text: m,
              align: S.getShallow("align", !0) || f.textAlign,
              verticalAlign:
                S.getShallow("verticalAlign", !0) ||
                S.getShallow("baseline", !0) ||
                f.textVerticalAlign,
              fill: U(x)
                ? x(
                    i.type === "category" ? _ : i.type === "value" ? y + "" : y,
                    p
                  )
                : x,
            }),
          });
        if (((T.anid = "label_" + y), d)) {
          var M = on.makeAxisEventDataBase(e);
          (M.targetType = "axisLabel"),
            (M.value = _),
            (M.tickIndex = p),
            i.type === "category" && (M.dataIndex = y),
            (ut(T).eventData = M);
        }
        t.add(T),
          T.updateTransform(),
          c.push(T),
          r.add(T),
          T.decomposeTransform();
      }),
      c
    );
  }
}
const l_ = on;
function O2(r, t) {
  var e = {
    axesInfo: {},
    seriesInvolved: !1,
    coordSysAxesInfo: {},
    coordSysMap: {},
  };
  return k2(e, r, t), e.seriesInvolved && N2(e, r), e;
}
function k2(r, t, e) {
  var n = t.getComponent("tooltip"),
    i = t.getComponent("axisPointer"),
    a = i.get("link", !0) || [],
    o = [];
  C(e.getCoordinateSystems(), function (s) {
    if (!s.axisPointerEnabled) return;
    var u = xa(s.model),
      l = (r.coordSysAxesInfo[u] = {});
    r.coordSysMap[u] = s;
    var f = s.model,
      h = f.getModel("tooltip", n);
    if (
      (C(s.getAxes(), ot(g, !1, null)), s.getTooltipAxes && n && h.get("show"))
    ) {
      var c = h.get("trigger") === "axis",
        v = h.get(["axisPointer", "type"]) === "cross",
        d = s.getTooltipAxes(h.get(["axisPointer", "axis"]));
      (c || v) && C(d.baseAxes, ot(g, v ? "cross" : !0, c)),
        v && C(d.otherAxes, ot(g, "cross", !1));
    }
    function g(p, y, m) {
      var _ = m.model.getModel("axisPointer", i),
        S = _.get("show");
      if (!(!S || (S === "auto" && !p && !_f(_)))) {
        y == null && (y = _.get("triggerTooltip")),
          (_ = p ? B2(m, h, i, t, p, y) : _);
        var w = _.get("snap"),
          x = xa(m.model),
          b = y || w || m.type === "category",
          T = (r.axesInfo[x] = {
            key: x,
            axis: m,
            coordSys: s,
            axisPointerModel: _,
            triggerTooltip: y,
            involveSeries: b,
            snap: w,
            useHandle: _f(_),
            seriesModels: [],
            linkGroup: null,
          });
        (l[x] = T), (r.seriesInvolved = r.seriesInvolved || b);
        var M = F2(a, m);
        if (M != null) {
          var D = o[M] || (o[M] = { axesInfo: {} });
          (D.axesInfo[x] = T), (D.mapper = a[M].mapper), (T.linkGroup = D);
        }
      }
    }
  });
}
function B2(r, t, e, n, i, a) {
  var o = t.getModel("axisPointer"),
    s = [
      "type",
      "snap",
      "lineStyle",
      "shadowStyle",
      "label",
      "animation",
      "animationDurationUpdate",
      "animationEasingUpdate",
      "z",
    ],
    u = {};
  C(s, function (c) {
    u[c] = K(o.get(c));
  }),
    (u.snap = r.type !== "category" && !!a),
    o.get("type") === "cross" && (u.type = "line");
  var l = u.label || (u.label = {});
  if ((l.show == null && (l.show = !1), i === "cross")) {
    var f = o.get(["label", "show"]);
    if (((l.show = f != null ? f : !0), !a)) {
      var h = (u.lineStyle = o.get("crossStyle"));
      h && q(l, h.textStyle);
    }
  }
  return r.model.getModel("axisPointer", new At(u, e, n));
}
function N2(r, t) {
  t.eachSeries(function (e) {
    var n = e.coordinateSystem,
      i = e.get(["tooltip", "trigger"], !0),
      a = e.get(["tooltip", "show"], !0);
    !n ||
      i === "none" ||
      i === !1 ||
      i === "item" ||
      a === !1 ||
      e.get(["axisPointer", "show"], !0) === !1 ||
      C(r.coordSysAxesInfo[xa(n.model)], function (o) {
        var s = o.axis;
        n.getAxis(s.dim) === s &&
          (o.seriesModels.push(e),
          o.seriesDataCount == null && (o.seriesDataCount = 0),
          (o.seriesDataCount += e.getData().count()));
      });
  });
}
function F2(r, t) {
  for (var e = t.model, n = t.dim, i = 0; i < r.length; i++) {
    var a = r[i] || {};
    if (
      il(a[n + "AxisId"], e.id) ||
      il(a[n + "AxisIndex"], e.componentIndex) ||
      il(a[n + "AxisName"], e.name)
    )
      return i;
  }
}
function il(r, t) {
  return r === "all" || (N(r) && J(r, t) >= 0) || r === t;
}
function z2(r) {
  var t = Bh(r);
  if (!!t) {
    var e = t.axisPointerModel,
      n = t.axis.scale,
      i = e.option,
      a = e.get("status"),
      o = e.get("value");
    o != null && (o = n.parse(o));
    var s = _f(e);
    a == null && (i.status = s ? "show" : "hide");
    var u = n.getExtent().slice();
    u[0] > u[1] && u.reverse(),
      (o == null || o > u[1]) && (o = u[1]),
      o < u[0] && (o = u[0]),
      (i.value = o),
      s && (i.status = t.axis.scale.isBlank() ? "hide" : "show");
  }
}
function Bh(r) {
  var t = (r.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
  return t && t.axesInfo[xa(r)];
}
function G2(r) {
  var t = Bh(r);
  return t && t.axisPointerModel;
}
function _f(r) {
  return !!r.get(["handle", "show"]);
}
function xa(r) {
  return r.type + "||" + r.id;
}
var up = {},
  H2 = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), e;
    }
    return (
      (t.prototype.render = function (e, n, i, a) {
        this.axisPointerClass && z2(e),
          r.prototype.render.apply(this, arguments),
          this._doUpdateAxisPointerClass(e, i, !0);
      }),
      (t.prototype.updateAxisPointer = function (e, n, i, a) {
        this._doUpdateAxisPointerClass(e, i, !1);
      }),
      (t.prototype.remove = function (e, n) {
        var i = this._axisPointer;
        i && i.remove(n);
      }),
      (t.prototype.dispose = function (e, n) {
        this._disposeAxisPointer(n), r.prototype.dispose.apply(this, arguments);
      }),
      (t.prototype._doUpdateAxisPointerClass = function (e, n, i) {
        var a = t.getAxisPointerClass(this.axisPointerClass);
        if (!!a) {
          var o = G2(e);
          o
            ? (this._axisPointer || (this._axisPointer = new a())).render(
                e,
                o,
                n,
                i
              )
            : this._disposeAxisPointer(n);
        }
      }),
      (t.prototype._disposeAxisPointer = function (e) {
        this._axisPointer && this._axisPointer.dispose(e),
          (this._axisPointer = null);
      }),
      (t.registerAxisPointerClass = function (e, n) {
        up[e] = n;
      }),
      (t.getAxisPointerClass = function (e) {
        return e && up[e];
      }),
      (t.type = "axis"),
      t
    );
  })(ve);
const f_ = H2;
var Sf = gt();
function V2(r, t, e, n) {
  var i = e.axis;
  if (!i.scale.isBlank()) {
    var a = e.getModel("splitArea"),
      o = a.getModel("areaStyle"),
      s = o.get("color"),
      u = n.coordinateSystem.getRect(),
      l = i.getTicksCoords({ tickModel: a, clamp: !0 });
    if (!!l.length) {
      var f = s.length,
        h = Sf(r).splitAreaColors,
        c = W(),
        v = 0;
      if (h)
        for (var d = 0; d < l.length; d++) {
          var g = h.get(l[d].tickValue);
          if (g != null) {
            v = (g + (f - 1) * d) % f;
            break;
          }
        }
      var p = i.toGlobalCoord(l[0].coord),
        y = o.getAreaStyle();
      s = N(s) ? s : [s];
      for (var d = 1; d < l.length; d++) {
        var m = i.toGlobalCoord(l[d].coord),
          _ = void 0,
          S = void 0,
          w = void 0,
          x = void 0;
        i.isHorizontal()
          ? ((_ = p), (S = u.y), (w = m - _), (x = u.height), (p = _ + w))
          : ((_ = u.x), (S = p), (w = u.width), (x = m - S), (p = S + x));
        var b = l[d - 1].tickValue;
        b != null && c.set(b, v),
          t.add(
            new yt({
              anid: b != null ? "area_" + b : null,
              shape: { x: _, y: S, width: w, height: x },
              style: q({ fill: s[v] }, y),
              autoBatch: !0,
              silent: !0,
            })
          ),
          (v = (v + 1) % f);
      }
      Sf(r).splitAreaColors = c;
    }
  }
}
function W2(r) {
  Sf(r).splitAreaColors = null;
}
var U2 = ["axisLine", "axisTickLabel", "axisName"],
  Y2 = ["splitArea", "splitLine", "minorSplitLine"],
  h_ = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = t.type), (e.axisPointerClass = "CartesianAxisPointer"), e
      );
    }
    return (
      (t.prototype.render = function (e, n, i, a) {
        this.group.removeAll();
        var o = this._axisGroup;
        if (
          ((this._axisGroup = new bt()),
          this.group.add(this._axisGroup),
          !!e.get("show"))
        ) {
          var s = e.getCoordSysModel(),
            u = mf(s, e),
            l = new l_(
              e,
              k(
                {
                  handleAutoShown: function (h) {
                    for (
                      var c = s.coordinateSystem.getCartesians(), v = 0;
                      v < c.length;
                      v++
                    )
                      if (cf(c[v].getOtherAxis(e.axis).scale)) return !0;
                    return !1;
                  },
                },
                u
              )
            );
          C(U2, l.add, l),
            this._axisGroup.add(l.getGroup()),
            C(
              Y2,
              function (h) {
                e.get([h, "show"]) && $2[h](this, this._axisGroup, e, s);
              },
              this
            );
          var f = a && a.type === "changeAxisOrder" && a.isInitSort;
          f || Jy(o, this._axisGroup, e),
            r.prototype.render.call(this, e, n, i, a);
        }
      }),
      (t.prototype.remove = function () {
        W2(this);
      }),
      (t.type = "cartesianAxis"),
      t
    );
  })(f_),
  $2 = {
    splitLine: function (r, t, e, n) {
      var i = e.axis;
      if (!i.scale.isBlank()) {
        var a = e.getModel("splitLine"),
          o = a.getModel("lineStyle"),
          s = o.get("color");
        s = N(s) ? s : [s];
        for (
          var u = n.coordinateSystem.getRect(),
            l = i.isHorizontal(),
            f = 0,
            h = i.getTicksCoords({ tickModel: a }),
            c = [],
            v = [],
            d = o.getLineStyle(),
            g = 0;
          g < h.length;
          g++
        ) {
          var p = i.toGlobalCoord(h[g].coord);
          l
            ? ((c[0] = p), (c[1] = u.y), (v[0] = p), (v[1] = u.y + u.height))
            : ((c[0] = u.x), (c[1] = p), (v[0] = u.x + u.width), (v[1] = p));
          var y = f++ % s.length,
            m = h[g].tickValue;
          t.add(
            new fn({
              anid: m != null ? "line_" + h[g].tickValue : null,
              subPixelOptimize: !0,
              autoBatch: !0,
              shape: { x1: c[0], y1: c[1], x2: v[0], y2: v[1] },
              style: q({ stroke: s[y] }, d),
              silent: !0,
            })
          );
        }
      }
    },
    minorSplitLine: function (r, t, e, n) {
      var i = e.axis,
        a = e.getModel("minorSplitLine"),
        o = a.getModel("lineStyle"),
        s = n.coordinateSystem.getRect(),
        u = i.isHorizontal(),
        l = i.getMinorTicksCoords();
      if (!!l.length)
        for (var f = [], h = [], c = o.getLineStyle(), v = 0; v < l.length; v++)
          for (var d = 0; d < l[v].length; d++) {
            var g = i.toGlobalCoord(l[v][d].coord);
            u
              ? ((f[0] = g), (f[1] = s.y), (h[0] = g), (h[1] = s.y + s.height))
              : ((f[0] = s.x), (f[1] = g), (h[0] = s.x + s.width), (h[1] = g)),
              t.add(
                new fn({
                  anid: "minor_line_" + l[v][d].tickValue,
                  subPixelOptimize: !0,
                  autoBatch: !0,
                  shape: { x1: f[0], y1: f[1], x2: h[0], y2: h[1] },
                  style: c,
                  silent: !0,
                })
              );
          }
    },
    splitArea: function (r, t, e, n) {
      V2(r, t, e, n);
    },
  },
  v_ = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), e;
    }
    return (t.type = "xAxis"), t;
  })(h_),
  Z2 = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = v_.type), e;
    }
    return (t.type = "yAxis"), t;
  })(h_),
  X2 = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = "grid"), e;
    }
    return (
      (t.prototype.render = function (e, n) {
        this.group.removeAll(),
          e.get("show") &&
            this.group.add(
              new yt({
                shape: e.coordinateSystem.getRect(),
                style: q({ fill: e.get("backgroundColor") }, e.getItemStyle()),
                silent: !0,
                z2: -1,
              })
            );
      }),
      (t.type = "grid"),
      t
    );
  })(ve),
  lp = { offset: 0 };
function q2(r) {
  r.registerComponentView(X2),
    r.registerComponentModel(d2),
    r.registerCoordinateSystem("cartesian2d", A2),
    Jd(r, "x", gf, lp),
    Jd(r, "y", gf, lp),
    r.registerComponentView(v_),
    r.registerComponentView(Z2),
    r.registerPreprocessor(function (t) {
      t.xAxis && t.yAxis && !t.grid && (t.grid = {});
    });
}
var fp = "\0_ec_interaction_mutex";
function K2(r, t, e) {
  var n = Nh(r);
  n[t] = e;
}
function Q2(r, t, e) {
  var n = Nh(r),
    i = n[t];
  i === e && (n[t] = null);
}
function hp(r, t) {
  return !!Nh(r)[t];
}
function Nh(r) {
  return r[fp] || (r[fp] = {});
}
Fe(
  { type: "takeGlobalCursor", event: "globalCursorTaken", update: "update" },
  Gt
);
var J2 = (function (r) {
  O(t, r);
  function t(e) {
    var n = r.call(this) || this;
    n._zr = e;
    var i = Y(n._mousedownHandler, n),
      a = Y(n._mousemoveHandler, n),
      o = Y(n._mouseupHandler, n),
      s = Y(n._mousewheelHandler, n),
      u = Y(n._pinchHandler, n);
    return (
      (n.enable = function (l, f) {
        this.disable(),
          (this._opt = q(K(f) || {}, {
            zoomOnMouseWheel: !0,
            moveOnMouseMove: !0,
            moveOnMouseWheel: !1,
            preventDefaultMouseMove: !0,
          })),
          l == null && (l = !0),
          (l === !0 || l === "move" || l === "pan") &&
            (e.on("mousedown", i), e.on("mousemove", a), e.on("mouseup", o)),
          (l === !0 || l === "scale" || l === "zoom") &&
            (e.on("mousewheel", s), e.on("pinch", u));
      }),
      (n.disable = function () {
        e.off("mousedown", i),
          e.off("mousemove", a),
          e.off("mouseup", o),
          e.off("mousewheel", s),
          e.off("pinch", u);
      }),
      n
    );
  }
  return (
    (t.prototype.isDragging = function () {
      return this._dragging;
    }),
    (t.prototype.isPinching = function () {
      return this._pinching;
    }),
    (t.prototype.setPointerChecker = function (e) {
      this.pointerChecker = e;
    }),
    (t.prototype.dispose = function () {
      this.disable();
    }),
    (t.prototype._mousedownHandler = function (e) {
      if (!(ov(e) || (e.target && e.target.draggable))) {
        var n = e.offsetX,
          i = e.offsetY;
        this.pointerChecker &&
          this.pointerChecker(e, n, i) &&
          ((this._x = n), (this._y = i), (this._dragging = !0));
      }
    }),
    (t.prototype._mousemoveHandler = function (e) {
      if (
        !(
          !this._dragging ||
          !No("moveOnMouseMove", e, this._opt) ||
          e.gestureEvent === "pinch" ||
          hp(this._zr, "globalPan")
        )
      ) {
        var n = e.offsetX,
          i = e.offsetY,
          a = this._x,
          o = this._y,
          s = n - a,
          u = i - o;
        (this._x = n),
          (this._y = i),
          this._opt.preventDefaultMouseMove && Jn(e.event),
          c_(this, "pan", "moveOnMouseMove", e, {
            dx: s,
            dy: u,
            oldX: a,
            oldY: o,
            newX: n,
            newY: i,
            isAvailableBehavior: null,
          });
      }
    }),
    (t.prototype._mouseupHandler = function (e) {
      ov(e) || (this._dragging = !1);
    }),
    (t.prototype._mousewheelHandler = function (e) {
      var n = No("zoomOnMouseWheel", e, this._opt),
        i = No("moveOnMouseWheel", e, this._opt),
        a = e.wheelDelta,
        o = Math.abs(a),
        s = e.offsetX,
        u = e.offsetY;
      if (!(a === 0 || (!n && !i))) {
        if (n) {
          var l = o > 3 ? 1.4 : o > 1 ? 1.2 : 1.1,
            f = a > 0 ? l : 1 / l;
          al(this, "zoom", "zoomOnMouseWheel", e, {
            scale: f,
            originX: s,
            originY: u,
            isAvailableBehavior: null,
          });
        }
        if (i) {
          var h = Math.abs(a),
            c = (a > 0 ? 1 : -1) * (h > 3 ? 0.4 : h > 1 ? 0.15 : 0.05);
          al(this, "scrollMove", "moveOnMouseWheel", e, {
            scrollDelta: c,
            originX: s,
            originY: u,
            isAvailableBehavior: null,
          });
        }
      }
    }),
    (t.prototype._pinchHandler = function (e) {
      if (!hp(this._zr, "globalPan")) {
        var n = e.pinchScale > 1 ? 1.1 : 1 / 1.1;
        al(this, "zoom", null, e, {
          scale: n,
          originX: e.pinchX,
          originY: e.pinchY,
          isAvailableBehavior: null,
        });
      }
    }),
    t
  );
})(ce);
function al(r, t, e, n, i) {
  r.pointerChecker &&
    r.pointerChecker(n, i.originX, i.originY) &&
    (Jn(n.event), c_(r, t, e, n, i));
}
function c_(r, t, e, n, i) {
  (i.isAvailableBehavior = Y(No, null, e, n)), r.trigger(t, i);
}
function No(r, t, e) {
  var n = e[r];
  return !r || (n && (!G(n) || t.event[n + "Key"]));
}
const j2 = J2;
var tL = { axisPointer: 1, tooltip: 1, brush: 1 };
function eL(r, t, e) {
  var n = t.getComponentByElement(r.topTarget),
    i = n && n.coordinateSystem;
  return n && n !== e && !tL.hasOwnProperty(n.mainType) && i && i.model !== e;
}
function Oa(r, t, e, n, i, a) {
  r = r || 0;
  var o = e[1] - e[0];
  if (
    (i != null && (i = Pn(i, [0, o])),
    a != null && (a = Math.max(a, i != null ? i : 0)),
    n === "all")
  ) {
    var s = Math.abs(t[1] - t[0]);
    (s = Pn(s, [0, o])), (i = a = Pn(s, [i, a])), (n = 0);
  }
  (t[0] = Pn(t[0], e)), (t[1] = Pn(t[1], e));
  var u = ol(t, n);
  t[n] += r;
  var l = i || 0,
    f = e.slice();
  u.sign < 0 ? (f[0] += l) : (f[1] -= l), (t[n] = Pn(t[n], f));
  var h;
  return (
    (h = ol(t, n)),
    i != null &&
      (h.sign !== u.sign || h.span < i) &&
      (t[1 - n] = t[n] + u.sign * i),
    (h = ol(t, n)),
    a != null && h.span > a && (t[1 - n] = t[n] + h.sign * a),
    t
  );
}
function ol(r, t) {
  var e = r[t] - r[1 - t];
  return { span: Math.abs(e), sign: e > 0 ? -1 : e < 0 ? 1 : t ? -1 : 1 };
}
function Pn(r, t) {
  return Math.min(
    t[1] != null ? t[1] : 1 / 0,
    Math.max(t[0] != null ? t[0] : -1 / 0, r)
  );
}
var vn = !0,
  wa = Math.min,
  ni = Math.max,
  rL = Math.pow,
  nL = 1e4,
  iL = 6,
  aL = 6,
  vp = "globalPan",
  oL = { w: [0, 0], e: [0, 1], n: [1, 0], s: [1, 1] },
  sL = {
    w: "ew",
    e: "ew",
    n: "ns",
    s: "ns",
    ne: "nesw",
    sw: "nesw",
    nw: "nwse",
    se: "nwse",
  },
  cp = {
    brushStyle: {
      lineWidth: 2,
      stroke: "rgba(210,219,238,0.3)",
      fill: "#D2DBEE",
    },
    transformable: !0,
    brushMode: "single",
    removeOnClick: !1,
  },
  uL = 0,
  lL = (function (r) {
    O(t, r);
    function t(e) {
      var n = r.call(this) || this;
      return (
        (n._track = []),
        (n._covers = []),
        (n._handlers = {}),
        (n._zr = e),
        (n.group = new bt()),
        (n._uid = "brushController_" + uL++),
        C(
          gL,
          function (i, a) {
            this._handlers[a] = Y(i, this);
          },
          n
        ),
        n
      );
    }
    return (
      (t.prototype.enableBrush = function (e) {
        return (
          this._brushType && this._doDisableBrush(),
          e.brushType && this._doEnableBrush(e),
          this
        );
      }),
      (t.prototype._doEnableBrush = function (e) {
        var n = this._zr;
        this._enableGlobalPan || K2(n, vp, this._uid),
          C(this._handlers, function (i, a) {
            n.on(a, i);
          }),
          (this._brushType = e.brushType),
          (this._brushOption = Q(K(cp), e, !0));
      }),
      (t.prototype._doDisableBrush = function () {
        var e = this._zr;
        Q2(e, vp, this._uid),
          C(this._handlers, function (n, i) {
            e.off(i, n);
          }),
          (this._brushType = this._brushOption = null);
      }),
      (t.prototype.setPanels = function (e) {
        if (e && e.length) {
          var n = (this._panels = {});
          C(e, function (i) {
            n[i.panelId] = K(i);
          });
        } else this._panels = null;
        return this;
      }),
      (t.prototype.mount = function (e) {
        (e = e || {}), (this._enableGlobalPan = e.enableGlobalPan);
        var n = this.group;
        return (
          this._zr.add(n),
          n.attr({
            x: e.x || 0,
            y: e.y || 0,
            rotation: e.rotation || 0,
            scaleX: e.scaleX || 1,
            scaleY: e.scaleY || 1,
          }),
          (this._transform = n.getLocalTransform()),
          this
        );
      }),
      (t.prototype.updateCovers = function (e) {
        e = z(e, function (c) {
          return Q(K(cp), c, !0);
        });
        var n = "\0-brush-index-",
          i = this._covers,
          a = (this._covers = []),
          o = this,
          s = this._creatingCover;
        return new ma(i, e, l, u).add(f).update(f).remove(h).execute(), this;
        function u(c, v) {
          return (c.id != null ? c.id : n + v) + "-" + c.brushType;
        }
        function l(c, v) {
          return u(c.__brushOption, v);
        }
        function f(c, v) {
          var d = e[c];
          if (v != null && i[v] === s) a[c] = i[v];
          else {
            var g = (a[c] =
              v != null ? ((i[v].__brushOption = d), i[v]) : p_(o, d_(o, d)));
            Fh(o, g);
          }
        }
        function h(c) {
          i[c] !== s && o.group.remove(i[c]);
        }
      }),
      (t.prototype.unmount = function () {
        return (
          this.enableBrush(!1), xf(this), this._zr.remove(this.group), this
        );
      }),
      (t.prototype.dispose = function () {
        this.unmount(), this.off();
      }),
      t
    );
  })(ce);
function d_(r, t) {
  var e = $s[t.brushType].createCover(r, t);
  return (e.__brushOption = t), y_(e, t), r.group.add(e), e;
}
function p_(r, t) {
  var e = zh(t);
  return e.endCreating && (e.endCreating(r, t), y_(t, t.__brushOption)), t;
}
function g_(r, t) {
  var e = t.__brushOption;
  zh(t).updateCoverShape(r, t, e.range, e);
}
function y_(r, t) {
  var e = t.z;
  e == null && (e = nL),
    r.traverse(function (n) {
      (n.z = e), (n.z2 = e);
    });
}
function Fh(r, t) {
  zh(t).updateCommon(r, t), g_(r, t);
}
function zh(r) {
  return $s[r.__brushOption.brushType];
}
function Gh(r, t, e) {
  var n = r._panels;
  if (!n) return vn;
  var i,
    a = r._transform;
  return (
    C(n, function (o) {
      o.isTargetByCursor(t, e, a) && (i = o);
    }),
    i
  );
}
function m_(r, t) {
  var e = r._panels;
  if (!e) return vn;
  var n = t.__brushOption.panelId;
  return n != null ? e[n] : vn;
}
function xf(r) {
  var t = r._covers,
    e = t.length;
  return (
    C(
      t,
      function (n) {
        r.group.remove(n);
      },
      r
    ),
    (t.length = 0),
    !!e
  );
}
function cn(r, t) {
  var e = z(r._covers, function (n) {
    var i = n.__brushOption,
      a = K(i.range);
    return { brushType: i.brushType, panelId: i.panelId, range: a };
  });
  r.trigger("brush", {
    areas: e,
    isEnd: !!t.isEnd,
    removeOnClick: !!t.removeOnClick,
  });
}
function fL(r) {
  var t = r._track;
  if (!t.length) return !1;
  var e = t[t.length - 1],
    n = t[0],
    i = e[0] - n[0],
    a = e[1] - n[1],
    o = rL(i * i + a * a, 0.5);
  return o > iL;
}
function __(r) {
  var t = r.length - 1;
  return t < 0 && (t = 0), [r[0], r[t]];
}
function S_(r, t, e, n) {
  var i = new bt();
  return (
    i.add(
      new yt({
        name: "main",
        style: Hh(e),
        silent: !0,
        draggable: !0,
        cursor: "move",
        drift: ot(dp, r, t, i, ["n", "s", "w", "e"]),
        ondragend: ot(cn, t, { isEnd: !0 }),
      })
    ),
    C(n, function (a) {
      i.add(
        new yt({
          name: a.join(""),
          style: { opacity: 0 },
          draggable: !0,
          silent: !0,
          invisible: !0,
          drift: ot(dp, r, t, i, a),
          ondragend: ot(cn, t, { isEnd: !0 }),
        })
      );
    }),
    i
  );
}
function x_(r, t, e, n) {
  var i = n.brushStyle.lineWidth || 0,
    a = ni(i, aL),
    o = e[0][0],
    s = e[1][0],
    u = o - i / 2,
    l = s - i / 2,
    f = e[0][1],
    h = e[1][1],
    c = f - a + i / 2,
    v = h - a + i / 2,
    d = f - o,
    g = h - s,
    p = d + i,
    y = g + i;
  Ve(r, t, "main", o, s, d, g),
    n.transformable &&
      (Ve(r, t, "w", u, l, a, y),
      Ve(r, t, "e", c, l, a, y),
      Ve(r, t, "n", u, l, p, a),
      Ve(r, t, "s", u, v, p, a),
      Ve(r, t, "nw", u, l, a, a),
      Ve(r, t, "ne", c, l, a, a),
      Ve(r, t, "sw", u, v, a, a),
      Ve(r, t, "se", c, v, a, a));
}
function wf(r, t) {
  var e = t.__brushOption,
    n = e.transformable,
    i = t.childAt(0);
  i.useStyle(Hh(e)),
    i.attr({ silent: !n, cursor: n ? "move" : "default" }),
    C(
      [
        ["w"],
        ["e"],
        ["n"],
        ["s"],
        ["s", "e"],
        ["s", "w"],
        ["n", "e"],
        ["n", "w"],
      ],
      function (a) {
        var o = t.childOfName(a.join("")),
          s = a.length === 1 ? bf(r, a[0]) : vL(r, a);
        o &&
          o.attr({
            silent: !n,
            invisible: !n,
            cursor: n ? sL[s] + "-resize" : null,
          });
      }
    );
}
function Ve(r, t, e, n, i, a, o) {
  var s = t.childOfName(e);
  s &&
    s.setShape(
      dL(
        Vh(r, t, [
          [n, i],
          [n + a, i + o],
        ])
      )
    );
}
function Hh(r) {
  return q({ strokeNoScale: !0 }, r.brushStyle);
}
function w_(r, t, e, n) {
  var i = [wa(r, e), wa(t, n)],
    a = [ni(r, e), ni(t, n)];
  return [
    [i[0], a[0]],
    [i[1], a[1]],
  ];
}
function hL(r) {
  return Ds(r.group);
}
function bf(r, t) {
  var e = { w: "left", e: "right", n: "top", s: "bottom" },
    n = { left: "w", right: "e", top: "n", bottom: "s" },
    i = sh(e[t], hL(r));
  return n[i];
}
function vL(r, t) {
  var e = [bf(r, t[0]), bf(r, t[1])];
  return (e[0] === "e" || e[0] === "w") && e.reverse(), e.join("");
}
function dp(r, t, e, n, i, a) {
  var o = e.__brushOption,
    s = r.toRectRange(o.range),
    u = b_(t, i, a);
  C(n, function (l) {
    var f = oL[l];
    s[f[0]][f[1]] += u[f[0]];
  }),
    (o.range = r.fromRectRange(w_(s[0][0], s[1][0], s[0][1], s[1][1]))),
    Fh(t, e),
    cn(t, { isEnd: !1 });
}
function cL(r, t, e, n) {
  var i = t.__brushOption.range,
    a = b_(r, e, n);
  C(i, function (o) {
    (o[0] += a[0]), (o[1] += a[1]);
  }),
    Fh(r, t),
    cn(r, { isEnd: !1 });
}
function b_(r, t, e) {
  var n = r.group,
    i = n.transformCoordToLocal(t, e),
    a = n.transformCoordToLocal(0, 0);
  return [i[0] - a[0], i[1] - a[1]];
}
function Vh(r, t, e) {
  var n = m_(r, t);
  return n && n !== vn ? n.clipPath(e, r._transform) : K(e);
}
function dL(r) {
  var t = wa(r[0][0], r[1][0]),
    e = wa(r[0][1], r[1][1]),
    n = ni(r[0][0], r[1][0]),
    i = ni(r[0][1], r[1][1]);
  return { x: t, y: e, width: n - t, height: i - e };
}
function pL(r, t, e) {
  if (!(!r._brushType || yL(r, t.offsetX, t.offsetY))) {
    var n = r._zr,
      i = r._covers,
      a = Gh(r, t, e);
    if (!r._dragging)
      for (var o = 0; o < i.length; o++) {
        var s = i[o].__brushOption;
        if (
          a &&
          (a === vn || s.panelId === a.panelId) &&
          $s[s.brushType].contain(i[o], e[0], e[1])
        )
          return;
      }
    a && n.setCursorStyle("crosshair");
  }
}
function Tf(r) {
  var t = r.event;
  t.preventDefault && t.preventDefault();
}
function Cf(r, t, e) {
  return r.childOfName("main").contain(t, e);
}
function T_(r, t, e, n) {
  var i = r._creatingCover,
    a = r._creatingPanel,
    o = r._brushOption,
    s;
  if ((r._track.push(e.slice()), fL(r) || i)) {
    if (a && !i) {
      o.brushMode === "single" && xf(r);
      var u = K(o);
      (u.brushType = pp(u.brushType, a)),
        (u.panelId = a === vn ? null : a.panelId),
        (i = r._creatingCover = d_(r, u)),
        r._covers.push(i);
    }
    if (i) {
      var l = $s[pp(r._brushType, a)],
        f = i.__brushOption;
      (f.range = l.getCreatingRange(Vh(r, i, r._track))),
        n && (p_(r, i), l.updateCommon(r, i)),
        g_(r, i),
        (s = { isEnd: n });
    }
  } else
    n &&
      o.brushMode === "single" &&
      o.removeOnClick &&
      Gh(r, t, e) &&
      xf(r) &&
      (s = { isEnd: n, removeOnClick: !0 });
  return s;
}
function pp(r, t) {
  return r === "auto" ? t.defaultBrushType : r;
}
var gL = {
  mousedown: function (r) {
    if (this._dragging) gp(this, r);
    else if (!r.target || !r.target.draggable) {
      Tf(r);
      var t = this.group.transformCoordToLocal(r.offsetX, r.offsetY);
      this._creatingCover = null;
      var e = (this._creatingPanel = Gh(this, r, t));
      e && ((this._dragging = !0), (this._track = [t.slice()]));
    }
  },
  mousemove: function (r) {
    var t = r.offsetX,
      e = r.offsetY,
      n = this.group.transformCoordToLocal(t, e);
    if ((pL(this, r, n), this._dragging)) {
      Tf(r);
      var i = T_(this, r, n, !1);
      i && cn(this, i);
    }
  },
  mouseup: function (r) {
    gp(this, r);
  },
};
function gp(r, t) {
  if (r._dragging) {
    Tf(t);
    var e = t.offsetX,
      n = t.offsetY,
      i = r.group.transformCoordToLocal(e, n),
      a = T_(r, t, i, !0);
    (r._dragging = !1),
      (r._track = []),
      (r._creatingCover = null),
      a && cn(r, a);
  }
}
function yL(r, t, e) {
  var n = r._zr;
  return t < 0 || t > n.getWidth() || e < 0 || e > n.getHeight();
}
var $s = {
  lineX: yp(0),
  lineY: yp(1),
  rect: {
    createCover: function (r, t) {
      function e(n) {
        return n;
      }
      return S_({ toRectRange: e, fromRectRange: e }, r, t, [
        ["w"],
        ["e"],
        ["n"],
        ["s"],
        ["s", "e"],
        ["s", "w"],
        ["n", "e"],
        ["n", "w"],
      ]);
    },
    getCreatingRange: function (r) {
      var t = __(r);
      return w_(t[1][0], t[1][1], t[0][0], t[0][1]);
    },
    updateCoverShape: function (r, t, e, n) {
      x_(r, t, e, n);
    },
    updateCommon: wf,
    contain: Cf,
  },
  polygon: {
    createCover: function (r, t) {
      var e = new bt();
      return e.add(new La({ name: "main", style: Hh(t), silent: !0 })), e;
    },
    getCreatingRange: function (r) {
      return r;
    },
    endCreating: function (r, t) {
      t.remove(t.childAt(0)),
        t.add(
          new Aa({
            name: "main",
            draggable: !0,
            drift: ot(cL, r, t),
            ondragend: ot(cn, r, { isEnd: !0 }),
          })
        );
    },
    updateCoverShape: function (r, t, e, n) {
      t.childAt(0).setShape({ points: Vh(r, t, e) });
    },
    updateCommon: wf,
    contain: Cf,
  },
};
function yp(r) {
  return {
    createCover: function (t, e) {
      return S_(
        {
          toRectRange: function (n) {
            var i = [n, [0, 100]];
            return r && i.reverse(), i;
          },
          fromRectRange: function (n) {
            return n[r];
          },
        },
        t,
        e,
        [
          [["w"], ["e"]],
          [["n"], ["s"]],
        ][r]
      );
    },
    getCreatingRange: function (t) {
      var e = __(t),
        n = wa(e[0][r], e[1][r]),
        i = ni(e[0][r], e[1][r]);
      return [n, i];
    },
    updateCoverShape: function (t, e, n, i) {
      var a,
        o = m_(t, e);
      if (o !== vn && o.getLinearBrushOtherExtent)
        a = o.getLinearBrushOtherExtent(r);
      else {
        var s = t._zr;
        a = [0, [s.getWidth(), s.getHeight()][1 - r]];
      }
      var u = [n, a];
      r && u.reverse(), x_(t, e, u, i);
    },
    updateCommon: wf,
    contain: Cf,
  };
}
const mL = lL;
function _L(r) {
  return (
    (r = Wh(r)),
    function (t) {
      return jy(t, r);
    }
  );
}
function SL(r, t) {
  return (
    (r = Wh(r)),
    function (e) {
      var n = t != null ? t : e,
        i = n ? r.width : r.height,
        a = n ? r.x : r.y;
      return [a, a + (i || 0)];
    }
  );
}
function xL(r, t, e) {
  var n = Wh(r);
  return function (i, a) {
    return n.contain(a[0], a[1]) && !eL(i, t, e);
  };
}
function Wh(r) {
  return at.create(r);
}
var Jr = gt(),
  mp = K,
  sl = Y,
  wL = (function () {
    function r() {
      (this._dragging = !1), (this.animationThreshold = 15);
    }
    return (
      (r.prototype.render = function (t, e, n, i) {
        var a = e.get("value"),
          o = e.get("status");
        if (
          ((this._axisModel = t),
          (this._axisPointerModel = e),
          (this._api = n),
          !(!i && this._lastValue === a && this._lastStatus === o))
        ) {
          (this._lastValue = a), (this._lastStatus = o);
          var s = this._group,
            u = this._handle;
          if (!o || o === "hide") {
            s && s.hide(), u && u.hide();
            return;
          }
          s && s.show(), u && u.show();
          var l = {};
          this.makeElOption(l, a, t, e, n);
          var f = l.graphicKey;
          f !== this._lastGraphicKey && this.clear(n),
            (this._lastGraphicKey = f);
          var h = (this._moveAnimation = this.determineAnimation(t, e));
          if (!s)
            (s = this._group = new bt()),
              this.createPointerEl(s, l, t, e),
              this.createLabelEl(s, l, t, e),
              n.getZr().add(s);
          else {
            var c = ot(_p, e, h);
            this.updatePointerEl(s, l, c), this.updateLabelEl(s, l, c, e);
          }
          xp(s, e, !0), this._renderHandle(a);
        }
      }),
      (r.prototype.remove = function (t) {
        this.clear(t);
      }),
      (r.prototype.dispose = function (t) {
        this.clear(t);
      }),
      (r.prototype.determineAnimation = function (t, e) {
        var n = e.get("animation"),
          i = t.axis,
          a = i.type === "category",
          o = e.get("snap");
        if (!o && !a) return !1;
        if (n === "auto" || n == null) {
          var s = this.animationThreshold;
          if (a && i.getBandWidth() > s) return !0;
          if (o) {
            var u = Bh(t).seriesDataCount,
              l = i.getExtent();
            return Math.abs(l[0] - l[1]) / u > s;
          }
          return !1;
        }
        return n === !0;
      }),
      (r.prototype.makeElOption = function (t, e, n, i, a) {}),
      (r.prototype.createPointerEl = function (t, e, n, i) {
        var a = e.pointer;
        if (a) {
          var o = (Jr(t).pointerEl = new bb[a.type](mp(e.pointer)));
          t.add(o);
        }
      }),
      (r.prototype.createLabelEl = function (t, e, n, i) {
        if (e.label) {
          var a = (Jr(t).labelEl = new Dt(mp(e.label)));
          t.add(a), Sp(a, i);
        }
      }),
      (r.prototype.updatePointerEl = function (t, e, n) {
        var i = Jr(t).pointerEl;
        i &&
          e.pointer &&
          (i.setStyle(e.pointer.style), n(i, { shape: e.pointer.shape }));
      }),
      (r.prototype.updateLabelEl = function (t, e, n, i) {
        var a = Jr(t).labelEl;
        a &&
          (a.setStyle(e.label.style),
          n(a, { x: e.label.x, y: e.label.y }),
          Sp(a, i));
      }),
      (r.prototype._renderHandle = function (t) {
        if (!(this._dragging || !this.updateHandleTransform)) {
          var e = this._axisPointerModel,
            n = this._api.getZr(),
            i = this._handle,
            a = e.getModel("handle"),
            o = e.get("status");
          if (!a.get("show") || !o || o === "hide") {
            i && n.remove(i), (this._handle = null);
            return;
          }
          var s;
          this._handle ||
            ((s = !0),
            (i = this._handle =
              As(a.get("icon"), {
                cursor: "move",
                draggable: !0,
                onmousemove: function (l) {
                  Jn(l.event);
                },
                onmousedown: sl(this._onHandleDragMove, this, 0, 0),
                drift: sl(this._onHandleDragMove, this),
                ondragend: sl(this._onHandleDragEnd, this),
              })),
            n.add(i)),
            xp(i, e, !1),
            i.setStyle(
              a.getItemStyle(null, [
                "color",
                "borderColor",
                "borderWidth",
                "opacity",
                "shadowColor",
                "shadowBlur",
                "shadowOffsetX",
                "shadowOffsetY",
              ])
            );
          var u = a.get("size");
          N(u) || (u = [u, u]),
            (i.scaleX = u[0] / 2),
            (i.scaleY = u[1] / 2),
            Hs(
              this,
              "_doDispatchAxisPointer",
              a.get("throttle") || 0,
              "fixRate"
            ),
            this._moveHandleToValue(t, s);
        }
      }),
      (r.prototype._moveHandleToValue = function (t, e) {
        _p(
          this._axisPointerModel,
          !e && this._moveAnimation,
          this._handle,
          ul(
            this.getHandleTransform(t, this._axisModel, this._axisPointerModel)
          )
        );
      }),
      (r.prototype._onHandleDragMove = function (t, e) {
        var n = this._handle;
        if (!!n) {
          this._dragging = !0;
          var i = this.updateHandleTransform(
            ul(n),
            [t, e],
            this._axisModel,
            this._axisPointerModel
          );
          (this._payloadInfo = i),
            n.stopAnimation(),
            n.attr(ul(i)),
            (Jr(n).lastProp = null),
            this._doDispatchAxisPointer();
        }
      }),
      (r.prototype._doDispatchAxisPointer = function () {
        var t = this._handle;
        if (!!t) {
          var e = this._payloadInfo,
            n = this._axisModel;
          this._api.dispatchAction({
            type: "updateAxisPointer",
            x: e.cursorPoint[0],
            y: e.cursorPoint[1],
            tooltipOption: e.tooltipOption,
            axesInfo: [{ axisDim: n.axis.dim, axisIndex: n.componentIndex }],
          });
        }
      }),
      (r.prototype._onHandleDragEnd = function () {
        this._dragging = !1;
        var t = this._handle;
        if (!!t) {
          var e = this._axisPointerModel.get("value");
          this._moveHandleToValue(e),
            this._api.dispatchAction({ type: "hideTip" });
        }
      }),
      (r.prototype.clear = function (t) {
        (this._lastValue = null), (this._lastStatus = null);
        var e = t.getZr(),
          n = this._group,
          i = this._handle;
        e &&
          n &&
          ((this._lastGraphicKey = null),
          n && e.remove(n),
          i && e.remove(i),
          (this._group = null),
          (this._handle = null),
          (this._payloadInfo = null)),
          rs(this, "_doDispatchAxisPointer");
      }),
      (r.prototype.doClear = function () {}),
      (r.prototype.buildLabel = function (t, e, n) {
        return (
          (n = n || 0), { x: t[n], y: t[1 - n], width: e[n], height: e[1 - n] }
        );
      }),
      r
    );
  })();
function _p(r, t, e, n) {
  C_(Jr(e).lastProp, n) ||
    ((Jr(e).lastProp = n), t ? we(e, n, r) : (e.stopAnimation(), e.attr(n)));
}
function C_(r, t) {
  if (H(r) && H(t)) {
    var e = !0;
    return (
      C(t, function (n, i) {
        e = e && C_(r[i], n);
      }),
      !!e
    );
  } else return r === t;
}
function Sp(r, t) {
  r[t.get(["label", "show"]) ? "show" : "hide"]();
}
function ul(r) {
  return { x: r.x || 0, y: r.y || 0, rotation: r.rotation || 0 };
}
function xp(r, t, e) {
  var n = t.get("z"),
    i = t.get("zlevel");
  r &&
    r.traverse(function (a) {
      a.type !== "group" &&
        (n != null && (a.z = n), i != null && (a.zlevel = i), (a.silent = e));
    });
}
const bL = wL;
function TL(r) {
  var t = r.get("type"),
    e = r.getModel(t + "Style"),
    n;
  return (
    t === "line"
      ? ((n = e.getLineStyle()), (n.fill = null))
      : t === "shadow" && ((n = e.getAreaStyle()), (n.stroke = null)),
    n
  );
}
function CL(r, t, e, n, i) {
  var a = e.get("value"),
    o = M_(a, t.axis, t.ecModel, e.get("seriesDataIndices"), {
      precision: e.get(["label", "precision"]),
      formatter: e.get(["label", "formatter"]),
    }),
    s = e.getModel("label"),
    u = Ns(s.get("padding") || 0),
    l = s.getFont(),
    f = _s(o, l),
    h = i.position,
    c = f.width + u[1] + u[3],
    v = f.height + u[0] + u[2],
    d = i.align;
  d === "right" && (h[0] -= c), d === "center" && (h[0] -= c / 2);
  var g = i.verticalAlign;
  g === "bottom" && (h[1] -= v),
    g === "middle" && (h[1] -= v / 2),
    ML(h, c, v, n);
  var p = s.get("backgroundColor");
  (!p || p === "auto") && (p = t.get(["axisLine", "lineStyle", "color"])),
    (r.label = {
      x: h[0],
      y: h[1],
      style: Qe(s, {
        text: o,
        font: l,
        fill: s.getTextColor(),
        padding: u,
        backgroundColor: p,
      }),
      z2: 10,
    });
}
function ML(r, t, e, n) {
  var i = n.getWidth(),
    a = n.getHeight();
  (r[0] = Math.min(r[0] + t, i) - t),
    (r[1] = Math.min(r[1] + e, a) - e),
    (r[0] = Math.max(r[0], 0)),
    (r[1] = Math.max(r[1], 0));
}
function M_(r, t, e, n, i) {
  r = t.scale.parse(r);
  var a = t.scale.getLabel({ value: r }, { precision: i.precision }),
    o = i.formatter;
  if (o) {
    var s = {
      value: Rh(t, { value: r }),
      axisDimension: t.dim,
      axisIndex: t.index,
      seriesData: [],
    };
    C(n, function (u) {
      var l = e.getSeriesByIndex(u.seriesIndex),
        f = u.dataIndexInside,
        h = l && l.getDataParams(f);
      h && s.seriesData.push(h);
    }),
      G(o) ? (a = o.replace("{value}", a)) : U(o) && (a = o(s));
  }
  return a;
}
function D_(r, t, e) {
  var n = ia();
  return (
    Yf(n, n, e.rotation),
    zl(n, n, e.position),
    la(
      [
        r.dataToCoord(t),
        (e.labelOffset || 0) + (e.labelDirection || 1) * (e.labelMargin || 0),
      ],
      n
    )
  );
}
function DL(r, t, e, n, i, a) {
  var o = l_.innerTextLayout(e.rotation, 0, e.labelDirection);
  (e.labelMargin = i.get(["label", "margin"])),
    CL(t, n, i, a, {
      position: D_(n.axis, r, e),
      align: o.textAlign,
      verticalAlign: o.textVerticalAlign,
    });
}
function AL(r, t, e) {
  return (e = e || 0), { x1: r[e], y1: r[1 - e], x2: t[e], y2: t[1 - e] };
}
function LL(r, t, e) {
  return (e = e || 0), { x: r[e], y: r[1 - e], width: t[e], height: t[1 - e] };
}
var IL = (function (r) {
  O(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.makeElOption = function (e, n, i, a, o) {
      var s = i.axis,
        u = s.grid,
        l = a.get("type"),
        f = wp(u, s).getOtherAxis(s).getGlobalExtent(),
        h = s.toGlobalCoord(s.dataToCoord(n, !0));
      if (l && l !== "none") {
        var c = TL(a),
          v = PL[l](s, h, f);
        (v.style = c), (e.graphicKey = v.type), (e.pointer = v);
      }
      var d = mf(u.model, i);
      DL(n, e, d, i, a, o);
    }),
    (t.prototype.getHandleTransform = function (e, n, i) {
      var a = mf(n.axis.grid.model, n, { labelInside: !1 });
      a.labelMargin = i.get(["handle", "margin"]);
      var o = D_(n.axis, e, a);
      return {
        x: o[0],
        y: o[1],
        rotation: a.rotation + (a.labelDirection < 0 ? Math.PI : 0),
      };
    }),
    (t.prototype.updateHandleTransform = function (e, n, i, a) {
      var o = i.axis,
        s = o.grid,
        u = o.getGlobalExtent(!0),
        l = wp(s, o).getOtherAxis(o).getGlobalExtent(),
        f = o.dim === "x" ? 0 : 1,
        h = [e.x, e.y];
      (h[f] += n[f]),
        (h[f] = Math.min(u[1], h[f])),
        (h[f] = Math.max(u[0], h[f]));
      var c = (l[1] + l[0]) / 2,
        v = [c, c];
      v[f] = h[f];
      var d = [{ verticalAlign: "middle" }, { align: "center" }];
      return {
        x: h[0],
        y: h[1],
        rotation: e.rotation,
        cursorPoint: v,
        tooltipOption: d[f],
      };
    }),
    t
  );
})(bL);
function wp(r, t) {
  var e = {};
  return (e[t.dim + "AxisIndex"] = t.index), r.getCartesian(e);
}
var PL = {
  line: function (r, t, e) {
    var n = AL([t, e[0]], [t, e[1]], bp(r));
    return { type: "Line", subPixelOptimize: !0, shape: n };
  },
  shadow: function (r, t, e) {
    var n = Math.max(1, r.getBandWidth()),
      i = e[1] - e[0];
    return { type: "Rect", shape: LL([t - n / 2, e[0]], [n, i], bp(r)) };
  },
};
function bp(r) {
  return r.dim === "x" ? 0 : 1;
}
const RL = IL;
var EL = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (
    (t.type = "axisPointer"),
    (t.defaultOption = {
      show: "auto",
      z: 50,
      type: "line",
      snap: !1,
      triggerTooltip: !0,
      value: null,
      status: null,
      link: [],
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: { color: "#B9BEC9", width: 1, type: "dashed" },
      shadowStyle: { color: "rgba(210,219,238,0.2)" },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3,
      },
      handle: {
        show: !1,
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        margin: 50,
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        throttle: 40,
      },
    }),
    t
  );
})(ct);
const OL = EL;
var Ye = gt(),
  kL = C;
function A_(r, t, e) {
  if (!j.node) {
    var n = t.getZr();
    Ye(n).records || (Ye(n).records = {}), BL(n, t);
    var i = Ye(n).records[r] || (Ye(n).records[r] = {});
    i.handler = e;
  }
}
function BL(r, t) {
  if (Ye(r).initialized) return;
  (Ye(r).initialized = !0),
    e("click", ot(Tp, "click")),
    e("mousemove", ot(Tp, "mousemove")),
    e("globalout", FL);
  function e(n, i) {
    r.on(n, function (a) {
      var o = zL(t);
      kL(Ye(r).records, function (s) {
        s && i(s, a, o.dispatchAction);
      }),
        NL(o.pendings, t);
    });
  }
}
function NL(r, t) {
  var e = r.showTip.length,
    n = r.hideTip.length,
    i;
  e ? (i = r.showTip[e - 1]) : n && (i = r.hideTip[n - 1]),
    i && ((i.dispatchAction = null), t.dispatchAction(i));
}
function FL(r, t, e) {
  r.handler("leave", null, e);
}
function Tp(r, t, e, n) {
  t.handler(r, e, n);
}
function zL(r) {
  var t = { showTip: [], hideTip: [] },
    e = function (n) {
      var i = t[n.type];
      i ? i.push(n) : ((n.dispatchAction = e), r.dispatchAction(n));
    };
  return { dispatchAction: e, pendings: t };
}
function Mf(r, t) {
  if (!j.node) {
    var e = t.getZr(),
      n = (Ye(e).records || {})[r];
    n && (Ye(e).records[r] = null);
  }
}
var GL = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (
    (t.prototype.render = function (e, n, i) {
      var a = n.getComponent("tooltip"),
        o =
          e.get("triggerOn") || (a && a.get("triggerOn")) || "mousemove|click";
      A_("axisPointer", i, function (s, u, l) {
        o !== "none" &&
          (s === "leave" || o.indexOf(s) >= 0) &&
          l({
            type: "updateAxisPointer",
            currTrigger: s,
            x: u && u.offsetX,
            y: u && u.offsetY,
          });
      });
    }),
    (t.prototype.remove = function (e, n) {
      Mf("axisPointer", n);
    }),
    (t.prototype.dispose = function (e, n) {
      Mf("axisPointer", n);
    }),
    (t.type = "axisPointer"),
    t
  );
})(ve);
const HL = GL;
function L_(r, t) {
  var e = [],
    n = r.seriesIndex,
    i;
  if (n == null || !(i = t.getSeriesByIndex(n))) return { point: [] };
  var a = i.getData(),
    o = ln(a, r);
  if (o == null || o < 0 || N(o)) return { point: [] };
  var s = a.getItemGraphicEl(o),
    u = i.coordinateSystem;
  if (i.getTooltipPosition) e = i.getTooltipPosition(o) || [];
  else if (u && u.dataToPoint)
    if (r.isStacked) {
      var l = u.getBaseAxis(),
        f = u.getOtherAxis(l),
        h = f.dim,
        c = l.dim,
        v = h === "x" || h === "radius" ? 1 : 0,
        d = a.mapDimension(c),
        g = [];
      (g[v] = a.get(d, o)),
        (g[1 - v] = a.get(a.getCalculationInfo("stackResultDimension"), o)),
        (e = u.dataToPoint(g) || []);
    } else
      e =
        u.dataToPoint(
          a.getValues(
            z(u.dimensions, function (y) {
              return a.mapDimension(y);
            }),
            o
          )
        ) || [];
  else if (s) {
    var p = s.getBoundingRect().clone();
    p.applyTransform(s.transform),
      (e = [p.x + p.width / 2, p.y + p.height / 2]);
  }
  return { point: e, el: s };
}
var Cp = gt();
function VL(r, t, e) {
  var n = r.currTrigger,
    i = [r.x, r.y],
    a = r,
    o = r.dispatchAction || Y(e.dispatchAction, e),
    s = t.getComponent("axisPointer").coordSysAxesInfo;
  if (!!s) {
    Fo(i) &&
      (i = L_({ seriesIndex: a.seriesIndex, dataIndex: a.dataIndex }, t).point);
    var u = Fo(i),
      l = a.axesInfo,
      f = s.axesInfo,
      h = n === "leave" || Fo(i),
      c = {},
      v = {},
      d = { list: [], map: {} },
      g = { showPointer: ot(UL, v), showTooltip: ot(YL, d) };
    C(s.coordSysMap, function (y, m) {
      var _ = u || y.containPoint(i);
      C(s.coordSysAxesInfo[m], function (S, w) {
        var x = S.axis,
          b = qL(l, S);
        if (!h && _ && (!l || b)) {
          var T = b && b.value;
          T == null && !u && (T = x.pointToData(i)),
            T != null && Mp(S, T, g, !1, c);
        }
      });
    });
    var p = {};
    return (
      C(f, function (y, m) {
        var _ = y.linkGroup;
        _ &&
          !v[m] &&
          C(_.axesInfo, function (S, w) {
            var x = v[w];
            if (S !== y && x) {
              var b = x.value;
              _.mapper && (b = y.axis.scale.parse(_.mapper(b, Dp(S), Dp(y)))),
                (p[y.key] = b);
            }
          });
      }),
      C(p, function (y, m) {
        Mp(f[m], y, g, !0, c);
      }),
      $L(v, f, c),
      ZL(d, i, r, o),
      XL(f, o, e),
      c
    );
  }
}
function Mp(r, t, e, n, i) {
  var a = r.axis;
  if (!(a.scale.isBlank() || !a.containData(t))) {
    if (!r.involveSeries) {
      e.showPointer(r, t);
      return;
    }
    var o = WL(t, r),
      s = o.payloadBatch,
      u = o.snapToValue;
    s[0] && i.seriesIndex == null && k(i, s[0]),
      !n && r.snap && a.containData(u) && u != null && (t = u),
      e.showPointer(r, t, s),
      e.showTooltip(r, o, u);
  }
}
function WL(r, t) {
  var e = t.axis,
    n = e.dim,
    i = r,
    a = [],
    o = Number.MAX_VALUE,
    s = -1;
  return (
    C(t.seriesModels, function (u, l) {
      var f = u.getData().mapDimensionsAll(n),
        h,
        c;
      if (u.getAxisTooltipData) {
        var v = u.getAxisTooltipData(f, r, e);
        (c = v.dataIndices), (h = v.nestestValue);
      } else {
        if (
          ((c = u
            .getData()
            .indicesOfNearest(f[0], r, e.type === "category" ? 0.5 : null)),
          !c.length)
        )
          return;
        h = u.getData().get(f[0], c[0]);
      }
      if (!(h == null || !isFinite(h))) {
        var d = r - h,
          g = Math.abs(d);
        g <= o &&
          ((g < o || (d >= 0 && s < 0)) &&
            ((o = g), (s = d), (i = h), (a.length = 0)),
          C(c, function (p) {
            a.push({
              seriesIndex: u.seriesIndex,
              dataIndexInside: p,
              dataIndex: u.getData().getRawIndex(p),
            });
          }));
      }
    }),
    { payloadBatch: a, snapToValue: i }
  );
}
function UL(r, t, e, n) {
  r[t.key] = { value: e, payloadBatch: n };
}
function YL(r, t, e, n) {
  var i = e.payloadBatch,
    a = t.axis,
    o = a.model,
    s = t.axisPointerModel;
  if (!(!t.triggerTooltip || !i.length)) {
    var u = t.coordSys.model,
      l = xa(u),
      f = r.map[l];
    f ||
      ((f = r.map[l] =
        {
          coordSysId: u.id,
          coordSysIndex: u.componentIndex,
          coordSysType: u.type,
          coordSysMainType: u.mainType,
          dataByAxis: [],
        }),
      r.list.push(f)),
      f.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: o.componentIndex,
        axisType: o.type,
        axisId: o.id,
        value: n,
        valueLabelOpt: {
          precision: s.get(["label", "precision"]),
          formatter: s.get(["label", "formatter"]),
        },
        seriesDataIndices: i.slice(),
      });
  }
}
function $L(r, t, e) {
  var n = (e.axesInfo = []);
  C(t, function (i, a) {
    var o = i.axisPointerModel.option,
      s = r[a];
    s
      ? (!i.useHandle && (o.status = "show"),
        (o.value = s.value),
        (o.seriesDataIndices = (s.payloadBatch || []).slice()))
      : !i.useHandle && (o.status = "hide"),
      o.status === "show" &&
        n.push({
          axisDim: i.axis.dim,
          axisIndex: i.axis.model.componentIndex,
          value: o.value,
        });
  });
}
function ZL(r, t, e, n) {
  if (Fo(t) || !r.list.length) {
    n({ type: "hideTip" });
    return;
  }
  var i = ((r.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
  n({
    type: "showTip",
    escapeConnect: !0,
    x: t[0],
    y: t[1],
    tooltipOption: e.tooltipOption,
    position: e.position,
    dataIndexInside: i.dataIndexInside,
    dataIndex: i.dataIndex,
    seriesIndex: i.seriesIndex,
    dataByCoordSys: r.list,
  });
}
function XL(r, t, e) {
  var n = e.getZr(),
    i = "axisPointerLastHighlights",
    a = Cp(n)[i] || {},
    o = (Cp(n)[i] = {});
  C(r, function (l, f) {
    var h = l.axisPointerModel.option;
    h.status === "show" &&
      C(h.seriesDataIndices, function (c) {
        var v = c.seriesIndex + " | " + c.dataIndex;
        o[v] = c;
      });
  });
  var s = [],
    u = [];
  C(a, function (l, f) {
    !o[f] && u.push(l);
  }),
    C(o, function (l, f) {
      !a[f] && s.push(l);
    }),
    u.length &&
      e.dispatchAction({
        type: "downplay",
        escapeConnect: !0,
        notBlur: !0,
        batch: u,
      }),
    s.length &&
      e.dispatchAction({
        type: "highlight",
        escapeConnect: !0,
        notBlur: !0,
        batch: s,
      });
}
function qL(r, t) {
  for (var e = 0; e < (r || []).length; e++) {
    var n = r[e];
    if (t.axis.dim === n.axisDim && t.axis.model.componentIndex === n.axisIndex)
      return n;
  }
}
function Dp(r) {
  var t = r.axis.model,
    e = {},
    n = (e.axisDim = r.axis.dim);
  return (
    (e.axisIndex = e[n + "AxisIndex"] = t.componentIndex),
    (e.axisName = e[n + "AxisName"] = t.name),
    (e.axisId = e[n + "AxisId"] = t.id),
    e
  );
}
function Fo(r) {
  return !r || r[0] == null || isNaN(r[0]) || r[1] == null || isNaN(r[1]);
}
function I_(r) {
  f_.registerAxisPointerClass("CartesianAxisPointer", RL),
    r.registerComponentModel(OL),
    r.registerComponentView(HL),
    r.registerPreprocessor(function (t) {
      if (t) {
        (!t.axisPointer || t.axisPointer.length === 0) && (t.axisPointer = {});
        var e = t.axisPointer.link;
        e && !N(e) && (t.axisPointer.link = [e]);
      }
    }),
    r.registerProcessor(r.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
      t.getComponent("axisPointer").coordSysAxesInfo = O2(t, e);
    }),
    r.registerAction(
      {
        type: "updateAxisPointer",
        event: "updateAxisPointer",
        update: ":updateAxisPointer",
      },
      VL
    );
}
function qR(r) {
  Be(q2), Be(I_);
}
var Ap = ["x", "y", "radius", "angle", "single"],
  KL = ["cartesian2d", "polar", "singleAxis"];
function QL(r) {
  var t = r.get("coordinateSystem");
  return J(KL, t) >= 0;
}
function pr(r) {
  return r + "Axis";
}
function JL(r, t) {
  var e = W(),
    n = [],
    i = W();
  r.eachComponent({ mainType: "dataZoom", query: t }, function (f) {
    i.get(f.uid) || s(f);
  });
  var a;
  do (a = !1), r.eachComponent("dataZoom", o);
  while (a);
  function o(f) {
    !i.get(f.uid) && u(f) && (s(f), (a = !0));
  }
  function s(f) {
    i.set(f.uid, !0), n.push(f), l(f);
  }
  function u(f) {
    var h = !1;
    return (
      f.eachTargetAxis(function (c, v) {
        var d = e.get(c);
        d && d[v] && (h = !0);
      }),
      h
    );
  }
  function l(f) {
    f.eachTargetAxis(function (h, c) {
      (e.get(h) || e.set(h, []))[c] = !0;
    });
  }
  return n;
}
function P_(r) {
  var t = r.ecModel,
    e = { infoList: [], infoMap: W() };
  return (
    r.eachTargetAxis(function (n, i) {
      var a = t.getComponent(pr(n), i);
      if (!!a) {
        var o = a.getCoordSysModel();
        if (!!o) {
          var s = o.uid,
            u = e.infoMap.get(s);
          u ||
            ((u = { model: o, axisModels: [] }),
            e.infoList.push(u),
            e.infoMap.set(s, u)),
            u.axisModels.push(a);
        }
      }
    }),
    e
  );
}
var ll = (function () {
    function r() {
      (this.indexList = []), (this.indexMap = []);
    }
    return (
      (r.prototype.add = function (t) {
        this.indexMap[t] || (this.indexList.push(t), (this.indexMap[t] = !0));
      }),
      r
    );
  })(),
  jL = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = t.type),
        (e._autoThrottle = !0),
        (e._noTarget = !0),
        (e._rangePropMode = ["percent", "percent"]),
        e
      );
    }
    return (
      (t.prototype.init = function (e, n, i) {
        var a = Lp(e);
        (this.settledOption = a),
          this.mergeDefaultAndTheme(e, i),
          this._doInit(a);
      }),
      (t.prototype.mergeOption = function (e) {
        var n = Lp(e);
        Q(this.option, e, !0), Q(this.settledOption, n, !0), this._doInit(n);
      }),
      (t.prototype._doInit = function (e) {
        var n = this.option;
        this._setDefaultThrottle(e), this._updateRangeUse(e);
        var i = this.settledOption;
        C(
          [
            ["start", "startValue"],
            ["end", "endValue"],
          ],
          function (a, o) {
            this._rangePropMode[o] === "value" && (n[a[0]] = i[a[0]] = null);
          },
          this
        ),
          this._resetTarget();
      }),
      (t.prototype._resetTarget = function () {
        var e = this.get("orient", !0),
          n = (this._targetAxisInfoMap = W()),
          i = this._fillSpecifiedTargetAxis(n);
        i
          ? (this._orient = e || this._makeAutoOrientByTargetAxis())
          : ((this._orient = e || "horizontal"),
            this._fillAutoTargetAxisByOrient(n, this._orient)),
          (this._noTarget = !0),
          n.each(function (a) {
            a.indexList.length && (this._noTarget = !1);
          }, this);
      }),
      (t.prototype._fillSpecifiedTargetAxis = function (e) {
        var n = !1;
        return (
          C(
            Ap,
            function (i) {
              var a = this.getReferringComponents(pr(i), nx);
              if (!!a.specified) {
                n = !0;
                var o = new ll();
                C(a.models, function (s) {
                  o.add(s.componentIndex);
                }),
                  e.set(i, o);
              }
            },
            this
          ),
          n
        );
      }),
      (t.prototype._fillAutoTargetAxisByOrient = function (e, n) {
        var i = this.ecModel,
          a = !0;
        if (a) {
          var o = n === "vertical" ? "y" : "x",
            s = i.findComponents({ mainType: o + "Axis" });
          u(s, o);
        }
        if (a) {
          var s = i.findComponents({
            mainType: "singleAxis",
            filter: function (f) {
              return f.get("orient", !0) === n;
            },
          });
          u(s, "single");
        }
        function u(l, f) {
          var h = l[0];
          if (!!h) {
            var c = new ll();
            if (
              (c.add(h.componentIndex),
              e.set(f, c),
              (a = !1),
              f === "x" || f === "y")
            ) {
              var v = h.getReferringComponents("grid", zt).models[0];
              v &&
                C(l, function (d) {
                  h.componentIndex !== d.componentIndex &&
                    v === d.getReferringComponents("grid", zt).models[0] &&
                    c.add(d.componentIndex);
                });
            }
          }
        }
        a &&
          C(
            Ap,
            function (l) {
              if (!!a) {
                var f = i.findComponents({
                  mainType: pr(l),
                  filter: function (c) {
                    return c.get("type", !0) === "category";
                  },
                });
                if (f[0]) {
                  var h = new ll();
                  h.add(f[0].componentIndex), e.set(l, h), (a = !1);
                }
              }
            },
            this
          );
      }),
      (t.prototype._makeAutoOrientByTargetAxis = function () {
        var e;
        return (
          this.eachTargetAxis(function (n) {
            !e && (e = n);
          }, this),
          e === "y" ? "vertical" : "horizontal"
        );
      }),
      (t.prototype._setDefaultThrottle = function (e) {
        if (
          (e.hasOwnProperty("throttle") && (this._autoThrottle = !1),
          this._autoThrottle)
        ) {
          var n = this.ecModel.option;
          this.option.throttle =
            n.animation && n.animationDurationUpdate > 0 ? 100 : 20;
        }
      }),
      (t.prototype._updateRangeUse = function (e) {
        var n = this._rangePropMode,
          i = this.get("rangeMode");
        C(
          [
            ["start", "startValue"],
            ["end", "endValue"],
          ],
          function (a, o) {
            var s = e[a[0]] != null,
              u = e[a[1]] != null;
            s && !u
              ? (n[o] = "percent")
              : !s && u
              ? (n[o] = "value")
              : i
              ? (n[o] = i[o])
              : s && (n[o] = "percent");
          }
        );
      }),
      (t.prototype.noTarget = function () {
        return this._noTarget;
      }),
      (t.prototype.getFirstTargetAxisModel = function () {
        var e;
        return (
          this.eachTargetAxis(function (n, i) {
            e == null && (e = this.ecModel.getComponent(pr(n), i));
          }, this),
          e
        );
      }),
      (t.prototype.eachTargetAxis = function (e, n) {
        this._targetAxisInfoMap.each(function (i, a) {
          C(i.indexList, function (o) {
            e.call(n, a, o);
          });
        });
      }),
      (t.prototype.getAxisProxy = function (e, n) {
        var i = this.getAxisModel(e, n);
        if (i) return i.__dzAxisProxy;
      }),
      (t.prototype.getAxisModel = function (e, n) {
        var i = this._targetAxisInfoMap.get(e);
        if (i && i.indexMap[n]) return this.ecModel.getComponent(pr(e), n);
      }),
      (t.prototype.setRawRange = function (e) {
        var n = this.option,
          i = this.settledOption;
        C(
          [
            ["start", "startValue"],
            ["end", "endValue"],
          ],
          function (a) {
            (e[a[0]] != null || e[a[1]] != null) &&
              ((n[a[0]] = i[a[0]] = e[a[0]]), (n[a[1]] = i[a[1]] = e[a[1]]));
          },
          this
        ),
          this._updateRangeUse(e);
      }),
      (t.prototype.setCalculatedRange = function (e) {
        var n = this.option;
        C(["start", "startValue", "end", "endValue"], function (i) {
          n[i] = e[i];
        });
      }),
      (t.prototype.getPercentRange = function () {
        var e = this.findRepresentativeAxisProxy();
        if (e) return e.getDataPercentWindow();
      }),
      (t.prototype.getValueRange = function (e, n) {
        if (e == null && n == null) {
          var i = this.findRepresentativeAxisProxy();
          if (i) return i.getDataValueWindow();
        } else return this.getAxisProxy(e, n).getDataValueWindow();
      }),
      (t.prototype.findRepresentativeAxisProxy = function (e) {
        if (e) return e.__dzAxisProxy;
        for (
          var n, i = this._targetAxisInfoMap.keys(), a = 0;
          a < i.length;
          a++
        )
          for (
            var o = i[a], s = this._targetAxisInfoMap.get(o), u = 0;
            u < s.indexList.length;
            u++
          ) {
            var l = this.getAxisProxy(o, s.indexList[u]);
            if (l.hostedBy(this)) return l;
            n || (n = l);
          }
        return n;
      }),
      (t.prototype.getRangePropMode = function () {
        return this._rangePropMode.slice();
      }),
      (t.prototype.getOrient = function () {
        return this._orient;
      }),
      (t.type = "dataZoom"),
      (t.dependencies = [
        "xAxis",
        "yAxis",
        "radiusAxis",
        "angleAxis",
        "singleAxis",
        "series",
        "toolbox",
      ]),
      (t.defaultOption = { z: 4, filterMode: "filter", start: 0, end: 100 }),
      t
    );
  })(ct);
function Lp(r) {
  var t = {};
  return (
    C(["start", "end", "startValue", "endValue", "throttle"], function (e) {
      r.hasOwnProperty(e) && (t[e] = r[e]);
    }),
    t
  );
}
const ba = jL;
var tI = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (t.type = "dataZoom.select"), t;
})(ba);
const eI = tI;
var rI = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (
    (t.prototype.render = function (e, n, i, a) {
      (this.dataZoomModel = e), (this.ecModel = n), (this.api = i);
    }),
    (t.type = "dataZoom"),
    t
  );
})(ve);
const Uh = rI;
var nI = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (t.type = "dataZoom.select"), t;
})(Uh);
const iI = nI;
var Nn = C,
  Ip = zi,
  aI = (function () {
    function r(t, e, n, i) {
      (this._dimName = t),
        (this._axisIndex = e),
        (this.ecModel = i),
        (this._dataZoomModel = n);
    }
    return (
      (r.prototype.hostedBy = function (t) {
        return this._dataZoomModel === t;
      }),
      (r.prototype.getDataValueWindow = function () {
        return this._valueWindow.slice();
      }),
      (r.prototype.getDataPercentWindow = function () {
        return this._percentWindow.slice();
      }),
      (r.prototype.getTargetSeriesModels = function () {
        var t = [];
        return (
          this.ecModel.eachSeries(function (e) {
            if (QL(e)) {
              var n = pr(this._dimName),
                i = e.getReferringComponents(n, zt).models[0];
              i && this._axisIndex === i.componentIndex && t.push(e);
            }
          }, this),
          t
        );
      }),
      (r.prototype.getAxisModel = function () {
        return this.ecModel.getComponent(
          this._dimName + "Axis",
          this._axisIndex
        );
      }),
      (r.prototype.getMinMaxSpan = function () {
        return K(this._minMaxSpan);
      }),
      (r.prototype.calculateDataWindow = function (t) {
        var e = this._dataExtent,
          n = this.getAxisModel(),
          i = n.axis.scale,
          a = this._dataZoomModel.getRangePropMode(),
          o = [0, 100],
          s = [],
          u = [],
          l;
        Nn(["start", "end"], function (c, v) {
          var d = t[c],
            g = t[c + "Value"];
          a[v] === "percent"
            ? (d == null && (d = o[v]), (g = i.parse(Et(d, o, e))))
            : ((l = !0),
              (g = g == null ? e[v] : i.parse(g)),
              (d = Et(g, e, o))),
            (u[v] = g),
            (s[v] = d);
        }),
          Ip(u),
          Ip(s);
        var f = this._minMaxSpan;
        l ? h(u, s, e, o, !1) : h(s, u, o, e, !0);
        function h(c, v, d, g, p) {
          var y = p ? "Span" : "ValueSpan";
          Oa(0, c, d, "all", f["min" + y], f["max" + y]);
          for (var m = 0; m < 2; m++)
            (v[m] = Et(c[m], d, g, !0)), p && (v[m] = i.parse(v[m]));
        }
        return { valueWindow: u, percentWindow: s };
      }),
      (r.prototype.reset = function (t) {
        if (t === this._dataZoomModel) {
          var e = this.getTargetSeriesModels();
          (this._dataExtent = oI(this, this._dimName, e)),
            this._updateMinMaxSpan();
          var n = this.calculateDataWindow(t.settledOption);
          (this._valueWindow = n.valueWindow),
            (this._percentWindow = n.percentWindow),
            this._setAxisModel();
        }
      }),
      (r.prototype.filterData = function (t, e) {
        if (t !== this._dataZoomModel) return;
        var n = this._dimName,
          i = this.getTargetSeriesModels(),
          a = t.get("filterMode"),
          o = this._valueWindow;
        if (a === "none") return;
        Nn(i, function (u) {
          var l = u.getData(),
            f = l.mapDimensionsAll(n);
          if (!!f.length) {
            if (a === "weakFilter") {
              var h = l.getStore(),
                c = z(
                  f,
                  function (v) {
                    return l.getDimensionIndex(v);
                  },
                  l
                );
              l.filterSelf(function (v) {
                for (var d, g, p, y = 0; y < f.length; y++) {
                  var m = h.get(c[y], v),
                    _ = !isNaN(m),
                    S = m < o[0],
                    w = m > o[1];
                  if (_ && !S && !w) return !0;
                  _ && (p = !0), S && (d = !0), w && (g = !0);
                }
                return p && d && g;
              });
            } else
              Nn(f, function (v) {
                if (a === "empty")
                  u.setData(
                    (l = l.map(v, function (g) {
                      return s(g) ? g : NaN;
                    }))
                  );
                else {
                  var d = {};
                  (d[v] = o), l.selectRange(d);
                }
              });
            Nn(f, function (v) {
              l.setApproximateExtent(o, v);
            });
          }
        });
        function s(u) {
          return u >= o[0] && u <= o[1];
        }
      }),
      (r.prototype._updateMinMaxSpan = function () {
        var t = (this._minMaxSpan = {}),
          e = this._dataZoomModel,
          n = this._dataExtent;
        Nn(
          ["min", "max"],
          function (i) {
            var a = e.get(i + "Span"),
              o = e.get(i + "ValueSpan");
            o != null && (o = this.getAxisModel().axis.scale.parse(o)),
              o != null
                ? (a = Et(n[0] + o, n, [0, 100], !0))
                : a != null && (o = Et(a, [0, 100], n, !0) - n[0]),
              (t[i + "Span"] = a),
              (t[i + "ValueSpan"] = o);
          },
          this
        );
      }),
      (r.prototype._setAxisModel = function () {
        var t = this.getAxisModel(),
          e = this._percentWindow,
          n = this._valueWindow;
        if (!!e) {
          var i = Zg(n, [0, 500]);
          i = Math.min(i, 20);
          var a = t.axis.scale.rawExtentInfo;
          e[0] !== 0 && a.setDeterminedMinMax("min", +n[0].toFixed(i)),
            e[1] !== 100 && a.setDeterminedMinMax("max", +n[1].toFixed(i)),
            a.freeze();
        }
      }),
      r
    );
  })();
function oI(r, t, e) {
  var n = [1 / 0, -1 / 0];
  Nn(e, function (o) {
    oA(n, o.getData(), t);
  });
  var i = r.getAxisModel(),
    a = V0(i.axis.scale, i, n).calculate();
  return [a.min, a.max];
}
const sI = aI;
var uI = {
  getTargetSeries: function (r) {
    function t(i) {
      r.eachComponent("dataZoom", function (a) {
        a.eachTargetAxis(function (o, s) {
          var u = r.getComponent(pr(o), s);
          i(o, s, u, a);
        });
      });
    }
    t(function (i, a, o, s) {
      o.__dzAxisProxy = null;
    });
    var e = [];
    t(function (i, a, o, s) {
      o.__dzAxisProxy ||
        ((o.__dzAxisProxy = new sI(i, a, s, r)), e.push(o.__dzAxisProxy));
    });
    var n = W();
    return (
      C(e, function (i) {
        C(i.getTargetSeriesModels(), function (a) {
          n.set(a.uid, a);
        });
      }),
      n
    );
  },
  overallReset: function (r, t) {
    r.eachComponent("dataZoom", function (e) {
      e.eachTargetAxis(function (n, i) {
        e.getAxisProxy(n, i).reset(e);
      }),
        e.eachTargetAxis(function (n, i) {
          e.getAxisProxy(n, i).filterData(e, t);
        });
    }),
      r.eachComponent("dataZoom", function (e) {
        var n = e.findRepresentativeAxisProxy();
        if (n) {
          var i = n.getDataPercentWindow(),
            a = n.getDataValueWindow();
          e.setCalculatedRange({
            start: i[0],
            end: i[1],
            startValue: a[0],
            endValue: a[1],
          });
        }
      });
  },
};
const lI = uI;
function fI(r) {
  r.registerAction("dataZoom", function (t, e) {
    var n = JL(e, t);
    C(n, function (i) {
      i.setRawRange({
        start: t.start,
        end: t.end,
        startValue: t.startValue,
        endValue: t.endValue,
      });
    });
  });
}
var Pp = !1;
function Yh(r) {
  Pp ||
    ((Pp = !0),
    r.registerProcessor(r.PRIORITY.PROCESSOR.FILTER, lI),
    fI(r),
    r.registerSubTypeDefaulter("dataZoom", function () {
      return "slider";
    }));
}
function hI(r) {
  r.registerComponentModel(eI), r.registerComponentView(iI), Yh(r);
}
var xe = (function () {
    function r() {}
    return r;
  })(),
  R_ = {};
function Pi(r, t) {
  R_[r] = t;
}
function E_(r) {
  return R_[r];
}
var vI = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (
    (t.prototype.optionUpdated = function () {
      r.prototype.optionUpdated.apply(this, arguments);
      var e = this.ecModel;
      C(this.option.feature, function (n, i) {
        var a = E_(i);
        a &&
          (a.getDefaultOption && (a.defaultOption = a.getDefaultOption(e)),
          Q(n, a.defaultOption));
      });
    }),
    (t.type = "toolbox"),
    (t.layoutMode = { type: "box", ignoreSize: !0 }),
    (t.defaultOption = {
      show: !0,
      z: 6,
      orient: "horizontal",
      left: "right",
      top: "top",
      backgroundColor: "transparent",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemSize: 15,
      itemGap: 8,
      showTitle: !0,
      iconStyle: { borderColor: "#666", color: "none" },
      emphasis: { iconStyle: { borderColor: "#3E98C5" } },
      tooltip: { show: !1, position: "bottom" },
    }),
    t
  );
})(ct);
const cI = vI;
function dI(r, t, e) {
  var n = t.getBoxLayoutParams(),
    i = t.get("padding"),
    a = { width: e.getWidth(), height: e.getHeight() },
    o = wr(n, a, i);
  Qn(t.get("orient"), r, t.get("itemGap"), o.width, o.height), Qb(r, n, a, i);
}
function O_(r, t) {
  var e = Ns(t.get("padding")),
    n = t.getItemStyle(["color", "opacity"]);
  return (
    (n.fill = t.get("backgroundColor")),
    (r = new yt({
      shape: {
        x: r.x - e[3],
        y: r.y - e[0],
        width: r.width + e[1] + e[3],
        height: r.height + e[0] + e[2],
        r: t.get("borderRadius"),
      },
      style: n,
      silent: !0,
      z2: -1,
    })),
    r
  );
}
var pI = (function (r) {
  O(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.render = function (e, n, i, a) {
      var o = this.group;
      if ((o.removeAll(), !e.get("show"))) return;
      var s = +e.get("itemSize"),
        u = e.get("orient") === "vertical",
        l = e.get("feature") || {},
        f = this._features || (this._features = {}),
        h = [];
      C(l, function (d, g) {
        h.push(g);
      }),
        new ma(this._featureNames || [], h)
          .add(c)
          .update(c)
          .remove(ot(c, null))
          .execute(),
        (this._featureNames = h);
      function c(d, g) {
        var p = h[d],
          y = h[g],
          m = l[p],
          _ = new At(m, e, e.ecModel),
          S;
        if (
          (a &&
            a.newTitle != null &&
            a.featureName === p &&
            (m.title = a.newTitle),
          p && !y)
        ) {
          if (gI(p)) S = { onclick: _.option.onclick, featureName: p };
          else {
            var w = E_(p);
            if (!w) return;
            S = new w();
          }
          f[p] = S;
        } else if (((S = f[y]), !S)) return;
        (S.uid = Ia("toolbox-feature")),
          (S.model = _),
          (S.ecModel = n),
          (S.api = i);
        var x = S instanceof xe;
        if (!p && y) {
          x && S.dispose && S.dispose(n, i);
          return;
        }
        if (!_.get("show") || (x && S.unusable)) {
          x && S.remove && S.remove(n, i);
          return;
        }
        v(_, S, p),
          (_.setIconStatus = function (b, T) {
            var M = this.option,
              D = this.iconPaths;
            (M.iconStatus = M.iconStatus || {}),
              (M.iconStatus[b] = T),
              D[b] && (T === "emphasis" ? jn : ti)(D[b]);
          }),
          S instanceof xe && S.render && S.render(_, n, i, a);
      }
      function v(d, g, p) {
        var y = d.getModel("iconStyle"),
          m = d.getModel(["emphasis", "iconStyle"]),
          _ = g instanceof xe && g.getIcons ? g.getIcons() : d.get("icon"),
          S = d.get("title") || {},
          w,
          x;
        G(_) ? ((w = {}), (w[p] = _)) : (w = _),
          G(S) ? ((x = {}), (x[p] = S)) : (x = S);
        var b = (d.iconPaths = {});
        C(w, function (T, M) {
          var D = As(T, {}, { x: -s / 2, y: -s / 2, width: s, height: s });
          D.setStyle(y.getItemStyle());
          var A = D.ensureState("emphasis");
          A.style = m.getItemStyle();
          var L = new Dt({
            style: {
              text: x[M],
              align: m.get("textAlign"),
              borderRadius: m.get("textBorderRadius"),
              padding: m.get("textPadding"),
              fill: null,
            },
            ignore: !0,
          });
          D.setTextContent(L),
            Ls({
              el: D,
              componentModel: e,
              itemName: M,
              formatterParamsExtra: { title: x[M] },
            }),
            (D.__title = x[M]),
            D.on("mouseover", function () {
              var I = m.getItemStyle(),
                P = u
                  ? e.get("right") == null && e.get("left") !== "right"
                    ? "right"
                    : "left"
                  : e.get("bottom") == null && e.get("top") !== "bottom"
                  ? "bottom"
                  : "top";
              L.setStyle({
                fill: m.get("textFill") || I.fill || I.stroke || "#000",
                backgroundColor: m.get("textBackgroundColor"),
              }),
                D.setTextConfig({ position: m.get("textPosition") || P }),
                (L.ignore = !e.get("showTitle")),
                i.enterEmphasis(this);
            }).on("mouseout", function () {
              d.get(["iconStatus", M]) !== "emphasis" && i.leaveEmphasis(this),
                L.hide();
            }),
            (d.get(["iconStatus", M]) === "emphasis" ? jn : ti)(D),
            o.add(D),
            D.on("click", Y(g.onclick, g, n, i, M)),
            (b[M] = D);
        });
      }
      dI(o, e, i),
        o.add(O_(o.getBoundingRect(), e)),
        u ||
          o.eachChild(function (d) {
            var g = d.__title,
              p = d.ensureState("emphasis"),
              y = p.textConfig || (p.textConfig = {}),
              m = d.getTextContent(),
              _ = m && m.ensureState("emphasis");
            if (_ && !U(_) && g) {
              var S = _.style || (_.style = {}),
                w = _s(g, Dt.makeFont(S)),
                x = d.x + o.x,
                b = d.y + o.y + s,
                T = !1;
              b + w.height > i.getHeight() && ((y.position = "top"), (T = !0));
              var M = T ? -5 - w.height : s + 10;
              x + w.width / 2 > i.getWidth()
                ? ((y.position = ["100%", M]), (S.align = "right"))
                : x - w.width / 2 < 0 &&
                  ((y.position = [0, M]), (S.align = "left"));
            }
          });
    }),
    (t.prototype.updateView = function (e, n, i, a) {
      C(this._features, function (o) {
        o instanceof xe && o.updateView && o.updateView(o.model, n, i, a);
      });
    }),
    (t.prototype.remove = function (e, n) {
      C(this._features, function (i) {
        i instanceof xe && i.remove && i.remove(e, n);
      }),
        this.group.removeAll();
    }),
    (t.prototype.dispose = function (e, n) {
      C(this._features, function (i) {
        i instanceof xe && i.dispose && i.dispose(e, n);
      });
    }),
    (t.type = "toolbox"),
    t
  );
})(ve);
function gI(r) {
  return r.indexOf("my") === 0;
}
const yI = pI;
var mI = (function (r) {
  O(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.onclick = function (e, n) {
      var i = this.model,
        a = i.get("name") || e.get("title.0.text") || "echarts",
        o = n.getZr().painter.getType() === "svg",
        s = o ? "svg" : i.get("type", !0) || "png",
        u = n.getConnectedDataURL({
          type: s,
          backgroundColor:
            i.get("backgroundColor", !0) || e.get("backgroundColor") || "#fff",
          connectedBackgroundColor: i.get("connectedBackgroundColor"),
          excludeComponents: i.get("excludeComponents"),
          pixelRatio: i.get("pixelRatio"),
        }),
        l = j.browser;
      if (U(MouseEvent) && (l.newEdge || (!l.ie && !l.edge))) {
        var f = document.createElement("a");
        (f.download = a + "." + s), (f.target = "_blank"), (f.href = u);
        var h = new MouseEvent("click", {
          view: document.defaultView,
          bubbles: !0,
          cancelable: !1,
        });
        f.dispatchEvent(h);
      } else if (window.navigator.msSaveOrOpenBlob || o) {
        var c = u.split(","),
          v = c[0].indexOf("base64") > -1,
          d = o ? decodeURIComponent(c[1]) : c[1];
        v && (d = window.atob(d));
        var g = a + "." + s;
        if (window.navigator.msSaveOrOpenBlob) {
          for (var p = d.length, y = new Uint8Array(p); p--; )
            y[p] = d.charCodeAt(p);
          var m = new Blob([y]);
          window.navigator.msSaveOrOpenBlob(m, g);
        } else {
          var _ = document.createElement("iframe");
          document.body.appendChild(_);
          var S = _.contentWindow,
            w = S.document;
          w.open("image/svg+xml", "replace"),
            w.write(d),
            w.close(),
            S.focus(),
            w.execCommand("SaveAs", !0, g),
            document.body.removeChild(_);
        }
      } else {
        var x = i.get("lang"),
          b =
            '<body style="margin:0;"><img src="' +
            u +
            '" style="max-width:100%;" title="' +
            ((x && x[0]) || "") +
            '" /></body>',
          T = window.open();
        T.document.write(b), (T.document.title = a);
      }
    }),
    (t.getDefaultOption = function (e) {
      var n = {
        show: !0,
        icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
        title: e.getLocaleModel().get(["toolbox", "saveAsImage", "title"]),
        type: "png",
        connectedBackgroundColor: "#fff",
        name: "",
        excludeComponents: ["toolbox"],
        lang: e.getLocaleModel().get(["toolbox", "saveAsImage", "lang"]),
      };
      return n;
    }),
    t
  );
})(xe);
const _I = mI;
var Rp = "__ec_magicType_stack__",
  SI = [["line", "bar"], ["stack"]],
  xI = (function (r) {
    O(t, r);
    function t() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.getIcons = function () {
        var e = this.model,
          n = e.get("icon"),
          i = {};
        return (
          C(e.get("type"), function (a) {
            n[a] && (i[a] = n[a]);
          }),
          i
        );
      }),
      (t.getDefaultOption = function (e) {
        var n = {
          show: !0,
          type: [],
          icon: {
            line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
            bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
            stack:
              "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
          },
          title: e.getLocaleModel().get(["toolbox", "magicType", "title"]),
          option: {},
          seriesIndex: {},
        };
        return n;
      }),
      (t.prototype.onclick = function (e, n, i) {
        var a = this.model,
          o = a.get(["seriesIndex", i]);
        if (!!Ep[i]) {
          var s = { series: [] },
            u = function (h) {
              var c = h.subType,
                v = h.id,
                d = Ep[i](c, v, h, a);
              d && (q(d, h.option), s.series.push(d));
              var g = h.coordinateSystem;
              if (
                g &&
                g.type === "cartesian2d" &&
                (i === "line" || i === "bar")
              ) {
                var p = g.getAxesByScale("ordinal")[0];
                if (p) {
                  var y = p.dim,
                    m = y + "Axis",
                    _ = h.getReferringComponents(m, zt).models[0],
                    S = _.componentIndex;
                  s[m] = s[m] || [];
                  for (var w = 0; w <= S; w++) s[m][S] = s[m][S] || {};
                  s[m][S].boundaryGap = i === "bar";
                }
              }
            };
          C(SI, function (h) {
            J(h, i) >= 0 &&
              C(h, function (c) {
                a.setIconStatus(c, "normal");
              });
          }),
            a.setIconStatus(i, "emphasis"),
            e.eachComponent(
              {
                mainType: "series",
                query: o == null ? null : { seriesIndex: o },
              },
              u
            );
          var l,
            f = i;
          i === "stack" &&
            ((l = Q(
              { stack: a.option.title.tiled, tiled: a.option.title.stack },
              a.option.title
            )),
            a.get(["iconStatus", i]) !== "emphasis" && (f = "tiled")),
            n.dispatchAction({
              type: "changeMagicType",
              currentType: f,
              newOption: s,
              newTitle: l,
              featureName: "magicType",
            });
        }
      }),
      t
    );
  })(xe),
  Ep = {
    line: function (r, t, e, n) {
      if (r === "bar")
        return Q(
          {
            id: t,
            type: "line",
            data: e.get("data"),
            stack: e.get("stack"),
            markPoint: e.get("markPoint"),
            markLine: e.get("markLine"),
          },
          n.get(["option", "line"]) || {},
          !0
        );
    },
    bar: function (r, t, e, n) {
      if (r === "line")
        return Q(
          {
            id: t,
            type: "bar",
            data: e.get("data"),
            stack: e.get("stack"),
            markPoint: e.get("markPoint"),
            markLine: e.get("markLine"),
          },
          n.get(["option", "bar"]) || {},
          !0
        );
    },
    stack: function (r, t, e, n) {
      var i = e.get("stack") === Rp;
      if (r === "line" || r === "bar")
        return (
          n.setIconStatus("stack", i ? "normal" : "emphasis"),
          Q({ id: t, stack: i ? "" : Rp }, n.get(["option", "stack"]) || {}, !0)
        );
    },
  };
Fe(
  {
    type: "changeMagicType",
    event: "magicTypeChanged",
    update: "prepareAndUpdate",
  },
  function (r, t) {
    t.mergeOption(r.newOption);
  }
);
const wI = xI;
var Zs = new Array(60).join("-"),
  ii = "	";
function bI(r) {
  var t = {},
    e = [],
    n = [];
  return (
    r.eachRawSeries(function (i) {
      var a = i.coordinateSystem;
      if (a && (a.type === "cartesian2d" || a.type === "polar")) {
        var o = a.getBaseAxis();
        if (o.type === "category") {
          var s = o.dim + "_" + o.index;
          t[s] ||
            ((t[s] = {
              categoryAxis: o,
              valueAxis: a.getOtherAxis(o),
              series: [],
            }),
            n.push({ axisDim: o.dim, axisIndex: o.index })),
            t[s].series.push(i);
        } else e.push(i);
      } else e.push(i);
    }),
    { seriesGroupByCategoryAxis: t, other: e, meta: n }
  );
}
function TI(r) {
  var t = [];
  return (
    C(r, function (e, n) {
      var i = e.categoryAxis,
        a = e.valueAxis,
        o = a.dim,
        s = [" "].concat(
          z(e.series, function (v) {
            return v.name;
          })
        ),
        u = [i.model.getCategories()];
      C(e.series, function (v) {
        var d = v.getRawData();
        u.push(
          v.getRawData().mapArray(d.mapDimension(o), function (g) {
            return g;
          })
        );
      });
      for (var l = [s.join(ii)], f = 0; f < u[0].length; f++) {
        for (var h = [], c = 0; c < u.length; c++) h.push(u[c][f]);
        l.push(h.join(ii));
      }
      t.push(
        l.join(`
`)
      );
    }),
    t.join(
      `

` +
        Zs +
        `

`
    )
  );
}
function CI(r) {
  return z(r, function (t) {
    var e = t.getRawData(),
      n = [t.name],
      i = [];
    return (
      e.each(e.dimensions, function () {
        for (
          var a = arguments.length,
            o = arguments[a - 1],
            s = e.getName(o),
            u = 0;
          u < a - 1;
          u++
        )
          i[u] = arguments[u];
        n.push((s ? s + ii : "") + i.join(ii));
      }),
      n.join(`
`)
    );
  }).join(
    `

` +
      Zs +
      `

`
  );
}
function MI(r) {
  var t = bI(r);
  return {
    value: xt([TI(t.seriesGroupByCategoryAxis), CI(t.other)], function (e) {
      return !!e.replace(/[\n\t\s]/g, "");
    }).join(
      `

` +
        Zs +
        `

`
    ),
    meta: t.meta,
  };
}
function ls(r) {
  return r.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function DI(r) {
  var t = r.slice(
    0,
    r.indexOf(`
`)
  );
  if (t.indexOf(ii) >= 0) return !0;
}
var Df = new RegExp("[" + ii + "]+", "g");
function AI(r) {
  for (
    var t = r.split(/\n+/g),
      e = ls(t.shift()).split(Df),
      n = [],
      i = z(e, function (u) {
        return { name: u, data: [] };
      }),
      a = 0;
    a < t.length;
    a++
  ) {
    var o = ls(t[a]).split(Df);
    n.push(o.shift());
    for (var s = 0; s < o.length; s++) i[s] && (i[s].data[a] = o[s]);
  }
  return { series: i, categories: n };
}
function LI(r) {
  for (
    var t = r.split(/\n+/g), e = ls(t.shift()), n = [], i = 0;
    i < t.length;
    i++
  ) {
    var a = ls(t[i]);
    if (!!a) {
      var o = a.split(Df),
        s = "",
        u = void 0,
        l = !1;
      isNaN(o[0])
        ? ((l = !0),
          (s = o[0]),
          (o = o.slice(1)),
          (n[i] = { name: s, value: [] }),
          (u = n[i].value))
        : (u = n[i] = []);
      for (var f = 0; f < o.length; f++) u.push(+o[f]);
      u.length === 1 && (l ? (n[i].value = u[0]) : (n[i] = u[0]));
    }
  }
  return { name: e, data: n };
}
function II(r, t) {
  var e = r.split(
      new RegExp(
        `
*` +
          Zs +
          `
*`,
        "g"
      )
    ),
    n = { series: [] };
  return (
    C(e, function (i, a) {
      if (DI(i)) {
        var o = AI(i),
          s = t[a],
          u = s.axisDim + "Axis";
        s &&
          ((n[u] = n[u] || []),
          (n[u][s.axisIndex] = { data: o.categories }),
          (n.series = n.series.concat(o.series)));
      } else {
        var o = LI(i);
        n.series.push(o);
      }
    }),
    n
  );
}
var PI = (function (r) {
  O(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.onclick = function (e, n) {
      setTimeout(function () {
        n.dispatchAction({ type: "hideTip" });
      });
      var i = n.getDom(),
        a = this.model;
      this._dom && i.removeChild(this._dom);
      var o = document.createElement("div");
      (o.style.cssText =
        "position:absolute;top:0;bottom:0;left:0;right:0;padding:5px"),
        (o.style.backgroundColor = a.get("backgroundColor") || "#fff");
      var s = document.createElement("h4"),
        u = a.get("lang") || [];
      (s.innerHTML = u[0] || a.get("title")),
        (s.style.cssText = "margin:10px 20px"),
        (s.style.color = a.get("textColor"));
      var l = document.createElement("div"),
        f = document.createElement("textarea");
      l.style.cssText = "overflow:auto";
      var h = a.get("optionToContent"),
        c = a.get("contentToOption"),
        v = MI(e);
      if (U(h)) {
        var d = h(n.getOption());
        G(d) ? (l.innerHTML = d) : ra(d) && l.appendChild(d);
      } else {
        f.readOnly = a.get("readOnly");
        var g = f.style;
        (g.cssText =
          "display:block;width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;resize:none;box-sizing:border-box;outline:none"),
          (g.color = a.get("textColor")),
          (g.borderColor = a.get("textareaBorderColor")),
          (g.backgroundColor = a.get("textareaColor")),
          (f.value = v.value),
          l.appendChild(f);
      }
      var p = v.meta,
        y = document.createElement("div");
      y.style.cssText = "position:absolute;bottom:5px;left:0;right:0";
      var m =
          "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",
        _ = document.createElement("div"),
        S = document.createElement("div");
      (m += ";background-color:" + a.get("buttonColor")),
        (m += ";color:" + a.get("buttonTextColor"));
      var w = this;
      function x() {
        i.removeChild(o), (w._dom = null);
      }
      Dl(_, "click", x),
        Dl(S, "click", function () {
          if ((c == null && h != null) || (c != null && h == null)) {
            x();
            return;
          }
          var b;
          try {
            U(c) ? (b = c(l, n.getOption())) : (b = II(f.value, p));
          } catch (T) {
            throw (x(), new Error("Data view format error " + T));
          }
          b && n.dispatchAction({ type: "changeDataView", newOption: b }), x();
        }),
        (_.innerHTML = u[1]),
        (S.innerHTML = u[2]),
        (S.style.cssText = _.style.cssText = m),
        !a.get("readOnly") && y.appendChild(S),
        y.appendChild(_),
        o.appendChild(s),
        o.appendChild(l),
        o.appendChild(y),
        (l.style.height = i.clientHeight - 80 + "px"),
        i.appendChild(o),
        (this._dom = o);
    }),
    (t.prototype.remove = function (e, n) {
      this._dom && n.getDom().removeChild(this._dom);
    }),
    (t.prototype.dispose = function (e, n) {
      this.remove(e, n);
    }),
    (t.getDefaultOption = function (e) {
      var n = {
        show: !0,
        readOnly: !1,
        optionToContent: null,
        contentToOption: null,
        icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
        title: e.getLocaleModel().get(["toolbox", "dataView", "title"]),
        lang: e.getLocaleModel().get(["toolbox", "dataView", "lang"]),
        backgroundColor: "#fff",
        textColor: "#000",
        textareaColor: "#fff",
        textareaBorderColor: "#333",
        buttonColor: "#c23531",
        buttonTextColor: "#fff",
      };
      return n;
    }),
    t
  );
})(xe);
function RI(r, t) {
  return z(r, function (e, n) {
    var i = t && t[n];
    if (H(i) && !N(i)) {
      var a = H(e) && !N(e);
      a || (e = { value: e });
      var o = i.name != null && e.name == null;
      return (e = q(e, i)), o && delete e.name, e;
    } else return e;
  });
}
Fe(
  {
    type: "changeDataView",
    event: "dataViewChanged",
    update: "prepareAndUpdate",
  },
  function (r, t) {
    var e = [];
    C(r.newOption.series, function (n) {
      var i = t.getSeriesByName(n.name)[0];
      if (!i) e.push(k({ type: "scatter" }, n));
      else {
        var a = i.get("data");
        e.push({ name: n.name, data: RI(n.data, a) });
      }
    }),
      t.mergeOption(q({ series: e }, r.newOption));
  }
);
const EI = PI;
var k_ = C,
  B_ = gt();
function OI(r, t) {
  var e = $h(r);
  k_(t, function (n, i) {
    for (var a = e.length - 1; a >= 0; a--) {
      var o = e[a];
      if (o[i]) break;
    }
    if (a < 0) {
      var s = r.queryComponents({
        mainType: "dataZoom",
        subType: "select",
        id: i,
      })[0];
      if (s) {
        var u = s.getPercentRange();
        e[0][i] = { dataZoomId: i, start: u[0], end: u[1] };
      }
    }
  }),
    e.push(t);
}
function kI(r) {
  var t = $h(r),
    e = t[t.length - 1];
  t.length > 1 && t.pop();
  var n = {};
  return (
    k_(e, function (i, a) {
      for (var o = t.length - 1; o >= 0; o--)
        if (((i = t[o][a]), i)) {
          n[a] = i;
          break;
        }
    }),
    n
  );
}
function BI(r) {
  B_(r).snapshots = null;
}
function NI(r) {
  return $h(r).length;
}
function $h(r) {
  var t = B_(r);
  return t.snapshots || (t.snapshots = [{}]), t.snapshots;
}
var FI = (function (r) {
  O(t, r);
  function t() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return (
    (t.prototype.onclick = function (e, n) {
      BI(e), n.dispatchAction({ type: "restore", from: this.uid });
    }),
    (t.getDefaultOption = function (e) {
      var n = {
        show: !0,
        icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
        title: e.getLocaleModel().get(["toolbox", "restore", "title"]),
      };
      return n;
    }),
    t
  );
})(xe);
Fe(
  { type: "restore", event: "restore", update: "prepareAndUpdate" },
  function (r, t) {
    t.resetOption("recreate");
  }
);
const zI = FI;
var GI = [
    "grid",
    "xAxis",
    "yAxis",
    "geo",
    "graph",
    "polar",
    "radiusAxis",
    "angleAxis",
    "bmap",
  ],
  HI = (function () {
    function r(t, e, n) {
      var i = this;
      this._targetInfoList = [];
      var a = Op(e, t);
      C(VI, function (o, s) {
        (!n || !n.include || J(n.include, s) >= 0) && o(a, i._targetInfoList);
      });
    }
    return (
      (r.prototype.setOutputRanges = function (t, e) {
        return (
          this.matchOutputRanges(t, e, function (n, i, a) {
            if (
              ((n.coordRanges || (n.coordRanges = [])).push(i), !n.coordRange)
            ) {
              n.coordRange = i;
              var o = fl[n.brushType](0, a, i);
              n.__rangeOffset = {
                offset: Fp[n.brushType](o.values, n.range, [1, 1]),
                xyMinMax: o.xyMinMax,
              };
            }
          }),
          t
        );
      }),
      (r.prototype.matchOutputRanges = function (t, e, n) {
        C(
          t,
          function (i) {
            var a = this.findTargetInfo(i, e);
            a &&
              a !== !0 &&
              C(a.coordSyses, function (o) {
                var s = fl[i.brushType](1, o, i.range, !0);
                n(i, s.values, o, e);
              });
          },
          this
        );
      }),
      (r.prototype.setInputRanges = function (t, e) {
        C(
          t,
          function (n) {
            var i = this.findTargetInfo(n, e);
            if (((n.range = n.range || []), i && i !== !0)) {
              n.panelId = i.panelId;
              var a = fl[n.brushType](0, i.coordSys, n.coordRange),
                o = n.__rangeOffset;
              n.range = o
                ? Fp[n.brushType](
                    a.values,
                    o.offset,
                    WI(a.xyMinMax, o.xyMinMax)
                  )
                : a.values;
            }
          },
          this
        );
      }),
      (r.prototype.makePanelOpts = function (t, e) {
        return z(this._targetInfoList, function (n) {
          var i = n.getPanelRect();
          return {
            panelId: n.panelId,
            defaultBrushType: e ? e(n) : null,
            clipPath: _L(i),
            isTargetByCursor: xL(i, t, n.coordSysModel),
            getLinearBrushOtherExtent: SL(i),
          };
        });
      }),
      (r.prototype.controlSeries = function (t, e, n) {
        var i = this.findTargetInfo(t, n);
        return i === !0 || (i && J(i.coordSyses, e.coordinateSystem) >= 0);
      }),
      (r.prototype.findTargetInfo = function (t, e) {
        for (
          var n = this._targetInfoList, i = Op(e, t), a = 0;
          a < n.length;
          a++
        ) {
          var o = n[a],
            s = t.panelId;
          if (s) {
            if (o.panelId === s) return o;
          } else for (var u = 0; u < kp.length; u++) if (kp[u](i, o)) return o;
        }
        return !0;
      }),
      r
    );
  })();
function Af(r) {
  return r[0] > r[1] && r.reverse(), r;
}
function Op(r, t) {
  return $i(r, t, { includeMainTypes: GI });
}
var VI = {
    grid: function (r, t) {
      var e = r.xAxisModels,
        n = r.yAxisModels,
        i = r.gridModels,
        a = W(),
        o = {},
        s = {};
      (!e && !n && !i) ||
        (C(e, function (u) {
          var l = u.axis.grid.model;
          a.set(l.id, l), (o[l.id] = !0);
        }),
        C(n, function (u) {
          var l = u.axis.grid.model;
          a.set(l.id, l), (s[l.id] = !0);
        }),
        C(i, function (u) {
          a.set(u.id, u), (o[u.id] = !0), (s[u.id] = !0);
        }),
        a.each(function (u) {
          var l = u.coordinateSystem,
            f = [];
          C(l.getCartesians(), function (h, c) {
            (J(e, h.getAxis("x").model) >= 0 ||
              J(n, h.getAxis("y").model) >= 0) &&
              f.push(h);
          }),
            t.push({
              panelId: "grid--" + u.id,
              gridModel: u,
              coordSysModel: u,
              coordSys: f[0],
              coordSyses: f,
              getPanelRect: Bp.grid,
              xAxisDeclared: o[u.id],
              yAxisDeclared: s[u.id],
            });
        }));
    },
    geo: function (r, t) {
      C(r.geoModels, function (e) {
        var n = e.coordinateSystem;
        t.push({
          panelId: "geo--" + e.id,
          geoModel: e,
          coordSysModel: e,
          coordSys: n,
          coordSyses: [n],
          getPanelRect: Bp.geo,
        });
      });
    },
  },
  kp = [
    function (r, t) {
      var e = r.xAxisModel,
        n = r.yAxisModel,
        i = r.gridModel;
      return (
        !i && e && (i = e.axis.grid.model),
        !i && n && (i = n.axis.grid.model),
        i && i === t.gridModel
      );
    },
    function (r, t) {
      var e = r.geoModel;
      return e && e === t.geoModel;
    },
  ],
  Bp = {
    grid: function () {
      return this.coordSys.master.getRect().clone();
    },
    geo: function () {
      var r = this.coordSys,
        t = r.getBoundingRect().clone();
      return t.applyTransform(Ds(r)), t;
    },
  },
  fl = {
    lineX: ot(Np, 0),
    lineY: ot(Np, 1),
    rect: function (r, t, e, n) {
      var i = r
          ? t.pointToData([e[0][0], e[1][0]], n)
          : t.dataToPoint([e[0][0], e[1][0]], n),
        a = r
          ? t.pointToData([e[0][1], e[1][1]], n)
          : t.dataToPoint([e[0][1], e[1][1]], n),
        o = [Af([i[0], a[0]]), Af([i[1], a[1]])];
      return { values: o, xyMinMax: o };
    },
    polygon: function (r, t, e, n) {
      var i = [
          [1 / 0, -1 / 0],
          [1 / 0, -1 / 0],
        ],
        a = z(e, function (o) {
          var s = r ? t.pointToData(o, n) : t.dataToPoint(o, n);
          return (
            (i[0][0] = Math.min(i[0][0], s[0])),
            (i[1][0] = Math.min(i[1][0], s[1])),
            (i[0][1] = Math.max(i[0][1], s[0])),
            (i[1][1] = Math.max(i[1][1], s[1])),
            s
          );
        });
      return { values: a, xyMinMax: i };
    },
  };
function Np(r, t, e, n) {
  var i = e.getAxis(["x", "y"][r]),
    a = Af(
      z([0, 1], function (s) {
        return t
          ? i.coordToData(i.toLocalCoord(n[s]), !0)
          : i.toGlobalCoord(i.dataToCoord(n[s]));
      })
    ),
    o = [];
  return (o[r] = a), (o[1 - r] = [NaN, NaN]), { values: a, xyMinMax: o };
}
var Fp = {
  lineX: ot(zp, 0),
  lineY: ot(zp, 1),
  rect: function (r, t, e) {
    return [
      [r[0][0] - e[0] * t[0][0], r[0][1] - e[0] * t[0][1]],
      [r[1][0] - e[1] * t[1][0], r[1][1] - e[1] * t[1][1]],
    ];
  },
  polygon: function (r, t, e) {
    return z(r, function (n, i) {
      return [n[0] - e[0] * t[i][0], n[1] - e[1] * t[i][1]];
    });
  },
};
function zp(r, t, e, n) {
  return [t[0] - n[r] * e[0], t[1] - n[r] * e[1]];
}
function WI(r, t) {
  var e = Gp(r),
    n = Gp(t),
    i = [e[0] / n[0], e[1] / n[1]];
  return isNaN(i[0]) && (i[0] = 1), isNaN(i[1]) && (i[1] = 1), i;
}
function Gp(r) {
  return r ? [r[0][1] - r[0][0], r[1][1] - r[1][0]] : [NaN, NaN];
}
const N_ = HI;
var Lf = C,
  UI = jS("toolbox-dataZoom_"),
  YI = (function (r) {
    O(t, r);
    function t() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (t.prototype.render = function (e, n, i, a) {
        this._brushController ||
          ((this._brushController = new mL(i.getZr())),
          this._brushController.on("brush", Y(this._onBrush, this)).mount()),
          XI(e, n, this, a, i),
          ZI(e, n);
      }),
      (t.prototype.onclick = function (e, n, i) {
        $I[i].call(this);
      }),
      (t.prototype.remove = function (e, n) {
        this._brushController && this._brushController.unmount();
      }),
      (t.prototype.dispose = function (e, n) {
        this._brushController && this._brushController.dispose();
      }),
      (t.prototype._onBrush = function (e) {
        var n = e.areas;
        if (!e.isEnd || !n.length) return;
        var i = {},
          a = this.ecModel;
        this._brushController.updateCovers([]);
        var o = new N_(Zh(this.model), a, { include: ["grid"] });
        o.matchOutputRanges(n, a, function (l, f, h) {
          if (h.type === "cartesian2d") {
            var c = l.brushType;
            c === "rect"
              ? (s("x", h, f[0]), s("y", h, f[1]))
              : s({ lineX: "x", lineY: "y" }[c], h, f);
          }
        }),
          OI(a, i),
          this._dispatchZoomAction(i);
        function s(l, f, h) {
          var c = f.getAxis(l),
            v = c.model,
            d = u(l, v, a),
            g = d.findRepresentativeAxisProxy(v).getMinMaxSpan();
          (g.minValueSpan != null || g.maxValueSpan != null) &&
            (h = Oa(
              0,
              h.slice(),
              c.scale.getExtent(),
              0,
              g.minValueSpan,
              g.maxValueSpan
            )),
            d &&
              (i[d.id] = {
                dataZoomId: d.id,
                startValue: h[0],
                endValue: h[1],
              });
        }
        function u(l, f, h) {
          var c;
          return (
            h.eachComponent(
              { mainType: "dataZoom", subType: "select" },
              function (v) {
                var d = v.getAxisModel(l, f.componentIndex);
                d && (c = v);
              }
            ),
            c
          );
        }
      }),
      (t.prototype._dispatchZoomAction = function (e) {
        var n = [];
        Lf(e, function (i, a) {
          n.push(K(i));
        }),
          n.length &&
            this.api.dispatchAction({
              type: "dataZoom",
              from: this.uid,
              batch: n,
            });
      }),
      (t.getDefaultOption = function (e) {
        var n = {
          show: !0,
          filterMode: "filter",
          icon: {
            zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
            back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26",
          },
          title: e.getLocaleModel().get(["toolbox", "dataZoom", "title"]),
          brushStyle: { borderWidth: 0, color: "rgba(210,219,238,0.2)" },
        };
        return n;
      }),
      t
    );
  })(xe),
  $I = {
    zoom: function () {
      var r = !this._isZoomActive;
      this.api.dispatchAction({
        type: "takeGlobalCursor",
        key: "dataZoomSelect",
        dataZoomSelectActive: r,
      });
    },
    back: function () {
      this._dispatchZoomAction(kI(this.ecModel));
    },
  };
function Zh(r) {
  var t = {
    xAxisIndex: r.get("xAxisIndex", !0),
    yAxisIndex: r.get("yAxisIndex", !0),
    xAxisId: r.get("xAxisId", !0),
    yAxisId: r.get("yAxisId", !0),
  };
  return (
    t.xAxisIndex == null && t.xAxisId == null && (t.xAxisIndex = "all"),
    t.yAxisIndex == null && t.yAxisId == null && (t.yAxisIndex = "all"),
    t
  );
}
function ZI(r, t) {
  r.setIconStatus("back", NI(t) > 1 ? "emphasis" : "normal");
}
function XI(r, t, e, n, i) {
  var a = e._isZoomActive;
  n &&
    n.type === "takeGlobalCursor" &&
    (a = n.key === "dataZoomSelect" ? n.dataZoomSelectActive : !1),
    (e._isZoomActive = a),
    r.setIconStatus("zoom", a ? "emphasis" : "normal");
  var o = new N_(Zh(r), t, { include: ["grid"] }),
    s = o.makePanelOpts(i, function (u) {
      return u.xAxisDeclared && !u.yAxisDeclared
        ? "lineX"
        : !u.xAxisDeclared && u.yAxisDeclared
        ? "lineY"
        : "rect";
    });
  e._brushController
    .setPanels(s)
    .enableBrush(
      a && s.length
        ? {
            brushType: "auto",
            brushStyle: r.getModel("brushStyle").getItemStyle(),
          }
        : !1
    );
}
oT("dataZoom", function (r) {
  var t = r.getComponent("toolbox", 0),
    e = ["feature", "dataZoom"];
  if (!t || t.get(e) == null) return;
  var n = t.getModel(e),
    i = [],
    a = Zh(n),
    o = $i(r, a);
  Lf(o.xAxisModels, function (u) {
    return s(u, "xAxis", "xAxisIndex");
  }),
    Lf(o.yAxisModels, function (u) {
      return s(u, "yAxis", "yAxisIndex");
    });
  function s(u, l, f) {
    var h = u.componentIndex,
      c = {
        type: "select",
        $fromToolbox: !0,
        filterMode: n.get("filterMode", !0) || "filter",
        id: UI + l + h,
      };
    (c[f] = h), i.push(c);
  }
  return i;
});
const qI = YI;
function KR(r) {
  r.registerComponentModel(cI),
    r.registerComponentView(yI),
    Pi("saveAsImage", _I),
    Pi("magicType", wI),
    Pi("dataView", EI),
    Pi("dataZoom", qI),
    Pi("restore", zI),
    Be(hI);
}
var KI = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (
    (t.type = "tooltip"),
    (t.dependencies = ["axisPointer"]),
    (t.defaultOption = {
      z: 60,
      show: !0,
      showContent: !0,
      trigger: "item",
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      renderMode: "auto",
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: 0.4,
      enterable: !1,
      backgroundColor: "#fff",
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      borderRadius: 4,
      borderWidth: 1,
      padding: null,
      extraCssText: "",
      axisPointer: {
        type: "line",
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: { color: "#999", width: 1, type: "dashed", textStyle: {} },
      },
      textStyle: { color: "#666", fontSize: 14 },
    }),
    t
  );
})(ct);
const QI = KI;
function F_(r) {
  var t = r.get("confine");
  return t != null ? !!t : r.get("renderMode") === "richText";
}
function z_(r) {
  if (!!j.domSupported) {
    for (
      var t = document.documentElement.style, e = 0, n = r.length;
      e < n;
      e++
    )
      if (r[e] in t) return r[e];
  }
}
var G_ = z_([
    "transform",
    "webkitTransform",
    "OTransform",
    "MozTransform",
    "msTransform",
  ]),
  JI = z_([
    "webkitTransition",
    "transition",
    "OTransition",
    "MozTransition",
    "msTransition",
  ]);
function H_(r, t) {
  if (!r) return t;
  t = pm(t, !0);
  var e = r.indexOf(t);
  return (r = e === -1 ? t : "-" + r.slice(0, e) + "-" + t), r.toLowerCase();
}
function jI(r, t) {
  var e =
    r.currentStyle ||
    (document.defaultView && document.defaultView.getComputedStyle(r));
  return e ? (t ? e[t] : e) : null;
}
var tP = H_(JI, "transition"),
  Xh = H_(G_, "transform"),
  eP =
    "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" +
    (j.transform3dSupported ? "will-change:transform;" : "");
function rP(r) {
  return (
    (r =
      r === "left"
        ? "right"
        : r === "right"
        ? "left"
        : r === "top"
        ? "bottom"
        : "top"),
    r
  );
}
function nP(r, t, e) {
  if (!G(e) || e === "inside") return "";
  var n = r.get("backgroundColor"),
    i = r.get("borderWidth");
  t = hn(t);
  var a = rP(e),
    o = Math.max(Math.round(i) * 1.5, 6),
    s = "",
    u = Xh + ":",
    l;
  J(["left", "right"], a) > -1
    ? ((s += "top:50%"),
      (u +=
        "translateY(-50%) rotate(" + (l = a === "left" ? -225 : -45) + "deg)"))
    : ((s += "left:50%"),
      (u +=
        "translateX(-50%) rotate(" + (l = a === "top" ? 225 : 45) + "deg)"));
  var f = (l * Math.PI) / 180,
    h = o + i,
    c = h * Math.abs(Math.cos(f)) + h * Math.abs(Math.sin(f)),
    v =
      Math.round(
        ((c - Math.SQRT2 * i) / 2 + Math.SQRT2 * i - (c - h) / 2) * 100
      ) / 100;
  s += ";" + a + ":-" + v + "px";
  var d = t + " solid " + i + "px;",
    g = [
      "position:absolute;width:" + o + "px;height:" + o + "px;",
      s + ";" + u + ";",
      "border-bottom:" + d,
      "border-right:" + d,
      "background-color:" + n + ";",
    ];
  return '<div style="' + g.join("") + '"></div>';
}
function iP(r, t) {
  var e = "cubic-bezier(0.23,1,0.32,1)",
    n = " " + r / 2 + "s " + e,
    i = "opacity" + n + ",visibility" + n;
  return (
    t ||
      ((n = " " + r + "s " + e),
      (i += j.transformSupported ? "," + Xh + n : ",left" + n + ",top" + n)),
    tP + ":" + i
  );
}
function Hp(r, t, e) {
  var n = r.toFixed(0) + "px",
    i = t.toFixed(0) + "px";
  if (!j.transformSupported)
    return e
      ? "top:" + i + ";left:" + n + ";"
      : [
          ["top", i],
          ["left", n],
        ];
  var a = j.transform3dSupported,
    o =
      "translate" + (a ? "3d" : "") + "(" + n + "," + i + (a ? ",0" : "") + ")";
  return e
    ? "top:0;left:0;" + Xh + ":" + o + ";"
    : [
        ["top", 0],
        ["left", 0],
        [G_, o],
      ];
}
function aP(r) {
  var t = [],
    e = r.get("fontSize"),
    n = r.getTextColor();
  n && t.push("color:" + n),
    t.push("font:" + r.getFont()),
    e && t.push("line-height:" + Math.round((e * 3) / 2) + "px");
  var i = r.get("textShadowColor"),
    a = r.get("textShadowBlur") || 0,
    o = r.get("textShadowOffsetX") || 0,
    s = r.get("textShadowOffsetY") || 0;
  return (
    i && a && t.push("text-shadow:" + o + "px " + s + "px " + a + "px " + i),
    C(["decoration", "align"], function (u) {
      var l = r.get(u);
      l && t.push("text-" + u + ":" + l);
    }),
    t.join(";")
  );
}
function oP(r, t, e) {
  var n = [],
    i = r.get("transitionDuration"),
    a = r.get("backgroundColor"),
    o = r.get("shadowBlur"),
    s = r.get("shadowColor"),
    u = r.get("shadowOffsetX"),
    l = r.get("shadowOffsetY"),
    f = r.getModel("textStyle"),
    h = $m(r, "html"),
    c = u + "px " + l + "px " + o + "px " + s;
  return (
    n.push("box-shadow:" + c),
    t && i && n.push(iP(i, e)),
    a && n.push("background-color:" + a),
    C(["width", "color", "radius"], function (v) {
      var d = "border-" + v,
        g = pm(d),
        p = r.get(g);
      p != null && n.push(d + ":" + p + (v === "color" ? "" : "px"));
    }),
    n.push(aP(f)),
    h != null && n.push("padding:" + Ns(h).join("px ") + "px"),
    n.join(";") + ";"
  );
}
function Vp(r, t, e, n, i) {
  var a = t && t.painter;
  if (e) {
    var o = a && a.getViewportRoot();
    o && L1(r, o, document.body, n, i);
  } else {
    (r[0] = n), (r[1] = i);
    var s = a && a.getViewportRootOffset();
    s && ((r[0] += s.offsetLeft), (r[1] += s.offsetTop));
  }
  (r[2] = r[0] / t.getWidth()), (r[3] = r[1] / t.getHeight());
}
var sP = (function () {
  function r(t, e, n) {
    if (
      ((this._show = !1),
      (this._styleCoord = [0, 0, 0, 0]),
      (this._enterable = !0),
      (this._firstShow = !0),
      (this._longHide = !0),
      j.wxa)
    )
      return null;
    var i = document.createElement("div");
    (i.domBelongToZr = !0), (this.el = i);
    var a = (this._zr = e.getZr()),
      o = (this._appendToBody = n && n.appendToBody);
    Vp(this._styleCoord, a, o, e.getWidth() / 2, e.getHeight() / 2),
      o ? document.body.appendChild(i) : t.appendChild(i),
      (this._container = t);
    var s = this;
    (i.onmouseenter = function () {
      s._enterable && (clearTimeout(s._hideTimeout), (s._show = !0)),
        (s._inContent = !0);
    }),
      (i.onmousemove = function (u) {
        if (((u = u || window.event), !s._enterable)) {
          var l = a.handler,
            f = a.painter.getViewportRoot();
          ie(f, u, !0), l.dispatch("mousemove", u);
        }
      }),
      (i.onmouseleave = function () {
        (s._inContent = !1),
          s._enterable && s._show && s.hideLater(s._hideDelay);
      });
  }
  return (
    (r.prototype.update = function (t) {
      var e = this._container,
        n = jI(e, "position"),
        i = e.style;
      i.position !== "absolute" &&
        n !== "absolute" &&
        (i.position = "relative");
      var a = t.get("alwaysShowContent");
      a && this._moveIfResized(),
        (this.el.className = t.get("className") || "");
    }),
    (r.prototype.show = function (t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el,
        i = n.style,
        a = this._styleCoord;
      n.innerHTML
        ? (i.cssText =
            eP +
            oP(t, !this._firstShow, this._longHide) +
            Hp(a[0], a[1], !0) +
            ("border-color:" + hn(e) + ";") +
            (t.get("extraCssText") || "") +
            (";pointer-events:" + (this._enterable ? "auto" : "none")))
        : (i.display = "none"),
        (this._show = !0),
        (this._firstShow = !1),
        (this._longHide = !1);
    }),
    (r.prototype.setContent = function (t, e, n, i, a) {
      var o = this.el;
      if (t == null) {
        o.innerHTML = "";
        return;
      }
      var s = "";
      if (
        (G(a) && n.get("trigger") === "item" && !F_(n) && (s = nP(n, i, a)),
        G(t))
      )
        o.innerHTML = t + s;
      else if (t) {
        (o.innerHTML = ""), N(t) || (t = [t]);
        for (var u = 0; u < t.length; u++)
          ra(t[u]) && t[u].parentNode !== o && o.appendChild(t[u]);
        if (s && o.childNodes.length) {
          var l = document.createElement("div");
          (l.innerHTML = s), o.appendChild(l);
        }
      }
    }),
    (r.prototype.setEnterable = function (t) {
      this._enterable = t;
    }),
    (r.prototype.getSize = function () {
      var t = this.el;
      return [t.offsetWidth, t.offsetHeight];
    }),
    (r.prototype.moveTo = function (t, e) {
      var n = this._styleCoord;
      if (
        (Vp(n, this._zr, this._appendToBody, t, e),
        n[0] != null && n[1] != null)
      ) {
        var i = this.el.style,
          a = Hp(n[0], n[1]);
        C(a, function (o) {
          i[o[0]] = o[1];
        });
      }
    }),
    (r.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }),
    (r.prototype.hide = function () {
      var t = this,
        e = this.el.style;
      (e.visibility = "hidden"),
        (e.opacity = "0"),
        j.transform3dSupported && (e.willChange = ""),
        (this._show = !1),
        (this._longHideTimeout = setTimeout(function () {
          return (t._longHide = !0);
        }, 500));
    }),
    (r.prototype.hideLater = function (t) {
      this._show &&
        !(this._inContent && this._enterable) &&
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(Y(this.hide, this), t)))
          : this.hide());
    }),
    (r.prototype.isShow = function () {
      return this._show;
    }),
    (r.prototype.dispose = function () {
      this.el.parentNode.removeChild(this.el);
    }),
    r
  );
})();
const uP = sP;
var lP = (function () {
  function r(t) {
    (this._show = !1),
      (this._styleCoord = [0, 0, 0, 0]),
      (this._enterable = !0),
      (this._zr = t.getZr()),
      Up(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
  }
  return (
    (r.prototype.update = function (t) {
      var e = t.get("alwaysShowContent");
      e && this._moveIfResized();
    }),
    (r.prototype.show = function () {
      this._hideTimeout && clearTimeout(this._hideTimeout),
        this.el.show(),
        (this._show = !0);
    }),
    (r.prototype.setContent = function (t, e, n, i, a) {
      var o = this;
      H(t) && et(""), this.el && this._zr.remove(this.el);
      var s = n.getModel("textStyle");
      (this.el = new Dt({
        style: {
          rich: e.richTextStyles,
          text: t,
          lineHeight: 22,
          borderWidth: 1,
          borderColor: i,
          textShadowColor: s.get("textShadowColor"),
          fill: n.get(["textStyle", "color"]),
          padding: $m(n, "richText"),
          verticalAlign: "top",
          align: "left",
        },
        z: n.get("z"),
      })),
        C(
          [
            "backgroundColor",
            "borderRadius",
            "shadowColor",
            "shadowBlur",
            "shadowOffsetX",
            "shadowOffsetY",
          ],
          function (l) {
            o.el.style[l] = n.get(l);
          }
        ),
        C(
          ["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"],
          function (l) {
            o.el.style[l] = s.get(l) || 0;
          }
        ),
        this._zr.add(this.el);
      var u = this;
      this.el.on("mouseover", function () {
        u._enterable && (clearTimeout(u._hideTimeout), (u._show = !0)),
          (u._inContent = !0);
      }),
        this.el.on("mouseout", function () {
          u._enterable && u._show && u.hideLater(u._hideDelay),
            (u._inContent = !1);
        });
    }),
    (r.prototype.setEnterable = function (t) {
      this._enterable = t;
    }),
    (r.prototype.getSize = function () {
      var t = this.el,
        e = this.el.getBoundingRect(),
        n = Wp(t.style);
      return [e.width + n.left + n.right, e.height + n.top + n.bottom];
    }),
    (r.prototype.moveTo = function (t, e) {
      var n = this.el;
      if (n) {
        var i = this._styleCoord;
        Up(i, this._zr, t, e), (t = i[0]), (e = i[1]);
        var a = n.style,
          o = fr(a.borderWidth || 0),
          s = Wp(a);
        (n.x = t + o + s.left), (n.y = e + o + s.top), n.markRedraw();
      }
    }),
    (r.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }),
    (r.prototype.hide = function () {
      this.el && this.el.hide(), (this._show = !1);
    }),
    (r.prototype.hideLater = function (t) {
      this._show &&
        !(this._inContent && this._enterable) &&
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(Y(this.hide, this), t)))
          : this.hide());
    }),
    (r.prototype.isShow = function () {
      return this._show;
    }),
    (r.prototype.dispose = function () {
      this._zr.remove(this.el);
    }),
    r
  );
})();
function fr(r) {
  return Math.max(0, r);
}
function Wp(r) {
  var t = fr(r.shadowBlur || 0),
    e = fr(r.shadowOffsetX || 0),
    n = fr(r.shadowOffsetY || 0);
  return {
    left: fr(t - e),
    right: fr(t + e),
    top: fr(t - n),
    bottom: fr(t + n),
  };
}
function Up(r, t, e, n) {
  (r[0] = e),
    (r[1] = n),
    (r[2] = r[0] / t.getWidth()),
    (r[3] = r[1] / t.getHeight());
}
const fP = lP;
var hP = new yt({ shape: { x: -1, y: -1, width: 2, height: 2 } }),
  vP = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), e;
    }
    return (
      (t.prototype.init = function (e, n) {
        if (!(j.node || !n.getDom())) {
          var i = e.getComponent("tooltip"),
            a = (this._renderMode = ax(i.get("renderMode")));
          this._tooltipContent =
            a === "richText"
              ? new fP(n)
              : new uP(n.getDom(), n, {
                  appendToBody: i.get("appendToBody", !0),
                });
        }
      }),
      (t.prototype.render = function (e, n, i) {
        if (!(j.node || !i.getDom())) {
          this.group.removeAll(),
            (this._tooltipModel = e),
            (this._ecModel = n),
            (this._api = i),
            (this._alwaysShowContent = e.get("alwaysShowContent"));
          var a = this._tooltipContent;
          a.update(e),
            a.setEnterable(e.get("enterable")),
            this._initGlobalListener(),
            this._keepShow(),
            this._renderMode !== "richText" && e.get("transitionDuration")
              ? Hs(this, "_updatePosition", 50, "fixRate")
              : rs(this, "_updatePosition");
        }
      }),
      (t.prototype._initGlobalListener = function () {
        var e = this._tooltipModel,
          n = e.get("triggerOn");
        A_(
          "itemTooltip",
          this._api,
          Y(function (i, a, o) {
            n !== "none" &&
              (n.indexOf(i) >= 0
                ? this._tryShow(a, o)
                : i === "leave" && this._hide(o));
          }, this)
        );
      }),
      (t.prototype._keepShow = function () {
        var e = this._tooltipModel,
          n = this._ecModel,
          i = this._api;
        if (
          this._lastX != null &&
          this._lastY != null &&
          e.get("triggerOn") !== "none"
        ) {
          var a = this;
          clearTimeout(this._refreshUpdateTimeout),
            (this._refreshUpdateTimeout = setTimeout(function () {
              !i.isDisposed() &&
                a.manuallyShowTip(e, n, i, {
                  x: a._lastX,
                  y: a._lastY,
                  dataByCoordSys: a._lastDataByCoordSys,
                });
            }));
        }
      }),
      (t.prototype.manuallyShowTip = function (e, n, i, a) {
        if (!(a.from === this.uid || j.node || !i.getDom())) {
          var o = Yp(a, i);
          this._ticket = "";
          var s = a.dataByCoordSys,
            u = gP(a, n, i);
          if (u) {
            var l = u.el.getBoundingRect().clone();
            l.applyTransform(u.el.transform),
              this._tryShow(
                {
                  offsetX: l.x + l.width / 2,
                  offsetY: l.y + l.height / 2,
                  target: u.el,
                  position: a.position,
                  positionDefault: "bottom",
                },
                o
              );
          } else if (a.tooltip && a.x != null && a.y != null) {
            var f = hP;
            (f.x = a.x),
              (f.y = a.y),
              f.update(),
              (ut(f).tooltipConfig = { name: null, option: a.tooltip }),
              this._tryShow({ offsetX: a.x, offsetY: a.y, target: f }, o);
          } else if (s)
            this._tryShow(
              {
                offsetX: a.x,
                offsetY: a.y,
                position: a.position,
                dataByCoordSys: s,
                tooltipOption: a.tooltipOption,
              },
              o
            );
          else if (a.seriesIndex != null) {
            if (this._manuallyAxisShowTip(e, n, i, a)) return;
            var h = L_(a, n),
              c = h.point[0],
              v = h.point[1];
            c != null &&
              v != null &&
              this._tryShow(
                {
                  offsetX: c,
                  offsetY: v,
                  target: h.el,
                  position: a.position,
                  positionDefault: "bottom",
                },
                o
              );
          } else
            a.x != null &&
              a.y != null &&
              (i.dispatchAction({ type: "updateAxisPointer", x: a.x, y: a.y }),
              this._tryShow(
                {
                  offsetX: a.x,
                  offsetY: a.y,
                  position: a.position,
                  target: i.getZr().findHover(a.x, a.y).target,
                },
                o
              ));
        }
      }),
      (t.prototype.manuallyHideTip = function (e, n, i, a) {
        var o = this._tooltipContent;
        !this._alwaysShowContent &&
          this._tooltipModel &&
          o.hideLater(this._tooltipModel.get("hideDelay")),
          (this._lastX = this._lastY = this._lastDataByCoordSys = null),
          a.from !== this.uid && this._hide(Yp(a, i));
      }),
      (t.prototype._manuallyAxisShowTip = function (e, n, i, a) {
        var o = a.seriesIndex,
          s = a.dataIndex,
          u = n.getComponent("axisPointer").coordSysAxesInfo;
        if (!(o == null || s == null || u == null)) {
          var l = n.getSeriesByIndex(o);
          if (!!l) {
            var f = l.getData(),
              h = Ri(
                [f.getItemModel(s), l, (l.coordinateSystem || {}).model],
                this._tooltipModel
              );
            if (h.get("trigger") === "axis")
              return (
                i.dispatchAction({
                  type: "updateAxisPointer",
                  seriesIndex: o,
                  dataIndex: s,
                  position: a.position,
                }),
                !0
              );
          }
        }
      }),
      (t.prototype._tryShow = function (e, n) {
        var i = e.target,
          a = this._tooltipModel;
        if (!!a) {
          (this._lastX = e.offsetX), (this._lastY = e.offsetY);
          var o = e.dataByCoordSys;
          if (o && o.length) this._showAxisTooltip(o, e);
          else if (i) {
            this._lastDataByCoordSys = null;
            var s, u;
            Wi(
              i,
              function (l) {
                if (ut(l).dataIndex != null) return (s = l), !0;
                if (ut(l).tooltipConfig != null) return (u = l), !0;
              },
              !0
            ),
              s
                ? this._showSeriesItemTooltip(e, s, n)
                : u
                ? this._showComponentItemTooltip(e, u, n)
                : this._hide(n);
          } else (this._lastDataByCoordSys = null), this._hide(n);
        }
      }),
      (t.prototype._showOrMove = function (e, n) {
        var i = e.get("showDelay");
        (n = Y(n, this)),
          clearTimeout(this._showTimout),
          i > 0 ? (this._showTimout = setTimeout(n, i)) : n();
      }),
      (t.prototype._showAxisTooltip = function (e, n) {
        var i = this._ecModel,
          a = this._tooltipModel,
          o = [n.offsetX, n.offsetY],
          s = Ri([n.tooltipOption], a),
          u = this._renderMode,
          l = [],
          f = da("section", { blocks: [], noHeader: !0 }),
          h = [],
          c = new zu();
        C(e, function (m) {
          C(m.dataByAxis, function (_) {
            var S = i.getComponent(_.axisDim + "Axis", _.axisIndex),
              w = _.value;
            if (!(!S || w == null)) {
              var x = M_(w, S.axis, i, _.seriesDataIndices, _.valueLabelOpt),
                b = da("section", {
                  header: x,
                  noHeader: !Pe(x),
                  sortBlocks: !0,
                  blocks: [],
                });
              f.blocks.push(b),
                C(_.seriesDataIndices, function (T) {
                  var M = i.getSeriesByIndex(T.seriesIndex),
                    D = T.dataIndexInside,
                    A = M.getDataParams(D);
                  if (!(A.dataIndex < 0)) {
                    (A.axisDim = _.axisDim),
                      (A.axisIndex = _.axisIndex),
                      (A.axisType = _.axisType),
                      (A.axisId = _.axisId),
                      (A.axisValue = Rh(S.axis, { value: w })),
                      (A.axisValueLabel = x),
                      (A.marker = c.makeTooltipMarker("item", hn(A.color), u));
                    var L = Uc(M.formatTooltip(D, !0, null)),
                      I = L.frag;
                    if (I) {
                      var P = Ri([M], a).get("valueFormatter");
                      b.blocks.push(P ? k({ valueFormatter: P }, I) : I);
                    }
                    L.text && h.push(L.text), l.push(A);
                  }
                });
            }
          });
        }),
          f.blocks.reverse(),
          h.reverse();
        var v = n.position,
          d = s.get("order"),
          g = Kc(f, c, u, d, i.get("useUTC"), s.get("textStyle"));
        g && h.unshift(g);
        var p =
            u === "richText"
              ? `

`
              : "<br/>",
          y = h.join(p);
        this._showOrMove(s, function () {
          this._updateContentNotChangedOnAxis(e, l)
            ? this._updatePosition(s, v, o[0], o[1], this._tooltipContent, l)
            : this._showTooltipContent(
                s,
                y,
                l,
                Math.random() + "",
                o[0],
                o[1],
                v,
                null,
                c
              );
        });
      }),
      (t.prototype._showSeriesItemTooltip = function (e, n, i) {
        var a = this._ecModel,
          o = ut(n),
          s = o.seriesIndex,
          u = a.getSeriesByIndex(s),
          l = o.dataModel || u,
          f = o.dataIndex,
          h = o.dataType,
          c = l.getData(h),
          v = this._renderMode,
          d = e.positionDefault,
          g = Ri(
            [c.getItemModel(f), l, u && (u.coordinateSystem || {}).model],
            this._tooltipModel,
            d ? { position: d } : null
          ),
          p = g.get("trigger");
        if (!(p != null && p !== "item")) {
          var y = l.getDataParams(f, h),
            m = new zu();
          y.marker = m.makeTooltipMarker("item", hn(y.color), v);
          var _ = Uc(l.formatTooltip(f, !1, h)),
            S = g.get("order"),
            w = g.get("valueFormatter"),
            x = _.frag,
            b = x
              ? Kc(
                  w ? k({ valueFormatter: w }, x) : x,
                  m,
                  v,
                  S,
                  a.get("useUTC"),
                  g.get("textStyle")
                )
              : _.text,
            T = "item_" + l.name + "_" + f;
          this._showOrMove(g, function () {
            this._showTooltipContent(
              g,
              b,
              y,
              T,
              e.offsetX,
              e.offsetY,
              e.position,
              e.target,
              m
            );
          }),
            i({
              type: "showTip",
              dataIndexInside: f,
              dataIndex: c.getRawIndex(f),
              seriesIndex: s,
              from: this.uid,
            });
        }
      }),
      (t.prototype._showComponentItemTooltip = function (e, n, i) {
        var a = ut(n),
          o = a.tooltipConfig,
          s = o.option || {};
        if (G(s)) {
          var u = s;
          s = { content: u, formatter: u };
        }
        var l = [s],
          f = this._ecModel.getComponent(a.componentMainType, a.componentIndex);
        f && l.push(f), l.push({ formatter: s.content });
        var h = e.positionDefault,
          c = Ri(l, this._tooltipModel, h ? { position: h } : null),
          v = c.get("content"),
          d = Math.random() + "",
          g = new zu();
        this._showOrMove(c, function () {
          var p = K(c.get("formatterParams") || {});
          this._showTooltipContent(
            c,
            v,
            p,
            d,
            e.offsetX,
            e.offsetY,
            e.position,
            n,
            g
          );
        }),
          i({ type: "showTip", from: this.uid });
      }),
      (t.prototype._showTooltipContent = function (e, n, i, a, o, s, u, l, f) {
        if (((this._ticket = ""), !(!e.get("showContent") || !e.get("show")))) {
          var h = this._tooltipContent;
          h.setEnterable(e.get("enterable"));
          var c = e.get("formatter");
          u = u || e.get("position");
          var v = n,
            d = this._getNearestPoint(
              [o, s],
              i,
              e.get("trigger"),
              e.get("borderColor")
            ),
            g = d.color;
          if (c)
            if (G(c)) {
              var p = e.ecModel.get("useUTC"),
                y = N(i) ? i[0] : i,
                m = y && y.axisType && y.axisType.indexOf("time") >= 0;
              (v = c), m && (v = Rs(y.axisValue, v, p)), (v = gm(v, i, !0));
            } else if (U(c)) {
              var _ = Y(function (S, w) {
                S === this._ticket &&
                  (h.setContent(w, f, e, g, u),
                  this._updatePosition(e, u, o, s, h, i, l));
              }, this);
              (this._ticket = a), (v = c(i, a, _));
            } else v = c;
          h.setContent(v, f, e, g, u),
            h.show(e, g),
            this._updatePosition(e, u, o, s, h, i, l);
        }
      }),
      (t.prototype._getNearestPoint = function (e, n, i, a) {
        if (i === "axis" || N(n))
          return {
            color: a || (this._renderMode === "html" ? "#fff" : "none"),
          };
        if (!N(n)) return { color: a || n.color || n.borderColor };
      }),
      (t.prototype._updatePosition = function (e, n, i, a, o, s, u) {
        var l = this._api.getWidth(),
          f = this._api.getHeight();
        n = n || e.get("position");
        var h = o.getSize(),
          c = e.get("align"),
          v = e.get("verticalAlign"),
          d = u && u.getBoundingRect().clone();
        if (
          (u && d.applyTransform(u.transform),
          U(n) &&
            (n = n([i, a], s, o.el, d, {
              viewSize: [l, f],
              contentSize: h.slice(),
            })),
          N(n))
        )
          (i = Ct(n[0], l)), (a = Ct(n[1], f));
        else if (H(n)) {
          var g = n;
          (g.width = h[0]), (g.height = h[1]);
          var p = wr(g, { width: l, height: f });
          (i = p.x), (a = p.y), (c = null), (v = null);
        } else if (G(n) && u) {
          var y = pP(n, d, h, e.get("borderWidth"));
          (i = y[0]), (a = y[1]);
        } else {
          var y = cP(i, a, o, l, f, c ? null : 20, v ? null : 20);
          (i = y[0]), (a = y[1]);
        }
        if (
          (c && (i -= $p(c) ? h[0] / 2 : c === "right" ? h[0] : 0),
          v && (a -= $p(v) ? h[1] / 2 : v === "bottom" ? h[1] : 0),
          F_(e))
        ) {
          var y = dP(i, a, o, l, f);
          (i = y[0]), (a = y[1]);
        }
        o.moveTo(i, a);
      }),
      (t.prototype._updateContentNotChangedOnAxis = function (e, n) {
        var i = this._lastDataByCoordSys,
          a = this._cbParamsList,
          o = !!i && i.length === e.length;
        return (
          o &&
            C(i, function (s, u) {
              var l = s.dataByAxis || [],
                f = e[u] || {},
                h = f.dataByAxis || [];
              (o = o && l.length === h.length),
                o &&
                  C(l, function (c, v) {
                    var d = h[v] || {},
                      g = c.seriesDataIndices || [],
                      p = d.seriesDataIndices || [];
                    (o =
                      o &&
                      c.value === d.value &&
                      c.axisType === d.axisType &&
                      c.axisId === d.axisId &&
                      g.length === p.length),
                      o &&
                        C(g, function (y, m) {
                          var _ = p[m];
                          o =
                            o &&
                            y.seriesIndex === _.seriesIndex &&
                            y.dataIndex === _.dataIndex;
                        }),
                      a &&
                        C(c.seriesDataIndices, function (y) {
                          var m = y.seriesIndex,
                            _ = n[m],
                            S = a[m];
                          _ && S && S.data !== _.data && (o = !1);
                        });
                  });
            }),
          (this._lastDataByCoordSys = e),
          (this._cbParamsList = n),
          !!o
        );
      }),
      (t.prototype._hide = function (e) {
        (this._lastDataByCoordSys = null),
          e({ type: "hideTip", from: this.uid });
      }),
      (t.prototype.dispose = function (e, n) {
        j.node ||
          !n.getDom() ||
          (rs(this, "_updatePosition"),
          this._tooltipContent.dispose(),
          Mf("itemTooltip", n));
      }),
      (t.type = "tooltip"),
      t
    );
  })(ve);
function Ri(r, t, e) {
  var n = t.ecModel,
    i;
  e ? ((i = new At(e, n, n)), (i = new At(t.option, i, n))) : (i = t);
  for (var a = r.length - 1; a >= 0; a--) {
    var o = r[a];
    o &&
      (o instanceof At && (o = o.get("tooltip", !0)),
      G(o) && (o = { formatter: o }),
      o && (i = new At(o, i, n)));
  }
  return i;
}
function Yp(r, t) {
  return r.dispatchAction || Y(t.dispatchAction, t);
}
function cP(r, t, e, n, i, a, o) {
  var s = e.getSize(),
    u = s[0],
    l = s[1];
  return (
    a != null && (r + u + a + 2 > n ? (r -= u + a) : (r += a)),
    o != null && (t + l + o > i ? (t -= l + o) : (t += o)),
    [r, t]
  );
}
function dP(r, t, e, n, i) {
  var a = e.getSize(),
    o = a[0],
    s = a[1];
  return (
    (r = Math.min(r + o, n) - o),
    (t = Math.min(t + s, i) - s),
    (r = Math.max(r, 0)),
    (t = Math.max(t, 0)),
    [r, t]
  );
}
function pP(r, t, e, n) {
  var i = e[0],
    a = e[1],
    o = Math.ceil(Math.SQRT2 * n) + 8,
    s = 0,
    u = 0,
    l = t.width,
    f = t.height;
  switch (r) {
    case "inside":
      (s = t.x + l / 2 - i / 2), (u = t.y + f / 2 - a / 2);
      break;
    case "top":
      (s = t.x + l / 2 - i / 2), (u = t.y - a - o);
      break;
    case "bottom":
      (s = t.x + l / 2 - i / 2), (u = t.y + f + o);
      break;
    case "left":
      (s = t.x - i - o), (u = t.y + f / 2 - a / 2);
      break;
    case "right":
      (s = t.x + l + o), (u = t.y + f / 2 - a / 2);
  }
  return [s, u];
}
function $p(r) {
  return r === "center" || r === "middle";
}
function gP(r, t, e) {
  var n = Kf(r).queryOptionMap,
    i = n.keys()[0];
  if (!(!i || i === "series")) {
    var a = Da(t, i, n.get(i), {
        useDefault: !1,
        enableAll: !1,
        enableNone: !1,
      }),
      o = a.models[0];
    if (!!o) {
      var s = e.getViewOfComponentModel(o),
        u;
      if (
        (s.group.traverse(function (l) {
          var f = ut(l).tooltipConfig;
          if (f && f.name === r.name) return (u = l), !0;
        }),
        u)
      )
        return {
          componentMainType: i,
          componentIndex: o.componentIndex,
          el: u,
        };
    }
  }
}
const yP = vP;
function QR(r) {
  Be(I_),
    r.registerComponentModel(QI),
    r.registerComponentView(yP),
    r.registerAction(
      { type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip" },
      Gt
    ),
    r.registerAction(
      { type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip" },
      Gt
    );
}
var mP = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = t.type), (e.layoutMode = { type: "box", ignoreSize: !0 }), e
      );
    }
    return (
      (t.type = "title"),
      (t.defaultOption = {
        z: 6,
        show: !0,
        text: "",
        target: "blank",
        subtext: "",
        subtarget: "blank",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#ccc",
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        textStyle: { fontSize: 18, fontWeight: "bold", color: "#464646" },
        subtextStyle: { fontSize: 12, color: "#6E7079" },
      }),
      t
    );
  })(ct),
  _P = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), e;
    }
    return (
      (t.prototype.render = function (e, n, i) {
        if ((this.group.removeAll(), !!e.get("show"))) {
          var a = this.group,
            o = e.getModel("textStyle"),
            s = e.getModel("subtextStyle"),
            u = e.get("textAlign"),
            l = nt(e.get("textBaseline"), e.get("textVerticalAlign")),
            f = new Dt({
              style: Qe(
                o,
                { text: e.get("text"), fill: o.getTextColor() },
                { disableBox: !0 }
              ),
              z2: 10,
            }),
            h = f.getBoundingRect(),
            c = e.get("subtext"),
            v = new Dt({
              style: Qe(
                s,
                {
                  text: c,
                  fill: s.getTextColor(),
                  y: h.height + e.get("itemGap"),
                  verticalAlign: "top",
                },
                { disableBox: !0 }
              ),
              z2: 10,
            }),
            d = e.get("link"),
            g = e.get("sublink"),
            p = e.get("triggerEvent", !0);
          (f.silent = !d && !p),
            (v.silent = !g && !p),
            d &&
              f.on("click", function () {
                Mc(d, "_" + e.get("target"));
              }),
            g &&
              v.on("click", function () {
                Mc(g, "_" + e.get("subtarget"));
              }),
            (ut(f).eventData = ut(v).eventData =
              p
                ? { componentType: "title", componentIndex: e.componentIndex }
                : null),
            a.add(f),
            c && a.add(v);
          var y = a.getBoundingRect(),
            m = e.getBoxLayoutParams();
          (m.width = y.width), (m.height = y.height);
          var _ = wr(
            m,
            { width: i.getWidth(), height: i.getHeight() },
            e.get("padding")
          );
          u ||
            ((u = e.get("left") || e.get("right")),
            u === "middle" && (u = "center"),
            u === "right"
              ? (_.x += _.width)
              : u === "center" && (_.x += _.width / 2)),
            l ||
              ((l = e.get("top") || e.get("bottom")),
              l === "center" && (l = "middle"),
              l === "bottom"
                ? (_.y += _.height)
                : l === "middle" && (_.y += _.height / 2),
              (l = l || "top")),
            (a.x = _.x),
            (a.y = _.y),
            a.markRedraw();
          var S = { align: u, verticalAlign: l };
          f.setStyle(S), v.setStyle(S), (y = a.getBoundingRect());
          var w = _.margin,
            x = e.getItemStyle(["color", "opacity"]);
          x.fill = e.get("backgroundColor");
          var b = new yt({
            shape: {
              x: y.x - w[3],
              y: y.y - w[0],
              width: y.width + w[1] + w[3],
              height: y.height + w[0] + w[2],
              r: e.get("borderRadius"),
            },
            style: x,
            subPixelOptimize: !0,
            silent: !0,
          });
          a.add(b);
        }
      }),
      (t.type = "title"),
      t
    );
  })(ve);
function JR(r) {
  r.registerComponentModel(mP), r.registerComponentView(_P);
}
var SP = function (r, t) {
    if (t === "all")
      return {
        type: "all",
        title: r.getLocaleModel().get(["legend", "selector", "all"]),
      };
    if (t === "inverse")
      return {
        type: "inverse",
        title: r.getLocaleModel().get(["legend", "selector", "inverse"]),
      };
  },
  xP = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = t.type), (e.layoutMode = { type: "box", ignoreSize: !0 }), e
      );
    }
    return (
      (t.prototype.init = function (e, n, i) {
        this.mergeDefaultAndTheme(e, i),
          (e.selected = e.selected || {}),
          this._updateSelector(e);
      }),
      (t.prototype.mergeOption = function (e, n) {
        r.prototype.mergeOption.call(this, e, n), this._updateSelector(e);
      }),
      (t.prototype._updateSelector = function (e) {
        var n = e.selector,
          i = this.ecModel;
        n === !0 && (n = e.selector = ["all", "inverse"]),
          N(n) &&
            C(n, function (a, o) {
              G(a) && (a = { type: a }), (n[o] = Q(a, SP(i, a.type)));
            });
      }),
      (t.prototype.optionUpdated = function () {
        this._updateData(this.ecModel);
        var e = this._data;
        if (e[0] && this.get("selectedMode") === "single") {
          for (var n = !1, i = 0; i < e.length; i++) {
            var a = e[i].get("name");
            if (this.isSelected(a)) {
              this.select(a), (n = !0);
              break;
            }
          }
          !n && this.select(e[0].get("name"));
        }
      }),
      (t.prototype._updateData = function (e) {
        var n = [],
          i = [];
        e.eachRawSeries(function (s) {
          var u = s.name;
          i.push(u);
          var l;
          if (s.legendVisualProvider) {
            var f = s.legendVisualProvider,
              h = f.getAllNames();
            e.isSeriesFiltered(s) || (i = i.concat(h)),
              h.length ? (n = n.concat(h)) : (l = !0);
          } else l = !0;
          l && qf(s) && n.push(s.name);
        }),
          (this._availableNames = i);
        var a = this.get("data") || n,
          o = z(
            a,
            function (s) {
              return (
                (G(s) || ft(s)) && (s = { name: s }),
                new At(s, this, this.ecModel)
              );
            },
            this
          );
        this._data = o;
      }),
      (t.prototype.getData = function () {
        return this._data;
      }),
      (t.prototype.select = function (e) {
        var n = this.option.selected,
          i = this.get("selectedMode");
        if (i === "single") {
          var a = this._data;
          C(a, function (o) {
            n[o.get("name")] = !1;
          });
        }
        n[e] = !0;
      }),
      (t.prototype.unSelect = function (e) {
        this.get("selectedMode") !== "single" && (this.option.selected[e] = !1);
      }),
      (t.prototype.toggleSelected = function (e) {
        var n = this.option.selected;
        n.hasOwnProperty(e) || (n[e] = !0),
          this[n[e] ? "unSelect" : "select"](e);
      }),
      (t.prototype.allSelect = function () {
        var e = this._data,
          n = this.option.selected;
        C(e, function (i) {
          n[i.get("name", !0)] = !0;
        });
      }),
      (t.prototype.inverseSelect = function () {
        var e = this._data,
          n = this.option.selected;
        C(e, function (i) {
          var a = i.get("name", !0);
          n.hasOwnProperty(a) || (n[a] = !0), (n[a] = !n[a]);
        });
      }),
      (t.prototype.isSelected = function (e) {
        var n = this.option.selected;
        return (
          !(n.hasOwnProperty(e) && !n[e]) && J(this._availableNames, e) >= 0
        );
      }),
      (t.prototype.getOrient = function () {
        return this.get("orient") === "vertical"
          ? { index: 1, name: "vertical" }
          : { index: 0, name: "horizontal" };
      }),
      (t.type = "legend.plain"),
      (t.dependencies = ["series"]),
      (t.defaultOption = {
        z: 4,
        show: !0,
        orient: "horizontal",
        left: "center",
        top: 0,
        align: "auto",
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "#ccc",
        borderRadius: 0,
        borderWidth: 0,
        padding: 5,
        itemGap: 10,
        itemWidth: 25,
        itemHeight: 14,
        symbolRotate: "inherit",
        symbolKeepAspect: !0,
        inactiveColor: "#ccc",
        inactiveBorderColor: "#ccc",
        inactiveBorderWidth: "auto",
        itemStyle: {
          color: "inherit",
          opacity: "inherit",
          borderColor: "inherit",
          borderWidth: "auto",
          borderCap: "inherit",
          borderJoin: "inherit",
          borderDashOffset: "inherit",
          borderMiterLimit: "inherit",
        },
        lineStyle: {
          width: "auto",
          color: "inherit",
          inactiveColor: "#ccc",
          inactiveWidth: 2,
          opacity: "inherit",
          type: "inherit",
          cap: "inherit",
          join: "inherit",
          dashOffset: "inherit",
          miterLimit: "inherit",
        },
        textStyle: { color: "#333" },
        selectedMode: !0,
        selector: !1,
        selectorLabel: {
          show: !0,
          borderRadius: 10,
          padding: [3, 5, 3, 5],
          fontSize: 12,
          fontFamily: "sans-serif",
          color: "#666",
          borderWidth: 1,
          borderColor: "#666",
        },
        emphasis: {
          selectorLabel: { show: !0, color: "#eee", backgroundColor: "#666" },
        },
        selectorPosition: "auto",
        selectorItemGap: 7,
        selectorButtonGap: 10,
        tooltip: { show: !1 },
      }),
      t
    );
  })(ct);
const If = xP;
var Rn = ot,
  Pf = C,
  _o = bt,
  wP = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), (e.newlineDisabled = !1), e;
    }
    return (
      (t.prototype.init = function () {
        this.group.add((this._contentGroup = new _o())),
          this.group.add((this._selectorGroup = new _o())),
          (this._isFirstRender = !0);
      }),
      (t.prototype.getContentGroup = function () {
        return this._contentGroup;
      }),
      (t.prototype.getSelectorGroup = function () {
        return this._selectorGroup;
      }),
      (t.prototype.render = function (e, n, i) {
        var a = this._isFirstRender;
        if (
          ((this._isFirstRender = !1), this.resetInner(), !!e.get("show", !0))
        ) {
          var o = e.get("align"),
            s = e.get("orient");
          (!o || o === "auto") &&
            (o =
              e.get("left") === "right" && s === "vertical" ? "right" : "left");
          var u = e.get("selector", !0),
            l = e.get("selectorPosition", !0);
          u &&
            (!l || l === "auto") &&
            (l = s === "horizontal" ? "end" : "start"),
            this.renderInner(o, e, n, i, u, s, l);
          var f = e.getBoxLayoutParams(),
            h = { width: i.getWidth(), height: i.getHeight() },
            c = e.get("padding"),
            v = wr(f, h, c),
            d = this.layoutInner(e, o, v, a, u, l),
            g = wr(q({ width: d.width, height: d.height }, f), h, c);
          (this.group.x = g.x - d.x),
            (this.group.y = g.y - d.y),
            this.group.markRedraw(),
            this.group.add((this._backgroundEl = O_(d, e)));
        }
      }),
      (t.prototype.resetInner = function () {
        this.getContentGroup().removeAll(),
          this._backgroundEl && this.group.remove(this._backgroundEl),
          this.getSelectorGroup().removeAll();
      }),
      (t.prototype.renderInner = function (e, n, i, a, o, s, u) {
        var l = this.getContentGroup(),
          f = W(),
          h = n.get("selectedMode"),
          c = [];
        i.eachRawSeries(function (v) {
          !v.get("legendHoverLink") && c.push(v.id);
        }),
          Pf(
            n.getData(),
            function (v, d) {
              var g = v.get("name");
              if (
                !this.newlineDisabled &&
                (g === "" ||
                  g ===
                    `
`)
              ) {
                var p = new _o();
                (p.newline = !0), l.add(p);
                return;
              }
              var y = i.getSeriesByName(g)[0];
              if (!f.get(g))
                if (y) {
                  var m = y.getData(),
                    _ = m.getVisual("legendLineStyle") || {},
                    S = m.getVisual("legendIcon"),
                    w = m.getVisual("style"),
                    x = this._createItem(y, g, d, v, n, e, _, w, S, h);
                  x
                    .on("click", Rn(Zp, g, null, a, c))
                    .on("mouseover", Rn(Rf, y.name, null, a, c))
                    .on("mouseout", Rn(Ef, y.name, null, a, c)),
                    f.set(g, !0);
                } else
                  i.eachRawSeries(function (b) {
                    if (!f.get(g) && b.legendVisualProvider) {
                      var T = b.legendVisualProvider;
                      if (!T.containName(g)) return;
                      var M = T.indexOfName(g),
                        D = T.getItemVisual(M, "style"),
                        A = T.getItemVisual(M, "legendIcon"),
                        L = $e(D.fill);
                      L &&
                        L[3] === 0 &&
                        ((L[3] = 0.2),
                        (D = k(k({}, D), { fill: ys(L, "rgba") })));
                      var I = this._createItem(b, g, d, v, n, e, {}, D, A, h);
                      I.on("click", Rn(Zp, null, g, a, c))
                        .on("mouseover", Rn(Rf, null, g, a, c))
                        .on("mouseout", Rn(Ef, null, g, a, c)),
                        f.set(g, !0);
                    }
                  }, this);
            },
            this
          ),
          o && this._createSelector(o, n, a, s, u);
      }),
      (t.prototype._createSelector = function (e, n, i, a, o) {
        var s = this.getSelectorGroup();
        Pf(e, function (l) {
          var f = l.type,
            h = new Dt({
              style: { x: 0, y: 0, align: "center", verticalAlign: "middle" },
              onclick: function () {
                i.dispatchAction({
                  type: f === "all" ? "legendAllSelect" : "legendInverseSelect",
                });
              },
            });
          s.add(h);
          var c = n.getModel("selectorLabel"),
            v = n.getModel(["emphasis", "selectorLabel"]);
          lh(h, { normal: c, emphasis: v }, { defaultText: l.title }), qo(h);
        });
      }),
      (t.prototype._createItem = function (e, n, i, a, o, s, u, l, f, h) {
        var c = e.visualDrawType,
          v = o.get("itemWidth"),
          d = o.get("itemHeight"),
          g = o.isSelected(n),
          p = a.get("symbolRotate"),
          y = a.get("symbolKeepAspect"),
          m = a.get("icon");
        f = m || f || "roundRect";
        var _ = bP(f, a, u, l, c, g),
          S = new _o(),
          w = a.getModel("textStyle");
        if (U(e.getLegendIcon) && (!m || m === "inherit"))
          S.add(
            e.getLegendIcon({
              itemWidth: v,
              itemHeight: d,
              icon: f,
              iconRotate: p,
              itemStyle: _.itemStyle,
              lineStyle: _.lineStyle,
              symbolKeepAspect: y,
            })
          );
        else {
          var x =
            m === "inherit" && e.getData().getVisual("symbol")
              ? p === "inherit"
                ? e.getData().getVisual("symbolRotate")
                : p
              : 0;
          S.add(
            TP({
              itemWidth: v,
              itemHeight: d,
              icon: f,
              iconRotate: x,
              itemStyle: _.itemStyle,
              lineStyle: _.lineStyle,
              symbolKeepAspect: y,
            })
          );
        }
        var b = s === "left" ? v + 5 : -5,
          T = s,
          M = o.get("formatter"),
          D = n;
        G(M) && M
          ? (D = M.replace("{name}", n != null ? n : ""))
          : U(M) && (D = M(n));
        var A = a.get("inactiveColor");
        S.add(
          new Dt({
            style: Qe(w, {
              text: D,
              x: b,
              y: d / 2,
              fill: g ? w.getTextColor() : A,
              align: T,
              verticalAlign: "middle",
            }),
          })
        );
        var L = new yt({ shape: S.getBoundingRect(), invisible: !0 }),
          I = a.getModel("tooltip");
        return (
          I.get("show") &&
            Ls({
              el: L,
              componentModel: o,
              itemName: n,
              itemTooltipOption: I.option,
            }),
          S.add(L),
          S.eachChild(function (P) {
            P.silent = !0;
          }),
          (L.silent = !h),
          this.getContentGroup().add(S),
          qo(S),
          (S.__legendDataIndex = i),
          S
        );
      }),
      (t.prototype.layoutInner = function (e, n, i, a, o, s) {
        var u = this.getContentGroup(),
          l = this.getSelectorGroup();
        Qn(e.get("orient"), u, e.get("itemGap"), i.width, i.height);
        var f = u.getBoundingRect(),
          h = [-f.x, -f.y];
        if ((l.markRedraw(), u.markRedraw(), o)) {
          Qn("horizontal", l, e.get("selectorItemGap", !0));
          var c = l.getBoundingRect(),
            v = [-c.x, -c.y],
            d = e.get("selectorButtonGap", !0),
            g = e.getOrient().index,
            p = g === 0 ? "width" : "height",
            y = g === 0 ? "height" : "width",
            m = g === 0 ? "y" : "x";
          s === "end" ? (v[g] += f[p] + d) : (h[g] += c[p] + d),
            (v[1 - g] += f[y] / 2 - c[y] / 2),
            (l.x = v[0]),
            (l.y = v[1]),
            (u.x = h[0]),
            (u.y = h[1]);
          var _ = { x: 0, y: 0 };
          return (
            (_[p] = f[p] + d + c[p]),
            (_[y] = Math.max(f[y], c[y])),
            (_[m] = Math.min(0, c[m] + v[1 - g])),
            _
          );
        } else return (u.x = h[0]), (u.y = h[1]), this.group.getBoundingRect();
      }),
      (t.prototype.remove = function () {
        this.getContentGroup().removeAll(), (this._isFirstRender = !0);
      }),
      (t.type = "legend.plain"),
      t
    );
  })(ve);
function bP(r, t, e, n, i, a) {
  function o(d, g) {
    d.lineWidth === "auto" && (d.lineWidth = g.lineWidth > 0 ? 2 : 0),
      Pf(d, function (p, y) {
        d[y] === "inherit" && (d[y] = g[y]);
      });
  }
  var s = t.getModel("itemStyle"),
    u = s.getItemStyle(),
    l = r.lastIndexOf("empty", 0) === 0 ? "fill" : "stroke";
  (u.decal = n.decal),
    u.fill === "inherit" && (u.fill = n[i]),
    u.stroke === "inherit" && (u.stroke = n[l]),
    u.opacity === "inherit" && (u.opacity = (i === "fill" ? n : e).opacity),
    o(u, n);
  var f = t.getModel("lineStyle"),
    h = f.getLineStyle();
  if (
    (o(h, e),
    u.fill === "auto" && (u.fill = n.fill),
    u.stroke === "auto" && (u.stroke = n.fill),
    h.stroke === "auto" && (h.stroke = n.fill),
    !a)
  ) {
    var c = t.get("inactiveBorderWidth"),
      v = u[l];
    (u.lineWidth = c === "auto" ? (n.lineWidth > 0 && v ? 2 : 0) : u.lineWidth),
      (u.fill = t.get("inactiveColor")),
      (u.stroke = t.get("inactiveBorderColor")),
      (h.stroke = f.get("inactiveColor")),
      (h.lineWidth = f.get("inactiveWidth"));
  }
  return { itemStyle: u, lineStyle: h };
}
function TP(r) {
  var t = r.icon || "roundRect",
    e = br(
      t,
      0,
      0,
      r.itemWidth,
      r.itemHeight,
      r.itemStyle.fill,
      r.symbolKeepAspect
    );
  return (
    e.setStyle(r.itemStyle),
    (e.rotation = ((r.iconRotate || 0) * Math.PI) / 180),
    e.setOrigin([r.itemWidth / 2, r.itemHeight / 2]),
    t.indexOf("empty") > -1 &&
      ((e.style.stroke = e.style.fill),
      (e.style.fill = "#fff"),
      (e.style.lineWidth = 2)),
    e
  );
}
function Zp(r, t, e, n) {
  Ef(r, t, e, n),
    e.dispatchAction({ type: "legendToggleSelect", name: r != null ? r : t }),
    Rf(r, t, e, n);
}
function V_(r) {
  for (
    var t = r.getZr().storage.getDisplayList(), e, n = 0, i = t.length;
    n < i && !(e = t[n].states.emphasis);

  )
    n++;
  return e && e.hoverLayer;
}
function Rf(r, t, e, n) {
  V_(e) ||
    e.dispatchAction({
      type: "highlight",
      seriesName: r,
      name: t,
      excludeSeriesId: n,
    });
}
function Ef(r, t, e, n) {
  V_(e) ||
    e.dispatchAction({
      type: "downplay",
      seriesName: r,
      name: t,
      excludeSeriesId: n,
    });
}
const W_ = wP;
function CP(r) {
  var t = r.findComponents({ mainType: "legend" });
  t &&
    t.length &&
    r.filterSeries(function (e) {
      for (var n = 0; n < t.length; n++)
        if (!t[n].isSelected(e.name)) return !1;
      return !0;
    });
}
function Ei(r, t, e) {
  var n = {},
    i = r === "toggleSelected",
    a;
  return (
    e.eachComponent("legend", function (o) {
      i && a != null
        ? o[a ? "select" : "unSelect"](t.name)
        : r === "allSelect" || r === "inverseSelect"
        ? o[r]()
        : (o[r](t.name), (a = o.isSelected(t.name)));
      var s = o.getData();
      C(s, function (u) {
        var l = u.get("name");
        if (
          !(
            l ===
              `
` || l === ""
          )
        ) {
          var f = o.isSelected(l);
          n.hasOwnProperty(l) ? (n[l] = n[l] && f) : (n[l] = f);
        }
      });
    }),
    r === "allSelect" || r === "inverseSelect"
      ? { selected: n }
      : { name: t.name, selected: n }
  );
}
function MP(r) {
  r.registerAction(
    "legendToggleSelect",
    "legendselectchanged",
    ot(Ei, "toggleSelected")
  ),
    r.registerAction("legendAllSelect", "legendselectall", ot(Ei, "allSelect")),
    r.registerAction(
      "legendInverseSelect",
      "legendinverseselect",
      ot(Ei, "inverseSelect")
    ),
    r.registerAction("legendSelect", "legendselected", ot(Ei, "select")),
    r.registerAction("legendUnSelect", "legendunselected", ot(Ei, "unSelect"));
}
function U_(r) {
  r.registerComponentModel(If),
    r.registerComponentView(W_),
    r.registerProcessor(r.PRIORITY.PROCESSOR.SERIES_FILTER, CP),
    r.registerSubTypeDefaulter("legend", function () {
      return "plain";
    }),
    MP(r);
}
var DP = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (
    (t.prototype.setScrollDataIndex = function (e) {
      this.option.scrollDataIndex = e;
    }),
    (t.prototype.init = function (e, n, i) {
      var a = Pa(e);
      r.prototype.init.call(this, e, n, i), Xp(this, e, a);
    }),
    (t.prototype.mergeOption = function (e, n) {
      r.prototype.mergeOption.call(this, e, n), Xp(this, this.option, e);
    }),
    (t.type = "legend.scroll"),
    (t.defaultOption = hh(If.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"],
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: { color: "#333" },
      animationDurationUpdate: 800,
    })),
    t
  );
})(If);
function Xp(r, t, e) {
  var n = r.getOrient(),
    i = [1, 1];
  (i[n.index] = 0), ei(t, e, { type: "box", ignoreSize: !!i });
}
const AP = DP;
var qp = bt,
  hl = ["width", "height"],
  vl = ["x", "y"],
  LP = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (
        (e.type = t.type), (e.newlineDisabled = !0), (e._currentIndex = 0), e
      );
    }
    return (
      (t.prototype.init = function () {
        r.prototype.init.call(this),
          this.group.add((this._containerGroup = new qp())),
          this._containerGroup.add(this.getContentGroup()),
          this.group.add((this._controllerGroup = new qp()));
      }),
      (t.prototype.resetInner = function () {
        r.prototype.resetInner.call(this),
          this._controllerGroup.removeAll(),
          this._containerGroup.removeClipPath(),
          (this._containerGroup.__rectSize = null);
      }),
      (t.prototype.renderInner = function (e, n, i, a, o, s, u) {
        var l = this;
        r.prototype.renderInner.call(this, e, n, i, a, o, s, u);
        var f = this._controllerGroup,
          h = n.get("pageIconSize", !0),
          c = N(h) ? h : [h, h];
        d("pagePrev", 0);
        var v = n.getModel("pageTextStyle");
        f.add(
          new Dt({
            name: "pageText",
            style: {
              text: "xx/xx",
              fill: v.getTextColor(),
              font: v.getFont(),
              verticalAlign: "middle",
              align: "center",
            },
            silent: !0,
          })
        ),
          d("pageNext", 1);
        function d(g, p) {
          var y = g + "DataIndex",
            m = As(
              n.get("pageIcons", !0)[n.getOrient().name][p],
              { onclick: Y(l._pageGo, l, y, n, a) },
              { x: -c[0] / 2, y: -c[1] / 2, width: c[0], height: c[1] }
            );
          (m.name = g), f.add(m);
        }
      }),
      (t.prototype.layoutInner = function (e, n, i, a, o, s) {
        var u = this.getSelectorGroup(),
          l = e.getOrient().index,
          f = hl[l],
          h = vl[l],
          c = hl[1 - l],
          v = vl[1 - l];
        o && Qn("horizontal", u, e.get("selectorItemGap", !0));
        var d = e.get("selectorButtonGap", !0),
          g = u.getBoundingRect(),
          p = [-g.x, -g.y],
          y = K(i);
        o && (y[f] = i[f] - g[f] - d);
        var m = this._layoutContentAndController(e, a, y, l, f, c, v, h);
        if (o) {
          if (s === "end") p[l] += m[f] + d;
          else {
            var _ = g[f] + d;
            (p[l] -= _), (m[h] -= _);
          }
          (m[f] += g[f] + d),
            (p[1 - l] += m[v] + m[c] / 2 - g[c] / 2),
            (m[c] = Math.max(m[c], g[c])),
            (m[v] = Math.min(m[v], g[v] + p[1 - l])),
            (u.x = p[0]),
            (u.y = p[1]),
            u.markRedraw();
        }
        return m;
      }),
      (t.prototype._layoutContentAndController = function (
        e,
        n,
        i,
        a,
        o,
        s,
        u,
        l
      ) {
        var f = this.getContentGroup(),
          h = this._containerGroup,
          c = this._controllerGroup;
        Qn(
          e.get("orient"),
          f,
          e.get("itemGap"),
          a ? i.width : null,
          a ? null : i.height
        ),
          Qn("horizontal", c, e.get("pageButtonItemGap", !0));
        var v = f.getBoundingRect(),
          d = c.getBoundingRect(),
          g = (this._showController = v[o] > i[o]),
          p = [-v.x, -v.y];
        n || (p[a] = f[l]);
        var y = [0, 0],
          m = [-d.x, -d.y],
          _ = nt(e.get("pageButtonGap", !0), e.get("itemGap", !0));
        if (g) {
          var S = e.get("pageButtonPosition", !0);
          S === "end" ? (m[a] += i[o] - d[o]) : (y[a] += d[o] + _);
        }
        (m[1 - a] += v[s] / 2 - d[s] / 2),
          f.setPosition(p),
          h.setPosition(y),
          c.setPosition(m);
        var w = { x: 0, y: 0 };
        if (
          ((w[o] = g ? i[o] : v[o]),
          (w[s] = Math.max(v[s], d[s])),
          (w[u] = Math.min(0, d[u] + m[1 - a])),
          (h.__rectSize = i[o]),
          g)
        ) {
          var x = { x: 0, y: 0 };
          (x[o] = Math.max(i[o] - d[o] - _, 0)),
            (x[s] = w[s]),
            h.setClipPath(new yt({ shape: x })),
            (h.__rectSize = x[o]);
        } else
          c.eachChild(function (T) {
            T.attr({ invisible: !0, silent: !0 });
          });
        var b = this._getPageInfo(e);
        return (
          b.pageIndex != null &&
            we(
              f,
              { x: b.contentPosition[0], y: b.contentPosition[1] },
              g ? e : null
            ),
          this._updatePageInfoView(e, b),
          w
        );
      }),
      (t.prototype._pageGo = function (e, n, i) {
        var a = this._getPageInfo(n)[e];
        a != null &&
          i.dispatchAction({
            type: "legendScroll",
            scrollDataIndex: a,
            legendId: n.id,
          });
      }),
      (t.prototype._updatePageInfoView = function (e, n) {
        var i = this._controllerGroup;
        C(["pagePrev", "pageNext"], function (f) {
          var h = f + "DataIndex",
            c = n[h] != null,
            v = i.childOfName(f);
          v &&
            (v.setStyle(
              "fill",
              c
                ? e.get("pageIconColor", !0)
                : e.get("pageIconInactiveColor", !0)
            ),
            (v.cursor = c ? "pointer" : "default"));
        });
        var a = i.childOfName("pageText"),
          o = e.get("pageFormatter"),
          s = n.pageIndex,
          u = s != null ? s + 1 : 0,
          l = n.pageCount;
        a &&
          o &&
          a.setStyle(
            "text",
            G(o)
              ? o
                  .replace("{current}", u == null ? "" : u + "")
                  .replace("{total}", l == null ? "" : l + "")
              : o({ current: u, total: l })
          );
      }),
      (t.prototype._getPageInfo = function (e) {
        var n = e.get("scrollDataIndex", !0),
          i = this.getContentGroup(),
          a = this._containerGroup.__rectSize,
          o = e.getOrient().index,
          s = hl[o],
          u = vl[o],
          l = this._findTargetItemIndex(n),
          f = i.children(),
          h = f[l],
          c = f.length,
          v = c ? 1 : 0,
          d = {
            contentPosition: [i.x, i.y],
            pageCount: v,
            pageIndex: v - 1,
            pagePrevDataIndex: null,
            pageNextDataIndex: null,
          };
        if (!h) return d;
        var g = S(h);
        d.contentPosition[o] = -g.s;
        for (var p = l + 1, y = g, m = g, _ = null; p <= c; ++p)
          (_ = S(f[p])),
            ((!_ && m.e > y.s + a) || (_ && !w(_, y.s))) &&
              (m.i > y.i ? (y = m) : (y = _),
              y &&
                (d.pageNextDataIndex == null && (d.pageNextDataIndex = y.i),
                ++d.pageCount)),
            (m = _);
        for (var p = l - 1, y = g, m = g, _ = null; p >= -1; --p)
          (_ = S(f[p])),
            (!_ || !w(m, _.s)) &&
              y.i < m.i &&
              ((m = y),
              d.pagePrevDataIndex == null && (d.pagePrevDataIndex = y.i),
              ++d.pageCount,
              ++d.pageIndex),
            (y = _);
        return d;
        function S(x) {
          if (x) {
            var b = x.getBoundingRect(),
              T = b[u] + x[u];
            return { s: T, e: T + b[s], i: x.__legendDataIndex };
          }
        }
        function w(x, b) {
          return x.e >= b && x.s <= b + a;
        }
      }),
      (t.prototype._findTargetItemIndex = function (e) {
        if (!this._showController) return 0;
        var n,
          i = this.getContentGroup(),
          a;
        return (
          i.eachChild(function (o, s) {
            var u = o.__legendDataIndex;
            a == null && u != null && (a = s), u === e && (n = s);
          }),
          n != null ? n : a
        );
      }),
      (t.type = "legend.scroll"),
      t
    );
  })(W_);
const IP = LP;
function PP(r) {
  r.registerAction("legendScroll", "legendscroll", function (t, e) {
    var n = t.scrollDataIndex;
    n != null &&
      e.eachComponent(
        { mainType: "legend", subType: "scroll", query: t },
        function (i) {
          i.setScrollDataIndex(n);
        }
      );
  });
}
function RP(r) {
  Be(U_), r.registerComponentModel(AP), r.registerComponentView(IP), PP(r);
}
function jR(r) {
  Be(U_), Be(RP);
}
var EP = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (
    (t.type = "dataZoom.inside"),
    (t.defaultOption = hh(ba.defaultOption, {
      disabled: !1,
      zoomLock: !1,
      zoomOnMouseWheel: !0,
      moveOnMouseMove: !0,
      moveOnMouseWheel: !1,
      preventDefaultMouseMove: !0,
    })),
    t
  );
})(ba);
const OP = EP;
var qh = gt();
function kP(r, t, e) {
  qh(r).coordSysRecordMap.each(function (n) {
    var i = n.dataZoomInfoMap.get(t.uid);
    i && (i.getRange = e);
  });
}
function BP(r, t) {
  for (
    var e = qh(r).coordSysRecordMap, n = e.keys(), i = 0;
    i < n.length;
    i++
  ) {
    var a = n[i],
      o = e.get(a),
      s = o.dataZoomInfoMap;
    if (s) {
      var u = t.uid,
        l = s.get(u);
      l && (s.removeKey(u), s.keys().length || Y_(e, o));
    }
  }
}
function Y_(r, t) {
  if (t) {
    r.removeKey(t.model.uid);
    var e = t.controller;
    e && e.dispose();
  }
}
function NP(r, t) {
  var e = {
      model: t,
      containsPoint: ot(zP, t),
      dispatchAction: ot(FP, r),
      dataZoomInfoMap: null,
      controller: null,
    },
    n = (e.controller = new j2(r.getZr()));
  return (
    C(["pan", "zoom", "scrollMove"], function (i) {
      n.on(i, function (a) {
        var o = [];
        e.dataZoomInfoMap.each(function (s) {
          if (!!a.isAvailableBehavior(s.model.option)) {
            var u = (s.getRange || {})[i],
              l =
                u &&
                u(s.dzReferCoordSysInfo, e.model.mainType, e.controller, a);
            !s.model.get("disabled", !0) &&
              l &&
              o.push({ dataZoomId: s.model.id, start: l[0], end: l[1] });
          }
        }),
          o.length && e.dispatchAction(o);
      });
    }),
    e
  );
}
function FP(r, t) {
  r.isDisposed() ||
    r.dispatchAction({
      type: "dataZoom",
      animation: { easing: "cubicOut", duration: 100 },
      batch: t,
    });
}
function zP(r, t, e, n) {
  return r.coordinateSystem.containPoint([e, n]);
}
function GP(r) {
  var t,
    e = "type_",
    n = { type_true: 2, type_move: 1, type_false: 0, type_undefined: -1 },
    i = !0;
  return (
    r.each(function (a) {
      var o = a.model,
        s = o.get("disabled", !0) ? !1 : o.get("zoomLock", !0) ? "move" : !0;
      n[e + s] > n[e + t] && (t = s),
        (i = i && o.get("preventDefaultMouseMove", !0));
    }),
    {
      controlType: t,
      opt: {
        zoomOnMouseWheel: !0,
        moveOnMouseMove: !0,
        moveOnMouseWheel: !0,
        preventDefaultMouseMove: !!i,
      },
    }
  );
}
function HP(r) {
  r.registerProcessor(r.PRIORITY.PROCESSOR.FILTER, function (t, e) {
    var n = qh(e),
      i = n.coordSysRecordMap || (n.coordSysRecordMap = W());
    i.each(function (a) {
      a.dataZoomInfoMap = null;
    }),
      t.eachComponent(
        { mainType: "dataZoom", subType: "inside" },
        function (a) {
          var o = P_(a);
          C(o.infoList, function (s) {
            var u = s.model.uid,
              l = i.get(u) || i.set(u, NP(e, s.model)),
              f = l.dataZoomInfoMap || (l.dataZoomInfoMap = W());
            f.set(a.uid, { dzReferCoordSysInfo: s, model: a, getRange: null });
          });
        }
      ),
      i.each(function (a) {
        var o = a.controller,
          s,
          u = a.dataZoomInfoMap;
        if (u) {
          var l = u.keys()[0];
          l != null && (s = u.get(l));
        }
        if (!s) {
          Y_(i, a);
          return;
        }
        var f = GP(u);
        o.enable(f.controlType, f.opt),
          o.setPointerChecker(a.containsPoint),
          Hs(a, "dispatchAction", s.model.get("throttle", !0), "fixRate");
      });
  });
}
var VP = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = "dataZoom.inside"), e;
    }
    return (
      (t.prototype.render = function (e, n, i) {
        if ((r.prototype.render.apply(this, arguments), e.noTarget())) {
          this._clear();
          return;
        }
        (this.range = e.getPercentRange()),
          kP(i, e, {
            pan: Y(cl.pan, this),
            zoom: Y(cl.zoom, this),
            scrollMove: Y(cl.scrollMove, this),
          });
      }),
      (t.prototype.dispose = function () {
        this._clear(), r.prototype.dispose.apply(this, arguments);
      }),
      (t.prototype._clear = function () {
        BP(this.api, this.dataZoomModel), (this.range = null);
      }),
      (t.type = "dataZoom.inside"),
      t
    );
  })(Uh),
  cl = {
    zoom: function (r, t, e, n) {
      var i = this.range,
        a = i.slice(),
        o = r.axisModels[0];
      if (!!o) {
        var s = dl[t](null, [n.originX, n.originY], o, e, r),
          u =
            ((s.signal > 0
              ? s.pixelStart + s.pixelLength - s.pixel
              : s.pixel - s.pixelStart) /
              s.pixelLength) *
              (a[1] - a[0]) +
            a[0],
          l = Math.max(1 / n.scale, 0);
        (a[0] = (a[0] - u) * l + u), (a[1] = (a[1] - u) * l + u);
        var f = this.dataZoomModel
          .findRepresentativeAxisProxy()
          .getMinMaxSpan();
        if (
          (Oa(0, a, [0, 100], 0, f.minSpan, f.maxSpan),
          (this.range = a),
          i[0] !== a[0] || i[1] !== a[1])
        )
          return a;
      }
    },
    pan: Kp(function (r, t, e, n, i, a) {
      var o = dl[n]([a.oldX, a.oldY], [a.newX, a.newY], t, i, e);
      return (o.signal * (r[1] - r[0]) * o.pixel) / o.pixelLength;
    }),
    scrollMove: Kp(function (r, t, e, n, i, a) {
      var o = dl[n]([0, 0], [a.scrollDelta, a.scrollDelta], t, i, e);
      return o.signal * (r[1] - r[0]) * a.scrollDelta;
    }),
  };
function Kp(r) {
  return function (t, e, n, i) {
    var a = this.range,
      o = a.slice(),
      s = t.axisModels[0];
    if (!!s) {
      var u = r(o, s, t, e, n, i);
      if (
        (Oa(u, o, [0, 100], "all"),
        (this.range = o),
        a[0] !== o[0] || a[1] !== o[1])
      )
        return o;
    }
  };
}
var dl = {
  grid: function (r, t, e, n, i) {
    var a = e.axis,
      o = {},
      s = i.model.coordinateSystem.getRect();
    return (
      (r = r || [0, 0]),
      a.dim === "x"
        ? ((o.pixel = t[0] - r[0]),
          (o.pixelLength = s.width),
          (o.pixelStart = s.x),
          (o.signal = a.inverse ? 1 : -1))
        : ((o.pixel = t[1] - r[1]),
          (o.pixelLength = s.height),
          (o.pixelStart = s.y),
          (o.signal = a.inverse ? -1 : 1)),
      o
    );
  },
  polar: function (r, t, e, n, i) {
    var a = e.axis,
      o = {},
      s = i.model.coordinateSystem,
      u = s.getRadiusAxis().getExtent(),
      l = s.getAngleAxis().getExtent();
    return (
      (r = r ? s.pointToCoord(r) : [0, 0]),
      (t = s.pointToCoord(t)),
      e.mainType === "radiusAxis"
        ? ((o.pixel = t[0] - r[0]),
          (o.pixelLength = u[1] - u[0]),
          (o.pixelStart = u[0]),
          (o.signal = a.inverse ? 1 : -1))
        : ((o.pixel = t[1] - r[1]),
          (o.pixelLength = l[1] - l[0]),
          (o.pixelStart = l[0]),
          (o.signal = a.inverse ? -1 : 1)),
      o
    );
  },
  singleAxis: function (r, t, e, n, i) {
    var a = e.axis,
      o = i.model.coordinateSystem.getRect(),
      s = {};
    return (
      (r = r || [0, 0]),
      a.orient === "horizontal"
        ? ((s.pixel = t[0] - r[0]),
          (s.pixelLength = o.width),
          (s.pixelStart = o.x),
          (s.signal = a.inverse ? 1 : -1))
        : ((s.pixel = t[1] - r[1]),
          (s.pixelLength = o.height),
          (s.pixelStart = o.y),
          (s.signal = a.inverse ? -1 : 1)),
      s
    );
  },
};
const WP = VP;
function UP(r) {
  Yh(r), r.registerComponentModel(OP), r.registerComponentView(WP), HP(r);
}
var YP = (function (r) {
  O(t, r);
  function t() {
    var e = (r !== null && r.apply(this, arguments)) || this;
    return (e.type = t.type), e;
  }
  return (
    (t.type = "dataZoom.slider"),
    (t.layoutMode = "box"),
    (t.defaultOption = hh(ba.defaultOption, {
      show: !0,
      right: "ph",
      top: "ph",
      width: "ph",
      height: "ph",
      left: null,
      bottom: null,
      borderColor: "#d2dbee",
      borderRadius: 3,
      backgroundColor: "rgba(47,69,84,0)",
      dataBackground: {
        lineStyle: { color: "#d2dbee", width: 0.5 },
        areaStyle: { color: "#d2dbee", opacity: 0.2 },
      },
      selectedDataBackground: {
        lineStyle: { color: "#8fb0f7", width: 0.5 },
        areaStyle: { color: "#8fb0f7", opacity: 0.2 },
      },
      fillerColor: "rgba(135,175,274,0.2)",
      handleIcon:
        "path://M-9.35,34.56V42m0-40V9.5m-2,0h4a2,2,0,0,1,2,2v21a2,2,0,0,1-2,2h-4a2,2,0,0,1-2-2v-21A2,2,0,0,1-11.35,9.5Z",
      handleSize: "100%",
      handleStyle: { color: "#fff", borderColor: "#ACB8D1" },
      moveHandleSize: 7,
      moveHandleIcon:
        "path://M-320.9-50L-320.9-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-348-41-339-50-320.9-50z M-212.3-50L-212.3-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-239.4-41-230.4-50-212.3-50z M-103.7-50L-103.7-50c18.1,0,27.1,9,27.1,27.1V85.7c0,18.1-9,27.1-27.1,27.1l0,0c-18.1,0-27.1-9-27.1-27.1V-22.9C-130.9-41-121.8-50-103.7-50z",
      moveHandleStyle: { color: "#D2DBEE", opacity: 0.7 },
      showDetail: !0,
      showDataShadow: "auto",
      realtime: !0,
      zoomLock: !1,
      textStyle: { color: "#6E7079" },
      brushSelect: !0,
      brushStyle: { color: "rgba(135,175,274,0.15)" },
      emphasis: {
        handleStyle: { borderColor: "#8FB0F7" },
        moveHandleStyle: { color: "#8FB0F7" },
      },
    })),
    t
  );
})(ba);
const $P = YP;
var Oi = yt,
  Qp = 7,
  ZP = 1,
  pl = 30,
  XP = 7,
  ki = "horizontal",
  Jp = "vertical",
  qP = 5,
  KP = ["line", "bar", "candlestick", "scatter"],
  QP = { easing: "cubicOut", duration: 100, delay: 0 },
  JP = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = t.type), (e._displayables = {}), e;
    }
    return (
      (t.prototype.init = function (e, n) {
        (this.api = n),
          (this._onBrush = Y(this._onBrush, this)),
          (this._onBrushEnd = Y(this._onBrushEnd, this));
      }),
      (t.prototype.render = function (e, n, i, a) {
        if (
          (r.prototype.render.apply(this, arguments),
          Hs(this, "_dispatchZoomAction", e.get("throttle"), "fixRate"),
          (this._orient = e.getOrient()),
          e.get("show") === !1)
        ) {
          this.group.removeAll();
          return;
        }
        if (e.noTarget()) {
          this._clear(), this.group.removeAll();
          return;
        }
        (!a || a.type !== "dataZoom" || a.from !== this.uid) &&
          this._buildView(),
          this._updateView();
      }),
      (t.prototype.dispose = function () {
        this._clear(), r.prototype.dispose.apply(this, arguments);
      }),
      (t.prototype._clear = function () {
        rs(this, "_dispatchZoomAction");
        var e = this.api.getZr();
        e.off("mousemove", this._onBrush), e.off("mouseup", this._onBrushEnd);
      }),
      (t.prototype._buildView = function () {
        var e = this.group;
        e.removeAll(),
          (this._brushing = !1),
          (this._displayables.brushRect = null),
          this._resetLocation(),
          this._resetInterval();
        var n = (this._displayables.sliderGroup = new bt());
        this._renderBackground(),
          this._renderHandle(),
          this._renderDataShadow(),
          e.add(n),
          this._positionGroup();
      }),
      (t.prototype._resetLocation = function () {
        var e = this.dataZoomModel,
          n = this.api,
          i = e.get("brushSelect"),
          a = i ? XP : 0,
          o = this._findCoordRect(),
          s = { width: n.getWidth(), height: n.getHeight() },
          u =
            this._orient === ki
              ? {
                  right: s.width - o.x - o.width,
                  top: s.height - pl - Qp - a,
                  width: o.width,
                  height: pl,
                }
              : { right: Qp, top: o.y, width: pl, height: o.height },
          l = Pa(e.option);
        C(["right", "top", "width", "height"], function (h) {
          l[h] === "ph" && (l[h] = u[h]);
        });
        var f = wr(l, s);
        (this._location = { x: f.x, y: f.y }),
          (this._size = [f.width, f.height]),
          this._orient === Jp && this._size.reverse();
      }),
      (t.prototype._positionGroup = function () {
        var e = this.group,
          n = this._location,
          i = this._orient,
          a = this.dataZoomModel.getFirstTargetAxisModel(),
          o = a && a.get("inverse"),
          s = this._displayables.sliderGroup,
          u = (this._dataShadowInfo || {}).otherAxisInverse;
        s.attr(
          i === ki && !o
            ? { scaleY: u ? 1 : -1, scaleX: 1 }
            : i === ki && o
            ? { scaleY: u ? 1 : -1, scaleX: -1 }
            : i === Jp && !o
            ? { scaleY: u ? -1 : 1, scaleX: 1, rotation: Math.PI / 2 }
            : { scaleY: u ? -1 : 1, scaleX: -1, rotation: Math.PI / 2 }
        );
        var l = e.getBoundingRect([s]);
        (e.x = n.x - l.x), (e.y = n.y - l.y), e.markRedraw();
      }),
      (t.prototype._getViewExtent = function () {
        return [0, this._size[0]];
      }),
      (t.prototype._renderBackground = function () {
        var e = this.dataZoomModel,
          n = this._size,
          i = this._displayables.sliderGroup,
          a = e.get("brushSelect");
        i.add(
          new Oi({
            silent: !0,
            shape: { x: 0, y: 0, width: n[0], height: n[1] },
            style: { fill: e.get("backgroundColor") },
            z2: -40,
          })
        );
        var o = new Oi({
            shape: { x: 0, y: 0, width: n[0], height: n[1] },
            style: { fill: "transparent" },
            z2: 0,
            onclick: Y(this._onClickPanel, this),
          }),
          s = this.api.getZr();
        a
          ? (o.on("mousedown", this._onBrushStart, this),
            (o.cursor = "crosshair"),
            s.on("mousemove", this._onBrush),
            s.on("mouseup", this._onBrushEnd))
          : (s.off("mousemove", this._onBrush),
            s.off("mouseup", this._onBrushEnd)),
          i.add(o);
      }),
      (t.prototype._renderDataShadow = function () {
        var e = (this._dataShadowInfo = this._prepareDataShadowInfo());
        if (((this._displayables.dataShadowSegs = []), !e)) return;
        var n = this._size,
          i = this._shadowSize || [],
          a = e.series,
          o = a.getRawData(),
          s = a.getShadowDim ? a.getShadowDim() : e.otherDim;
        if (s == null) return;
        var u = this._shadowPolygonPts,
          l = this._shadowPolylinePts;
        if (
          o !== this._shadowData ||
          s !== this._shadowDim ||
          n[0] !== i[0] ||
          n[1] !== i[1]
        ) {
          var f = o.getDataExtent(s),
            h = (f[1] - f[0]) * 0.3;
          f = [f[0] - h, f[1] + h];
          var c = [0, n[1]],
            v = [0, n[0]],
            d = [
              [n[0], 0],
              [0, 0],
            ],
            g = [],
            p = v[1] / (o.count() - 1),
            y = 0,
            m = Math.round(o.count() / n[0]),
            _;
          o.each([s], function (T, M) {
            if (m > 0 && M % m) {
              y += p;
              return;
            }
            var D = T == null || isNaN(T) || T === "",
              A = D ? 0 : Et(T, f, c, !0);
            D && !_ && M
              ? (d.push([d[d.length - 1][0], 0]),
                g.push([g[g.length - 1][0], 0]))
              : !D && _ && (d.push([y, 0]), g.push([y, 0])),
              d.push([y, A]),
              g.push([y, A]),
              (y += p),
              (_ = D);
          }),
            (u = this._shadowPolygonPts = d),
            (l = this._shadowPolylinePts = g);
        }
        (this._shadowData = o),
          (this._shadowDim = s),
          (this._shadowSize = [n[0], n[1]]);
        var S = this.dataZoomModel;
        function w(T) {
          var M = S.getModel(T ? "selectedDataBackground" : "dataBackground"),
            D = new bt(),
            A = new Aa({
              shape: { points: u },
              segmentIgnoreThreshold: 1,
              style: M.getModel("areaStyle").getAreaStyle(),
              silent: !0,
              z2: -20,
            }),
            L = new La({
              shape: { points: l },
              segmentIgnoreThreshold: 1,
              style: M.getModel("lineStyle").getLineStyle(),
              silent: !0,
              z2: -19,
            });
          return D.add(A), D.add(L), D;
        }
        for (var x = 0; x < 3; x++) {
          var b = w(x === 1);
          this._displayables.sliderGroup.add(b),
            this._displayables.dataShadowSegs.push(b);
        }
      }),
      (t.prototype._prepareDataShadowInfo = function () {
        var e = this.dataZoomModel,
          n = e.get("showDataShadow");
        if (n !== !1) {
          var i,
            a = this.ecModel;
          return (
            e.eachTargetAxis(function (o, s) {
              var u = e.getAxisProxy(o, s).getTargetSeriesModels();
              C(
                u,
                function (l) {
                  if (!i && !(n !== !0 && J(KP, l.get("type")) < 0)) {
                    var f = a.getComponent(pr(o), s).axis,
                      h = jP(o),
                      c,
                      v = l.coordinateSystem;
                    h != null &&
                      v.getOtherAxis &&
                      (c = v.getOtherAxis(f).inverse),
                      (h = l.getData().mapDimension(h)),
                      (i = {
                        thisAxis: f,
                        series: l,
                        thisDim: o,
                        otherDim: h,
                        otherAxisInverse: c,
                      });
                  }
                },
                this
              );
            }, this),
            i
          );
        }
      }),
      (t.prototype._renderHandle = function () {
        var e = this.group,
          n = this._displayables,
          i = (n.handles = [null, null]),
          a = (n.handleLabels = [null, null]),
          o = this._displayables.sliderGroup,
          s = this._size,
          u = this.dataZoomModel,
          l = this.api,
          f = u.get("borderRadius") || 0,
          h = u.get("brushSelect"),
          c = (n.filler = new Oi({
            silent: h,
            style: { fill: u.get("fillerColor") },
            textConfig: { position: "inside" },
          }));
        o.add(c),
          o.add(
            new Oi({
              silent: !0,
              subPixelOptimize: !0,
              shape: { x: 0, y: 0, width: s[0], height: s[1], r: f },
              style: {
                stroke: u.get("dataBackgroundColor") || u.get("borderColor"),
                lineWidth: ZP,
                fill: "rgba(0,0,0,0)",
              },
            })
          ),
          C(
            [0, 1],
            function (_) {
              var S = u.get("handleIcon");
              !is[S] &&
                S.indexOf("path://") < 0 &&
                S.indexOf("image://") < 0 &&
                (S = "path://" + S);
              var w = br(S, -1, 0, 2, 2, null, !0);
              w.attr({
                cursor: jp(this._orient),
                draggable: !0,
                drift: Y(this._onDragMove, this, _),
                ondragend: Y(this._onDragEnd, this),
                onmouseover: Y(this._showDataInfo, this, !0),
                onmouseout: Y(this._showDataInfo, this, !1),
                z2: 5,
              });
              var x = w.getBoundingRect(),
                b = u.get("handleSize");
              (this._handleHeight = Ct(b, this._size[1])),
                (this._handleWidth = (x.width / x.height) * this._handleHeight),
                w.setStyle(u.getModel("handleStyle").getItemStyle()),
                (w.style.strokeNoScale = !0),
                (w.rectHover = !0),
                (w.ensureState("emphasis").style = u
                  .getModel(["emphasis", "handleStyle"])
                  .getItemStyle()),
                qo(w);
              var T = u.get("handleColor");
              T != null && (w.style.fill = T), o.add((i[_] = w));
              var M = u.getModel("textStyle");
              e.add(
                (a[_] = new Dt({
                  silent: !0,
                  invisible: !0,
                  style: Qe(M, {
                    x: 0,
                    y: 0,
                    text: "",
                    verticalAlign: "middle",
                    align: "center",
                    fill: M.getTextColor(),
                    font: M.getFont(),
                  }),
                  z2: 10,
                }))
              );
            },
            this
          );
        var v = c;
        if (h) {
          var d = Ct(u.get("moveHandleSize"), s[1]),
            g = (n.moveHandle = new yt({
              style: u.getModel("moveHandleStyle").getItemStyle(),
              silent: !0,
              shape: { r: [0, 0, 2, 2], y: s[1] - 0.5, height: d },
            })),
            p = d * 0.8,
            y = (n.moveHandleIcon = br(
              u.get("moveHandleIcon"),
              -p / 2,
              -p / 2,
              p,
              p,
              "#fff",
              !0
            ));
          (y.silent = !0),
            (y.y = s[1] + d / 2 - 0.5),
            (g.ensureState("emphasis").style = u
              .getModel(["emphasis", "moveHandleStyle"])
              .getItemStyle());
          var m = Math.min(s[1] / 2, Math.max(d, 10));
          (v = n.moveZone =
            new yt({ invisible: !0, shape: { y: s[1] - m, height: d + m } })),
            v
              .on("mouseover", function () {
                l.enterEmphasis(g);
              })
              .on("mouseout", function () {
                l.leaveEmphasis(g);
              }),
            o.add(g),
            o.add(y),
            o.add(v);
        }
        v.attr({
          draggable: !0,
          cursor: jp(this._orient),
          drift: Y(this._onDragMove, this, "all"),
          ondragstart: Y(this._showDataInfo, this, !0),
          ondragend: Y(this._onDragEnd, this),
          onmouseover: Y(this._showDataInfo, this, !0),
          onmouseout: Y(this._showDataInfo, this, !1),
        });
      }),
      (t.prototype._resetInterval = function () {
        var e = (this._range = this.dataZoomModel.getPercentRange()),
          n = this._getViewExtent();
        this._handleEnds = [
          Et(e[0], [0, 100], n, !0),
          Et(e[1], [0, 100], n, !0),
        ];
      }),
      (t.prototype._updateInterval = function (e, n) {
        var i = this.dataZoomModel,
          a = this._handleEnds,
          o = this._getViewExtent(),
          s = i.findRepresentativeAxisProxy().getMinMaxSpan(),
          u = [0, 100];
        Oa(
          n,
          a,
          o,
          i.get("zoomLock") ? "all" : e,
          s.minSpan != null ? Et(s.minSpan, u, o, !0) : null,
          s.maxSpan != null ? Et(s.maxSpan, u, o, !0) : null
        );
        var l = this._range,
          f = (this._range = zi([Et(a[0], o, u, !0), Et(a[1], o, u, !0)]));
        return !l || l[0] !== f[0] || l[1] !== f[1];
      }),
      (t.prototype._updateView = function (e) {
        var n = this._displayables,
          i = this._handleEnds,
          a = zi(i.slice()),
          o = this._size;
        C(
          [0, 1],
          function (v) {
            var d = n.handles[v],
              g = this._handleHeight;
            d.attr({
              scaleX: g / 2,
              scaleY: g / 2,
              x: i[v] + (v ? -1 : 1),
              y: o[1] / 2 - g / 2,
            });
          },
          this
        ),
          n.filler.setShape({
            x: a[0],
            y: 0,
            width: a[1] - a[0],
            height: o[1],
          });
        var s = { x: a[0], width: a[1] - a[0] };
        n.moveHandle &&
          (n.moveHandle.setShape(s),
          n.moveZone.setShape(s),
          n.moveZone.getBoundingRect(),
          n.moveHandleIcon && n.moveHandleIcon.attr("x", s.x + s.width / 2));
        for (
          var u = n.dataShadowSegs, l = [0, a[0], a[1], o[0]], f = 0;
          f < u.length;
          f++
        ) {
          var h = u[f],
            c = h.getClipPath();
          c || ((c = new yt()), h.setClipPath(c)),
            c.setShape({ x: l[f], y: 0, width: l[f + 1] - l[f], height: o[1] });
        }
        this._updateDataInfo(e);
      }),
      (t.prototype._updateDataInfo = function (e) {
        var n = this.dataZoomModel,
          i = this._displayables,
          a = i.handleLabels,
          o = this._orient,
          s = ["", ""];
        if (n.get("showDetail")) {
          var u = n.findRepresentativeAxisProxy();
          if (u) {
            var l = u.getAxisModel().axis,
              f = this._range,
              h = e
                ? u.calculateDataWindow({ start: f[0], end: f[1] }).valueWindow
                : u.getDataValueWindow();
            s = [this._formatLabel(h[0], l), this._formatLabel(h[1], l)];
          }
        }
        var c = zi(this._handleEnds.slice());
        v.call(this, 0), v.call(this, 1);
        function v(d) {
          var g = Ds(i.handles[d].parent, this.group),
            p = sh(d === 0 ? "right" : "left", g),
            y = this._handleWidth / 2 + qP,
            m = la([c[d] + (d === 0 ? -y : y), this._size[1] / 2], g);
          a[d].setStyle({
            x: m[0],
            y: m[1],
            verticalAlign: o === ki ? "middle" : p,
            align: o === ki ? p : "center",
            text: s[d],
          });
        }
      }),
      (t.prototype._formatLabel = function (e, n) {
        var i = this.dataZoomModel,
          a = i.get("labelFormatter"),
          o = i.get("labelPrecision");
        (o == null || o === "auto") && (o = n.getPixelPrecision());
        var s =
          e == null || isNaN(e)
            ? ""
            : n.type === "category" || n.type === "time"
            ? n.scale.getLabel({ value: Math.round(e) })
            : e.toFixed(Math.min(o, 20));
        return U(a) ? a(e, s) : G(a) ? a.replace("{value}", s) : s;
      }),
      (t.prototype._showDataInfo = function (e) {
        e = this._dragging || e;
        var n = this._displayables,
          i = n.handleLabels;
        i[0].attr("invisible", !e),
          i[1].attr("invisible", !e),
          n.moveHandle &&
            this.api[e ? "enterEmphasis" : "leaveEmphasis"](n.moveHandle, 1);
      }),
      (t.prototype._onDragMove = function (e, n, i, a) {
        (this._dragging = !0), Jn(a.event);
        var o = this._displayables.sliderGroup.getLocalTransform(),
          s = la([n, i], o, !0),
          u = this._updateInterval(e, s[0]),
          l = this.dataZoomModel.get("realtime");
        this._updateView(!l), u && l && this._dispatchZoomAction(!0);
      }),
      (t.prototype._onDragEnd = function () {
        (this._dragging = !1), this._showDataInfo(!1);
        var e = this.dataZoomModel.get("realtime");
        !e && this._dispatchZoomAction(!1);
      }),
      (t.prototype._onClickPanel = function (e) {
        var n = this._size,
          i = this._displayables.sliderGroup.transformCoordToLocal(
            e.offsetX,
            e.offsetY
          );
        if (!(i[0] < 0 || i[0] > n[0] || i[1] < 0 || i[1] > n[1])) {
          var a = this._handleEnds,
            o = (a[0] + a[1]) / 2,
            s = this._updateInterval("all", i[0] - o);
          this._updateView(), s && this._dispatchZoomAction(!1);
        }
      }),
      (t.prototype._onBrushStart = function (e) {
        var n = e.offsetX,
          i = e.offsetY;
        (this._brushStart = new Z(n, i)),
          (this._brushing = !0),
          (this._brushStartTime = +new Date());
      }),
      (t.prototype._onBrushEnd = function (e) {
        if (!!this._brushing) {
          var n = this._displayables.brushRect;
          if (((this._brushing = !1), !!n)) {
            n.attr("ignore", !0);
            var i = n.shape,
              a = +new Date();
            if (!(a - this._brushStartTime < 200 && Math.abs(i.width) < 5)) {
              var o = this._getViewExtent(),
                s = [0, 100];
              (this._range = zi([
                Et(i.x, o, s, !0),
                Et(i.x + i.width, o, s, !0),
              ])),
                (this._handleEnds = [i.x, i.x + i.width]),
                this._updateView(),
                this._dispatchZoomAction(!1);
            }
          }
        }
      }),
      (t.prototype._onBrush = function (e) {
        this._brushing &&
          (Jn(e.event), this._updateBrushRect(e.offsetX, e.offsetY));
      }),
      (t.prototype._updateBrushRect = function (e, n) {
        var i = this._displayables,
          a = this.dataZoomModel,
          o = i.brushRect;
        o ||
          ((o = i.brushRect =
            new Oi({
              silent: !0,
              style: a.getModel("brushStyle").getItemStyle(),
            })),
          i.sliderGroup.add(o)),
          o.attr("ignore", !1);
        var s = this._brushStart,
          u = this._displayables.sliderGroup,
          l = u.transformCoordToLocal(e, n),
          f = u.transformCoordToLocal(s.x, s.y),
          h = this._size;
        (l[0] = Math.max(Math.min(h[0], l[0]), 0)),
          o.setShape({ x: f[0], y: 0, width: l[0] - f[0], height: h[1] });
      }),
      (t.prototype._dispatchZoomAction = function (e) {
        var n = this._range;
        this.api.dispatchAction({
          type: "dataZoom",
          from: this.uid,
          dataZoomId: this.dataZoomModel.id,
          animation: e ? QP : null,
          start: n[0],
          end: n[1],
        });
      }),
      (t.prototype._findCoordRect = function () {
        var e,
          n = P_(this.dataZoomModel).infoList;
        if (!e && n.length) {
          var i = n[0].model.coordinateSystem;
          e = i.getRect && i.getRect();
        }
        if (!e) {
          var a = this.api.getWidth(),
            o = this.api.getHeight();
          e = { x: a * 0.2, y: o * 0.2, width: a * 0.6, height: o * 0.6 };
        }
        return e;
      }),
      (t.type = "dataZoom.slider"),
      t
    );
  })(Uh);
function jP(r) {
  var t = { x: "y", y: "x", radius: "angle", angle: "radius" };
  return t[r];
}
function jp(r) {
  return r === "vertical" ? "ns-resize" : "ew-resize";
}
const tR = JP;
function eR(r) {
  r.registerComponentModel($P), r.registerComponentView(tR), Yh(r);
}
function tE(r) {
  Be(UP), Be(eR);
}
var tg = {
    value: "eq",
    "<": "lt",
    "<=": "lte",
    ">": "gt",
    ">=": "gte",
    "=": "eq",
    "!=": "ne",
    "<>": "ne",
  },
  rR = (function () {
    function r(t) {
      var e = (this._condVal = G(t) ? new RegExp(t) : p1(t) ? t : null);
      if (e == null) {
        var n = "";
        et(n);
      }
    }
    return (
      (r.prototype.evaluate = function (t) {
        var e = typeof t;
        return G(e)
          ? this._condVal.test(t)
          : ft(e)
          ? this._condVal.test(t + "")
          : !1;
      }),
      r
    );
  })(),
  nR = (function () {
    function r() {}
    return (
      (r.prototype.evaluate = function () {
        return this.value;
      }),
      r
    );
  })(),
  iR = (function () {
    function r() {}
    return (
      (r.prototype.evaluate = function () {
        for (var t = this.children, e = 0; e < t.length; e++)
          if (!t[e].evaluate()) return !1;
        return !0;
      }),
      r
    );
  })(),
  aR = (function () {
    function r() {}
    return (
      (r.prototype.evaluate = function () {
        for (var t = this.children, e = 0; e < t.length; e++)
          if (t[e].evaluate()) return !0;
        return !1;
      }),
      r
    );
  })(),
  oR = (function () {
    function r() {}
    return (
      (r.prototype.evaluate = function () {
        return !this.child.evaluate();
      }),
      r
    );
  })(),
  sR = (function () {
    function r() {}
    return (
      (r.prototype.evaluate = function () {
        for (
          var t = !!this.valueParser,
            e = this.getValue,
            n = e(this.valueGetterParam),
            i = t ? this.valueParser(n) : null,
            a = 0;
          a < this.subCondList.length;
          a++
        )
          if (!this.subCondList[a].evaluate(t ? i : n)) return !1;
        return !0;
      }),
      r
    );
  })();
function Kh(r, t) {
  if (r === !0 || r === !1) {
    var e = new nR();
    return (e.value = r), e;
  }
  var n = "";
  return (
    $_(r) || et(n),
    r.and
      ? eg("and", r, t)
      : r.or
      ? eg("or", r, t)
      : r.not
      ? uR(r, t)
      : lR(r, t)
  );
}
function eg(r, t, e) {
  var n = t[r],
    i = "";
  N(n) || et(i), n.length || et(i);
  var a = r === "and" ? new iR() : new aR();
  return (
    (a.children = z(n, function (o) {
      return Kh(o, e);
    })),
    a.children.length || et(i),
    a
  );
}
function uR(r, t) {
  var e = r.not,
    n = "";
  $_(e) || et(n);
  var i = new oR();
  return (i.child = Kh(e, t)), i.child || et(n), i;
}
function lR(r, t) {
  for (
    var e = "",
      n = t.prepareGetValue(r),
      i = [],
      a = pt(r),
      o = r.parser,
      s = o ? Om(o) : null,
      u = 0;
    u < a.length;
    u++
  ) {
    var l = a[u];
    if (!(l === "parser" || t.valueGetterAttrMap.get(l))) {
      var f = Ze(tg, l) ? tg[l] : l,
        h = r[l],
        c = s ? s(h) : h,
        v = YT(f, c) || (f === "reg" && new rR(c));
      v || et(e), i.push(v);
    }
  }
  i.length || et(e);
  var d = new sR();
  return (
    (d.valueGetterParam = n),
    (d.valueParser = s),
    (d.getValue = t.getValue),
    (d.subCondList = i),
    d
  );
}
function $_(r) {
  return H(r) && !Ht(r);
}
var fR = (function () {
  function r(t, e) {
    this._cond = Kh(t, e);
  }
  return (
    (r.prototype.evaluate = function () {
      return this._cond.evaluate();
    }),
    r
  );
})();
function hR(r, t) {
  return new fR(r, t);
}
var vR = {
    type: "echarts:filter",
    transform: function (r) {
      for (
        var t = r.upstream,
          e,
          n = hR(r.config, {
            valueGetterAttrMap: W({ dimension: !0 }),
            prepareGetValue: function (s) {
              var u = "",
                l = s.dimension;
              Ze(s, "dimension") || et(u);
              var f = t.getDimensionInfo(l);
              return f || et(u), { dimIdx: f.index };
            },
            getValue: function (s) {
              return t.retrieveValueFromItem(e, s.dimIdx);
            },
          }),
          i = [],
          a = 0,
          o = t.count();
        a < o;
        a++
      )
        (e = t.getRawDataItem(a)), n.evaluate() && i.push(e);
      return { data: i };
    },
  },
  cR = {
    type: "echarts:sort",
    transform: function (r) {
      var t = r.upstream,
        e = r.config,
        n = "",
        i = _t(e);
      i.length || et(n);
      var a = [];
      C(i, function (f) {
        var h = f.dimension,
          c = f.order,
          v = f.parser,
          d = f.incomparable;
        if (
          (h == null && et(n),
          c !== "asc" && c !== "desc" && et(n),
          d && d !== "min" && d !== "max")
        ) {
          var g = "";
          et(g);
        }
        if (c !== "asc" && c !== "desc") {
          var p = "";
          et(p);
        }
        var y = t.getDimensionInfo(h);
        y || et(n);
        var m = v ? Om(v) : null;
        v && !m && et(n),
          a.push({ dimIdx: y.index, parser: m, comparator: new Bm(c, d) });
      });
      var o = t.sourceFormat;
      o !== Vt && o !== Te && et(n);
      for (var s = [], u = 0, l = t.count(); u < l; u++)
        s.push(t.getRawDataItem(u));
      return (
        s.sort(function (f, h) {
          for (var c = 0; c < a.length; c++) {
            var v = a[c],
              d = t.retrieveValueFromItem(f, v.dimIdx),
              g = t.retrieveValueFromItem(h, v.dimIdx);
            v.parser && ((d = v.parser(d)), (g = v.parser(g)));
            var p = v.comparator.evaluate(d, g);
            if (p !== 0) return p;
          }
          return 0;
        }),
        { data: s }
      );
    },
  };
function eE(r) {
  r.registerTransform(vR), r.registerTransform(cR);
}
var dR = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = "dataset"), e;
    }
    return (
      (t.prototype.init = function (e, n, i) {
        r.prototype.init.call(this, e, n, i),
          (this._sourceManager = new Gm(this)),
          Xc(this);
      }),
      (t.prototype.mergeOption = function (e, n) {
        r.prototype.mergeOption.call(this, e, n), Xc(this);
      }),
      (t.prototype.optionUpdated = function () {
        this._sourceManager.dirty();
      }),
      (t.prototype.getSourceManager = function () {
        return this._sourceManager;
      }),
      (t.type = "dataset"),
      (t.defaultOption = { seriesLayoutBy: Oe }),
      t
    );
  })(ct),
  pR = (function (r) {
    O(t, r);
    function t() {
      var e = (r !== null && r.apply(this, arguments)) || this;
      return (e.type = "dataset"), e;
    }
    return (t.type = "dataset"), t;
  })(ve);
function rE(r) {
  r.registerComponentModel(dR), r.registerComponentView(pR);
}
var Le = qe.CMD;
function Un(r, t) {
  return Math.abs(r - t) < 1e-5;
}
function Of(r) {
  var t = r.data,
    e = r.len(),
    n = [],
    i,
    a = 0,
    o = 0,
    s = 0,
    u = 0;
  function l(I, P) {
    i && i.length > 2 && n.push(i), (i = [I, P]);
  }
  function f(I, P, E, R) {
    (Un(I, E) && Un(P, R)) || i.push(I, P, E, R, E, R);
  }
  function h(I, P, E, R, V, F) {
    var B = Math.abs(P - I),
      $ = (Math.tan(B / 4) * 4) / 3,
      it = P < I ? -1 : 1,
      lt = Math.cos(I),
      ht = Math.sin(I),
      vt = Math.cos(P),
      Lt = Math.sin(P),
      dt = lt * V + E,
      pe = ht * F + R,
      ze = vt * V + E,
      It = Lt * F + R,
      St = V * $ * it,
      X = F * $ * it;
    i.push(dt - St * ht, pe + X * lt, ze + St * Lt, It - X * vt, ze, It);
  }
  for (var c, v, d, g, p = 0; p < e; ) {
    var y = t[p++],
      m = p === 1;
    switch (
      (m &&
        ((a = t[p]),
        (o = t[p + 1]),
        (s = a),
        (u = o),
        (y === Le.L || y === Le.C || y === Le.Q) && (i = [s, u])),
      y)
    ) {
      case Le.M:
        (a = s = t[p++]), (o = u = t[p++]), l(s, u);
        break;
      case Le.L:
        (c = t[p++]), (v = t[p++]), f(a, o, c, v), (a = c), (o = v);
        break;
      case Le.C:
        i.push(t[p++], t[p++], t[p++], t[p++], (a = t[p++]), (o = t[p++]));
        break;
      case Le.Q:
        (c = t[p++]),
          (v = t[p++]),
          (d = t[p++]),
          (g = t[p++]),
          i.push(
            a + (2 / 3) * (c - a),
            o + (2 / 3) * (v - o),
            d + (2 / 3) * (c - d),
            g + (2 / 3) * (v - g),
            d,
            g
          ),
          (a = d),
          (o = g);
        break;
      case Le.A:
        var _ = t[p++],
          S = t[p++],
          w = t[p++],
          x = t[p++],
          b = t[p++],
          T = t[p++] + b;
        p += 1;
        var M = !t[p++];
        (c = Math.cos(b) * w + _),
          (v = Math.sin(b) * x + S),
          m ? ((s = c), (u = v), l(s, u)) : f(a, o, c, v),
          (a = Math.cos(T) * w + _),
          (o = Math.sin(T) * x + S);
        for (
          var D = ((M ? -1 : 1) * Math.PI) / 2, A = b;
          M ? A > T : A < T;
          A += D
        ) {
          var L = M ? Math.max(A + D, T) : Math.min(A + D, T);
          h(A, L, _, S, w, x);
        }
        break;
      case Le.R:
        (s = a = t[p++]),
          (u = o = t[p++]),
          (c = s + t[p++]),
          (v = u + t[p++]),
          l(c, u),
          f(c, u, c, v),
          f(c, v, s, v),
          f(s, v, s, u),
          f(s, u, c, u);
        break;
      case Le.Z:
        i && f(a, o, s, u), (a = s), (o = u);
        break;
    }
  }
  return i && i.length > 2 && n.push(i), n;
}
function kf(r, t, e, n, i, a, o, s, u, l) {
  if (Un(r, e) && Un(t, n) && Un(i, o) && Un(a, s)) {
    u.push(o, s);
    return;
  }
  var f = 2 / l,
    h = f * f,
    c = o - r,
    v = s - t,
    d = Math.sqrt(c * c + v * v);
  (c /= d), (v /= d);
  var g = e - r,
    p = n - t,
    y = i - o,
    m = a - s,
    _ = g * g + p * p,
    S = y * y + m * m;
  if (_ < h && S < h) {
    u.push(o, s);
    return;
  }
  var w = c * g + v * p,
    x = -c * y - v * m,
    b = _ - w * w,
    T = S - x * x;
  if (b < h && w >= 0 && T < h && x >= 0) {
    u.push(o, s);
    return;
  }
  var M = [],
    D = [];
  Sr(r, e, i, o, 0.5, M),
    Sr(t, n, a, s, 0.5, D),
    kf(M[0], D[0], M[1], D[1], M[2], D[2], M[3], D[3], u, l),
    kf(M[4], D[4], M[5], D[5], M[6], D[6], M[7], D[7], u, l);
}
function gR(r, t) {
  var e = Of(r),
    n = [];
  t = t || 1;
  for (var i = 0; i < e.length; i++) {
    var a = e[i],
      o = [],
      s = a[0],
      u = a[1];
    o.push(s, u);
    for (var l = 2; l < a.length; ) {
      var f = a[l++],
        h = a[l++],
        c = a[l++],
        v = a[l++],
        d = a[l++],
        g = a[l++];
      kf(s, u, f, h, c, v, d, g, o, t), (s = d), (u = g);
    }
    n.push(o);
  }
  return n;
}
function Z_(r, t, e) {
  var n = r[t],
    i = r[1 - t],
    a = Math.abs(n / i),
    o = Math.ceil(Math.sqrt(a * e)),
    s = Math.floor(e / o);
  s === 0 && ((s = 1), (o = e));
  for (var u = [], l = 0; l < o; l++) u.push(s);
  var f = o * s,
    h = e - f;
  if (h > 0) for (var l = 0; l < h; l++) u[l % o] += 1;
  return u;
}
function rg(r, t, e) {
  for (
    var n = r.r0,
      i = r.r,
      a = r.startAngle,
      o = r.endAngle,
      s = Math.abs(o - a),
      u = s * i,
      l = i - n,
      f = u > Math.abs(l),
      h = Z_([u, l], f ? 0 : 1, t),
      c = (f ? s : l) / h.length,
      v = 0;
    v < h.length;
    v++
  )
    for (var d = (f ? l : s) / h[v], g = 0; g < h[v]; g++) {
      var p = {};
      f
        ? ((p.startAngle = a + c * v),
          (p.endAngle = a + c * (v + 1)),
          (p.r0 = n + d * g),
          (p.r = n + d * (g + 1)))
        : ((p.startAngle = a + d * g),
          (p.endAngle = a + d * (g + 1)),
          (p.r0 = n + c * v),
          (p.r = n + c * (v + 1))),
        (p.clockwise = r.clockwise),
        (p.cx = r.cx),
        (p.cy = r.cy),
        e.push(p);
    }
}
function yR(r, t, e) {
  for (
    var n = r.width,
      i = r.height,
      a = n > i,
      o = Z_([n, i], a ? 0 : 1, t),
      s = a ? "width" : "height",
      u = a ? "height" : "width",
      l = a ? "x" : "y",
      f = a ? "y" : "x",
      h = r[s] / o.length,
      c = 0;
    c < o.length;
    c++
  )
    for (var v = r[u] / o[c], d = 0; d < o[c]; d++) {
      var g = {};
      (g[l] = c * h),
        (g[f] = d * v),
        (g[s] = h),
        (g[u] = v),
        (g.x += r.x),
        (g.y += r.y),
        e.push(g);
    }
}
function ng(r, t, e, n) {
  return r * n - e * t;
}
function mR(r, t, e, n, i, a, o, s) {
  var u = e - r,
    l = n - t,
    f = o - i,
    h = s - a,
    c = ng(f, h, u, l);
  if (Math.abs(c) < 1e-6) return null;
  var v = r - i,
    d = t - a,
    g = ng(v, d, f, h) / c;
  return g < 0 || g > 1 ? null : new Z(g * u + r, g * l + t);
}
function _R(r, t, e) {
  var n = new Z();
  Z.sub(n, e, t), n.normalize();
  var i = new Z();
  Z.sub(i, r, t);
  var a = i.dot(n);
  return a;
}
function En(r, t) {
  var e = r[r.length - 1];
  (e && e[0] === t[0] && e[1] === t[1]) || r.push(t);
}
function SR(r, t, e) {
  for (var n = r.length, i = [], a = 0; a < n; a++) {
    var o = r[a],
      s = r[(a + 1) % n],
      u = mR(o[0], o[1], s[0], s[1], t.x, t.y, e.x, e.y);
    u && i.push({ projPt: _R(u, t, e), pt: u, idx: a });
  }
  if (i.length < 2) return [{ points: r }, { points: r }];
  i.sort(function (p, y) {
    return p.projPt - y.projPt;
  });
  var l = i[0],
    f = i[i.length - 1];
  if (f.idx < l.idx) {
    var h = l;
    (l = f), (f = h);
  }
  for (
    var c = [l.pt.x, l.pt.y],
      v = [f.pt.x, f.pt.y],
      d = [c],
      g = [v],
      a = l.idx + 1;
    a <= f.idx;
    a++
  )
    En(d, r[a].slice());
  En(d, v), En(d, c);
  for (var a = f.idx + 1; a <= l.idx + n; a++) En(g, r[a % n].slice());
  return En(g, c), En(g, v), [{ points: d }, { points: g }];
}
function ig(r) {
  var t = r.points,
    e = [],
    n = [];
  ly(t, e, n);
  var i = new at(e[0], e[1], n[0] - e[0], n[1] - e[1]),
    a = i.width,
    o = i.height,
    s = i.x,
    u = i.y,
    l = new Z(),
    f = new Z();
  return (
    a > o
      ? ((l.x = f.x = s + a / 2), (l.y = u), (f.y = u + o))
      : ((l.y = f.y = u + o / 2), (l.x = s), (f.x = s + a)),
    SR(t, l, f)
  );
}
function fs(r, t, e, n) {
  if (e === 1) n.push(t);
  else {
    var i = Math.floor(e / 2),
      a = r(t);
    fs(r, a[0], i, n), fs(r, a[1], e - i, n);
  }
  return n;
}
function xR(r, t) {
  for (var e = [], n = 0; n < t; n++) e.push(rh(r));
  return e;
}
function wR(r, t) {
  t.setStyle(r.style), (t.z = r.z), (t.z2 = r.z2), (t.zlevel = r.zlevel);
}
function bR(r) {
  for (var t = [], e = 0; e < r.length; ) t.push([r[e++], r[e++]]);
  return t;
}
function TR(r, t) {
  var e = [],
    n = r.shape,
    i;
  switch (r.type) {
    case "rect":
      yR(n, t, e), (i = yt);
      break;
    case "sector":
      rg(n, t, e), (i = ua);
      break;
    case "circle":
      rg(
        {
          r0: 0,
          r: n.r,
          startAngle: 0,
          endAngle: Math.PI * 2,
          cx: n.cx,
          cy: n.cy,
        },
        t,
        e
      ),
        (i = ua);
      break;
    default:
      var a = r.getComputedTransform(),
        o = a
          ? Math.sqrt(
              Math.max(a[0] * a[0] + a[1] * a[1], a[2] * a[2] + a[3] * a[3])
            )
          : 1,
        s = z(gR(r.getUpdatedPathProxy(), o), function (y) {
          return bR(y);
        }),
        u = s.length;
      if (u === 0) fs(ig, { points: s[0] }, t, e);
      else if (u === t) for (var l = 0; l < u; l++) e.push({ points: s[l] });
      else {
        var f = 0,
          h = z(s, function (y) {
            var m = [],
              _ = [];
            ly(y, m, _);
            var S = (_[1] - m[1]) * (_[0] - m[0]);
            return (f += S), { poly: y, area: S };
          });
        h.sort(function (y, m) {
          return m.area - y.area;
        });
        for (var c = t, l = 0; l < u; l++) {
          var v = h[l];
          if (c <= 0) break;
          var d = l === u - 1 ? c : Math.ceil((v.area / f) * t);
          d < 0 || (fs(ig, { points: v.poly }, d, e), (c -= d));
        }
      }
      i = Aa;
      break;
  }
  if (!i) return xR(r, t);
  for (var g = [], l = 0; l < e.length; l++) {
    var p = new i();
    p.setShape(e[l]), wR(r, p), g.push(p);
  }
  return g;
}
function CR(r, t) {
  var e = r.length,
    n = t.length;
  if (e === n) return [r, t];
  for (
    var i = [],
      a = [],
      o = e < n ? r : t,
      s = Math.min(e, n),
      u = Math.abs(n - e) / 6,
      l = (s - 2) / 6,
      f = Math.ceil(u / l) + 1,
      h = [o[0], o[1]],
      c = u,
      v = 2;
    v < s;

  ) {
    var d = o[v - 2],
      g = o[v - 1],
      p = o[v++],
      y = o[v++],
      m = o[v++],
      _ = o[v++],
      S = o[v++],
      w = o[v++];
    if (c <= 0) {
      h.push(p, y, m, _, S, w);
      continue;
    }
    for (var x = Math.min(c, f - 1) + 1, b = 1; b <= x; b++) {
      var T = b / x;
      Sr(d, p, m, S, T, i),
        Sr(g, y, _, w, T, a),
        (d = i[3]),
        (g = a[3]),
        h.push(i[1], a[1], i[2], a[2], d, g),
        (p = i[5]),
        (y = a[5]),
        (m = i[6]),
        (_ = a[6]);
    }
    c -= x - 1;
  }
  return o === r ? [h, t] : [r, h];
}
function ag(r, t) {
  for (
    var e = r.length, n = r[e - 2], i = r[e - 1], a = [], o = 0;
    o < t.length;

  )
    (a[o++] = n), (a[o++] = i);
  return a;
}
function MR(r, t) {
  for (
    var e, n, i, a = [], o = [], s = 0;
    s < Math.max(r.length, t.length);
    s++
  ) {
    var u = r[s],
      l = t[s],
      f = void 0,
      h = void 0;
    u
      ? l
        ? ((e = CR(u, l)), (f = e[0]), (h = e[1]), (n = f), (i = h))
        : ((h = ag(i || u, u)), (f = u))
      : ((f = ag(n || l, l)), (h = l)),
      a.push(f),
      o.push(h);
  }
  return [a, o];
}
function og(r) {
  for (
    var t = 0, e = 0, n = 0, i = r.length, a = 0, o = i - 2;
    a < i;
    o = a, a += 2
  ) {
    var s = r[o],
      u = r[o + 1],
      l = r[a],
      f = r[a + 1],
      h = s * f - l * u;
    (t += h), (e += (s + l) * h), (n += (u + f) * h);
  }
  return t === 0 ? [r[0] || 0, r[1] || 0] : [e / t / 3, n / t / 3, t];
}
function DR(r, t, e, n) {
  for (
    var i = (r.length - 2) / 6,
      a = 1 / 0,
      o = 0,
      s = r.length,
      u = s - 2,
      l = 0;
    l < i;
    l++
  ) {
    for (var f = l * 6, h = 0, c = 0; c < s; c += 2) {
      var v = c === 0 ? f : ((f + c - 2) % u) + 2,
        d = r[v] - e[0],
        g = r[v + 1] - e[1],
        p = t[c] - n[0],
        y = t[c + 1] - n[1],
        m = p - d,
        _ = y - g;
      h += m * m + _ * _;
    }
    h < a && ((a = h), (o = l));
  }
  return o;
}
function AR(r) {
  for (var t = [], e = r.length, n = 0; n < e; n += 2)
    (t[n] = r[e - n - 2]), (t[n + 1] = r[e - n - 1]);
  return t;
}
function LR(r, t, e, n) {
  for (var i = [], a, o = 0; o < r.length; o++) {
    var s = r[o],
      u = t[o],
      l = og(s),
      f = og(u);
    a == null && (a = l[2] < 0 != f[2] < 0);
    var h = [],
      c = [],
      v = 0,
      d = 1 / 0,
      g = [],
      p = s.length;
    a && (s = AR(s));
    for (var y = DR(s, u, l, f) * 6, m = p - 2, _ = 0; _ < m; _ += 2) {
      var S = ((y + _) % m) + 2;
      (h[_ + 2] = s[S] - l[0]), (h[_ + 3] = s[S + 1] - l[1]);
    }
    if (((h[0] = s[y] - l[0]), (h[1] = s[y + 1] - l[1]), e > 0))
      for (var w = n / e, x = -n / 2; x <= n / 2; x += w) {
        for (
          var b = Math.sin(x), T = Math.cos(x), M = 0, _ = 0;
          _ < s.length;
          _ += 2
        ) {
          var D = h[_],
            A = h[_ + 1],
            L = u[_] - f[0],
            I = u[_ + 1] - f[1],
            P = L * T - I * b,
            E = L * b + I * T;
          (g[_] = P), (g[_ + 1] = E);
          var R = P - D,
            V = E - A;
          M += R * R + V * V;
        }
        if (M < d) {
          (d = M), (v = x);
          for (var F = 0; F < g.length; F++) c[F] = g[F];
        }
      }
    else
      for (var B = 0; B < p; B += 2)
        (c[B] = u[B] - f[0]), (c[B + 1] = u[B + 1] - f[1]);
    i.push({ from: h, to: c, fromCp: l, toCp: f, rotation: -v });
  }
  return i;
}
function hs(r) {
  return r.__isCombineMorphing;
}
var X_ = "__mOriginal_";
function vs(r, t, e) {
  var n = X_ + t,
    i = r[n] || r[t];
  r[n] || (r[n] = r[t]);
  var a = e.replace,
    o = e.after,
    s = e.before;
  r[t] = function () {
    var u = arguments,
      l;
    return (
      s && s.apply(this, u),
      a ? (l = a.apply(this, u)) : (l = i.apply(this, u)),
      o && o.apply(this, u),
      l
    );
  };
}
function ea(r, t) {
  var e = X_ + t;
  r[e] && ((r[t] = r[e]), (r[e] = null));
}
function sg(r, t) {
  for (var e = 0; e < r.length; e++)
    for (var n = r[e], i = 0; i < n.length; ) {
      var a = n[i],
        o = n[i + 1];
      (n[i++] = t[0] * a + t[2] * o + t[4]),
        (n[i++] = t[1] * a + t[3] * o + t[5]);
    }
}
function q_(r, t) {
  var e = r.getUpdatedPathProxy(),
    n = t.getUpdatedPathProxy(),
    i = MR(Of(e), Of(n)),
    a = i[0],
    o = i[1],
    s = r.getComputedTransform(),
    u = t.getComputedTransform();
  function l() {
    this.transform = null;
  }
  s && sg(a, s),
    u && sg(o, u),
    vs(t, "updateTransform", { replace: l }),
    (t.transform = null);
  var f = LR(a, o, 10, Math.PI),
    h = [];
  vs(t, "buildPath", {
    replace: function (c) {
      for (var v = t.__morphT, d = 1 - v, g = [], p = 0; p < f.length; p++) {
        var y = f[p],
          m = y.from,
          _ = y.to,
          S = y.rotation * v,
          w = y.fromCp,
          x = y.toCp,
          b = Math.sin(S),
          T = Math.cos(S);
        wo(g, w, x, v);
        for (var M = 0; M < m.length; M += 2) {
          var D = m[M],
            A = m[M + 1],
            L = _[M],
            I = _[M + 1],
            P = D * d + L * v,
            E = A * d + I * v;
          (h[M] = P * T - E * b + g[0]), (h[M + 1] = P * b + E * T + g[1]);
        }
        var R = h[0],
          V = h[1];
        c.moveTo(R, V);
        for (var M = 2; M < m.length; ) {
          var L = h[M++],
            I = h[M++],
            F = h[M++],
            B = h[M++],
            $ = h[M++],
            it = h[M++];
          R === L && V === I && F === $ && B === it
            ? c.lineTo($, it)
            : c.bezierCurveTo(L, I, F, B, $, it),
            (R = $),
            (V = it);
        }
      }
    },
  });
}
function Qh(r, t, e) {
  if (!r || !t) return t;
  var n = e.done,
    i = e.during;
  q_(r, t), (t.__morphT = 0);
  function a() {
    ea(t, "buildPath"),
      ea(t, "updateTransform"),
      (t.__morphT = -1),
      t.createPathProxy(),
      t.dirtyShape();
  }
  return (
    t.animateTo(
      { __morphT: 1 },
      q(
        {
          during: function (o) {
            t.dirtyShape(), i && i(o);
          },
          done: function () {
            a(), n && n();
          },
        },
        e
      )
    ),
    t
  );
}
function IR(r, t, e, n, i, a) {
  var o = 16;
  (r = i === e ? 0 : Math.round((32767 * (r - e)) / (i - e))),
    (t = a === n ? 0 : Math.round((32767 * (t - n)) / (a - n)));
  for (var s = 0, u, l = (1 << o) / 2; l > 0; l /= 2) {
    var f = 0,
      h = 0;
    (r & l) > 0 && (f = 1),
      (t & l) > 0 && (h = 1),
      (s += l * l * ((3 * f) ^ h)),
      h === 0 &&
        (f === 1 && ((r = l - 1 - r), (t = l - 1 - t)),
        (u = r),
        (r = t),
        (t = u));
  }
  return s;
}
function cs(r) {
  var t = 1 / 0,
    e = 1 / 0,
    n = -1 / 0,
    i = -1 / 0,
    a = z(r, function (s) {
      var u = s.getBoundingRect(),
        l = s.getComputedTransform(),
        f = u.x + u.width / 2 + (l ? l[4] : 0),
        h = u.y + u.height / 2 + (l ? l[5] : 0);
      return (
        (t = Math.min(f, t)),
        (e = Math.min(h, e)),
        (n = Math.max(f, n)),
        (i = Math.max(h, i)),
        [f, h]
      );
    }),
    o = z(a, function (s, u) {
      return { cp: s, z: IR(s[0], s[1], t, e, n, i), path: r[u] };
    });
  return o
    .sort(function (s, u) {
      return s.z - u.z;
    })
    .map(function (s) {
      return s.path;
    });
}
function K_(r) {
  return TR(r.path, r.count);
}
function Bf() {
  return { fromIndividuals: [], toIndividuals: [], count: 0 };
}
function PR(r, t, e) {
  var n = [];
  function i(w) {
    for (var x = 0; x < w.length; x++) {
      var b = w[x];
      hs(b) ? i(b.childrenRef()) : b instanceof rt && n.push(b);
    }
  }
  i(r);
  var a = n.length;
  if (!a) return Bf();
  var o = e.dividePath || K_,
    s = o({ path: t, count: a });
  if (s.length !== a)
    return console.error("Invalid morphing: unmatched splitted path"), Bf();
  (n = cs(n)), (s = cs(s));
  for (
    var u = e.done, l = e.during, f = e.individualDelay, h = new Ca(), c = 0;
    c < a;
    c++
  ) {
    var v = n[c],
      d = s[c];
    (d.parent = t), d.copyTransform(h), f || q_(v, d);
  }
  (t.__isCombineMorphing = !0),
    (t.childrenRef = function () {
      return s;
    });
  function g(w) {
    for (var x = 0; x < s.length; x++) s[x].addSelfToZr(w);
  }
  vs(t, "addSelfToZr", {
    after: function (w) {
      g(w);
    },
  }),
    vs(t, "removeSelfFromZr", {
      after: function (w) {
        for (var x = 0; x < s.length; x++) s[x].removeSelfFromZr(w);
      },
    });
  function p() {
    (t.__isCombineMorphing = !1),
      (t.__morphT = -1),
      (t.childrenRef = null),
      ea(t, "addSelfToZr"),
      ea(t, "removeSelfFromZr");
  }
  var y = s.length;
  if (f)
    for (
      var m = y,
        _ = function () {
          m--, m === 0 && (p(), u && u());
        },
        c = 0;
      c < y;
      c++
    ) {
      var S = f
        ? q({ delay: (e.delay || 0) + f(c, y, n[c], s[c]), done: _ }, e)
        : e;
      Qh(n[c], s[c], S);
    }
  else
    (t.__morphT = 0),
      t.animateTo(
        { __morphT: 1 },
        q(
          {
            during: function (w) {
              for (var x = 0; x < y; x++) {
                var b = s[x];
                (b.__morphT = t.__morphT), b.dirtyShape();
              }
              l && l(w);
            },
            done: function () {
              p();
              for (var w = 0; w < r.length; w++) ea(r[w], "updateTransform");
              u && u();
            },
          },
          e
        )
      );
  return (
    t.__zr && g(t.__zr), { fromIndividuals: n, toIndividuals: s, count: y }
  );
}
function RR(r, t, e) {
  var n = t.length,
    i = [],
    a = e.dividePath || K_;
  function o(v) {
    for (var d = 0; d < v.length; d++) {
      var g = v[d];
      hs(g) ? o(g.childrenRef()) : g instanceof rt && i.push(g);
    }
  }
  if (hs(r)) {
    o(r.childrenRef());
    var s = i.length;
    if (s < n) for (var u = 0, l = s; l < n; l++) i.push(rh(i[u++ % s]));
    i.length = n;
  } else {
    i = a({ path: r, count: n });
    for (var f = r.getComputedTransform(), l = 0; l < i.length; l++)
      i[l].setLocalTransform(f);
    if (i.length !== n)
      return console.error("Invalid morphing: unmatched splitted path"), Bf();
  }
  (i = cs(i)), (t = cs(t));
  for (var h = e.individualDelay, l = 0; l < n; l++) {
    var c = h ? q({ delay: (e.delay || 0) + h(l, n, i[l], t[l]) }, e) : e;
    Qh(i[l], t[l], c);
  }
  return { fromIndividuals: i, toIndividuals: t, count: t.length };
}
function ug(r) {
  return N(r[0]);
}
function lg(r, t) {
  for (var e = [], n = r.length, i = 0; i < n; i++)
    e.push({ one: r[i], many: [] });
  for (var i = 0; i < t.length; i++) {
    var a = t[i].length,
      o = void 0;
    for (o = 0; o < a; o++) e[o % n].many.push(t[i][o]);
  }
  for (var s = 0, i = n - 1; i >= 0; i--)
    if (!e[i].many.length) {
      var u = e[s].many;
      if (u.length <= 1)
        if (s) s = 0;
        else return e;
      var a = u.length,
        l = Math.ceil(a / 2);
      (e[i].many = u.slice(l, a)), (e[s].many = u.slice(0, l)), s++;
    }
  return e;
}
var ER = {
  clone: function (r) {
    for (
      var t = [],
        e = 1 - Math.pow(1 - r.path.style.opacity, 1 / r.count),
        n = 0;
      n < r.count;
      n++
    ) {
      var i = rh(r.path);
      i.setStyle("opacity", e), t.push(i);
    }
    return t;
  },
  split: null,
};
function gl(r, t, e, n, i, a) {
  if (!r.length || !t.length) return;
  var o = Ms("update", n, i);
  if (!(o && o.duration > 0)) return;
  var s = n.getModel("universalTransition").get("delay"),
    u = Object.assign({ setToFinal: !0 }, o),
    l,
    f;
  ug(r) && ((l = r), (f = t)), ug(t) && ((l = t), (f = r));
  function h(y, m, _, S, w) {
    var x = y.many,
      b = y.one;
    if (x.length === 1 && !w) {
      var T = m ? x[0] : b,
        M = m ? b : x[0];
      if (hs(T)) h({ many: [T], one: M }, !0, _, S, !0);
      else {
        var D = s ? q({ delay: s(_, S) }, u) : u;
        Qh(T, M, D), a(T, M, T, M, D);
      }
    } else
      for (
        var A = q(
            {
              dividePath: ER[e],
              individualDelay:
                s &&
                function (V, F, B, $) {
                  return s(V + _, S);
                },
            },
            u
          ),
          L = m ? PR(x, b, A) : RR(b, x, A),
          I = L.fromIndividuals,
          P = L.toIndividuals,
          E = I.length,
          R = 0;
        R < E;
        R++
      ) {
        var D = s ? q({ delay: s(R, E) }, u) : u;
        a(I[R], P[R], m ? x[R] : y.one, m ? y.one : x[R], D);
      }
  }
  for (
    var c = l ? l === r : r.length > t.length,
      v = l ? lg(f, l) : lg(c ? t : r, [c ? r : t]),
      d = 0,
      g = 0;
    g < v.length;
    g++
  )
    d += v[g].many.length;
  for (var p = 0, g = 0; g < v.length; g++)
    h(v[g], c, p, d), (p += v[g].many.length);
}
function Qr(r) {
  if (!r) return [];
  if (N(r)) {
    for (var t = [], e = 0; e < r.length; e++) t.push(Qr(r[e]));
    return t;
  }
  var n = [];
  return (
    r.traverse(function (i) {
      i instanceof rt &&
        !i.disableMorphing &&
        !i.invisible &&
        !i.ignore &&
        n.push(i);
    }),
    n
  );
}
var Q_ = 1e4,
  OR = gt();
function kR(r) {
  for (var t = r.dimensions, e = 0; e < t.length; e++) {
    var n = r.getDimensionInfo(t[e]);
    if (n && n.otherDims.itemGroupId === 0) return t[e];
  }
}
function fg(r) {
  var t = [];
  return (
    C(r, function (e) {
      var n = e.data;
      if (!(n.count() > Q_))
        for (var i = n.getIndices(), a = kR(n), o = 0; o < i.length; o++)
          t.push({ data: n, dim: e.dim || a, divide: e.divide, dataIndex: o });
    }),
    t
  );
}
function yl(r, t, e) {
  r.traverse(function (n) {
    n instanceof rt &&
      Ke(n, { style: { opacity: 0 } }, t, { dataIndex: e, isFrom: !0 });
  });
}
function ml(r) {
  if (r.parent) {
    var t = r.getComputedTransform();
    r.setLocalTransform(t), r.parent.remove(r);
  }
}
function On(r) {
  r.stopAnimation(),
    r.isGroup &&
      r.traverse(function (t) {
        t.stopAnimation();
      });
}
function BR(r, t, e) {
  var n = Ms("update", e, t);
  n &&
    r.traverse(function (i) {
      if (i instanceof ui) {
        var a = fb(i);
        a && i.animateFrom({ style: a }, n);
      }
    });
}
function NR(r, t) {
  var e = r.length;
  if (e !== t.length) return !1;
  for (var n = 0; n < e; n++) {
    var i = r[n],
      a = t[n];
    if (i.data.getId(i.dataIndex) !== a.data.getId(a.dataIndex)) return !1;
  }
  return !0;
}
function J_(r, t, e) {
  var n = fg(r),
    i = fg(t);
  function a(y, m, _, S, w) {
    (_ || y) &&
      m.animateFrom(
        { style: _ && _ !== y ? k(k({}, _.style), y.style) : y.style },
        w
      );
  }
  function o(y) {
    for (var m = 0; m < y.length; m++) if (y[m].dim) return y[m].dim;
  }
  var s = o(n),
    u = o(i),
    l = !1;
  function f(y, m) {
    return function (_) {
      var S = _.data,
        w = _.dataIndex;
      if (m) return S.getId(w);
      var x = S.hostModel && S.hostModel.get("dataGroupId"),
        b = y ? s || u : u || s,
        T = b && S.getDimensionInfo(b),
        M = T && T.ordinalMeta;
      if (T) {
        var D = S.get(T.name, w);
        return (M && M.categories[D]) || D + "";
      }
      var A = S.getRawDataItem(w);
      return A && A.groupId ? A.groupId + "" : x || S.getId(w);
    };
  }
  var h = NR(n, i),
    c = {};
  if (!h)
    for (var v = 0; v < i.length; v++) {
      var d = i[v],
        g = d.data.getItemGraphicEl(d.dataIndex);
      g && (c[g.id] = !0);
    }
  function p(y, m) {
    var _ = n[m],
      S = i[y],
      w = S.data.hostModel,
      x = _.data.getItemGraphicEl(_.dataIndex),
      b = S.data.getItemGraphicEl(S.dataIndex);
    if (x === b) {
      b && BR(b, S.dataIndex, w);
      return;
    }
    (x && c[x.id]) ||
      (b &&
        (On(b),
        x
          ? (On(x), ml(x), (l = !0), gl(Qr(x), Qr(b), S.divide, w, y, a))
          : yl(b, w, y)));
  }
  new ma(n, i, f(!0, h), f(!1, h), null, "multiple")
    .update(p)
    .updateManyToOne(function (y, m) {
      var _ = i[y],
        S = _.data,
        w = S.hostModel,
        x = S.getItemGraphicEl(_.dataIndex),
        b = xt(
          z(m, function (T) {
            return n[T].data.getItemGraphicEl(n[T].dataIndex);
          }),
          function (T) {
            return T && T !== x && !c[T.id];
          }
        );
      x &&
        (On(x),
        b.length
          ? (C(b, function (T) {
              On(T), ml(T);
            }),
            (l = !0),
            gl(Qr(b), Qr(x), _.divide, w, y, a))
          : yl(x, w, _.dataIndex));
    })
    .updateOneToMany(function (y, m) {
      var _ = n[m],
        S = _.data.getItemGraphicEl(_.dataIndex);
      if (!(S && c[S.id])) {
        var w = xt(
            z(y, function (b) {
              return i[b].data.getItemGraphicEl(i[b].dataIndex);
            }),
            function (b) {
              return b && b !== S;
            }
          ),
          x = i[y[0]].data.hostModel;
        w.length &&
          (C(w, function (b) {
            return On(b);
          }),
          S
            ? (On(S), ml(S), (l = !0), gl(Qr(S), Qr(w), _.divide, x, y[0], a))
            : C(w, function (b) {
                return yl(b, x, y[0]);
              }));
      }
    })
    .updateManyToMany(function (y, m) {
      new ma(
        m,
        y,
        function (_) {
          return n[_].data.getId(n[_].dataIndex);
        },
        function (_) {
          return i[_].data.getId(i[_].dataIndex);
        }
      )
        .update(function (_, S) {
          p(y[_], m[S]);
        })
        .execute();
    })
    .execute(),
    l &&
      C(t, function (y) {
        var m = y.data,
          _ = m.hostModel,
          S = _ && e.getViewOfSeriesModel(_),
          w = Ms("update", _, 0);
        S &&
          _.isAnimationEnabled() &&
          w &&
          w.duration > 0 &&
          S.group.traverse(function (x) {
            x instanceof rt &&
              !x.animators.length &&
              x.animateFrom({ style: { opacity: 0 } }, w);
          });
      });
}
function hg(r) {
  var t = r.getModel("universalTransition").get("seriesKey");
  return t || r.id;
}
function vg(r) {
  return N(r) ? r.sort().join(",") : r;
}
function hr(r) {
  if (r.hostModel)
    return r.hostModel.getModel("universalTransition").get("divideShape");
}
function FR(r, t) {
  var e = W(),
    n = W(),
    i = W();
  return (
    C(r.oldSeries, function (a, o) {
      var s = r.oldData[o],
        u = hg(a),
        l = vg(u);
      n.set(l, s),
        N(u) &&
          C(u, function (f) {
            i.set(f, { data: s, key: l });
          });
    }),
    C(t.updatedSeries, function (a) {
      if (a.isUniversalTransitionEnabled() && a.isAnimationEnabled()) {
        var o = a.getData(),
          s = hg(a),
          u = vg(s),
          l = n.get(u);
        if (l)
          e.set(u, {
            oldSeries: [{ divide: hr(l), data: l }],
            newSeries: [{ divide: hr(o), data: o }],
          });
        else if (N(s)) {
          var f = [];
          C(s, function (v) {
            var d = n.get(v);
            d && f.push({ divide: hr(d), data: d });
          }),
            f.length &&
              e.set(u, {
                oldSeries: f,
                newSeries: [{ data: o, divide: hr(o) }],
              });
        } else {
          var h = i.get(s);
          if (h) {
            var c = e.get(h.key);
            c ||
              ((c = {
                oldSeries: [{ data: h.data, divide: hr(h.data) }],
                newSeries: [],
              }),
              e.set(h.key, c)),
              c.newSeries.push({ data: o, divide: hr(o) });
          }
        }
      }
    }),
    e
  );
}
function cg(r, t) {
  for (var e = 0; e < r.length; e++) {
    var n =
      (t.seriesIndex != null && t.seriesIndex === r[e].seriesIndex) ||
      (t.seriesId != null && t.seriesId === r[e].id);
    if (n) return e;
  }
}
function zR(r, t, e, n) {
  var i = [],
    a = [];
  C(_t(r.from), function (o) {
    var s = cg(t.oldSeries, o);
    s >= 0 &&
      i.push({
        data: t.oldData[s],
        divide: hr(t.oldData[s]),
        dim: o.dimension,
      });
  }),
    C(_t(r.to), function (o) {
      var s = cg(e.updatedSeries, o);
      if (s >= 0) {
        var u = e.updatedSeries[s].getData();
        a.push({ data: u, divide: hr(u), dim: o.dimension });
      }
    }),
    i.length > 0 && a.length > 0 && J_(i, a, n);
}
function nE(r) {
  r.registerUpdateLifecycle("series:beforeupdate", function (t, e, n) {
    C(_t(n.seriesTransition), function (i) {
      C(_t(i.to), function (a) {
        for (var o = n.updatedSeries, s = 0; s < o.length; s++)
          ((a.seriesIndex != null && a.seriesIndex === o[s].seriesIndex) ||
            (a.seriesId != null && a.seriesId === o[s].id)) &&
            (o[s][ko] = !0);
      });
    });
  }),
    r.registerUpdateLifecycle("series:transition", function (t, e, n) {
      var i = OR(e);
      if (i.oldSeries && n.updatedSeries && n.optionChanged) {
        var a = n.seriesTransition;
        if (a)
          C(_t(a), function (c) {
            zR(c, i, n, e);
          });
        else {
          var o = FR(i, n);
          C(o.keys(), function (c) {
            var v = o.get(c);
            J_(v.oldSeries, v.newSeries, e);
          });
        }
        C(n.updatedSeries, function (c) {
          c[ko] && (c[ko] = !1);
        });
      }
      for (
        var s = t.getSeries(),
          u = (i.oldSeries = []),
          l = (i.oldData = []),
          f = 0;
        f < s.length;
        f++
      ) {
        var h = s[f].getData();
        h.count() < Q_ && (u.push(s[f]), l.push(h));
      }
    });
}
function dg(r, t, e) {
  var n = dn.createCanvas(),
    i = t.getWidth(),
    a = t.getHeight(),
    o = n.style;
  return (
    o &&
      ((o.position = "absolute"),
      (o.left = "0"),
      (o.top = "0"),
      (o.width = i + "px"),
      (o.height = a + "px"),
      n.setAttribute("data-zr-dom-id", r)),
    (n.width = i * e),
    (n.height = a * e),
    n
  );
}
var GR = (function (r) {
  O(t, r);
  function t(e, n, i) {
    var a = r.call(this) || this;
    (a.motionBlur = !1),
      (a.lastFrameAlpha = 0.7),
      (a.dpr = 1),
      (a.virtual = !1),
      (a.config = {}),
      (a.incremental = !1),
      (a.zlevel = 0),
      (a.maxRepaintRectCount = 5),
      (a.__dirty = !0),
      (a.__firstTimePaint = !0),
      (a.__used = !1),
      (a.__drawIndex = 0),
      (a.__startIndex = 0),
      (a.__endIndex = 0),
      (a.__prevStartIndex = null),
      (a.__prevEndIndex = null);
    var o;
    (i = i || $o),
      typeof e == "string" ? (o = dg(e, n, i)) : H(e) && ((o = e), (e = o.id)),
      (a.id = e),
      (a.dom = o);
    var s = o.style;
    return (
      s &&
        (xg(o),
        (o.onselectstart = function () {
          return !1;
        }),
        (s.padding = "0"),
        (s.margin = "0"),
        (s.borderWidth = "0")),
      (a.painter = n),
      (a.dpr = i),
      a
    );
  }
  return (
    (t.prototype.getElementCount = function () {
      return this.__endIndex - this.__startIndex;
    }),
    (t.prototype.afterBrush = function () {
      (this.__prevStartIndex = this.__startIndex),
        (this.__prevEndIndex = this.__endIndex);
    }),
    (t.prototype.initContext = function () {
      (this.ctx = this.dom.getContext("2d")), (this.ctx.dpr = this.dpr);
    }),
    (t.prototype.setUnpainted = function () {
      this.__firstTimePaint = !0;
    }),
    (t.prototype.createBackBuffer = function () {
      var e = this.dpr;
      (this.domBack = dg("back-" + this.id, this.painter, e)),
        (this.ctxBack = this.domBack.getContext("2d")),
        e !== 1 && this.ctxBack.scale(e, e);
    }),
    (t.prototype.createRepaintRects = function (e, n, i, a) {
      if (this.__firstTimePaint) return (this.__firstTimePaint = !1), null;
      var o = [],
        s = this.maxRepaintRectCount,
        u = !1,
        l = new at(0, 0, 0, 0);
      function f(m) {
        if (!(!m.isFinite() || m.isZero()))
          if (o.length === 0) {
            var _ = new at(0, 0, 0, 0);
            _.copy(m), o.push(_);
          } else {
            for (var S = !1, w = 1 / 0, x = 0, b = 0; b < o.length; ++b) {
              var T = o[b];
              if (T.intersect(m)) {
                var M = new at(0, 0, 0, 0);
                M.copy(T), M.union(m), (o[b] = M), (S = !0);
                break;
              } else if (u) {
                l.copy(m), l.union(T);
                var D = m.width * m.height,
                  A = T.width * T.height,
                  L = l.width * l.height,
                  I = L - D - A;
                I < w && ((w = I), (x = b));
              }
            }
            if ((u && (o[x].union(m), (S = !0)), !S)) {
              var _ = new at(0, 0, 0, 0);
              _.copy(m), o.push(_);
            }
            u || (u = o.length >= s);
          }
      }
      for (var h = this.__startIndex; h < this.__endIndex; ++h) {
        var c = e[h];
        if (c) {
          var v = c.shouldBePainted(i, a, !0, !0),
            d =
              c.__isRendered && (c.__dirty & Qt || !v)
                ? c.getPrevPaintRect()
                : null;
          d && f(d);
          var g =
            v && (c.__dirty & Qt || !c.__isRendered) ? c.getPaintRect() : null;
          g && f(g);
        }
      }
      for (var h = this.__prevStartIndex; h < this.__prevEndIndex; ++h) {
        var c = n[h],
          v = c.shouldBePainted(i, a, !0, !0);
        if (c && (!v || !c.__zr) && c.__isRendered) {
          var d = c.getPrevPaintRect();
          d && f(d);
        }
      }
      var p;
      do {
        p = !1;
        for (var h = 0; h < o.length; ) {
          if (o[h].isZero()) {
            o.splice(h, 1);
            continue;
          }
          for (var y = h + 1; y < o.length; )
            o[h].intersect(o[y])
              ? ((p = !0), o[h].union(o[y]), o.splice(y, 1))
              : y++;
          h++;
        }
      } while (p);
      return (this._paintRects = o), o;
    }),
    (t.prototype.debugGetPaintRects = function () {
      return (this._paintRects || []).slice();
    }),
    (t.prototype.resize = function (e, n) {
      var i = this.dpr,
        a = this.dom,
        o = a.style,
        s = this.domBack;
      o && ((o.width = e + "px"), (o.height = n + "px")),
        (a.width = e * i),
        (a.height = n * i),
        s &&
          ((s.width = e * i),
          (s.height = n * i),
          i !== 1 && this.ctxBack.scale(i, i));
    }),
    (t.prototype.clear = function (e, n, i) {
      var a = this.dom,
        o = this.ctx,
        s = a.width,
        u = a.height;
      n = n || this.clearColor;
      var l = this.motionBlur && !e,
        f = this.lastFrameAlpha,
        h = this.dpr,
        c = this;
      l &&
        (this.domBack || this.createBackBuffer(),
        (this.ctxBack.globalCompositeOperation = "copy"),
        this.ctxBack.drawImage(a, 0, 0, s / h, u / h));
      var v = this.domBack;
      function d(g, p, y, m) {
        if ((o.clearRect(g, p, y, m), n && n !== "transparent")) {
          var _ = void 0;
          ps(n)
            ? ((_ =
                n.__canvasGradient ||
                sf(o, n, { x: 0, y: 0, width: y, height: m })),
              (n.__canvasGradient = _))
            : d1(n) &&
              (_ = uf(o, n, {
                dirty: function () {
                  c.setUnpainted(), c.__painter.refresh();
                },
              })),
            o.save(),
            (o.fillStyle = _ || n),
            o.fillRect(g, p, y, m),
            o.restore();
        }
        l &&
          (o.save(),
          (o.globalAlpha = f),
          o.drawImage(v, g, p, y, m),
          o.restore());
      }
      !i || l
        ? d(0, 0, s, u)
        : i.length &&
          C(i, function (g) {
            d(g.x * h, g.y * h, g.width * h, g.height * h);
          });
    }),
    t
  );
})(ce);
const _l = GR;
var pg = 1e5,
  qr = 314159,
  So = 0.01,
  HR = 0.001;
function VR(r) {
  return r
    ? r.__builtin__
      ? !0
      : !(typeof r.resize != "function" || typeof r.refresh != "function")
    : !1;
}
function WR(r, t) {
  var e = document.createElement("div");
  return (
    (e.style.cssText =
      [
        "position:relative",
        "width:" + r + "px",
        "height:" + t + "px",
        "padding:0",
        "margin:0",
        "border-width:0",
      ].join(";") + ";"),
    e
  );
}
var UR = (function () {
  function r(t, e, n, i) {
    (this.type = "canvas"),
      (this._zlevelList = []),
      (this._prevDisplayList = []),
      (this._layers = {}),
      (this._layerConfig = {}),
      (this._needsManuallyCompositing = !1),
      (this.type = "canvas");
    var a = !t.nodeName || t.nodeName.toUpperCase() === "CANVAS";
    (this._opts = n = k({}, n || {})),
      (this.dpr = n.devicePixelRatio || $o),
      (this._singleCanvas = a),
      (this.root = t);
    var o = t.style;
    o && (xg(t), (t.innerHTML = "")), (this.storage = e);
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var u = this._layers;
    if (a) {
      var f = t,
        h = f.width,
        c = f.height;
      n.width != null && (h = n.width),
        n.height != null && (c = n.height),
        (this.dpr = n.devicePixelRatio || 1),
        (f.width = h * this.dpr),
        (f.height = c * this.dpr),
        (this._width = h),
        (this._height = c);
      var v = new _l(f, this, this.dpr);
      (v.__builtin__ = !0),
        v.initContext(),
        (u[qr] = v),
        (v.zlevel = qr),
        s.push(qr),
        (this._domRoot = t);
    } else {
      (this._width = so(t, 0, n)), (this._height = so(t, 1, n));
      var l = (this._domRoot = WR(this._width, this._height));
      t.appendChild(l);
    }
  }
  return (
    (r.prototype.getType = function () {
      return "canvas";
    }),
    (r.prototype.isSingleCanvas = function () {
      return this._singleCanvas;
    }),
    (r.prototype.getViewportRoot = function () {
      return this._domRoot;
    }),
    (r.prototype.getViewportRootOffset = function () {
      var t = this.getViewportRoot();
      if (t)
        return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 };
    }),
    (r.prototype.refresh = function (t) {
      var e = this.storage.getDisplayList(!0),
        n = this._prevDisplayList,
        i = this._zlevelList;
      (this._redrawId = Math.random()),
        this._paintList(e, n, t, this._redrawId);
      for (var a = 0; a < i.length; a++) {
        var o = i[a],
          s = this._layers[o];
        if (!s.__builtin__ && s.refresh) {
          var u = a === 0 ? this._backgroundColor : null;
          s.refresh(u);
        }
      }
      return (
        this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
      );
    }),
    (r.prototype.refreshHover = function () {
      this._paintHoverList(this.storage.getDisplayList(!1));
    }),
    (r.prototype._paintHoverList = function (t) {
      var e = t.length,
        n = this._hoverlayer;
      if ((n && n.clear(), !!e)) {
        for (
          var i = {
              inHover: !0,
              viewWidth: this._width,
              viewHeight: this._height,
            },
            a,
            o = 0;
          o < e;
          o++
        ) {
          var s = t[o];
          s.__inHover &&
            (n || (n = this._hoverlayer = this.getLayer(pg)),
            a || ((a = n.ctx), a.save()),
            tn(a, s, i, o === e - 1));
        }
        a && a.restore();
      }
    }),
    (r.prototype.getHoverLayer = function () {
      return this.getLayer(pg);
    }),
    (r.prototype.paintOne = function (t, e) {
      s0(t, e);
    }),
    (r.prototype._paintList = function (t, e, n, i) {
      if (this._redrawId === i) {
        (n = n || !1), this._updateLayerStatus(t);
        var a = this._doPaintList(t, e, n),
          o = a.finished,
          s = a.needsRefreshHover;
        if (
          (this._needsManuallyCompositing && this._compositeManually(),
          s && this._paintHoverList(t),
          o)
        )
          this.eachLayer(function (l) {
            l.afterBrush && l.afterBrush();
          });
        else {
          var u = this;
          Al(function () {
            u._paintList(t, e, n, i);
          });
        }
      }
    }),
    (r.prototype._compositeManually = function () {
      var t = this.getLayer(qr).ctx,
        e = this._domRoot.width,
        n = this._domRoot.height;
      t.clearRect(0, 0, e, n),
        this.eachBuiltinLayer(function (i) {
          i.virtual && t.drawImage(i.dom, 0, 0, e, n);
        });
    }),
    (r.prototype._doPaintList = function (t, e, n) {
      for (
        var i = this, a = [], o = this._opts.useDirtyRect, s = 0;
        s < this._zlevelList.length;
        s++
      ) {
        var u = this._zlevelList[s],
          l = this._layers[u];
        l.__builtin__ &&
          l !== this._hoverlayer &&
          (l.__dirty || n) &&
          a.push(l);
      }
      for (
        var f = !0,
          h = !1,
          c = function (g) {
            var p = a[g],
              y = p.ctx,
              m = o && p.createRepaintRects(t, e, v._width, v._height),
              _ = n ? p.__startIndex : p.__drawIndex,
              S = !n && p.incremental && Date.now,
              w = S && Date.now(),
              x = p.zlevel === v._zlevelList[0] ? v._backgroundColor : null;
            if (p.__startIndex === p.__endIndex) p.clear(!1, x, m);
            else if (_ === p.__startIndex) {
              var b = t[_];
              (!b.incremental || !b.notClear || n) && p.clear(!1, x, m);
            }
            _ === -1 &&
              (console.error("For some unknown reason. drawIndex is -1"),
              (_ = p.__startIndex));
            var T,
              M = function (I) {
                var P = {
                  inHover: !1,
                  allClipped: !1,
                  prevEl: null,
                  viewWidth: i._width,
                  viewHeight: i._height,
                };
                for (T = _; T < p.__endIndex; T++) {
                  var E = t[T];
                  if (
                    (E.__inHover && (h = !0),
                    i._doPaintEl(E, p, o, I, P, T === p.__endIndex - 1),
                    S)
                  ) {
                    var R = Date.now() - w;
                    if (R > 15) break;
                  }
                }
                P.prevElClipPaths && y.restore();
              };
            if (m)
              if (m.length === 0) T = p.__endIndex;
              else
                for (var D = v.dpr, A = 0; A < m.length; ++A) {
                  var L = m[A];
                  y.save(),
                    y.beginPath(),
                    y.rect(L.x * D, L.y * D, L.width * D, L.height * D),
                    y.clip(),
                    M(L),
                    y.restore();
                }
            else y.save(), M(), y.restore();
            (p.__drawIndex = T), p.__drawIndex < p.__endIndex && (f = !1);
          },
          v = this,
          d = 0;
        d < a.length;
        d++
      )
        c(d);
      return (
        j.wxa &&
          C(this._layers, function (g) {
            g && g.ctx && g.ctx.draw && g.ctx.draw();
          }),
        { finished: f, needsRefreshHover: h }
      );
    }),
    (r.prototype._doPaintEl = function (t, e, n, i, a, o) {
      var s = e.ctx;
      if (n) {
        var u = t.getPaintRect();
        (!i || (u && u.intersect(i))) &&
          (tn(s, t, a, o), t.setPrevPaintRect(u));
      } else tn(s, t, a, o);
    }),
    (r.prototype.getLayer = function (t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = qr);
      var n = this._layers[t];
      return (
        n ||
          ((n = new _l("zr_" + t, this, this.dpr)),
          (n.zlevel = t),
          (n.__builtin__ = !0),
          this._layerConfig[t]
            ? Q(n, this._layerConfig[t], !0)
            : this._layerConfig[t - So] && Q(n, this._layerConfig[t - So], !0),
          e && (n.virtual = e),
          this.insertLayer(t, n),
          n.initContext()),
        n
      );
    }),
    (r.prototype.insertLayer = function (t, e) {
      var n = this._layers,
        i = this._zlevelList,
        a = i.length,
        o = this._domRoot,
        s = null,
        u = -1;
      if (!n[t] && !!VR(e)) {
        if (a > 0 && t > i[0]) {
          for (u = 0; u < a - 1 && !(i[u] < t && i[u + 1] > t); u++);
          s = n[i[u]];
        }
        if ((i.splice(u + 1, 0, t), (n[t] = e), !e.virtual))
          if (s) {
            var l = s.dom;
            l.nextSibling
              ? o.insertBefore(e.dom, l.nextSibling)
              : o.appendChild(e.dom);
          } else
            o.firstChild
              ? o.insertBefore(e.dom, o.firstChild)
              : o.appendChild(e.dom);
        e.__painter = this;
      }
    }),
    (r.prototype.eachLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var a = n[i];
        t.call(e, this._layers[a], a);
      }
    }),
    (r.prototype.eachBuiltinLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var a = n[i],
          o = this._layers[a];
        o.__builtin__ && t.call(e, o, a);
      }
    }),
    (r.prototype.eachOtherLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var a = n[i],
          o = this._layers[a];
        o.__builtin__ || t.call(e, o, a);
      }
    }),
    (r.prototype.getLayers = function () {
      return this._layers;
    }),
    (r.prototype._updateLayerStatus = function (t) {
      this.eachBuiltinLayer(function (h, c) {
        h.__dirty = h.__used = !1;
      });
      function e(h) {
        a && (a.__endIndex !== h && (a.__dirty = !0), (a.__endIndex = h));
      }
      if (this._singleCanvas)
        for (var n = 1; n < t.length; n++) {
          var i = t[n];
          if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
            this._needsManuallyCompositing = !0;
            break;
          }
        }
      var a = null,
        o = 0,
        s,
        u;
      for (u = 0; u < t.length; u++) {
        var i = t[u],
          l = i.zlevel,
          f = void 0;
        s !== l && ((s = l), (o = 0)),
          i.incremental
            ? ((f = this.getLayer(l + HR, this._needsManuallyCompositing)),
              (f.incremental = !0),
              (o = 1))
            : (f = this.getLayer(
                l + (o > 0 ? So : 0),
                this._needsManuallyCompositing
              )),
          f.__builtin__ ||
            Gf("ZLevel " + l + " has been used by unkown layer " + f.id),
          f !== a &&
            ((f.__used = !0),
            f.__startIndex !== u && (f.__dirty = !0),
            (f.__startIndex = u),
            f.incremental ? (f.__drawIndex = -1) : (f.__drawIndex = u),
            e(u),
            (a = f)),
          i.__dirty & Qt &&
            !i.__inHover &&
            ((f.__dirty = !0),
            f.incremental && f.__drawIndex < 0 && (f.__drawIndex = u));
      }
      e(u),
        this.eachBuiltinLayer(function (h, c) {
          !h.__used &&
            h.getElementCount() > 0 &&
            ((h.__dirty = !0),
            (h.__startIndex = h.__endIndex = h.__drawIndex = 0)),
            h.__dirty && h.__drawIndex < 0 && (h.__drawIndex = h.__startIndex);
        });
    }),
    (r.prototype.clear = function () {
      return this.eachBuiltinLayer(this._clearLayer), this;
    }),
    (r.prototype._clearLayer = function (t) {
      t.clear();
    }),
    (r.prototype.setBackgroundColor = function (t) {
      (this._backgroundColor = t),
        C(this._layers, function (e) {
          e.setUnpainted();
        });
    }),
    (r.prototype.configLayer = function (t, e) {
      if (e) {
        var n = this._layerConfig;
        n[t] ? Q(n[t], e, !0) : (n[t] = e);
        for (var i = 0; i < this._zlevelList.length; i++) {
          var a = this._zlevelList[i];
          if (a === t || a === t + So) {
            var o = this._layers[a];
            Q(o, n[t], !0);
          }
        }
      }
    }),
    (r.prototype.delLayer = function (t) {
      var e = this._layers,
        n = this._zlevelList,
        i = e[t];
      !i ||
        (i.dom.parentNode.removeChild(i.dom),
        delete e[t],
        n.splice(J(n, t), 1));
    }),
    (r.prototype.resize = function (t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;
        n.style.display = "none";
        var i = this._opts,
          a = this.root;
        if (
          (t != null && (i.width = t),
          e != null && (i.height = e),
          (t = so(a, 0, i)),
          (e = so(a, 1, i)),
          (n.style.display = ""),
          this._width !== t || e !== this._height)
        ) {
          (n.style.width = t + "px"), (n.style.height = e + "px");
          for (var o in this._layers)
            this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
          this.refresh(!0);
        }
        (this._width = t), (this._height = e);
      } else {
        if (t == null || e == null) return;
        (this._width = t), (this._height = e), this.getLayer(qr).resize(t, e);
      }
      return this;
    }),
    (r.prototype.clearLayer = function (t) {
      var e = this._layers[t];
      e && e.clear();
    }),
    (r.prototype.dispose = function () {
      (this.root.innerHTML = ""),
        (this.root = this.storage = this._domRoot = this._layers = null);
    }),
    (r.prototype.getRenderedCanvas = function (t) {
      if (((t = t || {}), this._singleCanvas && !this._compositeManually))
        return this._layers[qr].dom;
      var e = new _l("image", this, t.pixelRatio || this.dpr);
      e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor);
      var n = e.ctx;
      if (t.pixelRatio <= this.dpr) {
        this.refresh();
        var i = e.dom.width,
          a = e.dom.height;
        this.eachLayer(function (h) {
          h.__builtin__
            ? n.drawImage(h.dom, 0, 0, i, a)
            : h.renderToCanvas && (n.save(), h.renderToCanvas(n), n.restore());
        });
      } else
        for (
          var o = {
              inHover: !1,
              viewWidth: this._width,
              viewHeight: this._height,
            },
            s = this.storage.getDisplayList(!0),
            u = 0,
            l = s.length;
          u < l;
          u++
        ) {
          var f = s[u];
          tn(n, f, o, u === l - 1);
        }
      return e.dom;
    }),
    (r.prototype.getWidth = function () {
      return this._width;
    }),
    (r.prototype.getHeight = function () {
      return this._height;
    }),
    r
  );
})();
const YR = UR;
function iE(r) {
  r.registerPainter("canvas", YR);
}
export {
  JR as a,
  QR as b,
  qR as c,
  rE as d,
  eE as e,
  jR as f,
  KR as g,
  tE as h,
  XR as i,
  ZR as j,
  nE as k,
  iE as l,
  $R as m,
  Be as u,
};
