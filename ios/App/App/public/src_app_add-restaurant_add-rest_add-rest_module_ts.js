"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_add-restaurant_add-rest_add-rest_module_ts"],{

/***/ 2860:
/*!********************************************************************!*\
  !*** ./src/app/add-restaurant/add-rest/add-rest-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRestPageRoutingModule": () => (/* binding */ AddRestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _add_rest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-rest.page */ 8188);




const routes = [
    {
        path: '',
        component: _add_rest_page__WEBPACK_IMPORTED_MODULE_0__.AddRestPage
    }
];
let AddRestPageRoutingModule = class AddRestPageRoutingModule {
};
AddRestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddRestPageRoutingModule);



/***/ }),

/***/ 1174:
/*!************************************************************!*\
  !*** ./src/app/add-restaurant/add-rest/add-rest.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRestPageModule": () => (/* binding */ AddRestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _add_rest_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-rest-routing.module */ 2860);
/* harmony import */ var _add_rest_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-rest.page */ 8188);







let AddRestPageModule = class AddRestPageModule {
};
AddRestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_rest_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddRestPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_add_rest_page__WEBPACK_IMPORTED_MODULE_1__.AddRestPage]
    })
], AddRestPageModule);



/***/ }),

/***/ 8188:
/*!**********************************************************!*\
  !*** ./src/app/add-restaurant/add-rest/add-rest.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRestPage": () => (/* binding */ AddRestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _add_rest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-rest.page.html?ngResource */ 5042);
/* harmony import */ var _add_rest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-rest.page.scss?ngResource */ 4545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/restaurant.service */ 2473);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let AddRestPage = class AddRestPage {
    constructor(db, formBuilder, navController) {
        this.db = db;
        this.formBuilder = formBuilder;
        this.navController = navController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.restForm = this.formBuilder.group({
                name: [''],
                address: [''],
                phone: [''],
                description: [''],
                tags: [''],
                rating: [0]
            });
            yield this.db.init();
        });
    }
    goBack() {
        this.navController.back();
    }
    onSubmit() {
        this.db.addRestaurant({
            name: this.restForm.value.name,
            address: this.restForm.value.address,
            phoneNum: this.restForm.value.phone,
            description: this.restForm.value.description,
            tags: this.restForm.value.tags,
            rating: this.restForm.value.rating
        });
        this.goBack();
    }
};
AddRestPage.ctorParameters = () => [
    { type: _shared_restaurant_service__WEBPACK_IMPORTED_MODULE_2__.RestaurantService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
AddRestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-add-rest',
        template: _add_rest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_add_rest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddRestPage);



/***/ }),

/***/ 4545:
/*!***********************************************************************!*\
  !*** ./src/app/add-restaurant/add-rest/add-rest.page.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVzdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5042:
/*!***********************************************************************!*\
  !*** ./src/app/add-restaurant/add-rest/add-rest.page.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Add Restaurant</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"restForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Name</ion-label>\r\n      <ion-input formControlName=\"name\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Address</ion-label>\r\n      <ion-input formControlName=\"address\"type=\"text\" ></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Phone</ion-label>\r\n      <ion-input formControlName=\"phone\" type=\"text\" ></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">description</ion-label>\r\n      <ion-textarea formControlName=\"description\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Tags</ion-label>\r\n      <ion-textarea formControlName=\"tags\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Rating (1-5)</ion-label>\r\n      <ion-input formControlName=\"rating\" min=\"1\" max=\"5\" type=\"number\" ></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"success\" expand=\"block\">Add Restaurant</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_add-restaurant_add-rest_add-rest_module_ts.js.map