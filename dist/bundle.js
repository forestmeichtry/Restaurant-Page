/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Assets/donutLogoEdit.svg */ "./src/Assets/donutLogoEdit.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Assets/donutBorder.svg */ "./src/Assets/donutBorder.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! Assets/donutDisplay2.png */ "./src/Assets/donutDisplay2.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! Assets/rack.png */ "./src/Assets/rack.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --navBarHeight: 60px;\n    --logoSize: 300px;\n    --pageOneTopHeight: 50vh;\n    --colorLightBlue: rgb(176, 214, 215);\n    --colorVerdigris: rgb(106, 177, 180);\n    --verdigrisVal: 106, 177, 180;\n    --colorDutchWhite: rgb(253, 234, 197);\n    --colorCoralPink: rgb(250, 144, 128);\n    --colorJasper: rgb(228, 90, 78);\n    --colorTeaRose: rgb(247, 203, 200);\n    --colorSunset: rgb(232, 198, 135);\n    --colorBittersweet: rgb(248, 118, 98);\n    --colorPeachYellow: rgb(251, 220, 157);\n}\n\n#content {\n    width: 100%;\n    height: 100vh;\n    overflow: hidden;\n}\n\n.outerWrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.listHeader {\n    position: relative;\n    top: -10px;\n    font-size: xx-large;\n    font-family: 'Caveat', cursive;\n    text-align: center;\n}\n\n.hoursList {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.textWrap {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 30vw;\n    padding: 20px;\n    font-size: x-large;\n    font-family: 'Caveat', cursive;\n    text-align: center;\n    color: var(--colorDutchWhite);\n    background-color: rgba(var(--verdigrisVal), .6);\n    border-radius: 6px;\n    border: solid 2px var(--colorVerdigris);\n    filter: drop-shadow(0px 0px 5px #000);\n}\n\n.tab-content-top .outerWrap .textWrap {\n    margin-top: calc(var(--navBarHeight) + 60px);\n}\n\n.logo {\n    position: absolute;\n    bottom: calc(calc(calc(var(--logoSize) / 2) + 5px) * -1);\n    left: calc(50vw - calc(var(--logoSize) / 2));\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-size: cover;\n    width: var(--logoSize);\n    height: var(--logoSize);\n    z-index: 11;\n}\n\nbody {margin: 0;}\n\n.navContainer {\n    position: absolute;\n    display: grid;\n    grid-template-rows: var(--navBarHeight) 60px;\n    width: 100%;\n}\n\n.navbar {\n    background-color: rgb(254,57,150);\n    display: flex;\n    gap: 30px;\n    justify-content: center;\n    align-items: center;\n    z-index: 10;\n}\n\n.navBorder {\n    position: relative;\n    top: -10px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 500px;\n    background-repeat: repeat-x;\n    z-index: 10;\n}\n\n.nav-button {\n    position: relative;\n    top: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    height: 30px;\n    width: 80px;\n    transition: .5s;\n    font-family: 'Caveat', cursive;\n    text-decoration: underline;\n    font-size: x-large;\n    z-index: 11;\n}\n\n.nav-button:hover {\n    transform: scale(1.2);\n    cursor: pointer;\n}\n\n.pageContainer {\n    position: absolute;\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n}\n\n.pageContainer.pageOne {\n    grid-template-rows: var(--pageOneTopHeight) 1fr;\n    z-index: 3;\n}\n\n.pageContainer.pageTwo {\n    grid-template-rows: 3fr 5fr;\n    z-index: 2;\n}\n\n.pageContainer.pageThree {\n    grid-template-rows: 8fr 3fr;\n    z-index: 1;\n}\n\n.tab-content-top {\n    position: relative;\n    top: 0px;\n    border-bottom: solid 1px black;\n    transition-duration: 1s;\n    transition-timing-function: ease-in-out;\n}\n\n.pageContainer.pageOne .tab-content-top {\n    display: grid;\n    grid-template-rows: 1fr calc(calc(var(--logoSize) / 2) - 4px);\n}\n\n.pageContainer.pageOne .parallaxOuterWrap .parallaxInnerWrap {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.pageContainer.pageTwo .tab-content-top {\n    background-color: var(--colorDutchWhite);\n}\n\n.pageContainer.pageThree .tab-content-top {\n    background-color: var(--colorCoralPink);\n}\n\n.tab-content-top.offscreen {\n    top: -1000px;\n}\n\n.tab-content-bottom {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    bottom: 0px;\n    border-top: solid 1px black;\n    transition-duration: 1s;\n    transition-timing-function: ease-in-out;\n}\n\n.pageContainer.pageOne .tab-content-bottom .parallaxOuterWrap .parallaxInnerWrap {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.pageContainer.pageOne .tab-content-bottom .textWrap {\n    margin-top: calc(var(--logoSize) / 3);\n    padding-left: 50px;\n    padding-right: 50px;\n    width: auto;\n}\n\n.pageContainer.pageTwo .tab-content-bottom {\n    background-color: var(--colorPeachYellow);\n}\n\n.pageContainer.pageThree .tab-content-bottom {\n    background-color: var(--colorBittersweet);\n}\n\n.tab-content-bottom.offscreen {\n    bottom: -1000px;\n}\n\n.parallaxOuterWrap {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.parallaxInnerWrap {\n    position: absolute;\n    width: 110%;\n    height: 110%;\n    background-position: center;\n    background-size: cover;\n    z-index: -1;\n}\n\n@media (max-width: 1024px) {\n    :root {\n        --logoSize: 150px;\n        --pageOneTopHeight: 60vh;\n    }\n\n    .textWrap {\n        width: 80vw;\n        font-size: large;\n    }\n\n    .navBorder {\n        background-size: 400px;\n    }\n\n    .parallaxInnerWrap {\n        width: 100%;\n        height: 100%;\n    }\n\n    .pageContainer.pageOne {\n        grid-template-rows: 3fr 3fr;\n        z-index: 3;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --navBarHeight: 60px;\n    --logoSize: 300px;\n    --pageOneTopHeight: 50vh;\n    --colorLightBlue: rgb(176, 214, 215);\n    --colorVerdigris: rgb(106, 177, 180);\n    --verdigrisVal: 106, 177, 180;\n    --colorDutchWhite: rgb(253, 234, 197);\n    --colorCoralPink: rgb(250, 144, 128);\n    --colorJasper: rgb(228, 90, 78);\n    --colorTeaRose: rgb(247, 203, 200);\n    --colorSunset: rgb(232, 198, 135);\n    --colorBittersweet: rgb(248, 118, 98);\n    --colorPeachYellow: rgb(251, 220, 157);\n}\n\n#content {\n    width: 100%;\n    height: 100vh;\n    overflow: hidden;\n}\n\n.outerWrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.listHeader {\n    position: relative;\n    top: -10px;\n    font-size: xx-large;\n    font-family: 'Caveat', cursive;\n    text-align: center;\n}\n\n.hoursList {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.textWrap {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 30vw;\n    padding: 20px;\n    font-size: x-large;\n    font-family: 'Caveat', cursive;\n    text-align: center;\n    color: var(--colorDutchWhite);\n    background-color: rgba(var(--verdigrisVal), .6);\n    border-radius: 6px;\n    border: solid 2px var(--colorVerdigris);\n    filter: drop-shadow(0px 0px 5px #000);\n}\n\n.tab-content-top .outerWrap .textWrap {\n    margin-top: calc(var(--navBarHeight) + 60px);\n}\n\n.logo {\n    position: absolute;\n    bottom: calc(calc(calc(var(--logoSize) / 2) + 5px) * -1);\n    left: calc(50vw - calc(var(--logoSize) / 2));\n    background-image: url(Assets/donutLogoEdit.svg);\n    background-position: center;\n    background-size: cover;\n    width: var(--logoSize);\n    height: var(--logoSize);\n    z-index: 11;\n}\n\nbody {margin: 0;}\n\n.navContainer {\n    position: absolute;\n    display: grid;\n    grid-template-rows: var(--navBarHeight) 60px;\n    width: 100%;\n}\n\n.navbar {\n    background-color: rgb(254,57,150);\n    display: flex;\n    gap: 30px;\n    justify-content: center;\n    align-items: center;\n    z-index: 10;\n}\n\n.navBorder {\n    position: relative;\n    top: -10px;\n    background-image: url(Assets/donutBorder.svg);\n    background-size: 500px;\n    background-repeat: repeat-x;\n    z-index: 10;\n}\n\n.nav-button {\n    position: relative;\n    top: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    height: 30px;\n    width: 80px;\n    transition: .5s;\n    font-family: 'Caveat', cursive;\n    text-decoration: underline;\n    font-size: x-large;\n    z-index: 11;\n}\n\n.nav-button:hover {\n    transform: scale(1.2);\n    cursor: pointer;\n}\n\n.pageContainer {\n    position: absolute;\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n}\n\n.pageContainer.pageOne {\n    grid-template-rows: var(--pageOneTopHeight) 1fr;\n    z-index: 3;\n}\n\n.pageContainer.pageTwo {\n    grid-template-rows: 3fr 5fr;\n    z-index: 2;\n}\n\n.pageContainer.pageThree {\n    grid-template-rows: 8fr 3fr;\n    z-index: 1;\n}\n\n.tab-content-top {\n    position: relative;\n    top: 0px;\n    border-bottom: solid 1px black;\n    transition-duration: 1s;\n    transition-timing-function: ease-in-out;\n}\n\n.pageContainer.pageOne .tab-content-top {\n    display: grid;\n    grid-template-rows: 1fr calc(calc(var(--logoSize) / 2) - 4px);\n}\n\n.pageContainer.pageOne .parallaxOuterWrap .parallaxInnerWrap {\n    background-image: url(Assets/donutDisplay2.png);\n}\n\n.pageContainer.pageTwo .tab-content-top {\n    background-color: var(--colorDutchWhite);\n}\n\n.pageContainer.pageThree .tab-content-top {\n    background-color: var(--colorCoralPink);\n}\n\n.tab-content-top.offscreen {\n    top: -1000px;\n}\n\n.tab-content-bottom {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    bottom: 0px;\n    border-top: solid 1px black;\n    transition-duration: 1s;\n    transition-timing-function: ease-in-out;\n}\n\n.pageContainer.pageOne .tab-content-bottom .parallaxOuterWrap .parallaxInnerWrap {\n    background-image: url(Assets/rack.png);\n}\n\n.pageContainer.pageOne .tab-content-bottom .textWrap {\n    margin-top: calc(var(--logoSize) / 3);\n    padding-left: 50px;\n    padding-right: 50px;\n    width: auto;\n}\n\n.pageContainer.pageTwo .tab-content-bottom {\n    background-color: var(--colorPeachYellow);\n}\n\n.pageContainer.pageThree .tab-content-bottom {\n    background-color: var(--colorBittersweet);\n}\n\n.tab-content-bottom.offscreen {\n    bottom: -1000px;\n}\n\n.parallaxOuterWrap {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.parallaxInnerWrap {\n    position: absolute;\n    width: 110%;\n    height: 110%;\n    background-position: center;\n    background-size: cover;\n    z-index: -1;\n}\n\n@media (max-width: 1024px) {\n    :root {\n        --logoSize: 150px;\n        --pageOneTopHeight: 60vh;\n    }\n\n    .textWrap {\n        width: 80vw;\n        font-size: large;\n    }\n\n    .navBorder {\n        background-size: 400px;\n    }\n\n    .parallaxInnerWrap {\n        width: 100%;\n        height: 100%;\n    }\n\n    .pageContainer.pageOne {\n        grid-template-rows: 3fr 3fr;\n        z-index: 3;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage)
/* harmony export */ });
function createContactPage() {
    const content = document.querySelector('#content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer', 'pageThree');
    content.appendChild(pageContainer);

    const pageTop = document.createElement('div');
    pageTop.classList.add('tab-content-top');
    pageContainer.appendChild(pageTop);

    const pageBottom = document.createElement('div');
    pageBottom.classList.add('tab-content-bottom');
    pageContainer.appendChild(pageBottom);
}



