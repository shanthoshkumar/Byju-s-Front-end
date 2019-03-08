(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _searchjob_searchjob_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../searchjob/searchjob.component */ "./src/app/searchjob/searchjob.component.ts");
/* harmony import */ var _listjob_listjob_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listjob/listjob.component */ "./src/app/listjob/listjob.component.ts");


var routes = [
    { path: 'jobsearch', component: _searchjob_searchjob_component__WEBPACK_IMPORTED_MODULE_0__["SearchjobComponent"] },
    { path: 'joblist', component: _listjob_listjob_component__WEBPACK_IMPORTED_MODULE_1__["ListjobComponent"] },
    {
        path: '',
        redirectTo: '/joblist',
        pathMatch: 'full'
    },
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-inverse {\r\n    border-color: #7C2289;\r\n    background-image: linear-gradient(45deg, #2E266F 0%, #7C2289 100%);\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <nav class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\" style=\"color: white\">BYJU'S JOB PORTAL</a>\n      </div>\n      <ul class=\"nav navbar-nav\">\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li  routerLink=\"/jobsearch\"><a><span class=\"glyphicon glyphicon-search\" ></span> Search Jobs</a></li>\n        <li routerLink=\"/joblist\"><a><span class=\"glyphicon glyphicon-eye-open\"></span> View Jobs</a></li>\n      </ul>\n    </div>\n  </nav>\n <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'job-search';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _searchjob_searchjob_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./searchjob/searchjob.component */ "./src/app/searchjob/searchjob.component.ts");
/* harmony import */ var _listjob_listjob_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listjob/listjob.component */ "./src/app/listjob/listjob.component.ts");
/* harmony import */ var _app_routing_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/routes */ "./src/app/app-routing/routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _searchjob_searchjob_component__WEBPACK_IMPORTED_MODULE_3__["SearchjobComponent"],
                _listjob_listjob_component__WEBPACK_IMPORTED_MODULE_4__["ListjobComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routing_routes__WEBPACK_IMPORTED_MODULE_5__["routes"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/listjob/listjob.component.css":
/*!***********************************************!*\
  !*** ./src/app/listjob/listjob.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n    color:white;\r\n    margin:0 0 0 10px;\r\n  }\r\n  .panel-default>.panel-heading {\r\n    color: white;\r\n    background-image:linear-gradient(45deg, #2E266F 0%, #7C2289 100%);\r\n    border-color: #ddd;\r\n }\r\n  thead{\r\n  color: #fff;    \r\n    background-image: linear-gradient(45deg, #2E266F 0%, #7C2289 100%);\r\n }\r\n  table {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  width: 100%;\r\n  border: 1px solid #ddd;\r\n}\r\n  .text-margin{\r\n  margin: 10px 0 0 0;\r\n}\r\n  th, td {\r\n  text-align: center;\r\n  padding: 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/listjob/listjob.component.html":
/*!************************************************!*\
  !*** ./src/app/listjob/listjob.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"row-sm-2\">\n         <div class=\"col-sm-3\"></div>\n         <div class=\"col-sm-6\">\n          <span><h1>Total Number of Jobs Found {{ job_pool.length }}</h1></span>\n        </div>\n         <div class=\"col-sm-3\"></div>\n         \n       </div>\n       <div class=\"row-sm-10\">\n          <div class=\"col-sm-12\" style=\"margin-top:40px;overflow-x:auto;height:500px\">\n              <table class=\"table table-bordered\">\n              <thead >\n                  <tr>\n                      <th>applylink</th>\n                      <th>companyname</th>\n                      <th>created</th>\n                      <th>enddate</th>\n                      <th>experience</th>\n                      <th>jd</th>\n                      <th>location</th>\n                      <th>salary</th>\n                      <th>skills</th>\n                      <th>source</th>\n                      <th>startdate</th>\n                      <th>title</th>\n                      <th>type</th>\n                    </tr> \n                </thead>\n                <tbody >\n                    <tr *ngFor=\"let job of job_pool;let i=index\">\n                        <td>{{ job.applylink }}</td>\n                        <td>{{ job.companyname }}</td>\n                        <td>{{ job.created }}</td>\n                        <td>{{ job.enddate }}</td>\n                        <td>{{ job.experience }}</td>\n                        <td>{{ job.jd }}</td>\n                        <td>{{ job.location }}</td>\n                        <td>{{ job.salary }}</td>\n                        <td>{{ job.skills }}</td>\n                        <td>{{ job.source }}</td>\n                        <td>{{ job.startdate }}</td>\n                        <td>{{ job.title }}</td>\n                        <td>{{ job.type }}</td>\n                      </tr>   \n                      </tbody>\n                </table>\n              </div>\n       </div>\n     </div>\n   </div>"

/***/ }),

