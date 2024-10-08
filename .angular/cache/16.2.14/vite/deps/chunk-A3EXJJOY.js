import {
  createAnimation,
  getIonPageElement
} from "./chunk-G3IO344B.js";

// node_modules/@ionic/core/dist/esm-es5/ios.transition-3137d23e.js
var DURATION = 540;
var getClonedElement = function(t) {
  return document.querySelector("".concat(t, ".ion-cloned-element"));
};
var shadow = function(t) {
  return t.shadowRoot || t;
};
var getLargeTitle = function(t) {
  var e = t.tagName === "ION-TABS" ? t : t.querySelector("ion-tabs");
  var a = "ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
  if (e != null) {
    var o = e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
    return o != null ? o.querySelector(a) : null;
  }
  return t.querySelector(a);
};
var getBackButton = function(t, e) {
  var a = t.tagName === "ION-TABS" ? t : t.querySelector("ion-tabs");
  var o = [];
  if (a != null) {
    var r = a.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
    if (r != null) {
      o = r.querySelectorAll("ion-buttons");
    }
  } else {
    o = t.querySelectorAll("ion-buttons");
  }
  for (var n = 0, i = o; n < i.length; n++) {
    var l = i[n];
    var c = l.closest("ion-header");
    var s = c && !c.classList.contains("header-collapse-condense-inactive");
    var d = l.querySelector("ion-back-button");
    var f = l.classList.contains("buttons-collapse");
    var m = l.slot === "start" || l.slot === "";
    if (d !== null && m && (f && s && e || !f)) {
      return d;
    }
  }
  return null;
};
var createLargeTitleTransition = function(t, e, a, o, r) {
  var n = getBackButton(o, a);
  var i = getLargeTitle(r);
  var l = getLargeTitle(o);
  var c = getBackButton(r, a);
  var s = n !== null && i !== null && !a;
  var d = l !== null && c !== null && a;
  if (s) {
    var f = i.getBoundingClientRect();
    var m = n.getBoundingClientRect();
    animateLargeTitle(t, e, a, i, f, m);
    animateBackButton(t, e, a, n, f, m);
  } else if (d) {
    var v = l.getBoundingClientRect();
    var p = c.getBoundingClientRect();
    animateLargeTitle(t, e, a, l, v, p);
    animateBackButton(t, e, a, c, v, p);
  }
  return { forward: s, backward: d };
};
var animateBackButton = function(t, e, a, o, r, n) {
  var i = e ? "calc(100% - ".concat(n.right + 4, "px)") : "".concat(n.left - 4, "px");
  var l = e ? "7px" : "-7px";
  var c = e ? "-4px" : "4px";
  var s = e ? "-4px" : "4px";
  var d = e ? "right" : "left";
  var f = e ? "left" : "right";
  var m = [{ offset: 0, opacity: 0, transform: "translate3d(".concat(l, ", ").concat(r.top - 40, "px, 0) scale(2.1)") }, { offset: 1, opacity: 1, transform: "translate3d(".concat(c, ", ").concat(n.top - 46, "px, 0) scale(1)") }];
  var v = [{ offset: 0, opacity: 1, transform: "translate3d(".concat(c, ", ").concat(n.top - 46, "px, 0) scale(1)") }, { offset: 0.6, opacity: 0 }, { offset: 1, opacity: 0, transform: "translate3d(".concat(l, ", ").concat(r.top - 40, "px, 0) scale(2.1)") }];
  var p = a ? v : m;
  var u = [{ offset: 0, opacity: 0, transform: "translate3d(".concat(s, ", ").concat(n.top - 41, "px, 0) scale(0.6)") }, { offset: 1, opacity: 1, transform: "translate3d(".concat(s, ", ").concat(n.top - 46, "px, 0) scale(1)") }];
  var y = [{ offset: 0, opacity: 1, transform: "translate3d(".concat(s, ", ").concat(n.top - 46, "px, 0) scale(1)") }, { offset: 0.2, opacity: 0, transform: "translate3d(".concat(s, ", ").concat(n.top - 41, "px, 0) scale(0.6)") }, { offset: 1, opacity: 0, transform: "translate3d(".concat(s, ", ").concat(n.top - 41, "px, 0) scale(0.6)") }];
  var g = a ? y : u;
  var b = createAnimation();
  var A = createAnimation();
  var S = getClonedElement("ion-back-button");
  var T = shadow(S).querySelector(".button-text");
  var h = shadow(S).querySelector("ion-icon");
  S.text = o.text;
  S.mode = o.mode;
  S.icon = o.icon;
  S.color = o.color;
  S.disabled = o.disabled;
  S.style.setProperty("display", "block");
  S.style.setProperty("position", "fixed");
  A.addElement(h);
  b.addElement(T);
  b.beforeStyles({ "transform-origin": "".concat(d, " center") }).beforeAddWrite(function() {
    o.style.setProperty("display", "none");
    S.style.setProperty(d, i);
  }).afterAddWrite(function() {
    o.style.setProperty("display", "");
    S.style.setProperty("display", "none");
    S.style.removeProperty(d);
  }).keyframes(p);
  A.beforeStyles({ "transform-origin": "".concat(f, " center") }).keyframes(g);
  t.addAnimation([b, A]);
};
var animateLargeTitle = function(t, e, a, o, r, n) {
  var i;
  var l = e ? "calc(100% - ".concat(r.right, "px)") : "".concat(r.left, "px");
  var c = e ? "-18px" : "18px";
  var s = e ? "right" : "left";
  var d = [{ offset: 0, opacity: 0, transform: "translate3d(".concat(c, ", ").concat(n.top - 4, "px, 0) scale(0.49)") }, { offset: 0.1, opacity: 0 }, { offset: 1, opacity: 1, transform: "translate3d(0, ".concat(r.top - 2, "px, 0) scale(1)") }];
  var f = [{ offset: 0, opacity: 0.99, transform: "translate3d(0, ".concat(r.top - 2, "px, 0) scale(1)") }, { offset: 0.6, opacity: 0 }, { offset: 1, opacity: 0, transform: "translate3d(".concat(c, ", ").concat(n.top - 4, "px, 0) scale(0.5)") }];
  var m = a ? d : f;
  var v = getClonedElement("ion-title");
  var p = createAnimation();
  v.innerText = o.innerText;
  v.size = o.size;
  v.color = o.color;
  p.addElement(v);
  p.beforeStyles((i = { "transform-origin": "".concat(s, " center"), height: "46px", display: "", position: "relative" }, i[s] = l, i)).beforeAddWrite(function() {
    o.style.setProperty("display", "none");
  }).afterAddWrite(function() {
    o.style.setProperty("display", "");
    v.style.setProperty("display", "none");
  }).keyframes(m);
  t.addAnimation(p);
};
var iosTransitionAnimation = function(t, e) {
  var a;
  try {
    var o = "cubic-bezier(0.32,0.72,0,1)";
    var r = "opacity";
    var n = "transform";
    var i = "0%";
    var l = 0.8;
    var c = t.ownerDocument.dir === "rtl";
    var s = c ? "-99.5%" : "99.5%";
    var d = c ? "33%" : "-33%";
    var f = e.enteringEl;
    var m = e.leavingEl;
    var v = e.direction === "back";
    var p = f.querySelector(":scope > ion-content");
    var u = f.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
    var y = f.querySelectorAll(":scope > ion-header > ion-toolbar");
    var g = createAnimation();
    var b = createAnimation();
    g.addElement(f).duration(((a = e.duration) !== null && a !== void 0 ? a : 0) || DURATION).easing(e.easing || o).fill("both").beforeRemoveClass("ion-page-invisible");
    if (m && t !== null && t !== void 0) {
      var A = createAnimation();
      A.addElement(t);
      g.addAnimation(A);
    }
    if (!p && y.length === 0 && u.length === 0) {
      b.addElement(f.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
    } else {
      b.addElement(p);
      b.addElement(u);
    }
    g.addAnimation(b);
    if (v) {
      b.beforeClearStyles([r]).fromTo("transform", "translateX(".concat(d, ")"), "translateX(".concat(i, ")")).fromTo(r, l, 1);
    } else {
      b.beforeClearStyles([r]).fromTo("transform", "translateX(".concat(s, ")"), "translateX(".concat(i, ")"));
    }
    if (p) {
      var S = shadow(p).querySelector(".transition-effect");
      if (S) {
        var T = S.querySelector(".transition-cover");
        var h = S.querySelector(".transition-shadow");
        var x = createAnimation();
        var E = createAnimation();
        var q = createAnimation();
        x.addElement(S).beforeStyles({ opacity: "1", display: "block" }).afterStyles({ opacity: "", display: "" });
        E.addElement(T).beforeClearStyles([r]).fromTo(r, 0, 0.1);
        q.addElement(h).beforeClearStyles([r]).fromTo(r, 0.03, 0.7);
        x.addAnimation([E, q]);
        b.addAnimation([x]);
      }
    }
    var X = f.querySelector("ion-header.header-collapse-condense");
    var C = createLargeTitleTransition(g, c, v, f, m), k = C.forward, w = C.backward;
    y.forEach(function(t2) {
      var e2 = createAnimation();
      e2.addElement(t2);
      g.addAnimation(e2);
      var a2 = createAnimation();
      a2.addElement(t2.querySelector("ion-title"));
      var o2 = createAnimation();
      var n2 = Array.from(t2.querySelectorAll("ion-buttons,[menuToggle]"));
      var l2 = t2.closest("ion-header");
      var f2 = l2 === null || l2 === void 0 ? void 0 : l2.classList.contains("header-collapse-condense-inactive");
      var m2;
      if (v) {
        m2 = n2.filter(function(t3) {
          var e3 = t3.classList.contains("buttons-collapse");
          return e3 && !f2 || !e3;
        });
      } else {
        m2 = n2.filter(function(t3) {
          return !t3.classList.contains("buttons-collapse");
        });
      }
      o2.addElement(m2);
      var p2 = createAnimation();
      p2.addElement(t2.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
      var u2 = createAnimation();
      u2.addElement(shadow(t2).querySelector(".toolbar-background"));
      var y2 = createAnimation();
      var b2 = t2.querySelector("ion-back-button");
      if (b2) {
        y2.addElement(b2);
      }
      e2.addAnimation([a2, o2, p2, u2, y2]);
      o2.fromTo(r, 0.01, 1);
      p2.fromTo(r, 0.01, 1);
      if (v) {
        if (!f2) {
          a2.fromTo("transform", "translateX(".concat(d, ")"), "translateX(".concat(i, ")")).fromTo(r, 0.01, 1);
        }
        p2.fromTo("transform", "translateX(".concat(d, ")"), "translateX(".concat(i, ")"));
        y2.fromTo(r, 0.01, 1);
      } else {
        if (!X) {
          a2.fromTo("transform", "translateX(".concat(s, ")"), "translateX(".concat(i, ")")).fromTo(r, 0.01, 1);
        }
        p2.fromTo("transform", "translateX(".concat(s, ")"), "translateX(".concat(i, ")"));
        u2.beforeClearStyles([r, "transform"]);
        var A2 = l2 === null || l2 === void 0 ? void 0 : l2.translucent;
        if (!A2) {
          u2.fromTo(r, 0.01, "var(--opacity)");
        } else {
          u2.fromTo("transform", c ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)");
        }
        if (!k) {
          y2.fromTo(r, 0.01, 1);
        }
        if (b2 && !k) {
          var S2 = createAnimation();
          S2.addElement(shadow(b2).querySelector(".button-text")).fromTo("transform", c ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)");
          e2.addAnimation(S2);
        }
      }
    });
    if (m) {
      var B = createAnimation();
      var L = m.querySelector(":scope > ion-content");
      var P = m.querySelectorAll(":scope > ion-header > ion-toolbar");
      var R = m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
      if (!L && P.length === 0 && R.length === 0) {
        B.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"));
      } else {
        B.addElement(L);
        B.addElement(R);
      }
      g.addAnimation(B);
      if (v) {
        B.beforeClearStyles([r]).fromTo("transform", "translateX(".concat(i, ")"), c ? "translateX(-100%)" : "translateX(100%)");
        var I = getIonPageElement(m);
        g.afterAddWrite(function() {
          if (g.getDirection() === "normal") {
            I.style.setProperty("display", "none");
          }
        });
      } else {
        B.fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat(d, ")")).fromTo(r, 1, l);
      }
      if (L) {
        var N = shadow(L).querySelector(".transition-effect");
        if (N) {
          var j = N.querySelector(".transition-cover");
          var W = N.querySelector(".transition-shadow");
          var D = createAnimation();
          var O = createAnimation();
          var z = createAnimation();
          D.addElement(N).beforeStyles({ opacity: "1", display: "block" }).afterStyles({ opacity: "", display: "" });
          O.addElement(j).beforeClearStyles([r]).fromTo(r, 0.1, 0);
          z.addElement(W).beforeClearStyles([r]).fromTo(r, 0.7, 0.03);
          D.addAnimation([O, z]);
          B.addAnimation([D]);
        }
      }
      P.forEach(function(t2) {
        var e2 = createAnimation();
        e2.addElement(t2);
        var a2 = createAnimation();
        a2.addElement(t2.querySelector("ion-title"));
        var o2 = createAnimation();
        var l2 = t2.querySelectorAll("ion-buttons,[menuToggle]");
        var s2 = t2.closest("ion-header");
        var f2 = s2 === null || s2 === void 0 ? void 0 : s2.classList.contains("header-collapse-condense-inactive");
        var m2 = Array.from(l2).filter(function(t3) {
          var e3 = t3.classList.contains("buttons-collapse");
          return e3 && !f2 || !e3;
        });
        o2.addElement(m2);
        var p2 = createAnimation();
        var u2 = t2.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");
        if (u2.length > 0) {
          p2.addElement(u2);
        }
        var y2 = createAnimation();
        y2.addElement(shadow(t2).querySelector(".toolbar-background"));
        var b2 = createAnimation();
        var A2 = t2.querySelector("ion-back-button");
        if (A2) {
          b2.addElement(A2);
        }
        e2.addAnimation([a2, o2, p2, b2, y2]);
        g.addAnimation(e2);
        b2.fromTo(r, 0.99, 0);
        o2.fromTo(r, 0.99, 0);
        p2.fromTo(r, 0.99, 0);
        if (v) {
          if (!f2) {
            a2.fromTo("transform", "translateX(".concat(i, ")"), c ? "translateX(-100%)" : "translateX(100%)").fromTo(r, 0.99, 0);
          }
          p2.fromTo("transform", "translateX(".concat(i, ")"), c ? "translateX(-100%)" : "translateX(100%)");
          y2.beforeClearStyles([r, "transform"]);
          var S2 = s2 === null || s2 === void 0 ? void 0 : s2.translucent;
          if (!S2) {
            y2.fromTo(r, "var(--opacity)", 0);
          } else {
            y2.fromTo("transform", "translateX(0px)", c ? "translateX(-100%)" : "translateX(100%)");
          }
          if (A2 && !w) {
            var T2 = createAnimation();
            T2.addElement(shadow(A2).querySelector(".button-text")).fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat((c ? -124 : 124) + "px", ")"));
            e2.addAnimation(T2);
          }
        } else {
          if (!f2) {
            a2.fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat(d, ")")).fromTo(r, 0.99, 0).afterClearStyles([n, r]);
          }
          p2.fromTo("transform", "translateX(".concat(i, ")"), "translateX(".concat(d, ")")).afterClearStyles([n, r]);
          b2.afterClearStyles([r]);
          a2.afterClearStyles([r]);
          o2.afterClearStyles([r]);
        }
      });
    }
    return g;
  } catch (t2) {
    throw t2;
  }
};

export {
  shadow,
  iosTransitionAnimation
};
/*! Bundled license information:

@ionic/core/dist/esm-es5/ios.transition-3137d23e.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-A3EXJJOY.js.map
