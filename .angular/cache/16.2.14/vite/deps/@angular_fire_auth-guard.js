import {
  Router
} from "./chunk-NSLZGZQM.js";
import "./chunk-ZG63X42V.js";
import "./chunk-FLAWVHM3.js";
import {
  Auth,
  user
} from "./chunk-J3I2QWTE.js";
import "./chunk-5K3DFRLU.js";
import {
  VERSION
} from "./chunk-2V7TMKZE.js";
import {
  registerVersion
} from "./chunk-ZIWPEHYS.js";
import {
  Injectable,
  NgModule,
  map,
  of,
  pipe,
  setClassMetadata,
  switchMap,
  take,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-N5GEXGLV.js";
import "./chunk-AOF462FV.js";
import "./chunk-6NVD4HA4.js";

// node_modules/@angular/fire/fesm2015/angular-fire-auth-guard.js
var loggedIn = map((user2) => !!user2);
var AuthGuard = class {
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
    this.canActivate = (next, state) => {
      const authPipeFactory = next.data.authGuardPipe || (() => loggedIn);
      return user(this.auth).pipe(take(1), authPipeFactory(next, state), map((can) => {
        if (typeof can === "boolean") {
          return can;
        } else if (Array.isArray(can)) {
          return this.router.createUrlTree(can);
        } else {
          return this.router.parseUrl(can);
        }
      }));
    };
  }
};
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(ɵɵinject(Router), ɵɵinject(Auth));
};
AuthGuard.ɵprov = ɵɵdefineInjectable({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: "any"
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "any"
    }]
  }], function() {
    return [{
      type: Router
    }, {
      type: Auth
    }];
  }, null);
})();
var canActivate = (pipe2) => ({
  canActivate: [AuthGuard],
  data: {
    authGuardPipe: pipe2
  }
});
var isNotAnonymous = map((user2) => !!user2 && !user2.isAnonymous);
var idTokenResult = switchMap((user2) => user2 ? user2.getIdTokenResult() : of(null));
var emailVerified = map((user2) => !!user2 && user2.emailVerified);
var customClaims = pipe(idTokenResult, map((idTokenResult2) => idTokenResult2 ? idTokenResult2.claims : []));
var hasCustomClaim = (claim) => pipe(customClaims, map((claims) => claims.hasOwnProperty(claim)));
var redirectUnauthorizedTo = (redirect) => pipe(loggedIn, map((loggedIn2) => loggedIn2 || redirect));
var redirectLoggedInTo = (redirect) => pipe(loggedIn, map((loggedIn2) => loggedIn2 && redirect || true));
var AuthGuardModule = class {
  constructor() {
    registerVersion("angularfire", VERSION.full, "auth-guard");
  }
};
AuthGuardModule.ɵfac = function AuthGuardModule_Factory(t) {
  return new (t || AuthGuardModule)();
};
AuthGuardModule.ɵmod = ɵɵdefineNgModule({
  type: AuthGuardModule
});
AuthGuardModule.ɵinj = ɵɵdefineInjector({
  providers: [AuthGuard]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuardModule, [{
    type: NgModule,
    args: [{
      providers: [AuthGuard]
    }]
  }], function() {
    return [];
  }, null);
})();
export {
  AuthGuard,
  AuthGuardModule,
  canActivate,
  customClaims,
  emailVerified,
  hasCustomClaim,
  idTokenResult,
  isNotAnonymous,
  loggedIn,
  redirectLoggedInTo,
  redirectUnauthorizedTo
};
//# sourceMappingURL=@angular_fire_auth-guard.js.map
