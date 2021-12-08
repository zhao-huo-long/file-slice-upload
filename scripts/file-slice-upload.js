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

/***/ "./src/file-upload.ts":
/*!****************************!*\
  !*** ./src/file-upload.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar miniEventEmit_1 = __importDefault(__webpack_require__(/*! ./utils/miniEventEmit */ \"./src/utils/miniEventEmit.ts\"));\r\nvar sliceFile_1 = __importDefault(__webpack_require__(/*! ./utils/sliceFile */ \"./src/utils/sliceFile.ts\"));\r\nvar strToByte_1 = __importDefault(__webpack_require__(/*! ./utils/strToByte */ \"./src/utils/strToByte.ts\"));\r\nvar flowCtr_1 = __importDefault(__webpack_require__(/*! ./utils/flowCtr */ \"./src/utils/flowCtr.ts\"));\r\nvar miniAssert_1 = __webpack_require__(/*! ./utils/miniAssert */ \"./src/utils/miniAssert.ts\");\r\nvar FileUpload = /** @class */ (function () {\r\n    function FileUpload(parallel) {\r\n        if (parallel === void 0) { parallel = 1; }\r\n        this.parallel = parallel;\r\n        /** chunk array */\r\n        this.chunkArr = [];\r\n        /** event center */\r\n        this.event = new miniEventEmit_1[\"default\"]();\r\n    }\r\n    /** event listen */\r\n    FileUpload.prototype.on = function (eventName, handler) {\r\n        (0, miniAssert_1.mAssertType)(handler, Function, 'handler expecte function type');\r\n        this.event.on(eventName, handler);\r\n        return this;\r\n    };\r\n    /** set upload file */\r\n    FileUpload.prototype.file = function (file, chunkSizeStr) {\r\n        (0, miniAssert_1.mAssertType)(file, File, 'file expecte File type');\r\n        (0, miniAssert_1.mAssertType)(chunkSizeStr, String, 'chunkSizeStr expecte String type likes `\"2MB\"`');\r\n        this.file_ = file;\r\n        var chunkSize = (0, strToByte_1[\"default\"])(chunkSizeStr);\r\n        var chunkArr = (0, sliceFile_1[\"default\"])(file, chunkSize);\r\n        if ([0, 1, undefined].includes(this.parallel)) {\r\n            this.chunkArr = chunkArr;\r\n            return this;\r\n        }\r\n        var i = 0;\r\n        var chunkArrArr = [];\r\n        while (chunkArr.slice(i * chunkSize, i * chunkSize + chunkSize)) {\r\n            chunkArrArr.push(chunkArr.slice(i * chunkSize, i * chunkSize + chunkSize));\r\n            i++;\r\n        }\r\n        this.chunkArr = chunkArrArr;\r\n        return this;\r\n    };\r\n    /** set upload file-chunk function, function return true will upload next chunk */\r\n    FileUpload.prototype.uploadFunc = function (ajax) {\r\n        (0, miniAssert_1.mAssertType)(ajax, Function, 'expecte Function');\r\n        this.uploadFunc_ = ajax;\r\n        return this;\r\n    };\r\n    /** start upload */\r\n    FileUpload.prototype.start = function () {\r\n        var _a, _b;\r\n        (0, miniAssert_1.mAssertType)(this.uploadFunc_, Function, 'please set upload function use .uploadFunc()');\r\n        (0, miniAssert_1.mAssertType)(this.file_, File, 'please set upload file use .file(file)');\r\n        (_b = (_a = this.flow) === null || _a === void 0 ? void 0 : _a.stop) === null || _b === void 0 ? void 0 : _b.call(_a);\r\n        this.event.emit('start', 'start');\r\n        this.flow = (0, flowCtr_1[\"default\"])(this.uploadFunc_, this.chunkArr, this.event, 0);\r\n        return this;\r\n    };\r\n    /** stop upload */\r\n    FileUpload.prototype.stop = function () {\r\n        var _a, _b;\r\n        this.event.emit('stop', 'stop');\r\n        (_b = (_a = this.flow) === null || _a === void 0 ? void 0 : _a.stop) === null || _b === void 0 ? void 0 : _b.call(_a);\r\n        return this;\r\n    };\r\n    /** continue upload */\r\n    FileUpload.prototype[\"continue\"] = function () {\r\n        var _a;\r\n        if ((_a = this.flow) === null || _a === void 0 ? void 0 : _a[\"continue\"]) {\r\n            this.flow = this.flow[\"continue\"]();\r\n        }\r\n        this.event.emit('continue', 'continue');\r\n        return this;\r\n    };\r\n    return FileUpload;\r\n}());\r\nexports[\"default\"] = FileUpload;\r\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/file-upload.ts?");

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

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nexports.__esModule = true;\r\nvar miniEventEmit_1 = __importDefault(__webpack_require__(/*! ./miniEventEmit */ \"./src/utils/miniEventEmit.ts\"));\r\n/** upload chunks flow control function */\r\nfunction flowCtr(uploadChunkAjax, chunks, event, start) {\r\n    if (chunks === void 0) { chunks = []; }\r\n    if (event === void 0) { event = new miniEventEmit_1[\"default\"](); }\r\n    if (start === void 0) { start = 0; }\r\n    var stopFlag = { val: false };\r\n    var copyChunks = chunks.slice(start);\r\n    var i = start;\r\n    if (!copyChunks.length)\r\n        return {};\r\n    (function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var chunk, res;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (!copyChunks.length) return [3 /*break*/, 2];\r\n                        chunk = copyChunks.shift();\r\n                        return [4 /*yield*/, uploadChunkAjax(chunk, i, chunks)];\r\n                    case 1:\r\n                        res = _a.sent();\r\n                        if (res !== true) {\r\n                            event.emit('error', 'error');\r\n                            console.error('error');\r\n                            return [3 /*break*/, 2];\r\n                        }\r\n                        if (res === true && stopFlag.val === false) {\r\n                            event.emit('progress', { done: i + 1, all: chunks.length });\r\n                            event.emit('chunk-uploaded', { chunk: chunk, index: i, chunks: chunks });\r\n                            i++;\r\n                            return [3 /*break*/, 0];\r\n                        }\r\n                        if (stopFlag.val === true) {\r\n                            console.warn('stop');\r\n                            event.emit('stop', 'stop');\r\n                            return [3 /*break*/, 2];\r\n                        }\r\n                        return [3 /*break*/, 0];\r\n                    case 2:\r\n                        if (!copyChunks.length) {\r\n                            console.warn('finish');\r\n                            event.emit('finish', 'finish');\r\n                        }\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    })();\r\n    return {\r\n        stop: function () {\r\n            stopFlag.val = true;\r\n        },\r\n        \"continue\": function () {\r\n            stopFlag.val = true;\r\n            return flowCtr(uploadChunkAjax, chunks, event, i);\r\n        }\r\n    };\r\n}\r\nexports[\"default\"] = flowCtr;\r\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/flowCtr.ts?");

/***/ }),

