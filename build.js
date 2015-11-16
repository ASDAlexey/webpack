var home =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\r\nlet welcome = __webpack_require__(1);\r\nwelcome('home');\r\n\r\nexports.welcome = welcome;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./home.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./home.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\r\nmodule.exports=function(message){\r\n    console.log(`Welcome ${message}`);\r\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./welcome.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./welcome.js?");

/***/ }
/******/ ]);