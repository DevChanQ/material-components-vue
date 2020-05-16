(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/layout-grid/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/base/baseComponentMixin.js":
/*!***********************************************!*\
  !*** ./components/base/baseComponentMixin.js ***!
  \***********************************************/
/*! exports provided: baseComponentMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"baseComponentMixin\", function() { return baseComponentMixin; });\nvar baseComponentMixin = {\n  inheritAttrs: false\n};\n\n//# sourceURL=webpack:///./components/base/baseComponentMixin.js?");

/***/ }),

/***/ "./components/base/index.js":
/*!**********************************!*\
  !*** ./components/base/index.js ***!
  \**********************************/
/*! exports provided: baseComponentMixin, themeClassMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _baseComponentMixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseComponentMixin.js */ \"./components/base/baseComponentMixin.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"baseComponentMixin\", function() { return _baseComponentMixin_js__WEBPACK_IMPORTED_MODULE_0__[\"baseComponentMixin\"]; });\n\n/* harmony import */ var _themeClassMixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themeClassMixin.js */ \"./components/base/themeClassMixin.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"themeClassMixin\", function() { return _themeClassMixin_js__WEBPACK_IMPORTED_MODULE_1__[\"themeClassMixin\"]; });\n\n\n\n\n//# sourceURL=webpack:///./components/base/index.js?");

/***/ }),

/***/ "./components/base/themeClassMixin.js":
/*!********************************************!*\
  !*** ./components/base/themeClassMixin.js ***!
  \********************************************/
/*! exports provided: themeClassMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"themeClassMixin\", function() { return themeClassMixin; });\nvar themeProps = ['primary', 'secondary', 'background', 'surface', 'on-primary', 'on-secondary', 'on-surface', 'primary-bg', 'secondary-bg', 'text-primary-on-light', 'text-secondary-on-light', 'text-hint-on-light', 'text-disabled-on-light', 'text-icon-on-light', 'text-primary-on-dark', 'text-secondary-on-dark', 'text-hint-on-dark', 'text-disabled-on-dark', 'text-icon-on-dark'];\nvar themeClassMixin = {\n  props: {\n    theming: {\n      type: String,\n      default: ''\n    }\n  },\n  mounted: function mounted() {\n    if (themeProps.indexOf(this.theming) > -1) {\n      this.$el.classList.add('mdc-theme--' + this.theming);\n    }\n  }\n};\n\n//# sourceURL=webpack:///./components/base/themeClassMixin.js?");

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: initPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initPlugin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initPlugin.js */ \"./components/initPlugin.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initPlugin\", function() { return _initPlugin_js__WEBPACK_IMPORTED_MODULE_0__[\"initPlugin\"]; });\n\n\n\n//# sourceURL=webpack:///./components/index.js?");

/***/ }),

/***/ "./components/initPlugin.js":
/*!**********************************!*\
  !*** ./components/initPlugin.js ***!
  \**********************************/
/*! exports provided: initPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPlugin\", function() { return initPlugin; });\nfunction initPlugin(plugin) {\n  if (typeof window !== 'undefined' && window.Vue) {\n    window.Vue.use(plugin);\n  }\n}\n\n//# sourceURL=webpack:///./components/initPlugin.js?");

/***/ }),

/***/ "./components/layout-grid/LayoutGrid.vue":
/*!***********************************************!*\
  !*** ./components/layout-grid/LayoutGrid.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LayoutGrid_vue_vue_type_template_id_3cce6771___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutGrid.vue?vue&type=template&id=3cce6771& */ \"./components/layout-grid/LayoutGrid.vue?vue&type=template&id=3cce6771&\");\n/* harmony import */ var _LayoutGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutGrid.vue?vue&type=script&lang=js& */ \"./components/layout-grid/LayoutGrid.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _LayoutGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _LayoutGrid_vue_vue_type_template_id_3cce6771___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _LayoutGrid_vue_vue_type_template_id_3cce6771___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/layout-grid/LayoutGrid.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGrid.vue?");

