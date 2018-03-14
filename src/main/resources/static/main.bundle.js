webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/account-form/account-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account-form/account-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Create New Account</h2>\n\n<form #f=\"ngForm\" (ngSubmit)=\"createAccount(account.value)\">\n    <div (ngModelGroup)=\"account\" #account=\"ngModelGroup\">\n        <div class=\"form-group row\">\n            <div class=\"col col-sm-2\" align=\"right\">\n                <label for=\"username\">Username : </label>\n            </div>\n            <div class=\"col col-sm-5\" >\n                <input [(ngModel)]=\"acc.username\" #username=\"ngModel\" required\n                       name=\"username\" \n                       id=\"username\" \n                       type=\"text\" \n                       class=\"form-control\"\n                       >  \n            </div>\n            <div class=\"col col-sm-5\" >\n                <div *ngIf=\"username.touched && username.invalid\" class=\"alert alert-danger\">username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col col-sm-2\" align=\"right\">\n                <label for=\"password\">Password : </label>\n            </div>\n            <div class=\"col col-sm-5\" >\n                <input [ngModel]=\"acc.password\" #password=\"ngModel\" required\n                       name=\"password\" \n                       id=\"password\" \n                       type=\"password\" \n                       class=\"form-control\"\n                         >\n            </div>\n            <div class=\"col col-sm-5\" >\n                <div *ngIf=\"password.touched && password.invalid\" class=\"alert alert-danger\">password is required</div>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col col-sm-2\" align=\"right\">\n                <label for=\"activeStatus\">is Active : </label>     \n            </div>\n            <div class=\"col col-sm-5\" > \n                <label class=\"custom-control custom-radio\">\n                    <input [ngModel]=\"acc.activeStatus\" [value]=\"true\" name=\"activeStatus\" type=\"radio\" class=\"custom-control-input\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Yes</span>\n                </label>\n                <label class=\"custom-control custom-radio\">\n                    <input [ngModel]=\"acc.activeStatus\"  [value]=\"false\" name=\"activeStatus\" type=\"radio\" class=\"custom-control-input\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">No</span>\n                </label>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col col-sm-2\" align=\"right\">\n                <label for=\"locked\">is Locked :</label>\n            </div>\n            <div class=\"col col-sm-5\" >\n                <label class=\"custom-control custom-radio\">\n                    <input [ngModel]=\"acc.locked\" [value]=\"true\" name=\"locked\" type=\"radio\" class=\"custom-control-input\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Yes</span>\n                </label>\n                <label class=\"custom-control custom-radio\">\n                    <input [ngModel]=\"acc.locked\" [value]=\"false\" name=\"locked\" type=\"radio\" class=\"custom-control-input\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">No</span>\n                </label>\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <div class=\"col col-sm-2\" align=\"right\">\n                <label for=\"accountExpired\">is Expired : </label>\n            </div>\n            <div class=\"col col-sm-5\" >\n                <label class=\"custom-control custom-radio\">\n                    <input [ngModel]=\"acc.accountExpired\" [value]=\"true\" name=\"accountExpired\" type=\"radio\" class=\"custom-control-input\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">Yes</span>\n                </label>\n                <label class=\"custom-control custom-radio\">\n                    <input [ngModel]=\"acc.accountExpired\" [value]=\"false\" name=\"accountExpired\" type=\"radio\" class=\"custom-control-input\">\n                    <span class=\"custom-control-indicator\"></span>\n                    <span class=\"custom-control-description\">No</span>\n                </label>\n            </div>\n        </div> \n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col col-sm-2\" align=\"right\">\n            <label>Blogs</label>\n        </div>\n        <div class=\"col col-sm-5\" ><input [ngModel]=\"acc.blogs\" #blogs=\"ngModel\"\n                       name=\"blogs\" \n                       id=\"blogs\" \n                       type=\"hidden\" value=\"[]\" >\n            <label>account.blogs.value | json</label>\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col col-sm-1\" align=\"right\">\n        </div>\n        <div class=\"col col-sm-2\" align=\"center\">\n            <button class=\"btn btn-primary\" type=\"submit\">Create Account</button>\n        </div>\n        <div class=\"col col-sm-2\" align=\"center\">\n            <button class=\"btn btn-primary\" routerLink=\"/Accounts\"  >\n                <i class=\"fa fa-window-close\" aria-hidden=\"true\"> Cancel</i>   \n            </button>\n        </div>  \n    </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/account/account-form/account-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_bad_input_error__ = __webpack_require__("../../../../../src/app/common/bad-input-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_service__ = __webpack_require__("../../../../../src/app/account/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountFormComponent = (function () {
    //    form;
    function AccountFormComponent(fb, accountService, router, activatedRoute) {
        this.accountService = accountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.account = {};
        this.acc = {};
        //        this.form = fb.group({
        //            name: ['', Validators.required],
        //            contact: fb.group({
        //                email: [],
        //                phone: []
        //            }),
        //            topics: fb.array([])
        //            
        //    id?: number;
        //    username: string;
        //    password: string;
        //    active: boolean; 
        //    locked: boolean;
        //    accountExpired?: boolean;
        //    credentialsExpired?: boolean; 
        //        });
    }
    AccountFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap
            .subscribe(function (params) {
            if (params.has('id')) {
                _this.createorupdate = "update";
                _this.updateid = params.get('id');
                //  this.getAccount(this.updateid);
            }
        });
    };
    //    getAccount(id: string){        
    //        this.accountService.get(id)
    //            .subscribe(resource => {
    //                this.acc = resource;
    //               // this.account = resource;
    //                //alert(JSON.stringify(this.account)) ;
    //            });                    
    //    }
    AccountFormComponent.prototype.createAccount = function (account) {
        this.accountService.create(account)
            .subscribe(function (data) {
            account.id = data.id;
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__common_bad_input_error__["a" /* BadInputError */])
                // this.form.setErrors(error.originalError);
                alert(error.originalError.message);
            else
                throw error;
        });
        // this.router.navigate(['/Accounts']);
    };
    AccountFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-form',
            template: __webpack_require__("../../../../../src/app/account/account-form/account-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/account-form/account-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__accounts_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], AccountFormComponent);
    return AccountFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/account-view/account-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account-view/account-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  account-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/account/account-view/account-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountViewComponent = (function () {
    function AccountViewComponent() {
    }
    AccountViewComponent.prototype.ngOnInit = function () {
    };
    AccountViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account-view',
            template: __webpack_require__("../../../../../src/app/account/account-view/account-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/account-view/account-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountViewComponent);
    return AccountViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Accounts</h2> \n<a routerLink=\"/Account/new\"\n            class=\"btn btn-link btn-danger\">Create New</a> \n<table class=\"table table-stripped\">\n    <tr>\n        <th>#</th>\n        <th>Username</th>\n        <th>isActive</th>\n        <th>isLocked</th>\n        <th>isExpired</th>\n        <th>Date Created</th>\n        <th>Blogs</th>\n        <th></th>\n    </tr>\n    <tr *ngFor=\"let account of accounts\" >           \n        <td>\n            <a routerLink=\"/Account/{{account.id}}\" class=\"btn btn-link btn-danger\">\n                <i class=\"fa fa-eye\" aria-hidden=\"true\"> {{account.id}}</i>                \n            </a> \n        </td>\n        <td>{{account.username}}</td>\n        <td>{{account.active}}</td>\n        <td>{{account.locked}}</td>\n        <td>{{account.accountExpired}}</td>\n        <td>{{account.creationTime}}</td>\n        <td>{{account.blogs.length}}</td>\n        <td> \n            <a routerLink=\"/Account/{{account.id}}/edit\" class=\"btn btn-link btn-danger\">\n                <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"> Edit</i>                \n            </a> \n             | <button (click)=\"deleteAccount(account)\" class=\"btn btn-link btn-danger\">\n                 <i class=\"fa fa-window-close\" aria-hidden=\"true\"> Disable</i></button> \n        </td>\n    </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service__ = __webpack_require__("../../../../../src/app/account/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    //@ViewChild('account') accountForm: NgForm;
    function AccountComponent(accountService, router) {
        this.router = router;
        this.accountService = accountService;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getAllAccounts();
    };
    AccountComponent.prototype.getAllAccounts = function () {
        var _this = this;
        this.accountService.getAll()
            .subscribe(function (accounts) { return _this.accounts = accounts; });
    };
    AccountComponent.prototype.updateAccount = function (account) {
        this.accountService.update(account.id, account)
            .subscribe(function (response) { return console.log(response); });
    };
    AccountComponent.prototype.deleteAccount = function (account) {
        var _this = this;
        var index = this.accounts.indexOf(account);
        this.accounts.splice(index, 1);
        this.accountService.delete(account)
            .subscribe(null, function (error) {
            _this.accounts.splice(index, 0, account);
            if (error instanceof __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__["a" /* NotFoundError */])
                alert('Account has already been deleted.');
            else
                throw error;
        });
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("../../../../../src/app/account/account.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__accounts_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AccountComponent);
    return AccountComponent;
}());

//


/***/ }),

/***/ "../../../../../src/app/account/accounts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_data_service__ = __webpack_require__("../../../../../src/app/common/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = (function (_super) {
    __extends(AccountService, _super);
    function AccountService(httpClient) {
        var _this = this;
        var accountUrl = '/accounts';
        _this = _super.call(this, httpClient, accountUrl) || this;
        return _this;
    }
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AccountService);
    return AccountService;
}(__WEBPACK_IMPORTED_MODULE_2__common_services_data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Admin</h1>\n<h2>Orders</h2>\n<ul>\n  <li *ngFor=\"let product of products\">{{ product }}</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(productsService) {
        this.productsService = productsService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService.getAll()
            .subscribe(function (products) { return _this.products = products; });
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_product_service__["a" /* ProductService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_not_found_request_not_found_component__ = __webpack_require__("../../../../../src/app/request-not-found/request-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__no_access_no_access_component__ = __webpack_require__("../../../../../src/app/no-access/no-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_types_product_type_form_product_type_form_component__ = __webpack_require__("../../../../../src/app/product-types/product-type-form/product-type-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_types_product_types_component__ = __webpack_require__("../../../../../src/app/product-types/product-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_product_form_product_form_component__ = __webpack_require__("../../../../../src/app/products/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_product_view_product_view_component__ = __webpack_require__("../../../../../src/app/products/product-view/product-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__audiances_audiances_component__ = __webpack_require__("../../../../../src/app/audiances/audiances.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__audiances_audiance_form_audiance_form_component__ = __webpack_require__("../../../../../src/app/audiances/audiance-form/audiance-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pre_requisites_pre_requisites_component__ = __webpack_require__("../../../../../src/app/pre-requisites/pre-requisites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__skills_skill_form_skill_form_component__ = __webpack_require__("../../../../../src/app/skills/skill-form/skill-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__topics_topics_component__ = __webpack_require__("../../../../../src/app/topics/topics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__topics_topic_form_topic_form_component__ = __webpack_require__("../../../../../src/app/topics/topic-form/topic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__distribution_methods_distribution_methods_component__ = __webpack_require__("../../../../../src/app/distribution-methods/distribution-methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__distribution_methods_distribution_method_form_distribution_method_form_component__ = __webpack_require__("../../../../../src/app/distribution-methods/distribution-method-form/distribution-method-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__topics_topic_view_topic_view_component__ = __webpack_require__("../../../../../src/app/topics/topic-view/topic-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__distribution_methods_distribution_method_view_distribution_method_view_component__ = __webpack_require__("../../../../../src/app/distribution-methods/distribution-method-view/distribution-method-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__audiances_audiance_view_audiance_view_component__ = __webpack_require__("../../../../../src/app/audiances/audiance-view/audiance-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__skills_skill_view_skill_view_component__ = __webpack_require__("../../../../../src/app/skills/skill-view/skill-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pre_requisites_pre_requisite_form_pre_requisite_form_component__ = __webpack_require__("../../../../../src/app/pre-requisites/pre-requisite-form/pre-requisite-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pre_requisites_pre_requisite_view_pre_requisite_view_component__ = __webpack_require__("../../../../../src/app/pre-requisites/pre-requisite-view/pre-requisite-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__service_category_service_category_component__ = __webpack_require__("../../../../../src/app/service-category/service-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__service_category_service_category_view_service_category_view_component__ = __webpack_require__("../../../../../src/app/service-category/service-category-view/service-category-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_category_service_category_form_service_category_form_component__ = __webpack_require__("../../../../../src/app/service-category/service-category-form/service-category-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'accounts', component: __WEBPACK_IMPORTED_MODULE_10__account_account_component__["a" /* AccountComponent */] },
    /* Product */
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_11__products_products_component__["a" /* ProductsComponent */] },
    { path: 'products/:id/view', component: __WEBPACK_IMPORTED_MODULE_12__products_product_view_product_view_component__["a" /* ProductViewComponent */] },
    { path: 'admin/products/new', component: __WEBPACK_IMPORTED_MODULE_9__products_product_form_product_form_component__["a" /* ProductFormComponent */] },
    { path: 'admin/products/:id', component: __WEBPACK_IMPORTED_MODULE_9__products_product_form_product_form_component__["a" /* ProductFormComponent */] },
    /* Product Type */
    { path: 'producttypes', component: __WEBPACK_IMPORTED_MODULE_8__product_types_product_types_component__["a" /* ProductTypesComponent */] },
    { path: 'producttypes/:id/view', component: __WEBPACK_IMPORTED_MODULE_12__products_product_view_product_view_component__["a" /* ProductViewComponent */] },
    { path: 'admin/producttypes/new', component: __WEBPACK_IMPORTED_MODULE_7__product_types_product_type_form_product_type_form_component__["a" /* ProductTypeFormComponent */] },
    { path: 'admin/producttypes/:id', component: __WEBPACK_IMPORTED_MODULE_7__product_types_product_type_form_product_type_form_component__["a" /* ProductTypeFormComponent */] },
    /* Pre Requisites */
    { path: 'prerequisites', component: __WEBPACK_IMPORTED_MODULE_15__pre_requisites_pre_requisites_component__["a" /* PreRequisitesComponent */] },
    { path: 'prerequisites/:id/view', component: __WEBPACK_IMPORTED_MODULE_27__pre_requisites_pre_requisite_view_pre_requisite_view_component__["a" /* PreRequisiteViewComponent */] },
    { path: 'admin/prerequisites/new', component: __WEBPACK_IMPORTED_MODULE_26__pre_requisites_pre_requisite_form_pre_requisite_form_component__["a" /* PreRequisiteFormComponent */] },
    { path: 'admin/prerequisites/:id', component: __WEBPACK_IMPORTED_MODULE_26__pre_requisites_pre_requisite_form_pre_requisite_form_component__["a" /* PreRequisiteFormComponent */] },
    /* Skills */
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_16__skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'skills/:id/view', component: __WEBPACK_IMPORTED_MODULE_25__skills_skill_view_skill_view_component__["a" /* SkillViewComponent */] },
    { path: 'admin/skills/new', component: __WEBPACK_IMPORTED_MODULE_17__skills_skill_form_skill_form_component__["a" /* SkillFormComponent */] },
    { path: 'admin/skills/:id', component: __WEBPACK_IMPORTED_MODULE_17__skills_skill_form_skill_form_component__["a" /* SkillFormComponent */] },
    /* Audiances */
    { path: 'audiances', component: __WEBPACK_IMPORTED_MODULE_13__audiances_audiances_component__["a" /* AudiancesComponent */] },
    { path: 'audiances/:id/view', component: __WEBPACK_IMPORTED_MODULE_24__audiances_audiance_view_audiance_view_component__["a" /* AudianceViewComponent */] },
    { path: 'admin/audiances/new', component: __WEBPACK_IMPORTED_MODULE_14__audiances_audiance_form_audiance_form_component__["a" /* AudianceFormComponent */] },
    { path: 'admin/audiances/:id', component: __WEBPACK_IMPORTED_MODULE_14__audiances_audiance_form_audiance_form_component__["a" /* AudianceFormComponent */] },
    /* Topics */
    { path: 'topics', component: __WEBPACK_IMPORTED_MODULE_18__topics_topics_component__["a" /* TopicsComponent */] },
    { path: 'topics/:id/view', component: __WEBPACK_IMPORTED_MODULE_22__topics_topic_view_topic_view_component__["a" /* TopicViewComponent */] },
    { path: 'admin/topics/new', component: __WEBPACK_IMPORTED_MODULE_19__topics_topic_form_topic_form_component__["a" /* TopicFormComponent */] },
    { path: 'admin/topics/:id', component: __WEBPACK_IMPORTED_MODULE_19__topics_topic_form_topic_form_component__["a" /* TopicFormComponent */] },
    /* Distribution Methods */
    { path: 'distributionmethods', component: __WEBPACK_IMPORTED_MODULE_20__distribution_methods_distribution_methods_component__["a" /* DistributionMethodsComponent */] },
    { path: 'distributionmethods/:id/view', component: __WEBPACK_IMPORTED_MODULE_23__distribution_methods_distribution_method_view_distribution_method_view_component__["a" /* DistributionMethodViewComponent */] },
    { path: 'admin/distributionmethods/new', component: __WEBPACK_IMPORTED_MODULE_21__distribution_methods_distribution_method_form_distribution_method_form_component__["a" /* DistributionMethodFormComponent */] },
    { path: 'admin/distributionmethods/:id', component: __WEBPACK_IMPORTED_MODULE_21__distribution_methods_distribution_method_form_distribution_method_form_component__["a" /* DistributionMethodFormComponent */] },
    /* Service Categories */
    { path: 'servicecategories', component: __WEBPACK_IMPORTED_MODULE_28__service_category_service_category_component__["a" /* ServiceCategoryComponent */] },
    { path: 'servicecategories/:id/view', component: __WEBPACK_IMPORTED_MODULE_29__service_category_service_category_view_service_category_view_component__["a" /* ServiceCategoryViewComponent */] },
    { path: 'admin/servicecategories/new', component: __WEBPACK_IMPORTED_MODULE_30__service_category_service_category_form_service_category_form_component__["a" /* ServiceCategoryFormComponent */] },
    { path: 'admin/servicecategories/:id', component: __WEBPACK_IMPORTED_MODULE_30__service_category_service_category_form_service_category_form_component__["a" /* ServiceCategoryFormComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a" /* AdminComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'no-access', component: __WEBPACK_IMPORTED_MODULE_4__no_access_no_access_component__["a" /* NoAccessComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__request_not_found_request_not_found_component__["a" /* RequestNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */] })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<app-header></app-header>\n<!-- /Header -->\n\n <!--Content-->     \n<router-outlet></router-outlet>\n <!--/Content-->   \n\n\n <!--Footer--> \n<app-footer></app-footer>\n <!--/Footer--> "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'HiSolutions';
        this.name = '';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/header/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_accounts_service__ = __webpack_require__("../../../../../src/app/account/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_app_error_handler__ = __webpack_require__("../../../../../src/app/common/app-error-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__request_not_found_request_not_found_component__ = __webpack_require__("../../../../../src/app/request-not-found/request-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__account_account_form_account_form_component__ = __webpack_require__("../../../../../src/app/account/account-form/account-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__account_account_view_account_view_component__ = __webpack_require__("../../../../../src/app/account/account-view/account-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__no_access_no_access_component__ = __webpack_require__("../../../../../src/app/no-access/no-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__products_product_form_product_form_component__ = __webpack_require__("../../../../../src/app/products/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__product_types_product_types_component__ = __webpack_require__("../../../../../src/app/product-types/product-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__vendors_vendors_component__ = __webpack_require__("../../../../../src/app/vendors/vendors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__vendors_vendor_service__ = __webpack_require__("../../../../../src/app/vendors/vendor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pre_requisites_pre_requisites_component__ = __webpack_require__("../../../../../src/app/pre-requisites/pre-requisites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__product_types_product_type_form_product_type_form_component__ = __webpack_require__("../../../../../src/app/product-types/product-type-form/product-type-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__audiances_audiances_component__ = __webpack_require__("../../../../../src/app/audiances/audiances.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__topics_topics_component__ = __webpack_require__("../../../../../src/app/topics/topics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__distribution_methods_distribution_methods_component__ = __webpack_require__("../../../../../src/app/distribution-methods/distribution-methods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__audiances_audiance_form_audiance_form_component__ = __webpack_require__("../../../../../src/app/audiances/audiance-form/audiance-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__skills_skill_form_skill_form_component__ = __webpack_require__("../../../../../src/app/skills/skill-form/skill-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__topics_topic_form_topic_form_component__ = __webpack_require__("../../../../../src/app/topics/topic-form/topic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__vendors_vendor_form_vendor_form_component__ = __webpack_require__("../../../../../src/app/vendors/vendor-form/vendor-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__distribution_methods_distribution_method_form_distribution_method_form_component__ = __webpack_require__("../../../../../src/app/distribution-methods/distribution-method-form/distribution-method-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__common_shared_module__ = __webpack_require__("../../../../../src/app/common/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__products_product_view_product_view_component__ = __webpack_require__("../../../../../src/app/products/product-view/product-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__distribution_methods_distribution_method_view_distribution_method_view_component__ = __webpack_require__("../../../../../src/app/distribution-methods/distribution-method-view/distribution-method-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__topics_topic_view_topic_view_component__ = __webpack_require__("../../../../../src/app/topics/topic-view/topic-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__audiances_audiance_view_audiance_view_component__ = __webpack_require__("../../../../../src/app/audiances/audiance-view/audiance-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__skills_skill_view_skill_view_component__ = __webpack_require__("../../../../../src/app/skills/skill-view/skill-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pre_requisites_pre_requisite_form_pre_requisite_form_component__ = __webpack_require__("../../../../../src/app/pre-requisites/pre-requisite-form/pre-requisite-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pre_requisites_pre_requisite_view_pre_requisite_view_component__ = __webpack_require__("../../../../../src/app/pre-requisites/pre-requisite-view/pre-requisite-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__product_types_product_type_service__ = __webpack_require__("../../../../../src/app/product-types/product-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pre_requisites_pre_requisite_service__ = __webpack_require__("../../../../../src/app/pre-requisites/pre-requisite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__product_types_product_type_view_product_type_view_component__ = __webpack_require__("../../../../../src/app/product-types/product-type-view/product-type-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__audiances_audiance_service__ = __webpack_require__("../../../../../src/app/audiances/audiance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__topics_topic_service__ = __webpack_require__("../../../../../src/app/topics/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__distribution_methods_distribution_method_service__ = __webpack_require__("../../../../../src/app/distribution-methods/distribution-method.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__skills_skill_service__ = __webpack_require__("../../../../../src/app/skills/skill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__products_product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__vendors_vendor_view_vendor_view_component__ = __webpack_require__("../../../../../src/app/vendors/vendor-view/vendor-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__content_content_showcase_content_showcase_component__ = __webpack_require__("../../../../../src/app/content/content-showcase/content-showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__service_category_service_category_component__ = __webpack_require__("../../../../../src/app/service-category/service-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__service_category_service_category_form_service_category_form_component__ = __webpack_require__("../../../../../src/app/service-category/service-category-form/service-category-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__service_category_service_category_view_service_category_view_component__ = __webpack_require__("../../../../../src/app/service-category/service-category-view/service-category-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__service_category_service_category_service__ = __webpack_require__("../../../../../src/app/service-category/service-category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import {AlertModule} from 'bootstrap/alert';
//import {AlertModule} from 'ngx-bootstrap/alert';
//import {AngularFireModule} from 'angularfire2';
//import {AngularFireDatabaseModule} from 'angularfire2/database';
//import {AngularFireAuthModule} from 'angularfire2/auth';
//import { BsDropdownModule } from 'ngx-bootstrap';
//import { DropdownModule } from 'ngx-bootstrap';
//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


















//import {AuthService} from './common/services/auth.service';







































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_11__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__request_not_found_request_not_found_component__["a" /* RequestNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_15__account_account_form_account_form_component__["a" /* AccountFormComponent */],
                __WEBPACK_IMPORTED_MODULE_16__account_account_view_account_view_component__["a" /* AccountViewComponent */],
                __WEBPACK_IMPORTED_MODULE_17__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_56__content_content_showcase_content_showcase_component__["a" /* ContentShowcaseComponent */],
                __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_21__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_22__no_access_no_access_component__["a" /* NoAccessComponent */],
                __WEBPACK_IMPORTED_MODULE_23__products_product_form_product_form_component__["a" /* ProductFormComponent */],
                __WEBPACK_IMPORTED_MODULE_24__product_types_product_types_component__["a" /* ProductTypesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__vendors_vendors_component__["a" /* VendorsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pre_requisites_pre_requisites_component__["a" /* PreRequisitesComponent */],
                __WEBPACK_IMPORTED_MODULE_28__product_types_product_type_form_product_type_form_component__["a" /* ProductTypeFormComponent */],
                __WEBPACK_IMPORTED_MODULE_33__audiances_audiance_form_audiance_form_component__["a" /* AudianceFormComponent */],
                __WEBPACK_IMPORTED_MODULE_29__audiances_audiances_component__["a" /* AudiancesComponent */],
                __WEBPACK_IMPORTED_MODULE_34__skills_skill_form_skill_form_component__["a" /* SkillFormComponent */],
                __WEBPACK_IMPORTED_MODULE_30__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_31__topics_topics_component__["a" /* TopicsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__topics_topic_form_topic_form_component__["a" /* TopicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_37__distribution_methods_distribution_method_form_distribution_method_form_component__["a" /* DistributionMethodFormComponent */],
                __WEBPACK_IMPORTED_MODULE_32__distribution_methods_distribution_methods_component__["a" /* DistributionMethodsComponent */],
                __WEBPACK_IMPORTED_MODULE_36__vendors_vendor_form_vendor_form_component__["a" /* VendorFormComponent */],
                __WEBPACK_IMPORTED_MODULE_40__products_product_view_product_view_component__["a" /* ProductViewComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pre_requisites_pre_requisite_view_pre_requisite_view_component__["a" /* PreRequisiteViewComponent */],
                __WEBPACK_IMPORTED_MODULE_45__pre_requisites_pre_requisite_form_pre_requisite_form_component__["a" /* PreRequisiteFormComponent */],
                __WEBPACK_IMPORTED_MODULE_44__skills_skill_view_skill_view_component__["a" /* SkillViewComponent */],
                __WEBPACK_IMPORTED_MODULE_43__audiances_audiance_view_audiance_view_component__["a" /* AudianceViewComponent */],
                __WEBPACK_IMPORTED_MODULE_42__topics_topic_view_topic_view_component__["a" /* TopicViewComponent */],
                __WEBPACK_IMPORTED_MODULE_41__distribution_methods_distribution_method_view_distribution_method_view_component__["a" /* DistributionMethodViewComponent */],
                __WEBPACK_IMPORTED_MODULE_49__product_types_product_type_view_product_type_view_component__["a" /* ProductTypeViewComponent */],
                __WEBPACK_IMPORTED_MODULE_55__vendors_vendor_view_vendor_view_component__["a" /* VendorViewComponent */],
                __WEBPACK_IMPORTED_MODULE_57__service_category_service_category_component__["a" /* ServiceCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_58__service_category_service_category_form_service_category_form_component__["a" /* ServiceCategoryFormComponent */],
                __WEBPACK_IMPORTED_MODULE_59__service_category_service_category_view_service_category_view_component__["a" /* ServiceCategoryViewComponent */]
            ],
            imports: [
                //    BsDropdownModule ,
                //    BsDropdownModule.forRoot() ,
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_61__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                //        AngularFireModule.initializeApp(environment.firebase),
                //        AngularFireDatabaseModule,
                //        AngularFireAuthModule,
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormsModule"],
                //        AlertModule,
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_38__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_39__common_shared_module__["a" /* SharedModule */]
            ],
            providers: [
                //        AuthService,
                __WEBPACK_IMPORTED_MODULE_12__account_accounts_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_47__product_types_product_type_service__["a" /* ProductTypeService */],
                __WEBPACK_IMPORTED_MODULE_54__products_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_26__vendors_vendor_service__["a" /* VendorService */],
                __WEBPACK_IMPORTED_MODULE_48__pre_requisites_pre_requisite_service__["a" /* PreRequisiteService */],
                __WEBPACK_IMPORTED_MODULE_50__audiances_audiance_service__["a" /* AudianceService */],
                __WEBPACK_IMPORTED_MODULE_51__topics_topic_service__["a" /* TopicService */],
                __WEBPACK_IMPORTED_MODULE_53__skills_skill_service__["a" /* SkillService */],
                __WEBPACK_IMPORTED_MODULE_52__distribution_methods_distribution_method_service__["a" /* DistributionMethodService */],
                __WEBPACK_IMPORTED_MODULE_60__service_category_service_category_service__["a" /* ServiceCategoryService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_13__common_app_error_handler__["a" /* AppErrorHandler */] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/audiances/audiance-form/audiance-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/audiances/audiance-form/audiance-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"saveAudiance(audiance)\">\n    <div class=\"row form-group\"> \n        <h2 *ngIf=\"isNewForm\">Create new Audiance</h2>\n        <h2 *ngIf=\"!isNewForm\">Edit Audiance Details</h2>\n    </div>\n\n    <div  *ngIf=\"!isNewForm\" class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"id\" >ID : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"id\" name=\"id\" [(ngModel)]=\"audiance.id\" disabled/> \n        </div>\n    </div> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"name\" >Name : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"name\" name=\"name\" #name=\"ngModel\"  [(ngModel)]=\"audiance.name\"/> \n        </div>\n    </div>      \n\n    <!--[(ngModel)]=\"audiance.preRequisites\"--> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <button type=\"submit\" class=\"btn btn-primary\"  >\n                <i *ngIf=\"isNewForm\" class=\"fa fa-plus\" aria-hidden=\"true\"> | Save</i>\n                <i *ngIf=\"!isNewForm\" class=\"fa fa-edit\" aria-hidden=\"true\"> | Update</i>\n            </button>  \n        </div>\n        <div class=\"col col-sm-8\">\n            <a routerLink=\"/audiances\" class=\"btn btn-warning \"  >\n                <i class=\"fa fa-times\" aria-hidden=\"true\"> | Cancel</i>\n            </a> \n        </div>\n    </div>\n</form>  "

/***/ }),

/***/ "../../../../../src/app/audiances/audiance-form/audiance-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudianceFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__audiance_service__ = __webpack_require__("../../../../../src/app/audiances/audiance.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AudianceFormComponent = (function () {
    function AudianceFormComponent(route, _audianceService) {
        this.route = route;
        this._audianceService = _audianceService;
        this.isNewForm = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.audiance = {
            name: ""
        };
        if (this.id) {
            this.getAudiance(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }
    AudianceFormComponent.prototype.ngOnInit = function () {
    };
    AudianceFormComponent.prototype.getAudiance = function (audianceId) {
        var _this = this;
        this._audianceService.get(audianceId)
            .take(1)
            .subscribe(function (prod) { return _this.audiance = prod; });
    };
    AudianceFormComponent.prototype.saveAudiance = function (audiance) {
        console.log(JSON.stringify(audiance));
        if (this.isNewForm) {
            this._audianceService.create(audiance)
                .subscribe(function (prod) {
                document.location.assign("/audiances");
            });
        }
        else {
            this._audianceService.update(this.id, audiance)
                .subscribe(function (prod) {
                document.location.assign("/audiances");
            });
        }
    };
    AudianceFormComponent.prototype.deleteAudiance = function (audiance) {
        this._audianceService.delete(audiance)
            .subscribe(function () {
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__["a" /* NotFoundError */])
                alert('audiance has already been deleted.');
            else
                throw error;
        });
    };
    AudianceFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-audiance-form',
            template: __webpack_require__("../../../../../src/app/audiances/audiance-form/audiance-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/audiances/audiance-form/audiance-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__audiance_service__["a" /* AudianceService */]])
    ], AudianceFormComponent);
    return AudianceFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/audiances/audiance-view/audiance-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/audiances/audiance-view/audiance-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  audiance-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/audiances/audiance-view/audiance-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudianceViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AudianceViewComponent = (function () {
    function AudianceViewComponent() {
    }
    AudianceViewComponent.prototype.ngOnInit = function () {
    };
    AudianceViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-audiance-view',
            template: __webpack_require__("../../../../../src/app/audiances/audiance-view/audiance-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/audiances/audiance-view/audiance-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AudianceViewComponent);
    return AudianceViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/audiances/audiance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudianceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_data_service__ = __webpack_require__("../../../../../src/app/common/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AudianceService = (function (_super) {
    __extends(AudianceService, _super);
    function AudianceService(httpClient) {
        var _this = this;
        var resourcePath = '/rest/audiances';
        _this = _super.call(this, httpClient, resourcePath) || this;
        return _this;
    }
    AudianceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AudianceService);
    return AudianceService;
}(__WEBPACK_IMPORTED_MODULE_2__common_services_data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/audiances/audiances.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/audiances/audiances.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Audiances</h2>  \n    <a routerLink=\"/admin/audiances/new\" \n        class=\"btn btn-link btn-danger\">Create New</a> \n        \n    <table class=\"table table-stripped\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>Name</th>\n                <th>Last Modified</th>\n                <th>Last Modified By</th> \n                <th>&nbsp;</th> \n            </tr> </thead>\n        <tr *ngFor=\"let audiance of audiances\" >           \n            <td>\n                <a [routerLink]=\"['/audiances/', audiance.id, 'view']\" class=\"btn btn-link btn-danger\">\n                    <i class=\"fa fa-eye\" aria-hidden=\"true\">{{audiance.id}}</i>                \n                </a> \n            </td>\n            <td>{{audiance.name}}</td>\n            <td>{{audiance.modificationTime }}</td> \n            <td>{{audiance.modifiedByUser}}</td> \n            <td> \n                <a [routerLink]=\"['/admin/audiances/', audiance.id]\"   class=\"btn btn-link btn-link-info\">\n                    <i class=\"fa fa-edit\" aria-hidden=\"true\"> Edit</i>                \n                </a>  \n                <button (click)=\"deleteAudiance(audiance)\" class=\"btn btn-link btn-link-danger\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\"> Delete</i></button> \n            </td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/audiances/audiances.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudiancesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audiance_service__ = __webpack_require__("../../../../../src/app/audiances/audiance.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AudiancesComponent = (function () {
    function AudiancesComponent(_audianceService) {
        this._audianceService = _audianceService;
    }
    AudiancesComponent.prototype.ngOnInit = function () {
        this.getAudiances();
    };
    AudiancesComponent.prototype.getAudiances = function () {
        var _this = this;
        this._audianceService.getAll().subscribe(function (prods) { return _this.audiances = prods; });
    };
    AudiancesComponent.prototype.deleteAudiance = function (audiance) {
        var _this = this;
        this._audianceService.delete(audiance)
            .subscribe(function () {
            var index = _this.audiances.indexOf(audiance);
            _this.audiances.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__["a" /* NotFoundError */])
                alert('audiance has already been deleted.');
            else
                throw error;
        });
    };
    AudiancesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-audiances',
            template: __webpack_require__("../../../../../src/app/audiances/audiances.component.html"),
            styles: [__webpack_require__("../../../../../src/app/audiances/audiances.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__audiance_service__["a" /* AudianceService */]])
    ], AudiancesComponent);
    return AudiancesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/app-error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppErrorHandler; });
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var AppErrorHandler = (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        //  alert('An unexpected error occured.' + '\n' + error.originalError + '.');
        console.log(error);
    };
    return AppErrorHandler;
}());



/***/ }),

/***/ "../../../../../src/app/common/app-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppError; });
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var AppError = (function () {
    function AppError(originalError) {
        this.originalError = originalError;
    }
    return AppError;
}());



/***/ }),

/***/ "../../../../../src/app/common/bad-input-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadInputError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("../../../../../src/app/common/app-error.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var BadInputError = (function (_super) {
    __extends(BadInputError, _super);
    function BadInputError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadInputError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));



/***/ }),

/***/ "../../../../../src/app/common/directives/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
        // TODO: Implement something like this, instead:
        // https://christianliebel.com/2016/05/angular-2-a-simple-click-outside-directive/
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/common/not-found-error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_error__ = __webpack_require__("../../../../../src/app/common/app-error.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(__WEBPACK_IMPORTED_MODULE_0__app_error__["a" /* AppError */]));



/***/ }),

/***/ "../../../../../src/app/common/script-store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptStore; });
var ScriptStore = [
    { name: 'ckeditor-basic', src: '../../../assets/ckeditor-basic/ckeditor.js' },
    { name: 'ckeditor-full', src: '../../../assets/ckeditor-full/ckeditor.js' },
    { name: 'jquery', src: '../../../assets/jquery/jquery.js' },
    { name: 'cdn-ckeditor-basic', src: 'https://cdn.ckeditor.com/4.8.0/basic/ckeditor.js' },
    { name: 'cdn-ckeditor-full', src: 'https://cdn.ckeditor.com/4.8.0/full/ckeditor.js' },
    { name: 'filepicker', src: 'https://api.filestackapi.com/filestack.js' },
    { name: 'rangeSlider', src: '../../../assets/js/ion.rangeSlider.min.js' }
];


/***/ }),

/***/ "../../../../../src/app/common/script.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__script_store__ = __webpack_require__("../../../../../src/app/common/script-store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScriptService = (function () {
    function ScriptService() {
        var _this = this;
        this.scripts = {};
        __WEBPACK_IMPORTED_MODULE_1__script_store__["a" /* ScriptStore */].forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
        });
    };
    ScriptService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ScriptService);
    return ScriptService;
}());



/***/ }),

/***/ "../../../../../src/app/common/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bad_input_error__ = __webpack_require__("../../../../../src/app/common/bad-input-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_error__ = __webpack_require__("../../../../../src/app/common/app-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__universal_declerations__ = __webpack_require__("../../../../../src/app/common/universal-declerations.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DataService = (function (_super) {
    __extends(DataService, _super);
    function DataService(httpClient, resourcePath) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.url = _this.hostUrl + resourcePath;
        _this.httpClient = httpClient;
        //alert (this.url) ;        
        _this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        _this.headers = _this.headers.set('Content-Type', 'application/json; charset=utf-8');
        return _this;
    }
    DataService.prototype.getAll = function () {
        return this.httpClient.get(this.url)
            .retry(3)
            .catch(this.handleError);
    };
    DataService.prototype.create = function (resource) {
        return this.httpClient.post(this.url, JSON.stringify(resource), {
            headers: this.headers
        })
            .catch(this.handleError);
    };
    DataService.prototype.get = function (id) {
        return this.httpClient.get(this.url + '/' + id)
            .retry(3)
            .catch(this.handleError);
    };
    DataService.prototype.update = function (id, resource) {
        //alert('headers : ' + JSON.stringify(this.headers));
        //alert('Update.\n' + this.url + '/' + id + "\n\n" + JSON.stringify(resource));
        return this.httpClient.put(this.url + '/' + id, JSON.stringify(resource), {
            headers: this.headers
        })
            .retry(3)
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (resource) {
        // alert('resource.id : ' + resource.id);
        return this.httpClient.delete(this.url + '/' + resource.id)
            .catch(this.handleError);
    };
    DataService.prototype.getByProperty = function (propertyName, propertyValue) {
        return this.httpClient.get(this.url + '/getBy' + propertyName + '/' + propertyValue)
            .retry(3)
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        if (error.status === 404)
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_7__not_found_error__["a" /* NotFoundError */]());
        else if (error.status === 400)
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_8__bad_input_error__["a" /* BadInputError */](error));
        else
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_9__app_error__["a" /* AppError */](error));
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String])
    ], DataService);
    return DataService;
}(__WEBPACK_IMPORTED_MODULE_10__universal_declerations__["a" /* UniversalDeclerations */]));



/***/ }),