/***/ }),

/***/ "./src/helperMethods.js":
/*!******************************!*\
  !*** ./src/helperMethods.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createParallaxWrap": () => (/* binding */ createParallaxWrap),
/* harmony export */   "parallaxEffect": () => (/* binding */ parallaxEffect),
/* harmony export */   "shiftPageIn": () => (/* binding */ shiftPageIn),
/* harmony export */   "shiftPageOut": () => (/* binding */ shiftPageOut)
/* harmony export */ });
function shiftPageIn(page) {
    const pageContainer = document.querySelector(page);
    const pageTop = pageContainer.querySelector('.tab-content-top');
    const pageBottom = pageContainer.querySelector('.tab-content-bottom');

    pageTop.classList.remove('offscreen');
    pageBottom.classList.remove('offscreen');
}

function shiftPageOut(page) {
    const pageContainer = document.querySelector(page);
    const pageTop = pageContainer.querySelector('.tab-content-top');
    const pageBottom = pageContainer.querySelector('.tab-content-bottom');

    pageTop.classList.add('offscreen');
    pageBottom.classList.add('offscreen');
}

function createParallaxWrap() {
    const parallaxOuterWrap = document.createElement('div');
    parallaxOuterWrap.classList.add('parallaxOuterWrap');
    const parallaxInnerWrap = document.createElement('div');
    parallaxInnerWrap.classList.add('parallaxInnerWrap');

    parallaxOuterWrap.appendChild(parallaxInnerWrap);

    return parallaxOuterWrap;
}

