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

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar miniEventEmit_1 = __importDefault(__webpack_require__(/*! ./utils/miniEventEmit */ \"./src/utils/miniEventEmit.ts\"));\nvar sliceFile_1 = __importDefault(__webpack_require__(/*! ./utils/sliceFile */ \"./src/utils/sliceFile.ts\"));\nvar strToByte_1 = __importDefault(__webpack_require__(/*! ./utils/strToByte */ \"./src/utils/strToByte.ts\"));\nvar flowCtr_1 = __importDefault(__webpack_require__(/*! ./utils/flowCtr */ \"./src/utils/flowCtr.ts\"));\nvar miniAssert_1 = __webpack_require__(/*! ./utils/miniAssert */ \"./src/utils/miniAssert.ts\");\nvar FileUpload = /** @class */ (function () {\n    function FileUpload(parallel) {\n        if (parallel === void 0) { parallel = 1; }\n        this.parallel = parallel;\n        /** chunk array */\n        this.chunkArr = [];\n        /** event center */\n        this.event = new miniEventEmit_1[\"default\"]();\n    }\n    /** event listen */\n    FileUpload.prototype.on = function (eventName, handler) {\n        (0, miniAssert_1.mAssertType)(handler, Function, 'handler expecte function type');\n        this.event.on(eventName, handler);\n        return this;\n    };\n    /** set upload file */\n    FileUpload.prototype.file = function (file, chunkSizeStr) {\n        (0, miniAssert_1.mAssertType)(file, File, 'file expecte File type');\n        (0, miniAssert_1.mAssertType)(chunkSizeStr, String, 'chunkSizeStr expecte String type likes `\"2MB\"`');\n        this.file_ = file;\n        var chunkSize = (0, strToByte_1[\"default\"])(chunkSizeStr);\n        var chunkArr = (0, sliceFile_1[\"default\"])(file, chunkSize);\n        if ([0, 1, undefined].includes(this.parallel)) {\n            this.chunkArr = chunkArr;\n            return this;\n        }\n        var i = 0;\n        var chunkArrArr = [];\n        while (chunkArr.slice(i * chunkSize, i * chunkSize + chunkSize)) {\n            chunkArrArr.push(chunkArr.slice(i * chunkSize, i * chunkSize + chunkSize));\n            i++;\n        }\n        this.chunkArr = chunkArrArr;\n        return this;\n    };\n    /** set upload file-chunk function, function return true will upload next chunk */\n    FileUpload.prototype.uploadFunc = function (ajax) {\n        (0, miniAssert_1.mAssertType)(ajax, Function, 'expecte Function');\n        this.uploadFunc_ = ajax;\n        return this;\n    };\n    /** start upload */\n    FileUpload.prototype.start = function () {\n        var _a, _b;\n        (0, miniAssert_1.mAssertType)(this.uploadFunc_, Function, 'please set upload function use .uploadFunc()');\n        (0, miniAssert_1.mAssertType)(this.file_, File, 'please set upload file use .file(file)');\n        (_b = (_a = this.flow) === null || _a === void 0 ? void 0 : _a.stop) === null || _b === void 0 ? void 0 : _b.call(_a);\n        this.event.emit('start', 'start');\n        this.flow = (0, flowCtr_1[\"default\"])(this.uploadFunc_, this.chunkArr, this.event, 0);\n        return this;\n    };\n    /** stop upload */\n    FileUpload.prototype.stop = function () {\n        var _a, _b;\n        this.event.emit('stop', 'stop');\n        (_b = (_a = this.flow) === null || _a === void 0 ? void 0 : _a.stop) === null || _b === void 0 ? void 0 : _b.call(_a);\n        return this;\n    };\n    /** continue upload */\n    FileUpload.prototype[\"continue\"] = function () {\n        var _a, _b, _c;\n        this.event.emit('continue', 'continue');\n        if ((_a = this.flow) === null || _a === void 0 ? void 0 : _a[\"continue\"]) {\n            this.flow = (_c = (_b = this.flow) === null || _b === void 0 ? void 0 : _b[\"continue\"]) === null || _c === void 0 ? void 0 : _c.call(_b);\n        }\n        return this;\n    };\n    return FileUpload;\n}());\nexports[\"default\"] = FileUpload;\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/file-upload.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.fileUpload = void 0;\nvar file_upload_1 = __importDefault(__webpack_require__(/*! ./file-upload */ \"./src/file-upload.ts\"));\nvar file_upload_2 = __webpack_require__(/*! ./file-upload */ \"./src/file-upload.ts\");\n__createBinding(exports, file_upload_2, \"default\", \"fileUpload\");\nfunction factory(parallel) {\n    if (parallel === void 0) { parallel = 1; }\n    return new file_upload_1[\"default\"](parallel);\n}\nexports[\"default\"] = factory;\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/index.ts?");

/***/ }),