/***/ "../../../../../src/app/common/services/file-uploader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__universal_declerations__ = __webpack_require__("../../../../../src/app/common/universal-declerations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bad_input_error__ = __webpack_require__("../../../../../src/app/common/bad-input-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_error__ = __webpack_require__("../../../../../src/app/common/app-error.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FileUploaderService = (function (_super) {
    __extends(FileUploaderService, _super);
    function FileUploaderService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        _this.uploadUrl = '/documents/upload';
        return _this;
    }
    FileUploaderService.prototype.uploadFile = function (file /*, filename:string*/) {
        var _url = this.hostUrl + this.uploadUrl;
        // this.showSpinner = true ;
        // this.elem.nativeElement.querySelector('#spinner').style.visibility = 'visible' ;
        var documentData = new FormData();
        documentData.append("file", file, file.name);
        documentData.append("filename", file.name);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('boundary', '--01-2--3---2--1-01-2--3---');
        return this.httpClient.post(_url, documentData, { headers: headers })
            .subscribe(function (result) {
            console.log("Success ... " + JSON.stringify(result));
            //this.dataLoaded(result)
        });
    };
    FileUploaderService.prototype.downloadFile = function (fileUrl) {
        var myReader = new FileReader();
        var blob;
        var file;
        return new File([this.dataURItoBlob(fileUrl)], fileUrl);
        /* this.httpClient.get(fileUrl).subscribe(res => {
             console.log(fileUrl);
             console.log(JSON.stringify(res));
             blob = res;
             //myReader.readAsArrayBuffer(blob)
             file = new File(blob, fileUrl);
             return file ;
         });
         
         return null;*/
    };
    FileUploaderService.prototype.dataURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    FileUploaderService.prototype.uploadImage = function (file, filename) {
        var _url = this.hostUrl + this.uploadUrl;
        console.log("_url : " + _url);
        var formData = new FormData();
        formData.append("file", file);
        formData.append("filename", filename);
        console.log("formData.file : " + formData.get("file"));
        //console.log("formData.filename : " + formData.get("filename")); 
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('boundary', '---------------------------129291770317552');
        // headers.append('boundary', '--01-2--3---2--1-01-2--3---');
        return this.httpClient.post(_url, formData, { headers: headers })
            .catch(this.handleError);
    };
    FileUploaderService.prototype.getFilesList = function (filelistUrl) {
        return this.httpClient.get(filelistUrl)
            .catch(this.handleError);
    };
    FileUploaderService.prototype.handleError = function (error) {
        if (error.status === 404)
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_4__not_found_error__["a" /* NotFoundError */]());
        else if (error.status === 400)
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_5__bad_input_error__["a" /* BadInputError */](error));
        else
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_6__app_error__["a" /* AppError */](error));
    };
    FileUploaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FileUploaderService);
    return FileUploaderService;
}(__WEBPACK_IMPORTED_MODULE_2__universal_declerations__["a" /* UniversalDeclerations */]));



