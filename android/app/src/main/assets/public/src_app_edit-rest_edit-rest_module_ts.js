"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-rest_edit-rest_module_ts"],{

/***/ 6690:
/*!*******************************************************!*\
  !*** ./src/app/edit-rest/edit-rest-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRestPageRoutingModule": () => (/* binding */ EditRestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _edit_rest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-rest.page */ 5634);




const routes = [
    {
        path: ':id',
        component: _edit_rest_page__WEBPACK_IMPORTED_MODULE_0__.EditRestPage
    }
];
let EditRestPageRoutingModule = class EditRestPageRoutingModule {
};
EditRestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditRestPageRoutingModule);



/***/ }),

/***/ 1018:
/*!***********************************************!*\
  !*** ./src/app/edit-rest/edit-rest.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRestPageModule": () => (/* binding */ EditRestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1345);
/* harmony import */ var _edit_rest_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-rest-routing.module */ 6690);
/* harmony import */ var _edit_rest_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-rest.page */ 5634);








let EditRestPageModule = class EditRestPageModule {
};
EditRestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_rest_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditRestPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_rest_page__WEBPACK_IMPORTED_MODULE_1__.EditRestPage]
    })
], EditRestPageModule);



/***/ }),

/***/ 5634:
/*!*********************************************!*\
  !*** ./src/app/edit-rest/edit-rest.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRestPage": () => (/* binding */ EditRestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 655);
/* harmony import */ var _edit_rest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-rest.page.html?ngResource */ 6378);
/* harmony import */ var _edit_rest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-rest.page.scss?ngResource */ 3530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4202);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1345);
/* harmony import */ var _shared_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/restaurant.service */ 2473);








let EditRestPage = class EditRestPage {
    constructor(db, navController, router, formBuilder, actRoute) {
        this.db = db;
        this.navController = navController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.actRoute = actRoute;
        db.getRestaurantID(actRoute.snapshot.params.id).then(resaurant => {
            this.restaurant = resaurant;
            this.restaurantForm = this.formBuilder.group({
                name: [this.restaurant.name],
                address: [this.restaurant.address],
                description: [this.restaurant.description],
                phoneNum: [this.restaurant.phoneNum],
                tags: [this.restaurant.tags],
                rating: [this.restaurant.rating]
            });
        });
    }
    prevPage() {
        this.navController.back();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.db.init();
        });
    }
    onSubmit() {
        this.db.editRestaurant({
            id: this.restaurant.id,
            name: this.restaurantForm.value.name,
            address: this.restaurantForm.value.address,
            description: this.restaurantForm.value.description,
            phoneNum: this.restaurantForm.value.phoneNum,
            tags: this.restaurantForm.value.tags,
            rating: this.restaurantForm.value.rating
        });
        this.prevPage();
    }
};
EditRestPage.ctorParameters = () => [
    { type: _shared_restaurant_service__WEBPACK_IMPORTED_MODULE_2__.RestaurantService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
EditRestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-rest',
        template: _edit_rest_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_rest_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditRestPage);



/***/ }),

/***/ 3530:
/*!**********************************************************!*\
  !*** ./src/app/edit-rest/edit-rest.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "";

/***/ }),

/***/ 6378:
/*!**********************************************************!*\
  !*** ./src/app/edit-rest/edit-rest.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>edit-rest</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form *ngIf=\"restaurantForm\" [formGroup]=\"restaurantForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Name</ion-label>\r\n      <ion-input formControlName=\"name\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Address</ion-label>\r\n      <ion-input formControlName=\"address\"type=\"text\" ></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Phone</ion-label>\r\n      <ion-input formControlName=\"phoneNum\" type=\"text\" ></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">description</ion-label>\r\n      <ion-textarea formControlName=\"description\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Tags</ion-label>\r\n      <ion-textarea formControlName=\"tags\"></ion-textarea>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-label position=\"floating\">Rating (1-5)</ion-label>\r\n      <ion-input formControlName=\"rating\" min=\"1\" max=\"5\" type=\"number\" ></ion-input>\r\n    </ion-item>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" color=\"success\" expand=\"block\">UPDATE RESTAURANT</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);