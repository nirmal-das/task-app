webpackJsonp([0,3],{

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(300);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TaskApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskApiService = (function () {
    function TaskApiService(http, appConfig) {
        this.http = http;
        this.baseUrl = appConfig.taskApiBaseURL;
    }
    TaskApiService.prototype.getAllTasks = function () {
        var url = this.baseUrl + 'api/task/list';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    TaskApiService.prototype.getAllCategories = function () {
        var url = this.baseUrl + 'api/category/list';
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    TaskApiService.prototype.getCategoryTasks = function (category) {
        var url = this.baseUrl + 'api/task/list/' + category;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    TaskApiService.prototype.createTask = function (taskModel) {
        var url = this.baseUrl + 'api/task/';
        return this.http.post(url, taskModel)
            .map(function (res) { return res.json(); });
    };
    TaskApiService.prototype.getTask = function (id) {
        var url = this.baseUrl + 'api/task/' + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    TaskApiService.prototype.updateTask = function (id, taskModel) {
        var url = this.baseUrl + 'api/task/' + id;
        return this.http.put(url, taskModel)
            .map(function (res) { return res.json(); });
    };
    TaskApiService.prototype.deleteTask = function (id, purge) {
        var url = this.baseUrl + 'api/task/' + id;
        if (purge) {
            url += '?purge=true';
        }
        return this.http.delete(url)
            .map(function (res) { return res.json(); });
    };
    TaskApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */]) === 'function' && _b) || Object])
    ], TaskApiService);
    return TaskApiService;
    var _a, _b;
}());
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/task-api.service.js.map

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
        this.taskApiBaseURL = ''; //'http://raspberrypi:8900/'
    }
    return AppConfig;
}());
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/app.config.js.map

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EditControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditControlComponent = (function () {
    function EditControlComponent(renderer) {
        this.renderer = renderer;
        this.showTick = true;
        this.showCross = true;
        this.onTick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.onCross = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.isMouseIn = false;
        this.taVisible = false;
    }
    EditControlComponent.prototype.ngOnInit = function () { };
    EditControlComponent.prototype.ngAfterViewInit = function () {
        this.bindElementEvents();
    };
    EditControlComponent.prototype.ngOnDestroy = function () {
        this.titleBlurFunc();
        this.titleKeyPressFunc();
        this.commentBlurFunc();
    };
    EditControlComponent.prototype.bindElementEvents = function () {
        var _this = this;
        this.titleBlurFunc = this.renderer.listen(this.titleRef.nativeElement, 'blur', this.emitTaskChange.bind(this));
        this.titleKeyPressFunc = this.renderer.listen(this.titleRef.nativeElement, 'keypress', function (event) {
            if (event.charCode === 13) {
                _this.emitTaskChange();
            }
        });
        this.commentBlurFunc = this.renderer.listen(this.commentRef.nativeElement, 'blur', this.emitTaskChange.bind(this));
    };
    // Event Handlers
    EditControlComponent.prototype.onMouseEnter = function () {
        this.isMouseIn = true;
    };
    EditControlComponent.prototype.onMouseLeave = function () {
        this.isMouseIn = false;
    };
    // PUBLIC FUNCTIONS
    EditControlComponent.prototype.focusInput = function () {
        this.titleRef.nativeElement.focus();
    };
    // EVENT EMITTERS
    EditControlComponent.prototype.tickClicked = function () {
        this.onTick.emit(this.task._id);
    };
    EditControlComponent.prototype.crossClicked = function () {
        this.onCross.emit(this.task._id);
    };
    EditControlComponent.prototype.emitTaskChange = function () {
        this.onUpdate.emit(this.task);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], EditControlComponent.prototype, "task", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', String)
    ], EditControlComponent.prototype, "placeholderText", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], EditControlComponent.prototype, "showTick", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], EditControlComponent.prototype, "showCross", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], EditControlComponent.prototype, "onTick", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], EditControlComponent.prototype, "onCross", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], EditControlComponent.prototype, "onUpdate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('titleInput'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _a) || Object)
    ], EditControlComponent.prototype, "titleRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('commentTextArea'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _b) || Object)
    ], EditControlComponent.prototype, "commentRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* HostListener */])('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], EditControlComponent.prototype, "onMouseEnter", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* HostListener */])('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], EditControlComponent.prototype, "onMouseLeave", null);
    EditControlComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'ta-edit-control',
            template: "\n    <div class=\"input-group\">      \n\n      <input #titleInput type=\"text\" [(ngModel)]=\"task.title\" class=\"form-control\" placeholder=\"{{placeholderText}}\">\n\n      <span class=\"input-group-btn\">\n\n        <button *ngIf=\"showTick\" class=\"btn btn-default set-color\" [class.btn-success]=\"isMouseIn\"\n          [class.set-color-light]=\"isMouseIn\"\n          (click)=\"tickClicked()\">\n          <span class=\"glyphicon glyphicon-check\"></span>\n        </button>\n\n        <button *ngIf=\"showCross\" class=\"btn btn-default set-color\" [class.btn-danger]=\"isMouseIn\"\n          [class.set-color-light]=\"isMouseIn\"\n          (click)=\"crossClicked()\">\n          <span class=\"glyphicon glyphicon-trash\"></span>\n        </button>\n\n        <button *ngIf=\"showCross\" class=\"btn btn-default set-color\" [class.btn-primary]=\"isMouseIn\"\n          [class.set-color-light]=\"isMouseIn\"\n          (click)=\"taVisible=!taVisible\">\n          <span class=\"glyphicon glyphicon-comment\"></span>\n        </button>\n      </span>\n\n    </div>\n    <textarea #commentTextArea class=\"form-control\" [style.display]=\"taVisible?'block':'none'\" [(ngModel)]=\"task.comment\"></textarea>\n  ",
            styles: ["\n    .set-color { color: grey; }\n    .set-color-light { color: white; }\n    textarea { resize: vertical; }\n  "]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Renderer */]) === 'function' && _c) || Object])
    ], EditControlComponent);
    return EditControlComponent;
    var _a, _b, _c;
}());
// <span class="input-group-addon">
//   <input type="checkbox">
// </span>
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/edit-control.component.js.map