/***/ }),

/***/ "../../../../../src/app/common/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_dropdown_directive__ = __webpack_require__("../../../../../src/app/common/directives/dropdown.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__directives_dropdown_directive__["a" /* DropdownDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__directives_dropdown_directive__["a" /* DropdownDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/universal-declerations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniversalDeclerations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var UniversalDeclerations = (function () {
    function UniversalDeclerations() {
        this.hostUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl;
    }
    //public HostUrl : string = "http://localhost";
    UniversalDeclerations.prototype.prepareDocumentUrl = function (filename) {
        console.log(filename);
        return "/documents/view?filename=" + filename;
    };
    return UniversalDeclerations;
}());



/***/ }),

/***/ "../../../../../src/app/content/content-showcase/content-showcase.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content-showcase/content-showcase.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/content/content-showcase/content-showcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentShowcaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentShowcaseComponent = (function () {
    function ContentShowcaseComponent() {
    }
    ContentShowcaseComponent.prototype.ngOnInit = function () {
    };
    ContentShowcaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content-showcase',
            template: __webpack_require__("../../../../../src/app/content/content-showcase/content-showcase.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/content-showcase/content-showcase.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentShowcaseComponent);
    return ContentShowcaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- Main jumbotron for a primary marketing message or call to action -->\n    <div class=\"jumbotron\">\n      <div class=\"container\">\n        <h1>Hello, world!</h1>\n        <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n        <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a></p>\n        \n        <button class=\"btn btn-primary\" [disabled]=\"!allowNewServer\" (click)=\"onCreateServer()\" >{{createServer}}</button> \n        <p >{{serverCreated}}</p>\n         \n         \n      </div>\n    </div>\n    \n        <div class=\"container\">\n      <!-- Example row of columns -->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div>\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n       </div>\n        <div class=\"col-md-4\">\n          <h2>Heading</h2>\n          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n          <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div>\n      </div>\n\n      <hr>"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = (function () {
    function ContentComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.serverCreated = 'no server created.';
        this.createServer = 'Add Server';
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 5000);
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.onCreateServer = function () {
        this.serverCreated = this.serverCreated === 'no server created.' ? 'Server Was Created!!!!!!!!!!!!!!!!!!!' : 'no server created.';
        this.createServer = this.createServer === 'Add Server' ? 'Delete Server' : 'Add Server';
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/distribution-methods/distribution-method-form/distribution-method-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/distribution-methods/distribution-method-form/distribution-method-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"saveDistributionMethod(distributionMethod)\">\n    <div class=\"row form-group\"> \n        <h2 *ngIf=\"isNewForm\">Create new Distribution Method</h2>\n        <h2 *ngIf=\"!isNewForm\">Edit Distribution Method Details</h2>\n    </div>\n\n    <div  *ngIf=\"!isNewForm\" class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"id\" >ID : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"id\" name=\"id\" [(ngModel)]=\"distributionMethod.id\" disabled/> \n        </div>\n    </div> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"name\" >Name : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"name\" name=\"name\" #name=\"ngModel\"  [(ngModel)]=\"distributionMethod.name\"/> \n        </div>\n    </div>      \n\n    <!--[(ngModel)]=\"distributionMethod.preRequisites\"--> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <button type=\"submit\" class=\"btn btn-primary\"  >\n                <i *ngIf=\"isNewForm\" class=\"fa fa-plus\" aria-hidden=\"true\"> | Save</i>\n                <i *ngIf=\"!isNewForm\" class=\"fa fa-edit\" aria-hidden=\"true\"> | Update</i>\n            </button>  \n        </div>\n        <div class=\"col col-sm-8\">\n            <a routerLink=\"/distributionMethods\" class=\"btn btn-warning \"  >\n                <i class=\"fa fa-times\" aria-hidden=\"true\"> | Cancel</i>\n            </a> \n        </div>\n    </div>\n</form>  "

/***/ }),

/***/ "../../../../../src/app/distribution-methods/distribution-method-form/distribution-method-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionMethodFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__distribution_method_service__ = __webpack_require__("../../../../../src/app/distribution-methods/distribution-method.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DistributionMethodFormComponent = (function () {
    function DistributionMethodFormComponent(route, _distributionMethodService) {
        this.route = route;
        this._distributionMethodService = _distributionMethodService;
        this.isNewForm = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.distributionMethod = {
            name: ""
        };
        if (this.id) {
            this.getDistributionMethod(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }
    DistributionMethodFormComponent.prototype.ngOnInit = function () {
    };
    DistributionMethodFormComponent.prototype.getDistributionMethod = function (distributionMethodId) {
        var _this = this;
        this._distributionMethodService.get(distributionMethodId)
            .take(1)
            .subscribe(function (prod) { return _this.distributionMethod = prod; });
    };
    DistributionMethodFormComponent.prototype.saveDistributionMethod = function (distributionMethod) {
        console.log(JSON.stringify(distributionMethod));
        if (this.isNewForm) {
            this._distributionMethodService.create(distributionMethod)
                .subscribe(function (prod) {
                document.location.assign("/distributionmethods");
            });
        }
        else {
            this._distributionMethodService.update(this.id, distributionMethod)
                .subscribe(function (prod) {
                document.location.assign("/distributionmethods");
            });
        }
    };
    DistributionMethodFormComponent.prototype.deleteDistributionMethod = function (distributionMethod) {
        this._distributionMethodService.delete(distributionMethod)
            .subscribe(function () {
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__common_not_found_error__["a" /* NotFoundError */])
                alert('distributionMethod has already been deleted.');
            else
                throw error;
        });
    };
    DistributionMethodFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-distribution-method-form',
            template: __webpack_require__("../../../../../src/app/distribution-methods/distribution-method-form/distribution-method-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/distribution-methods/distribution-method-form/distribution-method-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__distribution_method_service__["a" /* DistributionMethodService */]])
    ], DistributionMethodFormComponent);
    return DistributionMethodFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/distribution-methods/distribution-method-view/distribution-method-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/distribution-methods/distribution-method-view/distribution-method-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  distribution-method-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/distribution-methods/distribution-method-view/distribution-method-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionMethodViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DistributionMethodViewComponent = (function () {
    function DistributionMethodViewComponent() {
    }
    DistributionMethodViewComponent.prototype.ngOnInit = function () {
    };
    DistributionMethodViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-distribution-method-view',
            template: __webpack_require__("../../../../../src/app/distribution-methods/distribution-method-view/distribution-method-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/distribution-methods/distribution-method-view/distribution-method-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DistributionMethodViewComponent);
    return DistributionMethodViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/distribution-methods/distribution-method.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionMethodService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_data_service__ = __webpack_require__("../../../../../src/app/common/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DistributionMethodService = (function (_super) {
    __extends(DistributionMethodService, _super);
    function DistributionMethodService(httpClient) {
        var _this = this;
        var resourcePath = '/rest/distributionmethods';
        _this = _super.call(this, httpClient, resourcePath) || this;
        return _this;
    }
    DistributionMethodService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DistributionMethodService);
    return DistributionMethodService;
}(__WEBPACK_IMPORTED_MODULE_2__common_services_data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/distribution-methods/distribution-methods.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/distribution-methods/distribution-methods.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Distribution Methods</h2>  \n    <a routerLink=\"/admin/distributionmethods/new\" \n        class=\"btn btn-link btn-danger\">Create New</a> \n        \n    <table class=\"table table-stripped\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>Name</th>\n                <th>Last Modified</th>\n                <th>Last Modified By</th> \n                <th>&nbsp;</th> \n            </tr> </thead>\n        <tr *ngFor=\"let distributionMethod of distributionMethods\" >           \n            <td>\n                <a [routerLink]=\"['/distributionmethods/', distributionMethod.id, 'view']\" class=\"btn btn-link btn-danger\">\n                    <i class=\"fa fa-eye\" aria-hidden=\"true\">{{distributionMethod.id}}</i>                \n                </a> \n            </td>\n            <td>{{distributionMethod.name}}</td>\n            <td>{{distributionMethod.modificationTime }}</td> \n            <td>{{distributionMethod.modifiedByUser}}</td> \n            <td> \n                <a [routerLink]=\"['/admin/distributionmethods/', distributionMethod.id]\"   class=\"btn btn-link btn-link-info\">\n                    <i class=\"fa fa-edit\" aria-hidden=\"true\"> Edit</i>                \n                </a>  \n                <button (click)=\"deleteDistributionMethod(distributionMethod)\" class=\"btn btn-link btn-link-danger\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\"> Delete</i></button> \n            </td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/distribution-methods/distribution-methods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionMethodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__distribution_method_service__ = __webpack_require__("../../../../../src/app/distribution-methods/distribution-method.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DistributionMethodsComponent = (function () {
    function DistributionMethodsComponent(_distributionMethodService) {
        this._distributionMethodService = _distributionMethodService;
    }
    DistributionMethodsComponent.prototype.ngOnInit = function () {
        this.getDistributionMethods();
    };
    DistributionMethodsComponent.prototype.getDistributionMethods = function () {
        var _this = this;
        this._distributionMethodService.getAll().subscribe(function (prods) { return _this.distributionMethods = prods; });
    };
    DistributionMethodsComponent.prototype.deleteDistributionMethod = function (distributionMethod) {
        var _this = this;
        this._distributionMethodService.delete(distributionMethod)
            .subscribe(function () {
            var index = _this.distributionMethods.indexOf(distributionMethod);
            _this.distributionMethods.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__["a" /* NotFoundError */])
                alert('distributionMethod has already been deleted.');
            else
                throw error;
        });
    };
    DistributionMethodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-distribution-methods',
            template: __webpack_require__("../../../../../src/app/distribution-methods/distribution-methods.component.html"),
            styles: [__webpack_require__("../../../../../src/app/distribution-methods/distribution-methods.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__distribution_method_service__["a" /* DistributionMethodService */]])
    ], DistributionMethodsComponent);
    return DistributionMethodsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = " \n<footer class=\"py-5 bg-dark footer\">\n        <p class=\"m-0  text-white\">Copyright &copy; <a routerLinkActive=\"active current\" routerLink=\"/\" title=\"Heritage Innovative Solutions\">Heritage Innovative Solutions 2017</a>. All rights reserved.</p>\n</footer>\n "

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--==========================\n  Header\n  ============================-->   \n<header>\n    <!-- Nav-Bar --> \n    <div class=\"container-fluid\">\n        <nav class=\"navbar\"> \n\n            <div class=\"container-fluid\" >\n                <div id=\"branding\" class=\"navbar-header\">\n                    <h1>\n                        <a routerLink=\"/\">\n                            <span class=\"highlight\">Heritage</span> Innovative  Solutions\n                        </a>\n                    </h1>\n                </div>\n                <div id=\"branding2\" class=\"navbar-default\" > \n                    <ul class=\"nav navbar-nav\">\n                        <li><a routerLinkActive=\"active current\" routerLink=\"services\" >Services</a></li> \n                        <li><a routerLinkActive=\"active current\" routerLink=\"contact\" >Contact</a></li>\n                        <li><a routerLinkActive=\"active current\" routerLink=\"about\" >About</a></li>\n                        <li><a routerLinkActive=\"active current\" routerLink=\"login\" >Login</a></li>\n\n                        <li appDropdown class=\"dropdown\">\n                            <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer;\">Admin\n                                <span class=\"caret\"></span>\n                            </a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a routerLinkActive=\"active current\" routerLink=\"servicecategories\">Service Categories</a></li>\n                                <li><a routerLinkActive=\"active current\" routerLink=\"products\">Products</a></li>\n                                <li><a routerLinkActive=\"active current\" routerLink=\"producttypes\">Product Types</a></li>  \n                                <li><a routerLinkActive=\"active current\" routerLink=\"skills\">Skills</a></li>   \n                                <li><a routerLinkActive=\"active current\" routerLink=\"prerequisites\">Pre Requisites</a></li>   \n                                <li><a routerLinkActive=\"active current\" routerLink=\"audiances\">Audiances</a></li>    \n                                <li><a routerLinkActive=\"active current\" routerLink=\"topics\">Topics</a></li> \n                                <li><a routerLinkActive=\"active current\" routerLink=\"distributionmethods\">Distribution Methods</a></li>      \n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n        </nav>\n        <!-- / Nav-Bar --> \n    </div>    \n</header>\n<!--==========================\n  /Header\n  ============================--> \n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/header/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/header/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* Showcase */\n#showcase{\n    min-height:400px;\n /*   background:url('/assets/img/showcase.jpg') no-repeat 0 -400px;  \n      [style.background]=\"'url(' + hostUrl + '/documents/view?filename=' +  category.imageMetadata.filename + ') no-repeat 0 -400px '\"\n      [ngStyle]=\"{'background':'url(' + hostUrl + '/documents/view?filename=' +  serviceCategory.imageMetadata.filename + ') no-repeat 0 -400px '}\"\n */\n    text-align:center;\n    color:#ffffff; \n}\n\n#showcase h1{\n    margin-top:100px;\n    font-size:55px;\n    margin-bottom:10px;\n}\n\n#showcase p{\n    font-size:20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section id=\"showcase\" *ngFor=\"let serviceCategory of serviceCategories\" \n         [ngStyle]=\"{'display': serviceCategory.id == serviceCategoryDisplayId ? 'block' : 'none', 'background':'url(' + getImageUrl(serviceCategory.imageMetadata ? serviceCategory.imageMetadata.filename : '') + ') no-repeat 0 -400px'}\"\n         > \n    <div class=\"container\" >\n        <h1>{{serviceCategory.name}}</h1>\n        <div [innerHTML]=\"serviceCategory.displayContent\"></div>        \n    </div>\n</section>\n \n\n<section id=\"newsletter\">\n    <div class=\"container\">\n        <h1>Subscribe to our newsletter</h1>\n        <form>\n            <input type=\"email\" placeholder=\"Enter Email....\" />\n            <button type=\"submit\" class=\"btn btn-primary\" >Submit</button>\n        </form>\n    </div>\n</section>\n\n<section id=\"boxes\">\n    <div class=\"container\">\n        \n        <div *ngFor=\"let product of products\" class=\"box\">     \n            <img src=\"{{hostUrl + '/documents/view?filename=' + (product.imageMetadata ? product.imageMetadata.filename : '')}}\" alt=\"{{product.name}}\"/>\n            <h3>{{product.name}}</h3>\n            <p>{{product.description}}</p>           \n        </div>\n        \n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_universal_declerations__ = __webpack_require__("../../../../../src/app/common/universal-declerations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_category_service_category_service__ = __webpack_require__("../../../../../src/app/service-category/service-category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(_productService, _categoryService) {
        var _this = _super.call(this) || this;
        _this._productService = _productService;
        _this._categoryService = _categoryService;
        return _this;
        //        this.state = 'inactive'
        //        this.heroes = [new Hero("Test1", "active"), new Hero("Test2", "inactive"), new Hero("Test3", "inactive")];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getServiceCategories();
        this.getProducts();
        var timer = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].timer(2000, 15000);
        this.timerSubscription =
            timer.subscribe(function (t) {
                _this.changeDisplayedServiceCategory(_this.maxSize);
            });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.timerSubscription.unsubscribe();
    };
    HomeComponent.prototype.getProducts = function () {
        var _this = this;
        //this.productsSubscription = 
        this._productService.getAll()
            .subscribe(function (prods) { return _this.products = prods; });
    };
    HomeComponent.prototype.getServiceCategories = function () {
        var _this = this;
        //this.serviceCategoriesSubscription = 
        this._categoryService.getAll()
            .subscribe(function (catgs) {
            _this.serviceCategories = catgs;
            _this.maxSize = _this.serviceCategories.length;
            if (_this.maxSize >= 1) {
                var serviceCategory = _this.serviceCategories[0];
                _this.serviceCategoryDisplayId = serviceCategory.id;
            }
        });
    };
    HomeComponent.prototype.getImageUrl = function (filename) {
        console.log(this.hostUrl + '/documents/viewtest/' + filename);
        return this.hostUrl + '/documents/viewtest/' + filename;
    };
    HomeComponent.prototype.changeDisplayedServiceCategory = function (iMax) {
        if (iMax >= 1) {
            this.iNowDisplay += 1;
            if (this.iNowDisplay >= iMax || !(this.iNowDisplay)) {
                this.iNowDisplay = 0;
            }
            var serviceCategory = this.serviceCategories[this.iNowDisplay];
            this.serviceCategoryDisplayId = serviceCategory.id;
            //console.log("iNowDisplay : " + this.iNowDisplay);
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__products_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__service_category_service_category_service__["a" /* ServiceCategoryService */]])
    ], HomeComponent);
    return HomeComponent;
}(__WEBPACK_IMPORTED_MODULE_2__common_universal_declerations__["a" /* UniversalDeclerations */]));

//export class Hero {
//    constructor(public name: string, public state = 'inactive') {}
//
//    toggleState() {
//        this.state = this.state === 'active' ? 'inactive' : 'active';
//    }
//} 


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button \n  (click)=\"login()\"\n  class=\"btn btn-primary\">Login with Google</button>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {AngularFireAuth} from 'angularfire2/auth';
//import * as firebase from 'firebase' ;
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.login = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/no-access/no-access.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/no-access/no-access.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Access Denied</h1>"

/***/ }),