/***/ "./src/app/listjob/listjob.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listjob/listjob.component.ts ***!
  \**********************************************/
/*! exports provided: ListjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListjobComponent", function() { return ListjobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListjobComponent = /** @class */ (function () {
    function ListjobComponent(http) {
        var _this = this;
        this.http = http;
        this.job_pool = [];
        this.http.get("https://api.myjson.com/bins/kez8a").subscribe(function (result) { return result['jobsfeed'].forEach(function (job) {
            Object.keys(job).forEach(function (key) {
                if (job[key] == '') {
                    job[key] = "Not mentioned";
                }
            });
            _this.job_pool.push(job);
        }); });
    }
    ListjobComponent.prototype.ngOnInit = function () {
    };
    ListjobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listjob',
            template: __webpack_require__(/*! ./listjob.component.html */ "./src/app/listjob/listjob.component.html"),
            styles: [__webpack_require__(/*! ./listjob.component.css */ "./src/app/listjob/listjob.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListjobComponent);
    return ListjobComponent;
}());



/***/ }),

/***/ "./src/app/searchjob/searchjob.component.css":
/*!***************************************************!*\
  !*** ./src/app/searchjob/searchjob.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchbtn {\r\n    color: #fff;\r\n    border-color: #7C2289;\r\n    background-image: linear-gradient(45deg, #2E266F 0%, #7C2289 100%);\r\n }\r\n label{\r\n    color:white;\r\n    margin:0 0 0 10px;\r\n  }\r\n .panel-default>.panel-heading {\r\n    color: white;\r\n    background-image:linear-gradient(45deg, #2E266F 0%, #7C2289 100%);\r\n    border-color: #ddd;\r\n }\r\n thead{\r\n  color: #fff;    \r\n    background-image: linear-gradient(45deg, #2E266F 0%, #7C2289 100%);\r\n }\r\n table {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  width: 100%;\r\n  border: 1px solid #ddd;\r\n}\r\n .text-margin{\r\n  margin: 10px 0 0 0;\r\n}\r\n th, td {\r\n  text-align: center;\r\n  padding: 8px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/searchjob/searchjob.component.html":
/*!****************************************************!*\
  !*** ./src/app/searchjob/searchjob.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n   <div class=\"row\">\n     <div class=\"row-sm-2\">\n       <div class=\"col-sm-2\">&nbsp;&nbsp;&nbsp;&nbsp;Based on Experience\n          <select #expoptions (change)=\"filter_experience(expoptions.value);\" class=\"form-control\" >\n              <option>Select</option>\n              <option *ngFor=\"let experience of job_experiences\" value={{experience}} style=\"color: blue\">{{ experience }}</option>\n          </select>\n       </div>\n       <div class=\"col-sm-2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Based on Location\n          <select #locoptions (change)=\"filter_location(locoptions.value);\" class=\"form-control\" >\n              <option>Select</option>\n              <option *ngFor=\"let location of job_locations\" value={{location}} style=\"color: blue\">{{ location }}</option>\n          </select>\n       </div>\n       <div class=\"col-sm-2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Based on Skills\n        <select #skillset (change)=\"filter_skill(skillset.value);\" class=\"form-control\" >\n            <option>Select</option>\n            <option *ngFor=\"let skill of job_skills\" value={{skill}} style=\"color: blue\">{{ skill }}</option>\n        </select>\n       </div>\n       <div class=\"col-sm-2\">Based on Company Name\n          <select #companyname (change)=\"filter_company(companyname.value);\" class=\"form-control\" >\n              <option>Select</option>\n              <option *ngFor=\"let company of job_companies\" value={{company}} style=\"color: blue\">{{ company }}</option>\n          </select>\n       </div>\n        <div class=\"col-sm-1\">\n          <input type=\"button\" value=\"Search\" class=\"form-control searchbtn\" style=\"margin-top: 19px\" (click)=\"filteration_using_keys()\">\n      </div>\n      <div class=\"col-sm-3\">\n        <h4>Jobs Based On User Search</h4> <p id=\"jobcount\" style=\"padding-left: 110px;color: red\"></p>\n      </div>\n         </div>\n     <div class=\"row-sm-9\">\n        <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-sm-12\" style=\"margin-top:40px;overflow-x:auto;max-height: 550px\">\n              <table class=\"table table-bordered\" >\n              <thead >\n                  <tr>\n                      <th>Sno</th>\n                      <th>applylink</th>\n                      <th>companyname</th>\n                      <th>created</th>\n                      <th>enddate</th>\n                      <th>experience</th>\n                      <th>jd</th>\n                      <th>location</th>\n                      <th>salary</th>\n                      <th>skills</th>\n                      <th>source</th>\n                      <th>startdate</th>\n                      <th>title</th>\n                    <th>type</th>\n                    </tr> \n                </thead>\n                <tbody >\n                    <tr *ngFor=\"let job of filtered_jobs;let i=index\">\n                        <td>{{ i+1 }}</td>\n                        <td>{{ job.applylink }}</td>\n                        <td>{{ job.companyname }}</td>\n                        <td>{{ job.created }}</td>\n                        <td>{{ job.enddate }}</td>\n                        <td>{{ job.experience }}</td>\n                        <td>{{ job.jd }}</td>\n                        <td>{{ job.location }}</td>\n                        <td>{{ job.salary }}</td>\n                        <td>{{ job.skills }}</td>\n                        <td>{{ job.source }}</td>\n                        <td>{{ job.startdate }}</td>\n                        <td>{{ job.title }}</td>\n                        <td>{{ job.type }}</td>                                         \n                      </tr>   \n                      </tbody>\n                </table>\n              </div>\n            </div>\n           </div>\n     </div>\n   </div>\n </div>"

/***/ }),

