import {
  FirebaseApp,
  FirebaseApps,
  VERSION,
  activate,
  ensureInitialized,
  fetchAndActivate,
  fetchConfig,
  getAll,
  getBoolean,
  getNumber,
  getRemoteConfig,
  getString,
  getValue,
  setLogLevel,
  ɵAngularFireSchedulers,
  ɵgetAllInstancesOf,
  ɵgetDefaultInstanceOf,
  ɵisRemoteConfigSupportedFactory,
  ɵzoneWrap
} from "./chunk-KS4R2TJT.js";
import {
  registerVersion
} from "./chunk-ZIWPEHYS.js";
import {
  APP_INITIALIZER,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Observable,
  Optional,
  concatMap,
  distinct,
  from,
  setClassMetadata,
  timer,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-RX4WFQK6.js";
import "./chunk-E2J3BYMH.js";
import "./chunk-6NVD4HA4.js";

// node_modules/rxfire/remote-config/index.esm.js
function parameter$(_a) {
  var remoteConfig = _a.remoteConfig, key = _a.key, getter = _a.getter;
  return new Observable(function(subscriber) {
    ensureInitialized(remoteConfig).then(function() {
      var boundGetter = getter.bind(remoteConfig);
      subscriber.next(boundGetter(remoteConfig, key));
    });
  });
}
function getValue2(remoteConfig, key) {
  var getter = getValue;
  return parameter$({ remoteConfig, key, getter });
}
function getString2(remoteConfig, key) {
  var getter = getString;
  return parameter$({ remoteConfig, key, getter });
}
function getNumber2(remoteConfig, key) {
  var getter = getNumber;
  return parameter$({ remoteConfig, key, getter });
}
function getBoolean2(remoteConfig, key) {
  var getter = getBoolean;
  return parameter$({ remoteConfig, key, getter });
}
function getAll2(remoteConfig) {
  var getter = getAll;
  return parameter$({ remoteConfig, key: "", getter });
}

// node_modules/@angular/fire/fesm2015/angular-fire-remote-config.js
var RemoteConfig = class {
  constructor(remoteConfig) {
    return remoteConfig;
  }
};
var REMOTE_CONFIG_PROVIDER_NAME = "remote-config";
var RemoteConfigInstances = class {
  constructor() {
    return ɵgetAllInstancesOf(REMOTE_CONFIG_PROVIDER_NAME);
  }
};
var remoteConfigInstance$ = timer(0, 300).pipe(concatMap(() => from(ɵgetAllInstancesOf(REMOTE_CONFIG_PROVIDER_NAME))), distinct());
var PROVIDED_REMOTE_CONFIG_INSTANCES = new InjectionToken("angularfire2.remote-config-instances");
function defaultRemoteConfigInstanceFactory(provided, defaultApp) {
  if (!ɵisRemoteConfigSupportedFactory.sync()) {
    return null;
  }
  const defaultRemoteConfig = ɵgetDefaultInstanceOf(REMOTE_CONFIG_PROVIDER_NAME, provided, defaultApp);
  return defaultRemoteConfig && new RemoteConfig(defaultRemoteConfig);
}
function remoteConfigInstanceFactory(fn) {
  return (zone, injector) => {
    if (!ɵisRemoteConfigSupportedFactory.sync()) {
      return null;
    }
    const remoteConfig = zone.runOutsideAngular(() => fn(injector));
    return new RemoteConfig(remoteConfig);
  };
}
var REMOTE_CONFIG_INSTANCES_PROVIDER = {
  provide: RemoteConfigInstances,
  deps: [[new Optional(), PROVIDED_REMOTE_CONFIG_INSTANCES]]
};
var DEFAULT_REMOTE_CONFIG_INSTANCE_PROVIDER = {
  provide: RemoteConfig,
  useFactory: defaultRemoteConfigInstanceFactory,
  deps: [[new Optional(), PROVIDED_REMOTE_CONFIG_INSTANCES], FirebaseApp]
};
var RemoteConfigModule = class {
  constructor() {
    registerVersion("angularfire", VERSION.full, "rc");
  }
};
RemoteConfigModule.ɵfac = function RemoteConfigModule_Factory(t) {
  return new (t || RemoteConfigModule)();
};
RemoteConfigModule.ɵmod = ɵɵdefineNgModule({
  type: RemoteConfigModule
});
RemoteConfigModule.ɵinj = ɵɵdefineInjector({
  providers: [DEFAULT_REMOTE_CONFIG_INSTANCE_PROVIDER, REMOTE_CONFIG_INSTANCES_PROVIDER, {
    provide: APP_INITIALIZER,
    useValue: ɵisRemoteConfigSupportedFactory.async,
    multi: true
  }]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RemoteConfigModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_REMOTE_CONFIG_INSTANCE_PROVIDER, REMOTE_CONFIG_INSTANCES_PROVIDER, {
        provide: APP_INITIALIZER,
        useValue: ɵisRemoteConfigSupportedFactory.async,
        multi: true
      }]
    }]
  }], function() {
    return [];
  }, null);
})();
function provideRemoteConfig(fn, ...deps) {
  return {
    ngModule: RemoteConfigModule,
    providers: [{
      provide: PROVIDED_REMOTE_CONFIG_INSTANCES,
      useFactory: remoteConfigInstanceFactory(fn),
      multi: true,
      deps: [NgZone, Injector, ɵAngularFireSchedulers, FirebaseApps, ...deps]
    }]
  };
}
var getValueChanges = ɵzoneWrap(getValue2, true);
var getStringChanges = ɵzoneWrap(getString2, true);
var getNumberChanges = ɵzoneWrap(getNumber2, true);
var getBooleanChanges = ɵzoneWrap(getBoolean2, true);
var getAllChanges = ɵzoneWrap(getAll2, true);
var isSupported = ɵisRemoteConfigSupportedFactory.async;
var activate2 = ɵzoneWrap(activate, true);
var ensureInitialized2 = ɵzoneWrap(ensureInitialized, true);
var fetchAndActivate2 = ɵzoneWrap(fetchAndActivate, true);
var fetchConfig2 = ɵzoneWrap(fetchConfig, true);
var getAll3 = ɵzoneWrap(getAll, true);
var getBoolean3 = ɵzoneWrap(getBoolean, true);
var getNumber3 = ɵzoneWrap(getNumber, true);
var getRemoteConfig2 = ɵzoneWrap(getRemoteConfig, true);
var getString3 = ɵzoneWrap(getString, true);
var getValue3 = ɵzoneWrap(getValue, true);
var setLogLevel2 = ɵzoneWrap(setLogLevel, true);
export {
  RemoteConfig,
  RemoteConfigInstances,
  RemoteConfigModule,
  activate2 as activate,
  ensureInitialized2 as ensureInitialized,
  fetchAndActivate2 as fetchAndActivate,
  fetchConfig2 as fetchConfig,
  getAll3 as getAll,
  getAllChanges,
  getBoolean3 as getBoolean,
  getBooleanChanges,
  getNumber3 as getNumber,
  getNumberChanges,
  getRemoteConfig2 as getRemoteConfig,
  getString3 as getString,
  getStringChanges,
  getValue3 as getValue,
  getValueChanges,
  isSupported,
  provideRemoteConfig,
  remoteConfigInstance$,
  setLogLevel2 as setLogLevel
};
//# sourceMappingURL=@angular_fire_remote-config.js.map
