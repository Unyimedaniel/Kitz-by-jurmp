import {
  createAnimation,
  getIonPageElement
} from "./chunk-G3IO344B.js";

// node_modules/@ionic/core/dist/esm-es5/md.transition-48b3b77c.js
var mdTransitionAnimation = function(e, n) {
  var a, i, t;
  var o = "40px";
  var r = "0px";
  var m = n.direction === "back";
  var l = n.enteringEl;
  var d = n.leavingEl;
  var s = getIonPageElement(l);
  var c = s.querySelector("ion-toolbar");
  var f = createAnimation();
  f.addElement(s).fill("both").beforeRemoveClass("ion-page-invisible");
  if (m) {
    f.duration(((a = n.duration) !== null && a !== void 0 ? a : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
  } else {
    f.duration(((i = n.duration) !== null && i !== void 0 ? i : 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", "translateY(".concat(o, ")"), "translateY(".concat(r, ")")).fromTo("opacity", 0.01, 1);
  }
  if (c) {
    var v = createAnimation();
    v.addElement(c);
    f.addAnimation(v);
  }
  if (d && m) {
    f.duration(((t = n.duration) !== null && t !== void 0 ? t : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
    var u = createAnimation();
    u.addElement(getIonPageElement(d)).onFinish(function(e2) {
      if (e2 === 1 && u.elements.length > 0) {
        u.elements[0].style.setProperty("display", "none");
      }
    }).fromTo("transform", "translateY(".concat(r, ")"), "translateY(".concat(o, ")")).fromTo("opacity", 1, 0);
    f.addAnimation(u);
  }
  return f;
};

export {
  mdTransitionAnimation
};
/*! Bundled license information:

@ionic/core/dist/esm-es5/md.transition-48b3b77c.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-AT3JXKNR.js.map