function parallaxEffect(event) {
    this.querySelectorAll('.parallaxInnerWrap').forEach((shift) => {
        const position = 2;
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}



/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _helperMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperMethods */ "./src/helperMethods.js");


function createHomePage() {
    const content = document.querySelector('#content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer', 'pageOne');
    content.appendChild(pageContainer);

    const pageTop = document.createElement('div');
    pageTop.classList.add('tab-content-top');
    pageContainer.appendChild(pageTop);

    const parallaxWrapTop = (0,_helperMethods__WEBPACK_IMPORTED_MODULE_0__.createParallaxWrap)();
    pageTop.appendChild(parallaxWrapTop);

    const outerWrapTop = document.createElement('div');
    const textContentTop = document.createElement('div');
    outerWrapTop.classList.add('outerWrap');
    textContentTop.classList.add('textWrap');
    textContentTop.textContent = "Welcome to Glazed and Confused, where we create edible works of art using only the finest ingredients. Come in and let us take you on a journey of sweet and savory flavors.";
    outerWrapTop.appendChild(textContentTop);
    pageTop.appendChild(outerWrapTop);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    pageTop.appendChild(logo);

    const pageBottom = document.createElement('div');
    pageBottom.classList.add('tab-content-bottom');
    pageContainer.appendChild(pageBottom);

    const parallaxWrapBottom = (0,_helperMethods__WEBPACK_IMPORTED_MODULE_0__.createParallaxWrap)();
    pageBottom.appendChild(parallaxWrapBottom);

    const textContentBottom = document.createElement('div');
    textContentBottom.classList.add('textWrap');
    const hoursList = document.createElement('ul')
    hoursList.classList.add('hoursList');
    const listHeader = document.createElement('div');
    listHeader.classList.add('listHeader');
    listHeader.textContent = 'Hours';
    const mondayListEntry = document.createElement('li');
    mondayListEntry.textContent = 'Mon: 9am - 4pm';
    hoursList.appendChild(mondayListEntry);
    const tuesdayListEntry = document.createElement('li');
    tuesdayListEntry.textContent = 'Tue: 9am - 4pm';
    hoursList.appendChild(tuesdayListEntry);
    const wednesdayListEntry = document.createElement('li');
    wednesdayListEntry.textContent = 'Wed: 10am - 3pm';
    hoursList.appendChild(wednesdayListEntry);
    const thursdayListEntry = document.createElement('li');
    thursdayListEntry.textContent = 'Thu: 9am - 4pm';
    hoursList.appendChild(thursdayListEntry);
    const fridayListEntry = document.createElement('li');
    fridayListEntry.textContent = 'Fri: 9am - 7pm';
    hoursList.appendChild(fridayListEntry);
    const saturdayListEntry = document.createElement('li');
    saturdayListEntry.textContent = 'Sat: 10am - 7pm';
    hoursList.appendChild(saturdayListEntry);
    const sundayListEntry = document.createElement('li');
    sundayListEntry.textContent = 'Sun: Closed';
    hoursList.appendChild(sundayListEntry);

    textContentBottom.appendChild(listHeader);
    textContentBottom.appendChild(hoursList);
    pageBottom.appendChild(textContentBottom);
}



/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuPage": () => (/* binding */ createMenuPage)
/* harmony export */ });
function createMenuPage() {
    const content = document.querySelector('#content');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('pageContainer', 'pageTwo');
    content.appendChild(pageContainer);

    const pageTop = document.createElement('div');
    pageTop.classList.add('tab-content-top');
    pageContainer.appendChild(pageTop);

    const pageBottom = document.createElement('div');
    pageBottom.classList.add('tab-content-bottom');
    pageContainer.appendChild(pageBottom);
}