/***/ },

/***/ 344:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 344;


/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(454);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/main.js.map

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ta works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'ta-root',
            template: __webpack_require__(615),
            styles: [__webpack_require__(613)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/app.component.js.map

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_header_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_nav_category_nav_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_list_task_list_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components_edit_control_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_task_api_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_task_data_service__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_config__ = __webpack_require__(300);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__category_nav_category_nav_component__["a" /* CategoryNavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__task_list_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_components_edit_control_component__["a" /* EditControlComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_task_api_service__["a" /* TaskApiService */], __WEBPACK_IMPORTED_MODULE_10__services_task_data_service__["a" /* TaskDataService */], __WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* AppConfig */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/app.module.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CategoryNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryNavComponent = (function () {
    function CategoryNavComponent() {
        this.categories = [];
        this.categorySelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    CategoryNavComponent.prototype.ngOnInit = function () { };
    CategoryNavComponent.prototype.isActive = function (category) {
        return this.activeCategory === category;
    };
    CategoryNavComponent.prototype.selectCategory = function (selectCategory) {
        this.categorySelected.emit(selectCategory);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], CategoryNavComponent.prototype, "categories", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], CategoryNavComponent.prototype, "activeCategory", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], CategoryNavComponent.prototype, "categorySelected", void 0);
    CategoryNavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'ta-category-nav',
            template: __webpack_require__(616),
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryNavComponent);
    return CategoryNavComponent;
}());
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/category-nav.component.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_api_service__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TaskDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskDataService = (function () {
    function TaskDataService(taskApi) {
        this.taskApi = taskApi;
    }
    TaskDataService.prototype.getCategories = function () {
        // this.taskApi.getAllTasks()
        //   .subscribe(categories => resolve(categories));
    };
    TaskDataService.prototype.getCategoryTasks = function () {
    };
    TaskDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__task_api_service__["a" /* TaskApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__task_api_service__["a" /* TaskApiService */]) === 'function' && _a) || Object])
    ], TaskDataService);
    return TaskDataService;
    var _a;
}());
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/task-data.service.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
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
        this.title = "Title";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'ta-header',
            template: "\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n        </div>\n      </div>\n    </nav>\n  ",
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/header.component.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_api_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_edit_control_component__ = __webpack_require__(301);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TaskListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListComponent = (function () {
    function TaskListComponent(taskApi) {
        this.taskApi = taskApi;
        this.categories = [];
        this.taskList = [];
        this.status = {
            icon: '',
            msg: ''
        };
        this.STATUS_TYPE = {
            CLEAR: 0,
            LOADING: 1,
            ERROR: 2,
            WARNING: 3
        };
        this.icons = {
            '1': 'assets/loading.gif'
        };
        this.category = {
            BACKLOG: 'Backlog',
            COMPLETED: 'Completed',
            THRASH: 'Thrash'
        };
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //retrieve categories
        this.taskApi.getAllCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
            _this.activeCategory = _this.categories[0]; // && this.categories[0].name || '';
            _this.updateTaskList(_this.activeCategory);
        });
    };
    TaskListComponent.prototype.ngAfterViewChecked = function () {
        if (this.addedTaskId) {
            this.focusTask(this.addedTaskId);
            delete this.addedTaskId;
        }
    };
    // LOGIC FUNCTIONS
    //update list of task for active category
    TaskListComponent.prototype.updateTaskList = function (category) {
        var _this = this;
        if (category === void 0) { category = this.activeCategory; }
        var categoryName = category.name;
        return new Promise(function (resolve, reject) {
            _this.updateStatus(_this.STATUS_TYPE.LOADING);
            _this.taskApi.getCategoryTasks(categoryName)
                .subscribe(function (tasks) {
                _this.taskList = tasks;
                _this.clearStatus();
                resolve();
            }, function (err) {
                reject(err);
            });
        });
    };
    // STATUS UI
    TaskListComponent.prototype.updateStatus = function (type, msg) {
        if (type === void 0) { type = this.STATUS_TYPE.CLEAR; }
        if (msg === void 0) { msg = ''; }
        this.status.icon = this.icons[type];
        this.status.msg = msg;
    };
    TaskListComponent.prototype.clearStatus = function () {
        this.updateStatus(this.STATUS_TYPE.CLEAR, '');
    };
    TaskListComponent.prototype.focusTask = function (taskId) {
        var taskeditControl = this.taskEditControls.find(function (editControl) {
            return editControl.task._id === taskId;
        });
        if (taskeditControl)
            taskeditControl.focusInput();
    };
    // NAV Event handlers
    TaskListComponent.prototype.onCategorySelected = function (category) {
        this.activeCategory = category;
        this.updateTaskList(this.activeCategory);
    };
    // Tool bar handlers
    TaskListComponent.prototype.tbAddTask = function () {
        var _this = this;
        this.updateStatus(this.STATUS_TYPE.LOADING);
        this.taskApi.createTask({
            category: this.activeCategory.name
        })
            .subscribe(function (taskId) {
            //update view
            _this.updateTaskList().then(function () {
                console.log('updated task list');
                //focus on newly added task
                _this.addedTaskId = taskId;
            });
        });
    };
    // TASK Edit control handlers
    TaskListComponent.prototype.completeTask = function (taskId) {
        var _this = this;
        this.updateStatus(this.STATUS_TYPE.LOADING);
        var body = {
            category: this.category.COMPLETED
        };
        this.taskApi.updateTask(taskId, body)
            .subscribe(function (json) {
            _this.updateTaskList();
        }, function (err) {
            //show error status
        });
    };
    TaskListComponent.prototype.removeTask = function (taskId) {
        var _this = this;
        this.updateStatus(this.STATUS_TYPE.LOADING);
        var purge = this.activeCategory.name === this.category.THRASH;
        this.taskApi.deleteTask(taskId, purge)
            .subscribe(function (json) {
            _this.updateTaskList();
        }, function (err) {
            console.log(err);
            //show error status
        });
    };
    TaskListComponent.prototype.onTaskUpdate = function (task) {
        var _this = this;
        this.updateStatus(this.STATUS_TYPE.LOADING);
        this.taskApi.updateTask(task._id, task)
            .subscribe(function (res) {
            _this.clearStatus();
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2__shared_components_edit_control_component__["a" /* EditControlComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* QueryList */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* QueryList */]) === 'function' && _a) || Object)
    ], TaskListComponent.prototype, "taskEditControls", void 0);
    TaskListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'ta-task-list',
            template: __webpack_require__(617),
            styles: [__webpack_require__(614)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_task_api_service__["a" /* TaskApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_task_api_service__["a" /* TaskApiService */]) === 'function' && _b) || Object])
    ], TaskListComponent);
    return TaskListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/task-list.component.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/environment.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/pi/projects/tasks-project/tasks-ng2/src/polyfills.js.map

