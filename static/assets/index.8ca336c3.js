var ae =
    (typeof globalThis < "u" && globalThis) ||
    (typeof self < "u" && self) ||
    (typeof ae < "u" && ae),
  fe = {
    searchParams: "URLSearchParams" in ae,
    iterable: "Symbol" in ae && "iterator" in Symbol,
    blob:
      "FileReader" in ae &&
      "Blob" in ae &&
      (function () {
        try {
          return new Blob(), !0;
        } catch {
          return !1;
        }
      })(),
    formData: "FormData" in ae,
    arrayBuffer: "ArrayBuffer" in ae,
  };
function $l(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (fe.arrayBuffer)
  var Cl = [
      "[object Int8Array]",
      "[object Uint8Array]",
      "[object Uint8ClampedArray]",
      "[object Int16Array]",
      "[object Uint16Array]",
      "[object Int32Array]",
      "[object Uint32Array]",
      "[object Float32Array]",
      "[object Float64Array]",
    ],
    Dl =
      ArrayBuffer.isView ||
      function (e) {
        return e && Cl.indexOf(Object.prototype.toString.call(e)) > -1;
      };
function un(e) {
  if (
    (typeof e != "string" && (e = String(e)),
    /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
  )
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function ci(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function li(e) {
  var t = {
    next: function () {
      var n = e.shift();
      return { done: n === void 0, value: n };
    },
  };
  return (
    fe.iterable &&
      (t[Symbol.iterator] = function () {
        return t;
      }),
    t
  );
}
function Z(e) {
  (this.map = {}),
    e instanceof Z
      ? e.forEach(function (t, n) {
          this.append(n, t);
        }, this)
      : Array.isArray(e)
      ? e.forEach(function (t) {
          this.append(t[0], t[1]);
        }, this)
      : e &&
        Object.getOwnPropertyNames(e).forEach(function (t) {
          this.append(t, e[t]);
        }, this);
}
Z.prototype.append = function (e, t) {
  (e = un(e)), (t = ci(t));
  var n = this.map[e];
  this.map[e] = n ? n + ", " + t : t;
};
Z.prototype.delete = function (e) {
  delete this.map[un(e)];
};
Z.prototype.get = function (e) {
  return (e = un(e)), this.has(e) ? this.map[e] : null;
};
Z.prototype.has = function (e) {
  return this.map.hasOwnProperty(un(e));
};
Z.prototype.set = function (e, t) {
  this.map[un(e)] = ci(t);
};
Z.prototype.forEach = function (e, t) {
  for (var n in this.map)
    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
};
Z.prototype.keys = function () {
  var e = [];
  return (
    this.forEach(function (t, n) {
      e.push(n);
    }),
    li(e)
  );
};
Z.prototype.values = function () {
  var e = [];
  return (
    this.forEach(function (t) {
      e.push(t);
    }),
    li(e)
  );
};
Z.prototype.entries = function () {
  var e = [];
  return (
    this.forEach(function (t, n) {
      e.push([n, t]);
    }),
    li(e)
  );
};
fe.iterable && (Z.prototype[Symbol.iterator] = Z.prototype.entries);
function yr(e) {
  if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
  e.bodyUsed = !0;
}
function $o(e) {
  return new Promise(function (t, n) {
    (e.onload = function () {
      t(e.result);
    }),
      (e.onerror = function () {
        n(e.error);
      });
  });
}
function Nl(e) {
  var t = new FileReader(),
    n = $o(t);
  return t.readAsArrayBuffer(e), n;
}
function Ll(e) {
  var t = new FileReader(),
    n = $o(t);
  return t.readAsText(e), n;
}
function Ml(e) {
  for (
    var t = new Uint8Array(e), n = new Array(t.length), r = 0;
    r < t.length;
    r++
  )
    n[r] = String.fromCharCode(t[r]);
  return n.join("");
}
function fs(e) {
  if (e.slice) return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function Co() {
  return (
    (this.bodyUsed = !1),
    (this._initBody = function (e) {
      (this.bodyUsed = this.bodyUsed),
        (this._bodyInit = e),
        e
          ? typeof e == "string"
            ? (this._bodyText = e)
            : fe.blob && Blob.prototype.isPrototypeOf(e)
            ? (this._bodyBlob = e)
            : fe.formData && FormData.prototype.isPrototypeOf(e)
            ? (this._bodyFormData = e)
            : fe.searchParams && URLSearchParams.prototype.isPrototypeOf(e)
            ? (this._bodyText = e.toString())
            : fe.arrayBuffer && fe.blob && $l(e)
            ? ((this._bodyArrayBuffer = fs(e.buffer)),
              (this._bodyInit = new Blob([this._bodyArrayBuffer])))
            : fe.arrayBuffer &&
              (ArrayBuffer.prototype.isPrototypeOf(e) || Dl(e))
            ? (this._bodyArrayBuffer = fs(e))
            : (this._bodyText = e = Object.prototype.toString.call(e))
          : (this._bodyText = ""),
        this.headers.get("content-type") ||
          (typeof e == "string"
            ? this.headers.set("content-type", "text/plain;charset=UTF-8")
            : this._bodyBlob && this._bodyBlob.type
            ? this.headers.set("content-type", this._bodyBlob.type)
            : fe.searchParams &&
              URLSearchParams.prototype.isPrototypeOf(e) &&
              this.headers.set(
                "content-type",
                "application/x-www-form-urlencoded;charset=UTF-8"
              ));
    }),
    fe.blob &&
      ((this.blob = function () {
        var e = yr(this);
        if (e) return e;
        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
        if (this._bodyArrayBuffer)
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        if (this._bodyFormData)
          throw new Error("could not read FormData body as blob");
        return Promise.resolve(new Blob([this._bodyText]));
      }),
      (this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          var e = yr(this);
          return (
            e ||
            (ArrayBuffer.isView(this._bodyArrayBuffer)
              ? Promise.resolve(
                  this._bodyArrayBuffer.buffer.slice(
                    this._bodyArrayBuffer.byteOffset,
                    this._bodyArrayBuffer.byteOffset +
                      this._bodyArrayBuffer.byteLength
                  )
                )
              : Promise.resolve(this._bodyArrayBuffer))
          );
        } else return this.blob().then(Nl);
      })),
    (this.text = function () {
      var e = yr(this);
      if (e) return e;
      if (this._bodyBlob) return Ll(this._bodyBlob);
      if (this._bodyArrayBuffer)
        return Promise.resolve(Ml(this._bodyArrayBuffer));
      if (this._bodyFormData)
        throw new Error("could not read FormData body as text");
      return Promise.resolve(this._bodyText);
    }),
    fe.formData &&
      (this.formData = function () {
        return this.text().then(kl);
      }),
    (this.json = function () {
      return this.text().then(JSON.parse);
    }),
    this
  );
}
var Il = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
function Pl(e) {
  var t = e.toUpperCase();
  return Il.indexOf(t) > -1 ? t : e;
}
function ht(e, t) {
  if (!(this instanceof ht))
    throw new TypeError(
      'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
    );
  t = t || {};
  var n = t.body;
  if (e instanceof ht) {
    if (e.bodyUsed) throw new TypeError("Already read");
    (this.url = e.url),
      (this.credentials = e.credentials),
      t.headers || (this.headers = new Z(e.headers)),
      (this.method = e.method),
      (this.mode = e.mode),
      (this.signal = e.signal),
      !n && e._bodyInit != null && ((n = e._bodyInit), (e.bodyUsed = !0));
  } else this.url = String(e);
  if (
    ((this.credentials = t.credentials || this.credentials || "same-origin"),
    (t.headers || !this.headers) && (this.headers = new Z(t.headers)),
    (this.method = Pl(t.method || this.method || "GET")),
    (this.mode = t.mode || this.mode || null),
    (this.signal = t.signal || this.signal),
    (this.referrer = null),
    (this.method === "GET" || this.method === "HEAD") && n)
  )
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (
    (this._initBody(n),
    (this.method === "GET" || this.method === "HEAD") &&
      (t.cache === "no-store" || t.cache === "no-cache"))
  ) {
    var r = /([?&])_=[^&]*/;
    if (r.test(this.url))
      this.url = this.url.replace(r, "$1_=" + new Date().getTime());
    else {
      var i = /\?/;
      this.url += (i.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
    }
  }
}
ht.prototype.clone = function () {
  return new ht(this, { body: this._bodyInit });
};
function kl(e) {
  var t = new FormData();
  return (
    e
      .trim()
      .split("&")
      .forEach(function (n) {
        if (n) {
          var r = n.split("="),
            i = r.shift().replace(/\+/g, " "),
            o = r.join("=").replace(/\+/g, " ");
          t.append(decodeURIComponent(i), decodeURIComponent(o));
        }
      }),
    t
  );
}
function Rl(e) {
  var t = new Z(),
    n = e.replace(/\r?\n[\t ]+/g, " ");
  return (
    n
      .split("\r")
      .map(function (r) {
        return r.indexOf(`
`) === 0
          ? r.substr(1, r.length)
          : r;
      })
      .forEach(function (r) {
        var i = r.split(":"),
          o = i.shift().trim();
        if (o) {
          var a = i.join(":").trim();
          t.append(o, a);
        }
      }),
    t
  );
}
Co.call(ht.prototype);
function Me(e, t) {
  if (!(this instanceof Me))
    throw new TypeError(
      'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
    );
  t || (t = {}),
    (this.type = "default"),
    (this.status = t.status === void 0 ? 200 : t.status),
    (this.ok = this.status >= 200 && this.status < 300),
    (this.statusText = t.statusText === void 0 ? "" : "" + t.statusText),
    (this.headers = new Z(t.headers)),
    (this.url = t.url || ""),
    this._initBody(e);
}
Co.call(Me.prototype);
Me.prototype.clone = function () {
  return new Me(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Z(this.headers),
    url: this.url,
  });
};
Me.error = function () {
  var e = new Me(null, { status: 0, statusText: "" });
  return (e.type = "error"), e;
};
var Hl = [301, 302, 303, 307, 308];
Me.redirect = function (e, t) {
  if (Hl.indexOf(t) === -1) throw new RangeError("Invalid status code");
  return new Me(null, { status: t, headers: { location: e } });
};
var st = ae.DOMException;
try {
  new st();
} catch {
  (st = function (t, n) {
    (this.message = t), (this.name = n);
    var r = Error(t);
    this.stack = r.stack;
  }),
    (st.prototype = Object.create(Error.prototype)),
    (st.prototype.constructor = st);
}
function Do(e, t) {
  return new Promise(function (n, r) {
    var i = new ht(e, t);
    if (i.signal && i.signal.aborted) return r(new st("Aborted", "AbortError"));
    var o = new XMLHttpRequest();
    function a() {
      o.abort();
    }
    (o.onload = function () {
      var f = {
        status: o.status,
        statusText: o.statusText,
        headers: Rl(o.getAllResponseHeaders() || ""),
      };
      f.url =
        "responseURL" in o ? o.responseURL : f.headers.get("X-Request-URL");
      var d = "response" in o ? o.response : o.responseText;
      setTimeout(function () {
        n(new Me(d, f));
      }, 0);
    }),
      (o.onerror = function () {
        setTimeout(function () {
          r(new TypeError("Network request failed"));
        }, 0);
      }),
      (o.ontimeout = function () {
        setTimeout(function () {
          r(new TypeError("Network request failed"));
        }, 0);
      }),
      (o.onabort = function () {
        setTimeout(function () {
          r(new st("Aborted", "AbortError"));
        }, 0);
      });
    function l(f) {
      try {
        return f === "" && ae.location.href ? ae.location.href : f;
      } catch {
        return f;
      }
    }
    o.open(i.method, l(i.url), !0),
      i.credentials === "include"
        ? (o.withCredentials = !0)
        : i.credentials === "omit" && (o.withCredentials = !1),
      "responseType" in o &&
        (fe.blob
          ? (o.responseType = "blob")
          : fe.arrayBuffer &&
            i.headers.get("Content-Type") &&
            i.headers
              .get("Content-Type")
              .indexOf("application/octet-stream") !== -1 &&
            (o.responseType = "arraybuffer")),
      t && typeof t.headers == "object" && !(t.headers instanceof Z)
        ? Object.getOwnPropertyNames(t.headers).forEach(function (f) {
            o.setRequestHeader(f, ci(t.headers[f]));
          })
        : i.headers.forEach(function (f, d) {
            o.setRequestHeader(d, f);
          }),
      i.signal &&
        (i.signal.addEventListener("abort", a),
        (o.onreadystatechange = function () {
          o.readyState === 4 && i.signal.removeEventListener("abort", a);
        })),
      o.send(typeof i._bodyInit > "u" ? null : i._bodyInit);
  });
}
Do.polyfill = !0;
ae.fetch ||
  ((ae.fetch = Do), (ae.Headers = Z), (ae.Request = ht), (ae.Response = Me));
const X = {
    urlRoot: "",
    csrfNonce: "",
    userMode: "",
    userName: "",
    userEmail: "",
    start: null,
    end: null,
    themeSettings: {},
    eventSounds: [
      "/themes/core/static/sounds/notification.webm",
      "/themes/core/static/sounds/notification.mp3",
    ],
  },
  Bl = window.fetch,
  Vl = (e, t) => (
    t === void 0 &&
      (t = { method: "GET", credentials: "same-origin", headers: {} }),
    (e = X.urlRoot + e),
    t.headers === void 0 && (t.headers = {}),
    (t.credentials = "same-origin"),
    (t.headers.Accept = "application/json"),
    (t.headers["Content-Type"] = "application/json"),
    (t.headers["CSRF-Token"] = X.csrfNonce),
    Bl(e, t)
  );
var Te =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  No = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Te, function () {
    var n = 1e3,
      r = 6e4,
      i = 36e5,
      o = "millisecond",
      a = "second",
      l = "minute",
      f = "hour",
      d = "day",
      g = "week",
      s = "month",
      c = "quarter",
      u = "year",
      h = "date",
      _ = "Invalid Date",
      p =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      m =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      b = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
        ordinal: function (w) {
          var E = ["th", "st", "nd", "rd"],
            v = w % 100;
          return "[" + w + (E[(v - 20) % 10] || E[v] || E[0]) + "]";
        },
      },
      O = function (w, E, v) {
        var A = String(w);
        return !A || A.length >= E
          ? w
          : "" + Array(E + 1 - A.length).join(v) + w;
      },
      D = {
        s: O,
        z: function (w) {
          var E = -w.utcOffset(),
            v = Math.abs(E),
            A = Math.floor(v / 60),
            y = v % 60;
          return (E <= 0 ? "+" : "-") + O(A, 2, "0") + ":" + O(y, 2, "0");
        },
        m: function w(E, v) {
          if (E.date() < v.date()) return -w(v, E);
          var A = 12 * (v.year() - E.year()) + (v.month() - E.month()),
            y = E.clone().add(A, s),
            x = v - y < 0,
            S = E.clone().add(A + (x ? -1 : 1), s);
          return +(-(A + (v - y) / (x ? y - S : S - y)) || 0);
        },
        a: function (w) {
          return w < 0 ? Math.ceil(w) || 0 : Math.floor(w);
        },
        p: function (w) {
          return (
            { M: s, y: u, w: g, d, D: h, h: f, m: l, s: a, ms: o, Q: c }[w] ||
            String(w || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (w) {
          return w === void 0;
        },
      },
      M = "en",
      I = {};
    I[M] = b;
    var V = function (w) {
        return w instanceof U;
      },
      F = function w(E, v, A) {
        var y;
        if (!E) return M;
        if (typeof E == "string") {
          var x = E.toLowerCase();
          I[x] && (y = x), v && ((I[x] = v), (y = x));
          var S = E.split("-");
          if (!y && S.length > 1) return w(S[0]);
        } else {
          var P = E.name;
          (I[P] = E), (y = P);
        }
        return !A && y && (M = y), y || (!A && M);
      },
      $ = function (w, E) {
        if (V(w)) return w.clone();
        var v = typeof E == "object" ? E : {};
        return (v.date = w), (v.args = arguments), new U(v);
      },
      N = D;
    (N.l = F),
      (N.i = V),
      (N.w = function (w, E) {
        return $(w, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
      });
    var U = (function () {
        function w(v) {
          (this.$L = F(v.locale, null, !0)), this.parse(v);
        }
        var E = w.prototype;
        return (
          (E.parse = function (v) {
            (this.$d = (function (A) {
              var y = A.date,
                x = A.utc;
              if (y === null) return new Date(NaN);
              if (N.u(y)) return new Date();
              if (y instanceof Date) return new Date(y);
              if (typeof y == "string" && !/Z$/i.test(y)) {
                var S = y.match(p);
                if (S) {
                  var P = S[2] - 1 || 0,
                    B = (S[7] || "0").substring(0, 3);
                  return x
                    ? new Date(
                        Date.UTC(
                          S[1],
                          P,
                          S[3] || 1,
                          S[4] || 0,
                          S[5] || 0,
                          S[6] || 0,
                          B
                        )
                      )
                    : new Date(
                        S[1],
                        P,
                        S[3] || 1,
                        S[4] || 0,
                        S[5] || 0,
                        S[6] || 0,
                        B
                      );
                }
              }
              return new Date(y);
            })(v)),
              (this.$x = v.x || {}),
              this.init();
          }),
          (E.init = function () {
            var v = this.$d;
            (this.$y = v.getFullYear()),
              (this.$M = v.getMonth()),
              (this.$D = v.getDate()),
              (this.$W = v.getDay()),
              (this.$H = v.getHours()),
              (this.$m = v.getMinutes()),
              (this.$s = v.getSeconds()),
              (this.$ms = v.getMilliseconds());
          }),
          (E.$utils = function () {
            return N;
          }),
          (E.isValid = function () {
            return this.$d.toString() !== _;
          }),
          (E.isSame = function (v, A) {
            var y = $(v);
            return this.startOf(A) <= y && y <= this.endOf(A);
          }),
          (E.isAfter = function (v, A) {
            return $(v) < this.startOf(A);
          }),
          (E.isBefore = function (v, A) {
            return this.endOf(A) < $(v);
          }),
          (E.$g = function (v, A, y) {
            return N.u(v) ? this[A] : this.set(y, v);
          }),
          (E.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (E.valueOf = function () {
            return this.$d.getTime();
          }),
          (E.startOf = function (v, A) {
            var y = this,
              x = !!N.u(A) || A,
              S = N.p(v),
              P = function (z, W) {
                var J = N.w(
                  y.$u ? Date.UTC(y.$y, W, z) : new Date(y.$y, W, z),
                  y
                );
                return x ? J : J.endOf(d);
              },
              B = function (z, W) {
                return N.w(
                  y
                    .toDate()
                    [z].apply(
                      y.toDate("s"),
                      (x ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(W)
                    ),
                  y
                );
              },
              k = this.$W,
              j = this.$M,
              K = this.$D,
              Y = "set" + (this.$u ? "UTC" : "");
            switch (S) {
              case u:
                return x ? P(1, 0) : P(31, 11);
              case s:
                return x ? P(1, j) : P(0, j + 1);
              case g:
                var re = this.$locale().weekStart || 0,
                  oe = (k < re ? k + 7 : k) - re;
                return P(x ? K - oe : K + (6 - oe), j);
              case d:
              case h:
                return B(Y + "Hours", 0);
              case f:
                return B(Y + "Minutes", 1);
              case l:
                return B(Y + "Seconds", 2);
              case a:
                return B(Y + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (E.endOf = function (v) {
            return this.startOf(v, !1);
          }),
          (E.$set = function (v, A) {
            var y,
              x = N.p(v),
              S = "set" + (this.$u ? "UTC" : ""),
              P = ((y = {}),
              (y[d] = S + "Date"),
              (y[h] = S + "Date"),
              (y[s] = S + "Month"),
              (y[u] = S + "FullYear"),
              (y[f] = S + "Hours"),
              (y[l] = S + "Minutes"),
              (y[a] = S + "Seconds"),
              (y[o] = S + "Milliseconds"),
              y)[x],
              B = x === d ? this.$D + (A - this.$W) : A;
            if (x === s || x === u) {
              var k = this.clone().set(h, 1);
              k.$d[P](B),
                k.init(),
                (this.$d = k.set(h, Math.min(this.$D, k.daysInMonth())).$d);
            } else P && this.$d[P](B);
            return this.init(), this;
          }),
          (E.set = function (v, A) {
            return this.clone().$set(v, A);
          }),
          (E.get = function (v) {
            return this[N.p(v)]();
          }),
          (E.add = function (v, A) {
            var y,
              x = this;
            v = Number(v);
            var S = N.p(A),
              P = function (j) {
                var K = $(x);
                return N.w(K.date(K.date() + Math.round(j * v)), x);
              };
            if (S === s) return this.set(s, this.$M + v);
            if (S === u) return this.set(u, this.$y + v);
            if (S === d) return P(1);
            if (S === g) return P(7);
            var B = ((y = {}), (y[l] = r), (y[f] = i), (y[a] = n), y)[S] || 1,
              k = this.$d.getTime() + v * B;
            return N.w(k, this);
          }),
          (E.subtract = function (v, A) {
            return this.add(-1 * v, A);
          }),
          (E.format = function (v) {
            var A = this,
              y = this.$locale();
            if (!this.isValid()) return y.invalidDate || _;
            var x = v || "YYYY-MM-DDTHH:mm:ssZ",
              S = N.z(this),
              P = this.$H,
              B = this.$m,
              k = this.$M,
              j = y.weekdays,
              K = y.months,
              Y = function (W, J, we, Ae) {
                return (W && (W[J] || W(A, x))) || we[J].slice(0, Ae);
              },
              re = function (W) {
                return N.s(P % 12 || 12, W, "0");
              },
              oe =
                y.meridiem ||
                function (W, J, we) {
                  var Ae = W < 12 ? "AM" : "PM";
                  return we ? Ae.toLowerCase() : Ae;
                },
              z = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: k + 1,
                MM: N.s(k + 1, 2, "0"),
                MMM: Y(y.monthsShort, k, K, 3),
                MMMM: Y(K, k),
                D: this.$D,
                DD: N.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: Y(y.weekdaysMin, this.$W, j, 2),
                ddd: Y(y.weekdaysShort, this.$W, j, 3),
                dddd: j[this.$W],
                H: String(P),
                HH: N.s(P, 2, "0"),
                h: re(1),
                hh: re(2),
                a: oe(P, B, !0),
                A: oe(P, B, !1),
                m: String(B),
                mm: N.s(B, 2, "0"),
                s: String(this.$s),
                ss: N.s(this.$s, 2, "0"),
                SSS: N.s(this.$ms, 3, "0"),
                Z: S,
              };
            return x.replace(m, function (W, J) {
              return J || z[W] || S.replace(":", "");
            });
          }),
          (E.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (E.diff = function (v, A, y) {
            var x,
              S = N.p(A),
              P = $(v),
              B = (P.utcOffset() - this.utcOffset()) * r,
              k = this - P,
              j = N.m(this, P);
            return (
              (j =
                ((x = {}),
                (x[u] = j / 12),
                (x[s] = j),
                (x[c] = j / 3),
                (x[g] = (k - B) / 6048e5),
                (x[d] = (k - B) / 864e5),
                (x[f] = k / i),
                (x[l] = k / r),
                (x[a] = k / n),
                x)[S] || k),
              y ? j : N.a(j)
            );
          }),
          (E.daysInMonth = function () {
            return this.endOf(s).$D;
          }),
          (E.$locale = function () {
            return I[this.$L];
          }),
          (E.locale = function (v, A) {
            if (!v) return this.$L;
            var y = this.clone(),
              x = F(v, A, !0);
            return x && (y.$L = x), y;
          }),
          (E.clone = function () {
            return N.w(this.$d, this);
          }),
          (E.toDate = function () {
            return new Date(this.valueOf());
          }),
          (E.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (E.toISOString = function () {
            return this.$d.toISOString();
          }),
          (E.toString = function () {
            return this.$d.toUTCString();
          }),
          w
        );
      })(),
      Q = U.prototype;
    return (
      ($.prototype = Q),
      [
        ["$ms", o],
        ["$s", a],
        ["$m", l],
        ["$H", f],
        ["$W", d],
        ["$M", s],
        ["$y", u],
        ["$D", h],
      ].forEach(function (w) {
        Q[w[1]] = function (E) {
          return this.$g(E, w[0], w[1]);
        };
      }),
      ($.extend = function (w, E) {
        return w.$i || (w(E, U, $), (w.$i = !0)), $;
      }),
      ($.locale = F),
      ($.isDayjs = V),
      ($.unix = function (w) {
        return $(1e3 * w);
      }),
      ($.en = I[M]),
      ($.Ls = I),
      ($.p = {}),
      $
    );
  });
})(No);
const fn = No.exports;
var Lo = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Te, function () {
    return function (n, r) {
      var i = r.prototype,
        o = i.format;
      i.format = function (a) {
        var l = this,
          f = this.$locale();
        if (!this.isValid()) return o.bind(this)(a);
        var d = this.$utils(),
          g = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(
            /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
            function (s) {
              switch (s) {
                case "Q":
                  return Math.ceil((l.$M + 1) / 3);
                case "Do":
                  return f.ordinal(l.$D);
                case "gggg":
                  return l.weekYear();
                case "GGGG":
                  return l.isoWeekYear();
                case "wo":
                  return f.ordinal(l.week(), "W");
                case "w":
                case "ww":
                  return d.s(l.week(), s === "w" ? 1 : 2, "0");
                case "W":
                case "WW":
                  return d.s(l.isoWeek(), s === "W" ? 1 : 2, "0");
                case "k":
                case "kk":
                  return d.s(
                    String(l.$H === 0 ? 24 : l.$H),
                    s === "k" ? 1 : 2,
                    "0"
                  );
                case "X":
                  return Math.floor(l.$d.getTime() / 1e3);
                case "x":
                  return l.$d.getTime();
                case "z":
                  return "[" + l.offsetName() + "]";
                case "zzz":
                  return "[" + l.offsetName("long") + "]";
                default:
                  return s;
              }
            }
          );
        return o.bind(this)(g);
      };
    };
  });
})(Lo);
const Mo = Lo.exports,
  Be = document,
  In = window,
  Io = Be.documentElement,
  yt = Be.createElement.bind(Be),
  Po = yt("div"),
  Er = yt("table"),
  jl = yt("tbody"),
  ds = yt("tr"),
  { isArray: Un, prototype: ko } = Array,
  {
    concat: Fl,
    filter: ui,
    indexOf: Ro,
    map: Ho,
    push: Wl,
    slice: Bo,
    some: fi,
    splice: Ul,
  } = ko,
  Yl = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,
  Kl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,
  Gl = /<.+>/,
  ql = /^\w+$/;
function di(e, t) {
  const n = zl(t);
  return !e || (!n && !Nt(t) && !ne(t))
    ? []
    : !n && Kl.test(e)
    ? t.getElementsByClassName(e.slice(1).replace(/\\/g, ""))
    : !n && ql.test(e)
    ? t.getElementsByTagName(e)
    : t.querySelectorAll(e);
}
class Yn {
  constructor(t, n) {
    if (!t) return;
    if (kr(t)) return t;
    let r = t;
    if (he(t)) {
      const i = (kr(n) ? n[0] : n) || Be;
      if (
        ((r =
          Yl.test(t) && "getElementById" in i
            ? i.getElementById(t.slice(1).replace(/\\/g, ""))
            : Gl.test(t)
            ? Fo(t)
            : di(t, i)),
        !r)
      )
        return;
    } else if (Et(t)) return this.ready(t);
    (r.nodeType || r === In) && (r = [r]), (this.length = r.length);
    for (let i = 0, o = this.length; i < o; i++) this[i] = r[i];
  }
  init(t, n) {
    return new Yn(t, n);
  }
}
const C = Yn.prototype,
  R = C.init;
R.fn = R.prototype = C;
C.length = 0;
C.splice = Ul;
typeof Symbol == "function" && (C[Symbol.iterator] = ko[Symbol.iterator]);
function kr(e) {
  return e instanceof Yn;
}
function Dt(e) {
  return !!e && e === e.window;
}
function Nt(e) {
  return !!e && e.nodeType === 9;
}
function zl(e) {
  return !!e && e.nodeType === 11;
}
function ne(e) {
  return !!e && e.nodeType === 1;
}
function Xl(e) {
  return !!e && e.nodeType === 3;
}
function Ql(e) {
  return typeof e == "boolean";
}
function Et(e) {
  return typeof e == "function";
}
function he(e) {
  return typeof e == "string";
}
function pe(e) {
  return e === void 0;
}
function cn(e) {
  return e === null;
}
function Vo(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function hi(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
R.isWindow = Dt;
R.isFunction = Et;
R.isArray = Un;
R.isNumeric = Vo;
R.isPlainObject = hi;
function se(e, t, n) {
  if (n) {
    let r = e.length;
    for (; r--; ) if (t.call(e[r], r, e[r]) === !1) return e;
  } else if (hi(e)) {
    const r = Object.keys(e);
    for (let i = 0, o = r.length; i < o; i++) {
      const a = r[i];
      if (t.call(e[a], a, e[a]) === !1) return e;
    }
  } else
    for (let r = 0, i = e.length; r < i; r++)
      if (t.call(e[r], r, e[r]) === !1) return e;
  return e;
}
R.each = se;
C.each = function (e) {
  return se(this, e);
};
C.empty = function () {
  return this.each((e, t) => {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  });
};
function Pn(...e) {
  const t = Ql(e[0]) ? e.shift() : !1,
    n = e.shift(),
    r = e.length;
  if (!n) return {};
  if (!r) return Pn(t, R, n);
  for (let i = 0; i < r; i++) {
    const o = e[i];
    for (const a in o)
      t && (Un(o[a]) || hi(o[a]))
        ? ((!n[a] || n[a].constructor !== o[a].constructor) &&
            (n[a] = new o[a].constructor()),
          Pn(t, n[a], o[a]))
        : (n[a] = o[a]);
  }
  return n;
}
R.extend = Pn;
C.extend = function (e) {
  return Pn(C, e);
};
const Jl = /\S+/g;
function Kn(e) {
  return he(e) ? e.match(Jl) || [] : [];
}
C.toggleClass = function (e, t) {
  const n = Kn(e),
    r = !pe(t);
  return this.each((i, o) => {
    !ne(o) ||
      se(n, (a, l) => {
        r
          ? t
            ? o.classList.add(l)
            : o.classList.remove(l)
          : o.classList.toggle(l);
      });
  });
};
C.addClass = function (e) {
  return this.toggleClass(e, !0);
};
C.removeAttr = function (e) {
  const t = Kn(e);
  return this.each((n, r) => {
    !ne(r) ||
      se(t, (i, o) => {
        r.removeAttribute(o);
      });
  });
};
function Zl(e, t) {
  if (!!e) {
    if (he(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !ne(this[0])) return;
        const n = this[0].getAttribute(e);
        return cn(n) ? void 0 : n;
      }
      return pe(t)
        ? this
        : cn(t)
        ? this.removeAttr(e)
        : this.each((n, r) => {
            !ne(r) || r.setAttribute(e, t);
          });
    }
    for (const n in e) this.attr(n, e[n]);
    return this;
  }
}
C.attr = Zl;
C.removeClass = function (e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
C.hasClass = function (e) {
  return !!e && fi.call(this, (t) => ne(t) && t.classList.contains(e));
};
C.get = function (e) {
  return pe(e)
    ? Bo.call(this)
    : ((e = Number(e)), this[e < 0 ? e + this.length : e]);
};
C.eq = function (e) {
  return R(this.get(e));
};
C.first = function () {
  return this.eq(0);
};
C.last = function () {
  return this.eq(-1);
};
function eu(e) {
  return pe(e)
    ? this.get()
        .map((t) => (ne(t) || Xl(t) ? t.textContent : ""))
        .join("")
    : this.each((t, n) => {
        !ne(n) || (n.textContent = e);
      });
}
C.text = eu;
function Ve(e, t, n) {
  if (!ne(e)) return;
  const r = In.getComputedStyle(e, null);
  return n ? r.getPropertyValue(t) || void 0 : r[t] || e.style[t];
}
function Ne(e, t) {
  return parseInt(Ve(e, t), 10) || 0;
}
function hs(e, t) {
  return (
    Ne(e, `border${t ? "Left" : "Top"}Width`) +
    Ne(e, `padding${t ? "Left" : "Top"}`) +
    Ne(e, `padding${t ? "Right" : "Bottom"}`) +
    Ne(e, `border${t ? "Right" : "Bottom"}Width`)
  );
}
const br = {};
function tu(e) {
  if (br[e]) return br[e];
  const t = yt(e);
  Be.body.insertBefore(t, null);
  const n = Ve(t, "display");
  return Be.body.removeChild(t), (br[e] = n !== "none" ? n : "block");
}
function ps(e) {
  return Ve(e, "display") === "none";
}
function jo(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function Gn(e) {
  return he(e)
    ? (t, n) => jo(n, e)
    : Et(e)
    ? e
    : kr(e)
    ? (t, n) => e.is(n)
    : e
    ? (t, n) => n === e
    : () => !1;
}
C.filter = function (e) {
  const t = Gn(e);
  return R(ui.call(this, (n, r) => t.call(n, r, n)));
};
function ze(e, t) {
  return t ? e.filter(t) : e;
}
C.detach = function (e) {
  return (
    ze(this, e).each((t, n) => {
      n.parentNode && n.parentNode.removeChild(n);
    }),
    this
  );
};
const nu = /^\s*<(\w+)[^>]*>/,
  ru = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
  _s = { "*": Po, tr: jl, td: ds, th: ds, thead: Er, tbody: Er, tfoot: Er };
function Fo(e) {
  if (!he(e)) return [];
  if (ru.test(e)) return [yt(RegExp.$1)];
  const t = nu.test(e) && RegExp.$1,
    n = _s[t] || _s["*"];
  return (n.innerHTML = e), R(n.childNodes).detach().get();
}
R.parseHTML = Fo;
C.has = function (e) {
  const t = he(e) ? (n, r) => di(e, r).length : (n, r) => r.contains(e);
  return this.filter(t);
};
C.not = function (e) {
  const t = Gn(e);
  return this.filter((n, r) => (!he(e) || ne(r)) && !t.call(r, n, r));
};
function Fe(e, t, n, r) {
  const i = [],
    o = Et(t),
    a = r && Gn(r);
  for (let l = 0, f = e.length; l < f; l++)
    if (o) {
      const d = t(e[l]);
      d.length && Wl.apply(i, d);
    } else {
      let d = e[l][t];
      for (; d != null && !(r && a(-1, d)); ) i.push(d), (d = n ? d[t] : null);
    }
  return i;
}
function Wo(e) {
  return e.multiple && e.options
    ? Fe(
        ui.call(
          e.options,
          (t) => t.selected && !t.disabled && !t.parentNode.disabled
        ),
        "value"
      )
    : e.value || "";
}
function iu(e) {
  return arguments.length
    ? this.each((t, n) => {
        const r = n.multiple && n.options;
        if (r || Qo.test(n.type)) {
          const i = Un(e) ? Ho.call(e, String) : cn(e) ? [] : [String(e)];
          r
            ? se(
                n.options,
                (o, a) => {
                  a.selected = i.indexOf(a.value) >= 0;
                },
                !0
              )
            : (n.checked = i.indexOf(n.value) >= 0);
        } else n.value = pe(e) || cn(e) ? "" : e;
      })
    : this[0] && Wo(this[0]);
}
C.val = iu;
C.is = function (e) {
  const t = Gn(e);
  return fi.call(this, (n, r) => t.call(n, r, n));
};
R.guid = 1;
function Pe(e) {
  return e.length > 1 ? ui.call(e, (t, n, r) => Ro.call(r, t) === n) : e;
}
R.unique = Pe;
C.add = function (e, t) {
  return R(Pe(this.get().concat(R(e, t).get())));
};
C.children = function (e) {
  return ze(R(Pe(Fe(this, (t) => t.children))), e);
};
C.parent = function (e) {
  return ze(R(Pe(Fe(this, "parentNode"))), e);
};
C.index = function (e) {
  const t = e ? R(e)[0] : this[0],
    n = e ? this : R(t).parent().children();
  return Ro.call(n, t);
};
C.closest = function (e) {
  const t = this.filter(e);
  if (t.length) return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
C.siblings = function (e) {
  return ze(R(Pe(Fe(this, (t) => R(t).parent().children().not(t)))), e);
};
C.find = function (e) {
  return R(Pe(Fe(this, (t) => di(e, t))));
};
const su = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
  ou = /^$|^module$|\/(java|ecma)script/i,
  au = ["type", "src", "nonce", "noModule"];
function cu(e, t) {
  const n = R(e);
  n.filter("script")
    .add(n.find("script"))
    .each((r, i) => {
      if (ou.test(i.type) && Io.contains(i)) {
        const o = yt("script");
        (o.text = i.textContent.replace(su, "")),
          se(au, (a, l) => {
            i[l] && (o[l] = i[l]);
          }),
          t.head.insertBefore(o, null),
          t.head.removeChild(o);
      }
    });
}
function lu(e, t, n, r, i) {
  r
    ? e.insertBefore(t, n ? e.firstChild : null)
    : e.nodeName === "HTML"
    ? e.parentNode.replaceChild(t, e)
    : e.parentNode.insertBefore(t, n ? e : e.nextSibling),
    i && cu(t, e.ownerDocument);
}
function Xe(e, t, n, r, i, o, a, l) {
  return (
    se(
      e,
      (f, d) => {
        se(
          R(d),
          (g, s) => {
            se(
              R(t),
              (c, u) => {
                const h = n ? s : u,
                  _ = n ? u : s,
                  p = n ? g : c;
                lu(h, p ? _.cloneNode(!0) : _, r, i, !p);
              },
              l
            );
          },
          a
        );
      },
      o
    ),
    t
  );
}
C.after = function () {
  return Xe(arguments, this, !1, !1, !1, !0, !0);
};
C.append = function () {
  return Xe(arguments, this, !1, !1, !0);
};
function uu(e) {
  if (!arguments.length) return this[0] && this[0].innerHTML;
  if (pe(e)) return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, r) => {
    !ne(r) || (t ? R(r).empty().append(e) : (r.innerHTML = e));
  });
}
C.html = uu;
C.appendTo = function (e) {
  return Xe(arguments, this, !0, !1, !0);
};
C.wrapInner = function (e) {
  return this.each((t, n) => {
    const r = R(n),
      i = r.contents();
    i.length ? i.wrapAll(e) : r.append(e);
  });
};
C.before = function () {
  return Xe(arguments, this, !1, !0);
};
C.wrapAll = function (e) {
  let t = R(e),
    n = t[0];
  for (; n.children.length; ) n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
C.wrap = function (e) {
  return this.each((t, n) => {
    const r = R(e)[0];
    R(n).wrapAll(t ? r.cloneNode(!0) : r);
  });
};
C.insertAfter = function (e) {
  return Xe(arguments, this, !0, !1, !1, !1, !1, !0);
};
C.insertBefore = function (e) {
  return Xe(arguments, this, !0, !0);
};
C.prepend = function () {
  return Xe(arguments, this, !1, !0, !0, !0, !0);
};
C.prependTo = function (e) {
  return Xe(arguments, this, !0, !0, !0, !1, !1, !0);
};
C.contents = function () {
  return R(
    Pe(
      Fe(this, (e) =>
        e.tagName === "IFRAME"
          ? [e.contentDocument]
          : e.tagName === "TEMPLATE"
          ? e.content.childNodes
          : e.childNodes
      )
    )
  );
};
C.next = function (e, t, n) {
  return ze(R(Pe(Fe(this, "nextElementSibling", t, n))), e);
};
C.nextAll = function (e) {
  return this.next(e, !0);
};
C.nextUntil = function (e, t) {
  return this.next(t, !0, e);
};
C.parents = function (e, t) {
  return ze(R(Pe(Fe(this, "parentElement", !0, t))), e);
};
C.parentsUntil = function (e, t) {
  return this.parents(t, e);
};
C.prev = function (e, t, n) {
  return ze(R(Pe(Fe(this, "previousElementSibling", t, n))), e);
};
C.prevAll = function (e) {
  return this.prev(e, !0);
};
C.prevUntil = function (e, t) {
  return this.prev(t, !0, e);
};
C.map = function (e) {
  return R(
    Fl.apply(
      [],
      Ho.call(this, (t, n) => e.call(t, n, t))
    )
  );
};
C.clone = function () {
  return this.map((e, t) => t.cloneNode(!0));
};
C.offsetParent = function () {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Ve(n, "position") === "static"; ) n = n.offsetParent;
    return n || Io;
  });
};
C.slice = function (e, t) {
  return R(Bo.call(this, e, t));
};
const fu = /-([a-z])/g;
function pi(e) {
  return e.replace(fu, (t, n) => n.toUpperCase());
}
C.ready = function (e) {
  const t = () => setTimeout(e, 0, R);
  return (
    Be.readyState !== "loading"
      ? t()
      : Be.addEventListener("DOMContentLoaded", t),
    this
  );
};
C.unwrap = function () {
  return (
    this.parent().each((e, t) => {
      if (t.tagName === "BODY") return;
      const n = R(t);
      n.replaceWith(n.children());
    }),
    this
  );
};
C.offset = function () {
  const e = this[0];
  if (!e) return;
  const t = e.getBoundingClientRect();
  return { top: t.top + In.pageYOffset, left: t.left + In.pageXOffset };
};
C.position = function () {
  const e = this[0];
  if (!e) return;
  const t = Ve(e, "position") === "fixed",
    n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const r = e.ownerDocument;
    let i = e.offsetParent || r.documentElement;
    for (
      ;
      (i === r.body || i === r.documentElement) &&
      Ve(i, "position") === "static";

    )
      i = i.parentNode;
    if (i !== e && ne(i)) {
      const o = R(i).offset();
      (n.top -= o.top + Ne(i, "borderTopWidth")),
        (n.left -= o.left + Ne(i, "borderLeftWidth"));
    }
  }
  return {
    top: n.top - Ne(e, "marginTop"),
    left: n.left - Ne(e, "marginLeft"),
  };
};
const Uo = {
  class: "className",
  contenteditable: "contentEditable",
  for: "htmlFor",
  readonly: "readOnly",
  maxlength: "maxLength",
  tabindex: "tabIndex",
  colspan: "colSpan",
  rowspan: "rowSpan",
  usemap: "useMap",
};
C.prop = function (e, t) {
  if (!!e) {
    if (he(e))
      return (
        (e = Uo[e] || e),
        arguments.length < 2
          ? this[0] && this[0][e]
          : this.each((n, r) => {
              r[e] = t;
            })
      );
    for (const n in e) this.prop(n, e[n]);
    return this;
  }
};
C.removeProp = function (e) {
  return this.each((t, n) => {
    delete n[Uo[e] || e];
  });
};
const du = /^--/;
function _i(e) {
  return du.test(e);
}
const wr = {},
  { style: hu } = Po,
  pu = ["webkit", "moz", "ms"];
function _u(e, t = _i(e)) {
  if (t) return e;
  if (!wr[e]) {
    const n = pi(e),
      r = `${n[0].toUpperCase()}${n.slice(1)}`,
      i = `${n} ${pu.join(`${r} `)}${r}`.split(" ");
    se(i, (o, a) => {
      if (a in hu) return (wr[e] = a), !1;
    });
  }
  return wr[e];
}
const mu = {
  animationIterationCount: !0,
  columnCount: !0,
  flexGrow: !0,
  flexShrink: !0,
  fontWeight: !0,
  gridArea: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnStart: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowStart: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  widows: !0,
  zIndex: !0,
};
function Yo(e, t, n = _i(e)) {
  return !n && !mu[e] && Vo(t) ? `${t}px` : t;
}
function gu(e, t) {
  if (he(e)) {
    const n = _i(e);
    return (
      (e = _u(e, n)),
      arguments.length < 2
        ? this[0] && Ve(this[0], e, n)
        : e
        ? ((t = Yo(e, t, n)),
          this.each((r, i) => {
            !ne(i) || (n ? i.style.setProperty(e, t) : (i.style[e] = t));
          }))
        : this
    );
  }
  for (const n in e) this.css(n, e[n]);
  return this;
}
C.css = gu;
function Ko(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const vu = /^\s+|\s+$/;
function ms(e, t) {
  const n = e.dataset[t] || e.dataset[pi(t)];
  return vu.test(n) ? n : Ko(JSON.parse, n);
}
function yu(e, t, n) {
  (n = Ko(JSON.stringify, n)), (e.dataset[pi(t)] = n);
}
function Eu(e, t) {
  if (!e) {
    if (!this[0]) return;
    const n = {};
    for (const r in this[0].dataset) n[r] = ms(this[0], r);
    return n;
  }
  if (he(e))
    return arguments.length < 2
      ? this[0] && ms(this[0], e)
      : pe(t)
      ? this
      : this.each((n, r) => {
          yu(r, e, t);
        });
  for (const n in e) this.data(n, e[n]);
  return this;
}
C.data = Eu;
function Go(e, t) {
  const n = e.documentElement;
  return Math.max(
    e.body[`scroll${t}`],
    n[`scroll${t}`],
    e.body[`offset${t}`],
    n[`offset${t}`],
    n[`client${t}`]
  );
}
se([!0, !1], (e, t) => {
  se(["Width", "Height"], (n, r) => {
    const i = `${t ? "outer" : "inner"}${r}`;
    C[i] = function (o) {
      if (!!this[0])
        return Dt(this[0])
          ? t
            ? this[0][`inner${r}`]
            : this[0].document.documentElement[`client${r}`]
          : Nt(this[0])
          ? Go(this[0], r)
          : this[0][`${t ? "offset" : "client"}${r}`] +
            (o && t
              ? Ne(this[0], `margin${n ? "Top" : "Left"}`) +
                Ne(this[0], `margin${n ? "Bottom" : "Right"}`)
              : 0);
    };
  });
});
se(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  C[n] = function (r) {
    if (!this[0]) return pe(r) ? void 0 : this;
    if (!arguments.length)
      return Dt(this[0])
        ? this[0].document.documentElement[`client${t}`]
        : Nt(this[0])
        ? Go(this[0], t)
        : this[0].getBoundingClientRect()[n] - hs(this[0], !e);
    const i = parseInt(r, 10);
    return this.each((o, a) => {
      if (!ne(a)) return;
      const l = Ve(a, "boxSizing");
      a.style[n] = Yo(n, i + (l === "border-box" ? hs(a, !e) : 0));
    });
  };
});
const gs = "___cd";
C.toggle = function (e) {
  return this.each((t, n) => {
    if (!ne(n)) return;
    (pe(e) ? ps(n) : e)
      ? ((n.style.display = n[gs] || ""),
        ps(n) && (n.style.display = tu(n.tagName)))
      : ((n[gs] = Ve(n, "display")), (n.style.display = "none"));
  });
};
C.hide = function () {
  return this.toggle(!1);
};
C.show = function () {
  return this.toggle(!0);
};
const vs = "___ce",
  mi = ".",
  gi = { focus: "focusin", blur: "focusout" },
  qo = { mouseenter: "mouseover", mouseleave: "mouseout" },
  bu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function vi(e) {
  return qo[e] || gi[e] || e;
}
function yi(e) {
  const t = e.split(mi);
  return [t[0], t.slice(1).sort()];
}
C.trigger = function (e, t) {
  if (he(e)) {
    const [r, i] = yi(e),
      o = vi(r);
    if (!o) return this;
    const a = bu.test(o) ? "MouseEvents" : "HTMLEvents";
    (e = Be.createEvent(a)),
      e.initEvent(o, !0, !0),
      (e.namespace = i.join(mi)),
      (e.___ot = r);
  }
  e.___td = t;
  const n = e.___ot in gi;
  return this.each((r, i) => {
    n &&
      Et(i[e.___ot]) &&
      ((i[`___i${e.type}`] = !0), i[e.___ot](), (i[`___i${e.type}`] = !1)),
      i.dispatchEvent(e);
  });
};
function zo(e) {
  return (e[vs] = e[vs] || {});
}
function wu(e, t, n, r, i) {
  const o = zo(e);
  (o[t] = o[t] || []), o[t].push([n, r, i]), e.addEventListener(t, i);
}
function Xo(e, t) {
  return !t || !fi.call(t, (n) => e.indexOf(n) < 0);
}
function kn(e, t, n, r, i) {
  const o = zo(e);
  if (t)
    o[t] &&
      (o[t] = o[t].filter(([a, l, f]) => {
        if ((i && f.guid !== i.guid) || !Xo(a, n) || (r && r !== l)) return !0;
        e.removeEventListener(t, f);
      }));
  else for (t in o) kn(e, t, n, r, i);
}
C.off = function (e, t, n) {
  if (pe(e))
    this.each((r, i) => {
      (!ne(i) && !Nt(i) && !Dt(i)) || kn(i);
    });
  else if (he(e))
    Et(t) && ((n = t), (t = "")),
      se(Kn(e), (r, i) => {
        const [o, a] = yi(i),
          l = vi(o);
        this.each((f, d) => {
          (!ne(d) && !Nt(d) && !Dt(d)) || kn(d, l, a, t, n);
        });
      });
  else for (const r in e) this.off(r, e[r]);
  return this;
};
C.remove = function (e) {
  return ze(this, e).detach().off(), this;
};
C.replaceWith = function (e) {
  return this.before(e).remove();
};
C.replaceAll = function (e) {
  return R(e).replaceWith(this), this;
};
function Au(e, t, n, r, i) {
  if (!he(e)) {
    for (const o in e) this.on(o, t, n, e[o], i);
    return this;
  }
  return (
    he(t) ||
      (pe(t) || cn(t)
        ? (t = "")
        : pe(n)
        ? ((n = t), (t = ""))
        : ((r = n), (n = t), (t = ""))),
    Et(r) || ((r = n), (n = void 0)),
    r
      ? (se(Kn(e), (o, a) => {
          const [l, f] = yi(a),
            d = vi(l),
            g = l in qo,
            s = l in gi;
          !d ||
            this.each((c, u) => {
              if (!ne(u) && !Nt(u) && !Dt(u)) return;
              const h = function (_) {
                if (_.target[`___i${_.type}`])
                  return _.stopImmediatePropagation();
                if (
                  (_.namespace && !Xo(f, _.namespace.split(mi))) ||
                  (!t &&
                    ((s && (_.target !== u || _.___ot === d)) ||
                      (g && _.relatedTarget && u.contains(_.relatedTarget))))
                )
                  return;
                let p = u;
                if (t) {
                  let b = _.target;
                  for (; !jo(b, t); )
                    if (b === u || ((b = b.parentNode), !b)) return;
                  p = b;
                }
                Object.defineProperty(_, "currentTarget", {
                  configurable: !0,
                  get() {
                    return p;
                  },
                }),
                  Object.defineProperty(_, "delegateTarget", {
                    configurable: !0,
                    get() {
                      return u;
                    },
                  }),
                  Object.defineProperty(_, "data", {
                    configurable: !0,
                    get() {
                      return n;
                    },
                  });
                const m = r.call(p, _, _.___td);
                i && kn(u, d, f, t, h),
                  m === !1 && (_.preventDefault(), _.stopPropagation());
              };
              (h.guid = r.guid = r.guid || R.guid++), wu(u, d, f, t, h);
            });
        }),
        this)
      : this
  );
}
C.on = Au;
function Tu(e, t, n, r) {
  return this.on(e, t, n, r, !0);
}
C.one = Tu;
const Su = /\r?\n/g;
function Ou(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(
    t.replace(
      Su,
      `\r
`
    )
  )}`;
}
const xu = /file|reset|submit|button|image/i,
  Qo = /radio|checkbox/i;
C.serialize = function () {
  let e = "";
  return (
    this.each((t, n) => {
      se(n.elements || [n], (r, i) => {
        if (
          i.disabled ||
          !i.name ||
          i.tagName === "FIELDSET" ||
          xu.test(i.type) ||
          (Qo.test(i.type) && !i.checked)
        )
          return;
        const o = Wo(i);
        if (!pe(o)) {
          const a = Un(o) ? o : [o];
          se(a, (l, f) => {
            e += Ou(i.name, f);
          });
        }
      });
    }),
    e.slice(1)
  );
};
fn.extend(Mo);
function $u() {
  let e = document.querySelectorAll("[data-time]");
  for (const t of e) {
    let n = t.dataset.time,
      r = t.dataset.timeFormat;
    t.innerText = fn(n).format(r);
  }
}
function Cu(e, t) {
  R(t).select(),
    document.execCommand("copy"),
    R(e.target).tooltip({ title: "Copied!", trigger: "manual" }),
    R(e.target).tooltip("show"),
    setTimeout(function () {
      R(e.target).tooltip("hide");
    }, 1500);
}
function Du(e) {
  let t = 0,
    n,
    r,
    i;
  if (e.length === 0) return t;
  for (n = 0, i = e.length; n < i; n++)
    (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
  return t;
}
function Nu(e) {
  let t = 0;
  for (let o = 0; o < e.length; o++)
    (t = e.charCodeAt(o) + ((t << 5) - t)), (t = t & t);
  let n = ((t % 360) + 360) % 360,
    r = (((t % 25) + 25) % 25) + 75,
    i = (((t % 20) + 20) % 20) + 40;
  return `hsl(${n}, ${r}%, ${i}%)`;
}
async function Jo(e = {}) {
  let t = "/api/v1/challenges";
  if (Object.keys(e).length !== 0) {
    let o = new URLSearchParams(e).toString();
    t = `${t}?${o}`;
  }
  let i = (await (await L.fetch(t, { method: "GET" })).json()).data;
  return (
    L._functions.challenges.sortChallenges &&
      (i = L._functions.challenges.sortChallenges(i)),
    i
  );
}
async function Zo(e) {
  return (
    await (await L.fetch(`/api/v1/challenges/${e}`, { method: "GET" })).json()
  ).data;
}
async function Lu() {
  let e = await Jo();
  L._functions.challenges.displayChallenges &&
    L._functions.challenges.displayChallenges(e);
}
const ea = (e) =>
  new Promise((t, n) => {
    const r = document.querySelector(`script[src='${e}']`);
    r && r.remove();
    const i = document.createElement("script");
    document.body.appendChild(i),
      (i.onload = t),
      (i.onerror = n),
      (i.async = !0),
      (i.src = e);
  });
async function Mu(e, t) {
  L._internal.challenge = {};
  let n = L.config,
    r = await Zo(e);
  L._functions.challenge.displayChallenge &&
    L._functions.challenge.displayChallenge(r),
    ea(n.urlRoot + r.type_data.scripts.view).then(() => {
      const o = L._internal.challenge;
      (o.data = r),
        o.preRender(),
        L._functions.challenge.renderChallenge
          ? L._functions.challenge.renderChallenge(o)
          : t && t(o),
        o.postRender();
    });
}
async function Iu(e, t, n = !1) {
  if (L._functions.challenge.submitChallenge) {
    L._functions.challenge.submitChallenge(e, t);
    return;
  }
  let r = "/api/v1/challenges/attempt";
  (n === !0 || L.config.preview === !0) && (r += "?preview=true");
  const o = await (
    await L.fetch(r, {
      method: "POST",
      body: JSON.stringify({ challenge_id: e, submission: t }),
    })
  ).json();
  return (
    L._functions.challenge.displaySubmissionResponse &&
      L._functions.challenge.displaySubmissionResponse(o),
    o
  );
}
async function ta(e) {
  return await (await L.fetch(`/api/v1/hints/${e}`, { method: "GET" })).json();
}
async function na(e) {
  return await (
    await L.fetch("/api/v1/unlocks", {
      method: "POST",
      body: JSON.stringify({ target: e, type: "hints" }),
    })
  ).json();
}
async function ra(e) {
  let n = (await ta(e)).data;
  if (n.content) {
    L._functions.challenge.displayHint(n);
    return;
  }
  if (await ia(n)) {
    let i = na(e);
    i.success ? await ra(e) : L._functions.challenge.displayUnlockError(i);
  }
}
async function ia(e) {
  return L._functions.challenge.displayUnlock(e);
}
async function sa(e) {
  return (
    await (
      await L.fetch(`/api/v1/challenges/${e}/solves`, { method: "GET" })
    ).json()
  ).data;
}
async function Pu(e) {
  let t = await sa(e);
  L._functions.challenge.displaySolves &&
    L._functions.challenge.displaySolves(t);
}
async function ku() {
  return (await (await L.fetch("/api/v1/scoreboard", { method: "GET" })).json())
    .data;
}
async function Ru(e) {
  return (
    await (
      await L.fetch(`/api/v1/scoreboard/top/${e}`, { method: "GET" })
    ).json()
  ).data;
}
async function Hu(e) {
  return await (
    await L.fetch("/api/v1/users/me", {
      method: "PATCH",
      body: JSON.stringify(e),
    })
  ).json();
}
async function Bu(e) {
  return await (
    await L.fetch("/api/v1/tokens", { method: "POST", body: JSON.stringify(e) })
  ).json();
}
async function Vu(e) {
  return await (
    await L.fetch(`/api/v1/tokens/${e}`, { method: "DELETE" })
  ).json();
}
async function ju(e) {
  return await (
    await L.fetch(`/api/v1/users/${e}/solves`, { method: "GET" })
  ).json();
}
async function Fu(e) {
  return await (
    await L.fetch(`/api/v1/users/${e}/fails`, { method: "GET" })
  ).json();
}
async function Wu(e) {
  return await (
    await L.fetch(`/api/v1/users/${e}/awards`, { method: "GET" })
  ).json();
}
async function Uu() {
  return await (
    await L.fetch("/api/v1/teams/me/members", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  ).json();
}
async function Yu() {
  return await (await L.fetch("/api/v1/teams/me", { method: "DELETE" })).json();
}
async function Ku(e) {
  return await (
    await L.fetch("/api/v1/teams/me", {
      method: "PATCH",
      body: JSON.stringify(e),
    })
  ).json();
}
async function Gu(e) {
  return await (
    await L.fetch(`/api/v1/teams/${e}/solves`, { method: "GET" })
  ).json();
}
async function qu(e) {
  return await (
    await L.fetch(`/api/v1/teams/${e}/fails`, { method: "GET" })
  ).json();
}
async function zu(e) {
  return await (
    await L.fetch(`/api/v1/teams/${e}/awards`, { method: "GET" })
  ).json();
}
function Xu(e) {
  const t = document.createElement("template");
  return (t.innerHTML = e.trim()), t.content.firstChild;
}
function oa(e) {
  const t = document.createElement("div");
  return (t.innerText = e), t.innerHTML;
}
class Qu {
  constructor() {
    (this.id = Math.random()),
      (this.isMaster = !1),
      (this.others = {}),
      window.addEventListener("storage", this),
      window.addEventListener("unload", this),
      this.broadcast("hello"),
      setTimeout(this.check.bind(this), 500),
      (this._checkInterval = setInterval(this.check.bind(this), 9e3)),
      (this._pingInterval = setInterval(this.sendPing.bind(this), 17e3));
  }
  destroy() {
    clearInterval(this._pingInterval),
      clearInterval(this._checkInterval),
      window.removeEventListener("storage", this),
      window.removeEventListener("unload", this),
      this.broadcast("bye");
  }
  handleEvent(t) {
    if (t.type === "unload") {
      this.destroy();
      return;
    }
    if (t.type === "broadcast")
      try {
        const n = JSON.parse(t.newValue);
        n.id !== this.id && this[n.type](n);
      } catch (n) {
        console.error(n);
      }
  }
  sendPing() {
    this.broadcast("ping");
  }
  hello(t) {
    if ((this.ping(t), t.id < this.id)) {
      this.check();
      return;
    }
    this.sendPing();
  }
  ping(t) {
    this.others[t.id] = Date.now();
  }
  bye(t) {
    delete this.others[t.id], this.check();
  }
  check() {
    const t = Date.now();
    let n = !0;
    for (const r in this.others)
      this.others[r] + 23e3 < t
        ? delete this.others[r]
        : r < this.id && (n = !1);
    this.isMaster !== n && ((this.isMaster = n), this.masterDidChange());
  }
  masterDidChange() {}
  broadcast(t, n) {
    const r = { id: this.id, type: t, ...n };
    try {
      localStorage.setItem("broadcast", JSON.stringify(r));
    } catch (i) {
      console.error(i);
    }
  }
}
var aa = {};
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */ (function (e) {
  (function () {
    var t = function () {
      this.init();
    };
    t.prototype = {
      init: function () {
        var s = this || n;
        return (
          (s._counter = 1e3),
          (s._html5AudioPool = []),
          (s.html5PoolSize = 10),
          (s._codecs = {}),
          (s._howls = []),
          (s._muted = !1),
          (s._volume = 1),
          (s._canPlayEvent = "canplaythrough"),
          (s._navigator =
            typeof window < "u" && window.navigator ? window.navigator : null),
          (s.masterGain = null),
          (s.noAudio = !1),
          (s.usingWebAudio = !0),
          (s.autoSuspend = !0),
          (s.ctx = null),
          (s.autoUnlock = !0),
          s._setup(),
          s
        );
      },
      volume: function (s) {
        var c = this || n;
        if (
          ((s = parseFloat(s)),
          c.ctx || g(),
          typeof s < "u" && s >= 0 && s <= 1)
        ) {
          if (((c._volume = s), c._muted)) return c;
          c.usingWebAudio &&
            c.masterGain.gain.setValueAtTime(s, n.ctx.currentTime);
          for (var u = 0; u < c._howls.length; u++)
            if (!c._howls[u]._webAudio)
              for (
                var h = c._howls[u]._getSoundIds(), _ = 0;
                _ < h.length;
                _++
              ) {
                var p = c._howls[u]._soundById(h[_]);
                p && p._node && (p._node.volume = p._volume * s);
              }
          return c;
        }
        return c._volume;
      },
      mute: function (s) {
        var c = this || n;
        c.ctx || g(),
          (c._muted = s),
          c.usingWebAudio &&
            c.masterGain.gain.setValueAtTime(
              s ? 0 : c._volume,
              n.ctx.currentTime
            );
        for (var u = 0; u < c._howls.length; u++)
          if (!c._howls[u]._webAudio)
            for (var h = c._howls[u]._getSoundIds(), _ = 0; _ < h.length; _++) {
              var p = c._howls[u]._soundById(h[_]);
              p && p._node && (p._node.muted = s ? !0 : p._muted);
            }
        return c;
      },
      stop: function () {
        for (var s = this || n, c = 0; c < s._howls.length; c++)
          s._howls[c].stop();
        return s;
      },
      unload: function () {
        for (var s = this || n, c = s._howls.length - 1; c >= 0; c--)
          s._howls[c].unload();
        return (
          s.usingWebAudio &&
            s.ctx &&
            typeof s.ctx.close < "u" &&
            (s.ctx.close(), (s.ctx = null), g()),
          s
        );
      },
      codecs: function (s) {
        return (this || n)._codecs[s.replace(/^x-/, "")];
      },
      _setup: function () {
        var s = this || n;
        if (
          ((s.state = (s.ctx && s.ctx.state) || "suspended"),
          s._autoSuspend(),
          !s.usingWebAudio)
        )
          if (typeof Audio < "u")
            try {
              var c = new Audio();
              typeof c.oncanplaythrough > "u" && (s._canPlayEvent = "canplay");
            } catch {
              s.noAudio = !0;
            }
          else s.noAudio = !0;
        try {
          var c = new Audio();
          c.muted && (s.noAudio = !0);
        } catch {}
        return s.noAudio || s._setupCodecs(), s;
      },
      _setupCodecs: function () {
        var s = this || n,
          c = null;
        try {
          c = typeof Audio < "u" ? new Audio() : null;
        } catch {
          return s;
        }
        if (!c || typeof c.canPlayType != "function") return s;
        var u = c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
          h = s._navigator ? s._navigator.userAgent : "",
          _ = h.match(/OPR\/([0-6].)/g),
          p = _ && parseInt(_[0].split("/")[1], 10) < 33,
          m = h.indexOf("Safari") !== -1 && h.indexOf("Chrome") === -1,
          b = h.match(/Version\/(.*?) /),
          O = m && b && parseInt(b[1], 10) < 15;
        return (
          (s._codecs = {
            mp3: !!(
              !p &&
              (u || c.canPlayType("audio/mp3;").replace(/^no$/, ""))
            ),
            mpeg: !!u,
            opus: !!c
              .canPlayType('audio/ogg; codecs="opus"')
              .replace(/^no$/, ""),
            ogg: !!c
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            oga: !!c
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, ""),
            wav: !!(
              c.canPlayType('audio/wav; codecs="1"') ||
              c.canPlayType("audio/wav")
            ).replace(/^no$/, ""),
            aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!c.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(
              c.canPlayType("audio/x-m4a;") ||
              c.canPlayType("audio/m4a;") ||
              c.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            m4b: !!(
              c.canPlayType("audio/x-m4b;") ||
              c.canPlayType("audio/m4b;") ||
              c.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            mp4: !!(
              c.canPlayType("audio/x-mp4;") ||
              c.canPlayType("audio/mp4;") ||
              c.canPlayType("audio/aac;")
            ).replace(/^no$/, ""),
            weba: !!(
              !O &&
              c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            ),
            webm: !!(
              !O &&
              c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
            ),
            dolby: !!c
              .canPlayType('audio/mp4; codecs="ec-3"')
              .replace(/^no$/, ""),
            flac: !!(
              c.canPlayType("audio/x-flac;") || c.canPlayType("audio/flac;")
            ).replace(/^no$/, ""),
          }),
          s
        );
      },
      _unlockAudio: function () {
        var s = this || n;
        if (!(s._audioUnlocked || !s.ctx)) {
          (s._audioUnlocked = !1),
            (s.autoUnlock = !1),
            !s._mobileUnloaded &&
              s.ctx.sampleRate !== 44100 &&
              ((s._mobileUnloaded = !0), s.unload()),
            (s._scratchBuffer = s.ctx.createBuffer(1, 1, 22050));
          var c = function (u) {
            for (; s._html5AudioPool.length < s.html5PoolSize; )
              try {
                var h = new Audio();
                (h._unlocked = !0), s._releaseHtml5Audio(h);
              } catch {
                s.noAudio = !0;
                break;
              }
            for (var _ = 0; _ < s._howls.length; _++)
              if (!s._howls[_]._webAudio)
                for (
                  var p = s._howls[_]._getSoundIds(), m = 0;
                  m < p.length;
                  m++
                ) {
                  var b = s._howls[_]._soundById(p[m]);
                  b &&
                    b._node &&
                    !b._node._unlocked &&
                    ((b._node._unlocked = !0), b._node.load());
                }
            s._autoResume();
            var O = s.ctx.createBufferSource();
            (O.buffer = s._scratchBuffer),
              O.connect(s.ctx.destination),
              typeof O.start > "u" ? O.noteOn(0) : O.start(0),
              typeof s.ctx.resume == "function" && s.ctx.resume(),
              (O.onended = function () {
                O.disconnect(0),
                  (s._audioUnlocked = !0),
                  document.removeEventListener("touchstart", c, !0),
                  document.removeEventListener("touchend", c, !0),
                  document.removeEventListener("click", c, !0),
                  document.removeEventListener("keydown", c, !0);
                for (var D = 0; D < s._howls.length; D++)
                  s._howls[D]._emit("unlock");
              });
          };
          return (
            document.addEventListener("touchstart", c, !0),
            document.addEventListener("touchend", c, !0),
            document.addEventListener("click", c, !0),
            document.addEventListener("keydown", c, !0),
            s
          );
        }
      },
      _obtainHtml5Audio: function () {
        var s = this || n;
        if (s._html5AudioPool.length) return s._html5AudioPool.pop();
        var c = new Audio().play();
        return (
          c &&
            typeof Promise < "u" &&
            (c instanceof Promise || typeof c.then == "function") &&
            c.catch(function () {
              console.warn(
                "HTML5 Audio pool exhausted, returning potentially locked audio object."
              );
            }),
          new Audio()
        );
      },
      _releaseHtml5Audio: function (s) {
        var c = this || n;
        return s._unlocked && c._html5AudioPool.push(s), c;
      },
      _autoSuspend: function () {
        var s = this;
        if (
          !(
            !s.autoSuspend ||
            !s.ctx ||
            typeof s.ctx.suspend > "u" ||
            !n.usingWebAudio
          )
        ) {
          for (var c = 0; c < s._howls.length; c++)
            if (s._howls[c]._webAudio) {
              for (var u = 0; u < s._howls[c]._sounds.length; u++)
                if (!s._howls[c]._sounds[u]._paused) return s;
            }
          return (
            s._suspendTimer && clearTimeout(s._suspendTimer),
            (s._suspendTimer = setTimeout(function () {
              if (!!s.autoSuspend) {
                (s._suspendTimer = null), (s.state = "suspending");
                var h = function () {
                  (s.state = "suspended"),
                    s._resumeAfterSuspend &&
                      (delete s._resumeAfterSuspend, s._autoResume());
                };
                s.ctx.suspend().then(h, h);
              }
            }, 3e4)),
            s
          );
        }
      },
      _autoResume: function () {
        var s = this;
        if (!(!s.ctx || typeof s.ctx.resume > "u" || !n.usingWebAudio))
          return (
            s.state === "running" &&
            s.ctx.state !== "interrupted" &&
            s._suspendTimer
              ? (clearTimeout(s._suspendTimer), (s._suspendTimer = null))
              : s.state === "suspended" ||
                (s.state === "running" && s.ctx.state === "interrupted")
              ? (s.ctx.resume().then(function () {
                  s.state = "running";
                  for (var c = 0; c < s._howls.length; c++)
                    s._howls[c]._emit("resume");
                }),
                s._suspendTimer &&
                  (clearTimeout(s._suspendTimer), (s._suspendTimer = null)))
              : s.state === "suspending" && (s._resumeAfterSuspend = !0),
            s
          );
      },
    };
    var n = new t(),
      r = function (s) {
        var c = this;
        if (!s.src || s.src.length === 0) {
          console.error(
            "An array of source files must be passed with any new Howl."
          );
          return;
        }
        c.init(s);
      };
    r.prototype = {
      init: function (s) {
        var c = this;
        return (
          n.ctx || g(),
          (c._autoplay = s.autoplay || !1),
          (c._format = typeof s.format != "string" ? s.format : [s.format]),
          (c._html5 = s.html5 || !1),
          (c._muted = s.mute || !1),
          (c._loop = s.loop || !1),
          (c._pool = s.pool || 5),
          (c._preload =
            typeof s.preload == "boolean" || s.preload === "metadata"
              ? s.preload
              : !0),
          (c._rate = s.rate || 1),
          (c._sprite = s.sprite || {}),
          (c._src = typeof s.src != "string" ? s.src : [s.src]),
          (c._volume = s.volume !== void 0 ? s.volume : 1),
          (c._xhr = {
            method: s.xhr && s.xhr.method ? s.xhr.method : "GET",
            headers: s.xhr && s.xhr.headers ? s.xhr.headers : null,
            withCredentials:
              s.xhr && s.xhr.withCredentials ? s.xhr.withCredentials : !1,
          }),
          (c._duration = 0),
          (c._state = "unloaded"),
          (c._sounds = []),
          (c._endTimers = {}),
          (c._queue = []),
          (c._playLock = !1),
          (c._onend = s.onend ? [{ fn: s.onend }] : []),
          (c._onfade = s.onfade ? [{ fn: s.onfade }] : []),
          (c._onload = s.onload ? [{ fn: s.onload }] : []),
          (c._onloaderror = s.onloaderror ? [{ fn: s.onloaderror }] : []),
          (c._onplayerror = s.onplayerror ? [{ fn: s.onplayerror }] : []),
          (c._onpause = s.onpause ? [{ fn: s.onpause }] : []),
          (c._onplay = s.onplay ? [{ fn: s.onplay }] : []),
          (c._onstop = s.onstop ? [{ fn: s.onstop }] : []),
          (c._onmute = s.onmute ? [{ fn: s.onmute }] : []),
          (c._onvolume = s.onvolume ? [{ fn: s.onvolume }] : []),
          (c._onrate = s.onrate ? [{ fn: s.onrate }] : []),
          (c._onseek = s.onseek ? [{ fn: s.onseek }] : []),
          (c._onunlock = s.onunlock ? [{ fn: s.onunlock }] : []),
          (c._onresume = []),
          (c._webAudio = n.usingWebAudio && !c._html5),
          typeof n.ctx < "u" && n.ctx && n.autoUnlock && n._unlockAudio(),
          n._howls.push(c),
          c._autoplay &&
            c._queue.push({
              event: "play",
              action: function () {
                c.play();
              },
            }),
          c._preload && c._preload !== "none" && c.load(),
          c
        );
      },
      load: function () {
        var s = this,
          c = null;
        if (n.noAudio) {
          s._emit("loaderror", null, "No audio support.");
          return;
        }
        typeof s._src == "string" && (s._src = [s._src]);
        for (var u = 0; u < s._src.length; u++) {
          var h, _;
          if (s._format && s._format[u]) h = s._format[u];
          else {
            if (((_ = s._src[u]), typeof _ != "string")) {
              s._emit(
                "loaderror",
                null,
                "Non-string found in selected audio sources - ignoring."
              );
              continue;
            }
            (h = /^data:audio\/([^;,]+);/i.exec(_)),
              h || (h = /\.([^.]+)$/.exec(_.split("?", 1)[0])),
              h && (h = h[1].toLowerCase());
          }
          if (
            (h ||
              console.warn(
                'No file extension was found. Consider using the "format" property or specify an extension.'
              ),
            h && n.codecs(h))
          ) {
            c = s._src[u];
            break;
          }
        }
        if (!c) {
          s._emit(
            "loaderror",
            null,
            "No codec support for selected audio sources."
          );
          return;
        }
        return (
          (s._src = c),
          (s._state = "loading"),
          window.location.protocol === "https:" &&
            c.slice(0, 5) === "http:" &&
            ((s._html5 = !0), (s._webAudio = !1)),
          new i(s),
          s._webAudio && a(s),
          s
        );
      },
      play: function (s, c) {
        var u = this,
          h = null;
        if (typeof s == "number") (h = s), (s = null);
        else {
          if (typeof s == "string" && u._state === "loaded" && !u._sprite[s])
            return null;
          if (typeof s > "u" && ((s = "__default"), !u._playLock)) {
            for (var _ = 0, p = 0; p < u._sounds.length; p++)
              u._sounds[p]._paused &&
                !u._sounds[p]._ended &&
                (_++, (h = u._sounds[p]._id));
            _ === 1 ? (s = null) : (h = null);
          }
        }
        var m = h ? u._soundById(h) : u._inactiveSound();
        if (!m) return null;
        if (
          (h && !s && (s = m._sprite || "__default"), u._state !== "loaded")
        ) {
          (m._sprite = s), (m._ended = !1);
          var b = m._id;
          return (
            u._queue.push({
              event: "play",
              action: function () {
                u.play(b);
              },
            }),
            b
          );
        }
        if (h && !m._paused) return c || u._loadQueue("play"), m._id;
        u._webAudio && n._autoResume();
        var O = Math.max(0, m._seek > 0 ? m._seek : u._sprite[s][0] / 1e3),
          D = Math.max(0, (u._sprite[s][0] + u._sprite[s][1]) / 1e3 - O),
          M = (D * 1e3) / Math.abs(m._rate),
          I = u._sprite[s][0] / 1e3,
          V = (u._sprite[s][0] + u._sprite[s][1]) / 1e3;
        (m._sprite = s), (m._ended = !1);
        var F = function () {
          (m._paused = !1),
            (m._seek = O),
            (m._start = I),
            (m._stop = V),
            (m._loop = !!(m._loop || u._sprite[s][2]));
        };
        if (O >= V) {
          u._ended(m);
          return;
        }
        var $ = m._node;
        if (u._webAudio) {
          var N = function () {
            (u._playLock = !1), F(), u._refreshBuffer(m);
            var E = m._muted || u._muted ? 0 : m._volume;
            $.gain.setValueAtTime(E, n.ctx.currentTime),
              (m._playStart = n.ctx.currentTime),
              typeof $.bufferSource.start > "u"
                ? m._loop
                  ? $.bufferSource.noteGrainOn(0, O, 86400)
                  : $.bufferSource.noteGrainOn(0, O, D)
                : m._loop
                ? $.bufferSource.start(0, O, 86400)
                : $.bufferSource.start(0, O, D),
              M !== 1 / 0 &&
                (u._endTimers[m._id] = setTimeout(u._ended.bind(u, m), M)),
              c ||
                setTimeout(function () {
                  u._emit("play", m._id), u._loadQueue();
                }, 0);
          };
          n.state === "running" && n.ctx.state !== "interrupted"
            ? N()
            : ((u._playLock = !0), u.once("resume", N), u._clearTimer(m._id));
        } else {
          var U = function () {
            ($.currentTime = O),
              ($.muted = m._muted || u._muted || n._muted || $.muted),
              ($.volume = m._volume * n.volume()),
              ($.playbackRate = m._rate);
            try {
              var E = $.play();
              if (
                (E &&
                typeof Promise < "u" &&
                (E instanceof Promise || typeof E.then == "function")
                  ? ((u._playLock = !0),
                    F(),
                    E.then(function () {
                      (u._playLock = !1),
                        ($._unlocked = !0),
                        c ? u._loadQueue() : u._emit("play", m._id);
                    }).catch(function () {
                      (u._playLock = !1),
                        u._emit(
                          "playerror",
                          m._id,
                          "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                        ),
                        (m._ended = !0),
                        (m._paused = !0);
                    }))
                  : c || ((u._playLock = !1), F(), u._emit("play", m._id)),
                ($.playbackRate = m._rate),
                $.paused)
              ) {
                u._emit(
                  "playerror",
                  m._id,
                  "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                );
                return;
              }
              s !== "__default" || m._loop
                ? (u._endTimers[m._id] = setTimeout(u._ended.bind(u, m), M))
                : ((u._endTimers[m._id] = function () {
                    u._ended(m),
                      $.removeEventListener("ended", u._endTimers[m._id], !1);
                  }),
                  $.addEventListener("ended", u._endTimers[m._id], !1));
            } catch (v) {
              u._emit("playerror", m._id, v);
            }
          };
          $.src ===
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" &&
            (($.src = u._src), $.load());
          var Q =
            (window && window.ejecta) ||
            (!$.readyState && n._navigator.isCocoonJS);
          if ($.readyState >= 3 || Q) U();
          else {
            (u._playLock = !0), (u._state = "loading");
            var w = function () {
              (u._state = "loaded"),
                U(),
                $.removeEventListener(n._canPlayEvent, w, !1);
            };
            $.addEventListener(n._canPlayEvent, w, !1), u._clearTimer(m._id);
          }
        }
        return m._id;
      },
      pause: function (s) {
        var c = this;
        if (c._state !== "loaded" || c._playLock)
          return (
            c._queue.push({
              event: "pause",
              action: function () {
                c.pause(s);
              },
            }),
            c
          );
        for (var u = c._getSoundIds(s), h = 0; h < u.length; h++) {
          c._clearTimer(u[h]);
          var _ = c._soundById(u[h]);
          if (
            _ &&
            !_._paused &&
            ((_._seek = c.seek(u[h])),
            (_._rateSeek = 0),
            (_._paused = !0),
            c._stopFade(u[h]),
            _._node)
          )
            if (c._webAudio) {
              if (!_._node.bufferSource) continue;
              typeof _._node.bufferSource.stop > "u"
                ? _._node.bufferSource.noteOff(0)
                : _._node.bufferSource.stop(0),
                c._cleanBuffer(_._node);
            } else
              (!isNaN(_._node.duration) || _._node.duration === 1 / 0) &&
                _._node.pause();
          arguments[1] || c._emit("pause", _ ? _._id : null);
        }
        return c;
      },
      stop: function (s, c) {
        var u = this;
        if (u._state !== "loaded" || u._playLock)
          return (
            u._queue.push({
              event: "stop",
              action: function () {
                u.stop(s);
              },
            }),
            u
          );
        for (var h = u._getSoundIds(s), _ = 0; _ < h.length; _++) {
          u._clearTimer(h[_]);
          var p = u._soundById(h[_]);
          p &&
            ((p._seek = p._start || 0),
            (p._rateSeek = 0),
            (p._paused = !0),
            (p._ended = !0),
            u._stopFade(h[_]),
            p._node &&
              (u._webAudio
                ? p._node.bufferSource &&
                  (typeof p._node.bufferSource.stop > "u"
                    ? p._node.bufferSource.noteOff(0)
                    : p._node.bufferSource.stop(0),
                  u._cleanBuffer(p._node))
                : (!isNaN(p._node.duration) || p._node.duration === 1 / 0) &&
                  ((p._node.currentTime = p._start || 0),
                  p._node.pause(),
                  p._node.duration === 1 / 0 && u._clearSound(p._node))),
            c || u._emit("stop", p._id));
        }
        return u;
      },
      mute: function (s, c) {
        var u = this;
        if (u._state !== "loaded" || u._playLock)
          return (
            u._queue.push({
              event: "mute",
              action: function () {
                u.mute(s, c);
              },
            }),
            u
          );
        if (typeof c > "u")
          if (typeof s == "boolean") u._muted = s;
          else return u._muted;
        for (var h = u._getSoundIds(c), _ = 0; _ < h.length; _++) {
          var p = u._soundById(h[_]);
          p &&
            ((p._muted = s),
            p._interval && u._stopFade(p._id),
            u._webAudio && p._node
              ? p._node.gain.setValueAtTime(
                  s ? 0 : p._volume,
                  n.ctx.currentTime
                )
              : p._node && (p._node.muted = n._muted ? !0 : s),
            u._emit("mute", p._id));
        }
        return u;
      },
      volume: function () {
        var s = this,
          c = arguments,
          u,
          h;
        if (c.length === 0) return s._volume;
        if (c.length === 1 || (c.length === 2 && typeof c[1] > "u")) {
          var _ = s._getSoundIds(),
            p = _.indexOf(c[0]);
          p >= 0 ? (h = parseInt(c[0], 10)) : (u = parseFloat(c[0]));
        } else
          c.length >= 2 && ((u = parseFloat(c[0])), (h = parseInt(c[1], 10)));
        var m;
        if (typeof u < "u" && u >= 0 && u <= 1) {
          if (s._state !== "loaded" || s._playLock)
            return (
              s._queue.push({
                event: "volume",
                action: function () {
                  s.volume.apply(s, c);
                },
              }),
              s
            );
          typeof h > "u" && (s._volume = u), (h = s._getSoundIds(h));
          for (var b = 0; b < h.length; b++)
            (m = s._soundById(h[b])),
              m &&
                ((m._volume = u),
                c[2] || s._stopFade(h[b]),
                s._webAudio && m._node && !m._muted
                  ? m._node.gain.setValueAtTime(u, n.ctx.currentTime)
                  : m._node && !m._muted && (m._node.volume = u * n.volume()),
                s._emit("volume", m._id));
        } else
          return (m = h ? s._soundById(h) : s._sounds[0]), m ? m._volume : 0;
        return s;
      },
      fade: function (s, c, u, h) {
        var _ = this;
        if (_._state !== "loaded" || _._playLock)
          return (
            _._queue.push({
              event: "fade",
              action: function () {
                _.fade(s, c, u, h);
              },
            }),
            _
          );
        (s = Math.min(Math.max(0, parseFloat(s)), 1)),
          (c = Math.min(Math.max(0, parseFloat(c)), 1)),
          (u = parseFloat(u)),
          _.volume(s, h);
        for (var p = _._getSoundIds(h), m = 0; m < p.length; m++) {
          var b = _._soundById(p[m]);
          if (b) {
            if ((h || _._stopFade(p[m]), _._webAudio && !b._muted)) {
              var O = n.ctx.currentTime,
                D = O + u / 1e3;
              (b._volume = s),
                b._node.gain.setValueAtTime(s, O),
                b._node.gain.linearRampToValueAtTime(c, D);
            }
            _._startFadeInterval(b, s, c, u, p[m], typeof h > "u");
          }
        }
        return _;
      },
      _startFadeInterval: function (s, c, u, h, _, p) {
        var m = this,
          b = c,
          O = u - c,
          D = Math.abs(O / 0.01),
          M = Math.max(4, D > 0 ? h / D : h),
          I = Date.now();
        (s._fadeTo = u),
          (s._interval = setInterval(function () {
            var V = (Date.now() - I) / h;
            (I = Date.now()),
              (b += O * V),
              (b = Math.round(b * 100) / 100),
              O < 0 ? (b = Math.max(u, b)) : (b = Math.min(u, b)),
              m._webAudio ? (s._volume = b) : m.volume(b, s._id, !0),
              p && (m._volume = b),
              ((u < c && b <= u) || (u > c && b >= u)) &&
                (clearInterval(s._interval),
                (s._interval = null),
                (s._fadeTo = null),
                m.volume(u, s._id),
                m._emit("fade", s._id));
          }, M));
      },
      _stopFade: function (s) {
        var c = this,
          u = c._soundById(s);
        return (
          u &&
            u._interval &&
            (c._webAudio &&
              u._node.gain.cancelScheduledValues(n.ctx.currentTime),
            clearInterval(u._interval),
            (u._interval = null),
            c.volume(u._fadeTo, s),
            (u._fadeTo = null),
            c._emit("fade", s)),
          c
        );
      },
      loop: function () {
        var s = this,
          c = arguments,
          u,
          h,
          _;
        if (c.length === 0) return s._loop;
        if (c.length === 1)
          if (typeof c[0] == "boolean") (u = c[0]), (s._loop = u);
          else return (_ = s._soundById(parseInt(c[0], 10))), _ ? _._loop : !1;
        else c.length === 2 && ((u = c[0]), (h = parseInt(c[1], 10)));
        for (var p = s._getSoundIds(h), m = 0; m < p.length; m++)
          (_ = s._soundById(p[m])),
            _ &&
              ((_._loop = u),
              s._webAudio &&
                _._node &&
                _._node.bufferSource &&
                ((_._node.bufferSource.loop = u),
                u &&
                  ((_._node.bufferSource.loopStart = _._start || 0),
                  (_._node.bufferSource.loopEnd = _._stop),
                  s.playing(p[m]) && (s.pause(p[m], !0), s.play(p[m], !0)))));
        return s;
      },
      rate: function () {
        var s = this,
          c = arguments,
          u,
          h;
        if (c.length === 0) h = s._sounds[0]._id;
        else if (c.length === 1) {
          var _ = s._getSoundIds(),
            p = _.indexOf(c[0]);
          p >= 0 ? (h = parseInt(c[0], 10)) : (u = parseFloat(c[0]));
        } else
          c.length === 2 && ((u = parseFloat(c[0])), (h = parseInt(c[1], 10)));
        var m;
        if (typeof u == "number") {
          if (s._state !== "loaded" || s._playLock)
            return (
              s._queue.push({
                event: "rate",
                action: function () {
                  s.rate.apply(s, c);
                },
              }),
              s
            );
          typeof h > "u" && (s._rate = u), (h = s._getSoundIds(h));
          for (var b = 0; b < h.length; b++)
            if (((m = s._soundById(h[b])), m)) {
              s.playing(h[b]) &&
                ((m._rateSeek = s.seek(h[b])),
                (m._playStart = s._webAudio
                  ? n.ctx.currentTime
                  : m._playStart)),
                (m._rate = u),
                s._webAudio && m._node && m._node.bufferSource
                  ? m._node.bufferSource.playbackRate.setValueAtTime(
                      u,
                      n.ctx.currentTime
                    )
                  : m._node && (m._node.playbackRate = u);
              var O = s.seek(h[b]),
                D =
                  (s._sprite[m._sprite][0] + s._sprite[m._sprite][1]) / 1e3 - O,
                M = (D * 1e3) / Math.abs(m._rate);
              (s._endTimers[h[b]] || !m._paused) &&
                (s._clearTimer(h[b]),
                (s._endTimers[h[b]] = setTimeout(s._ended.bind(s, m), M))),
                s._emit("rate", m._id);
            }
        } else return (m = s._soundById(h)), m ? m._rate : s._rate;
        return s;
      },
      seek: function () {
        var s = this,
          c = arguments,
          u,
          h;
        if (c.length === 0) s._sounds.length && (h = s._sounds[0]._id);
        else if (c.length === 1) {
          var _ = s._getSoundIds(),
            p = _.indexOf(c[0]);
          p >= 0
            ? (h = parseInt(c[0], 10))
            : s._sounds.length &&
              ((h = s._sounds[0]._id), (u = parseFloat(c[0])));
        } else
          c.length === 2 && ((u = parseFloat(c[0])), (h = parseInt(c[1], 10)));
        if (typeof h > "u") return 0;
        if (typeof u == "number" && (s._state !== "loaded" || s._playLock))
          return (
            s._queue.push({
              event: "seek",
              action: function () {
                s.seek.apply(s, c);
              },
            }),
            s
          );
        var m = s._soundById(h);
        if (m)
          if (typeof u == "number" && u >= 0) {
            var b = s.playing(h);
            b && s.pause(h, !0),
              (m._seek = u),
              (m._ended = !1),
              s._clearTimer(h),
              !s._webAudio &&
                m._node &&
                !isNaN(m._node.duration) &&
                (m._node.currentTime = u);
            var O = function () {
              b && s.play(h, !0), s._emit("seek", h);
            };
            if (b && !s._webAudio) {
              var D = function () {
                s._playLock ? setTimeout(D, 0) : O();
              };
              setTimeout(D, 0);
            } else O();
          } else if (s._webAudio) {
            var M = s.playing(h) ? n.ctx.currentTime - m._playStart : 0,
              I = m._rateSeek ? m._rateSeek - m._seek : 0;
            return m._seek + (I + M * Math.abs(m._rate));
          } else return m._node.currentTime;
        return s;
      },
      playing: function (s) {
        var c = this;
        if (typeof s == "number") {
          var u = c._soundById(s);
          return u ? !u._paused : !1;
        }
        for (var h = 0; h < c._sounds.length; h++)
          if (!c._sounds[h]._paused) return !0;
        return !1;
      },
      duration: function (s) {
        var c = this,
          u = c._duration,
          h = c._soundById(s);
        return h && (u = c._sprite[h._sprite][1] / 1e3), u;
      },
      state: function () {
        return this._state;
      },
      unload: function () {
        for (var s = this, c = s._sounds, u = 0; u < c.length; u++)
          c[u]._paused || s.stop(c[u]._id),
            s._webAudio ||
              (s._clearSound(c[u]._node),
              c[u]._node.removeEventListener("error", c[u]._errorFn, !1),
              c[u]._node.removeEventListener(n._canPlayEvent, c[u]._loadFn, !1),
              c[u]._node.removeEventListener("ended", c[u]._endFn, !1),
              n._releaseHtml5Audio(c[u]._node)),
            delete c[u]._node,
            s._clearTimer(c[u]._id);
        var h = n._howls.indexOf(s);
        h >= 0 && n._howls.splice(h, 1);
        var _ = !0;
        for (u = 0; u < n._howls.length; u++)
          if (
            n._howls[u]._src === s._src ||
            s._src.indexOf(n._howls[u]._src) >= 0
          ) {
            _ = !1;
            break;
          }
        return (
          o && _ && delete o[s._src],
          (n.noAudio = !1),
          (s._state = "unloaded"),
          (s._sounds = []),
          (s = null),
          null
        );
      },
      on: function (s, c, u, h) {
        var _ = this,
          p = _["_on" + s];
        return (
          typeof c == "function" &&
            p.push(h ? { id: u, fn: c, once: h } : { id: u, fn: c }),
          _
        );
      },
      off: function (s, c, u) {
        var h = this,
          _ = h["_on" + s],
          p = 0;
        if ((typeof c == "number" && ((u = c), (c = null)), c || u))
          for (p = 0; p < _.length; p++) {
            var m = u === _[p].id;
            if ((c === _[p].fn && m) || (!c && m)) {
              _.splice(p, 1);
              break;
            }
          }
        else if (s) h["_on" + s] = [];
        else {
          var b = Object.keys(h);
          for (p = 0; p < b.length; p++)
            b[p].indexOf("_on") === 0 &&
              Array.isArray(h[b[p]]) &&
              (h[b[p]] = []);
        }
        return h;
      },
      once: function (s, c, u) {
        var h = this;
        return h.on(s, c, u, 1), h;
      },
      _emit: function (s, c, u) {
        for (var h = this, _ = h["_on" + s], p = _.length - 1; p >= 0; p--)
          (!_[p].id || _[p].id === c || s === "load") &&
            (setTimeout(
              function (m) {
                m.call(this, c, u);
              }.bind(h, _[p].fn),
              0
            ),
            _[p].once && h.off(s, _[p].fn, _[p].id));
        return h._loadQueue(s), h;
      },
      _loadQueue: function (s) {
        var c = this;
        if (c._queue.length > 0) {
          var u = c._queue[0];
          u.event === s && (c._queue.shift(), c._loadQueue()), s || u.action();
        }
        return c;
      },
      _ended: function (s) {
        var c = this,
          u = s._sprite;
        if (
          !c._webAudio &&
          s._node &&
          !s._node.paused &&
          !s._node.ended &&
          s._node.currentTime < s._stop
        )
          return setTimeout(c._ended.bind(c, s), 100), c;
        var h = !!(s._loop || c._sprite[u][2]);
        if (
          (c._emit("end", s._id),
          !c._webAudio && h && c.stop(s._id, !0).play(s._id),
          c._webAudio && h)
        ) {
          c._emit("play", s._id),
            (s._seek = s._start || 0),
            (s._rateSeek = 0),
            (s._playStart = n.ctx.currentTime);
          var _ = ((s._stop - s._start) * 1e3) / Math.abs(s._rate);
          c._endTimers[s._id] = setTimeout(c._ended.bind(c, s), _);
        }
        return (
          c._webAudio &&
            !h &&
            ((s._paused = !0),
            (s._ended = !0),
            (s._seek = s._start || 0),
            (s._rateSeek = 0),
            c._clearTimer(s._id),
            c._cleanBuffer(s._node),
            n._autoSuspend()),
          !c._webAudio && !h && c.stop(s._id, !0),
          c
        );
      },
      _clearTimer: function (s) {
        var c = this;
        if (c._endTimers[s]) {
          if (typeof c._endTimers[s] != "function")
            clearTimeout(c._endTimers[s]);
          else {
            var u = c._soundById(s);
            u &&
              u._node &&
              u._node.removeEventListener("ended", c._endTimers[s], !1);
          }
          delete c._endTimers[s];
        }
        return c;
      },
      _soundById: function (s) {
        for (var c = this, u = 0; u < c._sounds.length; u++)
          if (s === c._sounds[u]._id) return c._sounds[u];
        return null;
      },
      _inactiveSound: function () {
        var s = this;
        s._drain();
        for (var c = 0; c < s._sounds.length; c++)
          if (s._sounds[c]._ended) return s._sounds[c].reset();
        return new i(s);
      },
      _drain: function () {
        var s = this,
          c = s._pool,
          u = 0,
          h = 0;
        if (!(s._sounds.length < c)) {
          for (h = 0; h < s._sounds.length; h++) s._sounds[h]._ended && u++;
          for (h = s._sounds.length - 1; h >= 0; h--) {
            if (u <= c) return;
            s._sounds[h]._ended &&
              (s._webAudio &&
                s._sounds[h]._node &&
                s._sounds[h]._node.disconnect(0),
              s._sounds.splice(h, 1),
              u--);
          }
        }
      },
      _getSoundIds: function (s) {
        var c = this;
        if (typeof s > "u") {
          for (var u = [], h = 0; h < c._sounds.length; h++)
            u.push(c._sounds[h]._id);
          return u;
        } else return [s];
      },
      _refreshBuffer: function (s) {
        var c = this;
        return (
          (s._node.bufferSource = n.ctx.createBufferSource()),
          (s._node.bufferSource.buffer = o[c._src]),
          s._panner
            ? s._node.bufferSource.connect(s._panner)
            : s._node.bufferSource.connect(s._node),
          (s._node.bufferSource.loop = s._loop),
          s._loop &&
            ((s._node.bufferSource.loopStart = s._start || 0),
            (s._node.bufferSource.loopEnd = s._stop || 0)),
          s._node.bufferSource.playbackRate.setValueAtTime(
            s._rate,
            n.ctx.currentTime
          ),
          c
        );
      },
      _cleanBuffer: function (s) {
        var c = this,
          u = n._navigator && n._navigator.vendor.indexOf("Apple") >= 0;
        if (
          n._scratchBuffer &&
          s.bufferSource &&
          ((s.bufferSource.onended = null), s.bufferSource.disconnect(0), u)
        )
          try {
            s.bufferSource.buffer = n._scratchBuffer;
          } catch {}
        return (s.bufferSource = null), c;
      },
      _clearSound: function (s) {
        var c = /MSIE |Trident\//.test(n._navigator && n._navigator.userAgent);
        c ||
          (s.src =
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
      },
    };
    var i = function (s) {
      (this._parent = s), this.init();
    };
    i.prototype = {
      init: function () {
        var s = this,
          c = s._parent;
        return (
          (s._muted = c._muted),
          (s._loop = c._loop),
          (s._volume = c._volume),
          (s._rate = c._rate),
          (s._seek = 0),
          (s._paused = !0),
          (s._ended = !0),
          (s._sprite = "__default"),
          (s._id = ++n._counter),
          c._sounds.push(s),
          s.create(),
          s
        );
      },
      create: function () {
        var s = this,
          c = s._parent,
          u = n._muted || s._muted || s._parent._muted ? 0 : s._volume;
        return (
          c._webAudio
            ? ((s._node =
                typeof n.ctx.createGain > "u"
                  ? n.ctx.createGainNode()
                  : n.ctx.createGain()),
              s._node.gain.setValueAtTime(u, n.ctx.currentTime),
              (s._node.paused = !0),
              s._node.connect(n.masterGain))
            : n.noAudio ||
              ((s._node = n._obtainHtml5Audio()),
              (s._errorFn = s._errorListener.bind(s)),
              s._node.addEventListener("error", s._errorFn, !1),
              (s._loadFn = s._loadListener.bind(s)),
              s._node.addEventListener(n._canPlayEvent, s._loadFn, !1),
              (s._endFn = s._endListener.bind(s)),
              s._node.addEventListener("ended", s._endFn, !1),
              (s._node.src = c._src),
              (s._node.preload = c._preload === !0 ? "auto" : c._preload),
              (s._node.volume = u * n.volume()),
              s._node.load()),
          s
        );
      },
      reset: function () {
        var s = this,
          c = s._parent;
        return (
          (s._muted = c._muted),
          (s._loop = c._loop),
          (s._volume = c._volume),
          (s._rate = c._rate),
          (s._seek = 0),
          (s._rateSeek = 0),
          (s._paused = !0),
          (s._ended = !0),
          (s._sprite = "__default"),
          (s._id = ++n._counter),
          s
        );
      },
      _errorListener: function () {
        var s = this;
        s._parent._emit(
          "loaderror",
          s._id,
          s._node.error ? s._node.error.code : 0
        ),
          s._node.removeEventListener("error", s._errorFn, !1);
      },
      _loadListener: function () {
        var s = this,
          c = s._parent;
        (c._duration = Math.ceil(s._node.duration * 10) / 10),
          Object.keys(c._sprite).length === 0 &&
            (c._sprite = { __default: [0, c._duration * 1e3] }),
          c._state !== "loaded" &&
            ((c._state = "loaded"), c._emit("load"), c._loadQueue()),
          s._node.removeEventListener(n._canPlayEvent, s._loadFn, !1);
      },
      _endListener: function () {
        var s = this,
          c = s._parent;
        c._duration === 1 / 0 &&
          ((c._duration = Math.ceil(s._node.duration * 10) / 10),
          c._sprite.__default[1] === 1 / 0 &&
            (c._sprite.__default[1] = c._duration * 1e3),
          c._ended(s)),
          s._node.removeEventListener("ended", s._endFn, !1);
      },
    };
    var o = {},
      a = function (s) {
        var c = s._src;
        if (o[c]) {
          (s._duration = o[c].duration), d(s);
          return;
        }
        if (/^data:[^;]+;base64,/.test(c)) {
          for (
            var u = atob(c.split(",")[1]), h = new Uint8Array(u.length), _ = 0;
            _ < u.length;
            ++_
          )
            h[_] = u.charCodeAt(_);
          f(h.buffer, s);
        } else {
          var p = new XMLHttpRequest();
          p.open(s._xhr.method, c, !0),
            (p.withCredentials = s._xhr.withCredentials),
            (p.responseType = "arraybuffer"),
            s._xhr.headers &&
              Object.keys(s._xhr.headers).forEach(function (m) {
                p.setRequestHeader(m, s._xhr.headers[m]);
              }),
            (p.onload = function () {
              var m = (p.status + "")[0];
              if (m !== "0" && m !== "2" && m !== "3") {
                s._emit(
                  "loaderror",
                  null,
                  "Failed loading audio file with status: " + p.status + "."
                );
                return;
              }
              f(p.response, s);
            }),
            (p.onerror = function () {
              s._webAudio &&
                ((s._html5 = !0),
                (s._webAudio = !1),
                (s._sounds = []),
                delete o[c],
                s.load());
            }),
            l(p);
        }
      },
      l = function (s) {
        try {
          s.send();
        } catch {
          s.onerror();
        }
      },
      f = function (s, c) {
        var u = function () {
            c._emit("loaderror", null, "Decoding audio data failed.");
          },
          h = function (_) {
            _ && c._sounds.length > 0 ? ((o[c._src] = _), d(c, _)) : u();
          };
        typeof Promise < "u" && n.ctx.decodeAudioData.length === 1
          ? n.ctx.decodeAudioData(s).then(h).catch(u)
          : n.ctx.decodeAudioData(s, h, u);
      },
      d = function (s, c) {
        c && !s._duration && (s._duration = c.duration),
          Object.keys(s._sprite).length === 0 &&
            (s._sprite = { __default: [0, s._duration * 1e3] }),
          s._state !== "loaded" &&
            ((s._state = "loaded"), s._emit("load"), s._loadQueue());
      },
      g = function () {
        if (!!n.usingWebAudio) {
          try {
            typeof AudioContext < "u"
              ? (n.ctx = new AudioContext())
              : typeof webkitAudioContext < "u"
              ? (n.ctx = new webkitAudioContext())
              : (n.usingWebAudio = !1);
          } catch {
            n.usingWebAudio = !1;
          }
          n.ctx || (n.usingWebAudio = !1);
          var s = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform),
            c =
              n._navigator &&
              n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
            u = c ? parseInt(c[1], 10) : null;
          if (s && u && u < 9) {
            var h = /safari/.test(
              n._navigator && n._navigator.userAgent.toLowerCase()
            );
            n._navigator && !h && (n.usingWebAudio = !1);
          }
          n.usingWebAudio &&
            ((n.masterGain =
              typeof n.ctx.createGain > "u"
                ? n.ctx.createGainNode()
                : n.ctx.createGain()),
            n.masterGain.gain.setValueAtTime(
              n._muted ? 0 : n._volume,
              n.ctx.currentTime
            ),
            n.masterGain.connect(n.ctx.destination)),
            n._setup();
        }
      };
    (e.Howler = n),
      (e.Howl = r),
      typeof Te < "u"
        ? ((Te.HowlerGlobal = t),
          (Te.Howler = n),
          (Te.Howl = r),
          (Te.Sound = i))
        : typeof window < "u" &&
          ((window.HowlerGlobal = t),
          (window.Howler = n),
          (window.Howl = r),
          (window.Sound = i));
  })();
  /*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *
   *  howler.js v2.2.3
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   */ (function () {
    (HowlerGlobal.prototype._pos = [0, 0, 0]),
      (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
      (HowlerGlobal.prototype.stereo = function (n) {
        var r = this;
        if (!r.ctx || !r.ctx.listener) return r;
        for (var i = r._howls.length - 1; i >= 0; i--) r._howls[i].stereo(n);
        return r;
      }),
      (HowlerGlobal.prototype.pos = function (n, r, i) {
        var o = this;
        if (!o.ctx || !o.ctx.listener) return o;
        if (
          ((r = typeof r != "number" ? o._pos[1] : r),
          (i = typeof i != "number" ? o._pos[2] : i),
          typeof n == "number")
        )
          (o._pos = [n, r, i]),
            typeof o.ctx.listener.positionX < "u"
              ? (o.ctx.listener.positionX.setTargetAtTime(
                  o._pos[0],
                  Howler.ctx.currentTime,
                  0.1
                ),
                o.ctx.listener.positionY.setTargetAtTime(
                  o._pos[1],
                  Howler.ctx.currentTime,
                  0.1
                ),
                o.ctx.listener.positionZ.setTargetAtTime(
                  o._pos[2],
                  Howler.ctx.currentTime,
                  0.1
                ))
              : o.ctx.listener.setPosition(o._pos[0], o._pos[1], o._pos[2]);
        else return o._pos;
        return o;
      }),
      (HowlerGlobal.prototype.orientation = function (n, r, i, o, a, l) {
        var f = this;
        if (!f.ctx || !f.ctx.listener) return f;
        var d = f._orientation;
        if (
          ((r = typeof r != "number" ? d[1] : r),
          (i = typeof i != "number" ? d[2] : i),
          (o = typeof o != "number" ? d[3] : o),
          (a = typeof a != "number" ? d[4] : a),
          (l = typeof l != "number" ? d[5] : l),
          typeof n == "number")
        )
          (f._orientation = [n, r, i, o, a, l]),
            typeof f.ctx.listener.forwardX < "u"
              ? (f.ctx.listener.forwardX.setTargetAtTime(
                  n,
                  Howler.ctx.currentTime,
                  0.1
                ),
                f.ctx.listener.forwardY.setTargetAtTime(
                  r,
                  Howler.ctx.currentTime,
                  0.1
                ),
                f.ctx.listener.forwardZ.setTargetAtTime(
                  i,
                  Howler.ctx.currentTime,
                  0.1
                ),
                f.ctx.listener.upX.setTargetAtTime(
                  o,
                  Howler.ctx.currentTime,
                  0.1
                ),
                f.ctx.listener.upY.setTargetAtTime(
                  a,
                  Howler.ctx.currentTime,
                  0.1
                ),
                f.ctx.listener.upZ.setTargetAtTime(
                  l,
                  Howler.ctx.currentTime,
                  0.1
                ))
              : f.ctx.listener.setOrientation(n, r, i, o, a, l);
        else return d;
        return f;
      }),
      (Howl.prototype.init = (function (n) {
        return function (r) {
          var i = this;
          return (
            (i._orientation = r.orientation || [1, 0, 0]),
            (i._stereo = r.stereo || null),
            (i._pos = r.pos || null),
            (i._pannerAttr = {
              coneInnerAngle:
                typeof r.coneInnerAngle < "u" ? r.coneInnerAngle : 360,
              coneOuterAngle:
                typeof r.coneOuterAngle < "u" ? r.coneOuterAngle : 360,
              coneOuterGain: typeof r.coneOuterGain < "u" ? r.coneOuterGain : 0,
              distanceModel:
                typeof r.distanceModel < "u" ? r.distanceModel : "inverse",
              maxDistance: typeof r.maxDistance < "u" ? r.maxDistance : 1e4,
              panningModel:
                typeof r.panningModel < "u" ? r.panningModel : "HRTF",
              refDistance: typeof r.refDistance < "u" ? r.refDistance : 1,
              rolloffFactor: typeof r.rolloffFactor < "u" ? r.rolloffFactor : 1,
            }),
            (i._onstereo = r.onstereo ? [{ fn: r.onstereo }] : []),
            (i._onpos = r.onpos ? [{ fn: r.onpos }] : []),
            (i._onorientation = r.onorientation
              ? [{ fn: r.onorientation }]
              : []),
            n.call(this, r)
          );
        };
      })(Howl.prototype.init)),
      (Howl.prototype.stereo = function (n, r) {
        var i = this;
        if (!i._webAudio) return i;
        if (i._state !== "loaded")
          return (
            i._queue.push({
              event: "stereo",
              action: function () {
                i.stereo(n, r);
              },
            }),
            i
          );
        var o =
          typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
        if (typeof r > "u")
          if (typeof n == "number") (i._stereo = n), (i._pos = [n, 0, 0]);
          else return i._stereo;
        for (var a = i._getSoundIds(r), l = 0; l < a.length; l++) {
          var f = i._soundById(a[l]);
          if (f)
            if (typeof n == "number")
              (f._stereo = n),
                (f._pos = [n, 0, 0]),
                f._node &&
                  ((f._pannerAttr.panningModel = "equalpower"),
                  (!f._panner || !f._panner.pan) && t(f, o),
                  o === "spatial"
                    ? typeof f._panner.positionX < "u"
                      ? (f._panner.positionX.setValueAtTime(
                          n,
                          Howler.ctx.currentTime
                        ),
                        f._panner.positionY.setValueAtTime(
                          0,
                          Howler.ctx.currentTime
                        ),
                        f._panner.positionZ.setValueAtTime(
                          0,
                          Howler.ctx.currentTime
                        ))
                      : f._panner.setPosition(n, 0, 0)
                    : f._panner.pan.setValueAtTime(n, Howler.ctx.currentTime)),
                i._emit("stereo", f._id);
            else return f._stereo;
        }
        return i;
      }),
      (Howl.prototype.pos = function (n, r, i, o) {
        var a = this;
        if (!a._webAudio) return a;
        if (a._state !== "loaded")
          return (
            a._queue.push({
              event: "pos",
              action: function () {
                a.pos(n, r, i, o);
              },
            }),
            a
          );
        if (
          ((r = typeof r != "number" ? 0 : r),
          (i = typeof i != "number" ? -0.5 : i),
          typeof o > "u")
        )
          if (typeof n == "number") a._pos = [n, r, i];
          else return a._pos;
        for (var l = a._getSoundIds(o), f = 0; f < l.length; f++) {
          var d = a._soundById(l[f]);
          if (d)
            if (typeof n == "number")
              (d._pos = [n, r, i]),
                d._node &&
                  ((!d._panner || d._panner.pan) && t(d, "spatial"),
                  typeof d._panner.positionX < "u"
                    ? (d._panner.positionX.setValueAtTime(
                        n,
                        Howler.ctx.currentTime
                      ),
                      d._panner.positionY.setValueAtTime(
                        r,
                        Howler.ctx.currentTime
                      ),
                      d._panner.positionZ.setValueAtTime(
                        i,
                        Howler.ctx.currentTime
                      ))
                    : d._panner.setPosition(n, r, i)),
                a._emit("pos", d._id);
            else return d._pos;
        }
        return a;
      }),
      (Howl.prototype.orientation = function (n, r, i, o) {
        var a = this;
        if (!a._webAudio) return a;
        if (a._state !== "loaded")
          return (
            a._queue.push({
              event: "orientation",
              action: function () {
                a.orientation(n, r, i, o);
              },
            }),
            a
          );
        if (
          ((r = typeof r != "number" ? a._orientation[1] : r),
          (i = typeof i != "number" ? a._orientation[2] : i),
          typeof o > "u")
        )
          if (typeof n == "number") a._orientation = [n, r, i];
          else return a._orientation;
        for (var l = a._getSoundIds(o), f = 0; f < l.length; f++) {
          var d = a._soundById(l[f]);
          if (d)
            if (typeof n == "number")
              (d._orientation = [n, r, i]),
                d._node &&
                  (d._panner ||
                    (d._pos || (d._pos = a._pos || [0, 0, -0.5]),
                    t(d, "spatial")),
                  typeof d._panner.orientationX < "u"
                    ? (d._panner.orientationX.setValueAtTime(
                        n,
                        Howler.ctx.currentTime
                      ),
                      d._panner.orientationY.setValueAtTime(
                        r,
                        Howler.ctx.currentTime
                      ),
                      d._panner.orientationZ.setValueAtTime(
                        i,
                        Howler.ctx.currentTime
                      ))
                    : d._panner.setOrientation(n, r, i)),
                a._emit("orientation", d._id);
            else return d._orientation;
        }
        return a;
      }),
      (Howl.prototype.pannerAttr = function () {
        var n = this,
          r = arguments,
          i,
          o,
          a;
        if (!n._webAudio) return n;
        if (r.length === 0) return n._pannerAttr;
        if (r.length === 1)
          if (typeof r[0] == "object")
            (i = r[0]),
              typeof o > "u" &&
                (i.pannerAttr ||
                  (i.pannerAttr = {
                    coneInnerAngle: i.coneInnerAngle,
                    coneOuterAngle: i.coneOuterAngle,
                    coneOuterGain: i.coneOuterGain,
                    distanceModel: i.distanceModel,
                    maxDistance: i.maxDistance,
                    refDistance: i.refDistance,
                    rolloffFactor: i.rolloffFactor,
                    panningModel: i.panningModel,
                  }),
                (n._pannerAttr = {
                  coneInnerAngle:
                    typeof i.pannerAttr.coneInnerAngle < "u"
                      ? i.pannerAttr.coneInnerAngle
                      : n._coneInnerAngle,
                  coneOuterAngle:
                    typeof i.pannerAttr.coneOuterAngle < "u"
                      ? i.pannerAttr.coneOuterAngle
                      : n._coneOuterAngle,
                  coneOuterGain:
                    typeof i.pannerAttr.coneOuterGain < "u"
                      ? i.pannerAttr.coneOuterGain
                      : n._coneOuterGain,
                  distanceModel:
                    typeof i.pannerAttr.distanceModel < "u"
                      ? i.pannerAttr.distanceModel
                      : n._distanceModel,
                  maxDistance:
                    typeof i.pannerAttr.maxDistance < "u"
                      ? i.pannerAttr.maxDistance
                      : n._maxDistance,
                  refDistance:
                    typeof i.pannerAttr.refDistance < "u"
                      ? i.pannerAttr.refDistance
                      : n._refDistance,
                  rolloffFactor:
                    typeof i.pannerAttr.rolloffFactor < "u"
                      ? i.pannerAttr.rolloffFactor
                      : n._rolloffFactor,
                  panningModel:
                    typeof i.pannerAttr.panningModel < "u"
                      ? i.pannerAttr.panningModel
                      : n._panningModel,
                }));
          else
            return (
              (a = n._soundById(parseInt(r[0], 10))),
              a ? a._pannerAttr : n._pannerAttr
            );
        else r.length === 2 && ((i = r[0]), (o = parseInt(r[1], 10)));
        for (var l = n._getSoundIds(o), f = 0; f < l.length; f++)
          if (((a = n._soundById(l[f])), a)) {
            var d = a._pannerAttr;
            d = {
              coneInnerAngle:
                typeof i.coneInnerAngle < "u"
                  ? i.coneInnerAngle
                  : d.coneInnerAngle,
              coneOuterAngle:
                typeof i.coneOuterAngle < "u"
                  ? i.coneOuterAngle
                  : d.coneOuterAngle,
              coneOuterGain:
                typeof i.coneOuterGain < "u"
                  ? i.coneOuterGain
                  : d.coneOuterGain,
              distanceModel:
                typeof i.distanceModel < "u"
                  ? i.distanceModel
                  : d.distanceModel,
              maxDistance:
                typeof i.maxDistance < "u" ? i.maxDistance : d.maxDistance,
              refDistance:
                typeof i.refDistance < "u" ? i.refDistance : d.refDistance,
              rolloffFactor:
                typeof i.rolloffFactor < "u"
                  ? i.rolloffFactor
                  : d.rolloffFactor,
              panningModel:
                typeof i.panningModel < "u" ? i.panningModel : d.panningModel,
            };
            var g = a._panner;
            g
              ? ((g.coneInnerAngle = d.coneInnerAngle),
                (g.coneOuterAngle = d.coneOuterAngle),
                (g.coneOuterGain = d.coneOuterGain),
                (g.distanceModel = d.distanceModel),
                (g.maxDistance = d.maxDistance),
                (g.refDistance = d.refDistance),
                (g.rolloffFactor = d.rolloffFactor),
                (g.panningModel = d.panningModel))
              : (a._pos || (a._pos = n._pos || [0, 0, -0.5]), t(a, "spatial"));
          }
        return n;
      }),
      (Sound.prototype.init = (function (n) {
        return function () {
          var r = this,
            i = r._parent;
          (r._orientation = i._orientation),
            (r._stereo = i._stereo),
            (r._pos = i._pos),
            (r._pannerAttr = i._pannerAttr),
            n.call(this),
            r._stereo
              ? i.stereo(r._stereo)
              : r._pos && i.pos(r._pos[0], r._pos[1], r._pos[2], r._id);
        };
      })(Sound.prototype.init)),
      (Sound.prototype.reset = (function (n) {
        return function () {
          var r = this,
            i = r._parent;
          return (
            (r._orientation = i._orientation),
            (r._stereo = i._stereo),
            (r._pos = i._pos),
            (r._pannerAttr = i._pannerAttr),
            r._stereo
              ? i.stereo(r._stereo)
              : r._pos
              ? i.pos(r._pos[0], r._pos[1], r._pos[2], r._id)
              : r._panner &&
                (r._panner.disconnect(0),
                (r._panner = void 0),
                i._refreshBuffer(r)),
            n.call(this)
          );
        };
      })(Sound.prototype.reset));
    var t = function (n, r) {
      (r = r || "spatial"),
        r === "spatial"
          ? ((n._panner = Howler.ctx.createPanner()),
            (n._panner.coneInnerAngle = n._pannerAttr.coneInnerAngle),
            (n._panner.coneOuterAngle = n._pannerAttr.coneOuterAngle),
            (n._panner.coneOuterGain = n._pannerAttr.coneOuterGain),
            (n._panner.distanceModel = n._pannerAttr.distanceModel),
            (n._panner.maxDistance = n._pannerAttr.maxDistance),
            (n._panner.refDistance = n._pannerAttr.refDistance),
            (n._panner.rolloffFactor = n._pannerAttr.rolloffFactor),
            (n._panner.panningModel = n._pannerAttr.panningModel),
            typeof n._panner.positionX < "u"
              ? (n._panner.positionX.setValueAtTime(
                  n._pos[0],
                  Howler.ctx.currentTime
                ),
                n._panner.positionY.setValueAtTime(
                  n._pos[1],
                  Howler.ctx.currentTime
                ),
                n._panner.positionZ.setValueAtTime(
                  n._pos[2],
                  Howler.ctx.currentTime
                ))
              : n._panner.setPosition(n._pos[0], n._pos[1], n._pos[2]),
            typeof n._panner.orientationX < "u"
              ? (n._panner.orientationX.setValueAtTime(
                  n._orientation[0],
                  Howler.ctx.currentTime
                ),
                n._panner.orientationY.setValueAtTime(
                  n._orientation[1],
                  Howler.ctx.currentTime
                ),
                n._panner.orientationZ.setValueAtTime(
                  n._orientation[2],
                  Howler.ctx.currentTime
                ))
              : n._panner.setOrientation(
                  n._orientation[0],
                  n._orientation[1],
                  n._orientation[2]
                ))
          : ((n._panner = Howler.ctx.createStereoPanner()),
            n._panner.pan.setValueAtTime(n._stereo, Howler.ctx.currentTime)),
        n._panner.connect(n._node),
        n._paused || n._parent.pause(n._id, !0).play(n._id, !0);
    };
  })();
})(aa);
const ca = (e, t = []) => JSON.parse(localStorage.getItem(`CTFd:${e}`)) || t,
  la = (e, t) => {
    localStorage.setItem(`CTFd:${e}`, JSON.stringify(t));
  };
function qn() {
  return ca("read_notifications");
}
function zn() {
  return ca("unread_notifications");
}
function Ei(e) {
  la("read_notifications", e);
}
function Xn(e) {
  la("unread_notifications", e);
}
function Ju(e) {
  const t = [...qn(), e];
  return Ei(t), ua(e), t;
}
function Zu(e) {
  const t = [...zn(), e];
  return Xn(t), t;
}
function ys() {
  const e = qn();
  return e.length === 0 ? 0 : Math.max(...e);
}
function ua(e) {
  const n = zn().filter((r) => r !== e);
  Xn(n);
}
function ef() {
  const e = zn(),
    t = qn();
  Ei(t.concat(e)), Xn([]);
}
const q = {
  init: (e, t) => {
    q.source = new EventSource(e + "/events");
    for (let r = 0; r < t.length; r++) t[r] = `${e}${t[r]}`;
    q.howl = new aa.Howl({ src: t });
    let n = ys();
    L.fetch(`/api/v1/notifications?since_id=${n}`, { method: "HEAD" }).then(
      (r) => {
        let i = r.headers.get("result-count");
        i &&
          (q.controller.broadcast("counter", { count: i }),
          L._functions.events.eventCount(i));
      }
    );
  },
  controller: new Qu(),
  source: null,
  howl: null,
  connect: () => {
    q.source.addEventListener(
      "notification",
      function (e) {
        let t = JSON.parse(e.data);
        q.controller.broadcast("notification", t),
          L.events.counter.unread.add(t.id);
        let n = L.events.counter.unread.getAll().length;
        q.controller.broadcast("counter", { count: n }),
          L._functions.events.eventCount(n),
          q.render(t),
          t.sound && q.howl.play();
      },
      !1
    );
  },
  disconnect: () => {
    q.source && q.source.close();
  },
  render: (e) => {
    switch (e.type) {
      case "toast": {
        L._functions.events.eventToast(e);
        break;
      }
      case "alert": {
        L._functions.events.eventAlert(e);
        break;
      }
      case "background": {
        L._functions.events.eventBackground(e);
        break;
      }
      default: {
        console.log(e), alert(e);
        break;
      }
    }
  },
  counter: {
    read: { getAll: qn, setAll: Ei, add: Ju, getLast: ys },
    unread: { getAll: zn, setAll: Xn, add: Zu, remove: ua, readAll: ef },
  },
};
q.controller.alert = function (e) {
  q.render(e);
};
q.controller.toast = function (e) {
  q.render(e);
};
q.controller.background = function (e) {
  q.render(e);
};
q.controller.counter = function (e) {
  L._functions.events.eventCount(e.count);
};
q.controller.masterDidChange = function () {
  this.isMaster ? q.connect() : q.disconnect();
};
var fa = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Te, function () {
    return function (n, r, i) {
      n = n || {};
      var o = r.prototype,
        a = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years",
        };
      function l(d, g, s, c) {
        return o.fromToBase(d, g, s, c);
      }
      (i.en.relativeTime = a),
        (o.fromToBase = function (d, g, s, c, u) {
          for (
            var h,
              _,
              p,
              m = s.$locale().relativeTime || a,
              b = n.thresholds || [
                { l: "s", r: 44, d: "second" },
                { l: "m", r: 89 },
                { l: "mm", r: 44, d: "minute" },
                { l: "h", r: 89 },
                { l: "hh", r: 21, d: "hour" },
                { l: "d", r: 35 },
                { l: "dd", r: 25, d: "day" },
                { l: "M", r: 45 },
                { l: "MM", r: 10, d: "month" },
                { l: "y", r: 17 },
                { l: "yy", d: "year" },
              ],
              O = b.length,
              D = 0;
            D < O;
            D += 1
          ) {
            var M = b[D];
            M.d && (h = c ? i(d).diff(s, M.d, !0) : s.diff(d, M.d, !0));
            var I = (n.rounding || Math.round)(Math.abs(h));
            if (((p = h > 0), I <= M.r || !M.r)) {
              I <= 1 && D > 0 && (M = b[D - 1]);
              var V = m[M.l];
              u && (I = u("" + I)),
                (_ =
                  typeof V == "string" ? V.replace("%d", I) : V(I, g, M.l, p));
              break;
            }
          }
          if (g) return _;
          var F = p ? m.future : m.past;
          return typeof F == "function" ? F(_) : F.replace("%s", _);
        }),
        (o.to = function (d, g) {
          return l(d, g, this, !0);
        }),
        (o.from = function (d, g) {
          return l(d, g, this);
        });
      var f = function (d) {
        return d.$u ? i.utc() : i();
      };
      (o.toNow = function (d) {
        return this.to(f(this), d);
      }),
        (o.fromNow = function (d) {
          return this.from(f(this), d);
        });
    };
  });
})(fa);
const tf = fa.exports;
fn.extend(Mo);
fn.extend(tf);
const Ot = { id: null, name: null, email: null },
  Dn = { id: null, name: null },
  nf = {},
  rf = {
    challenge: {
      displayChallenge: null,
      renderChallenge: null,
      displayHint(e) {
        alert(e.content);
      },
      displayUnlock(e) {
        return confirm("Are you sure you'd like to unlock this hint?");
      },
      displayUnlockError(e) {
        const t = [];
        Object.keys(e.errors).map((r) => {
          t.push(e.errors[r]);
        });
        const n = t.join(`
`);
        alert(n);
      },
      submitChallenge: null,
      displaySubmissionResponse: null,
      displaySolves: null,
    },
    challenges: { displayChallenges: null, sortChallenges: null },
    events: {
      eventAlert: null,
      eventToast: null,
      eventBackground: null,
      eventRead: null,
      eventCount: null,
    },
  },
  sf = {
    htmlEntities: oa,
    colorHash: Nu,
    copyToClipboard: Cu,
    hashCode: Du,
    renderTimes: $u,
  },
  of = {
    ajax: { getScript: ea },
    html: { createHtmlNode: Xu, htmlEntities: oa },
  },
  af = {
    challenge: {
      displayChallenge: Mu,
      submitChallenge: Iu,
      loadSolves: sa,
      displaySolves: Pu,
      loadHint: ta,
      loadUnlock: na,
      displayUnlock: ia,
      displayHint: ra,
    },
    challenges: { getChallenges: Jo, getChallenge: Zo, displayChallenges: Lu },
    scoreboard: { getScoreboard: ku, getScoreboardDetail: Ru },
    settings: { updateSettings: Hu, generateToken: Bu, deleteToken: Vu },
    users: { userSolves: ju, userFails: Fu, userAwards: Wu },
    teams: {
      getInviteToken: Uu,
      disbandTeam: Yu,
      updateTeamSettings: Ku,
      teamSolves: Gu,
      teamFails: qu,
      teamAwards: zu,
    },
  },
  cf = { $: R, dayjs: fn };
let Es = !1;
const lf = (e) => {
    Es ||
      ((Es = !0),
      (X.urlRoot = e.urlRoot || X.urlRoot),
      (X.csrfNonce = e.csrfNonce || X.csrfNonce),
      (X.userMode = e.userMode || X.userMode),
      (X.start = e.start || X.start),
      (X.end = e.end || X.end),
      (X.themeSettings = e.themeSettings || X.themeSettings),
      (X.eventSounds = e.eventSounds || X.eventSounds),
      (X.preview = !1),
      (Ot.id = e.userId),
      (Ot.name = e.userName || Ot.name),
      (Ot.email = e.userEmail || Ot.email),
      (Dn.id = e.teamId),
      (Dn.name = e.teamName || Dn.name),
      q.init(X.urlRoot, X.eventSounds));
  },
  uf = {
    run(e) {
      e(bi);
    },
  },
  bi = {
    init: lf,
    config: X,
    fetch: Vl,
    user: Ot,
    team: Dn,
    ui: sf,
    utils: of,
    pages: af,
    events: q,
    _internal: nf,
    _functions: rf,
    plugin: uf,
    lib: cf,
  };
window.CTFd = bi;
const L = bi;
var da = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Te, function () {
    var n = 1e3,
      r = 6e4,
      i = 36e5,
      o = "millisecond",
      a = "second",
      l = "minute",
      f = "hour",
      d = "day",
      g = "week",
      s = "month",
      c = "quarter",
      u = "year",
      h = "date",
      _ = "Invalid Date",
      p =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      m =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      b = {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
      },
      O = function (w, E, v) {
        var A = String(w);
        return !A || A.length >= E
          ? w
          : "" + Array(E + 1 - A.length).join(v) + w;
      },
      D = {
        s: O,
        z: function (w) {
          var E = -w.utcOffset(),
            v = Math.abs(E),
            A = Math.floor(v / 60),
            y = v % 60;
          return (E <= 0 ? "+" : "-") + O(A, 2, "0") + ":" + O(y, 2, "0");
        },
        m: function w(E, v) {
          if (E.date() < v.date()) return -w(v, E);
          var A = 12 * (v.year() - E.year()) + (v.month() - E.month()),
            y = E.clone().add(A, s),
            x = v - y < 0,
            S = E.clone().add(A + (x ? -1 : 1), s);
          return +(-(A + (v - y) / (x ? y - S : S - y)) || 0);
        },
        a: function (w) {
          return w < 0 ? Math.ceil(w) || 0 : Math.floor(w);
        },
        p: function (w) {
          return (
            { M: s, y: u, w: g, d, D: h, h: f, m: l, s: a, ms: o, Q: c }[w] ||
            String(w || "")
              .toLowerCase()
              .replace(/s$/, "")
          );
        },
        u: function (w) {
          return w === void 0;
        },
      },
      M = "en",
      I = {};
    I[M] = b;
    var V = function (w) {
        return w instanceof U;
      },
      F = function w(E, v, A) {
        var y;
        if (!E) return M;
        if (typeof E == "string") {
          var x = E.toLowerCase();
          I[x] && (y = x), v && ((I[x] = v), (y = x));
          var S = E.split("-");
          if (!y && S.length > 1) return w(S[0]);
        } else {
          var P = E.name;
          (I[P] = E), (y = P);
        }
        return !A && y && (M = y), y || (!A && M);
      },
      $ = function (w, E) {
        if (V(w)) return w.clone();
        var v = typeof E == "object" ? E : {};
        return (v.date = w), (v.args = arguments), new U(v);
      },
      N = D;
    (N.l = F),
      (N.i = V),
      (N.w = function (w, E) {
        return $(w, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
      });
    var U = (function () {
        function w(v) {
          (this.$L = F(v.locale, null, !0)), this.parse(v);
        }
        var E = w.prototype;
        return (
          (E.parse = function (v) {
            (this.$d = (function (A) {
              var y = A.date,
                x = A.utc;
              if (y === null) return new Date(NaN);
              if (N.u(y)) return new Date();
              if (y instanceof Date) return new Date(y);
              if (typeof y == "string" && !/Z$/i.test(y)) {
                var S = y.match(p);
                if (S) {
                  var P = S[2] - 1 || 0,
                    B = (S[7] || "0").substring(0, 3);
                  return x
                    ? new Date(
                        Date.UTC(
                          S[1],
                          P,
                          S[3] || 1,
                          S[4] || 0,
                          S[5] || 0,
                          S[6] || 0,
                          B
                        )
                      )
                    : new Date(
                        S[1],
                        P,
                        S[3] || 1,
                        S[4] || 0,
                        S[5] || 0,
                        S[6] || 0,
                        B
                      );
                }
              }
              return new Date(y);
            })(v)),
              (this.$x = v.x || {}),
              this.init();
          }),
          (E.init = function () {
            var v = this.$d;
            (this.$y = v.getFullYear()),
              (this.$M = v.getMonth()),
              (this.$D = v.getDate()),
              (this.$W = v.getDay()),
              (this.$H = v.getHours()),
              (this.$m = v.getMinutes()),
              (this.$s = v.getSeconds()),
              (this.$ms = v.getMilliseconds());
          }),
          (E.$utils = function () {
            return N;
          }),
          (E.isValid = function () {
            return this.$d.toString() !== _;
          }),
          (E.isSame = function (v, A) {
            var y = $(v);
            return this.startOf(A) <= y && y <= this.endOf(A);
          }),
          (E.isAfter = function (v, A) {
            return $(v) < this.startOf(A);
          }),
          (E.isBefore = function (v, A) {
            return this.endOf(A) < $(v);
          }),
          (E.$g = function (v, A, y) {
            return N.u(v) ? this[A] : this.set(y, v);
          }),
          (E.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (E.valueOf = function () {
            return this.$d.getTime();
          }),
          (E.startOf = function (v, A) {
            var y = this,
              x = !!N.u(A) || A,
              S = N.p(v),
              P = function (z, W) {
                var J = N.w(
                  y.$u ? Date.UTC(y.$y, W, z) : new Date(y.$y, W, z),
                  y
                );
                return x ? J : J.endOf(d);
              },
              B = function (z, W) {
                return N.w(
                  y
                    .toDate()
                    [z].apply(
                      y.toDate("s"),
                      (x ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(W)
                    ),
                  y
                );
              },
              k = this.$W,
              j = this.$M,
              K = this.$D,
              Y = "set" + (this.$u ? "UTC" : "");
            switch (S) {
              case u:
                return x ? P(1, 0) : P(31, 11);
              case s:
                return x ? P(1, j) : P(0, j + 1);
              case g:
                var re = this.$locale().weekStart || 0,
                  oe = (k < re ? k + 7 : k) - re;
                return P(x ? K - oe : K + (6 - oe), j);
              case d:
              case h:
                return B(Y + "Hours", 0);
              case f:
                return B(Y + "Minutes", 1);
              case l:
                return B(Y + "Seconds", 2);
              case a:
                return B(Y + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (E.endOf = function (v) {
            return this.startOf(v, !1);
          }),
          (E.$set = function (v, A) {
            var y,
              x = N.p(v),
              S = "set" + (this.$u ? "UTC" : ""),
              P = ((y = {}),
              (y[d] = S + "Date"),
              (y[h] = S + "Date"),
              (y[s] = S + "Month"),
              (y[u] = S + "FullYear"),
              (y[f] = S + "Hours"),
              (y[l] = S + "Minutes"),
              (y[a] = S + "Seconds"),
              (y[o] = S + "Milliseconds"),
              y)[x],
              B = x === d ? this.$D + (A - this.$W) : A;
            if (x === s || x === u) {
              var k = this.clone().set(h, 1);
              k.$d[P](B),
                k.init(),
                (this.$d = k.set(h, Math.min(this.$D, k.daysInMonth())).$d);
            } else P && this.$d[P](B);
            return this.init(), this;
          }),
          (E.set = function (v, A) {
            return this.clone().$set(v, A);
          }),
          (E.get = function (v) {
            return this[N.p(v)]();
          }),
          (E.add = function (v, A) {
            var y,
              x = this;
            v = Number(v);
            var S = N.p(A),
              P = function (j) {
                var K = $(x);
                return N.w(K.date(K.date() + Math.round(j * v)), x);
              };
            if (S === s) return this.set(s, this.$M + v);
            if (S === u) return this.set(u, this.$y + v);
            if (S === d) return P(1);
            if (S === g) return P(7);
            var B = ((y = {}), (y[l] = r), (y[f] = i), (y[a] = n), y)[S] || 1,
              k = this.$d.getTime() + v * B;
            return N.w(k, this);
          }),
          (E.subtract = function (v, A) {
            return this.add(-1 * v, A);
          }),
          (E.format = function (v) {
            var A = this,
              y = this.$locale();
            if (!this.isValid()) return y.invalidDate || _;
            var x = v || "YYYY-MM-DDTHH:mm:ssZ",
              S = N.z(this),
              P = this.$H,
              B = this.$m,
              k = this.$M,
              j = y.weekdays,
              K = y.months,
              Y = function (W, J, we, Ae) {
                return (W && (W[J] || W(A, x))) || we[J].substr(0, Ae);
              },
              re = function (W) {
                return N.s(P % 12 || 12, W, "0");
              },
              oe =
                y.meridiem ||
                function (W, J, we) {
                  var Ae = W < 12 ? "AM" : "PM";
                  return we ? Ae.toLowerCase() : Ae;
                },
              z = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: k + 1,
                MM: N.s(k + 1, 2, "0"),
                MMM: Y(y.monthsShort, k, K, 3),
                MMMM: Y(K, k),
                D: this.$D,
                DD: N.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: Y(y.weekdaysMin, this.$W, j, 2),
                ddd: Y(y.weekdaysShort, this.$W, j, 3),
                dddd: j[this.$W],
                H: String(P),
                HH: N.s(P, 2, "0"),
                h: re(1),
                hh: re(2),
                a: oe(P, B, !0),
                A: oe(P, B, !1),
                m: String(B),
                mm: N.s(B, 2, "0"),
                s: String(this.$s),
                ss: N.s(this.$s, 2, "0"),
                SSS: N.s(this.$ms, 3, "0"),
                Z: S,
              };
            return x.replace(m, function (W, J) {
              return J || z[W] || S.replace(":", "");
            });
          }),
          (E.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (E.diff = function (v, A, y) {
            var x,
              S = N.p(A),
              P = $(v),
              B = (P.utcOffset() - this.utcOffset()) * r,
              k = this - P,
              j = N.m(this, P);
            return (
              (j =
                ((x = {}),
                (x[u] = j / 12),
                (x[s] = j),
                (x[c] = j / 3),
                (x[g] = (k - B) / 6048e5),
                (x[d] = (k - B) / 864e5),
                (x[f] = k / i),
                (x[l] = k / r),
                (x[a] = k / n),
                x)[S] || k),
              y ? j : N.a(j)
            );
          }),
          (E.daysInMonth = function () {
            return this.endOf(s).$D;
          }),
          (E.$locale = function () {
            return I[this.$L];
          }),
          (E.locale = function (v, A) {
            if (!v) return this.$L;
            var y = this.clone(),
              x = F(v, A, !0);
            return x && (y.$L = x), y;
          }),
          (E.clone = function () {
            return N.w(this.$d, this);
          }),
          (E.toDate = function () {
            return new Date(this.valueOf());
          }),
          (E.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (E.toISOString = function () {
            return this.$d.toISOString();
          }),
          (E.toString = function () {
            return this.$d.toUTCString();
          }),
          w
        );
      })(),
      Q = U.prototype;
    return (
      ($.prototype = Q),
      [
        ["$ms", o],
        ["$s", a],
        ["$m", l],
        ["$H", f],
        ["$W", d],
        ["$M", s],
        ["$y", u],
        ["$D", h],
      ].forEach(function (w) {
        Q[w[1]] = function (E) {
          return this.$g(E, w[0], w[1]);
        };
      }),
      ($.extend = function (w, E) {
        return w.$i || (w(E, U, $), (w.$i = !0)), $;
      }),
      ($.locale = F),
      ($.isDayjs = V),
      ($.unix = function (w) {
        return $(1e3 * w);
      }),
      ($.en = I[M]),
      ($.Ls = I),
      ($.p = {}),
      $
    );
  });
})(da);
const wi = da.exports;
var ha = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Te, function () {
    return function (n, r, i) {
      var o = r.prototype,
        a = o.format;
      (i.en.ordinal = function (l) {
        var f = ["th", "st", "nd", "rd"],
          d = l % 100;
        return "[" + l + (f[(d - 20) % 10] || f[d] || f[0]) + "]";
      }),
        (o.format = function (l) {
          var f = this,
            d = this.$locale();
          if (!this.isValid()) return a.bind(this)(l);
          var g = this.$utils(),
            s = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(
              /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
              function (c) {
                switch (c) {
                  case "Q":
                    return Math.ceil((f.$M + 1) / 3);
                  case "Do":
                    return d.ordinal(f.$D);
                  case "gggg":
                    return f.weekYear();
                  case "GGGG":
                    return f.isoWeekYear();
                  case "wo":
                    return d.ordinal(f.week(), "W");
                  case "w":
                  case "ww":
                    return g.s(f.week(), c === "w" ? 1 : 2, "0");
                  case "W":
                  case "WW":
                    return g.s(f.isoWeek(), c === "W" ? 1 : 2, "0");
                  case "k":
                  case "kk":
                    return g.s(
                      String(f.$H === 0 ? 24 : f.$H),
                      c === "k" ? 1 : 2,
                      "0"
                    );
                  case "X":
                    return Math.floor(f.$d.getTime() / 1e3);
                  case "x":
                    return f.$d.getTime();
                  case "z":
                    return "[" + f.offsetName() + "]";
                  case "zzz":
                    return "[" + f.offsetName("long") + "]";
                  default:
                    return c;
                }
              }
            );
          return a.bind(this)(s);
        });
    };
  });
})(ha);
const pa = ha.exports;
wi.extend(pa);
const ff = () => {
    document.querySelectorAll("[data-time]").forEach((e) => {
      const t = e.getAttribute("data-time"),
        n = e.getAttribute("data-time-format") || "MMMM Do, h:mm:ss A";
      e.innerText = wi(t).format(n);
    });
  },
  df = () => {
    document.querySelectorAll(".form-control").forEach((e) => {
      e.addEventListener("onfocus", () => {
        e.classList.remove("input-filled-invalid"),
          e.classList.add("input-filled-valid");
      }),
        e.addEventListener("onblur", () => {
          e.nodeValue === "" &&
            (e.classList.remove("input-filled-valid"),
            e.classList.remove("input-filled-invalid"));
        }),
        e.nodeValue && e.classList.add("input-filled-valid");
    }),
      document.querySelectorAll(".page-select").forEach((e) => {
        if (e.nodeValue) {
          const t = new URL(window.location);
          t.searchParams.set("page", e.nodeValue),
            (window.location.href = t.toString());
        }
      });
  };
var _a = { exports: {} };
/*! lolight v1.4.0 - https://larsjung.de/lolight/ */ (function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(Te, function () {
    function n(c) {
      if (typeof c != "string") throw new Error("tok: no string");
      for (var u = [], h = s.length, _ = !1; c; )
        for (var p = 0; p < h; p += 1) {
          var m = s[p][1].exec(c);
          if (m && m.index === 0) {
            var b = s[p][0];
            if (b !== "rex" || !_) {
              var O = m[0];
              b === d && l.test(O) && (b = "key"),
                b === "spc"
                  ? 0 <=
                      O.indexOf(`
`) && (_ = !1)
                  : (_ = b === g || b === d),
                (c = c.slice(O.length)),
                u.push([b, O]);
              break;
            }
          }
        }
      return u;
    }
    function r(c, u) {
      if (typeof document < "u") u(document);
      else if (c) throw new Error("no doc");
    }
    function i(c) {
      r(!0, function (u) {
        var h = n(c.textContent);
        (c.innerHTML = ""),
          h.forEach(function (_) {
            var p = u.createElement("span");
            (p.className = "ll-" + _[0]),
              (p.textContent = _[1]),
              c.appendChild(p);
          });
      });
    }
    function o(c) {
      r(!0, function (u) {
        [].forEach.call(u.querySelectorAll(c || ".lolight"), function (h) {
          i(h);
        });
      });
    }
    var a =
        "_nam#2196f3}_num#ec407a}_str#43a047}_rex#ef6c00}_pct#666}_key#555;font-weight:bold}_com#aaa;font-style:italic}"
          .replace(/_/g, ".ll-")
          .replace(/#/g, "{color:#"),
      l =
        /^(a(bstract|lias|nd|rguments|rray|s(m|sert)?|uto)|b(ase|egin|ool(ean)?|reak|yte)|c(ase|atch|har|hecked|lass|lone|ompl|onst|ontinue)|de(bugger|cimal|clare|f(ault|er)?|init|l(egate|ete)?)|do|double|e(cho|ls?if|lse(if)?|nd|nsure|num|vent|x(cept|ec|p(licit|ort)|te(nds|nsion|rn)))|f(allthrough|alse|inal(ly)?|ixed|loat|or(each)?|riend|rom|unc(tion)?)|global|goto|guard|i(f|mp(lements|licit|ort)|n(it|clude(_once)?|line|out|stanceof|t(erface|ernal)?)?|s)|l(ambda|et|ock|ong)|m(odule|utable)|NaN|n(amespace|ative|ext|ew|il|ot|ull)|o(bject|perator|r|ut|verride)|p(ackage|arams|rivate|rotected|rotocol|ublic)|r(aise|e(adonly|do|f|gister|peat|quire(_once)?|scue|strict|try|turn))|s(byte|ealed|elf|hort|igned|izeof|tatic|tring|truct|ubscript|uper|ynchronized|witch)|t(emplate|hen|his|hrows?|ransient|rue|ry|ype(alias|def|id|name|of))|u(n(checked|def(ined)?|ion|less|signed|til)|se|sing)|v(ar|irtual|oid|olatile)|w(char_t|hen|here|hile|ith)|xor|yield)$/,
      f = "com",
      d = "nam",
      g = "num",
      s = [
        [g, /#([0-9a-f]{6}|[0-9a-f]{3})\b/],
        [f, /(\/\/|#).*?(?=\n|$)/],
        [f, /\/\*[\s\S]*?\*\//],
        [f, /<!--[\s\S]*?-->/],
        ["rex", /\/(\\\/|[^\n])*?\//],
        ["str", /(['"`])(\\\1|[\s\S])*?\1/],
        [g, /[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?/],
        ["pct", /[\\.,:;+\-*\/=<>()[\]{}|?!&@~]/],
        ["spc", /\s+/],
        [d, /[\w$]+/],
        ["unk", /./],
      ];
    return (
      r(!1, function (c) {
        var u = c.querySelector("head"),
          h = c.createElement("style");
        (h.textContent = a),
          u.insertBefore(h, u.firstChild),
          /^(i|c|loade)/.test(c.readyState)
            ? o()
            : c.addEventListener("DOMContentLoaded", function () {
                o();
              });
      }),
      (o.tok = n),
      (o.el = i),
      o
    );
  });
})(_a);
const hf = _a.exports,
  pf = () => {
    (!L.config.themeSettings.hasOwnProperty("use_builtin_code_highlighter") ||
      L.config.themeSettings.use_builtin_code_highlighter === !0) &&
      hf("pre code");
  };
