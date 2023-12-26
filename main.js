(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 9139:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-tab-set\n    *ngIf=\"displayTabs()\"\n    (removeTab)=\"locationService.removeLocation($event)\"\n>\n    <app-tab\n        *ngFor=\"\n            let location of currentConditionsByZipSortedByTimestamp();\n            let last = last\n        \"\n        [active]=\"last\"\n        [tabData]=\"{\n            id: location.zip,\n            title: location.data.name + ' (' + location.zip + ')'\n        }\"\n    >\n        <div>\n            <h4>Current conditions: {{ location.data.weather[0].main }}</h4>\n            <h4>Temperatures today:</h4>\n            <p>\n                Current {{ location.data.main.temp | number: '.0-0' }} - Max\n                {{ location.data.main.temp_max | number: '.0-0' }} - Min\n                {{ location.data.main.temp_min | number: '.0-0' }}\n            </p>\n            <p>\n                <a [routerLink]=\"['/forecast', location.zip]\"\n                    >Show 5-day forecast for {{ location.data.name }}</a\n                >\n            </p>\n        </div>\n        <div>\n            <img\n                [src]=\"\n                    weatherService.getWeatherIcon(location.data.weather[0].id)\n                \"\n                alt=\"weather icon\"\n            />\n        </div>\n    </app-tab>\n</app-tab-set>\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div *ngIf=\"!(loadingForecast$ | async)\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">\n                5-day forecast for {{ currentForecast.city.name }}\n            </h3>\n        </div>\n        <ul class=\"list-group\">\n            <li\n                *ngFor=\"let dailyForecast of currentForecast.list\"\n                class=\"list-group-item\"\n            >\n                {{ dailyForecast.dt * 1000 | date: 'EEEE, MMM d' }}:\n                {{ dailyForecast.weather[0].main }}\n                - Min: {{ dailyForecast.temp.min | number: '.0-0' }} - Max:\n                {{ dailyForecast.temp.max | number: '.0-0' }}\n\n                <img\n                    [src]=\"\n                        weatherService.getWeatherIcon(\n                            dailyForecast.weather[0].id\n                        )\n                    \"\n                    class=\"icon\"\n                />\n            </li>\n        </ul>\n    </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\">< Back to main page</button>\n";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\n    <app-zipcode-entry> </app-zipcode-entry>\n    <app-current-conditions></app-current-conditions>\n</div>\n";

/***/ }),

/***/ 1027:
/*!***********************************************************!*\
  !*** ./src/app/tab-set/tab-set.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"nav nav-tabs\">\n    <li\n        *ngFor=\"let tab of tabs; let i = index\"\n        role=\"presentation\"\n        [ngClass]=\"{ active: tab.active }\"\n    >\n        <a class=\"btn btn-link\" [routerLink]=\"\" (click)=\"setActiveTab(i)\"\n            ><span\n                style=\"margin-right: 1rem\"\n                [innerHTML]=\"tab.tabData.title\"\n            ></span>\n            <button\n                class=\"btn btn-danger\"\n                title=\"Remove\"\n                (click)=\"removeTabUpdateActiveTab(i)\"\n            >\n                <span>&times;</span>\n            </button>\n        </a>\n    </li>\n</ul>\n<ng-content></ng-content>\n";

/***/ }),

/***/ 543:
/*!***********************************************************!*\
  !*** ./src/app/tab-set/tab/tab.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"tab-content-container\" [hidden]=\"!active\">\n    <ng-content></ng-content>\n</div>\n";

/***/ }),

/***/ 7606:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\n    <h2>Enter a Zip Code</h2>\n    <input\n        type=\"text\"\n        #zipcode\n        placeholder=\"Example: 44126\"\n        class=\"form-control\"\n        maxlength=\"5\"\n    />\n    <br />\n    <button class=\"btn btn-primary\" (click)=\"addLocation(zipcode.value)\">\n        Add location\n    </button>\n</div>\n";

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let AppComponent = class AppComponent {};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 1402);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/location.service */ 5434);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/weather.service */ 1125);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 1217);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _tab_set_tab_set_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab-set/tab-set.component */ 3265);
/* harmony import */ var _tab_set_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tab-set/tab/tab.component */ 8162);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/storage.service */ 9140);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  }), _tab_set_tab_set_component__WEBPACK_IMPORTED_MODULE_9__.TabSetComponent, _tab_set_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__.TabComponent],
  providers: [_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _services_weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService, _services_storage_service__WEBPACK_IMPORTED_MODULE_11__.StorageService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);



