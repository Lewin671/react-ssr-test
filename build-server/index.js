/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Ingredient.js":
/*!**************************************!*\
  !*** ./src/components/Ingredient.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ingredient)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/qingyingliu/Desktop/Code/javascript/react-recipe-ssr/src/components/Ingredient.js\";\n\nfunction Ingredient(_ref) {\n  var amount = _ref.amount,\n      measurement = _ref.measurement,\n      name = _ref.name;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, amount, \" \", measurement, \" \", name);\n}\n\n//# sourceURL=webpack://learning-react-recipe-app/./src/components/Ingredient.js?");

/***/ }),

/***/ "./src/components/IngredientsList.js":
/*!*******************************************!*\
  !*** ./src/components/IngredientsList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IngredientsList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Ingredient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ingredient */ \"./src/components/Ingredient.js\");\nvar _jsxFileName = \"/Users/qingyingliu/Desktop/Code/javascript/react-recipe-ssr/src/components/IngredientsList.js\";\n\n\nfunction IngredientsList(_ref) {\n  var _this = this;\n\n  var _ref$list = _ref.list,\n      list = _ref$list === void 0 ? [] : _ref$list;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: \"ingredients\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, list.map(function (ingredient, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Ingredient__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object.assign({\n      key: i\n    }, ingredient, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }));\n  }));\n}\n\n//# sourceURL=webpack://learning-react-recipe-app/./src/components/IngredientsList.js?");

/***/ }),

/***/ "./src/components/Instructions.js":
/*!****************************************!*\
  !*** ./src/components/Instructions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Instructions)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/qingyingliu/Desktop/Code/javascript/react-recipe-ssr/src/components/Instructions.js\";\n\nfunction Instructions(_ref) {\n  var _this = this;\n\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? \"untitled\" : _ref$title,\n      _ref$steps = _ref.steps,\n      steps = _ref$steps === void 0 ? [] : _ref$steps;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    className: \"instructions\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, title), steps.map(function (s, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }, s);\n  }));\n}\n\n//# sourceURL=webpack://learning-react-recipe-app/./src/components/Instructions.js?");

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Recipe */ \"./src/components/Recipe.js\");\n/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.css */ \"./src/components/Menu.css\");\nvar _jsxFileName = \"/Users/qingyingliu/Desktop/Code/javascript/react-recipe-ssr/src/components/Menu.js\";\n\n\n\nfunction Menu(_ref) {\n  var _this = this;\n\n  var _ref$recipes = _ref.recipes,\n      recipes = _ref$recipes === void 0 ? [] : _ref$recipes;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Delicious Recipes\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"recipes\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, recipes.map(function (props, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Recipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"], Object.assign({\n      key: i\n    }, props, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }\n    }));\n  })));\n}\n\n//# sourceURL=webpack://learning-react-recipe-app/./src/components/Menu.js?");

/***/ }),

/***/ "./src/components/Recipe.js":
/*!**********************************!*\
  !*** ./src/components/Recipe.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Recipe)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _IngredientsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IngredientsList */ \"./src/components/IngredientsList.js\");\n/* harmony import */ var _Instructions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Instructions */ \"./src/components/Instructions.js\");\nvar _jsxFileName = \"/Users/qingyingliu/Desktop/Code/javascript/react-recipe-ssr/src/components/Recipe.js\";\n\n\n\nfunction Recipe(_ref) {\n  var _ref$name = _ref.name,\n      name = _ref$name === void 0 ? \"untitled\" : _ref$name,\n      _ref$ingredients = _ref.ingredients,\n      ingredients = _ref$ingredients === void 0 ? [] : _ref$ingredients,\n      _ref$steps = _ref.steps,\n      steps = _ref$steps === void 0 ? [] : _ref$steps;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    id: name.toLowerCase().replace(/ /g, \"-\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IngredientsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    list: ingredients,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Instructions__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Cooking Instructions\",\n    steps: steps,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }));\n}\n\n//# sourceURL=webpack://learning-react-recipe-app/./src/components/Recipe.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_recipes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/recipes.json */ \"./src/data/recipes.json\");\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/qingyingliu/Desktop/Code/javascript/react-recipe-ssr/src/index.js\";\n\n\n\n\n // ReactDOM.render(<Menu recipes={data} />, document.getElementById(\"root\"));\n\n\n\n\n\nvar htmlTemplate = \"\\n<html>\\n<header>\\n<title>SSR Test</title>\\n<link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"main.css\\\"></header>\\n<body>\\n<div id='root'> </div>\\n</body>\\n</html>\\n\";\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default()[\"static\"](\"./build\"));\napp.get(\"/\", function (req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_5___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    recipes: _data_recipes_json__WEBPACK_IMPORTED_MODULE_2__,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 47\n    }\n  }));\n  console.log(app);\n  return res.send(htmlTemplate.replace(\"<div id='root'> </div>\", \"<div id='root'> \".concat(app, \" </div>\")));\n});\napp.get(\"/main.css\", function (req, res) {\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_6___default().resolve(\"./build-server/main.css\");\n  (0,fs__WEBPACK_IMPORTED_MODULE_7__.readFile)(indexFile, \"utf-8\", function (err, data) {\n    return res.send(data);\n  });\n});\napp.listen(3000, function () {\n  console.log(\"Server is running on port \" + 3000);\n});\n\n//# sourceURL=webpack://learning-react-recipe-app/./src/index.js?");

/***/ }),

/***/ "./src/components/Menu.css":
/*!*********************************!*\
  !*** ./src/components/Menu.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://learning-react-recipe-app/./src/components/Menu.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./src/data/recipes.json":
/*!*******************************!*\
  !*** ./src/data/recipes.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"name\":\"Baked Salmon\",\"ingredients\":[{\"name\":\"Salmon\",\"amount\":1,\"measurement\":\"lb\"},{\"name\":\"Pine Nuts\",\"amount\":1,\"measurement\":\"cup\"},{\"name\":\"Butter Lettuce\",\"amount\":2,\"measurement\":\"cups\"},{\"name\":\"Yellow Squash\",\"amount\":1,\"measurement\":\"med\"},{\"name\":\"Olive Oil\",\"amount\":0.5,\"measurement\":\"cup\"},{\"name\":\"Garlic\",\"amount\":3,\"measurement\":\"cloves\"}],\"steps\":[\"Preheat the oven to 350 degrees.\",\"Spread the olive oil around a glass baking dish.\",\"Add the salmon, garlic, and pine nuts to the dish.\",\"Bake for 15 minutes.\",\"Add the yellow squash and put back in the oven for 30 mins.\",\"Remove from oven and let cool for 15 minutes. Add the lettuce and serve.\"]},{\"name\":\"Fish Tacos\",\"ingredients\":[{\"name\":\"Whitefish\",\"amount\":1,\"measurement\":\"lb\"},{\"name\":\"Cheese\",\"amount\":1,\"measurement\":\"cup\"},{\"name\":\"Iceberg Lettuce\",\"amount\":2,\"measurement\":\"cups\"},{\"name\":\"Tomatoes\",\"amount\":2,\"measurement\":\"large\"},{\"name\":\"Tortillas\",\"amount\":3,\"measurement\":\"med\"}],\"steps\":[\"Cook the fish on the grill until hot.\",\"Place the fish on the 3 tortillas.\",\"Top them with lettuce, tomatoes, and cheese.\"]}]');\n\n//# sourceURL=webpack://learning-react-recipe-app/./src/data/recipes.json?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;