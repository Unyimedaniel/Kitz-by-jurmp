import {
  getPerformance,
  initializePerformance,
  trace
} from "./chunk-UNLEQEQE.js";
import {
  isPlatformBrowser
} from "./chunk-5K3DFRLU.js";
import {
  FirebaseApp,
  FirebaseApps,
  VERSION,
  ɵAngularFireSchedulers,
  ɵgetAllInstancesOf,
  ɵgetDefaultInstanceOf,
  ɵzoneWrap
} from "./chunk-2V7TMKZE.js";
import {
  registerVersion
} from "./chunk-ZIWPEHYS.js";
import {
  EMPTY,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Observable,
  Optional,
  PLATFORM_ID,
  concatMap,
  distinct,
  from,
  setClassMetadata,
  tap,
  timer,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-N5GEXGLV.js";
import "./chunk-AOF462FV.js";
import "./chunk-6NVD4HA4.js";

// node_modules/rxfire/performance/index.esm.js
var trace$ = function(traceId) {
  if (typeof window !== "undefined" && window.performance) {
    var entries = window.performance.getEntriesByName(traceId, "measure") || [];
    var startMarkName_1 = "_" + traceId + "Start[" + entries.length + "]";
    var endMarkName_1 = "_" + traceId + "End[" + entries.length + "]";
    return new Observable(function(emitter) {
      window.performance.mark(startMarkName_1);
      emitter.next();
      return {
        unsubscribe: function() {
          window.performance.mark(endMarkName_1);
          window.performance.measure(traceId, startMarkName_1, endMarkName_1);
        }
      };
    });
  } else {
    return EMPTY;
  }
};
var traceUntil = function(name, test, options) {
  return function(source$) {
    return new Observable(function(subscriber) {
      var traceSubscription = trace$(name).subscribe();
      return source$.pipe(tap(function(a) {
        return test(a) && traceSubscription.unsubscribe();
      }, function() {
      }, function() {
        return options && options.orComplete && traceSubscription.unsubscribe();
      })).subscribe(subscriber);
    });
  };
};
var traceWhile = function(name, test, options) {
  return function(source$) {
    return new Observable(function(subscriber) {
      var traceSubscription;
      return source$.pipe(tap(function(a) {
        if (test(a)) {
          traceSubscription = traceSubscription || trace$(name).subscribe();
        } else {
          if (traceSubscription) {
            traceSubscription.unsubscribe();
          }
          traceSubscription = void 0;
        }
      }, function() {
      }, function() {
        return options && options.orComplete && traceSubscription && traceSubscription.unsubscribe();
      })).subscribe(subscriber);
    });
  };
};
var traceUntilComplete = function(name) {
  return function(source$) {
    return new Observable(function(subscriber) {
      var traceSubscription = trace$(name).subscribe();
      return source$.pipe(tap(function() {
      }, function() {
      }, function() {
        return traceSubscription.unsubscribe();
      })).subscribe(subscriber);
    });
  };
};
var traceUntilFirst = function(name) {
  return function(source$) {
    return new Observable(function(subscriber) {
      var traceSubscription = trace$(name).subscribe();
      return source$.pipe(tap(function() {
        return traceSubscription.unsubscribe();
      }, function() {
      }, function() {
      })).subscribe(subscriber);
    });
  };
};

// node_modules/@angular/fire/fesm2015/angular-fire-performance.js
var Performance = class {
  constructor(performance) {
    return performance;
  }
};
var PERFORMANCE_PROVIDER_NAME = "performance";
var PerformanceInstances = class {
  constructor() {
    return ɵgetAllInstancesOf(PERFORMANCE_PROVIDER_NAME);
  }
};
var performanceInstance$ = timer(0, 300).pipe(concatMap(() => from(ɵgetAllInstancesOf(PERFORMANCE_PROVIDER_NAME))), distinct());
var PROVIDED_PERFORMANCE_INSTANCES = new InjectionToken("angularfire2.performance-instances");
function defaultPerformanceInstanceFactory(provided, defaultApp, platform) {
  if (!isPlatformBrowser(platform)) {
    return null;
  }
  const defaultPerformance = ɵgetDefaultInstanceOf(PERFORMANCE_PROVIDER_NAME, provided, defaultApp);
  return defaultPerformance && new Performance(defaultPerformance);
}
function performanceInstanceFactory(fn) {
  return (zone, platform, injector) => {
    if (!isPlatformBrowser(platform)) {
      return null;
    }
    const performance = zone.runOutsideAngular(() => fn(injector));
    return new Performance(performance);
  };
}
var PERFORMANCE_INSTANCES_PROVIDER = {
  provide: PerformanceInstances,
  deps: [[new Optional(), PROVIDED_PERFORMANCE_INSTANCES]]
};
var DEFAULT_PERFORMANCE_INSTANCE_PROVIDER = {
  provide: Performance,
  useFactory: defaultPerformanceInstanceFactory,
  deps: [[new Optional(), PROVIDED_PERFORMANCE_INSTANCES], FirebaseApp, PLATFORM_ID]
};
var PerformanceModule = class {
  constructor() {
    registerVersion("angularfire", VERSION.full, "perf");
  }
};
PerformanceModule.ɵfac = function PerformanceModule_Factory(t) {
  return new (t || PerformanceModule)();
};
PerformanceModule.ɵmod = ɵɵdefineNgModule({
  type: PerformanceModule
});
PerformanceModule.ɵinj = ɵɵdefineInjector({
  providers: [DEFAULT_PERFORMANCE_INSTANCE_PROVIDER, PERFORMANCE_INSTANCES_PROVIDER]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerformanceModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_PERFORMANCE_INSTANCE_PROVIDER, PERFORMANCE_INSTANCES_PROVIDER]
    }]
  }], function() {
    return [];
  }, null);
})();
function providePerformance(fn, ...deps) {
  return {
    ngModule: PerformanceModule,
    providers: [{
      provide: PROVIDED_PERFORMANCE_INSTANCES,
      useFactory: performanceInstanceFactory(fn),
      multi: true,
      deps: [NgZone, PLATFORM_ID, Injector, ɵAngularFireSchedulers, FirebaseApps, ...deps]
    }]
  };
}
var traceUntil2 = ɵzoneWrap(traceUntil, true);
var traceWhile2 = ɵzoneWrap(traceWhile, true);
var traceUntilComplete2 = ɵzoneWrap(traceUntilComplete, true);
var traceUntilFirst2 = ɵzoneWrap(traceUntilFirst, true);
var getPerformance2 = ɵzoneWrap(getPerformance, true);
var initializePerformance2 = ɵzoneWrap(initializePerformance, true);
var trace2 = ɵzoneWrap(trace, true);
export {
  Performance,
  PerformanceInstances,
  PerformanceModule,
  getPerformance2 as getPerformance,
  initializePerformance2 as initializePerformance,
  performanceInstance$,
  providePerformance,
  trace2 as trace,
  traceUntil2 as traceUntil,
  traceUntilComplete2 as traceUntilComplete,
  traceUntilFirst2 as traceUntilFirst,
  traceWhile2 as traceWhile
};
//# sourceMappingURL=@angular_fire_performance.js.map
