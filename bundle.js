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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --navBarHeight: 60px;\n    --logoSize: 400px;\n    --pageOneTopHeight: 65vh;\n    --colorLightBlue: rgb(176, 214, 215);\n    --colorVerdigris: rgb(106, 177, 180);\n    --verdigrisVal: 106, 177, 180;\n    --colorDutchWhite: rgb(253, 234, 197);\n    --colorCoralPink: rgb(250, 144, 128);\n    --colorJasper: rgb(228, 90, 78);\n    --colorTeaRose: rgb(247, 203, 200);\n    --colorSunset: rgb(232, 198, 135);\n    --colorBittersweet: rgb(248, 118, 98);\n    --colorPeachYellow: rgb(251, 220, 157);\n}\n\n#content {\n    width: 100%;\n    height: 100vh;\n    overflow: hidden;\n}\n\n.outerWrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.textWrap {\n    width: 30vw;\n    padding: 20px;\n    margin-top: calc(var(--navBarHeight) + 60px);\n    font-size: x-large;\n    font-family: 'Caveat', cursive;\n    text-align: center;\n    color: var(--colorDutchWhite);\n    background-color: rgba(var(--verdigrisVal), .6);\n    border-radius: 6px;\n    border: solid 2px var(--colorVerdigris);\n    filter: drop-shadow(0px 0px 5px #000);\n}\n\n.logo {\n    position: relative;\n    left: calc(50vw - calc(var(--logoSize) / 2));\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-size: cover;\n    width: var(--logoSize);\n    height: var(--logoSize);\n    z-index: 11;\n}\n\nbody {margin: 0;}\n\n.navContainer {\n    position: absolute;\n    display: grid;\n    grid-template-rows: var(--navBarHeight) 60px;\n    width: 100%;\n}\n\n.navbar {\n    background-color: rgb(254,57,150);\n    display: flex;\n    gap: 30px;\n    justify-content: center;\n    align-items: center;\n    z-index: 10;\n}\n\n.navBorder {\n    position: relative;\n    top: -10px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 500px;\n    background-repeat: repeat-x;\n    z-index: 10;\n}\n\n.nav-button {\n    position: relative;\n    top: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    height: 30px;\n    width: 80px;\n    transition: .5s;\n    font-family: 'Caveat', cursive;\n    text-decoration: underline;\n    font-size: x-large;\n    z-index: 11;\n}\n\n.nav-button:hover {\n    transform: scale(1.2);\n    cursor: pointer;\n}\n\n.pageContainer {\n    position: absolute;\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n}\n\n.pageContainer.pageOne {\n    grid-template-rows: var(--pageOneTopHeight) 40vh;\n    z-index: 3;\n}\n\n.pageContainer.pageTwo {\n    grid-template-rows: 3fr 5fr;\n    z-index: 2;\n}\n\n.pageContainer.pageThree {\n    grid-template-rows: 8fr 3fr;\n    z-index: 1;\n}\n\n.tab-content-top {\n    position: relative;\n    top: 0px;\n    border-bottom: solid 1px black;\n    transition-duration: 1s;\n    transition-timing-function: ease-in-out;\n}\n\n.pageContainer.pageOne .tab-content-top {\n    display: grid;\n    grid-template-rows: 1fr calc(calc(var(--logoSize) / 2) - 4px);\n}\n\n.pageContainer.pageOne .parallaxOuterWrap .parallaxInnerWrap {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.pageContainer.pageTwo .tab-content-top {\n    background-color: var(--colorDutchWhite);\n}\n\n.pageContainer.pageThree .tab-content-top {\n    background-color: var(--colorCoralPink);\n}\n\n.tab-content-top.offscreen {\n    top: -1000px;\n}\n\n.tab-content-bottom {\n    position: relative;\n    bottom: 0px;\n    border-top: solid 1px black;\n    transition-duration: 1s;\n    transition-timing-function: ease-in-out;\n}\n\n.pageContainer.pageOne .tab-content-bottom .parallaxOuterWrap .parallaxInnerWrap {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n.pageContainer.pageTwo .tab-content-bottom {\n    background-color: var(--colorPeachYellow);\n}\n\n.pageContainer.pageThree .tab-content-bottom {\n    background-color: var(--colorBittersweet);\n}\n\n.tab-content-bottom.offscreen {\n    bottom: -1000px;\n}\n\n.parallaxOuterWrap {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.parallaxInnerWrap {\n    position: absolute;\n    width: 110%;\n    height: 110%;\n    background-position: center;\n    background-size: cover;\n    z-index: -1;\n}\n\n@media (max-width: 1024px) {\n    :root {\n        --logoSize: 250px;\n    }\n\n    .textWrap {\n        width: 80vw;\n    }\n\n    .navBorder {\n        background-size: 400px;\n    }\n\n    .parallaxInnerWrap {\n        width: 100%;\n        height: 100%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,wBAAwB;IACxB,oCAAoC;IACpC,oCAAoC;IACpC,6BAA6B;IAC7B,qCAAqC;IACrC,oCAAoC;IACpC,+BAA+B;IAC/B,kCAAkC;IAClC,iCAAiC;IACjC,qCAAqC;IACrC,sCAAsC;AAC1C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,4CAA4C;IAC5C,kBAAkB;IAClB,8BAA8B;IAC9B,kBAAkB;IAClB,6BAA6B;IAC7B,+CAA+C;IAC/C,kBAAkB;IAClB,uCAAuC;IACvC,qCAAqC;AACzC;;AAEA;IACI,kBAAkB;IAClB,4CAA4C;IAC5C,yDAA+C;IAC/C,2BAA2B;IAC3B,sBAAsB;IACtB,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;AACf;;AAEA,MAAM,SAAS,CAAC;;AAEhB;IACI,kBAAkB;IAClB,aAAa;IACb,4CAA4C;IAC5C,WAAW;AACf;;AAEA;IACI,iCAAiC;IACjC,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,yDAA6C;IAC7C,sBAAsB;IACtB,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,8BAA8B;IAC9B,0BAA0B;IAC1B,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gDAAgD;IAChD,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,8BAA8B;IAC9B,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,6DAA6D;AACjE;;AAEA;IACI,yDAA+C;AACnD;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,2BAA2B;IAC3B,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,yDAAsC;AAC1C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,2BAA2B;IAC3B,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI;QACI,iBAAiB;IACrB;;IAEA;QACI,WAAW;IACf;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,WAAW;QACX,YAAY;IAChB;AACJ","sourcesContent":[":root {\n    --navBarHeight: 60px;\n    --logoSize: 400px;\n    --pageOneTopHeight: 65vh;\n    --colorLightBlue: rgb(176, 214, 215);\n    --colorVerdigris: rgb(106, 177, 180);\n    --verdigrisVal: 106, 177, 180;\n    --colorDutchWhite: rgb(253, 234, 197);\n    --colorCoralPink: rgb(250, 144, 128);\n    --colorJasper: rgb(228, 90, 78);\n    --colorTeaRose: rgb(247, 203, 200);\n    --colorSunset: rgb(232, 198, 135);\n    --colorBittersweet: rgb(248, 118, 98);\n    --colorPeachYellow: rgb(251, 220, 157);\n}\n\n#content {\n    width: 100%;\n    height: 100vh;\n    overflow: hidden;\n}\n\n.outerWrap {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.textWrap {\n    width: 30vw;\n    padding: 20px;\n    margin-top: calc(var(--navBarHeight) + 60px);\n    font-size: x-large;\n    font-family: 'Caveat', cursive;\n    text-align: center;\n    color: var(--colorDutchWhite);\n    background-color: rgba(var(--verdigrisVal), .6);\n    border-radius: 6px;\n    border: solid 2px var(--colorVerdigris);\n    filter: drop-shadow(0px 0px 5px #000);\n}\n\n.logo {\n    position: relative;\n    left: calc(50vw - calc(var(--logoSize) / 2));\n    background-image: url(Assets/donutLogoEdit.svg);\n    background-position: center;\n    background-size: cover;\n    width: var(--logoSize);\n    height: var(--logoSize);\n    z-index: 11;\n}\n\nbody {margin: 0;}\n\n.navContainer {\n    position: absolute;\n    display: grid;\n    grid-template-rows: var(--navBarHeight) 60px;\n    width: 100%;\n}\n\n.navbar {\n    background-color: rgb(254,57,150);\n    display: flex;\n    gap: 30px;\n    justify-content: center;\n    align-items: center;\n    z-index: 10;\n}\n\n.navBorder {\n    position: relative;\n    top: -10px;\n    background-image: url(Assets/donutBorder.svg);\n    background-size: 500px;\n    background-repeat: repeat-x;\n    z-index: 10;\n}\n\n.nav-button {\n    position: relative;\n    top: 4px;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    height: 30px;\n    width: 80px;\n    transition: .5s;\n    font-family: 'Caveat', cursive;\n    text-decoration: underline;\n    font-size: x-large;\n    z-index: 11;\n}\n\n.nav-button:hover {\n    transform: scale(1.2);\n    cursor: pointer;\n}\n\n.pageContainer {\n    position: absolute;\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    overflow: hidden;\n}\n\n.pageContainer.pageOne {\n    grid-template-rows: var(--pageOneTopHeight) 40vh;\n    z-index: 3;\n}\n\n.pageContainer.pageTwo {\n    grid-template-rows: 3fr 5fr;\n    z-index: 2;\n}\n\n.pageContainer.pageThree {\n    grid-template-rows: 8fr 3fr;\n    z-index: 1;\n}\n\n.tab-content-top {\n    position: relative;\n    top: 0px;\n    border-bottom: solid 1px black;\n    transition-duration: 1s;\n    transition-timing-function: ease-in-out;\n}\n\n.pageContainer.pageOne .tab-content-top {\n    display: grid;\n    grid-template-rows: 1fr calc(calc(var(--logoSize) / 2) - 4px);\n}\n\n.pageContainer.pageOne .parallaxOuterWrap .parallaxInnerWrap {\n    background-image: url(Assets/donutDisplay2.png);\n}\n\n.pageContainer.pageTwo .tab-content-top {\n    background-color: var(--colorDutchWhite);\n}\n\n.pageContainer.pageThree .tab-content-top {\n    background-color: var(--colorCoralPink);\n}\n\n.tab-content-top.offscreen {\n    top: -1000px;\n}\n\n.tab-content-bottom {\n    position: relative;\n    bottom: 0px;\n    border-top: solid 1px black;\n    transition-duration: 1s;\n    transition-timing-function: ease-in-out;\n}\n\n.pageContainer.pageOne .tab-content-bottom .parallaxOuterWrap .parallaxInnerWrap {\n    background-image: url(Assets/rack.png);\n}\n\n.pageContainer.pageTwo .tab-content-bottom {\n    background-color: var(--colorPeachYellow);\n}\n\n.pageContainer.pageThree .tab-content-bottom {\n    background-color: var(--colorBittersweet);\n}\n\n.tab-content-bottom.offscreen {\n    bottom: -1000px;\n}\n\n.parallaxOuterWrap {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n.parallaxInnerWrap {\n    position: absolute;\n    width: 110%;\n    height: 110%;\n    background-position: center;\n    background-size: cover;\n    z-index: -1;\n}\n\n@media (max-width: 1024px) {\n    :root {\n        --logoSize: 250px;\n    }\n\n    .textWrap {\n        width: 80vw;\n    }\n\n    .navBorder {\n        background-size: 400px;\n    }\n\n    .parallaxInnerWrap {\n        width: 100%;\n        height: 100%;\n    }\n}"],"sourceRoot":""}]);
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

    const outerWrap = document.createElement('div');
    const textContentTop = document.createElement('div');
    outerWrap.classList.add('outerWrap');
    textContentTop.classList.add('textWrap');
    textContentTop.textContent = "Welcome to Glazed and Confused, where we create edible works of art using only the finest ingredients. Come in and let us take you on a journey of sweet and savory flavors.";
    outerWrap.appendChild(textContentTop);
    pageTop.appendChild(outerWrap);

    const logo = document.createElement('div');
    logo.classList.add('logo');
    pageTop.appendChild(logo);

    const pageBottom = document.createElement('div');
    pageBottom.classList.add('tab-content-bottom');
    pageContainer.appendChild(pageBottom);

    const parallaxWrapBottom = (0,_helperMethods__WEBPACK_IMPORTED_MODULE_0__.createParallaxWrap)();
    pageBottom.appendChild(parallaxWrapBottom);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDREQUFjO0FBQ2QseURBQWM7QUFDZCwrREFBaUI7O0FBRWpCO0FBQ0EsMkNBQTJDLDBEQUFjO0FBQ3pEOztBQUVBO0FBQ0EsSUFBSSwyREFBVztBQUNmLElBQUksMkRBQVc7QUFDZixDQUFDOztBQUVEO0FBQ0EsSUFBSSwyREFBVztBQUNmLElBQUksNERBQVk7QUFDaEIsQ0FBQzs7QUFFRDtBQUNBLElBQUksNERBQVk7QUFDaEI7QUFDQSxRQUFRLDREQUFZO0FBQ3BCLEtBQUs7QUFDTCxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlbHBlck1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiQXNzZXRzL2RvbnV0TG9nb0VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiQXNzZXRzL2RvbnV0Qm9yZGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIkFzc2V0cy9kb251dERpc3BsYXkyLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIkFzc2V0cy9yYWNrLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1uYXZCYXJIZWlnaHQ6IDYwcHg7XFxuICAgIC0tbG9nb1NpemU6IDQwMHB4O1xcbiAgICAtLXBhZ2VPbmVUb3BIZWlnaHQ6IDY1dmg7XFxuICAgIC0tY29sb3JMaWdodEJsdWU6IHJnYigxNzYsIDIxNCwgMjE1KTtcXG4gICAgLS1jb2xvclZlcmRpZ3JpczogcmdiKDEwNiwgMTc3LCAxODApO1xcbiAgICAtLXZlcmRpZ3Jpc1ZhbDogMTA2LCAxNzcsIDE4MDtcXG4gICAgLS1jb2xvckR1dGNoV2hpdGU6IHJnYigyNTMsIDIzNCwgMTk3KTtcXG4gICAgLS1jb2xvckNvcmFsUGluazogcmdiKDI1MCwgMTQ0LCAxMjgpO1xcbiAgICAtLWNvbG9ySmFzcGVyOiByZ2IoMjI4LCA5MCwgNzgpO1xcbiAgICAtLWNvbG9yVGVhUm9zZTogcmdiKDI0NywgMjAzLCAyMDApO1xcbiAgICAtLWNvbG9yU3Vuc2V0OiByZ2IoMjMyLCAxOTgsIDEzNSk7XFxuICAgIC0tY29sb3JCaXR0ZXJzd2VldDogcmdiKDI0OCwgMTE4LCA5OCk7XFxuICAgIC0tY29sb3JQZWFjaFllbGxvdzogcmdiKDI1MSwgMjIwLCAxNTcpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ub3V0ZXJXcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0V3JhcCB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLW5hdkJhckhlaWdodCkgKyA2MHB4KTtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yRHV0Y2hXaGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tdmVyZGlncmlzVmFsKSwgLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yVmVyZGlncmlzKTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDVweCAjMDAwKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIGNhbGModmFyKC0tbG9nb1NpemUpIC8gMikpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiB2YXIoLS1sb2dvU2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tbG9nb1NpemUpO1xcbiAgICB6LWluZGV4OiAxMTtcXG59XFxuXFxuYm9keSB7bWFyZ2luOiAwO31cXG5cXG4ubmF2Q29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLW5hdkJhckhlaWdodCkgNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LDU3LDE1MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubmF2Qm9yZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHRyYW5zaXRpb246IC41cztcXG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnLCBjdXJzaXZlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICB6LWluZGV4OiAxMTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZU9uZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tcGFnZU9uZVRvcEhlaWdodCkgNDB2aDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVR3byB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDVmcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVRocmVlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgM2ZyO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFiLWNvbnRlbnQtdG9wIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlT25lIC50YWItY29udGVudC10b3Age1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBjYWxjKGNhbGModmFyKC0tbG9nb1NpemUpIC8gMikgLSA0cHgpO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlT25lIC5wYXJhbGxheE91dGVyV3JhcCAucGFyYWxsYXhJbm5lcldyYXAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlVHdvIC50YWItY29udGVudC10b3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvckR1dGNoV2hpdGUpO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlVGhyZWUgLnRhYi1jb250ZW50LXRvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yQ29yYWxQaW5rKTtcXG59XFxuXFxuLnRhYi1jb250ZW50LXRvcC5vZmZzY3JlZW4ge1xcbiAgICB0b3A6IC0xMDAwcHg7XFxufVxcblxcbi50YWItY29udGVudC1ib3R0b20ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VPbmUgLnRhYi1jb250ZW50LWJvdHRvbSAucGFyYWxsYXhPdXRlcldyYXAgLnBhcmFsbGF4SW5uZXJXcmFwIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVR3byAudGFiLWNvbnRlbnQtYm90dG9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JQZWFjaFllbGxvdyk7XFxufVxcblxcbi5wYWdlQ29udGFpbmVyLnBhZ2VUaHJlZSAudGFiLWNvbnRlbnQtYm90dG9tIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JCaXR0ZXJzd2VldCk7XFxufVxcblxcbi50YWItY29udGVudC1ib3R0b20ub2Zmc2NyZWVuIHtcXG4gICAgYm90dG9tOiAtMTAwMHB4O1xcbn1cXG5cXG4ucGFyYWxsYXhPdXRlcldyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucGFyYWxsYXhJbm5lcldyYXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMTAlO1xcbiAgICBoZWlnaHQ6IDExMCU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1sb2dvU2l6ZTogMjUwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRleHRXcmFwIHtcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICB9XFxuXFxuICAgIC5uYXZCb3JkZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDBweDtcXG4gICAgfVxcblxcbiAgICAucGFyYWxsYXhJbm5lcldyYXAge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLHFDQUFxQztJQUNyQyxvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMscUNBQXFDO0lBQ3JDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsK0NBQStDO0lBQy9DLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1Qyx5REFBK0M7SUFDL0MsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQSxNQUFNLFNBQVMsQ0FBQzs7QUFFaEI7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRDQUE0QztJQUM1QyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseURBQTZDO0lBQzdDLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZEQUE2RDtBQUNqRTs7QUFFQTtJQUNJLHlEQUErQztBQUNuRDs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0kseURBQXNDO0FBQzFDOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1uYXZCYXJIZWlnaHQ6IDYwcHg7XFxuICAgIC0tbG9nb1NpemU6IDQwMHB4O1xcbiAgICAtLXBhZ2VPbmVUb3BIZWlnaHQ6IDY1dmg7XFxuICAgIC0tY29sb3JMaWdodEJsdWU6IHJnYigxNzYsIDIxNCwgMjE1KTtcXG4gICAgLS1jb2xvclZlcmRpZ3JpczogcmdiKDEwNiwgMTc3LCAxODApO1xcbiAgICAtLXZlcmRpZ3Jpc1ZhbDogMTA2LCAxNzcsIDE4MDtcXG4gICAgLS1jb2xvckR1dGNoV2hpdGU6IHJnYigyNTMsIDIzNCwgMTk3KTtcXG4gICAgLS1jb2xvckNvcmFsUGluazogcmdiKDI1MCwgMTQ0LCAxMjgpO1xcbiAgICAtLWNvbG9ySmFzcGVyOiByZ2IoMjI4LCA5MCwgNzgpO1xcbiAgICAtLWNvbG9yVGVhUm9zZTogcmdiKDI0NywgMjAzLCAyMDApO1xcbiAgICAtLWNvbG9yU3Vuc2V0OiByZ2IoMjMyLCAxOTgsIDEzNSk7XFxuICAgIC0tY29sb3JCaXR0ZXJzd2VldDogcmdiKDI0OCwgMTE4LCA5OCk7XFxuICAgIC0tY29sb3JQZWFjaFllbGxvdzogcmdiKDI1MSwgMjIwLCAxNTcpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ub3V0ZXJXcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50ZXh0V3JhcCB7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLW5hdkJhckhlaWdodCkgKyA2MHB4KTtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCcsIGN1cnNpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yRHV0Y2hXaGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tdmVyZGlncmlzVmFsKSwgLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWNvbG9yVmVyZGlncmlzKTtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDVweCAjMDAwKTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIGNhbGModmFyKC0tbG9nb1NpemUpIC8gMikpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoQXNzZXRzL2RvbnV0TG9nb0VkaXQuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogdmFyKC0tbG9nb1NpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWxvZ29TaXplKTtcXG4gICAgei1pbmRleDogMTE7XFxufVxcblxcbmJvZHkge21hcmdpbjogMDt9XFxuXFxuLm5hdkNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1uYXZCYXJIZWlnaHQpIDYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCw1NywxNTApO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuXFxuLm5hdkJvcmRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtMTBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKEFzc2V0cy9kb251dEJvcmRlci5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHRyYW5zaXRpb246IC41cztcXG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnLCBjdXJzaXZlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICB6LWluZGV4OiAxMTtcXG59XFxuXFxuLm5hdi1idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZU9uZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0tcGFnZU9uZVRvcEhlaWdodCkgNDB2aDtcXG4gICAgei1pbmRleDogMztcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVR3byB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDVmcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVRocmVlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZnIgM2ZyO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFiLWNvbnRlbnQtdG9wIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlT25lIC50YWItY29udGVudC10b3Age1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBjYWxjKGNhbGModmFyKC0tbG9nb1NpemUpIC8gMikgLSA0cHgpO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlT25lIC5wYXJhbGxheE91dGVyV3JhcCAucGFyYWxsYXhJbm5lcldyYXAge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoQXNzZXRzL2RvbnV0RGlzcGxheTIucG5nKTtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVR3byAudGFiLWNvbnRlbnQtdG9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3JEdXRjaFdoaXRlKTtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVRocmVlIC50YWItY29udGVudC10b3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvckNvcmFsUGluayk7XFxufVxcblxcbi50YWItY29udGVudC10b3Aub2Zmc2NyZWVuIHtcXG4gICAgdG9wOiAtMTAwMHB4O1xcbn1cXG5cXG4udGFiLWNvbnRlbnQtYm90dG9tIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDBweDtcXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlT25lIC50YWItY29udGVudC1ib3R0b20gLnBhcmFsbGF4T3V0ZXJXcmFwIC5wYXJhbGxheElubmVyV3JhcCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChBc3NldHMvcmFjay5wbmcpO1xcbn1cXG5cXG4ucGFnZUNvbnRhaW5lci5wYWdlVHdvIC50YWItY29udGVudC1ib3R0b20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvclBlYWNoWWVsbG93KTtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIucGFnZVRocmVlIC50YWItY29udGVudC1ib3R0b20ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvckJpdHRlcnN3ZWV0KTtcXG59XFxuXFxuLnRhYi1jb250ZW50LWJvdHRvbS5vZmZzY3JlZW4ge1xcbiAgICBib3R0b206IC0xMDAwcHg7XFxufVxcblxcbi5wYXJhbGxheE91dGVyV3JhcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5wYXJhbGxheElubmVyV3JhcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDExMCU7XFxuICAgIGhlaWdodDogMTEwJTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLWxvZ29TaXplOiAyNTBweDtcXG4gICAgfVxcblxcbiAgICAudGV4dFdyYXAge1xcbiAgICAgICAgd2lkdGg6IDgwdnc7XFxuICAgIH1cXG5cXG4gICAgLm5hdkJvcmRlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wYXJhbGxheElubmVyV3JhcCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3BhZ2VDb250YWluZXInLCAncGFnZVRocmVlJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHBhZ2VUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlVG9wLmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50LXRvcCcpO1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRvcCk7XG5cbiAgICBjb25zdCBwYWdlQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUJvdHRvbS5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudC1ib3R0b20nKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VCb3R0b20pO1xufVxuXG5leHBvcnQge2NyZWF0ZUNvbnRhY3RQYWdlfTsiLCJmdW5jdGlvbiBzaGlmdFBhZ2VJbihwYWdlKSB7XG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFnZSk7XG4gICAgY29uc3QgcGFnZVRvcCA9IHBhZ2VDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhYi1jb250ZW50LXRvcCcpO1xuICAgIGNvbnN0IHBhZ2VCb3R0b20gPSBwYWdlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YWItY29udGVudC1ib3R0b20nKTtcblxuICAgIHBhZ2VUb3AuY2xhc3NMaXN0LnJlbW92ZSgnb2Zmc2NyZWVuJyk7XG4gICAgcGFnZUJvdHRvbS5jbGFzc0xpc3QucmVtb3ZlKCdvZmZzY3JlZW4nKTtcbn1cblxuZnVuY3Rpb24gc2hpZnRQYWdlT3V0KHBhZ2UpIHtcbiAgICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYWdlKTtcbiAgICBjb25zdCBwYWdlVG9wID0gcGFnZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRlbnQtdG9wJyk7XG4gICAgY29uc3QgcGFnZUJvdHRvbSA9IHBhZ2VDb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhYi1jb250ZW50LWJvdHRvbScpO1xuXG4gICAgcGFnZVRvcC5jbGFzc0xpc3QuYWRkKCdvZmZzY3JlZW4nKTtcbiAgICBwYWdlQm90dG9tLmNsYXNzTGlzdC5hZGQoJ29mZnNjcmVlbicpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJhbGxheFdyYXAoKSB7XG4gICAgY29uc3QgcGFyYWxsYXhPdXRlcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJhbGxheE91dGVyV3JhcC5jbGFzc0xpc3QuYWRkKCdwYXJhbGxheE91dGVyV3JhcCcpO1xuICAgIGNvbnN0IHBhcmFsbGF4SW5uZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFyYWxsYXhJbm5lcldyYXAuY2xhc3NMaXN0LmFkZCgncGFyYWxsYXhJbm5lcldyYXAnKTtcblxuICAgIHBhcmFsbGF4T3V0ZXJXcmFwLmFwcGVuZENoaWxkKHBhcmFsbGF4SW5uZXJXcmFwKTtcblxuICAgIHJldHVybiBwYXJhbGxheE91dGVyV3JhcDtcbn1cblxuZnVuY3Rpb24gcGFyYWxsYXhFZmZlY3QoZXZlbnQpIHtcbiAgICB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJhbGxheElubmVyV3JhcCcpLmZvckVhY2goKHNoaWZ0KSA9PiB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gMjtcbiAgICAgICAgY29uc3QgeCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIGV2ZW50LnBhZ2VYICogcG9zaXRpb24pIC8gOTA7XG4gICAgICAgIGNvbnN0IHkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gZXZlbnQucGFnZVkgKiBwb3NpdGlvbikgLyA5MDtcblxuICAgICAgICBzaGlmdC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3h9cHgpIHRyYW5zbGF0ZVkoJHt5fXB4KWA7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7c2hpZnRQYWdlSW4sIHNoaWZ0UGFnZU91dCwgcGFyYWxsYXhFZmZlY3QsIGNyZWF0ZVBhcmFsbGF4V3JhcH07IiwiaW1wb3J0IHsgY3JlYXRlUGFyYWxsYXhXcmFwIH0gZnJvbSBcIi4vaGVscGVyTWV0aG9kc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwYWdlQ29udGFpbmVyJywgJ3BhZ2VPbmUnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpO1xuXG4gICAgY29uc3QgcGFnZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VUb3AuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQtdG9wJyk7XG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlVG9wKTtcblxuICAgIGNvbnN0IHBhcmFsbGF4V3JhcFRvcCA9IGNyZWF0ZVBhcmFsbGF4V3JhcCgpO1xuICAgIHBhZ2VUb3AuYXBwZW5kQ2hpbGQocGFyYWxsYXhXcmFwVG9wKTtcblxuICAgIGNvbnN0IG91dGVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHRDb250ZW50VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3V0ZXJXcmFwLmNsYXNzTGlzdC5hZGQoJ291dGVyV3JhcCcpO1xuICAgIHRleHRDb250ZW50VG9wLmNsYXNzTGlzdC5hZGQoJ3RleHRXcmFwJyk7XG4gICAgdGV4dENvbnRlbnRUb3AudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gR2xhemVkIGFuZCBDb25mdXNlZCwgd2hlcmUgd2UgY3JlYXRlIGVkaWJsZSB3b3JrcyBvZiBhcnQgdXNpbmcgb25seSB0aGUgZmluZXN0IGluZ3JlZGllbnRzLiBDb21lIGluIGFuZCBsZXQgdXMgdGFrZSB5b3Ugb24gYSBqb3VybmV5IG9mIHN3ZWV0IGFuZCBzYXZvcnkgZmxhdm9ycy5cIjtcbiAgICBvdXRlcldyYXAuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnRUb3ApO1xuICAgIHBhZ2VUb3AuYXBwZW5kQ2hpbGQob3V0ZXJXcmFwKTtcblxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgICBwYWdlVG9wLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gICAgY29uc3QgcGFnZUJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VCb3R0b20uY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQtYm90dG9tJyk7XG4gICAgcGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwYWdlQm90dG9tKTtcblxuICAgIGNvbnN0IHBhcmFsbGF4V3JhcEJvdHRvbSA9IGNyZWF0ZVBhcmFsbGF4V3JhcCgpO1xuICAgIHBhZ2VCb3R0b20uYXBwZW5kQ2hpbGQocGFyYWxsYXhXcmFwQm90dG9tKTtcbn1cblxuZXhwb3J0IHtjcmVhdGVIb21lUGFnZX07IiwiZnVuY3Rpb24gY3JlYXRlTWVudVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncGFnZUNvbnRhaW5lcicsICdwYWdlVHdvJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHBhZ2VUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYWdlVG9wLmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50LXRvcCcpO1xuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRvcCk7XG5cbiAgICBjb25zdCBwYWdlQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFnZUJvdHRvbS5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudC1ib3R0b20nKTtcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VCb3R0b20pO1xufVxuXG5leHBvcnQge2NyZWF0ZU1lbnVQYWdlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UsIHJlbW92ZUhvbWVQYWdlIH0gZnJvbSAnLi9ob21lUGFnZS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW51UGFnZSB9IGZyb20gJy4vbWVudVBhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tICcuL2NvbnRhY3RQYWdlJztcbmltcG9ydCB7IHNoaWZ0UGFnZUluLCBzaGlmdFBhZ2VPdXQsIHBhcmFsbGF4RWZmZWN0IH0gZnJvbSAnLi9oZWxwZXJNZXRob2RzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmNvbnN0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25hdkNvbnRhaW5lcicpO1xuY29udGVudC5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXIpO1xubmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG5jb25zdCBuYXZCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm5hdkJvcmRlci5jbGFzc0xpc3QuYWRkKCduYXZCb3JkZXInKTtcbm5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCb3JkZXIpO1xuXG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG5uYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XG5tZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbm5hdkJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcblxuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbmNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xubmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG5jcmVhdGVIb21lUGFnZSgpO1xuY3JlYXRlTWVudVBhZ2UoKTtcbmNyZWF0ZUNvbnRhY3RQYWdlKCk7XG5cbmlmICh3aW5kb3cuc2NyZWVuLndpZHRoID4gMTAyNCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgcGFyYWxsYXhFZmZlY3QpO1xufVxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNoaWZ0UGFnZUluKCcucGFnZU9uZScpO1xuICAgIHNoaWZ0UGFnZUluKCcucGFnZVR3bycpO1xufSk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hpZnRQYWdlSW4oJy5wYWdlVHdvJyk7XG4gICAgc2hpZnRQYWdlT3V0KCcucGFnZU9uZScpO1xufSk7XG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2hpZnRQYWdlT3V0KCcucGFnZU9uZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzaGlmdFBhZ2VPdXQoJy5wYWdlVHdvJyk7XG4gICAgfSwgMjAwKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==