const appRoutes = [{
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 1217:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9139);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 2340);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/weather.service */ 1125);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/location.service */ 5434);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.currentConditionsByZipSortedByTimestamp = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => {
      if (this.currentConditionsByZip().length > 1) {
        this.currentConditionsByZip().sort((a, b) => a.lastAccessed < b.lastAccessed ? -1 : a.lastAccessed > b.lastAccessed ? 1 : 0);
      }
      return this.currentConditionsByZip();
    });
    this.displayTabs = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => this.currentConditionsByZipSortedByTimestamp().length > 0);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.currentConditionsByZip = this.weatherService.getCurrentConditions();
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 64:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7854);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/weather.service */ 1125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ForecastsListComponent = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    this._zipcode = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
    route.params.subscribe(params => {
      this._zipcode.next(params['zipcode']);
    });
    this.zipCode$.subscribe(value => {
      if (value) {
        this.currentForecastSubscription = this.weatherService.currentForecast$.subscribe(forecast => {
          this.currentForecast = forecast;
        });
        this.weatherService.getForecastByZipCode(value);
      }
    });
    this.loadingForecast$ = weatherService.loadingForecast$;
  }
  get zipCode$() {
    return this._zipcode.asObservable();
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 1152:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 5434:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 9140);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const LOCATIONS = 'locations';
let LocationService = class LocationService {
  constructor(storageService) {
    this.storageService = storageService;
    const locString = storageService.getItem(LOCATIONS);
    if (locString) {
      this._locations = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(locString));
    }
  }
  addLocation(zipcode) {
    this._locations.next(this._locations.value.concat(zipcode));
    this.storageService.setItem(LOCATIONS, this._locations.value);
  }
  removeLocation(zipcode) {
    this._locations.next(this._locations.value.filter(value => value !== zipcode));
    this.storageService.setItem(LOCATIONS, this._locations.value);
  }
  get locations$() {
    return this._locations.asObservable();
  }
  static #_ = this.ctorParameters = () => [{
    type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService
  }];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], LocationService);


/***/ }),

/***/ 9140:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let StorageService = class StorageService {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  clearItems() {
    localStorage.clear();
  }
};
StorageService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], StorageService);


/***/ }),

/***/ 1125:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.service */ 5434);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 9140);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;