var ce = "top",
  _e = "bottom",
  me = "right",
  le = "left",
  Qn = "auto",
  jt = [ce, _e, me, le],
  pt = "start",
  Lt = "end",
  ma = "clippingParents",
  Ai = "viewport",
  xt = "popper",
  ga = "reference",
  Rr = jt.reduce(function (e, t) {
    return e.concat([t + "-" + pt, t + "-" + Lt]);
  }, []),
  Ti = [].concat(jt, [Qn]).reduce(function (e, t) {
    return e.concat([t, t + "-" + pt, t + "-" + Lt]);
  }, []),
  va = "beforeRead",
  ya = "read",
  Ea = "afterRead",
  ba = "beforeMain",
  wa = "main",
  Aa = "afterMain",
  Ta = "beforeWrite",
  Sa = "write",
  Oa = "afterWrite",
  xa = [va, ya, Ea, ba, wa, Aa, Ta, Sa, Oa];
function Ie(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Oe(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Mt(e) {
  var t = Oe(e).Element;
  return e instanceof t || e instanceof Element;
}
function ye(e) {
  var t = Oe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Si(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Oe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function _f(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      i = t.attributes[n] || {},
      o = t.elements[n];
    !ye(o) ||
      !Ie(o) ||
      (Object.assign(o.style, r),
      Object.keys(i).forEach(function (a) {
        var l = i[a];
        l === !1 ? o.removeAttribute(a) : o.setAttribute(a, l === !0 ? "" : l);
      }));
  });
}
function mf(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var i = t.elements[r],
          o = t.attributes[r] || {},
          a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          l = a.reduce(function (f, d) {
            return (f[d] = ""), f;
          }, {});
        !ye(i) ||
          !Ie(i) ||
          (Object.assign(i.style, l),
          Object.keys(o).forEach(function (f) {
            i.removeAttribute(f);
          }));
      });
    }
  );
}
const Oi = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _f,
  effect: mf,
  requires: ["computeStyles"],
};
function Le(e) {
  return e.split("-")[0];
}
var at = Math.max,
  Rn = Math.min,
  It = Math.round;