/***/ }),

/***/ "./src/Assets/donutBorder.svg":
/*!************************************!*\
  !*** ./src/Assets/donutBorder.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e203acb833035eca245.svg";

/***/ }),

/***/ "./src/Assets/donutDisplay2.png":
/*!**************************************!*\
  !*** ./src/Assets/donutDisplay2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9beb928d27823dc5344f.png";

/***/ }),

/***/ "./src/Assets/donutLogoEdit.svg":
/*!**************************************!*\
  !*** ./src/Assets/donutLogoEdit.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cffb095347f61501904.svg";

/***/ }),

/***/ "./src/Assets/rack.png":
/*!*****************************!*\
  !*** ./src/Assets/rack.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86319fdddc42ab7bc390.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homePage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage.js */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");
/* harmony import */ var _helperMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helperMethods */ "./src/helperMethods.js");






const content = document.querySelector('#content');

const navContainer = document.createElement('div');
navContainer.classList.add('navContainer');
content.appendChild(navContainer);

const navBar = document.createElement('div');
navContainer.appendChild(navBar);
navBar.classList.add('navbar');

const navBorder = document.createElement('div');
navBorder.classList.add('navBorder');
navContainer.appendChild(navBorder);

const homeButton = document.createElement('div');
homeButton.textContent = 'Home';
homeButton.classList.add('nav-button');
navBar.appendChild(homeButton);

const menuButton = document.createElement('div');
menuButton.textContent = 'Menu';
menuButton.classList.add('nav-button');
navBar.appendChild(menuButton);

const contactButton = document.createElement('div');
contactButton.textContent = 'Contact';
contactButton.classList.add('nav-button');
navBar.appendChild(contactButton);