let WeatherService = class WeatherService {
  static #_ = WeatherService_1 = this;
  static #_2 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static #_3 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  static #_4 = this.URL = 'http://api.openweathermap.org/data/2.5';
  constructor(http, locationService, storageService) {
    this.http = http;
    this.locationService = locationService;
    this.storageService = storageService;
    this._currentForecast = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this._loadingForecast = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    this.CURRENT_CONDITIONS_KEY = 'currentConditions';
    this.currentForecasts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    this.CURRENT_FORECASTS_KEY = 'currentForecasts';
    this.expiresInSeconds = 1000 * 7200; // Change 7200 (2 hours in seconds) to modify expiration time
    this.locationSubscription = this.locationService.locations$.subscribe(locations => {
      this.currentConditions.set([]); // Reset current conditions
      const filteredLocations = locations.filter((value, index) => locations.indexOf(value) === index).filter(value => value !== ''); // Filter out duplicates and empty values
      for (const loc of filteredLocations) {
        this.updateCurrentConditions(loc);
      }
    });
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  getForecastByZipCode(zipCode) {
    this._loadingForecast.next(true);
    if (!this.foundInForecastCache(zipCode)) {
      this.getForecast$(zipCode).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loadingForecast.next(false))).subscribe(data => {
        this.currentForecasts.update(forecasts => [...forecasts, {
          zip: zipCode,
          data,
          dt: Date.now(),
          expiresIn: this.expiresInSeconds
        }]);
        this._currentForecast.next(data);
        this.storageService.setItem(this.CURRENT_FORECASTS_KEY, this.currentForecasts());
      });
    }
  }
  get currentForecast$() {
    return this._currentForecast.asObservable();
  }
  get loadingForecast$() {
    return this._loadingForecast.asObservable();
  }
  getForecast$(zipCode) {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipCode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`);
  }
  getWeatherIcon(id) {
    switch (true) {
      case id >= 200 && id <= 232:
        return WeatherService_1.ICON_URL + 'art_storm.png';
      case id >= 501 && id <= 511:
        return WeatherService_1.ICON_URL + 'art_rain.png';
      case id === 500 || id >= 520 && id <= 531:
        return WeatherService_1.ICON_URL + 'art_light_rain.png';
      case id >= 600 && id <= 622:
        return WeatherService_1.ICON_URL + 'art_snow.png';
      case id >= 801 && id <= 804:
        return WeatherService_1.ICON_URL + 'art_clouds.png';
      case id === 741 || id === 761:
        return WeatherService_1.ICON_URL + 'art_fog.png';
      default:
        return WeatherService_1.ICON_URL + 'art_clear.png';
    }
  }
  isNotExpired(dateTimestamp, expiresInTimestamp) {
    return Math.round(Date.now() / 1000) < dateTimestamp + expiresInTimestamp;
  }
  foundInForecastCache(zipCode) {
    let foundInCache = false;
    const cachedForecasts = JSON.parse(this.storageService.getItem(this.CURRENT_FORECASTS_KEY));
    if (cachedForecasts) {
      for (let forecastAndZip of cachedForecasts) {
        if (forecastAndZip.zip === zipCode && this.isNotExpired(forecastAndZip.dt, forecastAndZip.expiresIn)) {
          foundInCache = true;
          this._currentForecast.next(forecastAndZip.data);
          this._loadingForecast.next(false);
        }
      }
    }
    return foundInCache;
  }
  foundInLocationCache(zipCode) {
    let foundInCache = false;
    const cachedConditions = JSON.parse(this.storageService.getItem(this.CURRENT_CONDITIONS_KEY));
    if (cachedConditions) {
      for (let condition of cachedConditions) {
        if (condition.zip === zipCode && this.isNotExpired(condition.data.dt, condition.expiresIn)) {
          foundInCache = true;
          this.setCondition(zipCode, condition.data, Date.now() / 1000, condition.expiresIn);
        }
      }
    }
    return foundInCache;
  }
  setCondition(zipCode, data, lastAccessed, expiresInSecond) {
    this.currentConditions.update(conditions => [...conditions, {
      zip: zipCode,
      data,
      expiresIn: expiresInSecond ?? this.expiresInSeconds,
      lastAccessed: lastAccessed
    }]);
    this.storageService.setItem(this.CURRENT_CONDITIONS_KEY, this.currentConditions());
  }
  updateCurrentConditions(zipCode) {
    if (!this.foundInLocationCache(zipCode)) {
      // Here we make a request to get the current conditions data from the API.
      // Note the use of backticks and an expression to insert the zipcode
      this.http.get(`${WeatherService_1.URL}/weather?zip=${zipCode},us&units=imperial&APPID=${WeatherService_1.APPID}`).subscribe(data => {
        this.setCondition(zipCode, data, Date.now() / 1000);
      });
    }
  }
  static #_5 = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }, {
    type: _location_service__WEBPACK_IMPORTED_MODULE_0__.LocationService
  }, {
    type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService
  }];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], WeatherService);


/***/ }),

/***/ 3265:
/*!**********************************************!*\
  !*** ./src/app/tab-set/tab-set.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabSetComponent: () => (/* binding */ TabSetComponent)
/* harmony export */ });
/* harmony import */ var _tab_set_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-set.component.html?ngResource */ 1027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab/tab.component */ 8162);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let TabSetComponent = class TabSetComponent {
  constructor() {
    this.removeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngAfterContentInit() {
    this.tabs.changes.subscribe(() => {
      this.resetActiveTab();
      this.tabs.last.active = true;
    });
  }
  removeTabUpdateActiveTab(index) {
    this.removeTab.emit(this.tabs.get(index).tabData.id);
    this.setActiveTab();
  }
  setActiveTab(index) {
    this.resetActiveTab();
    if (index !== null && index !== undefined && index > -1) {
      this.tabs.get(index).active = true;
    } else {
      this.tabs.first.active = true;
    }
  }
  resetActiveTab() {
    for (let tab of this.tabs) {
      tab.active = false;
    }
  }
  static #_ = this.propDecorators = {
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren,
      args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_1__.TabComponent]
    }],
    removeTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  };
};
TabSetComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab-set',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  template: _tab_set_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], TabSetComponent);


/***/ }),

/***/ 8162:
/*!**********************************************!*\
  !*** ./src/app/tab-set/tab/tab.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabComponent: () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component.html?ngResource */ 543);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component.css?ngResource */ 1893);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabComponent = class TabComponent {
  constructor() {
    this.active = false;
  }
  set tabData(data) {
    this._tabData = data;
  }
  get tabData() {
    return this._tabData;
  }
  static #_ = this.propDecorators = {
    tabData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
TabComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  template: _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabComponent);


/***/ }),

/***/ 1402:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 7606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/location.service */ 5434);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor(service) {
    this.service = service;
  }
  addLocation(zipcode) {
    if (zipcode?.length === 5) this.service.addLocation(zipcode);
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService
  }];
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 2340:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
    cursor: pointer;
}
.flex {
    display: flex;
    justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/app/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":[".close {\n    cursor: pointer;\n}\n.flex {\n    display: flex;\n    justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7854:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
    width: 45px;
    height: 45px;
    position: absolute;
    right: 20px;
    top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,SAAS;AACb","sourcesContent":[".icon {\n    width: 45px;\n    height: 45px;\n    position: absolute;\n    right: 20px;\n    top: -2px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1893:
/*!**********************************************************!*\
  !*** ./src/app/tab-set/tab/tab.component.css?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tab-content-container {
    border: solid 1px #ddd;
    border-top: none;
    width: 70rem;
    padding: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/app/tab-set/tab/tab.component.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,aAAa;AACjB","sourcesContent":[".tab-content-container {\n    border: solid 1px #ddd;\n    border-top: none;\n    width: 70rem;\n    padding: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map