function Pt(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(),
    r = 1,
    i = 1;
  if (ye(e) && t) {
    var o = e.offsetHeight,
      a = e.offsetWidth;
    a > 0 && (r = It(n.width) / a || 1), o > 0 && (i = It(n.height) / o || 1);
  }
  return {
    width: n.width / r,
    height: n.height / i,
    top: n.top / i,
    right: n.right / r,
    bottom: n.bottom / i,
    left: n.left / r,
    x: n.left / r,
    y: n.top / i,
  };
}
function xi(e) {
  var t = Pt(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function $a(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Si(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function je(e) {
  return Oe(e).getComputedStyle(e);
}
function gf(e) {
  return ["table", "td", "th"].indexOf(Ie(e)) >= 0;
}
function Qe(e) {
  return ((Mt(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Jn(e) {
  return Ie(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Si(e) ? e.host : null) || Qe(e);
}
function bs(e) {
  return !ye(e) || je(e).position === "fixed" ? null : e.offsetParent;
}
function vf(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1,
    n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && ye(e)) {
    var r = je(e);
    if (r.position === "fixed") return null;
  }
  var i = Jn(e);
  for (Si(i) && (i = i.host); ye(i) && ["html", "body"].indexOf(Ie(i)) < 0; ) {
    var o = je(i);
    if (
      o.transform !== "none" ||
      o.perspective !== "none" ||
      o.contain === "paint" ||
      ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === "filter") ||
      (t && o.filter && o.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function dn(e) {
  for (var t = Oe(e), n = bs(e); n && gf(n) && je(n).position === "static"; )
    n = bs(n);
  return n &&
    (Ie(n) === "html" || (Ie(n) === "body" && je(n).position === "static"))
    ? t
    : n || vf(e) || t;
}
function $i(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function en(e, t, n) {
  return at(e, Rn(t, n));
}
function yf(e, t, n) {
  var r = en(e, t, n);
  return r > n ? n : r;
}
function Ca() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Da(e) {
  return Object.assign({}, Ca(), e);
}
function Na(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var Ef = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    Da(typeof t != "number" ? t : Na(t, jt))
  );
};
function bf(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    o = n.elements.arrow,
    a = n.modifiersData.popperOffsets,
    l = Le(n.placement),
    f = $i(l),
    d = [le, me].indexOf(l) >= 0,
    g = d ? "height" : "width";
  if (!(!o || !a)) {
    var s = Ef(i.padding, n),
      c = xi(o),
      u = f === "y" ? ce : le,
      h = f === "y" ? _e : me,
      _ =
        n.rects.reference[g] + n.rects.reference[f] - a[f] - n.rects.popper[g],
      p = a[f] - n.rects.reference[f],
      m = dn(o),
      b = m ? (f === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
      O = _ / 2 - p / 2,
      D = s[u],
      M = b - c[g] - s[h],
      I = b / 2 - c[g] / 2 + O,
      V = en(D, I, M),
      F = f;
    n.modifiersData[r] = ((t = {}), (t[F] = V), (t.centerOffset = V - I), t);
  }
}
function wf(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      !$a(t.elements.popper, i) ||
      (t.elements.arrow = i));
}
const La = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: bf,
  effect: wf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function kt(e) {
  return e.split("-")[1];
}
var Af = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Tf(e) {
  var t = e.x,
    n = e.y,
    r = window,
    i = r.devicePixelRatio || 1;
  return { x: It(t * i) / i || 0, y: It(n * i) / i || 0 };
}
function ws(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    i = e.placement,
    o = e.variation,
    a = e.offsets,
    l = e.position,
    f = e.gpuAcceleration,
    d = e.adaptive,
    g = e.roundOffsets,
    s = e.isFixed,
    c = a.x,
    u = c === void 0 ? 0 : c,
    h = a.y,
    _ = h === void 0 ? 0 : h,
    p = typeof g == "function" ? g({ x: u, y: _ }) : { x: u, y: _ };
  (u = p.x), (_ = p.y);
  var m = a.hasOwnProperty("x"),
    b = a.hasOwnProperty("y"),
    O = le,
    D = ce,
    M = window;
  if (d) {
    var I = dn(n),
      V = "clientHeight",
      F = "clientWidth";
    if (
      (I === Oe(n) &&
        ((I = Qe(n)),
        je(I).position !== "static" &&
          l === "absolute" &&
          ((V = "scrollHeight"), (F = "scrollWidth"))),
      (I = I),
      i === ce || ((i === le || i === me) && o === Lt))
    ) {
      D = _e;
      var $ = s && I === M && M.visualViewport ? M.visualViewport.height : I[V];
      (_ -= $ - r.height), (_ *= f ? 1 : -1);
    }
    if (i === le || ((i === ce || i === _e) && o === Lt)) {
      O = me;
      var N = s && I === M && M.visualViewport ? M.visualViewport.width : I[F];
      (u -= N - r.width), (u *= f ? 1 : -1);
    }
  }
  var U = Object.assign({ position: l }, d && Af),
    Q = g === !0 ? Tf({ x: u, y: _ }) : { x: u, y: _ };
  if (((u = Q.x), (_ = Q.y), f)) {
    var w;
    return Object.assign(
      {},
      U,
      ((w = {}),
      (w[D] = b ? "0" : ""),
      (w[O] = m ? "0" : ""),
      (w.transform =
        (M.devicePixelRatio || 1) <= 1
          ? "translate(" + u + "px, " + _ + "px)"
          : "translate3d(" + u + "px, " + _ + "px, 0)"),
      w)
    );
  }
  return Object.assign(
    {},
    U,
    ((t = {}),
    (t[D] = b ? _ + "px" : ""),
    (t[O] = m ? u + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function Sf(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    o = n.adaptive,
    a = o === void 0 ? !0 : o,
    l = n.roundOffsets,
    f = l === void 0 ? !0 : l,
    d = {
      placement: Le(t.placement),
      variation: kt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      ws(
        Object.assign({}, d, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: a,
          roundOffsets: f,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        ws(
          Object.assign({}, d, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: f,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const Ci = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Sf,
  data: {},
};
var An = { passive: !0 };
function Of(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    o = i === void 0 ? !0 : i,
    a = r.resize,
    l = a === void 0 ? !0 : a,
    f = Oe(t.elements.popper),
    d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    o &&
      d.forEach(function (g) {
        g.addEventListener("scroll", n.update, An);
      }),
    l && f.addEventListener("resize", n.update, An),
    function () {
      o &&
        d.forEach(function (g) {
          g.removeEventListener("scroll", n.update, An);
        }),
        l && f.removeEventListener("resize", n.update, An);
    }
  );
}
const Di = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Of,
  data: {},
};
var xf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Nn(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return xf[t];
  });
}
var $f = { start: "end", end: "start" };
function As(e) {
  return e.replace(/start|end/g, function (t) {
    return $f[t];
  });
}
function Ni(e) {
  var t = Oe(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Li(e) {
  return Pt(Qe(e)).left + Ni(e).scrollLeft;
}
function Cf(e) {
  var t = Oe(e),
    n = Qe(e),
    r = t.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    a = 0,
    l = 0;
  return (
    r &&
      ((i = r.width),
      (o = r.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
        ((a = r.offsetLeft), (l = r.offsetTop))),
    { width: i, height: o, x: a + Li(e), y: l }
  );
}
function Df(e) {
  var t,
    n = Qe(e),
    r = Ni(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = at(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0
    ),
    a = at(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0
    ),
    l = -r.scrollLeft + Li(e),
    f = -r.scrollTop;
  return (
    je(i || n).direction === "rtl" &&
      (l += at(n.clientWidth, i ? i.clientWidth : 0) - o),
    { width: o, height: a, x: l, y: f }
  );
}
function Mi(e) {
  var t = je(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Ma(e) {
  return ["html", "body", "#document"].indexOf(Ie(e)) >= 0
    ? e.ownerDocument.body
    : ye(e) && Mi(e)
    ? e
    : Ma(Jn(e));
}
function tn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ma(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    o = Oe(r),
    a = i ? [o].concat(o.visualViewport || [], Mi(r) ? r : []) : r,
    l = t.concat(a);
  return i ? l : l.concat(tn(Jn(a)));
}
function Hr(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Nf(e) {
  var t = Pt(e);
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  );
}
function Ts(e, t) {
  return t === Ai ? Hr(Cf(e)) : Mt(t) ? Nf(t) : Hr(Df(Qe(e)));
}
function Lf(e) {
  var t = tn(Jn(e)),
    n = ["absolute", "fixed"].indexOf(je(e).position) >= 0,
    r = n && ye(e) ? dn(e) : e;
  return Mt(r)
    ? t.filter(function (i) {
        return Mt(i) && $a(i, r) && Ie(i) !== "body";
      })
    : [];
}
function Mf(e, t, n) {
  var r = t === "clippingParents" ? Lf(e) : [].concat(t),
    i = [].concat(r, [n]),
    o = i[0],
    a = i.reduce(function (l, f) {
      var d = Ts(e, f);
      return (
        (l.top = at(d.top, l.top)),
        (l.right = Rn(d.right, l.right)),
        (l.bottom = Rn(d.bottom, l.bottom)),
        (l.left = at(d.left, l.left)),
        l
      );
    }, Ts(e, o));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function Ia(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? Le(r) : null,
    o = r ? kt(r) : null,
    a = t.x + t.width / 2 - n.width / 2,
    l = t.y + t.height / 2 - n.height / 2,
    f;
  switch (i) {
    case ce:
      f = { x: a, y: t.y - n.height };
      break;
    case _e:
      f = { x: a, y: t.y + t.height };
      break;
    case me:
      f = { x: t.x + t.width, y: l };
      break;
    case le:
      f = { x: t.x - n.width, y: l };
      break;
    default:
      f = { x: t.x, y: t.y };
  }
  var d = i ? $i(i) : null;
  if (d != null) {
    var g = d === "y" ? "height" : "width";
    switch (o) {
      case pt:
        f[d] = f[d] - (t[g] / 2 - n[g] / 2);
        break;
      case Lt:
        f[d] = f[d] + (t[g] / 2 - n[g] / 2);
        break;
    }
  }
  return f;
}
function Rt(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    o = n.boundary,
    a = o === void 0 ? ma : o,
    l = n.rootBoundary,
    f = l === void 0 ? Ai : l,
    d = n.elementContext,
    g = d === void 0 ? xt : d,
    s = n.altBoundary,
    c = s === void 0 ? !1 : s,
    u = n.padding,
    h = u === void 0 ? 0 : u,
    _ = Da(typeof h != "number" ? h : Na(h, jt)),
    p = g === xt ? ga : xt,
    m = e.rects.popper,
    b = e.elements[c ? p : g],
    O = Mf(Mt(b) ? b : b.contextElement || Qe(e.elements.popper), a, f),
    D = Pt(e.elements.reference),
    M = Ia({ reference: D, element: m, strategy: "absolute", placement: i }),
    I = Hr(Object.assign({}, m, M)),
    V = g === xt ? I : D,
    F = {
      top: O.top - V.top + _.top,
      bottom: V.bottom - O.bottom + _.bottom,
      left: O.left - V.left + _.left,
      right: V.right - O.right + _.right,
    },
    $ = e.modifiersData.offset;
  if (g === xt && $) {
    var N = $[i];
    Object.keys(F).forEach(function (U) {
      var Q = [me, _e].indexOf(U) >= 0 ? 1 : -1,
        w = [ce, _e].indexOf(U) >= 0 ? "y" : "x";
      F[U] += N[w] * Q;
    });
  }
  return F;
}
function If(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    o = n.rootBoundary,
    a = n.padding,
    l = n.flipVariations,
    f = n.allowedAutoPlacements,
    d = f === void 0 ? Ti : f,
    g = kt(r),
    s = g
      ? l
        ? Rr
        : Rr.filter(function (h) {
            return kt(h) === g;
          })
      : jt,
    c = s.filter(function (h) {
      return d.indexOf(h) >= 0;
    });
  c.length === 0 && (c = s);
  var u = c.reduce(function (h, _) {
    return (
      (h[_] = Rt(e, { placement: _, boundary: i, rootBoundary: o, padding: a })[
        Le(_)
      ]),
      h
    );
  }, {});
  return Object.keys(u).sort(function (h, _) {
    return u[h] - u[_];
  });
}
function Pf(e) {
  if (Le(e) === Qn) return [];
  var t = Nn(e);
  return [As(e), t, As(t)];
}
function kf(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var i = n.mainAxis,
        o = i === void 0 ? !0 : i,
        a = n.altAxis,
        l = a === void 0 ? !0 : a,
        f = n.fallbackPlacements,
        d = n.padding,
        g = n.boundary,
        s = n.rootBoundary,
        c = n.altBoundary,
        u = n.flipVariations,
        h = u === void 0 ? !0 : u,
        _ = n.allowedAutoPlacements,
        p = t.options.placement,
        m = Le(p),
        b = m === p,
        O = f || (b || !h ? [Nn(p)] : Pf(p)),
        D = [p].concat(O).reduce(function (K, Y) {
          return K.concat(
            Le(Y) === Qn
              ? If(t, {
                  placement: Y,
                  boundary: g,
                  rootBoundary: s,
                  padding: d,
                  flipVariations: h,
                  allowedAutoPlacements: _,
                })
              : Y
          );
        }, []),
        M = t.rects.reference,
        I = t.rects.popper,
        V = new Map(),
        F = !0,
        $ = D[0],
        N = 0;
      N < D.length;
      N++
    ) {
      var U = D[N],
        Q = Le(U),
        w = kt(U) === pt,
        E = [ce, _e].indexOf(Q) >= 0,
        v = E ? "width" : "height",
        A = Rt(t, {
          placement: U,
          boundary: g,
          rootBoundary: s,
          altBoundary: c,
          padding: d,
        }),
        y = E ? (w ? me : le) : w ? _e : ce;
      M[v] > I[v] && (y = Nn(y));
      var x = Nn(y),
        S = [];
      if (
        (o && S.push(A[Q] <= 0),
        l && S.push(A[y] <= 0, A[x] <= 0),
        S.every(function (K) {
          return K;
        }))
      ) {
        ($ = U), (F = !1);
        break;
      }
      V.set(U, S);
    }
    if (F)
      for (
        var P = h ? 3 : 1,
          B = function (Y) {
            var re = D.find(function (oe) {
              var z = V.get(oe);
              if (z)
                return z.slice(0, Y).every(function (W) {
                  return W;
                });
            });
            if (re) return ($ = re), "break";
          },
          k = P;
        k > 0;
        k--
      ) {
        var j = B(k);
        if (j === "break") break;
      }
    t.placement !== $ &&
      ((t.modifiersData[r]._skip = !0), (t.placement = $), (t.reset = !0));
  }
}
const Pa = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: kf,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Ss(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function Os(e) {
  return [ce, me, _e, le].some(function (t) {
    return e[t] >= 0;
  });
}
function Rf(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    a = Rt(t, { elementContext: "reference" }),
    l = Rt(t, { altBoundary: !0 }),
    f = Ss(a, r),
    d = Ss(l, i, o),
    g = Os(f),
    s = Os(d);
  (t.modifiersData[n] = {
    referenceClippingOffsets: f,
    popperEscapeOffsets: d,
    isReferenceHidden: g,
    hasPopperEscaped: s,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": g,
      "data-popper-escaped": s,
    }));
}
const ka = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Rf,
};
function Hf(e, t, n) {
  var r = Le(e),
    i = [le, ce].indexOf(r) >= 0 ? -1 : 1,
    o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    a = o[0],
    l = o[1];
  return (
    (a = a || 0),
    (l = (l || 0) * i),
    [le, me].indexOf(r) >= 0 ? { x: l, y: a } : { x: a, y: l }
  );
}
function Bf(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    o = i === void 0 ? [0, 0] : i,
    a = Ti.reduce(function (g, s) {
      return (g[s] = Hf(s, t.rects, o)), g;
    }, {}),
    l = a[t.placement],
    f = l.x,
    d = l.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += f),
    (t.modifiersData.popperOffsets.y += d)),
    (t.modifiersData[r] = a);
}
const Ra = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Bf,
};
function Vf(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = Ia({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const Ii = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Vf,
  data: {},
};
function jf(e) {
  return e === "x" ? "y" : "x";
}
function Ff(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.mainAxis,
    o = i === void 0 ? !0 : i,
    a = n.altAxis,
    l = a === void 0 ? !1 : a,
    f = n.boundary,
    d = n.rootBoundary,
    g = n.altBoundary,
    s = n.padding,
    c = n.tether,
    u = c === void 0 ? !0 : c,
    h = n.tetherOffset,
    _ = h === void 0 ? 0 : h,
    p = Rt(t, { boundary: f, rootBoundary: d, padding: s, altBoundary: g }),
    m = Le(t.placement),
    b = kt(t.placement),
    O = !b,
    D = $i(m),
    M = jf(D),
    I = t.modifiersData.popperOffsets,
    V = t.rects.reference,
    F = t.rects.popper,
    $ =
      typeof _ == "function"
        ? _(Object.assign({}, t.rects, { placement: t.placement }))
        : _,
    N =
      typeof $ == "number"
        ? { mainAxis: $, altAxis: $ }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, $),
    U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    Q = { x: 0, y: 0 };
  if (!!I) {
    if (o) {
      var w,
        E = D === "y" ? ce : le,
        v = D === "y" ? _e : me,
        A = D === "y" ? "height" : "width",
        y = I[D],
        x = y + p[E],
        S = y - p[v],
        P = u ? -F[A] / 2 : 0,
        B = b === pt ? V[A] : F[A],
        k = b === pt ? -F[A] : -V[A],
        j = t.elements.arrow,
        K = u && j ? xi(j) : { width: 0, height: 0 },
        Y = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : Ca(),
        re = Y[E],
        oe = Y[v],
        z = en(0, V[A], K[A]),
        W = O ? V[A] / 2 - P - z - re - N.mainAxis : B - z - re - N.mainAxis,
        J = O ? -V[A] / 2 + P + z + oe + N.mainAxis : k + z + oe + N.mainAxis,
        we = t.elements.arrow && dn(t.elements.arrow),
        Ae = we ? (D === "y" ? we.clientTop || 0 : we.clientLeft || 0) : 0,
        ns = (w = U == null ? void 0 : U[D]) != null ? w : 0,
        Tl = y + W - ns - Ae,
        Sl = y + J - ns,
        rs = en(u ? Rn(x, Tl) : x, y, u ? at(S, Sl) : S);
      (I[D] = rs), (Q[D] = rs - y);
    }
    if (l) {
      var is,
        Ol = D === "x" ? ce : le,
        xl = D === "x" ? _e : me,
        Ze = I[M],
        wn = M === "y" ? "height" : "width",
        ss = Ze + p[Ol],
        os = Ze - p[xl],
        vr = [ce, le].indexOf(m) !== -1,
        as = (is = U == null ? void 0 : U[M]) != null ? is : 0,
        cs = vr ? ss : Ze - V[wn] - F[wn] - as + N.altAxis,
        ls = vr ? Ze + V[wn] + F[wn] - as - N.altAxis : os,
        us = u && vr ? yf(cs, Ze, ls) : en(u ? cs : ss, Ze, u ? ls : os);
      (I[M] = us), (Q[M] = us - Ze);
    }
    t.modifiersData[r] = Q;
  }
}
const Ha = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ff,
  requiresIfExists: ["offset"],
};
function Wf(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Uf(e) {
  return e === Oe(e) || !ye(e) ? Ni(e) : Wf(e);
}
function Yf(e) {
  var t = e.getBoundingClientRect(),
    n = It(t.width) / e.offsetWidth || 1,
    r = It(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Kf(e, t, n) {
  n === void 0 && (n = !1);
  var r = ye(t),
    i = ye(t) && Yf(t),
    o = Qe(t),
    a = Pt(e, i),
    l = { scrollLeft: 0, scrollTop: 0 },
    f = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Ie(t) !== "body" || Mi(o)) && (l = Uf(t)),
      ye(t)
        ? ((f = Pt(t, !0)), (f.x += t.clientLeft), (f.y += t.clientTop))
        : o && (f.x = Li(o))),
    {
      x: a.left + l.scrollLeft - f.x,
      y: a.top + l.scrollTop - f.y,
      width: a.width,
      height: a.height,
    }
  );
}
function Gf(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (o) {
    t.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var a = [].concat(o.requires || [], o.requiresIfExists || []);
    a.forEach(function (l) {
      if (!n.has(l)) {
        var f = t.get(l);
        f && i(f);
      }
    }),
      r.push(o);
  }
  return (
    e.forEach(function (o) {
      n.has(o.name) || i(o);
    }),
    r
  );
}
function qf(e) {
  var t = Gf(e);
  return xa.reduce(function (n, r) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === r;
      })
    );
  }, []);
}
function zf(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function Xf(e) {
  var t = e.reduce(function (n, r) {
    var i = n[r.name];
    return (
      (n[r.name] = i
        ? Object.assign({}, i, r, {
            options: Object.assign({}, i.options, r.options),
            data: Object.assign({}, i.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var xs = { placement: "bottom", modifiers: [], strategy: "absolute" };
function $s() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Zn(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    o = i === void 0 ? xs : i;
  return function (l, f, d) {
    d === void 0 && (d = o);
    var g = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, xs, o),
        modifiersData: {},
        elements: { reference: l, popper: f },
        attributes: {},
        styles: {},
      },
      s = [],
      c = !1,
      u = {
        state: g,
        setOptions: function (m) {
          var b = typeof m == "function" ? m(g.options) : m;
          _(),
            (g.options = Object.assign({}, o, g.options, b)),
            (g.scrollParents = {
              reference: Mt(l)
                ? tn(l)
                : l.contextElement
                ? tn(l.contextElement)
                : [],
              popper: tn(f),
            });
          var O = qf(Xf([].concat(r, g.options.modifiers)));
          return (
            (g.orderedModifiers = O.filter(function (D) {
              return D.enabled;
            })),
            h(),
            u.update()
          );
        },
        forceUpdate: function () {
          if (!c) {
            var m = g.elements,
              b = m.reference,
              O = m.popper;
            if (!!$s(b, O)) {
              (g.rects = {
                reference: Kf(b, dn(O), g.options.strategy === "fixed"),
                popper: xi(O),
              }),
                (g.reset = !1),
                (g.placement = g.options.placement),
                g.orderedModifiers.forEach(function (N) {
                  return (g.modifiersData[N.name] = Object.assign({}, N.data));
                });
              for (var D = 0; D < g.orderedModifiers.length; D++) {
                if (g.reset === !0) {
                  (g.reset = !1), (D = -1);
                  continue;
                }
                var M = g.orderedModifiers[D],
                  I = M.fn,
                  V = M.options,
                  F = V === void 0 ? {} : V,
                  $ = M.name;
                typeof I == "function" &&
                  (g = I({ state: g, options: F, name: $, instance: u }) || g);
              }
            }
          }
        },
        update: zf(function () {
          return new Promise(function (p) {
            u.forceUpdate(), p(g);
          });
        }),
        destroy: function () {
          _(), (c = !0);
        },
      };
    if (!$s(l, f)) return u;
    u.setOptions(d).then(function (p) {
      !c && d.onFirstUpdate && d.onFirstUpdate(p);
    });
    function h() {
      g.orderedModifiers.forEach(function (p) {
        var m = p.name,
          b = p.options,
          O = b === void 0 ? {} : b,
          D = p.effect;
        if (typeof D == "function") {
          var M = D({ state: g, name: m, instance: u, options: O }),
            I = function () {};
          s.push(M || I);
        }
      });
    }
    function _() {
      s.forEach(function (p) {
        return p();
      }),
        (s = []);
    }
    return u;
  };
}
var Qf = Zn(),
  Jf = [Di, Ii, Ci, Oi],
  Zf = Zn({ defaultModifiers: Jf }),
  ed = [Di, Ii, Ci, Oi, Ra, Pa, Ha, La, ka],
  Pi = Zn({ defaultModifiers: ed });
const Ba = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      popperGenerator: Zn,
      detectOverflow: Rt,
      createPopperBase: Qf,
      createPopper: Pi,
      createPopperLite: Zf,
      top: ce,
      bottom: _e,
      right: me,
      left: le,
      auto: Qn,
      basePlacements: jt,
      start: pt,
      end: Lt,
      clippingParents: ma,
      viewport: Ai,
      popper: xt,
      reference: ga,
      variationPlacements: Rr,
      placements: Ti,
      beforeRead: va,
      read: ya,
      afterRead: Ea,
      beforeMain: ba,
      main: wa,
      afterMain: Aa,
      beforeWrite: Ta,
      write: Sa,
      afterWrite: Oa,
      modifierPhases: xa,
      applyStyles: Oi,
      arrow: La,
      computeStyles: Ci,
      eventListeners: Di,
      flip: Pa,
      hide: ka,
      offset: Ra,
      popperOffsets: Ii,
      preventOverflow: Ha,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const td = 1e6,
  nd = 1e3,
  Br = "transitionend",
  rd = (e) =>
    e == null
      ? `${e}`
      : {}.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  id = (e) => {
    do e += Math.floor(Math.random() * td);
    while (document.getElementById(e));
    return e;
  },
  Va = (e) => {
    let t = e.getAttribute("data-bs-target");
    if (!t || t === "#") {
      let n = e.getAttribute("href");
      if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
      n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
        (t = n && n !== "#" ? n.trim() : null);
    }
    return t;
  },
  ki = (e) => {
    const t = Va(e);
    return t && document.querySelector(t) ? t : null;
  },
  Ye = (e) => {
    const t = Va(e);
    return t ? document.querySelector(t) : null;
  },
  sd = (e) => {
    if (!e) return 0;
    let { transitionDuration: t, transitionDelay: n } =
      window.getComputedStyle(e);
    const r = Number.parseFloat(t),
      i = Number.parseFloat(n);
    return !r && !i
      ? 0
      : ((t = t.split(",")[0]),
        (n = n.split(",")[0]),
        (Number.parseFloat(t) + Number.parseFloat(n)) * nd);
  },
  ja = (e) => {
    e.dispatchEvent(new Event(Br));
  },
  _t = (e) =>
    !e || typeof e != "object"
      ? !1
      : (typeof e.jquery < "u" && (e = e[0]), typeof e.nodeType < "u"),
  Ke = (e) =>
    _t(e)
      ? e.jquery
        ? e[0]
        : e
      : typeof e == "string" && e.length > 0
      ? document.querySelector(e)
      : null,
  ke = (e, t, n) => {
    Object.keys(n).forEach((r) => {
      const i = n[r],
        o = t[r],
        a = o && _t(o) ? "element" : rd(o);
      if (!new RegExp(i).test(a))
        throw new TypeError(
          `${e.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${i}".`
        );
    });
  },
  hn = (e) =>
    !_t(e) || e.getClientRects().length === 0
      ? !1
      : getComputedStyle(e).getPropertyValue("visibility") === "visible",
  ct = (e) =>
    !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains("disabled")
      ? !0
      : typeof e.disabled < "u"
      ? e.disabled
      : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false",
  Fa = (e) => {
    if (!document.documentElement.attachShadow) return null;
    if (typeof e.getRootNode == "function") {
      const t = e.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    }
    return e instanceof ShadowRoot ? e : e.parentNode ? Fa(e.parentNode) : null;
  },
  Hn = () => {},
  Ft = (e) => {
    e.offsetHeight;
  },
  Wa = () => {
    const { jQuery: e } = window;
    return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
  },
  Ar = [],
  od = (e) => {
    document.readyState === "loading"
      ? (Ar.length ||
          document.addEventListener("DOMContentLoaded", () => {
            Ar.forEach((t) => t());
          }),
        Ar.push(e))
      : e();
  },
  de = () => document.documentElement.dir === "rtl",
  Ee = (e) => {
    od(() => {
      const t = Wa();
      if (t) {
        const n = e.NAME,
          r = t.fn[n];
        (t.fn[n] = e.jQueryInterface),
          (t.fn[n].Constructor = e),
          (t.fn[n].noConflict = () => ((t.fn[n] = r), e.jQueryInterface));
      }
    });
  },
  ot = (e) => {
    typeof e == "function" && e();
  },
  Ua = (e, t, n = !0) => {
    if (!n) {
      ot(e);
      return;
    }
    const r = 5,
      i = sd(t) + r;
    let o = !1;
    const a = ({ target: l }) => {
      l === t && ((o = !0), t.removeEventListener(Br, a), ot(e));
    };
    t.addEventListener(Br, a),
      setTimeout(() => {
        o || ja(t);
      }, i);
  },
  Ya = (e, t, n, r) => {
    let i = e.indexOf(t);
    if (i === -1) return e[!n && r ? e.length - 1 : 0];
    const o = e.length;
    return (
      (i += n ? 1 : -1),
      r && (i = (i + o) % o),
      e[Math.max(0, Math.min(i, o - 1))]
    );
  },
  ad = /[^.]*(?=\..*)\.|.*/,
  cd = /\..*/,
  ld = /::\d+$/,
  Tr = {};
let Cs = 1;
const ud = { mouseenter: "mouseover", mouseleave: "mouseout" },
  fd = /^(mouseenter|mouseleave)/i,
  Ka = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll",
  ]);
function Ga(e, t) {
  return (t && `${t}::${Cs++}`) || e.uidEvent || Cs++;
}
function qa(e) {
  const t = Ga(e);
  return (e.uidEvent = t), (Tr[t] = Tr[t] || {}), Tr[t];
}
function dd(e, t) {
  return function n(r) {
    return (
      (r.delegateTarget = e), n.oneOff && T.off(e, r.type, t), t.apply(e, [r])
    );
  };
}
function hd(e, t, n) {
  return function r(i) {
    const o = e.querySelectorAll(t);
    for (let { target: a } = i; a && a !== this; a = a.parentNode)
      for (let l = o.length; l--; )
        if (o[l] === a)
          return (
            (i.delegateTarget = a),
            r.oneOff && T.off(e, i.type, t, n),
            n.apply(a, [i])
          );
    return null;
  };
}
function za(e, t, n = null) {
  const r = Object.keys(e);
  for (let i = 0, o = r.length; i < o; i++) {
    const a = e[r[i]];
    if (a.originalHandler === t && a.delegationSelector === n) return a;
  }
  return null;
}
function Xa(e, t, n) {
  const r = typeof t == "string",
    i = r ? n : t;
  let o = Qa(e);
  return Ka.has(o) || (o = e), [r, i, o];
}
function Ds(e, t, n, r, i) {
  if (typeof t != "string" || !e) return;
  if ((n || ((n = r), (r = null)), fd.test(t))) {
    const u = (h) =>
      function (_) {
        if (
          !_.relatedTarget ||
          (_.relatedTarget !== _.delegateTarget &&
            !_.delegateTarget.contains(_.relatedTarget))
        )
          return h.call(this, _);
      };
    r ? (r = u(r)) : (n = u(n));
  }
  const [o, a, l] = Xa(t, n, r),
    f = qa(e),
    d = f[l] || (f[l] = {}),
    g = za(d, a, o ? n : null);
  if (g) {
    g.oneOff = g.oneOff && i;
    return;
  }
  const s = Ga(a, t.replace(ad, "")),
    c = o ? hd(e, n, r) : dd(e, n);
  (c.delegationSelector = o ? n : null),
    (c.originalHandler = a),
    (c.oneOff = i),
    (c.uidEvent = s),
    (d[s] = c),
    e.addEventListener(l, c, o);
}
function Vr(e, t, n, r, i) {
  const o = za(t[n], r, i);
  !o || (e.removeEventListener(n, o, Boolean(i)), delete t[n][o.uidEvent]);
}
function pd(e, t, n, r) {
  const i = t[n] || {};
  Object.keys(i).forEach((o) => {
    if (o.includes(r)) {
      const a = i[o];
      Vr(e, t, n, a.originalHandler, a.delegationSelector);
    }
  });
}
function Qa(e) {
  return (e = e.replace(cd, "")), ud[e] || e;
}
const T = {
    on(e, t, n, r) {
      Ds(e, t, n, r, !1);
    },
    one(e, t, n, r) {
      Ds(e, t, n, r, !0);
    },
    off(e, t, n, r) {
      if (typeof t != "string" || !e) return;
      const [i, o, a] = Xa(t, n, r),
        l = a !== t,
        f = qa(e),
        d = t.startsWith(".");
      if (typeof o < "u") {
        if (!f || !f[a]) return;
        Vr(e, f, a, o, i ? n : null);
        return;
      }
      d &&
        Object.keys(f).forEach((s) => {
          pd(e, f, s, t.slice(1));
        });
      const g = f[a] || {};
      Object.keys(g).forEach((s) => {
        const c = s.replace(ld, "");
        if (!l || t.includes(c)) {
          const u = g[s];
          Vr(e, f, a, u.originalHandler, u.delegationSelector);
        }
      });
    },
    trigger(e, t, n) {
      if (typeof t != "string" || !e) return null;
      const r = Wa(),
        i = Qa(t),
        o = t !== i,
        a = Ka.has(i);
      let l,
        f = !0,
        d = !0,
        g = !1,
        s = null;
      return (
        o &&
          r &&
          ((l = r.Event(t, n)),
          r(e).trigger(l),
          (f = !l.isPropagationStopped()),
          (d = !l.isImmediatePropagationStopped()),
          (g = l.isDefaultPrevented())),
        a
          ? ((s = document.createEvent("HTMLEvents")), s.initEvent(i, f, !0))
          : (s = new CustomEvent(t, { bubbles: f, cancelable: !0 })),
        typeof n < "u" &&
          Object.keys(n).forEach((c) => {
            Object.defineProperty(s, c, {
              get() {
                return n[c];
              },
            });
          }),
        g && s.preventDefault(),
        d && e.dispatchEvent(s),
        s.defaultPrevented && typeof l < "u" && l.preventDefault(),
        s
      );
    },
  },
  We = new Map(),
  nn = {
    set(e, t, n) {
      We.has(e) || We.set(e, new Map());
      const r = We.get(e);
      if (!r.has(t) && r.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
            Array.from(r.keys())[0]
          }.`
        );
        return;
      }
      r.set(t, n);
    },
    get(e, t) {
      return (We.has(e) && We.get(e).get(t)) || null;
    },
    remove(e, t) {
      if (!We.has(e)) return;
      const n = We.get(e);
      n.delete(t), n.size === 0 && We.delete(e);
    },
  },
  _d = "5.1.3";
class xe {
  constructor(t) {
    (t = Ke(t)),
      t &&
        ((this._element = t),
        nn.set(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    nn.remove(this._element, this.constructor.DATA_KEY),
      T.off(this._element, this.constructor.EVENT_KEY),
      Object.getOwnPropertyNames(this).forEach((t) => {
        this[t] = null;
      });
  }
  _queueCallback(t, n, r = !0) {
    Ua(t, n, r);
  }
  static getInstance(t) {
    return nn.get(Ke(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, n = {}) {
    return this.getInstance(t) || new this(t, typeof n == "object" ? n : null);
  }
  static get VERSION() {
    return _d;
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
}
const er = (e, t = "hide") => {
    const n = `click.dismiss${e.EVENT_KEY}`,
      r = e.NAME;
    T.on(document, n, `[data-bs-dismiss="${r}"]`, function (i) {
      if (
        (["A", "AREA"].includes(this.tagName) && i.preventDefault(), ct(this))
      )
        return;
      const o = Ye(this) || this.closest(`.${r}`);
      e.getOrCreateInstance(o)[t]();
    });
  },
  md = "alert",
  gd = "bs.alert",
  Ja = `.${gd}`,
  vd = `close${Ja}`,
  yd = `closed${Ja}`,
  Ed = "fade",
  bd = "show";
class pn extends xe {
  static get NAME() {
    return md;
  }
  close() {
    if (T.trigger(this._element, vd).defaultPrevented) return;
    this._element.classList.remove(bd);
    const n = this._element.classList.contains(Ed);
    this._queueCallback(() => this._destroyElement(), this._element, n);
  }
  _destroyElement() {
    this._element.remove(), T.trigger(this._element, yd), this.dispose();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = pn.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
er(pn, "close");
Ee(pn);
const wd = "button",
  Ad = "bs.button",
  Td = `.${Ad}`,
  Sd = ".data-api",
  Od = "active",
  Ns = '[data-bs-toggle="button"]',
  xd = `click${Td}${Sd}`;
class tr extends xe {
  static get NAME() {
    return wd;
  }
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(Od)
    );
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = tr.getOrCreateInstance(this);
      t === "toggle" && n[t]();
    });
  }
}
T.on(document, xd, Ns, (e) => {
  e.preventDefault();
  const t = e.target.closest(Ns);
  tr.getOrCreateInstance(t).toggle();
});
Ee(tr);
function Ls(e) {
  return e === "true"
    ? !0
    : e === "false"
    ? !1
    : e === Number(e).toString()
    ? Number(e)
    : e === "" || e === "null"
    ? null
    : e;
}
function Sr(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const ie = {
    setDataAttribute(e, t, n) {
      e.setAttribute(`data-bs-${Sr(t)}`, n);
    },
    removeDataAttribute(e, t) {
      e.removeAttribute(`data-bs-${Sr(t)}`);
    },
    getDataAttributes(e) {
      if (!e) return {};
      const t = {};
      return (
        Object.keys(e.dataset)
          .filter((n) => n.startsWith("bs"))
          .forEach((n) => {
            let r = n.replace(/^bs/, "");
            (r = r.charAt(0).toLowerCase() + r.slice(1, r.length)),
              (t[r] = Ls(e.dataset[n]));
          }),
        t
      );
    },
    getDataAttribute(e, t) {
      return Ls(e.getAttribute(`data-bs-${Sr(t)}`));
    },
    offset(e) {
      const t = e.getBoundingClientRect();
      return {
        top: t.top + window.pageYOffset,
        left: t.left + window.pageXOffset,
      };
    },
    position(e) {
      return { top: e.offsetTop, left: e.offsetLeft };
    },
  },
  $d = 3,
  H = {
    find(e, t = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(t, e));
    },
    findOne(e, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, e);
    },
    children(e, t) {
      return [].concat(...e.children).filter((n) => n.matches(t));
    },
    parents(e, t) {
      const n = [];
      let r = e.parentNode;
      for (; r && r.nodeType === Node.ELEMENT_NODE && r.nodeType !== $d; )
        r.matches(t) && n.push(r), (r = r.parentNode);
      return n;
    },
    prev(e, t) {
      let n = e.previousElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.previousElementSibling;
      }
      return [];
    },
    next(e, t) {
      let n = e.nextElementSibling;
      for (; n; ) {
        if (n.matches(t)) return [n];
        n = n.nextElementSibling;
      }
      return [];
    },
    focusableChildren(e) {
      const t = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]',
      ]
        .map((n) => `${n}:not([tabindex^="-"])`)
        .join(", ");
      return this.find(t, e).filter((n) => !ct(n) && hn(n));
    },
  },
  Ms = "carousel",
  Cd = "bs.carousel",
  ge = `.${Cd}`,
  Za = ".data-api",
  Dd = "ArrowLeft",
  Nd = "ArrowRight",
  Ld = 500,
  Md = 40,
  Is = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0,
  },
  Id = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean",
  },
  et = "next",
  tt = "prev",
  rt = "left",
  Jt = "right",
  Pd = { [Dd]: Jt, [Nd]: rt },
  kd = `slide${ge}`,
  Ps = `slid${ge}`,
  Rd = `keydown${ge}`,
  Hd = `mouseenter${ge}`,
  Bd = `mouseleave${ge}`,
  Vd = `touchstart${ge}`,
  jd = `touchmove${ge}`,
  Fd = `touchend${ge}`,
  Wd = `pointerdown${ge}`,
  Ud = `pointerup${ge}`,
  Yd = `dragstart${ge}`,
  Kd = `load${ge}${Za}`,
  Gd = `click${ge}${Za}`,
  qd = "carousel",
  nt = "active",
  zd = "slide",
  Xd = "carousel-item-end",
  Qd = "carousel-item-start",
  Jd = "carousel-item-next",
  Zd = "carousel-item-prev",
  eh = "pointer-event",
  th = ".active",
  Tn = ".active.carousel-item",
  nh = ".carousel-item",
  rh = ".carousel-item img",
  ih = ".carousel-item-next, .carousel-item-prev",
  sh = ".carousel-indicators",
  oh = "[data-bs-target]",
  ah = "[data-bs-slide], [data-bs-slide-to]",
  ch = '[data-bs-ride="carousel"]',
  lh = "touch",
  uh = "pen";
class He extends xe {
  constructor(t, n) {
    super(t),
      (this._items = null),
      (this._interval = null),
      (this._activeElement = null),
      (this._isPaused = !1),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this.touchStartX = 0),
      (this.touchDeltaX = 0),
      (this._config = this._getConfig(n)),
      (this._indicatorsElement = H.findOne(sh, this._element)),
      (this._touchSupported =
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0),
      (this._pointerEvent = Boolean(window.PointerEvent)),
      this._addEventListeners();
  }
  static get Default() {
    return Is;
  }
  static get NAME() {
    return Ms;
  }
  next() {
    this._slide(et);
  }
  nextWhenVisible() {
    !document.hidden && hn(this._element) && this.next();
  }
  prev() {
    this._slide(tt);
  }
  pause(t) {
    t || (this._isPaused = !0),
      H.findOne(ih, this._element) && (ja(this._element), this.cycle(!0)),
      clearInterval(this._interval),
      (this._interval = null);
  }
  cycle(t) {
    t || (this._isPaused = !1),
      this._interval &&
        (clearInterval(this._interval), (this._interval = null)),
      this._config &&
        this._config.interval &&
        !this._isPaused &&
        (this._updateInterval(),
        (this._interval = setInterval(
          (document.visibilityState ? this.nextWhenVisible : this.next).bind(
            this
          ),
          this._config.interval
        )));
  }
  to(t) {
    this._activeElement = H.findOne(Tn, this._element);
    const n = this._getItemIndex(this._activeElement);
    if (t > this._items.length - 1 || t < 0) return;
    if (this._isSliding) {
      T.one(this._element, Ps, () => this.to(t));
      return;
    }
    if (n === t) {
      this.pause(), this.cycle();
      return;
    }
    const r = t > n ? et : tt;
    this._slide(r, this._items[t]);
  }
  _getConfig(t) {
    return (
      (t = {
        ...Is,
        ...ie.getDataAttributes(this._element),
        ...(typeof t == "object" ? t : {}),
      }),
      ke(Ms, t, Id),
      t
    );
  }
  _handleSwipe() {
    const t = Math.abs(this.touchDeltaX);
    if (t <= Md) return;
    const n = t / this.touchDeltaX;
    (this.touchDeltaX = 0), n && this._slide(n > 0 ? Jt : rt);
  }
  _addEventListeners() {
    this._config.keyboard && T.on(this._element, Rd, (t) => this._keydown(t)),
      this._config.pause === "hover" &&
        (T.on(this._element, Hd, (t) => this.pause(t)),
        T.on(this._element, Bd, (t) => this.cycle(t))),
      this._config.touch &&
        this._touchSupported &&
        this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    const t = (o) =>
        this._pointerEvent && (o.pointerType === uh || o.pointerType === lh),
      n = (o) => {
        t(o)
          ? (this.touchStartX = o.clientX)
          : this._pointerEvent || (this.touchStartX = o.touches[0].clientX);
      },
      r = (o) => {
        this.touchDeltaX =
          o.touches && o.touches.length > 1
            ? 0
            : o.touches[0].clientX - this.touchStartX;
      },
      i = (o) => {
        t(o) && (this.touchDeltaX = o.clientX - this.touchStartX),
          this._handleSwipe(),
          this._config.pause === "hover" &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              (a) => this.cycle(a),
              Ld + this._config.interval
            )));
      };
    H.find(rh, this._element).forEach((o) => {
      T.on(o, Yd, (a) => a.preventDefault());
    }),
      this._pointerEvent
        ? (T.on(this._element, Wd, (o) => n(o)),
          T.on(this._element, Ud, (o) => i(o)),
          this._element.classList.add(eh))
        : (T.on(this._element, Vd, (o) => n(o)),
          T.on(this._element, jd, (o) => r(o)),
          T.on(this._element, Fd, (o) => i(o)));
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName)) return;
    const n = Pd[t.key];
    n && (t.preventDefault(), this._slide(n));
  }
  _getItemIndex(t) {
    return (
      (this._items = t && t.parentNode ? H.find(nh, t.parentNode) : []),
      this._items.indexOf(t)
    );
  }
  _getItemByOrder(t, n) {
    const r = t === et;
    return Ya(this._items, n, r, this._config.wrap);
  }
  _triggerSlideEvent(t, n) {
    const r = this._getItemIndex(t),
      i = this._getItemIndex(H.findOne(Tn, this._element));
    return T.trigger(this._element, kd, {
      relatedTarget: t,
      direction: n,
      from: i,
      to: r,
    });
  }
  _setActiveIndicatorElement(t) {
    if (this._indicatorsElement) {
      const n = H.findOne(th, this._indicatorsElement);
      n.classList.remove(nt), n.removeAttribute("aria-current");
      const r = H.find(oh, this._indicatorsElement);
      for (let i = 0; i < r.length; i++)
        if (
          Number.parseInt(r[i].getAttribute("data-bs-slide-to"), 10) ===
          this._getItemIndex(t)
        ) {
          r[i].classList.add(nt), r[i].setAttribute("aria-current", "true");
          break;
        }
    }
  }
  _updateInterval() {
    const t = this._activeElement || H.findOne(Tn, this._element);
    if (!t) return;
    const n = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    n
      ? ((this._config.defaultInterval =
          this._config.defaultInterval || this._config.interval),
        (this._config.interval = n))
      : (this._config.interval =
          this._config.defaultInterval || this._config.interval);
  }
  _slide(t, n) {
    const r = this._directionToOrder(t),
      i = H.findOne(Tn, this._element),
      o = this._getItemIndex(i),
      a = n || this._getItemByOrder(r, i),
      l = this._getItemIndex(a),
      f = Boolean(this._interval),
      d = r === et,
      g = d ? Qd : Xd,
      s = d ? Jd : Zd,
      c = this._orderToDirection(r);
    if (a && a.classList.contains(nt)) {
      this._isSliding = !1;
      return;
    }
    if (
      this._isSliding ||
      this._triggerSlideEvent(a, c).defaultPrevented ||
      !i ||
      !a
    )
      return;
    (this._isSliding = !0),
      f && this.pause(),
      this._setActiveIndicatorElement(a),
      (this._activeElement = a);
    const h = () => {
      T.trigger(this._element, Ps, {
        relatedTarget: a,
        direction: c,
        from: o,
        to: l,
      });
    };
    if (this._element.classList.contains(zd)) {
      a.classList.add(s), Ft(a), i.classList.add(g), a.classList.add(g);
      const _ = () => {
        a.classList.remove(g, s),
          a.classList.add(nt),
          i.classList.remove(nt, s, g),
          (this._isSliding = !1),
          setTimeout(h, 0);
      };
      this._queueCallback(_, i, !0);
    } else
      i.classList.remove(nt), a.classList.add(nt), (this._isSliding = !1), h();
    f && this.cycle();
  }
  _directionToOrder(t) {
    return [Jt, rt].includes(t)
      ? de()
        ? t === rt
          ? tt
          : et
        : t === rt
        ? et
        : tt
      : t;
  }
  _orderToDirection(t) {
    return [et, tt].includes(t)
      ? de()
        ? t === tt
          ? rt
          : Jt
        : t === tt
        ? Jt
        : rt
      : t;
  }
  static carouselInterface(t, n) {
    const r = He.getOrCreateInstance(t, n);
    let { _config: i } = r;
    typeof n == "object" && (i = { ...i, ...n });
    const o = typeof n == "string" ? n : i.slide;
    if (typeof n == "number") r.to(n);
    else if (typeof o == "string") {
      if (typeof r[o] > "u") throw new TypeError(`No method named "${o}"`);
      r[o]();
    } else i.interval && i.ride && (r.pause(), r.cycle());
  }
  static jQueryInterface(t) {
    return this.each(function () {
      He.carouselInterface(this, t);
    });
  }
  static dataApiClickHandler(t) {
    const n = Ye(this);
    if (!n || !n.classList.contains(qd)) return;
    const r = { ...ie.getDataAttributes(n), ...ie.getDataAttributes(this) },
      i = this.getAttribute("data-bs-slide-to");
    i && (r.interval = !1),
      He.carouselInterface(n, r),
      i && He.getInstance(n).to(i),
      t.preventDefault();
  }
}
T.on(document, Gd, ah, He.dataApiClickHandler);
T.on(window, Kd, () => {
  const e = H.find(ch);
  for (let t = 0, n = e.length; t < n; t++)
    He.carouselInterface(e[t], He.getInstance(e[t]));
});
Ee(He);
const ks = "collapse",
  ec = "bs.collapse",
  _n = `.${ec}`,
  fh = ".data-api",
  Rs = { toggle: !0, parent: null },
  dh = { toggle: "boolean", parent: "(null|element)" },
  hh = `show${_n}`,
  ph = `shown${_n}`,
  _h = `hide${_n}`,
  mh = `hidden${_n}`,
  gh = `click${_n}${fh}`,
  Or = "show",
  $t = "collapse",
  Sn = "collapsing",
  Hs = "collapsed",
  Bs = `:scope .${$t} .${$t}`,
  vh = "collapse-horizontal",
  yh = "width",
  Eh = "height",
  bh = ".collapse.show, .collapse.collapsing",
  jr = '[data-bs-toggle="collapse"]';
class lt extends xe {
  constructor(t, n) {
    super(t),
      (this._isTransitioning = !1),
      (this._config = this._getConfig(n)),
      (this._triggerArray = []);
    const r = H.find(jr);
    for (let i = 0, o = r.length; i < o; i++) {
      const a = r[i],
        l = ki(a),
        f = H.find(l).filter((d) => d === this._element);
      l !== null &&
        f.length &&
        ((this._selector = l), this._triggerArray.push(a));
    }
    this._initializeChildren(),
      this._config.parent ||
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle();
  }
  static get Default() {
    return Rs;
  }
  static get NAME() {
    return ks;
  }
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown()) return;
    let t = [],
      n;
    if (this._config.parent) {
      const d = H.find(Bs, this._config.parent);
      t = H.find(bh, this._config.parent).filter((g) => !d.includes(g));
    }
    const r = H.findOne(this._selector);
    if (t.length) {
      const d = t.find((g) => r !== g);
      if (((n = d ? lt.getInstance(d) : null), n && n._isTransitioning)) return;
    }
    if (T.trigger(this._element, hh).defaultPrevented) return;
    t.forEach((d) => {
      r !== d && lt.getOrCreateInstance(d, { toggle: !1 }).hide(),
        n || nn.set(d, ec, null);
    });
    const o = this._getDimension();
    this._element.classList.remove($t),
      this._element.classList.add(Sn),
      (this._element.style[o] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0);
    const a = () => {
        (this._isTransitioning = !1),
          this._element.classList.remove(Sn),
          this._element.classList.add($t, Or),
          (this._element.style[o] = ""),
          T.trigger(this._element, ph);
      },
      f = `scroll${o[0].toUpperCase() + o.slice(1)}`;
    this._queueCallback(a, this._element, !0),
      (this._element.style[o] = `${this._element[f]}px`);
  }
  hide() {
    if (
      this._isTransitioning ||
      !this._isShown() ||
      T.trigger(this._element, _h).defaultPrevented
    )
      return;
    const n = this._getDimension();
    (this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`),
      Ft(this._element),
      this._element.classList.add(Sn),
      this._element.classList.remove($t, Or);
    const r = this._triggerArray.length;
    for (let o = 0; o < r; o++) {
      const a = this._triggerArray[o],
        l = Ye(a);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], !1);
    }
    this._isTransitioning = !0;
    const i = () => {
      (this._isTransitioning = !1),
        this._element.classList.remove(Sn),
        this._element.classList.add($t),
        T.trigger(this._element, mh);
    };
    (this._element.style[n] = ""), this._queueCallback(i, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(Or);
  }
  _getConfig(t) {
    return (
      (t = { ...Rs, ...ie.getDataAttributes(this._element), ...t }),
      (t.toggle = Boolean(t.toggle)),
      (t.parent = Ke(t.parent)),
      ke(ks, t, dh),
      t
    );
  }
  _getDimension() {
    return this._element.classList.contains(vh) ? yh : Eh;
  }
  _initializeChildren() {
    if (!this._config.parent) return;
    const t = H.find(Bs, this._config.parent);
    H.find(jr, this._config.parent)
      .filter((n) => !t.includes(n))
      .forEach((n) => {
        const r = Ye(n);
        r && this._addAriaAndCollapsedClass([n], this._isShown(r));
      });
  }
  _addAriaAndCollapsedClass(t, n) {
    !t.length ||
      t.forEach((r) => {
        n ? r.classList.remove(Hs) : r.classList.add(Hs),
          r.setAttribute("aria-expanded", n);
      });
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = {};
      typeof t == "string" && /show|hide/.test(t) && (n.toggle = !1);
      const r = lt.getOrCreateInstance(this, n);
      if (typeof t == "string") {
        if (typeof r[t] > "u") throw new TypeError(`No method named "${t}"`);
        r[t]();
      }
    });
  }
}
T.on(document, gh, jr, function (e) {
  (e.target.tagName === "A" ||
    (e.delegateTarget && e.delegateTarget.tagName === "A")) &&
    e.preventDefault();
  const t = ki(this);
  H.find(t).forEach((r) => {
    lt.getOrCreateInstance(r, { toggle: !1 }).toggle();
  });
});
Ee(lt);
const xr = "dropdown",
  wh = "bs.dropdown",
  bt = `.${wh}`,
  Ri = ".data-api",
  Ln = "Escape",
  Vs = "Space",
  js = "Tab",
  Fr = "ArrowUp",
  Mn = "ArrowDown",
  Ah = 2,
  Th = new RegExp(`${Fr}|${Mn}|${Ln}`),
  Sh = `hide${bt}`,
  Oh = `hidden${bt}`,
  xh = `show${bt}`,
  $h = `shown${bt}`,
  tc = `click${bt}${Ri}`,
  nc = `keydown${bt}${Ri}`,
  Ch = `keyup${bt}${Ri}`,
  Tt = "show",
  Dh = "dropup",
  Nh = "dropend",
  Lh = "dropstart",
  Mh = "navbar",
  rn = '[data-bs-toggle="dropdown"]',
  Wr = ".dropdown-menu",
  Ih = ".navbar-nav",
  Ph = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
  kh = de() ? "top-end" : "top-start",
  Rh = de() ? "top-start" : "top-end",
  Hh = de() ? "bottom-end" : "bottom-start",
  Bh = de() ? "bottom-start" : "bottom-end",
  Vh = de() ? "left-start" : "right-start",
  jh = de() ? "right-start" : "left-start",
  Fh = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0,
  },
  Wh = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)",
  };
class ve extends xe {
  constructor(t, n) {
    super(t),
      (this._popper = null),
      (this._config = this._getConfig(n)),
      (this._menu = this._getMenuElement()),
      (this._inNavbar = this._detectNavbar());
  }
  static get Default() {
    return Fh;
  }
  static get DefaultType() {
    return Wh;
  }
  static get NAME() {
    return xr;
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (ct(this._element) || this._isShown(this._menu)) return;
    const t = { relatedTarget: this._element };
    if (T.trigger(this._element, xh, t).defaultPrevented) return;
    const r = ve.getParentFromElement(this._element);
    this._inNavbar
      ? ie.setDataAttribute(this._menu, "popper", "none")
      : this._createPopper(r),
      "ontouchstart" in document.documentElement &&
        !r.closest(Ih) &&
        []
          .concat(...document.body.children)
          .forEach((i) => T.on(i, "mouseover", Hn)),
      this._element.focus(),
      this._element.setAttribute("aria-expanded", !0),
      this._menu.classList.add(Tt),
      this._element.classList.add(Tt),
      T.trigger(this._element, $h, t);
  }
  hide() {
    if (ct(this._element) || !this._isShown(this._menu)) return;
    const t = { relatedTarget: this._element };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    (this._inNavbar = this._detectNavbar()),
      this._popper && this._popper.update();
  }
  _completeHide(t) {
    T.trigger(this._element, Sh, t).defaultPrevented ||
      ("ontouchstart" in document.documentElement &&
        []
          .concat(...document.body.children)
          .forEach((r) => T.off(r, "mouseover", Hn)),
      this._popper && this._popper.destroy(),
      this._menu.classList.remove(Tt),
      this._element.classList.remove(Tt),
      this._element.setAttribute("aria-expanded", "false"),
      ie.removeDataAttribute(this._menu, "popper"),
      T.trigger(this._element, Oh, t));
  }
  _getConfig(t) {
    if (
      ((t = {
        ...this.constructor.Default,
        ...ie.getDataAttributes(this._element),
        ...t,
      }),
      ke(xr, t, this.constructor.DefaultType),
      typeof t.reference == "object" &&
        !_t(t.reference) &&
        typeof t.reference.getBoundingClientRect != "function")
    )
      throw new TypeError(
        `${xr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper(t) {
    if (typeof Ba > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let n = this._element;
    this._config.reference === "parent"
      ? (n = t)
      : _t(this._config.reference)
      ? (n = Ke(this._config.reference))
      : typeof this._config.reference == "object" &&
        (n = this._config.reference);
    const r = this._getPopperConfig(),
      i = r.modifiers.find((o) => o.name === "applyStyles" && o.enabled === !1);
    (this._popper = Pi(n, this._menu, r)),
      i && ie.setDataAttribute(this._menu, "popper", "static");
  }
  _isShown(t = this._element) {
    return t.classList.contains(Tt);
  }
  _getMenuElement() {
    return H.next(this._element, Wr)[0];
  }
  _getPlacement() {
    const t = this._element.parentNode;
    if (t.classList.contains(Nh)) return Vh;
    if (t.classList.contains(Lh)) return jh;
    const n =
      getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() ===
      "end";
    return t.classList.contains(Dh) ? (n ? Rh : kh) : n ? Bh : Hh;
  }
  _detectNavbar() {
    return this._element.closest(`.${Mh}`) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((n) => Number.parseInt(n, 10))
      : typeof t == "function"
      ? (n) => t(n, this._element)
      : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        { name: "offset", options: { offset: this._getOffset() } },
      ],
    };
    return (
      this._config.display === "static" &&
        (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
      {
        ...t,
        ...(typeof this._config.popperConfig == "function"
          ? this._config.popperConfig(t)
          : this._config.popperConfig),
      }
    );
  }
  _selectMenuItem({ key: t, target: n }) {
    const r = H.find(Ph, this._menu).filter(hn);
    !r.length || Ya(r, n, t === Mn, !r.includes(n)).focus();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ve.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t && (t.button === Ah || (t.type === "keyup" && t.key !== js))) return;
    const n = H.find(rn);
    for (let r = 0, i = n.length; r < i; r++) {
      const o = ve.getInstance(n[r]);
      if (!o || o._config.autoClose === !1 || !o._isShown()) continue;
      const a = { relatedTarget: o._element };
      if (t) {
        const l = t.composedPath(),
          f = l.includes(o._menu);
        if (
          l.includes(o._element) ||
          (o._config.autoClose === "inside" && !f) ||
          (o._config.autoClose === "outside" && f) ||
          (o._menu.contains(t.target) &&
            ((t.type === "keyup" && t.key === js) ||
              /input|select|option|textarea|form/i.test(t.target.tagName)))
        )
          continue;
        t.type === "click" && (a.clickEvent = t);
      }
      o._completeHide(a);
    }
  }
  static getParentFromElement(t) {
    return Ye(t) || t.parentNode;
  }
  static dataApiKeydownHandler(t) {
    if (
      /input|textarea/i.test(t.target.tagName)
        ? t.key === Vs ||
          (t.key !== Ln &&
            ((t.key !== Mn && t.key !== Fr) || t.target.closest(Wr)))
        : !Th.test(t.key)
    )
      return;
    const n = this.classList.contains(Tt);
    if (
      (!n && t.key === Ln) ||
      (t.preventDefault(), t.stopPropagation(), ct(this))
    )
      return;
    const r = this.matches(rn) ? this : H.prev(this, rn)[0],
      i = ve.getOrCreateInstance(r);
    if (t.key === Ln) {
      i.hide();
      return;
    }
    if (t.key === Fr || t.key === Mn) {
      n || i.show(), i._selectMenuItem(t);
      return;
    }
    (!n || t.key === Vs) && ve.clearMenus();
  }
}
T.on(document, nc, rn, ve.dataApiKeydownHandler);
T.on(document, nc, Wr, ve.dataApiKeydownHandler);
T.on(document, tc, ve.clearMenus);
T.on(document, Ch, ve.clearMenus);
T.on(document, tc, rn, function (e) {
  e.preventDefault(), ve.getOrCreateInstance(this).toggle();
});
Ee(ve);
const Fs = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  Ws = ".sticky-top";
class Ur {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(),
      this._setElementAttributes(this._element, "paddingRight", (n) => n + t),
      this._setElementAttributes(Fs, "paddingRight", (n) => n + t),
      this._setElementAttributes(Ws, "marginRight", (n) => n - t);
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"),
      (this._element.style.overflow = "hidden");
  }
  _setElementAttributes(t, n, r) {
    const i = this.getWidth(),
      o = (a) => {
        if (a !== this._element && window.innerWidth > a.clientWidth + i)
          return;
        this._saveInitialAttribute(a, n);
        const l = window.getComputedStyle(a)[n];
        a.style[n] = `${r(Number.parseFloat(l))}px`;
      };
    this._applyManipulationCallback(t, o);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"),
      this._resetElementAttributes(this._element, "paddingRight"),
      this._resetElementAttributes(Fs, "paddingRight"),
      this._resetElementAttributes(Ws, "marginRight");
  }
  _saveInitialAttribute(t, n) {
    const r = t.style[n];
    r && ie.setDataAttribute(t, n, r);
  }
  _resetElementAttributes(t, n) {
    const r = (i) => {
      const o = ie.getDataAttribute(i, n);
      typeof o > "u"
        ? i.style.removeProperty(n)
        : (ie.removeDataAttribute(i, n), (i.style[n] = o));
    };
    this._applyManipulationCallback(t, r);
  }
  _applyManipulationCallback(t, n) {
    _t(t) ? n(t) : H.find(t, this._element).forEach(n);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
}
const Uh = {
    className: "modal-backdrop",
    isVisible: !0,
    isAnimated: !1,
    rootElement: "body",
    clickCallback: null,
  },
  Yh = {
    className: "string",
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "(element|string)",
    clickCallback: "(function|null)",
  },
  rc = "backdrop",
  Kh = "fade",
  Us = "show",
  Ys = `mousedown.bs.${rc}`;
class ic {
  constructor(t) {
    (this._config = this._getConfig(t)),
      (this._isAppended = !1),
      (this._element = null);
  }
  show(t) {
    if (!this._config.isVisible) {
      ot(t);
      return;
    }
    this._append(),
      this._config.isAnimated && Ft(this._getElement()),
      this._getElement().classList.add(Us),
      this._emulateAnimation(() => {
        ot(t);
      });
  }
  hide(t) {
    if (!this._config.isVisible) {
      ot(t);
      return;
    }
    this._getElement().classList.remove(Us),
      this._emulateAnimation(() => {
        this.dispose(), ot(t);
      });
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      (t.className = this._config.className),
        this._config.isAnimated && t.classList.add(Kh),
        (this._element = t);
    }
    return this._element;
  }
  _getConfig(t) {
    return (
      (t = { ...Uh, ...(typeof t == "object" ? t : {}) }),
      (t.rootElement = Ke(t.rootElement)),
      ke(rc, t, Yh),
      t
    );
  }
  _append() {
    this._isAppended ||
      (this._config.rootElement.append(this._getElement()),
      T.on(this._getElement(), Ys, () => {
        ot(this._config.clickCallback);
      }),
      (this._isAppended = !0));
  }
  dispose() {
    !this._isAppended ||
      (T.off(this._element, Ys),
      this._element.remove(),
      (this._isAppended = !1));
  }
  _emulateAnimation(t) {
    Ua(t, this._getElement(), this._config.isAnimated);
  }
}
const Gh = { trapElement: null, autofocus: !0 },
  qh = { trapElement: "element", autofocus: "boolean" },
  zh = "focustrap",
  Xh = "bs.focustrap",
  Bn = `.${Xh}`,
  Qh = `focusin${Bn}`,
  Jh = `keydown.tab${Bn}`,
  Zh = "Tab",
  ep = "forward",
  Ks = "backward";
class sc {
  constructor(t) {
    (this._config = this._getConfig(t)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null);
  }
  activate() {
    const { trapElement: t, autofocus: n } = this._config;
    this._isActive ||
      (n && t.focus(),
      T.off(document, Bn),
      T.on(document, Qh, (r) => this._handleFocusin(r)),
      T.on(document, Jh, (r) => this._handleKeydown(r)),
      (this._isActive = !0));
  }
  deactivate() {
    !this._isActive || ((this._isActive = !1), T.off(document, Bn));
  }
  _handleFocusin(t) {
    const { target: n } = t,
      { trapElement: r } = this._config;
    if (n === document || n === r || r.contains(n)) return;
    const i = H.focusableChildren(r);
    i.length === 0
      ? r.focus()
      : this._lastTabNavDirection === Ks
      ? i[i.length - 1].focus()
      : i[0].focus();
  }
  _handleKeydown(t) {
    t.key === Zh && (this._lastTabNavDirection = t.shiftKey ? Ks : ep);
  }
  _getConfig(t) {
    return (
      (t = { ...Gh, ...(typeof t == "object" ? t : {}) }), ke(zh, t, qh), t
    );
  }
}
const Gs = "modal",
  tp = "bs.modal",
  be = `.${tp}`,
  np = ".data-api",
  qs = "Escape",
  zs = { backdrop: !0, keyboard: !0, focus: !0 },
  rp = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" },
  ip = `hide${be}`,
  sp = `hidePrevented${be}`,
  oc = `hidden${be}`,
  ac = `show${be}`,
  op = `shown${be}`,
  Xs = `resize${be}`,
  Qs = `click.dismiss${be}`,
  Js = `keydown.dismiss${be}`,
  ap = `mouseup.dismiss${be}`,
  Zs = `mousedown.dismiss${be}`,
  cp = `click${be}${np}`,
  eo = "modal-open",
  lp = "fade",
  to = "show",
  $r = "modal-static",
  up = ".modal.show",
  fp = ".modal-dialog",
  dp = ".modal-body",
  hp = '[data-bs-toggle="modal"]';
class mt extends xe {
  constructor(t, n) {
    super(t),
      (this._config = this._getConfig(n)),
      (this._dialog = H.findOne(fp, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._ignoreBackdropClick = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new Ur());
  }
  static get Default() {
    return zs;
  }
  static get NAME() {
    return Gs;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown ||
      this._isTransitioning ||
      T.trigger(this._element, ac, { relatedTarget: t }).defaultPrevented ||
      ((this._isShown = !0),
      this._isAnimated() && (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(eo),
      this._adjustDialog(),
      this._setEscapeEvent(),
      this._setResizeEvent(),
      T.on(this._dialog, Zs, () => {
        T.one(this._element, ap, (r) => {
          r.target === this._element && (this._ignoreBackdropClick = !0);
        });
      }),
      this._showBackdrop(() => this._showElement(t)));
  }
  hide() {
    if (
      !this._isShown ||
      this._isTransitioning ||
      T.trigger(this._element, ip).defaultPrevented
    )
      return;
    this._isShown = !1;
    const n = this._isAnimated();
    n && (this._isTransitioning = !0),
      this._setEscapeEvent(),
      this._setResizeEvent(),
      this._focustrap.deactivate(),
      this._element.classList.remove(to),
      T.off(this._element, Qs),
      T.off(this._dialog, Zs),
      this._queueCallback(() => this._hideModal(), this._element, n);
  }
  dispose() {
    [window, this._dialog].forEach((t) => T.off(t, be)),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  _initializeBackDrop() {
    return new ic({
      isVisible: Boolean(this._config.backdrop),
      isAnimated: this._isAnimated(),
    });
  }
  _initializeFocusTrap() {
    return new sc({ trapElement: this._element });
  }
  _getConfig(t) {
    return (
      (t = {
        ...zs,
        ...ie.getDataAttributes(this._element),
        ...(typeof t == "object" ? t : {}),
      }),
      ke(Gs, t, rp),
      t
    );
  }
  _showElement(t) {
    const n = this._isAnimated(),
      r = H.findOne(dp, this._dialog);
    (!this._element.parentNode ||
      this._element.parentNode.nodeType !== Node.ELEMENT_NODE) &&
      document.body.append(this._element),
      (this._element.style.display = "block"),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      (this._element.scrollTop = 0),
      r && (r.scrollTop = 0),
      n && Ft(this._element),
      this._element.classList.add(to);
    const i = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        T.trigger(this._element, op, { relatedTarget: t });
    };
    this._queueCallback(i, this._dialog, n);
  }
  _setEscapeEvent() {
    this._isShown
      ? T.on(this._element, Js, (t) => {
          this._config.keyboard && t.key === qs
            ? (t.preventDefault(), this.hide())
            : !this._config.keyboard &&
              t.key === qs &&
              this._triggerBackdropTransition();
        })
      : T.off(this._element, Js);
  }
  _setResizeEvent() {
    this._isShown
      ? T.on(window, Xs, () => this._adjustDialog())
      : T.off(window, Xs);
  }
  _hideModal() {
    (this._element.style.display = "none"),
      this._element.setAttribute("aria-hidden", !0),
      this._element.removeAttribute("aria-modal"),
      this._element.removeAttribute("role"),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(eo),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          T.trigger(this._element, oc);
      });
  }
  _showBackdrop(t) {
    T.on(this._element, Qs, (n) => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = !1;
        return;
      }
      n.target === n.currentTarget &&
        (this._config.backdrop === !0
          ? this.hide()
          : this._config.backdrop === "static" &&
            this._triggerBackdropTransition());
    }),
      this._backdrop.show(t);
  }
  _isAnimated() {
    return this._element.classList.contains(lp);
  }
  _triggerBackdropTransition() {
    if (T.trigger(this._element, sp).defaultPrevented) return;
    const { classList: n, scrollHeight: r, style: i } = this._element,
      o = r > document.documentElement.clientHeight;
    (!o && i.overflowY === "hidden") ||
      n.contains($r) ||
      (o || (i.overflowY = "hidden"),
      n.add($r),
      this._queueCallback(() => {
        n.remove($r),
          o ||
            this._queueCallback(() => {
              i.overflowY = "";
            }, this._dialog);
      }, this._dialog),
      this._element.focus());
  }
  _adjustDialog() {
    const t =
        this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._scrollBar.getWidth(),
      r = n > 0;
    ((!r && t && !de()) || (r && !t && de())) &&
      (this._element.style.paddingLeft = `${n}px`),
      ((r && !t && !de()) || (!r && t && de())) &&
        (this._element.style.paddingRight = `${n}px`);
  }
  _resetAdjustments() {
    (this._element.style.paddingLeft = ""),
      (this._element.style.paddingRight = "");
  }
  static jQueryInterface(t, n) {
    return this.each(function () {
      const r = mt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof r[t] > "u") throw new TypeError(`No method named "${t}"`);
        r[t](n);
      }
    });
  }
}
T.on(document, cp, hp, function (e) {
  const t = Ye(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
    T.one(t, ac, (i) => {
      i.defaultPrevented ||
        T.one(t, oc, () => {
          hn(this) && this.focus();
        });
    });
  const n = H.findOne(up);
  n && mt.getInstance(n).hide(), mt.getOrCreateInstance(t).toggle(this);
});
er(mt);
Ee(mt);
const no = "offcanvas",
  pp = "bs.offcanvas",
  wt = `.${pp}`,
  cc = ".data-api",
  _p = `load${wt}${cc}`,
  mp = "Escape",
  ro = { backdrop: !0, keyboard: !0, scroll: !1 },
  gp = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
  io = "show",
  vp = "offcanvas-backdrop",
  lc = ".offcanvas.show",
  yp = `show${wt}`,
  Ep = `shown${wt}`,
  bp = `hide${wt}`,
  uc = `hidden${wt}`,
  wp = `click${wt}${cc}`,
  Ap = `keydown.dismiss${wt}`,
  Tp = '[data-bs-toggle="offcanvas"]';
class gt extends xe {
  constructor(t, n) {
    super(t),
      (this._config = this._getConfig(n)),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners();
  }
  static get NAME() {
    return no;
  }
  static get Default() {
    return ro;
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (
      this._isShown ||
      T.trigger(this._element, yp, { relatedTarget: t }).defaultPrevented
    )
      return;
    (this._isShown = !0),
      (this._element.style.visibility = "visible"),
      this._backdrop.show(),
      this._config.scroll || new Ur().hide(),
      this._element.removeAttribute("aria-hidden"),
      this._element.setAttribute("aria-modal", !0),
      this._element.setAttribute("role", "dialog"),
      this._element.classList.add(io);
    const r = () => {
      this._config.scroll || this._focustrap.activate(),
        T.trigger(this._element, Ep, { relatedTarget: t });
    };
    this._queueCallback(r, this._element, !0);
  }
  hide() {
    if (!this._isShown || T.trigger(this._element, bp).defaultPrevented) return;
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.remove(io),
      this._backdrop.hide();
    const n = () => {
      this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._element.style.visibility = "hidden"),
        this._config.scroll || new Ur().reset(),
        T.trigger(this._element, uc);
    };
    this._queueCallback(n, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  _getConfig(t) {
    return (
      (t = {
        ...ro,
        ...ie.getDataAttributes(this._element),
        ...(typeof t == "object" ? t : {}),
      }),
      ke(no, t, gp),
      t
    );
  }
  _initializeBackDrop() {
    return new ic({
      className: vp,
      isVisible: this._config.backdrop,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide(),
    });
  }
  _initializeFocusTrap() {
    return new sc({ trapElement: this._element });
  }
  _addEventListeners() {
    T.on(this._element, Ap, (t) => {
      this._config.keyboard && t.key === mp && this.hide();
    });
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = gt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (n[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
T.on(document, wp, Tp, function (e) {
  const t = Ye(this);
  if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), ct(this)))
    return;
  T.one(t, uc, () => {
    hn(this) && this.focus();
  });
  const n = H.findOne(lc);
  n && n !== t && gt.getInstance(n).hide(),
    gt.getOrCreateInstance(t).toggle(this);
});
T.on(window, _p, () =>
  H.find(lc).forEach((e) => gt.getOrCreateInstance(e).show())
);
er(gt);
Ee(gt);
const Sp = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ]),
  Op = /^aria-[\w-]*$/i,
  xp = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
  $p =
    /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
  Cp = (e, t) => {
    const n = e.nodeName.toLowerCase();
    if (t.includes(n))
      return Sp.has(n)
        ? Boolean(xp.test(e.nodeValue) || $p.test(e.nodeValue))
        : !0;
    const r = t.filter((i) => i instanceof RegExp);
    for (let i = 0, o = r.length; i < o; i++) if (r[i].test(n)) return !0;
    return !1;
  },
  Dp = {
    "*": ["class", "dir", "id", "lang", "role", Op],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: [],
  };
function so(e, t, n) {
  if (!e.length) return e;
  if (n && typeof n == "function") return n(e);
  const i = new window.DOMParser().parseFromString(e, "text/html"),
    o = [].concat(...i.body.querySelectorAll("*"));
  for (let a = 0, l = o.length; a < l; a++) {
    const f = o[a],
      d = f.nodeName.toLowerCase();
    if (!Object.keys(t).includes(d)) {
      f.remove();
      continue;
    }
    const g = [].concat(...f.attributes),
      s = [].concat(t["*"] || [], t[d] || []);
    g.forEach((c) => {
      Cp(c, s) || f.removeAttribute(c.nodeName);
    });
  }
  return i.body.innerHTML;
}
const oo = "tooltip",
  Np = "bs.tooltip",
  $e = `.${Np}`,
  Lp = "bs-tooltip",
  Mp = new Set(["sanitize", "allowList", "sanitizeFn"]),
  Ip = {
    animation: "boolean",
    template: "string",
    title: "(string|element|function)",
    trigger: "string",
    delay: "(number|object)",
    html: "boolean",
    selector: "(string|boolean)",
    placement: "(string|function)",
    offset: "(array|string|function)",
    container: "(string|element|boolean)",
    fallbackPlacements: "array",
    boundary: "(string|element)",
    customClass: "(string|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    allowList: "object",
    popperConfig: "(null|object|function)",
  },
  Pp = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: de() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: de() ? "right" : "left",
  },
  kp = {
    animation: !0,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    selector: !1,
    placement: "top",
    offset: [0, 0],
    container: !1,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    boundary: "clippingParents",
    customClass: "",
    sanitize: !0,
    sanitizeFn: null,
    allowList: Dp,
    popperConfig: null,
  },
  Rp = {
    HIDE: `hide${$e}`,
    HIDDEN: `hidden${$e}`,
    SHOW: `show${$e}`,
    SHOWN: `shown${$e}`,
    INSERTED: `inserted${$e}`,
    CLICK: `click${$e}`,
    FOCUSIN: `focusin${$e}`,
    FOCUSOUT: `focusout${$e}`,
    MOUSEENTER: `mouseenter${$e}`,
    MOUSELEAVE: `mouseleave${$e}`,
  },
  On = "fade",
  Hp = "modal",
  Yt = "show",
  Kt = "show",
  Cr = "out",
  ao = ".tooltip-inner",
  co = `.${Hp}`,
  lo = "hide.bs.modal",
  Gt = "hover",
  Dr = "focus",
  Bp = "click",
  Vp = "manual";
class At extends xe {
  constructor(t, n) {
    if (typeof Ba > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._hoverState = ""),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._config = this._getConfig(n)),
      (this.tip = null),
      this._setListeners();
  }
  static get Default() {
    return kp;
  }
  static get NAME() {
    return oo;
  }
  static get Event() {
    return Rp;
  }
  static get DefaultType() {
    return Ip;
  }
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle(t) {
    if (!!this._isEnabled)
      if (t) {
        const n = this._initializeOnDelegatedTarget(t);
        (n._activeTrigger.click = !n._activeTrigger.click),
          n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (this.getTipElement().classList.contains(Yt)) {
          this._leave(null, this);
          return;
        }
        this._enter(null, this);
      }
  }
  dispose() {
    clearTimeout(this._timeout),
      T.off(this._element.closest(co), lo, this._hideModalHandler),
      this.tip && this.tip.remove(),
      this._disposePopper(),
      super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this.isWithContent() && this._isEnabled)) return;
    const t = T.trigger(this._element, this.constructor.Event.SHOW),
      n = Fa(this._element),
      r =
        n === null
          ? this._element.ownerDocument.documentElement.contains(this._element)
          : n.contains(this._element);
    if (t.defaultPrevented || !r) return;
    this.constructor.NAME === "tooltip" &&
      this.tip &&
      this.getTitle() !== this.tip.querySelector(ao).innerHTML &&
      (this._disposePopper(), this.tip.remove(), (this.tip = null));
    const i = this.getTipElement(),
      o = id(this.constructor.NAME);
    i.setAttribute("id", o),
      this._element.setAttribute("aria-describedby", o),
      this._config.animation && i.classList.add(On);
    const a =
        typeof this._config.placement == "function"
          ? this._config.placement.call(this, i, this._element)
          : this._config.placement,
      l = this._getAttachment(a);
    this._addAttachmentClass(l);
    const { container: f } = this._config;
    nn.set(i, this.constructor.DATA_KEY, this),
      this._element.ownerDocument.documentElement.contains(this.tip) ||
        (f.append(i),
        T.trigger(this._element, this.constructor.Event.INSERTED)),
      this._popper
        ? this._popper.update()
        : (this._popper = Pi(this._element, i, this._getPopperConfig(l))),
      i.classList.add(Yt);
    const d = this._resolvePossibleFunction(this._config.customClass);
    d && i.classList.add(...d.split(" ")),
      "ontouchstart" in document.documentElement &&
        [].concat(...document.body.children).forEach((c) => {
          T.on(c, "mouseover", Hn);
        });
    const g = () => {
        const c = this._hoverState;
        (this._hoverState = null),
          T.trigger(this._element, this.constructor.Event.SHOWN),
          c === Cr && this._leave(null, this);
      },
      s = this.tip.classList.contains(On);
    this._queueCallback(g, this.tip, s);
  }
  hide() {
    if (!this._popper) return;
    const t = this.getTipElement(),
      n = () => {
        this._isWithActiveTrigger() ||
          (this._hoverState !== Kt && t.remove(),
          this._cleanTipClass(),
          this._element.removeAttribute("aria-describedby"),
          T.trigger(this._element, this.constructor.Event.HIDDEN),
          this._disposePopper());
      };
    if (T.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
      return;
    t.classList.remove(Yt),
      "ontouchstart" in document.documentElement &&
        []
          .concat(...document.body.children)
          .forEach((o) => T.off(o, "mouseover", Hn)),
      (this._activeTrigger[Bp] = !1),
      (this._activeTrigger[Dr] = !1),
      (this._activeTrigger[Gt] = !1);
    const i = this.tip.classList.contains(On);
    this._queueCallback(n, this.tip, i), (this._hoverState = "");
  }
  update() {
    this._popper !== null && this._popper.update();
  }
  isWithContent() {
    return Boolean(this.getTitle());
  }
  getTipElement() {
    if (this.tip) return this.tip;
    const t = document.createElement("div");
    t.innerHTML = this._config.template;
    const n = t.children[0];
    return (
      this.setContent(n), n.classList.remove(On, Yt), (this.tip = n), this.tip
    );
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), ao);
  }
  _sanitizeAndSetContent(t, n, r) {
    const i = H.findOne(r, t);
    if (!n && i) {
      i.remove();
      return;
    }
    this.setElementContent(i, n);
  }
  setElementContent(t, n) {
    if (t !== null) {
      if (_t(n)) {
        (n = Ke(n)),
          this._config.html
            ? n.parentNode !== t && ((t.innerHTML = ""), t.append(n))
            : (t.textContent = n.textContent);
        return;
      }
      this._config.html
        ? (this._config.sanitize &&
            (n = so(n, this._config.allowList, this._config.sanitizeFn)),
          (t.innerHTML = n))
        : (t.textContent = n);
    }
  }
  getTitle() {
    const t =
      this._element.getAttribute("data-bs-original-title") ||
      this._config.title;
    return this._resolvePossibleFunction(t);
  }
  updateAttachment(t) {
    return t === "right" ? "end" : t === "left" ? "start" : t;
  }
  _initializeOnDelegatedTarget(t, n) {
    return (
      n ||
      this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      )
    );
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string"
      ? t.split(",").map((n) => Number.parseInt(n, 10))
      : typeof t == "function"
      ? (n) => t(n, this._element)
      : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t.call(this._element) : t;
  }
  _getPopperConfig(t) {
    const n = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: { fallbackPlacements: this._config.fallbackPlacements },
        },
        { name: "offset", options: { offset: this._getOffset() } },
        {
          name: "preventOverflow",
          options: { boundary: this._config.boundary },
        },
        {
          name: "arrow",
          options: { element: `.${this.constructor.NAME}-arrow` },
        },
        {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: (r) => this._handlePopperPlacementChange(r),
        },
      ],
      onFirstUpdate: (r) => {
        r.options.placement !== r.placement &&
          this._handlePopperPlacementChange(r);
      },
    };
    return {
      ...n,
      ...(typeof this._config.popperConfig == "function"
        ? this._config.popperConfig(n)
        : this._config.popperConfig),
    };
  }
  _addAttachmentClass(t) {
    this.getTipElement().classList.add(
      `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
    );
  }
  _getAttachment(t) {
    return Pp[t.toUpperCase()];
  }
  _setListeners() {
    this._config.trigger.split(" ").forEach((n) => {
      if (n === "click")
        T.on(
          this._element,
          this.constructor.Event.CLICK,
          this._config.selector,
          (r) => this.toggle(r)
        );
      else if (n !== Vp) {
        const r =
            n === Gt
              ? this.constructor.Event.MOUSEENTER
              : this.constructor.Event.FOCUSIN,
          i =
            n === Gt
              ? this.constructor.Event.MOUSELEAVE
              : this.constructor.Event.FOCUSOUT;
        T.on(this._element, r, this._config.selector, (o) => this._enter(o)),
          T.on(this._element, i, this._config.selector, (o) => this._leave(o));
      }
    }),
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
      T.on(this._element.closest(co), lo, this._hideModalHandler),
      this._config.selector
        ? (this._config = { ...this._config, trigger: "manual", selector: "" })
        : this._fixTitle();
  }
  _fixTitle() {
    const t = this._element.getAttribute("title"),
      n = typeof this._element.getAttribute("data-bs-original-title");
    (t || n !== "string") &&
      (this._element.setAttribute("data-bs-original-title", t || ""),
      t &&
        !this._element.getAttribute("aria-label") &&
        !this._element.textContent &&
        this._element.setAttribute("aria-label", t),
      this._element.setAttribute("title", ""));
  }
  _enter(t, n) {
    if (
      ((n = this._initializeOnDelegatedTarget(t, n)),
      t && (n._activeTrigger[t.type === "focusin" ? Dr : Gt] = !0),
      n.getTipElement().classList.contains(Yt) || n._hoverState === Kt)
    ) {
      n._hoverState = Kt;
      return;
    }
    if (
      (clearTimeout(n._timeout),
      (n._hoverState = Kt),
      !n._config.delay || !n._config.delay.show)
    ) {
      n.show();
      return;
    }
    n._timeout = setTimeout(() => {
      n._hoverState === Kt && n.show();
    }, n._config.delay.show);
  }
  _leave(t, n) {
    if (
      ((n = this._initializeOnDelegatedTarget(t, n)),
      t &&
        (n._activeTrigger[t.type === "focusout" ? Dr : Gt] =
          n._element.contains(t.relatedTarget)),
      !n._isWithActiveTrigger())
    ) {
      if (
        (clearTimeout(n._timeout),
        (n._hoverState = Cr),
        !n._config.delay || !n._config.delay.hide)
      ) {
        n.hide();
        return;
      }
      n._timeout = setTimeout(() => {
        n._hoverState === Cr && n.hide();
      }, n._config.delay.hide);
    }
  }
  _isWithActiveTrigger() {
    for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
    return !1;
  }
  _getConfig(t) {
    const n = ie.getDataAttributes(this._element);
    return (
      Object.keys(n).forEach((r) => {
        Mp.has(r) && delete n[r];
      }),
      (t = {
        ...this.constructor.Default,
        ...n,
        ...(typeof t == "object" && t ? t : {}),
      }),
      (t.container = t.container === !1 ? document.body : Ke(t.container)),
      typeof t.delay == "number" &&
        (t.delay = { show: t.delay, hide: t.delay }),
      typeof t.title == "number" && (t.title = t.title.toString()),
      typeof t.content == "number" && (t.content = t.content.toString()),
      ke(oo, t, this.constructor.DefaultType),
      t.sanitize && (t.template = so(t.template, t.allowList, t.sanitizeFn)),
      t
    );
  }
  _getDelegateConfig() {
    const t = {};
    for (const n in this._config)
      this.constructor.Default[n] !== this._config[n] &&
        (t[n] = this._config[n]);
    return t;
  }
  _cleanTipClass() {
    const t = this.getTipElement(),
      n = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
      r = t.getAttribute("class").match(n);
    r !== null &&
      r.length > 0 &&
      r.map((i) => i.trim()).forEach((i) => t.classList.remove(i));
  }
  _getBasicClassPrefix() {
    return Lp;
  }
  _handlePopperPlacementChange(t) {
    const { state: n } = t;
    !n ||
      ((this.tip = n.elements.popper),
      this._cleanTipClass(),
      this._addAttachmentClass(this._getAttachment(n.placement)));
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null));
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = At.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ee(At);
const jp = "popover",
  Fp = "bs.popover",
  Ce = `.${Fp}`,
  Wp = "bs-popover",
  Up = {
    ...At.Default,
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  },
  Yp = { ...At.DefaultType, content: "(string|element|function)" },
  Kp = {
    HIDE: `hide${Ce}`,
    HIDDEN: `hidden${Ce}`,
    SHOW: `show${Ce}`,
    SHOWN: `shown${Ce}`,
    INSERTED: `inserted${Ce}`,
    CLICK: `click${Ce}`,
    FOCUSIN: `focusin${Ce}`,
    FOCUSOUT: `focusout${Ce}`,
    MOUSEENTER: `mouseenter${Ce}`,
    MOUSELEAVE: `mouseleave${Ce}`,
  },
  Gp = ".popover-header",
  qp = ".popover-body";
class Hi extends At {
  static get Default() {
    return Up;
  }
  static get NAME() {
    return jp;
  }
  static get Event() {
    return Kp;
  }
  static get DefaultType() {
    return Yp;
  }
  isWithContent() {
    return this.getTitle() || this._getContent();
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), Gp),
      this._sanitizeAndSetContent(t, this._getContent(), qp);
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  _getBasicClassPrefix() {
    return Wp;
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = Hi.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
Ee(Hi);
const uo = "scrollspy",
  zp = "bs.scrollspy",
  nr = `.${zp}`,
  Xp = ".data-api",
  fo = { offset: 10, method: "auto", target: "" },
  Qp = { offset: "number", method: "string", target: "(string|element)" },
  Jp = `activate${nr}`,
  Zp = `scroll${nr}`,
  e_ = `load${nr}${Xp}`,
  fc = "dropdown-item",
  St = "active",
  t_ = '[data-bs-spy="scroll"]',
  n_ = ".nav, .list-group",
  Yr = ".nav-link",
  r_ = ".nav-item",
  dc = ".list-group-item",
  Nr = `${Yr}, ${dc}, .${fc}`,
  i_ = ".dropdown",
  s_ = ".dropdown-toggle",
  o_ = "offset",
  ho = "position";
class rr extends xe {
  constructor(t, n) {
    super(t),
      (this._scrollElement =
        this._element.tagName === "BODY" ? window : this._element),
      (this._config = this._getConfig(n)),
      (this._offsets = []),
      (this._targets = []),
      (this._activeTarget = null),
      (this._scrollHeight = 0),
      T.on(this._scrollElement, Zp, () => this._process()),
      this.refresh(),
      this._process();
  }
  static get Default() {
    return fo;
  }
  static get NAME() {
    return uo;
  }
  refresh() {
    const t = this._scrollElement === this._scrollElement.window ? o_ : ho,
      n = this._config.method === "auto" ? t : this._config.method,
      r = n === ho ? this._getScrollTop() : 0;
    (this._offsets = []),
      (this._targets = []),
      (this._scrollHeight = this._getScrollHeight()),
      H.find(Nr, this._config.target)
        .map((o) => {
          const a = ki(o),
            l = a ? H.findOne(a) : null;
          if (l) {
            const f = l.getBoundingClientRect();
            if (f.width || f.height) return [ie[n](l).top + r, a];
          }
          return null;
        })
        .filter((o) => o)
        .sort((o, a) => o[0] - a[0])
        .forEach((o) => {
          this._offsets.push(o[0]), this._targets.push(o[1]);
        });
  }
  dispose() {
    T.off(this._scrollElement, nr), super.dispose();
  }
  _getConfig(t) {
    return (
      (t = {
        ...fo,
        ...ie.getDataAttributes(this._element),
        ...(typeof t == "object" && t ? t : {}),
      }),
      (t.target = Ke(t.target) || document.documentElement),
      ke(uo, t, Qp),
      t
    );
  }
  _getScrollTop() {
    return this._scrollElement === window
      ? this._scrollElement.pageYOffset
      : this._scrollElement.scrollTop;
  }
  _getScrollHeight() {
    return (
      this._scrollElement.scrollHeight ||
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
    );
  }
  _getOffsetHeight() {
    return this._scrollElement === window
      ? window.innerHeight
      : this._scrollElement.getBoundingClientRect().height;
  }
  _process() {
    const t = this._getScrollTop() + this._config.offset,
      n = this._getScrollHeight(),
      r = this._config.offset + n - this._getOffsetHeight();
    if ((this._scrollHeight !== n && this.refresh(), t >= r)) {
      const i = this._targets[this._targets.length - 1];
      this._activeTarget !== i && this._activate(i);
      return;
    }
    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
      (this._activeTarget = null), this._clear();
      return;
    }
    for (let i = this._offsets.length; i--; )
      this._activeTarget !== this._targets[i] &&
        t >= this._offsets[i] &&
        (typeof this._offsets[i + 1] > "u" || t < this._offsets[i + 1]) &&
        this._activate(this._targets[i]);
  }
  _activate(t) {
    (this._activeTarget = t), this._clear();
    const n = Nr.split(",").map(
        (i) => `${i}[data-bs-target="${t}"],${i}[href="${t}"]`
      ),
      r = H.findOne(n.join(","), this._config.target);
    r.classList.add(St),
      r.classList.contains(fc)
        ? H.findOne(s_, r.closest(i_)).classList.add(St)
        : H.parents(r, n_).forEach((i) => {
            H.prev(i, `${Yr}, ${dc}`).forEach((o) => o.classList.add(St)),
              H.prev(i, r_).forEach((o) => {
                H.children(o, Yr).forEach((a) => a.classList.add(St));
              });
          }),
      T.trigger(this._scrollElement, Jp, { relatedTarget: t });
  }
  _clear() {
    H.find(Nr, this._config.target)
      .filter((t) => t.classList.contains(St))
      .forEach((t) => t.classList.remove(St));
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = rr.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
T.on(window, e_, () => {
  H.find(t_).forEach((e) => new rr(e));
});
Ee(rr);
const a_ = "tab",
  c_ = "bs.tab",
  mn = `.${c_}`,
  l_ = ".data-api",
  u_ = `hide${mn}`,
  f_ = `hidden${mn}`,
  d_ = `show${mn}`,
  h_ = `shown${mn}`,
  p_ = `click${mn}${l_}`,
  __ = "dropdown-menu",
  qt = "active",
  po = "fade",
  _o = "show",
  m_ = ".dropdown",
  g_ = ".nav, .list-group",
  mo = ".active",
  go = ":scope > li > .active",
  v_ =
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  y_ = ".dropdown-toggle",
  E_ = ":scope > .dropdown-menu .active";
class ir extends xe {
  static get NAME() {
    return a_;
  }
  show() {
    if (
      this._element.parentNode &&
      this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
      this._element.classList.contains(qt)
    )
      return;
    let t;
    const n = Ye(this._element),
      r = this._element.closest(g_);
    if (r) {
      const l = r.nodeName === "UL" || r.nodeName === "OL" ? go : mo;
      (t = H.find(l, r)), (t = t[t.length - 1]);
    }
    const i = t ? T.trigger(t, u_, { relatedTarget: this._element }) : null;
    if (
      T.trigger(this._element, d_, { relatedTarget: t }).defaultPrevented ||
      (i !== null && i.defaultPrevented)
    )
      return;
    this._activate(this._element, r);
    const a = () => {
      T.trigger(t, f_, { relatedTarget: this._element }),
        T.trigger(this._element, h_, { relatedTarget: t });
    };
    n ? this._activate(n, n.parentNode, a) : a();
  }
  _activate(t, n, r) {
    const o = (
        n && (n.nodeName === "UL" || n.nodeName === "OL")
          ? H.find(go, n)
          : H.children(n, mo)
      )[0],
      a = r && o && o.classList.contains(po),
      l = () => this._transitionComplete(t, o, r);
    o && a ? (o.classList.remove(_o), this._queueCallback(l, t, !0)) : l();
  }
  _transitionComplete(t, n, r) {
    if (n) {
      n.classList.remove(qt);
      const o = H.findOne(E_, n.parentNode);
      o && o.classList.remove(qt),
        n.getAttribute("role") === "tab" && n.setAttribute("aria-selected", !1);
    }
    t.classList.add(qt),
      t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", !0),
      Ft(t),
      t.classList.contains(po) && t.classList.add(_o);
    let i = t.parentNode;
    if (
      (i && i.nodeName === "LI" && (i = i.parentNode),
      i && i.classList.contains(__))
    ) {
      const o = t.closest(m_);
      o && H.find(y_, o).forEach((a) => a.classList.add(qt)),
        t.setAttribute("aria-expanded", !0);
    }
    r && r();
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = ir.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
T.on(document, p_, v_, function (e) {
  if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), ct(this)))
    return;
  ir.getOrCreateInstance(this).show();
});
Ee(ir);
const vo = "toast",
  b_ = "bs.toast",
  Je = `.${b_}`,
  w_ = `mouseover${Je}`,
  A_ = `mouseout${Je}`,
  T_ = `focusin${Je}`,
  S_ = `focusout${Je}`,
  O_ = `hide${Je}`,
  x_ = `hidden${Je}`,
  $_ = `show${Je}`,
  C_ = `shown${Je}`,
  D_ = "fade",
  yo = "hide",
  zt = "show",
  xn = "showing",
  N_ = { animation: "boolean", autohide: "boolean", delay: "number" },
  Eo = { animation: !0, autohide: !0, delay: 5e3 };
class gn extends xe {
  constructor(t, n) {
    super(t),
      (this._config = this._getConfig(n)),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners();
  }
  static get DefaultType() {
    return N_;
  }
  static get Default() {
    return Eo;
  }
  static get NAME() {
    return vo;
  }
  show() {
    if (T.trigger(this._element, $_).defaultPrevented) return;
    this._clearTimeout(),
      this._config.animation && this._element.classList.add(D_);
    const n = () => {
      this._element.classList.remove(xn),
        T.trigger(this._element, C_),
        this._maybeScheduleHide();
    };
    this._element.classList.remove(yo),
      Ft(this._element),
      this._element.classList.add(zt),
      this._element.classList.add(xn),
      this._queueCallback(n, this._element, this._config.animation);
  }
  hide() {
    if (
      !this._element.classList.contains(zt) ||
      T.trigger(this._element, O_).defaultPrevented
    )
      return;
    const n = () => {
      this._element.classList.add(yo),
        this._element.classList.remove(xn),
        this._element.classList.remove(zt),
        T.trigger(this._element, x_);
    };
    this._element.classList.add(xn),
      this._queueCallback(n, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(),
      this._element.classList.contains(zt) &&
        this._element.classList.remove(zt),
      super.dispose();
  }
  _getConfig(t) {
    return (
      (t = {
        ...Eo,
        ...ie.getDataAttributes(this._element),
        ...(typeof t == "object" && t ? t : {}),
      }),
      ke(vo, t, this.constructor.DefaultType),
      t
    );
  }
  _maybeScheduleHide() {
    !this._config.autohide ||
      this._hasMouseInteraction ||
      this._hasKeyboardInteraction ||
      (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay));
  }
  _onInteraction(t, n) {
    switch (t.type) {
      case "mouseover":
      case "mouseout":
        this._hasMouseInteraction = n;
        break;
      case "focusin":
      case "focusout":
        this._hasKeyboardInteraction = n;
        break;
    }
    if (n) {
      this._clearTimeout();
      return;
    }
    const r = t.relatedTarget;
    this._element === r ||
      this._element.contains(r) ||
      this._maybeScheduleHide();
  }
  _setListeners() {
    T.on(this._element, w_, (t) => this._onInteraction(t, !0)),
      T.on(this._element, A_, (t) => this._onInteraction(t, !1)),
      T.on(this._element, T_, (t) => this._onInteraction(t, !0)),
      T.on(this._element, S_, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null);
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const n = gn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] > "u") throw new TypeError(`No method named "${t}"`);
        n[t](this);
      }
    });
  }
}
er(gn);
Ee(gn);
const L_ = () => {
    [].slice.call(document.querySelectorAll(".alert")).map(function (t) {
      return new pn(t);
    });
  },
  M_ = () => {
    [].slice
      .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .map((t) => new At(t));
  },
  I_ = () => {
    [].slice
      .call(document.querySelectorAll(".collapse"))
      .map((t) => new lt(t, { toggle: !1 }));
  };
var Kr = !1,
  Gr = !1,
  ut = [];
function P_(e) {
  k_(e);
}
function k_(e) {
  ut.includes(e) || ut.push(e), R_();
}
function hc(e) {
  let t = ut.indexOf(e);
  t !== -1 && ut.splice(t, 1);
}
function R_() {
  !Gr && !Kr && ((Kr = !0), queueMicrotask(H_));
}
function H_() {
  (Kr = !1), (Gr = !0);
  for (let e = 0; e < ut.length; e++) ut[e]();
  (ut.length = 0), (Gr = !1);
}
var Wt,
  vn,
  sr,
  pc,
  qr = !0;
function B_(e) {
  (qr = !1), e(), (qr = !0);
}
function V_(e) {
  (Wt = e.reactive),
    (sr = e.release),
    (vn = (t) =>
      e.effect(t, {
        scheduler: (n) => {
          qr ? P_(n) : n();
        },
      })),
    (pc = e.raw);
}
function bo(e) {
  vn = e;
}
function j_(e) {
  let t = () => {};
  return [
    (r) => {
      let i = vn(r);
      return (
        e._x_effects ||
          ((e._x_effects = new Set()),
          (e._x_runEffects = () => {
            e._x_effects.forEach((o) => o());
          })),
        e._x_effects.add(i),
        (t = () => {
          i !== void 0 && (e._x_effects.delete(i), sr(i));
        }),
        i
      );
    },
    () => {
      t();
    },
  ];
}
var _c = [],
  mc = [],
  gc = [];
function F_(e) {
  gc.push(e);
}
function vc(e, t) {
  typeof t == "function"
    ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
    : ((t = e), mc.push(t));
}
function W_(e) {
  _c.push(e);
}
function U_(e, t, n) {
  e._x_attributeCleanups || (e._x_attributeCleanups = {}),
    e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
    e._x_attributeCleanups[t].push(n);
}
function yc(e, t) {
  !e._x_attributeCleanups ||
    Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
      (t === void 0 || t.includes(n)) &&
        (r.forEach((i) => i()), delete e._x_attributeCleanups[n]);
    });
}
var Bi = new MutationObserver(Fi),
  Vi = !1;
function Ec() {
  Bi.observe(document, {
    subtree: !0,
    childList: !0,
    attributes: !0,
    attributeOldValue: !0,
  }),
    (Vi = !0);
}
function Y_() {
  K_(), Bi.disconnect(), (Vi = !1);
}
var sn = [],
  Lr = !1;
function K_() {
  (sn = sn.concat(Bi.takeRecords())),
    sn.length &&
      !Lr &&
      ((Lr = !0),
      queueMicrotask(() => {
        G_(), (Lr = !1);
      }));
}
function G_() {
  Fi(sn), (sn.length = 0);
}
function te(e) {
  if (!Vi) return e();
  Y_();
  let t = e();
  return Ec(), t;
}
var ji = !1,
  Vn = [];
function q_() {
  ji = !0;
}
function z_() {
  (ji = !1), Fi(Vn), (Vn = []);
}
function Fi(e) {
  if (ji) {
    Vn = Vn.concat(e);
    return;
  }
  let t = [],
    n = [],
    r = new Map(),
    i = new Map();
  for (let o = 0; o < e.length; o++)
    if (
      !e[o].target._x_ignoreMutationObserver &&
      (e[o].type === "childList" &&
        (e[o].addedNodes.forEach((a) => a.nodeType === 1 && t.push(a)),
        e[o].removedNodes.forEach((a) => a.nodeType === 1 && n.push(a))),
      e[o].type === "attributes")
    ) {
      let a = e[o].target,
        l = e[o].attributeName,
        f = e[o].oldValue,
        d = () => {
          r.has(a) || r.set(a, []),
            r.get(a).push({ name: l, value: a.getAttribute(l) });
        },
        g = () => {
          i.has(a) || i.set(a, []), i.get(a).push(l);
        };
      a.hasAttribute(l) && f === null
        ? d()
        : a.hasAttribute(l)
        ? (g(), d())
        : g();
    }
  i.forEach((o, a) => {
    yc(a, o);
  }),
    r.forEach((o, a) => {
      _c.forEach((l) => l(a, o));
    });
  for (let o of n)
    if (!t.includes(o) && (mc.forEach((a) => a(o)), o._x_cleanups))
      for (; o._x_cleanups.length; ) o._x_cleanups.pop()();
  t.forEach((o) => {
    (o._x_ignoreSelf = !0), (o._x_ignore = !0);
  });
  for (let o of t)
    n.includes(o) ||
      !o.isConnected ||
      (delete o._x_ignoreSelf,
      delete o._x_ignore,
      gc.forEach((a) => a(o)),
      (o._x_ignore = !0),
      (o._x_ignoreSelf = !0));
  t.forEach((o) => {
    delete o._x_ignoreSelf, delete o._x_ignore;
  }),
    (t = null),
    (n = null),
    (r = null),
    (i = null);
}
function bc(e) {
  return En(Ht(e));
}
function yn(e, t, n) {
  return (
    (e._x_dataStack = [t, ...Ht(n || e)]),
    () => {
      e._x_dataStack = e._x_dataStack.filter((r) => r !== t);
    }
  );
}
function wo(e, t) {
  let n = e._x_dataStack[0];
  Object.entries(t).forEach(([r, i]) => {
    n[r] = i;
  });
}
function Ht(e) {
  return e._x_dataStack
    ? e._x_dataStack
    : typeof ShadowRoot == "function" && e instanceof ShadowRoot
    ? Ht(e.host)
    : e.parentNode
    ? Ht(e.parentNode)
    : [];
}
function En(e) {
  let t = new Proxy(
    {},
    {
      ownKeys: () => Array.from(new Set(e.flatMap((n) => Object.keys(n)))),
      has: (n, r) => e.some((i) => i.hasOwnProperty(r)),
      get: (n, r) =>
        (e.find((i) => {
          if (i.hasOwnProperty(r)) {
            let o = Object.getOwnPropertyDescriptor(i, r);
            if (
              (o.get && o.get._x_alreadyBound) ||
              (o.set && o.set._x_alreadyBound)
            )
              return !0;
            if ((o.get || o.set) && o.enumerable) {
              let a = o.get,
                l = o.set,
                f = o;
              (a = a && a.bind(t)),
                (l = l && l.bind(t)),
                a && (a._x_alreadyBound = !0),
                l && (l._x_alreadyBound = !0),
                Object.defineProperty(i, r, { ...f, get: a, set: l });
            }
            return !0;
          }
          return !1;
        }) || {})[r],
      set: (n, r, i) => {
        let o = e.find((a) => a.hasOwnProperty(r));
        return o ? (o[r] = i) : (e[e.length - 1][r] = i), !0;
      },
    }
  );
  return t;
}
function wc(e) {
  let t = (r) => typeof r == "object" && !Array.isArray(r) && r !== null,
    n = (r, i = "") => {
      Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(
        ([o, { value: a, enumerable: l }]) => {
          if (l === !1 || a === void 0) return;
          let f = i === "" ? o : `${i}.${o}`;
          typeof a == "object" && a !== null && a._x_interceptor
            ? (r[o] = a.initialize(e, f, o))
            : t(a) && a !== r && !(a instanceof Element) && n(a, f);
        }
      );
    };
  return n(e);
}
function Ac(e, t = () => {}) {
  let n = {
    initialValue: void 0,
    _x_interceptor: !0,
    initialize(r, i, o) {
      return e(
        this.initialValue,
        () => X_(r, i),
        (a) => zr(r, i, a),
        i,
        o
      );
    },
  };
  return (
    t(n),
    (r) => {
      if (typeof r == "object" && r !== null && r._x_interceptor) {
        let i = n.initialize.bind(n);
        n.initialize = (o, a, l) => {
          let f = r.initialize(o, a, l);
          return (n.initialValue = f), i(o, a, l);
        };
      } else n.initialValue = r;
      return n;
    }
  );
}
function X_(e, t) {
  return t.split(".").reduce((n, r) => n[r], e);
}
function zr(e, t, n) {
  if ((typeof t == "string" && (t = t.split(".")), t.length === 1)) e[t[0]] = n;
  else {
    if (t.length === 0) throw error;
    return e[t[0]] || (e[t[0]] = {}), zr(e[t[0]], t.slice(1), n);
  }
}
var Tc = {};
function Re(e, t) {
  Tc[e] = t;
}
function Xr(e, t) {
  return (
    Object.entries(Tc).forEach(([n, r]) => {
      Object.defineProperty(e, `$${n}`, {
        get() {
          let [i, o] = Cc(t);
          return (i = { interceptor: Ac, ...i }), vc(t, o), r(t, i);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
function Q_(e, t, n, ...r) {
  try {
    return n(...r);
  } catch (i) {
    ln(i, e, t);
  }
}
function ln(e, t, n = void 0) {
  Object.assign(e, { el: t, expression: n }),
    console.warn(
      `Alpine Expression Error: ${e.message}

${
  n
    ? 'Expression: "' +
      n +
      `"

`
    : ""
}`,
      t
    ),
    setTimeout(() => {
      throw e;
    }, 0);
}
function Ct(e, t, n = {}) {
  let r;
  return ue(e, t)((i) => (r = i), n), r;
}
function ue(...e) {
  return Sc(...e);
}
var Sc = Oc;
function J_(e) {
  Sc = e;
}
function Oc(e, t) {
  let n = {};
  Xr(n, e);
  let r = [n, ...Ht(e)];
  if (typeof t == "function") return Z_(r, t);
  let i = tm(r, t, e);
  return Q_.bind(null, e, t, i);
}
function Z_(e, t) {
  return (n = () => {}, { scope: r = {}, params: i = [] } = {}) => {
    let o = t.apply(En([r, ...e]), i);
    jn(n, o);
  };
}
var Mr = {};
function em(e, t) {
  if (Mr[e]) return Mr[e];
  let n = Object.getPrototypeOf(async function () {}).constructor,
    r =
      /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)\s/.test(e)
        ? `(() => { ${e} })()`
        : e,
    o = (() => {
      try {
        return new n(
          ["__self", "scope"],
          `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`
        );
      } catch (a) {
        return ln(a, t, e), Promise.resolve();
      }
    })();
  return (Mr[e] = o), o;
}
function tm(e, t, n) {
  let r = em(t, n);
  return (i = () => {}, { scope: o = {}, params: a = [] } = {}) => {
    (r.result = void 0), (r.finished = !1);
    let l = En([o, ...e]);
    if (typeof r == "function") {
      let f = r(r, l).catch((d) => ln(d, n, t));
      r.finished
        ? (jn(i, r.result, l, a, n), (r.result = void 0))
        : f
            .then((d) => {
              jn(i, d, l, a, n);
            })
            .catch((d) => ln(d, n, t))
            .finally(() => (r.result = void 0));
    }
  };
}
function jn(e, t, n, r, i) {
  if (typeof t == "function") {
    let o = t.apply(n, r);
    o instanceof Promise
      ? o.then((a) => jn(e, a, n, r)).catch((a) => ln(a, i, t))
      : e(o);
  } else e(t);
}
var Wi = "x-";
function Ut(e = "") {
  return Wi + e;
}
function nm(e) {
  Wi = e;
}
var xc = {};
function ee(e, t) {
  xc[e] = t;
}
function Ui(e, t, n) {
  let r = {};
  return Array.from(t)
    .map(Lc((o, a) => (r[o] = a)))
    .filter(Ic)
    .map(om(r, n))
    .sort(am)
    .map((o) => sm(e, o));
}
function rm(e) {
  return Array.from(e)
    .map(Lc())
    .filter((t) => !Ic(t));
}
var Qr = !1,
  Zt = new Map(),
  $c = Symbol();
function im(e) {
  Qr = !0;
  let t = Symbol();
  ($c = t), Zt.set(t, []);
  let n = () => {
      for (; Zt.get(t).length; ) Zt.get(t).shift()();
      Zt.delete(t);
    },
    r = () => {
      (Qr = !1), n();
    };
  e(n), r();
}
function Cc(e) {
  let t = [],
    n = (l) => t.push(l),
    [r, i] = j_(e);
  return (
    t.push(i),
    [
      {
        Alpine: bn,
        effect: r,
        cleanup: n,
        evaluateLater: ue.bind(ue, e),
        evaluate: Ct.bind(Ct, e),
      },
      () => t.forEach((l) => l()),
    ]
  );
}
function sm(e, t) {
  let n = () => {},
    r = xc[t.type] || n,
    [i, o] = Cc(e);
  U_(e, t.original, o);
  let a = () => {
    e._x_ignore ||
      e._x_ignoreSelf ||
      (r.inline && r.inline(e, t, i),
      (r = r.bind(r, e, t, i)),
      Qr ? Zt.get($c).push(r) : r());
  };
  return (a.runCleanups = o), a;
}
var Dc =
    (e, t) =>
    ({ name: n, value: r }) => (
      n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: r }
    ),
  Nc = (e) => e;
function Lc(e = () => {}) {
  return ({ name: t, value: n }) => {
    let { name: r, value: i } = Mc.reduce((o, a) => a(o), {
      name: t,
      value: n,
    });
    return r !== t && e(r, t), { name: r, value: i };
  };
}
var Mc = [];
function Yi(e) {
  Mc.push(e);
}
function Ic({ name: e }) {
  return Pc().test(e);
}
var Pc = () => new RegExp(`^${Wi}([^:^.]+)\\b`);
function om(e, t) {
  return ({ name: n, value: r }) => {
    let i = n.match(Pc()),
      o = n.match(/:([a-zA-Z0-9\-:]+)/),
      a = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
      l = t || e[n] || n;
    return {
      type: i ? i[1] : null,
      value: o ? o[1] : null,
      modifiers: a.map((f) => f.replace(".", "")),
      expression: r,
      original: l,
    };
  };
}
var Jr = "DEFAULT",
  $n = [
    "ignore",
    "ref",
    "data",
    "id",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    Jr,
    "teleport",
    "element",
  ];
function am(e, t) {
  let n = $n.indexOf(e.type) === -1 ? Jr : e.type,
    r = $n.indexOf(t.type) === -1 ? Jr : t.type;
  return $n.indexOf(n) - $n.indexOf(r);
}
function on(e, t, n = {}) {
  e.dispatchEvent(
    new CustomEvent(t, { detail: n, bubbles: !0, composed: !0, cancelable: !0 })
  );
}
var Zr = [],
  Ki = !1;
function kc(e) {
  Zr.push(e),
    queueMicrotask(() => {
      Ki ||
        setTimeout(() => {
          ei();
        });
    });
}
function ei() {
  for (Ki = !1; Zr.length; ) Zr.shift()();
}
function cm() {
  Ki = !0;
}
function vt(e, t) {
  if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
    Array.from(e.children).forEach((i) => vt(i, t));
    return;
  }
  let n = !1;
  if ((t(e, () => (n = !0)), n)) return;
  let r = e.firstElementChild;
  for (; r; ) vt(r, t), (r = r.nextElementSibling);
}
function Fn(e, ...t) {
  console.warn(`Alpine Warning: ${e}`, ...t);
}
function lm() {
  document.body ||
    Fn(
      "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
    ),
    on(document, "alpine:init"),
    on(document, "alpine:initializing"),
    Ec(),
    F_((t) => Ge(t, vt)),
    vc((t) => fm(t)),
    W_((t, n) => {
      Ui(t, n).forEach((r) => r());
    });
  let e = (t) => !or(t.parentElement, !0);
  Array.from(document.querySelectorAll(Bc()))
    .filter(e)
    .forEach((t) => {
      Ge(t);
    }),
    on(document, "alpine:initialized");
}
var Gi = [],
  Rc = [];
function Hc() {
  return Gi.map((e) => e());
}
function Bc() {
  return Gi.concat(Rc).map((e) => e());
}
function Vc(e) {
  Gi.push(e);
}
function jc(e) {
  Rc.push(e);
}
function or(e, t = !1) {
  return ar(e, (n) => {
    if ((t ? Bc() : Hc()).some((i) => n.matches(i))) return !0;
  });
}
function ar(e, t) {
  if (!!e) {
    if (t(e)) return e;
    if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
      return ar(e.parentElement, t);
  }
}
function um(e) {
  return Hc().some((t) => e.matches(t));
}
function Ge(e, t = vt) {
  im(() => {
    t(e, (n, r) => {
      Ui(n, n.attributes).forEach((i) => i()), n._x_ignore && r();
    });
  });
}
function fm(e) {
  vt(e, (t) => yc(t));
}
function qi(e, t) {
  return Array.isArray(t)
    ? Ao(e, t.join(" "))
    : typeof t == "object" && t !== null
    ? dm(e, t)
    : typeof t == "function"
    ? qi(e, t())
    : Ao(e, t);
}
function Ao(e, t) {
  let n = (i) =>
      i
        .split(" ")
        .filter((o) => !e.classList.contains(o))
        .filter(Boolean),
    r = (i) => (
      e.classList.add(...i),
      () => {
        e.classList.remove(...i);
      }
    );
  return (t = t === !0 ? (t = "") : t || ""), r(n(t));
}
function dm(e, t) {
  let n = (l) => l.split(" ").filter(Boolean),
    r = Object.entries(t)
      .flatMap(([l, f]) => (f ? n(l) : !1))
      .filter(Boolean),
    i = Object.entries(t)
      .flatMap(([l, f]) => (f ? !1 : n(l)))
      .filter(Boolean),
    o = [],
    a = [];
  return (
    i.forEach((l) => {
      e.classList.contains(l) && (e.classList.remove(l), a.push(l));
    }),
    r.forEach((l) => {
      e.classList.contains(l) || (e.classList.add(l), o.push(l));
    }),
    () => {
      a.forEach((l) => e.classList.add(l)),
        o.forEach((l) => e.classList.remove(l));
    }
  );
}
function cr(e, t) {
  return typeof t == "object" && t !== null ? hm(e, t) : pm(e, t);
}
function hm(e, t) {
  let n = {};
  return (
    Object.entries(t).forEach(([r, i]) => {
      (n[r] = e.style[r]),
        r.startsWith("--") || (r = _m(r)),
        e.style.setProperty(r, i);
    }),
    setTimeout(() => {
      e.style.length === 0 && e.removeAttribute("style");
    }),
    () => {
      cr(e, n);
    }
  );
}
function pm(e, t) {
  let n = e.getAttribute("style", t);
  return (
    e.setAttribute("style", t),
    () => {
      e.setAttribute("style", n || "");
    }
  );
}
function _m(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function ti(e, t = () => {}) {
  let n = !1;
  return function () {
    n ? t.apply(this, arguments) : ((n = !0), e.apply(this, arguments));
  };
}
ee(
  "transition",
  (e, { value: t, modifiers: n, expression: r }, { evaluate: i }) => {
    typeof r == "function" && (r = i(r)), r ? mm(e, r, t) : gm(e, n, t);
  }
);
function mm(e, t, n) {
  Fc(e, qi, ""),
    {
      enter: (i) => {
        e._x_transition.enter.during = i;
      },
      "enter-start": (i) => {
        e._x_transition.enter.start = i;
      },
      "enter-end": (i) => {
        e._x_transition.enter.end = i;
      },
      leave: (i) => {
        e._x_transition.leave.during = i;
      },
      "leave-start": (i) => {
        e._x_transition.leave.start = i;
      },
      "leave-end": (i) => {
        e._x_transition.leave.end = i;
      },
    }[n](t);
}
function gm(e, t, n) {
  Fc(e, cr);
  let r = !t.includes("in") && !t.includes("out") && !n,
    i = r || t.includes("in") || ["enter"].includes(n),
    o = r || t.includes("out") || ["leave"].includes(n);
  t.includes("in") && !r && (t = t.filter((m, b) => b < t.indexOf("out"))),
    t.includes("out") && !r && (t = t.filter((m, b) => b > t.indexOf("out")));
  let a = !t.includes("opacity") && !t.includes("scale"),
    l = a || t.includes("opacity"),
    f = a || t.includes("scale"),
    d = l ? 0 : 1,
    g = f ? Xt(t, "scale", 95) / 100 : 1,
    s = Xt(t, "delay", 0),
    c = Xt(t, "origin", "center"),
    u = "opacity, transform",
    h = Xt(t, "duration", 150) / 1e3,
    _ = Xt(t, "duration", 75) / 1e3,
    p = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  i &&
    ((e._x_transition.enter.during = {
      transformOrigin: c,
      transitionDelay: s,
      transitionProperty: u,
      transitionDuration: `${h}s`,
      transitionTimingFunction: p,
    }),
    (e._x_transition.enter.start = { opacity: d, transform: `scale(${g})` }),
    (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
    o &&
      ((e._x_transition.leave.during = {
        transformOrigin: c,
        transitionDelay: s,
        transitionProperty: u,
        transitionDuration: `${_}s`,
        transitionTimingFunction: p,
      }),
      (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
      (e._x_transition.leave.end = { opacity: d, transform: `scale(${g})` }));
}
function Fc(e, t, n = {}) {
  e._x_transition ||
    (e._x_transition = {
      enter: { during: n, start: n, end: n },
      leave: { during: n, start: n, end: n },
      in(r = () => {}, i = () => {}) {
        ni(
          e,
          t,
          {
            during: this.enter.during,
            start: this.enter.start,
            end: this.enter.end,
          },
          r,
          i
        );
      },
      out(r = () => {}, i = () => {}) {
        ni(
          e,
          t,
          {
            during: this.leave.during,
            start: this.leave.start,
            end: this.leave.end,
          },
          r,
          i
        );
      },
    });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
  e,
  t,
  n,
  r
) {
  let i = () => {
    document.visibilityState === "visible"
      ? requestAnimationFrame(n)
      : setTimeout(n);
  };
  if (t) {
    e._x_transition && (e._x_transition.enter || e._x_transition.leave)
      ? e._x_transition.enter &&
        (Object.entries(e._x_transition.enter.during).length ||
          Object.entries(e._x_transition.enter.start).length ||
          Object.entries(e._x_transition.enter.end).length)
        ? e._x_transition.in(n)
        : i()
      : e._x_transition
      ? e._x_transition.in(n)
      : i();
    return;
  }
  (e._x_hidePromise = e._x_transition
    ? new Promise((o, a) => {
        e._x_transition.out(
          () => {},
          () => o(r)
        ),
          e._x_transitioning.beforeCancel(() =>
            a({ isFromCancelledTransition: !0 })
          );
      })
    : Promise.resolve(r)),
    queueMicrotask(() => {
      let o = Wc(e);
      o
        ? (o._x_hideChildren || (o._x_hideChildren = []),
          o._x_hideChildren.push(e))
        : queueMicrotask(() => {
            let a = (l) => {
              let f = Promise.all([
                l._x_hidePromise,
                ...(l._x_hideChildren || []).map(a),
              ]).then(([d]) => d());
              return delete l._x_hidePromise, delete l._x_hideChildren, f;
            };
            a(e).catch((l) => {
              if (!l.isFromCancelledTransition) throw l;
            });
          });
    });
};
function Wc(e) {
  let t = e.parentNode;
  if (!!t) return t._x_hidePromise ? t : Wc(t);
}
function ni(
  e,
  t,
  { during: n, start: r, end: i } = {},
  o = () => {},
  a = () => {}
) {
  if (
    (e._x_transitioning && e._x_transitioning.cancel(),
    Object.keys(n).length === 0 &&
      Object.keys(r).length === 0 &&
      Object.keys(i).length === 0)
  ) {
    o(), a();
    return;
  }
  let l, f, d;
  vm(e, {
    start() {
      l = t(e, r);
    },
    during() {
      f = t(e, n);
    },
    before: o,
    end() {
      l(), (d = t(e, i));
    },
    after: a,
    cleanup() {
      f(), d();
    },
  });
}
function vm(e, t) {
  let n,
    r,
    i,
    o = ti(() => {
      te(() => {
        (n = !0),
          r || t.before(),
          i || (t.end(), ei()),
          t.after(),
          e.isConnected && t.cleanup(),
          delete e._x_transitioning;
      });
    });
  (e._x_transitioning = {
    beforeCancels: [],
    beforeCancel(a) {
      this.beforeCancels.push(a);
    },
    cancel: ti(function () {
      for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
      o();
    }),
    finish: o,
  }),
    te(() => {
      t.start(), t.during();
    }),
    cm(),
    requestAnimationFrame(() => {
      if (n) return;
      let a =
          Number(
            getComputedStyle(e)
              .transitionDuration.replace(/,.*/, "")
              .replace("s", "")
          ) * 1e3,
        l =
          Number(
            getComputedStyle(e)
              .transitionDelay.replace(/,.*/, "")
              .replace("s", "")
          ) * 1e3;
      a === 0 &&
        (a =
          Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3),
        te(() => {
          t.before();
        }),
        (r = !0),
        requestAnimationFrame(() => {
          n ||
            (te(() => {
              t.end();
            }),
            ei(),
            setTimeout(e._x_transitioning.finish, a + l),
            (i = !0));
        });
    });
}
function Xt(e, t, n) {
  if (e.indexOf(t) === -1) return n;
  const r = e[e.indexOf(t) + 1];
  if (!r || (t === "scale" && isNaN(r))) return n;
  if (t === "duration") {
    let i = r.match(/([0-9]+)ms/);
    if (i) return i[1];
  }
  return t === "origin" &&
    ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
    ? [r, e[e.indexOf(t) + 2]].join(" ")
    : r;
}
var ri = !1;
function lr(e, t = () => {}) {
  return (...n) => (ri ? t(...n) : e(...n));
}
function ym(e, t) {
  t._x_dataStack || (t._x_dataStack = e._x_dataStack),
    (ri = !0),
    bm(() => {
      Em(t);
    }),
    (ri = !1);
}
function Em(e) {
  let t = !1;
  Ge(e, (r, i) => {
    vt(r, (o, a) => {
      if (t && um(o)) return a();
      (t = !0), i(o, a);
    });
  });
}
function bm(e) {
  let t = vn;
  bo((n, r) => {
    let i = t(n);
    return sr(i), () => {};
  }),
    e(),
    bo(t);
}
function Uc(e, t, n, r = []) {
  switch (
    (e._x_bindings || (e._x_bindings = Wt({})),
    (e._x_bindings[t] = n),
    (t = r.includes("camel") ? $m(t) : t),
    t)
  ) {
    case "value":
      wm(e, n);
      break;
    case "style":
      Tm(e, n);
      break;
    case "class":
      Am(e, n);
      break;
    default:
      Sm(e, t, n);
      break;
  }
}
function wm(e, t) {
  if (e.type === "radio")
    e.attributes.value === void 0 && (e.value = t),
      window.fromModel && (e.checked = To(e.value, t));
  else if (e.type === "checkbox")
    Number.isInteger(t)
      ? (e.value = t)
      : !Number.isInteger(t) &&
        !Array.isArray(t) &&
        typeof t != "boolean" &&
        ![null, void 0].includes(t)
      ? (e.value = String(t))
      : Array.isArray(t)
      ? (e.checked = t.some((n) => To(n, e.value)))
      : (e.checked = !!t);
  else if (e.tagName === "SELECT") xm(e, t);
  else {
    if (e.value === t) return;
    e.value = t;
  }
}
function Am(e, t) {
  e._x_undoAddedClasses && e._x_undoAddedClasses(),
    (e._x_undoAddedClasses = qi(e, t));
}
function Tm(e, t) {
  e._x_undoAddedStyles && e._x_undoAddedStyles(),
    (e._x_undoAddedStyles = cr(e, t));
}
function Sm(e, t, n) {
  [null, void 0, !1].includes(n) && Cm(t)
    ? e.removeAttribute(t)
    : (Yc(t) && (n = t), Om(e, t, n));
}
function Om(e, t, n) {
  e.getAttribute(t) != n && e.setAttribute(t, n);
}
function xm(e, t) {
  const n = [].concat(t).map((r) => r + "");
  Array.from(e.options).forEach((r) => {
    r.selected = n.includes(r.value);
  });
}
function $m(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function To(e, t) {
  return e == t;
}
function Yc(e) {
  return [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule",
  ].includes(e);
}
function Cm(e) {
  return ![
    "aria-pressed",
    "aria-checked",
    "aria-expanded",
    "aria-selected",
  ].includes(e);
}
function Dm(e, t, n) {
  if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
  let r = e.getAttribute(t);
  return r === null
    ? typeof n == "function"
      ? n()
      : n
    : Yc(t)
    ? !![t, "true"].includes(r)
    : r === ""
    ? !0
    : r;
}
function Kc(e, t) {
  var n;
  return function () {
    var r = this,
      i = arguments,
      o = function () {
        (n = null), e.apply(r, i);
      };
    clearTimeout(n), (n = setTimeout(o, t));
  };
}
function Gc(e, t) {
  let n;
  return function () {
    let r = this,
      i = arguments;
    n || (e.apply(r, i), (n = !0), setTimeout(() => (n = !1), t));
  };
}
function Nm(e) {
  e(bn);
}
var it = {},
  So = !1;
function Lm(e, t) {
  if ((So || ((it = Wt(it)), (So = !0)), t === void 0)) return it[e];
  (it[e] = t),
    typeof t == "object" &&
      t !== null &&
      t.hasOwnProperty("init") &&
      typeof t.init == "function" &&
      it[e].init(),
    wc(it[e]);
}
function Mm() {
  return it;
}
var qc = {};
function Im(e, t) {
  qc[e] = typeof t != "function" ? () => t : t;
}
function Pm(e) {
  return (
    Object.entries(qc).forEach(([t, n]) => {
      Object.defineProperty(e, t, {
        get() {
          return (...r) => n(...r);
        },
      });
    }),
    e
  );
}
var zc = {};
function km(e, t) {
  zc[e] = t;
}
function Rm(e, t) {
  return (
    Object.entries(zc).forEach(([n, r]) => {
      Object.defineProperty(e, n, {
        get() {
          return (...i) => r.bind(t)(...i);
        },
        enumerable: !1,
      });
    }),
    e
  );
}
var Hm = {
    get reactive() {
      return Wt;
    },
    get release() {
      return sr;
    },
    get effect() {
      return vn;
    },
    get raw() {
      return pc;
    },
    version: "3.9.5",
    flushAndStopDeferringMutations: z_,
    disableEffectScheduling: B_,
    setReactivityEngine: V_,
    closestDataStack: Ht,
    skipDuringClone: lr,
    addRootSelector: Vc,
    addInitSelector: jc,
    addScopeToNode: yn,
    deferMutations: q_,
    mapAttributes: Yi,
    evaluateLater: ue,
    setEvaluator: J_,
    mergeProxies: En,
    findClosest: ar,
    closestRoot: or,
    interceptor: Ac,
    transition: ni,
    setStyles: cr,
    mutateDom: te,
    directive: ee,
    throttle: Gc,
    debounce: Kc,
    evaluate: Ct,
    initTree: Ge,
    nextTick: kc,
    prefixed: Ut,
    prefix: nm,
    plugin: Nm,
    magic: Re,
    store: Lm,
    start: lm,
    clone: ym,
    bound: Dm,
    $data: bc,
    data: km,
    bind: Im,
  },
  bn = Hm;
function Bm(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let i = 0; i < r.length; i++) n[r[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
var Vm = Object.freeze({});
Object.freeze([]);
var Xc = Object.assign,
  jm = Object.prototype.hasOwnProperty,
  ur = (e, t) => jm.call(e, t),
  ft = Array.isArray,
  an = (e) => Qc(e) === "[object Map]",
  Fm = (e) => typeof e == "string",
  zi = (e) => typeof e == "symbol",
  fr = (e) => e !== null && typeof e == "object",
  Wm = Object.prototype.toString,
  Qc = (e) => Wm.call(e),
  Jc = (e) => Qc(e).slice(8, -1),
  Xi = (e) =>
    Fm(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Um = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ym = Um((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Zc = (e, t) => e !== t && (e === e || t === t),
  ii = new WeakMap(),
  Qt = [],
  De,
  dt = Symbol("iterate"),
  si = Symbol("Map key iterate");
function Km(e) {
  return e && e._isEffect === !0;
}
function Gm(e, t = Vm) {
  Km(e) && (e = e.raw);
  const n = Xm(e, t);
  return t.lazy || n(), n;
}
function qm(e) {
  e.active && (el(e), e.options.onStop && e.options.onStop(), (e.active = !1));
}
var zm = 0;
function Xm(e, t) {
  const n = function () {
    if (!n.active) return e();
    if (!Qt.includes(n)) {
      el(n);
      try {
        return Jm(), Qt.push(n), (De = n), e();
      } finally {
        Qt.pop(), tl(), (De = Qt[Qt.length - 1]);
      }
    }
  };
  return (
    (n.id = zm++),
    (n.allowRecurse = !!t.allowRecurse),
    (n._isEffect = !0),
    (n.active = !0),
    (n.raw = e),
    (n.deps = []),
    (n.options = t),
    n
  );
}
function el(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
var Bt = !0,
  Qi = [];
function Qm() {
  Qi.push(Bt), (Bt = !1);
}
function Jm() {
  Qi.push(Bt), (Bt = !0);
}
function tl() {
  const e = Qi.pop();
  Bt = e === void 0 ? !0 : e;
}
function Se(e, t, n) {
  if (!Bt || De === void 0) return;
  let r = ii.get(e);
  r || ii.set(e, (r = new Map()));
  let i = r.get(n);
  i || r.set(n, (i = new Set())),
    i.has(De) ||
      (i.add(De),
      De.deps.push(i),
      De.options.onTrack &&
        De.options.onTrack({ effect: De, target: e, type: t, key: n }));
}
function qe(e, t, n, r, i, o) {
  const a = ii.get(e);
  if (!a) return;
  const l = new Set(),
    f = (g) => {
      g &&
        g.forEach((s) => {
          (s !== De || s.allowRecurse) && l.add(s);
        });
    };
  if (t === "clear") a.forEach(f);
  else if (n === "length" && ft(e))
    a.forEach((g, s) => {
      (s === "length" || s >= r) && f(g);
    });
  else
    switch ((n !== void 0 && f(a.get(n)), t)) {
      case "add":
        ft(e)
          ? Xi(n) && f(a.get("length"))
          : (f(a.get(dt)), an(e) && f(a.get(si)));
        break;
      case "delete":
        ft(e) || (f(a.get(dt)), an(e) && f(a.get(si)));
        break;
      case "set":
        an(e) && f(a.get(dt));
        break;
    }
  const d = (g) => {
    g.options.onTrigger &&
      g.options.onTrigger({
        effect: g,
        target: e,
        key: n,
        type: t,
        newValue: r,
        oldValue: i,
        oldTarget: o,
      }),
      g.options.scheduler ? g.options.scheduler(g) : g();
  };
  l.forEach(d);
}
var Zm = Bm("__proto__,__v_isRef,__isVue"),
  nl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .map((e) => Symbol[e])
      .filter(zi)
  ),
  eg = dr(),
  tg = dr(!1, !0),
  ng = dr(!0),
  rg = dr(!0, !0),
  Wn = {};
["includes", "indexOf", "lastIndexOf"].forEach((e) => {
  const t = Array.prototype[e];
  Wn[e] = function (...n) {
    const r = G(this);
    for (let o = 0, a = this.length; o < a; o++) Se(r, "get", o + "");
    const i = t.apply(r, n);
    return i === -1 || i === !1 ? t.apply(r, n.map(G)) : i;
  };
});
["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
  const t = Array.prototype[e];
  Wn[e] = function (...n) {
    Qm();
    const r = t.apply(this, n);
    return tl(), r;
  };
});
function dr(e = !1, t = !1) {
  return function (r, i, o) {
    if (i === "__v_isReactive") return !e;
    if (i === "__v_isReadonly") return e;
    if (i === "__v_raw" && o === (e ? (t ? hg : gl) : t ? dg : ml).get(r))
      return r;
    const a = ft(r);
    if (!e && a && ur(Wn, i)) return Reflect.get(Wn, i, o);
    const l = Reflect.get(r, i, o);
    return (zi(i) ? nl.has(i) : Zm(i)) || (e || Se(r, "get", i), t)
      ? l
      : oi(l)
      ? !a || !Xi(i)
        ? l.value
        : l
      : fr(l)
      ? e
        ? vl(l)
        : ts(l)
      : l;
  };
}
var ig = rl(),
  sg = rl(!0);
function rl(e = !1) {
  return function (n, r, i, o) {
    let a = n[r];
    if (!e && ((i = G(i)), (a = G(a)), !ft(n) && oi(a) && !oi(i)))
      return (a.value = i), !0;
    const l = ft(n) && Xi(r) ? Number(r) < n.length : ur(n, r),
      f = Reflect.set(n, r, i, o);
    return (
      n === G(o) &&
        (l ? Zc(i, a) && qe(n, "set", r, i, a) : qe(n, "add", r, i)),
      f
    );
  };
}
function og(e, t) {
  const n = ur(e, t),
    r = e[t],
    i = Reflect.deleteProperty(e, t);
  return i && n && qe(e, "delete", t, void 0, r), i;
}
function ag(e, t) {
  const n = Reflect.has(e, t);
  return (!zi(t) || !nl.has(t)) && Se(e, "has", t), n;
}
function cg(e) {
  return Se(e, "iterate", ft(e) ? "length" : dt), Reflect.ownKeys(e);
}
var il = { get: eg, set: ig, deleteProperty: og, has: ag, ownKeys: cg },
  sl = {
    get: ng,
    set(e, t) {
      return (
        console.warn(
          `Set operation on key "${String(t)}" failed: target is readonly.`,
          e
        ),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        console.warn(
          `Delete operation on key "${String(t)}" failed: target is readonly.`,
          e
        ),
        !0
      );
    },
  };
Xc({}, il, { get: tg, set: sg });
Xc({}, sl, { get: rg });
var Ji = (e) => (fr(e) ? ts(e) : e),
  Zi = (e) => (fr(e) ? vl(e) : e),
  es = (e) => e,
  hr = (e) => Reflect.getPrototypeOf(e);
function pr(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const i = G(e),
    o = G(t);
  t !== o && !n && Se(i, "get", t), !n && Se(i, "get", o);
  const { has: a } = hr(i),
    l = r ? es : n ? Zi : Ji;
  if (a.call(i, t)) return l(e.get(t));
  if (a.call(i, o)) return l(e.get(o));
  e !== i && e.get(t);
}
function _r(e, t = !1) {
  const n = this.__v_raw,
    r = G(n),
    i = G(e);
  return (
    e !== i && !t && Se(r, "has", e),
    !t && Se(r, "has", i),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function mr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && Se(G(e), "iterate", dt), Reflect.get(e, "size", e)
  );
}
function ol(e) {
  e = G(e);
  const t = G(this);
  return hr(t).has.call(t, e) || (t.add(e), qe(t, "add", e, e)), this;
}
function al(e, t) {
  t = G(t);
  const n = G(this),
    { has: r, get: i } = hr(n);
  let o = r.call(n, e);
  o ? _l(n, r, e) : ((e = G(e)), (o = r.call(n, e)));
  const a = i.call(n, e);
  return (
    n.set(e, t),
    o ? Zc(t, a) && qe(n, "set", e, t, a) : qe(n, "add", e, t),
    this
  );
}
function cl(e) {
  const t = G(this),
    { has: n, get: r } = hr(t);
  let i = n.call(t, e);
  i ? _l(t, n, e) : ((e = G(e)), (i = n.call(t, e)));
  const o = r ? r.call(t, e) : void 0,
    a = t.delete(e);
  return i && qe(t, "delete", e, void 0, o), a;
}
function ll() {
  const e = G(this),
    t = e.size !== 0,
    n = an(e) ? new Map(e) : new Set(e),
    r = e.clear();
  return t && qe(e, "clear", void 0, void 0, n), r;
}
function gr(e, t) {
  return function (r, i) {
    const o = this,
      a = o.__v_raw,
      l = G(a),
      f = t ? es : e ? Zi : Ji;
    return (
      !e && Se(l, "iterate", dt), a.forEach((d, g) => r.call(i, f(d), f(g), o))
    );
  };
}
function Cn(e, t, n) {
  return function (...r) {
    const i = this.__v_raw,
      o = G(i),
      a = an(o),
      l = e === "entries" || (e === Symbol.iterator && a),
      f = e === "keys" && a,
      d = i[e](...r),
      g = n ? es : t ? Zi : Ji;
    return (
      !t && Se(o, "iterate", f ? si : dt),
      {
        next() {
          const { value: s, done: c } = d.next();
          return c
            ? { value: s, done: c }
            : { value: l ? [g(s[0]), g(s[1])] : g(s), done: c };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ue(e) {
  return function (...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Ym(e)} operation ${n}failed: target is readonly.`,
        G(this)
      );
    }
    return e === "delete" ? !1 : this;
  };
}
var ul = {
    get(e) {
      return pr(this, e);
    },
    get size() {
      return mr(this);
    },
    has: _r,
    add: ol,
    set: al,
    delete: cl,
    clear: ll,
    forEach: gr(!1, !1),
  },
  fl = {
    get(e) {
      return pr(this, e, !1, !0);
    },
    get size() {
      return mr(this);
    },
    has: _r,
    add: ol,
    set: al,
    delete: cl,
    clear: ll,
    forEach: gr(!1, !0),
  },
  dl = {
    get(e) {
      return pr(this, e, !0);
    },
    get size() {
      return mr(this, !0);
    },
    has(e) {
      return _r.call(this, e, !0);
    },
    add: Ue("add"),
    set: Ue("set"),
    delete: Ue("delete"),
    clear: Ue("clear"),
    forEach: gr(!0, !1),
  },
  hl = {
    get(e) {
      return pr(this, e, !0, !0);
    },
    get size() {
      return mr(this, !0);
    },
    has(e) {
      return _r.call(this, e, !0);
    },
    add: Ue("add"),
    set: Ue("set"),
    delete: Ue("delete"),
    clear: Ue("clear"),
    forEach: gr(!0, !0),
  },
  lg = ["keys", "values", "entries", Symbol.iterator];
lg.forEach((e) => {
  (ul[e] = Cn(e, !1, !1)),
    (dl[e] = Cn(e, !0, !1)),
    (fl[e] = Cn(e, !1, !0)),
    (hl[e] = Cn(e, !0, !0));
});
function pl(e, t) {
  const n = t ? (e ? hl : fl) : e ? dl : ul;
  return (r, i, o) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? r
      : Reflect.get(ur(n, i) && i in r ? n : r, i, o);
}
var ug = { get: pl(!1, !1) },
  fg = { get: pl(!0, !1) };
function _l(e, t, n) {
  const r = G(n);
  if (r !== n && t.call(e, r)) {
    const i = Jc(e);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${
        i === "Map" ? " as keys" : ""
      }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
var ml = new WeakMap(),
  dg = new WeakMap(),
  gl = new WeakMap(),
  hg = new WeakMap();
function pg(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _g(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pg(Jc(e));
}
function ts(e) {
  return e && e.__v_isReadonly ? e : yl(e, !1, il, ug, ml);
}
function vl(e) {
  return yl(e, !0, sl, fg, gl);
}
function yl(e, t, n, r, i) {
  if (!fr(e))
    return console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive)) return e;
  const o = i.get(e);
  if (o) return o;
  const a = _g(e);
  if (a === 0) return e;
  const l = new Proxy(e, a === 2 ? r : n);
  return i.set(e, l), l;
}
function G(e) {
  return (e && G(e.__v_raw)) || e;
}
function oi(e) {
  return Boolean(e && e.__v_isRef === !0);
}
Re("nextTick", () => kc);
Re("dispatch", (e) => on.bind(on, e));
Re("watch", (e, { evaluateLater: t, effect: n }) => (r, i) => {
  let o = t(r),
    a = !0,
    l,
    f = n(() =>
      o((d) => {
        JSON.stringify(d),
          a
            ? (l = d)
            : queueMicrotask(() => {
                i(d, l), (l = d);
              }),
          (a = !1);
      })
    );
  e._x_effects.delete(f);
});
Re("store", Mm);
Re("data", (e) => bc(e));
Re("root", (e) => or(e));
Re(
  "refs",
  (e) => (e._x_refs_proxy || (e._x_refs_proxy = En(mg(e))), e._x_refs_proxy)
);
function mg(e) {
  let t = [],
    n = e;
  for (; n; ) n._x_refs && t.push(n._x_refs), (n = n.parentNode);
  return t;
}
var Ir = {};
function El(e) {
  return Ir[e] || (Ir[e] = 0), ++Ir[e];
}
function gg(e, t) {
  return ar(e, (n) => {
    if (n._x_ids && n._x_ids[t]) return !0;
  });
}
function vg(e, t) {
  e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = El(t));
}
Re("id", (e) => (t, n = null) => {
  let r = gg(e, t),
    i = r ? r._x_ids[t] : El(t);
  return n ? `${t}-${i}-${n}` : `${t}-${i}`;
});
Re("el", (e) => e);
ee("modelable", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t),
    o = () => {
      let d;
      return i((g) => (d = g)), d;
    },
    a = r(`${t} = __placeholder`),
    l = (d) => a(() => {}, { scope: { __placeholder: d } }),
    f = o();
  l(f),
    queueMicrotask(() => {
      if (!e._x_model) return;
      e._x_removeModelListeners.default();
      let d = e._x_model.get,
        g = e._x_model.set;
      n(() => l(d())), n(() => g(o()));
    });
});
ee("teleport", (e, { expression: t }, { cleanup: n }) => {
  e.tagName.toLowerCase() !== "template" &&
    Fn("x-teleport can only be used on a <template> tag", e);
  let r = document.querySelector(t);
  r || Fn(`Cannot find x-teleport element for selector: "${t}"`);
  let i = e.content.cloneNode(!0).firstElementChild;
  (e._x_teleport = i),
    (i._x_teleportBack = e),
    e._x_forwardEvents &&
      e._x_forwardEvents.forEach((o) => {
        i.addEventListener(o, (a) => {
          a.stopPropagation(), e.dispatchEvent(new a.constructor(a.type, a));
        });
      }),
    yn(i, {}, e),
    te(() => {
      r.appendChild(i), Ge(i), (i._x_ignore = !0);
    }),
    n(() => i.remove());
});
var bl = () => {};
bl.inline = (e, { modifiers: t }, { cleanup: n }) => {
  t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
    n(() => {
      t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
    });
};
ee("ignore", bl);
ee("effect", (e, { expression: t }, { effect: n }) => n(ue(e, t)));
function wl(e, t, n, r) {
  let i = e,
    o = (f) => r(f),
    a = {},
    l = (f, d) => (g) => d(f, g);
  if (
    (n.includes("dot") && (t = yg(t)),
    n.includes("camel") && (t = Eg(t)),
    n.includes("passive") && (a.passive = !0),
    n.includes("capture") && (a.capture = !0),
    n.includes("window") && (i = window),
    n.includes("document") && (i = document),
    n.includes("prevent") &&
      (o = l(o, (f, d) => {
        d.preventDefault(), f(d);
      })),
    n.includes("stop") &&
      (o = l(o, (f, d) => {
        d.stopPropagation(), f(d);
      })),
    n.includes("self") &&
      (o = l(o, (f, d) => {
        d.target === e && f(d);
      })),
    (n.includes("away") || n.includes("outside")) &&
      ((i = document),
      (o = l(o, (f, d) => {
        e.contains(d.target) ||
          (d.target.isConnected !== !1 &&
            ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
              (e._x_isShown !== !1 && f(d))));
      }))),
    n.includes("once") &&
      (o = l(o, (f, d) => {
        f(d), i.removeEventListener(t, o, a);
      })),
    (o = l(o, (f, d) => {
      (wg(t) && Ag(d, n)) || f(d);
    })),
    n.includes("debounce"))
  ) {
    let f = n[n.indexOf("debounce") + 1] || "invalid-wait",
      d = ai(f.split("ms")[0]) ? Number(f.split("ms")[0]) : 250;
    o = Kc(o, d);
  }
  if (n.includes("throttle")) {
    let f = n[n.indexOf("throttle") + 1] || "invalid-wait",
      d = ai(f.split("ms")[0]) ? Number(f.split("ms")[0]) : 250;
    o = Gc(o, d);
  }
  return (
    i.addEventListener(t, o, a),
    () => {
      i.removeEventListener(t, o, a);
    }
  );
}
function yg(e) {
  return e.replace(/-/g, ".");
}
function Eg(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function ai(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function bg(e) {
  return e
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[_\s]/, "-")
    .toLowerCase();
}
function wg(e) {
  return ["keydown", "keyup"].includes(e);
}
function Ag(e, t) {
  let n = t.filter(
    (o) => !["window", "document", "prevent", "stop", "once"].includes(o)
  );
  if (n.includes("debounce")) {
    let o = n.indexOf("debounce");
    n.splice(o, ai((n[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (n.length === 0 || (n.length === 1 && Oo(e.key).includes(n[0]))) return !1;
  const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((o) =>
    n.includes(o)
  );
  return (
    (n = n.filter((o) => !i.includes(o))),
    !(
      i.length > 0 &&
      i.filter(
        (a) => ((a === "cmd" || a === "super") && (a = "meta"), e[`${a}Key`])
      ).length === i.length &&
      Oo(e.key).includes(n[0])
    )
  );
}
function Oo(e) {
  if (!e) return [];
  e = bg(e);
  let t = {
    ctrl: "control",
    slash: "/",
    space: "-",
    spacebar: "-",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    equal: "=",
  };
  return (
    (t[e] = e),
    Object.keys(t)
      .map((n) => {
        if (t[n] === e) return n;
      })
      .filter((n) => n)
  );
}
ee("model", (e, { modifiers: t, expression: n }, { effect: r, cleanup: i }) => {
  let o = ue(e, n),
    a = `${n} = rightSideOfExpression($event, ${n})`,
    l = ue(e, a);
  var f =
    e.tagName.toLowerCase() === "select" ||
    ["checkbox", "radio"].includes(e.type) ||
    t.includes("lazy")
      ? "change"
      : "input";
  let d = Tg(e, t, n),
    g = wl(e, f, t, (c) => {
      l(() => {}, { scope: { $event: c, rightSideOfExpression: d } });
    });
  e._x_removeModelListeners || (e._x_removeModelListeners = {}),
    (e._x_removeModelListeners.default = g),
    i(() => e._x_removeModelListeners.default());
  let s = ue(e, `${n} = __placeholder`);
  (e._x_model = {
    get() {
      let c;
      return o((u) => (c = u)), c;
    },
    set(c) {
      s(() => {}, { scope: { __placeholder: c } });
    },
  }),
    (e._x_forceModelUpdate = () => {
      o((c) => {
        c === void 0 && n.match(/\./) && (c = ""),
          (window.fromModel = !0),
          te(() => Uc(e, "value", c)),
          delete window.fromModel;
      });
    }),
    r(() => {
      (t.includes("unintrusive") && document.activeElement.isSameNode(e)) ||
        e._x_forceModelUpdate();
    });
});
function Tg(e, t, n) {
  return (
    e.type === "radio" &&
      te(() => {
        e.hasAttribute("name") || e.setAttribute("name", n);
      }),
    (r, i) =>
      te(() => {
        if (r instanceof CustomEvent && r.detail !== void 0)
          return r.detail || r.target.value;
        if (e.type === "checkbox")
          if (Array.isArray(i)) {
            let o = t.includes("number") ? Pr(r.target.value) : r.target.value;
            return r.target.checked
              ? i.concat([o])
              : i.filter((a) => !Sg(a, o));
          } else return r.target.checked;
        else {
          if (e.tagName.toLowerCase() === "select" && e.multiple)
            return t.includes("number")
              ? Array.from(r.target.selectedOptions).map((o) => {
                  let a = o.value || o.text;
                  return Pr(a);
                })
              : Array.from(r.target.selectedOptions).map(
                  (o) => o.value || o.text
                );
          {
            let o = r.target.value;
            return t.includes("number")
              ? Pr(o)
              : t.includes("trim")
              ? o.trim()
              : o;
          }
        }
      })
  );
}
function Pr(e) {
  let t = e ? parseFloat(e) : null;
  return Og(t) ? t : e;
}
function Sg(e, t) {
  return e == t;
}
function Og(e) {
  return !Array.isArray(e) && !isNaN(e);
}
ee("cloak", (e) =>
  queueMicrotask(() => te(() => e.removeAttribute(Ut("cloak"))))
);
jc(() => `[${Ut("init")}]`);
ee(
  "init",
  lr((e, { expression: t }, { evaluate: n }) =>
    typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)
  )
);
ee("text", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t);
  n(() => {
    i((o) => {
      te(() => {
        e.textContent = o;
      });
    });
  });
});
ee("html", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t);
  n(() => {
    i((o) => {
      te(() => {
        (e.innerHTML = o),
          (e._x_ignoreSelf = !0),
          Ge(e),
          delete e._x_ignoreSelf;
      });
    });
  });
});
Yi(Dc(":", Nc(Ut("bind:"))));
ee(
  "bind",
  (
    e,
    { value: t, modifiers: n, expression: r, original: i },
    { effect: o }
  ) => {
    if (!t) return xg(e, r, i);
    if (t === "key") return $g(e, r);
    let a = ue(e, r);
    o(() =>
      a((l) => {
        l === void 0 && r.match(/\./) && (l = ""), te(() => Uc(e, t, l, n));
      })
    );
  }
);
function xg(e, t, n, r) {
  let i = {};
  Pm(i);
  let o = ue(e, t),
    a = [];
  for (; a.length; ) a.pop()();
  o(
    (l) => {
      let f = Object.entries(l).map(([g, s]) => ({ name: g, value: s })),
        d = rm(f);
      (f = f.map((g) =>
        d.find((s) => s.name === g.name)
          ? { name: `x-bind:${g.name}`, value: `"${g.value}"` }
          : g
      )),
        Ui(e, f, n).map((g) => {
          a.push(g.runCleanups), g();
        });
    },
    { scope: i }
  );
}
function $g(e, t) {
  e._x_keyExpression = t;
}
Vc(() => `[${Ut("data")}]`);
ee(
  "data",
  lr((e, { expression: t }, { cleanup: n }) => {
    t = t === "" ? "{}" : t;
    let r = {};
    Xr(r, e);
    let i = {};
    Rm(i, r);
    let o = Ct(e, t, { scope: i });
    o === void 0 && (o = {}), Xr(o, e);
    let a = Wt(o);
    wc(a);
    let l = yn(e, a);
    a.init && Ct(e, a.init),
      n(() => {
        a.destroy && Ct(e, a.destroy), l();
      });
  })
);
ee("show", (e, { modifiers: t, expression: n }, { effect: r }) => {
  let i = ue(e, n),
    o = () =>
      te(() => {
        (e.style.display = "none"), (e._x_isShown = !1);
      }),
    a = () =>
      te(() => {
        e.style.length === 1 && e.style.display === "none"
          ? e.removeAttribute("style")
          : e.style.removeProperty("display"),
          (e._x_isShown = !0);
      }),
    l = () => setTimeout(a),
    f = ti(
      (s) => (s ? a() : o()),
      (s) => {
        typeof e._x_toggleAndCascadeWithTransitions == "function"
          ? e._x_toggleAndCascadeWithTransitions(e, s, a, o)
          : s
          ? l()
          : o();
      }
    ),
    d,
    g = !0;
  r(() =>
    i((s) => {
      (!g && s === d) ||
        (t.includes("immediate") && (s ? l() : o()), f(s), (d = s), (g = !1));
    })
  );
});
ee("for", (e, { expression: t }, { effect: n, cleanup: r }) => {
  let i = Dg(t),
    o = ue(e, i.items),
    a = ue(e, e._x_keyExpression || "index");
  (e._x_prevKeys = []),
    (e._x_lookup = {}),
    n(() => Cg(e, i, o, a)),
    r(() => {
      Object.values(e._x_lookup).forEach((l) => l.remove()),
        delete e._x_prevKeys,
        delete e._x_lookup;
    });
});
function Cg(e, t, n, r) {
  let i = (a) => typeof a == "object" && !Array.isArray(a),
    o = e;
  n((a) => {
    Ng(a) && a >= 0 && (a = Array.from(Array(a).keys(), (p) => p + 1)),
      a === void 0 && (a = []);
    let l = e._x_lookup,
      f = e._x_prevKeys,
      d = [],
      g = [];
    if (i(a))
      a = Object.entries(a).map(([p, m]) => {
        let b = xo(t, m, p, a);
        r((O) => g.push(O), { scope: { index: p, ...b } }), d.push(b);
      });
    else
      for (let p = 0; p < a.length; p++) {
        let m = xo(t, a[p], p, a);
        r((b) => g.push(b), { scope: { index: p, ...m } }), d.push(m);
      }
    let s = [],
      c = [],
      u = [],
      h = [];
    for (let p = 0; p < f.length; p++) {
      let m = f[p];
      g.indexOf(m) === -1 && u.push(m);
    }
    f = f.filter((p) => !u.includes(p));
    let _ = "template";
    for (let p = 0; p < g.length; p++) {
      let m = g[p],
        b = f.indexOf(m);
      if (b === -1) f.splice(p, 0, m), s.push([_, p]);
      else if (b !== p) {
        let O = f.splice(p, 1)[0],
          D = f.splice(b - 1, 1)[0];
        f.splice(p, 0, D), f.splice(b, 0, O), c.push([O, D]);
      } else h.push(m);
      _ = m;
    }
    for (let p = 0; p < u.length; p++) {
      let m = u[p];
      l[m]._x_effects && l[m]._x_effects.forEach(hc),
        l[m].remove(),
        (l[m] = null),
        delete l[m];
    }
    for (let p = 0; p < c.length; p++) {
      let [m, b] = c[p],
        O = l[m],
        D = l[b],
        M = document.createElement("div");
      te(() => {
        D.after(M),
          O.after(D),
          D._x_currentIfEl && D.after(D._x_currentIfEl),
          M.before(O),
          O._x_currentIfEl && O.after(O._x_currentIfEl),
          M.remove();
      }),
        wo(D, d[g.indexOf(b)]);
    }
    for (let p = 0; p < s.length; p++) {
      let [m, b] = s[p],
        O = m === "template" ? o : l[m];
      O._x_currentIfEl && (O = O._x_currentIfEl);
      let D = d[b],
        M = g[b],
        I = document.importNode(o.content, !0).firstElementChild;
      yn(I, Wt(D), o),
        te(() => {
          O.after(I), Ge(I);
        }),
        typeof M == "object" &&
          Fn(
            "x-for key cannot be an object, it must be a string or an integer",
            o
          ),
        (l[M] = I);
    }
    for (let p = 0; p < h.length; p++) wo(l[h[p]], d[g.indexOf(h[p])]);
    o._x_prevKeys = g;
  });
}
function Dg(e) {
  let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
    n = /^\s*\(|\)\s*$/g,
    r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
    i = e.match(r);
  if (!i) return;
  let o = {};
  o.items = i[2].trim();
  let a = i[1].replace(n, "").trim(),
    l = a.match(t);
  return (
    l
      ? ((o.item = a.replace(t, "").trim()),
        (o.index = l[1].trim()),
        l[2] && (o.collection = l[2].trim()))
      : (o.item = a),
    o
  );
}
function xo(e, t, n, r) {
  let i = {};
  return (
    /^\[.*\]$/.test(e.item) && Array.isArray(t)
      ? e.item
          .replace("[", "")
          .replace("]", "")
          .split(",")
          .map((a) => a.trim())
          .forEach((a, l) => {
            i[a] = t[l];
          })
      : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
      ? e.item
          .replace("{", "")
          .replace("}", "")
          .split(",")
          .map((a) => a.trim())
          .forEach((a) => {
            i[a] = t[a];
          })
      : (i[e.item] = t),
    e.index && (i[e.index] = n),
    e.collection && (i[e.collection] = r),
    i
  );
}
function Ng(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Al() {}
Al.inline = (e, { expression: t }, { cleanup: n }) => {
  let r = or(e);
  r._x_refs || (r._x_refs = {}),
    (r._x_refs[t] = e),
    n(() => delete r._x_refs[t]);
};
ee("ref", Al);
ee("if", (e, { expression: t }, { effect: n, cleanup: r }) => {
  let i = ue(e, t),
    o = () => {
      if (e._x_currentIfEl) return e._x_currentIfEl;
      let l = e.content.cloneNode(!0).firstElementChild;
      return (
        yn(l, {}, e),
        te(() => {
          e.after(l), Ge(l);
        }),
        (e._x_currentIfEl = l),
        (e._x_undoIf = () => {
          vt(l, (f) => {
            f._x_effects && f._x_effects.forEach(hc);
          }),
            l.remove(),
            delete e._x_currentIfEl;
        }),
        l
      );
    },
    a = () => {
      !e._x_undoIf || (e._x_undoIf(), delete e._x_undoIf);
    };
  n(() =>
    i((l) => {
      l ? o() : a();
    })
  ),
    r(() => e._x_undoIf && e._x_undoIf());
});
ee("id", (e, { expression: t }, { evaluate: n }) => {
  n(t).forEach((i) => vg(e, i));
});
Yi(Dc("@", Nc(Ut("on:"))));
ee(
  "on",
  lr((e, { value: t, modifiers: n, expression: r }, { cleanup: i }) => {
    let o = r ? ue(e, r) : () => {};
    e.tagName.toLowerCase() === "template" &&
      (e._x_forwardEvents || (e._x_forwardEvents = []),
      e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
    let a = wl(e, t, n, (l) => {
      o(() => {}, { scope: { $event: l }, params: [l] });
    });
    i(() => a());
  })
);
bn.setEvaluator(Oc);
bn.setReactivityEngine({ reactive: ts, effect: Gm, release: qm, raw: G });
var Lg = bn,
  Vt = Lg;
const Mg = () => {
    Vt.store("modal", { title: "", html: "" }),
      (L._functions.events.eventAlert = (e) => {
        Vt.store("modal", e);
        let t = new mt(document.querySelector("[x-ref='modal']"));
        t._element.addEventListener(
          "hidden.bs.modal",
          (n) => {
            L._functions.events.eventRead(e.id);
          },
          { once: !0 }
        ),
          t.show();
      });
  },
  Ig = () => {
    Vt.store("toast", { title: "", html: "" }),
      (L._functions.events.eventToast = (e) => {
        Vt.store("toast", e);
        let t = new gn(document.querySelector("[x-ref='toast']")),
          n = t._element.querySelector("[data-bs-dismiss='toast']"),
          r = (i) => {
            L._functions.events.eventRead(e.id);
          };
        n.addEventListener("click", r, { once: !0 }),
          t._element.addEventListener(
            "hidden.bs.toast",
            (i) => {
              n.removeEventListener("click", r);
            },
            { once: !0 }
          ),
          t.show();
      });
  },
  Pg = () => {
    (L._functions.events.eventCount = (e) => {
      Vt.store("unread_count", e);
    }),
      (L._functions.events.eventRead = (e) => {
        L.events.counter.read.add(e);
        let t = L.events.counter.unread.getAll().length;
        L.events.controller.broadcast("counter", { count: t }),
          Vt.store("unread_count", t);
      }),
      document.addEventListener("alpine:init", () => {
        L._functions.events.eventCount(L.events.counter.unread.getAll().length);
      });
  };
wi.extend(pa);
L.init(window.init);
df(), ff(), pf(), L_(), M_(), I_(), Pg(), Mg(), Ig();
export {
  L as C,
  mt as M,
  ir as T,
  At as a,
  Nu as c,
  wi as d,
  pf as h,
  Vt as m,
};
