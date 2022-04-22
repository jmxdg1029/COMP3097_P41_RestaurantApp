"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_details_details_module_ts"],{

/***/ 5048:
/*!***************************************************!*\
  !*** ./src/app/details/details-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 1735);




const routes = [
    {
        path: ':id',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 396:
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 5048);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 1735);








let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 1735:
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page.html?ngResource */ 3877);
/* harmony import */ var _details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss?ngResource */ 7437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _shared_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/restaurant.service */ 2473);








let DetailsPage = class DetailsPage {
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
    getControlLabel(type) {
        return this.restaurantForm.controls[type].value;
    }
    deleteRest(id) {
        this.db.deleteRestaurant(id);
        this.prevPage();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.db.init();
        });
    }
};
DetailsPage.ctorParameters = () => [
    { type: _shared_restaurant_service__WEBPACK_IMPORTED_MODULE_2__.RestaurantService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-details',
        template: _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsPage);



/***/ }),

/***/ 7437:
/*!******************************************************!*\
  !*** ./src/app/details/details.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3877:
/*!******************************************************!*\
  !*** ./src/app/details/details.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form *ngIf=\"restaurantForm\" [formGroup]=\"restaurantForm\" novalidate>\r\n    <ion-item lines=\"full\">\r\n      \r\n      <ion-label type=\"text\">Name: {{getControlLabel('name')}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      \r\n      <ion-label type=\"text\">Description: {{getControlLabel('description')}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      \r\n      <ion-label type=\"text\">Phone Number: {{getControlLabel('phoneNum')}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n\r\n      <ion-label type=\"text\">Tags: {{getControlLabel('tags')}}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      \r\n      <ion-label type=\"text\">Ratings: {{getControlLabel('rating')}}⭐</ion-label>\r\n    </ion-item>\r\n\r\n    <ion-button [routerLink]=\"['/edit-rest',restaurant.id]\" color=\"warning\" expand=\"block\">Edit</ion-button>\r\n    <ion-button (click)=\"deleteRest(restaurant.id)\" color=\"danger\" expand=\"block\">Delete</ion-button>\r\n  </form>\r\n  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_details_details_module_ts.js.map