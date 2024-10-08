import {
  FirebaseApp,
  FirebaseApps,
  VERSION,
  deleteToken,
  getMessagingInWindow,
  getToken,
  onMessage,
  ɵAngularFireSchedulers,
  ɵgetAllInstancesOf,
  ɵgetDefaultInstanceOf,
  ɵisMessagingSupportedFactory,
  ɵzoneWrap
} from "./chunk-2V7TMKZE.js";
import {
  registerVersion
} from "./chunk-ZIWPEHYS.js";
import {
  APP_INITIALIZER,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Optional,
  concatMap,
  distinct,
  from,
  setClassMetadata,
  timer,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-N5GEXGLV.js";
import "./chunk-AOF462FV.js";
import "./chunk-6NVD4HA4.js";

// node_modules/@angular/fire/fesm2015/angular-fire-messaging.js
var Messaging = class {
  constructor(messaging) {
    return messaging;
  }
};
var MESSAGING_PROVIDER_NAME = "messaging";
var MessagingInstances = class {
  constructor() {
    return ɵgetAllInstancesOf(MESSAGING_PROVIDER_NAME);
  }
};
var messagingInstance$ = timer(0, 300).pipe(concatMap(() => from(ɵgetAllInstancesOf(MESSAGING_PROVIDER_NAME))), distinct());
var PROVIDED_MESSAGING_INSTANCES = new InjectionToken("angularfire2.messaging-instances");
function defaultMessagingInstanceFactory(provided, defaultApp) {
  if (!ɵisMessagingSupportedFactory.sync()) {
    return null;
  }
  const defaultMessaging = ɵgetDefaultInstanceOf(MESSAGING_PROVIDER_NAME, provided, defaultApp);
  return defaultMessaging && new Messaging(defaultMessaging);
}
function messagingInstanceFactory(fn) {
  return (zone, injector) => {
    if (!ɵisMessagingSupportedFactory.sync()) {
      return null;
    }
    const messaging = zone.runOutsideAngular(() => fn(injector));
    return new Messaging(messaging);
  };
}
var MESSAGING_INSTANCES_PROVIDER = {
  provide: MessagingInstances,
  deps: [[new Optional(), PROVIDED_MESSAGING_INSTANCES]]
};
var DEFAULT_MESSAGING_INSTANCE_PROVIDER = {
  provide: Messaging,
  useFactory: defaultMessagingInstanceFactory,
  deps: [[new Optional(), PROVIDED_MESSAGING_INSTANCES], FirebaseApp]
};
var MessagingModule = class {
  constructor() {
    registerVersion("angularfire", VERSION.full, "fcm");
  }
};
MessagingModule.ɵfac = function MessagingModule_Factory(t) {
  return new (t || MessagingModule)();
};
MessagingModule.ɵmod = ɵɵdefineNgModule({
  type: MessagingModule
});
MessagingModule.ɵinj = ɵɵdefineInjector({
  providers: [DEFAULT_MESSAGING_INSTANCE_PROVIDER, MESSAGING_INSTANCES_PROVIDER, {
    provide: APP_INITIALIZER,
    useValue: ɵisMessagingSupportedFactory.async,
    multi: true
  }]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessagingModule, [{
    type: NgModule,
    args: [{
      providers: [DEFAULT_MESSAGING_INSTANCE_PROVIDER, MESSAGING_INSTANCES_PROVIDER, {
        provide: APP_INITIALIZER,
        useValue: ɵisMessagingSupportedFactory.async,
        multi: true
      }]
    }]
  }], function() {
    return [];
  }, null);
})();
function provideMessaging(fn, ...deps) {
  return {
    ngModule: MessagingModule,
    providers: [{
      provide: PROVIDED_MESSAGING_INSTANCES,
      useFactory: messagingInstanceFactory(fn),
      multi: true,
      deps: [NgZone, Injector, ɵAngularFireSchedulers, FirebaseApps, ...deps]
    }]
  };
}
var isSupported = ɵisMessagingSupportedFactory.async;
var deleteToken2 = ɵzoneWrap(deleteToken, true);
var getMessaging = ɵzoneWrap(getMessagingInWindow, true);
var getToken2 = ɵzoneWrap(getToken, true);
var onMessage2 = ɵzoneWrap(onMessage, false);
export {
  Messaging,
  MessagingInstances,
  MessagingModule,
  deleteToken2 as deleteToken,
  getMessaging,
  getToken2 as getToken,
  isSupported,
  messagingInstance$,
  onMessage2 as onMessage,
  provideMessaging
};
//# sourceMappingURL=@angular_fire_messaging.js.map