/***/ "../../../../../src/app/no-access/no-access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoAccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoAccessComponent = (function () {
    function NoAccessComponent() {
    }
    NoAccessComponent.prototype.ngOnInit = function () {
    };
    NoAccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-no-access',
            template: __webpack_require__("../../../../../src/app/no-access/no-access.component.html"),
            styles: [__webpack_require__("../../../../../src/app/no-access/no-access.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoAccessComponent);
    return NoAccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pre-requisites/pre-requisite-form/pre-requisite-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pre-requisites/pre-requisite-form/pre-requisite-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"savePreRequisite(preRequisite)\">\n    <div class=\"row form-group\"> \n        <h2 *ngIf=\"isNewForm\">Create new Pre Requisite</h2>\n        <h2 *ngIf=\"!isNewForm\">Edit Pre Requisite Details</h2>\n    </div>\n\n    <div  *ngIf=\"!isNewForm\" class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"id\" >ID : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"id\" name=\"id\" [(ngModel)]=\"preRequisite.id\" disabled/> \n        </div>\n    </div> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"name\" >Name : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"name\" name=\"name\" #name=\"ngModel\"  [(ngModel)]=\"preRequisite.name\"/> \n        </div>\n    </div>      \n\n    <!--[(ngModel)]=\"preRequisite.preRequisites\"--> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <button type=\"submit\" class=\"btn btn-primary\"  >\n                <i *ngIf=\"isNewForm\" class=\"fa fa-plus\" aria-hidden=\"true\"> | Save</i>\n                <i *ngIf=\"!isNewForm\" class=\"fa fa-edit\" aria-hidden=\"true\"> | Update</i>\n            </button>  \n        </div>\n        <div class=\"col col-sm-8\">\n            <a routerLink=\"/preRequisites\" class=\"btn btn-warning \"  >\n                <i class=\"fa fa-times\" aria-hidden=\"true\"> | Cancel</i>\n            </a> \n        </div>\n    </div>\n</form>  "

/***/ }),

