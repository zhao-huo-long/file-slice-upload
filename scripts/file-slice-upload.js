/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fileSliceUpload"] = factory();
	else
		root["fileSliceUpload"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/assert-tiny/es/core.js":
/*!*********************************************!*\
  !*** ./node_modules/assert-tiny/es/core.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VaildatorDeclear\": () => (/* binding */ VaildatorDeclear),\n/* harmony export */   \"buildClass\": () => (/* binding */ buildClass),\n/* harmony export */   \"create\": () => (/* binding */ create),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./node_modules/assert-tiny/es/utils.js\");\n/* harmony import */ var _extendsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extendsConfig */ \"./node_modules/assert-tiny/es/extendsConfig.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n// import { deepCloneSimple } from './utils'\nvar AssertTiny = /** @class */ (function (_super) {\n    __extends(AssertTiny, _super);\n    function AssertTiny() {\n        var _this_1 = _super !== null && _super.apply(this, arguments) || this;\n        _this_1.name = 'AssertTiny';\n        return _this_1;\n    }\n    return AssertTiny;\n}(Error));\nvar VaildatorDeclear = /** @class */ (function () {\n    function VaildatorDeclear() {\n    }\n    return VaildatorDeclear;\n}());\n\nvar buildClass = function () {\n    return /** @class */ (function () {\n        function Vaildator() {\n            var _this_1 = this;\n            this.SLIENT = false;\n            this.NOT = false;\n            this.value = function (val) {\n                _this_1.VALUE = val;\n                return _this_1;\n            };\n        }\n        Vaildator.prototype.result = function (res, msg, name) {\n            if (res && !this.NOT)\n                return;\n            if (!res && this.NOT)\n                return;\n            var m = msg ? \"\".concat(msg) : \"\".concat(name, \" assert error\");\n            if (this.SLIENT) {\n                console.warn(new AssertTiny(m));\n            }\n            if (!this.SLIENT) {\n                throw new AssertTiny(m);\n            }\n        };\n        Object.defineProperty(Vaildator.prototype, \"not\", {\n            get: function () {\n                this.NOT = true;\n                return this;\n            },\n            enumerable: false,\n            configurable: true\n        });\n        Object.defineProperty(Vaildator.prototype, \"slient\", {\n            get: function () {\n                this.SLIENT = true;\n                return this;\n            },\n            enumerable: false,\n            configurable: true\n        });\n        return Vaildator;\n    }());\n};\nvar create = function (config) {\n    var Vaildator = buildClass();\n    var prototype = Object.getPrototypeOf(new Vaildator());\n    var minix = Object.assign(config || {}, _extendsConfig__WEBPACK_IMPORTED_MODULE_1__);\n    var extendsP = Object.keys(minix).reduce(function (val, key) {\n        var toKey = \"is\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.upLetter)(key));\n        val[toKey] = function (excpect, msg) {\n            var _this = this;\n            if (config[key](_this.VALUE, excpect)) {\n                _this.result(true, msg, toKey);\n            }\n            else {\n                _this.result(false, msg, toKey);\n            }\n        };\n        return val;\n    }, {});\n    Object.assign(prototype, extendsP);\n    return function (val) { return new Vaildator().value(val); };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/core.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/extendsConfig.js":