/***/ "./src/utils/flowCtr.ts":
/*!******************************!*\
  !*** ./src/utils/flowCtr.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nvar miniEventEmit_1 = __importDefault(__webpack_require__(/*! ./miniEventEmit */ \"./src/utils/miniEventEmit.ts\"));\n/** upload chunks flow control function */\nfunction flowCtr(uploadChunkAjax, chunks, event, start) {\n    if (chunks === void 0) { chunks = []; }\n    if (event === void 0) { event = new miniEventEmit_1[\"default\"](); }\n    if (start === void 0) { start = 0; }\n    var stopFlag = { val: false };\n    var copyChunks = chunks.slice(start);\n    var i = 0;\n    if (!copyChunks.length)\n        return {};\n    (function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var chunk, res;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (!copyChunks.length) return [3 /*break*/, 2];\n                        chunk = copyChunks.shift();\n                        return [4 /*yield*/, uploadChunkAjax(chunk, i, chunks)];\n                    case 1:\n                        res = _a.sent();\n                        if (res !== true) {\n                            event.emit('error', 'error');\n                            console.error('error');\n                            return [3 /*break*/, 2];\n                        }\n                        if (res === true && stopFlag.val === false) {\n                            event.emit('progress', { done: i + 1, all: chunks.length });\n                            event.emit('uploaded', { chunk: chunk, index: i, chunks: chunks });\n                            i++;\n                            return [3 /*break*/, 0];\n                        }\n                        if (stopFlag.val === true) {\n                            console.warn('stop');\n                            event.emit('stop', 'stop');\n                            return [3 /*break*/, 2];\n                        }\n                        return [3 /*break*/, 0];\n                    case 2:\n                        if (!copyChunks.length) {\n                            console.warn('finish');\n                            event.emit('finish', 'finish');\n                        }\n                        return [2 /*return*/];\n                }\n            });\n        });\n    })();\n    return {\n        stop: function () { return stopFlag.val = true; },\n        \"continue\": function () {\n            stopFlag.val = true;\n            return flowCtr(uploadChunkAjax, chunks, event, i);\n        }\n    };\n}\nexports[\"default\"] = flowCtr;\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/flowCtr.ts?");

/***/ }),

/***/ "./src/utils/miniAssert.ts":
/*!*********************************!*\
  !*** ./src/utils/miniAssert.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nexports.mAssertType = exports.mAssert = void 0;\nvar mAssert = function (val, expected, msg) {\n    if (val !== expected) {\n        throw new Error(msg);\n    }\n};\nexports.mAssert = mAssert;\nvar mAssertType = function (val, expected, msg) {\n    if ((val === null || val === void 0 ? void 0 : val.constructor) !== expected) {\n        throw new Error(msg);\n    }\n};\nexports.mAssertType = mAssertType;\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/miniAssert.ts?");

/***/ }),

/***/ "./src/utils/miniEventEmit.ts":
/*!************************************!*\
  !*** ./src/utils/miniEventEmit.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar MiniEventEmit = /** @class */ (function () {\n    function MiniEventEmit() {\n        this.container = {};\n    }\n    MiniEventEmit.prototype.on = function (eventName, handler) {\n        var container = this.container;\n        if (Array.isArray(container[eventName])) {\n            container[eventName].push(handler);\n            return;\n        }\n        container[eventName] = [handler];\n    };\n    MiniEventEmit.prototype.emit = function (eventName, payload) {\n        var container = this.container;\n        if (Array.isArray(container[eventName])) {\n            container[eventName]\n                .forEach(function (handler) { return handler(payload); });\n        }\n    };\n    MiniEventEmit.prototype.off = function (eventName, offHandler) {\n        var container = this.container;\n        if (Array.isArray(container[eventName])) {\n            container[eventName] = container[eventName]\n                .filter(function (handler) { return handler !== offHandler; });\n        }\n    };\n    MiniEventEmit.prototype.once = function (eventName, handler) {\n        var _this = this;\n        var wrapper = function () {\n            var payload = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                payload[_i] = arguments[_i];\n            }\n            handler.apply(void 0, payload);\n            _this.off(eventName, wrapper);\n        };\n        this.on(eventName, wrapper);\n    };\n    return MiniEventEmit;\n}());\nexports[\"default\"] = MiniEventEmit;\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/miniEventEmit.ts?");

/***/ }),

/***/ "./src/utils/sliceFile.ts":
/*!********************************!*\
  !*** ./src/utils/sliceFile.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar buildChunkName = function (file, index) {\n    return \"\".concat(file.name, \"-\").concat(index);\n};\n/** file slice to chunks */\nvar sliceFile = function (file, chunkSize, chunkName) {\n    if (chunkSize === void 0) { chunkSize = 0; }\n    var chunkNums = Math.ceil(file.size / chunkSize);\n    var chunksArray = [];\n    var i = 0;\n    while (i < chunkNums) {\n        var chunkBlob = file.slice(i * chunkSize, i * chunkSize + chunkSize);\n        var chunkFileName = chunkName ? chunkName(file, i) : buildChunkName(file, i);\n        chunksArray.push(new File([chunkBlob], chunkFileName, {\n            type: file.type\n        }));\n        i++;\n    }\n    return chunksArray;\n};\nexports[\"default\"] = sliceFile;\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/sliceFile.ts?");

/***/ }),

/***/ "./src/utils/strToByte.ts":
/*!********************************!*\
  !*** ./src/utils/strToByte.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar unitMap = {\n    'BYTE': 1,\n    'K': 1024,\n    'KB': 1024,\n    'M': 1024 * 1024,\n    'MB': 1024 * 1024\n};\nexports[\"default\"] = (function (sizeStr) {\n    var unitStr = Object.keys(unitMap).\n        find(function (b) { return new RegExp(\"\".concat(b.toUpperCase(), \"$\"))\n        .test(sizeStr.toUpperCase()); });\n    if (!unitStr)\n        return 0;\n    var unit = unitMap[unitStr];\n    var val = sizeStr.split(unitStr)[0];\n    if (isNaN(Number(val)))\n        throw new Error('must be number string');\n    return Number(val) * unit;\n});\n\n\n//# sourceURL=webpack://fileSliceUpload/./src/utils/strToByte.ts?");

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