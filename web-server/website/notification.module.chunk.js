webpackJsonp(["notification.module"],{

/***/ "../../../../../src/$$_gendir/notifications/notification.module.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOtificationModuleNgFactory", function() { return NOtificationModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifications_notification_module__ = __webpack_require__("../../../../../src/notifications/notification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_component_ngfactory__ = __webpack_require__("../../../../../src/$$_gendir/notifications/notifications.component.ngfactory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_autocomplete_services_local_data__ = __webpack_require__("../../../../../src/core/autocomplete/services/local-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_autocomplete_services_completer_data_factory__ = __webpack_require__("../../../../../src/core/autocomplete/services/completer-data-factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_autocomplete_services_remote_data__ = __webpack_require__("../../../../../src/core/autocomplete/services/remote-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_autocomplete_services_completer_service__ = __webpack_require__("../../../../../src/core/autocomplete/services/completer-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_components_schedule_schedule_mapper__ = __webpack_require__("../../../../../src/core/components/schedule/schedule.mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_http_wrapper_http_wrapper__ = __webpack_require__("../../../../../src/core/http_wrapper/http-wrapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_globalSubcription_service__ = __webpack_require__("../../../../../src/app/globalSubcription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_modal_plugins_bootstrap__ = __webpack_require__("../../../../angular2-modal/plugins/bootstrap/bundle/angular2-modal-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_loader_loader_service__ = __webpack_require__("../../../../../src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_http_wrapper_create_http_request__ = __webpack_require__("../../../../../src/core/http_wrapper/create-http-request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_mixpanelService_service__ = __webpack_require__("../../../../../src/core/mixpanelService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_http_wrapper_http_userauth_utils_service__ = __webpack_require__("../../../../../src/core/http_wrapper/http-userauth-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_http_wrapper_http_user_utils_service__ = __webpack_require__("../../../../../src/core/http_wrapper/http-user-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_http_wrapper_http_common_utils_service__ = __webpack_require__("../../../../../src/core/http_wrapper/http-common-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__core_service_authgaurd_service__ = __webpack_require__("../../../../../src/core/service/authgaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_service_authgaurdnew_service__ = __webpack_require__("../../../../../src/core/service/authgaurdnew.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__core_service_authgaurdGym_service__ = __webpack_require__("../../../../../src/core/service/authgaurdGym.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__core_service_authgaurdnotfound_service__ = __webpack_require__("../../../../../src/core/service/authgaurdnotfound.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__core_service_authgaurdTrainer_service__ = __webpack_require__("../../../../../src/core/service/authgaurdTrainer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__core_service_authgaurdguestservice__ = __webpack_require__("../../../../../src/core/service/authgaurdguestservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__core_service_authgaurdprimeguest_service__ = __webpack_require__("../../../../../src/core/service/authgaurdprimeguest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__core_service_authgaurdGymUser_service__ = __webpack_require__("../../../../../src/core/service/authgaurdGymUser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__core_service_local_storage_service__ = __webpack_require__("../../../../../src/core/service/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__core_service_storage_service__ = __webpack_require__("../../../../../src/core/service/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__core_service_classauth_guard__ = __webpack_require__("../../../../../src/core/service/classauth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__core_autocomplete_ng2_completer_module__ = __webpack_require__("../../../../../src/core/autocomplete/ng2-completer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__core_clickoutside_click_outside_module__ = __webpack_require__("../../../../../src/core/clickoutside/click-outside.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__core_components_button_button__ = __webpack_require__("../../../../../src/core/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__core_components_calendar_calendar__ = __webpack_require__("../../../../../src/core/components/calendar/calendar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__core_components_galleria_galleria__ = __webpack_require__("../../../../../src/core/components/galleria/galleria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__core_components_schedule_schedule__ = __webpack_require__("../../../../../src/core/components/schedule/schedule.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__core_http_wrapper_http_wrapper_module__ = __webpack_require__("../../../../../src/core/http_wrapper/http-wrapper.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__core_core_module__ = __webpack_require__("../../../../../src/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__notifications_notifications_component__ = __webpack_require__("../../../../../src/notifications/notifications.component.ts");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */










































var NOtificationModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__notifications_notification_module__["a" /* NOtificationModule */], [], function (_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_2__notifications_component_ngfactory__["a" /* NotificationsComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_3__angular_common__["p" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["o" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["D" /* ɵi */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["D" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* BrowserXhr */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_http__["h" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* BaseResponseOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_5__angular_http__["j" /* XSRFStrategy */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["k" /* ɵb */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_http__["i" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["i" /* XHRBackend */], [__WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["h" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["j" /* XSRFStrategy */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_5__angular_http__["g" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* BaseRequestOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["l" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_5__angular_http__["i" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["g" /* RequestOptions */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_6__core_autocomplete_services_local_data__["a" /* LocalData */], __WEBPACK_IMPORTED_MODULE_7__core_autocomplete_services_completer_data_factory__["a" /* localDataFactory */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_8__core_autocomplete_services_remote_data__["a" /* RemoteData */], __WEBPACK_IMPORTED_MODULE_7__core_autocomplete_services_completer_data_factory__["b" /* remoteDataFactory */], [__WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__core_autocomplete_services_completer_service__["a" /* CompleterService */], __WEBPACK_IMPORTED_MODULE_9__core_autocomplete_services_completer_service__["a" /* CompleterService */], [__WEBPACK_IMPORTED_MODULE_6__core_autocomplete_services_local_data__["a" /* LocalData */],
            __WEBPACK_IMPORTED_MODULE_8__core_autocomplete_services_remote_data__["a" /* RemoteData */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_10__core_components_schedule_schedule_mapper__["a" /* ScheduleMapper */], __WEBPACK_IMPORTED_MODULE_10__core_components_schedule_schedule_mapper__["a" /* ScheduleMapper */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_11__core_http_wrapper_http_wrapper__["a" /* HttpWrapper */], __WEBPACK_IMPORTED_MODULE_11__core_http_wrapper_http_wrapper__["a" /* HttpWrapper */], [__WEBPACK_IMPORTED_MODULE_12__app_globalSubcription_service__["a" /* GlobalSubscriptionService */],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */], __WEBPACK_IMPORTED_MODULE_14_angular2_modal_plugins_bootstrap__["h" /* Modal */], __WEBPACK_IMPORTED_MODULE_15__app_loader_loader_service__["a" /* LoaderComponentService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_16__core_http_wrapper_create_http_request__["a" /* HttpRequestWrapper */], __WEBPACK_IMPORTED_MODULE_16__core_http_wrapper_create_http_request__["a" /* HttpRequestWrapper */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_17__core_mixpanelService_service__["a" /* MixpanelService */], __WEBPACK_IMPORTED_MODULE_17__core_mixpanelService_service__["a" /* MixpanelService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__core_http_wrapper_http_userauth_utils_service__["a" /* HttpUserAuthUtilsService */], __WEBPACK_IMPORTED_MODULE_18__core_http_wrapper_http_userauth_utils_service__["a" /* HttpUserAuthUtilsService */], [__WEBPACK_IMPORTED_MODULE_11__core_http_wrapper_http_wrapper__["a" /* HttpWrapper */],
            __WEBPACK_IMPORTED_MODULE_16__core_http_wrapper_create_http_request__["a" /* HttpRequestWrapper */], __WEBPACK_IMPORTED_MODULE_17__core_mixpanelService_service__["a" /* MixpanelService */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_19__core_http_wrapper_http_user_utils_service__["a" /* HttpUserUtilsService */], __WEBPACK_IMPORTED_MODULE_19__core_http_wrapper_http_user_utils_service__["a" /* HttpUserUtilsService */], [__WEBPACK_IMPORTED_MODULE_11__core_http_wrapper_http_wrapper__["a" /* HttpWrapper */], __WEBPACK_IMPORTED_MODULE_16__core_http_wrapper_create_http_request__["a" /* HttpRequestWrapper */], __WEBPACK_IMPORTED_MODULE_18__core_http_wrapper_http_userauth_utils_service__["a" /* HttpUserAuthUtilsService */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_20__core_http_wrapper_http_common_utils_service__["a" /* HttpCommonUtilsService */], __WEBPACK_IMPORTED_MODULE_20__core_http_wrapper_http_common_utils_service__["a" /* HttpCommonUtilsService */], [__WEBPACK_IMPORTED_MODULE_11__core_http_wrapper_http_wrapper__["a" /* HttpWrapper */],
            __WEBPACK_IMPORTED_MODULE_16__core_http_wrapper_create_http_request__["a" /* HttpRequestWrapper */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_21__core_service_authgaurd_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_21__core_service_authgaurd_service__["a" /* AuthGuardService */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */], __WEBPACK_IMPORTED_MODULE_14_angular2_modal_plugins_bootstrap__["h" /* Modal */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_22__core_service_authgaurdnew_service__["a" /* AuthGuardServiceNew */], __WEBPACK_IMPORTED_MODULE_22__core_service_authgaurdnew_service__["a" /* AuthGuardServiceNew */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_23__core_service_authgaurdGym_service__["a" /* AuthGuardGymService */], __WEBPACK_IMPORTED_MODULE_23__core_service_authgaurdGym_service__["a" /* AuthGuardGymService */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */], __WEBPACK_IMPORTED_MODULE_14_angular2_modal_plugins_bootstrap__["h" /* Modal */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_24__core_service_authgaurdnotfound_service__["a" /* AuthGuardNotFoundService */], __WEBPACK_IMPORTED_MODULE_24__core_service_authgaurdnotfound_service__["a" /* AuthGuardNotFoundService */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_25__core_service_authgaurdTrainer_service__["a" /* AuthGuardTrainerService */], __WEBPACK_IMPORTED_MODULE_25__core_service_authgaurdTrainer_service__["a" /* AuthGuardTrainerService */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */], __WEBPACK_IMPORTED_MODULE_14_angular2_modal_plugins_bootstrap__["h" /* Modal */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_26__core_service_authgaurdguestservice__["a" /* AuthGuardGuestService */], __WEBPACK_IMPORTED_MODULE_26__core_service_authgaurdguestservice__["a" /* AuthGuardGuestService */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_27__core_service_authgaurdprimeguest_service__["a" /* AuthGuardPrimeGuestService */], __WEBPACK_IMPORTED_MODULE_27__core_service_authgaurdprimeguest_service__["a" /* AuthGuardPrimeGuestService */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_28__core_service_authgaurdGymUser_service__["a" /* AuthGuardGymUserService */], __WEBPACK_IMPORTED_MODULE_28__core_service_authgaurdGymUser_service__["a" /* AuthGuardGymUserService */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_29__core_service_local_storage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_29__core_service_local_storage_service__["a" /* LocalStorageService */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_30__core_service_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_30__core_service_storage_service__["a" /* StorageService */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_31__core_service_classauth_guard__["a" /* ClassAuthGuard */], __WEBPACK_IMPORTED_MODULE_31__core_service_classauth_guard__["a" /* ClassAuthGuard */], [__WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */], __WEBPACK_IMPORTED_MODULE_14_angular2_modal_plugins_bootstrap__["h" /* Modal */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_13__angular_router__["r" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_13__angular_router__["r" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_13__angular_router__["w" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_13__angular_router__["o" /* Router */]]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_32_ngx_infinite_scroll__["b" /* InfiniteScrollModule */], __WEBPACK_IMPORTED_MODULE_32_ngx_infinite_scroll__["b" /* InfiniteScrollModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["A" /* ɵba */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["A" /* ɵba */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["m" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_5__angular_http__["f" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["f" /* HttpModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_33__core_autocomplete_ng2_completer_module__["a" /* Ng2CompleterModule */], __WEBPACK_IMPORTED_MODULE_33__core_autocomplete_ng2_completer_module__["a" /* Ng2CompleterModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_34__core_clickoutside_click_outside_module__["a" /* ClickOutsideModule */], __WEBPACK_IMPORTED_MODULE_34__core_clickoutside_click_outside_module__["a" /* ClickOutsideModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_35__core_components_button_button__["b" /* ButtonModule */], __WEBPACK_IMPORTED_MODULE_35__core_components_button_button__["b" /* ButtonModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_36__core_components_calendar_calendar__["a" /* CalendarModule */], __WEBPACK_IMPORTED_MODULE_36__core_components_calendar_calendar__["a" /* CalendarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_37__core_components_galleria_galleria__["b" /* GalleriaModule */], __WEBPACK_IMPORTED_MODULE_37__core_components_galleria_galleria__["b" /* GalleriaModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_38__core_components_schedule_schedule__["b" /* ScheduleModule */], __WEBPACK_IMPORTED_MODULE_38__core_components_schedule_schedule__["b" /* ScheduleModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_39__core_http_wrapper_http_wrapper_module__["a" /* HttpWrapperModule */], __WEBPACK_IMPORTED_MODULE_39__core_http_wrapper_http_wrapper_module__["a" /* HttpWrapperModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_40__core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_40__core_core_module__["a" /* CoreModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__notifications_notification_module__["a" /* NOtificationModule */], __WEBPACK_IMPORTED_MODULE_1__notifications_notification_module__["a" /* NOtificationModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_13__angular_router__["m" /* ROUTES */], function () {
            return [[{ path: '', component: __WEBPACK_IMPORTED_MODULE_41__notifications_notifications_component__["a" /* NotificationsComponent */] }]];
        }, [])]);
});
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvZGVwbG95bWVudC9wNW0td2ViL2J1cm4vcHJvZml2ZS13ZWIvc3JjL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9uLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL2RlcGxveW1lbnQvcDVtLXdlYi9idXJuL3Byb2ZpdmUtd2ViL3NyYy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
//# sourceMappingURL=notification.module.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/notifications/notifications.component.css.shim.ngstyle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = ['.right_navigation[_ngcontent-%COMP%] {\n    position: relative;\n    background-color: #fff;\n    border-radius: 0px;\n    display: block;\n    overflow: hidden;\n    max-width: 100%;\n    max-height: 100%;\n    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.20);\n    margin-bottom: 20px;\n}\n\n.right_navigation[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\n    border-radius: 0px;\n    padding-bottom: 0px;\n    background-color: #fff;\n    color: #262626;\n    font-weight: 400;\n    font-size: 16px;\n}\n\n.right_navigation[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #262626;\n    border-left: 2px solid transparent;\n    border-bottom: 1px solid #ededef;\n    border-radius: 0px;\n}\n\n.right_navigation[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] {\n    border-radius: 0px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    background-color: #e8edf3;\n}\n\n.right_navigation[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .right_navigation[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .right_navigation[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus {\n    background-color: transparent;\n    color: #262626;\n    border-radius: 0px;\n}\n\n.right_navigation[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\n    border-left: 2px solid #3d85ea;\n    background-color: #e8edf3;\n}\n\n.right_navigation[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .right_navigation[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus {\n    border-left: 2px solid #3d85ea;\n    background-color: #e8edf3;\n    border-radius: 0px;\n}\n\n.nav-stacked[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    margin-left: 0;\n}\n\n.notification_box[_ngcontent-%COMP%] {\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);\n    background-color: #fff;\n    padding: 0px;\n    margin-top: 0px;\n    margin-bottom: 20px;\n    font-weight: 400;\n    width: 100%;\n    display: block;\n}\n\n\n\n\n.notifications[_ngcontent-%COMP%] {\n    background-color: #fff;\n    margin: 0px auto;\n    \n    padding: 10px 0;\n    border-bottom: 1px solid #d8d8d8;\n    margin-top: 0px;\n    width: 96%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    min-height: 90px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.notification_avtar_block[_ngcontent-%COMP%] {\n    position: relative;\n    width: 45px;\n    height: 45px;\n    float: left;\n}\n\n.notification_avtar_img[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n    \n}\n\n.notifypost_icon[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: -5px;\n    right: -5px;\n    border-radius: 50%;\n}\n\n.notification_post_nameblock[_ngcontent-%COMP%] {\n    float: left;\n    margin-left: 10px;\n    word-wrap: break-word;\n}\n\n.notification_userimg[_ngcontent-%COMP%] {\n    float: right;\n    width: 45px;\n    height: 45px;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #ccc;\n}\n\n.notification_userimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n}\n\n.hd[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 14px;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: normal;\n    margin-top: 0;\n    max-height: 2.5em;\n    line-height: 1.4;\n    -webkit-line-clamp: 2;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n}\n\n\n\n\n.time_text[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 5px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1;\n    color: #c7cfd4;\n    width: 100%;\n}\n\n.noti_username[_ngcontent-%COMP%], .noti_stdname[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 1;\n    color: rgba(38, 38, 38, 1);\n}\n\n.noti_desc[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1;\n    color: rgba(38, 38, 38, 1);\n}\n\n.notification[_ngcontent-%COMP%] {\n    background-image: url(/assets/images/notification.svg);\n    width: 22px;\n    height: 22px;\n    background-size: 22px 22px;\n    background-position: center center;\n    background-repeat: no-repeat;\n    display: block;\n    margin-top: 2px;\n}\n\n.noti_num[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background-color: #fff;\n    color: #82848b;\n    border: 1px solid;\n    font-size: 11px;\n    line-height: 1;\n    text-align: center;\n    font-weight: 400;\n    padding-top: 4px;\n    display: inline-block;\n    position: relative;\n    right: -8px;\n    top: -7px;\n}\n\n.cursor[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 768px) {\n    .notification_box[_ngcontent-%COMP%] {\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26);\n        background-color: #fff;\n        padding: 0px;\n        margin-top: 0px;\n        margin-bottom: 20px;\n        font-weight: 400;\n        width: 100%;\n        display: block;\n        margin-top: 75px;\n    }\n}'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvZGVwbG95bWVudC9wNW0td2ViL2J1cm4vcHJvZml2ZS13ZWIvc3JjL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvZGVwbG95bWVudC9wNW0td2ViL2J1cm4vcHJvZml2ZS13ZWIvc3JjL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OzsifQ==
//# sourceMappingURL=notifications.component.css.shim.ngstyle.js.map

/***/ }),

/***/ "../../../../../src/$$_gendir/notifications/notifications.component.ngfactory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_NotificationsComponent */
/* unused harmony export View_NotificationsComponent_0 */
/* unused harmony export View_NotificationsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_component_css_shim_ngstyle__ = __webpack_require__("../../../../../src/$$_gendir/notifications/notifications.component.css.shim.ngstyle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__ = __webpack_require__("../../../../../src/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_http_wrapper_http_userauth_utils_service__ = __webpack_require__("../../../../../src/core/http_wrapper/http-userauth-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications_service__ = __webpack_require__("../../../../../src/notifications/notifications.service.ts");
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */







var styles_NotificationsComponent = [__WEBPACK_IMPORTED_MODULE_0__notifications_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_NotificationsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 0,
    styles: styles_NotificationsComponent, data: {} });
function View_NotificationsComponent_3(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 0, 'img', [['alt',
                '']], [[8, 'src', 4]], null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.imgIcon;
        _ck(_v, 0, 0, currVal_0);
    });
}
function View_NotificationsComponent_4(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 6, 'div', [['class',
                'notification_userimg']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 3, 'a', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 0, 'img', [['alt', '']], [[8, 'src', 4]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                ']))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.url;
        _ck(_v, 4, 0, currVal_0);
    });
}
function View_NotificationsComponent_2(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 33, 'div', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onNotificationClick(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 278528, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["k" /* NgClass */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["KeyValueDiffers"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"]], { ngClass: [0,
                'ngClass'] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpod"](2, { 'notifications': 0, 'cursor': 1 }), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 12, 'figure', [['class', 'notification_avtar_block']], null, null, null, null, null)), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                    '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 9, 'a', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 0, 'img', [['alt', ''], ['class', 'notification_avtar_img']], [[8, 'src',
                4]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 0, null, null, 4, 'div', [['class', 'notifypost_icon']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NotificationsComponent_3)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](13, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["n" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, 'ngIf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](18, 0, null, null, 11, 'div', [['class', 'notification_post_nameblock']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](20, 0, null, null, 3, 'h4', [['class', 'hd']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](22, 0, null, null, 0, 'span', [['class', 'noti_desc']], [[8, 'innerHTML',
                1]], null, null, null, null)), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                    '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                    '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](25, 0, null, null, 3, 'p', [['class', 'time_text']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](26, null, ['', ', ', ''])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](27, 2), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵppd"](28, 1), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NotificationsComponent_4)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](32, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["n" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, 'ngIf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                            ']))], function (_ck, _v) {
        var currVal_0 = _ck(_v, 2, 0, true, ((_v.context.$implicit.showCursor != undefined) && _v.context.$implicit.showCursor));
        _ck(_v, 1, 0, currVal_0);
        var currVal_2 = _v.context.$implicit.imgIcon;
        _ck(_v, 13, 0, currVal_2);
        var currVal_6 = _v.context.$implicit.url;
        _ck(_v, 32, 0, currVal_6);
    }, function (_ck, _v) {
        var currVal_1 = ((_v.context.$implicit.userWhoFiredEvent.profileImageThumbnail != null) ? _v.context.$implicit.userWhoFiredEvent.profileImageThumbnail : 'assets/images/40X40.jpg');
        _ck(_v, 8, 0, currVal_1);
        var currVal_3 = _v.context.$implicit.message.activityMsg;
        _ck(_v, 22, 0, currVal_3);
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 26, 0, _ck(_v, 27, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.createdAt, 'shortTime'));
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 26, 1, _ck(_v, 28, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.createdAt));
        _ck(_v, 26, 0, currVal_4, currVal_5);
    });
}
function View_NotificationsComponent_1(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 8, 'div', [['class',
                ' notification_box']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 5, 'div', [['class', 'media p_0'],
            ['data-infinite-scroll', '']], null, [[null, 'scrolled'], [null,
                'scrolledUp']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('scrolled' === en)) {
                var pd_0 = (_co.onScrollDown('all') !== false);
                ad = (pd_0 && ad);
            }
            if (('scrolledUp' === en)) {
                var pd_1 = (_co.onScroll() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 4866048, null, 0, __WEBPACK_IMPORTED_MODULE_3_ngx_infinite_scroll__["a" /* InfiniteScrollDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]], { infiniteScrollDistance: [0, 'infiniteScrollDistance'],
            infiniteScrollUpDistance: [1, 'infiniteScrollUpDistance'], infiniteScrollThrottle: [2,
                'infiniteScrollThrottle'] }, { scrolled: 'scrolled', scrolledUp: 'scrolledUp' }),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NotificationsComponent_2)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](6, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["m" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["IterableDiffers"]], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n\n                    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.scrollDistance;
        var currVal_1 = _co.scrollUpDistance;
        var currVal_2 = _co.throttle;
        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);
        var currVal_3 = _co.notifications;
        _ck(_v, 6, 0, currVal_3);
    }, null);
}
function View_NotificationsComponent_6(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, 'div', [['class',
                'text-center no_record']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['Loading please wait ...']))], null, null);
}
function View_NotificationsComponent_8(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, 'p', [['class',
                'noRecordsCtn no_record_msg']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['You don\'t have any notifications yet.\n                            ']))], null, null);
}
function View_NotificationsComponent_7(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 13, 'div', [['class',
                'text-center']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 0, 'br', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                            '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](6, 0, null, null, 3, 'figure', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                                '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](8, 0, null, null, 0, 'img', [['class', 'img-responsive center-block']], [[8, 'src', 4]], [[null, 'load']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('load' === en)) {
                var pd_0 = ((_co.isLoaded = true) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                            '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                            '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NotificationsComponent_8)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["n" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, 'ngIf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.isLoaded;
        _ck(_v, 12, 0, currVal_1);
    }, function (_ck, _v) {
        var currVal_0 = 'assets/images/notification_fullscreen_stud.png';
        _ck(_v, 8, 0, currVal_0);
    });
}
function View_NotificationsComponent_5(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 7, 'div', [['class',
                'no_shadow_bg']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NotificationsComponent_6)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](3, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["n" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, 'ngIf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                        '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NotificationsComponent_7)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](6, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["n" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, 'ngIf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.notificationListLoading;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = !_co.notificationListLoading;
        _ck(_v, 6, 0, currVal_1);
    }, null);
}
function View_NotificationsComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 20, 'section', [['class', 'container']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 17, 'div', [['class',
                'row marginT_20']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](5, 0, null, null, 14, 'div', [['class', 'col-lg-12']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](7, 0, null, null, 11, 'div', [['class', 'tab-content']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](9, 0, null, null, 8, 'div', [['class', 'tab-pane fade in active'],
            ['id', 'all'], ['style', 'min-height: 300px;']], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NotificationsComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](12, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["n" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n                    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 1, null, View_NotificationsComponent_5)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](16, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["n" /* NgIf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0,
                'ngIf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n\n\n                '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n            '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.notifications.length > 0);
        _ck(_v, 12, 0, currVal_0);
        var currVal_1 = (_co.notifications.length == 0);
        _ck(_v, 16, 0, currVal_1);
    }, null);
}
function View_NotificationsComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, 'app-notifications', [], null, null, null, View_NotificationsComponent_0, RenderType_NotificationsComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__["a" /* NotificationsComponent */], [__WEBPACK_IMPORTED_MODULE_5__core_http_wrapper_http_userauth_utils_service__["a" /* HttpUserAuthUtilsService */], __WEBPACK_IMPORTED_MODULE_6__notifications_notifications_service__["a" /* NotificationsService */]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
var NotificationsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]('app-notifications', __WEBPACK_IMPORTED_MODULE_4__notifications_notifications_component__["a" /* NotificationsComponent */], View_NotificationsComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvZGVwbG95bWVudC9wNW0td2ViL2J1cm4vcHJvZml2ZS13ZWIvc3JjL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9kZXBsb3ltZW50L3A1bS13ZWIvYnVybi9wcm9maXZlLXdlYi9zcmMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvZGVwbG95bWVudC9wNW0td2ViL2J1cm4vcHJvZml2ZS13ZWIvc3JjL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvZGVwbG95bWVudC9wNW0td2ViL2J1cm4vcHJvZml2ZS13ZWIvc3JjL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQudHMuTm90aWZpY2F0aW9uc0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxzZWN0aW9uIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBtYXJnaW5UXzIwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhbGxcIiBjbGFzcz1cInRhYi1wYW5lIGZhZGUgaW4gYWN0aXZlXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiAzMDBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBub3RpZmljYXRpb25fYm94XCIgKm5nSWY9XCJub3RpZmljYXRpb25zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYSBwXzBcIiBkYXRhLWluZmluaXRlLXNjcm9sbCBbaW5maW5pdGVTY3JvbGxEaXN0YW5jZV09XCJzY3JvbGxEaXN0YW5jZVwiIFtpbmZpbml0ZVNjcm9sbFVwRGlzdGFuY2VdPVwic2Nyb2xsVXBEaXN0YW5jZVwiIFtpbmZpbml0ZVNjcm9sbFRocm90dGxlXT1cInRocm90dGxlXCIgKHNjcm9sbGVkKT1cIm9uU2Nyb2xsRG93bignYWxsJylcIiAoc2Nyb2xsZWRVcCk9XCJvblNjcm9sbCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgbm90aWZpY2F0aW9uIG9mIG5vdGlmaWNhdGlvbnNcIiBbbmdDbGFzc109XCJ7J25vdGlmaWNhdGlvbnMnOnRydWUsJ2N1cnNvcic6bm90aWZpY2F0aW9uLnNob3dDdXJzb3IgIT0gdW5kZWZpbmVkICYmIG5vdGlmaWNhdGlvbi5zaG93Q3Vyc29yfVwiIChjbGljayk9XCJvbk5vdGlmaWNhdGlvbkNsaWNrKG5vdGlmaWNhdGlvbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cIm5vdGlmaWNhdGlvbl9hdnRhcl9ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cIm5vdGlmaWNhdGlvbi51c2VyV2hvRmlyZWRFdmVudC5wcm9maWxlSW1hZ2VUaHVtYm5haWwgIT0gbnVsbD9ub3RpZmljYXRpb24udXNlcldob0ZpcmVkRXZlbnQucHJvZmlsZUltYWdlVGh1bWJuYWlsOidhc3NldHMvaW1hZ2VzLzQwWDQwLmpwZydcIiBjbGFzcz1cIm5vdGlmaWNhdGlvbl9hdnRhcl9pbWdcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWZ5cG9zdF9pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJub3RpZmljYXRpb24uaW1nSWNvblwiIFtzcmNdPVwiIG5vdGlmaWNhdGlvbi5pbWdJY29uIFwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbl9wb3N0X25hbWVibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiaGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vdGlfZGVzY1wiIFtpbm5lckhUTUxdPVwibm90aWZpY2F0aW9uLm1lc3NhZ2UuYWN0aXZpdHlNc2dcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aW1lX3RleHRcIj57e25vdGlmaWNhdGlvbi5jcmVhdGVkQXQgfCBkYXRlOidzaG9ydFRpbWUnfX0sIHt7bm90aWZpY2F0aW9uLmNyZWF0ZWRBdCB8IGRhdGV9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25fdXNlcmltZ1wiICpuZ0lmPVwibm90aWZpY2F0aW9uLnVybFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cIm5vdGlmaWNhdGlvbi51cmxcIiBhbHQ9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBkaXNwYWx5IHdoZW4gbm8gbm90aWZpY2F0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9fc2hhZG93X2JnXCIgKm5nSWY9XCJub3RpZmljYXRpb25zLmxlbmd0aD09MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG5vX3JlY29yZFwiICpuZ0lmPVwibm90aWZpY2F0aW9uTGlzdExvYWRpbmdcIj5Mb2FkaW5nIHBsZWFzZSB3YWl0IC4uLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCIgKm5nSWY9XCIhbm90aWZpY2F0aW9uTGlzdExvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgY2VudGVyLWJsb2NrXCIgW3NyY109XCInYXNzZXRzL2ltYWdlcy9ub3RpZmljYXRpb25fZnVsbHNjcmVlbl9zdHVkLnBuZydcIiAobG9hZCk9XCJpc0xvYWRlZCA9IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImlzTG9hZGVkXCIgY2xhc3M9XCJub1JlY29yZHNDdG4gbm9fcmVjb3JkX21zZ1wiPllvdSBkb24ndCBoYXZlIGFueSBub3RpZmljYXRpb25zIHlldC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9zZWN0aW9uPiIsIjxhcHAtbm90aWZpY2F0aW9ucz48L2FwcC1ub3RpZmljYXRpb25zPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDWTRDO01BQUE7O1FBQWtDO1FBQWxDLFdBQWtDLFNBQWxDOzs7O29CQVVaO01BQUE7TUFBQSxnQkFBMkQ7TUFDdkQ7VUFBQSwwREFBRztVQUFBLCtEQUNDO1VBQUE7VUFBQSw0Q0FBcUM7VUFBQSw2Q0FDckM7VUFBQTtJQURLO0lBQUwsV0FBSyxTQUFMOzs7O29CQWpCWjtNQUFBO1FBQUE7UUFBQTtRQUE0SjtVQUFBO1VBQUE7UUFBQTtRQUE1SjtNQUFBLHVDQUFBO01BQUE7VUFBQSxrQ0FBZ0QsbUNBQXdKO2FBQUEsMkRBQ3BNO01BQUE7TUFBQSx3RUFBeUM7YUFBQSwrREFDckM7YUFBQTtVQUFBLDRDQUFHO01BQUEsaURBQ0M7TUFBQTtVQUFBLDhEQUErTDtNQUFBLCtEQUMvTDtNQUFBO01BQUEsMERBQTZCO01BQUEsbUVBQ3pCO01BQUE7YUFBQTtVQUFBLGlDQUF3RTtNQUN0RTtNQUNOLDBFQUNDO2lCQUFBLDJEQUNUO2lCQUFBO2NBQUE7TUFBeUM7TUFDckM7VUFBQSwwREFBZTtVQUFBLCtEQUNYO1VBQUE7Y0FBQSw4REFBOEU7aUJBQUEsK0RBQzdFO2lCQUFBLCtEQUNMO2lCQUFBO2NBQUEsMERBQXFCO1VBQUEseURBQW9GO1VBQUEsdURBQ3ZHO1VBQUEsdURBQ047VUFBQTthQUFBO1VBQUEsaUNBSU07O1FBbkJzQztRQUFoRCxXQUFnRCxTQUFoRDtRQUtxQjtRQUFMLFlBQUssU0FBTDtRQVVzQjtRQUFsQyxZQUFrQyxTQUFsQzs7UUFaYTtRQUFMLFdBQUssU0FBTDtRQVF3QjtRQUF4QixZQUF3QixTQUF4QjtRQUVpQjtZQUFBO1FBQUE7WUFBQTtRQUFBOzs7O29CQWZyQztNQUFBO01BQUEsZ0JBQWdFO01BQzVEO1VBQUE7VUFBQTtRQUFBO1FBQUE7UUFBd0s7VUFBQTtVQUFBO1FBQUE7UUFBaUM7VUFBQTtVQUFBO1FBQUE7UUFBek07TUFBQSx1Q0FBQTtVQUFBO2NBQUE7a0JBQUE7TUFBbU8sc0VBQy9OO2lCQUFBO2FBQUE7NEJBQUEseUNBb0JNO1VBQUEsK0NBQ0o7VUFBQTs7SUF0QnNDO0lBQTBDO0lBQThDO0lBQXBJLFdBQTRDLFVBQTBDLFVBQThDLFNBQXBJO0lBQ1M7SUFBTCxXQUFLLFNBQUw7Ozs7b0JBMEJKO01BQUE7TUFBQSxnQkFBbUU7Ozs7b0JBTS9EO01BQUE7TUFBQSxnQkFBdUQ7Ozs7b0JBTDNEO01BQUE7TUFBMEQsc0VBQ3REO2lCQUFBO2NBQUEsMERBQUk7VUFBQTtVQUFBLDRDQUFJO1VBQUE7VUFBQSw4QkFBSTtNQUNaO1VBQUEsMERBQVE7VUFBQSx1REFDSjtVQUFBO1VBQUE7WUFBQTtZQUFBO1lBQWtHO2NBQUE7Y0FBQTtZQUFBO1lBQWxHO1VBQUEsZ0NBQTJIO01BQ3RILHNFQUNUO2lCQUFBO2FBQUE7VUFBQSxpQ0FDSTs7O1FBREQ7UUFBSCxZQUFHLFNBQUg7O1FBRjZDO1FBQXpDLFdBQXlDLFNBQXpDOzs7O29CQUxaO01BQUE7TUFBMEQsa0VBQ3REO1VBQUE7YUFBQTtVQUFBLGlDQUFnRztNQUNoRzthQUFBO1VBQUEsaUNBT007OztRQVI2QjtRQUFuQyxXQUFtQyxTQUFuQztRQUN5QjtRQUF6QixXQUF5QixTQUF6Qjs7OzswREFsQ3hCO01BQUE7TUFBQSw0Q0FBMkI7TUFBQSxhQUN2QjtNQUFBO01BQTRCLGtEQUN4QjtVQUFBO1VBQUEsNENBQXVCO1VBQUEscUJBQ25CO1VBQUE7VUFBQSw4QkFBeUI7TUFDckI7VUFBQTtVQUFBLDRDQUF5RTtVQUFBLDZCQUNyRTtVQUFBLHVEQUFBO1VBQUE7TUF5Qk0sOERBQytCO1VBQUEsMkNBQ3JDO1VBQUEscUVBQUE7VUFBQTtjQUFBLHdCQVVNO01BR0osc0RBQ0o7VUFBQSxpQkFDSiw4Q0FDSjtVQUFBOztJQTNDeUM7SUFBL0IsWUFBK0IsU0FBL0I7SUEyQjBCO0lBQTFCLFlBQTBCLFNBQTFCOzs7O29CQ2hDcEI7TUFBQTt1Q0FBQSxVQUFBO01BQUE7O1FBQUE7Ozs7In0=
//# sourceMappingURL=notifications.component.ngfactory.js.map

/***/ }),

/***/ "../../../../../src/notifications/notification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NOtificationModule; });
var NOtificationModule = (function () {
    function NOtificationModule() {
    }
    return NOtificationModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ "../../../../../src/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_constants__ = __webpack_require__("../../../../../src/core/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_service_local_storage_service__ = __webpack_require__("../../../../../src/core/service/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_http_wrapper_http_userauth_utils_service__ = __webpack_require__("../../../../../src/core/http_wrapper/http-userauth-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_constants__ = __webpack_require__("../../../../../src/core/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_service__ = __webpack_require__("../../../../../src/notifications/notifications.service.ts");





var NotificationsComponent = (function () {
    function NotificationsComponent(http_user, _notificationService) {
        this.http_user = http_user;
        this._notificationService = _notificationService;
        this.notifications = [];
        this.cancelledNotifications = [];
        this.addedNotifications = [];
        this.favoriteNotifications = [];
        this.page = -1;
        this.loadMoreData = true;
        this.isLoaded = false;
        this.notificationListLoading = false;
        this.throttle = __WEBPACK_IMPORTED_MODULE_0__core_constants__["b" /* InfiniteScroll */].throttle;
        this.scrollDistance = __WEBPACK_IMPORTED_MODULE_0__core_constants__["b" /* InfiniteScroll */].scrollDistance;
        this.scrollUpDistance = __WEBPACK_IMPORTED_MODULE_0__core_constants__["b" /* InfiniteScroll */].scrollUpDistance;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__core_service_local_storage_service__["a" /* LocalStorageService */].getIsLoggedIn() && __WEBPACK_IMPORTED_MODULE_1__core_service_local_storage_service__["a" /* LocalStorageService */].getUserId() !== 0) {
            this.notificationListLoading = true;
            this.http_user.getNotifications(this, ++this.page, __WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* Constants */].pageSize);
        }
    };
    NotificationsComponent.prototype.onScrollDown = function (type) {
        if (this.loadMoreData && !this.notificationListLoading) {
            this.http_user.getNotifications(this, ++this.page, __WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* Constants */].pageSize);
        }
    };
    NotificationsComponent.prototype.onScroll = function () {
    };
    NotificationsComponent.prototype.onSuccess = function (type, responseData) {
        if (type == __WEBPACK_IMPORTED_MODULE_3__core_constants__["a" /* Constants */].getNotificationsApi) {
            this.notificationListLoading = false;
            if (this.notifications.length == 0) {
                this.notifications = this._notificationService.parseNotifications(responseData.data);
            }
            else {
                this.notifications.push.apply(this.notifications, this._notificationService.parseNotifications(responseData.data));
            }
            if (responseData.data.length === 0) {
                this.loadMoreData = false;
            }
        }
    };
    NotificationsComponent.prototype.onFailure = function (type, error) {
        this.notificationListLoading = false;
        console.error(error);
    };
    NotificationsComponent.prototype.onNotificationClick = function (notification) {
        this._notificationService.handleNotificationClick(notification);
    };
    NotificationsComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_2__core_http_wrapper_http_userauth_utils_service__["a" /* HttpUserAuthUtilsService */] }, { type: __WEBPACK_IMPORTED_MODULE_4__notifications_service__["a" /* NotificationsService */] }]; };
    return NotificationsComponent;
}());

//# sourceMappingURL=notifications.component.js.map

/***/ })

});
//# sourceMappingURL=notification.module.chunk.js.map