/*!******************************************************!*\
  !*** ./node_modules/assert-tiny/es/extendsConfig.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"equal\": () => (/* reexport safe */ _extends_equal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"inRange\": () => (/* reexport safe */ _extends_inRange__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"int\": () => (/* reexport safe */ _extends_int__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"ok\": () => (/* reexport safe */ _extends_ok__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"oneOf\": () => (/* reexport safe */ _extends_oneOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"positiveInt\": () => (/* reexport safe */ _extends_positiveInt__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"truth\": () => (/* reexport safe */ _extends_truth__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"typeOf\": () => (/* reexport safe */ _extends_typeOf__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"shallowEq\": () => (/* reexport safe */ _extends_shallowEq__WEBPACK_IMPORTED_MODULE_8__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _extends_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extends/equal */ \"./node_modules/assert-tiny/es/extends/equal.js\");\n/* harmony import */ var _extends_inRange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extends/inRange */ \"./node_modules/assert-tiny/es/extends/inRange.js\");\n/* harmony import */ var _extends_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extends/int */ \"./node_modules/assert-tiny/es/extends/int.js\");\n/* harmony import */ var _extends_ok__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extends/ok */ \"./node_modules/assert-tiny/es/extends/ok.js\");\n/* harmony import */ var _extends_oneOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extends/oneOf */ \"./node_modules/assert-tiny/es/extends/oneOf.js\");\n/* harmony import */ var _extends_positiveInt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extends/positiveInt */ \"./node_modules/assert-tiny/es/extends/positiveInt.js\");\n/* harmony import */ var _extends_truth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extends/truth */ \"./node_modules/assert-tiny/es/extends/truth.js\");\n/* harmony import */ var _extends_typeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extends/typeOf */ \"./node_modules/assert-tiny/es/extends/typeOf.js\");\n/* harmony import */ var _extends_shallowEq__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extends/shallowEq */ \"./node_modules/assert-tiny/es/extends/shallowEq.js\");\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/extendsConfig.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/extends/equal.js":
/*!******************************************************!*\
  !*** ./node_modules/assert-tiny/es/extends/equal.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ equal)\n/* harmony export */ });\n/**\n * @param  {unknown} value\n * @param  {unknown} expect\n * @example\n *  1. isEqual(1, '1') - error\n *  2. isEqual(NaN, NaN) - ok\n *  3. isEqual({}, {}) - error\n */\nfunction equal(value, expect) {\n    return Object.is(value, expect);\n}\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/extends/equal.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/extends/inRange.js":
/*!********************************************************!*\
  !*** ./node_modules/assert-tiny/es/extends/inRange.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inRange)\n/* harmony export */ });\n/* harmony import */ var _typeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeOf */ \"./node_modules/assert-tiny/es/extends/typeOf.js\");\n/* harmony import */ var _int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./int */ \"./node_modules/assert-tiny/es/extends/int.js\");\n\n\n/**\n * @param  {number} value\n * @param  {Range} expect\n * @example\n *  1. isInRange(1, [0, 1]) - ok\n *  2. isInRange(2, [0, 2]) - error\n *  3. isInRange(9, [0, 3]) - error\n */\nfunction inRange(value, expect) {\n    if (!(0,_typeOf__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(expect, Array))\n        return false;\n    if (!(0,_int__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value))\n        return false;\n    var start = expect[0], end = expect[1];\n    if (start <= value && end >= value)\n        return true;\n    return false;\n}\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/extends/inRange.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/extends/int.js":
/*!****************************************************!*\
  !*** ./node_modules/assert-tiny/es/extends/int.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ int)\n/* harmony export */ });\n/**\n * @param  {number} value\n */\nfunction int(value) {\n    if (Number.isInteger(value))\n        return true;\n    return false;\n}\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/extends/int.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/extends/ok.js":
/*!***************************************************!*\
  !*** ./node_modules/assert-tiny/es/extends/ok.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ok)\n/* harmony export */ });\n/**\n * @param  {unknown} value\n * #### throw error value is:\n *  1. NaN\n *  2. 0\n *  3. false\n *  4. null\n *  5. undefined\n *  6. '' & \"\"\n * @example\n *  1. isOk('') - error\n *  2. isOk({}) - ok\n *  3. isOk(null) - error\n */\nfunction ok(value) {\n    if (value)\n        return true;\n    return false;\n}\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/extends/ok.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/extends/oneOf.js":
/*!******************************************************!*\
  !*** ./node_modules/assert-tiny/es/extends/oneOf.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ oneOf)\n/* harmony export */ });\n/* harmony import */ var _shallowEq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shallowEq */ \"./node_modules/assert-tiny/es/extends/shallowEq.js\");\n\n/**\n * @param  {unknown} value\n * @param  {unknown[]} expect\n * @example\n *  1. isOneOf(1, [0, 1]) - ok\n *  2. isOneOf(null, [undefind, null]) - ok\n *  3. isOneOf(NaN, [NaN, 0]) - ok\n *  4. isOneOf('hello', ['hello2', 'hello1']) - error\n */\nfunction oneOf(value, expect) {\n    if (expect.includes(value))\n        return true;\n    return expect.findIndex(function (i) { return (0,_shallowEq__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i, value); }) > -1;\n}\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/extends/oneOf.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/extends/positiveInt.js":