/***/ "../../../../../src/app/pre-requisites/pre-requisite-form/pre-requisite-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreRequisiteFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pre_requisite_service__ = __webpack_require__("../../../../../src/app/pre-requisites/pre-requisite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreRequisiteFormComponent = (function () {
    function PreRequisiteFormComponent(route, _preRequisiteService) {
        this.route = route;
        this._preRequisiteService = _preRequisiteService;
        this.isNewForm = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.preRequisite = {
            name: ""
        };
        if (this.id) {
            this.getPreRequisite(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }
    PreRequisiteFormComponent.prototype.ngOnInit = function () {
    };
    PreRequisiteFormComponent.prototype.getPreRequisite = function (preRequisiteId) {
        var _this = this;
        this._preRequisiteService.get(preRequisiteId)
            .take(1)
            .subscribe(function (prod) { return _this.preRequisite = prod; });
    };
    PreRequisiteFormComponent.prototype.savePreRequisite = function (preRequisite) {
        console.log(JSON.stringify(preRequisite));
        if (this.isNewForm) {
            this._preRequisiteService.create(preRequisite)
                .subscribe(function (prod) {
                document.location.assign("/prerequisites");
            });
        }
        else {
            this._preRequisiteService.update(this.id, preRequisite)
                .subscribe(function (prod) {
                document.location.assign("/prerequisites");
            });
        }
    };
    PreRequisiteFormComponent.prototype.deletePreRequisite = function (preRequisite) {
        this._preRequisiteService.delete(preRequisite)
            .subscribe(function () {
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__["a" /* NotFoundError */])
                alert('preRequisite has already been deleted.');
            else
                throw error;
        });
    };
    PreRequisiteFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pre-requisite-form',
            template: __webpack_require__("../../../../../src/app/pre-requisites/pre-requisite-form/pre-requisite-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pre-requisites/pre-requisite-form/pre-requisite-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__pre_requisite_service__["a" /* PreRequisiteService */]])
    ], PreRequisiteFormComponent);
    return PreRequisiteFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pre-requisites/pre-requisite-view/pre-requisite-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pre-requisites/pre-requisite-view/pre-requisite-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  pre-requisite-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pre-requisites/pre-requisite-view/pre-requisite-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreRequisiteViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreRequisiteViewComponent = (function () {
    function PreRequisiteViewComponent() {
    }
    PreRequisiteViewComponent.prototype.ngOnInit = function () {
    };
    PreRequisiteViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pre-requisite-view',
            template: __webpack_require__("../../../../../src/app/pre-requisites/pre-requisite-view/pre-requisite-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pre-requisites/pre-requisite-view/pre-requisite-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreRequisiteViewComponent);
    return PreRequisiteViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pre-requisites/pre-requisite.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreRequisiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_data_service__ = __webpack_require__("../../../../../src/app/common/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreRequisiteService = (function (_super) {
    __extends(PreRequisiteService, _super);
    function PreRequisiteService(httpClient) {
        var _this = this;
        var resourcePath = '/rest/prerequisites';
        _this = _super.call(this, httpClient, resourcePath) || this;
        return _this;
    }
    PreRequisiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PreRequisiteService);
    return PreRequisiteService;
}(__WEBPACK_IMPORTED_MODULE_2__common_services_data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/pre-requisites/pre-requisites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pre-requisites/pre-requisites.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Pre Requisite</h2>  \n    <a routerLink=\"/admin/prerequisites/new\" \n        class=\"btn btn-link btn-danger\">Create New</a> \n        \n    <table class=\"table table-stripped\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>Name</th>\n                <th>Last Modified</th>\n                <th>Last Modified By</th> \n                <th>&nbsp;</th> \n            </tr> </thead>\n        <tr *ngFor=\"let preRequisite of preRequisites\" >           \n            <td>\n                <a [routerLink]=\"['/prerequisites/', preRequisite.id, 'view']\" class=\"btn btn-link btn-danger\">\n                    <i class=\"fa fa-eye\" aria-hidden=\"true\">{{preRequisite.id}}</i>                \n                </a> \n            </td>\n            <td>{{preRequisite.name}}</td>\n            <td>{{preRequisite.modificationTime }}</td> \n            <td>{{preRequisite.modifiedByUser}}</td> \n            <td> \n                <a [routerLink]=\"['/admin/prerequisites/', preRequisite.id]\"   class=\"btn btn-link btn-link-info\">\n                    <i class=\"fa fa-edit\" aria-hidden=\"true\"> Edit</i>                \n                </a>  \n                <button (click)=\"deletePreRequisite(preRequisite)\" class=\"btn btn-link btn-link-danger\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\"> Delete</i></button> \n            </td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pre-requisites/pre-requisites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreRequisitesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_requisite_service__ = __webpack_require__("../../../../../src/app/pre-requisites/pre-requisite.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreRequisitesComponent = (function () {
    function PreRequisitesComponent(_preRequisiteService) {
        this._preRequisiteService = _preRequisiteService;
    }
    PreRequisitesComponent.prototype.ngOnInit = function () {
        this.getPreRequisites();
    };
    PreRequisitesComponent.prototype.getPreRequisites = function () {
        var _this = this;
        this._preRequisiteService.getAll().subscribe(function (prods) { return _this.preRequisites = prods; });
    };
    PreRequisitesComponent.prototype.deletePreRequisite = function (preRequisite) {
        var _this = this;
        this._preRequisiteService.delete(preRequisite)
            .subscribe(function () {
            var index = _this.preRequisites.indexOf(preRequisite);
            _this.preRequisites.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__["a" /* NotFoundError */])
                alert('preRequisite has already been deleted.');
            else
                throw error;
        });
    };
    PreRequisitesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pre-requisites',
            template: __webpack_require__("../../../../../src/app/pre-requisites/pre-requisites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pre-requisites/pre-requisites.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__pre_requisite_service__["a" /* PreRequisiteService */]])
    ], PreRequisitesComponent);
    return PreRequisitesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-types/product-type-form/product-type-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-types/product-type-form/product-type-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"saveProductType(productType)\">\n    <div class=\"row form-group\"> \n        <h2 *ngIf=\"isNewForm\">Create new Product Type</h2>\n        <h2 *ngIf=\"!isNewForm\">Edit Product Type Details</h2>\n    </div>\n\n    <div  *ngIf=\"!isNewForm\" class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"id\" >ID : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"id\" name=\"id\" [(ngModel)]=\"productType.id\" disabled/> \n        </div>\n    </div> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"name\" >Name : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"name\" name=\"name\" #name=\"ngModel\"  [(ngModel)]=\"productType.name\"/> \n        </div>\n    </div>      \n\n    <!--[(ngModel)]=\"productType.preRequisites\"--> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <button type=\"submit\" class=\"btn btn-primary\"  >\n                <i *ngIf=\"isNewForm\" class=\"fa fa-plus\" aria-hidden=\"true\"> | Save</i>\n                <i *ngIf=\"!isNewForm\" class=\"fa fa-edit\" aria-hidden=\"true\"> | Update</i>\n            </button>  \n        </div>\n        <div class=\"col col-sm-8\">\n            <a routerLink=\"/productTypes\" class=\"btn btn-warning \"  >\n                <i class=\"fa fa-times\" aria-hidden=\"true\"> | Cancel</i>\n            </a> \n        </div>\n    </div>\n</form>  "

/***/ }),

/***/ "../../../../../src/app/product-types/product-type-form/product-type-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypeFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_type_service__ = __webpack_require__("../../../../../src/app/product-types/product-type.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductTypeFormComponent = (function () {
    function ProductTypeFormComponent(route, _productTypeService) {
        this.route = route;
        this._productTypeService = _productTypeService;
        this.id = this.route.snapshot.paramMap.get('id');
        this.productType = {
            id: 0,
            name: ""
        };
        if (this.id) {
            this.getProductType(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }
    ProductTypeFormComponent.prototype.getProductType = function (arg0) {
        throw new Error("Method not implemented.");
    };
    ProductTypeFormComponent.prototype.ngOnInit = function () {
    };
    ProductTypeFormComponent.prototype.getProductTypes = function () {
        var _this = this;
        this._productTypeService.getAll()
            .subscribe(function (prodtypes) { return _this.productTypes = prodtypes; });
    };
    ProductTypeFormComponent.prototype.saveProductType = function (productType) {
        console.log(JSON.stringify(productType));
        if (this.isNewForm) {
            this._productTypeService.create(productType)
                .subscribe(function (prod) {
                document.location.assign("/producttypes");
            });
        }
        else {
            this._productTypeService.update(this.id, productType)
                .subscribe(function (prod) {
                document.location.assign("/producttypes");
            });
        }
    };
    ProductTypeFormComponent.prototype.deleteProductType = function (productType) {
        this._productTypeService.delete(productType)
            .subscribe(function () {
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__["a" /* NotFoundError */])
                alert('productType has already been deleted.');
            else
                throw error;
        });
    };
    ProductTypeFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-type-form',
            template: __webpack_require__("../../../../../src/app/product-types/product-type-form/product-type-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-types/product-type-form/product-type-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__product_type_service__["a" /* ProductTypeService */]])
    ], ProductTypeFormComponent);
    return ProductTypeFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-types/product-type-view/product-type-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-types/product-type-view/product-type-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-type-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/product-types/product-type-view/product-type-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductTypeViewComponent = (function () {
    function ProductTypeViewComponent() {
    }
    ProductTypeViewComponent.prototype.ngOnInit = function () {
    };
    ProductTypeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-type-view',
            template: __webpack_require__("../../../../../src/app/product-types/product-type-view/product-type-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-types/product-type-view/product-type-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductTypeViewComponent);
    return ProductTypeViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-types/product-type.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_data_service__ = __webpack_require__("../../../../../src/app/common/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductTypeService = (function (_super) {
    __extends(ProductTypeService, _super);
    function ProductTypeService(httpClient) {
        var _this = this;
        var resourcePath = '/rest/producttypes';
        _this = _super.call(this, httpClient, resourcePath) || this;
        return _this;
    }
    ProductTypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductTypeService);
    return ProductTypeService;
}(__WEBPACK_IMPORTED_MODULE_2__common_services_data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/product-types/product-types.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-types/product-types.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Product Types</h2>  \n    <a routerLink=\"/admin/producttypes/new\" \n        class=\"btn btn-link btn-danger\">Create New</a> \n        \n    <table class=\"table table-stripped\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>Name</th>\n                <th>Last Modified</th>\n                <th>Last Modified By</th> \n                <th>&nbsp;</th> \n            </tr> </thead>\n        <tr *ngFor=\"let productType of productTypes\" >           \n            <td>\n                <a [routerLink]=\"['/producttypes/', productType.id, 'view']\" class=\"btn btn-link btn-danger\">\n                    <i class=\"fa fa-eye\" aria-hidden=\"true\">{{productType.id}}</i>                \n                </a> \n            </td>\n            <td>{{productType.name}}</td>\n            <td>{{productType.modificationTime }}</td> \n            <td>{{productType.modifiedByUser}}</td> \n            <td> \n                <a [routerLink]=\"['/admin/producttypes/', productType.id]\"   class=\"btn btn-link btn-link-info\">\n                    <i class=\"fa fa-edit\" aria-hidden=\"true\"> Edit</i>                \n                </a>  \n                <button (click)=\"deleteProductType(productType)\" class=\"btn btn-link btn-link-danger\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\"> Delete</i></button> \n            </td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/product-types/product-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTypesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_type_service__ = __webpack_require__("../../../../../src/app/product-types/product-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductTypesComponent = (function () {
    function ProductTypesComponent(_productTypeService) {
        this._productTypeService = _productTypeService;
    }
    ProductTypesComponent.prototype.ngOnInit = function () {
        this.getProductTypes();
    };
    ProductTypesComponent.prototype.getProductTypes = function () {
        var _this = this;
        this._productTypeService.getAll().subscribe(function (prods) { return _this.productTypes = prods; });
    };
    ProductTypesComponent.prototype.deleteProductType = function (productType) {
        var _this = this;
        this._productTypeService.delete(productType)
            .subscribe(function () {
            var index = _this.productTypes.indexOf(productType);
            _this.productTypes.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__["a" /* NotFoundError */])
                alert('productType has already been deleted.');
            else
                throw error;
        });
    };
    ProductTypesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-types',
            template: __webpack_require__("../../../../../src/app/product-types/product-types.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-types/product-types.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_type_service__["a" /* ProductTypeService */]])
    ], ProductTypesComponent);
    return ProductTypesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-form/product-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-form/product-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row form-group\"> \n        <h2 *ngIf=\"isNewForm\">Create new Product</h2>\n        <h2 *ngIf=\"!isNewForm\">Edit Product Details</h2>\n    </div>\n    <form #f=\"ngForm\" (ngSubmit)=\"saveProduct(product)\">\n        <div class=\"row\">\n            <div class=\"col col-md-8\">\n                <div  *ngIf=\"!isNewForm\" class=\"row form-group\"> \n                    <div class=\"col col-sm-2\" style=\"text-align: right;\">\n                        <label for=\"id\" >ID : </label>\n                    </div>\n                    <div class=\"col col-sm-8\">\n                        <input class=\"form-control\"  type=\"text\" id=\"id\" name=\"id\" [(ngModel)]=\"product.id\" disabled/> \n                    </div>\n                </div> \n                <div  class=\"row form-group\"> \n                    <div class=\"col col-sm-2\" style=\"text-align: right;\">\n                        <label for=\"name\" >Name : </label>\n                    </div>\n                    <div class=\"col col-sm-8\">\n                        <input class=\"form-control\"  type=\"text\" id=\"name\" name=\"name\" #name=\"ngModel\"  [(ngModel)]=\"product.name\"/> \n                    </div>\n                </div>  \n                <div  class=\"row form-group\"> \n                    <div class=\"col col-sm-2\" style=\"text-align: right;\">\n                        <label for=\"description\" >Description : </label>\n                    </div>\n                    <div class=\"col col-sm-8\">\n                        <input class=\"form-control\"  type=\"text\" id=\"description\" name=\"description\" [(ngModel)]=\"product.description\"/> \n                    </div>\n                </div> \n                <div  class=\"row form-group\"> \n                    <div class=\"col col-sm-2\" style=\"text-align: right;\">\n                        <label for=\"price\" >Price : </label>\n                    </div>\n                    <div class=\"col col-sm-8 \">\n                        <div class=\"input-group\">\n                            <span class=\"input-group-addon\">$</span>\n                            <input class=\"form-control\" aria-label=\"Amount\" type=\"text\" id=\"price\" name=\"price\" [(ngModel)]=\"product.price\"/> \n                        </div>\n                    </div>\n                </div> \n                <div  class=\"row form-group\"> \n                    <div class=\"col col-sm-2\" style=\"text-align: right;\">\n                        <label for=\"productType.id\" >Product Type : </label>\n                    </div>\n                    <div class=\"col col-sm-8\">\n                        <select class=\"selectpicker form-control\"  type=\"text\" id=\"productType.id\" #productTypeId=\"ngModel\" name=\"productType.id\" [(ngModel)]=\"product.productType.id\" data-live-search=\"true\"> \n                            <option *ngFor=\"let pt of productTypes\" [value]=\"pt.id\">\n                                {{pt.name}}\n                        </option>\n                    </select>\n                </div>\n            </div> \n            <div  class=\"row form-group\"> \n                <div class=\"col col-sm-2\" style=\"text-align: right;\">\n                    <label for=\"vendor.id\" >Product Vendor : </label>\n                </div>\n                <div class=\"col col-sm-8\">\n                    <select class=\"selectpicker form-control\"  type=\"text\" id=\"vendor.id\" name=\"vendor.id\" [(ngModel)]=\"product.vendor.id\" data-live-search=\"true\"> \n                        <option *ngFor=\"let pv of productVendors\" [value]=\"pv.id\" selected=\"pv.id = product.vendor.id\" >{{pv.name}}</option>\n                    </select>\n                </div>\n            </div> \n            <div  class=\"row form-group\" *ngIf=\"preRequisites\"> \n                <div class=\"col col-sm-2\" style=\"text-align: right;\">\n                    <label for=\"product.preRequisites\" >Product Pre Requisites : </label>\n                </div>\n                <div class=\"col col-sm-8\"> \n                    <span *ngFor=\"let preRequisite of preRequisites\" class=\"checkbox\">\n                        <label for=\"preRequisite\">\n                            <input type=\"checkbox\" \n                                   id=\"{{preRequisite.id}}\" \n                                   name=\"{{preRequisite.id}}\" \n                                   value=\"{{preRequisite.id}}\" \n                                   (change) =\"updateSelectedPreRequisites($event)\"\n                                   [checked]=\"(-1 !== getPreRequisiteIndex(preRequisite) ? 'checked' : '')\" \n                                   /> \n                                   {{preRequisite.name}}.                          \n                        </label>\n                    </span>\n                </div>\n            </div>\n            <div  class=\"row form-group\" *ngIf=\"skills\" > \n                <div class=\"col col-sm-2\" style=\"text-align: right;\">\n                    <label for=\"product.skillsToGain\" >Skills to Gain : </label>\n                </div>\n                <div class=\"col col-sm-8\">  \n                    <span *ngFor=\"let skill of skills\" class=\"checkbox\">\n                        <label for=\"skill\">\n                            <input type=\"checkbox\" \n                                   id=\"{{skill.id}}\" \n                                   name=\"{{skill.id}}\" \n                                   value=\"{{skill.id}}\" \n                                   (change) =\"updateSelectedSkills($event)\"\n                                   [checked]=\"(-1 !== getSkillIndex(skill) ? 'checked' : '')\" \n                                   /> \n                                   {{skill.name}}.                          \n                        </label>\n                    </span>\n                </div>\n            </div> \n\n            <!--[(ngModel)]=\"product.preRequisites\"--> \n            <div  class=\"row form-group\"> \n                <div class=\"col col-sm-2\" style=\"text-align: right;\">\n                    <button type=\"submit\" class=\"btn btn-primary\"  >\n                        <i *ngIf=\"isNewForm\" class=\"fa fa-plus\" aria-hidden=\"true\"> | Save</i>\n                        <i *ngIf=\"!isNewForm\" class=\"fa fa-edit\" aria-hidden=\"true\"> | Update</i>\n                    </button>  \n                </div>\n                <div class=\"col col-sm-8\">\n                    <a routerLink=\"/products\" class=\"btn btn-warning \"  >\n                        <i class=\"fa fa-times\" aria-hidden=\"true\"> | Cancel</i>\n                    </a> \n                </div>\n            </div>\n        </div>\n        <div class=\"col col-md-4\">\n            <div class=\"card\" style=\"width: 18rem;\"> \n                <h2>{{product.name}}</h2>\n                <img *ngIf=\"product.imageUrl\" class=\"card-img-top\" src=\"assets/img/{{product.imageUrl}}\" alt=\"{{product.name}}\"/>\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{product.name}}</h5>\n                    <p class=\"card-text\">{{product.description}}</p>\n                    \n                    <br/>\n                    <input class=\"form-control\"  type=\"text\" id=\"imageUrl\" name=\"imageUrl\"  #name=\"ngModel\"  [(ngModel)]=\"product.imageUrl\" /> \n                    <input class=\"form-control\"  type=\"file\" id=\"image\" name=\"image\"/> \n                </div>\n            </div>\n        </div>\n    </div>\n</form>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/products/product-form/product-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendors_vendor_service__ = __webpack_require__("../../../../../src/app/vendors/vendor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_types_product_type_service__ = __webpack_require__("../../../../../src/app/product-types/product-type.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pre_requisites_pre_requisite_service__ = __webpack_require__("../../../../../src/app/pre-requisites/pre-requisite.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__skills_skill_service__ = __webpack_require__("../../../../../src/app/skills/skill.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductFormComponent = (function () {
    function ProductFormComponent(route, _productService, _productTypeService, _vendorService, _preRequisiteService, _skillService) {
        this.route = route;
        this._productService = _productService;
        this._productTypeService = _productTypeService;
        this._vendorService = _vendorService;
        this._preRequisiteService = _preRequisiteService;
        this._skillService = _skillService;
        this.isNewForm = false;
        this.getDropDownListItems();
        this.id = this.route.snapshot.paramMap.get('id');
        this.product = {
            name: "",
            description: "",
            price: 0,
            productType: { id: 0, name: "" },
            vendor: { id: 0, name: "" },
            preRequisites: [],
            skillsToGain: []
        };
        if (this.id) {
            this.getProduct(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent.prototype.getDropDownListItems = function () {
        this.getProductTypes();
        this.getProductVendors();
        this.getPreRequisites();
        this.getSkills();
    };
    ProductFormComponent.prototype.getProduct = function (productId) {
        var _this = this;
        this._productService.get(productId)
            .take(1)
            .subscribe(function (prod) { return _this.product = prod; });
    };
    ProductFormComponent.prototype.getProductTypes = function () {
        var _this = this;
        this._productTypeService.getAll()
            .subscribe(function (prodtypes) { return _this.productTypes = prodtypes; });
    };
    ProductFormComponent.prototype.getProductVendors = function () {
        var _this = this;
        this._vendorService.getAll()
            .subscribe(function (prodvens) { return _this.productVendors = prodvens; });
    };
    ProductFormComponent.prototype.getPreRequisites = function () {
        var _this = this;
        this._preRequisiteService.getAll()
            .subscribe(function (prereq) { return _this.preRequisites = prereq; });
    };
    ProductFormComponent.prototype.getSkills = function () {
        var _this = this;
        this._skillService.getAll()
            .subscribe(function (s) { return _this.skills = s; });
    };
    ProductFormComponent.prototype.saveProduct = function (product) {
        console.log(JSON.stringify(product));
        if (this.isNewForm) {
            //             this._productTypeService.get(produc            t.productType.id)
            //                 .toPromise().then(pt => {product.productType = pt; alert(JSON.stringify(product.productType)); }) ;
            this._productService.create(product)
                .subscribe(function (prod) {
                document.location.assign("/products");
                //  document.location.reload() ;
            });
        }
        else {
            this._productService.update(this.id, product)
                .subscribe(function (prod) {
                //alert('prod.id' + prod.id + '. index : ' + this.editProductIndex);
                //                    this.products.splice(this.editProductIndex, 1);
                //                    this.products.splice(this.editProductIndex, 0, prod);
                //                    this.products.push(product); 
                document.location.assign("/products");
            });
        }
    };
    ProductFormComponent.prototype.deleteProduct = function (product) {
        this._productService.delete(product)
            .subscribe(function () {
            //                const index = this.products.indexOf(product);
            //                this.products.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__common_not_found_error__["a" /* NotFoundError */])
                alert('product has already been deleted.');
            else
                throw error;
        });
    };
    ProductFormComponent.prototype.updateSelectedPreRequisites = function (event) {
        var eid = event.target.id;
        var indexOfChecked = this.product.preRequisites.findIndex(function (pr) { return pr.id == eid; });
        if (event.target.checked) {
            if (indexOfChecked < 0) {
                var preRequisite = this.preRequisites.find(function (pr) { return pr.id == eid; });
                this.product.preRequisites.push(preRequisite);
            }
        }
        else {
            if (indexOfChecked > -1) {
                this.product.preRequisites.splice(indexOfChecked, 1);
            }
        }
    };
    ProductFormComponent.prototype.getPreRequisiteIndex = function (preRequisite) {
        if (preRequisite && preRequisite.id) {
            if (this.product.preRequisites.length > 0) {
                return this.product.preRequisites.findIndex(function (pr) { return pr.id == preRequisite.id; });
            }
        }
        return -1;
    };
    ProductFormComponent.prototype.updateSelectedSkills = function (event) {
        var eid = event.target.id;
        var indexOfChecked = this.product.skillsToGain.findIndex(function (s) { return s.id == eid; });
        if (event.target.checked) {
            if (indexOfChecked < 0) {
                var skill = this.skills.find(function (pr) { return pr.id == eid; });
                this.product.skillsToGain.push(skill);
            }
        }
        else {
            if (indexOfChecked > -1) {
                this.product.skillsToGain.splice(indexOfChecked, 1);
            }
        }
    };
    ProductFormComponent.prototype.getSkillIndex = function (skill) {
        if (skill && skill.id) {
            if (this.product.skillsToGain.length > 0) {
                return this.product.skillsToGain.findIndex(function (s) { return s.id == skill.id; });
            }
        }
        return -1;
    };
    ProductFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__("../../../../../src/app/products/product-form/product-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_6__product_types_product_type_service__["a" /* ProductTypeService */],
            __WEBPACK_IMPORTED_MODULE_1__vendors_vendor_service__["a" /* VendorService */],
            __WEBPACK_IMPORTED_MODULE_7__pre_requisites_pre_requisite_service__["a" /* PreRequisiteService */],
            __WEBPACK_IMPORTED_MODULE_8__skills_skill_service__["a" /* SkillService */]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-view/product-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-view/product-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/products/product-view/product-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductViewComponent = (function () {
    function ProductViewComponent() {
    }
    ProductViewComponent.prototype.ngOnInit = function () {
    };
    ProductViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-view',
            template: __webpack_require__("../../../../../src/app/products/product-view/product-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-view/product-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductViewComponent);
    return ProductViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_data_service__ = __webpack_require__("../../../../../src/app/common/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function (_super) {
    __extends(ProductService, _super);
    function ProductService(httpClient) {
        var _this = this;
        var resourcePath = '/rest/products';
        _this = _super.call(this, httpClient, resourcePath) || this;
        return _this;
    }
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}(__WEBPACK_IMPORTED_MODULE_2__common_services_data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Products</h2>  \n    <a routerLink=\"/admin/products/new\" \n        class=\"btn btn-link btn-danger\">Create New</a> \n        \n    <table class=\"table table-stripped\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>Name</th>\n                <th>Description</th>\n                <th>Price</th>\n                <th>Type</th>\n                <th>Vendor</th>\n                <th>&nbsp;</th> \n            </tr> </thead>\n        <tr *ngFor=\"let product of products\" >           \n            <td>\n                <a [routerLink]=\"['/products/', product.id, 'view']\" class=\"btn btn-link btn-danger\">\n                    <i class=\"fa fa-eye\" aria-hidden=\"true\">{{product.id}}</i>                \n                </a> \n            </td>\n            <td>{{product.name}}</td>\n            <td>{{product.description}}</td>\n            <td>{{product.price | currency:'USD':'symbol' }}</td> \n            <td>{{product.productType.name}}</td>\n            <td>{{product.vendor.name}}</td>\n            <td> \n                <a [routerLink]=\"['/admin/products/', product.id]\"   class=\"btn btn-link btn-link-info\">\n                    <i class=\"fa fa-edit\" aria-hidden=\"true\"> Edit</i>                \n                </a>  \n                <button (click)=\"deleteProduct(product)\" class=\"btn btn-link btn-link-danger\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\"> Delete</i></button> \n            </td>\n        </tr>\n    </table>\n</div>\n "

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("../../../../../src/app/products/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = (function () {
    function ProductsComponent(_productService) {
        this._productService = _productService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this._productService.getAll().subscribe(function (prods) { return _this.products = prods; });
    };
    ProductsComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        this._productService.delete(product)
            .subscribe(function () {
            var index = _this.products.indexOf(product);
            _this.products.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__["a" /* NotFoundError */])
                alert('product has already been deleted.');
            else
                throw error;
        });
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/request-not-found/request-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/request-not-found/request-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/request-not-found/request-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestNotFoundComponent = (function () {
    function RequestNotFoundComponent() {
    }
    RequestNotFoundComponent.prototype.ngOnInit = function () {
    };
    RequestNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/request-not-found/request-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/request-not-found/request-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestNotFoundComponent);
    return RequestNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service-category/service-category-form/service-category-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-category/service-category-form/service-category-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding: 5px; margin: 20px;\">\n\n    <div class=\"row form-group\" align=\"center\"> \n        <h1 *ngIf=\"isNewForm\">Create new Service Category</h1>\n        <h1 *ngIf=\"!isNewForm\">Edit Service Category Details</h1>\n    </div>\n    <div class=\"row\">\n        <div class=\"col col-sm-6\">\n            <form #f=\"ngForm\" (ngSubmit)=\"saveServiceCategory(serviceCategory)\">\n                <div class=\"row\">\n                    <div  *ngIf=\"!isNewForm\" class=\"row form-group\"> \n                        <div class=\"col col-sm-4\" style=\"text-align: right;\">\n                            <label for=\"id\" >ID : </label>\n                        </div>\n                        <div class=\"col col-sm-8\">\n                            <input class=\"form-control\"  type=\"text\" id=\"id\" name=\"id\" [(ngModel)]=\"serviceCategory.id\" disabled/> \n                        </div>\n                    </div> \n                    <div  class=\"row form-group\"> \n                        <div class=\"col col-sm-4\" style=\"text-align: right;\">\n                            <label for=\"name\" >Name : </label>\n                        </div>\n                        <div class=\"col col-sm-8\">\n                            <input class=\"form-control\"  type=\"text\" id=\"name\" name=\"name\" #name=\"ngModel\"  [(ngModel)]=\"serviceCategory.name\"/> \n                        </div>\n                    </div>  \n                    <div  class=\"row form-group\"> \n                        <div class=\"col col-sm-4\" style=\"text-align: right;\">\n                            <label for=\"description\" >Brief Description : </label>\n                        </div>\n                        <div class=\"col col-sm-8\">\n                            <textarea class=\"form-control\"  type=\"text\" rows=\"2\" id=\"description\" \n                                      name=\"description\" [(ngModel)]=\"serviceCategory.description\"></textarea> \n                        </div>\n                    </div> \n                    <div  class=\"row form-group\"> \n                        <div class=\"col col-sm-6\">\n                            <label for=\"backgroundImage\" > Background Image </label>\n\n                            <input type=\"file\" #backgroundImageInput (change)=\"readBackgroungImageUrl($event)\"  accept=\"image/*\" />\n\n                            <div  *ngIf=\"showBackgroundImageSpinner\">\n                                <img src=\"\" alt=\"spinner loadig here!!\"/>\n                            </div>                        \n                            <div  *ngIf=\"!showBackgroundImageSpinner\">\n                                <img *ngIf=\"backgroundImagePic\" [src]=\"backgroundImagePic\" class=\"img-thumbnail rounded\">\n                            </div>\n                        </div>\n                        <div class=\"col col-sm-6 \">\n                            <label for=\"thumbnailImage\" > Thumbnail Image </label> \n\n                            <input type=\"file\" \n                                   #thumbnailImageInput (change)=\"readThumbnailUrl($event)\"  \n                                   accept=\"image/*\" />\n\n                            <div   *ngIf=\"showThumbnailSpinner\">\n                                <img src=\"\" alt=\"spinner loadig here!!\"/>\n                            </div>                        \n                            <div  *ngIf=\"!showThumbnailSpinner\">\n                                <img *ngIf=\"thumbnailPic\" [src]=\"thumbnailPic\" class=\"img-thumbnail rounded\">\n                            </div>\n                        </div>\n                    </div> \n                    <div  class=\"form-group\"> \n                        <div class=\"col\">\n                            <label for=\"serviceCategoryType.id\" >Display Content</label>\n                            <ckeditor *ngIf=\"isCkEditorJsLoaded\" \n                                name=\"displayContent\" id=\"displayContent\" \n                                [(ngModel)]=\"serviceCategory.displayContent\" >\n                            </ckeditor>\n                        </div>\n                    </div> \n                    <div class=\"form-group\">\n                        <div class=\"col col-sm-6\" align=\"right\" >\n                            <button type=\"submit\" class=\"btn btn-primary\"  >\n                                <i *ngIf=\"isNewForm\" class=\"fa fa-plus\" aria-hidden=\"true\"> | Save</i>\n                                <i *ngIf=\"!isNewForm\" class=\"fa fa-edit\" aria-hidden=\"true\"> | Update</i>\n                            </button>  \n                        </div>\n                        <div class=\"col col-sm-6\">\n                            <a routerLink=\"/servicecategories\" class=\"btn btn-warning \"  >\n                                <i class=\"fa fa-times\" aria-hidden=\"true\"> | Cancel</i>\n                            </a> \n                        </div>\n                    </div>\n                </div>\n            </form>        \n        </div>\n        <div class=\"col col-sm-6\">\n\n            <div class=\"row\" align=\"center\"> \n                <h2>Live Preview</h2>\n            </div>\n            <div class=\"row\">\n                <div   *ngIf=\"serviceCategory.imageMetadata\"\n                         [ngStyle]=\"{'background':'url(' + hostUrl + '/documents/viewtest/' +  serviceCategory.imageMetadata.filename + ') no-repeat 0 -400px'}\"\n                > \n\n                    <div class=\"container\" >\n                        <h3>{{serviceCategory.name}}</h3>\n                        <div [innerHTML]=\"serviceCategory.displayContent\"></div>        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>        \n</div>    \n\n\n{{ serviceCategory | json }}\n\n\n"

/***/ }),

/***/ "../../../../../src/app/service-category/service-category-form/service-category-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceCategoryFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_script_service__ = __webpack_require__("../../../../../src/app/common/script.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_file_uploader_service__ = __webpack_require__("../../../../../src/app/common/services/file-uploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_category_service__ = __webpack_require__("../../../../../src/app/service-category/service-category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_universal_declerations__ = __webpack_require__("../../../../../src/app/common/universal-declerations.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServiceCategoryFormComponent = (function (_super) {
    __extends(ServiceCategoryFormComponent, _super);
    function ServiceCategoryFormComponent(_serviceCategoryService, script, route, 
        /*private _sanitizer: DomSanitizer*/
        _fileUploaderService) {
        var _this = _super.call(this) || this;
        _this._serviceCategoryService = _serviceCategoryService;
        _this.script = script;
        _this.route = route;
        _this._fileUploaderService = _fileUploaderService;
        _this.isNewForm = true;
        //picFile: string;
        _this.isCkEditorJsLoaded = false;
        _this.ckeditorContent = '';
        _this.id = _this.route.snapshot.paramMap.get('id');
        _this.serviceCategory = {
            name: "",
            imageMetadata: { filename: "" },
            thumbnailMetadata: { filename: "" }
        };
        if (_this.id) {
            _this.getServiceCategory(_this.id);
        }
        else {
            _this.isNewForm = true;
        }
        return _this;
    }
    ServiceCategoryFormComponent.prototype.saveServiceCategory = function (serviceCategory) {
        // console.log("backgroundImagePic : " + this.backgroundImagePic);
        // console.log("thumbnailPic : " + this.thumbnailPic);
        this.showSpinner = true;
        if (this.backgroundImagePic) {
            var thumbnailMetadata = this.uploadFile(this.thumbnailPic, this.thumbnailPicFilename);
            serviceCategory.thumbnailMetadata = thumbnailMetadata;
        }
        if (this.backgroundImagePic) {
            var backgroundMetadata = this.uploadFile(this.backgroundImagePic, this.backgroundImagePicFilename);
            serviceCategory.imageMetadata = backgroundMetadata;
        }
        console.log("serviceCategory : " + JSON.stringify(serviceCategory));
        /*  if (this.isNewForm) {
              //             this._serviceCategoryTypeService.get(produc            t.serviceCategoryType.id)
              //                 .toPromise().then(pt => {serviceCategory.serviceCategoryType = pt; alert(JSON.stringify(serviceCategory.serviceCategoryType)); }) ;
  
              this._serviceCategoryService.create(serviceCategory)
                  .subscribe(prod => {
                      document.location.assign("/servicecategories");
                      //  document.location.reload() ;
                  })
                  ;
          }
          else {
              this._serviceCategoryService.update(this.id, serviceCategory)
                  .subscribe(prod => {
                      //alert('prod.id' + prod.id + '. index : ' + this.editProductIndex);
                      //                    this.serviceCategorys.splice(this.editProductIndex, 1);
                      //                    this.serviceCategorys.splice(this.editProductIndex, 0, prod);
                      //                    this.serviceCategorys.push(serviceCategory);
                      document.location.assign("/servicecategories");
  
                  });
          }*/
    };
    ServiceCategoryFormComponent.prototype.uploadFile = function (file, filename) {
        console.log("Now Starting Upload of File : " + filename);
        var metadata;
        //console.log("File : " + file ); 
        this._fileUploaderService.uploadImage(file, filename)
            .subscribe(function (result) {
            metadata = result;
            console.log("Finished Upload of File : " + filename);
            console.log("Success ... " + JSON.stringify(result));
            return metadata;
        });
        console.log("Failed Upload of File : " + filename);
        return null;
    };
    ServiceCategoryFormComponent.prototype.getServiceCategory = function (id) {
        var _this = this;
        this._serviceCategoryService.get(id).subscribe(function (sc) {
            _this.serviceCategory = sc;
            _this.loadThumbnails(_this.serviceCategory);
        });
    };
    ServiceCategoryFormComponent.prototype.loadThumbnails = function (serviceCategory) {
        if (serviceCategory) {
            if (serviceCategory.imageMetadata)
                this.backgroundImagePic = this._fileUploaderService.downloadFile(this.hostUrl + '/documents/viewtest/' + serviceCategory.imageMetadata.filename); // new File((this.hostUrl + '/documents/viewtest/' + serviceCategory.imageMetadata.filename), serviceCategory.imageMetadata.filename, { type : serviceCategory.imageMetadata.mimeType });
            if (serviceCategory.thumbnailMetadata)
                this.thumbnailPic = this._fileUploaderService.downloadFile(this.hostUrl + '/documents/viewtest/' + serviceCategory.thumbnailMetadata.filename); //this.hostUrl + '/documents/viewtest/' + serviceCategory.thumbnailMetadata.filename;
        }
    };
    //    getData(    ) {
    //        console.log(this.ckeditorConten    t);
    //        document.getElementById('test').innerHTML = this.ckeditorConte    nt;
    //    }
    ServiceCategoryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.script.load('ckeditor-basic').then(function (data) {
            console.log('script loaded ', data);
            _this.isCkEditorJsLoaded = true;
        }).catch(function (error) { return console.log(error); });
    };
    ServiceCategoryFormComponent.prototype.readBackgroungImageUrl = function (event) {
        var _this = this;
        console.log("event : " + event);
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            var filename_1 = file.name;
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.backgroundImagePic = event.target.result;
                _this.backgroundImagePicFilename = filename_1;
            };
            // when the file is read it triggers the onload event above.
            reader.readAsDataURL(file);
        }
        //let files = (<HTMLInputElement>document.getElementById('fileInput')).files ;
    };
    ServiceCategoryFormComponent.prototype.readThumbnailUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            var filename_2 = file.name;
            var reader = new FileReader();
            reader.onload = function (event) {
                var data = event.target.result;
                //console.log("event.target.result : " + data); 
                _this.thumbnailPic = data;
                _this.thumbnailPicFilename = filename_2;
            };
            // when the file is read it triggers the onload event above.
            reader.readAsDataURL(file);
        }
    };
    ServiceCategoryFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-category-form',
            template: __webpack_require__("../../../../../src/app/service-category/service-category-form/service-category-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/service-category/service-category-form/service-category-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__common_script_service__["a" /* ScriptService */], __WEBPACK_IMPORTED_MODULE_2__common_services_file_uploader_service__["a" /* FileUploaderService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_category_service__["a" /* ServiceCategoryService */],
            __WEBPACK_IMPORTED_MODULE_1__common_script_service__["a" /* ScriptService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__common_services_file_uploader_service__["a" /* FileUploaderService */]])
    ], ServiceCategoryFormComponent);
    return ServiceCategoryFormComponent;
}(__WEBPACK_IMPORTED_MODULE_5__common_universal_declerations__["a" /* UniversalDeclerations */]));



/***/ }),

/***/ "../../../../../src/app/service-category/service-category-view/service-category-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-category/service-category-view/service-category-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  service-category-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/service-category/service-category-view/service-category-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceCategoryViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceCategoryViewComponent = (function () {
    function ServiceCategoryViewComponent() {
    }
    ServiceCategoryViewComponent.prototype.ngOnInit = function () {
    };
    ServiceCategoryViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-category-view',
            template: __webpack_require__("../../../../../src/app/service-category/service-category-view/service-category-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/service-category/service-category-view/service-category-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceCategoryViewComponent);
    return ServiceCategoryViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service-category/service-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/service-category/service-category.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div >\n    <h2>Service Categories</h2>  \n    <a routerLink=\"/admin/servicecategories/new\" \n       class=\"btn btn-link btn-danger\">Create New</a> \n\n    <div *ngIf=\"!loaded\" class=\"row\" text-align=\"center\"> \n        <img src=\"../../assets/img/loading2.gif\" alt=\"\"/>\n    </div>\n\n    <div *ngIf=\"loaded\" class=\"row\">\n        <table class=\"table table-stripped\">\n            <thead>\n                <tr>\n                    <th>&nbsp;</th>\n                    <th>Name</th>\n                    <th>Description</th>\n                    <th>Thumbnail</th>\n                    <th>Background Image</th> \n                    <th>&nbsp;</th> \n                </tr> </thead>\n            <tr *ngFor=\"let serviceCategory of serviceCategories\" >           \n                <td>\n                    <a [routerLink]=\"['/servicecategories/', serviceCategory.id, 'view']\" class=\"btn btn-link btn-danger\">\n                        <i class=\"fa fa-eye\" aria-hidden=\"true\">{{serviceCategory.id}}</i>                \n                    </a> \n                </td>\n                <td>{{serviceCategory.name}}</td>\n                <td>{{serviceCategory.description}}</td>\n                <td> </td> \n                <td> </td>\n                <td> </td>\n                <td> \n                    <a [routerLink]=\"['/admin/servicecategories/', serviceCategory.id]\"   class=\"btn btn-link btn-link-info\">\n                        <i class=\"fa fa-edit\" aria-hidden=\"true\"> Edit</i>                \n                    </a>  \n                    <button (click)=\"deleteServiceCategory(serviceCategory)\" class=\"btn btn-link btn-link-danger\">\n                        <i class=\"fa fa-minus\" aria-hidden=\"true\"> Delete</i></button> \n                </td>\n            </tr>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/service-category/service-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_bad_input_error__ = __webpack_require__("../../../../../src/app/common/bad-input-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_app_error__ = __webpack_require__("../../../../../src/app/common/app-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_category_service__ = __webpack_require__("../../../../../src/app/service-category/service-category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServiceCategoryComponent = (function () {
    function ServiceCategoryComponent(_serviceCategoryService) {
        this._serviceCategoryService = _serviceCategoryService;
        //  title: any;
        this.loaded = false;
    }
    ServiceCategoryComponent.prototype.ngOnInit = function () {
        this.getServiceCategories();
    };
    ServiceCategoryComponent.prototype.getServiceCategories = function () {
        var _this = this;
        //console.log("num run time");
        this._serviceCategoryService.getAll().subscribe(function (scs) { _this.serviceCategories = scs; _this.loaded = true; });
    };
    ServiceCategoryComponent.prototype.deleteServiceCategory = function (serviceCategory) {
        var _this = this;
        this._serviceCategoryService.delete(serviceCategory)
            .subscribe(function () {
            var index = _this.serviceCategories.indexOf(serviceCategory);
            _this.serviceCategories.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__["a" /* NotFoundError */])
                alert('serviceCategory has already been deleted.');
            else
                throw error;
        });
    };
    ServiceCategoryComponent.prototype.handleError = function (error) {
        if (error.status === 404)
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__["a" /* NotFoundError */]());
        else if (error.status === 400)
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_3__common_bad_input_error__["a" /* BadInputError */](error));
        else
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(new __WEBPACK_IMPORTED_MODULE_4__common_app_error__["a" /* AppError */](error));
    };
    ServiceCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service-category',
            template: __webpack_require__("../../../../../src/app/service-category/service-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/service-category/service-category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__service_category_service__["a" /* ServiceCategoryService */]])
    ], ServiceCategoryComponent);
    return ServiceCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service-category/service-category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceCategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_data_service__ = __webpack_require__("../../../../../src/app/common/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceCategoryService = (function (_super) {
    __extends(ServiceCategoryService, _super);
    function ServiceCategoryService(httpClient) {
        var _this = this;
        var resourcePath = '/rest/servicecategories';
        _this = _super.call(this, httpClient, resourcePath) || this;
        return _this;
    }
    ServiceCategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServiceCategoryService);
    return ServiceCategoryService;
}(__WEBPACK_IMPORTED_MODULE_2__common_services_data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  side-bar works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__("../../../../../src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input \n            formControlName=\"username\"\n            id=\"username\" \n            type=\"text\" \n            class=\"form-control\">\n        <div *ngIf=\"username.touched && username.invalid\" class=\"alert alert-danger\">username is required</div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input \n            formControlName=\"password\"\n            id=\"password\" \n            type=\"text\" \n            class=\"form-control\">\n        <div *ngIf=\"password.touched && password.invalid\" class=\"alert alert-danger\">password is required</div>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent() {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3),
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3),
            ])
        });
    }
    Object.defineProperty(SignupComponent.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skill-form/skill-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skill-form/skill-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"saveSkill(skill)\">\n    <div class=\"row form-group\"> \n        <h2 *ngIf=\"isNewForm\">Create new Skill</h2>\n        <h2 *ngIf=\"!isNewForm\">Edit Skill Details</h2>\n    </div>\n\n    <div  *ngIf=\"!isNewForm\" class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"id\" >ID : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"id\" name=\"id\" [(ngModel)]=\"skill.id\" disabled/> \n        </div>\n    </div> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"name\" >Name : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"name\" name=\"name\" #name=\"ngModel\"  [(ngModel)]=\"skill.name\"/> \n        </div>\n    </div>      \n\n    <!--[(ngModel)]=\"skill.preRequisites\"--> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <button type=\"submit\" class=\"btn btn-primary\"  >\n                <i *ngIf=\"isNewForm\" class=\"fa fa-plus\" aria-hidden=\"true\"> | Save</i>\n                <i *ngIf=\"!isNewForm\" class=\"fa fa-edit\" aria-hidden=\"true\"> | Update</i>\n            </button>  \n        </div>\n        <div class=\"col col-sm-8\">\n            <a routerLink=\"/skills\" class=\"btn btn-warning \"  >\n                <i class=\"fa fa-times\" aria-hidden=\"true\"> | Cancel</i>\n            </a> \n        </div>\n    </div>\n</form>  "

/***/ }),

/***/ "../../../../../src/app/skills/skill-form/skill-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__skill_service__ = __webpack_require__("../../../../../src/app/skills/skill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SkillFormComponent = (function () {
    function SkillFormComponent(route, _skillService) {
        this.route = route;
        this._skillService = _skillService;
        this.isNewForm = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.skill = {
            name: ""
        };
        if (this.id) {
            this.getSkill(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }
    SkillFormComponent.prototype.ngOnInit = function () {
    };
    SkillFormComponent.prototype.getSkill = function (skillId) {
        var _this = this;
        this._skillService.get(skillId)
            .take(1)
            .subscribe(function (prod) { return _this.skill = prod; });
    };
    SkillFormComponent.prototype.saveSkill = function (skill) {
        console.log(JSON.stringify(skill));
        if (this.isNewForm) {
            this._skillService.create(skill)
                .subscribe(function (prod) {
                document.location.assign("/skills");
            });
        }
        else {
            this._skillService.update(this.id, skill)
                .subscribe(function (prod) {
                document.location.assign("/skills");
            });
        }
    };
    SkillFormComponent.prototype.deleteSkill = function (skill) {
        this._skillService.delete(skill)
            .subscribe(function () {
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__["a" /* NotFoundError */])
                alert('skill has already been deleted.');
            else
                throw error;
        });
    };
    SkillFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-skill-form',
            template: __webpack_require__("../../../../../src/app/skills/skill-form/skill-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skill-form/skill-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__skill_service__["a" /* SkillService */]])
    ], SkillFormComponent);
    return SkillFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skill-view/skill-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skill-view/skill-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  skill-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/skills/skill-view/skill-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillViewComponent = (function () {
    function SkillViewComponent() {
    }
    SkillViewComponent.prototype.ngOnInit = function () {
    };
    SkillViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-skill-view',
            template: __webpack_require__("../../../../../src/app/skills/skill-view/skill-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skill-view/skill-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillViewComponent);
    return SkillViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skill.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_data_service__ = __webpack_require__("../../../../../src/app/common/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillService = (function (_super) {
    __extends(SkillService, _super);
    function SkillService(httpClient) {
        var _this = this;
        var resourcePath = '/rest/skills';
        _this = _super.call(this, httpClient, resourcePath) || this;
        return _this;
    }
    SkillService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SkillService);
    return SkillService;
}(__WEBPACK_IMPORTED_MODULE_1__common_services_data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Skills</h2>  \n    <a routerLink=\"/admin/skills/new\" \n        class=\"btn btn-link btn-danger\">Create New</a> \n        \n    <table class=\"table table-stripped\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>Name</th>\n                <th>Last Modified</th>\n                <th>Last Modified By</th> \n                <th>&nbsp;</th> \n            </tr> </thead>\n        <tr *ngFor=\"let skill of skills\" >           \n            <td>\n                <a [routerLink]=\"['/skills/', skill.id, 'view']\" class=\"btn btn-link btn-danger\">\n                    <i class=\"fa fa-eye\" aria-hidden=\"true\">{{skill.id}}</i>                \n                </a> \n            </td>\n            <td>{{skill.name}}</td>\n            <td>{{skill.modificationTime }}</td> \n            <td>{{skill.modifiedByUser}}</td> \n            <td> \n                <a [routerLink]=\"['/admin/skills/', skill.id]\"   class=\"btn btn-link btn-link-info\">\n                    <i class=\"fa fa-edit\" aria-hidden=\"true\"> Edit</i>                \n                </a>  \n                <button (click)=\"deleteskill(skill)\" class=\"btn btn-link btn-link-danger\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\"> Delete</i></button> \n            </td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skill_service__ = __webpack_require__("../../../../../src/app/skills/skill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillsComponent = (function () {
    function SkillsComponent(_skillService) {
        this._skillService = _skillService;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.getSkills();
    };
    SkillsComponent.prototype.getSkills = function () {
        var _this = this;
        this._skillService.getAll().subscribe(function (prods) { return _this.skills = prods; });
    };
    SkillsComponent.prototype.deleteSkill = function (skill) {
        var _this = this;
        this._skillService.delete(skill)
            .subscribe(function () {
            var index = _this.skills.indexOf(skill);
            _this.skills.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__["a" /* NotFoundError */])
                alert('skill has already been deleted.');
            else
                throw error;
        });
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__skill_service__["a" /* SkillService */]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topics/topic-form/topic-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topics/topic-form/topic-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"saveTopic(topic)\">\n    <div class=\"row form-group\"> \n        <h2 *ngIf=\"isNewForm\">Create new Topic</h2>\n        <h2 *ngIf=\"!isNewForm\">Edit Topic Details</h2>\n    </div>\n\n    <div  *ngIf=\"!isNewForm\" class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"id\" >ID : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"id\" name=\"id\" [(ngModel)]=\"topic.id\" disabled/> \n        </div>\n    </div> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"name\" >Name : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"name\" name=\"name\" #name=\"ngModel\"  [(ngModel)]=\"topic.name\"/> \n        </div>\n    </div>      \n\n    <!--[(ngModel)]=\"topic.preRequisites\"--> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <button type=\"submit\" class=\"btn btn-primary\"  >\n                <i *ngIf=\"isNewForm\" class=\"fa fa-plus\" aria-hidden=\"true\"> | Save</i>\n                <i *ngIf=\"!isNewForm\" class=\"fa fa-edit\" aria-hidden=\"true\"> | Update</i>\n            </button>  \n        </div>\n        <div class=\"col col-sm-8\">\n            <a routerLink=\"/topics\" class=\"btn btn-warning \"  >\n                <i class=\"fa fa-times\" aria-hidden=\"true\"> | Cancel</i>\n            </a> \n        </div>\n    </div>\n</form>  "

/***/ }),

/***/ "../../../../../src/app/topics/topic-form/topic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_service__ = __webpack_require__("../../../../../src/app/topics/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicFormComponent = (function () {
    function TopicFormComponent(route, _topicService) {
        this.route = route;
        this._topicService = _topicService;
        this.isNewForm = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.topic = {
            name: ""
        };
        if (this.id) {
            this.getTopic(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }
    TopicFormComponent.prototype.ngOnInit = function () {
    };
    TopicFormComponent.prototype.getTopic = function (topicId) {
        var _this = this;
        this._topicService.get(topicId)
            .take(1)
            .subscribe(function (prod) { return _this.topic = prod; });
    };
    TopicFormComponent.prototype.saveTopic = function (topic) {
        console.log(JSON.stringify(topic));
        if (this.isNewForm) {
            this._topicService.create(topic)
                .subscribe(function (prod) {
                document.location.assign("/topics");
            });
        }
        else {
            this._topicService.update(this.id, topic)
                .subscribe(function (prod) {
                document.location.assign("/topics");
            });
        }
    };
    TopicFormComponent.prototype.deleteTopic = function (topic) {
        this._topicService.delete(topic)
            .subscribe(function () {
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__common_not_found_error__["a" /* NotFoundError */])
                alert('topic has already been deleted.');
            else
                throw error;
        });
    };
    TopicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topic-form',
            template: __webpack_require__("../../../../../src/app/topics/topic-form/topic-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topics/topic-form/topic-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__topic_service__["a" /* TopicService */]])
    ], TopicFormComponent);
    return TopicFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topics/topic-view/topic-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topics/topic-view/topic-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  topic-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/topics/topic-view/topic-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopicViewComponent = (function () {
    function TopicViewComponent() {
    }
    TopicViewComponent.prototype.ngOnInit = function () {
    };
    TopicViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topic-view',
            template: __webpack_require__("../../../../../src/app/topics/topic-view/topic-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topics/topic-view/topic-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopicViewComponent);
    return TopicViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topics/topic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_data_service__ = __webpack_require__("../../../../../src/app/common/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicService = (function (_super) {
    __extends(TopicService, _super);
    function TopicService(httpClient) {
        var _this = this;
        var resourcePath = '/rest/topics';
        _this = _super.call(this, httpClient, resourcePath) || this;
        return _this;
    }
    TopicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], TopicService);
    return TopicService;
}(__WEBPACK_IMPORTED_MODULE_1__common_services_data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/topics/topics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topics/topics.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Topics</h2>  \n    <a routerLink=\"/admin/topics/new\" \n        class=\"btn btn-link btn-danger\">Create New</a> \n        \n    <table class=\"table table-stripped\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>Name</th>\n                <th>Last Modified</th>\n                <th>Last Modified By</th> \n                <th>&nbsp;</th> \n            </tr> </thead>\n        <tr *ngFor=\"let topic of topics\" >           \n            <td>\n                <a [routerLink]=\"['/topics/', topic.id, 'view']\" class=\"btn btn-link btn-danger\">\n                    <i class=\"fa fa-eye\" aria-hidden=\"true\">{{topic.id}}</i>                \n                </a> \n            </td>\n            <td>{{topic.name}}</td>\n            <td>{{topic.modificationTime }}</td> \n            <td>{{topic.modifiedByUser}}</td> \n            <td> \n                <a [routerLink]=\"['/admin/topics/', topic.id]\"   class=\"btn btn-link btn-link-info\">\n                    <i class=\"fa fa-edit\" aria-hidden=\"true\"> Edit</i>                \n                </a>  \n                <button (click)=\"deletetopic(topic)\" class=\"btn btn-link btn-link-danger\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\"> Delete</i></button> \n            </td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/topics/topics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topic_service__ = __webpack_require__("../../../../../src/app/topics/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicsComponent = (function () {
    function TopicsComponent(_topicService) {
        this._topicService = _topicService;
    }
    TopicsComponent.prototype.ngOnInit = function () {
        this.getTopics();
    };
    TopicsComponent.prototype.getTopics = function () {
        var _this = this;
        this._topicService.getAll().subscribe(function (prods) { return _this.topics = prods; });
    };
    TopicsComponent.prototype.deleteTopic = function (topic) {
        var _this = this;
        this._topicService.delete(topic)
            .subscribe(function () {
            var index = _this.topics.indexOf(topic);
            _this.topics.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_2__common_not_found_error__["a" /* NotFoundError */])
                alert('topic has already been deleted.');
            else
                throw error;
        });
    };
    TopicsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topics',
            template: __webpack_require__("../../../../../src/app/topics/topics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/topics/topics.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__topic_service__["a" /* TopicService */]])
    ], TopicsComponent);
    return TopicsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vendors/vendor-form/vendor-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendors/vendor-form/vendor-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"saveVendor(vendor)\">\n    <div class=\"row form-group\"> \n        <h2 *ngIf=\"isNewForm\">Create new Vendor</h2>\n        <h2 *ngIf=\"!isNewForm\">Edit Vendor Details</h2>\n    </div>\n\n    <div  *ngIf=\"!isNewForm\" class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"id\" >ID : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"id\" name=\"id\" [(ngModel)]=\"vendor.id\" disabled/> \n        </div>\n    </div> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <label for=\"name\" >Name : </label>\n        </div>\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\"  type=\"text\" id=\"name\" name=\"name\" #name=\"ngModel\"  [(ngModel)]=\"vendor.name\"/> \n        </div>\n    </div>      \n\n    <!--[(ngModel)]=\"vendor.preRequisites\"--> \n    <div  class=\"row form-group\"> \n        <div class=\"col col-sm-2\" style=\"text-align: right;\">\n            <button type=\"submit\" class=\"btn btn-primary\"  >\n                <i *ngIf=\"isNewForm\" class=\"fa fa-plus\" aria-hidden=\"true\"> | Save</i>\n                <i *ngIf=\"!isNewForm\" class=\"fa fa-edit\" aria-hidden=\"true\"> | Update</i>\n            </button>  \n        </div>\n        <div class=\"col col-sm-8\">\n            <a routerLink=\"/vendors\" class=\"btn btn-warning \"  >\n                <i class=\"fa fa-times\" aria-hidden=\"true\"> | Cancel</i>\n            </a> \n        </div>\n    </div>\n</form>  "

/***/ }),

/***/ "../../../../../src/app/vendors/vendor-form/vendor-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_service__ = __webpack_require__("../../../../../src/app/vendors/vendor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VendorFormComponent = (function () {
    function VendorFormComponent(route, _vendorService) {
        this.route = route;
        this._vendorService = _vendorService;
        this.isNewForm = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.vendor = {
            name: ""
        };
        if (this.id) {
            this.getVendor(this.id);
        }
        else {
            this.isNewForm = true;
        }
    }
    VendorFormComponent.prototype.ngOnInit = function () {
    };
    VendorFormComponent.prototype.getVendor = function (vendorId) {
        var _this = this;
        this._vendorService.get(vendorId)
            .take(1)
            .subscribe(function (prod) { return _this.vendor = prod; });
    };
    VendorFormComponent.prototype.saveVendor = function (vendor) {
        console.log(JSON.stringify(vendor));
        if (this.isNewForm) {
            this._vendorService.create(vendor)
                .subscribe(function (prod) {
                document.location.assign("/vendors");
            });
        }
        else {
            this._vendorService.update(this.id, vendor)
                .subscribe(function (prod) {
                document.location.assign("/vendors");
            });
        }
    };
    VendorFormComponent.prototype.deleteVendor = function (vendor) {
        this._vendorService.delete(vendor)
            .subscribe(function () {
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__common_not_found_error__["a" /* NotFoundError */])
                alert('vendor has already been deleted.');
            else
                throw error;
        });
    };
    VendorFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vendor-form',
            template: __webpack_require__("../../../../../src/app/vendors/vendor-form/vendor-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vendors/vendor-form/vendor-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__vendor_service__["a" /* VendorService */]])
    ], VendorFormComponent);
    return VendorFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vendors/vendor-view/vendor-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendors/vendor-view/vendor-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  vendor-view works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/vendors/vendor-view/vendor-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VendorViewComponent = (function () {
    function VendorViewComponent() {
    }
    VendorViewComponent.prototype.ngOnInit = function () {
    };
    VendorViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vendor-view',
            template: __webpack_require__("../../../../../src/app/vendors/vendor-view/vendor-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vendors/vendor-view/vendor-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VendorViewComponent);
    return VendorViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vendors/vendor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_data_service__ = __webpack_require__("../../../../../src/app/common/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VendorService = (function (_super) {
    __extends(VendorService, _super);
    function VendorService(httpClient) {
        var _this = this;
        var resourcePath = '/rest/vendors';
        _this = _super.call(this, httpClient, resourcePath) || this;
        return _this;
    }
    VendorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VendorService);
    return VendorService;
}(__WEBPACK_IMPORTED_MODULE_2__common_services_data_service__["a" /* DataService */]));



/***/ }),

/***/ "../../../../../src/app/vendors/vendors.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vendors/vendors.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2>Vendors</h2>  \n    <a routerLink=\"/admin/vendors/new\" \n        class=\"btn btn-link btn-danger\">Create New</a> \n        \n    <table class=\"table table-stripped\">\n        <thead>\n            <tr>\n                <th>&nbsp;</th>\n                <th>Name</th>\n                <th>Last Modified</th>\n                <th>Last Modified By</th> \n                <th>&nbsp;</th> \n            </tr> </thead>\n        <tr *ngFor=\"let vendor of vendors\" >           \n            <td>\n                <a [routerLink]=\"['/vendors/', vendor.id, 'view']\" class=\"btn btn-link btn-danger\">\n                    <i class=\"fa fa-eye\" aria-hidden=\"true\">{{vendor.id}}</i>                \n                </a> \n            </td>\n            <td>{{vendor.name}}</td>\n            <td>{{vendor.modificationTime }}</td> \n            <td>{{vendor.modifiedByUser}}</td> \n            <td> \n                <a [routerLink]=\"['/admin/vendors/', vendor.id]\"   class=\"btn btn-link btn-link-info\">\n                    <i class=\"fa fa-edit\" aria-hidden=\"true\"> Edit</i>                \n                </a>  \n                <button (click)=\"deleteProductType(vendor)\" class=\"btn btn-link btn-link-danger\">\n                    <i class=\"fa fa-minus\" aria-hidden=\"true\"> Delete</i></button> \n            </td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/vendors/vendors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__ = __webpack_require__("../../../../../src/app/common/not-found-error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_service__ = __webpack_require__("../../../../../src/app/vendors/vendor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VendorsComponent = (function () {
    function VendorsComponent(_vendorService) {
        this._vendorService = _vendorService;
    }
    VendorsComponent.prototype.ngOnInit = function () {
        this.getVendors();
    };
    VendorsComponent.prototype.getVendors = function () {
        var _this = this;
        this._vendorService.getAll().subscribe(function (prods) { return _this.vendors = prods; });
    };
    VendorsComponent.prototype.deleteVendor = function (vendor) {
        var _this = this;
        this._vendorService.delete(vendor)
            .subscribe(function () {
            var index = _this.vendors.indexOf(vendor);
            _this.vendors.splice(index, 1);
        }, function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_1__common_not_found_error__["a" /* NotFoundError */])
                alert('vendor has already been deleted.');
            else
                throw error;
        });
    };
    VendorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vendors',
            template: __webpack_require__("../../../../../src/app/vendors/vendors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vendors/vendors.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__vendor_service__["a" /* VendorService */]])
    ], VendorsComponent);
    return VendorsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: '',
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map