/***/ "./src/utils/miniAssert.ts":
/*!*********************************!*\
  !*** ./src/utils/miniAssert.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nexports.mAssertType = exports.mAssert = void 0;\r\nvar mAssert = function (val, expected, msg) {\r\n    if (val !== expected) {\r\n        throw new Error(msg);\r\n    }\r\n};\r\nexports.mAssert = mAssert;\r\nvar mAssertType = function (val, expected, msg) {\r\n    if ((val === null || val === void 0 ? void 0 : val.constructor) !== expected) {\r\n        throw new Error(msg);\r\n    }\r\n};\r\nexports.mAssertType = mAssertType;\r\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/miniAssert.ts?");

/***/ }),

/***/ "./src/utils/miniEventEmit.ts":
/*!************************************!*\
  !*** ./src/utils/miniEventEmit.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nvar MiniEventEmit = /** @class */ (function () {\r\n    function MiniEventEmit() {\r\n        this.container = {};\r\n    }\r\n    MiniEventEmit.prototype.on = function (eventName, handler) {\r\n        var container = this.container;\r\n        if (Array.isArray(container[eventName])) {\r\n            container[eventName].push(handler);\r\n            return;\r\n        }\r\n        container[eventName] = [handler];\r\n    };\r\n    MiniEventEmit.prototype.emit = function (eventName, payload) {\r\n        var container = this.container;\r\n        if (Array.isArray(container[eventName])) {\r\n            container[eventName]\r\n                .forEach(function (handler) { return handler(payload); });\r\n        }\r\n    };\r\n    MiniEventEmit.prototype.off = function (eventName, offHandler) {\r\n        var container = this.container;\r\n        if (Array.isArray(container[eventName])) {\r\n            container[eventName] = container[eventName]\r\n                .filter(function (handler) { return handler !== offHandler; });\r\n        }\r\n    };\r\n    MiniEventEmit.prototype.once = function (eventName, handler) {\r\n        var _this = this;\r\n        var wrapper = function () {\r\n            var payload = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                payload[_i] = arguments[_i];\r\n            }\r\n            handler.apply(void 0, payload);\r\n            _this.off(eventName, wrapper);\r\n        };\r\n        this.on(eventName, wrapper);\r\n    };\r\n    return MiniEventEmit;\r\n}());\r\nexports[\"default\"] = MiniEventEmit;\r\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/miniEventEmit.ts?");

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