/*!************************************************************!*\
  !*** ./node_modules/assert-tiny/es/extends/positiveInt.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ positiveInt)\n/* harmony export */ });\n/* harmony import */ var _int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./int */ \"./node_modules/assert-tiny/es/extends/int.js\");\n\n/**\n * @param  {number} value\n * @example\n *  1. isPositiveInt(1) - ok\n *  2. isPositiveInt(1.1) - error\n *  3. isPositiveInt(-1) - error\n *  4. isPositiveInt(0) - error\n */\nfunction positiveInt(value) {\n    if (!(0,_int__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value))\n        return false;\n    if (value > 0)\n        return true;\n    return false;\n}\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/extends/positiveInt.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/extends/shallowEq.js":
/*!**********************************************************!*\
  !*** ./node_modules/assert-tiny/es/extends/shallowEq.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shallowEq)\n/* harmony export */ });\nfunction shallowEq(val, expect) {\n    if (Object.is(val, expect))\n        return true;\n    if (typeof val !== 'object' || typeof expect !== 'object')\n        return false;\n    if ((val === null || val === void 0 ? void 0 : val.constructor) !== (expect === null || expect === void 0 ? void 0 : expect.constructor))\n        return false;\n    if ([val, expect].includes(null))\n        return false;\n    var valKeys = Object.keys(val);\n    var expectKeys = Object.keys(expect);\n    if (valKeys.length !== expectKeys.length)\n        return false;\n    return valKeys.every(function (i) { return shallowEq(val[i], expect[i]); });\n}\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/extends/shallowEq.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/extends/truth.js":
/*!******************************************************!*\
  !*** ./node_modules/assert-tiny/es/extends/truth.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ truth)\n/* harmony export */ });\nvar notTrue = [null, undefined, false, NaN];\n/**\n * @param  {unknown} value\n * #### error value: null, undefined, false, NaN\n * @example\n *  1. isTruth(null) - error\n *  2. isTruth(false) - error\n *  3. isTruth(undefined) - error\n *  4. isTruth(NaN) - error\n */\nfunction truth(value) {\n    if (!notTrue.includes(value))\n        return true;\n    return false;\n}\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/extends/truth.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/extends/typeOf.js":
/*!*******************************************************!*\
  !*** ./node_modules/assert-tiny/es/extends/typeOf.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ typeOf)\n/* harmony export */ });\n/**\n * @param  {unknown} value\n * @param  {new (...a:any) => unknown} expect\n * @example\n *  1. isTypeOf('', String) - ok\n *  2. isTypeOf(2, Number) - ok\n *  3. isTypeOf({}, Object) - ok\n *  4. isTypeOf(2, Object) - error\n */\nfunction typeOf(value, expect) {\n    if ((value === null || value === void 0 ? void 0 : value.constructor) === expect)\n        return true;\n    return false;\n}\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/extends/typeOf.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/assert-tiny/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_0__.create),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./node_modules/assert-tiny/es/core.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_core__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}));\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/index.js?");

/***/ }),

/***/ "./node_modules/assert-tiny/es/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/assert-tiny/es/utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"log\": () => (/* binding */ log),\n/* harmony export */   \"upLetter\": () => (/* binding */ upLetter)\n/* harmony export */ });\nvar log = function (text) { return \"assert-tiny:\".concat(text); };\nvar upLetter = function (str, start, end) {\n    if (start === void 0) { start = 0; }\n    if (end === void 0) { end = 1; }\n    return \"\".concat(str.slice(start, end).toUpperCase()).concat(str.slice(end));\n};\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/assert-tiny/es/utils.js?");

/***/ }),