/***/ }),

/***/ "./components/layout-grid/LayoutGrid.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./components/layout-grid/LayoutGrid.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./LayoutGrid.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGrid.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGrid.vue?");

/***/ }),

/***/ "./components/layout-grid/LayoutGrid.vue?vue&type=template&id=3cce6771&":
/*!******************************************************************************!*\
  !*** ./components/layout-grid/LayoutGrid.vue?vue&type=template&id=3cce6771& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGrid_vue_vue_type_template_id_3cce6771___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./LayoutGrid.vue?vue&type=template&id=3cce6771& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGrid.vue?vue&type=template&id=3cce6771&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGrid_vue_vue_type_template_id_3cce6771___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGrid_vue_vue_type_template_id_3cce6771___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGrid.vue?");

/***/ }),

/***/ "./components/layout-grid/LayoutGridCell.vue":
/*!***************************************************!*\
  !*** ./components/layout-grid/LayoutGridCell.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LayoutGridCell_vue_vue_type_template_id_6a70811a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutGridCell.vue?vue&type=template&id=6a70811a& */ \"./components/layout-grid/LayoutGridCell.vue?vue&type=template&id=6a70811a&\");\n/* harmony import */ var _LayoutGridCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutGridCell.vue?vue&type=script&lang=js& */ \"./components/layout-grid/LayoutGridCell.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _LayoutGridCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _LayoutGridCell_vue_vue_type_template_id_6a70811a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _LayoutGridCell_vue_vue_type_template_id_6a70811a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/layout-grid/LayoutGridCell.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGridCell.vue?");

/***/ }),

/***/ "./components/layout-grid/LayoutGridCell.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./components/layout-grid/LayoutGridCell.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./LayoutGridCell.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGridCell.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridCell_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGridCell.vue?");

/***/ }),

/***/ "./components/layout-grid/LayoutGridCell.vue?vue&type=template&id=6a70811a&":
/*!**********************************************************************************!*\
  !*** ./components/layout-grid/LayoutGridCell.vue?vue&type=template&id=6a70811a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridCell_vue_vue_type_template_id_6a70811a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./LayoutGridCell.vue?vue&type=template&id=6a70811a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGridCell.vue?vue&type=template&id=6a70811a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridCell_vue_vue_type_template_id_6a70811a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridCell_vue_vue_type_template_id_6a70811a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGridCell.vue?");

/***/ }),

/***/ "./components/layout-grid/LayoutGridInner.vue":
/*!****************************************************!*\
  !*** ./components/layout-grid/LayoutGridInner.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LayoutGridInner_vue_vue_type_template_id_102d7095___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutGridInner.vue?vue&type=template&id=102d7095& */ \"./components/layout-grid/LayoutGridInner.vue?vue&type=template&id=102d7095&\");\n/* harmony import */ var _LayoutGridInner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutGridInner.vue?vue&type=script&lang=js& */ \"./components/layout-grid/LayoutGridInner.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _LayoutGridInner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _LayoutGridInner_vue_vue_type_template_id_102d7095___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _LayoutGridInner_vue_vue_type_template_id_102d7095___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/layout-grid/LayoutGridInner.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGridInner.vue?");

/***/ }),

/***/ "./components/layout-grid/LayoutGridInner.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./components/layout-grid/LayoutGridInner.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridInner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./LayoutGridInner.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGridInner.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridInner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGridInner.vue?");

/***/ }),

/***/ "./components/layout-grid/LayoutGridInner.vue?vue&type=template&id=102d7095&":
/*!***********************************************************************************!*\
  !*** ./components/layout-grid/LayoutGridInner.vue?vue&type=template&id=102d7095& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridInner_vue_vue_type_template_id_102d7095___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./LayoutGridInner.vue?vue&type=template&id=102d7095& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGridInner.vue?vue&type=template&id=102d7095&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridInner_vue_vue_type_template_id_102d7095___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutGridInner_vue_vue_type_template_id_102d7095___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGridInner.vue?");

/***/ }),