(0,_homePage_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
(0,_menuPage__WEBPACK_IMPORTED_MODULE_2__.createMenuPage)();
(0,_contactPage__WEBPACK_IMPORTED_MODULE_3__.createContactPage)();

if (window.screen.width > 1024) {
    document.addEventListener("mousemove", _helperMethods__WEBPACK_IMPORTED_MODULE_4__.parallaxEffect);
}

homeButton.addEventListener('click', () => {
    (0,_helperMethods__WEBPACK_IMPORTED_MODULE_4__.shiftPageIn)('.pageOne');
    (0,_helperMethods__WEBPACK_IMPORTED_MODULE_4__.shiftPageIn)('.pageTwo');
});

menuButton.addEventListener('click', () => {
    (0,_helperMethods__WEBPACK_IMPORTED_MODULE_4__.shiftPageIn)('.pageTwo');
    (0,_helperMethods__WEBPACK_IMPORTED_MODULE_4__.shiftPageOut)('.pageOne');
});

contactButton.addEventListener('click', () => {
    (0,_helperMethods__WEBPACK_IMPORTED_MODULE_4__.shiftPageOut)('.pageOne');
    setTimeout(() => {
        (0,_helperMethods__WEBPACK_IMPORTED_MODULE_4__.shiftPageOut)('.pageTwo');
    }, 200);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0scUJBQXFCLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0s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LDREQUFjO0FBQ2QseURBQWM7QUFDZCwrREFBaUI7O0FBRWpCO0FBQ0EsMkNBQTJDLDBEQUFjO0FBQ3pEOztBQUVBO0FBQ0EsSUFBSSwyREFBVztBQUNmLElBQUksMkRBQVc7QUFDZixDQUFDOztBQUVEO0FBQ0EsSUFBSSwyREFBVztBQUNmLElBQUksNERBQVk7QUFDaEIsQ0FBQzs7QUFFRDtBQUNBLElBQUksNERBQVk7QUFDaEI7QUFDQSxRQUFRLDREQUFZO0FBQ3BCLEtBQUs7QUFDTCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlck1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiQXNzZXRzL2RvbnV0TG9nb0VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiQXNzZXRzL2RvbnV0Qm9yZGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIkFzc2V0cy9kb251dERpc3BsYXkyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIkFzc2V0cy9yYWNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1uYXZCYXJIZWlnaHQ6IDYwcHg7XFxuICAgIC0tbG9nb1NpemU6IDMwMHB4O1xcbiAgICAtLXBhZ2VPbmVUb3BIZWlnaHQ6IDUwdmg7XFxuICAgIC0tY29sb3JMaWdodEJsdWU6IHJnYigxNzYsIDIxNCwgMjE1KTtcXG4gICAgLS1jb2xvclZlcmRpZ3JpczogcmdiKDEwNiwgMTc3LCAxODApO1xcbiAgICAtLXZlcmRpZ3Jpc1ZhbDogMTA2LCAxNzcsIDE4MDtcXG4gICAgLS1jb2xvckR1dGNoV2hpdGU6IHJnYigyNTMsIDIzNCwgMTk3KTtcXG4gICAgLS1jb2xvckNvcmFsUGluazogcmdiKDI1MCwgMTQ0LCAxMjgpO1xcbiAgICAtLWNvbG9ySmFzcGVyOiByZ2IoMjI4LCA5MCwgNzgpO1xcbiAgICAtLWNvbG9yVGVhUm9zZTogcmdiKDI0NywgMjAzLCAyMDApO1xcbiAgICAtLWNvbG9yU3Vuc2V0OiByZ2IoMjMyLCAxOTgsIDEzNSk7XFxuICAgIC0tY29sb3JCaXR0ZXJzd2VldDogcmdiKDI0OCwgMTE4LCA5OCk7XFxuICAgIC0tY29sb3JQZWFjaFllbGxvdzogcmdiKDI1MSwgMjIwLCAxNTcpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ub3V0ZXJXcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0SGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJzTGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRleHRXcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JywgY3Vyc2l2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3JEdXRjaFdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS12ZXJkaWdyaXNWYWwpLCAuNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3JWZXJkaWdyaXMpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggNXB4ICMwMDApO1xcbn1cXG5cXG4udGFiLWNvbnRlbnQtdG9wIC5vdXRlcldyYXAgLnRleHRXcmFwIHtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1uYXZCYXJIZWlnaHQpICsgNjBweCk7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IGNhbGMoY2FsYyhjYWxjKHZhcigtLWxvZ29TaXplKSAvIDIpICsgNXB4KSAqIC0xKTtcXG4gICAgbGVmdDogY2FsYyg1MHZ3IC0gY2FsYyh2YXIoLS1sb2dvU2l6ZSkgLyAyKSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IHZhcigtLWxvZ29TaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1sb2dvU2l6ZSk7XFxuICAgIHotaW5kZXg6IDExO1xcbn1cXG5cXG5ib2R5IHttYXJnaW46IDA7fVxcblxcbi5uYXZDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tbmF2QmFySGVpZ2h0KSA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdmJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsNTcsMTUwKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5uYXZCb3JkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTEwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIHotaW5kZXg6IDExO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlT25lIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1wYWdlT25lVG9wSGVpZ2h0KSAxZnI7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VUd28ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciA1ZnI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VUaHJlZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOGZyIDNmcjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRhYi1jb250ZW50LXRvcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZU9uZSAudGFiLWNvbnRlbnQtdG9wIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgY2FsYyhjYWxjKHZhcigtLWxvZ29TaXplKSAvIDIpIC0gNHB4KTtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZU9uZSAucGFyYWxsYXhPdXRlcldyYXAgLnBhcmFsbGF4SW5uZXJXcmFwIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVR3byAudGFiLWNvbnRlbnQtdG9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JEdXRjaFdoaXRlKTtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVRocmVlIC50YWItY29udGVudC10b3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvckNvcmFsUGluayk7XFxufVxcblxcbi50YWItY29udGVudC10b3Aub2Zmc2NyZWVuIHtcXG4gICAgdG9wOiAtMTAwMHB4O1xcbn1cXG5cXG4udGFiLWNvbnRlbnQtYm90dG9tIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAwcHg7XFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZU9uZSAudGFiLWNvbnRlbnQtYm90dG9tIC5wYXJhbGxheE91dGVyV3JhcCAucGFyYWxsYXhJbm5lcldyYXAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlT25lIC50YWItY29udGVudC1ib3R0b20gLnRleHRXcmFwIHtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1sb2dvU2l6ZSkgLyAzKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVR3byAudGFiLWNvbnRlbnQtYm90dG9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JQZWFjaFllbGxvdyk7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VUaHJlZSAudGFiLWNvbnRlbnQtYm90dG9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JCaXR0ZXJzd2VldCk7XFxufVxcblxcbi50YWItY29udGVudC1ib3R0b20ub2Zmc2NyZWVuIHtcXG4gICAgYm90dG9tOiAtMTAwMHB4O1xcbn1cXG5cXG4ucGFyYWxsYXhPdXRlcldyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucGFyYWxsYXhJbm5lcldyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMTAlO1xcbiAgICBoZWlnaHQ6IDExMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1sb2dvU2l6ZTogMTUwcHg7XFxuICAgICAgICAtLXBhZ2VPbmVUb3BIZWlnaHQ6IDYwdmg7XFxuICAgIH1cXG5cXG4gICAgLnRleHRXcmFwIHtcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgfVxcblxcbiAgICAubmF2Qm9yZGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnBhcmFsbGF4SW5uZXJXcmFwIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5wYWdlQ29udGFpbmVyLnBhZ2VPbmUge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgM2ZyO1xcbiAgICAgICAgei1pbmRleDogMztcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLG9DQUFvQztJQUNwQywrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxxQ0FBcUM7SUFDckMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QiwrQ0FBK0M7SUFDL0Msa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsd0RBQXdEO0lBQ3hELDRDQUE0QztJQUM1Qyx5REFBK0M7SUFDL0MsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQSxNQUFNLFNBQVMsQ0FBQzs7QUFFaEI7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseURBQTZDO0lBQzdDLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLHlEQUErQztBQUNuRDs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0kseURBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLFVBQVU7SUFDZDtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1uYXZCYXJIZWlnaHQ6IDYwcHg7XFxuICAgIC0tbG9nb1NpemU6IDMwMHB4O1xcbiAgICAtLXBhZ2VPbmVUb3BIZWlnaHQ6IDUwdmg7XFxuICAgIC0tY29sb3JMaWdodEJsdWU6IHJnYigxNzYsIDIxNCwgMjE1KTtcXG4gICAgLS1jb2xvclZlcmRpZ3JpczogcmdiKDEwNiwgMTc3LCAxODApO1xcbiAgICAtLXZlcmRpZ3Jpc1ZhbDogMTA2LCAxNzcsIDE4MDtcXG4gICAgLS1jb2xvckR1dGNoV2hpdGU6IHJnYigyNTMsIDIzNCwgMTk3KTtcXG4gICAgLS1jb2xvckNvcmFsUGluazogcmdiKDI1MCwgMTQ0LCAxMjgpO1xcbiAgICAtLWNvbG9ySmFzcGVyOiByZ2IoMjI4LCA5MCwgNzgpO1xcbiAgICAtLWNvbG9yVGVhUm9zZTogcmdiKDI0NywgMjAzLCAyMDApO1xcbiAgICAtLWNvbG9yU3Vuc2V0OiByZ2IoMjMyLCAxOTgsIDEzNSk7XFxuICAgIC0tY29sb3JCaXR0ZXJzd2VldDogcmdiKDI0OCwgMTE4LCA5OCk7XFxuICAgIC0tY29sb3JQZWFjaFllbGxvdzogcmdiKDI1MSwgMjIwLCAxNTcpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ub3V0ZXJXcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0SGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJzTGlzdCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLnRleHRXcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JywgY3Vyc2l2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3JEdXRjaFdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS12ZXJkaWdyaXNWYWwpLCAuNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0tY29sb3JWZXJkaWdyaXMpO1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggNXB4ICMwMDApO1xcbn1cXG5cXG4udGFiLWNvbnRlbnQtdG9wIC5vdXRlcldyYXAgLnRleHRXcmFwIHtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1uYXZCYXJIZWlnaHQpICsgNjBweCk7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IGNhbGMoY2FsYyhjYWxjKHZhcigtLWxvZ29TaXplKSAvIDIpICsgNXB4KSAqIC0xKTtcXG4gICAgbGVmdDogY2FsYyg1MHZ3IC0gY2FsYyh2YXIoLS1sb2dvU2l6ZSkgLyAyKSk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChBc3NldHMvZG9udXRMb2dvRWRpdC5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiB2YXIoLS1sb2dvU2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tbG9nb1NpemUpO1xcbiAgICB6LWluZGV4OiAxMTtcXG59XFxuXFxuYm9keSB7bWFyZ2luOiAwO31cXG5cXG4ubmF2Q29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLW5hdkJhckhlaWdodCkgNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LDU3LDE1MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubmF2Qm9yZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoQXNzZXRzL2RvbnV0Qm9yZGVyLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcXG4gICAgei1pbmRleDogMTA7XFxufVxcblxcbi5uYXYtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIHotaW5kZXg6IDExO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlT25lIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1wYWdlT25lVG9wSGVpZ2h0KSAxZnI7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VUd28ge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciA1ZnI7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VUaHJlZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogOGZyIDNmcjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRhYi1jb250ZW50LXRvcCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZU9uZSAudGFiLWNvbnRlbnQtdG9wIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgY2FsYyhjYWxjKHZhcigtLWxvZ29TaXplKSAvIDIpIC0gNHB4KTtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZU9uZSAucGFyYWxsYXhPdXRlcldyYXAgLnBhcmFsbGF4SW5uZXJXcmFwIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEFzc2V0cy9kb251dERpc3BsYXkyLnBuZyk7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VUd28gLnRhYi1jb250ZW50LXRvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yRHV0Y2hXaGl0ZSk7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VUaHJlZSAudGFiLWNvbnRlbnQtdG9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JDb3JhbFBpbmspO1xcbn1cXG5cXG4udGFiLWNvbnRlbnQtdG9wLm9mZnNjcmVlbiB7XFxuICAgIHRvcDogLTEwMDBweDtcXG59XFxuXFxuLnRhYi1jb250ZW50LWJvdHRvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VPbmUgLnRhYi1jb250ZW50LWJvdHRvbSAucGFyYWxsYXhPdXRlcldyYXAgLnBhcmFsbGF4SW5uZXJXcmFwIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEFzc2V0cy9yYWNrLnBuZyk7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VPbmUgLnRhYi1jb250ZW50LWJvdHRvbSAudGV4dFdyYXAge1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWxvZ29TaXplKSAvIDMpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlVHdvIC50YWItY29udGVudC1ib3R0b20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvclBlYWNoWWVsbG93KTtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVRocmVlIC50YWItY29udGVudC1ib3R0b20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvckJpdHRlcnN3ZWV0KTtcXG59XFxuXFxuLnRhYi1jb250ZW50LWJvdHRvbS5vZmZzY3JlZW4ge1xcbiAgICBib3R0b206IC0xMDAwcHg7XFxufVxcblxcbi5wYXJhbGxheE91dGVyV3JhcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wYXJhbGxheElubmVyV3JhcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDExMCU7XFxuICAgIGhlaWdodDogMTEwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLWxvZ29TaXplOiAxNTBweDtcXG4gICAgICAgIC0tcGFnZU9uZVRvcEhlaWdodDogNjB2aDtcXG4gICAgfVxcblxcbiAgICAudGV4dFdyYXAge1xcbiAgICAgICAgd2lkdGg6IDgwdnc7XFxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICB9XFxuXFxuICAgIC5uYXZCb3JkZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAucGFyYWxsYXhJbm5lcldyYXAge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnBhZ2VDb250YWluZXIucGFnZU9uZSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAzZnI7XFxuICAgICAgICB6LWluZGV4OiAzO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZUNvbnRhaW5lcicsICdwYWdlVGhyZWUnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpO1xuXG4gICAgY29uc3QgcGFnZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VUb3AuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQtdG9wJyk7XG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlVG9wKTtcblxuICAgIGNvbnN0IHBhZ2VCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlQm90dG9tLmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50LWJvdHRvbScpO1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUJvdHRvbSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlQ29udGFjdFBhZ2V9OyIsImZ1bmN0aW9uIHNoaWZ0UGFnZUluKHBhZ2UpIHtcbiAgICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYWdlKTtcbiAgICBjb25zdCBwYWdlVG9wID0gcGFnZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRlbnQtdG9wJyk7XG4gICAgY29uc3QgcGFnZUJvdHRvbSA9IHBhZ2VDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhYi1jb250ZW50LWJvdHRvbScpO1xuXG4gICAgcGFnZVRvcC5jbGFzc0xpc3QucmVtb3ZlKCdvZmZzY3JlZW4nKTtcbiAgICBwYWdlQm90dG9tLmNsYXNzTGlzdC5yZW1vdmUoJ29mZnNjcmVlbicpO1xufVxuXG5mdW5jdGlvbiBzaGlmdFBhZ2VPdXQocGFnZSkge1xuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhZ2UpO1xuICAgIGNvbnN0IHBhZ2VUb3AgPSBwYWdlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YWItY29udGVudC10b3AnKTtcbiAgICBjb25zdCBwYWdlQm90dG9tID0gcGFnZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRlbnQtYm90dG9tJyk7XG5cbiAgICBwYWdlVG9wLmNsYXNzTGlzdC5hZGQoJ29mZnNjcmVlbicpO1xuICAgIHBhZ2VCb3R0b20uY2xhc3NMaXN0LmFkZCgnb2Zmc2NyZWVuJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhcmFsbGF4V3JhcCgpIHtcbiAgICBjb25zdCBwYXJhbGxheE91dGVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhcmFsbGF4T3V0ZXJXcmFwLmNsYXNzTGlzdC5hZGQoJ3BhcmFsbGF4T3V0ZXJXcmFwJyk7XG4gICAgY29uc3QgcGFyYWxsYXhJbm5lcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJhbGxheElubmVyV3JhcC5jbGFzc0xpc3QuYWRkKCdwYXJhbGxheElubmVyV3JhcCcpO1xuXG4gICAgcGFyYWxsYXhPdXRlcldyYXAuYXBwZW5kQ2hpbGQocGFyYWxsYXhJbm5lcldyYXApO1xuXG4gICAgcmV0dXJuIHBhcmFsbGF4T3V0ZXJXcmFwO1xufVxuXG5mdW5jdGlvbiBwYXJhbGxheEVmZmVjdChldmVudCkge1xuICAgIHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLnBhcmFsbGF4SW5uZXJXcmFwJykuZm9yRWFjaCgoc2hpZnQpID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAyO1xuICAgICAgICBjb25zdCB4ID0gKHdpbmRvdy5pbm5lcldpZHRoIC0gZXZlbnQucGFnZVggKiBwb3NpdGlvbikgLyA5MDtcbiAgICAgICAgY29uc3QgeSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBldmVudC5wYWdlWSAqIHBvc2l0aW9uKSAvIDkwO1xuXG4gICAgICAgIHNoaWZ0LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7eH1weCkgdHJhbnNsYXRlWSgke3l9cHgpYDtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHtzaGlmdFBhZ2VJbiwgc2hpZnRQYWdlT3V0LCBwYXJhbGxheEVmZmVjdCwgY3JlYXRlUGFyYWxsYXhXcmFwfTsiLCJpbXBvcnQgeyBjcmVhdGVQYXJhbGxheFdyYXAgfSBmcm9tIFwiLi9oZWxwZXJNZXRob2RzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2VDb250YWluZXInLCAncGFnZU9uZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBwYWdlVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZVRvcC5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudC10b3AnKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUb3ApO1xuXG4gICAgY29uc3QgcGFyYWxsYXhXcmFwVG9wID0gY3JlYXRlUGFyYWxsYXhXcmFwKCk7XG4gICAgcGFnZVRvcC5hcHBlbmRDaGlsZChwYXJhbGxheFdyYXBUb3ApO1xuXG4gICAgY29uc3Qgb3V0ZXJXcmFwVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGV4dENvbnRlbnRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdXRlcldyYXBUb3AuY2xhc3NMaXN0LmFkZCgnb3V0ZXJXcmFwJyk7XG4gICAgdGV4dENvbnRlbnRUb3AuY2xhc3NMaXN0LmFkZCgndGV4dFdyYXAnKTtcbiAgICB0ZXh0Q29udGVudFRvcC50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBHbGF6ZWQgYW5kIENvbmZ1c2VkLCB3aGVyZSB3ZSBjcmVhdGUgZWRpYmxlIHdvcmtzIG9mIGFydCB1c2luZyBvbmx5IHRoZSBmaW5lc3QgaW5ncmVkaWVudHMuIENvbWUgaW4gYW5kIGxldCB1cyB0YWtlIHlvdSBvbiBhIGpvdXJuZXkgb2Ygc3dlZXQgYW5kIHNhdm9yeSBmbGF2b3JzLlwiO1xuICAgIG91dGVyV3JhcFRvcC5hcHBlbmRDaGlsZCh0ZXh0Q29udGVudFRvcCk7XG4gICAgcGFnZVRvcC5hcHBlbmRDaGlsZChvdXRlcldyYXBUb3ApO1xuXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xuICAgIHBhZ2VUb3AuYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgICBjb25zdCBwYWdlQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUJvdHRvbS5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudC1ib3R0b20nKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VCb3R0b20pO1xuXG4gICAgY29uc3QgcGFyYWxsYXhXcmFwQm90dG9tID0gY3JlYXRlUGFyYWxsYXhXcmFwKCk7XG4gICAgcGFnZUJvdHRvbS5hcHBlbmRDaGlsZChwYXJhbGxheFdyYXBCb3R0b20pO1xuXG4gICAgY29uc3QgdGV4dENvbnRlbnRCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXh0Q29udGVudEJvdHRvbS5jbGFzc0xpc3QuYWRkKCd0ZXh0V3JhcCcpO1xuICAgIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICBob3Vyc0xpc3QuY2xhc3NMaXN0LmFkZCgnaG91cnNMaXN0Jyk7XG4gICAgY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbGlzdEhlYWRlcicpO1xuICAgIGxpc3RIZWFkZXIudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuICAgIGNvbnN0IG1vbmRheUxpc3RFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbW9uZGF5TGlzdEVudHJ5LnRleHRDb250ZW50ID0gJ01vbjogOWFtIC0gNHBtJztcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQobW9uZGF5TGlzdEVudHJ5KTtcbiAgICBjb25zdCB0dWVzZGF5TGlzdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0dWVzZGF5TGlzdEVudHJ5LnRleHRDb250ZW50ID0gJ1R1ZTogOWFtIC0gNHBtJztcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQodHVlc2RheUxpc3RFbnRyeSk7XG4gICAgY29uc3Qgd2VkbmVzZGF5TGlzdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB3ZWRuZXNkYXlMaXN0RW50cnkudGV4dENvbnRlbnQgPSAnV2VkOiAxMGFtIC0gM3BtJztcbiAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQod2VkbmVzZGF5TGlzdEVudHJ5KTtcbiAgICBjb25zdCB0aHVyc2RheUxpc3RFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGh1cnNkYXlMaXN0RW50cnkudGV4dENvbnRlbnQgPSAnVGh1OiA5YW0gLSA0cG0nO1xuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZCh0aHVyc2RheUxpc3RFbnRyeSk7XG4gICAgY29uc3QgZnJpZGF5TGlzdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBmcmlkYXlMaXN0RW50cnkudGV4dENvbnRlbnQgPSAnRnJpOiA5YW0gLSA3cG0nO1xuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChmcmlkYXlMaXN0RW50cnkpO1xuICAgIGNvbnN0IHNhdHVyZGF5TGlzdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBzYXR1cmRheUxpc3RFbnRyeS50ZXh0Q29udGVudCA9ICdTYXQ6IDEwYW0gLSA3cG0nO1xuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChzYXR1cmRheUxpc3RFbnRyeSk7XG4gICAgY29uc3Qgc3VuZGF5TGlzdEVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBzdW5kYXlMaXN0RW50cnkudGV4dENvbnRlbnQgPSAnU3VuOiBDbG9zZWQnO1xuICAgIGhvdXJzTGlzdC5hcHBlbmRDaGlsZChzdW5kYXlMaXN0RW50cnkpO1xuXG4gICAgdGV4dENvbnRlbnRCb3R0b20uYXBwZW5kQ2hpbGQobGlzdEhlYWRlcik7XG4gICAgdGV4dENvbnRlbnRCb3R0b20uYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcbiAgICBwYWdlQm90dG9tLmFwcGVuZENoaWxkKHRleHRDb250ZW50Qm90dG9tKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVIb21lUGFnZX07IiwiZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZUNvbnRhaW5lcicsICdwYWdlVHdvJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHBhZ2VUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlVG9wLmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50LXRvcCcpO1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRvcCk7XG5cbiAgICBjb25zdCBwYWdlQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUJvdHRvbS5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudC1ib3R0b20nKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VCb3R0b20pO1xufVxuXG5leHBvcnQge2NyZWF0ZU1lbnVQYWdlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UsIHJlbW92ZUhvbWVQYWdlIH0gZnJvbSAnLi9ob21lUGFnZS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gJy4vbWVudVBhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tICcuL2NvbnRhY3RQYWdlJztcbmltcG9ydCB7IHNoaWZ0UGFnZUluLCBzaGlmdFBhZ2VPdXQsIHBhcmFsbGF4RWZmZWN0IH0gZnJvbSAnLi9oZWxwZXJNZXRob2RzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdkNvbnRhaW5lcicpO1xuY29udGVudC5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXIpO1xubmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG5jb25zdCBuYXZCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm5hdkJvcmRlci5jbGFzc0xpc3QuYWRkKCduYXZCb3JkZXInKTtcbm5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCb3JkZXIpO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG5uYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XG5tZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbm5hdkJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbmNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xubmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG5jcmVhdGVIb21lUGFnZSgpO1xuY3JlYXRlTWVudVBhZ2UoKTtcbmNyZWF0ZUNvbnRhY3RQYWdlKCk7XG5cbmlmICh3aW5kb3cuc2NyZWVuLndpZHRoID4gMTAyNCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcGFyYWxsYXhFZmZlY3QpO1xufVxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNoaWZ0UGFnZUluKCcucGFnZU9uZScpO1xuICAgIHNoaWZ0UGFnZUluKCcucGFnZVR3bycpO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hpZnRQYWdlSW4oJy5wYWdlVHdvJyk7XG4gICAgc2hpZnRQYWdlT3V0KCcucGFnZU9uZScpO1xufSk7XG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hpZnRQYWdlT3V0KCcucGFnZU9uZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaGlmdFBhZ2VPdXQoJy5wYWdlVHdvJyk7XG4gICAgfSwgMjAwKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==