/***/ "./node_modules/emitter-tiny/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/emitter-tiny/es/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Emitter\": () => (/* binding */ Emitter),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var assert_tiny__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert-tiny */ \"./node_modules/assert-tiny/es/index.js\");\n\nvar Emitter = /** @class */ (function () {\n    function Emitter() {\n        var _this = this;\n        this.eventBus = {};\n        /**\n         * add listener\n         * @param eventName String\n         * @param cb Function\n         * @returns this\n         */\n        this.on = function (eventName, cb) {\n            (0,assert_tiny__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(eventName).isTypeOf(String, 'eventName must be a string');\n            (0,assert_tiny__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cb).isTypeOf(Function, 'callback must be a funtion');\n            var eventBus = _this.eventBus;\n            if (Array.isArray(eventBus[eventName])) {\n                eventBus[eventName].push(cb);\n            }\n            else {\n                eventBus[eventName] = [cb];\n            }\n            return _this;\n        };\n        /**\n         * emit event\n         * @param eventName String\n         * @param payload Any\n         */\n        this.emit = function (eventName, payload) {\n            (0,assert_tiny__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(eventName).isTypeOf(String, 'eventName must be a string');\n            var eventBus = _this.eventBus;\n            if (Array.isArray(eventBus[eventName])) {\n                eventBus[eventName].forEach(function (cb) { return cb(payload); });\n            }\n        };\n        /**\n         * remove event listener\n         * @param eventName String\n         * @param cb Function\n         */\n        this.off = function (eventName, cb) {\n            (0,assert_tiny__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(eventName).isTypeOf(String, 'eventName must be a string');\n            (0,assert_tiny__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cb).isTypeOf(Function, 'callback must be a funtion');\n            var eventBus = _this.eventBus;\n            if (Array.isArray(eventBus[eventName])) {\n                eventBus[eventName] = eventBus[eventName].filter(function (func) { return cb !== func; });\n            }\n        };\n        /**\n         *  event only emit once\n         * */\n        this.once = function (eventName, cb) {\n            (0,assert_tiny__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(eventName).isTypeOf(String, 'eventName must be a string');\n            (0,assert_tiny__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cb).isTypeOf(Function, 'callback must be a funtion');\n            var onceWrapper = function () {\n                var arg = [];\n                for (var _i = 0; _i < arguments.length; _i++) {\n                    arg[_i] = arguments[_i];\n                }\n                cb.apply(void 0, arg);\n                _this.off(eventName, onceWrapper);\n            };\n            _this.on(eventName, onceWrapper);\n        };\n    }\n    return Emitter;\n}());\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emitter);\n\n\n//# sourceURL=webpack://fileSliceUpload/./node_modules/emitter-tiny/es/index.js?");

/***/ }),

