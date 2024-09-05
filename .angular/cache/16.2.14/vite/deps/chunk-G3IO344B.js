import {
  __awaiter,
  __extends,
  __generator,
  __spreadArray
} from "./chunk-AOF462FV.js";

// node_modules/@ionic/core/dist/esm-es5/index-7a14ecec.js
var win = typeof window !== "undefined" ? window : void 0;

// node_modules/@ionic/core/dist/esm-es5/helpers-3379ba19.js
var componentOnReady = function(e, a) {
  if (e.componentOnReady) {
    e.componentOnReady().then(function(e2) {
      return a(e2);
    });
  } else {
    raf(function() {
      return a(e);
    });
  }
};
var raf = function(e) {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(e);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(e);
  }
  return setTimeout(e);
};

// node_modules/@ionic/core/dist/esm-es5/animation-a1d9e088.js
var animationPrefix;
var processKeyframes = function(e) {
  e.forEach(function(e2) {
    for (var n in e2) {
      if (e2.hasOwnProperty(n)) {
        var r = e2[n];
        if (n === "easing") {
          var t = "animation-timing-function";
          e2[t] = r;
          delete e2[n];
        } else {
          var t = convertCamelCaseToHypen(n);
          if (t !== n) {
            e2[t] = r;
            delete e2[n];
          }
        }
      }
    }
  });
  return e;
};
var convertCamelCaseToHypen = function(e) {
  return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};
