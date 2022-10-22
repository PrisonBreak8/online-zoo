(() => {
  "use strict";
  let e = !0,
    t = (e = 500) => {
      document.documentElement.classList.contains("lock") ? n(e) : r(e);
    },
    n = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < r.length; e++) {
            r[e].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    r = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let r = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < r.length; e++) {
          r[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (n.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  function s(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function i(e = {}, t = {}) {
    Object.keys(t).forEach((n) => {
      void 0 === e[n]
        ? (e[n] = t[n])
        : s(t[n]) && s(e[n]) && Object.keys(t[n]).length > 0 && i(e[n], t[n]);
    });
  }
  const o = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function a() {
    const e = "undefined" != typeof document ? document : {};
    return i(e, o), e;
  }
  const l = {
    document: o,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function c() {
    const e = "undefined" != typeof window ? window : {};
    return i(e, l), e;
  }
  class u extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function d(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...d(e)) : t.push(e);
      }),
      t
    );
  }
  function p(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function f(e, t) {
    const n = c(),
      r = a();
    let s = [];
    if (!t && e instanceof u) return e;
    if (!e) return new u(s);
    if ("string" == typeof e) {
      const n = e.trim();
      if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
        let e = "div";
        0 === n.indexOf("<li") && (e = "ul"),
          0 === n.indexOf("<tr") && (e = "tbody"),
          (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
          0 === n.indexOf("<tbody") && (e = "table"),
          0 === n.indexOf("<option") && (e = "select");
        const t = r.createElement(e);
        t.innerHTML = n;
        for (let e = 0; e < t.childNodes.length; e += 1)
          s.push(t.childNodes[e]);
      } else
        s = (function (e, t) {
          if ("string" != typeof e) return [e];
          const n = [],
            r = t.querySelectorAll(e);
          for (let e = 0; e < r.length; e += 1) n.push(r[e]);
          return n;
        })(e.trim(), t || r);
    } else if (e.nodeType || e === n || e === r) s.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof u) return e;
      s = e;
    }
    return new u(
      (function (e) {
        const t = [];
        for (let n = 0; n < e.length; n += 1)
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        return t;
      })(s)
    );
  }
  f.fn = u.prototype;
  const h = "resize scroll".split(" ");
  function m(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          h.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : f(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  m("click"),
    m("blur"),
    m("focus"),
    m("focusin"),
    m("focusout"),
    m("keyup"),
    m("keydown"),
    m("keypress"),
    m("submit"),
    m("change"),
    m("mousedown"),
    m("mousemove"),
    m("mouseup"),
    m("mouseenter"),
    m("mouseleave"),
    m("mouseout"),
    m("mouseover"),
    m("touchstart"),
    m("touchend"),
    m("touchmove"),
    m("resize"),
    m("scroll");
  const g = {
    addClass: function (...e) {
      const t = d(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = d(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = d(e.map((e) => e.split(" ")));
      return (
        p(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = d(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let n = 0; n < this.length; n += 1)
        if (2 === arguments.length) this[n].setAttribute(e, t);
        else
          for (const t in e) (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, n, r, s] = e;
      function i(e) {
        const t = e.target;
        if (!t) return;
        const s = e.target.dom7EventData || [];
        if ((s.indexOf(e) < 0 && s.unshift(e), f(t).is(n))) r.apply(t, s);
        else {
          const e = f(t).parents();
          for (let t = 0; t < e.length; t += 1)
            f(e[t]).is(n) && r.apply(e[t], s);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }
      "function" == typeof e[1] && (([t, r, s] = e), (n = void 0)),
        s || (s = !1);
      const a = t.split(" ");
      let l;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (n)
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: r, proxyListener: i }),
              t.addEventListener(e, i, s);
          }
        else
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: r, proxyListener: o }),
              t.addEventListener(e, o, s);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, n, r, s] = e;
      "function" == typeof e[1] && (([t, r, s] = e), (n = void 0)),
        s || (s = !1);
      const i = t.split(" ");
      for (let e = 0; e < i.length; e += 1) {
        const t = i[e];
        for (let e = 0; e < this.length; e += 1) {
          const i = this[e];
          let o;
          if (
            (!n && i.dom7Listeners
              ? (o = i.dom7Listeners[t])
              : n && i.dom7LiveListeners && (o = i.dom7LiveListeners[t]),
            o && o.length)
          )
            for (let e = o.length - 1; e >= 0; e -= 1) {
              const n = o[e];
              (r && n.listener === r) ||
              (r &&
                n.listener &&
                n.listener.dom7proxy &&
                n.listener.dom7proxy === r)
                ? (i.removeEventListener(t, n.proxyListener, s), o.splice(e, 1))
                : r ||
                  (i.removeEventListener(t, n.proxyListener, s),
                  o.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = c(),
        n = e[0].split(" "),
        r = e[1];
      for (let s = 0; s < n.length; s += 1) {
        const i = n[s];
        for (let n = 0; n < this.length; n += 1) {
          const s = this[n];
          if (t.CustomEvent) {
            const n = new t.CustomEvent(i, {
              detail: r,
              bubbles: !0,
              cancelable: !0,
            });
            (s.dom7EventData = e.filter((e, t) => t > 0)),
              s.dispatchEvent(n),
              (s.dom7EventData = []),
              delete s.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function n(r) {
            r.target === this && (e.call(this, r), t.off("transitionend", n));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = c();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = c(),
          t = a(),
          n = this[0],
          r = n.getBoundingClientRect(),
          s = t.body,
          i = n.clientTop || s.clientTop || 0,
          o = n.clientLeft || s.clientLeft || 0,
          l = n === e ? e.scrollY : n.scrollTop,
          u = n === e ? e.scrollX : n.scrollLeft;
        return { top: r.top + l - i, left: r.left + u - o };
      }
      return null;
    },
    css: function (e, t) {
      const n = c();
      let r;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (r = 0; r < this.length; r += 1)
            for (const t in e) this[r].style[t] = e[t];
          return this;
        }
        if (this[0])
          return n.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, n) => {
            e.apply(t, [t, n]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = c(),
        n = a(),
        r = this[0];
      let s, i;
      if (!r || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (r.matches) return r.matches(e);
        if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
        if (r.msMatchesSelector) return r.msMatchesSelector(e);
        for (s = f(e), i = 0; i < s.length; i += 1) if (s[i] === r) return !0;
        return !1;
      }
      if (e === n) return r === n;
      if (e === t) return r === t;
      if (e.nodeType || e instanceof u) {
        for (s = e.nodeType ? [e] : e, i = 0; i < s.length; i += 1)
          if (s[i] === r) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return f([]);
      if (e < 0) {
        const n = t + e;
        return f(n < 0 ? [] : [this[n]]);
      }
      return f([this[e]]);
    },
    append: function (...e) {
      let t;
      const n = a();
      for (let r = 0; r < e.length; r += 1) {
        t = e[r];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const r = n.createElement("div");
            for (r.innerHTML = t; r.firstChild; )
              this[e].appendChild(r.firstChild);
          } else if (t instanceof u)
            for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = a();
      let n, r;
      for (n = 0; n < this.length; n += 1)
        if ("string" == typeof e) {
          const s = t.createElement("div");
          for (s.innerHTML = e, r = s.childNodes.length - 1; r >= 0; r -= 1)
            this[n].insertBefore(s.childNodes[r], this[n].childNodes[0]);
        } else if (e instanceof u)
          for (r = 0; r < e.length; r += 1)
            this[n].insertBefore(e[r], this[n].childNodes[0]);
        else this[n].insertBefore(e, this[n].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && f(this[0].nextElementSibling).is(e)
            ? f([this[0].nextElementSibling])
            : f([])
          : this[0].nextElementSibling
          ? f([this[0].nextElementSibling])
          : f([])
        : f([]);
    },
    nextAll: function (e) {
      const t = [];
      let n = this[0];
      if (!n) return f([]);
      for (; n.nextElementSibling; ) {
        const r = n.nextElementSibling;
        e ? f(r).is(e) && t.push(r) : t.push(r), (n = r);
      }
      return f(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && f(t.previousElementSibling).is(e)
            ? f([t.previousElementSibling])
            : f([])
          : t.previousElementSibling
          ? f([t.previousElementSibling])
          : f([]);
      }
      return f([]);
    },
    prevAll: function (e) {
      const t = [];
      let n = this[0];
      if (!n) return f([]);
      for (; n.previousElementSibling; ) {
        const r = n.previousElementSibling;
        e ? f(r).is(e) && t.push(r) : t.push(r), (n = r);
      }
      return f(t);
    },
    parent: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1)
        null !== this[n].parentNode &&
          (e
            ? f(this[n].parentNode).is(e) && t.push(this[n].parentNode)
            : t.push(this[n].parentNode));
      return f(t);
    },
    parents: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1) {
        let r = this[n].parentNode;
        for (; r; ) e ? f(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
      }
      return f(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? f([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1) {
        const r = this[n].querySelectorAll(e);
        for (let e = 0; e < r.length; e += 1) t.push(r[e]);
      }
      return f(t);
    },
    children: function (e) {
      const t = [];
      for (let n = 0; n < this.length; n += 1) {
        const r = this[n].children;
        for (let n = 0; n < r.length; n += 1)
          (e && !f(r[n]).is(e)) || t.push(r[n]);
      }
      return f(t);
    },
    filter: function (e) {
      return f(p(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(g).forEach((e) => {
    Object.defineProperty(f.fn, e, { value: g[e], writable: !0 });
  });
  const v = f;
  function y(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function b() {
    return Date.now();
  }
  function w(e, t) {
    void 0 === t && (t = "x");
    const n = c();
    let r, s, i;
    const o = (function (e) {
      const t = c();
      let n;
      return (
        t.getComputedStyle && (n = t.getComputedStyle(e, null)),
        !n && e.currentStyle && (n = e.currentStyle),
        n || (n = e.style),
        n
      );
    })(e);
    return (
      n.WebKitCSSMatrix
        ? ((s = o.transform || o.webkitTransform),
          s.split(",").length > 6 &&
            (s = s
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (i = new n.WebKitCSSMatrix("none" === s ? "" : s)))
        : ((i =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (r = i.toString().split(","))),
      "x" === t &&
        (s = n.WebKitCSSMatrix
          ? i.m41
          : 16 === r.length
          ? parseFloat(r[12])
          : parseFloat(r[4])),
      "y" === t &&
        (s = n.WebKitCSSMatrix
          ? i.m42
          : 16 === r.length
          ? parseFloat(r[13])
          : parseFloat(r[5])),
      s || 0
    );
  }
  function j(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function S(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function x() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
      const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
      if (null != r && !S(r)) {
        const n = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, s = n.length; t < s; t += 1) {
          const s = n[t],
            i = Object.getOwnPropertyDescriptor(r, s);
          void 0 !== i &&
            i.enumerable &&
            (j(e[s]) && j(r[s])
              ? r[s].__swiper__
                ? (e[s] = r[s])
                : x(e[s], r[s])
              : !j(e[s]) && j(r[s])
              ? ((e[s] = {}), r[s].__swiper__ ? (e[s] = r[s]) : x(e[s], r[s]))
              : (e[s] = r[s]));
        }
      }
    }
    return e;
  }
  function E(e, t, n) {
    e.style.setProperty(t, n);
  }
  function T(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const s = c(),
      i = -t.translate;
    let o,
      a = null;
    const l = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      s.cancelAnimationFrame(t.cssModeFrameID);
    const u = n > i ? "next" : "prev",
      d = (e, t) => ("next" === u && e >= t) || ("prev" === u && e <= t),
      p = () => {
        (o = new Date().getTime()), null === a && (a = o);
        const e = Math.max(Math.min((o - a) / l, 1), 0),
          c = 0.5 - Math.cos(e * Math.PI) / 2;
        let u = i + c * (n - i);
        if ((d(u, n) && (u = n), t.wrapperEl.scrollTo({ [r]: u }), d(u, n)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [r]: u });
            }),
            void s.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = s.requestAnimationFrame(p);
      };
    p();
  }
  let C, k, M;
  function L() {
    return (
      C ||
        (C = (function () {
          const e = c(),
            t = a();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const n = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, n);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      C
    );
  }
  function A(e) {
    return (
      void 0 === e && (e = {}),
      k ||
        (k = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const n = L(),
            r = c(),
            s = r.navigator.platform,
            i = t || r.navigator.userAgent,
            o = { ios: !1, android: !1 },
            a = r.screen.width,
            l = r.screen.height,
            u = i.match(/(Android);?[\s\/]+([\d.]+)?/);
          let d = i.match(/(iPad).*OS\s([\d_]+)/);
          const p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === s;
          let m = "MacIntel" === s;
          return (
            !d &&
              m &&
              n.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${a}x${l}`) >= 0 &&
              ((d = i.match(/(Version)\/([\d.]+)/)),
              d || (d = [0, 1, "13_0_0"]),
              (m = !1)),
            u && !h && ((o.os = "android"), (o.android = !0)),
            (d || f || p) && ((o.os = "ios"), (o.ios = !0)),
            o
          );
        })(e)),
      k
    );
  }
  function _() {
    return (
      M ||
        (M = (function () {
          const e = c();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      M
    );
  }
  const P = {
    on(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed) return r;
      if ("function" != typeof t) return r;
      const s = n ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          r.eventsListeners[e] || (r.eventsListeners[e] = []),
            r.eventsListeners[e][s](t);
        }),
        r
      );
    },
    once(e, t, n) {
      const r = this;
      if (!r.eventsListeners || r.destroyed) return r;
      if ("function" != typeof t) return r;
      function s() {
        r.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
          i[o] = arguments[o];
        t.apply(r, i);
      }
      return (s.__emitterProxy = t), r.on(e, s, n);
    },
    onAny(e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed) return n;
      if ("function" != typeof e) return n;
      const r = t ? "unshift" : "push";
      return (
        n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const n = t.eventsAnyListeners.indexOf(e);
      return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
      const n = this;
      return !n.eventsListeners || n.destroyed
        ? n
        : n.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (n.eventsListeners[e] = [])
              : n.eventsListeners[e] &&
                n.eventsListeners[e].forEach((r, s) => {
                  (r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                    n.eventsListeners[e].splice(s, 1);
                });
          }),
          n)
        : n;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, n, r;
      for (var s = arguments.length, i = new Array(s), o = 0; o < s; o++)
        i[o] = arguments[o];
      "string" == typeof i[0] || Array.isArray(i[0])
        ? ((t = i[0]), (n = i.slice(1, i.length)), (r = e))
        : ((t = i[0].events), (n = i[0].data), (r = i[0].context || e)),
        n.unshift(r);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(r, [t, ...n]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(r, n);
              });
        }),
        e
      );
    },
  };
  const O = {
    updateSize: function () {
      const e = this;
      let t, n;
      const r = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : r[0].clientWidth),
        (n =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : r[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === n && e.isVertical()) ||
          ((t =
            t -
            parseInt(r.css("padding-left") || 0, 10) -
            parseInt(r.css("padding-right") || 0, 10)),
          (n =
            n -
            parseInt(r.css("padding-top") || 0, 10) -
            parseInt(r.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(n) && (n = 0),
          Object.assign(e, {
            width: t,
            height: n,
            size: e.isHorizontal() ? t : n,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function n(e, n) {
        return parseFloat(e.getPropertyValue(t(n)) || 0);
      }
      const r = e.params,
        { $wrapperEl: s, size: i, rtlTranslate: o, wrongRTL: a } = e,
        l = e.virtual && r.virtual.enabled,
        c = l ? e.virtual.slides.length : e.slides.length,
        u = s.children(`.${e.params.slideClass}`),
        d = l ? e.virtual.slides.length : u.length;
      let p = [];
      const f = [],
        h = [];
      let m = r.slidesOffsetBefore;
      "function" == typeof m && (m = r.slidesOffsetBefore.call(e));
      let g = r.slidesOffsetAfter;
      "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        y = e.slidesGrid.length;
      let b = r.spaceBetween,
        w = -m,
        j = 0,
        S = 0;
      if (void 0 === i) return;
      "string" == typeof b &&
        b.indexOf("%") >= 0 &&
        (b = (parseFloat(b.replace("%", "")) / 100) * i),
        (e.virtualSize = -b),
        o
          ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        r.centeredSlides &&
          r.cssMode &&
          (E(e.wrapperEl, "--swiper-centered-offset-before", ""),
          E(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const x = r.grid && r.grid.rows > 1 && e.grid;
      let T;
      x && e.grid.initSlides(d);
      const C =
        "auto" === r.slidesPerView &&
        r.breakpoints &&
        Object.keys(r.breakpoints).filter(
          (e) => void 0 !== r.breakpoints[e].slidesPerView
        ).length > 0;
      for (let s = 0; s < d; s += 1) {
        T = 0;
        const o = u.eq(s);
        if (
          (x && e.grid.updateSlide(s, o, d, t), "none" !== o.css("display"))
        ) {
          if ("auto" === r.slidesPerView) {
            C && (u[s].style[t("width")] = "");
            const i = getComputedStyle(o[0]),
              a = o[0].style.transform,
              l = o[0].style.webkitTransform;
            if (
              (a && (o[0].style.transform = "none"),
              l && (o[0].style.webkitTransform = "none"),
              r.roundLengths)
            )
              T = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
            else {
              const e = n(i, "width"),
                t = n(i, "padding-left"),
                r = n(i, "padding-right"),
                s = n(i, "margin-left"),
                a = n(i, "margin-right"),
                l = i.getPropertyValue("box-sizing");
              if (l && "border-box" === l) T = e + s + a;
              else {
                const { clientWidth: n, offsetWidth: i } = o[0];
                T = e + t + r + s + a + (i - n);
              }
            }
            a && (o[0].style.transform = a),
              l && (o[0].style.webkitTransform = l),
              r.roundLengths && (T = Math.floor(T));
          } else
            (T = (i - (r.slidesPerView - 1) * b) / r.slidesPerView),
              r.roundLengths && (T = Math.floor(T)),
              u[s] && (u[s].style[t("width")] = `${T}px`);
          u[s] && (u[s].swiperSlideSize = T),
            h.push(T),
            r.centeredSlides
              ? ((w = w + T / 2 + j / 2 + b),
                0 === j && 0 !== s && (w = w - i / 2 - b),
                0 === s && (w = w - i / 2 - b),
                Math.abs(w) < 0.001 && (w = 0),
                r.roundLengths && (w = Math.floor(w)),
                S % r.slidesPerGroup == 0 && p.push(w),
                f.push(w))
              : (r.roundLengths && (w = Math.floor(w)),
                (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                  e.params.slidesPerGroup ==
                  0 && p.push(w),
                f.push(w),
                (w = w + T + b)),
            (e.virtualSize += T + b),
            (j = T),
            (S += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, i) + g),
        o &&
          a &&
          ("slide" === r.effect || "coverflow" === r.effect) &&
          s.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
        r.setWrapperSize &&
          s.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
        x && e.grid.updateWrapperSize(T, p, t),
        !r.centeredSlides)
      ) {
        const t = [];
        for (let n = 0; n < p.length; n += 1) {
          let s = p[n];
          r.roundLengths && (s = Math.floor(s)),
            p[n] <= e.virtualSize - i && t.push(s);
        }
        (p = t),
          Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 &&
            p.push(e.virtualSize - i);
      }
      if ((0 === p.length && (p = [0]), 0 !== r.spaceBetween)) {
        const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        u.filter((e, t) => !r.cssMode || t !== u.length - 1).css({
          [n]: `${b}px`,
        });
      }
      if (r.centeredSlides && r.centeredSlidesBounds) {
        let e = 0;
        h.forEach((t) => {
          e += t + (r.spaceBetween ? r.spaceBetween : 0);
        }),
          (e -= r.spaceBetween);
        const t = e - i;
        p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
      }
      if (r.centerInsufficientSlides) {
        let e = 0;
        if (
          (h.forEach((t) => {
            e += t + (r.spaceBetween ? r.spaceBetween : 0);
          }),
          (e -= r.spaceBetween),
          e < i)
        ) {
          const t = (i - e) / 2;
          p.forEach((e, n) => {
            p[n] = e - t;
          }),
            f.forEach((e, n) => {
              f[n] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: u,
          snapGrid: p,
          slidesGrid: f,
          slidesSizesGrid: h,
        }),
        r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
      ) {
        E(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
          E(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - h[h.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          n = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + n));
      }
      if (
        (d !== c && e.emit("slidesLengthChange"),
        p.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        f.length !== y && e.emit("slidesGridLengthChange"),
        r.watchSlidesProgress && e.updateSlidesOffset(),
        !(l || r.cssMode || ("slide" !== r.effect && "fade" !== r.effect)))
      ) {
        const t = `${r.containerModifierClass}backface-hidden`,
          n = e.$el.hasClass(t);
        d <= r.maxBackfaceHiddenSlides
          ? n || e.$el.addClass(t)
          : n && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        n = [],
        r = t.virtual && t.params.virtual.enabled;
      let s,
        i = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const o = (e) =>
        r
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || v([])).each((e) => {
            n.push(e);
          });
        else
          for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
            const e = t.activeIndex + s;
            if (e > t.slides.length && !r) break;
            n.push(o(e));
          }
      else n.push(o(t.activeIndex));
      for (s = 0; s < n.length; s += 1)
        if (void 0 !== n[s]) {
          const e = n[s].offsetHeight;
          i = e > i ? e : i;
        }
      (i || 0 === i) && t.$wrapperEl.css("height", `${i}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let n = 0; n < t.length; n += 1)
        t[n].swiperSlideOffset = e.isHorizontal()
          ? t[n].offsetLeft
          : t[n].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        n = t.params,
        { slides: r, rtlTranslate: s, snapGrid: i } = t;
      if (0 === r.length) return;
      void 0 === r[0].swiperSlideOffset && t.updateSlidesOffset();
      let o = -e;
      s && (o = e),
        r.removeClass(n.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < r.length; e += 1) {
        const a = r[e];
        let l = a.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
        const c =
            (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + n.spaceBetween),
          u =
            (o - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + n.spaceBetween),
          d = -(o - l),
          p = d + t.slidesSizesGrid[e];
        ((d >= 0 && d < t.size - 1) ||
          (p > 1 && p <= t.size) ||
          (d <= 0 && p >= t.size)) &&
          (t.visibleSlides.push(a),
          t.visibleSlidesIndexes.push(e),
          r.eq(e).addClass(n.slideVisibleClass)),
          (a.progress = s ? -c : c),
          (a.originalProgress = s ? -u : u);
      }
      t.visibleSlides = v(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const n = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * n) || 0;
      }
      const n = t.params,
        r = t.maxTranslate() - t.minTranslate();
      let { progress: s, isBeginning: i, isEnd: o } = t;
      const a = i,
        l = o;
      0 === r
        ? ((s = 0), (i = !0), (o = !0))
        : ((s = (e - t.minTranslate()) / r), (i = s <= 0), (o = s >= 1)),
        Object.assign(t, { progress: s, isBeginning: i, isEnd: o }),
        (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
          t.updateSlidesProgress(e),
        i && !a && t.emit("reachBeginning toEdge"),
        o && !l && t.emit("reachEnd toEdge"),
        ((a && !i) || (l && !o)) && t.emit("fromEdge"),
        t.emit("progress", s);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: n,
          $wrapperEl: r,
          activeIndex: s,
          realIndex: i,
        } = e,
        o = e.virtual && n.virtual.enabled;
      let a;
      t.removeClass(
        `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
      ),
        (a = o
          ? e.$wrapperEl.find(
              `.${n.slideClass}[data-swiper-slide-index="${s}"]`
            )
          : t.eq(s)),
        a.addClass(n.slideActiveClass),
        n.loop &&
          (a.hasClass(n.slideDuplicateClass)
            ? r
                .children(
                  `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${i}"]`
                )
                .addClass(n.slideDuplicateActiveClass)
            : r
                .children(
                  `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${i}"]`
                )
                .addClass(n.slideDuplicateActiveClass));
      let l = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
      n.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(n.slideNextClass));
      let c = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
      n.loop &&
        0 === c.length &&
        ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
        n.loop &&
          (l.hasClass(n.slideDuplicateClass)
            ? r
                .children(
                  `.${n.slideClass}:not(.${
                    n.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicateNextClass)
            : r
                .children(
                  `.${n.slideClass}.${
                    n.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicateNextClass),
          c.hasClass(n.slideDuplicateClass)
            ? r
                .children(
                  `.${n.slideClass}:not(.${
                    n.slideDuplicateClass
                  })[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicatePrevClass)
            : r
                .children(
                  `.${n.slideClass}.${
                    n.slideDuplicateClass
                  }[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(n.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        n = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: r,
          snapGrid: s,
          params: i,
          activeIndex: o,
          realIndex: a,
          snapIndex: l,
        } = t;
      let c,
        u = e;
      if (void 0 === u) {
        for (let e = 0; e < r.length; e += 1)
          void 0 !== r[e + 1]
            ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2
              ? (u = e)
              : n >= r[e] && n < r[e + 1] && (u = e + 1)
            : n >= r[e] && (u = e);
        i.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
      }
      if (s.indexOf(n) >= 0) c = s.indexOf(n);
      else {
        const e = Math.min(i.slidesPerGroupSkip, u);
        c = e + Math.floor((u - e) / i.slidesPerGroup);
      }
      if ((c >= s.length && (c = s.length - 1), u === o))
        return void (c !== l && ((t.snapIndex = c), t.emit("snapIndexChange")));
      const d = parseInt(
        t.slides.eq(u).attr("data-swiper-slide-index") || u,
        10
      );
      Object.assign(t, {
        snapIndex: c,
        realIndex: d,
        previousIndex: o,
        activeIndex: u,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        a !== d && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        n = t.params,
        r = v(e).closest(`.${n.slideClass}`)[0];
      let s,
        i = !1;
      if (r)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === r) {
            (i = !0), (s = e);
            break;
          }
      if (!r || !i)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = r),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              v(r).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = s),
        n.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const $ = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: n, translate: r, $wrapperEl: s } = this;
      if (t.virtualTranslate) return n ? -r : r;
      if (t.cssMode) return r;
      let i = w(s[0], e);
      return n && (i = -i), i || 0;
    },
    setTranslate: function (e, t) {
      const n = this,
        {
          rtlTranslate: r,
          params: s,
          $wrapperEl: i,
          wrapperEl: o,
          progress: a,
        } = n;
      let l,
        c = 0,
        u = 0;
      n.isHorizontal() ? (c = r ? -e : e) : (u = e),
        s.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
        s.cssMode
          ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
              ? -c
              : -u)
          : s.virtualTranslate ||
            i.transform(`translate3d(${c}px, ${u}px, 0px)`),
        (n.previousTranslate = n.translate),
        (n.translate = n.isHorizontal() ? c : u);
      const d = n.maxTranslate() - n.minTranslate();
      (l = 0 === d ? 0 : (e - n.minTranslate()) / d),
        l !== a && n.updateProgress(e),
        n.emit("setTranslate", n.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, n, r, s) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === n && (n = !0),
        void 0 === r && (r = !0);
      const i = this,
        { params: o, wrapperEl: a } = i;
      if (i.animating && o.preventInteractionOnTransition) return !1;
      const l = i.minTranslate(),
        c = i.maxTranslate();
      let u;
      if (
        ((u = r && e > l ? l : r && e < c ? c : e),
        i.updateProgress(u),
        o.cssMode)
      ) {
        const e = i.isHorizontal();
        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -u;
        else {
          if (!i.support.smoothScroll)
            return (
              T({ swiper: i, targetPosition: -u, side: e ? "left" : "top" }), !0
            );
          a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (i.setTransition(0),
            i.setTranslate(u),
            n &&
              (i.emit("beforeTransitionStart", t, s), i.emit("transitionEnd")))
          : (i.setTransition(t),
            i.setTranslate(u),
            n &&
              (i.emit("beforeTransitionStart", t, s),
              i.emit("transitionStart")),
            i.animating ||
              ((i.animating = !0),
              i.onTranslateToWrapperTransitionEnd ||
                (i.onTranslateToWrapperTransitionEnd = function (e) {
                  i &&
                    !i.destroyed &&
                    e.target === this &&
                    (i.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      i.onTranslateToWrapperTransitionEnd
                    ),
                    i.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      i.onTranslateToWrapperTransitionEnd
                    ),
                    (i.onTranslateToWrapperTransitionEnd = null),
                    delete i.onTranslateToWrapperTransitionEnd,
                    n && i.emit("transitionEnd"));
                }),
              i.$wrapperEl[0].addEventListener(
                "transitionend",
                i.onTranslateToWrapperTransitionEnd
              ),
              i.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                i.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function I(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: s } = e;
    const { activeIndex: i, previousIndex: o } = t;
    let a = r;
    if (
      (a || (a = i > o ? "next" : i < o ? "prev" : "reset"),
      t.emit(`transition${s}`),
      n && i !== o)
    ) {
      if ("reset" === a) return void t.emit(`slideResetTransition${s}`);
      t.emit(`slideChangeTransition${s}`),
        "next" === a
          ? t.emit(`slideNextTransition${s}`)
          : t.emit(`slidePrevTransition${s}`);
    }
  }
  const z = {
    slideTo: function (e, t, n, r, s) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === n && (n = !0),
        "number" != typeof e && "string" != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const i = this;
      let o = e;
      o < 0 && (o = 0);
      const {
        params: a,
        snapGrid: l,
        slidesGrid: c,
        previousIndex: u,
        activeIndex: d,
        rtlTranslate: p,
        wrapperEl: f,
        enabled: h,
      } = i;
      if ((i.animating && a.preventInteractionOnTransition) || (!h && !r && !s))
        return !1;
      const m = Math.min(i.params.slidesPerGroupSkip, o);
      let g = m + Math.floor((o - m) / i.params.slidesPerGroup);
      g >= l.length && (g = l.length - 1),
        (d || a.initialSlide || 0) === (u || 0) &&
          n &&
          i.emit("beforeSlideChangeStart");
      const v = -l[g];
      if ((i.updateProgress(v), a.normalizeSlideIndex))
        for (let e = 0; e < c.length; e += 1) {
          const t = -Math.floor(100 * v),
            n = Math.floor(100 * c[e]),
            r = Math.floor(100 * c[e + 1]);
          void 0 !== c[e + 1]
            ? t >= n && t < r - (r - n) / 2
              ? (o = e)
              : t >= n && t < r && (o = e + 1)
            : t >= n && (o = e);
        }
      if (i.initialized && o !== d) {
        if (!i.allowSlideNext && v < i.translate && v < i.minTranslate())
          return !1;
        if (
          !i.allowSlidePrev &&
          v > i.translate &&
          v > i.maxTranslate() &&
          (d || 0) !== o
        )
          return !1;
      }
      let y;
      if (
        ((y = o > d ? "next" : o < d ? "prev" : "reset"),
        (p && -v === i.translate) || (!p && v === i.translate))
      )
        return (
          i.updateActiveIndex(o),
          a.autoHeight && i.updateAutoHeight(),
          i.updateSlidesClasses(),
          "slide" !== a.effect && i.setTranslate(v),
          "reset" !== y && (i.transitionStart(n, y), i.transitionEnd(n, y)),
          !1
        );
      if (a.cssMode) {
        const e = i.isHorizontal(),
          n = p ? v : -v;
        if (0 === t) {
          const t = i.virtual && i.params.virtual.enabled;
          t &&
            ((i.wrapperEl.style.scrollSnapType = "none"),
            (i._immediateVirtual = !0)),
            (f[e ? "scrollLeft" : "scrollTop"] = n),
            t &&
              requestAnimationFrame(() => {
                (i.wrapperEl.style.scrollSnapType = ""),
                  (i._swiperImmediateVirtual = !1);
              });
        } else {
          if (!i.support.smoothScroll)
            return (
              T({ swiper: i, targetPosition: n, side: e ? "left" : "top" }), !0
            );
          f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
        }
        return !0;
      }
      return (
        i.setTransition(t),
        i.setTranslate(v),
        i.updateActiveIndex(o),
        i.updateSlidesClasses(),
        i.emit("beforeTransitionStart", t, r),
        i.transitionStart(n, y),
        0 === t
          ? i.transitionEnd(n, y)
          : i.animating ||
            ((i.animating = !0),
            i.onSlideToWrapperTransitionEnd ||
              (i.onSlideToWrapperTransitionEnd = function (e) {
                i &&
                  !i.destroyed &&
                  e.target === this &&
                  (i.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    i.onSlideToWrapperTransitionEnd
                  ),
                  i.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    i.onSlideToWrapperTransitionEnd
                  ),
                  (i.onSlideToWrapperTransitionEnd = null),
                  delete i.onSlideToWrapperTransitionEnd,
                  i.transitionEnd(n, y));
              }),
            i.$wrapperEl[0].addEventListener(
              "transitionend",
              i.onSlideToWrapperTransitionEnd
            ),
            i.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              i.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, n, r) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === n && (n = !0),
        "string" == typeof e)
      ) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const s = this;
      let i = e;
      return s.params.loop && (i += s.loopedSlides), s.slideTo(i, t, n, r);
    },
    slideNext: function (e, t, n) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const r = this,
        { animating: s, enabled: i, params: o } = r;
      if (!i) return r;
      let a = o.slidesPerGroup;
      "auto" === o.slidesPerView &&
        1 === o.slidesPerGroup &&
        o.slidesPerGroupAuto &&
        (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
      const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a;
      if (o.loop) {
        if (s && o.loopPreventsSlide) return !1;
        r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
      }
      return o.rewind && r.isEnd
        ? r.slideTo(0, e, t, n)
        : r.slideTo(r.activeIndex + l, e, t, n);
    },
    slidePrev: function (e, t, n) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const r = this,
        {
          params: s,
          animating: i,
          snapGrid: o,
          slidesGrid: a,
          rtlTranslate: l,
          enabled: c,
        } = r;
      if (!c) return r;
      if (s.loop) {
        if (i && s.loopPreventsSlide) return !1;
        r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
      }
      function u(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const d = u(l ? r.translate : -r.translate),
        p = o.map((e) => u(e));
      let f = o[p.indexOf(d) - 1];
      if (void 0 === f && s.cssMode) {
        let e;
        o.forEach((t, n) => {
          d >= t && (e = n);
        }),
          void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
      }
      let h = 0;
      if (
        (void 0 !== f &&
          ((h = a.indexOf(f)),
          h < 0 && (h = r.activeIndex - 1),
          "auto" === s.slidesPerView &&
            1 === s.slidesPerGroup &&
            s.slidesPerGroupAuto &&
            ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
            (h = Math.max(h, 0)))),
        s.rewind && r.isBeginning)
      ) {
        const s =
          r.params.virtual && r.params.virtual.enabled && r.virtual
            ? r.virtual.slides.length - 1
            : r.slides.length - 1;
        return r.slideTo(s, e, t, n);
      }
      return r.slideTo(h, e, t, n);
    },
    slideReset: function (e, t, n) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, n)
      );
    },
    slideToClosest: function (e, t, n, r) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === r && (r = 0.5);
      const s = this;
      let i = s.activeIndex;
      const o = Math.min(s.params.slidesPerGroupSkip, i),
        a = o + Math.floor((i - o) / s.params.slidesPerGroup),
        l = s.rtlTranslate ? s.translate : -s.translate;
      if (l >= s.snapGrid[a]) {
        const e = s.snapGrid[a];
        l - e > (s.snapGrid[a + 1] - e) * r && (i += s.params.slidesPerGroup);
      } else {
        const e = s.snapGrid[a - 1];
        l - e <= (s.snapGrid[a] - e) * r && (i -= s.params.slidesPerGroup);
      }
      return (
        (i = Math.max(i, 0)),
        (i = Math.min(i, s.slidesGrid.length - 1)),
        s.slideTo(i, e, t, n)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: n } = e,
        r =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let s,
        i = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (s = parseInt(v(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? i < e.loopedSlides - r / 2 ||
              i > e.slides.length - e.loopedSlides + r / 2
              ? (e.loopFix(),
                (i = n
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                y(() => {
                  e.slideTo(i);
                }))
              : e.slideTo(i)
            : i > e.slides.length - r
            ? (e.loopFix(),
              (i = n
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              y(() => {
                e.slideTo(i);
              }))
            : e.slideTo(i);
      } else e.slideTo(i);
    },
  };
  const q = {
    loopCreate: function () {
      const e = this,
        t = a(),
        { params: n, $wrapperEl: r } = e,
        s = r.children().length > 0 ? v(r.children()[0].parentNode) : r;
      s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
      let i = s.children(`.${n.slideClass}`);
      if (n.loopFillGroupWithBlank) {
        const e = n.slidesPerGroup - (i.length % n.slidesPerGroup);
        if (e !== n.slidesPerGroup) {
          for (let r = 0; r < e; r += 1) {
            const e = v(t.createElement("div")).addClass(
              `${n.slideClass} ${n.slideBlankClass}`
            );
            s.append(e);
          }
          i = s.children(`.${n.slideClass}`);
        }
      }
      "auto" !== n.slidesPerView ||
        n.loopedSlides ||
        (n.loopedSlides = i.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(n.loopedSlides || n.slidesPerView, 10)
        )),
        (e.loopedSlides += n.loopAdditionalSlides),
        e.loopedSlides > i.length &&
          e.params.loopedSlidesLimit &&
          (e.loopedSlides = i.length);
      const o = [],
        l = [];
      i.each((e, t) => {
        v(e).attr("data-swiper-slide-index", t);
      });
      for (let t = 0; t < e.loopedSlides; t += 1) {
        const e = t - Math.floor(t / i.length) * i.length;
        l.push(i.eq(e)[0]), o.unshift(i.eq(i.length - e - 1)[0]);
      }
      for (let e = 0; e < l.length; e += 1)
        s.append(v(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
      for (let e = o.length - 1; e >= 0; e -= 1)
        s.prepend(v(o[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: n,
        loopedSlides: r,
        allowSlidePrev: s,
        allowSlideNext: i,
        snapGrid: o,
        rtlTranslate: a,
      } = e;
      let l;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const c = -o[t] - e.getTranslate();
      if (t < r) {
        (l = n.length - 3 * r + t), (l += r);
        e.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((a ? -e.translate : e.translate) - c);
      } else if (t >= n.length - r) {
        (l = -n.length + t + r), (l += r);
        e.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((a ? -e.translate : e.translate) - c);
      }
      (e.allowSlidePrev = s), (e.allowSlideNext = i), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: n } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        n.removeAttr("data-swiper-slide-index");
    },
  };
  function N(e) {
    const t = this,
      n = a(),
      r = c(),
      s = t.touchEventsData,
      { params: i, touches: o, enabled: l } = t;
    if (!l) return;
    if (t.animating && i.preventInteractionOnTransition) return;
    !t.animating && i.cssMode && i.loop && t.loopFix();
    let u = e;
    u.originalEvent && (u = u.originalEvent);
    let d = v(u.target);
    if ("wrapper" === i.touchEventsTarget && !d.closest(t.wrapperEl).length)
      return;
    if (
      ((s.isTouchEvent = "touchstart" === u.type),
      !s.isTouchEvent && "which" in u && 3 === u.which)
    )
      return;
    if (!s.isTouchEvent && "button" in u && u.button > 0) return;
    if (s.isTouched && s.isMoved) return;
    !!i.noSwipingClass &&
      "" !== i.noSwipingClass &&
      u.target &&
      u.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (d = v(e.path[0]));
    const p = i.noSwipingSelector
        ? i.noSwipingSelector
        : `.${i.noSwipingClass}`,
      f = !(!u.target || !u.target.shadowRoot);
    if (
      i.noSwiping &&
      (f
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(n) {
                if (!n || n === a() || n === c()) return null;
                n.assignedSlot && (n = n.assignedSlot);
                const r = n.closest(e);
                return r || n.getRootNode ? r || t(n.getRootNode().host) : null;
              })(t)
            );
          })(p, d[0])
        : d.closest(p)[0])
    )
      return void (t.allowClick = !0);
    if (i.swipeHandler && !d.closest(i.swipeHandler)[0]) return;
    (o.currentX = "touchstart" === u.type ? u.targetTouches[0].pageX : u.pageX),
      (o.currentY =
        "touchstart" === u.type ? u.targetTouches[0].pageY : u.pageY);
    const h = o.currentX,
      m = o.currentY,
      g = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
      y = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
    if (g && (h <= y || h >= r.innerWidth - y)) {
      if ("prevent" !== g) return;
      e.preventDefault();
    }
    if (
      (Object.assign(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (o.startX = h),
      (o.startY = m),
      (s.touchStartTime = b()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      i.threshold > 0 && (s.allowThresholdMove = !1),
      "touchstart" !== u.type)
    ) {
      let e = !0;
      d.is(s.focusableElements) &&
        ((e = !1), "SELECT" === d[0].nodeName && (s.isTouched = !1)),
        n.activeElement &&
          v(n.activeElement).is(s.focusableElements) &&
          n.activeElement !== d[0] &&
          n.activeElement.blur();
      const r = e && t.allowTouchMove && i.touchStartPreventDefault;
      (!i.touchStartForcePreventDefault && !r) ||
        d[0].isContentEditable ||
        u.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !i.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", u);
  }
  function D(e) {
    const t = a(),
      n = this,
      r = n.touchEventsData,
      { params: s, touches: i, rtlTranslate: o, enabled: l } = n;
    if (!l) return;
    let c = e;
    if ((c.originalEvent && (c = c.originalEvent), !r.isTouched))
      return void (
        r.startMoving &&
        r.isScrolling &&
        n.emit("touchMoveOpposite", c)
      );
    if (r.isTouchEvent && "touchmove" !== c.type) return;
    const u =
        "touchmove" === c.type &&
        c.targetTouches &&
        (c.targetTouches[0] || c.changedTouches[0]),
      d = "touchmove" === c.type ? u.pageX : c.pageX,
      p = "touchmove" === c.type ? u.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return (i.startX = d), void (i.startY = p);
    if (!n.allowTouchMove)
      return (
        v(c.target).is(r.focusableElements) || (n.allowClick = !1),
        void (
          r.isTouched &&
          (Object.assign(i, { startX: d, startY: p, currentX: d, currentY: p }),
          (r.touchStartTime = b()))
        )
      );
    if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
      if (n.isVertical()) {
        if (
          (p < i.startY && n.translate <= n.maxTranslate()) ||
          (p > i.startY && n.translate >= n.minTranslate())
        )
          return (r.isTouched = !1), void (r.isMoved = !1);
      } else if (
        (d < i.startX && n.translate <= n.maxTranslate()) ||
        (d > i.startX && n.translate >= n.minTranslate())
      )
        return;
    if (
      r.isTouchEvent &&
      t.activeElement &&
      c.target === t.activeElement &&
      v(c.target).is(r.focusableElements)
    )
      return (r.isMoved = !0), void (n.allowClick = !1);
    if (
      (r.allowTouchCallbacks && n.emit("touchMove", c),
      c.targetTouches && c.targetTouches.length > 1)
    )
      return;
    (i.currentX = d), (i.currentY = p);
    const f = i.currentX - i.startX,
      h = i.currentY - i.startY;
    if (n.params.threshold && Math.sqrt(f ** 2 + h ** 2) < n.params.threshold)
      return;
    if (void 0 === r.isScrolling) {
      let e;
      (n.isHorizontal() && i.currentY === i.startY) ||
      (n.isVertical() && i.currentX === i.startX)
        ? (r.isScrolling = !1)
        : f * f + h * h >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
          (r.isScrolling = n.isHorizontal()
            ? e > s.touchAngle
            : 90 - e > s.touchAngle));
    }
    if (
      (r.isScrolling && n.emit("touchMoveOpposite", c),
      void 0 === r.startMoving &&
        ((i.currentX === i.startX && i.currentY === i.startY) ||
          (r.startMoving = !0)),
      r.isScrolling)
    )
      return void (r.isTouched = !1);
    if (!r.startMoving) return;
    (n.allowClick = !1),
      !s.cssMode && c.cancelable && c.preventDefault(),
      s.touchMoveStopPropagation && !s.nested && c.stopPropagation(),
      r.isMoved ||
        (s.loop && !s.cssMode && n.loopFix(),
        (r.startTranslate = n.getTranslate()),
        n.setTransition(0),
        n.animating &&
          n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (r.allowMomentumBounce = !1),
        !s.grabCursor ||
          (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
          n.setGrabCursor(!0),
        n.emit("sliderFirstMove", c)),
      n.emit("sliderMove", c),
      (r.isMoved = !0);
    let m = n.isHorizontal() ? f : h;
    (i.diff = m),
      (m *= s.touchRatio),
      o && (m = -m),
      (n.swipeDirection = m > 0 ? "prev" : "next"),
      (r.currentTranslate = m + r.startTranslate);
    let g = !0,
      y = s.resistanceRatio;
    if (
      (s.touchReleaseOnEdges && (y = 0),
      m > 0 && r.currentTranslate > n.minTranslate()
        ? ((g = !1),
          s.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + m) ** y))
        : m < 0 &&
          r.currentTranslate < n.maxTranslate() &&
          ((g = !1),
          s.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - m) ** y)),
      g && (c.preventedByNestedSwiper = !0),
      !n.allowSlideNext &&
        "next" === n.swipeDirection &&
        r.currentTranslate < r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      !n.allowSlidePrev &&
        "prev" === n.swipeDirection &&
        r.currentTranslate > r.startTranslate &&
        (r.currentTranslate = r.startTranslate),
      n.allowSlidePrev ||
        n.allowSlideNext ||
        (r.currentTranslate = r.startTranslate),
      s.threshold > 0)
    ) {
      if (!(Math.abs(m) > s.threshold || r.allowThresholdMove))
        return void (r.currentTranslate = r.startTranslate);
      if (!r.allowThresholdMove)
        return (
          (r.allowThresholdMove = !0),
          (i.startX = i.currentX),
          (i.startY = i.currentY),
          (r.currentTranslate = r.startTranslate),
          void (i.diff = n.isHorizontal()
            ? i.currentX - i.startX
            : i.currentY - i.startY)
        );
    }
    s.followFinger &&
      !s.cssMode &&
      (((s.freeMode && s.freeMode.enabled && n.freeMode) ||
        s.watchSlidesProgress) &&
        (n.updateActiveIndex(), n.updateSlidesClasses()),
      n.params.freeMode &&
        s.freeMode.enabled &&
        n.freeMode &&
        n.freeMode.onTouchMove(),
      n.updateProgress(r.currentTranslate),
      n.setTranslate(r.currentTranslate));
  }
  function B(e) {
    const t = this,
      n = t.touchEventsData,
      { params: r, touches: s, rtlTranslate: i, slidesGrid: o, enabled: a } = t;
    if (!a) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      n.allowTouchCallbacks && t.emit("touchEnd", l),
      (n.allowTouchCallbacks = !1),
      !n.isTouched)
    )
      return (
        n.isMoved && r.grabCursor && t.setGrabCursor(!1),
        (n.isMoved = !1),
        void (n.startMoving = !1)
      );
    r.grabCursor &&
      n.isMoved &&
      n.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = b(),
      u = c - n.touchStartTime;
    if (t.allowClick) {
      const e = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((e && e[0]) || l.target),
        t.emit("tap click", l),
        u < 300 &&
          c - n.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((n.lastClickTime = b()),
      y(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !n.isTouched ||
        !n.isMoved ||
        !t.swipeDirection ||
        0 === s.diff ||
        n.currentTranslate === n.startTranslate)
    )
      return (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1);
    let d;
    if (
      ((n.isTouched = !1),
      (n.isMoved = !1),
      (n.startMoving = !1),
      (d = r.followFinger
        ? i
          ? t.translate
          : -t.translate
        : -n.currentTranslate),
      r.cssMode)
    )
      return;
    if (t.params.freeMode && r.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: d });
    let p = 0,
      f = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
    ) {
      const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      void 0 !== o[e + t]
        ? d >= o[e] && d < o[e + t] && ((p = e), (f = o[e + t] - o[e]))
        : d >= o[e] && ((p = e), (f = o[o.length - 1] - o[o.length - 2]));
    }
    let h = null,
      m = null;
    r.rewind &&
      (t.isBeginning
        ? (m =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (h = 0));
    const g = (d - o[p]) / f,
      v = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (u > r.longSwipesMs) {
      if (!r.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (g >= r.longSwipesRatio
          ? t.slideTo(r.rewind && t.isEnd ? h : p + v)
          : t.slideTo(p)),
        "prev" === t.swipeDirection &&
          (g > 1 - r.longSwipesRatio
            ? t.slideTo(p + v)
            : null !== m && g < 0 && Math.abs(g) > r.longSwipesRatio
            ? t.slideTo(m)
            : t.slideTo(p));
    } else {
      if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(p + v)
          : t.slideTo(p)
        : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v),
          "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
    }
  }
  function R() {
    const e = this,
      { params: t, el: n } = e;
    if (n && 0 === n.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: s, snapGrid: i } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = s),
      (e.allowSlideNext = r),
      e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
  }
  function G(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function F() {
    const e = this,
      { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r) return;
    let s;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const i = e.maxTranslate() - e.minTranslate();
    (s = 0 === i ? 0 : (e.translate - e.minTranslate()) / i),
      s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let W = !1;
  function H() {}
  const V = (e, t) => {
    const n = a(),
      {
        params: r,
        touchEvents: s,
        el: i,
        wrapperEl: o,
        device: l,
        support: c,
      } = e,
      u = !!r.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    if (c.touch) {
      const t = !(
        "touchstart" !== s.start ||
        !c.passiveListener ||
        !r.passiveListeners
      ) && { passive: !0, capture: !1 };
      i[d](s.start, e.onTouchStart, t),
        i[d](
          s.move,
          e.onTouchMove,
          c.passiveListener ? { passive: !1, capture: u } : u
        ),
        i[d](s.end, e.onTouchEnd, t),
        s.cancel && i[d](s.cancel, e.onTouchEnd, t);
    } else
      i[d](s.start, e.onTouchStart, !1),
        n[d](s.move, e.onTouchMove, u),
        n[d](s.end, e.onTouchEnd, !1);
    (r.preventClicks || r.preventClicksPropagation) &&
      i[d]("click", e.onClick, !0),
      r.cssMode && o[d]("scroll", e.onScroll),
      r.updateOnWindowResize
        ? e[p](
            l.ios || l.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            R,
            !0
          )
        : e[p]("observerUpdate", R, !0);
  };
  const U = {
      attachEvents: function () {
        const e = this,
          t = a(),
          { params: n, support: r } = e;
        (e.onTouchStart = N.bind(e)),
          (e.onTouchMove = D.bind(e)),
          (e.onTouchEnd = B.bind(e)),
          n.cssMode && (e.onScroll = F.bind(e)),
          (e.onClick = G.bind(e)),
          r.touch && !W && (t.addEventListener("touchstart", H), (W = !0)),
          V(e, "on");
      },
      detachEvents: function () {
        V(this, "off");
      },
    },
    X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const Y = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: n,
          loopedSlides: r = 0,
          params: s,
          $el: i,
        } = e,
        o = s.breakpoints;
      if (!o || (o && 0 === Object.keys(o).length)) return;
      const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
      if (!a || e.currentBreakpoint === a) return;
      const l = (a in o ? o[a] : void 0) || e.originalParams,
        c = X(e, s),
        u = X(e, l),
        d = s.enabled;
      c && !u
        ? (i.removeClass(
            `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !c &&
          u &&
          (i.addClass(`${s.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === s.grid.fill)) &&
            i.addClass(`${s.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach((t) => {
          const n = s[t] && s[t].enabled,
            r = l[t] && l[t].enabled;
          n && !r && e[t].disable(), !n && r && e[t].enable();
        });
      const p = l.direction && l.direction !== s.direction,
        f = s.loop && (l.slidesPerView !== s.slidesPerView || p);
      p && n && e.changeDirection(), x(e.params, l);
      const h = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        d && !h ? e.disable() : !d && h && e.enable(),
        (e.currentBreakpoint = a),
        e.emit("_beforeBreakpoint", l),
        f &&
          n &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - r + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t, n) {
      if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
        return;
      let r = !1;
      const s = c(),
        i = "window" === t ? s.innerHeight : n.clientHeight,
        o = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: i * t, point: e };
          }
          return { value: e, point: e };
        });
      o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < o.length; e += 1) {
        const { point: i, value: a } = o[e];
        "window" === t
          ? s.matchMedia(`(min-width: ${a}px)`).matches && (r = i)
          : a <= n.clientWidth && (r = i);
      }
      return r || "max";
    },
  };
  const K = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: n, rtl: r, $el: s, device: i, support: o } = e,
        a = (function (e, t) {
          const n = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((r) => {
                    e[r] && n.push(t + r);
                  })
                : "string" == typeof e && n.push(t + e);
            }),
            n
          );
        })(
          [
            "initialized",
            n.direction,
            { "pointer-events": !o.touch },
            { "free-mode": e.params.freeMode && n.freeMode.enabled },
            { autoheight: n.autoHeight },
            { rtl: r },
            { grid: n.grid && n.grid.rows > 1 },
            {
              "grid-column":
                n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
            },
            { android: i.android },
            { ios: i.ios },
            { "css-mode": n.cssMode },
            { centered: n.cssMode && n.centeredSlides },
            { "watch-progress": n.watchSlidesProgress },
          ],
          n.containerModifierClass
        );
      t.push(...a), s.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const J = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function Z(e, t) {
    return function (n) {
      void 0 === n && (n = {});
      const r = Object.keys(n)[0],
        s = n[r];
      "object" == typeof s && null !== s
        ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
            !0 === e[r] &&
            (e[r] = { auto: !0 }),
          r in e && "enabled" in s
            ? (!0 === e[r] && (e[r] = { enabled: !0 }),
              "object" != typeof e[r] ||
                "enabled" in e[r] ||
                (e[r].enabled = !0),
              e[r] || (e[r] = { enabled: !1 }),
              x(t, n))
            : x(t, n))
        : x(t, n);
    };
  }
  const Q = {
      eventsEmitter: P,
      update: O,
      translate: $,
      transition: {
        setTransition: function (e, t) {
          const n = this;
          n.params.cssMode || n.$wrapperEl.transition(e),
            n.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: r } = n;
          r.cssMode ||
            (r.autoHeight && n.updateAutoHeight(),
            I({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const n = this,
            { params: r } = n;
          (n.animating = !1),
            r.cssMode ||
              (n.setTransition(0),
              I({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: z,
      loop: q,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const n =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (n.style.cursor = "move"), (n.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: U,
      breakpoints: Y,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: n } = e,
            { slidesOffsetBefore: r } = n;
          if (r) {
            const t = e.slides.length - 1,
              n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
            e.isLocked = e.size > n;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: K,
      images: {
        loadImage: function (e, t, n, r, s, i) {
          const o = c();
          let a;
          function l() {
            i && i();
          }
          v(e).parent("picture")[0] || (e.complete && s)
            ? l()
            : t
            ? ((a = new o.Image()),
              (a.onload = l),
              (a.onerror = l),
              r && (a.sizes = r),
              n && (a.srcset = n),
              t && (a.src = t))
            : l();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let n = 0; n < e.imagesToLoad.length; n += 1) {
            const r = e.imagesToLoad[n];
            e.loadImage(
              r,
              r.currentSrc || r.getAttribute("src"),
              r.srcset || r.getAttribute("srcset"),
              r.sizes || r.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    ee = {};
  class te {
    constructor() {
      let e, t;
      for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
        r[s] = arguments[s];
      if (
        (1 === r.length &&
        r[0].constructor &&
        "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
          ? (t = r[0])
          : ([e, t] = r),
        t || (t = {}),
        (t = x({}, t)),
        e && !t.el && (t.el = e),
        t.el && v(t.el).length > 1)
      ) {
        const e = [];
        return (
          v(t.el).each((n) => {
            const r = x({}, t, { el: n });
            e.push(new te(r));
          }),
          e
        );
      }
      const i = this;
      (i.__swiper__ = !0),
        (i.support = L()),
        (i.device = A({ userAgent: t.userAgent })),
        (i.browser = _()),
        (i.eventsListeners = {}),
        (i.eventsAnyListeners = []),
        (i.modules = [...i.__modules__]),
        t.modules && Array.isArray(t.modules) && i.modules.push(...t.modules);
      const o = {};
      i.modules.forEach((e) => {
        e({
          swiper: i,
          extendParams: Z(t, o),
          on: i.on.bind(i),
          once: i.once.bind(i),
          off: i.off.bind(i),
          emit: i.emit.bind(i),
        });
      });
      const a = x({}, J, o);
      return (
        (i.params = x({}, a, ee, t)),
        (i.originalParams = x({}, i.params)),
        (i.passedParams = x({}, t)),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach((e) => {
            i.on(e, i.params.on[e]);
          }),
        i.params && i.params.onAny && i.onAny(i.params.onAny),
        (i.$ = v),
        Object.assign(i, {
          enabled: i.params.enabled,
          el: e,
          classNames: [],
          slides: v(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === i.params.direction,
          isVertical: () => "vertical" === i.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: i.params.allowSlideNext,
          allowSlidePrev: i.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (i.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (i.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              i.support.touch || !i.params.simulateTouch
                ? i.touchEventsTouch
                : i.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: i.params.focusableElements,
            lastClickTime: b(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: i.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        i.emit("_swiper"),
        i.params.init && i.init(),
        i
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const n = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = n.minTranslate(),
        s = (n.maxTranslate() - r) * e + r;
      n.translateTo(s, void 0 === t ? 0 : t),
        n.updateActiveIndex(),
        n.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((n) => {
        const r = e.getSlideClasses(n);
        t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: n,
        slides: r,
        slidesGrid: s,
        slidesSizesGrid: i,
        size: o,
        activeIndex: a,
      } = this;
      let l = 1;
      if (n.centeredSlides) {
        let e,
          t = r[a].swiperSlideSize;
        for (let n = a + 1; n < r.length; n += 1)
          r[n] &&
            !e &&
            ((t += r[n].swiperSlideSize), (l += 1), t > o && (e = !0));
        for (let n = a - 1; n >= 0; n -= 1)
          r[n] &&
            !e &&
            ((t += r[n].swiperSlideSize), (l += 1), t > o && (e = !0));
      } else if ("current" === e)
        for (let e = a + 1; e < r.length; e += 1) {
          (t ? s[e] + i[e] - s[a] < o : s[e] - s[a] < o) && (l += 1);
        }
      else
        for (let e = a - 1; e >= 0; e -= 1) {
          s[a] - s[e] < o && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: n } = e;
      function r() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let s;
      n.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (r(), e.params.autoHeight && e.updateAutoHeight())
          : ((s =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            s || r()),
        n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const n = this,
        r = n.params.direction;
      return (
        e || (e = "horizontal" === r ? "vertical" : "horizontal"),
        e === r ||
          ("horizontal" !== e && "vertical" !== e) ||
          (n.$el
            .removeClass(`${n.params.containerModifierClass}${r}`)
            .addClass(`${n.params.containerModifierClass}${e}`),
          n.emitContainerClasses(),
          (n.params.direction = e),
          n.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          n.emit("changeDirection"),
          t && n.update()),
        n
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const n = v(e || t.params.el);
      if (!(e = n[0])) return !1;
      e.swiper = t;
      const r = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let s = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = v(e.shadowRoot.querySelector(r()));
          return (t.children = (e) => n.children(e)), t;
        }
        return n.children ? n.children(r()) : v(n).children(r());
      })();
      if (0 === s.length && t.params.createElements) {
        const e = a().createElement("div");
        (s = v(e)),
          (e.className = t.params.wrapperClass),
          n.append(e),
          n.children(`.${t.params.slideClass}`).each((e) => {
            s.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: n,
          el: e,
          $wrapperEl: s,
          wrapperEl: s[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
          wrongRTL: "-webkit-box" === s.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const n = this,
        { params: r, $el: s, $wrapperEl: i, slides: o } = n;
      return (
        void 0 === n.params ||
          n.destroyed ||
          (n.emit("beforeDestroy"),
          (n.initialized = !1),
          n.detachEvents(),
          r.loop && n.loopDestroy(),
          t &&
            (n.removeClasses(),
            s.removeAttr("style"),
            i.removeAttr("style"),
            o &&
              o.length &&
              o
                .removeClass(
                  [
                    r.slideVisibleClass,
                    r.slideActiveClass,
                    r.slideNextClass,
                    r.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          n.emit("destroy"),
          Object.keys(n.eventsListeners).forEach((e) => {
            n.off(e);
          }),
          !1 !== e &&
            ((n.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(n)),
          (n.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      x(ee, e);
    }
    static get extendedDefaults() {
      return ee;
    }
    static get defaults() {
      return J;
    }
    static installModule(e) {
      te.prototype.__modules__ || (te.prototype.__modules__ = []);
      const t = te.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => te.installModule(e)), te)
        : (te.installModule(e), te);
    }
  }
  Object.keys(Q).forEach((e) => {
    Object.keys(Q[e]).forEach((t) => {
      te.prototype[t] = Q[e][t];
    });
  }),
    te.use([
      function (e) {
        let { swiper: t, on: n, emit: r } = e;
        const s = c();
        let i = null,
          o = null;
        const a = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (r("beforeResize"), r("resize"));
          },
          l = () => {
            t && !t.destroyed && t.initialized && r("orientationchange");
          };
        n("init", () => {
          t.params.resizeObserver && void 0 !== s.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((i = new ResizeObserver((e) => {
                o = s.requestAnimationFrame(() => {
                  const { width: n, height: r } = t;
                  let s = n,
                    i = r;
                  e.forEach((e) => {
                    let { contentBoxSize: n, contentRect: r, target: o } = e;
                    (o && o !== t.el) ||
                      ((s = r ? r.width : (n[0] || n).inlineSize),
                      (i = r ? r.height : (n[0] || n).blockSize));
                  }),
                    (s === n && i === r) || a();
                });
              })),
              i.observe(t.el))
            : (s.addEventListener("resize", a),
              s.addEventListener("orientationchange", l));
        }),
          n("destroy", () => {
            o && s.cancelAnimationFrame(o),
              i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)),
              s.removeEventListener("resize", a),
              s.removeEventListener("orientationchange", l);
          });
      },
      function (e) {
        let { swiper: t, extendParams: n, on: r, emit: s } = e;
        const i = [],
          o = c(),
          a = function (e, t) {
            void 0 === t && (t = {});
            const n = new (o.MutationObserver || o.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void s("observerUpdate", e[0]);
                const t = function () {
                  s("observerUpdate", e[0]);
                };
                o.requestAnimationFrame
                  ? o.requestAnimationFrame(t)
                  : o.setTimeout(t, 0);
              }
            );
            n.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              i.push(n);
          };
        n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          r("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) a(e[t]);
              }
              a(t.$el[0], { childList: t.params.observeSlideChildren }),
                a(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          r("destroy", () => {
            i.forEach((e) => {
              e.disconnect();
            }),
              i.splice(0, i.length);
          });
      },
    ]);
  const ne = te;
  function re(e, t, n, r) {
    const s = a();
    return (
      e.params.createElements &&
        Object.keys(r).forEach((i) => {
          if (!n[i] && !0 === n.auto) {
            let o = e.$el.children(`.${r[i]}`)[0];
            o ||
              ((o = s.createElement("div")),
              (o.className = r[i]),
              e.$el.append(o)),
              (n[i] = o),
              (t[i] = o);
          }
        }),
      n
    );
  }
  function se(e) {
    let { swiper: t, extendParams: n, on: r, emit: s } = e;
    function i(e) {
      let n;
      return (
        e &&
          ((n = v(e)),
          t.params.uniqueNavElements &&
            "string" == typeof e &&
            n.length > 1 &&
            1 === t.$el.find(e).length &&
            (n = t.$el.find(e))),
        n
      );
    }
    function o(e, n) {
      const r = t.params.navigation;
      e &&
        e.length > 0 &&
        (e[n ? "addClass" : "removeClass"](r.disabledClass),
        e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = n),
        t.params.watchOverflow &&
          t.enabled &&
          e[t.isLocked ? "addClass" : "removeClass"](r.lockClass));
    }
    function a() {
      if (t.params.loop) return;
      const { $nextEl: e, $prevEl: n } = t.navigation;
      o(n, t.isBeginning && !t.params.rewind),
        o(e, t.isEnd && !t.params.rewind);
    }
    function l(e) {
      e.preventDefault(),
        (!t.isBeginning || t.params.loop || t.params.rewind) &&
          (t.slidePrev(), s("navigationPrev"));
    }
    function c(e) {
      e.preventDefault(),
        (!t.isEnd || t.params.loop || t.params.rewind) &&
          (t.slideNext(), s("navigationNext"));
    }
    function u() {
      const e = t.params.navigation;
      if (
        ((t.params.navigation = re(
          t,
          t.originalParams.navigation,
          t.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !e.nextEl && !e.prevEl)
      )
        return;
      const n = i(e.nextEl),
        r = i(e.prevEl);
      n && n.length > 0 && n.on("click", c),
        r && r.length > 0 && r.on("click", l),
        Object.assign(t.navigation, {
          $nextEl: n,
          nextEl: n && n[0],
          $prevEl: r,
          prevEl: r && r[0],
        }),
        t.enabled ||
          (n && n.addClass(e.lockClass), r && r.addClass(e.lockClass));
    }
    function d() {
      const { $nextEl: e, $prevEl: n } = t.navigation;
      e &&
        e.length &&
        (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
        n &&
          n.length &&
          (n.off("click", l), n.removeClass(t.params.navigation.disabledClass));
    }
    n({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (t.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      r("init", () => {
        !1 === t.params.navigation.enabled ? p() : (u(), a());
      }),
      r("toEdge fromEdge lock unlock", () => {
        a();
      }),
      r("destroy", () => {
        d();
      }),
      r("enable disable", () => {
        const { $nextEl: e, $prevEl: n } = t.navigation;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.navigation.lockClass
          ),
          n &&
            n[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            );
      }),
      r("click", (e, n) => {
        const { $nextEl: r, $prevEl: i } = t.navigation,
          o = n.target;
        if (t.params.navigation.hideOnClick && !v(o).is(i) && !v(o).is(r)) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === o || t.pagination.el.contains(o))
          )
            return;
          let e;
          r
            ? (e = r.hasClass(t.params.navigation.hiddenClass))
            : i && (e = i.hasClass(t.params.navigation.hiddenClass)),
            s(!0 === e ? "navigationShow" : "navigationHide"),
            r && r.toggleClass(t.params.navigation.hiddenClass),
            i && i.toggleClass(t.params.navigation.hiddenClass);
        }
      });
    const p = () => {
      t.$el.addClass(t.params.navigation.navigationDisabledClass), d();
    };
    Object.assign(t.navigation, {
      enable: () => {
        t.$el.removeClass(t.params.navigation.navigationDisabledClass),
          u(),
          a();
      },
      disable: p,
      update: a,
      init: u,
      destroy: d,
    });
  }
  function ie(e) {
    let { swiper: t, extendParams: n, on: r, emit: s } = e;
    const i = a();
    let o,
      l,
      c,
      u,
      d = !1,
      p = null,
      f = null;
    function h() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const { scrollbar: e, rtlTranslate: n, progress: r } = t,
        { $dragEl: s, $el: i } = e,
        o = t.params.scrollbar;
      let a = l,
        u = (c - l) * r;
      n
        ? ((u = -u), u > 0 ? ((a = l - u), (u = 0)) : -u + l > c && (a = c + u))
        : u < 0
        ? ((a = l + u), (u = 0))
        : u + l > c && (a = c - u),
        t.isHorizontal()
          ? (s.transform(`translate3d(${u}px, 0, 0)`),
            (s[0].style.width = `${a}px`))
          : (s.transform(`translate3d(0px, ${u}px, 0)`),
            (s[0].style.height = `${a}px`)),
        o.hide &&
          (clearTimeout(p),
          (i[0].style.opacity = 1),
          (p = setTimeout(() => {
            (i[0].style.opacity = 0), i.transition(400);
          }, 1e3)));
    }
    function m() {
      if (!t.params.scrollbar.el || !t.scrollbar.el) return;
      const { scrollbar: e } = t,
        { $dragEl: n, $el: r } = e;
      (n[0].style.width = ""),
        (n[0].style.height = ""),
        (c = t.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight),
        (u =
          t.size /
          (t.virtualSize +
            t.params.slidesOffsetBefore -
            (t.params.centeredSlides ? t.snapGrid[0] : 0))),
        (l =
          "auto" === t.params.scrollbar.dragSize
            ? c * u
            : parseInt(t.params.scrollbar.dragSize, 10)),
        t.isHorizontal()
          ? (n[0].style.width = `${l}px`)
          : (n[0].style.height = `${l}px`),
        (r[0].style.display = u >= 1 ? "none" : ""),
        t.params.scrollbar.hide && (r[0].style.opacity = 0),
        t.params.watchOverflow &&
          t.enabled &&
          e.$el[t.isLocked ? "addClass" : "removeClass"](
            t.params.scrollbar.lockClass
          );
    }
    function g(e) {
      return t.isHorizontal()
        ? "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientX
          : e.clientX
        : "touchstart" === e.type || "touchmove" === e.type
        ? e.targetTouches[0].clientY
        : e.clientY;
    }
    function b(e) {
      const { scrollbar: n, rtlTranslate: r } = t,
        { $el: s } = n;
      let i;
      (i =
        (g(e) -
          s.offset()[t.isHorizontal() ? "left" : "top"] -
          (null !== o ? o : l / 2)) /
        (c - l)),
        (i = Math.max(Math.min(i, 1), 0)),
        r && (i = 1 - i);
      const a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * i;
      t.updateProgress(a),
        t.setTranslate(a),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
    }
    function w(e) {
      const n = t.params.scrollbar,
        { scrollbar: r, $wrapperEl: i } = t,
        { $el: a, $dragEl: l } = r;
      (d = !0),
        (o =
          e.target === l[0] || e.target === l
            ? g(e) -
              e.target.getBoundingClientRect()[
                t.isHorizontal() ? "left" : "top"
              ]
            : null),
        e.preventDefault(),
        e.stopPropagation(),
        i.transition(100),
        l.transition(100),
        b(e),
        clearTimeout(f),
        a.transition(0),
        n.hide && a.css("opacity", 1),
        t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
        s("scrollbarDragStart", e);
    }
    function j(e) {
      const { scrollbar: n, $wrapperEl: r } = t,
        { $el: i, $dragEl: o } = n;
      d &&
        (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
        b(e),
        r.transition(0),
        i.transition(0),
        o.transition(0),
        s("scrollbarDragMove", e));
    }
    function S(e) {
      const n = t.params.scrollbar,
        { scrollbar: r, $wrapperEl: i } = t,
        { $el: o } = r;
      d &&
        ((d = !1),
        t.params.cssMode &&
          (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
        n.hide &&
          (clearTimeout(f),
          (f = y(() => {
            o.css("opacity", 0), o.transition(400);
          }, 1e3))),
        s("scrollbarDragEnd", e),
        n.snapOnRelease && t.slideToClosest());
    }
    function x(e) {
      const {
          scrollbar: n,
          touchEventsTouch: r,
          touchEventsDesktop: s,
          params: o,
          support: a,
        } = t,
        l = n.$el;
      if (!l) return;
      const c = l[0],
        u = !(!a.passiveListener || !o.passiveListeners) && {
          passive: !1,
          capture: !1,
        },
        d = !(!a.passiveListener || !o.passiveListeners) && {
          passive: !0,
          capture: !1,
        };
      if (!c) return;
      const p = "on" === e ? "addEventListener" : "removeEventListener";
      a.touch
        ? (c[p](r.start, w, u), c[p](r.move, j, u), c[p](r.end, S, d))
        : (c[p](s.start, w, u), i[p](s.move, j, u), i[p](s.end, S, d));
    }
    function E() {
      const { scrollbar: e, $el: n } = t;
      t.params.scrollbar = re(
        t,
        t.originalParams.scrollbar,
        t.params.scrollbar,
        { el: "swiper-scrollbar" }
      );
      const r = t.params.scrollbar;
      if (!r.el) return;
      let s = v(r.el);
      t.params.uniqueNavElements &&
        "string" == typeof r.el &&
        s.length > 1 &&
        1 === n.find(r.el).length &&
        (s = n.find(r.el)),
        s.addClass(t.isHorizontal() ? r.horizontalClass : r.verticalClass);
      let i = s.find(`.${t.params.scrollbar.dragClass}`);
      0 === i.length &&
        ((i = v(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
        s.append(i)),
        Object.assign(e, { $el: s, el: s[0], $dragEl: i, dragEl: i[0] }),
        r.draggable && t.params.scrollbar.el && t.scrollbar.el && x("on"),
        s &&
          s[t.enabled ? "removeClass" : "addClass"](
            t.params.scrollbar.lockClass
          );
    }
    function T() {
      const e = t.params.scrollbar,
        n = t.scrollbar.$el;
      n &&
        n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
        t.params.scrollbar.el && t.scrollbar.el && x("off");
    }
    n({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical",
      },
    }),
      (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
      r("init", () => {
        !1 === t.params.scrollbar.enabled ? C() : (E(), m(), h());
      }),
      r("update resize observerUpdate lock unlock", () => {
        m();
      }),
      r("setTranslate", () => {
        h();
      }),
      r("setTransition", (e, n) => {
        !(function (e) {
          t.params.scrollbar.el &&
            t.scrollbar.el &&
            t.scrollbar.$dragEl.transition(e);
        })(n);
      }),
      r("enable disable", () => {
        const { $el: e } = t.scrollbar;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.scrollbar.lockClass
          );
      }),
      r("destroy", () => {
        T();
      });
    const C = () => {
      t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
        t.scrollbar.$el &&
          t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
        T();
    };
    Object.assign(t.scrollbar, {
      enable: () => {
        t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),
          t.scrollbar.$el &&
            t.scrollbar.$el.removeClass(
              t.params.scrollbar.scrollbarDisabledClass
            ),
          E(),
          m(),
          h();
      },
      disable: C,
      updateSize: m,
      setTranslate: h,
      init: E,
      destroy: T,
    });
  }
  function oe() {
    !(function () {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    })(),
      document.querySelector(".pets__slider") &&
        new ne(".pets__slider", {
          modules: [se],
          centeredSlides: !0,
          slidesPerView: 1,
          spaceBetween: 30,
          speed: 800,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          loop: !0,
          on: {},
        }),
      document.querySelector(".testimonials__slider") &&
        new ne(".testimonials__slider", {
          modules: [ie],
          scrollbar: {
            el: ".swiper-scrollbar",
            draggable: !0,
            dragSize: 115,
            snapOnRelease: !1,
          },
          observer: !0,
          observeParents: !0,
          slidesPerView: 4,
          spaceBetween: 0,
          speed: 800,
          breakpoints: {
            921: { slidesPerView: 3, spaceBetween: 20 },
            320: { direction: "vertical", slidesPerView: 3, spaceBetween: 5 },
            1068: { slidesPerView: 4, spaceBetween: 30 },
          },
          on: {},
        }),
      document.querySelector(".video__slider") &&
        new ne(".video__slider", {
          modules: [se],
          slidesPerView: 4,
          spaceBetween: 30,
          speed: 800,
          navigation: {
            nextEl: ".swiper-button-next-video",
            prevEl: ".swiper-button-prev-video",
          },
          loop: !0,
          breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 0, autoHeight: !0 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1590: { slidesPerView: 3, spaceBetween: 20 },
            1590: { slidesPerView: 4, spaceBetween: 30 },
          },
          on: {},
        });
  }
  window.addEventListener("load", function (e) {
    oe();
  }),
    function () {
      var e;
      function t(e) {
        var t = 0;
        return function () {
          return t < e.length ? { done: !1, value: e[t++] } : { done: !0 };
        };
      }
      var n =
        "function" == typeof Object.defineProperties
          ? Object.defineProperty
          : function (e, t, n) {
              return (
                e == Array.prototype ||
                  e == Object.prototype ||
                  (e[t] = n.value),
                e
              );
            };
      var r = (function (e) {
        e = [
          "object" == typeof globalThis && globalThis,
          e,
          "object" == typeof window && window,
          "object" == typeof self && self,
          "object" == typeof global && global,
        ];
        for (var t = 0; t < e.length; ++t) {
          var n = e[t];
          if (n && n.Math == Math) return n;
        }
        throw Error("Cannot find global object");
      })(this);
      function s(e, t) {
        if (t)
          e: {
            var s = r;
            e = e.split(".");
            for (var i = 0; i < e.length - 1; i++) {
              var o = e[i];
              if (!(o in s)) break e;
              s = s[o];
            }
            (t = t((i = s[(e = e[e.length - 1])]))) != i &&
              null != t &&
              n(s, e, { configurable: !0, writable: !0, value: t });
          }
      }
      function i(e) {
        return (
          ((e = { next: e })[Symbol.iterator] = function () {
            return this;
          }),
          e
        );
      }
      function o(e) {
        var n =
          "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
        return n ? n.call(e) : { next: t(e) };
      }
      function a(e) {
        if (!(e instanceof Array)) {
          e = o(e);
          for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
          e = n;
        }
        return e;
      }
      s("Symbol", function (e) {
        function t(e, t) {
          (this.g = e),
            n(this, "description", {
              configurable: !0,
              writable: !0,
              value: t,
            });
        }
        if (e) return e;
        t.prototype.toString = function () {
          return this.g;
        };
        var r = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
          s = 0;
        return function e(n) {
          if (this instanceof e)
            throw new TypeError("Symbol is not a constructor");
          return new t(r + (n || "") + "_" + s++, n);
        };
      }),
        s("Symbol.iterator", function (e) {
          if (e) return e;
          e = Symbol("Symbol.iterator");
          for (
            var s =
                "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
                  " "
                ),
              o = 0;
            o < s.length;
            o++
          ) {
            var a = r[s[o]];
            "function" == typeof a &&
              "function" != typeof a.prototype[e] &&
              n(a.prototype, e, {
                configurable: !0,
                writable: !0,
                value: function () {
                  return i(t(this));
                },
              });
          }
          return e;
        }),
        s("Symbol.asyncIterator", function (e) {
          return e || Symbol("Symbol.asyncIterator");
        });
      var l,
        c =
          "function" == typeof Object.create
            ? Object.create
            : function (e) {
                function t() {}
                return (t.prototype = e), new t();
              },
        u = (function () {
          if ("undefined" != typeof Reflect && Reflect.construct) {
            if (
              (function () {
                function e() {}
                return (
                  new e(),
                  Reflect.construct(e, [], function () {}),
                  new e() instanceof e
                );
              })()
            )
              return Reflect.construct;
            var e = Reflect.construct;
            return function (t, n, r) {
              return (
                (t = e(t, n)), r && Reflect.setPrototypeOf(t, r.prototype), t
              );
            };
          }
          return function (e, t, n) {
            return (
              void 0 === n && (n = e),
              (n = c(n.prototype || Object.prototype)),
              Function.prototype.apply.call(e, n, t) || n
            );
          };
        })();
      if ("function" == typeof Object.setPrototypeOf) l = Object.setPrototypeOf;
      else {
        var d;
        e: {
          var p = {};
          try {
            (p.__proto__ = { a: !0 }), (d = p.a);
            break e;
          } catch (e) {}
          d = !1;
        }
        l = d
          ? function (e, t) {
              if (((e.__proto__ = t), e.__proto__ !== t))
                throw new TypeError(e + " is not extensible");
              return e;
            }
          : null;
      }
      var f = l;
      function h(e, t) {
        if (((e.prototype = c(t.prototype)), (e.prototype.constructor = e), f))
          f(e, t);
        else
          for (var n in t)
            if ("prototype" != n)
              if (Object.defineProperties) {
                var r = Object.getOwnPropertyDescriptor(t, n);
                r && Object.defineProperty(e, n, r);
              } else e[n] = t[n];
        e.ma = t.prototype;
      }
      function m(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function g(e, t, n) {
        if (null == e)
          throw new TypeError(
            "The 'this' value for String.prototype." +
              n +
              " must not be null or undefined"
          );
        if (t instanceof RegExp)
          throw new TypeError(
            "First argument to String.prototype." +
              n +
              " must not be a regular expression"
          );
        return e + "";
      }
      function v(e, t, n) {
        e instanceof String && (e = String(e));
        for (var r = e.length, s = 0; s < r; s++) {
          var i = e[s];
          if (t.call(n, i, s, e)) return { S: s, X: i };
        }
        return { S: -1, X: void 0 };
      }
      function y(e, t) {
        e instanceof String && (e += "");
        var n = 0,
          r = !1,
          s = {
            next: function () {
              if (!r && n < e.length) {
                var s = n++;
                return { value: t(s, e[s]), done: !1 };
              }
              return (r = !0), { done: !0, value: void 0 };
            },
          };
        return (
          (s[Symbol.iterator] = function () {
            return s;
          }),
          s
        );
      }
      s("Reflect", function (e) {
        return e || {};
      }),
        s("Reflect.construct", function () {
          return u;
        }),
        s("Reflect.setPrototypeOf", function (e) {
          return (
            e ||
            (f
              ? function (e, t) {
                  try {
                    return f(e, t), !0;
                  } catch (e) {
                    return !1;
                  }
                }
              : null)
          );
        }),
        s("WeakMap", function (e) {
          function t(e) {
            if (((this.g = (c += Math.random() + 1).toString()), e)) {
              e = o(e);
              for (var t; !(t = e.next()).done; )
                (t = t.value), this.set(t[0], t[1]);
            }
          }
          function r() {}
          function s(e) {
            var t = typeof e;
            return ("object" === t && null !== e) || "function" === t;
          }
          function i(e) {
            if (!m(e, l)) {
              var t = new r();
              n(e, l, { value: t });
            }
          }
          function a(e) {
            var t = Object[e];
            t &&
              (Object[e] = function (e) {
                return e instanceof r
                  ? e
                  : (Object.isExtensible(e) && i(e), t(e));
              });
          }
          if (
            (function () {
              if (!e || !Object.seal) return !1;
              try {
                var t = Object.seal({}),
                  n = Object.seal({}),
                  r = new e([
                    [t, 2],
                    [n, 3],
                  ]);
                return (
                  2 == r.get(t) &&
                  3 == r.get(n) &&
                  (r.delete(t), r.set(n, 4), !r.has(t) && 4 == r.get(n))
                );
              } catch (e) {
                return !1;
              }
            })()
          )
            return e;
          var l = "$jscomp_hidden_" + Math.random();
          a("freeze"), a("preventExtensions"), a("seal");
          var c = 0;
          return (
            (t.prototype.set = function (e, t) {
              if (!s(e)) throw Error("Invalid WeakMap key");
              if ((i(e), !m(e, l))) throw Error("WeakMap key fail: " + e);
              return (e[l][this.g] = t), this;
            }),
            (t.prototype.get = function (e) {
              return s(e) && m(e, l) ? e[l][this.g] : void 0;
            }),
            (t.prototype.has = function (e) {
              return s(e) && m(e, l) && m(e[l], this.g);
            }),
            (t.prototype.delete = function (e) {
              return (
                !!(s(e) && m(e, l) && m(e[l], this.g)) && delete e[l][this.g]
              );
            }),
            t
          );
        }),
        s("Map", function (e) {
          function t() {
            var e = {};
            return (e.A = e.next = e.head = e);
          }
          function n(e, t) {
            var n = e.g;
            return i(function () {
              if (n) {
                for (; n.head != e.g; ) n = n.A;
                for (; n.next != n.head; )
                  return (n = n.next), { done: !1, value: t(n) };
                n = null;
              }
              return { done: !0, value: void 0 };
            });
          }
          function r(e, t) {
            var n = t && typeof t;
            "object" == n || "function" == n
              ? a.has(t)
                ? (n = a.get(t))
                : ((n = "" + ++l), a.set(t, n))
              : (n = "p_" + t);
            var r = e.h[n];
            if (r && m(e.h, n))
              for (e = 0; e < r.length; e++) {
                var s = r[e];
                if ((t != t && s.key != s.key) || t === s.key)
                  return { id: n, list: r, index: e, u: s };
              }
            return { id: n, list: r, index: -1, u: void 0 };
          }
          function s(e) {
            if (((this.h = {}), (this.g = t()), (this.size = 0), e)) {
              e = o(e);
              for (var n; !(n = e.next()).done; )
                (n = n.value), this.set(n[0], n[1]);
            }
          }
          if (
            (function () {
              if (
                !e ||
                "function" != typeof e ||
                !e.prototype.entries ||
                "function" != typeof Object.seal
              )
                return !1;
              try {
                var t = Object.seal({ x: 4 }),
                  n = new e(o([[t, "s"]]));
                if (
                  "s" != n.get(t) ||
                  1 != n.size ||
                  n.get({ x: 4 }) ||
                  n.set({ x: 4 }, "t") != n ||
                  2 != n.size
                )
                  return !1;
                var r = n.entries(),
                  s = r.next();
                return (
                  !s.done &&
                  s.value[0] == t &&
                  "s" == s.value[1] &&
                  !(
                    (s = r.next()).done ||
                    4 != s.value[0].x ||
                    "t" != s.value[1] ||
                    !r.next().done
                  )
                );
              } catch (e) {
                return !1;
              }
            })()
          )
            return e;
          var a = new WeakMap();
          (s.prototype.set = function (e, t) {
            var n = r(this, (e = 0 === e ? 0 : e));
            return (
              n.list || (n.list = this.h[n.id] = []),
              n.u
                ? (n.u.value = t)
                : ((n.u = {
                    next: this.g,
                    A: this.g.A,
                    head: this.g,
                    key: e,
                    value: t,
                  }),
                  n.list.push(n.u),
                  (this.g.A.next = n.u),
                  (this.g.A = n.u),
                  this.size++),
              this
            );
          }),
            (s.prototype.delete = function (e) {
              return (
                !(!(e = r(this, e)).u || !e.list) &&
                (e.list.splice(e.index, 1),
                e.list.length || delete this.h[e.id],
                (e.u.A.next = e.u.next),
                (e.u.next.A = e.u.A),
                (e.u.head = null),
                this.size--,
                !0)
              );
            }),
            (s.prototype.clear = function () {
              (this.h = {}), (this.g = this.g.A = t()), (this.size = 0);
            }),
            (s.prototype.has = function (e) {
              return !!r(this, e).u;
            }),
            (s.prototype.get = function (e) {
              return (e = r(this, e).u) && e.value;
            }),
            (s.prototype.entries = function () {
              return n(this, function (e) {
                return [e.key, e.value];
              });
            }),
            (s.prototype.keys = function () {
              return n(this, function (e) {
                return e.key;
              });
            }),
            (s.prototype.values = function () {
              return n(this, function (e) {
                return e.value;
              });
            }),
            (s.prototype.forEach = function (e, t) {
              for (var n, r = this.entries(); !(n = r.next()).done; )
                (n = n.value), e.call(t, n[1], n[0], this);
            }),
            (s.prototype[Symbol.iterator] = s.prototype.entries);
          var l = 0;
          return s;
        }),
        s("String.prototype.endsWith", function (e) {
          return (
            e ||
            function (e, t) {
              var n = g(this, e, "endsWith");
              void 0 === t && (t = n.length),
                (t = Math.max(0, Math.min(0 | t, n.length)));
              for (var r = e.length; 0 < r && 0 < t; )
                if (n[--t] != e[--r]) return !1;
              return 0 >= r;
            }
          );
        }),
        s("Array.prototype.find", function (e) {
          return (
            e ||
            function (e, t) {
              return v(this, e, t).X;
            }
          );
        }),
        s("String.prototype.startsWith", function (e) {
          return (
            e ||
            function (e, t) {
              var n = g(this, e, "startsWith"),
                r = n.length,
                s = e.length;
              t = Math.max(0, Math.min(0 | t, n.length));
              for (var i = 0; i < s && t < r; ) if (n[t++] != e[i++]) return !1;
              return i >= s;
            }
          );
        }),
        s("String.prototype.repeat", function (e) {
          return (
            e ||
            function (e) {
              var t = g(this, null, "repeat");
              if (0 > e || 1342177279 < e)
                throw new RangeError("Invalid count value");
              e |= 0;
              for (var n = ""; e; ) 1 & e && (n += t), (e >>>= 1) && (t += t);
              return n;
            }
          );
        }),
        s("Array.prototype.keys", function (e) {
          return (
            e ||
            function () {
              return y(this, function (e) {
                return e;
              });
            }
          );
        }),
        s("Array.from", function (e) {
          return (
            e ||
            function (e, t, n) {
              t =
                null != t
                  ? t
                  : function (e) {
                      return e;
                    };
              var r = [],
                s =
                  "undefined" != typeof Symbol &&
                  Symbol.iterator &&
                  e[Symbol.iterator];
              if ("function" == typeof s) {
                e = s.call(e);
                for (var i = 0; !(s = e.next()).done; )
                  r.push(t.call(n, s.value, i++));
              } else
                for (s = e.length, i = 0; i < s; i++)
                  r.push(t.call(n, e[i], i));
              return r;
            }
          );
        }),
        s("Array.prototype.values", function (e) {
          return (
            e ||
            function () {
              return y(this, function (e, t) {
                return t;
              });
            }
          );
        }),
        s("String.prototype.trimLeft", function (e) {
          return (
            e ||
            function () {
              return this.replace(/^[\s\xa0]+/, "");
            }
          );
        }),
        s("String.prototype.trimStart", function (e) {
          return e || String.prototype.trimLeft;
        }),
        s("Object.setPrototypeOf", function (e) {
          return e || f;
        });
      var b =
        "function" == typeof Object.assign
          ? Object.assign
          : function (e, t) {
              for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (r) for (var s in r) m(r, s) && (e[s] = r[s]);
              }
              return e;
            };
      function w(e, t) {
        for (; e; ) {
          var n = Reflect.getOwnPropertyDescriptor(e, t);
          if (n) return n;
          e = Reflect.getPrototypeOf(e);
        }
      }
      function j(e, t) {
        return (
          (e = void 0 !== e ? String(e) : " "),
          0 < t && e ? e.repeat(Math.ceil(t / e.length)).substring(0, t) : ""
        );
      }
      function S(e) {
        return e || Array.prototype.copyWithin;
      }
      function x(e) {
        return e || Array.prototype.fill;
      }
      s("Object.assign", function (e) {
        return e || b;
      }),
        s("Promise", function (e) {
          function t(e) {
            (this.g = 0), (this.i = void 0), (this.h = []), (this.s = !1);
            var t = this.j();
            try {
              e(t.resolve, t.reject);
            } catch (e) {
              t.reject(e);
            }
          }
          function n() {
            this.g = null;
          }
          function s(e) {
            return e instanceof t
              ? e
              : new t(function (t) {
                  t(e);
                });
          }
          if (e) return e;
          n.prototype.h = function (e) {
            if (null == this.g) {
              this.g = [];
              var t = this;
              this.i(function () {
                t.l();
              });
            }
            this.g.push(e);
          };
          var i = r.setTimeout;
          (n.prototype.i = function (e) {
            i(e, 0);
          }),
            (n.prototype.l = function () {
              for (; this.g && this.g.length; ) {
                var e = this.g;
                this.g = [];
                for (var t = 0; t < e.length; ++t) {
                  var n = e[t];
                  e[t] = null;
                  try {
                    n();
                  } catch (e) {
                    this.j(e);
                  }
                }
              }
              this.g = null;
            }),
            (n.prototype.j = function (e) {
              this.i(function () {
                throw e;
              });
            }),
            (t.prototype.j = function () {
              function e(e) {
                return function (r) {
                  n || ((n = !0), e.call(t, r));
                };
              }
              var t = this,
                n = !1;
              return { resolve: e(this.J), reject: e(this.l) };
            }),
            (t.prototype.J = function (e) {
              if (e === this)
                this.l(new TypeError("A Promise cannot resolve to itself"));
              else if (e instanceof t) this.Y(e);
              else {
                e: switch (typeof e) {
                  case "object":
                    var n = null != e;
                    break e;
                  case "function":
                    n = !0;
                    break e;
                  default:
                    n = !1;
                }
                n ? this.I(e) : this.o(e);
              }
            }),
            (t.prototype.I = function (e) {
              var t = void 0;
              try {
                t = e.then;
              } catch (e) {
                return void this.l(e);
              }
              "function" == typeof t ? this.Z(t, e) : this.o(e);
            }),
            (t.prototype.l = function (e) {
              this.v(2, e);
            }),
            (t.prototype.o = function (e) {
              this.v(1, e);
            }),
            (t.prototype.v = function (e, t) {
              if (0 != this.g)
                throw Error(
                  "Cannot settle(" +
                    e +
                    ", " +
                    t +
                    "): Promise already settled in state" +
                    this.g
                );
              (this.g = e), (this.i = t), 2 === this.g && this.L(), this.C();
            }),
            (t.prototype.L = function () {
              var e = this;
              i(function () {
                if (e.D()) {
                  var t = r.console;
                  void 0 !== t && t.error(e.i);
                }
              }, 1);
            }),
            (t.prototype.D = function () {
              if (this.s) return !1;
              var e = r.CustomEvent,
                t = r.Event,
                n = r.dispatchEvent;
              return (
                void 0 === n ||
                ("function" == typeof e
                  ? (e = new e("unhandledrejection", { cancelable: !0 }))
                  : "function" == typeof t
                  ? (e = new t("unhandledrejection", { cancelable: !0 }))
                  : (e = r.document.createEvent("CustomEvent")).initCustomEvent(
                      "unhandledrejection",
                      !1,
                      !0,
                      e
                    ),
                (e.promise = this),
                (e.reason = this.i),
                n(e))
              );
            }),
            (t.prototype.C = function () {
              if (null != this.h) {
                for (var e = 0; e < this.h.length; ++e) a.h(this.h[e]);
                this.h = null;
              }
            });
          var a = new n();
          return (
            (t.prototype.Y = function (e) {
              var t = this.j();
              e.K(t.resolve, t.reject);
            }),
            (t.prototype.Z = function (e, t) {
              var n = this.j();
              try {
                e.call(t, n.resolve, n.reject);
              } catch (e) {
                n.reject(e);
              }
            }),
            (t.prototype.then = function (e, n) {
              function r(e, t) {
                return "function" == typeof e
                  ? function (t) {
                      try {
                        s(e(t));
                      } catch (e) {
                        i(e);
                      }
                    }
                  : t;
              }
              var s,
                i,
                o = new t(function (e, t) {
                  (s = e), (i = t);
                });
              return this.K(r(e, s), r(n, i)), o;
            }),
            (t.prototype.catch = function (e) {
              return this.then(void 0, e);
            }),
            (t.prototype.K = function (e, t) {
              function n() {
                switch (r.g) {
                  case 1:
                    e(r.i);
                    break;
                  case 2:
                    t(r.i);
                    break;
                  default:
                    throw Error("Unexpected state: " + r.g);
                }
              }
              var r = this;
              null == this.h ? a.h(n) : this.h.push(n), (this.s = !0);
            }),
            (t.resolve = s),
            (t.reject = function (e) {
              return new t(function (t, n) {
                n(e);
              });
            }),
            (t.race = function (e) {
              return new t(function (t, n) {
                for (var r = o(e), i = r.next(); !i.done; i = r.next())
                  s(i.value).K(t, n);
              });
            }),
            (t.all = function (e) {
              var n = o(e),
                r = n.next();
              return r.done
                ? s([])
                : new t(function (e, t) {
                    function i(t) {
                      return function (n) {
                        (o[t] = n), 0 == --a && e(o);
                      };
                    }
                    var o = [],
                      a = 0;
                    do {
                      o.push(void 0),
                        a++,
                        s(r.value).K(i(o.length - 1), t),
                        (r = n.next());
                    } while (!r.done);
                  });
            }),
            t
          );
        }),
        s("Object.is", function (e) {
          return (
            e ||
            function (e, t) {
              return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            }
          );
        }),
        s("Array.prototype.includes", function (e) {
          return (
            e ||
            function (e, t) {
              var n = this;
              n instanceof String && (n = String(n));
              var r = n.length;
              for (0 > (t = t || 0) && (t = Math.max(t + r, 0)); t < r; t++) {
                var s = n[t];
                if (s === e || Object.is(s, e)) return !0;
              }
              return !1;
            }
          );
        }),
        s("String.prototype.includes", function (e) {
          return (
            e ||
            function (e, t) {
              return -1 !== g(this, e, "includes").indexOf(e, t || 0);
            }
          );
        }),
        s("Array.prototype.copyWithin", function (e) {
          function t(e) {
            return 1 / 0 === (e = Number(e)) || -1 / 0 === e ? e : 0 | e;
          }
          return (
            e ||
            function (e, n, r) {
              var s = this.length;
              if (
                ((e = t(e)),
                (n = t(n)),
                (r = void 0 === r ? s : t(r)),
                (e = 0 > e ? Math.max(s + e, 0) : Math.min(e, s)),
                (n = 0 > n ? Math.max(s + n, 0) : Math.min(n, s)),
                (r = 0 > r ? Math.max(s + r, 0) : Math.min(r, s)),
                e < n)
              )
                for (; n < r; )
                  n in this ? (this[e++] = this[n++]) : (delete this[e++], n++);
              else
                for (e += (r = Math.min(r, s + n - e)) - n; r > n; )
                  --r in this ? (this[--e] = this[r]) : delete this[--e];
              return this;
            }
          );
        }),
        s("Array.prototype.entries", function (e) {
          return (
            e ||
            function () {
              return y(this, function (e, t) {
                return [e, t];
              });
            }
          );
        }),
        s("Array.prototype.fill", function (e) {
          return (
            e ||
            function (e, t, n) {
              var r = this.length || 0;
              for (
                0 > t && (t = Math.max(0, r + t)),
                  (null == n || n > r) && (n = r),
                  0 > (n = Number(n)) && (n = Math.max(0, r + n)),
                  t = Number(t || 0);
                t < n;
                t++
              )
                this[t] = e;
              return this;
            }
          );
        }),
        s("Array.prototype.findIndex", function (e) {
          return (
            e ||
            function (e, t) {
              return v(this, e, t).S;
            }
          );
        }),
        s("Array.prototype.flat", function (e) {
          return (
            e ||
            function (e) {
              e = void 0 === e ? 1 : e;
              for (var t = [], n = 0; n < this.length; n++) {
                var r = this[n];
                Array.isArray(r) && 0 < e
                  ? ((r = Array.prototype.flat.call(r, e - 1)),
                    t.push.apply(t, r))
                  : t.push(r);
              }
              return t;
            }
          );
        }),
        s("Array.prototype.flatMap", function (e) {
          return (
            e ||
            function (e, t) {
              for (var n = [], r = 0; r < this.length; r++) {
                var s = e.call(t, this[r], r, this);
                Array.isArray(s) ? n.push.apply(n, s) : n.push(s);
              }
              return n;
            }
          );
        }),
        s("Array.of", function (e) {
          return (
            e ||
            function (e) {
              return Array.from(arguments);
            }
          );
        }),
        s("globalThis", function (e) {
          return e || r;
        }),
        s("Math.acosh", function (e) {
          return (
            e ||
            function (e) {
              return (e = Number(e)), Math.log(e + Math.sqrt(e * e - 1));
            }
          );
        }),
        s("Math.asinh", function (e) {
          return (
            e ||
            function (e) {
              if (0 === (e = Number(e))) return e;
              var t = Math.log(Math.abs(e) + Math.sqrt(e * e + 1));
              return 0 > e ? -t : t;
            }
          );
        }),
        s("Math.log1p", function (e) {
          return (
            e ||
            function (e) {
              if (0.25 > (e = Number(e)) && -0.25 < e) {
                for (var t = e, n = 1, r = e, s = 0, i = 1; s != r; )
                  r = (s = r) + ((i *= -1) * (t *= e)) / ++n;
                return r;
              }
              return Math.log(1 + e);
            }
          );
        }),
        s("Math.atanh", function (e) {
          if (e) return e;
          var t = Math.log1p;
          return function (e) {
            return (e = Number(e)), (t(e) - t(-e)) / 2;
          };
        }),
        s("Math.cbrt", function (e) {
          return (
            e ||
            function (e) {
              if (0 === e) return e;
              e = Number(e);
              var t = Math.pow(Math.abs(e), 1 / 3);
              return 0 > e ? -t : t;
            }
          );
        }),
        s("Math.clz32", function (e) {
          return (
            e ||
            function (e) {
              if (0 === (e = Number(e) >>> 0)) return 32;
              var t = 0;
              return (
                0 == (4294901760 & e) && ((e <<= 16), (t += 16)),
                0 == (4278190080 & e) && ((e <<= 8), (t += 8)),
                0 == (4026531840 & e) && ((e <<= 4), (t += 4)),
                0 == (3221225472 & e) && ((e <<= 2), (t += 2)),
                0 == (2147483648 & e) && t++,
                t
              );
            }
          );
        }),
        s("Math.cosh", function (e) {
          if (e) return e;
          var t = Math.exp;
          return function (e) {
            return (e = Number(e)), (t(e) + t(-e)) / 2;
          };
        }),
        s("Math.expm1", function (e) {
          return (
            e ||
            function (e) {
              if (0.25 > (e = Number(e)) && -0.25 < e) {
                for (var t = e, n = 1, r = e, s = 0; s != r; )
                  r = (s = r) + (t *= e / ++n);
                return r;
              }
              return Math.exp(e) - 1;
            }
          );
        }),
        s("Math.fround", function (e) {
          if (e) return e;
          if ("function" != typeof Float32Array)
            return function (e) {
              return e;
            };
          var t = new Float32Array(1);
          return function (e) {
            return (t[0] = e), t[0];
          };
        }),
        s("Math.hypot", function (e) {
          return (
            e ||
            function (e) {
              if (2 > arguments.length)
                return arguments.length ? Math.abs(arguments[0]) : 0;
              var t, n, r;
              for (t = r = 0; t < arguments.length; t++)
                r = Math.max(r, Math.abs(arguments[t]));
              if (1e100 < r || 1e-100 > r) {
                if (!r) return r;
                for (t = n = 0; t < arguments.length; t++) {
                  var s = Number(arguments[t]) / r;
                  n += s * s;
                }
                return Math.sqrt(n) * r;
              }
              for (t = n = 0; t < arguments.length; t++)
                n += (s = Number(arguments[t])) * s;
              return Math.sqrt(n);
            }
          );
        }),
        s("Math.imul", function (e) {
          return (
            e ||
            function (e, t) {
              var n = 65535 & (e = Number(e)),
                r = 65535 & (t = Number(t));
              return (
                (n * r +
                  (((((e >>> 16) & 65535) * r + n * ((t >>> 16) & 65535)) <<
                    16) >>>
                    0)) |
                0
              );
            }
          );
        }),
        s("Math.log10", function (e) {
          return (
            e ||
            function (e) {
              return Math.log(e) / Math.LN10;
            }
          );
        }),
        s("Math.log2", function (e) {
          return (
            e ||
            function (e) {
              return Math.log(e) / Math.LN2;
            }
          );
        }),
        s("Math.sign", function (e) {
          return (
            e ||
            function (e) {
              return 0 === (e = Number(e)) || isNaN(e) ? e : 0 < e ? 1 : -1;
            }
          );
        }),
        s("Math.sinh", function (e) {
          if (e) return e;
          var t = Math.exp;
          return function (e) {
            return 0 === (e = Number(e)) ? e : (t(e) - t(-e)) / 2;
          };
        }),
        s("Math.tanh", function (e) {
          return (
            e ||
            function (e) {
              if (0 === (e = Number(e))) return e;
              var t = Math.exp(-2 * Math.abs(e));
              return (t = (1 - t) / (1 + t)), 0 > e ? -t : t;
            }
          );
        }),
        s("Math.trunc", function (e) {
          return (
            e ||
            function (e) {
              if (
                ((e = Number(e)),
                isNaN(e) || 1 / 0 === e || -1 / 0 === e || 0 === e)
              )
                return e;
              var t = Math.floor(Math.abs(e));
              return 0 > e ? -t : t;
            }
          );
        }),
        s("Number.EPSILON", function () {
          return Math.pow(2, -52);
        }),
        s("Number.MAX_SAFE_INTEGER", function () {
          return 9007199254740991;
        }),
        s("Number.MIN_SAFE_INTEGER", function () {
          return -9007199254740991;
        }),
        s("Number.isFinite", function (e) {
          return (
            e ||
            function (e) {
              return (
                "number" == typeof e && !isNaN(e) && 1 / 0 !== e && -1 / 0 !== e
              );
            }
          );
        }),
        s("Number.isInteger", function (e) {
          return (
            e ||
            function (e) {
              return !!Number.isFinite(e) && e === Math.floor(e);
            }
          );
        }),
        s("Number.isNaN", function (e) {
          return (
            e ||
            function (e) {
              return "number" == typeof e && isNaN(e);
            }
          );
        }),
        s("Number.isSafeInteger", function (e) {
          return (
            e ||
            function (e) {
              return (
                Number.isInteger(e) && Math.abs(e) <= Number.MAX_SAFE_INTEGER
              );
            }
          );
        }),
        s("Number.parseFloat", function (e) {
          return e || parseFloat;
        }),
        s("Number.parseInt", function (e) {
          return e || parseInt;
        }),
        s("Object.entries", function (e) {
          return (
            e ||
            function (e) {
              var t,
                n = [];
              for (t in e) m(e, t) && n.push([t, e[t]]);
              return n;
            }
          );
        }),
        s("Object.fromEntries", function (e) {
          return (
            e ||
            function (e) {
              var t = {};
              if (!(Symbol.iterator in e))
                throw new TypeError(e + " is not iterable");
              for (
                var n = (e = e[Symbol.iterator].call(e)).next();
                !n.done;
                n = e.next()
              ) {
                if (((n = n.value), Object(n) !== n))
                  throw new TypeError(
                    "iterable for fromEntries should yield objects"
                  );
                t[n[0]] = n[1];
              }
              return t;
            }
          );
        }),
        s("Object.getOwnPropertySymbols", function (e) {
          return (
            e ||
            function () {
              return [];
            }
          );
        }),
        s("Reflect.ownKeys", function (e) {
          return (
            e ||
            function (e) {
              var t = [],
                n = Object.getOwnPropertyNames(e);
              e = Object.getOwnPropertySymbols(e);
              for (var r = 0; r < n.length; r++)
                ("jscomp_symbol_" == n[r].substring(0, 14) ? e : t).push(n[r]);
              return t.concat(e);
            }
          );
        }),
        s("Object.getOwnPropertyDescriptors", function (e) {
          return (
            e ||
            function (e) {
              for (var t = {}, n = Reflect.ownKeys(e), r = 0; r < n.length; r++)
                t[n[r]] = Object.getOwnPropertyDescriptor(e, n[r]);
              return t;
            }
          );
        }),
        s("Object.values", function (e) {
          return (
            e ||
            function (e) {
              var t,
                n = [];
              for (t in e) m(e, t) && n.push(e[t]);
              return n;
            }
          );
        }),
        s("Promise.allSettled", function (e) {
          function t(e) {
            return { status: "fulfilled", value: e };
          }
          function n(e) {
            return { status: "rejected", reason: e };
          }
          return (
            e ||
            function (e) {
              var r = this;
              return (
                (e = Array.from(e, function (e) {
                  return r.resolve(e).then(t, n);
                })),
                r.all(e)
              );
            }
          );
        }),
        s("Promise.prototype.finally", function (e) {
          return (
            e ||
            function (e) {
              return this.then(
                function (t) {
                  return Promise.resolve(e()).then(function () {
                    return t;
                  });
                },
                function (t) {
                  return Promise.resolve(e()).then(function () {
                    throw t;
                  });
                }
              );
            }
          );
        }),
        s("AggregateError", function (e) {
          function t(e, t) {
            "stack" in (t = Error(t)) && (this.stack = t.stack),
              (this.errors = e),
              (this.message = t.message);
          }
          return e || (h(t, Error), (t.prototype.name = "AggregateError"), t);
        }),
        s("Promise.any", function (e) {
          return (
            e ||
            function (e) {
              return (
                (e = e instanceof Array ? e : Array.from(e)),
                Promise.all(
                  e.map(function (e) {
                    return Promise.resolve(e).then(
                      function (e) {
                        throw e;
                      },
                      function (e) {
                        return e;
                      }
                    );
                  })
                ).then(
                  function (e) {
                    throw new AggregateError(e, "All promises were rejected");
                  },
                  function (e) {
                    return e;
                  }
                )
              );
            }
          );
        }),
        s("Reflect.apply", function (e) {
          if (e) return e;
          var t = Function.prototype.apply;
          return function (e, n, r) {
            return t.call(e, n, r);
          };
        }),
        s("Reflect.defineProperty", function (e) {
          return (
            e ||
            function (e, t, n) {
              try {
                Object.defineProperty(e, t, n);
                var r = Object.getOwnPropertyDescriptor(e, t);
                return (
                  !!r &&
                  r.configurable === (n.configurable || !1) &&
                  r.enumerable === (n.enumerable || !1) &&
                  ("value" in r
                    ? r.value === n.value && r.writable === (n.writable || !1)
                    : r.get === n.get && r.set === n.set)
                );
              } catch (e) {
                return !1;
              }
            }
          );
        }),
        s("Reflect.deleteProperty", function (e) {
          return (
            e ||
            function (e, t) {
              if (!m(e, t)) return !0;
              try {
                return delete e[t];
              } catch (e) {
                return !1;
              }
            }
          );
        }),
        s("Reflect.getOwnPropertyDescriptor", function (e) {
          return e || Object.getOwnPropertyDescriptor;
        }),
        s("Reflect.getPrototypeOf", function (e) {
          return e || Object.getPrototypeOf;
        }),
        s("Reflect.get", function (e) {
          return (
            e ||
            function (e, t, n) {
              if (2 >= arguments.length) return e[t];
              var r = w(e, t);
              return r ? (r.get ? r.get.call(n) : r.value) : void 0;
            }
          );
        }),
        s("Reflect.has", function (e) {
          return (
            e ||
            function (e, t) {
              return t in e;
            }
          );
        }),
        s("Reflect.isExtensible", function (e) {
          return (
            e ||
            ("function" == typeof Object.isExtensible
              ? Object.isExtensible
              : function () {
                  return !0;
                })
          );
        }),
        s("Reflect.preventExtensions", function (e) {
          return (
            e ||
            ("function" != typeof Object.preventExtensions
              ? function () {
                  return !1;
                }
              : function (e) {
                  return Object.preventExtensions(e), !Object.isExtensible(e);
                })
          );
        }),
        s("Reflect.set", function (e) {
          return (
            e ||
            function (e, t, n, r) {
              var s = w(e, t);
              return s
                ? s.set
                  ? (s.set.call(3 < arguments.length ? r : e, n), !0)
                  : !(!s.writable || Object.isFrozen(e)) && ((e[t] = n), !0)
                : !!Reflect.isExtensible(e) && ((e[t] = n), !0);
            }
          );
        }),
        s("Set", function (e) {
          function t(e) {
            if (((this.g = new Map()), e)) {
              e = o(e);
              for (var t; !(t = e.next()).done; ) this.add(t.value);
            }
            this.size = this.g.size;
          }
          return (function () {
            if (
              !e ||
              "function" != typeof e ||
              !e.prototype.entries ||
              "function" != typeof Object.seal
            )
              return !1;
            try {
              var t = Object.seal({ x: 4 }),
                n = new e(o([t]));
              if (
                !n.has(t) ||
                1 != n.size ||
                n.add(t) != n ||
                1 != n.size ||
                n.add({ x: 4 }) != n ||
                2 != n.size
              )
                return !1;
              var r = n.entries(),
                s = r.next();
              return (
                !s.done &&
                s.value[0] == t &&
                s.value[1] == t &&
                !(s = r.next()).done &&
                s.value[0] != t &&
                4 == s.value[0].x &&
                s.value[1] == s.value[0] &&
                r.next().done
              );
            } catch (e) {
              return !1;
            }
          })()
            ? e
            : ((t.prototype.add = function (e) {
                return (
                  (e = 0 === e ? 0 : e),
                  this.g.set(e, e),
                  (this.size = this.g.size),
                  this
                );
              }),
              (t.prototype.delete = function (e) {
                return (e = this.g.delete(e)), (this.size = this.g.size), e;
              }),
              (t.prototype.clear = function () {
                this.g.clear(), (this.size = 0);
              }),
              (t.prototype.has = function (e) {
                return this.g.has(e);
              }),
              (t.prototype.entries = function () {
                return this.g.entries();
              }),
              (t.prototype.values = function () {
                return this.g.values();
              }),
              (t.prototype.keys = t.prototype.values),
              (t.prototype[Symbol.iterator] = t.prototype.values),
              (t.prototype.forEach = function (e, t) {
                var n = this;
                this.g.forEach(function (r) {
                  return e.call(t, r, r, n);
                });
              }),
              t);
        }),
        s("String.prototype.codePointAt", function (e) {
          return (
            e ||
            function (e) {
              var t = g(this, null, "codePointAt"),
                n = t.length;
              if (0 <= (e = Number(e) || 0) && e < n) {
                e |= 0;
                var r = t.charCodeAt(e);
                return 55296 > r ||
                  56319 < r ||
                  e + 1 === n ||
                  56320 > (e = t.charCodeAt(e + 1)) ||
                  57343 < e
                  ? r
                  : 1024 * (r - 55296) + e + 9216;
              }
            }
          );
        }),
        s("String.fromCodePoint", function (e) {
          return (
            e ||
            function (e) {
              for (var t = "", n = 0; n < arguments.length; n++) {
                var r = Number(arguments[n]);
                if (0 > r || 1114111 < r || r !== Math.floor(r))
                  throw new RangeError("invalid_code_point " + r);
                65535 >= r
                  ? (t += String.fromCharCode(r))
                  : ((r -= 65536),
                    (t += String.fromCharCode(((r >>> 10) & 1023) | 55296)),
                    (t += String.fromCharCode((1023 & r) | 56320)));
              }
              return t;
            }
          );
        }),
        s("String.prototype.matchAll", function (e) {
          return (
            e ||
            function (e) {
              if (e instanceof RegExp && !e.global)
                throw new TypeError(
                  "RegExp passed into String.prototype.matchAll() must have global tag."
                );
              var t = new RegExp(e, e instanceof RegExp ? void 0 : "g"),
                n = this,
                r = !1,
                s = {
                  next: function () {
                    if (r) return { value: void 0, done: !0 };
                    var e = t.exec(n);
                    return e
                      ? ("" === e[0] && (t.lastIndex += 1),
                        { value: e, done: !1 })
                      : ((r = !0), { value: void 0, done: !0 });
                  },
                };
              return (
                (s[Symbol.iterator] = function () {
                  return s;
                }),
                s
              );
            }
          );
        }),
        s("String.prototype.padEnd", function (e) {
          return (
            e ||
            function (e, t) {
              var n = g(this, null, "padStart");
              return n + j(t, e - n.length);
            }
          );
        }),
        s("String.prototype.padStart", function (e) {
          return (
            e ||
            function (e, t) {
              var n = g(this, null, "padStart");
              return j(t, e - n.length) + n;
            }
          );
        }),
        s("String.prototype.replaceAll", function (e) {
          return (
            e ||
            function (e, t) {
              if (e instanceof RegExp && !e.global)
                throw new TypeError(
                  "String.prototype.replaceAll called with a non-global RegExp argument."
                );
              return e instanceof RegExp
                ? this.replace(e, t)
                : this.replace(
                    new RegExp(
                      String(e)
                        .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
                        .replace(/\x08/g, "\\x08"),
                      "g"
                    ),
                    t
                  );
            }
          );
        }),
        s("String.prototype.trimRight", function (e) {
          return (
            e ||
            function () {
              return this.replace(/[\s\xa0]+$/, "");
            }
          );
        }),
        s("String.prototype.trimEnd", function (e) {
          return e || String.prototype.trimRight;
        }),
        s("Int8Array.prototype.copyWithin", S),
        s("Uint8Array.prototype.copyWithin", S),
        s("Uint8ClampedArray.prototype.copyWithin", S),
        s("Int16Array.prototype.copyWithin", S),
        s("Uint16Array.prototype.copyWithin", S),
        s("Int32Array.prototype.copyWithin", S),
        s("Uint32Array.prototype.copyWithin", S),
        s("Float32Array.prototype.copyWithin", S),
        s("Float64Array.prototype.copyWithin", S),
        s("Int8Array.prototype.fill", x),
        s("Uint8Array.prototype.fill", x),
        s("Uint8ClampedArray.prototype.fill", x),
        s("Int16Array.prototype.fill", x),
        s("Uint16Array.prototype.fill", x),
        s("Int32Array.prototype.fill", x),
        s("Uint32Array.prototype.fill", x),
        s("Float32Array.prototype.fill", x),
        s("Float64Array.prototype.fill", x),
        s("WeakSet", function (e) {
          function t(e) {
            if (((this.g = new WeakMap()), e)) {
              e = o(e);
              for (var t; !(t = e.next()).done; ) this.add(t.value);
            }
          }
          return (function () {
            if (!e || !Object.seal) return !1;
            try {
              var t = Object.seal({}),
                n = Object.seal({}),
                r = new e([t]);
              return (
                !(!r.has(t) || r.has(n)) &&
                (r.delete(t), r.add(n), !r.has(t) && r.has(n))
              );
            } catch (e) {
              return !1;
            }
          })()
            ? e
            : ((t.prototype.add = function (e) {
                return this.g.set(e, !0), this;
              }),
              (t.prototype.has = function (e) {
                return this.g.has(e);
              }),
              (t.prototype.delete = function (e) {
                return this.g.delete(e);
              }),
              t);
        });
      var E = this || self;
      function T(e) {
        e = e.split(".");
        for (var t = E, n = 0; n < e.length; n++)
          if (null == (t = t[e[n]])) return null;
        return t;
      }
      function C() {}
      function k(e) {
        var t = typeof e;
        return ("object" == t && null != e) || "function" == t;
      }
      function M(e, t, n) {
        return e.call.apply(e.bind, arguments);
      }
      function L(e, t, n) {
        if (!e) throw Error();
        if (2 < arguments.length) {
          var r = Array.prototype.slice.call(arguments, 2);
          return function () {
            var n = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply(n, r), e.apply(t, n);
          };
        }
        return function () {
          return e.apply(t, arguments);
        };
      }
      function A(e, t, n) {
        return (A =
          Function.prototype.bind &&
          -1 != Function.prototype.bind.toString().indexOf("native code")
            ? M
            : L).apply(null, arguments);
      }
      function _(e, t) {
        e = e.split(".");
        var n,
          r = E;
        e[0] in r || void 0 === r.execScript || r.execScript("var " + e[0]);
        for (; e.length && (n = e.shift()); )
          e.length || void 0 === t
            ? (r = r[n] && r[n] !== Object.prototype[n] ? r[n] : (r[n] = {}))
            : (r[n] = t);
      }
      function P(e, t) {
        function n() {}
        (n.prototype = t.prototype),
          (e.ma = t.prototype),
          (e.prototype = new n()),
          (e.prototype.constructor = e),
          (e.na = function (e, n, r) {
            for (
              var s = Array(arguments.length - 2), i = 2;
              i < arguments.length;
              i++
            )
              s[i - 2] = arguments[i];
            return t.prototype[n].apply(e, s);
          });
      }
      function O(e) {
        return e;
      }
      function $(e) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, $);
        else {
          var t = Error().stack;
          t && (this.stack = t);
        }
        e && (this.message = String(e));
      }
      function I(e, t) {
        (this.g = (e === B && t) || ""), (this.h = D);
      }
      function z(e) {
        return e instanceof I && e.constructor === I && e.h === D
          ? e.g
          : "type_error:Const";
      }
      function q(e) {
        return new I(B, e);
      }
      P($, Error),
        ($.prototype.name = "CustomError"),
        (I.prototype.T = !0),
        (I.prototype.R = function () {
          return this.g;
        });
      var N,
        D = {},
        B = {},
        R = { m: {} };
      function G(e, t) {
        this.g = t === X ? e : "";
      }
      function F(e) {
        return e instanceof G && e.constructor === G
          ? e.g
          : "type_error:TrustedResourceUrl";
      }
      (R.m.N = {
        ia: {
          "gstatic.com": {
            loader: q("https://www.gstatic.com/charts/%{version}/loader.js"),
            debug: q(
              "https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"
            ),
            debug_i18n: q(
              "https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"
            ),
            compiled: q(
              "https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js"
            ),
            compiled_i18n: q(
              "https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"
            ),
            css: q(
              "https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}"
            ),
            css2: q(
              "https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"
            ),
            third_party: q(
              "https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}"
            ),
            third_party2: q(
              "https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"
            ),
            third_party_gen: q(
              "https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}"
            ),
          },
          "gstatic.cn": {
            loader: q("https://www.gstatic.cn/charts/%{version}/loader.js"),
            debug: q(
              "https://www.gstatic.cn/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"
            ),
            debug_i18n: q(
              "https://www.gstatic.cn/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"
            ),
            compiled: q(
              "https://www.gstatic.cn/charts/%{version}/js/jsapi_compiled_%{package}_module.js"
            ),
            compiled_i18n: q(
              "https://www.gstatic.cn/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"
            ),
            css: q(
              "https://www.gstatic.cn/charts/%{version}/css/%{subdir}/%{filename}"
            ),
            css2: q(
              "https://www.gstatic.cn/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"
            ),
            third_party: q(
              "https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}"
            ),
            third_party2: q(
              "https://www.gstatic.cn/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"
            ),
            third_party_gen: q(
              "https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}"
            ),
          },
        },
        ea: ["default"],
        qa: {
          default: [],
          graphics: ["default"],
          ui: ["graphics"],
          ui_base: ["graphics"],
          flashui: ["ui"],
          fw: ["ui"],
          geo: ["ui"],
          annotatedtimeline: ["annotationchart"],
          annotationchart: ["ui", "controls", "corechart", "table"],
          areachart: "browserchart",
          bar: ["fw", "dygraph", "webfontloader"],
          barchart: "browserchart",
          browserchart: ["ui"],
          bubbles: ["fw", "d3"],
          calendar: ["fw"],
          charteditor:
            "ui corechart imagechart annotatedtimeline gauge geochart motionchart orgchart table".split(
              " "
            ),
          charteditor_base:
            "ui_base corechart imagechart annotatedtimeline gauge geochart motionchart orgchart table_base".split(
              " "
            ),
          circles: ["fw", "d3"],
          clusterchart: ["corechart", "d3"],
          columnchart: "browserchart",
          controls: ["ui"],
          controls_base: ["ui_base"],
          corechart: ["ui"],
          gantt: ["fw", "dygraph"],
          gauge: ["ui"],
          geochart: ["geo"],
          geomap: ["flashui", "geo"],
          geomap_base: ["ui_base"],
          helloworld: ["fw"],
          imagechart: ["ui"],
          imageareachart: "imagechart",
          imagebarchart: "imagechart",
          imagelinechart: "imagechart",
          imagepiechart: "imagechart",
          imagesparkline: "imagechart",
          line: ["fw", "dygraph", "webfontloader"],
          linechart: "browserchart",
          map: ["geo"],
          matrix: ["vegachart"],
          motionchart: ["flashui"],
          orgchart: ["ui"],
          overtimecharts: ["ui", "corechart"],
          piechart: "browserchart",
          sankey: ["fw", "d3", "d3.sankey"],
          scatter: ["fw", "dygraph", "webfontloader"],
          scatterchart: "browserchart",
          sunburst: ["fw", "d3"],
          streamgraph: ["fw", "d3"],
          table: ["ui"],
          table_base: ["ui_base"],
          timeline: ["fw", "ui", "dygraph"],
          treemap: ["ui"],
          vegachart: ["graphics"],
          wordtree: ["ui"],
        },
        Ba: {
          d3: { subdir1: "d3", subdir2: "v5", filename: "d3.js" },
          "d3.sankey": {
            subdir1: "d3_sankey",
            subdir2: "v4",
            filename: "d3.sankey.js",
          },
          webfontloader: { subdir: "webfontloader", filename: "webfont.js" },
        },
        Aa: {
          dygraph: {
            subdir: "dygraphs",
            filename: "dygraph-tickers-combined.js",
          },
        },
        pa: {
          default: [{ subdir: "core", filename: "tooltip.css" }],
          annotationchart: [
            { subdir: "annotationchart", filename: "annotationchart.css" },
          ],
          charteditor: [{ subdir: "charteditor", filename: "charteditor.css" }],
          charteditor_base: [
            { subdir: "charteditor_base", filename: "charteditor_base.css" },
          ],
          controls: [{ subdir: "controls", filename: "controls.css" }],
          imagesparkline: [
            { subdir: "imagechart", filename: "imagesparkline.css" },
          ],
          orgchart: [{ subdir: "orgchart", filename: "orgchart.css" }],
          table: [
            { subdir: "table", filename: "table.css" },
            { subdir: "util", filename: "format.css" },
          ],
          table_base: [
            { subdir: "util", filename: "format.css" },
            { subdir: "table", filename: "table_base.css" },
          ],
          ui: [{ subdir: "util", filename: "util.css" }],
          ui_base: [{ subdir: "util", filename: "util_base.css" }],
        },
      }),
        (R.m.$ = {
          ga: {
            "chrome-frame": {
              versions: {
                "1.0.0": {
                  uncompressed: "CFInstall.js",
                  compressed: "CFInstall.min.js",
                },
                "1.0.1": {
                  uncompressed: "CFInstall.js",
                  compressed: "CFInstall.min.js",
                },
                "1.0.2": {
                  uncompressed: "CFInstall.js",
                  compressed: "CFInstall.min.js",
                },
              },
              aliases: { 1: "1.0.2", "1.0": "1.0.2" },
            },
            swfobject: {
              versions: {
                2.1: {
                  uncompressed: "swfobject_src.js",
                  compressed: "swfobject.js",
                },
                2.2: {
                  uncompressed: "swfobject_src.js",
                  compressed: "swfobject.js",
                },
              },
              aliases: { 2: "2.2" },
            },
            "ext-core": {
              versions: {
                "3.1.0": {
                  uncompressed: "ext-core-debug.js",
                  compressed: "ext-core.js",
                },
                "3.0.0": {
                  uncompressed: "ext-core-debug.js",
                  compressed: "ext-core.js",
                },
              },
              aliases: { 3: "3.1.0", "3.0": "3.0.0", 3.1: "3.1.0" },
            },
            scriptaculous: {
              versions: {
                "1.8.3": {
                  uncompressed: "scriptaculous.js",
                  compressed: "scriptaculous.js",
                },
                "1.9.0": {
                  uncompressed: "scriptaculous.js",
                  compressed: "scriptaculous.js",
                },
                "1.8.1": {
                  uncompressed: "scriptaculous.js",
                  compressed: "scriptaculous.js",
                },
                "1.8.2": {
                  uncompressed: "scriptaculous.js",
                  compressed: "scriptaculous.js",
                },
              },
              aliases: { 1: "1.9.0", 1.8: "1.8.3", 1.9: "1.9.0" },
            },
            webfont: {
              versions: {
                "1.0.12": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.13": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.14": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.15": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.10": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.11": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.27": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.28": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.29": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.23": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.24": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.25": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.26": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.21": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.22": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.3": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.4": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.5": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.6": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.9": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.16": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.17": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.0": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.18": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.1": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.19": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
                "1.0.2": {
                  uncompressed: "webfont_debug.js",
                  compressed: "webfont.js",
                },
              },
              aliases: { 1: "1.0.29", "1.0": "1.0.29" },
            },
            jqueryui: {
              versions: {
                "1.8.17": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.16": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.15": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.14": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.4": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.13": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.5": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.12": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.6": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.11": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.7": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.10": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.8": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.9": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.6.0": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.7.0": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.5.2": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.0": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.7.1": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.5.3": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.1": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.7.2": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.8.2": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
                "1.7.3": {
                  uncompressed: "jquery-ui.js",
                  compressed: "jquery-ui.min.js",
                },
              },
              aliases: {
                1: "1.8.17",
                1.5: "1.5.3",
                1.6: "1.6.0",
                1.7: "1.7.3",
                1.8: "1.8.17",
                "1.8.3": "1.8.4",
              },
            },
            mootools: {
              versions: {
                "1.3.0": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.2.1": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.1.2": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.4.0": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.3.1": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.2.2": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.4.1": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.3.2": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.2.3": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.4.2": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.2.4": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.2.5": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
                "1.1.1": {
                  uncompressed: "mootools.js",
                  compressed: "mootools-yui-compressed.js",
                },
              },
              aliases: {
                1: "1.1.2",
                1.1: "1.1.2",
                1.2: "1.2.5",
                1.3: "1.3.2",
                1.4: "1.4.2",
                1.11: "1.1.1",
              },
            },
            yui: {
              versions: {
                "2.8.0r4": {
                  uncompressed: "build/yuiloader/yuiloader.js",
                  compressed: "build/yuiloader/yuiloader-min.js",
                },
                "2.9.0": {
                  uncompressed: "build/yuiloader/yuiloader.js",
                  compressed: "build/yuiloader/yuiloader-min.js",
                },
                "2.8.1": {
                  uncompressed: "build/yuiloader/yuiloader.js",
                  compressed: "build/yuiloader/yuiloader-min.js",
                },
                "2.6.0": {
                  uncompressed: "build/yuiloader/yuiloader.js",
                  compressed: "build/yuiloader/yuiloader-min.js",
                },
                "2.7.0": {
                  uncompressed: "build/yuiloader/yuiloader.js",
                  compressed: "build/yuiloader/yuiloader-min.js",
                },
                "3.3.0": {
                  uncompressed: "build/yui/yui.js",
                  compressed: "build/yui/yui-min.js",
                },
                "2.8.2r1": {
                  uncompressed: "build/yuiloader/yuiloader.js",
                  compressed: "build/yuiloader/yuiloader-min.js",
                },
              },
              aliases: {
                2: "2.9.0",
                2.6: "2.6.0",
                2.7: "2.7.0",
                2.8: "2.8.2r1",
                "2.8.0": "2.8.0r4",
                "2.8.2": "2.8.2r1",
                2.9: "2.9.0",
                3: "3.3.0",
                3.3: "3.3.0",
              },
            },
            prototype: {
              versions: {
                "1.6.1.0": {
                  uncompressed: "prototype.js",
                  compressed: "prototype.js",
                },
                "1.6.0.2": {
                  uncompressed: "prototype.js",
                  compressed: "prototype.js",
                },
                "1.7.0.0": {
                  uncompressed: "prototype.js",
                  compressed: "prototype.js",
                },
                "1.6.0.3": {
                  uncompressed: "prototype.js",
                  compressed: "prototype.js",
                },
              },
              aliases: {
                1: "1.7.0.0",
                1.6: "1.6.1.0",
                "1.6.0": "1.6.0.3",
                "1.6.1": "1.6.1.0",
                1.7: "1.7.0.0",
                "1.7.0": "1.7.0.0",
              },
            },
            jquery: {
              versions: {
                "1.2.3": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.2.6": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.3.0": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.3.1": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.3.2": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.4.0": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.4.1": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.4.2": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.4.3": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.4.4": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.5.0": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.5.1": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.5.2": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.6.0": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.6.1": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.6.2": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.6.3": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.6.4": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.7.0": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
                "1.7.1": {
                  uncompressed: "jquery.js",
                  compressed: "jquery.min.js",
                },
              },
              aliases: {
                1: "1.7.1",
                1.2: "1.2.6",
                1.3: "1.3.2",
                1.4: "1.4.4",
                1.5: "1.5.2",
                1.6: "1.6.4",
                1.7: "1.7.1",
              },
            },
            dojo: {
              versions: {
                "1.3.0": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.4.0": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.3.1": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.5.0": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.4.1": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.3.2": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.2.3": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.6.0": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.5.1": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.7.0": {
                  uncompressed: "dojo/dojo.js.uncompressed.js",
                  compressed: "dojo/dojo.js",
                },
                "1.6.1": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.4.3": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.7.1": {
                  uncompressed: "dojo/dojo.js.uncompressed.js",
                  compressed: "dojo/dojo.js",
                },
                "1.7.2": {
                  uncompressed: "dojo/dojo.js.uncompressed.js",
                  compressed: "dojo/dojo.js",
                },
                "1.2.0": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
                "1.1.1": {
                  uncompressed: "dojo/dojo.xd.js.uncompressed.js",
                  compressed: "dojo/dojo.xd.js",
                },
              },
              aliases: {
                1: "1.6.1",
                1.1: "1.1.1",
                1.2: "1.2.3",
                1.3: "1.3.2",
                1.4: "1.4.3",
                1.5: "1.5.1",
                1.6: "1.6.1",
                1.7: "1.7.2",
              },
            },
          },
        }),
        (R.m.aa = {
          af: !0,
          am: !0,
          az: !0,
          ar: !0,
          arb: "ar",
          bg: !0,
          bn: !0,
          ca: !0,
          cs: !0,
          cmn: "zh",
          da: !0,
          de: !0,
          el: !0,
          en: !0,
          en_gb: !0,
          es: !0,
          es_419: !0,
          et: !0,
          eu: !0,
          fa: !0,
          fi: !0,
          fil: !0,
          fr: !0,
          fr_ca: !0,
          gl: !0,
          ka: !0,
          gu: !0,
          he: "iw",
          hi: !0,
          hr: !0,
          hu: !0,
          hy: !0,
          id: !0,
          in: "id",
          is: !0,
          it: !0,
          iw: !0,
          ja: !0,
          ji: "yi",
          jv: !1,
          jw: "jv",
          km: !0,
          kn: !0,
          ko: !0,
          lo: !0,
          lt: !0,
          lv: !0,
          ml: !0,
          mn: !0,
          mo: "ro",
          mr: !0,
          ms: !0,
          nb: "no",
          ne: !0,
          nl: !0,
          no: !0,
          pl: !0,
          pt: "pt_br",
          pt_br: !0,
          pt_pt: !0,
          ro: !0,
          ru: !0,
          si: !0,
          sk: !0,
          sl: !0,
          sr: !0,
          sv: !0,
          sw: !0,
          swh: "sw",
          ta: !0,
          te: !0,
          th: !0,
          tl: "fil",
          tr: !0,
          uk: !0,
          ur: !0,
          vi: !0,
          yi: !1,
          zh: "zh_cn",
          zh_cn: !0,
          zh_hk: !0,
          zh_tw: !0,
          zsm: "ms",
          zu: !0,
        }),
        (R.m.M = {}),
        (R.m.M.O = {
          1: "1.0",
          "1.0": "current",
          1.1: "upcoming",
          1.2: "testing",
          41: "pre-45",
          42: "pre-45",
          43: "pre-45",
          44: "pre-45",
          46: "46.1",
          46.1: "46.2",
          48: "48.1",
          current: "51",
          upcoming: "51",
        }),
        (G.prototype.T = !0),
        (G.prototype.R = function () {
          return this.g.toString();
        }),
        (G.prototype.toString = function () {
          return this.g + "";
        });
      var W = /%{(\w+)}/g,
        H =
          /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        V = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
      function U(e, t, n) {
        return (
          (e = (function (e, t) {
            var n = z(e);
            if (!H.test(n))
              throw Error("Invalid TrustedResourceUrl format: " + n);
            return Y(
              (e = n.replace(W, function (e, r) {
                if (!Object.prototype.hasOwnProperty.call(t, r))
                  throw Error(
                    'Found marker, "' +
                      r +
                      '", in format string, "' +
                      n +
                      '", but no valid label mapping found in args: ' +
                      JSON.stringify(t)
                  );
                return (e = t[r]) instanceof I
                  ? z(e)
                  : encodeURIComponent(String(e));
              }))
            );
          })(e, t)),
          (t = (e = V.exec(F(e).toString()))[3] || ""),
          Y(e[1] + K("?", e[2] || "", n) + K("#", t, void 0))
        );
      }
      var X = {};
      function Y(e) {
        if (void 0 === N) {
          var t = null,
            n = E.trustedTypes;
          if (n && n.createPolicy) {
            try {
              t = n.createPolicy("goog#html", {
                createHTML: O,
                createScript: O,
                createScriptURL: O,
              });
            } catch (e) {
              E.console && E.console.error(e.message);
            }
            N = t;
          } else N = t;
        }
        return new G((e = (t = N) ? t.createScriptURL(e) : e), X);
      }
      function K(e, t, n) {
        if (null == n) return t;
        if ("string" == typeof n) return n ? e + encodeURIComponent(n) : "";
        for (var r in n)
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            var s = n[r];
            s = Array.isArray(s) ? s : [s];
            for (var i = 0; i < s.length; i++) {
              var o = s[i];
              null != o &&
                (t || (t = e),
                (t +=
                  (t.length > e.length ? "&" : "") +
                  encodeURIComponent(r) +
                  "=" +
                  encodeURIComponent(String(o))));
            }
          }
        return t;
      }
      var J = Array.prototype.some
        ? function (e, t) {
            return Array.prototype.some.call(e, t, void 0);
          }
        : function (e, t) {
            for (
              var n = e.length,
                r = "string" == typeof e ? e.split("") : e,
                s = 0;
              s < n;
              s++
            )
              if (s in r && t.call(void 0, r[s], s, e)) return !0;
            return !1;
          };
      var Z,
        Q =
          "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
            " "
          );
      e: {
        var ee = E.navigator;
        if (ee) {
          var te = ee.userAgent;
          if (te) {
            Z = te;
            break e;
          }
        }
        Z = "";
      }
      var ne = /^[\w+/_-]+[=]{0,2}$/;
      function re(e, t) {
        (this.g = e[E.Symbol.iterator]()), (this.h = t), (this.i = 0);
      }
      (re.prototype[Symbol.iterator] = function () {
        return this;
      }),
        (re.prototype.next = function () {
          var e = this.g.next();
          return {
            value: e.done ? void 0 : this.h.call(void 0, e.value, this.i++),
            done: e.done,
          };
        });
      var se =
        "StopIteration" in E
          ? E.StopIteration
          : { message: "StopIteration", stack: "" };
      function ie() {}
      function oe(e) {
        if (e instanceof le || e instanceof ce || e instanceof ue) return e;
        if ("function" == typeof e.next)
          return new le(function () {
            return ae(e);
          });
        if ("function" == typeof e[Symbol.iterator])
          return new le(function () {
            return e[Symbol.iterator]();
          });
        if ("function" == typeof e.F)
          return new le(function () {
            return ae(e.F());
          });
        throw Error("Not an iterator or iterable.");
      }
      function ae(e) {
        if (!(e instanceof ie)) return e;
        var t = !1;
        return {
          next: function () {
            for (var n; !t; )
              try {
                n = e.next();
                break;
              } catch (e) {
                if (e !== se) throw e;
                t = !0;
              }
            return { value: n, done: t };
          },
        };
      }
      function le(e) {
        this.g = e;
      }
      function ce(e) {
        this.h = e;
      }
      function ue(e) {
        le.call(this, function () {
          return e;
        }),
          (this.h = e);
      }
      function de(e, t) {
        (this.h = {}), (this.g = []), (this.i = this.size = 0);
        var n = arguments.length;
        if (1 < n) {
          if (n % 2) throw Error("Uneven number of arguments");
          for (var r = 0; r < n; r += 2)
            this.set(arguments[r], arguments[r + 1]);
        } else if (e)
          if (e instanceof de)
            for (n = e.G(), r = 0; r < n.length; r++)
              this.set(n[r], e.get(n[r]));
          else for (r in e) this.set(r, e[r]);
      }
      function pe(e) {
        if (e.size != e.g.length) {
          for (var t = 0, n = 0; t < e.g.length; ) {
            var r = e.g[t];
            fe(e.h, r) && (e.g[n++] = r), t++;
          }
          e.g.length = n;
        }
        if (e.size != e.g.length) {
          var s = {};
          for (n = t = 0; t < e.g.length; )
            fe(s, (r = e.g[t])) || ((e.g[n++] = r), (s[r] = 1)), t++;
          e.g.length = n;
        }
      }
      function fe(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      (ie.prototype.next = function () {
        return ie.prototype.g.call(this);
      }),
        (ie.prototype.g = function () {
          throw se;
        }),
        (ie.prototype.F = function () {
          return this;
        }),
        (le.prototype.F = function () {
          return new ce(this.g());
        }),
        (le.prototype[Symbol.iterator] = function () {
          return new ue(this.g());
        }),
        (le.prototype.i = function () {
          return new ue(this.g());
        }),
        h(ce, ie),
        (ce.prototype.g = function () {
          var e = this.h.next();
          if (e.done) throw se;
          return e.value;
        }),
        (ce.prototype.next = function () {
          return ce.prototype.g.call(this);
        }),
        (ce.prototype[Symbol.iterator] = function () {
          return new ue(this.h);
        }),
        (ce.prototype.i = function () {
          return new ue(this.h);
        }),
        h(ue, le),
        (ue.prototype.next = function () {
          return this.h.next();
        }),
        ((e = de.prototype).H = function () {
          pe(this);
          for (var e = [], t = 0; t < this.g.length; t++)
            e.push(this.h[this.g[t]]);
          return e;
        }),
        (e.G = function () {
          return pe(this), this.g.concat();
        }),
        (e.has = function (e) {
          return fe(this.h, e);
        }),
        (e.get = function (e, t) {
          return fe(this.h, e) ? this.h[e] : t;
        }),
        (e.set = function (e, t) {
          fe(this.h, e) || ((this.size += 1), this.g.push(e), this.i++),
            (this.h[e] = t);
        }),
        (e.forEach = function (e, t) {
          for (var n = this.G(), r = 0; r < n.length; r++) {
            var s = n[r],
              i = this.get(s);
            e.call(t, i, s, this);
          }
        }),
        (e.keys = function () {
          return oe(this.F(!0)).i();
        }),
        (e.values = function () {
          return oe(this.F(!1)).i();
        }),
        (e.entries = function () {
          var e = this;
          return (function (e, t) {
            return new re(e, t);
          })(this.keys(), function (t) {
            return [t, e.get(t)];
          });
        }),
        (e.F = function (e) {
          pe(this);
          var t = 0,
            n = this.i,
            r = this,
            s = new ie();
          return (
            (s.g = function () {
              if (n != r.i)
                throw Error(
                  "The map has changed since the iterator was created"
                );
              if (t >= r.g.length) throw se;
              var s = r.g[t++];
              return e ? s : r.h[s];
            }),
            (s.next = s.g.bind(s)),
            s
          );
        });
      var he =
        /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
      function me(e) {
        var t;
        (this.g = this.s = this.j = ""),
          (this.v = null),
          (this.o = this.h = ""),
          (this.l = !1),
          e instanceof me
            ? ((this.l = e.l),
              ge(this, e.j),
              (this.s = e.s),
              (this.g = e.g),
              ve(this, e.v),
              (this.h = e.h),
              ye(this, _e(e.i)),
              (this.o = e.o))
            : e && (t = String(e).match(he))
            ? ((this.l = !1),
              ge(this, t[1] || "", !0),
              (this.s = be(t[2] || "")),
              (this.g = be(t[3] || "", !0)),
              ve(this, t[4]),
              (this.h = be(t[5] || "", !0)),
              ye(this, t[6] || "", !0),
              (this.o = be(t[7] || "")))
            : ((this.l = !1), (this.i = new ke(null, this.l)));
      }
      function ge(e, t, n) {
        (e.j = n ? be(t, !0) : t), e.j && (e.j = e.j.replace(/:$/, ""));
      }
      function ve(e, t) {
        if (t) {
          if (((t = Number(t)), isNaN(t) || 0 > t))
            throw Error("Bad port number " + t);
          e.v = t;
        } else e.v = null;
      }
      function ye(e, t, n) {
        t instanceof ke
          ? ((e.i = t),
            (function (e, t) {
              t &&
                !e.j &&
                (Me(e),
                (e.i = null),
                e.g.forEach(function (e, t) {
                  var n = t.toLowerCase();
                  if (t != n && (Le(this, t), Le(this, n), 0 < e.length)) {
                    this.i = null;
                    var r = (t = this.g).set;
                    n = Pe(this, n);
                    var s = e.length;
                    if (0 < s) {
                      for (var i = Array(s), o = 0; o < s; o++) i[o] = e[o];
                      s = i;
                    } else s = [];
                    r.call(t, n, s), (this.h += e.length);
                  }
                }, e)),
                (e.j = t);
            })(e.i, e.l))
          : (n || (t = we(t, Te)), (e.i = new ke(t, e.l)));
      }
      function be(e, t) {
        return e
          ? t
            ? decodeURI(e.replace(/%25/g, "%2525"))
            : decodeURIComponent(e)
          : "";
      }
      function we(e, t, n) {
        return "string" == typeof e
          ? ((e = encodeURI(e).replace(t, je)),
            n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            e)
          : null;
      }
      function je(e) {
        return (
          "%" +
          (((e = e.charCodeAt(0)) >> 4) & 15).toString(16) +
          (15 & e).toString(16)
        );
      }
      (me.prototype.toString = function () {
        var e = [],
          t = this.j;
        t && e.push(we(t, Se, !0), ":");
        var n = this.g;
        return (
          (n || "file" == t) &&
            (e.push("//"),
            (t = this.s) && e.push(we(t, Se, !0), "@"),
            e.push(
              encodeURIComponent(String(n)).replace(
                /%25([0-9a-fA-F]{2})/g,
                "%$1"
              )
            ),
            null != (n = this.v) && e.push(":", String(n))),
          (n = this.h) &&
            (this.g && "/" != n.charAt(0) && e.push("/"),
            e.push(we(n, "/" == n.charAt(0) ? Ee : xe, !0))),
          (n = this.i.toString()) && e.push("?", n),
          (n = this.o) && e.push("#", we(n, Ce)),
          e.join("")
        );
      }),
        (me.prototype.resolve = function (e) {
          var t = new me(this),
            n = !!e.j;
          n ? ge(t, e.j) : (n = !!e.s),
            n ? (t.s = e.s) : (n = !!e.g),
            n ? (t.g = e.g) : (n = null != e.v);
          var r = e.h;
          if (n) ve(t, e.v);
          else if ((n = !!e.h)) {
            if ("/" != r.charAt(0))
              if (this.g && !this.h) r = "/" + r;
              else {
                var s = t.h.lastIndexOf("/");
                -1 != s && (r = t.h.substr(0, s + 1) + r);
              }
            if (".." == (s = r) || "." == s) r = "";
            else if (-1 != s.indexOf("./") || -1 != s.indexOf("/.")) {
              (r = 0 == s.lastIndexOf("/", 0)), (s = s.split("/"));
              for (var i = [], o = 0; o < s.length; ) {
                var a = s[o++];
                "." == a
                  ? r && o == s.length && i.push("")
                  : ".." == a
                  ? ((1 < i.length || (1 == i.length && "" != i[0])) && i.pop(),
                    r && o == s.length && i.push(""))
                  : (i.push(a), (r = !0));
              }
              r = i.join("/");
            } else r = s;
          }
          return (
            n ? (t.h = r) : (n = "" !== e.i.toString()),
            n ? ye(t, _e(e.i)) : (n = !!e.o),
            n && (t.o = e.o),
            t
          );
        });
      var Se = /[#\/\?@]/g,
        xe = /[#\?:]/g,
        Ee = /[#\?]/g,
        Te = /[#\?@]/g,
        Ce = /#/g;
      function ke(e, t) {
        (this.h = this.g = null), (this.i = e || null), (this.j = !!t);
      }
      function Me(e) {
        e.g ||
          ((e.g = new de()),
          (e.h = 0),
          e.i &&
            (function (e, t) {
              if (e) {
                e = e.split("&");
                for (var n = 0; n < e.length; n++) {
                  var r = e[n].indexOf("="),
                    s = null;
                  if (0 <= r) {
                    var i = e[n].substring(0, r);
                    s = e[n].substring(r + 1);
                  } else i = e[n];
                  t(i, s ? decodeURIComponent(s.replace(/\+/g, " ")) : "");
                }
              }
            })(e.i, function (t, n) {
              e.add(decodeURIComponent(t.replace(/\+/g, " ")), n);
            }));
      }
      function Le(e, t) {
        Me(e),
          (t = Pe(e, t)),
          e.g.has(t) &&
            ((e.i = null),
            (e.h -= e.g.get(t).length),
            fe((e = e.g).h, t) &&
              (delete e.h[t],
              --e.size,
              e.i++,
              e.g.length > 2 * e.size && pe(e)));
      }
      function Ae(e, t) {
        return Me(e), (t = Pe(e, t)), e.g.has(t);
      }
      function _e(e) {
        var t = new ke();
        return (t.i = e.i), e.g && ((t.g = new de(e.g)), (t.h = e.h)), t;
      }
      function Pe(e, t) {
        return (t = String(t)), e.j && (t = t.toLowerCase()), t;
      }
      ((e = ke.prototype).add = function (e, t) {
        Me(this), (this.i = null), (e = Pe(this, e));
        var n = this.g.get(e);
        return n || this.g.set(e, (n = [])), n.push(t), (this.h += 1), this;
      }),
        (e.forEach = function (e, t) {
          Me(this),
            this.g.forEach(function (n, r) {
              n.forEach(function (n) {
                e.call(t, n, r, this);
              }, this);
            }, this);
        }),
        (e.G = function () {
          Me(this);
          for (
            var e = this.g.H(), t = this.g.G(), n = [], r = 0;
            r < t.length;
            r++
          )
            for (var s = e[r], i = 0; i < s.length; i++) n.push(t[r]);
          return n;
        }),
        (e.H = function (e) {
          Me(this);
          var t = [];
          if ("string" == typeof e)
            Ae(this, e) && (t = t.concat(this.g.get(Pe(this, e))));
          else {
            e = this.g.H();
            for (var n = 0; n < e.length; n++) t = t.concat(e[n]);
          }
          return t;
        }),
        (e.set = function (e, t) {
          return (
            Me(this),
            (this.i = null),
            Ae(this, (e = Pe(this, e))) && (this.h -= this.g.get(e).length),
            this.g.set(e, [t]),
            (this.h += 1),
            this
          );
        }),
        (e.get = function (e, t) {
          return e && 0 < (e = this.H(e)).length ? String(e[0]) : t;
        }),
        (e.toString = function () {
          if (this.i) return this.i;
          if (!this.g) return "";
          for (var e = [], t = this.g.G(), n = 0; n < t.length; n++) {
            var r = t[n],
              s = encodeURIComponent(String(r));
            r = this.H(r);
            for (var i = 0; i < r.length; i++) {
              var o = s;
              "" !== r[i] && (o += "=" + encodeURIComponent(String(r[i]))),
                e.push(o);
            }
          }
          return (this.i = e.join("&"));
        });
      var Oe,
        $e = {
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          colspan: "colSpan",
          frameborder: "frameBorder",
          height: "height",
          maxlength: "maxLength",
          nonce: "nonce",
          role: "role",
          rowspan: "rowSpan",
          type: "type",
          usemap: "useMap",
          valign: "vAlign",
          width: "width",
        };
      function Ie(e, t) {
        return (
          (t = String(t)),
          "application/xhtml+xml" === e.contentType && (t = t.toLowerCase()),
          e.createElement(t)
        );
      }
      function ze(e) {
        this.g = e || E.document || document;
      }
      function qe(e, t) {
        (this.i = e), (this.j = t), (this.h = 0), (this.g = null);
      }
      function Ne(e, t) {
        e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
      }
      function De(e) {
        E.setTimeout(function () {
          throw e;
        }, 0);
      }
      function Be() {
        this.h = this.g = null;
      }
      function Re() {
        var e = Ue,
          t = null;
        return (
          e.g &&
            ((t = e.g), (e.g = e.g.next), e.g || (e.h = null), (t.next = null)),
          t
        );
      }
      (qe.prototype.get = function () {
        if (0 < this.h) {
          this.h--;
          var e = this.g;
          (this.g = e.next), (e.next = null);
        } else e = this.i();
        return e;
      }),
        (Be.prototype.add = function (e, t) {
          var n = Fe.get();
          n.set(e, t), this.h ? (this.h.next = n) : (this.g = n), (this.h = n);
        });
      var Ge,
        Fe = new qe(
          function () {
            return new We();
          },
          function (e) {
            return e.reset();
          }
        );
      function We() {
        this.next = this.g = this.h = null;
      }
      function He(e, t) {
        Ge ||
          (function () {
            if (E.Promise && E.Promise.resolve) {
              var e = E.Promise.resolve(void 0);
              Ge = function () {
                e.then(Xe);
              };
            } else
              Ge = function () {
                var e = Xe;
                "function" != typeof E.setImmediate ||
                (E.Window &&
                  E.Window.prototype &&
                  -1 == Z.indexOf("Edge") &&
                  E.Window.prototype.setImmediate == E.setImmediate)
                  ? (Oe ||
                      (Oe = (function () {
                        var e = E.MessageChannel;
                        if (
                          (void 0 === e &&
                            "undefined" != typeof window &&
                            window.postMessage &&
                            window.addEventListener &&
                            -1 == Z.indexOf("Presto") &&
                            (e = function () {
                              var e = Ie(document, "IFRAME");
                              (e.style.display = "none"),
                                document.documentElement.appendChild(e);
                              var t = e.contentWindow;
                              (e = t.document).open(), e.close();
                              var n = "callImmediate" + Math.random(),
                                r =
                                  "file:" == t.location.protocol
                                    ? "*"
                                    : t.location.protocol +
                                      "//" +
                                      t.location.host;
                              (e = A(function (e) {
                                ("*" != r && e.origin != r) ||
                                  e.data != n ||
                                  this.port1.onmessage();
                              }, this)),
                                t.addEventListener("message", e, !1),
                                (this.port1 = {}),
                                (this.port2 = {
                                  postMessage: function () {
                                    t.postMessage(n, r);
                                  },
                                });
                            }),
                          void 0 !== e &&
                            -1 == Z.indexOf("Trident") &&
                            -1 == Z.indexOf("MSIE"))
                        ) {
                          var t = new e(),
                            n = {},
                            r = n;
                          return (
                            (t.port1.onmessage = function () {
                              if (void 0 !== n.next) {
                                var e = (n = n.next).P;
                                (n.P = null), e();
                              }
                            }),
                            function (e) {
                              (r.next = { P: e }),
                                (r = r.next),
                                t.port2.postMessage(0);
                            }
                          );
                        }
                        return function (e) {
                          E.setTimeout(e, 0);
                        };
                      })()),
                    Oe(e))
                  : E.setImmediate(e);
              };
          })(),
          Ve || (Ge(), (Ve = !0)),
          Ue.add(e, t);
      }
      (We.prototype.set = function (e, t) {
        (this.h = e), (this.g = t), (this.next = null);
      }),
        (We.prototype.reset = function () {
          this.next = this.g = this.h = null;
        });
      var Ve = !1,
        Ue = new Be();
      function Xe() {
        for (var e; (e = Re()); ) {
          try {
            e.h.call(e.g);
          } catch (e) {
            De(e);
          }
          Ne(Fe, e);
        }
        Ve = !1;
      }
      function Ye(e) {
        if (!e) return !1;
        try {
          return !!e.$goog_Thenable;
        } catch (e) {
          return !1;
        }
      }
      function Ke(e) {
        if (
          ((this.g = 0),
          (this.s = void 0),
          (this.j = this.h = this.i = null),
          (this.l = this.o = !1),
          e != C)
        )
          try {
            var t = this;
            e.call(
              void 0,
              function (e) {
                nt(t, 2, e);
              },
              function (e) {
                nt(t, 3, e);
              }
            );
          } catch (e) {
            nt(this, 3, e);
          }
      }
      function Je() {
        (this.next = this.i = this.h = this.j = this.g = null), (this.l = !1);
      }
      Je.prototype.reset = function () {
        (this.i = this.h = this.j = this.g = null), (this.l = !1);
      };
      var Ze = new qe(
        function () {
          return new Je();
        },
        function (e) {
          e.reset();
        }
      );
      function Qe(e, t, n) {
        var r = Ze.get();
        return (r.j = e), (r.h = t), (r.i = n), r;
      }
      function et(e, t) {
        if (0 == e.g)
          if (e.i) {
            var n = e.i;
            if (n.h) {
              for (
                var r = 0, s = null, i = null, o = n.h;
                o && (o.l || (r++, o.g == e && (s = o), !(s && 1 < r)));
                o = o.next
              )
                s || (i = o);
              s &&
                (0 == n.g && 1 == r
                  ? et(n, t)
                  : (i
                      ? ((r = i).next == n.j && (n.j = r),
                        (r.next = r.next.next))
                      : st(n),
                    it(n, s, 3, t)));
            }
            e.i = null;
          } else nt(e, 3, t);
      }
      function tt(e, t) {
        e.h || (2 != e.g && 3 != e.g) || rt(e),
          e.j ? (e.j.next = t) : (e.h = t),
          (e.j = t);
      }
      function nt(e, t, n) {
        if (0 == e.g) {
          e === n &&
            ((t = 3), (n = new TypeError("Promise cannot resolve to itself"))),
            (e.g = 1);
          e: {
            var r = n,
              s = e.C,
              i = e.D;
            if (r instanceof Ke) {
              tt(r, Qe(s || C, i || null, e));
              var o = !0;
            } else if (Ye(r)) r.then(s, i, e), (o = !0);
            else {
              if (k(r))
                try {
                  var a = r.then;
                  if ("function" == typeof a) {
                    !(function (e, t, n, r, s) {
                      function i(e) {
                        a || ((a = !0), r.call(s, e));
                      }
                      function o(e) {
                        a || ((a = !0), n.call(s, e));
                      }
                      var a = !1;
                      try {
                        t.call(e, o, i);
                      } catch (e) {
                        i(e);
                      }
                    })(r, a, s, i, e),
                      (o = !0);
                    break e;
                  }
                } catch (t) {
                  i.call(e, t), (o = !0);
                  break e;
                }
              o = !1;
            }
          }
          o ||
            ((e.s = n),
            (e.g = t),
            (e.i = null),
            rt(e),
            3 != t ||
              n instanceof lt ||
              (function (e, t) {
                (e.l = !0),
                  He(function () {
                    e.l && at.call(null, t);
                  });
              })(e, n));
        }
      }
      function rt(e) {
        e.o || ((e.o = !0), He(e.v, e));
      }
      function st(e) {
        var t = null;
        return (
          e.h && ((t = e.h), (e.h = t.next), (t.next = null)),
          e.h || (e.j = null),
          t
        );
      }
      function it(e, t, n, r) {
        if (3 == n && t.h && !t.l) for (; e && e.l; e = e.i) e.l = !1;
        if (t.g) (t.g.i = null), ot(t, n, r);
        else
          try {
            t.l ? t.j.call(t.i) : ot(t, n, r);
          } catch (e) {
            at.call(null, e);
          }
        Ne(Ze, t);
      }
      function ot(e, t, n) {
        2 == t ? e.j.call(e.i, n) : e.h && e.h.call(e.i, n);
      }
      (Ke.prototype.then = function (e, t, n) {
        return (function (e, t, n, r) {
          var s = Qe(null, null, null);
          return (
            (s.g = new Ke(function (e, i) {
              (s.j = t
                ? function (n) {
                    try {
                      var s = t.call(r, n);
                      e(s);
                    } catch (e) {
                      i(e);
                    }
                  }
                : e),
                (s.h = n
                  ? function (t) {
                      try {
                        var s = n.call(r, t);
                        void 0 === s && t instanceof lt ? i(t) : e(s);
                      } catch (e) {
                        i(e);
                      }
                    }
                  : i);
            })),
            (s.g.i = e),
            tt(e, s),
            s.g
          );
        })(
          this,
          "function" == typeof e ? e : null,
          "function" == typeof t ? t : null,
          n
        );
      }),
        (Ke.prototype.$goog_Thenable = !0),
        (Ke.prototype.cancel = function (e) {
          if (0 == this.g) {
            var t = new lt(e);
            He(function () {
              et(this, t);
            }, this);
          }
        }),
        (Ke.prototype.C = function (e) {
          (this.g = 0), nt(this, 2, e);
        }),
        (Ke.prototype.D = function (e) {
          (this.g = 0), nt(this, 3, e);
        }),
        (Ke.prototype.v = function () {
          for (var e; (e = st(this)); ) it(this, e, this.g, this.s);
          this.o = !1;
        });
      var at = De;
      function lt(e) {
        $.call(this, e);
      }
      function ct(e) {
        var t = bt;
        (this.l = []),
          (this.J = t),
          (this.I = e || null),
          (this.j = this.i = !1),
          (this.h = void 0),
          (this.C = this.L = this.s = !1),
          (this.o = 0),
          (this.g = null),
          (this.v = 0);
      }
      function ut(e, t, n) {
        (e.i = !0), (e.h = n), (e.j = !t), ht(e);
      }
      function dt(e) {
        if (e.i) {
          if (!e.C) throw new mt(e);
          e.C = !1;
        }
      }
      function pt(e, t, n, r) {
        e.l.push([t, n, r]), e.i && ht(e);
      }
      function ft(e) {
        return J(e.l, function (e) {
          return "function" == typeof e[1];
        });
      }
      function ht(e) {
        if (e.o && e.i && ft(e)) {
          var t = e.o,
            n = yt[t];
          n && (E.clearTimeout(n.g), delete yt[t]), (e.o = 0);
        }
        e.g && (e.g.v--, delete e.g), (t = e.h);
        for (var r = (n = !1); e.l.length && !e.s; ) {
          var s = e.l.shift(),
            i = s[0],
            o = s[1];
          if (((s = s[2]), (i = e.j ? o : i)))
            try {
              var a = i.call(s || e.I, t);
              void 0 !== a &&
                ((e.j = e.j && (a == t || a instanceof Error)), (e.h = t = a)),
                (Ye(t) ||
                  ("function" == typeof E.Promise && t instanceof E.Promise)) &&
                  ((r = !0), (e.s = !0));
            } catch (r) {
              (t = r), (e.j = !0), ft(e) || (n = !0);
            }
        }
        (e.h = t),
          r &&
            ((a = A(e.D, e, !0)),
            (r = A(e.D, e, !1)),
            t instanceof ct ? (pt(t, a, r), (t.L = !0)) : t.then(a, r)),
          n && ((t = new vt(t)), (yt[t.g] = t), (e.o = t.g));
      }
      function mt() {
        $.call(this);
      }
      function gt() {
        $.call(this);
      }
      function vt(e) {
        (this.g = E.setTimeout(A(this.i, this), 0)), (this.h = e);
      }
      P(lt, $),
        (lt.prototype.name = "cancel"),
        (ct.prototype.cancel = function (e) {
          if (this.i) this.h instanceof ct && this.h.cancel();
          else {
            if (this.g) {
              var t = this.g;
              delete this.g, e ? t.cancel(e) : (t.v--, 0 >= t.v && t.cancel());
            }
            this.J ? this.J.call(this.I, this) : (this.C = !0),
              this.i || ((e = new gt(this)), dt(this), ut(this, !1, e));
          }
        }),
        (ct.prototype.D = function (e, t) {
          (this.s = !1), ut(this, e, t);
        }),
        (ct.prototype.then = function (e, t, n) {
          var r,
            s,
            i = new Ke(function (e, t) {
              (s = e), (r = t);
            });
          return (
            pt(this, s, function (e) {
              e instanceof gt ? i.cancel() : r(e);
            }),
            i.then(e, t, n)
          );
        }),
        (ct.prototype.$goog_Thenable = !0),
        P(mt, $),
        (mt.prototype.message = "Deferred has already fired"),
        (mt.prototype.name = "AlreadyCalledError"),
        P(gt, $),
        (gt.prototype.message = "Deferred was canceled"),
        (gt.prototype.name = "CanceledError"),
        (vt.prototype.i = function () {
          throw (delete yt[this.g], this.h);
        });
      var yt = {};
      function bt() {
        if (this && this.U) {
          var e = this.U;
          e && "SCRIPT" == e.tagName && wt(e, !0, this.W);
        }
      }
      function wt(e, t, n) {
        null != n && E.clearTimeout(n),
          (e.onload = C),
          (e.onerror = C),
          (e.onreadystatechange = C),
          t &&
            window.setTimeout(function () {
              e && e.parentNode && e.parentNode.removeChild(e);
            }, 0);
      }
      function jt(e, t) {
        var n = "Jsloader error (code #" + e + ")";
        t && (n += ": " + t), $.call(this, n), (this.code = e);
      }
      function St(e) {
        var t = { timeout: 3e4, attributes: { async: !1, defer: !1 } },
          n = t.document || document,
          r = F(e).toString(),
          s = Ie(new ze(n).g, "SCRIPT"),
          i = { U: s, W: void 0 },
          o = new ct(i),
          a = null,
          l = null != t.timeout ? t.timeout : 5e3;
        return (
          0 < l &&
            ((a = window.setTimeout(function () {
              wt(s, !0);
              var e = new jt(1, "Timeout reached for loading script " + r);
              dt(o), ut(o, !1, e);
            }, l)),
            (i.W = a)),
          (s.onload = s.onreadystatechange =
            function () {
              (s.readyState &&
                "loaded" != s.readyState &&
                "complete" != s.readyState) ||
                (wt(s, t.oa || !1, a), dt(o), ut(o, !0, null));
            }),
          (s.onerror = function () {
            wt(s, !0, a);
            var e = new jt(0, "Error while loading script " + r);
            dt(o), ut(o, !1, e);
          }),
          (function (e, t) {
            for (var n, r, s = 1; s < arguments.length; s++) {
              for (n in (r = arguments[s])) e[n] = r[n];
              for (var i = 0; i < Q.length; i++)
                (n = Q[i]),
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
          })((i = t.attributes || {}), {
            type: "text/javascript",
            charset: "UTF-8",
          }),
          (function (e, t) {
            !(function (e, t) {
              for (var n in e) t.call(void 0, e[n], n, e);
            })(t, function (t, n) {
              t && "object" == typeof t && t.T && (t = t.R()),
                "style" == n
                  ? (e.style.cssText = t)
                  : "class" == n
                  ? (e.className = t)
                  : "for" == n
                  ? (e.htmlFor = t)
                  : $e.hasOwnProperty(n)
                  ? e.setAttribute($e[n], t)
                  : 0 == n.lastIndexOf("aria-", 0) ||
                    0 == n.lastIndexOf("data-", 0)
                  ? e.setAttribute(n, t)
                  : (e[n] = t);
            });
          })(s, i),
          (s.src = F(e)),
          (function (e) {
            var t = ((e.ownerDocument && e.ownerDocument.defaultView) || E)
              .document;
            (t.querySelector &&
              (t = t.querySelector("script[nonce]")) &&
              (t = t.nonce || t.getAttribute("nonce")) &&
              ne.test(t)) ||
              (t = ""),
              t && e.setAttribute("nonce", t);
          })(s),
          (function (e) {
            var t;
            return (t = (e || document).getElementsByTagName("HEAD")) &&
              0 !== t.length
              ? t[0]
              : e.documentElement;
          })(n).appendChild(s),
          o
        );
      }
      function xt(e, t, n) {
        var r = St((e = U(e, t, (n = n || {}))));
        return new Promise(function (e) {
          pt(r, e, null, void 0);
        });
      }
      P(jt, $), (R.m.B = {});
      var Et,
        Tt,
        Ct,
        kt = "",
        Mt = "",
        Lt = null;
      function At() {
        (Mt = kt = ""),
          (Lt = Tt = Et = null),
          T("google.load") ||
            (_("google.load", Vt), _("google.setOnLoadCallback", R.V));
        var e = document.getElementsByTagName("script"),
          t = (e = new me(
            (e = (document.currentScript || e[e.length - 1]).getAttribute(
              "src"
            ))
          )).g;
        (Ct = t = t.match(/^www\.gstatic\.cn/) ? "gstatic.cn" : "gstatic.com"),
          _t(e);
      }
      function _t(e) {
        var t = (e = new ke(e.i.toString())).get("callback");
        if (
          ("string" == typeof t &&
            ((t = Ht(t)),
            new Promise(function (e) {
              "undefined" == typeof window || "complete" === document.readyState
                ? e()
                : window.addEventListener
                ? (document.addEventListener("DOMContentLoaded", e, !0),
                  window.addEventListener("load", e, !0))
                : window.attachEvent
                ? window.attachEvent("onload", e)
                : "function" != typeof window.onload
                ? (window.onload = e)
                : (window.onload = function (t) {
                    window.onload && window.onload(t), e();
                  });
            }).then(t)),
          "string" == typeof (e = e.get("autoload")))
        )
          try {
            if ("" !== e) {
              var n = JSON.parse(e).modules;
              for (e = 0; e < n.length; e++) {
                var r = n[e];
                Vt(r.name, r.version, r);
              }
            }
          } catch (e) {
            throw Error("Autoload failed with: " + e);
          }
      }
      function Pt(e) {
        var t,
          n = e,
          r = e.match(/^testing-/);
        r && (n = n.replace(/^testing-/, "")), (e = n);
        do {
          if (n === R.m.M.O[n])
            throw Error("Infinite loop in version mapping: " + n);
          (t = R.m.M.O[n]) && (n = t);
        } while (t);
        return (
          (t = (r ? "testing-" : "") + n),
          { version: "pre-45" == n ? e : t, ha: t }
        );
      }
      function Ot(e) {
        "string" == typeof e && (e = [e]),
          (Array.isArray(e) && 0 !== e.length) || (e = R.m.N.ea);
        var t = [];
        return (
          e.forEach(function (e) {
            (e = e.toLowerCase()), (t = t.concat(e.split(/[\s,]+\s*/)));
          }),
          t
        );
      }
      function $t(e) {
        for (
          var t = (e = e || "").replace(/-/g, "_").toLowerCase();
          "string" == typeof t;

        )
          (e = t), (t = R.m.aa[t]) === e && (t = !1);
        return (
          t ||
            (e.match(/_[^_]+$/)
              ? (e = $t((e = e.replace(/_[^_]+$/, ""))))
              : (e = "en")),
          e
        );
      }
      function It(e) {
        return (
          (e = e || ""),
          "" !== kt &&
            kt !== e &&
            (console.warn(
              " Attempting to load version '" +
                e +
                "' of Google Charts, but the previously loaded '" +
                kt +
                "' will be used instead."
            ),
            (e = kt)),
          (kt = e || "")
        );
      }
      function zt(e) {
        return (
          (e = e || ""),
          "" !== Mt &&
            Mt !== e &&
            (console.warn(
              " Attempting to load Google Charts for language '" +
                e +
                "', but the previously loaded '" +
                Mt +
                "' will be used instead."
            ),
            (e = Mt)),
          "en" === e && (e = ""),
          (Mt = e || "")
        );
      }
      function qt(e, t) {
        (t = (function (e) {
          var t,
            n = {};
          for (t in e) n[t] = e[t];
          return n;
        })(t)),
          (t.domain = Ct),
          (t.callback = Ht(t.callback)),
          (e = It(e));
        var n = t.language;
        if (((n = zt($t(n))), (t.language = n), !Et)) {
          if (t.enableUrlSettings && window.URLSearchParams)
            try {
              e =
                new URLSearchParams(top.location.search).get(
                  "charts-version"
                ) || e;
            } catch (e) {
              console.info("Failed to get charts-version from top URL", e);
            }
          Et = (function (e) {
            var t = R.m.N.ia[Ct].loader,
              n = Pt(e);
            return xt(t, { version: n.ha }).then(function () {
              var t =
                T("google.charts.loader.VersionSpecific.load") ||
                T("google.charts.loader.publicLoad") ||
                T("google.charts.versionSpecific.load");
              if (!t) throw Error("Bad version: " + e);
              Lt = function (e) {
                if (null == (e = t(n.version, e)) || null == e.then) {
                  var r =
                    T("google.charts.loader.publicSetOnLoadCallback") ||
                    T("google.charts.versionSpecific.setOnLoadCallback");
                  (e = new Promise(function (e) {
                    r(e);
                  })).then = r;
                }
                return e;
              };
            });
          })(e);
        }
        return (
          (t.packages = Ot(t.packages)),
          (Tt = Et.then(function () {
            return Lt(t);
          }))
        );
      }
      (R.la = function (e) {
        return R.load(Object.assign({}, e, { safeMode: !0 }));
      }),
        _("google.charts.safeLoad", R.la),
        (R.load = function (e) {
          for (var t = [], n = 0; n < arguments.length; ++n)
            t[n] = arguments[n];
          "visualization" === t[(n = 0)] && n++;
          var r = "current";
          ("string" != typeof t[n] && "number" != typeof t[n]) ||
            ((r = String(t[n])), n++);
          var s = {};
          return k(t[n]) && (s = t[n]), qt(r, s);
        }),
        _("google.charts.load", R.load),
        (R.V = function (e) {
          if (!Tt)
            throw Error(
              "Must call google.charts.load before google.charts.setOnLoadCallback"
            );
          return e ? Tt.then(e) : Tt;
        }),
        _("google.charts.setOnLoadCallback", R.V);
      var Nt = q("https://maps.googleapis.com/maps/api/js?jsapiRedirect=true"),
        Dt = q(
          "https://maps-api-ssl.google.com/maps?jsapiRedirect=true&file=googleapi"
        );
      function Bt(e, t, n) {
        console.warn("Loading Maps API with the jsapi loader is deprecated."),
          (e = (n = n || {}).key || n.client);
        var r = n.libraries,
          s = (function (e) {
            for (var t = {}, n = 0; n < e.length; n++) {
              var r = e[n];
              t[r[0]] = r[1];
            }
            return t;
          })(
            n.other_params
              ? n.other_params.split("&").map(function (e) {
                  return e.split("=");
                })
              : []
          ),
          i = Object.assign({}, { key: e, ua: r }, s),
          o = "2" === t ? Dt : Nt;
        Tt = new Promise(function (e) {
          var t = Ht(n && n.callback);
          xt(o, {}, i).then(t).then(e);
        });
      }
      var Rt = q("https://www.gstatic.com/inputtools/js/ita/inputtools_3.js");
      function Gt(e, t, n) {
        k(n) && n.packages
          ? (Array.isArray(n.packages) ? n.packages : [n.packages]).includes(
              "inputtools"
            )
            ? (console.warn(
                'Loading "elements" with the jsapi loader is deprecated.\nPlease load ' +
                  Rt +
                  " directly."
              ),
              (Tt = new Promise(function (e) {
                var t = Ht(n && n.callback);
                xt(Rt, {}, {}).then(t).then(e);
              })))
            : console.error(
                'Loading "elements" other than "inputtools" is unsupported.'
              )
          : console.error(
              "google.load of elements was invoked without specifying packages"
            );
      }
      var Ft = q(
        "https://ajax.googleapis.com/ajax/libs/%{module}/%{version}/%{file}"
      );
      function Wt(e, t, n) {
        var r = R.m.$.ga[e];
        if (r) {
          if (
            ((t = (function (e, t) {
              var n;
              do {
                if (e === t[e])
                  throw Error(
                    "Infinite loop in version mapping for version " + e
                  );
                (n = t[e]) && (e = n);
              } while (n);
              return e;
            })(t, r.aliases)),
            !(r = r.versions[t]))
          )
            throw Error("Unknown version, " + t + ", of " + e + ".");
          var s = { module: e, version: t || "", file: r.compressed };
          (t = F(
            (function (e) {
              return U(e.format, e.ba, e.ya || {});
            })({ format: Ft, ba: s })
          ).toString()),
            console.warn(
              "Loading modules with the jsapi loader is deprecated.\nPlease load " +
                e +
                " directly from " +
                t +
                "."
            ),
            (Tt = new Promise(function (e) {
              var t = Ht(n && n.callback);
              xt(Ft, s).then(t).then(e);
            }));
        } else
          setTimeout(function () {
            throw Error('Module "' + e + '" is not supported.');
          }, 0);
      }
      function Ht(e) {
        return function () {
          if ("function" == typeof e) e();
          else if ("string" == typeof e && "" !== e)
            try {
              var t = T(e);
              if ("function" != typeof t)
                throw Error("Type of '" + e + "' is " + typeof t + ".");
              t();
            } catch (t) {
              throw Error("Callback of " + e + " failed with: " + t);
            }
        };
      }
      function Vt(e) {
        for (var t = [], n = 0; n < arguments.length; ++n) t[n] = arguments[n];
        switch (t[0]) {
          case "maps":
            Bt.apply(null, a(t));
            break;
          case "elements":
            Gt.apply(null, a(t));
            break;
          case "visualization":
            R.load.apply(R, a(t));
            break;
          default:
            Wt.apply(null, a(t));
        }
      }
      _("google.loader.LoadFailure", !1),
        Ct
          ? console.warn("Google Charts loader.js should only be loaded once.")
          : At(),
        (R.m.B.sa = At),
        (R.m.B.va = Pt),
        (R.m.B.wa = $t),
        (R.m.B.xa = Ot),
        (R.m.B.Da = It),
        (R.m.B.Ca = zt),
        (R.m.B.za = _t),
        (R.m.B.ra = function () {
          return Lt;
        });
    }.call(void 0);
  const ae = document.querySelectorAll(".popup-link"),
    le = document.querySelector("body");
  document.querySelectorAll(".lock-padding");
  let ce = !0;
  if (ae.length > 0)
    for (let e = 0; e < ae.length; e++) {
      const t = ae[e];
      t.addEventListener("click", function (e) {
        const n = t.getAttribute("href").replace("#", "");
        de(document.getElementById(n)), e.preventDefault();
      });
    }
  const ue = document.querySelectorAll(".close-popup");
  if (ue.length > 0)
    for (let e = 0; e < ue.length; e++) {
      const t = ue[e];
      t.addEventListener("click", function (e) {
        pe(t.closest(".popup")), e.preventDefault();
      });
    }
  function de(e) {
    if (e && ce) {
      const t = document.querySelector(".popup.open");
      t ? pe(t, !1) : fe(),
        e.classList.add("open"),
        e.addEventListener("click", function (e) {
          e.target.closest(".popup__content") || pe(e.target.closest(".popup"));
        });
    }
  }
  function pe(e, t = !0) {
    ce && (e.classList.remove("open"), t && fe());
  }
  function fe() {
    le.classList.toggle("lock"),
      (ce = !1),
      setTimeout(function () {
        ce = !0;
      }, 400);
  }
  const he =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  let me = document.querySelector(".form__button");
  const ge = document.querySelector(".input"),
    ve = document.querySelector(".js-input");
  function ye() {
    ge &&
      ge.addEventListener("blur", function (e) {
        (ge.style.boxShadow = null),
          (ge.style.color = "#929699"),
          (me.style.color = null),
          (me.style.border = "1px solid #333B41");
      }),
      !(function (e) {
        return he.test(e);
      })(ge.value)
        ? ((ge.style.outline = "none"),
          (ge.style.color = "#D31414"),
          (ge.style.boxShadow = "0px 0px 0px 2px #D31414"),
          (me.style.color = "#D31414"),
          (me.style.border = "1px solid #D31414"))
        : ((ge.style.outline = "none"),
          (ge.style.color = "#4B9200"),
          (ge.style.boxShadow = "0px 0px 0px 2px #4B9200"),
          (me.style.color = "#4B9200"),
          (me.style.border = "1px solid #4B9200"));
  }
  me.addEventListener("click", ye),
    ge.addEventListener("input", ye),
    "" == ve.value &&
      ve.addEventListener("focus", function (e) {
        (ve.style.outline = "none"),
          (ve.style.boxShadow = "0px 0px 0px 1px #D31414"),
          (ve.style.color = "#D31414");
      }),
    ve &&
      ve.addEventListener("keypress", function (e) {
        (ve.style.outline = "none"),
          (ve.style.boxShadow = "0px 0px 0px 1px #4B9200"),
          (ve.style.color = "#4B9200");
      }),
    ve &&
      ve.addEventListener("blur", function (e) {
        (ve.style.boxShadow = null), (ve.style.color = "#929699");
      });
  const be = document.querySelectorAll(".donate-section__dot");
  be.forEach((e) => {
    e.addEventListener("click", (t) => {
      be.forEach((e) => {
        e.classList.remove("selected");
      }),
        e.classList.add("selected");
      let n = e.childNodes[1].childNodes[1].innerHTML;
      document.getElementById("amo").value = n;
    });
  });
  let we = document.getElementById("amo");
  if (we) {
    const e = document.getElementById("num5000"),
      t = document.getElementById("num2000"),
      n = document.getElementById("num1000"),
      r = document.getElementById("num500"),
      s = document.getElementById("num250"),
      i = document.getElementById("num100"),
      o = document.getElementById("num50"),
      a = document.getElementById("num25");
    we.addEventListener("input", () => {
      be.forEach((e) => {
        e.classList.remove("selected");
      });
      const l = [];
      document
        .querySelectorAll(".donate-section__dot-num")
        .forEach((e) => l.push(e.innerHTML));
      let c = l.indexOf(we.value);
      0 == c && e.classList.add("selected"),
        1 == c && t.classList.add("selected"),
        2 == c && n.classList.add("selected"),
        3 == c && r.classList.add("selected"),
        4 == c && s.classList.add("selected"),
        5 == c && i.classList.add("selected"),
        6 == c && o.classList.add("selected"),
        7 == c && a.classList.add("selected");
    });
  }
  let je = document.querySelectorAll(".menu__link ");
  je.forEach((e) => {
    e.addEventListener("click", () => {
      je.forEach((e) => {
        e.classList.remove("js-active");
      }),
        e.classList.add("js-active");
    });
  }),
    google.charts.load("current", { packages: ["geochart"] }),
    google.charts.setOnLoadCallback(async function () {
      var e = google.visualization.arrayToDataTable([
        ["Country", "Population"],
        ["United States", 2761477],
        ["China", 2761477],
        ["CG", 2761477],
      ]);
      new google.visualization.GeoChart(
        document.getElementById("regions_div")
      ).draw(e, {
        region: ["030", "019", "002"],
        colorAxis: { colors: ["#FFEE2E"] },
        backgroundColor: "#EAF7FEFF",
        datalessRegionColor: "#C3B89E",
        defaultColor: "red",
      });
    }),
    window.addEventListener("DOMContentLoaded", function () {
      let e = document.querySelector(".video");
      e &&
        e.addEventListener("click", function () {
          if (e.classList.contains("ready")) return;
          e.classList.add("ready");
          let t = e.dataset.src;
          e.insertAdjacentHTML(
            "afterbegin",
            '<iframe src="' +
              t +
              '" title="YouTube video player" frameborder="0"\tallow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe >'
          );
        });
    });
  const Se = document.querySelectorAll(".animals-link__link");
  function xe() {
    Se.forEach((e) => e.classList.remove("active-link")),
      this.classList.add("active-link");
  }
  Se.forEach((e) => e.addEventListener("click", xe)),
    (window.PrisonBreak = !1),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let n = document.querySelector(".icon-menu");
      const r = document.querySelector(".dark");
      n &&
        (n.addEventListener("click", function (n) {
          r.classList.toggle("_active"),
            e && (t(), document.documentElement.classList.toggle("menu-open"));
        }),
        r &&
          r.addEventListener("click", function (n) {
            r.classList.remove("_active"),
              e &&
                (t(), document.documentElement.classList.toggle("menu-open"));
          }));
    })();
})();