/***/ "./src/file-upload.ts":
/*!****************************!*\
  !*** ./src/file-upload.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar sliceFile_1 = __importDefault(__webpack_require__(/*! ./utils/sliceFile */ \"./src/utils/sliceFile.ts\"));\r\nvar strToByte_1 = __importDefault(__webpack_require__(/*! ./utils/strToByte */ \"./src/utils/strToByte.ts\"));\r\nvar flowCtr_1 = __importDefault(__webpack_require__(/*! ./utils/flowCtr */ \"./src/utils/flowCtr.ts\"));\r\nvar assert_tiny_1 = __importDefault(__webpack_require__(/*! assert-tiny */ \"./node_modules/assert-tiny/es/index.js\"));\r\nvar emitter_tiny_1 = __importDefault(__webpack_require__(/*! emitter-tiny */ \"./node_modules/emitter-tiny/es/index.js\"));\r\nvar FileUpload = /** @class */ (function () {\r\n    function FileUpload(parallel) {\r\n        if (parallel === void 0) { parallel = 1; }\r\n        this.parallel = parallel;\r\n        /** chunk array */\r\n        this.chunkArr = [];\r\n        /** event center */\r\n        this.event = new emitter_tiny_1[\"default\"]();\r\n    }\r\n    /** event listen */\r\n    FileUpload.prototype.on = function (eventName, handler) {\r\n        (0, assert_tiny_1[\"default\"])(handler).isTypeOf(Function, 'handler expecte function type');\r\n        this.event.on(eventName, handler);\r\n        return this;\r\n    };\r\n    /** event close listen */\r\n    FileUpload.prototype.off = function (eventName, handler) {\r\n        (0, assert_tiny_1[\"default\"])(handler).isTypeOf(Function, 'handler expecte function type');\r\n        this.event.off(eventName, handler);\r\n        return this;\r\n    };\r\n    /** set upload file */\r\n    FileUpload.prototype.file = function (file, chunkSizeStr) {\r\n        (0, assert_tiny_1[\"default\"])(file).isTypeOf(File, 'file expecte File type');\r\n        (0, assert_tiny_1[\"default\"])(chunkSizeStr).isTypeOf(String, 'chunkSizeStr expecte String type likes `\"2MB\"`');\r\n        this.file_ = file;\r\n        var chunkSize = (0, strToByte_1[\"default\"])(chunkSizeStr);\r\n        var chunkArr = (0, sliceFile_1[\"default\"])(file, chunkSize);\r\n        if ([0, 1, undefined].includes(this.parallel)) {\r\n            this.chunkArr = chunkArr;\r\n            return this;\r\n        }\r\n        var i = 0;\r\n        var chunkArrArr = [];\r\n        while (chunkArr.slice(i * chunkSize, i * chunkSize + chunkSize)) {\r\n            chunkArrArr.push(chunkArr.slice(i * chunkSize, i * chunkSize + chunkSize));\r\n            i++;\r\n        }\r\n        this.chunkArr = chunkArrArr;\r\n        return this;\r\n    };\r\n    /** set upload file-chunk function, function return true will upload next chunk */\r\n    FileUpload.prototype.uploadFunc = function (ajax) {\r\n        (0, assert_tiny_1[\"default\"])(ajax).isTypeOf(Function, 'expecte Function');\r\n        this.uploadFunc_ = ajax;\r\n        return this;\r\n    };\r\n    /** start upload */\r\n    FileUpload.prototype.start = function () {\r\n        var _a, _b;\r\n        (0, assert_tiny_1[\"default\"])(this.uploadFunc_).isTypeOf(Function, 'please set upload function use .uploadFunc()');\r\n        (0, assert_tiny_1[\"default\"])(this.file_).isTypeOf(File, 'please set upload file use .file(file)');\r\n        (_b = (_a = this.flow) === null || _a === void 0 ? void 0 : _a.stop) === null || _b === void 0 ? void 0 : _b.call(_a);\r\n        this.event.emit('start', 'start');\r\n        this.flow = (0, flowCtr_1[\"default\"])(this.uploadFunc_, this.chunkArr, this.event, 0);\r\n        return this;\r\n    };\r\n    /** stop upload */\r\n    FileUpload.prototype.stop = function () {\r\n        var _a, _b;\r\n        this.event.emit('stop', 'stop');\r\n        (_b = (_a = this.flow) === null || _a === void 0 ? void 0 : _a.stop) === null || _b === void 0 ? void 0 : _b.call(_a);\r\n        return this;\r\n    };\r\n    /** continue upload */\r\n    FileUpload.prototype[\"continue\"] = function () {\r\n        var _a;\r\n        if ((_a = this.flow) === null || _a === void 0 ? void 0 : _a[\"continue\"]) {\r\n            this.flow = this.flow[\"continue\"]();\r\n        }\r\n        this.event.emit('continue', 'continue');\r\n        return this;\r\n    };\r\n    return FileUpload;\r\n}());\r\nexports[\"default\"] = FileUpload;\r\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/file-upload.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nexports.fileUpload = void 0;\r\nvar file_upload_1 = __importDefault(__webpack_require__(/*! ./file-upload */ \"./src/file-upload.ts\"));\r\nvar file_upload_2 = __webpack_require__(/*! ./file-upload */ \"./src/file-upload.ts\");\r\n__createBinding(exports, file_upload_2, \"default\", \"fileUpload\");\r\nfunction factory(parallel) {\r\n    if (parallel === void 0) { parallel = 1; }\r\n    return new file_upload_1[\"default\"](parallel);\r\n}\r\nexports[\"default\"] = factory;\r\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/index.ts?");

/***/ }),