/***/ "./src/app/searchjob/searchjob.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchjob/searchjob.component.ts ***!
  \**************************************************/
/*! exports provided: SearchjobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchjobComponent", function() { return SearchjobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchjobComponent = /** @class */ (function () {
    function SearchjobComponent(http) {
        var _this = this;
        this.http = http;
        this.job_pool = [];
        this.job_locations = [];
        this.job_experiences = [];
        this.job_companies = [];
        this.job_skills = [];
        this.experience_tosort = '';
        this.location_tosort = '';
        this.company_tosort = '';
        this.skill_tosort = '';
        this.filtered_jobs = [];
        this.http.get("https://api.myjson.com/bins/kez8a").subscribe(function (result) { return result['jobsfeed'].forEach(function (job) {
            _this.job_pool.push(job);
            if (job['experience'] != '') {
                _this.job_experiences.push(job['experience']); //getting all expereince levels from api data for adding in Drop down 
            }
            if (job['location'] != '') {
                _this.job_locations.push(job['location']); //getting all Locations from api data for adding in Drop down 
            }
            if (job['skills'] != '') {
                var arr = job['skills'].split(',');
                arr.find(function (skill) {
                    _this.job_skills.push(skill); //getting all Skill set from api data for adding in Drop down 
                });
            }
            if (job['companyname'] != '') {
                _this.job_companies.push(job['companyname']); //getting all Comapany names from api data for adding in Drop down 
            }
        }); });
    }
    SearchjobComponent.prototype.filter_experience = function (experience) {
        this.experience_tosort = '';
        this.experience_tosort = experience; //holds the experience level to be filtered
        if (experience == 'Select') {
            this.filtered_jobs.length = 0;
            document.getElementById('jobcount').innerText = '0';
        }
    };
    SearchjobComponent.prototype.filter_location = function (location) {
        this.location_tosort = '';
        this.location_tosort = location; //holds the Location to be filtered
        if (location == 'Select') {
            this.filtered_jobs.length = 0;
            document.getElementById('jobcount').innerText = '0';
        }
    };
    SearchjobComponent.prototype.filter_company = function (company) {
        this.company_tosort = '';
        this.company_tosort = company; //holds the Company name to be filtered
        if (company == 'Select') {
            this.filtered_jobs.length = 0;
            document.getElementById('jobcount').innerText = '0';
        }
    };
    SearchjobComponent.prototype.filter_skill = function (skill) {
        this.skill_tosort = '';
        this.skill_tosort = skill; //holds the skill set to be filtered
        if (skill == 'Select') {
            this.filtered_jobs.length = 0;
            document.getElementById('jobcount').innerText = '0';
        }
    };
    SearchjobComponent.prototype.filteration_using_keys = function () {
        if ((this.experience_tosort == '' || this.experience_tosort == "Select") && (this.location_tosort == '' || this.location_tosort == "Select") && (this.company_tosort == '' || this.company_tosort == "Select") && (this.skill_tosort == '' || this.skill_tosort == "Select")) {
            alert('Please Select a Keyword');
        }
        else if (this.experience_tosort != '' && this.experience_tosort != "Select") {
            var expobj = {};
            expobj['key'] = 'experience';
            expobj['value'] = this.experience_tosort;
            this.filter_using_singlekey(expobj);
        }
        else if (this.location_tosort != '' && this.location_tosort != "Select") {
            var locobj = {};
            locobj['key'] = 'location';
            locobj['value'] = this.location_tosort;
            this.filter_using_singlekey(locobj);
        }
        else if (this.company_tosort != '' && this.company_tosort != "Select") {
            var compnameobj = {};
            compnameobj['key'] = 'companyname';
            compnameobj['value'] = this.company_tosort;
            this.filter_using_singlekey(compnameobj);
        }
        else if (this.skill_tosort != '' && this.skill_tosort != "Select") {
            this.filter_using_skills(this.skill_tosort);
        }
    };
    SearchjobComponent.prototype.filter_using_skills = function (skillset) {
        var _this = this;
        this.filtered_jobs.length = 0;
        this.job_pool.forEach(function (job) {
            var arr = job['skills'].split(',');
            arr.find(function (skill) {
                if (skillset == skill) {
                    Object.keys(job).forEach(function (key) {
                        if (job[key] == '') {
                            job[key] = "Not mentioned";
                        }
                    });
                    _this.filtered_jobs.push(job);
                    var count = _this.filtered_jobs.length;
                    document.getElementById('jobcount').innerText = count;
                }
            });
        });
    };
    SearchjobComponent.prototype.filter_using_singlekey = function (data) {
        var _this = this;
        this.filtered_jobs.length = 0;
        this.job_pool.forEach(function (job) {
            if (data['value'] == job[data['key']]) {
                Object.keys(job).forEach(function (key) {
                    if (job[key] == '') {
                        job[key] = "Not mentioned";
                    }
                });
                _this.filtered_jobs.push(job);
                var count = _this.filtered_jobs.length;
                ;
                document.getElementById('jobcount').innerText = count;
            }
        });
    };
    SearchjobComponent.prototype.ngOnInit = function () {
        document.getElementById('jobcount').innerText = '0'; //sets the default job count as 0;
    };
    SearchjobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchjob',
            template: __webpack_require__(/*! ./searchjob.component.html */ "./src/app/searchjob/searchjob.component.html"),
            styles: [__webpack_require__(/*! ./searchjob.component.css */ "./src/app/searchjob/searchjob.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchjobComponent);
    return SearchjobComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\byjus\job-search\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map