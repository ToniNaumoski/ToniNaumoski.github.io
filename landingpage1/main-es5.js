function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/registration/registration.component */
    "./src/app/components/registration/registration.component.ts");
    /* harmony import */


    var _components_activation_activation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/activation/activation.component */
    "./src/app/components/activation/activation.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/account/account.component */
    "./src/app/components/account/account.component.ts");
    /* harmony import */


    var _components_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/announcement/announcement.component */
    "./src/app/components/announcement/announcement.component.ts");
    /* harmony import */


    var _components_cost_cost_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/cost/cost.component */
    "./src/app/components/cost/cost.component.ts");
    /* harmony import */


    var _components_identification_identification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/identification/identification.component */
    "./src/app/components/identification/identification.component.ts");
    /* harmony import */


    var _components_description_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/description/description.component */
    "./src/app/components/description/description.component.ts");
    /* harmony import */


    var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/payment/payment.component */
    "./src/app/components/payment/payment.component.ts");
    /* harmony import */


    var _components_published_published_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/published/published.component */
    "./src/app/components/published/published.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/forgot-password/forgot-password.component */
    "./src/app/components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _components_upgrade_password_upgrade_password_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/upgrade-password/upgrade-password.component */
    "./src/app/components/upgrade-password/upgrade-password.component.ts");
    /* harmony import */


    var _components_step_one_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/step-one/step-one/step-one.component */
    "./src/app/components/step-one/step-one/step-one.component.ts");
    /* harmony import */


    var _components_step_two_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/step-two/step-two/step-two.component */
    "./src/app/components/step-two/step-two/step-two.component.ts");
    /* harmony import */


    var _components_step_three_step_three_step_three_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/step-three/step-three/step-three.component */
    "./src/app/components/step-three/step-three/step-three.component.ts");
    /* harmony import */


    var _components_step_four_step_four_step_four_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/step-four/step-four/step-four.component */
    "./src/app/components/step-four/step-four/step-four.component.ts");
    /* harmony import */


    var _components_step_five_step_five_step_five_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/step-five/step-five/step-five.component */
    "./src/app/components/step-five/step-five/step-five.component.ts"); // @ts-ignore


    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'register',
      component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
    }, {
      path: 'dashboard',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"]
    }, // this is commented by toni naumoski for the moment {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
    // {path: 'register', component: RegistrationComponent, children: [{path: 'activate', component: ActivationComponent}]},
    {
      path: 'account',
      component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"],
      children: [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
      }, {
        path: 'activate',
        component: _components_activation_activation_component__WEBPACK_IMPORTED_MODULE_4__["ActivationComponent"]
      }, {
        path: 'reset',
        component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_14__["ForgotPasswordComponent"]
      }, {
        path: 'change-password',
        component: _components_upgrade_password_upgrade_password_component__WEBPACK_IMPORTED_MODULE_15__["UpgradePasswordComponent"]
      }]
    }, {
      path: 'announcement',
      component: _components_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_7__["AnnouncementComponent"],
      children: [{
        path: '',
        redirectTo: 'cost',
        pathMatch: 'full'
      }, {
        path: 'cost',
        component: _components_cost_cost_component__WEBPACK_IMPORTED_MODULE_8__["CostComponent"],
        children: [{
          path: '',
          component: _components_step_one_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_16__["StepOneComponent"]
        }, {
          path: 'steptwo',
          component: _components_step_two_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_17__["StepTwoComponent"]
        }, {
          path: 'stepthree',
          component: _components_step_three_step_three_step_three_component__WEBPACK_IMPORTED_MODULE_18__["StepThreeComponent"]
        }, {
          path: 'stepfour',
          component: _components_step_four_step_four_step_four_component__WEBPACK_IMPORTED_MODULE_19__["StepFourComponent"]
        }, {
          path: 'stepfive',
          component: _components_step_five_step_five_step_five_component__WEBPACK_IMPORTED_MODULE_20__["StepFiveComponent"]
        }]
      }, {
        path: 'identification',
        component: _components_identification_identification_component__WEBPACK_IMPORTED_MODULE_9__["IdentificationComponent"]
      }, {
        path: 'description',
        component: _components_description_description_component__WEBPACK_IMPORTED_MODULE_10__["DescriptionComponent"]
      }, {
        path: 'payment',
        component: _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_11__["PaymentComponent"]
      }, {
        path: 'published',
        component: _components_published_published_component__WEBPACK_IMPORTED_MODULE_12__["PublishedComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(primengConfig) {
        _classCallCheck(this, AppComponent);

        this.primengConfig = primengConfig;
        this.title = 'sample title';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.primengConfig.ripple = true;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeNGConfig"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/registration/registration.component */
    "./src/app/components/registration/registration.component.ts");
    /* harmony import */


    var _services_remote_registration_registration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/remote/registration/registration.service */
    "./src/app/services/remote/registration/registration.service.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_activation_activation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/activation/activation.component */
    "./src/app/components/activation/activation.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_account_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/account/account.component */
    "./src/app/components/account/account.component.ts");
    /* harmony import */


    var _components_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/announcement/announcement.component */
    "./src/app/components/announcement/announcement.component.ts");
    /* harmony import */


    var _components_cost_cost_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/cost/cost.component */
    "./src/app/components/cost/cost.component.ts");
    /* harmony import */


    var _components_identification_identification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/identification/identification.component */
    "./src/app/components/identification/identification.component.ts");
    /* harmony import */


    var _components_description_description_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/description/description.component */
    "./src/app/components/description/description.component.ts");
    /* harmony import */


    var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/payment/payment.component */
    "./src/app/components/payment/payment.component.ts");
    /* harmony import */


    var _components_published_published_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/published/published.component */
    "./src/app/components/published/published.component.ts");
    /* harmony import */


    var _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/interaction/announcement/announcement.service */
    "./src/app/services/interaction/announcement/announcement.service.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/forgot-password/forgot-password.component */
    "./src/app/components/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _components_upgrade_password_upgrade_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/upgrade-password/upgrade-password.component */
    "./src/app/components/upgrade-password/upgrade-password.component.ts");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_ripple__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! primeng/ripple */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-ripple.js");
    /* harmony import */


    var _components_header_header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/header/header/header.component */
    "./src/app/components/header/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/footer/footer/footer.component */
    "./src/app/components/footer/footer/footer.component.ts");
    /* harmony import */


    var _components_card_card_card_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/card/card/card.component */
    "./src/app/components/card/card/card.component.ts");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
    /* harmony import */


    var _components_priese_section_priese_priese_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/priese-section/priese/priese.component */
    "./src/app/components/priese-section/priese/priese.component.ts");
    /* harmony import */


    var _components_aktuell_section_aktuell_aktuell_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/aktuell-section/aktuell/aktuell.component */
    "./src/app/components/aktuell-section/aktuell/aktuell.component.ts");
    /* harmony import */


    var _components_subscribe_section_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/subscribe-section/subscribe/subscribe.component */
    "./src/app/components/subscribe-section/subscribe/subscribe.component.ts");
    /* harmony import */


    var _components_kontact_section_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/kontact-section/kontakt/kontakt.component */
    "./src/app/components/kontact-section/kontakt/kontakt.component.ts");
    /* harmony import */


    var _components_faq_section_faq_faq_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/faq-section/faq/faq.component */
    "./src/app/components/faq-section/faq/faq.component.ts");
    /* harmony import */


    var primeng_accordion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! primeng/accordion */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-accordion.js");
    /* harmony import */


    var _components_carousel_section_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/carousel-section/carousel/carousel.component */
    "./src/app/components/carousel-section/carousel/carousel.component.ts");
    /* harmony import */


    var primeng_carousel__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! primeng/carousel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-carousel.js");
    /* harmony import */


    var _components_customers_section_customers_customers_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/customers-section/customers/customers.component */
    "./src/app/components/customers-section/customers/customers.component.ts");
    /* harmony import */


    var primeng_rating__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! primeng/rating */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-rating.js");
    /* harmony import */


    var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! primeng/splitbutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-splitbutton.js");
    /* harmony import */


    var _components_search_section_search_section_search_section_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/search-section/search-section/search-section.component */
    "./src/app/components/search-section/search-section/search-section.component.ts");
    /* harmony import */


    var _components_paginator_section_paginator_section_paginator_section_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/paginator-section/paginator-section/paginator-section.component */
    "./src/app/components/paginator-section/paginator-section/paginator-section.component.ts");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! primeng/paginator */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-paginator.js");
    /* harmony import */


    var _components_dashboard_data_section_dashboard_data_dashboard_data_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/dashboard-data-section/dashboard-data/dashboard-data.component */
    "./src/app/components/dashboard-data-section/dashboard-data/dashboard-data.component.ts");
    /* harmony import */


    var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! primeng/scrollpanel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-scrollpanel.js");
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! primeng/steps */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-steps.js");
    /* harmony import */


    var _components_step_one_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/step-one/step-one/step-one.component */
    "./src/app/components/step-one/step-one/step-one.component.ts");
    /* harmony import */


    var _components_step_two_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/step-two/step-two/step-two.component */
    "./src/app/components/step-two/step-two/step-two.component.ts");
    /* harmony import */


    var _components_step_three_step_three_step_three_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./components/step-three/step-three/step-three.component */
    "./src/app/components/step-three/step-three/step-three.component.ts");
    /* harmony import */


    var _components_step_four_step_four_step_four_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./components/step-four/step-four/step-four.component */
    "./src/app/components/step-four/step-four/step-four.component.ts");
    /* harmony import */


    var _components_step_five_step_five_step_five_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./components/step-five/step-five/step-five.component */
    "./src/app/components/step-five/step-five/step-five.component.ts");
    /* harmony import */


    var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! primeng/inputnumber */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputnumber.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! primeng/password */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-radiobutton.js");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
    /* harmony import */


    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! primeng/inputtextarea */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtextarea.js");
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! primeng/inputmask */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputmask.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_remote_registration_registration_service__WEBPACK_IMPORTED_MODULE_8__["RegistrationService"], _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_19__["AnnouncementService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], primeng_button__WEBPACK_IMPORTED_MODULE_23__["ButtonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_24__["RippleModule"], primeng_card__WEBPACK_IMPORTED_MODULE_28__["CardModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_34__["AccordionModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_36__["CarouselModule"], primeng_rating__WEBPACK_IMPORTED_MODULE_38__["RatingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_39__["SplitButtonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_42__["PaginatorModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_44__["ScrollPanelModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_45__["StepsModule"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_51__["InputNumberModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_52__["InputTextModule"], primeng_password__WEBPACK_IMPORTED_MODULE_53__["PasswordModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_54__["CheckboxModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__["RadioButtonModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_56__["CalendarModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_57__["InputTextareaModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_58__["InputMaskModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_activation_activation_component__WEBPACK_IMPORTED_MODULE_10__["ActivationComponent"], _components_account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"], _components_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_13__["AnnouncementComponent"], _components_cost_cost_component__WEBPACK_IMPORTED_MODULE_14__["CostComponent"], _components_identification_identification_component__WEBPACK_IMPORTED_MODULE_15__["IdentificationComponent"], _components_description_description_component__WEBPACK_IMPORTED_MODULE_16__["DescriptionComponent"], _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_17__["PaymentComponent"], _components_published_published_component__WEBPACK_IMPORTED_MODULE_18__["PublishedComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__["ForgotPasswordComponent"], _components_upgrade_password_upgrade_password_component__WEBPACK_IMPORTED_MODULE_22__["UpgradePasswordComponent"], _components_header_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"], _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"], _components_card_card_card_component__WEBPACK_IMPORTED_MODULE_27__["CardComponent"], _components_priese_section_priese_priese_component__WEBPACK_IMPORTED_MODULE_29__["PrieseComponent"], _components_aktuell_section_aktuell_aktuell_component__WEBPACK_IMPORTED_MODULE_30__["AktuellComponent"], _components_subscribe_section_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_31__["SubscribeComponent"], _components_kontact_section_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_32__["KontaktComponent"], _components_faq_section_faq_faq_component__WEBPACK_IMPORTED_MODULE_33__["FaqComponent"], _components_carousel_section_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_35__["CarouselComponent"], _components_customers_section_customers_customers_component__WEBPACK_IMPORTED_MODULE_37__["CustomersComponent"], _components_search_section_search_section_search_section_component__WEBPACK_IMPORTED_MODULE_40__["SearchSectionComponent"], _components_paginator_section_paginator_section_paginator_section_component__WEBPACK_IMPORTED_MODULE_41__["PaginatorSectionComponent"], _components_dashboard_data_section_dashboard_data_dashboard_data_component__WEBPACK_IMPORTED_MODULE_43__["DashboardDataComponent"], _components_step_one_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_46__["StepOneComponent"], _components_step_two_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_47__["StepTwoComponent"], _components_step_three_step_three_step_three_component__WEBPACK_IMPORTED_MODULE_48__["StepThreeComponent"], _components_step_four_step_four_step_four_component__WEBPACK_IMPORTED_MODULE_49__["StepFourComponent"], _components_step_five_step_five_step_five_component__WEBPACK_IMPORTED_MODULE_50__["StepFiveComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], primeng_button__WEBPACK_IMPORTED_MODULE_23__["ButtonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_24__["RippleModule"], primeng_card__WEBPACK_IMPORTED_MODULE_28__["CardModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_34__["AccordionModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_36__["CarouselModule"], primeng_rating__WEBPACK_IMPORTED_MODULE_38__["RatingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_39__["SplitButtonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_42__["PaginatorModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_44__["ScrollPanelModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_45__["StepsModule"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_51__["InputNumberModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_52__["InputTextModule"], primeng_password__WEBPACK_IMPORTED_MODULE_53__["PasswordModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_54__["CheckboxModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__["RadioButtonModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_56__["CalendarModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_57__["InputTextareaModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_58__["InputMaskModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_activation_activation_component__WEBPACK_IMPORTED_MODULE_10__["ActivationComponent"], _components_account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"], _components_announcement_announcement_component__WEBPACK_IMPORTED_MODULE_13__["AnnouncementComponent"], _components_cost_cost_component__WEBPACK_IMPORTED_MODULE_14__["CostComponent"], _components_identification_identification_component__WEBPACK_IMPORTED_MODULE_15__["IdentificationComponent"], _components_description_description_component__WEBPACK_IMPORTED_MODULE_16__["DescriptionComponent"], _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_17__["PaymentComponent"], _components_published_published_component__WEBPACK_IMPORTED_MODULE_18__["PublishedComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_21__["ForgotPasswordComponent"], _components_upgrade_password_upgrade_password_component__WEBPACK_IMPORTED_MODULE_22__["UpgradePasswordComponent"], _components_header_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"], _components_footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"], _components_card_card_card_component__WEBPACK_IMPORTED_MODULE_27__["CardComponent"], _components_priese_section_priese_priese_component__WEBPACK_IMPORTED_MODULE_29__["PrieseComponent"], _components_aktuell_section_aktuell_aktuell_component__WEBPACK_IMPORTED_MODULE_30__["AktuellComponent"], _components_subscribe_section_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_31__["SubscribeComponent"], _components_kontact_section_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_32__["KontaktComponent"], _components_faq_section_faq_faq_component__WEBPACK_IMPORTED_MODULE_33__["FaqComponent"], _components_carousel_section_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_35__["CarouselComponent"], _components_customers_section_customers_customers_component__WEBPACK_IMPORTED_MODULE_37__["CustomersComponent"], _components_search_section_search_section_search_section_component__WEBPACK_IMPORTED_MODULE_40__["SearchSectionComponent"], _components_paginator_section_paginator_section_paginator_section_component__WEBPACK_IMPORTED_MODULE_41__["PaginatorSectionComponent"], _components_dashboard_data_section_dashboard_data_dashboard_data_component__WEBPACK_IMPORTED_MODULE_43__["DashboardDataComponent"], _components_step_one_step_one_step_one_component__WEBPACK_IMPORTED_MODULE_46__["StepOneComponent"], _components_step_two_step_two_step_two_component__WEBPACK_IMPORTED_MODULE_47__["StepTwoComponent"], _components_step_three_step_three_step_three_component__WEBPACK_IMPORTED_MODULE_48__["StepThreeComponent"], _components_step_four_step_four_step_four_component__WEBPACK_IMPORTED_MODULE_49__["StepFourComponent"], _components_step_five_step_five_step_five_component__WEBPACK_IMPORTED_MODULE_50__["StepFiveComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], primeng_button__WEBPACK_IMPORTED_MODULE_23__["ButtonModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_24__["RippleModule"], primeng_card__WEBPACK_IMPORTED_MODULE_28__["CardModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_34__["AccordionModule"], primeng_carousel__WEBPACK_IMPORTED_MODULE_36__["CarouselModule"], primeng_rating__WEBPACK_IMPORTED_MODULE_38__["RatingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_39__["SplitButtonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_42__["PaginatorModule"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_44__["ScrollPanelModule"], primeng_steps__WEBPACK_IMPORTED_MODULE_45__["StepsModule"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_51__["InputNumberModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_52__["InputTextModule"], primeng_password__WEBPACK_IMPORTED_MODULE_53__["PasswordModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_54__["CheckboxModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_55__["RadioButtonModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_56__["CalendarModule"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_57__["InputTextareaModule"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_58__["InputMaskModule"]],
          providers: [_services_remote_registration_registration_service__WEBPACK_IMPORTED_MODULE_8__["RegistrationService"], _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_19__["AnnouncementService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/account/account.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/account/account.component.ts ***!
    \*********************************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppComponentsAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AccountComponent = /*#__PURE__*/function () {
      function AccountComponent() {
        _classCallCheck(this, AccountComponent);
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccountComponent;
    }();

    AccountComponent.ɵfac = function AccountComponent_Factory(t) {
      return new (t || AccountComponent)();
    };

    AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["app-account"]],
      decls: 1,
      vars: 0,
      template: function AccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account',
          templateUrl: './account.component.html',
          styleUrls: ['./account.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/activation/activation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/activation/activation.component.ts ***!
    \***************************************************************/

  /*! exports provided: ActivationComponent */

  /***/
  function srcAppComponentsActivationActivationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivationComponent", function () {
      return ActivationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_ActivationType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/ActivationType */
    "./src/app/models/ActivationType.ts");
    /* harmony import */


    var _models_ActivationRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/ActivationRequest */
    "./src/app/models/ActivationRequest.ts");
    /* harmony import */


    var _services_remote_activation_activation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/remote/activation/activation.service */
    "./src/app/services/remote/activation/activation.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ActivationComponent_span_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 7);
      }
    }

    var ActivationComponent = /*#__PURE__*/function () {
      function ActivationComponent(activationService, activatedRoute, router) {
        _classCallCheck(this, ActivationComponent);

        this.activationService = activationService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.activating = false;
      }

      _createClass(ActivationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.activatedRoute.snapshot.queryParams['email']);
          this.activationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'otp': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.otp, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        }
      }, {
        key: "activateAccount",
        value: function activateAccount() {
          var _this = this;

          console.log("User has sent activation request to the server.");
          this.activating = true;
          var activation = new _models_ActivationRequest__WEBPACK_IMPORTED_MODULE_3__["ActivationRequest"](this.activationForm.value.otp, _models_ActivationType__WEBPACK_IMPORTED_MODULE_2__["ActivationType"].EMAIL_OTP, this.activatedRoute.snapshot.queryParams['email']);
          console.log("data sent: ");
          console.log(activation);
          return this.activationService.activateAccount(activation).subscribe(function (value) {
            _this.activating = false;
            console.log("activation successful.");

            _this.router.navigate(['/account', 'login']);
          }, function (error) {
            _this.activating = false;
            console.log("activation failure.");
            console.log(error);
          });
        }
      }]);

      return ActivationComponent;
    }();

    ActivationComponent.ɵfac = function ActivationComponent_Factory(t) {
      return new (t || ActivationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_remote_activation_activation_service__WEBPACK_IMPORTED_MODULE_4__["ActivationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    ActivationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActivationComponent,
      selectors: [["app-activation"]],
      decls: 11,
      vars: 3,
      consts: [[1, "form-inline", 3, "formGroup"], [1, "input-group", "mx-sm-3", "mb-2"], ["for", "otp", 1, "sr-only"], ["formControlName", "otp", "id", "otp", "placeholder", "", "type", "text", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", "mb-2", 3, "disabled", "click"], ["aria-hidden", "true", "class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["aria-hidden", "true", "role", "status", 1, "spinner-border", "spinner-border-sm"]],
      template: function ActivationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AKTIVIERUNG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Code (OTP)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActivationComponent_Template_button_click_8_listener() {
            return ctx.activateAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ActivationComponent_span_9_Template, 1, 0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Best\xE4tige Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.activationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.activationForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activating);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZhdGlvbi9hY3RpdmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-activation',
          templateUrl: './activation.component.html',
          styleUrls: ['./activation.component.css']
        }]
      }], function () {
        return [{
          type: _services_remote_activation_activation_service__WEBPACK_IMPORTED_MODULE_4__["ActivationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/aktuell-section/aktuell/aktuell.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/aktuell-section/aktuell/aktuell.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AktuellComponent */

  /***/
  function srcAppComponentsAktuellSectionAktuellAktuellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AktuellComponent", function () {
      return AktuellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _card_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../card/card/card.component */
    "./src/app/components/card/card/card.component.ts");

    function AktuellComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardOneData", card_r1);
      }
    }

    var AktuellComponent = /*#__PURE__*/function () {
      function AktuellComponent() {
        _classCallCheck(this, AktuellComponent);

        this.cardOneData = null;
      }

      _createClass(AktuellComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AktuellComponent;
    }();

    AktuellComponent.ɵfac = function AktuellComponent_Factory(t) {
      return new (t || AktuellComponent)();
    };

    AktuellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AktuellComponent,
      selectors: [["app-aktuell"]],
      inputs: {
        cardOneData: "cardOneData"
      },
      decls: 14,
      vars: 1,
      consts: [[1, "aktuell-section"], [1, "container"], [1, "p-grid"], [1, "p-col-12", "aktuell-section-content"], [1, "aktuell-section-content-bg-img-right"], [1, "aktuell-section-content-bg-img-left"], [1, "section-title-text"], ["pButton", "", "type", "button", "label", "Kostenlose Registrierung", 1, "p-d-flex", "p-mx-auto", "p-mt-5", "p-mb-5"], ["class", "p-col-12 p-lg-4", 4, "ngFor", "ngForOf"], [1, "p-col-12", "p-lg-4"], [3, "cardOneData"]],
      template: function AktuellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Aktuell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " All the available jobs in the market will show here and user can click view more to see All job list from here! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AktuellComponent_div_13_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardOneData);
        }
      },
      directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _card_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWt0dWVsbC1zZWN0aW9uL2FrdHVlbGwvYWt0dWVsbC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AktuellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aktuell',
          templateUrl: './aktuell.component.html',
          styleUrls: ['./aktuell.component.scss']
        }]
      }], function () {
        return [];
      }, {
        cardOneData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/announcement/announcement.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/announcement/announcement.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AnnouncementComponent */

  /***/
  function srcAppComponentsAnnouncementAnnouncementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementComponent", function () {
      return AnnouncementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AnnouncementComponent = /*#__PURE__*/function () {
      function AnnouncementComponent() {
        _classCallCheck(this, AnnouncementComponent);
      }

      _createClass(AnnouncementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnnouncementComponent;
    }();

    AnnouncementComponent.ɵfac = function AnnouncementComponent_Factory(t) {
      return new (t || AnnouncementComponent)();
    };

    AnnouncementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnnouncementComponent,
      selectors: [["app-announcement"]],
      decls: 1,
      vars: 0,
      template: function AnnouncementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5ub3VuY2VtZW50L2Fubm91bmNlbWVudC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnouncementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-announcement',
          templateUrl: './announcement.component.html',
          styleUrls: ['./announcement.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/card/card/card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/card/card/card.component.ts ***!
    \********************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppComponentsCardCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/card */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-card.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function CardComponent_p_card_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var buttonsInfoLabels_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", buttonsInfoLabels_r3);
      }
    }

    function CardComponent_p_card_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_p_card_0_div_6_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx_r0.cardOneData.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.cardOneData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.cardOneData.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cardOneData.buttonsInfoLabels);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.cardOneData.buttonLabel)("routerLink", ctx_r0.cardOneData.buttonLink);
      }
    }

    function CardComponent_p_card_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-card", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx_r1.cardTwoData.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.cardTwoData.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cardTwoData.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.cardTwoData.text);
      }
    }

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);

        this.cardNumber = null; // card one data to be added 

        this.cardOneData = null; // card two data to be added

        this.cardTwoData = null;
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)();
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      inputs: {
        cardNumber: "cardNumber",
        cardOneData: "cardOneData",
        cardTwoData: "cardTwoData"
      },
      decls: 2,
      vars: 2,
      consts: [["styleClass", "ui-card-shadow custom-card", 3, "header", 4, "ngIf"], ["styleClass", "ui-card-shadow custom-card custom-card-2", 3, "header", 4, "ngIf"], ["styleClass", "ui-card-shadow custom-card", 3, "header"], ["alt", "aktuell-img", 3, "src"], [1, "custom-card__text"], [1, "custom-card__info-location", "p-d-flex", "p-jc-start", "p-flex-wrap"], [4, "ngFor", "ngForOf"], [1, "p-inputgroup", "p-inputgroup-custom", "p-jc-center", "p-jc-xl-start"], ["pButton", "", "type", "button", 1, "p-button-secondary", "p-inputgroup-custom-btn", 3, "label", "routerLink"], [1, "p-inputgroup-addon", "p-button", "p-component", "p-inputgroup-custom-btn-arrow-icon"], [1, "pi", "pi-chevron-right"], ["pButton", "", "type", "button", 1, "p-button-info", 3, "label"], ["styleClass", "ui-card-shadow custom-card custom-card-2", 3, "header"], [1, "custom-card__description"], [1, "custom-card__text", "custom-card-2__text"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardComponent_p_card_0_Template, 12, 6, "p-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_p_card_1_Template, 7, 4, "p-card", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardOneData !== null || ctx.cardNumber == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardTwoData !== null || ctx.cardNumber == 2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], primeng_card__WEBPACK_IMPORTED_MODULE_2__["Card"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["Header"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["Footer"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        cardNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardOneData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cardTwoData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/carousel-section/carousel/carousel.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/carousel-section/carousel/carousel.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CarouselComponent */

  /***/
  function srcAppComponentsCarouselSectionCarouselCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
      return CarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/carousel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-carousel.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function CarouselComponent_section_0_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r3.buttonLabel)("routerLink", item_r3.buttonSrc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0() {
      return {
        "width": "100%"
      };
    };

    function CarouselComponent_section_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-carousel", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_section_0_ng_template_3_Template, 13, 5, "ng-template", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.carouselItems)("circular", true)("autoplayInterval", 5000)("numVisible", 1)("numScroll", 1)("responsiveOptions", ctx_r0.responsiveOptions);
      }
    }

    function CarouselComponent_p_carousel_1_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CarouselComponent_p_carousel_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-carousel", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_p_carousel_1_ng_template_1_Template, 4, 0, "ng-template", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.carouselItems)("circular", true)("autoplayInterval", 5000)("numVisible", 1)("numScroll", 1)("responsiveOptions", ctx_r1.responsiveOptions);
      }
    }

    var CarouselComponent = /*#__PURE__*/function () {
      function CarouselComponent() {
        _classCallCheck(this, CarouselComponent);

        this.carouselPage = '';
        this.responsiveOptions = [{
          breakpoint: '1200px',
          numVisible: 1,
          numScroll: 1
        }, {
          breakpoint: '992px',
          numVisible: 1,
          numScroll: 1
        }, {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
        }, {
          breakpoint: '576px',
          numVisible: 1,
          numScroll: 1
        }, {
          breakpoint: '1px',
          numVisible: 1,
          numScroll: 1
        }];
      }

      _createClass(CarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.carouselItems = [{
            "title": "Ihe zuverlasssiger umzugsvermittler",
            "text": "Up unpacked friendly ecstatic so possible humoured do. Ample end might set spoke her. We no am former valley assure. Four need spo Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "buttonLabel": "Anzeige Jetzt aufgenben",
            "buttonSrc": "/register",
            "imgSrc": "assets/carousel-img.png"
          }, {
            "title": "Ihe zuverlasssiger umzugsvermittler",
            "text": "Up unpacked friendly ecstatic so possible humoured do. Ample end might set spoke her. We no am former valley assure. Four need spo Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "buttonLabel": "Anzeige Jetzt aufgenben",
            "buttonSrc": "/register",
            "imgSrc": "assets/carousel-img.png"
          }, {
            "title": "Ihe zuverlasssiger umzugsvermittler",
            "text": "Up unpacked friendly ecstatic so possible humoured do. Ample end might set spoke her. We no am former valley assure. Four need spo Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "buttonLabel": "Anzeige Jetzt aufgenben",
            "buttonSrc": "/register",
            "imgSrc": "assets/carousel-img.png"
          }, {
            "title": "Ihe zuverlasssiger umzugsvermittler",
            "text": "Up unpacked friendly ecstatic so possible humoured do. Ample end might set spoke her. We no am former valley assure. Four need spo Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "buttonLabel": "Anzeige Jetzt aufgenben",
            "buttonSrc": "/register",
            "imgSrc": "assets/carousel-img.png"
          }];
        }
      }]);

      return CarouselComponent;
    }();

    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
      return new (t || CarouselComponent)();
    };

    CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarouselComponent,
      selectors: [["app-carousel"]],
      inputs: {
        carouselPage: "carouselPage"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "carousel-section p-pt-6", 4, "ngIf"], ["class", "carousel-section__carousel-faq", 3, "value", "circular", "autoplayInterval", "style", "numVisible", "numScroll", "responsiveOptions", 4, "ngIf"], [1, "carousel-section", "p-pt-6"], [1, "container", "p-pb-0"], [3, "value", "circular", "autoplayInterval", "numVisible", "numScroll", "responsiveOptions"], ["pTemplate", "item"], [1, "p-d-flex", "p-flex-column", "p-flex-lg-row"], [1, "p-d-flex", "p-jc-center", "p-flex-column", "carousel-section-content-wrapper"], [1, "carousel-section-title"], [1, "carousel-section-text"], [1, "p-inputgroup", "p-inputgroup-custom", "p-jc-start"], ["pButton", "", "type", "button", 1, "p-inputgroup-custom-btn", 3, "label", "routerLink"], [1, "p-inputgroup-addon", "p-button", "p-component", "p-inputgroup-custom-btn-arrow-icon", "p-button-secondary"], [1, "pi", "pi-chevron-right", "p-inputgroup-custom-btn-arrow-icon-right"], [1, "carousel-section-img-wrapper"], ["alt", "carousel-img", 1, "carousel-section-img", 3, "src"], [1, "carousel-section-img-line"], [1, "carousel-section__carousel-faq", 3, "value", "circular", "autoplayInterval", "numVisible", "numScroll", "responsiveOptions"], [1, "line"], [1, "section-faq-img-wrapper", "p-d-flex"], ["src", "assets/faq-img.png", "alt", "faq-img"]],
      template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_section_0_Template, 4, 9, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_p_carousel_1_Template, 2, 9, "p-carousel", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carouselPage == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carouselPage == "faq");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], primeng_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      styles: ["\n  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {\n    border: 1px solid #b3c2ca;\n    border-radius: 3px;\n    margin: 0.3em;\n    text-align: center;\n    padding: 2em 0 2.25em 0;\n  }\n  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {\n    font-weight: 700;\n    font-size: 20px;\n    margin-top: 24px;\n  }\n  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {\n    margin: 0.25em 0 2em 0;\n  }\n  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {\n    margin-left: 0.5em;\n  }\n  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {\n    margin-left: 0;\n  }\n  .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {\n    width: 16px !important;\n    height: 16px !important;\n    border-radius: 50%;\n  }\n  .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {\n    margin-left: 0.6em;\n  }\n  .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .car-details > .p-grid {\n    margin-right: 0.6em;\n  }\n"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carousel',
          templateUrl: './carousel.component.html',
          styles: ["\n  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {\n    border: 1px solid #b3c2ca;\n    border-radius: 3px;\n    margin: 0.3em;\n    text-align: center;\n    padding: 2em 0 2.25em 0;\n  }\n  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {\n    font-weight: 700;\n    font-size: 20px;\n    margin-top: 24px;\n  }\n  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {\n    margin: 0.25em 0 2em 0;\n  }\n  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {\n    margin-left: 0.5em;\n  }\n  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {\n    margin-left: 0;\n  }\n  .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {\n    width: 16px !important;\n    height: 16px !important;\n    border-radius: 50%;\n  }\n  .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {\n    margin-left: 0.6em;\n  }\n  .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .car-details > .p-grid {\n    margin-right: 0.6em;\n  }\n"],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, {
        carouselPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/cost/cost.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cost/cost.component.ts ***!
    \***************************************************/

  /*! exports provided: CostComponent */

  /***/
  function srcAppComponentsCostCostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CostComponent", function () {
      return CostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header/header.component */
    "./src/app/components/header/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer/footer.component */
    "./src/app/components/footer/footer/footer.component.ts");

    var CostComponent = /*#__PURE__*/function () {
      function CostComponent() {
        _classCallCheck(this, CostComponent);
      }

      _createClass(CostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CostComponent;
    }();

    CostComponent.ɵfac = function CostComponent_Factory(t) {
      return new (t || CostComponent)();
    };

    CostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CostComponent,
      selectors: [["app-cost"]],
      decls: 13,
      vars: 0,
      consts: [[1, "cost-component"], [1, "cost-component__main-section", "container"], [1, "p-grid"], [1, "p-col-12"], [1, "p-d-flex", "p-flex-column", "p-jc-center", "p-ai-center"], ["src", "assets/cost-component-img.png", "alt", "img", 1, "cost-component__main-section-img"], [1, "cost-component__main-section-title"], [1, "cost-component__main-section-text"]],
      template: function CostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Anzeige veroffentlichen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "In wenigen schritten gelingen siezum profil von umzugsprofis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29zdC9jb3N0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cost',
          templateUrl: './cost.component.html',
          styleUrls: ['./cost.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/customers-section/customers/customers.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/customers-section/customers/customers.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppComponentsCustomersSectionCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/carousel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-carousel.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
    /* harmony import */


    var primeng_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/rating */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-rating.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CustomersComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p-rating", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customersData_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", customersData_r1.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customersData_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customersData_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customersData_r1.text);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", customersData_r1.starsNotActive)("stars", customersData_r1.starsActive)("cancel", false);
      }
    }

    var CustomersComponent = /*#__PURE__*/function () {
      function CustomersComponent() {
        _classCallCheck(this, CustomersComponent);

        this.val3 = 5;
        this.responsiveOptions = [{
          breakpoint: '1200px',
          numVisible: 3,
          numScroll: 1
        }, {
          breakpoint: '992px',
          numVisible: 1,
          numScroll: 1
        }, {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
        }, {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
        }];
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.customersData = [{
            "imgSrc": "assets/customers-img.png",
            "title": "Alsabitha D Elizabeth",
            "description": "Teacher at holy cross",
            "text": "Looking for inspiration?  We’ve put together a huge collection of fun and educational classroom ideas to",
            "starsActive": 5,
            "starsNotActive": 5
          }, {
            "imgSrc": "assets/customers-img.png",
            "title": "Alsabitha D Elizabeth",
            "description": "Teacher at holy cross",
            "text": "Looking for inspiration?  We’ve put together a huge collection of fun and educational classroom ideas to",
            "starsActive": 5,
            "starsNotActive": 5
          }, {
            "imgSrc": "assets/customers-img.png",
            "title": "Alsabitha D Elizabeth",
            "description": "Teacher at holy cross",
            "text": "Looking for inspiration?  We’ve put together a huge collection of fun and educational classroom ideas to",
            "starsActive": 5,
            "starsNotActive": 5
          }, {
            "imgSrc": "assets/customers-img.png",
            "title": "Alsabitha D Elizabeth",
            "description": "Teacher at holy cross",
            "text": "Looking for inspiration?  We’ve put together a huge collection of fun and educational classroom ideas to",
            "starsActive": 5,
            "starsNotActive": 5
          }, {
            "imgSrc": "assets/customers-img.png",
            "title": "Alsabitha D Elizabeth",
            "description": "Teacher at holy cross",
            "text": "Looking for inspiration?  We’ve put together a huge collection of fun and educational classroom ideas to",
            "starsActive": 5,
            "starsNotActive": 5
          }];
        }
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.ɵfac = function CustomersComponent_Factory(t) {
      return new (t || CustomersComponent)();
    };

    CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomersComponent,
      selectors: [["app-customers"]],
      decls: 11,
      vars: 5,
      consts: [[1, "customers-section"], [1, "container", "p-mb-5"], [1, "p-grid"], [1, "p-col-12"], [1, "section-title-text"], [1, "container"], ["styleClass", "custom-carousel", 3, "value", "numVisible", "numScroll", "circular", "responsiveOptions"], ["pTemplate", "item"], [1, "customers-section__item-wrapper", "p-d-flex", "p-flex-column", "p-mr-3", "p-pl-3", "p-pt-3", "p-pb-3"], [1, "customers-section__item-img-text-section", "p-d-flex"], ["alt", "customers-img", 1, "customers-section__item-img-text-section-img", 3, "src"], [1, "p-d-flex", "p-flex-column"], [1, "customers-section__item-img-text-section-title", "p-pl-3"], [1, "customers-section__item-img-text-section-description", "p-pl-3"], [1, "customers-section__item-text"], ["readonly", "true", 3, "ngModel", "stars", "cancel"]],
      template: function CustomersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What Our Customers Have To Say");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Looking for inspiration? We\u2019ve put together a huge collection of fun and educational classroom ideas to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-carousel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CustomersComponent_ng_template_10_Template, 11, 7, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customersData)("numVisible", 3)("numScroll", 1)("circular", true)("responsiveOptions", ctx.responsiveOptions);
        }
      },
      directives: [primeng_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], primeng_rating__WEBPACK_IMPORTED_MODULE_3__["Rating"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXJzLXNlY3Rpb24vY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customers',
          templateUrl: './customers.component.html',
          styleUrls: ['./customers.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dashboard-data-section/dashboard-data/dashboard-data.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/components/dashboard-data-section/dashboard-data/dashboard-data.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: DashboardDataComponent */

  /***/
  function srcAppComponentsDashboardDataSectionDashboardDataDashboardDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardDataComponent", function () {
      return DashboardDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _paginator_section_paginator_section_paginator_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../paginator-section/paginator-section/paginator-section.component */
    "./src/app/components/paginator-section/paginator-section/paginator-section.component.ts");

    var DashboardDataComponent = /*#__PURE__*/function () {
      function DashboardDataComponent() {
        _classCallCheck(this, DashboardDataComponent);

        this.data = [{
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          button: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }];
        this.dataOne = [{
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonGray: {
            buttonLink: 'Bestatight',
            buttonUrl: '/register'
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }];
        this.dataTwo = [{
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }, {
          title: "Mobelaufbau - Darmstadt",
          buttonDropdown: {
            items: [{
              label: 'Stornieren ',
              routerLink: ['/register']
            }, {
              separator: true
            }, {
              label: 'ändern',
              routerLink: ['/register']
            }]
          },
          imgSrc: 'assets/paginator-img1.png',
          locationIcon: "icon",
          location: "Entfemung 13 KM",
          timeIcon: 'dateicon',
          time: 'Dauer 2 STD',
          dateIcon: 'dateIcon',
          date: 'Datyn 21.04.2020'
        }];
        this.headerData = [{
          title: "Angenommene Auftrafe",
          buttonOneLink: "02",
          buttonOneUrl: "/register",
          buttonTwoLink: "View All",
          buttonTwoUrl: "/register"
        }];
      }

      _createClass(DashboardDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardDataComponent;
    }();

    DashboardDataComponent.ɵfac = function DashboardDataComponent_Factory(t) {
      return new (t || DashboardDataComponent)();
    };

    DashboardDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardDataComponent,
      selectors: [["app-dashboard-data"]],
      decls: 13,
      vars: 10,
      consts: [[1, "dashboard-data-section"], [1, "container", "p-mb-5"], [1, "p-grid"], [1, "p-col-12", "p-xl-6"], ["scrollPanel", "885px", 3, "data", "headerData"], [3, "data", "headerData"], ["scrollPanel", "380px", 3, "data", "headerData"]],
      template: function DashboardDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-paginator-section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-paginator-section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-paginator-section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-paginator-section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-paginator-section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataTwo)("headerData", ctx.headerData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataTwo)("headerData", ctx.headerData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("headerData", ctx.headerData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataOne)("headerData", ctx.headerData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.dataTwo)("headerData", ctx.headerData);
        }
      },
      directives: [_paginator_section_paginator_section_paginator_section_component__WEBPACK_IMPORTED_MODULE_1__["PaginatorSectionComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkLWRhdGEtc2VjdGlvbi9kYXNoYm9hcmQtZGF0YS9kYXNoYm9hcmQtZGF0YS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard-data',
          templateUrl: './dashboard-data.component.html',
          styleUrls: ['./dashboard-data.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header/header.component */
    "./src/app/components/header/header/header.component.ts");
    /* harmony import */


    var _search_section_search_section_search_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../search-section/search-section/search-section.component */
    "./src/app/components/search-section/search-section/search-section.component.ts");
    /* harmony import */


    var _dashboard_data_section_dashboard_data_dashboard_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dashboard-data-section/dashboard-data/dashboard-data.component */
    "./src/app/components/dashboard-data-section/dashboard-data/dashboard-data.component.ts");
    /* harmony import */


    var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer/footer.component */
    "./src/app/components/footer/footer/footer.component.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 4,
      vars: 0,
      consts: [["page", "dashboard"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-search-section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-dashboard-data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        }
      },
      directives: [_header_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _search_section_search_section_search_section_component__WEBPACK_IMPORTED_MODULE_2__["SearchSectionComponent"], _dashboard_data_section_dashboard_data_dashboard_data_component__WEBPACK_IMPORTED_MODULE_3__["DashboardDataComponent"], _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/description/description.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/description/description.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DescriptionComponent */

  /***/
  function srcAppComponentsDescriptionDescriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function () {
      return DescriptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/interaction/announcement/announcement.service */
    "./src/app/services/interaction/announcement/announcement.service.ts");

    var DescriptionComponent = /*#__PURE__*/function () {
      function DescriptionComponent(_announcementService) {
        _classCallCheck(this, DescriptionComponent);

        this._announcementService = _announcementService;
        this.loading = true;
      }

      _createClass(DescriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(localStorage.getItem('fees'));

          this._announcementService.publisherDataMessage$.subscribe(function (value) {
            console.log("Data from previous component: ");
            console.log(value);
          });

          this.descriptionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'hasAccount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "changeIdentificationType",
        value: function changeIdentificationType(event) {}
      }, {
        key: "callNextComponent",
        value: function callNextComponent() {
          this.loading = true;
        }
      }]);

      return DescriptionComponent;
    }();

    DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) {
      return new (t || DescriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]));
    };

    DescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DescriptionComponent,
      selectors: [["app-description"]],
      decls: 2,
      vars: 0,
      template: function DescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "description works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-description',
          templateUrl: './description.component.html',
          styleUrls: ['./description.component.css']
        }]
      }], function () {
        return [{
          type: _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/faq-section/faq/faq.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/faq-section/faq/faq.component.ts ***!
    \*************************************************************/

  /*! exports provided: FaqComponent */

  /***/
  function srcAppComponentsFaqSectionFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
      return FaqComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _carousel_section_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../carousel-section/carousel/carousel.component */
    "./src/app/components/carousel-section/carousel/carousel.component.ts");
    /* harmony import */


    var primeng_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/accordion */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-accordion.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FaqComponent = /*#__PURE__*/function () {
      function FaqComponent() {
        _classCallCheck(this, FaqComponent);
      }

      _createClass(FaqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqComponent;
    }();

    FaqComponent.ɵfac = function FaqComponent_Factory(t) {
      return new (t || FaqComponent)();
    };

    FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaqComponent,
      selectors: [["app-faq"]],
      decls: 39,
      vars: 1,
      consts: [[1, "section-faq"], [1, "container", "section-faq__section-faq"], [1, "p-grid"], [1, "p-col-12"], [1, "section-title-text"], [1, "p-col-12", "p-lg-6"], ["carouselPage", "faq"], [1, "section-faq-content-wrapper", "p-d-flex", "p-flex-column"], [1, "section-faq-content-wrapper__text"], ["header", "What is new breed agent ?", 3, "selected"], [1, "accordionTab-description__text"], ["header", "What we are doing now ?"], ["header", "Motivate with Technology"], ["header", "Increased Learning Outcomes"], [1, "p-inputgroup", "p-inputgroup-custom", "p-jc-start", "p-mt-5"], ["pButton", "", "type", "button", "label", "View more", "routerLink", "/register", 1, "p-button-secondary", "p-inputgroup-custom-btn"], [1, "p-inputgroup-addon", "p-button", "p-component", "p-inputgroup-custom-btn-arrow-icon"], [1, "pi", "pi-chevron-right"]],
      template: function FaqComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Some of the FAQs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Looking for inspiration? We\u2019ve put together a huge collection of fun and educational classroom ideas to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-carousel", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " All are the FAQs are below ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-accordion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-accordionTab", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " What we are doing now ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Students can quiz themselves online, or you can download quizzes and learning activities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p-accordionTab", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " What we are doing now ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Students can quiz themselves online, or you can download quizzes and learning activities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p-accordionTab", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " What we are doing now ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Students can quiz themselves online, or you can download quizzes and learning activities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p-accordionTab", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " What we are doing now ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Students can quiz themselves online, or you can download quizzes and learning activities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", true);
        }
      },
      directives: [_carousel_section_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["Accordion"], primeng_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionTab"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFxLXNlY3Rpb24vZmFxL2ZhcS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-faq',
          templateUrl: './faq.component.html',
          styleUrls: ['./faq.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/footer/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 61,
      vars: 0,
      consts: [[1, "footer"], [1, "container"], [1, "p-grid"], [1, "p-col-12"], [1, "p-d-flex", "p-flex-wrap", "p-jc-center", "p-jc-xl-between"], [1, "footer__section", "p-d-flex", "p-flex-wrap", "p-flex-column"], [1, "footer__section-title"], [1, "footer__section-text"], [1, "footer__section", "p-d-flex", "p-flex-wrap", "p-flex-column", "p-jc-center", "p-jc-xl-start"], [1, "p-inputgroup", "footer__section-p-inputgroup", "p-jc-center", "p-jc-xl-start"], ["type", "text", "pInputText", "", "placeholder", "Keyword"], [1, "p-inputgroup-addon", "p-button", "p-component"], ["src", "assets/send-icon.svg", "alt", "send-image"], [1, "footer__section-social-media-wrapper", "p-d-flex", "p-ai-start", "p-jc-between"], ["src", "assets/facebook-icon.svg", "alt", "img"], ["src", "assets/twitter-icon.svg", "alt", "img"], ["src", "assets/instagram-icon.svg", "alt", "img"], ["src", "assets/youtube-icon.svg", "alt", "img"], [1, "p-d-flex", "p-flex-wrap", "p-jc-center", "p-jc-xl-start", "footer__section-tearms-and-condition"], [1, "p-d-flex", "p-flex-wrap", "p-jc-center", "footer__section-copyright"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Vision");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Leadership");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Career");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dienstleistung");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Umzugshelfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Umzugshelfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Montageservice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dokumentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "FAQ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Kontakt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Umzugscheckliste");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Rechtliches");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Impressum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Allgemeine geshftbedingun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Datensch\xFCtz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Newsletter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pricacy Policy | Tearms & Condition");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "COPYRIGHT ALL RIGHT RESERVED BY PACKMOOV 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__["InputText"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/forgot-password/forgot-password.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/forgot-password/forgot-password.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppComponentsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_remote_password_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/remote/password/password.service */
    "./src/app/services/remote/password/password.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_interaction_alertservices_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/interaction/alertservices/alert.service */
    "./src/app/services/interaction/alertservices/alert.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForgotPasswordComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Passwort vergessen?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "E-Mail Adresse");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_0_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.sendEmail();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Passwort zur\xFCck setzen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Zur\xFCck zum Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.resetPasswordForm);
      }
    }

    function ForgotPasswordComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
      }
    }

    function ForgotPasswordComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Passwort zur\xFCckgesetzt!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Wir haben Dir eine E-Mail mit Anweisungen zum Zur\xFCcksetzen Deines Passworts geschickt. Sollte diese E-Mail in 10min nicht angekommen sein, checke bitte Deinen Spam-Ordner.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Zur\xFCck zum Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(passwordService, route, router, alertService) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.passwordService = passwordService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.isEmailSend = false;
        this.showErrorMessage = false;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          var _this2 = this;

          this.errorMessage = "";
          this.showErrorMessage = false;
          this.alertService.clear();
          var emailValue = this.resetPasswordForm.value.email;
          this.passwordService.resetPassword(emailValue).subscribe(function (value) {
            _this2.isEmailSend = true;
            console.log("email successfully sent.");
          }, function (error) {
            _this2.errorMessage = error.error.message;
            _this2.showErrorMessage = true;
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_remote_password_password_service__WEBPACK_IMPORTED_MODULE_2__["PasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_alertservices_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 3,
      vars: 3,
      consts: [["id", "Resetpassword", 4, "ngIf"], [4, "ngIf"], ["id", "successmsg", 4, "ngIf"], ["id", "Resetpassword"], [1, "container"], [1, "row"], [1, "col-md-4", "col-md-offset-4"], [1, "text-center"], [1, "panel-body"], [3, "formGroup"], [1, "form-group"], ["for", "email"], ["type", "email", "formControlName", "email", "id", "email", "placeholder", "E-Mail eingeben.", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mb-2", 3, "click"], ["routerLink", "/account/login", 1, "col-md-4", "col-md-offset-4"], ["id", "successmsg"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ForgotPasswordComponent_div_0_Template, 19, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForgotPasswordComponent_div_1_Template, 3, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ForgotPasswordComponent_div_2_Template, 7, 0, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEmailSend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showErrorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmailSend);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.css']
        }]
      }], function () {
        return [{
          type: _services_remote_password_password_service__WEBPACK_IMPORTED_MODULE_2__["PasswordService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_interaction_alertservices_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/header/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/splitbutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-splitbutton.js");

    function HeaderComponent_nav_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dienstleitungen");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Preise");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "FAQ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Kontakt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_nav_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Matthew Smiaro ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Super Admin ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p-splitButton", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r1.items);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.page = '';
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = [{
            label: 'Mein Konto ',
            routerLink: ['/register']
          }, {
            separator: true
          }, {
            label: 'Einstellung',
            routerLink: ['/register']
          }, {
            separator: true
          }, {
            label: 'Ausloggen',
            routerLink: ['/register']
          }];
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        page: "page"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "header"], ["class", "header__menu-primary", 4, "ngIf"], ["class", "header__menu-primary header__menu-primary-dashboard", 4, "ngIf"], [1, "header__menu-primary"], [1, "container"], [1, "p-grid"], [1, "p-col-12"], [1, "p-d-flex", "p-flex-wrap", "p-flex-column", "p-flex-md-row", "p-jc-end", "p-ai-center"], [1, "header__menu-primary-logo-wrapper", "p-mr-md-auto"], ["src", "assets/logo.svg", "alt", "logo"], [1, "header__menu-primary-items-ul", "p-d-flex", "p-pl-0", "p-mr-md-0"], ["routerLink", "/"], [1, "header__menu-primary-btn-items", "p-mr-md-0"], ["pButton", "", "type", "button", "label", "Kostenlose Registrierung", 1, "header__menu-primary-btn-items-registrierung"], ["pButton", "", "type", "button", "label", "Einloggen", 1, "p-button-secondary"], [1, "header__menu-primary", "header__menu-primary-dashboard"], [1, "header__menu-primary-btn-items", "p-d-flex", "p-mr-md-0"], ["src", "assets/dashboard-header-img.png", "alt", "dashboard-header-img", 1, "header__menu-primary-dashboard-person-img"], [1, "header__menu-primary-dashboard__person-info-name-and-role-wrapper", "p-d-flex", "p-flex-column", "p-ml-3", "p-mr-3"], [1, "header__menu-primary-dashboard__person-info-name"], [1, "header__menu-primary-dashboard__person-info-role"], ["label", "", "icon", "pi pi-ellipsis-v", "styleClass", "p-button-secondary", 3, "model"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_nav_1_Template, 23, 0, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_nav_2_Template, 16, 1, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == "dashboard");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonDirective"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_4__["SplitButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, {
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_remote_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/remote/authenticate/authenticate.service */
    "./src/app/services/remote/authenticate/authenticate.service.ts");
    /* harmony import */


    var _header_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/header/header.component */
    "./src/app/components/header/header/header.component.ts");
    /* harmony import */


    var _carousel_section_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../carousel-section/carousel/carousel.component */
    "./src/app/components/carousel-section/carousel/carousel.component.ts");
    /* harmony import */


    var _aktuell_section_aktuell_aktuell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../aktuell-section/aktuell/aktuell.component */
    "./src/app/components/aktuell-section/aktuell/aktuell.component.ts");
    /* harmony import */


    var _subscribe_section_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../subscribe-section/subscribe/subscribe.component */
    "./src/app/components/subscribe-section/subscribe/subscribe.component.ts");
    /* harmony import */


    var _priese_section_priese_priese_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../priese-section/priese/priese.component */
    "./src/app/components/priese-section/priese/priese.component.ts");
    /* harmony import */


    var _customers_section_customers_customers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../customers-section/customers/customers.component */
    "./src/app/components/customers-section/customers/customers.component.ts");
    /* harmony import */


    var _faq_section_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../faq-section/faq/faq.component */
    "./src/app/components/faq-section/faq/faq.component.ts");
    /* harmony import */


    var _kontact_section_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../kontact-section/kontakt/kontakt.component */
    "./src/app/components/kontact-section/kontakt/kontakt.component.ts");
    /* harmony import */


    var _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../footer/footer/footer.component */
    "./src/app/components/footer/footer/footer.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(authenticateService) {
        _classCallCheck(this, HomeComponent);

        this.authenticateService = authenticateService;
        this.model = {
          left: true,
          middle: false,
          right: false
        };
        this.cardOneData = {
          image: 'assets/aktuell-img1.png',
          title: 'Job post title goes here',
          text: 'The simplest ever email marketing tool allows you to choose from a number of pre-built layouts. BoldInbox',
          buttonsInfoLabels: ['ntfemung 13 KM', 'Dauer 2 STD', 'Datyn 21.04.2020', 'Loc: Base,Switzerland'],
          buttonLink: '/register',
          buttonLabel: 'Bewerben'
        };
        this.cardTwoData = {
          image: 'assets/aktuell-img2.png',
          title: 'Job post title goes here',
          text: 'The simplest ever email marketing tool allows you to choose from a number of pre-built layouts. BoldInbox',
          buttonsInfoLabels: ['ntfemung 13 KM', 'Dauer 2 STD', 'Datyn 21.04.2020', 'Loc: Base,Switzerland'],
          buttonLink: '/register',
          buttonLabel: 'Bewerben'
        };
        this.cardThreeData = {
          image: 'assets/aktuell-img3.png',
          title: 'Job post title goes here',
          text: 'The simplest ever email marketing tool allows you to choose from a number of pre-built layouts. BoldInbox',
          buttonsInfoLabels: ['ntfemung 13 KM', 'Dauer 2 STD', 'Datyn 21.04.2020', 'Loc: Base,Switzerland'],
          buttonLink: '/register',
          buttonLabel: 'Bewerben'
        };
        this.cardPriceData = {
          image: 'assets/price-img1.jpg',
          title: 'Bis 2 Std $25 pauschal pro helfer zzgl',
          description: 'description',
          text: 'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen'
        };
        this.cardPriceDataTwo = {
          image: 'assets/price-img2.jpg',
          title: 'Ab 3 Std mind $10/std pauschal pro helfer zzgl',
          description: 'Vermittlungsgebuhr',
          text: 'The simplest ever email marketing tool allows y ou to choose from a number of pre-built layouts. BoldInbox What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley'
        };
        this.cards = [];
        this.cardsPriese = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cards = [this.cardOneData, this.cardTwoData, this.cardThreeData];
          this.cardsPriese = [this.cardPriceData, this.cardPriceDataTwo];
        }
      }, {
        key: "isUserLoggedIn",
        value: function isUserLoggedIn() {
          return this.authenticateService.isLoggedIn();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticateService.logout();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_remote_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 9,
      vars: 2,
      consts: [[3, "cardOneData"], [3, "cardTwoData"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aktuell", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-subscribe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-priese", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-faq");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-kontakt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardOneData", ctx.cards);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTwoData", ctx.cardsPriese);
        }
      },
      directives: [_header_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _carousel_section_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _aktuell_section_aktuell_aktuell_component__WEBPACK_IMPORTED_MODULE_4__["AktuellComponent"], _subscribe_section_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_5__["SubscribeComponent"], _priese_section_priese_priese_component__WEBPACK_IMPORTED_MODULE_6__["PrieseComponent"], _customers_section_customers_customers_component__WEBPACK_IMPORTED_MODULE_7__["CustomersComponent"], _faq_section_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"], _kontact_section_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_9__["KontaktComponent"], _footer_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _services_remote_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/identification/identification.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/identification/identification.component.ts ***!
    \***********************************************************************/

  /*! exports provided: IdentificationComponent */

  /***/
  function srcAppComponentsIdentificationIdentificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdentificationComponent", function () {
      return IdentificationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/interaction/announcement/announcement.service */
    "./src/app/services/interaction/announcement/announcement.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../registration/registration.component */
    "./src/app/components/registration/registration.component.ts");

    function IdentificationComponent_label_3_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ja");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IdentificationComponent_label_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IdentificationComponent_label_3_span_1_Template, 2, 0, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IdentificationComponent_label_3_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.changeIdentificationType($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var v_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", v_r6)("ngIfElse", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", v_r6)("value", v_r6);
      }
    }

    function IdentificationComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function IdentificationComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-registration");
      }
    }

    function IdentificationComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Nein");
      }
    }

    var IdentificationComponent = /*#__PURE__*/function () {
      function IdentificationComponent(_announcementService) {
        _classCallCheck(this, IdentificationComponent);

        this._announcementService = _announcementService;
        this.yesNo = [1, 0];
        this.hasAccount = 1;
        this.loading = false;
      }

      _createClass(IdentificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._announcementService.announcementCostMessage$.subscribe(function (value) {
            console.log("Data from previous component: ");
            console.log(value);
          });

          this.identificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'hasAccount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.hasAccount, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "changeIdentificationType",
        value: function changeIdentificationType(event) {
          this.hasAccount = event.target.value;
        }
      }, {
        key: "callNextComponent",
        value: function callNextComponent() {
          this.loading = true;
        }
      }]);

      return IdentificationComponent;
    }();

    IdentificationComponent.ɵfac = function IdentificationComponent_Factory(t) {
      return new (t || IdentificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]));
    };

    IdentificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IdentificationComponent,
      selectors: [["app-identification"]],
      decls: 10,
      vars: 4,
      consts: [[3, "formGroup"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["registration", ""], ["no", ""], ["name", "hasAccount1", "type", "radio", 3, "checked", "value", "change"]],
      template: function IdentificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Haben Sie bereits ein PacknMoov Konto?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IdentificationComponent_label_3_Template, 3, 4, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IdentificationComponent_div_5_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IdentificationComponent_ng_template_6_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IdentificationComponent_ng_template_8_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.identificationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yesNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasAccount == 1)("ngIfElse", _r2);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vaWRlbnRpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdentificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-identification',
          templateUrl: './identification.component.html',
          styleUrls: ['./identification.component.css']
        }]
      }], function () {
        return [{
          type: _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/kontact-section/kontakt/kontakt.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/kontact-section/kontakt/kontakt.component.ts ***!
    \*************************************************************************/

  /*! exports provided: KontaktComponent */

  /***/
  function srcAppComponentsKontactSectionKontaktKontaktComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KontaktComponent", function () {
      return KontaktComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var KontaktComponent = /*#__PURE__*/function () {
      function KontaktComponent() {
        _classCallCheck(this, KontaktComponent);
      }

      _createClass(KontaktComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KontaktComponent;
    }();

    KontaktComponent.ɵfac = function KontaktComponent_Factory(t) {
      return new (t || KontaktComponent)();
    };

    KontaktComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KontaktComponent,
      selectors: [["app-kontakt"]],
      decls: 23,
      vars: 0,
      consts: [[1, "section-kontakt"], [1, "container"], [1, "p-grid"], [1, "p-col-12", "p-d-flex", "p-jc-center", "p-jc-lg-start"], [1, "section-kontakt-title"], [1, "p-col-12", "p-d-flex", "p-jc-start", "p-flex-column", "p-flex-lg-row"], ["src", "assets/kontakt-img.png", "alt", "kontakt-img", 1, "section-kontakt__img"], [1, "section-kontakt-info", "p-d-flex", "p-flex-column", "p-ai-center", "p-ai-lg-start"], [1, "section-kontakt-info__name"], [1, "section-kontakt-info__text"], [1, "section-kontakt-info__kontakt", "p-d-flex", "p-jc-start", "p-ai-center"], ["routerLink", "/register", 1, "p-inputgroup-addon", "p-button", "p-component"], ["src", "assets/comments-icon.svg", "alt", "send-image"], [1, "section-kontakt-info__kontakt-phone-section", "p-d-flex", "p-ai-center"], [1, "section-kontakt-info__kontakt-phone-section-phone-icon"], ["src", "assets/phone-icon.svg", "alt", "send-image"], [1, "section-kontakt-info__kontakt-phone-section-text"], ["src", "assets/mail-icon.svg", "alt", "send-image"]],
      template: function KontaktComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Kontakt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Jonathan Alam K. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "+49 (0) 6210 1200 000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva29udGFjdC1zZWN0aW9uL2tvbnRha3Qva29udGFrdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KontaktComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-kontakt',
          templateUrl: './kontakt.component.html',
          styleUrls: ['./kontakt.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_LoginRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/LoginRequest */
    "./src/app/models/LoginRequest.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_remote_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/remote/authenticate/authenticate.service */
    "./src/app/services/remote/authenticate/authenticate.service.ts");
    /* harmony import */


    var _services_interaction_alertservices_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/interaction/alertservices/alert.service */
    "./src/app/services/interaction/alertservices/alert.service.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/password */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");

    function LoginComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "E-Mail-Adresse eingeben");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_12_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ung\xFCltige E-Mail-Adresse");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_12_div_1_Template, 2, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_12_div_2_Template, 2, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors.email);
      }
    }

    function LoginComponent_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwort eingeben");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_17_div_1_Template, 2, 0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
      }
    }

    function LoginComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
      }
    }

    function LoginComponent_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 22);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.showErrorMessage = false;
        this.submitted = false; // redirect to home if already logged in

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      } // convenience getter for easy access to form fields


      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
      }, {
        key: "LoginOnSubmit",
        value: function LoginOnSubmit() {
          var _this3 = this;

          this.submitted = true; // reset alerts on submit

          this.alertService.clear(); // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          var loginData = new _models_LoginRequest__WEBPACK_IMPORTED_MODULE_1__["LoginRequest"](this.f.username.value, this.f.password.value);
          console.log('LoginRequest validated and collected! READY TO SEND');
          console.log(loginData);
          this.loading = true;
          this.authenticationService.login(loginData).subscribe(function (data) {
            console.log("logged in");

            _this3.router.navigate([_this3.returnUrl]); // this.returnUrl could the replace of /


            _this3.loading = false;
          }, function (error) {
            console.log("Error handler");
            _this3.errorMessage = error.error.message;
            _this3.showErrorMessage = true;
            _this3.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_remote_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_alertservices_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 26,
      vars: 13,
      consts: [[1, "login-section"], [1, "container"], [1, "p-grid"], [1, "p-col-12"], [1, "p-col-12", "p-offset-0", "p-lg-offset-4", "p-lg-4"], [3, "formGroup", "ngSubmit"], [1, "form-group", "p-d-flex", "p-flex-column", "p-jc-center", "p-ai-center"], ["for", "email", 1, "form__label"], ["type", "text", "pInputText", "", "formControlName", "username", "id", "email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "password", 1, "form__label"], ["pPassword", "", "type", "password", "formControlName", "password", "id", "password", "type", "password", 1, "form-control", 3, "ngClass", "feedback"], [1, "p-mt-3", "p-mb-3"], ["routerLink", "/account/reset", 1, "btn", "btn-link"], [1, "form-group", "p-d-flex", "p-jc-center"], [4, "ngIf"], ["pButton", "", "label", "Anmelden", "routerLink", "/announcement/cost/stepthree", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], ["pButton", "", "routerLink", "/register", "label", "Registrieren", 1, "p-button-secondary", "p-ml-3"], [1, "invalid-feedback"], ["class", "form__label", 4, "ngIf"], [1, "form__label"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EINLOGGEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
            return ctx.LoginOnSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "E-Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 3, 2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Passwort");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginComponent_div_17_Template, 2, 1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Passwort vergessen?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 3, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, LoginComponent_span_24_Template, 1, 0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.username.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.username.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.password.errors))("feedback", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showErrorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], primeng_password__WEBPACK_IMPORTED_MODULE_8__["Password"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], primeng_button__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n  background: #00589F;\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00589F', endColorstr='#0073CF', GradientType=0);\r\n  background: linear-gradient(to bottom, #00589F 50%, #0073CF) !important;\r\n  color: white;\r\n}\r\n\r\ndiv.well[_ngcontent-%COMP%] {\r\n  height: 250px;\r\n}\r\n\r\n.Absolute-Center[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n.Absolute-Center.is-Responsive[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: 50%;\r\n  min-width: 200px;\r\n  max-width: 400px;\r\n  padding: 40px;\r\n}\r\n\r\n#logo-container[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  margin-bottom: 10px;\r\n  width: 200px;\r\n  height: 30px;\r\n  background-image: url('http://placehold.it/200x30/000000/ffffff/&text=BRAND+LOGO');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtIQUFrSDtFQUtsSCx1RUFBdUU7RUFDdkUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtGQUFrRjtBQUNwRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICMwMDU4OUY7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzAwNTg5RicsIGVuZENvbG9yc3RyPScjMDA3M0NGJywgR3JhZGllbnRUeXBlPTApO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwNTg5RiA1MCUsICMwMDczQ0YpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDA1ODlGIDUwJSwgIzAwNzNDRikgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwNTg5RiA1MCUsICMwMDczQ0YpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwNTg5RiA1MCUsICMwMDczQ0YpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwNTg5RiA1MCUsICMwMDczQ0YpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5kaXYud2VsbCB7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5cclxuLkFic29sdXRlLUNlbnRlciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5BYnNvbHV0ZS1DZW50ZXIuaXMtUmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxufVxyXG5cclxuI2xvZ28tY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL3BsYWNlaG9sZC5pdC8yMDB4MzAvMDAwMDAwL2ZmZmZmZi8mdGV4dD1CUkFORCtMT0dPJyk7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_remote_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]
        }, {
          type: _services_interaction_alertservices_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/paginator-section/paginator-section/paginator-section.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/paginator-section/paginator-section/paginator-section.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: PaginatorSectionComponent */

  /***/
  function srcAppComponentsPaginatorSectionPaginatorSectionPaginatorSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatorSectionComponent", function () {
      return PaginatorSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/paginator */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-paginator.js");
    /* harmony import */


    var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/scrollpanel */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-scrollpanel.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/splitbutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-splitbutton.js");

    function PaginatorSectionComponent_div_8_div_1_div_2_button_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 25);
      }

      if (rf & 2) {
        var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r4.button.buttonLink)("routerLink", item_r4.button.buttonUrl);
      }
    }

    function PaginatorSectionComponent_div_8_div_1_div_2_button_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 26);
      }

      if (rf & 2) {
        var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r4.buttonGray.buttonLink)("routerLink", item_r4.buttonGray.buttonUrl);
      }
    }

    function PaginatorSectionComponent_div_8_div_1_div_2_p_splitButton_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-splitButton", 27);
      }

      if (rf & 2) {
        var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", item_r4.buttonDropdown.items);
      }
    }

    function PaginatorSectionComponent_div_8_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PaginatorSectionComponent_div_8_div_1_div_2_button_16_Template, 1, 2, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PaginatorSectionComponent_div_8_div_1_div_2_button_17_Template, 1, 2, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PaginatorSectionComponent_div_8_div_1_div_2_p_splitButton_18_Template, 1, 1, "p-splitButton", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4 == null ? null : item_r4.button);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4 == null ? null : item_r4.buttonGray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4 == null ? null : item_r4.buttonDropdown);
      }
    }

    var _c0 = function _c0(a1) {
      return {
        width: "100%",
        height: a1
      };
    };

    function PaginatorSectionComponent_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-scrollPanel", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginatorSectionComponent_div_8_div_1_div_2_Template, 19, 8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.scrollPanel));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
      }
    }

    function PaginatorSectionComponent_div_8_div_2_div_1_button_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 25);
      }

      if (rf & 2) {
        var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r13.button.buttonLink)("routerLink", item_r13.button.buttonUrl);
      }
    }

    function PaginatorSectionComponent_div_8_div_2_div_1_button_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 26);
      }

      if (rf & 2) {
        var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", item_r13.buttonGray.buttonLink)("routerLink", item_r13.buttonGray.buttonUrl);
      }
    }

    function PaginatorSectionComponent_div_8_div_2_div_1_p_splitButton_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-splitButton", 27);
      }

      if (rf & 2) {
        var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", item_r13.buttonDropdown.items);
      }
    }

    function PaginatorSectionComponent_div_8_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PaginatorSectionComponent_div_8_div_2_div_1_button_16_Template, 1, 2, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PaginatorSectionComponent_div_8_div_2_div_1_button_17_Template, 1, 2, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PaginatorSectionComponent_div_8_div_2_div_1_p_splitButton_18_Template, 1, 1, "p-splitButton", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r13.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13 == null ? null : item_r13.button);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13 == null ? null : item_r13.buttonGray);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13 == null ? null : item_r13.buttonDropdown);
      }
    }

    function PaginatorSectionComponent_div_8_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginatorSectionComponent_div_8_div_2_div_1_Template, 19, 8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
      }
    }

    function PaginatorSectionComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginatorSectionComponent_div_8_div_1_Template, 3, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginatorSectionComponent_div_8_div_2_Template, 2, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scrollPanel !== null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.scrollPanel == null);
      }
    }

    var _c1 = function _c1(a0, a1) {
      return {
        "p-mr-3": a0,
        "p-mr-0": a1
      };
    };

    var PaginatorSectionComponent = /*#__PURE__*/function () {
      function PaginatorSectionComponent() {
        _classCallCheck(this, PaginatorSectionComponent);

        this.scrollPanel = null;
        this.rows = 10;
        this.first = 0;
        this.displayPages = 10;
        this.items = [];
        this.itemTitle = 'title';
        this.titleNumber = 1;
      }

      _createClass(PaginatorSectionComponent, [{
        key: "addItems",
        value: function addItems() {
          this.itemStart = this.first;
          this.itemsFinish = this.first + this.displayPages;

          if (this.itemsFinish > this.totalRecords) {
            this.itemsFinish = this.totalRecords;
          }

          var i;
          this.items = [];

          for (i = this.itemStart; i < this.itemsFinish; i++) {
            this.items.push(this.data[i]);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.totalRecords = this.data.length;
          this.addItems();
        }
      }, {
        key: "onPageChange",
        value: function onPageChange(event) {
          this.first = event.first;
          this.addItems();
        }
      }]);

      return PaginatorSectionComponent;
    }();

    PaginatorSectionComponent.ɵfac = function PaginatorSectionComponent_Factory(t) {
      return new (t || PaginatorSectionComponent)();
    };

    PaginatorSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginatorSectionComponent,
      selectors: [["app-paginator-section"]],
      inputs: {
        paginationData: "paginationData",
        scrollPanel: "scrollPanel",
        headerData: "headerData",
        data: "data"
      },
      decls: 10,
      vars: 12,
      consts: [[1, "paginator-section"], [1, "p-grid"], [1, "p-col-12"], [1, "p-d-flex", "p-jc-end", "paginator-section__header-data", "p-mb-3"], [1, "paginator-section__header-data-title", "p-mr-3", "p-mr-auto"], ["pButton", "", "type", "button", 1, "paginator-section__item-button", "p-button-secondary", "p-mr-3", "paginator-section__header-data__item-button-one", 3, "label"], ["pButton", "", "type", "button", 1, "paginator-section__item-button", "paginator-section__header-data__item-button-two", 3, "label", "ngClass"], [4, "ngIf"], [3, "rows", "totalRecords", "pageLinkSize", "first", "onPageChange"], ["class", "p-d-flex p-flex-column", 4, "ngIf"], [1, "p-d-flex", "p-flex-column"], [1, ""], [4, "ngFor", "ngForOf"], [1, "p-d-flex", "paginator-section__item-wrapper", "p-flex-column", "p-flex-md-row", "p-ai-center", "p-ai-md-start"], ["alt", "pagination-img", 1, "paginator-section__item-img", 3, "src"], [1, "paginator-section__user-info", "p-d-flex", "p-flex-column", "p-ml-3", "p-ai-center", "p-ai-md-start"], [1, "paginator-section__user-info-title"], [1, "p-d-flex", "paginator-section__user-info-data"], ["src", "assets/map.svg", "alt", "img", 1, "p-mr-1"], [1, "p-mr-3"], ["src", "assets/time.svg", "alt", "img", 1, "p-mr-1"], ["src", "assets/date.svg", "alt", "img", 1, "p-mr-1"], ["pButton", "", "type", "button", "class", "paginator-section__item-button p-button-help", 3, "label", "routerLink", 4, "ngIf"], ["pButton", "", "type", "button", "class", "paginator-section__item-button paginator-section__item-button-info p-button-info", 3, "label", "routerLink", 4, "ngIf"], ["label", "Ausw\xE4hlen", "styleClass", "paginator-section__item-button p-button-help dropdown__button-icon", 3, "model", 4, "ngIf"], ["pButton", "", "type", "button", 1, "paginator-section__item-button", "p-button-help", 3, "label", "routerLink"], ["pButton", "", "type", "button", 1, "paginator-section__item-button", "paginator-section__item-button-info", "p-button-info", 3, "label", "routerLink"], ["label", "Ausw\xE4hlen", "styleClass", "paginator-section__item-button p-button-help dropdown__button-icon", 3, "model"]],
      template: function PaginatorSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PaginatorSectionComponent_div_8_Template, 3, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-paginator", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function PaginatorSectionComponent_Template_p_paginator_onPageChange_9_listener($event) {
            return ctx.onPageChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.headerData[0].title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.headerData[0].buttonOneLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.headerData[0].buttonTwoLink)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, ctx.scrollPanel !== null, ctx.scrollPanel == null));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.rows)("totalRecords", ctx.totalRecords)("pageLinkSize", ctx.displayPages)("first", ctx.first);
        }
      },
      directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["Paginator"], primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_4__["ScrollPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__["SplitButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnaW5hdG9yLXNlY3Rpb24vcGFnaW5hdG9yLXNlY3Rpb24vcGFnaW5hdG9yLXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatorSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-paginator-section',
          templateUrl: './paginator-section.component.html',
          styleUrls: ['./paginator-section.component.scss']
        }]
      }], function () {
        return [];
      }, {
        paginationData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        headerData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/payment/payment.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/payment/payment.component.ts ***!
    \*********************************************************/

  /*! exports provided: PaymentComponent */

  /***/
  function srcAppComponentsPaymentPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentComponent", function () {
      return PaymentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaymentComponent = /*#__PURE__*/function () {
      function PaymentComponent() {
        _classCallCheck(this, PaymentComponent);
      }

      _createClass(PaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentComponent;
    }();

    PaymentComponent.ɵfac = function PaymentComponent_Factory(t) {
      return new (t || PaymentComponent)();
    };

    PaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaymentComponent,
      selectors: [["app-payment"]],
      decls: 2,
      vars: 0,
      template: function PaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "payment works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-payment',
          templateUrl: './payment.component.html',
          styleUrls: ['./payment.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/priese-section/priese/priese.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/priese-section/priese/priese.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PrieseComponent */

  /***/
  function srcAppComponentsPrieseSectionPriesePrieseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrieseComponent", function () {
      return PrieseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _card_card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../card/card/card.component */
    "./src/app/components/card/card/card.component.ts");

    function PrieseComponent_div_0_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cardPrice_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cardTwoData", cardPrice_r2);
      }
    }

    function PrieseComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Priese");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All the available jobs in the market will show here and user can click view more to see All job list from here!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PrieseComponent_div_0_div_9_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cardTwoData);
      }
    }

    var PrieseComponent = /*#__PURE__*/function () {
      function PrieseComponent() {
        _classCallCheck(this, PrieseComponent);

        this.cardTwoData = null;
      }

      _createClass(PrieseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.cardTwoData);
        }
      }]);

      return PrieseComponent;
    }();

    PrieseComponent.ɵfac = function PrieseComponent_Factory(t) {
      return new (t || PrieseComponent)();
    };

    PrieseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrieseComponent,
      selectors: [["app-priese"]],
      inputs: {
        cardTwoData: "cardTwoData"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "priese-section", 4, "ngIf"], [1, "priese-section"], [1, "container", "priese-section__content-container"], [1, "p-grid"], [1, "p-col-12"], [1, "section-title-text"], ["class", "p-col-12 p-lg-6", 4, "ngFor", "ngForOf"], [1, "p-col-12", "priese-section__border-top", "p-pt-6", "p-pb-6"], [1, "p-d-flex"], [1, "p-inputgroup", "p-inputgroup-custom", "p-jc-start"], ["pButton", "", "type", "button", "label", "Rochnen", "routerLink", "/register", 1, "p-button-secondary", "p-inputgroup-custom-btn"], [1, "p-inputgroup-addon", "p-button", "p-component", "p-inputgroup-custom-btn-arrow-icon"], [1, "pi", "pi-chevron-right"], ["pButton", "", "type", "button", "label", "Anzeige jetzt aufgeben", "routerLink", "/register", 1, "p-button-secondary", "p-inputgroup-custom-btn", "p-ml-5"], [1, "p-col-12", "p-lg-6"], ["cardNumber", "2", 3, "cardTwoData"]],
      template: function PrieseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PrieseComponent_div_0_Template, 20, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardTwoData !== null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _card_card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpZXNlLXNlY3Rpb24vcHJpZXNlL3ByaWVzZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrieseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-priese',
          templateUrl: './priese.component.html',
          styleUrls: ['./priese.component.scss']
        }]
      }], function () {
        return [];
      }, {
        cardTwoData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/published/published.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/published/published.component.ts ***!
    \*************************************************************/

  /*! exports provided: PublishedComponent */

  /***/
  function srcAppComponentsPublishedPublishedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublishedComponent", function () {
      return PublishedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PublishedComponent = /*#__PURE__*/function () {
      function PublishedComponent() {
        _classCallCheck(this, PublishedComponent);
      }

      _createClass(PublishedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PublishedComponent;
    }();

    PublishedComponent.ɵfac = function PublishedComponent_Factory(t) {
      return new (t || PublishedComponent)();
    };

    PublishedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublishedComponent,
      selectors: [["app-published"]],
      decls: 2,
      vars: 0,
      template: function PublishedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "published works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVibGlzaGVkL3B1Ymxpc2hlZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublishedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-published',
          templateUrl: './published.component.html',
          styleUrls: ['./published.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/registration/registration.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/registration/registration.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppComponentsRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_RegistrationRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/RegistrationRequest */
    "./src/app/models/RegistrationRequest.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_ActivationType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/ActivationType */
    "./src/app/models/ActivationType.ts");
    /* harmony import */


    var _services_remote_registration_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/remote/registration/registration.service */
    "./src/app/services/remote/registration/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_remote_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/remote/authenticate/authenticate.service */
    "./src/app/services/remote/authenticate/authenticate.service.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! primeng/password */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-password.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");

    function RegistrationComponent_small_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bitte Geben Sie Ihre Vor- und Nachname ein.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_small_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bitte Geben sie eine g\xFCltige Email-Adresse ein.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_small_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bitte Geben sie eine g\xFCltige Handynummer ein.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_small_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwort muss aus mindestens 6 Characters, 1 Zahl, 1 Klein- und 1 Gro\xDFbuchstabe bestehen.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 29);
      }
    }

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(registrationService, router, authenticateService) {
        _classCallCheck(this, RegistrationComponent);

        this.registrationService = registrationService;
        this.router = router;
        this.authenticateService = authenticateService;
        this.submitting = false; // redirect to home if already logged in

        if (authenticateService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'fullName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.fullName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]),
            'emailAddress': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.emailAddress, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)]),
            'mobileNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.mobileNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\d/)]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\d/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[a-z]/), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[A-Z]/)]),
            'consentApproved': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.consentApproved, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue])
          }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        }
      }, {
        key: "submitRegistration",
        value: function submitRegistration() {
          var _this4 = this;

          console.log("User has sent registration data to the server.");
          this.submitting = true;
          var registration = new _models_RegistrationRequest__WEBPACK_IMPORTED_MODULE_1__["RegistrationRequest"](this.registrationForm.value.consentApproved, this.registrationForm.value.fullName, this.registrationForm.value.emailAddress, _models_ActivationType__WEBPACK_IMPORTED_MODULE_3__["ActivationType"].EMAIL_OTP, this.registrationForm.value.mobileNumber, this.registrationForm.value.password);
          console.log("data sent: ");
          console.log(registration);
          return this.registrationService.sendRegistration(registration).subscribe(function (value) {
            _this4.submitting = false;
            console.log("data successfully received. ");

            _this4.router.navigate(['/account', 'activate'], {
              queryParams: {
                email: value.email_address
              }
            });
          }, function (error) {
            _this4.submitting = false;
            console.log("request failure: ");
            console.log(error); //this.router.navigate(['/']);
          });
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_remote_registration_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_remote_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticateService"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 38,
      vars: 8,
      consts: [[1, "register-section"], [1, "container"], [1, "p-grid"], [1, "p-col-12"], [1, "p-col-12", "p-offset-0", "p-lg-offset-4", "p-lg-4"], [3, "formGroup"], [1, "form-group", "p-d-flex", "p-flex-column", "p-jc-center", "p-ai-center"], ["for", "fullName", 1, "form__label"], ["pInputText", "", "aria-describedby", "fullNameHelp", "formControlName", "fullName", "id", "fullName", "placeholder", "", "type", "text", 1, "form-control"], ["class", "form-text text-muted", "id", "fullNameHelp", 4, "ngIf"], ["for", "emailAddress", 1, "form__label"], ["pInputText", "", "aria-describedby", "emailHelp", "formControlName", "emailAddress", "id", "emailAddress", "placeholder", "", "type", "email", 1, "form-control"], ["class", "form-text text-muted", "id", "emailHelp", 4, "ngIf"], ["for", "mobileNumber", 1, "form__label"], ["pInputText", "", "aria-describedby", "mobileNumberHelp", "formControlName", "mobileNumber", "id", "mobileNumber", "placeholder", "", "type", "text", 1, "form-control"], ["class", "form-text text-muted", "id", "mobileNumberHelp", 4, "ngIf"], ["for", "password", 1, "form__label"], ["pPassword", "", "aria-describedby", "passwordHelp", "formControlName", "password", "id", "password", "placeholder", "", "type", "password", 1, "form-control", 3, "feedback"], ["class", "form-text text-muted", "id", "passwordHelp", 4, "ngIf"], [1, "form-group", "p-field-checkbox"], ["formControlName", "consentApproved", "binary", "true", "inputId", "consentApproved", "type", "checkbox", 1, "form-check-input"], ["for", "consentApproved"], ["pButton", "", "type", "button", "label", "Submit", 3, "disabled", "click"], ["aria-hidden", "true", "class", "spinner-border spinner-border-sm", "role", "status", 4, "ngIf"], ["routerLink", "/account/login", "type", "button", 1, "btn", "btn-link"], ["id", "fullNameHelp", 1, "form-text", "text-muted"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["id", "mobileNumberHelp", 1, "form-text", "text-muted"], ["id", "passwordHelp", 1, "form-text", "text-muted"], ["aria-hidden", "true", "role", "status", 1, "spinner-border", "spinner-border-sm"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "REGISTRIERUNG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Vor- und Nachname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegistrationComponent_small_12_Template, 2, 0, "small", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email Adresse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegistrationComponent_small_17_Template, 2, 0, "small", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Mobile Nummer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegistrationComponent_small_22_Template, 2, 0, "small", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Passwort");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegistrationComponent_small_27_Template, 2, 0, "small", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "p-checkbox", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ich akzeptiere die allgemeine Gesch\xE4ftsbedingungen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_button_click_32_listener() {
            return ctx.submitRegistration();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RegistrationComponent_span_33_Template, 1, 0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Haben bereits ein Konto? Hier k\xF6nnen Sie sich direkt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "anmelden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationForm.get("fullName").invalid && ctx.registrationForm.get("fullName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationForm.get("emailAddress").invalid && ctx.registrationForm.get("emailAddress").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationForm.get("mobileNumber").invalid && ctx.registrationForm.get("mobileNumber").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("feedback", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registrationForm.get("password").invalid && ctx.registrationForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registrationForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitting);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], primeng_password__WEBPACK_IMPORTED_MODULE_9__["Password"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], primeng_button__WEBPACK_IMPORTED_MODULE_11__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: ["small.ng-invalid.ng-touched[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n.form-text[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRjtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn0qL1xyXG5zbWFsbC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLXRleHQgLnRleHQtbXV0ZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.css']
        }]
      }], function () {
        return [{
          type: _services_remote_registration_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _services_remote_authenticate_authenticate_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/search-section/search-section/search-section.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/search-section/search-section/search-section.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: SearchSectionComponent */

  /***/
  function srcAppComponentsSearchSectionSearchSectionSearchSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchSectionComponent", function () {
      return SearchSectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");

    var SearchSectionComponent = /*#__PURE__*/function () {
      function SearchSectionComponent() {
        _classCallCheck(this, SearchSectionComponent);
      }

      _createClass(SearchSectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchSectionComponent;
    }();

    SearchSectionComponent.ɵfac = function SearchSectionComponent_Factory(t) {
      return new (t || SearchSectionComponent)();
    };

    SearchSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchSectionComponent,
      selectors: [["app-search-section"]],
      decls: 11,
      vars: 0,
      consts: [[1, "search-section"], [1, "container"], [1, "p-grid"], [1, "p-col-12"], [1, "p-inputgroup", "p-jc-start", "p-jc-xl-start", "search-section-wrapper"], [1, "p-inputgroup", "footer__section-p-inputgroup", "p-jc-center", "p-jc-xl-start", "p-mb-0"], [1, "p-input-icon-left", "search-section-input-icon-left-wrapper"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Search here somthing"], [1, "p-inputgroup-addon", "p-button", "p-component", "p-button-secondary"], [1, "pi", "pi-bars"]],
      template: function SearchSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__["InputText"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXNlY3Rpb24vc2VhcmNoLXNlY3Rpb24vc2VhcmNoLXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-section',
          templateUrl: './search-section.component.html',
          styleUrls: ['./search-section.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/step-five/step-five/step-five.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/step-five/step-five/step-five.component.ts ***!
    \***********************************************************************/

  /*! exports provided: StepFiveComponent */

  /***/
  function srcAppComponentsStepFiveStepFiveStepFiveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepFiveComponent", function () {
      return StepFiveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/steps */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-steps.js");

    var StepFiveComponent = /*#__PURE__*/function () {
      function StepFiveComponent() {
        _classCallCheck(this, StepFiveComponent);

        this.activeIndex = 0;
      }

      _createClass(StepFiveComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.items = [{
            label: 'Personal',
            command: function command(event) {
              _this5.activeIndex = 0;
              alert('clicked');
            }
          }, {
            label: 'Seat',
            command: function command(event) {
              _this5.activeIndex = 1;
            }
          }, {
            label: 'Payment',
            command: function command(event) {
              _this5.activeIndex = 2;
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this5.activeIndex = 3;
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this5.activeIndex = 4;
            }
          }];
        }
      }]);

      return StepFiveComponent;
    }();

    StepFiveComponent.ɵfac = function StepFiveComponent_Factory(t) {
      return new (t || StepFiveComponent)();
    };

    StepFiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StepFiveComponent,
      selectors: [["app-step-five"]],
      decls: 5,
      vars: 3,
      consts: [[1, "steps", "steps__step-five"], [1, "container"], [1, "p-grid"], [1, "p-col-12"], [3, "model", "activeIndex", "readonly", "activeIndexChange"]],
      template: function StepFiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-steps", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIndexChange", function StepFiveComponent_Template_p_steps_activeIndexChange_4_listener($event) {
            return ctx.activeIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items)("activeIndex", ctx.activeIndex)("readonly", true);
        }
      },
      directives: [primeng_steps__WEBPACK_IMPORTED_MODULE_1__["Steps"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RlcC1maXZlL3N0ZXAtZml2ZS9zdGVwLWZpdmUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepFiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-step-five',
          templateUrl: './step-five.component.html',
          styleUrls: ['./step-five.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/step-four/step-four/step-four.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/step-four/step-four/step-four.component.ts ***!
    \***********************************************************************/

  /*! exports provided: StepFourComponent */

  /***/
  function srcAppComponentsStepFourStepFourStepFourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepFourComponent", function () {
      return StepFourComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/steps */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-steps.js");

    var StepFourComponent = /*#__PURE__*/function () {
      function StepFourComponent() {
        _classCallCheck(this, StepFourComponent);

        this.activeIndex = 0;
      }

      _createClass(StepFourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.items = [{
            label: 'Personal',
            command: function command(event) {
              _this6.activeIndex = 0;
              alert('clicked');
            }
          }, {
            label: 'Seat',
            command: function command(event) {
              _this6.activeIndex = 1;
            }
          }, {
            label: 'Payment',
            command: function command(event) {
              _this6.activeIndex = 2;
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this6.activeIndex = 3;
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this6.activeIndex = 4;
            }
          }];
        }
      }]);

      return StepFourComponent;
    }();

    StepFourComponent.ɵfac = function StepFourComponent_Factory(t) {
      return new (t || StepFourComponent)();
    };

    StepFourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StepFourComponent,
      selectors: [["app-step-four"]],
      decls: 5,
      vars: 3,
      consts: [[1, "steps", "steps__step-four"], [1, "container"], [1, "p-grid"], [1, "p-col-12"], [3, "model", "activeIndex", "readonly", "activeIndexChange"]],
      template: function StepFourComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-steps", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIndexChange", function StepFourComponent_Template_p_steps_activeIndexChange_4_listener($event) {
            return ctx.activeIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items)("activeIndex", ctx.activeIndex)("readonly", true);
        }
      },
      directives: [primeng_steps__WEBPACK_IMPORTED_MODULE_1__["Steps"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RlcC1mb3VyL3N0ZXAtZm91ci9zdGVwLWZvdXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepFourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-step-four',
          templateUrl: './step-four.component.html',
          styleUrls: ['./step-four.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/step-one/step-one/step-one.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/step-one/step-one/step-one.component.ts ***!
    \********************************************************************/

  /*! exports provided: StepOneComponent */

  /***/
  function srcAppComponentsStepOneStepOneStepOneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepOneComponent", function () {
      return StepOneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_AnnouncementCost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../models/AnnouncementCost */
    "./src/app/models/AnnouncementCost.ts");
    /* harmony import */


    var _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/interaction/announcement/announcement.service */
    "./src/app/services/interaction/announcement/announcement.service.ts");
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/steps */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-steps.js");
    /* harmony import */


    var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/inputnumber */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputnumber.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var StepOneComponent = /*#__PURE__*/function () {
      function StepOneComponent(_announcementService) {
        _classCallCheck(this, StepOneComponent);

        this._announcementService = _announcementService;
        this.activeIndex = 0;
        this.loading = false;
        this.workingHours = 1;
        this.numberOfHelpers = 1;
        this.hoursPerDay = 10;
        this.hourlyWorkersRate = 10;
        this.twoHourWorkerRate = 25;
      }

      _createClass(StepOneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.items = [{
            label: 'Personal',
            command: function command(event) {
              _this7.activeIndex = 0;
              alert('clicked');
            }
          }, {
            label: 'Seat',
            command: function command(event) {
              _this7.activeIndex = 1;
            }
          }, {
            label: 'Payment',
            command: function command(event) {
              _this7.activeIndex = 2;
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this7.activeIndex = 3;
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this7.activeIndex = 4;
            }
          }];
          var costDetails = localStorage.getItem("fees-step-1");

          if (costDetails) {
            var cost = JSON.parse(costDetails);
            console.log("restored cost data");
            console.log(cost);
            this.workingHours = cost["working_hours"];
            this.numberOfHelpers = cost["helper_number"];
          }

          this.costForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'numberOfHelpers': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.numberOfHelpers, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(250)]),
            'workingHours': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.workingHours, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(7200)])
          });
        }
      }, {
        key: "totalCost",
        value: function totalCost() {
          return this.totalWorkersFees() + this.totalServiceFees();
        }
      }, {
        key: "totalWorkersFees",
        value: function totalWorkersFees() {
          if (this.costForm.value.workingHours <= 2) {
            return this.costForm.value.numberOfHelpers * this.twoHourWorkerRate;
          }

          var fees = this.costForm.value.workingHours * this.numberOfHelpers * this.hourlyWorkersRate;
          return parseFloat(fees.toFixed(2));
        }
      }, {
        key: "totalServiceFees",
        value: function totalServiceFees() {
          var fees = this.costForm.value.numberOfHelpers * this.pricePerHour() * this.numberOfDays();
          return parseFloat(fees.toFixed(2));
        }
      }, {
        key: "pricePerHour",
        value: function pricePerHour() {
          return Math.max(this.hoursPerDay, 20 - this.costForm.value.numberOfHelpers);
        }
      }, {
        key: "numberOfDays",
        value: function numberOfDays() {
          return Math.max(1, this.costForm.value.workingHours / this.hoursPerDay);
        }
      }, {
        key: "callNextComponent",
        value: function callNextComponent() {
          console.log("callNextComponent() ");
          this.loading = true;
          var costDetails = new _models_AnnouncementCost__WEBPACK_IMPORTED_MODULE_2__["AnnouncementCost"](this.costForm.value.numberOfHelpers, this.costForm.value.workingHours, this.totalCost(), this.totalWorkersFees(), this.totalServiceFees());
          console.log(typeof costDetails);
          localStorage.setItem('fees-step-1', JSON.stringify(costDetails));
          console.log(costDetails);
          console.log("Data emitted ");

          this._announcementService.emitAnnouncementCost(costDetails);

          this.loading = false;
        }
      }]);

      return StepOneComponent;
    }();

    StepOneComponent.ɵfac = function StepOneComponent_Factory(t) {
      return new (t || StepOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_3__["AnnouncementService"]));
    };

    StepOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StepOneComponent,
      selectors: [["app-step-one"]],
      decls: 22,
      vars: 16,
      consts: [[1, "steps", "steps__step-one"], [1, "container"], [1, "p-grid"], [1, "p-col-12"], [3, "model", "activeIndex", "readonly", "activeIndexChange"], [3, "formGroup"], [1, "p-d-flex", "p-flex-wrap", "p-flex-start", "p-flex-row", "p-flex-wrap", "steps__step-one-form-wrapper", "p-mt-5"], [1, "p-d-flex", "p-flex-column", "p-mr-5", "p-mb-3"], ["for", "numberOfHelpers", 1, "p-mb-3", "steps__label"], ["aria-describedby", "helperNumberHelp", "id", "numberOfHelpers", "formControlName", "numberOfHelpers", "mode", "decimal", "inputId", "withoutgrouping", 1, "steps__input", 3, "ngModel", "showButtons", "useGrouping", "min", "ngModelChange"], ["for", "workingHours", 1, "p-mb-3", "steps__label"], ["aria-describedby", "workingTimeHelp", "id", "workingHours", "formControlName", "workingHours", "mode", "decimal", "inputId", "withoutgrouping", 3, "ngModel", "showButtons", "useGrouping", "min", "ngModelChange"], ["role", "status", "pButton", "", "routerLink", "/announcement/cost/steptwo", "label", "Weiter", 3, "disabled", "click"], [1, "small"]],
      template: function StepOneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-steps", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIndexChange", function StepOneComponent_Template_p_steps_activeIndexChange_4_listener($event) {
            return ctx.activeIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Wie viel Helfer ben\xF6tigen Sie?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-inputNumber", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StepOneComponent_Template_p_inputNumber_ngModelChange_10_listener($event) {
            return ctx.numberOfHelpers = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wie viel Arbeitstunde sch\xE4tzen Sie?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-inputNumber", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StepOneComponent_Template_p_inputNumber_ngModelChange_14_listener($event) {
            return ctx.workingHours = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepOneComponent_Template_button_click_15_listener() {
            return ctx.callNextComponent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items)("activeIndex", ctx.activeIndex)("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.costForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.numberOfHelpers)("showButtons", false)("useGrouping", false)("min", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.workingHours)("showButtons", false)("useGrouping", false)("min", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.costForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Sie zahlen insgesamt ", ctx.totalCost(), " \u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Arbeitlohn: ", ctx.totalWorkersFees(), " \u20AC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Vermittlungsgeb\xFChren: ", ctx.totalServiceFees(), " \u20AC");
        }
      },
      directives: [primeng_steps__WEBPACK_IMPORTED_MODULE_4__["Steps"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], primeng_inputnumber__WEBPACK_IMPORTED_MODULE_5__["InputNumber"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RlcC1vbmUvc3RlcC1vbmUvc3RlcC1vbmUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-step-one',
          templateUrl: './step-one.component.html',
          styleUrls: ['./step-one.component.scss']
        }]
      }], function () {
        return [{
          type: _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_3__["AnnouncementService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/step-three/step-three/step-three.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/step-three/step-three/step-three.component.ts ***!
    \**************************************************************************/

  /*! exports provided: StepThreeComponent */

  /***/
  function srcAppComponentsStepThreeStepThreeStepThreeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepThreeComponent", function () {
      return StepThreeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/steps */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-steps.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/calendar */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-calendar.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_inputmask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/inputmask */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputmask.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/inputtextarea */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtextarea.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-radiobutton.js");

    function StepThreeComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-checkbox", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r10)("inputId", category_r10.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", category_r10.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r10.name);
      }
    }

    function StepThreeComponent_img_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
      }
    }

    function StepThreeComponent_img_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);
      }
    }

    function StepThreeComponent_img_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
      }
    }

    function StepThreeComponent_img_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);
      }
    }

    function StepThreeComponent_img_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
      }
    }

    function StepThreeComponent_img_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);
      }
    }

    function StepThreeComponent_img_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 40);
      }
    }

    function StepThreeComponent_img_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 41);
      }
    }

    function StepThreeComponent_div_63_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-radioButton", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StepThreeComponent_div_63_Template_p_radioButton_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.selectedCategory = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r11 = ctx.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r11)("ngModel", ctx_r9.selectedCategory);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", category_r11.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r11.name);
      }
    }

    var StepThreeComponent = /*#__PURE__*/function () {
      function StepThreeComponent() {
        _classCallCheck(this, StepThreeComponent);

        this.streetAddress = '';
        this.houseNumber = '';
        this.postalCode = '';
        this.city = '';
        this.activeIndex = 2;
        this.selectedCategoryTwo = null;
        this.selectedCategoryThree = null;
        this.categories = [{
          name: 'Mobeliauf / abbau',
          key: '1'
        }, {
          name: 'Tragearbeiten',
          key: '2'
        }, {
          name: 'Umzvgafahrer',
          key: '3'
        }, {
          name: 'Ver Und Entpachen',
          key: '4'
        }, {
          name: 'Montagesrvice',
          key: '5'
        }, {
          name: 'LKW Be/ Enladen',
          key: '6'
        }];
        this.categoriesTwo = [{
          name: 'Ver Und Entpachen',
          key: '1'
        }, {
          name: 'Montagesrvice',
          key: '2'
        }, {
          name: 'LKW Be/ Enladen',
          key: '3'
        }];
        this.categoriesThree = [{
          name: 'Ja bitte',
          key: '1'
        }, {
          name: 'Nein , ich wahle selbst',
          key: '2'
        }];
        this.val = '12:24';
      }

      _createClass(StepThreeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.selectedCategory = this.categories[0];
          this.selectedCategoryTwo = this.categoriesTwo[0];
          this.selectedCategoryThree = this.categoriesTwo[0];
          this.items = [{
            label: 'Personal',
            command: function command(event) {
              _this8.activeIndex = 0;
              alert('clicked');
            }
          }, {
            label: 'Seat',
            command: function command(event) {
              _this8.activeIndex = 1;
            }
          }, {
            label: 'Payment',
            command: function command(event) {
              _this8.activeIndex = 2;
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this8.activeIndex = 3;
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this8.activeIndex = 4;
            }
          }];
        }
      }, {
        key: "onClickBtn",
        value: function onClickBtn() {
          alert('button is clicked');
        }
      }, {
        key: "onClickTime",
        value: function onClickTime() {
          console.log(this.val);
        }
      }]);

      return StepThreeComponent;
    }();

    StepThreeComponent.ɵfac = function StepThreeComponent_Factory(t) {
      return new (t || StepThreeComponent)();
    };

    StepThreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StepThreeComponent,
      selectors: [["app-step-three"]],
      decls: 77,
      vars: 20,
      consts: [[1, "steps", "steps__step-three"], [1, "container"], [1, "p-grid"], [1, "p-col-12"], [3, "model", "activeIndex", "readonly", "activeIndexChange"], [1, "steps__step-three-wrapper", "p-px-5", "p-pb-5", "p-mt-6"], [1, "form__label"], [1, "p-d-flex", "p-flex-column", "p-flex-md-row", "p-flex-wrap"], ["class", "p-field-checkbox p-mr-3", 4, "ngFor", "ngForOf"], [1, "p-d-flex", "p-flex-wrap"], [1, "p-d-flex", "p-jc-center", "p-mt-3", "p-mr-4"], ["src", "assets/calendar-icon.svg", "alt", "send-image", 1, "steps__step-three-image-on-left-img-border"], [3, "ngModel", "ngModelChange"], [1, "p-d-flex", "p-jc-center", "p-mt-3"], ["src", "assets/time-icon.svg", "alt", "send-image", 1, "steps__step-three-image-on-left-img-border"], ["mask", "99:99", "name", "stopTime", "tabindex", "4", "placeholder", "hh:mm", "slotChar", "hh:mm", 3, "ngModel", "ngModelChange"], ["type", "time", "pInputText", "", 1, "steps__step-three-adderss-section-input"], [1, "p-d-flex", "p-jc-start", "p-mt-3", "steps__step-three-adderss-section", "p-mr-0", "p-mr-md-3"], ["type", "text", "pInputText", "", 1, "steps__step-three-adderss-section-input", 3, "ngModel", "ngModelChange"], ["src", "assets/step-not-active-icon.svg", "alt", "send-image", "class", "steps__step-three-image-on-left", 4, "ngIf"], ["src", "assets/step-active-icon.svg", "alt", "send-image", "class", "steps__step-three-image-on-left", 4, "ngIf"], [1, "p-d-flex", "p-jc-start", "p-mt-3", "steps__step-three-adderss-section"], [1, "p-d-flex", "p-jc-start", "p-mt-3", "p-mr-0", "p-mr-md-3", "steps__step-three-postal-code-section"], ["type", "text", "pInputText", "", 3, "ngModel", "ngModelChange"], [1, "p-d-flex", "p-jc-start", "p-mt-3", "steps__step-three-city-section"], [1, "p-d-flex", "p-mt-5", "p-mb-5"], [1, "p-d-flex", "p-jc-center", "p-ai-center", "steps", "steps__step-three__button-full-width", 3, "click"], ["src", "assets/plus-icon.svg", "alt", "send-image", 1, "steps__step-three-image-on-left"], [1, "p-d-flex", "p-flex-column", "p-flex-md-row"], ["class", "p-field-checkbox p-d-inline-flex p-mr-6", 4, "ngFor", "ngForOf"], ["pInputTextarea", ""], [1, "p-d-flex", "p-flex-column", "p-jc-center", "p-ai-center"], [1, "form__label", "p-mb-2", "p-mt-6"], [1, "form__text"], [1, "p-d-flex", "p-flex-start"], ["pButton", "", "routerLink", "/announcement/cost/stepfour", "label", "Weiter", 1, "p-button-help", "p-button-lg", "p-px-6"], ["pButton", "", "routerLink", "/announcement/cost/steptwo", "label", "Weiter", 1, "p-ml-auto", "p-button-lg", "p-px-6"], [1, "p-field-checkbox", "p-mr-3"], ["name", "group2", 3, "value", "inputId"], [3, "for"], ["src", "assets/step-not-active-icon.svg", "alt", "send-image", 1, "steps__step-three-image-on-left"], ["src", "assets/step-active-icon.svg", "alt", "send-image", 1, "steps__step-three-image-on-left"], [1, "p-field-checkbox", "p-d-inline-flex", "p-mr-6"], ["inpudIt", "category.key", "name", "category", 3, "value", "ngModel", "ngModelChange"]],
      template: function StepThreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-steps", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIndexChange", function StepThreeComponent_Template_p_steps_activeIndexChange_4_listener($event) {
            return ctx.activeIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Welche Tatigloeiten treffen zu ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StepThreeComponent_div_9_Template, 4, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wann sollen die helfer eintreffen?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-calendar", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StepThreeComponent_Template_p_calendar_ngModelChange_17_listener($event) {
            return ctx.date1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p-inputMask", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StepThreeComponent_Template_p_inputMask_ngModelChange_20_listener($event) {
            return ctx.val = $event;
          })("ngModelChange", function StepThreeComponent_Template_p_inputMask_ngModelChange_20_listener() {
            return ctx.onClickTime();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Wie viele stunden werden vorsassichtlich benotight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p-calendar", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StepThreeComponent_Template_p_calendar_ngModelChange_28_listener($event) {
            return ctx.date1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Wo Soll der umzug starten?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StepThreeComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.streetAddress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, StepThreeComponent_img_39_Template, 1, 0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, StepThreeComponent_img_40_Template, 1, 0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StepThreeComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.houseNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, StepThreeComponent_img_43_Template, 1, 0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, StepThreeComponent_img_44_Template, 1, 0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StepThreeComponent_Template_input_ngModelChange_47_listener($event) {
            return ctx.postalCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, StepThreeComponent_img_48_Template, 1, 0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, StepThreeComponent_img_49_Template, 1, 0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StepThreeComponent_Template_input_ngModelChange_51_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, StepThreeComponent_img_52_Template, 1, 0, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, StepThreeComponent_img_53_Template, 1, 0, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepThreeComponent_Template_button_click_55_listener() {
            return ctx.onClickBtn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "zwischenstopp einf\xFCgen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Soll vumzug fur sie die helfer suswaehlen?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, StepThreeComponent_div_63_Template, 4, 4, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Kurze Beschreibung (Max 200 worter)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "textarea", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Kurze Beschreibung (Max 200 worter)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Kurze Beschreibung (Max 200 worter)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items)("activeIndex", ctx.activeIndex)("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.val);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.streetAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.streetAddress == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.streetAddress !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.houseNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.houseNumber == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.houseNumber !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.postalCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postalCode == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postalCode !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.city == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.city !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoriesThree);
        }
      },
      directives: [primeng_steps__WEBPACK_IMPORTED_MODULE_1__["Steps"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["Calendar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], primeng_inputmask__WEBPACK_IMPORTED_MODULE_5__["InputMask"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__["InputTextarea"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__["Checkbox"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_11__["RadioButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RlcC10aHJlZS9zdGVwLXRocmVlL3N0ZXAtdGhyZWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepThreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-step-three',
          templateUrl: './step-three.component.html',
          styleUrls: ['./step-three.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/step-two/step-two/step-two.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/step-two/step-two/step-two.component.ts ***!
    \********************************************************************/

  /*! exports provided: StepTwoComponent */

  /***/
  function srcAppComponentsStepTwoStepTwoStepTwoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StepTwoComponent", function () {
      return StepTwoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/interaction/announcement/announcement.service */
    "./src/app/services/interaction/announcement/announcement.service.ts");
    /* harmony import */


    var primeng_steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/steps */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-steps.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../registration/registration.component */
    "./src/app/components/registration/registration.component.ts");

    function StepTwoComponent_label_8_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ja");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StepTwoComponent_label_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StepTwoComponent_label_8_span_1_Template, 2, 0, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function StepTwoComponent_label_8_Template_input_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.changeIdentificationType($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var v_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", v_r6)("ngIfElse", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", v_r6)("value", v_r6);
      }
    }

    function StepTwoComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function StepTwoComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-registration");
      }
    }

    function StepTwoComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Nein");
      }
    }

    var StepTwoComponent = /*#__PURE__*/function () {
      function StepTwoComponent(_announcementService) {
        _classCallCheck(this, StepTwoComponent);

        this._announcementService = _announcementService;
        this.activeIndex = 1;
        this.yesNo = [1, 0];
        this.hasAccount = 1;
        this.loading = false;
      }

      _createClass(StepTwoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.items = [{
            label: 'Personal',
            command: function command(event) {
              _this9.activeIndex = 0;
              alert('clicked');
            }
          }, {
            label: 'Seat',
            command: function command(event) {
              _this9.activeIndex = 1;
            }
          }, {
            label: 'Payment',
            command: function command(event) {
              _this9.activeIndex = 2;
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this9.activeIndex = 3;
            }
          }, {
            label: 'Confirmation',
            command: function command(event) {
              _this9.activeIndex = 4;
            }
          }];

          this._announcementService.announcementCostMessage$.subscribe(function (value) {
            console.log("Data from previous component: ");
            console.log(value);
          });

          this.identificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'hasAccount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.hasAccount, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "changeIdentificationType",
        value: function changeIdentificationType(event) {
          this.hasAccount = event.target.value;
        }
      }, {
        key: "callNextComponent",
        value: function callNextComponent() {
          this.loading = true;
        }
      }]);

      return StepTwoComponent;
    }();

    StepTwoComponent.ɵfac = function StepTwoComponent_Factory(t) {
      return new (t || StepTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]));
    };

    StepTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StepTwoComponent,
      selectors: [["app-step-two"]],
      decls: 15,
      vars: 7,
      consts: [[1, "steps", "steps__step-two"], [1, "container"], [1, "p-grid"], [1, "p-col-12"], [3, "model", "activeIndex", "readonly", "activeIndexChange"], [1, "p-d-flex", "p-jc-center", "p-mt-5", 3, "formGroup"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["registration", ""], ["no", ""], ["name", "hasAccount1", "type", "radio", 3, "checked", "value", "change"]],
      template: function StepTwoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-steps", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIndexChange", function StepTwoComponent_Template_p_steps_activeIndexChange_4_listener($event) {
            return ctx.activeIndex = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Haben Sie bereits ein PacknMoov Konto?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StepTwoComponent_label_8_Template, 3, 4, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StepTwoComponent_div_10_Template, 2, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StepTwoComponent_ng_template_11_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StepTwoComponent_ng_template_13_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items)("activeIndex", ctx.activeIndex)("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.identificationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.yesNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasAccount == 1)("ngIfElse", _r2);
        }
      },
      directives: [primeng_steps__WEBPACK_IMPORTED_MODULE_3__["Steps"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RlcC10d28vc3RlcC10d28vc3RlcC10d28uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-step-two',
          templateUrl: './step-two.component.html',
          styleUrls: ['./step-two.component.scss']
        }]
      }], function () {
        return [{
          type: _services_interaction_announcement_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/subscribe-section/subscribe/subscribe.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/subscribe-section/subscribe/subscribe.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SubscribeComponent */

  /***/
  function srcAppComponentsSubscribeSectionSubscribeSubscribeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function () {
      return SubscribeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");

    var SubscribeComponent = /*#__PURE__*/function () {
      function SubscribeComponent() {
        _classCallCheck(this, SubscribeComponent);
      }

      _createClass(SubscribeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubscribeComponent;
    }();

    SubscribeComponent.ɵfac = function SubscribeComponent_Factory(t) {
      return new (t || SubscribeComponent)();
    };

    SubscribeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubscribeComponent,
      selectors: [["app-subscribe"]],
      decls: 15,
      vars: 0,
      consts: [[1, "subscribe-section"], [1, "subscribe-section__background-wrapper"], [1, "container"], [1, "p-grid"], [1, "p-col-12", "p-lg-3"], ["src", "assets/subscribe-img.svg", "alt", "subscribe-img", 1, "subscribe-section__img"], [1, "p-col-12", "p-lg-9"], [1, "p-d-flex", "p-flex-column", "p-ai-start", "p-jc-between", "p-mt-1", "p-pr-5", "p-ml-5", "p-ml-lg-5", "subscribe-section__wrapper"], [1, "subscribe-section__title"], [1, "subscribe-section__text"], [1, "p-inputgroup", "subscribe-section-p-inputgroup", "p-jc-start", "p-jc-xl-start"], ["type", "text", "pInputText", "", "placeholder", "Keyword", 1, "subscribe-section-p-input"], ["pButton", "", "type", "button", "label", "Submit", 1, "p-inputgroup-addon", "p-button", "p-component", "subscribe-section-p-span-btn"]],
      template: function SubscribeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Alle Verfugbaren Auftrage anshen ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Wollen Sie mehr \xFCber unsere aktuellsten Anzeigen erfahren? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__["InputText"], primeng_button__WEBPACK_IMPORTED_MODULE_2__["ButtonDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Vic2NyaWJlLXNlY3Rpb24vc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscribeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-subscribe',
          templateUrl: './subscribe.component.html',
          styleUrls: ['./subscribe.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/upgrade-password/upgrade-password.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/upgrade-password/upgrade-password.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UpgradePasswordComponent */

  /***/
  function srcAppComponentsUpgradePasswordUpgradePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpgradePasswordComponent", function () {
      return UpgradePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _models_PasswordResetRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/PasswordResetRequest */
    "./src/app/models/PasswordResetRequest.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_remote_password_password_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/remote/password/password.service */
    "./src/app/services/remote/password/password.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UpgradePasswordComponent_div_0_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwort eingeben");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpgradePasswordComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpgradePasswordComponent_div_0_div_6_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
      }
    }

    function UpgradePasswordComponent_div_0_div_11_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwort eingeben");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpgradePasswordComponent_div_0_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpgradePasswordComponent_div_0_div_11_div_1_Template, 2, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.password2.errors.required);
      }
    }

    function UpgradePasswordComponent_div_0_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errorMessage);
      }
    }

    function UpgradePasswordComponent_div_0_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 10);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function UpgradePasswordComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpgradePasswordComponent_div_0_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.sendPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Passwort");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpgradePasswordComponent_div_0_div_6_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Passwort Wiederholung");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UpgradePasswordComponent_div_0_div_11_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UpgradePasswordComponent_div_0_div_13_Template, 3, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UpgradePasswordComponent_div_0_span_15_Template, 1, 0, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Passwort \xE4ndern ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.resetPasswordForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.submitted && ctx_r0.f.password.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.password.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.submitted && ctx_r0.f.password2.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.password2.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showErrorMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.loading);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
      }
    }

    var UpgradePasswordComponent = /*#__PURE__*/function () {
      function UpgradePasswordComponent(formBuilder, route, router, passwordService) {
        _classCallCheck(this, UpgradePasswordComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.passwordService = passwordService;
        this.isTokenValid = false;
        this.loading = false;
        this.submitted = false;
        this.showErrorMessage = false;
        this.errorMessage = false;
      }

      _createClass(UpgradePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.token = this.route.snapshot.queryParamMap.get('token');

          if (this.token === null || this.token === "") {
            this.router.navigate(['/account/login']);
            return;
          }

          this.validateTheTokenAndShowForm();
          this.resetPasswordForm = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "sendPassword",
        value: function sendPassword() {
          var _this10 = this;

          this.submitted = true;

          if (this.resetPasswordForm.invalid) {
            return;
          }

          console.log("in sendPass");
          var pass1 = this.f.password.value;
          var pass2 = this.f.password2.value;

          if (!(pass1 === pass2)) {
            return;
          }

          console.log(pass1);
          this.loading = true;
          var request = new _models_PasswordResetRequest__WEBPACK_IMPORTED_MODULE_2__["PasswordResetRequest"](this.token, pass1, pass2);
          this.passwordService.upgradePassword(request).subscribe(function (data) {
            console.log("password changed!");
            _this10.loading = false;
            alert("Password successfully changed!");
            setTimeout(function () {
              _this10.router.navigate(['/account/login']);
            }, 2000);
          }, function (error) {});
        }
      }, {
        key: "validateTheTokenAndShowForm",
        value: function validateTheTokenAndShowForm() {
          var _this11 = this;

          //http://localhost:4200/account/change-password?token=a5ff7b61-f6d6-4b5d-8159-5b5c2fa9c82d
          var res = this.passwordService.validateToken(this.token).subscribe(function (data) {
            _this11.isTokenValid = true;
            console.log("return oeuroeur");
          }, function (error) {
            _this11.router.navigate(['/account/login']);
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "isUUID",
        value: function isUUID(token) {
          //TODO: Test if it matches
          var regex = "/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i";
          var patt = new RegExp(regex); // not done yet.

          return patt.test(token);
        }
      }, {
        key: "f",
        get: function get() {
          return this.resetPasswordForm.controls;
        }
      }]);

      return UpgradePasswordComponent;
    }();

    UpgradePasswordComponent.ɵfac = function UpgradePasswordComponent_Factory(t) {
      return new (t || UpgradePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_remote_password_password_service__WEBPACK_IMPORTED_MODULE_4__["PasswordService"]));
    };

    UpgradePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpgradePasswordComponent,
      selectors: [["app-upgrade-password"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "password"], ["formControlName", "password", "id", "password", "type", "password", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "password2", "id", "password2", "type", "password", 1, "form-control", 3, "ngClass"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "mr-1"]],
      template: function UpgradePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UpgradePasswordComponent_div_0_Template, 17, 12, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTokenValid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBncmFkZS1wYXNzd29yZC91cGdyYWRlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpgradePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-upgrade-password',
          templateUrl: './upgrade-password.component.html',
          styleUrls: ['./upgrade-password.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_remote_password_password_service__WEBPACK_IMPORTED_MODULE_4__["PasswordService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/ActivationRequest.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/ActivationRequest.ts ***!
    \*********************************************/

  /*! exports provided: ActivationRequest */

  /***/
  function srcAppModelsActivationRequestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivationRequest", function () {
      return ActivationRequest;
    });

    var ActivationRequest = function ActivationRequest(activation_secret, activation_type, email_address) {
      _classCallCheck(this, ActivationRequest);

      this.activation_secret = activation_secret;
      this.activation_type = activation_type;
      this.email_address = email_address;
    };
    /***/

  },

  /***/
  "./src/app/models/ActivationType.ts":
  /*!******************************************!*\
    !*** ./src/app/models/ActivationType.ts ***!
    \******************************************/

  /*! exports provided: ActivationType */

  /***/
  function srcAppModelsActivationTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivationType", function () {
      return ActivationType;
    });

    var ActivationType;

    (function (ActivationType) {
      ActivationType["EMAIL_OTP"] = "email_otp";
      ActivationType["SMS_OTP"] = "sms_otp";
      ActivationType["APP_PUSH"] = "app_push";
    })(ActivationType || (ActivationType = {}));
    /***/

  },

  /***/
  "./src/app/models/AnnouncementCost.ts":
  /*!********************************************!*\
    !*** ./src/app/models/AnnouncementCost.ts ***!
    \********************************************/

  /*! exports provided: AnnouncementCost */

  /***/
  function srcAppModelsAnnouncementCostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementCost", function () {
      return AnnouncementCost;
    });

    var AnnouncementCost = function AnnouncementCost(helper_number, working_hours, total_cost, workers_cost, service_fees) {
      _classCallCheck(this, AnnouncementCost);

      this.helper_number = helper_number;
      this.working_hours = working_hours;
      this.total_cost = total_cost;
      this.workers_cost = workers_cost;
      this.service_fees = service_fees;
    };
    /***/

  },

  /***/
  "./src/app/models/LoginRequest.ts":
  /*!****************************************!*\
    !*** ./src/app/models/LoginRequest.ts ***!
    \****************************************/

  /*! exports provided: LoginRequest */

  /***/
  function srcAppModelsLoginRequestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRequest", function () {
      return LoginRequest;
    });

    var LoginRequest = function LoginRequest(email, password) {
      _classCallCheck(this, LoginRequest);

      this.email = email;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/models/PasswordResetRequest.ts":
  /*!************************************************!*\
    !*** ./src/app/models/PasswordResetRequest.ts ***!
    \************************************************/

  /*! exports provided: PasswordResetRequest */

  /***/
  function srcAppModelsPasswordResetRequestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordResetRequest", function () {
      return PasswordResetRequest;
    });

    var PasswordResetRequest = function PasswordResetRequest(token, password, password_confirm) {
      _classCallCheck(this, PasswordResetRequest);

      this.token = token;
      this.password = password;
      this.password_confirm = password_confirm;
    };
    /***/

  },

  /***/
  "./src/app/models/RegistrationRequest.ts":
  /*!***********************************************!*\
    !*** ./src/app/models/RegistrationRequest.ts ***!
    \***********************************************/

  /*! exports provided: RegistrationRequest */

  /***/
  function srcAppModelsRegistrationRequestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationRequest", function () {
      return RegistrationRequest;
    });

    var RegistrationRequest = function RegistrationRequest(consent_approved, full_name, email_address, activation_type, mobile_number, password) {
      _classCallCheck(this, RegistrationRequest);

      this.consent_approved = consent_approved;
      this.full_name = full_name;
      this.email_address = email_address;
      this.activation_type = activation_type;
      this.mobile_number = mobile_number;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/services/interaction/alertservices/alert.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/services/interaction/alertservices/alert.service.ts ***!
    \*********************************************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesInteractionAlertservicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(router) {
        var _this12 = this;

        _classCallCheck(this, AlertService);

        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterRouteChange = false; // clear alert messages on route change unless 'keepAfterRouteChange' flag is true

        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            if (_this12.keepAfterRouteChange) {
              // only keep for a single route change
              _this12.keepAfterRouteChange = false;
            } else {
              // clear alert message
              _this12.clear();
            }
          }
        });
      }

      _createClass(AlertService, [{
        key: "getAlert",
        value: function getAlert() {
          return this.subject.asObservable();
        }
      }, {
        key: "success",
        value: function success(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            type: 'success',
            text: message
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            type: 'error',
            text: message
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          // clear by calling subject.next() without parameters
          this.subject.next();
        }
      }]);

      return AlertService;
    }();

    AlertService.ɵfac = function AlertService_Factory(t) {
      return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertService,
      factory: AlertService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/interaction/announcement/announcement.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/services/interaction/announcement/announcement.service.ts ***!
    \***************************************************************************/

  /*! exports provided: AnnouncementService */

  /***/
  function srcAppServicesInteractionAnnouncementAnnouncementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementService", function () {
      return AnnouncementService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AnnouncementService = /*#__PURE__*/function () {
      function AnnouncementService() {
        _classCallCheck(this, AnnouncementService);

        this._announcementCostMessageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._publisherDataMessageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._announcementCostMessage$ = this._announcementCostMessageSource.asObservable();
        this._publisherDataMessage$ = this._publisherDataMessageSource.asObservable();
      }

      _createClass(AnnouncementService, [{
        key: "emitAnnouncementCost",
        value: function emitAnnouncementCost(message) {
          this._announcementCostMessageSource.next(message);
        }
      }, {
        key: "emitPublisherData",
        value: function emitPublisherData(message) {
          this._publisherDataMessageSource.next(message);
        }
      }, {
        key: "announcementCostMessageSource",
        get: function get() {
          return this._announcementCostMessageSource;
        },
        set: function set(value) {
          this._announcementCostMessageSource = value;
        }
      }, {
        key: "publisherDataMessageSource",
        get: function get() {
          return this._publisherDataMessageSource;
        },
        set: function set(value) {
          this._publisherDataMessageSource = value;
        }
      }, {
        key: "announcementCostMessage$",
        get: function get() {
          return this._announcementCostMessage$;
        },
        set: function set(value) {
          this._announcementCostMessage$ = value;
        }
      }, {
        key: "publisherDataMessage$",
        get: function get() {
          return this._publisherDataMessage$;
        },
        set: function set(value) {
          this._publisherDataMessage$ = value;
        }
      }]);

      return AnnouncementService;
    }();

    AnnouncementService.ɵfac = function AnnouncementService_Factory(t) {
      return new (t || AnnouncementService)();
    };

    AnnouncementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnnouncementService,
      factory: AnnouncementService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnouncementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/remote/activation/activation.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/services/remote/activation/activation.service.ts ***!
    \******************************************************************/

  /*! exports provided: ActivationService */

  /***/
  function srcAppServicesRemoteActivationActivationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivationService", function () {
      return ActivationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var ActivationService = /*#__PURE__*/function () {
      function ActivationService(http) {
        _classCallCheck(this, ActivationService);

        this.http = http;
      }

      _createClass(ActivationService, [{
        key: "activateAccount",
        value: function activateAccount(confirmation) {
          return this.http.patch("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendServerUrl).concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].confirmRegistrationPath), confirmation, httpOptions);
        }
      }]);

      return ActivationService;
    }();

    ActivationService.ɵfac = function ActivationService_Factory(t) {
      return new (t || ActivationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ActivationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ActivationService,
      factory: ActivationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/remote/authenticate/authenticate.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/services/remote/authenticate/authenticate.service.ts ***!
    \**********************************************************************/

  /*! exports provided: AuthenticateService */

  /***/
  function srcAppServicesRemoteAuthenticateAuthenticateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticateService", function () {
      return AuthenticateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthenticateService = /*#__PURE__*/function () {
      function AuthenticateService(http) {
        _classCallCheck(this, AuthenticateService);

        this.http = http;
        this.JWT_TOKEN = 'token';
        this.REFRESH_TOKEN = 'refresh_token';
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticateService, [{
        key: "login",
        value: function login(_login) {
          var _this13 = this;

          //httpOptions.headers = (new HttpHeaders({'eee':''})) ;
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendServerUrl).concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].loginAuthenticationUrl), _login, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(_this13.JWT_TOKEN, data.jwt_token);
            localStorage.setItem(_this13.REFRESH_TOKEN, data.refresh_token);
            localStorage.setItem('currentUser', JSON.stringify(data));

            _this13.currentUserSubject.next(data);

            console.log("is User Logged: " + _this13.isLoggedIn());
            return data;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage and set current user to null
          localStorage.removeItem(this.JWT_TOKEN);
          localStorage.removeItem(this.REFRESH_TOKEN);
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return localStorage.getItem(this.JWT_TOKEN) !== null && localStorage.getItem(this.REFRESH_TOKEN) !== null && localStorage.getItem(this.REFRESH_TOKEN) !== null;
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticateService;
    }();

    AuthenticateService.ɵfac = function AuthenticateService_Factory(t) {
      return new (t || AuthenticateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthenticateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthenticateService,
      factory: AuthenticateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/remote/password/password.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/services/remote/password/password.service.ts ***!
    \**************************************************************/

  /*! exports provided: PasswordService */

  /***/
  function srcAppServicesRemotePasswordPasswordServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordService", function () {
      return PasswordService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var PasswordService = /*#__PURE__*/function () {
      function PasswordService(http) {
        _classCallCheck(this, PasswordService);

        this.http = http;
      }

      _createClass(PasswordService, [{
        key: "resetPassword",
        value: function resetPassword(email) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendServerUrl).concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].resetPasswordPath), email, httpOptions);
        }
      }, {
        key: "validateToken",
        value: function validateToken(token) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendServerUrl).concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].validateTokenPath, "?token=").concat(token), httpOptions);
        }
      }, {
        key: "upgradePassword",
        value: function upgradePassword(passwordResetRequest) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendServerUrl).concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].changePasswordPath), passwordResetRequest, httpOptions);
        }
      }]);

      return PasswordService;
    }();

    PasswordService.ɵfac = function PasswordService_Factory(t) {
      return new (t || PasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PasswordService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PasswordService,
      factory: PasswordService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/remote/registration/registration.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/services/remote/registration/registration.service.ts ***!
    \**********************************************************************/

  /*! exports provided: RegistrationService */

  /***/
  function srcAppServicesRemoteRegistrationRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationService", function () {
      return RegistrationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var RegistrationService = /*#__PURE__*/function () {
      function RegistrationService(http) {
        _classCallCheck(this, RegistrationService);

        this.http = http;
      }

      _createClass(RegistrationService, [{
        key: "sendRegistration",
        value: function sendRegistration(registration) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].backendServerUrl).concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].sendRegistrationPath), registration, httpOptions);
        }
      }]);

      return RegistrationService;
    }();

    RegistrationService.ɵfac = function RegistrationService_Factory(t) {
      return new (t || RegistrationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RegistrationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegistrationService,
      factory: RegistrationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      backendServerUrl: "http://localhost:8080",
      loginAuthenticationUrl: "/v1/api/login/authenticate",
      sendRegistrationPath: "/v1/api/registration/send",
      confirmRegistrationPath: "/v1/api/registration/activate",
      resetPasswordPath: "/v1/api/login/resetpassword",
      validateTokenPath: "/v1/api/login/valitetoken",
      changePasswordPath: "/v1/api/login/changepassword"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\ProgrammingProjects\Angular\angular-german-website\packnmoov-webapp-client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map