/***/ "./src/utils/flowCtr.ts":
/*!******************************!*\
  !*** ./src/utils/flowCtr.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar emitter_tiny_1 = __importDefault(__webpack_require__(/*! emitter-tiny */ \"./node_modules/emitter-tiny/es/index.js\"));\r\n/** upload chunks flow control function */\r\nfunction flowCtr(uploadChunkAjax, chunks, event, start) {\r\n    if (chunks === void 0) { chunks = []; }\r\n    if (event === void 0) { event = new emitter_tiny_1[\"default\"](); }\r\n    if (start === void 0) { start = 0; }\r\n    var stopFlag = { val: false };\r\n    var copyChunks = chunks.slice(start);\r\n    var i = start;\r\n    if (!copyChunks.length)\r\n        return {};\r\n    (function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var chunk, res;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (!copyChunks.length) return [3 /*break*/, 2];\r\n                        chunk = copyChunks.shift();\r\n                        return [4 /*yield*/, uploadChunkAjax(chunk, i, chunks)];\r\n                    case 1:\r\n                        res = _a.sent();\r\n                        if (res !== true) {\r\n                            event.emit('error', 'error');\r\n                            console.error('error');\r\n                            return [3 /*break*/, 2];\r\n                        }\r\n                        if (res === true && stopFlag.val === false) {\r\n                            event.emit('progress', { done: i + 1, all: chunks.length });\r\n                            event.emit('chunk-uploaded', { chunk: chunk, index: i, chunks: chunks });\r\n                            i++;\r\n                            return [3 /*break*/, 0];\r\n                        }\r\n                        if (stopFlag.val === true) {\r\n                            console.warn('stop');\r\n                            event.emit('stop', 'stop');\r\n                            return [3 /*break*/, 2];\r\n                        }\r\n                        return [3 /*break*/, 0];\r\n                    case 2:\r\n                        if (!copyChunks.length) {\r\n                            console.warn('finish');\r\n                            event.emit('finish', 'finish');\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    })();\r\n    return {\r\n        stop: function () {\r\n            stopFlag.val = true;\r\n        },\r\n        \"continue\": function () {\r\n            stopFlag.val = true;\r\n            return flowCtr(uploadChunkAjax, chunks, event, i);\r\n        }\r\n    };\r\n}\r\nexports[\"default\"] = flowCtr;\r\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/flowCtr.ts?");

/***/ }),

/***/ "./src/utils/sliceFile.ts":
/*!********************************!*\
  !*** ./src/utils/sliceFile.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar buildChunkName = function (file, index) {\r\n    return \"\".concat(file.name, \"-\").concat(index);\r\n};\r\n/** file slice to chunks */\r\nvar sliceFile = function (file, chunkSize, chunkName) {\r\n    if (chunkSize === void 0) { chunkSize = 0; }\r\n    var chunkNums = Math.ceil(file.size / chunkSize);\r\n    var chunksArray = [];\r\n    var i = 0;\r\n    while (i < chunkNums) {\r\n        var chunkBlob = file.slice(i * chunkSize, i * chunkSize + chunkSize);\r\n        var chunkFileName = chunkName ? chunkName(file, i) : buildChunkName(file, i);\r\n        chunksArray.push(new File([chunkBlob], chunkFileName, {\r\n            type: file.type\r\n        }));\r\n        i++;\r\n    }\r\n    return chunksArray;\r\n};\r\nexports[\"default\"] = sliceFile;\r\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/sliceFile.ts?");

/***/ }),

/***/ "./src/utils/strToByte.ts":
/*!********************************!*\
  !*** ./src/utils/strToByte.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar unitMap = {\r\n    'BYTE': 1,\r\n    'K': 1024,\r\n    'KB': 1024,\r\n    'M': 1024 * 1024,\r\n    'MB': 1024 * 1024\r\n};\r\nexports[\"default\"] = (function (sizeStr) {\r\n    var unitStr = Object.keys(unitMap).\r\n        find(function (b) { return new RegExp(\"\".concat(b.toUpperCase(), \"$\"))\r\n        .test(sizeStr.toUpperCase()); });\r\n    if (!unitStr)\r\n        return 0;\r\n    var unit = unitMap[unitStr];\r\n    var val = sizeStr.split(unitStr)[0];\r\n    if (isNaN(Number(val)))\r\n        throw new Error('must be number string');\r\n    return Number(val) * unit;\r\n});\r\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/strToByte.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});