var getAnimationPrefix = function(e) {
  if (animationPrefix === void 0) {
    var n = e.style.animationName !== void 0;
    var r = e.style.webkitAnimationName !== void 0;
    animationPrefix = !n && r ? "-webkit-" : "";
  }
  return animationPrefix;
};
var setStyleProperty = function(e, n, r) {
  var t = n.startsWith("animation") ? getAnimationPrefix(e) : "";
  e.style.setProperty(t + n, r);
};
var removeStyleProperty = function(e, n) {
  var r = n.startsWith("animation") ? getAnimationPrefix(e) : "";
  e.style.removeProperty(r + n);
};
var animationEnd = function(e, n) {
  var r;
  var t = { passive: true };
  var a = function() {
    if (r) {
      r();
    }
  };
  var i = function(r2) {
    if (e === r2.target) {
      a();
      n(r2);
    }
  };
  if (e) {
    e.addEventListener("webkitAnimationEnd", i, t);
    e.addEventListener("animationend", i, t);
    r = function() {
      e.removeEventListener("webkitAnimationEnd", i, t);
      e.removeEventListener("animationend", i, t);
    };
  }
  return a;
};
var generateKeyframeRules = function(e) {
  if (e === void 0) {
    e = [];
  }
  return e.map(function(e2) {
    var n = e2.offset;
    var r = [];
    for (var t in e2) {
      if (e2.hasOwnProperty(t) && t !== "offset") {
        r.push("".concat(t, ": ").concat(e2[t], ";"));
      }
    }
    return "".concat(n * 100, "% { ").concat(r.join(" "), " }");
  }).join(" ");
};
var keyframeIds = [];
var generateKeyframeName = function(e) {
  var n = keyframeIds.indexOf(e);
  if (n < 0) {
    n = keyframeIds.push(e) - 1;
  }
  return "ion-animation-".concat(n);
};
var getStyleContainer = function(e) {
  var n = e.getRootNode !== void 0 ? e.getRootNode() : e;
  return n.head || n;
};
var createKeyframeStylesheet = function(e, n, r) {
  var t;
  var a = getStyleContainer(r);
  var i = getAnimationPrefix(r);
  var o = a.querySelector("#" + e);
  if (o) {
    return o;
  }
  var f = ((t = r.ownerDocument) !== null && t !== void 0 ? t : document).createElement("style");
  f.id = e;
  f.textContent = "@".concat(i, "keyframes ").concat(e, " { ").concat(n, " } @").concat(i, "keyframes ").concat(e, "-alt { ").concat(n, " }");
  a.appendChild(f);
  return f;
};
var addClassToArray = function(e, n) {
  if (e === void 0) {
    e = [];
  }
  if (n !== void 0) {
    var r = Array.isArray(n) ? n : [n];
    return __spreadArray(__spreadArray([], e, true), r, true);
  }
  return e;
};
var createAnimation = function(e) {
  var n;
  var r;
  var t;
  var a;
  var i;
  var o;
  var f = [];
  var u = [];
  var c = [];
  var s = false;
  var v;
  var l = {};
  var d = [];
  var m = [];
  var y = {};
  var p = 0;
  var h2 = false;
  var g = false;
  var E;
  var P;
  var S;
  var A;
  var C = true;
  var T = false;
  var b = true;
  var w;
  var k;
  var x = false;
  var K = e;
  var _ = [];
  var R = [];
  var I = [];
  var N = [];
  var D = [];
  var L = [];
  var F = [];
  var O = [];
  var W = [];
  var j = [];
  var H = typeof AnimationEffect === "function" || win !== void 0 && typeof win.AnimationEffect === "function";
  var M = typeof Element === "function" && typeof Element.prototype.animate === "function" && H;
  var $ = 100;
  var q = function() {
    return j;
  };
  var z = function(e2) {
    N.forEach(function(n2) {
      n2.destroy(e2);
    });
    Z(e2);
    I.length = 0;
    N.length = 0;
    f.length = 0;
    Q();
    s = false;
    b = true;
    return k;
  };
  var Z = function(e2) {
    U();
    if (e2) {
      V();
    }
  };
  var B = function() {
    h2 = false;
    g = false;
    b = true;
    P = void 0;
    S = void 0;
    A = void 0;
    p = 0;
    T = false;
    C = true;
    x = false;
  };
  var G = function() {
    return p !== 0 && !x;
  };
  var J = function(e2, n2) {
    var r2 = (n2 === null || n2 === void 0 ? void 0 : n2.oneTimeCallback) ? R : _;
    r2.push({ c: e2, o: n2 });
    return k;
  };
  var Q = function() {
    _.length = 0;
    R.length = 0;
    return k;
  };
  var U = function() {
    if (M) {
      j.forEach(function(e3) {
        e3.cancel();
      });
      j.length = 0;
    } else {
      var e2 = I.slice();
      raf(function() {
        e2.forEach(function(e3) {
          removeStyleProperty(e3, "animation-name");
          removeStyleProperty(e3, "animation-duration");
          removeStyleProperty(e3, "animation-timing-function");
          removeStyleProperty(e3, "animation-iteration-count");
          removeStyleProperty(e3, "animation-delay");
          removeStyleProperty(e3, "animation-play-state");
          removeStyleProperty(e3, "animation-fill-mode");
          removeStyleProperty(e3, "animation-direction");
        });
      });
    }
  };
  var V = function() {
    D.forEach(function(e2) {
      if (e2 === null || e2 === void 0 ? void 0 : e2.parentNode) {
        e2.parentNode.removeChild(e2);
      }
    });
    D.length = 0;
  };
  var X = function(e2) {
    L.push(e2);
    return k;
  };
  var Y = function(e2) {
    F.push(e2);
    return k;
  };
  var ee = function(e2) {
    O.push(e2);
    return k;
  };
  var ne = function(e2) {
    W.push(e2);
    return k;
  };
  var re = function(e2) {
    u = addClassToArray(u, e2);
    return k;
  };
  var te = function(e2) {
    c = addClassToArray(c, e2);
    return k;
  };
  var ae = function(e2) {
    if (e2 === void 0) {
      e2 = {};
    }
    l = e2;
    return k;
  };
  var ie = function(e2) {
    if (e2 === void 0) {
      e2 = [];
    }
    for (var n2 = 0, r2 = e2; n2 < r2.length; n2++) {
      var t2 = r2[n2];
      l[t2] = "";
    }
    return k;
  };
  var oe = function(e2) {
    d = addClassToArray(d, e2);
    return k;
  };
  var fe = function(e2) {
    m = addClassToArray(m, e2);
    return k;
  };
  var ue = function(e2) {
    if (e2 === void 0) {
      e2 = {};
    }
    y = e2;
    return k;
  };
  var ce = function(e2) {
    if (e2 === void 0) {
      e2 = [];
    }
    for (var n2 = 0, r2 = e2; n2 < r2.length; n2++) {
      var t2 = r2[n2];
      y[t2] = "";
    }
    return k;
  };
  var se = function() {
    if (i !== void 0) {
      return i;
    }
    if (v) {
      return v.getFill();
    }
    return "both";
  };
  var ve = function() {
    if (P !== void 0) {
      return P;
    }
    if (o !== void 0) {
      return o;
    }
    if (v) {
      return v.getDirection();
    }
    return "normal";
  };
  var le = function() {
    if (h2) {
      return "linear";
    }
    if (t !== void 0) {
      return t;
    }
    if (v) {
      return v.getEasing();
    }
    return "linear";
  };
  var de = function() {
    if (g) {
      return 0;
    }
    if (S !== void 0) {
      return S;
    }
    if (r !== void 0) {
      return r;
    }
    if (v) {
      return v.getDuration();
    }
    return 0;
  };
  var me = function() {
    if (a !== void 0) {
      return a;
    }
    if (v) {
      return v.getIterations();
    }
    return 1;
  };
  var ye = function() {
    if (A !== void 0) {
      return A;
    }
    if (n !== void 0) {
      return n;
    }
    if (v) {
      return v.getDelay();
    }
    return 0;
  };
  var pe = function() {
    return f;
  };
  var he = function(e2) {
    o = e2;
    Oe(true);
    return k;
  };
  var ge = function(e2) {
    i = e2;
    Oe(true);
    return k;
  };
  var Ee = function(e2) {
    n = e2;
    Oe(true);
    return k;
  };
  var Pe = function(e2) {
    t = e2;
    Oe(true);
    return k;
  };
  var Se = function(e2) {
    if (!M && e2 === 0) {
      e2 = 1;
    }
    r = e2;
    Oe(true);
    return k;
  };
  var Ae = function(e2) {
    a = e2;
    Oe(true);
    return k;
  };
  var Ce = function(e2) {
    v = e2;
    return k;
  };
  var Te = function(e2) {
    if (e2 != null) {
      if (e2.nodeType === 1) {
        I.push(e2);
      } else if (e2.length >= 0) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          I.push(e2[n2]);
        }
      } else {
        console.error("Invalid addElement value");
      }
    }
    return k;
  };
  var be = function(e2) {
    if (e2 != null) {
      if (Array.isArray(e2)) {
        for (var n2 = 0, r2 = e2; n2 < r2.length; n2++) {
          var t2 = r2[n2];
          t2.parent(k);
          N.push(t2);
        }
      } else {
        e2.parent(k);
        N.push(e2);
      }
    }
    return k;
  };
  var we = function(e2) {
    var n2 = f !== e2;
    f = e2;
    if (n2) {
      ke(f);
    }
    return k;
  };
  var ke = function(e2) {
    if (M) {
      q().forEach(function(n2) {
        if (n2.effect.setKeyframes) {
          n2.effect.setKeyframes(e2);
        } else {
          var r2 = new KeyframeEffect(n2.effect.target, e2, n2.effect.getTiming());
          n2.effect = r2;
        }
      });
    } else {
      Re();
    }
  };
  var xe = function() {
    L.forEach(function(e3) {
      return e3();
    });
    F.forEach(function(e3) {
      return e3();
    });
    var e2 = u;
    var n2 = c;
    var r2 = l;
    I.forEach(function(t2) {
      var a2 = t2.classList;
      e2.forEach(function(e3) {
        return a2.add(e3);
      });
      n2.forEach(function(e3) {
        return a2.remove(e3);
      });
      for (var i2 in r2) {
        if (r2.hasOwnProperty(i2)) {
          setStyleProperty(t2, i2, r2[i2]);
        }
      }
    });
  };
  var Ke = function() {
    ze();
    O.forEach(function(e3) {
      return e3();
    });
    W.forEach(function(e3) {
      return e3();
    });
    var e2 = C ? 1 : 0;
    var n2 = d;
    var r2 = m;
    var t2 = y;
    I.forEach(function(e3) {
      var a2 = e3.classList;
      n2.forEach(function(e4) {
        return a2.add(e4);
      });
      r2.forEach(function(e4) {
        return a2.remove(e4);
      });
      for (var i2 in t2) {
        if (t2.hasOwnProperty(i2)) {
          setStyleProperty(e3, i2, t2[i2]);
        }
      }
    });
    _.forEach(function(n3) {
      return n3.c(e2, k);
    });
    R.forEach(function(n3) {
      return n3.c(e2, k);
    });
    R.length = 0;
    b = true;
    if (C) {
      T = true;
    }
    C = true;
  };
  var _e = function() {
    if (p === 0) {
      return;
    }
    p--;
    if (p === 0) {
      Ke();
      if (v) {
        v.animationFinish();
      }
    }
  };
  var Re = function(n2) {
    if (n2 === void 0) {
      n2 = true;
    }
    V();
    var r2 = processKeyframes(f);
    I.forEach(function(t2) {
      if (r2.length > 0) {
        var a2 = generateKeyframeRules(r2);
        w = e !== void 0 ? e : generateKeyframeName(a2);
        var i2 = createKeyframeStylesheet(w, a2, t2);
        D.push(i2);
        setStyleProperty(t2, "animation-duration", "".concat(de(), "ms"));
        setStyleProperty(t2, "animation-timing-function", le());
        setStyleProperty(t2, "animation-delay", "".concat(ye(), "ms"));
        setStyleProperty(t2, "animation-fill-mode", se());
        setStyleProperty(t2, "animation-direction", ve());
        var o2 = me() === Infinity ? "infinite" : me().toString();
        setStyleProperty(t2, "animation-iteration-count", o2);
        setStyleProperty(t2, "animation-play-state", "paused");
        if (n2) {
          setStyleProperty(t2, "animation-name", "".concat(i2.id, "-alt"));
        }
        raf(function() {
          setStyleProperty(t2, "animation-name", i2.id || null);
        });
      }
    });
  };
  var Ie = function() {
    I.forEach(function(e2) {
      var n2 = e2.animate(f, { id: K, delay: ye(), duration: de(), easing: le(), iterations: me(), fill: se(), direction: ve() });
      n2.pause();
      j.push(n2);
    });
    if (j.length > 0) {
      j[0].onfinish = function() {
        _e();
      };
    }
  };
  var Ne = function(e2) {
    if (e2 === void 0) {
      e2 = true;
    }
    xe();
    if (f.length > 0) {
      if (M) {
        Ie();
      } else {
        Re(e2);
      }
    }
    s = true;
  };
  var De = function(e2) {
    e2 = Math.min(Math.max(e2, 0), 0.9999);
    if (M) {
      j.forEach(function(n3) {
        n3.currentTime = n3.effect.getComputedTiming().delay + de() * e2;
        n3.pause();
      });
    } else {
      var n2 = "-".concat(de() * e2, "ms");
      I.forEach(function(e3) {
        if (f.length > 0) {
          setStyleProperty(e3, "animation-delay", n2);
          setStyleProperty(e3, "animation-play-state", "paused");
        }
      });
    }
  };
  var Le = function(e2) {
    j.forEach(function(e3) {
      e3.effect.updateTiming({ delay: ye(), duration: de(), easing: le(), iterations: me(), fill: se(), direction: ve() });
    });
    if (e2 !== void 0) {
      De(e2);
    }
  };
  var Fe = function(e2, n2) {
    if (e2 === void 0) {
      e2 = true;
    }
    raf(function() {
      I.forEach(function(r2) {
        setStyleProperty(r2, "animation-name", w || null);
        setStyleProperty(r2, "animation-duration", "".concat(de(), "ms"));
        setStyleProperty(r2, "animation-timing-function", le());
        setStyleProperty(r2, "animation-delay", n2 !== void 0 ? "-".concat(n2 * de(), "ms") : "".concat(ye(), "ms"));
        setStyleProperty(r2, "animation-fill-mode", se() || null);
        setStyleProperty(r2, "animation-direction", ve() || null);
        var t2 = me() === Infinity ? "infinite" : me().toString();
        setStyleProperty(r2, "animation-iteration-count", t2);
        if (e2) {
          setStyleProperty(r2, "animation-name", "".concat(w, "-alt"));
        }
        raf(function() {
          setStyleProperty(r2, "animation-name", w || null);
        });
      });
    });
  };
  var Oe = function(e2, n2, r2) {
    if (e2 === void 0) {
      e2 = false;
    }
    if (n2 === void 0) {
      n2 = true;
    }
    if (e2) {
      N.forEach(function(t2) {
        t2.update(e2, n2, r2);
      });
    }
    if (M) {
      Le(r2);
    } else {
      Fe(n2, r2);
    }
    return k;
  };
  var We = function(e2, n2) {
    if (e2 === void 0) {
      e2 = false;
    }
    N.forEach(function(r2) {
      r2.progressStart(e2, n2);
    });
    Me();
    h2 = e2;
    if (!s) {
      Ne();
    }
    Oe(false, true, n2);
    return k;
  };
  var je = function(e2) {
    N.forEach(function(n2) {
      n2.progressStep(e2);
    });
    De(e2);
    return k;
  };
  var He = function(e2, n2, r2) {
    h2 = false;
    N.forEach(function(t2) {
      t2.progressEnd(e2, n2, r2);
    });
    if (r2 !== void 0) {
      S = r2;
    }
    T = false;
    C = true;
    if (e2 === 0) {
      P = ve() === "reverse" ? "normal" : "reverse";
      if (P === "reverse") {
        C = false;
      }
      if (M) {
        Oe();
        De(1 - n2);
      } else {
        A = (1 - n2) * de() * -1;
        Oe(false, false);
      }
    } else if (e2 === 1) {
      if (M) {
        Oe();
        De(n2);
      } else {
        A = n2 * de() * -1;
        Oe(false, false);
      }
    }
    if (e2 !== void 0) {
      J(function() {
        S = void 0;
        P = void 0;
        A = void 0;
      }, { oneTimeCallback: true });
      if (!v) {
        Qe();
      }
    }
    return k;
  };
  var Me = function() {
    if (s) {
      if (M) {
        j.forEach(function(e2) {
          e2.pause();
        });
      } else {
        I.forEach(function(e2) {
          setStyleProperty(e2, "animation-play-state", "paused");
        });
      }
      x = true;
    }
  };
  var $e = function() {
    N.forEach(function(e2) {
      e2.pause();
    });
    Me();
    return k;
  };
  var qe = function() {
    E = void 0;
    _e();
  };
  var ze = function() {
    if (E) {
      clearTimeout(E);
    }
  };
  var Ze = function() {
    ze();
    raf(function() {
      I.forEach(function(e3) {
        if (f.length > 0) {
          setStyleProperty(e3, "animation-play-state", "running");
        }
      });
    });
    if (f.length === 0 || I.length === 0) {
      _e();
    } else {
      var e2 = ye() || 0;
      var n2 = de() || 0;
      var r2 = me() || 1;
      if (isFinite(r2)) {
        E = setTimeout(qe, e2 + n2 * r2 + $);
      }
      animationEnd(I[0], function() {
        ze();
        raf(function() {
          Be();
          raf(_e);
        });
      });
    }
  };
  var Be = function() {
    I.forEach(function(e2) {
      removeStyleProperty(e2, "animation-duration");
      removeStyleProperty(e2, "animation-delay");
      removeStyleProperty(e2, "animation-play-state");
    });
  };
  var Ge = function() {
    j.forEach(function(e2) {
      e2.play();
    });
    if (f.length === 0 || I.length === 0) {
      _e();
    }
  };
  var Je = function() {
    if (M) {
      De(0);
      Le();
    } else {
      Fe();
    }
  };
  var Qe = function(e2) {
    return new Promise(function(n2) {
      if (e2 === null || e2 === void 0 ? void 0 : e2.sync) {
        g = true;
        J(function() {
          return g = false;
        }, { oneTimeCallback: true });
      }
      if (!s) {
        Ne();
      }
      if (T) {
        Je();
        T = false;
      }
      if (b) {
        p = N.length + 1;
        b = false;
      }
      J(function() {
        return n2();
      }, { oneTimeCallback: true });
      N.forEach(function(e3) {
        e3.play();
      });
      if (M) {
        Ge();
      } else {
        Ze();
      }
      x = false;
    });
  };
  var Ue = function() {
    N.forEach(function(e2) {
      e2.stop();
    });
    if (s) {
      U();
      s = false;
    }
    B();
  };
  var Ve = function(e2, n2) {
    var r2;
    var t2 = f[0];
    if (t2 !== void 0 && (t2.offset === void 0 || t2.offset === 0)) {
      t2[e2] = n2;
    } else {
      f = __spreadArray([(r2 = { offset: 0 }, r2[e2] = n2, r2)], f, true);
    }
    return k;
  };
  var Xe = function(e2, n2) {
    var r2;
    var t2 = f[f.length - 1];
    if (t2 !== void 0 && (t2.offset === void 0 || t2.offset === 1)) {
      t2[e2] = n2;
    } else {
      f = __spreadArray(__spreadArray([], f, true), [(r2 = { offset: 1 }, r2[e2] = n2, r2)], false);
    }
    return k;
  };
  var Ye = function(e2, n2, r2) {
    return Ve(e2, n2).to(e2, r2);
  };
  return k = { parentAnimation: v, elements: I, childAnimations: N, id: K, animationFinish: _e, from: Ve, to: Xe, fromTo: Ye, parent: Ce, play: Qe, pause: $e, stop: Ue, destroy: z, keyframes: we, addAnimation: be, addElement: Te, update: Oe, fill: ge, direction: he, iterations: Ae, duration: Se, easing: Pe, delay: Ee, getWebAnimations: q, getKeyframes: pe, getFill: se, getDirection: ve, getDelay: ye, getIterations: me, getEasing: le, getDuration: de, afterAddRead: ee, afterAddWrite: ne, afterClearStyles: ce, afterStyles: ue, afterRemoveClass: fe, afterAddClass: oe, beforeAddRead: X, beforeAddWrite: Y, beforeClearStyles: ie, beforeStyles: ae, beforeRemoveClass: te, beforeAddClass: re, onFinish: J, isRunning: G, progressStart: We, progressStep: je, progressEnd: He };
};