/***/ },

/***/ 613:
/***/ function(module, exports) {

module.exports = ".tasks-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.tasks-left-pane {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    min-width: 150px;\r\n}\r\n\r\n.tasks-main-content {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}"

/***/ },

/***/ 614:
/***/ function(module, exports) {

module.exports = "/*Top level elements*/\r\n:host {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.tasks-left-pane {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    min-width: 150px;\r\n}\r\n\r\n.tasks-main-content {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n/*Toolbar css*/\r\n.round {\r\n    border-radius: 50%;\r\n    font-size: x-small;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n}\r\n\r\n.set-margin {\r\n    margin: 1px;\r\n}\r\n\r\n"

/***/ },

/***/ 615:
/***/ function(module, exports) {

module.exports = "<ta-header></ta-header>\n\n<div class=\"container tasks-container\">\n\n  <ta-task-list class=\"tasks-main-content\"></ta-task-list>\n\n</div>"

/***/ },

/***/ 616:
/***/ function(module, exports) {

module.exports = "<ul class=\"nav nav-stacked nav-pills\">\n\n  <li *ngFor=\"let cat of categories\" [class.active]=\"isActive(cat)\">\n\n    <a href=\"#\" (click)=\"selectCategory(cat)\">\n      {{cat.name}}\n      &nbsp;&nbsp;\n      <span class=\"badge pull-right\">{{cat.count}}</span>\n    </a>\n  </li>\n\n</ul>"

/***/ },