/***/ "./components/layout-grid/index.js":
/*!*****************************************!*\
  !*** ./components/layout-grid/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LayoutGrid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutGrid.vue */ \"./components/layout-grid/LayoutGrid.vue\");\n/* harmony import */ var _LayoutGridCell_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutGridCell.vue */ \"./components/layout-grid/LayoutGridCell.vue\");\n/* harmony import */ var _LayoutGridInner_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutGridInner.vue */ \"./components/layout-grid/LayoutGridInner.vue\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./components/layout-grid/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ */ \"./components/index.js\");\n\n\n\n\n\nvar plugin = {\n  install: function install(vm) {\n    vm.component('m-layout-grid', _LayoutGrid_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    vm.component('m-layout-grid-cell', _LayoutGridCell_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    vm.component('m-layout-grid-inner', _LayoutGridInner_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (plugin);\nObject(___WEBPACK_IMPORTED_MODULE_4__[\"initPlugin\"])(plugin);\n\n//# sourceURL=webpack:///./components/layout-grid/index.js?");

/***/ }),

/***/ "./components/layout-grid/styles.scss":
/*!********************************************!*\
  !*** ./components/layout-grid/styles.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":root {\\n  --mdc-layout-grid-margin-desktop: 24px;\\n  --mdc-layout-grid-gutter-desktop: 24px;\\n  --mdc-layout-grid-column-width-desktop: 72px;\\n  --mdc-layout-grid-margin-tablet: 16px;\\n  --mdc-layout-grid-gutter-tablet: 16px;\\n  --mdc-layout-grid-column-width-tablet: 72px;\\n  --mdc-layout-grid-margin-phone: 16px;\\n  --mdc-layout-grid-gutter-phone: 16px;\\n  --mdc-layout-grid-column-width-phone: 72px;\\n}\\n\\n@media (min-width: 840px) {\\n  .mdc-layout-grid {\\n    -webkit-box-sizing: border-box;\\n            box-sizing: border-box;\\n    margin: 0 auto;\\n    padding: 24px;\\n    padding: var(--mdc-layout-grid-margin-desktop, 24px);\\n  }\\n}\\n@media (min-width: 600px) and (max-width: 839px) {\\n  .mdc-layout-grid {\\n    -webkit-box-sizing: border-box;\\n            box-sizing: border-box;\\n    margin: 0 auto;\\n    padding: 16px;\\n    padding: var(--mdc-layout-grid-margin-tablet, 16px);\\n  }\\n}\\n@media (max-width: 599px) {\\n  .mdc-layout-grid {\\n    -webkit-box-sizing: border-box;\\n            box-sizing: border-box;\\n    margin: 0 auto;\\n    padding: 16px;\\n    padding: var(--mdc-layout-grid-margin-phone, 16px);\\n  }\\n}\\n@media (min-width: 840px) {\\n  .mdc-layout-grid__inner {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: horizontal;\\n    -webkit-box-direction: normal;\\n        -ms-flex-flow: row wrap;\\n            flex-flow: row wrap;\\n    -webkit-box-align: stretch;\\n        -ms-flex-align: stretch;\\n            align-items: stretch;\\n    margin: -12px;\\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2 * -1);\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__inner {\\n      display: grid;\\n      margin: 0;\\n      grid-gap: 24px;\\n      grid-gap: var(--mdc-layout-grid-gutter-desktop, 24px);\\n      grid-template-columns: repeat(12, minmax(0, 1fr));\\n    }\\n  }\\n}\\n@media (min-width: 600px) and (max-width: 839px) {\\n  .mdc-layout-grid__inner {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: horizontal;\\n    -webkit-box-direction: normal;\\n        -ms-flex-flow: row wrap;\\n            flex-flow: row wrap;\\n    -webkit-box-align: stretch;\\n        -ms-flex-align: stretch;\\n            align-items: stretch;\\n    margin: -8px;\\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2 * -1);\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__inner {\\n      display: grid;\\n      margin: 0;\\n      grid-gap: 16px;\\n      grid-gap: var(--mdc-layout-grid-gutter-tablet, 16px);\\n      grid-template-columns: repeat(8, minmax(0, 1fr));\\n    }\\n  }\\n}\\n@media (max-width: 599px) {\\n  .mdc-layout-grid__inner {\\n    display: -webkit-box;\\n    display: -ms-flexbox;\\n    display: flex;\\n    -webkit-box-orient: horizontal;\\n    -webkit-box-direction: normal;\\n        -ms-flex-flow: row wrap;\\n            flex-flow: row wrap;\\n    -webkit-box-align: stretch;\\n        -ms-flex-align: stretch;\\n            align-items: stretch;\\n    margin: -8px;\\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2 * -1);\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__inner {\\n      display: grid;\\n      margin: 0;\\n      grid-gap: 16px;\\n      grid-gap: var(--mdc-layout-grid-gutter-phone, 16px);\\n      grid-template-columns: repeat(4, minmax(0, 1fr));\\n    }\\n  }\\n}\\n@media (min-width: 840px) {\\n  .mdc-layout-grid__cell {\\n    width: calc(33.3333333333% - 24px);\\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n    -webkit-box-sizing: border-box;\\n            box-sizing: border-box;\\n    margin: 12px;\\n    margin: calc(var(--mdc-layout-grid-gutter-desktop, 24px) / 2);\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell {\\n      margin: 0;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-1,\\n.mdc-layout-grid__cell--span-1-desktop {\\n    width: calc(8.3333333333% - 24px);\\n    width: calc(8.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-1,\\n.mdc-layout-grid__cell--span-1-desktop {\\n      width: auto;\\n      grid-column-end: span 1;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-2,\\n.mdc-layout-grid__cell--span-2-desktop {\\n    width: calc(16.6666666667% - 24px);\\n    width: calc(16.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-2,\\n.mdc-layout-grid__cell--span-2-desktop {\\n      width: auto;\\n      grid-column-end: span 2;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-3,\\n.mdc-layout-grid__cell--span-3-desktop {\\n    width: calc(25% - 24px);\\n    width: calc(25% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-3,\\n.mdc-layout-grid__cell--span-3-desktop {\\n      width: auto;\\n      grid-column-end: span 3;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-4,\\n.mdc-layout-grid__cell--span-4-desktop {\\n    width: calc(33.3333333333% - 24px);\\n    width: calc(33.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-4,\\n.mdc-layout-grid__cell--span-4-desktop {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-5,\\n.mdc-layout-grid__cell--span-5-desktop {\\n    width: calc(41.6666666667% - 24px);\\n    width: calc(41.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-5,\\n.mdc-layout-grid__cell--span-5-desktop {\\n      width: auto;\\n      grid-column-end: span 5;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-6,\\n.mdc-layout-grid__cell--span-6-desktop {\\n    width: calc(50% - 24px);\\n    width: calc(50% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-6,\\n.mdc-layout-grid__cell--span-6-desktop {\\n      width: auto;\\n      grid-column-end: span 6;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-7,\\n.mdc-layout-grid__cell--span-7-desktop {\\n    width: calc(58.3333333333% - 24px);\\n    width: calc(58.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-7,\\n.mdc-layout-grid__cell--span-7-desktop {\\n      width: auto;\\n      grid-column-end: span 7;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-8,\\n.mdc-layout-grid__cell--span-8-desktop {\\n    width: calc(66.6666666667% - 24px);\\n    width: calc(66.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-8,\\n.mdc-layout-grid__cell--span-8-desktop {\\n      width: auto;\\n      grid-column-end: span 8;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-9,\\n.mdc-layout-grid__cell--span-9-desktop {\\n    width: calc(75% - 24px);\\n    width: calc(75% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-9,\\n.mdc-layout-grid__cell--span-9-desktop {\\n      width: auto;\\n      grid-column-end: span 9;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-10,\\n.mdc-layout-grid__cell--span-10-desktop {\\n    width: calc(83.3333333333% - 24px);\\n    width: calc(83.3333333333% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-10,\\n.mdc-layout-grid__cell--span-10-desktop {\\n      width: auto;\\n      grid-column-end: span 10;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-11,\\n.mdc-layout-grid__cell--span-11-desktop {\\n    width: calc(91.6666666667% - 24px);\\n    width: calc(91.6666666667% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-11,\\n.mdc-layout-grid__cell--span-11-desktop {\\n      width: auto;\\n      grid-column-end: span 11;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-12,\\n.mdc-layout-grid__cell--span-12-desktop {\\n    width: calc(100% - 24px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-desktop, 24px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-12,\\n.mdc-layout-grid__cell--span-12-desktop {\\n      width: auto;\\n      grid-column-end: span 12;\\n    }\\n  }\\n}\\n@media (min-width: 600px) and (max-width: 839px) {\\n  .mdc-layout-grid__cell {\\n    width: calc(50% - 16px);\\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n    -webkit-box-sizing: border-box;\\n            box-sizing: border-box;\\n    margin: 8px;\\n    margin: calc(var(--mdc-layout-grid-gutter-tablet, 16px) / 2);\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell {\\n      margin: 0;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-1,\\n.mdc-layout-grid__cell--span-1-tablet {\\n    width: calc(12.5% - 16px);\\n    width: calc(12.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-1,\\n.mdc-layout-grid__cell--span-1-tablet {\\n      width: auto;\\n      grid-column-end: span 1;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-2,\\n.mdc-layout-grid__cell--span-2-tablet {\\n    width: calc(25% - 16px);\\n    width: calc(25% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-2,\\n.mdc-layout-grid__cell--span-2-tablet {\\n      width: auto;\\n      grid-column-end: span 2;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-3,\\n.mdc-layout-grid__cell--span-3-tablet {\\n    width: calc(37.5% - 16px);\\n    width: calc(37.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-3,\\n.mdc-layout-grid__cell--span-3-tablet {\\n      width: auto;\\n      grid-column-end: span 3;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-4,\\n.mdc-layout-grid__cell--span-4-tablet {\\n    width: calc(50% - 16px);\\n    width: calc(50% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-4,\\n.mdc-layout-grid__cell--span-4-tablet {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-5,\\n.mdc-layout-grid__cell--span-5-tablet {\\n    width: calc(62.5% - 16px);\\n    width: calc(62.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-5,\\n.mdc-layout-grid__cell--span-5-tablet {\\n      width: auto;\\n      grid-column-end: span 5;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-6,\\n.mdc-layout-grid__cell--span-6-tablet {\\n    width: calc(75% - 16px);\\n    width: calc(75% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-6,\\n.mdc-layout-grid__cell--span-6-tablet {\\n      width: auto;\\n      grid-column-end: span 6;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-7,\\n.mdc-layout-grid__cell--span-7-tablet {\\n    width: calc(87.5% - 16px);\\n    width: calc(87.5% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-7,\\n.mdc-layout-grid__cell--span-7-tablet {\\n      width: auto;\\n      grid-column-end: span 7;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-8,\\n.mdc-layout-grid__cell--span-8-tablet {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-8,\\n.mdc-layout-grid__cell--span-8-tablet {\\n      width: auto;\\n      grid-column-end: span 8;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-9,\\n.mdc-layout-grid__cell--span-9-tablet {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-9,\\n.mdc-layout-grid__cell--span-9-tablet {\\n      width: auto;\\n      grid-column-end: span 8;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-10,\\n.mdc-layout-grid__cell--span-10-tablet {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-10,\\n.mdc-layout-grid__cell--span-10-tablet {\\n      width: auto;\\n      grid-column-end: span 8;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-11,\\n.mdc-layout-grid__cell--span-11-tablet {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-11,\\n.mdc-layout-grid__cell--span-11-tablet {\\n      width: auto;\\n      grid-column-end: span 8;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-12,\\n.mdc-layout-grid__cell--span-12-tablet {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-tablet, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-12,\\n.mdc-layout-grid__cell--span-12-tablet {\\n      width: auto;\\n      grid-column-end: span 8;\\n    }\\n  }\\n}\\n@media (max-width: 599px) {\\n  .mdc-layout-grid__cell {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\\n    -webkit-box-sizing: border-box;\\n            box-sizing: border-box;\\n    margin: 8px;\\n    margin: calc(var(--mdc-layout-grid-gutter-phone, 16px) / 2);\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell {\\n      margin: 0;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-1,\\n.mdc-layout-grid__cell--span-1-phone {\\n    width: calc(25% - 16px);\\n    width: calc(25% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-1,\\n.mdc-layout-grid__cell--span-1-phone {\\n      width: auto;\\n      grid-column-end: span 1;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-2,\\n.mdc-layout-grid__cell--span-2-phone {\\n    width: calc(50% - 16px);\\n    width: calc(50% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-2,\\n.mdc-layout-grid__cell--span-2-phone {\\n      width: auto;\\n      grid-column-end: span 2;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-3,\\n.mdc-layout-grid__cell--span-3-phone {\\n    width: calc(75% - 16px);\\n    width: calc(75% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-3,\\n.mdc-layout-grid__cell--span-3-phone {\\n      width: auto;\\n      grid-column-end: span 3;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-4,\\n.mdc-layout-grid__cell--span-4-phone {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-4,\\n.mdc-layout-grid__cell--span-4-phone {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-5,\\n.mdc-layout-grid__cell--span-5-phone {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-5,\\n.mdc-layout-grid__cell--span-5-phone {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-6,\\n.mdc-layout-grid__cell--span-6-phone {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-6,\\n.mdc-layout-grid__cell--span-6-phone {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-7,\\n.mdc-layout-grid__cell--span-7-phone {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-7,\\n.mdc-layout-grid__cell--span-7-phone {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-8,\\n.mdc-layout-grid__cell--span-8-phone {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-8,\\n.mdc-layout-grid__cell--span-8-phone {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-9,\\n.mdc-layout-grid__cell--span-9-phone {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-9,\\n.mdc-layout-grid__cell--span-9-phone {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-10,\\n.mdc-layout-grid__cell--span-10-phone {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-10,\\n.mdc-layout-grid__cell--span-10-phone {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-11,\\n.mdc-layout-grid__cell--span-11-phone {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-11,\\n.mdc-layout-grid__cell--span-11-phone {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n  .mdc-layout-grid__cell--span-12,\\n.mdc-layout-grid__cell--span-12-phone {\\n    width: calc(100% - 16px);\\n    width: calc(100% - var(--mdc-layout-grid-gutter-phone, 16px));\\n  }\\n\\n  @supports (display: grid) {\\n    .mdc-layout-grid__cell--span-12,\\n.mdc-layout-grid__cell--span-12-phone {\\n      width: auto;\\n      grid-column-end: span 4;\\n    }\\n  }\\n}\\n.mdc-layout-grid__cell--order-1 {\\n  -webkit-box-ordinal-group: 2;\\n      -ms-flex-order: 1;\\n          order: 1;\\n}\\n\\n.mdc-layout-grid__cell--order-2 {\\n  -webkit-box-ordinal-group: 3;\\n      -ms-flex-order: 2;\\n          order: 2;\\n}\\n\\n.mdc-layout-grid__cell--order-3 {\\n  -webkit-box-ordinal-group: 4;\\n      -ms-flex-order: 3;\\n          order: 3;\\n}\\n\\n.mdc-layout-grid__cell--order-4 {\\n  -webkit-box-ordinal-group: 5;\\n      -ms-flex-order: 4;\\n          order: 4;\\n}\\n\\n.mdc-layout-grid__cell--order-5 {\\n  -webkit-box-ordinal-group: 6;\\n      -ms-flex-order: 5;\\n          order: 5;\\n}\\n\\n.mdc-layout-grid__cell--order-6 {\\n  -webkit-box-ordinal-group: 7;\\n      -ms-flex-order: 6;\\n          order: 6;\\n}\\n\\n.mdc-layout-grid__cell--order-7 {\\n  -webkit-box-ordinal-group: 8;\\n      -ms-flex-order: 7;\\n          order: 7;\\n}\\n\\n.mdc-layout-grid__cell--order-8 {\\n  -webkit-box-ordinal-group: 9;\\n      -ms-flex-order: 8;\\n          order: 8;\\n}\\n\\n.mdc-layout-grid__cell--order-9 {\\n  -webkit-box-ordinal-group: 10;\\n      -ms-flex-order: 9;\\n          order: 9;\\n}\\n\\n.mdc-layout-grid__cell--order-10 {\\n  -webkit-box-ordinal-group: 11;\\n      -ms-flex-order: 10;\\n          order: 10;\\n}\\n\\n.mdc-layout-grid__cell--order-11 {\\n  -webkit-box-ordinal-group: 12;\\n      -ms-flex-order: 11;\\n          order: 11;\\n}\\n\\n.mdc-layout-grid__cell--order-12 {\\n  -webkit-box-ordinal-group: 13;\\n      -ms-flex-order: 12;\\n          order: 12;\\n}\\n\\n.mdc-layout-grid__cell--align-top {\\n  -ms-flex-item-align: start;\\n      align-self: flex-start;\\n}\\n\\n@supports (display: grid) {\\n  .mdc-layout-grid__cell--align-top {\\n    -ms-flex-item-align: start;\\n        align-self: start;\\n  }\\n}\\n.mdc-layout-grid__cell--align-middle {\\n  -ms-flex-item-align: center;\\n      align-self: center;\\n}\\n\\n.mdc-layout-grid__cell--align-bottom {\\n  -ms-flex-item-align: end;\\n      align-self: flex-end;\\n}\\n\\n@supports (display: grid) {\\n  .mdc-layout-grid__cell--align-bottom {\\n    -ms-flex-item-align: end;\\n        align-self: end;\\n  }\\n}\\n@media (min-width: 840px) {\\n  .mdc-layout-grid--fixed-column-width {\\n    width: 1176px;\\n    width: calc( var(--mdc-layout-grid-column-width-desktop, 72px) * 12 + var(--mdc-layout-grid-gutter-desktop, 24px) * 11 + var(--mdc-layout-grid-margin-desktop, 24px) * 2 );\\n  }\\n}\\n@media (min-width: 600px) and (max-width: 839px) {\\n  .mdc-layout-grid--fixed-column-width {\\n    width: 720px;\\n    width: calc( var(--mdc-layout-grid-column-width-tablet, 72px) * 8 + var(--mdc-layout-grid-gutter-tablet, 16px) * 7 + var(--mdc-layout-grid-margin-tablet, 16px) * 2 );\\n  }\\n}\\n@media (max-width: 599px) {\\n  .mdc-layout-grid--fixed-column-width {\\n    width: 368px;\\n    width: calc( var(--mdc-layout-grid-column-width-phone, 72px) * 4 + var(--mdc-layout-grid-gutter-phone, 16px) * 3 + var(--mdc-layout-grid-margin-phone, 16px) * 2 );\\n  }\\n}\\n.mdc-layout-grid--align-left {\\n  margin-right: auto;\\n  margin-left: 0;\\n}\\n\\n.mdc-layout-grid--align-right {\\n  margin-right: 0;\\n  margin-left: auto;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/layout-grid/styles.scss?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGrid.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./components/layout-grid/LayoutGrid.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ \"./components/base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mixins: [_base__WEBPACK_IMPORTED_MODULE_0__[\"baseComponentMixin\"], _base__WEBPACK_IMPORTED_MODULE_0__[\"themeClassMixin\"]],\n  props: {\n    fixedColumnWidth: {\n      type: Boolean,\n      default: false\n    },\n    align: {\n      type: String,\n      validator: function validator(value) {\n        return ['left', 'right', ''].indexOf(value) > -1;\n      },\n      default: ''\n    }\n  },\n  computed: {\n    classes: function classes() {\n      return {\n        'mdc-layout-grid--fixed-column-width': this.fixedColumnWidth,\n        'mdc-layout-grid--align-left': this.align === 'left',\n        'mdc-layout-grid--align-right': this.align === 'right'\n      };\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGrid.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGridCell.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./components/layout-grid/LayoutGridCell.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ \"./components/base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mixins: [_base__WEBPACK_IMPORTED_MODULE_0__[\"baseComponentMixin\"], _base__WEBPACK_IMPORTED_MODULE_0__[\"themeClassMixin\"]],\n  props: {\n    span: {\n      type: Number,\n      validator: function validator(value) {\n        return value >= 0 && value <= 12;\n      },\n      default: 0\n    },\n    spanDesktop: {\n      type: Number,\n      validator: function validator(value) {\n        return value >= 0 && value <= 12;\n      },\n      default: 0\n    },\n    spanTablet: {\n      type: Number,\n      validator: function validator(value) {\n        return value >= 0 && value <= 12;\n      },\n      default: 0\n    },\n    spanPhone: {\n      type: Number,\n      validator: function validator(value) {\n        return value >= 0 && value <= 12;\n      },\n      default: 0\n    },\n    order: {\n      type: Number,\n      validator: function validator(value) {\n        return value >= 0 && value <= 12;\n      },\n      default: 0\n    },\n    align: {\n      type: String,\n      validator: function validator(value) {\n        return ['top', 'middle', 'bottom', ''].indexOf(value) > -1;\n      },\n      default: ''\n    }\n  },\n  computed: {\n    classes: function classes() {\n      var temp = {};\n      temp['mdc-layout-grid__cell--span-' + this.span] = this.span > 0;\n      temp['mdc-layout-grid__cell--span-' + this.spanDesktop + '-desktop'] = this.spanDesktop > 0;\n      temp['mdc-layout-grid__cell--span-' + this.spanTablet + '-tablet'] = this.spanTablet > 0;\n      temp['mdc-layout-grid__cell--span-' + this.spanPhone + '-phone'] = this.spanPhone > 0;\n      temp['mdc-layout-grid__cell--align-' + this.align] = this.align !== '';\n      temp['mdc-layout-grid__cell--order-' + this.order] = this.order > 0;\n      return temp;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGridCell.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGridInner.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./components/layout-grid/LayoutGridInner.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base */ \"./components/base/index.js\");\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mixins: [_base__WEBPACK_IMPORTED_MODULE_0__[\"baseComponentMixin\"], _base__WEBPACK_IMPORTED_MODULE_0__[\"themeClassMixin\"]]\n});\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGridInner.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGrid.vue?vue&type=template&id=3cce6771&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layout-grid/LayoutGrid.vue?vue&type=template&id=3cce6771& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"mdc-layout-grid\", class: _vm.classes },\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGrid.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGridCell.vue?vue&type=template&id=6a70811a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layout-grid/LayoutGridCell.vue?vue&type=template&id=6a70811a& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"mdc-layout-grid__cell\", class: _vm.classes },\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGridCell.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./components/layout-grid/LayoutGridInner.vue?vue&type=template&id=102d7095&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/layout-grid/LayoutGridInner.vue?vue&type=template&id=102d7095& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"mdc-layout-grid__inner\" },\n    [_vm._t(\"default\")],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/layout-grid/LayoutGridInner.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ });
});