// node_modules/@ionic/core/dist/esm-es5/index-847f2fde.js
var NAMESPACE = "ionic";
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var queuePending = false;
var createTime = function(e, t) {
  if (t === void 0) {
    t = "";
  }
  {
    return function() {
      return;
    };
  }
};
var uniqueTime = function(e, t) {
  {
    return function() {
      return;
    };
  }
};
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var isDef = function(e) {
  return e != null;
};
var isComplexType = function(e) {
  e = typeof e;
  return e === "object" || e === "function";
};
function queryNonceMetaTagContent(e) {
  var t, n, r;
  return (r = (n = (t = e.head) === null || t === void 0 ? void 0 : t.querySelector('meta[name="csp-nonce"]')) === null || n === void 0 ? void 0 : n.getAttribute("content")) !== null && r !== void 0 ? r : void 0;
}
var h = function(e, t) {
  var n = [];
  for (var r = 2; r < arguments.length; r++) {
    n[r - 2] = arguments[r];
  }
  var a = null;
  var o = null;
  var s = null;
  var i = false;
  var l = false;
  var $ = [];
  var c = function(t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      a = t2[n2];
      if (Array.isArray(a)) {
        c(a);
      } else if (a != null && typeof a !== "boolean") {
        if (i = typeof e !== "function" && !isComplexType(a)) {
          a = String(a);
        }
        if (i && l) {
          $[$.length - 1].$text$ += a;
        } else {
          $.push(i ? newVNode(null, a) : a);
        }
        l = i;
      }
    }
  };
  c(n);
  if (t) {
    if (t.key) {
      o = t.key;
    }
    if (t.name) {
      s = t.name;
    }
    {
      var f = t.className || t.class;
      if (f) {
        t.class = typeof f !== "object" ? f : Object.keys(f).filter(function(e2) {
          return f[e2];
        }).join(" ");
      }
    }
  }
  if (typeof e === "function") {
    return e(t === null ? {} : t, $, vdomFnUtils);
  }
  var u = newVNode(e, null);
  u.$attrs$ = t;
  if ($.length > 0) {
    u.$children$ = $;
  }
  {
    u.$key$ = o;
  }
  {
    u.$name$ = s;
  }
  return u;
};
var newVNode = function(e, t) {
  var n = { $flags$: 0, $tag$: e, $text$: t, $elm$: null, $children$: null };
  {
    n.$attrs$ = null;
  }
  {
    n.$key$ = null;
  }
  {
    n.$name$ = null;
  }
  return n;
};
var Host = {};
var isHost = function(e) {
  return e && e.$tag$ === Host;
};
var vdomFnUtils = { forEach: function(e, t) {
  return e.map(convertToPublic).forEach(t);
}, map: function(e, t) {
  return e.map(convertToPublic).map(t).map(convertToPrivate);
} };
var convertToPublic = function(e) {
  return { vattrs: e.$attrs$, vchildren: e.$children$, vkey: e.$key$, vname: e.$name$, vtag: e.$tag$, vtext: e.$text$ };
};
var convertToPrivate = function(e) {
  if (typeof e.vtag === "function") {
    var t = Object.assign({}, e.vattrs);
    if (e.vkey) {
      t.key = e.vkey;
    }
    if (e.vname) {
      t.name = e.vname;
    }
    return h.apply(void 0, __spreadArray([e.vtag, t], e.vchildren || [], false));
  }
  var n = newVNode(e.vtag, e.vtext);
  n.$attrs$ = e.vattrs;
  n.$children$ = e.vchildren;
  n.$key$ = e.vkey;
  n.$name$ = e.vname;
  return n;
};
var initializeClientHydrate = function(e, t, n, r) {
  var a = createTime("hydrateClient", t);
  var o = e.shadowRoot;
  var s = [];
  var i = [];
  var l = o ? [] : null;
  var $ = r.$vnode$ = newVNode(t, null);
  if (!plt.$orgLocNodes$) {
    initializeDocumentHydrate(doc.body, plt.$orgLocNodes$ = /* @__PURE__ */ new Map());
  }
  e[HYDRATE_ID] = n;
  e.removeAttribute(HYDRATE_ID);
  clientHydrate($, s, i, l, e, e, n);
  s.map(function(e2) {
    var n2 = e2.$hostId$ + "." + e2.$nodeId$;
    var r2 = plt.$orgLocNodes$.get(n2);
    var a2 = e2.$elm$;
    if (r2 && supportsShadow && r2["s-en"] === "") {
      r2.parentNode.insertBefore(a2, r2.nextSibling);
    }
    if (!o) {
      a2["s-hn"] = t;
      if (r2) {
        a2["s-ol"] = r2;
        a2["s-ol"]["s-nr"] = a2;
      }
    }
    plt.$orgLocNodes$.delete(n2);
  });
  if (o) {
    l.map(function(e2) {
      if (e2) {
        o.appendChild(e2);
      }
    });
  }
  a();
};
var clientHydrate = function(e, t, n, r, a, o, s) {
  var i;
  var l;
  var $;
  var c;
  if (o.nodeType === 1) {
    i = o.getAttribute(HYDRATE_CHILD_ID);
    if (i) {
      l = i.split(".");
      if (l[0] === s || l[0] === "0") {
        $ = { $flags$: 0, $hostId$: l[0], $nodeId$: l[1], $depth$: l[2], $index$: l[3], $tag$: o.tagName.toLowerCase(), $elm$: o, $attrs$: null, $children$: null, $key$: null, $name$: null, $text$: null };
        t.push($);
        o.removeAttribute(HYDRATE_CHILD_ID);
        if (!e.$children$) {
          e.$children$ = [];
        }
        e.$children$[$.$index$] = $;
        e = $;
        if (r && $.$depth$ === "0") {
          r[$.$index$] = $.$elm$;
        }
      }
    }
    for (c = o.childNodes.length - 1; c >= 0; c--) {
      clientHydrate(e, t, n, r, a, o.childNodes[c], s);
    }
    if (o.shadowRoot) {
      for (c = o.shadowRoot.childNodes.length - 1; c >= 0; c--) {
        clientHydrate(e, t, n, r, a, o.shadowRoot.childNodes[c], s);
      }
    }
  } else if (o.nodeType === 8) {
    l = o.nodeValue.split(".");
    if (l[1] === s || l[1] === "0") {
      i = l[0];
      $ = { $flags$: 0, $hostId$: l[1], $nodeId$: l[2], $depth$: l[3], $index$: l[4], $elm$: o, $attrs$: null, $children$: null, $key$: null, $name$: null, $tag$: null, $text$: null };
      if (i === TEXT_NODE_ID) {
        $.$elm$ = o.nextSibling;
        if ($.$elm$ && $.$elm$.nodeType === 3) {
          $.$text$ = $.$elm$.textContent;
          t.push($);
          o.remove();
          if (!e.$children$) {
            e.$children$ = [];
          }
          e.$children$[$.$index$] = $;
          if (r && $.$depth$ === "0") {
            r[$.$index$] = $.$elm$;
          }
        }
      } else if ($.$hostId$ === s) {
        if (i === SLOT_NODE_ID) {
          $.$tag$ = "slot";
          if (l[5]) {
            o["s-sn"] = $.$name$ = l[5];
          } else {
            o["s-sn"] = "";
          }
          o["s-sr"] = true;
          if (r) {
            $.$elm$ = doc.createElement($.$tag$);
            if ($.$name$) {
              $.$elm$.setAttribute("name", $.$name$);
            }
            o.parentNode.insertBefore($.$elm$, o);
            o.remove();
            if ($.$depth$ === "0") {
              r[$.$index$] = $.$elm$;
            }
          }
          n.push($);
          if (!e.$children$) {
            e.$children$ = [];
          }
          e.$children$[$.$index$] = $;
        } else if (i === CONTENT_REF_ID) {
          if (r) {
            o.remove();
          } else {
            a["s-cr"] = o;
            o["s-cn"] = true;
          }
        }
      }
    }
  } else if (e && e.$tag$ === "style") {
    var f = newVNode(null, o.textContent);
    f.$elm$ = o;
    f.$index$ = "0";
    e.$children$ = [f];
  }
};
var initializeDocumentHydrate = function(e, t) {
  if (e.nodeType === 1) {
    var n = 0;
    for (; n < e.childNodes.length; n++) {
      initializeDocumentHydrate(e.childNodes[n], t);
    }
    if (e.shadowRoot) {
      for (n = 0; n < e.shadowRoot.childNodes.length; n++) {
        initializeDocumentHydrate(e.shadowRoot.childNodes[n], t);
      }
    }
  } else if (e.nodeType === 8) {
    var r = e.nodeValue.split(".");
    if (r[0] === ORG_LOCATION_ID) {
      t.set(r[1] + "." + r[2], e);
      e.nodeValue = "";
      e["s-en"] = r[3];
    }
  }
};
var computeMode = function(e) {
  return modeResolutionChain.map(function(t) {
    return t(e);
  }).find(function(e2) {
    return !!e2;
  });
};
var setMode = function(e) {
  return modeResolutionChain.push(e);
};
var getMode = function(e) {
  return getHostRef(e).$modeName$;
};
var parsePropertyValue = function(e, t) {
  if (e != null && !isComplexType(e)) {
    if (t & 4) {
      return e === "false" ? false : e === "" || !!e;
    }
    if (t & 2) {
      return parseFloat(e);
    }
    if (t & 1) {
      return String(e);
    }
    return e;
  }
  return e;
};
var emitEvent = function(e, t, n) {
  var r = plt.ce(t, n);
  e.dispatchEvent(r);
  return r;
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = function(e, t, n) {
  var r = styles.get(e);
  if (supportsConstructableStylesheets && n) {
    r = r || new CSSStyleSheet();
    if (typeof r === "string") {
      r = t;
    } else {
      r.replaceSync(t);
    }
  } else {
    r = t;
  }
  styles.set(e, r);
};
var addStyle = function(e, t, n) {
  var r;
  var a = getScopeId(t, n);
  var o = styles.get(a);
  e = e.nodeType === 11 ? e : doc;
  if (o) {
    if (typeof o === "string") {
      e = e.head || e;
      var s = rootAppliedStyles.get(e);
      var i = void 0;
      if (!s) {
        rootAppliedStyles.set(e, s = /* @__PURE__ */ new Set());
      }
      if (!s.has(a)) {
        if (e.host && (i = e.querySelector("[".concat(HYDRATED_STYLE_ID, '="').concat(a, '"]')))) {
          i.innerHTML = o;
        } else {
          i = doc.createElement("style");
          i.innerHTML = o;
          var l = (r = plt.$nonce$) !== null && r !== void 0 ? r : queryNonceMetaTagContent(doc);
          if (l != null) {
            i.setAttribute("nonce", l);
          }
          e.insertBefore(i, e.querySelector("link"));
        }
        if (s) {
          s.add(a);
        }
      }
    } else if (!e.adoptedStyleSheets.includes(o)) {
      e.adoptedStyleSheets = __spreadArray(__spreadArray([], e.adoptedStyleSheets, true), [o], false);
    }
  }
  return a;
};
var attachStyles = function(e) {
  var t = e.$cmpMeta$;
  var n = e.$hostElement$;
  var r = t.$flags$;
  var a = createTime("attachStyles", t.$tagName$);
  var o = addStyle(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t, e.$modeName$);
  if (r & 10) {
    n["s-sc"] = o;
    n.classList.add(o + "-h");
    if (r & 2) {
      n.classList.add(o + "-s");
    }
  }
  a();
};
var getScopeId = function(e, t) {
  return "sc-" + (t && e.$flags$ & 32 ? e.$tagName$ + "-" + t : e.$tagName$);
};
var convertScopedToShadow = function(e) {
  return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
};
var setAccessor = function(e, t, n, r, a, o) {
  if (n !== r) {
    var s = isMemberInElement(e, t);
    var i = t.toLowerCase();
    if (t === "class") {
      var l = e.classList;
      var $ = parseClassList(n);
      var c = parseClassList(r);
      l.remove.apply(l, $.filter(function(e2) {
        return e2 && !c.includes(e2);
      }));
      l.add.apply(l, c.filter(function(e2) {
        return e2 && !$.includes(e2);
      }));
    } else if (t === "style") {
      {
        for (var f in n) {
          if (!r || r[f] == null) {
            if (f.includes("-")) {
              e.style.removeProperty(f);
            } else {
              e.style[f] = "";
            }
          }
        }
      }
      for (var f in r) {
        if (!n || r[f] !== n[f]) {
          if (f.includes("-")) {
            e.style.setProperty(f, r[f]);
          } else {
            e.style[f] = r[f];
          }
        }
      }
    } else if (t === "key")
      ;
    else if (t === "ref") {
      if (r) {
        r(e);
      }
    } else if (!s && t[0] === "o" && t[1] === "n") {
      if (t[2] === "-") {
        t = t.slice(3);
      } else if (isMemberInElement(win2, i)) {
        t = i.slice(2);
      } else {
        t = i[2] + t.slice(3);
      }
      if (n) {
        plt.rel(e, t, n, false);
      }
      if (r) {
        plt.ael(e, t, r, false);
      }
    } else {
      var u = isComplexType(r);
      if ((s || u && r !== null) && !a) {
        try {
          if (!e.tagName.includes("-")) {
            var d = r == null ? "" : r;
            if (t === "list") {
              s = false;
            } else if (n == null || e[t] != d) {
              e[t] = d;
            }
          } else {
            e[t] = r;
          }
        } catch (e2) {
        }
      }
      var v = false;
      {
        if (i !== (i = i.replace(/^xlink\:?/, ""))) {
          t = i;
          v = true;
        }
      }
      if (r == null || r === false) {
        if (r !== false || e.getAttribute(t) === "") {
          if (v) {
            e.removeAttributeNS(XLINK_NS, t);
          } else {
            e.removeAttribute(t);
          }
        }
      } else if ((!s || o & 4 || a) && !u) {
        r = r === true ? "" : r;
        if (v) {
          e.setAttributeNS(XLINK_NS, t, r);
        } else {
          e.setAttribute(t, r);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = function(e) {
  return !e ? [] : e.split(parseClassListRegex);
};
var updateElement = function(e, t, n, r) {
  var a = t.$elm$.nodeType === 11 && t.$elm$.host ? t.$elm$.host : t.$elm$;
  var o = e && e.$attrs$ || EMPTY_OBJ;
  var s = t.$attrs$ || EMPTY_OBJ;
  {
    for (r in o) {
      if (!(r in s)) {
        setAccessor(a, r, o[r], void 0, n, t.$flags$);
      }
    }
  }
  for (r in s) {
    setAccessor(a, r, o[r], s[r], n, t.$flags$);
  }
};
var createElm = function(e, t, n, r) {
  var a = t.$children$[n];
  var o = 0;
  var s;
  var i;
  var l;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (a.$tag$ === "slot") {
      if (scopeId) {
        r.classList.add(scopeId + "-s");
      }
      a.$flags$ |= a.$children$ ? 2 : 1;
    }
  }
  if (a.$text$ !== null) {
    s = a.$elm$ = doc.createTextNode(a.$text$);
  } else if (a.$flags$ & 1) {
    s = a.$elm$ = doc.createTextNode("");
  } else {
    if (!isSvgMode) {
      isSvgMode = a.$tag$ === "svg";
    }
    s = a.$elm$ = doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, a.$flags$ & 2 ? "slot-fb" : a.$tag$);
    if (isSvgMode && a.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, a, isSvgMode);
    }
    if (isDef(scopeId) && s["s-si"] !== scopeId) {
      s.classList.add(s["s-si"] = scopeId);
    }
    if (a.$children$) {
      for (o = 0; o < a.$children$.length; ++o) {
        i = createElm(e, a, o, s);
        if (i) {
          s.appendChild(i);
        }
      }
    }
    {
      if (a.$tag$ === "svg") {
        isSvgMode = false;
      } else if (s.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  {
    s["s-hn"] = hostTagName;
    if (a.$flags$ & (2 | 1)) {
      s["s-sr"] = true;
      s["s-cr"] = contentRef;
      s["s-sn"] = a.$name$ || "";
      l = e && e.$children$ && e.$children$[n];
      if (l && l.$tag$ === a.$tag$ && e.$elm$) {
        putBackInOriginalLocation(e.$elm$, false);
      }
    }
  }
  return s;
};
var putBackInOriginalLocation = function(e, t) {
  plt.$flags$ |= 1;
  var n = e.childNodes;
  for (var r = n.length - 1; r >= 0; r--) {
    var a = n[r];
    if (a["s-hn"] !== hostTagName && a["s-ol"]) {
      parentReferenceNode(a).insertBefore(a, referenceNode(a));
      a["s-ol"].remove();
      a["s-ol"] = void 0;
      checkSlotRelocate = true;
    }
    if (t) {
      putBackInOriginalLocation(a, t);
    }
  }
  plt.$flags$ &= ~1;
};
var addVnodes = function(e, t, n, r, a, o) {
  var s = e["s-cr"] && e["s-cr"].parentNode || e;
  var i;
  if (s.shadowRoot && s.tagName === hostTagName) {
    s = s.shadowRoot;
  }
  for (; a <= o; ++a) {
    if (r[a]) {
      i = createElm(null, n, a, e);
      if (i) {
        r[a].$elm$ = i;
        s.insertBefore(i, referenceNode(t));
      }
    }
  }
};
var removeVnodes = function(e, t, n) {
  for (var r = t; r <= n; ++r) {
    var a = e[r];
    if (a) {
      var o = a.$elm$;
      nullifyVNodeRefs(a);
      if (o) {
        {
          checkSlotFallbackVisibility = true;
          if (o["s-ol"]) {
            o["s-ol"].remove();
          } else {
            putBackInOriginalLocation(o, true);
          }
        }
        o.remove();
      }
    }
  }
};
var updateChildren = function(e, t, n, r) {
  var a = 0;
  var o = 0;
  var s = 0;
  var i = 0;
  var l = t.length - 1;
  var $ = t[0];
  var c = t[l];
  var f = r.length - 1;
  var u = r[0];
  var d = r[f];
  var v;
  var p;
  while (a <= l && o <= f) {
    if ($ == null) {
      $ = t[++a];
    } else if (c == null) {
      c = t[--l];
    } else if (u == null) {
      u = r[++o];
    } else if (d == null) {
      d = r[--f];
    } else if (isSameVnode($, u)) {
      patch($, u);
      $ = t[++a];
      u = r[++o];
    } else if (isSameVnode(c, d)) {
      patch(c, d);
      c = t[--l];
      d = r[--f];
    } else if (isSameVnode($, d)) {
      if ($.$tag$ === "slot" || d.$tag$ === "slot") {
        putBackInOriginalLocation($.$elm$.parentNode, false);
      }
      patch($, d);
      e.insertBefore($.$elm$, c.$elm$.nextSibling);
      $ = t[++a];
      d = r[--f];
    } else if (isSameVnode(c, u)) {
      if ($.$tag$ === "slot" || d.$tag$ === "slot") {
        putBackInOriginalLocation(c.$elm$.parentNode, false);
      }
      patch(c, u);
      e.insertBefore(c.$elm$, $.$elm$);
      c = t[--l];
      u = r[++o];
    } else {
      s = -1;
      {
        for (i = a; i <= l; ++i) {
          if (t[i] && t[i].$key$ !== null && t[i].$key$ === u.$key$) {
            s = i;
            break;
          }
        }
      }
      if (s >= 0) {
        p = t[s];
        if (p.$tag$ !== u.$tag$) {
          v = createElm(t && t[o], n, s, e);
        } else {
          patch(p, u);
          t[s] = void 0;
          v = p.$elm$;
        }
        u = r[++o];
      } else {
        v = createElm(t && t[o], n, o, e);
        u = r[++o];
      }
      if (v) {
        {
          parentReferenceNode($.$elm$).insertBefore(v, referenceNode($.$elm$));
        }
      }
    }
  }
  if (a > l) {
    addVnodes(e, r[f + 1] == null ? null : r[f + 1].$elm$, n, r, o, f);
  } else if (o > f) {
    removeVnodes(t, a, l);
  }
};
var isSameVnode = function(e, t) {
  if (e.$tag$ === t.$tag$) {
    if (e.$tag$ === "slot") {
      return e.$name$ === t.$name$;
    }
    {
      return e.$key$ === t.$key$;
    }
  }
  return false;
};
var referenceNode = function(e) {
  return e && e["s-ol"] || e;
};
var parentReferenceNode = function(e) {
  return (e["s-ol"] ? e["s-ol"] : e).parentNode;
};
var patch = function(e, t) {
  var n = t.$elm$ = e.$elm$;
  var r = e.$children$;
  var a = t.$children$;
  var o = t.$tag$;
  var s = t.$text$;
  var i;
  if (s === null) {
    {
      isSvgMode = o === "svg" ? true : o === "foreignObject" ? false : isSvgMode;
    }
    {
      if (o === "slot")
        ;
      else {
        updateElement(e, t, isSvgMode);
      }
    }
    if (r !== null && a !== null) {
      updateChildren(n, r, t, a);
    } else if (a !== null) {
      if (e.$text$ !== null) {
        n.textContent = "";
      }
      addVnodes(n, null, t, a, 0, a.length - 1);
    } else if (r !== null) {
      removeVnodes(r, 0, r.length - 1);
    }
    if (isSvgMode && o === "svg") {
      isSvgMode = false;
    }
  } else if (i = n["s-cr"]) {
    i.parentNode.textContent = s;
  } else if (e.$text$ !== s) {
    n.data = s;
  }
};
var updateFallbackSlotVisibility = function(e) {
  var t = e.childNodes;
  var n;
  var r;
  var a;
  var o;
  var s;
  var i;
  for (r = 0, a = t.length; r < a; r++) {
    n = t[r];
    if (n.nodeType === 1) {
      if (n["s-sr"]) {
        s = n["s-sn"];
        n.hidden = false;
        for (o = 0; o < a; o++) {
          i = t[o].nodeType;
          if (t[o]["s-hn"] !== n["s-hn"] || s !== "") {
            if (i === 1 && s === t[o].getAttribute("slot")) {
              n.hidden = true;
              break;
            }
          } else {
            if (i === 1 || i === 3 && t[o].textContent.trim() !== "") {
              n.hidden = true;
              break;
            }
          }
        }
      }
      updateFallbackSlotVisibility(n);
    }
  }
};
var relocateNodes = [];
var relocateSlotContent = function(e) {
  var t;
  var n;
  var r;
  var a;
  var o;
  var s;
  var i = 0;
  var l = e.childNodes;
  var $ = l.length;
  for (; i < $; i++) {
    t = l[i];
    if (t["s-sr"] && (n = t["s-cr"]) && n.parentNode) {
      r = n.parentNode.childNodes;
      a = t["s-sn"];
      for (s = r.length - 1; s >= 0; s--) {
        n = r[s];
        if (!n["s-cn"] && !n["s-nr"] && n["s-hn"] !== t["s-hn"]) {
          if (isNodeLocatedInSlot(n, a)) {
            o = relocateNodes.find(function(e2) {
              return e2.$nodeToRelocate$ === n;
            });
            checkSlotFallbackVisibility = true;
            n["s-sn"] = n["s-sn"] || a;
            if (o) {
              o.$slotRefNode$ = t;
            } else {
              relocateNodes.push({ $slotRefNode$: t, $nodeToRelocate$: n });
            }
            if (n["s-sr"]) {
              relocateNodes.map(function(e2) {
                if (isNodeLocatedInSlot(e2.$nodeToRelocate$, n["s-sn"])) {
                  o = relocateNodes.find(function(e3) {
                    return e3.$nodeToRelocate$ === n;
                  });
                  if (o && !e2.$slotRefNode$) {
                    e2.$slotRefNode$ = o.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some(function(e2) {
            return e2.$nodeToRelocate$ === n;
          })) {
            relocateNodes.push({ $nodeToRelocate$: n });
          }
        }
      }
    }
    if (t.nodeType === 1) {
      relocateSlotContent(t);
    }
  }
};
var isNodeLocatedInSlot = function(e, t) {
  if (e.nodeType === 1) {
    if (e.getAttribute("slot") === null && t === "") {
      return true;
    }
    if (e.getAttribute("slot") === t) {
      return true;
    }
    return false;
  }
  if (e["s-sn"] === t) {
    return true;
  }
  return t === "";
};
var nullifyVNodeRefs = function(e) {
  {
    e.$attrs$ && e.$attrs$.ref && e.$attrs$.ref(null);
    e.$children$ && e.$children$.map(nullifyVNodeRefs);
  }
};
var renderVdom = function(e, t, n) {
  if (n === void 0) {
    n = false;
  }
  var r = e.$hostElement$;
  var a = e.$cmpMeta$;
  var o = e.$vnode$ || newVNode(null, null);
  var s = isHost(t) ? t : h(null, null, t);
  hostTagName = r.tagName;
  if (a.$attrsToReflect$) {
    s.$attrs$ = s.$attrs$ || {};
    a.$attrsToReflect$.map(function(e2) {
      var t2 = e2[0], n2 = e2[1];
      return s.$attrs$[n2] = r[t2];
    });
  }
  if (n && s.$attrs$) {
    for (var i = 0, l = Object.keys(s.$attrs$); i < l.length; i++) {
      var $ = l[i];
      if (r.hasAttribute($) && !["key", "ref", "style", "class"].includes($)) {
        s.$attrs$[$] = r[$];
      }
    }
  }
  s.$tag$ = null;
  s.$flags$ |= 4;
  e.$vnode$ = s;
  s.$elm$ = o.$elm$ = r.shadowRoot || r;
  {
    scopeId = r["s-sc"];
  }
  {
    contentRef = r["s-cr"];
    useNativeShadowDom = (a.$flags$ & 1) !== 0;
    checkSlotFallbackVisibility = false;
  }
  patch(o, s);
  {
    plt.$flags$ |= 1;
    if (checkSlotRelocate) {
      relocateSlotContent(s.$elm$);
      var c = void 0;
      var f = void 0;
      var u = void 0;
      var d = void 0;
      var v = void 0;
      var p = void 0;
      var m = 0;
      for (; m < relocateNodes.length; m++) {
        c = relocateNodes[m];
        f = c.$nodeToRelocate$;
        if (!f["s-ol"]) {
          u = doc.createTextNode("");
          u["s-nr"] = f;
          f.parentNode.insertBefore(f["s-ol"] = u, f);
        }
      }
      for (m = 0; m < relocateNodes.length; m++) {
        c = relocateNodes[m];
        f = c.$nodeToRelocate$;
        if (c.$slotRefNode$) {
          d = c.$slotRefNode$.parentNode;
          v = c.$slotRefNode$.nextSibling;
          u = f["s-ol"];
          while (u = u.previousSibling) {
            p = u["s-nr"];
            if (p && p["s-sn"] === f["s-sn"] && d === p.parentNode) {
              p = p.nextSibling;
              if (!p || !p["s-nr"]) {
                v = p;
                break;
              }
            }
          }
          if (!v && d !== f.parentNode || f.nextSibling !== v) {
            if (f !== v) {
              if (!f["s-hn"] && f["s-ol"]) {
                f["s-hn"] = f["s-ol"].parentNode.nodeName;
              }
              d.insertBefore(f, v);
            }
          }
        } else {
          if (f.nodeType === 1) {
            f.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(s.$elm$);
    }
    plt.$flags$ &= ~1;
    relocateNodes.length = 0;
  }
};
var attachToAncestor = function(e, t) {
  if (t && !e.$onRenderResolve$ && t["s-p"]) {
    t["s-p"].push(new Promise(function(t2) {
      return e.$onRenderResolve$ = t2;
    }));
  }
};
var scheduleUpdate = function(e, t) {
  {
    e.$flags$ |= 16;
  }
  if (e.$flags$ & 4) {
    e.$flags$ |= 512;
    return;
  }
  attachToAncestor(e, e.$ancestorComponent$);
  var n = function() {
    return dispatchHooks(e, t);
  };
  return writeTask(n);
};
var dispatchHooks = function(e, t) {
  var n = createTime("scheduleUpdate", e.$cmpMeta$.$tagName$);
  var r = e.$lazyInstance$;
  var a;
  if (t) {
    {
      e.$flags$ |= 256;
      if (e.$queuedListeners$) {
        e.$queuedListeners$.map(function(e2) {
          var t2 = e2[0], n2 = e2[1];
          return safeCall(r, t2, n2);
        });
        e.$queuedListeners$ = void 0;
      }
    }
    {
      a = safeCall(r, "componentWillLoad");
    }
  }
  {
    a = enqueue(a, function() {
      return safeCall(r, "componentWillRender");
    });
  }
  n();
  return enqueue(a, function() {
    return updateComponent(e, r, t);
  });
};
var enqueue = function(e, t) {
  return isPromisey(e) ? e.then(t) : t();
};
var isPromisey = function(e) {
  return e instanceof Promise || e && e.then && typeof e.then === "function";
};
var updateComponent = function(e, t, n) {
  return __awaiter(void 0, void 0, void 0, function() {
    var r, a, o, s, i, l, $;
    return __generator(this, function(c) {
      a = e.$hostElement$;
      o = createTime("update", e.$cmpMeta$.$tagName$);
      s = a["s-rc"];
      if (n) {
        attachStyles(e);
      }
      i = createTime("render", e.$cmpMeta$.$tagName$);
      {
        callRender(e, t, a, n);
      }
      if (s) {
        s.map(function(e2) {
          return e2();
        });
        a["s-rc"] = void 0;
      }
      i();
      o();
      {
        l = (r = a["s-p"]) !== null && r !== void 0 ? r : [];
        $ = function() {
          return postUpdateComponent(e);
        };
        if (l.length === 0) {
          $();
        } else {
          Promise.all(l).then($);
          e.$flags$ |= 4;
          l.length = 0;
        }
      }
      return [2];
    });
  });
};
var callRender = function(e, t, n, r) {
  try {
    t = t.render && t.render();
    {
      e.$flags$ &= ~16;
    }
    {
      e.$flags$ |= 2;
    }
    {
      {
        {
          renderVdom(e, t, r);
        }
      }
    }
  } catch (t2) {
    consoleError(t2, e.$hostElement$);
  }
  return null;
};
var postUpdateComponent = function(e) {
  var t = e.$cmpMeta$.$tagName$;
  var n = e.$hostElement$;
  var r = createTime("postUpdate", t);
  var a = e.$lazyInstance$;
  var o = e.$ancestorComponent$;
  {
    safeCall(a, "componentDidRender");
  }
  if (!(e.$flags$ & 64)) {
    e.$flags$ |= 64;
    {
      addHydratedFlag(n);
    }
    {
      safeCall(a, "componentDidLoad");
    }
    r();
    {
      e.$onReadyResolve$(n);
      if (!o) {
        appDidLoad();
      }
    }
  } else {
    {
      safeCall(a, "componentDidUpdate");
    }
    r();
  }
  {
    e.$onInstanceResolve$(n);
  }
  {
    if (e.$onRenderResolve$) {
      e.$onRenderResolve$();
      e.$onRenderResolve$ = void 0;
    }
    if (e.$flags$ & 512) {
      nextTick(function() {
        return scheduleUpdate(e, false);
      });
    }
    e.$flags$ &= ~(4 | 512);
  }
};
var appDidLoad = function(e) {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(function() {
    return emitEvent(win2, "appload", { detail: { namespace: NAMESPACE } });
  });
};
var safeCall = function(e, t, n) {
  if (e && e[t]) {
    try {
      return e[t](n);
    } catch (e2) {
      consoleError(e2);
    }
  }
  return void 0;
};
var addHydratedFlag = function(e) {
  return e.classList.add("hydrated");
};
var getValue = function(e, t) {
  return getHostRef(e).$instanceValues$.get(t);
};
var setValue = function(e, t, n, r) {
  var a = getHostRef(e);
  var o = a.$hostElement$;
  var s = a.$instanceValues$.get(t);
  var i = a.$flags$;
  var l = a.$lazyInstance$;
  n = parsePropertyValue(n, r.$members$[t][0]);
  var $ = Number.isNaN(s) && Number.isNaN(n);
  var c = n !== s && !$;
  if ((!(i & 8) || s === void 0) && c) {
    a.$instanceValues$.set(t, n);
    if (l) {
      if (r.$watchers$ && i & 128) {
        var f = r.$watchers$[t];
        if (f) {
          f.map(function(e2) {
            try {
              l[e2](n, s, t);
            } catch (e3) {
              consoleError(e3, o);
            }
          });
        }
      }
      if ((i & (2 | 16)) === 2) {
        scheduleUpdate(a, false);
      }
    }
  }
};
var proxyComponent = function(e, t, n) {
  if (t.$members$) {
    if (e.watchers) {
      t.$watchers$ = e.watchers;
    }
    var r = Object.entries(t.$members$);
    var a = e.prototype;
    r.map(function(e2) {
      var r2 = e2[0], o2 = e2[1][0];
      if (o2 & 31 || n & 2 && o2 & 32) {
        Object.defineProperty(a, r2, { get: function() {
          return getValue(this, r2);
        }, set: function(e3) {
          setValue(this, r2, e3, t);
        }, configurable: true, enumerable: true });
      } else if (n & 1 && o2 & 64) {
        Object.defineProperty(a, r2, { value: function() {
          var e3 = [];
          for (var t2 = 0; t2 < arguments.length; t2++) {
            e3[t2] = arguments[t2];
          }
          var n2 = getHostRef(this);
          return n2.$onInstancePromise$.then(function() {
            var t3;
            return (t3 = n2.$lazyInstance$)[r2].apply(t3, e3);
          });
        } });
      }
    });
    if (n & 1) {
      var o = /* @__PURE__ */ new Map();
      a.attributeChangedCallback = function(e2, t2, n2) {
        var r2 = this;
        plt.jmp(function() {
          var t3 = o.get(e2);
          if (r2.hasOwnProperty(t3)) {
            n2 = r2[t3];
            delete r2[t3];
          } else if (a.hasOwnProperty(t3) && typeof r2[t3] === "number" && r2[t3] == n2) {
            return;
          }
          r2[t3] = n2 === null && typeof r2[t3] === "boolean" ? false : n2;
        });
      };
      e.observedAttributes = r.filter(function(e2) {
        var t2 = e2[0], n2 = e2[1];
        return n2[0] & 15;
      }).map(function(e2) {
        var n2 = e2[0], r2 = e2[1];
        var a2 = r2[1] || n2;
        o.set(a2, n2);
        if (r2[0] & 512) {
          t.$attrsToReflect$.push([n2, a2]);
        }
        return a2;
      });
    }
  }
  return e;
};
var initializeComponent = function(e, t, n, r, a) {
  return __awaiter(void 0, void 0, void 0, function() {
    var r2, o, s, i, l, $, c;
    return __generator(this, function(f) {
      switch (f.label) {
        case 0:
          if (!((t.$flags$ & 32) === 0))
            return [3, 3];
          t.$flags$ |= 32;
          a = loadModule(n);
          if (!a.then)
            return [3, 2];
          r2 = uniqueTime();
          return [4, a];
        case 1:
          a = f.sent();
          r2();
          f.label = 2;
        case 2:
          if (!a.isProxied) {
            {
              n.$watchers$ = a.watchers;
            }
            proxyComponent(a, n, 2);
            a.isProxied = true;
          }
          o = createTime("createInstance", n.$tagName$);
          {
            t.$flags$ |= 8;
          }
          try {
            new a(t);
          } catch (e2) {
            consoleError(e2);
          }
          {
            t.$flags$ &= ~8;
          }
          {
            t.$flags$ |= 128;
          }
          o();
          fireConnectedCallback(t.$lazyInstance$);
          if (a.style) {
            s = a.style;
            if (typeof s !== "string") {
              s = s[t.$modeName$ = computeMode(e)];
            }
            i = getScopeId(n, t.$modeName$);
            if (!styles.has(i)) {
              l = createTime("registerStyles", n.$tagName$);
              registerStyle(i, s, !!(n.$flags$ & 1));
              l();
            }
          }
          f.label = 3;
        case 3:
          $ = t.$ancestorComponent$;
          c = function() {
            return scheduleUpdate(t, true);
          };
          if ($ && $["s-rc"]) {
            $["s-rc"].push(c);
          } else {
            c();
          }
          return [2];
      }
    });
  });
};
var fireConnectedCallback = function(e) {
  {
    safeCall(e, "connectedCallback");
  }
};
var connectedCallback = function(e) {
  if ((plt.$flags$ & 1) === 0) {
    var t = getHostRef(e);
    var n = t.$cmpMeta$;
    var r = createTime("connectedCallback", n.$tagName$);
    if (!(t.$flags$ & 1)) {
      t.$flags$ |= 1;
      var a = void 0;
      {
        a = e.getAttribute(HYDRATE_ID);
        if (a) {
          if (n.$flags$ & 1) {
            var o = addStyle(e.shadowRoot, n, e.getAttribute("s-mode"));
            e.classList.remove(o + "-h", o + "-s");
          }
          initializeClientHydrate(e, n.$tagName$, a, t);
        }
      }
      if (!a) {
        if (n.$flags$ & (4 | 8)) {
          setContentReference(e);
        }
      }
      {
        var s = e;
        while (s = s.parentNode || s.host) {
          if (s.nodeType === 1 && s.hasAttribute("s-id") && s["s-p"] || s["s-p"]) {
            attachToAncestor(t, t.$ancestorComponent$ = s);
            break;
          }
        }
      }
      if (n.$members$) {
        Object.entries(n.$members$).map(function(t2) {
          var n2 = t2[0], r2 = t2[1][0];
          if (r2 & 31 && e.hasOwnProperty(n2)) {
            var a2 = e[n2];
            delete e[n2];
            e[n2] = a2;
          }
        });
      }
      {
        initializeComponent(e, t, n);
      }
    } else {
      addHostEventListeners(e, t, n.$listeners$);
      if (t === null || t === void 0 ? void 0 : t.$lazyInstance$) {
        fireConnectedCallback(t.$lazyInstance$);
      } else if (t === null || t === void 0 ? void 0 : t.$onReadyPromise$) {
        t.$onReadyPromise$.then(function() {
          return fireConnectedCallback(t.$lazyInstance$);
        });
      }
    }
    r();
  }
};
var setContentReference = function(e) {
  var t = e["s-cr"] = doc.createComment("");
  t["s-cn"] = true;
  e.insertBefore(t, e.firstChild);
};
var disconnectInstance = function(e) {
  {
    safeCall(e, "disconnectedCallback");
  }
};
var disconnectedCallback = function(e) {
  return __awaiter(void 0, void 0, void 0, function() {
    var t;
    return __generator(this, function(n) {
      if ((plt.$flags$ & 1) === 0) {
        t = getHostRef(e);
        {
          if (t.$rmListeners$) {
            t.$rmListeners$.map(function(e2) {
              return e2();
            });
            t.$rmListeners$ = void 0;
          }
        }
        if (t === null || t === void 0 ? void 0 : t.$lazyInstance$) {
          disconnectInstance(t.$lazyInstance$);
        } else if (t === null || t === void 0 ? void 0 : t.$onReadyPromise$) {
          t.$onReadyPromise$.then(function() {
            return disconnectInstance(t.$lazyInstance$);
          });
        }
      }
      return [2];
    });
  });
};
var bootstrapLazy = function(e, t) {
  if (t === void 0) {
    t = {};
  }
  var n;
  var r = createTime();
  var a = [];
  var o = t.exclude || [];
  var s = win2.customElements;
  var i = doc.head;
  var l = i.querySelector("meta[charset]");
  var $ = doc.createElement("style");
  var c = [];
  var f = doc.querySelectorAll("[".concat(HYDRATED_STYLE_ID, "]"));
  var u;
  var d = true;
  var v = 0;
  Object.assign(plt, t);
  plt.$resourcesUrl$ = new URL(t.resourcesUrl || "./", doc.baseURI).href;
  {
    plt.$flags$ |= 2;
  }
  {
    for (; v < f.length; v++) {
      registerStyle(f[v].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(f[v].innerHTML), true);
    }
  }
  e.map(function(e2) {
    e2[1].map(function(t2) {
      var n2 = { $flags$: t2[0], $tagName$: t2[1], $members$: t2[2], $listeners$: t2[3] };
      {
        n2.$members$ = t2[2];
      }
      {
        n2.$listeners$ = t2[3];
      }
      {
        n2.$attrsToReflect$ = [];
      }
      {
        n2.$watchers$ = {};
      }
      var r2 = n2.$tagName$;
      var i2 = function(e3) {
        __extends(t3, e3);
        function t3(t4) {
          var r3 = e3.call(this, t4) || this;
          t4 = r3;
          registerHost(t4, n2);
          if (n2.$flags$ & 1) {
            {
              {
                t4.attachShadow({ mode: "open", delegatesFocus: !!(n2.$flags$ & 16) });
              }
            }
          }
          return r3;
        }
        t3.prototype.connectedCallback = function() {
          var e4 = this;
          if (u) {
            clearTimeout(u);
            u = null;
          }
          if (d) {
            c.push(this);
          } else {
            plt.jmp(function() {
              return connectedCallback(e4);
            });
          }
        };
        t3.prototype.disconnectedCallback = function() {
          var e4 = this;
          plt.jmp(function() {
            return disconnectedCallback(e4);
          });
        };
        t3.prototype.componentOnReady = function() {
          return getHostRef(this).$onReadyPromise$;
        };
        return t3;
      }(HTMLElement);
      n2.$lazyBundleId$ = e2[0];
      if (!o.includes(r2) && !s.get(r2)) {
        a.push(r2);
        s.define(r2, proxyComponent(i2, n2, 1));
      }
    });
  });
  {
    $.innerHTML = a + HYDRATED_CSS;
    $.setAttribute("data-styles", "");
    var p = (n = plt.$nonce$) !== null && n !== void 0 ? n : queryNonceMetaTagContent(doc);
    if (p != null) {
      $.setAttribute("nonce", p);
    }
    i.insertBefore($, l ? l.nextSibling : i.firstChild);
  }
  d = false;
  if (c.length) {
    c.map(function(e2) {
      return e2.connectedCallback();
    });
  } else {
    {
      plt.jmp(function() {
        return u = setTimeout(appDidLoad, 30);
      });
    }
  }
  r();
};
var addHostEventListeners = function(e, t, n, r) {
  if (n) {
    n.map(function(n2) {
      var r2 = n2[0], a = n2[1], o = n2[2];
      var s = getHostListenerTarget(e, r2);
      var i = hostListenerProxy(t, o);
      var l = hostListenerOpts(r2);
      plt.ael(s, a, i, l);
      (t.$rmListeners$ = t.$rmListeners$ || []).push(function() {
        return plt.rel(s, a, i, l);
      });
    });
  }
};
var hostListenerProxy = function(e, t) {
  return function(n) {
    try {
      {
        if (e.$flags$ & 256) {
          e.$lazyInstance$[t](n);
        } else {
          (e.$queuedListeners$ = e.$queuedListeners$ || []).push([t, n]);
        }
      }
    } catch (e2) {
      consoleError(e2);
    }
  };
};
var getHostListenerTarget = function(e, t) {
  if (t & 4)
    return doc;
  if (t & 8)
    return win2;
  if (t & 16)
    return doc.body;
  return e;
};
var hostListenerOpts = function(e) {
  return (e & 2) !== 0;
};
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = function(e) {
  return hostRefs.get(e);
};
var registerHost = function(e, t) {
  var n = { $flags$: 0, $hostElement$: e, $cmpMeta$: t, $instanceValues$: /* @__PURE__ */ new Map() };
  {
    n.$onInstancePromise$ = new Promise(function(e2) {
      return n.$onInstanceResolve$ = e2;
    });
  }
  {
    n.$onReadyPromise$ = new Promise(function(e2) {
      return n.$onReadyResolve$ = e2;
    });
    e["s-p"] = [];
    e["s-rc"] = [];
  }
  addHostEventListeners(e, n, t.$listeners$);
  return hostRefs.set(e, n);
};
var isMemberInElement = function(e, t) {
  return t in e;
};
var consoleError = function(e, t) {
  return (0, console.error)(e, t);
};
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = function(e, t, n) {
  var r = e.$tagName$.replace(/-/g, "_");
  var a = e.$lazyBundleId$;
  var o = cmpModules.get(a);
  if (o) {
    return o[r];
  }
  return import("./".concat(a, ".entry.js").concat("")).then(function(e2) {
    {
      cmpModules.set(a, e2);
    }
    return e2[r];
  }, consoleError);
};
var styles = /* @__PURE__ */ new Map();
var modeResolutionChain = [];
var win2 = typeof window !== "undefined" ? window : {};
var doc = win2.document || { head: {} };
var plt = { $flags$: 0, $resourcesUrl$: "", jmp: function(e) {
  return e();
}, raf: function(e) {
  return requestAnimationFrame(e);
}, ael: function(e, t, n, r) {
  return e.addEventListener(t, n, r);
}, rel: function(e, t, n, r) {
  return e.removeEventListener(t, n, r);
}, ce: function(e, t) {
  return new CustomEvent(e, t);
} };
var setPlatformHelpers = function(e) {
  Object.assign(plt, e);
};
var supportsShadow = true;
var promiseResolve = function(e) {
  return Promise.resolve(e);
};
var supportsConstructableStylesheets = function() {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
}();
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = function(e, t) {
  return function(n) {
    e.push(n);
    if (!queuePending) {
      queuePending = true;
      if (t && plt.$flags$ & 4) {
        nextTick(flush);
      } else {
        plt.raf(flush);
      }
    }
  };
};
var consume = function(e) {
  for (var t = 0; t < e.length; t++) {
    try {
      e[t](performance.now());
    } catch (e2) {
      consoleError(e2);
    }
  }
  e.length = 0;
};
var flush = function() {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = function(e) {
  return promiseResolve().then(e);
};
var readTask = queueTask(queueDomReads, false);
var writeTask = queueTask(queueDomWrites, true);

// node_modules/@ionic/core/dist/esm-es5/index-6391de89.js
var LIFECYCLE_WILL_ENTER = "ionViewWillEnter";
var LIFECYCLE_DID_ENTER = "ionViewDidEnter";
var LIFECYCLE_WILL_LEAVE = "ionViewWillLeave";
var LIFECYCLE_DID_LEAVE = "ionViewDidLeave";
var LIFECYCLE_WILL_UNLOAD = "ionViewWillUnload";
var getIonPageElement = function(e) {
  if (e.classList.contains("ion-page")) {
    return e;
  }
  var n = e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  if (n) {
    return n;
  }
  return e;
};

export {
  componentOnReady,
  createAnimation,
  setMode,
  getMode,
  bootstrapLazy,
  setPlatformHelpers,
  LIFECYCLE_WILL_ENTER,
  LIFECYCLE_DID_ENTER,
  LIFECYCLE_WILL_LEAVE,
  LIFECYCLE_DID_LEAVE,
  LIFECYCLE_WILL_UNLOAD,
  getIonPageElement
};
/*! Bundled license information:

@ionic/core/dist/esm-es5/index-7a14ecec.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/helpers-3379ba19.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/animation-a1d9e088.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-847f2fde.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-847f2fde.js:
  (*!__STENCIL_STATIC_IMPORT_SWITCH__*)

@ionic/core/dist/esm-es5/index-6391de89.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-G3IO344B.js.map