/***/ 617:
/***/ function(module, exports) {

module.exports = "\n<ta-category-nav class=\"tasks-left-pane\" [categories]=\"categories\" [activeCategory]=\"activeCategory\"\n    (categorySelected)=\"onCategorySelected($event)\">\n\n</ta-category-nav>\n\n<div class=\"container-fluid tasks-main-content\">\n  <h4>\n    {{activeCategory && activeCategory.name}}\n    <span *ngIf=\"status.icon || status.msg\">\n      <img src=\"{{status.icon}}\">\n      <small>{{status.msg}}</small>\n    </span>\n\n    <button class=\"btn btn-primary round pull-right\" (click)=\"tbAddTask()\"> \n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </button>\n    \n    <!--<button class=\"btn btn-danger round pull-right\" (click)=\"tbRemoveTask()\"> \n      <span class=\"glyphicon glyphicon-remove\"></span>\n    </button>\n    \n    <button class=\"btn btn-success round pull-right\" (click)=\"tbCompleteTask()\"> \n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </button>\n\n    <button class=\"btn btn-primary round pull-right\" (click)=\"tbMoveTaskUp()\"> \n      <span class=\"glyphicon glyphicon-arrow-up\"></span>\n    </button>\n    \n    <button class=\"btn btn-primary round pull-right\" (click)=\"tbMoveTaskDown()\"> \n      <span class=\"glyphicon glyphicon-arrow-down\"></span>\n    </button>-->\n    \n  </h4>\n\n  <ta-edit-control *ngFor=\"let task of taskList\" class=\"set-margin\" [task]=\"task\" placeholderText=\"Enter new task...\"\n    (onTick)=\"completeTask($event)\" (onCross)=\"removeTask($event)\" (onUpdate)=\"onTaskUpdate($event)\">    \n  </ta-edit-control>\n  \n</div>"

/***/ },

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);


/***/ }

},[635]);
//# sourceMappingURL=main.bundle.map