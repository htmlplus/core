module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/component/[key].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../examples/build/combine/aspect-ratio/default.js":
/*!*********************************************************!*\
  !*** ../examples/build/combine/aspect-ratio/default.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusAspectRatio"], {
    value: "16/9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "This box will always be 16:9 (unless you put more stuff in it)"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<plus-aspect-ratio value=\"16/9\">\n  <div class=\"box\">\n    This box will always be 16:9 (unless you put more stuff in it)\n  </div>\n</plus-aspect-ratio>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusAspectRatio } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusAspectRatio value=\"16/9\">\n      <div className=\"box\">\n        This box will always be 16:9 (unless you put more stuff in it)\n      </div>\n    </PlusAspectRatio>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-aspect-ratio value=\"16/9\">\n  <div class=\"box\">\n    This box will always be 16:9 (unless you put more stuff in it)\n  </div>\n</plus-aspect-ratio>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/aspect-ratio/index.js":
/*!*******************************************************!*\
  !*** ../examples/build/combine/aspect-ratio/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  key: 'aspect-ratio',
  examples: [
    __webpack_require__(/*! ./default */ "../examples/build/combine/aspect-ratio/default.js").default,
    __webpack_require__(/*! ./video */ "../examples/build/combine/aspect-ratio/video.js").default,
    __webpack_require__(/*! ./more */ "../examples/build/combine/aspect-ratio/more.js").default,
  ]
});

/***/ }),

/***/ "../examples/build/combine/aspect-ratio/more.js":
/*!******************************************************!*\
  !*** ../examples/build/combine/aspect-ratio/more.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusAspectRatio"], {
    value: "3/2",
    className: "ratio-one"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box one"
  }, "3:2"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusAspectRatio"], {
    value: "16/9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box two"
  }, "16:9"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusAspectRatio"], {
    value: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box three"
  }, "1:1"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "6",
    alignSelf: "end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusAspectRatio"], {
    value: "4/3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box four"
  }, "4:3"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusAspectRatio"], {
    value: "18/6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box five"
  }, "18:6"))))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "more",
  "ports": {
    "javascript": {
      "template": "<plus-grid>\n  <plus-grid-item xs=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"3/2\" class=\"ratio-one\">\n          <div class=\"box one\">\n            3:2\n          </div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"16/9\">\n          <div class=\"box two\">\n            16:9\n          </div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n  <plus-grid-item xs=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"6\">\n        <plus-aspect-ratio value=\"1\">\n          <div class=\"box three\">\n            1:1\n          </div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"6\" align-self=\"end\">\n        <plus-aspect-ratio value=\"4/3\">\n          <div class=\"box four\">\n            4:3\n          </div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"18/6\">\n          <div class=\"box five\">\n            18:6\n          </div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem, PlusAspectRatio } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid>\n      <PlusGridItem xs=\"6\">\n        <PlusGrid>\n          <PlusGridItem xs=\"12\">\n            <PlusAspectRatio value=\"3/2\" className=\"ratio-one\">\n              <div className=\"box one\">\n                3:2\n              </div>\n            </PlusAspectRatio>\n          </PlusGridItem>\n          <PlusGridItem xs=\"12\">\n            <PlusAspectRatio value=\"16/9\">\n              <div className=\"box two\">\n                16:9\n              </div>\n            </PlusAspectRatio>\n          </PlusGridItem>\n        </PlusGrid>\n      </PlusGridItem>\n      <PlusGridItem xs=\"6\">\n        <PlusGrid>\n          <PlusGridItem xs=\"6\">\n            <PlusAspectRatio value=\"1\">\n              <div className=\"box three\">\n                1:1\n              </div>\n            </PlusAspectRatio>\n          </PlusGridItem>\n          <PlusGridItem xs=\"6\" alignSelf=\"end\">\n            <PlusAspectRatio value=\"4/3\">\n              <div className=\"box four\">\n                4:3\n              </div>\n            </PlusAspectRatio>\n          </PlusGridItem>\n          <PlusGridItem xs=\"12\">\n            <PlusAspectRatio value=\"18/6\">\n              <div className=\"box five\">\n                18:6\n              </div>\n            </PlusAspectRatio>\n          </PlusGridItem>\n        </PlusGrid>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid>\n  <plus-grid-item xs=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"3/2\" class=\"ratio-one\">\n          <div class=\"box one\">\n            3:2\n          </div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"16/9\">\n          <div class=\"box two\">\n            16:9\n          </div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n  <plus-grid-item xs=\"6\">\n    <plus-grid>\n      <plus-grid-item xs=\"6\">\n        <plus-aspect-ratio value=\"1\">\n          <div class=\"box three\">\n            1:1\n          </div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"6\" align-self=\"end\">\n        <plus-aspect-ratio value=\"4/3\">\n          <div class=\"box four\">\n            4:3\n          </div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n      <plus-grid-item xs=\"12\">\n        <plus-aspect-ratio value=\"18/6\">\n          <div class=\"box five\">\n            18:6\n          </div>\n        </plus-aspect-ratio>\n      </plus-grid-item>\n    </plus-grid>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/aspect-ratio/video.js":
/*!*******************************************************!*\
  !*** ../examples/build/combine/aspect-ratio/video.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusAspectRatio"], {
    value: "16/9"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    src: "https://www.youtube.com/embed/tgbNymZ7vqY"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "video",
  "ports": {
    "javascript": {
      "template": "<plus-aspect-ratio value=\"16/9\">\n  <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"/>\n</plus-aspect-ratio>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusAspectRatio } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusAspectRatio value=\"16/9\">\n      <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"/>\n    </PlusAspectRatio>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-aspect-ratio value=\"16/9\">\n  <iframe src=\"https://www.youtube.com/embed/tgbNymZ7vqY\"/>\n</plus-aspect-ratio>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/animation.js":
/*!*****************************************************!*\
  !*** ../examples/build/combine/dialog/animation.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-animation"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-animation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "animation",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-animation\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog class=\"fade\" connector=\"dialog-animation\">\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>\n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-animation\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog className=\"fade\" connector=\"dialog-animation\">\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog Title\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-animation\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog class=\"fade\" connector=\"dialog-animation\">\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>\n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/backdrop.js":
/*!****************************************************!*\
  !*** ../examples/build/combine/dialog/backdrop.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-backdrop"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-backdrop",
    backdrop: "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "backdrop",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-backdrop\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog class=\"fade\" connector=\"dialog-backdrop\" backdrop=\"false\">\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>\n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-backdrop\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog className=\"fade\" connector=\"dialog-backdrop\" backdrop=\"false\">\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog Title\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-backdrop\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog class=\"fade\" connector=\"dialog-backdrop\" backdrop=\"false\">\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>\n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/default.js":
/*!***************************************************!*\
  !*** ../examples/build/combine/dialog/default.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-default"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    connector: "dialog-default"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-default\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog connector=\"dialog-default\">\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>\n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-default\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog connector=\"dialog-default\">\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog Title\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-default\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog connector=\"dialog-default\">\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>\n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/full-height.js":
/*!*******************************************************!*\
  !*** ../examples/build/combine/dialog/full-height.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-full-height"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-full-height",
    placement: "center",
    fullHeight: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "full-height",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-full-height\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog class=\"fade\" connector=\"dialog-full-height\" placement=\"center\" full-height>\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>\n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-full-height\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog className=\"fade\" connector=\"dialog-full-height\" placement=\"center\" fullHeight>\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog Title\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-full-height\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog class=\"fade\" connector=\"dialog-full-height\" placement=\"center\" full-height>\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>\n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/full-width.js":
/*!******************************************************!*\
  !*** ../examples/build/combine/dialog/full-width.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-full-width"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-full-width",
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "full-width",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-full-width\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog class=\"fade\" connector=\"dialog-full-width\" full-width>\n  <plus-dialog-content>\n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogBody } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-full-width\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog className=\"fade\" connector=\"dialog-full-width\" fullWidth>\n        <PlusDialogContent>\n          <PlusDialogBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          </PlusDialogBody>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-full-width\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog class=\"fade\" connector=\"dialog-full-width\" full-width>\n    <plus-dialog-content>\n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/fullscreen.js":
/*!******************************************************!*\
  !*** ../examples/build/combine/dialog/fullscreen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-fullscreen"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-fullscreen",
    placement: "bottom",
    fullscreen: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "fullscreen",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-fullscreen\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog class=\"fade\" connector=\"dialog-fullscreen\" placement=\"bottom\" fullscreen>\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>\n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-fullscreen\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog className=\"fade\" connector=\"dialog-fullscreen\" placement=\"bottom\" fullscreen>\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog Title\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-fullscreen\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog class=\"fade\" connector=\"dialog-fullscreen\" placement=\"bottom\" fullscreen>\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>\n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/index.js":
/*!*************************************************!*\
  !*** ../examples/build/combine/dialog/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  key: 'dialog',
  examples: [
    __webpack_require__(/*! ./default */ "../examples/build/combine/dialog/default.js").default,
    __webpack_require__(/*! ./animation */ "../examples/build/combine/dialog/animation.js").default,
    __webpack_require__(/*! ./persistent */ "../examples/build/combine/dialog/persistent.js").default,
    __webpack_require__(/*! ./placement */ "../examples/build/combine/dialog/placement.js").default,
    __webpack_require__(/*! ./size */ "../examples/build/combine/dialog/size.js").default,
    __webpack_require__(/*! ./backdrop */ "../examples/build/combine/dialog/backdrop.js").default,
    __webpack_require__(/*! ./scrollable */ "../examples/build/combine/dialog/scrollable.js").default,
    __webpack_require__(/*! ./specific-scrollable */ "../examples/build/combine/dialog/specific-scrollable.js").default,
    __webpack_require__(/*! ./fullscreen */ "../examples/build/combine/dialog/fullscreen.js").default,
    __webpack_require__(/*! ./full-width */ "../examples/build/combine/dialog/full-width.js").default,
    __webpack_require__(/*! ./full-height */ "../examples/build/combine/dialog/full-height.js").default,
    __webpack_require__(/*! ./sticky */ "../examples/build/combine/dialog/sticky.js").default,
    __webpack_require__(/*! ./nesting */ "../examples/build/combine/dialog/nesting.js").default,
  ]
});

/***/ }),

/***/ "../examples/build/combine/dialog/nesting.js":
/*!***************************************************!*\
  !*** ../examples/build/combine/dialog/nesting.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-nesting-1"
  }, "Open Dialog 1"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-nesting-2"
  }, "Open Dialog 2"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-nesting-3"
  }, "Open Dialog 3"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-nesting-1",
    size: "xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-nesting-2"
  }, "Open Dialog 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-nesting-2",
    size: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-nesting-3"
  }, "Open Dialog 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-nesting-3",
    xs: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "nesting",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-nesting-1\">\n  Open Dialog 1\n</plus-dialog-toggler>\n \n<plus-dialog-toggler connector=\"dialog-nesting-2\">\n  Open Dialog 2\n</plus-dialog-toggler>\n \n<plus-dialog-toggler connector=\"dialog-nesting-3\">\n  Open Dialog 3\n</plus-dialog-toggler>\n \n<plus-dialog class=\"fade\" connector=\"dialog-nesting-1\" size=\"xl\">\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog 1\n    </plus-dialog-header>\n    <plus-dialog-body>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n      </p>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler connector=\"dialog-nesting-2\">\n        Open Dialog 2\n      </plus-dialog-toggler>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n<plus-dialog class=\"fade\" connector=\"dialog-nesting-2\" size=\"lg\">\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog 2\n    </plus-dialog-header>\n    <plus-dialog-body>\n      <p>\n        Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n      </p>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler connector=\"dialog-nesting-3\">\n        Open Dialog 3\n      </plus-dialog-toggler>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>\n<plus-dialog class=\"fade\" connector=\"dialog-nesting-3\" xs=\"sm\">\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog 3\n    </plus-dialog-header>\n    <plus-dialog-body>\n      <p>\n        Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n      </p>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-nesting-1\">\n        Open Dialog 1\n      </PlusDialogToggler>\n       \n      <PlusDialogToggler connector=\"dialog-nesting-2\">\n        Open Dialog 2\n      </PlusDialogToggler>\n       \n      <PlusDialogToggler connector=\"dialog-nesting-3\">\n        Open Dialog 3\n      </PlusDialogToggler>\n       \n      <PlusDialog className=\"fade\" connector=\"dialog-nesting-1\" size=\"xl\">\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog 1\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n            </p>\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler connector=\"dialog-nesting-2\">\n              Open Dialog 2\n            </PlusDialogToggler>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n      <PlusDialog className=\"fade\" connector=\"dialog-nesting-2\" size=\"lg\">\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog 2\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            <p>\n              Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n            </p>\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler connector=\"dialog-nesting-3\">\n              Open Dialog 3\n            </PlusDialogToggler>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n      <PlusDialog className=\"fade\" connector=\"dialog-nesting-3\" xs=\"sm\">\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog 3\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            <p>\n              Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n            </p>\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-nesting-1\">\n    Open Dialog 1\n  </plus-dialog-toggler>\n   \n  <plus-dialog-toggler connector=\"dialog-nesting-2\">\n    Open Dialog 2\n  </plus-dialog-toggler>\n   \n  <plus-dialog-toggler connector=\"dialog-nesting-3\">\n    Open Dialog 3\n  </plus-dialog-toggler>\n   \n  <plus-dialog class=\"fade\" connector=\"dialog-nesting-1\" size=\"xl\">\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog 1\n      </plus-dialog-header>\n      <plus-dialog-body>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n        </p>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler connector=\"dialog-nesting-2\">\n          Open Dialog 2\n        </plus-dialog-toggler>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n  <plus-dialog class=\"fade\" connector=\"dialog-nesting-2\" size=\"lg\">\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog 2\n      </plus-dialog-header>\n      <plus-dialog-body>\n        <p>\n          Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n        </p>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler connector=\"dialog-nesting-3\">\n          Open Dialog 3\n        </plus-dialog-toggler>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n  <plus-dialog class=\"fade\" connector=\"dialog-nesting-3\" xs=\"sm\">\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog 3\n      </plus-dialog-header>\n      <plus-dialog-body>\n        <p>\n          Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n        </p>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/persistent.js":
/*!******************************************************!*\
  !*** ../examples/build/combine/dialog/persistent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-persistent"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-persistent",
    persistent: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "persistent",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-persistent\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog class=\"fade\" connector=\"dialog-persistent\" persistent>\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>\n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-persistent\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog className=\"fade\" connector=\"dialog-persistent\" persistent>\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog Title\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-persistent\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog class=\"fade\" connector=\"dialog-persistent\" persistent>\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>\n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/placement.js":
/*!*****************************************************!*\
  !*** ../examples/build/combine/dialog/placement.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-placement"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-placement",
    placement: "center-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "placement",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-placement\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog class=\"fade\" connector=\"dialog-placement\" placement=\"center-bottom\">\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>\n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-placement\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog className=\"fade\" connector=\"dialog-placement\" placement=\"center-bottom\">\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog Title\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-placement\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog class=\"fade\" connector=\"dialog-placement\" placement=\"center-bottom\">\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>\n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/scrollable.js":
/*!******************************************************!*\
  !*** ../examples/build/combine/dialog/scrollable.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-scrollable"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-scrollable",
    scrollable: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "scrollable",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-scrollable\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog class=\"fade\" connector=\"dialog-scrollable\" scrollable>\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>\n    <plus-dialog-body>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n      </p>\n      <p>\n        Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n      </p>\n      <p>\n        Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n      </p>\n      <p>\n        Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n      </p>\n      <p>\n        Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n      </p>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n      </p>\n      <p>\n        Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n      </p>\n      <p>\n        Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n      </p>\n      <p>\n        Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n      </p>\n      <p>\n        Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n      </p>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-scrollable\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog className=\"fade\" connector=\"dialog-scrollable\" scrollable>\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog Title\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n            </p>\n            <p>\n              Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n            </p>\n            <p>\n              Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n            </p>\n            <p>\n              Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n            </p>\n            <p>\n              Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n            </p>\n            <p>\n              Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n            </p>\n            <p>\n              Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n            </p>\n            <p>\n              Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n            </p>\n            <p>\n              Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n            </p>\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-scrollable\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog class=\"fade\" connector=\"dialog-scrollable\" scrollable>\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>\n      <plus-dialog-body>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n        </p>\n        <p>\n          Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n        </p>\n        <p>\n          Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n        </p>\n        <p>\n          Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n        </p>\n        <p>\n          Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n        </p>\n        <p>\n          Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n        </p>\n        <p>\n          Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n        </p>\n        <p>\n          Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n        </p>\n        <p>\n          Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n        </p>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/size.js":
/*!************************************************!*\
  !*** ../examples/build/combine/dialog/size.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [size, setSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('md');

  const hide = () => {
    setOpen(false);
  };

  const show = size => {
    setSize(size);
    setOpen(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => show('sm')
  }, "Small dialog"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => show('lg')
  }, "Large dialog"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => show('xl')
  }, "Extra large dialog"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    open: open,
    size: size,
    onPlusClose: () => hide()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => hide()
  }, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "size",
  "ports": {
    "javascript": {
      "template": "<button id=\"element1\">\n  Small dialog\n</button>\n \n<button id=\"element2\">\n  Large dialog\n</button>\n \n<button id=\"element3\">\n  Extra large dialog\n</button>\n \n<plus-dialog id=\"element5\" class=\"fade\">\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>\n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <button id=\"element4\">\n        Close\n      </button>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": "const hide = () => {\n  element5.open = false;\n}\nconst show = (size) => {\n  element5.size = size;\n  element5.open = true;\n}\nelement1.addEventListener('click', () => show('sm'));\nelement2.addEventListener('click', () => show('lg'));\nelement3.addEventListener('click', () => show('xl'));\nelement4.addEventListener('click', () => hide());\nelement5.addEventListener('plusClose', () => hide());"
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React, { useState } from 'react';\nimport { PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  const [open, setOpen] = useState(false);\n  const [size, setSize] = useState('md');\n  const hide = () => {\n    setOpen(false);\n  }\n  const show = (size) => {\n    setSize(size);\n    setOpen(true);\n  }\n  return (\n    <React.Fragment>\n      <button onClick={() => show('sm')}>\n        Small dialog\n      </button>\n       \n      <button onClick={() => show('lg')}>\n        Large dialog\n      </button>\n       \n      <button onClick={() => show('xl')}>\n        Extra large dialog\n      </button>\n       \n      <PlusDialog className=\"fade\" open={open} size={size} onPlusClose={() => hide()}>\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog Title\n          </PlusDialogHeader>\n          <PlusDialogBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <button onClick={() => hide()}>\n              Close\n            </button>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <button @click=\"show('sm')\">\n    Small dialog\n  </button>\n   \n  <button @click=\"show('lg')\">\n    Large dialog\n  </button>\n   \n  <button @click=\"show('xl')\">\n    Extra large dialog\n  </button>\n   \n  <plus-dialog class=\"fade\" :open=\"open\" :size=\"size\" @plusClose=\"hide()\">\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>\n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <button @click=\"hide()\">\n          Close\n        </button>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>",
      "script": "export default {\n  data() {\n    return {\n      open: false,\n      size: 'md',\n    }\n  },\n  methods: {\n    hide () {\n      this.open = false;\n    },\n    show (size) {\n      this.size = size;\n      this.open = true;\n    },\n  },\n}"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/specific-scrollable.js":
/*!***************************************************************!*\
  !*** ../examples/build/combine/dialog/specific-scrollable.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-specific-scrollable"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-specific-scrollable",
    scrollable: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogHeader"], null, "Dialog Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], {
    scrollable: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogFooter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], null, "Close")))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "specific-scrollable",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-specific-scrollable\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog class=\"fade\" connector=\"dialog-specific-scrollable\" scrollable>\n  <plus-dialog-content>\n    <plus-dialog-header>\n      Dialog Title\n    </plus-dialog-header>\n    <plus-dialog-body scrollable>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n      </p>\n      <p>\n        Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n      </p>\n      <p>\n        Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n      </p>\n      <p>\n        Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n      </p>\n      <p>\n        Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n      </p>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n      </p>\n      <p>\n        Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n      </p>\n      <p>\n        Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n      </p>\n      <p>\n        Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n      </p>\n      <p>\n        Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n      </p>\n    </plus-dialog-body>\n    <plus-dialog-footer>\n      <plus-dialog-toggler>\n        Close\n      </plus-dialog-toggler>\n    </plus-dialog-footer>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogHeader, PlusDialogBody, PlusDialogFooter } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-specific-scrollable\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog className=\"fade\" connector=\"dialog-specific-scrollable\" scrollable>\n        <PlusDialogContent>\n          <PlusDialogHeader>\n            Dialog Title\n          </PlusDialogHeader>\n          <PlusDialogBody scrollable>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n            </p>\n            <p>\n              Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n            </p>\n            <p>\n              Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n            </p>\n            <p>\n              Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n            </p>\n            <p>\n              Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n            </p>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n            </p>\n            <p>\n              Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n            </p>\n            <p>\n              Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n            </p>\n            <p>\n              Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n            </p>\n            <p>\n              Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n            </p>\n          </PlusDialogBody>\n          <PlusDialogFooter>\n            <PlusDialogToggler>\n              Close\n            </PlusDialogToggler>\n          </PlusDialogFooter>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-specific-scrollable\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog class=\"fade\" connector=\"dialog-specific-scrollable\" scrollable>\n    <plus-dialog-content>\n      <plus-dialog-header>\n        Dialog Title\n      </plus-dialog-header>\n      <plus-dialog-body scrollable>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n        </p>\n        <p>\n          Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n        </p>\n        <p>\n          Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n        </p>\n        <p>\n          Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n        </p>\n        <p>\n          Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n        </p>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\n        </p>\n        <p>\n          Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\n        </p>\n        <p>\n          Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\n        </p>\n        <p>\n          Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\n        </p>\n        <p>\n          Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\n        </p>\n      </plus-dialog-body>\n      <plus-dialog-footer>\n        <plus-dialog-toggler>\n          Close\n        </plus-dialog-toggler>\n      </plus-dialog-footer>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/dialog/sticky.js":
/*!**************************************************!*\
  !*** ../examples/build/combine/dialog/sticky.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogToggler"], {
    connector: "dialog-sticky"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialog"], {
    className: "fade",
    connector: "dialog-sticky",
    fullWidth: true,
    sticky: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusDialogBody"], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "sticky",
  "ports": {
    "javascript": {
      "template": "<plus-dialog-toggler connector=\"dialog-sticky\">\n  Open\n</plus-dialog-toggler>\n<plus-dialog class=\"fade\" connector=\"dialog-sticky\" full-width sticky>\n  <plus-dialog-content>\n    <plus-dialog-body>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </plus-dialog-body>\n  </plus-dialog-content>\n</plus-dialog>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusDialogToggler, PlusDialog, PlusDialogContent, PlusDialogBody } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusDialogToggler connector=\"dialog-sticky\">\n        Open\n      </PlusDialogToggler>\n      <PlusDialog className=\"fade\" connector=\"dialog-sticky\" fullWidth sticky>\n        <PlusDialogContent>\n          <PlusDialogBody>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n          </PlusDialogBody>\n        </PlusDialogContent>\n      </PlusDialog>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-dialog-toggler connector=\"dialog-sticky\">\n    Open\n  </plus-dialog-toggler>\n  <plus-dialog class=\"fade\" connector=\"dialog-sticky\" full-width sticky>\n    <plus-dialog-content>\n      <plus-dialog-body>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </plus-dialog-body>\n    </plus-dialog-content>\n  </plus-dialog>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/drawer/index.js":
/*!*************************************************!*\
  !*** ../examples/build/combine/drawer/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  key: 'drawer',
  examples: [

  ]
});

/***/ }),

/***/ "../examples/build/combine/grid/align-content.js":
/*!*******************************************************!*\
  !*** ../examples/build/combine/grid/align-content.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], {
    alignContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "align-content",
  "ports": {
    "javascript": {
      "template": "<plus-grid align-content=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid alignContent=\"center\">\n      <PlusGridItem xs=\"6\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"grow\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid align-content=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/align-items.js":
/*!*****************************************************!*\
  !*** ../examples/build/combine/grid/align-items.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], {
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "align-items",
  "ports": {
    "javascript": {
      "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid alignItems=\"center\">\n      <PlusGridItem xs=\"6\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"grow\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"6\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/align-self.js":
/*!****************************************************!*\
  !*** ../examples/build/combine/grid/align-self.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], {
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "grow",
    alignSelf: "start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "grow",
    alignSelf: "end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "align-self",
  "ports": {
    "javascript": {
      "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"grow\" align-self=\"start\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\" align-self=\"end\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid alignItems=\"center\">\n      <PlusGridItem xs=\"grow\" alignSelf=\"start\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"grow\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"grow\" alignSelf=\"end\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid align-items=\"center\">\n  <plus-grid-item xs=\"grow\" align-self=\"start\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\" align-self=\"end\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/auto-sizing.js":
/*!*****************************************************!*\
  !*** ../examples/build/combine/grid/auto-sizing.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=grow")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=grow")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=grow"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    md: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, md=2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=grow")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    md: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, md=2"))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "auto-sizing",
  "ports": {
    "javascript": {
      "template": "<plus-grid>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      xs=grow\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      xs=grow\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      xs=grow\n    </div>\n  </plus-grid-item>\n</plus-grid>\n<plus-grid>\n  <plus-grid-item xs=\"12\" md=\"2\">\n    <div class=\"box\">\n      xs=12, md=2\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      xs=grow\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"2\">\n    <div class=\"box\">\n      xs=12, md=2\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusGrid>\n        <PlusGridItem xs=\"grow\">\n          <div className=\"box\">\n            xs=grow\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"grow\">\n          <div className=\"box\">\n            xs=grow\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"grow\">\n          <div className=\"box\">\n            xs=grow\n          </div>\n        </PlusGridItem>\n      </PlusGrid>\n      <PlusGrid>\n        <PlusGridItem xs=\"12\" md=\"2\">\n          <div className=\"box\">\n            xs=12, md=2\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"grow\">\n          <div className=\"box\">\n            xs=grow\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" md=\"2\">\n          <div className=\"box\">\n            xs=12, md=2\n          </div>\n        </PlusGridItem>\n      </PlusGrid>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-grid>\n    <plus-grid-item xs=\"grow\">\n      <div class=\"box\">\n        xs=grow\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"grow\">\n      <div class=\"box\">\n        xs=grow\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"grow\">\n      <div class=\"box\">\n        xs=grow\n      </div>\n    </plus-grid-item>\n  </plus-grid>\n  <plus-grid>\n    <plus-grid-item xs=\"12\" md=\"2\">\n      <div class=\"box\">\n        xs=12, md=2\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"grow\">\n      <div class=\"box\">\n        xs=grow\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" md=\"2\">\n      <div class=\"box\">\n        xs=12, md=2\n      </div>\n    </plus-grid-item>\n  </plus-grid>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/default.js":
/*!*************************************************!*\
  !*** ../examples/build/combine/grid/default.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    md: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, md=4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    md: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, md=4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    md: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, md=4")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<plus-grid>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div class=\"box\">\n      xs=12, md=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div class=\"box\">\n      xs=12, md=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div class=\"box\">\n      xs=12, md=4\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid>\n      <PlusGridItem xs=\"12\" md=\"4\">\n        <div className=\"box\">\n          xs=12, md=4\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"12\" md=\"4\">\n        <div className=\"box\">\n          xs=12, md=4\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"12\" md=\"4\">\n        <div className=\"box\">\n          xs=12, md=4\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div class=\"box\">\n      xs=12, md=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div class=\"box\">\n      xs=12, md=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" md=\"4\">\n    <div class=\"box\">\n      xs=12, md=4\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/gutters-x.js":
/*!***************************************************!*\
  !*** ../examples/build/combine/grid/gutters-x.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], {
    gutterX: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "6",
    lg: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=6, lg=5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "6",
    lg: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=6, lg=4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "7",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=7, lg=3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "5",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=5, lg=3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "5",
    lg: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=5, lg=4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "7",
    lg: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=7, lg=5"))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "gutters-x",
  "ports": {
    "javascript": {
      "template": "<plus-grid gutter-x=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div class=\"box\">\n      xs=12, sm=6, lg=5\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div class=\"box\">\n      xs=12, sm=6, lg=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div class=\"box\">\n      xs=12, sm=7, lg=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div class=\"box\">\n      xs=12, sm=5, lg=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div class=\"box\">\n      xs=12, sm=5, lg=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div class=\"box\">\n      xs=12, sm=7, lg=5\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusGrid gutterX=\"md\">\n        <PlusGridItem xs=\"12\" sm=\"6\" lg=\"5\">\n          <div className=\"box\">\n            xs=12, sm=6, lg=5\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" sm=\"6\" lg=\"4\">\n          <div className=\"box\">\n            xs=12, sm=6, lg=4\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" sm=\"7\" lg=\"3\">\n          <div className=\"box\">\n            xs=12, sm=7, lg=3\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" sm=\"5\" lg=\"3\">\n          <div className=\"box\">\n            xs=12, sm=5, lg=3\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" sm=\"5\" lg=\"4\">\n          <div className=\"box\">\n            xs=12, sm=5, lg=4\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" sm=\"7\" lg=\"5\">\n          <div className=\"box\">\n            xs=12, sm=7, lg=5\n          </div>\n        </PlusGridItem>\n      </PlusGrid>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-grid gutter-x=\"md\">\n    <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n      <div class=\"box\">\n        xs=12, sm=6, lg=5\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n      <div class=\"box\">\n        xs=12, sm=6, lg=4\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n      <div class=\"box\">\n        xs=12, sm=7, lg=3\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n      <div class=\"box\">\n        xs=12, sm=5, lg=3\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n      <div class=\"box\">\n        xs=12, sm=5, lg=4\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n      <div class=\"box\">\n        xs=12, sm=7, lg=5\n      </div>\n    </plus-grid-item>\n  </plus-grid>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/gutters-y.js":
/*!***************************************************!*\
  !*** ../examples/build/combine/grid/gutters-y.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], {
    gutterY: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "6",
    lg: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=6, lg=5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "6",
    lg: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=6, lg=4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "7",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=7, lg=3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "5",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=5, lg=3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "5",
    lg: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=5, lg=4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "7",
    lg: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=7, lg=5"))));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "gutters-y",
  "ports": {
    "javascript": {
      "template": "<plus-grid gutter-y=\"md\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div class=\"box\">\n      xs=12, sm=6, lg=5\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div class=\"box\">\n      xs=12, sm=6, lg=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div class=\"box\">\n      xs=12, sm=7, lg=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div class=\"box\">\n      xs=12, sm=5, lg=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div class=\"box\">\n      xs=12, sm=5, lg=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div class=\"box\">\n      xs=12, sm=7, lg=5\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <React.Fragment>\n      <PlusGrid gutterY=\"md\">\n        <PlusGridItem xs=\"12\" sm=\"6\" lg=\"5\">\n          <div className=\"box\">\n            xs=12, sm=6, lg=5\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" sm=\"6\" lg=\"4\">\n          <div className=\"box\">\n            xs=12, sm=6, lg=4\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" sm=\"7\" lg=\"3\">\n          <div className=\"box\">\n            xs=12, sm=7, lg=3\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" sm=\"5\" lg=\"3\">\n          <div className=\"box\">\n            xs=12, sm=5, lg=3\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" sm=\"5\" lg=\"4\">\n          <div className=\"box\">\n            xs=12, sm=5, lg=4\n          </div>\n        </PlusGridItem>\n        <PlusGridItem xs=\"12\" sm=\"7\" lg=\"5\">\n          <div className=\"box\">\n            xs=12, sm=7, lg=5\n          </div>\n        </PlusGridItem>\n      </PlusGrid>\n    </React.Fragment>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<div>\n  <plus-grid gutter-y=\"md\">\n    <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n      <div class=\"box\">\n        xs=12, sm=6, lg=5\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n      <div class=\"box\">\n        xs=12, sm=6, lg=4\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n      <div class=\"box\">\n        xs=12, sm=7, lg=3\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n      <div class=\"box\">\n        xs=12, sm=5, lg=3\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n      <div class=\"box\">\n        xs=12, sm=5, lg=4\n      </div>\n    </plus-grid-item>\n    <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n      <div class=\"box\">\n        xs=12, sm=7, lg=5\n      </div>\n    </plus-grid-item>\n  </plus-grid>\n</div>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/gutters.js":
/*!*************************************************!*\
  !*** ../examples/build/combine/grid/gutters.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], {
    gutter: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "6",
    lg: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=6, lg=5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "6",
    lg: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=6, lg=4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "7",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=7, lg=3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "5",
    lg: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=5, lg=3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "5",
    lg: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=5, lg=4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "12",
    sm: "7",
    lg: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=12, sm=7, lg=5")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "gutters",
  "ports": {
    "javascript": {
      "template": "<plus-grid gutter=\"lg\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div class=\"box\">\n      xs=12, sm=6, lg=5\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div class=\"box\">\n      xs=12, sm=6, lg=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div class=\"box\">\n      xs=12, sm=7, lg=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div class=\"box\">\n      xs=12, sm=5, lg=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div class=\"box\">\n      xs=12, sm=5, lg=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div class=\"box\">\n      xs=12, sm=7, lg=5\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid gutter=\"lg\">\n      <PlusGridItem xs=\"12\" sm=\"6\" lg=\"5\">\n        <div className=\"box\">\n          xs=12, sm=6, lg=5\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"12\" sm=\"6\" lg=\"4\">\n        <div className=\"box\">\n          xs=12, sm=6, lg=4\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"12\" sm=\"7\" lg=\"3\">\n        <div className=\"box\">\n          xs=12, sm=7, lg=3\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"12\" sm=\"5\" lg=\"3\">\n        <div className=\"box\">\n          xs=12, sm=5, lg=3\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"12\" sm=\"5\" lg=\"4\">\n        <div className=\"box\">\n          xs=12, sm=5, lg=4\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"12\" sm=\"7\" lg=\"5\">\n        <div className=\"box\">\n          xs=12, sm=7, lg=5\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid gutter=\"lg\">\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"5\">\n    <div class=\"box\">\n      xs=12, sm=6, lg=5\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"6\" lg=\"4\">\n    <div class=\"box\">\n      xs=12, sm=6, lg=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"3\">\n    <div class=\"box\">\n      xs=12, sm=7, lg=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"3\">\n    <div class=\"box\">\n      xs=12, sm=5, lg=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"5\" lg=\"4\">\n    <div class=\"box\">\n      xs=12, sm=5, lg=4\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"12\" sm=\"7\" lg=\"5\">\n    <div class=\"box\">\n      xs=12, sm=7, lg=5\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/hide.js":
/*!**********************************************!*\
  !*** ../examples/build/combine/grid/hide.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    hideSm: true,
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=3, hide-sm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    hideMd: true,
    xs: "4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=4, hide-md")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    hideLg: true,
    xs: "5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=5, hide-lg")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "hide",
  "ports": {
    "javascript": {
      "template": "<plus-grid>\n  <plus-grid-item hide-sm xs=\"3\">\n    <div class=\"box\">\n      xs=3, hide-sm\n    </div>\n  </plus-grid-item>\n  <plus-grid-item hide-md xs=\"4\">\n    <div class=\"box\">\n      xs=4, hide-md\n    </div>\n  </plus-grid-item>\n  <plus-grid-item hide-lg xs=\"5\">\n    <div class=\"box\">\n      xs=5, hide-lg\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid>\n      <PlusGridItem hideSm xs=\"3\">\n        <div className=\"box\">\n          xs=3, hide-sm\n        </div>\n      </PlusGridItem>\n      <PlusGridItem hideMd xs=\"4\">\n        <div className=\"box\">\n          xs=4, hide-md\n        </div>\n      </PlusGridItem>\n      <PlusGridItem hideLg xs=\"5\">\n        <div className=\"box\">\n          xs=5, hide-lg\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid>\n  <plus-grid-item hide-sm xs=\"3\">\n    <div class=\"box\">\n      xs=3, hide-sm\n    </div>\n  </plus-grid-item>\n  <plus-grid-item hide-md xs=\"4\">\n    <div class=\"box\">\n      xs=4, hide-md\n    </div>\n  </plus-grid-item>\n  <plus-grid-item hide-lg xs=\"5\">\n    <div class=\"box\">\n      xs=5, hide-lg\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/index.js":
/*!***********************************************!*\
  !*** ../examples/build/combine/grid/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  key: 'grid',
  examples: [
    __webpack_require__(/*! ./default */ "../examples/build/combine/grid/default.js").default,
    __webpack_require__(/*! ./auto-sizing */ "../examples/build/combine/grid/auto-sizing.js").default,
    __webpack_require__(/*! ./gutters */ "../examples/build/combine/grid/gutters.js").default,
    __webpack_require__(/*! ./gutters-x */ "../examples/build/combine/grid/gutters-x.js").default,
    __webpack_require__(/*! ./gutters-y */ "../examples/build/combine/grid/gutters-y.js").default,
    __webpack_require__(/*! ./align-items */ "../examples/build/combine/grid/align-items.js").default,
    __webpack_require__(/*! ./align-content */ "../examples/build/combine/grid/align-content.js").default,
    __webpack_require__(/*! ./align-self */ "../examples/build/combine/grid/align-self.js").default,
    __webpack_require__(/*! ./justify */ "../examples/build/combine/grid/justify.js").default,
    __webpack_require__(/*! ./reverse */ "../examples/build/combine/grid/reverse.js").default,
    __webpack_require__(/*! ./wrap */ "../examples/build/combine/grid/wrap.js").default,
    __webpack_require__(/*! ./offset */ "../examples/build/combine/grid/offset.js").default,
    __webpack_require__(/*! ./order */ "../examples/build/combine/grid/order.js").default,
    __webpack_require__(/*! ./hide */ "../examples/build/combine/grid/hide.js").default,
    __webpack_require__(/*! ./vertical */ "../examples/build/combine/grid/vertical.js").default,
  ]
});

/***/ }),

/***/ "../examples/build/combine/grid/justify.js":
/*!*************************************************!*\
  !*** ../examples/build/combine/grid/justify.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], {
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "justify",
  "ports": {
    "javascript": {
      "template": "<plus-grid justify=\"center\">\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid justify=\"center\">\n      <PlusGridItem xs=\"2\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"2\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"2\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid justify=\"center\">\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/offset.js":
/*!************************************************!*\
  !*** ../examples/build/combine/grid/offset.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    offsetXs: "3",
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "offset-xs=\"3\", xs=3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=3")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "offset",
  "ports": {
    "javascript": {
      "template": "<plus-grid>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      xs=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item offset-xs=\"3\" xs=\"3\">\n    <div class=\"box\">\n      offset-xs=\"3\", xs=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      xs=3\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          xs=3\n        </div>\n      </PlusGridItem>\n      <PlusGridItem offsetXs=\"3\" xs=\"3\">\n        <div className=\"box\">\n          offset-xs=\"3\", xs=3\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          xs=3\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      xs=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item offset-xs=\"3\" xs=\"3\">\n    <div class=\"box\">\n      offset-xs=\"3\", xs=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      xs=3\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/order.js":
/*!***********************************************!*\
  !*** ../examples/build/combine/grid/order.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    orderXs: "3",
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "order=3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    orderXs: "2",
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "order=2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    orderXs: "1",
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "order=1")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "order",
  "ports": {
    "javascript": {
      "template": "<plus-grid>\n  <plus-grid-item order-xs=\"3\" xs=\"grow\">\n    <div class=\"box\">\n      order=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"2\" xs=\"grow\">\n    <div class=\"box\">\n      order=2\n    </div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"1\" xs=\"grow\">\n    <div class=\"box\">\n      order=1\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid>\n      <PlusGridItem orderXs=\"3\" xs=\"grow\">\n        <div className=\"box\">\n          order=3\n        </div>\n      </PlusGridItem>\n      <PlusGridItem orderXs=\"2\" xs=\"grow\">\n        <div className=\"box\">\n          order=2\n        </div>\n      </PlusGridItem>\n      <PlusGridItem orderXs=\"1\" xs=\"grow\">\n        <div className=\"box\">\n          order=1\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid>\n  <plus-grid-item order-xs=\"3\" xs=\"grow\">\n    <div class=\"box\">\n      order=3\n    </div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"2\" xs=\"grow\">\n    <div class=\"box\">\n      order=2\n    </div>\n  </plus-grid-item>\n  <plus-grid-item order-xs=\"1\" xs=\"grow\">\n    <div class=\"box\">\n      order=1\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/reverse.js":
/*!*************************************************!*\
  !*** ../examples/build/combine/grid/reverse.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], {
    reverse: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item 1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item 2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item 3")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "reverse",
  "ports": {
    "javascript": {
      "template": "<plus-grid reverse>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item 1\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item 2\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item 3\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid reverse>\n      <PlusGridItem xs=\"2\">\n        <div className=\"box\">\n          Item 1\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"2\">\n        <div className=\"box\">\n          Item 2\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"2\">\n        <div className=\"box\">\n          Item 3\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid reverse>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item 1\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item 2\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      Item 3\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/vertical.js":
/*!**************************************************!*\
  !*** ../examples/build/combine/grid/vertical.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], {
    alignItems: "center",
    vertical: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "Item")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "vertical",
  "ports": {
    "javascript": {
      "template": "<plus-grid align-items=\"center\" vertical>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid alignItems=\"center\" vertical>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"grow\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"3\">\n        <div className=\"box\">\n          Item\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid align-items=\"center\" vertical>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"grow\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"3\">\n    <div class=\"box\">\n      Item\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/grid/wrap.js":
/*!**********************************************!*\
  !*** ../examples/build/combine/grid/wrap.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGrid"], {
    wrap: "off"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=6")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusGridItem"], {
    xs: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, "xs=2")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "wrap",
  "ports": {
    "javascript": {
      "template": "<plus-grid wrap=\"off\">\n  <plus-grid-item xs=\"6\">\n    <div class=\"box\">\n      xs=6\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      xs=2\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"6\">\n    <div class=\"box\">\n      xs=6\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      xs=2\n    </div>\n  </plus-grid-item>\n</plus-grid>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusGrid, PlusGridItem } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusGrid wrap=\"off\">\n      <PlusGridItem xs=\"6\">\n        <div className=\"box\">\n          xs=6\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"2\">\n        <div className=\"box\">\n          xs=2\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"6\">\n        <div className=\"box\">\n          xs=6\n        </div>\n      </PlusGridItem>\n      <PlusGridItem xs=\"2\">\n        <div className=\"box\">\n          xs=2\n        </div>\n      </PlusGridItem>\n    </PlusGrid>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-grid wrap=\"off\">\n  <plus-grid-item xs=\"6\">\n    <div class=\"box\">\n      xs=6\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      xs=2\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"6\">\n    <div class=\"box\">\n      xs=6\n    </div>\n  </plus-grid-item>\n  <plus-grid-item xs=\"2\">\n    <div class=\"box\">\n      xs=2\n    </div>\n  </plus-grid-item>\n</plus-grid>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/index.js":
/*!******************************************!*\
  !*** ../examples/build/combine/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
  __webpack_require__(/*! ./aspect-ratio */ "../examples/build/combine/aspect-ratio/index.js").default,
  __webpack_require__(/*! ./dialog */ "../examples/build/combine/dialog/index.js").default,
  __webpack_require__(/*! ./drawer */ "../examples/build/combine/drawer/index.js").default,
  __webpack_require__(/*! ./grid */ "../examples/build/combine/grid/index.js").default,
  __webpack_require__(/*! ./intersection */ "../examples/build/combine/intersection/index.js").default,
  __webpack_require__(/*! ./tabs */ "../examples/build/combine/tabs/index.js").default,
  __webpack_require__(/*! ./transition */ "../examples/build/combine/transition/index.js").default,
]);

/***/ }),

/***/ "../examples/build/combine/intersection/index.js":
/*!*******************************************************!*\
  !*** ../examples/build/combine/intersection/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  key: 'intersection',
  examples: [

  ]
});

/***/ }),

/***/ "../examples/build/combine/tabs/index.js":
/*!***********************************************!*\
  !*** ../examples/build/combine/tabs/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  key: 'tabs',
  examples: [

  ]
});

/***/ }),

/***/ "../examples/build/combine/transition/default.js":
/*!*******************************************************!*\
  !*** ../examples/build/combine/transition/default.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__);



const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "preview",
    "align-items": "center",
    "justify-content": "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_htmlplus_react__WEBPACK_IMPORTED_MODULE_1__["PlusTransition"], {
    name: "shake-x",
    repeat: "infinite"
  }, "HTMLPLUS")));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  "key": "default",
  "ports": {
    "javascript": {
      "template": "<plus-transition name=\"shake-x\" repeat=\"infinite\">\n  HTMLPLUS\n</plus-transition>",
      "script": ""
    },
    "preview": {
      "script": App
    },
    "react": {
      "script": "import React from 'react';\nimport { PlusTransition } from '@htmlplus/react';\nconst App = () => {\n  return (\n    <PlusTransition name=\"shake-x\" repeat=\"infinite\">\n      HTMLPLUS\n    </PlusTransition>\n  )\n}\nexport default App;"
    },
    "vue": {
      "template": "<plus-transition name=\"shake-x\" repeat=\"infinite\">\n  HTMLPLUS\n</plus-transition>"
    }
  }
});

/***/ }),

/***/ "../examples/build/combine/transition/index.js":
/*!*****************************************************!*\
  !*** ../examples/build/combine/transition/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  key: 'transition',
  examples: [
    __webpack_require__(/*! ./default */ "../examples/build/combine/transition/default.js").default,
  ]
});

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@htmlplus/core/dist/docs.json":
/*!****************************************************!*\
  !*** ./node_modules/@htmlplus/core/dist/docs.json ***!
  \****************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"key\":\"aspect-ratio\",\"tag\":\"plus-aspect-ratio\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Aspect ratio\",\"group\":\"\",\"description\":\"This component helps to specify a fixed ratio for the width and height sizes of a visual object (e.g. Image).\",\"events\":[],\"examples\":[{\"key\":\"default\",\"title\":\"Default\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  background: #c5cae9;\\n  padding: 12px;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-aspect-ratio value=\\\"16/9\\\">\\n  <div class=\\\"box\\\">\\n    This box will always be 16:9 (unless you put more stuff in it)\\n  </div>\\n</plus-aspect-ratio>\"}]},{\"key\":\"video\",\"title\":\"Video\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-aspect-ratio value=\\\"16/9\\\">\\n  <iframe src=\\\"https://www.youtube.com/embed/tgbNymZ7vqY\\\"></iframe>\\n</plus-aspect-ratio>\"}]},{\"key\":\"more\",\"title\":\"More\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  padding: 12px;\\n  color: white;\\n  margin: 4px;\\n}\\n\\n.ratio-one {\\n  width: 40.625%;\\n  float: right;\\n}\\n\\n.one   { background: #08dfc8 }\\n.two   { background: #ff5449 }\\n.three { background: #5f9ee9 }\\n.four  { background: #ffc903 }\\n.five  { background: #9073c1 }\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid>\\n  <plus-grid-item xs=\\\"6\\\">\\n    <plus-grid>\\n      <plus-grid-item xs=\\\"12\\\">\\n        <plus-aspect-ratio value=\\\"3/2\\\" class=\\\"ratio-one\\\">\\n          <div class=\\\"box one\\\">\\n            3:2\\n          </div>\\n        </plus-aspect-ratio>\\n      </plus-grid-item>\\n      <plus-grid-item xs=\\\"12\\\">\\n        <plus-aspect-ratio value=\\\"16/9\\\">\\n          <div class=\\\"box two\\\">\\n            16:9\\n          </div>\\n        </plus-aspect-ratio>\\n      </plus-grid-item>\\n    </plus-grid>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"6\\\">\\n    <plus-grid>\\n      <plus-grid-item xs=\\\"6\\\">\\n        <plus-aspect-ratio value=\\\"1\\\">\\n          <div class=\\\"box three\\\">\\n            1:1\\n          </div>\\n        </plus-aspect-ratio>\\n      </plus-grid-item>\\n      <plus-grid-item xs=\\\"6\\\" align-self=\\\"end\\\">\\n        <plus-aspect-ratio value=\\\"4/3\\\">\\n          <div class=\\\"box four\\\">\\n            4:3\\n          </div>\\n        </plus-aspect-ratio>\\n      </plus-grid-item>\\n      <plus-grid-item xs=\\\"12\\\">\\n        <plus-aspect-ratio value=\\\"18/6\\\">\\n          <div class=\\\"box five\\\">\\n            18:6\\n          </div>\\n        </plus-aspect-ratio>\\n      </plus-grid-item>\\n    </plus-grid>\\n  </plus-grid-item>\\n</plus-grid>\"}]}],\"methods\":[],\"properties\":[{\"name\":\"value\",\"type\":\"number | string\",\"description\":\"Specifies the ratio.\",\"values\":[{\"type\":\"number\"},{\"type\":\"string\"}]}],\"slots\":[],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/aspect-ratio\",\"filePath\":\"./src/components/aspect-ratio/aspect-ratio.tsx\",\"fileName\":\"aspect-ratio.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/aspect-ratio/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/aspect-ratio/usage\",\"tag\":\"plus-aspect-ratio\",\"usage\":{},\"docs\":\"This component helps to specify a fixed ratio for the width and height sizes of a visual object (e.g. Image).\",\"docsTags\":[{\"text\":\"default, video, more\",\"name\":\"examples\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"value\",\"type\":\"number | string\",\"mutable\":false,\"attr\":\"value\",\"reflectToAttr\":false,\"docs\":\"Specifies the ratio.\",\"docsTags\":[],\"values\":[{\"type\":\"number\"},{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2020-12-12T17:07:02.929Z\",\"size\":0},{\"key\":\"card-body\",\"tag\":\"plus-card-body\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Card body\",\"group\":\"card\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-body\",\"filePath\":\"./src/components/card/card-body/card-body.tsx\",\"fileName\":\"card-body.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-body/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-body/usage\",\"tag\":\"plus-card-body\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"card\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"card-footer\",\"tag\":\"plus-card-footer\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Card footer\",\"group\":\"card\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-footer\",\"filePath\":\"./src/components/card/card-footer/card-footer.tsx\",\"fileName\":\"card-footer.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-footer/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-footer/usage\",\"tag\":\"plus-card-footer\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"card\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"card-header\",\"tag\":\"plus-card-header\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Card header\",\"group\":\"card\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-header\",\"filePath\":\"./src/components/card/card-header/card-header.tsx\",\"fileName\":\"card-header.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-header/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/card/card-header/usage\",\"tag\":\"plus-card-header\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"card\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"dialog\",\"tag\":\"plus-dialog\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog\",\"group\":\"dialog\",\"description\":\"A dialog is a `conversation` between the system and the user. It is prompted when the system needs input from the user or to give the user urgent information concerning their current workflow.\",\"events\":[{\"name\":\"close\",\"cancelable\":true,\"detail\":\"void\",\"description\":\"When the dialog is going to hide\"},{\"name\":\"closed\",\"cancelable\":false,\"detail\":\"void\",\"description\":\"When the dialog is completely closed and its animation is completed.\"},{\"name\":\"open\",\"cancelable\":true,\"detail\":\"void\",\"description\":\"When the dialog is going to show this event triggers\"},{\"name\":\"opened\",\"cancelable\":false,\"detail\":\"void\",\"description\":\"When the dialog is completely shown and its animation is completed.\"}],\"examples\":[{\"key\":\"default\",\"title\":\"Default\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-default\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog connector=\\\"dialog-default\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"animation\",\"title\":\"Animation\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-animation\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-animation\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"persistent\",\"title\":\"Persistent\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-persistent\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-persistent\\\" persistent>\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"placement\",\"title\":\"Placement\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-placement\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-placement\\\" placement=\\\"center-bottom\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"size\",\"title\":\"Size\",\"readme\":\"\",\"codes\":[{\"key\":\"script\",\"type\":\"tsx\",\"value\":\"class {\\n\\n  @State()\\n  open = false;\\n\\n  @State()\\n  size = 'md';\\n\\n  hide() {\\n    this.open = false;\\n  }\\n\\n  show(size) {\\n    this.size = size;\\n    this.open = true;\\n  }\\n\\n  render() {\\n    return (\\n      <preview split=\\\"off\\\">\\n        <Host>\\n          <button onClick={() => this.show('sm')}>\\n            Small dialog\\n          </button>\\n          &nbsp;\\n          <button onClick={() => this.show('lg')}>\\n            Large dialog\\n          </button>\\n          &nbsp;\\n          <button onClick={() => this.show('xl')}>\\n            Extra large dialog\\n          </button>\\n          &nbsp;\\n          <plus-dialog class=\\\"fade\\\" open={this.open} size={this.size} onPlusClose={() => this.hide()}>\\n            <plus-dialog-content>\\n              <plus-dialog-header>\\n                Dialog Title\\n              </plus-dialog-header>\\n              <plus-dialog-body>\\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n              </plus-dialog-body>\\n              <plus-dialog-footer>\\n                <button onClick={() => this.hide()}>\\n                  Close\\n                </button>\\n              </plus-dialog-footer>\\n            </plus-dialog-content>\\n          </plus-dialog>\\n        </Host>\\n      </preview>\\n    )\\n  }\\n}\"}]},{\"key\":\"backdrop\",\"title\":\"Backdrop\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-backdrop\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-backdrop\\\" backdrop=\\\"false\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"scrollable\",\"title\":\"Scrollable\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-scrollable\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-scrollable\\\" scrollable>\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          <p>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\\n          </p>\\n          <p>\\n            Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\\n          </p>\\n          <p>\\n            Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\\n          </p>\\n          <p>\\n            Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\\n          </p>\\n          <p>\\n            Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\\n          </p>\\n          <p>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\\n          </p>\\n          <p>\\n            Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\\n          </p>\\n          <p>\\n            Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\\n          </p>\\n          <p>\\n            Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\\n          </p>\\n          <p>\\n            Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\\n          </p>\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"specific-scrollable\",\"title\":\"Specific scrollable\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-specific-scrollable\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-specific-scrollable\\\" scrollable>\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body scrollable>\\n          <p>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\\n          </p>\\n          <p>\\n            Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\\n          </p>\\n          <p>\\n            Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\\n          </p>\\n          <p>\\n            Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\\n          </p>\\n          <p>\\n            Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\\n          </p>\\n          <p>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum, pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna tempus, fringilla nisl.\\n          </p>\\n          <p>\\n            Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida, eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis. In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\\n          </p>\\n          <p>\\n            Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio. Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum, luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis maximus.\\n          </p>\\n          <p>\\n            Maecenas quis lorem rutrum, convallis purus ac, hendrerit dui. Etiam consectetur molestie eros sed lacinia. Maecenas ipsum est, consectetur et rutrum et, convallis quis metus. Praesent est eros, semper sed velit sit amet, gravida vestibulum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean varius, erat vel ullamcorper consequat, tellus massa gravida arcu, et blandit nisl justo vitae tellus. Suspendisse id metus aliquam, dignissim massa et, facilisis ex. Sed suscipit nunc elit, id dictum velit ultrices hendrerit. Nunc sit amet dui ultrices, sollicitudin justo quis, lacinia tortor. Sed viverra libero facilisis lectus pharetra, vel porttitor sem bibendum. Praesent non nibh quis ante viverra aliquet eu nec nisl. Mauris ante mauris, molestie eget feugiat in, semper quis massa.\\n          </p>\\n          <p>\\n            Maecenas vulputate finibus odio, vitae dignissim nibh ultricies rhoncus. Aenean in dictum justo. Vestibulum pellentesque lorem aliquam lectus finibus, id sagittis ex molestie. Duis rhoncus risus molestie ligula consequat efficitur. Aenean vel nisl vel sem pretium ultrices nec quis mi. Donec enim elit, tristique non sodales quis, iaculis ut justo. In laoreet sodales leo, vel maximus purus volutpat quis. Maecenas ac tincidunt nisl, vitae sodales nibh. Morbi tellus libero, feugiat vitae convallis pretium, fermentum in mi. Etiam dignissim vitae massa nec semper.\\n          </p>\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"fullscreen\",\"title\":\"Fullscreen\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-fullscreen\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-fullscreen\\\" placement=\\\"bottom\\\" fullscreen>\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"full-width\",\"title\":\"Full width\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-full-width\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-full-width\\\" full-width>\\n      <plus-dialog-content>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"full-height\",\"title\":\"Full height\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-full-height\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-full-height\\\" placement=\\\"center\\\" full-height>\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog Title\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\\n          consequat.\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"sticky\",\"title\":\"Sticky\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-sticky\\\">\\n      Open\\n    </plus-dialog-toggler>\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-sticky\\\" full-width sticky>\\n      <plus-dialog-content>\\n        <plus-dialog-body>\\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n        </plus-dialog-body>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]},{\"key\":\"nesting\",\"title\":\"Nesting\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview split=\\\"off\\\">\\n  <Host>\\n    <plus-dialog-toggler connector=\\\"dialog-nesting-1\\\">\\n      Open Dialog 1\\n    </plus-dialog-toggler>\\n    &nbsp;\\n    <plus-dialog-toggler connector=\\\"dialog-nesting-2\\\">\\n      Open Dialog 2\\n    </plus-dialog-toggler>\\n    &nbsp;\\n    <plus-dialog-toggler connector=\\\"dialog-nesting-3\\\">\\n      Open Dialog 3\\n    </plus-dialog-toggler>\\n    &nbsp;\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-nesting-1\\\" size=\\\"xl\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog 1\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          <p>\\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend\\n            ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere\\n            lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum\\n            hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum,\\n            pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo\\n            fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque\\n            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna\\n            tempus, fringilla nisl.\\n          </p>\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler connector=\\\"dialog-nesting-2\\\">\\n            Open Dialog 2\\n          </plus-dialog-toggler>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-nesting-2\\\" size=\\\"lg\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog 2\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          <p>\\n            Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae\\n            venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies\\n            nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non\\n            diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida,\\n            eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat\\n            urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis\\n            vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis.\\n            In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.\\n          </p>\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler connector=\\\"dialog-nesting-3\\\">\\n            Open Dialog 3\\n          </plus-dialog-toggler>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n\\n    <plus-dialog class=\\\"fade\\\" connector=\\\"dialog-nesting-3\\\" xs=\\\"sm\\\">\\n      <plus-dialog-content>\\n        <plus-dialog-header>\\n          Dialog 3\\n        </plus-dialog-header>\\n        <plus-dialog-body>\\n          <p>\\n            Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus\\n            sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio.\\n            Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante\\n            ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum,\\n            luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis\\n            maximus.\\n          </p>\\n        </plus-dialog-body>\\n        <plus-dialog-footer>\\n          <plus-dialog-toggler>\\n            Close\\n          </plus-dialog-toggler>\\n        </plus-dialog-footer>\\n      </plus-dialog-content>\\n    </plus-dialog>\\n  </Host>\\n</preview>\"}]}],\"methods\":[],\"properties\":[{\"name\":\"backdrop\",\"type\":\"boolean\",\"description\":\"Activate the dialog’s backdrop to show or not.\",\"default\":\"true\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"connector\",\"type\":\"string\",\"description\":\"Used to connect dialog and dialog-action components.\\nThis property helps you to attach which dialog action controls the dialog.\\nIt doesn't matter where the dialog action is.\\nYou can put the dialog’s action inside or outside of the dialog.\\nRead more about connectors here.\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"full-height\",\"type\":\"boolean\",\"description\":\"Set the height of the dialog as much as the screen’s height.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"full-width\",\"type\":\"boolean\",\"description\":\"Set the width of the dialog as much as the screen’s width.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"fullscreen\",\"type\":\"\\\"lg-down\\\" | \\\"md-down\\\" | \\\"sm-down\\\" | \\\"xl-down\\\" | \\\"xxl-down\\\" | boolean\",\"description\":\"Set both width and height of the dialog to occupy the screen size.\",\"values\":[{\"value\":\"lg-down\",\"type\":\"string\"},{\"value\":\"md-down\",\"type\":\"string\"},{\"value\":\"sm-down\",\"type\":\"string\"},{\"value\":\"xl-down\",\"type\":\"string\"},{\"value\":\"xxl-down\",\"type\":\"string\"},{\"type\":\"boolean\"}]},{\"name\":\"keyboard\",\"type\":\"boolean\",\"description\":\"Closes the dialog when `escape` key is pressed.\",\"default\":\"true\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"open\",\"type\":\"boolean\",\"description\":\"Control dialog to show or not.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"persistent\",\"type\":\"boolean\",\"description\":\"It prevents the dialog from closing on clicking outside of the element.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"placement\",\"type\":\"\\\"start\\\" | \\\"left\\\" | \\\"center\\\" | \\\"right\\\" | \\\"end\\\" | \\\"top\\\" | \\\"bottom\\\" | \\\"start-top\\\" | \\\"start-center\\\" | \\\"start-bottom\\\" | \\\"left-top\\\" | \\\"left-center\\\" | \\\"left-bottom\\\" | \\\"center-top\\\" | \\\"center-center\\\" | \\\"center-bottom\\\" | \\\"right-top\\\" | \\\"right-center\\\" | \\\"right-bottom\\\" | \\\"end-top\\\" | \\\"end-center\\\" | \\\"end-bottom\\\"\",\"description\":\"Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.\\nHorizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.\",\"default\":\"'top'\",\"values\":[{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"left\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"right\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"top\",\"type\":\"string\"},{\"value\":\"bottom\",\"type\":\"string\"},{\"value\":\"start-top\",\"type\":\"string\"},{\"value\":\"start-center\",\"type\":\"string\"},{\"value\":\"start-bottom\",\"type\":\"string\"},{\"value\":\"left-top\",\"type\":\"string\"},{\"value\":\"left-center\",\"type\":\"string\"},{\"value\":\"left-bottom\",\"type\":\"string\"},{\"value\":\"center-top\",\"type\":\"string\"},{\"value\":\"center-center\",\"type\":\"string\"},{\"value\":\"center-bottom\",\"type\":\"string\"},{\"value\":\"right-top\",\"type\":\"string\"},{\"value\":\"right-center\",\"type\":\"string\"},{\"value\":\"right-bottom\",\"type\":\"string\"},{\"value\":\"end-top\",\"type\":\"string\"},{\"value\":\"end-center\",\"type\":\"string\"},{\"value\":\"end-bottom\",\"type\":\"string\"}]},{\"name\":\"scrollable\",\"type\":\"boolean\",\"description\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"size\",\"type\":\"\\\"lg\\\" | \\\"sm\\\" | \\\"xl\\\"\",\"description\":\"TODO\",\"values\":[{\"value\":\"lg\",\"type\":\"string\"},{\"value\":\"sm\",\"type\":\"string\"},{\"value\":\"xl\",\"type\":\"string\"}]},{\"name\":\"sticky\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog\",\"filePath\":\"./src/components/dialog/dialog/dialog.tsx\",\"fileName\":\"dialog.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog/usage\",\"tag\":\"plus-dialog\",\"usage\":{},\"docs\":\"A dialog is a `conversation` between the system and the user. It is prompted when the system needs input from the user or to give the user urgent information concerning their current workflow.\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"},{\"text\":\"default, animation, persistent, placement, size, backdrop, scrollable, specific-scrollable, fullscreen, full-width, full-height, sticky, nesting\",\"name\":\"examples\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"backdrop\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"backdrop\",\"reflectToAttr\":false,\"docs\":\"Activate the dialog’s backdrop to show or not.\",\"docsTags\":[],\"default\":\"true\",\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"Used to connect dialog and dialog-action components.\\nThis property helps you to attach which dialog action controls the dialog.\\nIt doesn't matter where the dialog action is.\\nYou can put the dialog’s action inside or outside of the dialog.\\nRead more about connectors here.\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"fullHeight\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"full-height\",\"reflectToAttr\":false,\"docs\":\"Set the height of the dialog as much as the screen’s height.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"fullWidth\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"full-width\",\"reflectToAttr\":false,\"docs\":\"Set the width of the dialog as much as the screen’s width.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"fullscreen\",\"type\":\"\\\"lg-down\\\" | \\\"md-down\\\" | \\\"sm-down\\\" | \\\"xl-down\\\" | \\\"xxl-down\\\" | boolean\",\"mutable\":false,\"attr\":\"fullscreen\",\"reflectToAttr\":false,\"docs\":\"Set both width and height of the dialog to occupy the screen size.\",\"docsTags\":[],\"values\":[{\"value\":\"lg-down\",\"type\":\"string\"},{\"value\":\"md-down\",\"type\":\"string\"},{\"value\":\"sm-down\",\"type\":\"string\"},{\"value\":\"xl-down\",\"type\":\"string\"},{\"value\":\"xxl-down\",\"type\":\"string\"},{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"keyboard\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"keyboard\",\"reflectToAttr\":false,\"docs\":\"Closes the dialog when `escape` key is pressed.\",\"docsTags\":[],\"default\":\"true\",\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"open\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"open\",\"reflectToAttr\":true,\"docs\":\"Control dialog to show or not.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"persistent\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"persistent\",\"reflectToAttr\":false,\"docs\":\"It prevents the dialog from closing on clicking outside of the element.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"placement\",\"type\":\"\\\"start\\\" | \\\"left\\\" | \\\"center\\\" | \\\"right\\\" | \\\"end\\\" | \\\"top\\\" | \\\"bottom\\\" | \\\"start-top\\\" | \\\"start-center\\\" | \\\"start-bottom\\\" | \\\"left-top\\\" | \\\"left-center\\\" | \\\"left-bottom\\\" | \\\"center-top\\\" | \\\"center-center\\\" | \\\"center-bottom\\\" | \\\"right-top\\\" | \\\"right-center\\\" | \\\"right-bottom\\\" | \\\"end-top\\\" | \\\"end-center\\\" | \\\"end-bottom\\\"\",\"mutable\":false,\"attr\":\"placement\",\"reflectToAttr\":false,\"docs\":\"Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.\\nHorizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.\",\"docsTags\":[],\"default\":\"'top'\",\"values\":[{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"left\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"right\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"top\",\"type\":\"string\"},{\"value\":\"bottom\",\"type\":\"string\"},{\"value\":\"start-top\",\"type\":\"string\"},{\"value\":\"start-center\",\"type\":\"string\"},{\"value\":\"start-bottom\",\"type\":\"string\"},{\"value\":\"left-top\",\"type\":\"string\"},{\"value\":\"left-center\",\"type\":\"string\"},{\"value\":\"left-bottom\",\"type\":\"string\"},{\"value\":\"center-top\",\"type\":\"string\"},{\"value\":\"center-center\",\"type\":\"string\"},{\"value\":\"center-bottom\",\"type\":\"string\"},{\"value\":\"right-top\",\"type\":\"string\"},{\"value\":\"right-center\",\"type\":\"string\"},{\"value\":\"right-bottom\",\"type\":\"string\"},{\"value\":\"end-top\",\"type\":\"string\"},{\"value\":\"end-center\",\"type\":\"string\"},{\"value\":\"end-bottom\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"scrollable\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"scrollable\",\"reflectToAttr\":false,\"docs\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"size\",\"type\":\"\\\"lg\\\" | \\\"sm\\\" | \\\"xl\\\"\",\"mutable\":false,\"attr\":\"size\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"lg\",\"type\":\"string\"},{\"value\":\"sm\",\"type\":\"string\"},{\"value\":\"xl\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"sticky\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"sticky\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[{\"event\":\"plusClose\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"When the dialog is going to hide\",\"docsTags\":[]},{\"event\":\"plusClosed\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":false,\"composed\":true,\"docs\":\"When the dialog is completely closed and its animation is completed.\",\"docsTags\":[]},{\"event\":\"plusOpen\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"When the dialog is going to show this event triggers\",\"docsTags\":[]},{\"event\":\"plusOpened\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":false,\"composed\":true,\"docs\":\"When the dialog is completely shown and its animation is completed.\",\"docsTags\":[]}],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-16T13:12:34.808Z\",\"size\":11434},{\"key\":\"dialog-body\",\"tag\":\"plus-dialog-body\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog body\",\"group\":\"dialog\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"scrollable\",\"type\":\"boolean\",\"description\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-body\",\"filePath\":\"./src/components/dialog/dialog-body/dialog-body.tsx\",\"fileName\":\"dialog-body.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-body/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-body/usage\",\"tag\":\"plus-dialog-body\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"scrollable\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"scrollable\",\"reflectToAttr\":true,\"docs\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"dialog-content\",\"tag\":\"plus-dialog-content\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog content\",\"group\":\"dialog\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"scrollable\",\"type\":\"boolean\",\"description\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-content\",\"filePath\":\"./src/components/dialog/dialog-content/dialog-content.tsx\",\"fileName\":\"dialog-content.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-content/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-content/usage\",\"tag\":\"plus-dialog-content\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"scrollable\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"scrollable\",\"reflectToAttr\":true,\"docs\":\"It makes the user able to scroll the content by adding a scroll beside it.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"dialog-footer\",\"tag\":\"plus-dialog-footer\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog footer\",\"group\":\"dialog\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-footer\",\"filePath\":\"./src/components/dialog/dialog-footer/dialog-footer.tsx\",\"fileName\":\"dialog-footer.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-footer/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-footer/usage\",\"tag\":\"plus-dialog-footer\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"dialog-header\",\"tag\":\"plus-dialog-header\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog header\",\"group\":\"dialog\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-header\",\"filePath\":\"./src/components/dialog/dialog-header/dialog-header.tsx\",\"fileName\":\"dialog-header.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-header/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-header/usage\",\"tag\":\"plus-dialog-header\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"dialog-toggler\",\"tag\":\"plus-dialog-toggler\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Dialog toggler\",\"group\":\"dialog\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"connector\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-toggler\",\"filePath\":\"./src/components/dialog/dialog-toggler/dialog-toggler.tsx\",\"fileName\":\"dialog-toggler.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-toggler/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/dialog/dialog-toggler/usage\",\"tag\":\"plus-dialog-toggler\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"dialog\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"drawer\",\"tag\":\"plus-drawer\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Drawer\",\"group\":\"drawer\",\"description\":\"TODO\",\"events\":[{\"name\":\"close\",\"cancelable\":true,\"detail\":\"void\",\"description\":\"When the drawer is going to hide\"},{\"name\":\"closed\",\"cancelable\":false,\"detail\":\"void\",\"description\":\"When the drawer is completely closed and its animation is completed.\"},{\"name\":\"open\",\"cancelable\":true,\"detail\":\"void\",\"description\":\"When the drawer is going to show this event triggers\"},{\"name\":\"opened\",\"cancelable\":false,\"detail\":\"void\",\"description\":\"When the drawer is completely shown and its animation is completed.\"}],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"backdrop\",\"type\":\"\\\"auto\\\" | boolean\",\"description\":\"Activate the drawer’s backdrop to show or not.\",\"default\":\"'auto'\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"type\":\"boolean\"}]},{\"name\":\"breakpoint\",\"type\":\"\\\"lg\\\" | \\\"md\\\" | \\\"sm\\\" | \\\"xs\\\"\",\"description\":\"TODO\",\"default\":\"'md'\",\"values\":[{\"value\":\"lg\",\"type\":\"string\"},{\"value\":\"md\",\"type\":\"string\"},{\"value\":\"sm\",\"type\":\"string\"},{\"value\":\"xs\",\"type\":\"string\"}]},{\"name\":\"connector\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"mini\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"mini-size\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"open\",\"type\":\"boolean\",\"description\":\"Control drawer to show or not.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"persistent\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"placement\",\"type\":\"\\\"bottom\\\" | \\\"end\\\" | \\\"left\\\" | \\\"right\\\" | \\\"start\\\" | \\\"top\\\"\",\"description\":\"TODO\",\"values\":[{\"value\":\"bottom\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"left\",\"type\":\"string\"},{\"value\":\"right\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"top\",\"type\":\"string\"}]},{\"name\":\"reverse\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"size\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"temporary\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[{\"name\":\"--plus-drawer-size\",\"description\":\"TODO\",\"default\":\"280px\"},{\"name\":\"--plus-drawer-mini-size\",\"description\":\"TODO\",\"default\":\"0\"}],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer\",\"filePath\":\"./src/components/drawer/drawer/drawer.tsx\",\"fileName\":\"drawer.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer/usage\",\"tag\":\"plus-drawer\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"drawer\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"backdrop\",\"type\":\"\\\"auto\\\" | boolean\",\"mutable\":false,\"attr\":\"backdrop\",\"reflectToAttr\":false,\"docs\":\"Activate the drawer’s backdrop to show or not.\",\"docsTags\":[],\"default\":\"'auto'\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"breakpoint\",\"type\":\"\\\"lg\\\" | \\\"md\\\" | \\\"sm\\\" | \\\"xs\\\"\",\"mutable\":false,\"attr\":\"breakpoint\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"default\":\"'md'\",\"values\":[{\"value\":\"lg\",\"type\":\"string\"},{\"value\":\"md\",\"type\":\"string\"},{\"value\":\"sm\",\"type\":\"string\"},{\"value\":\"xs\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"mini\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"mini\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"miniSize\",\"type\":\"string\",\"mutable\":false,\"attr\":\"mini-size\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"open\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"open\",\"reflectToAttr\":false,\"docs\":\"Control drawer to show or not.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"persistent\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"persistent\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"placement\",\"type\":\"\\\"bottom\\\" | \\\"end\\\" | \\\"left\\\" | \\\"right\\\" | \\\"start\\\" | \\\"top\\\"\",\"mutable\":false,\"attr\":\"placement\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"bottom\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"left\",\"type\":\"string\"},{\"value\":\"right\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"top\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"reverse\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"reverse\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"size\",\"type\":\"string\",\"mutable\":false,\"attr\":\"size\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"temporary\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"temporary\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[{\"event\":\"plusClose\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"When the drawer is going to hide\",\"docsTags\":[]},{\"event\":\"plusClosed\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":false,\"composed\":true,\"docs\":\"When the drawer is completely closed and its animation is completed.\",\"docsTags\":[]},{\"event\":\"plusOpen\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"When the drawer is going to show this event triggers\",\"docsTags\":[]},{\"event\":\"plusOpened\",\"detail\":\"void\",\"bubbles\":false,\"cancelable\":false,\"composed\":true,\"docs\":\"When the drawer is completely shown and its animation is completed.\",\"docsTags\":[]}],\"styles\":[{\"name\":\"--plus-drawer-mini-size\",\"annotation\":\"prop\",\"docs\":\"TODO\"},{\"name\":\"--plus-drawer-size\",\"annotation\":\"prop\",\"docs\":\"TODO\"}],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-18T18:29:42.099Z\",\"size\":7372},{\"key\":\"drawer-toggler\",\"tag\":\"plus-drawer-toggler\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Drawer toggler\",\"group\":\"drawer\",\"description\":\"\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"connector\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer-toggler\",\"filePath\":\"./src/components/drawer/drawer-toggler/drawer-toggler.tsx\",\"fileName\":\"drawer-toggler.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer-toggler/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/drawer/drawer-toggler/usage\",\"tag\":\"plus-drawer-toggler\",\"usage\":{},\"docs\":\"\",\"docsTags\":[{\"text\":\"drawer\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"grid\",\"tag\":\"plus-grid\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Grid\",\"group\":\"grid\",\"description\":\"TODO: HTML+ grid is extremely flexible and powerful.\\nAll you need is to use one of the best flexbox-based grid systems ever in the world\\nto build simple to complex responsive layouts, just using two main components:\\nhp-grid (as a container) & hp-grid-item.\\nUse these components to align content in any form & shape and for all screen sizes\\nwith 12 available column sizes and 5 default breakpoints.\",\"events\":[],\"examples\":[{\"key\":\"default\",\"title\":\"Default\",\"readme\":\"TODO: no border, padding (used in gutter), margin (offset) on grid-item\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid>\\n  <plus-grid-item xs=\\\"12\\\" md=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, md=4\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" md=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, md=4\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" md=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, md=4\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"auto-sizing\",\"title\":\"Auto sizing\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<Host>\\n  <plus-grid>\\n    <plus-grid-item xs=\\\"grow\\\">\\n      <div class=\\\"box\\\">\\n        xs=grow\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"grow\\\">\\n      <div class=\\\"box\\\">\\n        xs=grow\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"grow\\\">\\n      <div class=\\\"box\\\">\\n        xs=grow\\n      </div>\\n    </plus-grid-item>\\n  </plus-grid>\\n  <plus-grid>\\n    <plus-grid-item xs=\\\"12\\\" md=\\\"2\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, md=2\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"grow\\\">\\n      <div class=\\\"box\\\">\\n        xs=grow\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" md=\\\"2\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, md=2\\n      </div>\\n    </plus-grid-item>\\n  </plus-grid>\\n</Host>\"}]},{\"key\":\"gutters\",\"title\":\"Gutters\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid gutter=\\\"lg\\\">\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"5\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=6, lg=5\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=6, lg=4\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=7, lg=3\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=5, lg=3\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=5, lg=4\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"5\\\">\\n    <div class=\\\"box\\\">\\n      xs=12, sm=7, lg=5\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"gutters-x\",\"title\":\"Gutters x\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<Host>\\n  <plus-grid gutter-x=\\\"md\\\">\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"5\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=6, lg=5\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"4\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=6, lg=4\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"3\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=7, lg=3\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"3\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=5, lg=3\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"4\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=5, lg=4\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"5\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=7, lg=5\\n      </div>\\n    </plus-grid-item>\\n  </plus-grid>\\n</Host>\"}]},{\"key\":\"gutters-y\",\"title\":\"Gutters y\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<Host>\\n  <plus-grid gutter-y=\\\"md\\\">\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"5\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=6, lg=5\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"6\\\" lg=\\\"4\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=6, lg=4\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"3\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=7, lg=3\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"3\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=5, lg=3\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"5\\\" lg=\\\"4\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=5, lg=4\\n      </div>\\n    </plus-grid-item>\\n    <plus-grid-item xs=\\\"12\\\" sm=\\\"7\\\" lg=\\\"5\\\">\\n      <div class=\\\"box\\\">\\n        xs=12, sm=7, lg=5\\n      </div>\\n    </plus-grid-item>\\n  </plus-grid>\\n</Host>\"}]},{\"key\":\"align-items\",\"title\":\"Align items\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\"plus-grid {\\n  background-color: #fafafa;\\n  height: 140px;\\n}\\n.box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid align-items=\\\"center\\\">\\n  <plus-grid-item xs=\\\"6\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"align-content\",\"title\":\"Align content\",\"readme\":\"TODO: align-content (unlike align-items) affect all rows of items\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\"plus-grid {\\n  background-color: #fafafa;\\n  height: 140px;\\n}\\n.box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid align-content=\\\"center\\\">\\n  <plus-grid-item xs=\\\"6\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"align-self\",\"title\":\"Align self\",\"readme\":\"TODO: align-self on grid-item overrides grid align-items\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\"plus-grid {\\n  background-color: #fafafa;\\n  height: 140px;\\n}\\n.box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid align-items=\\\"center\\\">\\n  <plus-grid-item xs=\\\"grow\\\" align-self=\\\"start\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"grow\\\" align-self=\\\"end\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"justify\",\"title\":\"Justify\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid justify=\\\"center\\\">\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"reverse\",\"title\":\"Reverse\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid reverse>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item 1\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item 2\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      Item 3\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"wrap\",\"title\":\"Wrap\",\"readme\":\"TODO: wrap is enable by default. if more than 12 you can off.\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid wrap=\\\"off\\\">\\n  <plus-grid-item xs=\\\"6\\\">\\n    <div class=\\\"box\\\">\\n      xs=6\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      xs=2\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"6\\\">\\n    <div class=\\\"box\\\">\\n      xs=6\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"2\\\">\\n    <div class=\\\"box\\\">\\n      xs=2\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"offset\",\"title\":\"Offset\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      xs=3\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item offset-xs=\\\"3\\\" xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      offset-xs=\\\"3\\\", xs=3\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      xs=3\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"order\",\"title\":\"Order\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid>\\n  <plus-grid-item order-xs=\\\"3\\\" xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      order=3\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item order-xs=\\\"2\\\" xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      order=2\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item order-xs=\\\"1\\\" xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      order=1\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"hide\",\"title\":\"Hide\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\".box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid>\\n  <plus-grid-item hide-sm xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      xs=3, hide-sm\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item hide-md xs=\\\"4\\\">\\n    <div class=\\\"box\\\">\\n      xs=4, hide-md\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item hide-lg xs=\\\"5\\\">\\n    <div class=\\\"box\\\">\\n      xs=5, hide-lg\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]},{\"key\":\"vertical\",\"title\":\"Vertical\",\"readme\":\"\",\"codes\":[{\"key\":\"style\",\"type\":\"css\",\"value\":\"plus-grid {\\n  height: 200px;\\n}\\n.box {\\n  border: 1px solid #ccc;\\n  background-color: #eee;\\n  height: 100%;\\n  padding: 0.5em;\\n  text-align: center;\\n}\"},{\"key\":\"template\",\"type\":\"html\",\"value\":\"<plus-grid align-items=\\\"center\\\" vertical>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"grow\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n  <plus-grid-item xs=\\\"3\\\">\\n    <div class=\\\"box\\\">\\n      Item\\n    </div>\\n  </plus-grid-item>\\n</plus-grid>\"}]}],\"methods\":[],\"properties\":[{\"name\":\"align-content\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows (It overrides alignItems).\",\"default\":\"'stretch'\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-content-lg\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows for large display sizes\\n(It overrides alignItemsLg).\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-content-md\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows for medium display sizes\\n(It overrides alignItemsMd).\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-content-sm\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows for small display sizes\\n(It overrides alignItemsSm).\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-content-xl\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows for extra-large display sizes\\n(It overrides alignItemsXl).\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-content-xs\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically across all rows for extra-small display sizes\\n(It overrides alignItemsXs).\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row.\",\"default\":\"'stretch'\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items-lg\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row for large display sizes.\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items-md\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row for medium display sizes.\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items-sm\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row for small display sizes.\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items-xl\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row for extra-large display sizes.\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-items-xs\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns contents vertically inside their own row for extra-small display sizes.\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"gutter\",\"type\":\"string\",\"description\":\"Adds a gap between contents to make space between them vertically and horizontally.\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"gutter-x\",\"type\":\"string\",\"description\":\"Adds a gap between contents to make space between them horizontally.\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"gutter-y\",\"type\":\"string\",\"description\":\"Adds a gap between contents to make space between them vertically.\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"justify\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally.\",\"default\":\"'start'\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"justify-lg\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally for large display sizes.\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"justify-md\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally for medium display sizes.\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"justify-sm\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally for small display sizes.\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"justify-xl\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally for extra-large display sizes.\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"justify-xs\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"description\":\"Justifies contents horizontally for extra-small display sizes.\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"reverse\",\"type\":\"boolean\",\"description\":\"Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"vertical\",\"type\":\"boolean\",\"description\":\"Changes the flow of contents from left-to-right to top-to-down.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"wrap\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width.\",\"default\":\"'on'\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"wrap-lg\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for large screen devices.\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"wrap-md\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for medium screen devices.\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"wrap-sm\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for small screen devices.\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"wrap-xl\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for extra-large screen devices.\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"wrap-xs\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"description\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for extra-small screen devices.\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid\",\"filePath\":\"./src/components/grid/grid/grid.tsx\",\"fileName\":\"grid.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid/usage\",\"tag\":\"plus-grid\",\"usage\":{},\"docs\":\"TODO: HTML+ grid is extremely flexible and powerful.\\nAll you need is to use one of the best flexbox-based grid systems ever in the world\\nto build simple to complex responsive layouts, just using two main components:\\nhp-grid (as a container) & hp-grid-item.\\nUse these components to align content in any form & shape and for all screen sizes\\nwith 12 available column sizes and 5 default breakpoints.\",\"docsTags\":[{\"text\":\"grid\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"},{\"text\":\"default, auto-sizing, gutters, gutters-x, gutters-y, align-items, align-content, align-self, justify, reverse, wrap, offset, order, hide, vertical\",\"name\":\"examples\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"alignContent\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows (It overrides alignItems).\",\"docsTags\":[],\"default\":\"'stretch'\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignContentLg\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content-lg\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows for large display sizes\\n(It overrides alignItemsLg).\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignContentMd\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content-md\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows for medium display sizes\\n(It overrides alignItemsMd).\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignContentSm\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content-sm\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows for small display sizes\\n(It overrides alignItemsSm).\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignContentXl\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content-xl\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows for extra-large display sizes\\n(It overrides alignItemsXl).\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignContentXs\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-content-xs\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically across all rows for extra-small display sizes\\n(It overrides alignItemsXs).\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItems\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row.\",\"docsTags\":[],\"default\":\"'stretch'\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItemsLg\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items-lg\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row for large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItemsMd\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items-md\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row for medium display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItemsSm\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items-sm\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row for small display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItemsXl\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items-xl\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row for extra-large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignItemsXs\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-items-xs\",\"reflectToAttr\":false,\"docs\":\"Aligns contents vertically inside their own row for extra-small display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"gutter\",\"type\":\"string\",\"mutable\":false,\"attr\":\"gutter\",\"reflectToAttr\":false,\"docs\":\"Adds a gap between contents to make space between them vertically and horizontally.\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"gutterX\",\"type\":\"string\",\"mutable\":false,\"attr\":\"gutter-x\",\"reflectToAttr\":false,\"docs\":\"Adds a gap between contents to make space between them horizontally.\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"gutterY\",\"type\":\"string\",\"mutable\":false,\"attr\":\"gutter-y\",\"reflectToAttr\":false,\"docs\":\"Adds a gap between contents to make space between them vertically.\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justify\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally.\",\"docsTags\":[],\"default\":\"'start'\",\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justifyLg\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify-lg\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally for large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justifyMd\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify-md\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally for medium display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justifySm\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify-sm\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally for small display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justifyXl\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify-xl\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally for extra-large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"justifyXs\",\"type\":\"\\\"around\\\" | \\\"between\\\" | \\\"center\\\" | \\\"end\\\" | \\\"evenly\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify-xs\",\"reflectToAttr\":false,\"docs\":\"Justifies contents horizontally for extra-small display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"around\",\"type\":\"string\"},{\"value\":\"between\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"evenly\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"reverse\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"reverse\",\"reflectToAttr\":false,\"docs\":\"Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"vertical\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"vertical\",\"reflectToAttr\":false,\"docs\":\"Changes the flow of contents from left-to-right to top-to-down.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"wrap\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width.\",\"docsTags\":[],\"default\":\"'on'\",\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"wrapLg\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap-lg\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for large screen devices.\",\"docsTags\":[],\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"wrapMd\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap-md\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for medium screen devices.\",\"docsTags\":[],\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"wrapSm\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap-sm\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for small screen devices.\",\"docsTags\":[],\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"wrapXl\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap-xl\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for extra-large screen devices.\",\"docsTags\":[],\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"wrapXs\",\"type\":\"\\\"off\\\" | \\\"on\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"wrap-xs\",\"reflectToAttr\":false,\"docs\":\"Controls allowing the container to wrap the content or not if the cumulative width\\nsize of contents is more than the twelve-column width for extra-small screen devices.\",\"docsTags\":[],\"values\":[{\"value\":\"off\",\"type\":\"string\"},{\"value\":\"on\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-18T18:29:42.100Z\",\"size\":19694},{\"key\":\"grid-item\",\"tag\":\"plus-grid-item\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Grid item\",\"group\":\"grid\",\"description\":\"Use as many hp-grid-items as you want inside a hp-grid to layout your content.\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"align-self\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid).\\nIt overrides the align-items property of its parent.\",\"default\":\"'auto'\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-self-lg\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid) for large display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for large breakpoints).\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-self-md\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid) for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for medium breakpoints).\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-self-sm\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid) for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for small breakpoints).\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-self-xl\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid) for extra-large display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for extra-large breakpoints).\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"align-self-xs\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"description\":\"Aligns the grid-item vertically in its container (grid) for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for extra-small breakpoints).\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}]},{\"name\":\"hide\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in all display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-lg\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in large display sizes (desktop).\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-lg-down\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in large and smaller display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-lg-up\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in large and larger display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-md\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in medium display sizes (tablets).\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-md-down\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in medium and smaller display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-md-up\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in medium and larger display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-sm\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in small display sizes (smartphones).\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-sm-down\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in small and smaller display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-sm-up\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in small and larger display sizes.\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-xl\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in extra-large display sizes (wide desktop screen).\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"hide-xs\",\"type\":\"boolean\",\"description\":\"Hides the grid-item in extra-small display sizes (mobile phones).\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"lg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"description\":\"Specifies the number of columns for large viewports (desktop).\\nIt also determines the number of columns for bigger display sizes when\\nthe upper breakpoint (xl) is not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}]},{\"name\":\"md\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"description\":\"Specifies the number of columns for medium viewports (tablets).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (lg and xl) are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}]},{\"name\":\"offset-lg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Adds an offset space before the grid-item for large display sizes.\\nIt also applies to the larger breakpoint (xl) while that is not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"offset-md\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Adds an offset space before the grid-item for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"offset-sm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Adds an offset space before the grid-item for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"offset-xl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Adds an offset space before the grid-item for extra-large display sizes.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"offset-xs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Adds an offset space before the grid-item for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"order-lg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Overrides the default order of the grid-item for large display sizes.\\nIt also applies to the larger breakpoint (xl) while that is not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"order-md\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Overrides the default order of the grid-item for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"order-sm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Overrides the default order of the grid-item for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"order-xl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Overrides the default order of the grid-item for extra-large display sizes.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"order-xs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"description\":\"Overrides the default order of the grid-item for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}]},{\"name\":\"sm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"description\":\"Specifies the number of columns for small viewports (smartphones).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (md, lg, and xl) are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}]},{\"name\":\"xl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"description\":\"Specifies the number of columns for extra-large viewports (wide desktop screen).\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}]},{\"name\":\"xs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"description\":\"Specifies the number of columns for extra-small viewports (mobile phones).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (sm, md, lg, and xl) are not specified.\",\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid-item\",\"filePath\":\"./src/components/grid/grid-item/grid-item.tsx\",\"fileName\":\"grid-item.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid-item/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/grid/grid-item/usage\",\"tag\":\"plus-grid-item\",\"usage\":{},\"docs\":\"Use as many hp-grid-items as you want inside a hp-grid to layout your content.\",\"docsTags\":[{\"text\":\"grid\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"alignSelf\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid).\\nIt overrides the align-items property of its parent.\",\"docsTags\":[],\"default\":\"'auto'\",\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignSelfLg\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self-lg\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid) for large display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for large breakpoints).\",\"docsTags\":[],\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignSelfMd\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self-md\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid) for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for medium breakpoints).\",\"docsTags\":[],\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignSelfSm\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self-sm\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid) for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for small breakpoints).\",\"docsTags\":[],\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignSelfXl\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self-xl\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid) for extra-large display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for extra-large breakpoints).\",\"docsTags\":[],\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"alignSelfXs\",\"type\":\"\\\"auto\\\" | \\\"center\\\" | \\\"end\\\" | \\\"start\\\" | \\\"stretch\\\"\",\"mutable\":false,\"attr\":\"align-self-xs\",\"reflectToAttr\":true,\"docs\":\"Aligns the grid-item vertically in its container (grid) for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\\n(It overrides the align-items property of its parent just for extra-small breakpoints).\",\"docsTags\":[],\"values\":[{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"},{\"value\":\"stretch\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"hide\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in all display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideLg\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-lg\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in large display sizes (desktop).\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideLgDown\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-lg-down\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in large and smaller display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideLgUp\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-lg-up\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in large and larger display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideMd\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-md\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in medium display sizes (tablets).\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideMdDown\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-md-down\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in medium and smaller display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideMdUp\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-md-up\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in medium and larger display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideSm\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-sm\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in small display sizes (smartphones).\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideSmDown\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-sm-down\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in small and smaller display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideSmUp\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-sm-up\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in small and larger display sizes.\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideXl\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-xl\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in extra-large display sizes (wide desktop screen).\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"hideXs\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"hide-xs\",\"reflectToAttr\":true,\"docs\":\"Hides the grid-item in extra-small display sizes (mobile phones).\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"lg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"mutable\":false,\"attr\":\"lg\",\"reflectToAttr\":true,\"docs\":\"Specifies the number of columns for large viewports (desktop).\\nIt also determines the number of columns for bigger display sizes when\\nthe upper breakpoint (xl) is not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"md\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"mutable\":false,\"attr\":\"md\",\"reflectToAttr\":true,\"docs\":\"Specifies the number of columns for medium viewports (tablets).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (lg and xl) are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"offsetLg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"offset-lg\",\"reflectToAttr\":true,\"docs\":\"Adds an offset space before the grid-item for large display sizes.\\nIt also applies to the larger breakpoint (xl) while that is not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"offsetMd\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"offset-md\",\"reflectToAttr\":true,\"docs\":\"Adds an offset space before the grid-item for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"offsetSm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"offset-sm\",\"reflectToAttr\":true,\"docs\":\"Adds an offset space before the grid-item for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"offsetXl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"offset-xl\",\"reflectToAttr\":true,\"docs\":\"Adds an offset space before the grid-item for extra-large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"offsetXs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"offset-xs\",\"reflectToAttr\":true,\"docs\":\"Adds an offset space before the grid-item for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"orderLg\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"order-lg\",\"reflectToAttr\":true,\"docs\":\"Overrides the default order of the grid-item for large display sizes.\\nIt also applies to the larger breakpoint (xl) while that is not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"orderMd\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"order-md\",\"reflectToAttr\":true,\"docs\":\"Overrides the default order of the grid-item for medium display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"orderSm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"order-sm\",\"reflectToAttr\":true,\"docs\":\"Overrides the default order of the grid-item for small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"orderXl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"order-xl\",\"reflectToAttr\":true,\"docs\":\"Overrides the default order of the grid-item for extra-large display sizes.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"orderXs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\"\",\"mutable\":false,\"attr\":\"order-xs\",\"reflectToAttr\":true,\"docs\":\"Overrides the default order of the grid-item for extra-small display sizes.\\nIt also applies to larger breakpoints and display sizes while they are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"sm\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"mutable\":false,\"attr\":\"sm\",\"reflectToAttr\":true,\"docs\":\"Specifies the number of columns for small viewports (smartphones).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (md, lg, and xl) are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"xl\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"mutable\":false,\"attr\":\"xl\",\"reflectToAttr\":true,\"docs\":\"Specifies the number of columns for extra-large viewports (wide desktop screen).\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"xs\",\"type\":\"\\\"1\\\" | \\\"10\\\" | \\\"11\\\" | \\\"12\\\" | \\\"2\\\" | \\\"3\\\" | \\\"4\\\" | \\\"5\\\" | \\\"6\\\" | \\\"7\\\" | \\\"8\\\" | \\\"9\\\" | \\\"auto\\\" | \\\"grow\\\"\",\"mutable\":false,\"attr\":\"xs\",\"reflectToAttr\":true,\"docs\":\"Specifies the number of columns for extra-small viewports (mobile phones).\\nIt also determines the number of columns for bigger display sizes when\\nother upper breakpoints (sm, md, lg, and xl) are not specified.\",\"docsTags\":[],\"values\":[{\"value\":\"1\",\"type\":\"string\"},{\"value\":\"10\",\"type\":\"string\"},{\"value\":\"11\",\"type\":\"string\"},{\"value\":\"12\",\"type\":\"string\"},{\"value\":\"2\",\"type\":\"string\"},{\"value\":\"3\",\"type\":\"string\"},{\"value\":\"4\",\"type\":\"string\"},{\"value\":\"5\",\"type\":\"string\"},{\"value\":\"6\",\"type\":\"string\"},{\"value\":\"7\",\"type\":\"string\"},{\"value\":\"8\",\"type\":\"string\"},{\"value\":\"9\",\"type\":\"string\"},{\"value\":\"auto\",\"type\":\"string\"},{\"value\":\"grow\",\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"intersection\",\"tag\":\"plus-intersection\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Intersection\",\"group\":\"\",\"description\":\"TODO\",\"events\":[{\"name\":\"change\",\"cancelable\":false,\"detail\":\"IntersectionObserverEntry\",\"description\":\"TODO\"}],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"once\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"type\":\"Element\",\"description\":\"TODO\",\"values\":[{\"type\":\"Element\"}]},{\"name\":\"root-margin\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"threshold\",\"type\":\"number | number[]\",\"description\":\"TODO\",\"values\":[{\"type\":\"number\"},{\"type\":\"number[]\"}]}],\"slots\":[],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/intersection\",\"filePath\":\"./src/components/intersection/intersection.tsx\",\"fileName\":\"intersection.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/intersection/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/intersection/usage\",\"tag\":\"plus-intersection\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"once\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"once\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"root\",\"type\":\"Element\",\"mutable\":false,\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"Element\"}],\"optional\":true,\"required\":false},{\"name\":\"rootMargin\",\"type\":\"string\",\"mutable\":false,\"attr\":\"root-margin\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"threshold\",\"type\":\"number | number[]\",\"mutable\":false,\"attr\":\"threshold\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"number\"},{\"type\":\"number[]\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[{\"event\":\"plusChange\",\"detail\":\"IntersectionObserverEntry\",\"bubbles\":false,\"cancelable\":false,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]}],\"styles\":[],\"slots\":[],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-16T13:12:34.823Z\",\"size\":1130},{\"key\":\"tabs\",\"tag\":\"plus-tabs\",\"tags\":[],\"deprecated\":false,\"development\":true,\"title\":\"Tabs\",\"group\":\"tabs\",\"description\":\"TODO\",\"events\":[{\"name\":\"change\",\"cancelable\":true,\"detail\":\"any\",\"description\":\"TODO\"}],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"connector\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"value\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"vertical\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs\",\"filePath\":\"./src/components/tabs/tabs/tabs.tsx\",\"fileName\":\"tabs.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs/usage\",\"tag\":\"plus-tabs\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"name\":\"development\"},{\"text\":\"tabs\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[\"plus-tunnel-consumer\"],\"dependencyGraph\":{\"plus-tabs\":[\"plus-tunnel-consumer\"]},\"props\":[{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"value\",\"type\":\"string\",\"mutable\":false,\"attr\":\"value\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"vertical\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"vertical\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[{\"event\":\"wowChange\",\"detail\":\"any\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]}],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-16T13:12:34.843Z\",\"size\":5499},{\"key\":\"tabs-bar\",\"tag\":\"plus-tabs-bar\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Tabs bar\",\"group\":\"tabs\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"grow\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"justify\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\"\",\"description\":\"TODO\",\"default\":\"'start'\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}]},{\"name\":\"reverse\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-bar\",\"filePath\":\"./src/components/tabs/tabs-bar/tabs-bar.tsx\",\"fileName\":\"tabs-bar.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-bar/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-bar/usage\",\"tag\":\"plus-tabs-bar\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"tabs\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"grow\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"grow\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"justify\",\"type\":\"\\\"center\\\" | \\\"end\\\" | \\\"start\\\"\",\"mutable\":false,\"attr\":\"justify\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"default\":\"'start'\",\"values\":[{\"value\":\"center\",\"type\":\"string\"},{\"value\":\"end\",\"type\":\"string\"},{\"value\":\"start\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"reverse\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"reverse\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"tabs-panel\",\"tag\":\"plus-tabs-panel\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Tabs panel\",\"group\":\"tabs\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"value\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panel\",\"filePath\":\"./src/components/tabs/tabs-panel/tabs-panel.tsx\",\"fileName\":\"tabs-panel.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panel/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panel/usage\",\"tag\":\"plus-tabs-panel\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"tabs\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[\"plus-tunnel-consumer\"],\"dependencyGraph\":{\"plus-tabs-panel\":[\"plus-tunnel-consumer\"]},\"props\":[{\"name\":\"value\",\"type\":\"string\",\"mutable\":false,\"attr\":\"value\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"tabs-panels\",\"tag\":\"plus-tabs-panels\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Tabs panels\",\"group\":\"tabs\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"connector\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panels\",\"filePath\":\"./src/components/tabs/tabs-panels/tabs-panels.tsx\",\"fileName\":\"tabs-panels.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panels/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-panels/usage\",\"tag\":\"plus-tabs-panels\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"tabs\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[\"plus-tunnel-consumer\"],\"dependencyGraph\":{\"plus-tabs-panels\":[\"plus-tunnel-consumer\"]},\"props\":[{\"name\":\"connector\",\"type\":\"string\",\"mutable\":false,\"attr\":\"connector\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"tabs-tab\",\"tag\":\"plus-tabs-tab\",\"tags\":[],\"deprecated\":false,\"development\":false,\"title\":\"Tabs tab\",\"group\":\"tabs\",\"description\":\"TODO\",\"events\":[],\"examples\":[],\"methods\":[],\"properties\":[{\"name\":\"disabled\",\"type\":\"boolean\",\"description\":\"TODO\",\"values\":[{\"type\":\"boolean\"}]},{\"name\":\"value\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]}],\"slots\":[{\"name\":\"default\",\"description\":\"The default slot\"}],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-tab\",\"filePath\":\"./src/components/tabs/tabs-tab/tabs-tab.tsx\",\"fileName\":\"tabs-tab.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-tab/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/tabs/tabs-tab/usage\",\"tag\":\"plus-tabs-tab\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"text\":\"tabs\",\"name\":\"group\"},{\"text\":\"- The default slot\",\"name\":\"slot\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[\"plus-tunnel-consumer\"],\"dependencyGraph\":{\"plus-tabs-tab\":[\"plus-tunnel-consumer\"]},\"props\":[{\"name\":\"disabled\",\"type\":\"boolean\",\"mutable\":false,\"attr\":\"disabled\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"value\",\"type\":\"string\",\"mutable\":false,\"attr\":\"value\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[],\"styles\":[],\"slots\":[{\"name\":\"\",\"docs\":\"The default slot\"}],\"parts\":[],\"listeners\":[]},\"main\":false},{\"key\":\"transition\",\"tag\":\"plus-transition\",\"tags\":[],\"deprecated\":false,\"development\":true,\"title\":\"Transition\",\"group\":\"\",\"description\":\"TODO\",\"events\":[{\"name\":\"cancel\",\"cancelable\":true,\"detail\":\"any\",\"description\":\"TODO\"},{\"name\":\"end\",\"cancelable\":true,\"detail\":\"any\",\"description\":\"TODO\"},{\"name\":\"iteration\",\"cancelable\":true,\"detail\":\"any\",\"description\":\"TODO\"},{\"name\":\"start\",\"cancelable\":true,\"detail\":\"any\",\"description\":\"TODO\"}],\"examples\":[{\"key\":\"default\",\"title\":\"Default\",\"readme\":\"\",\"codes\":[{\"key\":\"template\",\"type\":\"html\",\"value\":\"<preview>\\n    <plus-transition name=\\\"shake-x\\\" repeat=\\\"infinite\\\">\\n        HTMLPLUS\\n    </plus-transition>\\n</preview>\"}]}],\"methods\":[],\"properties\":[{\"name\":\"delay\",\"type\":\"string\",\"description\":\"TODO\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"direction\",\"type\":\"\\\"alternate\\\" | \\\"alternate-reverse\\\" | \\\"normal\\\" | \\\"reverse\\\"\",\"description\":\"TODO\",\"values\":[{\"value\":\"alternate\",\"type\":\"string\"},{\"value\":\"alternate-reverse\",\"type\":\"string\"},{\"value\":\"normal\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}]},{\"name\":\"duration\",\"type\":\"string\",\"description\":\"TODO\",\"default\":\"'normal'\",\"values\":[{\"type\":\"string\"}]},{\"name\":\"name\",\"type\":\"\\\"bounce\\\" | \\\"bounce-in\\\" | \\\"fade-in-down\\\" | \\\"flash\\\" | \\\"flip-in-y\\\" | \\\"head-shake\\\" | \\\"heart-beat\\\" | \\\"pulse\\\" | \\\"rubber-band\\\" | \\\"shake-x\\\" | \\\"shake-y\\\" | \\\"swing\\\" | \\\"typing\\\"\",\"description\":\"TODO\",\"values\":[{\"value\":\"bounce\",\"type\":\"string\"},{\"value\":\"bounce-in\",\"type\":\"string\"},{\"value\":\"fade-in-down\",\"type\":\"string\"},{\"value\":\"flash\",\"type\":\"string\"},{\"value\":\"flip-in-y\",\"type\":\"string\"},{\"value\":\"head-shake\",\"type\":\"string\"},{\"value\":\"heart-beat\",\"type\":\"string\"},{\"value\":\"pulse\",\"type\":\"string\"},{\"value\":\"rubber-band\",\"type\":\"string\"},{\"value\":\"shake-x\",\"type\":\"string\"},{\"value\":\"shake-y\",\"type\":\"string\"},{\"value\":\"swing\",\"type\":\"string\"},{\"value\":\"typing\",\"type\":\"string\"}]},{\"name\":\"pause\",\"type\":\"\\\"hover\\\" | boolean\",\"description\":\"TODO\",\"values\":[{\"value\":\"hover\",\"type\":\"string\"},{\"type\":\"boolean\"}]},{\"name\":\"repeat\",\"type\":\"\\\"infinite\\\" | number\",\"description\":\"TODO\",\"values\":[{\"value\":\"infinite\",\"type\":\"string\"},{\"type\":\"number\"}]},{\"name\":\"start\",\"type\":\"\\\"hover\\\" | boolean\",\"description\":\"TODO\",\"values\":[{\"value\":\"hover\",\"type\":\"string\"},{\"type\":\"boolean\"}]}],\"slots\":[],\"styles\":[],\"original\":{\"dirPath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/transition\",\"filePath\":\"./src/components/transition/transition.tsx\",\"fileName\":\"transition.tsx\",\"readmePath\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/transition/readme.md\",\"usagesDir\":\"C:/projects/mine/htmlplus/core/packages/core/src/components/transition/usage\",\"tag\":\"plus-transition\",\"usage\":{},\"docs\":\"TODO\",\"docsTags\":[{\"name\":\"development\"}],\"encapsulation\":\"shadow\",\"dependents\":[],\"dependencies\":[],\"dependencyGraph\":{},\"props\":[{\"name\":\"delay\",\"type\":\"string\",\"mutable\":false,\"attr\":\"delay\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"direction\",\"type\":\"\\\"alternate\\\" | \\\"alternate-reverse\\\" | \\\"normal\\\" | \\\"reverse\\\"\",\"mutable\":false,\"attr\":\"direction\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"alternate\",\"type\":\"string\"},{\"value\":\"alternate-reverse\",\"type\":\"string\"},{\"value\":\"normal\",\"type\":\"string\"},{\"value\":\"reverse\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"duration\",\"type\":\"string\",\"mutable\":false,\"attr\":\"duration\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"default\":\"'normal'\",\"values\":[{\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"name\",\"type\":\"\\\"bounce\\\" | \\\"bounce-in\\\" | \\\"fade-in-down\\\" | \\\"flash\\\" | \\\"flip-in-y\\\" | \\\"head-shake\\\" | \\\"heart-beat\\\" | \\\"pulse\\\" | \\\"rubber-band\\\" | \\\"shake-x\\\" | \\\"shake-y\\\" | \\\"swing\\\" | \\\"typing\\\"\",\"mutable\":false,\"attr\":\"name\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"bounce\",\"type\":\"string\"},{\"value\":\"bounce-in\",\"type\":\"string\"},{\"value\":\"fade-in-down\",\"type\":\"string\"},{\"value\":\"flash\",\"type\":\"string\"},{\"value\":\"flip-in-y\",\"type\":\"string\"},{\"value\":\"head-shake\",\"type\":\"string\"},{\"value\":\"heart-beat\",\"type\":\"string\"},{\"value\":\"pulse\",\"type\":\"string\"},{\"value\":\"rubber-band\",\"type\":\"string\"},{\"value\":\"shake-x\",\"type\":\"string\"},{\"value\":\"shake-y\",\"type\":\"string\"},{\"value\":\"swing\",\"type\":\"string\"},{\"value\":\"typing\",\"type\":\"string\"}],\"optional\":true,\"required\":false},{\"name\":\"pause\",\"type\":\"\\\"hover\\\" | boolean\",\"mutable\":false,\"attr\":\"pause\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"hover\",\"type\":\"string\"},{\"type\":\"boolean\"}],\"optional\":true,\"required\":false},{\"name\":\"repeat\",\"type\":\"\\\"infinite\\\" | number\",\"mutable\":false,\"attr\":\"repeat\",\"reflectToAttr\":false,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"infinite\",\"type\":\"string\"},{\"type\":\"number\"}],\"optional\":true,\"required\":false},{\"name\":\"start\",\"type\":\"\\\"hover\\\" | boolean\",\"mutable\":false,\"attr\":\"start\",\"reflectToAttr\":true,\"docs\":\"TODO\",\"docsTags\":[],\"values\":[{\"value\":\"hover\",\"type\":\"string\"},{\"type\":\"boolean\"}],\"optional\":true,\"required\":false}],\"methods\":[],\"events\":[{\"event\":\"plusCancel\",\"detail\":\"any\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]},{\"event\":\"plusEnd\",\"detail\":\"any\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]},{\"event\":\"plusIteration\",\"detail\":\"any\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]},{\"event\":\"plusStart\",\"detail\":\"any\",\"bubbles\":false,\"cancelable\":true,\"composed\":true,\"docs\":\"TODO\",\"docsTags\":[]}],\"styles\":[],\"slots\":[],\"parts\":[],\"listeners\":[]},\"main\":true,\"lastModified\":\"2021-01-18T18:29:42.101Z\",\"size\":7120}]");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if ( true && as.startsWith('/')) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, addBasePath(addLocale(resolvedAs, this.locale)), routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (options.scroll ? {
        x: 0,
        y: 0
      } : null)).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/alert/alert.tsx":
/*!****************************************!*\
  !*** ./src/components/alert/alert.tsx ***!
  \****************************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\alert\\alert.tsx";


const Alert = props => {
  const {
    children,
    type
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('alert', {
    type
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/alert/alert.types.ts":
/*!*********************************************!*\
  !*** ./src/components/alert/alert.types.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/alert/index.ts":
/*!***************************************!*\
  !*** ./src/components/alert/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./src/components/alert/alert.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony import */ var _alert_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.types */ "./src/components/alert/alert.types.ts");
/* harmony import */ var _alert_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alert_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _alert_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Alert"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _alert_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/banner/banner.tsx":
/*!******************************************!*\
  !*** ./src/components/banner/banner.tsx ***!
  \******************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\banner\\banner.tsx";


const Banner = () => {
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('banner');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/banner/index.ts":
/*!****************************************!*\
  !*** ./src/components/banner/index.ts ***!
  \****************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ "./src/components/banner/banner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _banner__WEBPACK_IMPORTED_MODULE_0__["Banner"]; });



/***/ }),

/***/ "./src/components/box/box.tsx":
/*!************************************!*\
  !*** ./src/components/box/box.tsx ***!
  \************************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\box\\box.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Box = props => {
  const {
    children,
    minWidth,
    maxWidth
  } = props,
        all = _objectWithoutProperties(props, ["children", "minWidth", "maxWidth"]);

  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('box', all);
  const style = {
    minWidth: _app_utils__WEBPACK_IMPORTED_MODULE_2__["toUnit"](minWidth),
    maxWidth: _app_utils__WEBPACK_IMPORTED_MODULE_2__["toUnit"](maxWidth)
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    style: style,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/box/box.types.ts":
/*!*****************************************!*\
  !*** ./src/components/box/box.types.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/box/index.ts":
/*!*************************************!*\
  !*** ./src/components/box/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./box */ "./src/components/box/box.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _box__WEBPACK_IMPORTED_MODULE_0__["Box"]; });

/* harmony import */ var _box_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box.types */ "./src/components/box/box.types.ts");
/* harmony import */ var _box_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_box_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _box_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Box"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _box_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/button/button.tsx":
/*!******************************************!*\
  !*** ./src/components/button/button.tsx ***!
  \******************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\button\\button.tsx";


const Button = props => {
  const {
    children,
    color,
    disabled,
    icon,
    outlined,
    size = 'md',
    text,
    onClick
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('button', {
    color,
    disabled,
    icon,
    outlined,
    size,
    text
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: classes,
    disabled: disabled,
    onClick: onClick,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/button/button.types.ts":
/*!***********************************************!*\
  !*** ./src/components/button/button.types.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/button/index.ts":
/*!****************************************!*\
  !*** ./src/components/button/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/components/button/button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var _button_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.types */ "./src/components/button/button.types.ts");
/* harmony import */ var _button_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _button_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Button"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _button_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/code/code.tsx":
/*!**************************************!*\
  !*** ./src/components/code/code.tsx ***!
  \**************************************/
/*! exports provided: Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "prismjs");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-jsx */ "prismjs/components/prism-jsx");
/* harmony import */ var prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_jsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\code\\code.tsx";





const Code = props => {
  const {
    children,
    copy = true,
    language
  } = props;
  const element = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const content = (children || '').toString();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlightAllUnder(element.current));
  const classesCode = `${false ? undefined : ''}language-${language}`;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_5__["classes"]('code');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: element,
    className: classes,
    children: [copy && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "button",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        icon: true,
        onClick: () => _app_utils__WEBPACK_IMPORTED_MODULE_5__["copyToClipboard"](content),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
          name: "copy"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("pre", {
      className: classesCode,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
        className: classesCode,
        children: content
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/code/code.types.tsx":
/*!********************************************!*\
  !*** ./src/components/code/code.types.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/code/index.ts":
/*!**************************************!*\
  !*** ./src/components/code/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code */ "./src/components/code/code.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return _code__WEBPACK_IMPORTED_MODULE_0__["Code"]; });

/* harmony import */ var _code_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code.types */ "./src/components/code/code.types.tsx");
/* harmony import */ var _code_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_code_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _code_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Code"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _code_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/example/example.tsx":
/*!********************************************!*\
  !*** ./src/components/example/example.tsx ***!
  \********************************************/
/*! exports provided: Example */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Example", function() { return Example; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");
/* harmony import */ var _example_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example.types */ "./src/components/example/example.types.tsx");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\example\\example.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Example = props => {
  const {
    value
  } = props;
  const code = value.code || {};
  const links = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    return (code.links || []).map(link => {
      const map = {
        codesandbox: 'Edit in CodeSandbox',
        github: 'View on Github'
      };
      return _objectSpread(_objectSpread({}, link), {}, {
        title: map[link.key]
      });
    });
  }, [code.links]);
  const style = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    if (!code.style) return;
    let rules = code.style;
    let className = `.ex-${value.key}`;

    try {
      var classLen = className.length,
          char,
          nextChar,
          isAt,
          isIn;
      className += ' ';
      rules = rules.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '');
      rules = rules.replace(/}(\s*)@/g, '}@');
      rules = rules.replace(/}(\s*)}/g, '}}');

      for (var i = 0; i < rules.length - 2; i++) {
        char = rules[i];
        nextChar = rules[i + 1];
        if (char === '@') isAt = true;
        if (!isAt && char === '{') isIn = true;
        if (isIn && char === '}') isIn = false;

        if (!isIn && nextChar !== '@' && nextChar !== '}' && (char === '}' || char === ',' || (char === '{' || char === ';') && isAt)) {
          rules = rules.slice(0, i + 1) + className + rules.slice(i + 1);
          i += classLen;
          isAt = false;
        }
      }

      ;
      if (rules.indexOf(className) !== 0 && rules.indexOf('@') !== 0) rules = className + rules;
      return rules;
    } catch {}
  }, [value.key, code.style]);
  const tabs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const tabs = [];
    Object.keys(code).filter(key => key !== 'links').map(key => {
      const tab = {
        key,
        title: _app_utils__WEBPACK_IMPORTED_MODULE_3__["toCapitalCase"](key),
        disabled: !code[key]
      };

      if (key === 'preview') {
        tab.content = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `preview-wrapper ex-${value.key}`,
          children: [code[key](), style && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
            children: style
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined);
      } else {
        const language = _example_types__WEBPACK_IMPORTED_MODULE_4__["ExampleLanguage"][key];

        tab.content = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Code"], {
          language: language,
          children: code[key]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 31
        }, undefined);
      }

      tabs.push(tab);
    });
    return tabs;
  }, [code]);
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_3__["classes"]('example');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusTabs"], {
      value: "preview",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGrid"], {
        className: "toolbar",
        alignItems: "center",
        justify: "between",
        gutterX: "sm",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
          xs: "grow",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusTabsBar"], {
            children: tabs.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusTabsTab"], {
              disabled: item.disabled,
              value: item.key,
              children: item.title
            }, item.key, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined), links.map(link => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: link.value,
            target: "_blank",
            title: link.title,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
              name: "github"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 15
          }, undefined)
        }, link.key, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusTabsPanels"], {
        className: "body",
        children: tabs.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusTabsPanel"], {
          value: item.key,
          children: item.content && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(item.content, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 32
          }, undefined)
        }, item.key, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/example/example.types.tsx":
/*!**************************************************!*\
  !*** ./src/components/example/example.types.tsx ***!
  \**************************************************/
/*! exports provided: ExampleLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleLanguage", function() { return ExampleLanguage; });
let ExampleLanguage;

(function (ExampleLanguage) {
  ExampleLanguage["style"] = "css";
  ExampleLanguage["template"] = "html";
  ExampleLanguage["script"] = "js";
})(ExampleLanguage || (ExampleLanguage = {}));

/***/ }),

/***/ "./src/components/example/index.ts":
/*!*****************************************!*\
  !*** ./src/components/example/index.ts ***!
  \*****************************************/
/*! exports provided: Example, ExampleLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example */ "./src/components/example/example.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Example", function() { return _example__WEBPACK_IMPORTED_MODULE_0__["Example"]; });

/* harmony import */ var _example_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./example.types */ "./src/components/example/example.types.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleLanguage", function() { return _example_types__WEBPACK_IMPORTED_MODULE_1__["ExampleLanguage"]; });




/***/ }),

/***/ "./src/components/footer/footer.tsx":
/*!******************************************!*\
  !*** ./src/components/footer/footer.tsx ***!
  \******************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\footer\\footer.tsx";




const Footer = () => {
  const items = [{
    title: _app_constants__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ABBREVIATION"],
    items: [{
      label: 'Team',
      path: '#'
    }, {
      label: 'Jobs',
      path: '#'
    }]
  }, {
    title: 'Community',
    items: [{
      label: 'Github',
      path: '#'
    }, {
      label: 'Stack Overflow',
      path: '#'
    }, {
      label: 'Blog',
      path: '#'
    }]
  }, {
    title: 'Resources',
    items: [{
      label: 'Support',
      path: '#'
    }, {
      label: 'Resources',
      path: '#'
    }, {
      label: 'Newsletter',
      path: '#'
    }]
  }, {
    title: 'Contact',
    items: [{
      label: 'Common Questions',
      path: '#'
    }, {
      label: 'Report a bug',
      path: '#'
    }, {
      label: 'Request a component',
      path: '#'
    }]
  }];
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_4__["classes"]('footer');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      hidden: true,
      mb: 16,
      mt: 4,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGrid"], {
        alignItems: "start",
        justify: "center",
        children: items.map(group => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
          xs: "12",
          sm: "6",
          md: "3",
          lg: "2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            weight: "semi-bold",
            children: group.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: group.items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                to: item['path'],
                children: item.label
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 21
              }, undefined)
            }, item.label, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, undefined)]
        }, group.title, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      mb: 12,
      mt: 12,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Socials"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      align: "center",
      size: "label",
      children: ["\xA9 2020 ", _app_constants__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_NAME"], ". Released under MIT License."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/footer/index.ts":
/*!****************************************!*\
  !*** ./src/components/footer/index.ts ***!
  \****************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/components/footer/footer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_0__["Footer"]; });



/***/ }),

/***/ "./src/components/framework-selector/framework-selector.tsx":
/*!******************************************************************!*\
  !*** ./src/components/framework-selector/framework-selector.tsx ***!
  \******************************************************************/
/*! exports provided: FrameworkSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkSelector", function() { return FrameworkSelector; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/data */ "./src/data/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");


var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\framework-selector\\framework-selector.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Option = props => {
  const {
    Option
  } = react_select__WEBPACK_IMPORTED_MODULE_4__["components"];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SingleValue, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

const SingleValue = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["PlusGrid"], {
  alignItems: "center",
  gutterX: "sm",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["PlusGridItem"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      style: {
        width: '1.5rem',
        height: '1.5rem',
        objectFit: 'contain',
        display: 'block'
      },
      src: `/assets/logo/${props.data.logo}`,
      alt: `${props.data.label} logo`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["PlusGridItem"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
      children: props.data.label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 21,
  columnNumber: 3
}, undefined);

const FrameworkSelector = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(() => {
  const store = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_7__["useStore"])(); // TODO

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const items = _app_data__WEBPACK_IMPORTED_MODULE_6__["frameworks"].filter(framework => !framework.disabled).map(framework => ({
    value: framework.key,
    label: framework.title,
    logo: framework.logo
  }));

  const change = framework => {
    store.ui.setFramework(framework.value); // TODO

    router.replace(router.asPath);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      mb: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_5__["Text"], {
        color: "main-lighten-1",
        size: "caption",
        children: "SELECT YOUR FRAMEWORK"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_select__WEBPACK_IMPORTED_MODULE_4___default.a, {
      options: items,
      value: items.find(framework => framework.value === store.ui.framework),
      components: {
        Option,
        SingleValue
      },
      onChange: change
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
});

/***/ }),

/***/ "./src/components/framework-selector/index.ts":
/*!****************************************************!*\
  !*** ./src/components/framework-selector/index.ts ***!
  \****************************************************/
/*! exports provided: FrameworkSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework-selector */ "./src/components/framework-selector/framework-selector.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameworkSelector", function() { return _framework_selector__WEBPACK_IMPORTED_MODULE_0__["FrameworkSelector"]; });



/***/ }),

/***/ "./src/components/header/header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/header.tsx ***!
  \******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\header\\header.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Header = ({
  menu
}) => {
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_3__["classes"]('header');
  const links = [{
    title: 'About',
    route: {
      to: 'ROUTE:FRAMEWORK:OVERVIEW'
    }
  }, {
    title: 'Components',
    route: {
      to: 'ROUTE:COMPONENT:DETAILS',
      params: {
        key: 'aspect-ratio'
      }
    }
  }, {
    title: 'Join our team!',
    route: {
      to: 'ROUTE:COMPONENT:DETAILS',
      params: {
        key: 'switch'
      }
    }
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGrid"], {
      alignItems: "center",
      wrap: "off",
      children: [menu && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "auto",
        hideLgUp: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusDrawerToggler"], {
          connector: "main",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
            name: "menu"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "ROUTE:HOME",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/assets/logo/logo.svg",
            width: "135px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "grow"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), links.map(link => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        hideSmDown: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          size: "sm",
          text: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], _objectSpread(_objectSpread({}, link.route), {}, {
            children: link.title
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined)
      }, link.title, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/header/index.ts":
/*!****************************************!*\
  !*** ./src/components/header/index.ts ***!
  \****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/header/header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["Header"]; });



/***/ }),

/***/ "./src/components/icon/icon.tsx":
/*!**************************************!*\
  !*** ./src/components/icon/icon.tsx ***!
  \**************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\icon\\icon.tsx";


const Icon = props => {
  const {
    color,
    name,
    size = 'sm'
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('icon', {
    [name]: !!name,
    color,
    size
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
    className: classes
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/icon/icon.types.ts":
/*!*******************************************!*\
  !*** ./src/components/icon/icon.types.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/icon/index.ts":
/*!**************************************!*\
  !*** ./src/components/icon/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon */ "./src/components/icon/icon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony import */ var _icon_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.types */ "./src/components/icon/icon.types.ts");
/* harmony import */ var _icon_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icon_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _icon_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Icon"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _icon_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @htmlplus/react */ "@htmlplus/react");
/* harmony import */ var _htmlplus_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_htmlplus_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _htmlplus_react__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _htmlplus_react__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "./src/components/alert/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _alert__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _alert__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner */ "./src/components/banner/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _banner__WEBPACK_IMPORTED_MODULE_2__["Banner"]; });

/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box */ "./src/components/box/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _box__WEBPACK_IMPORTED_MODULE_3__) if(["default","Banner"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _box__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ "./src/components/button/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _button__WEBPACK_IMPORTED_MODULE_4__) if(["default","Banner"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _button__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./code */ "./src/components/code/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _code__WEBPACK_IMPORTED_MODULE_5__) if(["default","Banner"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _code__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example */ "./src/components/example/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Example", function() { return _example__WEBPACK_IMPORTED_MODULE_6__["Example"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExampleLanguage", function() { return _example__WEBPACK_IMPORTED_MODULE_6__["ExampleLanguage"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ "./src/components/footer/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_7__["Footer"]; });

/* harmony import */ var _framework_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework-selector */ "./src/components/framework-selector/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameworkSelector", function() { return _framework_selector__WEBPACK_IMPORTED_MODULE_8__["FrameworkSelector"]; });

/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header */ "./src/components/header/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_9__["Header"]; });

/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon */ "./src/components/icon/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _icon__WEBPACK_IMPORTED_MODULE_10__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _icon__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input */ "./src/components/input/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _input__WEBPACK_IMPORTED_MODULE_11__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _input__WEBPACK_IMPORTED_MODULE_11__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./link */ "./src/components/link/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link__WEBPACK_IMPORTED_MODULE_12__["Link"]; });

/* harmony import */ var _markup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./markup */ "./src/components/markup/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _markup__WEBPACK_IMPORTED_MODULE_13__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _markup__WEBPACK_IMPORTED_MODULE_13__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page */ "./src/components/page/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _page__WEBPACK_IMPORTED_MODULE_14__["Page"]; });

/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parameters */ "./src/components/parameters/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _parameters__WEBPACK_IMPORTED_MODULE_15__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link","Page"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _parameters__WEBPACK_IMPORTED_MODULE_15__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./section */ "./src/components/section/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _section__WEBPACK_IMPORTED_MODULE_16__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link","Page"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _section__WEBPACK_IMPORTED_MODULE_16__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sidebar__WEBPACK_IMPORTED_MODULE_17__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link","Page"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sidebar__WEBPACK_IMPORTED_MODULE_17__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _socials__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./socials */ "./src/components/socials/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socials", function() { return _socials__WEBPACK_IMPORTED_MODULE_18__["Socials"]; });

/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./text */ "./src/components/text/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _text__WEBPACK_IMPORTED_MODULE_19__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link","Page","Socials"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _text__WEBPACK_IMPORTED_MODULE_19__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./toc */ "./src/components/toc/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc__WEBPACK_IMPORTED_MODULE_20__) if(["default","Banner","Example","ExampleLanguage","Footer","FrameworkSelector","Header","Link","Page","Socials"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc__WEBPACK_IMPORTED_MODULE_20__[key]; }) }(__WEBPACK_IMPORT_KEY__));






















/***/ }),

/***/ "./src/components/input/index.ts":
/*!***************************************!*\
  !*** ./src/components/input/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/components/input/input.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony import */ var _input_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.types */ "./src/components/input/input.types.ts");
/* harmony import */ var _input_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _input_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Input"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _input_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/input/input.tsx":
/*!****************************************!*\
  !*** ./src/components/input/input.tsx ***!
  \****************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\input\\input.tsx";


const Input = props => {
  const {
    placeholder,
    type = 'text'
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('input');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
    className: classes,
    type: type,
    placeholder: placeholder
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/input/input.types.ts":
/*!*********************************************!*\
  !*** ./src/components/input/input.types.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/link/index.ts":
/*!**************************************!*\
  !*** ./src/components/link/index.ts ***!
  \**************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ "./src/components/link/link.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _link__WEBPACK_IMPORTED_MODULE_0__["Link"]; });



/***/ }),

/***/ "./src/components/link/link.tsx":
/*!**************************************!*\
  !*** ./src/components/link/link.tsx ***!
  \**************************************/
/*! exports provided: Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services */ "./src/services/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\link\\link.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Anchor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  const {
    children
  } = props,
        args = _objectWithoutProperties(props, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", _objectSpread(_objectSpread({
    ref: ref
  }, args), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
});
const Link = props => {
  const {
    children,
    params,
    to
  } = props,
        attributes = _objectWithoutProperties(props, ["children", "params", "to"]);

  const path = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => _app_services__WEBPACK_IMPORTED_MODULE_3__["router"].path(to, params), [to, params]);

  if (attributes.target === '_blank' && !attributes.rel) {
    attributes.rel = 'noopener noreferrer';
  }

  if (!path) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Anchor, _objectSpread(_objectSpread({
    href: to
  }, attributes), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 21
  }, undefined);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path,
    passHref: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Anchor, _objectSpread(_objectSpread({}, attributes), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/markup/index.ts":
/*!****************************************!*\
  !*** ./src/components/markup/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _markup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markup */ "./src/components/markup/markup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Markup", function() { return _markup__WEBPACK_IMPORTED_MODULE_0__["Markup"]; });

/* harmony import */ var _markup_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markup.types */ "./src/components/markup/markup.types.tsx");
/* harmony import */ var _markup_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_markup_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _markup_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Markup"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _markup_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/markup/markup.renderers.tsx":
/*!****************************************************!*\
  !*** ./src/components/markup/markup.renderers.tsx ***!
  \****************************************************/
/*! exports provided: renderers, tokenizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderers", function() { return renderers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenizer", function() { return tokenizer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services */ "./src/services/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\markup\\markup.renderers.tsx";



const renderers = {
  blockquote: props => {
    const value = props.node.children[0].children[0].value.trim();
    const token = (value.match(/\[\w+\]/) || [])[0] || '';
    const type = token.replace(/\[|\]/g, '');
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      type: type,
      children: value.replace(token, '')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 16
    }, undefined);
  },
  code: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["Code"], {
    language: props.language,
    children: props.value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 22
  }, undefined),
  heading: props => {
    const {
      children,
      level
    } = props;
    const content = level === 1 ? children : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["TocItem"], {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 50
    }, undefined);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      size: level.toString(),
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 16
    }, undefined);
  },
  link: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: props.href,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 22
  }, undefined),
  paragraph: props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    size: "paragraph",
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 27
  }, undefined)
};
const tokenizer = input => {
  const tokens = input.match(/\{(.*?)\}/g) || [];
  tokens.map(token => {
    const raw = token.replace(/\{|\}/g, '');
    const sections = raw.split('.');
    const type = sections[0];
    const value = sections[1];

    switch (type) {
      case 'Constants':
        input = input.replace(token, _app_constants__WEBPACK_IMPORTED_MODULE_2__[value]);
        break;

      case 'Router':
        input = input.replace(token, _app_services__WEBPACK_IMPORTED_MODULE_3__["router"].path(value));
        break;
    }
  });
  return input;
};

/***/ }),

/***/ "./src/components/markup/markup.tsx":
/*!******************************************!*\
  !*** ./src/components/markup/markup.tsx ***!
  \******************************************/
/*! exports provided: Markup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Markup", function() { return Markup; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _markup_renderers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markup.renderers */ "./src/components/markup/markup.renderers.tsx");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\markup\\markup.tsx";



const Markup = props => {
  const {
    children,
    ignoreParagraph
  } = props;
  if (ignoreParagraph) _markup_renderers__WEBPACK_IMPORTED_MODULE_3__["renderers"].paragraph = props => props.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    renderers: _markup_renderers__WEBPACK_IMPORTED_MODULE_3__["renderers"],
    children: Object(_markup_renderers__WEBPACK_IMPORTED_MODULE_3__["tokenizer"])(children.toString())
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/markup/markup.types.tsx":
/*!************************************************!*\
  !*** ./src/components/markup/markup.types.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/page/index.ts":
/*!**************************************!*\
  !*** ./src/components/page/index.ts ***!
  \**************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/components/page/page.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return _page__WEBPACK_IMPORTED_MODULE_0__["Page"]; });



/***/ }),

/***/ "./src/components/page/page.tsx":
/*!**************************************!*\
  !*** ./src/components/page/page.tsx ***!
  \**************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");




const Page = props => {
  const {
    children,
    layout
  } = props;
  const store = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_2__["useStore"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    store.ui.setLayout(layout);
  }, [layout]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: children
  }, void 0, false);
};

/***/ }),

/***/ "./src/components/parameters/index.ts":
/*!********************************************!*\
  !*** ./src/components/parameters/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parameters */ "./src/components/parameters/parameters.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parameters", function() { return _parameters__WEBPACK_IMPORTED_MODULE_0__["Parameters"]; });

/* harmony import */ var _parameters_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parameters.types */ "./src/components/parameters/parameters.types.tsx");
/* harmony import */ var _parameters_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parameters_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _parameters_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Parameters"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _parameters_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/parameters/parameters.tsx":
/*!**************************************************!*\
  !*** ./src/components/parameters/parameters.tsx ***!
  \**************************************************/
/*! exports provided: Parameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parameters", function() { return Parameters; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\parameters\\parameters.tsx";



const Parameters = props => {
  const {
    items = []
  } = props;
  const hasDefault = !!items.filter(item => typeof item.default !== 'undefined').length;
  const hasType = !!items.filter(item => typeof item.type !== 'undefined').length;
  const hasValue = !!items.filter(item => typeof item.value !== 'undefined').length;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_3__["classes"]('parameters');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGrid"], {
      className: "item",
      gutterX: "md",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "grow",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          color: "error",
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "12",
        sm: "6",
        lg: "grow",
        children: [hasType && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: "Type"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, undefined), hasType && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          truncate: true,
          children: item.type
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        className: "default",
        xs: "12",
        lg: "auto",
        children: [hasDefault && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: "Default"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 28
        }, undefined), hasDefault && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: item.default || 'undefined'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 28
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Markup"], {
            ignoreParagraph: true,
            children: item.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, undefined), hasValue && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
        xs: "12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
          size: "body",
          children: "Value"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Code"], {
          language: "js",
          copy: false,
          children: item.value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined)]
    }, item.name, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/parameters/parameters.types.tsx":
/*!********************************************************!*\
  !*** ./src/components/parameters/parameters.types.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/section/index.ts":
/*!*****************************************!*\
  !*** ./src/components/section/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section */ "./src/components/section/section.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _section__WEBPACK_IMPORTED_MODULE_0__["Section"]; });

/* harmony import */ var _section_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.types */ "./src/components/section/section.types.tsx");
/* harmony import */ var _section_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_section_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _section_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Section"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _section_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/section/section.tsx":
/*!********************************************!*\
  !*** ./src/components/section/section.tsx ***!
  \********************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\section\\section.tsx";


const Section = props => {
  const {
    children,
    size
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('section', {
    size
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./src/components/section/section.types.tsx":
/*!**************************************************!*\
  !*** ./src/components/section/section.types.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/sidebar/index.ts":
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar/sidebar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_0__["Sidebar"]; });

/* harmony import */ var _sidebar_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.types */ "./src/components/sidebar/sidebar.types.tsx");
/* harmony import */ var _sidebar_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sidebar_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Sidebar"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sidebar_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/sidebar/sidebar.tsx":
/*!********************************************!*\
  !*** ./src/components/sidebar/sidebar.tsx ***!
  \********************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./src/components/icon/index.ts");


var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\sidebar\\sidebar.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO





const Sidebar = props => {
  const {
    items = []
  } = props;
  const router = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const actives = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const run = (input, ...parent) => {
      if (Array.isArray(input)) {
        let result = [];
        input.map(item => {
          const items = run(item, ...parent);
          if (items.length) result = items;
        });
        return result;
      } else if (input.items) {
        return run(input.items, input, ...parent);
      } else {
        const route = input.route;
        if (!route) return [];
        if (router.isActive(route.to, route.params)) return [input, ...parent];
        return [];
      }
    };

    const result = run(items, null).filter(item => item);
    setCurrent(result);
    return result;
  }, [items, router.asPath]);

  const isActive = item => actives.some(active => item === active);

  const isExpand = parent => {
    if (!parent) return true;
    return current.some(item => item === parent);
  };

  const toggle = (item, ...parents) => {
    const indexOf = current.findIndex(x => x === item);

    if (indexOf !== -1) {
      setCurrent([...current.slice(indexOf + 1)]);
    } else {
      setCurrent([item, ...parents]);
    }
  };

  const menu = (items, level = 0, ...parents) => {
    const isCollapsed = !isExpand(parents[0]);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: _app_utils__WEBPACK_IMPORTED_MODULE_4__["classes"]({
        ['menu']: true,
        [`level-${level}`]: true,
        ['collapsed']: false // TODO isCollapsed

      }),
      children: items.map(item => {
        var _item$items;

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: _app_utils__WEBPACK_IMPORTED_MODULE_4__["classes"]({
            'item': true,
            'active': isActive(item)
          }),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Text"], {
            size: "body",
            children: [item.route && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], _objectSpread(_objectSpread({}, item.route), {}, {
              children: item.title
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 17
            }, undefined), !item.route &&
            /*#__PURE__*/
            // TODO
            Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                fontWeight: 400
              },
              onClick: () => toggle(item, ...parents),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [item.icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
                    name: item.icon,
                    size: "sm"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 113,
                    columnNumber: 25
                  }, undefined), "\xA0"]
                }, void 0, true), item.title]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, undefined), !!((_item$items = item.items) !== null && _item$items !== void 0 && _item$items.length) && menu(item.items, level + 1, item, ...parents)]
        }, item.title, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined);
  };

  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_4__["classes"]('sidebar');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: menu(items)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/sidebar/sidebar.types.tsx":
/*!**************************************************!*\
  !*** ./src/components/sidebar/sidebar.types.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/socials/index.ts":
/*!*****************************************!*\
  !*** ./src/components/socials/index.ts ***!
  \*****************************************/
/*! exports provided: Socials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _socials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socials */ "./src/components/socials/socials.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Socials", function() { return _socials__WEBPACK_IMPORTED_MODULE_0__["Socials"]; });



/***/ }),

/***/ "./src/components/socials/socials.tsx":
/*!********************************************!*\
  !*** ./src/components/socials/socials.tsx ***!
  \********************************************/
/*! exports provided: Socials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socials", function() { return Socials; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\socials\\socials.tsx";



const Socials = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGrid"], {
    alignItems: "center",
    gutter: "md",
    justify: "center",
    wrap: "off",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: _app_constants__WEBPACK_IMPORTED_MODULE_3__["SOCIAL_TWITTER"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "twitter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: _app_constants__WEBPACK_IMPORTED_MODULE_3__["SOCIAL_LINKEDIN"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "linkedin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: _app_constants__WEBPACK_IMPORTED_MODULE_3__["SOCIAL_INSTAGRAM"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "instagram"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["PlusGridItem"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: _app_constants__WEBPACK_IMPORTED_MODULE_3__["SOCIAL_GITHUB"],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          name: "github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/text/index.ts":
/*!**************************************!*\
  !*** ./src/components/text/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./src/components/text/text.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _text__WEBPACK_IMPORTED_MODULE_0__["Text"]; });

/* harmony import */ var _text_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.types */ "./src/components/text/text.types.ts");
/* harmony import */ var _text_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_text_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _text_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Text"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _text_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/text/text.tsx":
/*!**************************************!*\
  !*** ./src/components/text/text.tsx ***!
  \**************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\text\\text.tsx";


const Text = props => {
  const {
    align = 'start',
    children,
    color,
    dense,
    inline,
    size = 'body',
    truncate,
    weight = 'normal'
  } = props;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_2__["classes"]('text', {
    align,
    color,
    dense,
    inline,
    size,
    truncate,
    weight
  });
  let Tag;

  switch (size) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
      Tag = `h${size}`;
      break;

    case 'paragraph':
      Tag = 'p';
      break;

    default:
      Tag = 'div';
      break;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tag, {
    className: classes,
    title: truncate ? children : undefined,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/text/text.types.ts":
/*!*******************************************!*\
  !*** ./src/components/text/text.types.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/toc/index.ts":
/*!*************************************!*\
  !*** ./src/components/toc/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toc */ "./src/components/toc/toc/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _toc_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toc-item */ "./src/components/toc/toc-item/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc_item__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc_item__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/toc/toc-item/index.ts":
/*!**********************************************!*\
  !*** ./src/components/toc/toc-item/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toc_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toc-item */ "./src/components/toc/toc-item/toc-item.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TocItem", function() { return _toc_item__WEBPACK_IMPORTED_MODULE_0__["TocItem"]; });

/* harmony import */ var _toc_item_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toc-item.types */ "./src/components/toc/toc-item/toc-item.types.ts");
/* harmony import */ var _toc_item_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toc_item_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc_item_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","TocItem"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc_item_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/toc/toc-item/toc-item.tsx":
/*!**************************************************!*\
  !*** ./src/components/toc/toc-item/toc-item.tsx ***!
  \**************************************************/
/*! exports provided: TocItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocItem", function() { return TocItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\toc\\toc-item\\toc-item.tsx";





const TocItem = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(props => {
  var _children$, _children$$props;

  const {
    children,
    level
  } = props;
  const store = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_4__["useStore"])();
  const element = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const key = _app_utils__WEBPACK_IMPORTED_MODULE_5__["toKebabCase"]((((_children$ = children[0]) === null || _children$ === void 0 ? void 0 : (_children$$props = _children$.props) === null || _children$$props === void 0 ? void 0 : _children$$props.children) || children || '').toString());

  const scrollTo = () => {
    if (!element.current) return;
    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  const onClick = event => {
    event && event.preventDefault();
    scrollTo();
    setTimeout(() => window.location.hash = `#${key}`, 500);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let depth = level;

    if (!depth) {
      const value = parseInt(element.current.parentElement.localName.replace('h', ''));
      if (!isNaN(value)) depth = value;
    }

    store.toc.add({
      key,
      level: depth,
      value: children,
      scrollTo: onClick
    });
    const observer = new IntersectionObserver(entries => store.toc.update(key, entries[0]));
    observer.observe(element.current);
    return () => {
      observer.disconnect();
      store.toc.remove(key);
    };
  }, []);
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_5__["classes"]('toc-item');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: element,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: classes,
      to: `#${key}`,
      onClick: onClick,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./src/components/toc/toc-item/toc-item.types.ts":
/*!*******************************************************!*\
  !*** ./src/components/toc/toc-item/toc-item.types.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/toc/toc/index.ts":
/*!*****************************************!*\
  !*** ./src/components/toc/toc/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toc */ "./src/components/toc/toc/toc.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toc", function() { return _toc__WEBPACK_IMPORTED_MODULE_0__["Toc"]; });

/* harmony import */ var _toc_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toc.types */ "./src/components/toc/toc/toc.types.ts");
/* harmony import */ var _toc_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toc_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _toc_types__WEBPACK_IMPORTED_MODULE_1__) if(["default","Toc"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _toc_types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/components/toc/toc/toc.tsx":
/*!****************************************!*\
  !*** ./src/components/toc/toc/toc.tsx ***!
  \****************************************/
/*! exports provided: Toc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toc", function() { return Toc; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");


var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\components\\toc\\toc\\toc.tsx";





const Toc = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(() => {
  const store = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_4__["useStore"])();
  const items = store.toc.items;
  const classes = _app_utils__WEBPACK_IMPORTED_MODULE_5__["classes"]('toc');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes,
    children: !!items.length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
        mb: 3,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
          color: "main-lighten-1",
          size: "caption",
          children: "CONTENTS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "body",
        children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _app_utils__WEBPACK_IMPORTED_MODULE_5__["classes"]({
            ['active']: item.active,
            [`level-${item.level || 0}`]: true
          }),
          onClick: () => item.scrollTo(),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
            color: "main",
            size: "label",
            children: item.value
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 17
          }, undefined)
        }, item.key, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
});

/***/ }),

/***/ "./src/components/toc/toc/toc.types.ts":
/*!*********************************************!*\
  !*** ./src/components/toc/toc/toc.types.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/configs/constants.ts":
/*!**********************************!*\
  !*** ./src/configs/constants.ts ***!
  \**********************************/
/*! exports provided: PLATFORM_ABBREVIATION, PLATFORM_KEY, PLATFORM_NAME, PLATFORM_TAG_PREFIX, PLATFORM_EVENT_PREFIX, WEBCOMPONENT_REFERENCE, WEBCOMPONENT_COMPATIBILITY, PORT_ANGULAR_PACKAGE_NAME, PORT_ANGULAR_PACKAGE_LOADER, PORT_JAVASCRIPT_PACKAGE_NAME, PORT_JAVASCRIPT_PACKAGE_LOADER, PORT_JAVASCRIPT_PACKAGE_CDN, PORT_JAVASCRIPT_PACKAGE_CDN_LOADER, PORT_REACT_PACKAGE_NAME, PORT_REACT_PACKAGE_LOADER, PORT_VUE_PACKAGE_NAME, PORT_VUE_PACKAGE_LOADER, PORT_VUE_IGNORED_ELEMENTS, SOCIAL_FACEBOOK, SOCIAL_YOUTUBE, SOCIAL_INSTAGRAM, SOCIAL_TWITTER, SOCIAL_LINKEDIN, SOCIAL_GITHUB, SOCIAL_GITHUB_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_ABBREVIATION", function() { return PLATFORM_ABBREVIATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_KEY", function() { return PLATFORM_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_NAME", function() { return PLATFORM_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_TAG_PREFIX", function() { return PLATFORM_TAG_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_EVENT_PREFIX", function() { return PLATFORM_EVENT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBCOMPONENT_REFERENCE", function() { return WEBCOMPONENT_REFERENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBCOMPONENT_COMPATIBILITY", function() { return WEBCOMPONENT_COMPATIBILITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_ANGULAR_PACKAGE_NAME", function() { return PORT_ANGULAR_PACKAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_ANGULAR_PACKAGE_LOADER", function() { return PORT_ANGULAR_PACKAGE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_JAVASCRIPT_PACKAGE_NAME", function() { return PORT_JAVASCRIPT_PACKAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_JAVASCRIPT_PACKAGE_LOADER", function() { return PORT_JAVASCRIPT_PACKAGE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_JAVASCRIPT_PACKAGE_CDN", function() { return PORT_JAVASCRIPT_PACKAGE_CDN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_JAVASCRIPT_PACKAGE_CDN_LOADER", function() { return PORT_JAVASCRIPT_PACKAGE_CDN_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_REACT_PACKAGE_NAME", function() { return PORT_REACT_PACKAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_REACT_PACKAGE_LOADER", function() { return PORT_REACT_PACKAGE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_VUE_PACKAGE_NAME", function() { return PORT_VUE_PACKAGE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_VUE_PACKAGE_LOADER", function() { return PORT_VUE_PACKAGE_LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT_VUE_IGNORED_ELEMENTS", function() { return PORT_VUE_IGNORED_ELEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_FACEBOOK", function() { return SOCIAL_FACEBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_YOUTUBE", function() { return SOCIAL_YOUTUBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_INSTAGRAM", function() { return SOCIAL_INSTAGRAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_TWITTER", function() { return SOCIAL_TWITTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LINKEDIN", function() { return SOCIAL_LINKEDIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_GITHUB", function() { return SOCIAL_GITHUB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_GITHUB_COMPONENTS", function() { return SOCIAL_GITHUB_COMPONENTS; });
const PLATFORM_ABBREVIATION = 'HTML+';
const PLATFORM_KEY = 'htmlplus';
const PLATFORM_NAME = 'HTMLPLUS';
const PLATFORM_TAG_PREFIX = 'plus';
const PLATFORM_EVENT_PREFIX = 'Plus';
const WEBCOMPONENT_REFERENCE = 'https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements';
const WEBCOMPONENT_COMPATIBILITY = 'https://custom-elements-everywhere.com';
const PORT_ANGULAR_PACKAGE_NAME = '@htmlplus/core';
const PORT_ANGULAR_PACKAGE_LOADER = '@htmlplus/core/loader';
const PORT_JAVASCRIPT_PACKAGE_NAME = '@htmlplus/core';
const PORT_JAVASCRIPT_PACKAGE_LOADER = '@htmlplus/core/loader';
const PORT_JAVASCRIPT_PACKAGE_CDN = 'https://cdn.jsdelivr.net/npm/@htmlplus/core/dist/htmlplus.js';
const PORT_JAVASCRIPT_PACKAGE_CDN_LOADER = 'https://cdn.jsdelivr.net/npm/@htmlplus/core/loader/index.es2017.js';
const PORT_REACT_PACKAGE_NAME = '@htmlplus/react';
const PORT_REACT_PACKAGE_LOADER = '@htmlplus/react/loader';
const PORT_VUE_PACKAGE_NAME = '@htmlplus/core';
const PORT_VUE_PACKAGE_LOADER = '@htmlplus/core/loader';
const PORT_VUE_IGNORED_ELEMENTS = 'https://vuejs.org/v2/api/#ignoredElements';
const SOCIAL_FACEBOOK = 'TODO';
const SOCIAL_YOUTUBE = 'https://www.youtube.com/channel/UCsNkxDmLU7vK_L1jgSVWWCA';
const SOCIAL_INSTAGRAM = 'https://www.instagram.com/htmlplus.io';
const SOCIAL_TWITTER = 'https://www.twitter.com/htmlplusio';
const SOCIAL_LINKEDIN = 'https://www.linkedin.com/company/htmlplus';
const SOCIAL_GITHUB = 'https://github.com/htmlplus/core';
const SOCIAL_GITHUB_COMPONENTS = 'https://github.com/htmlplus/core/tree/master/packages/core/src/components';

/***/ }),

/***/ "./src/data/components.ts":
/*!********************************!*\
  !*** ./src/data/components.ts ***!
  \********************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _htmlplus_core_dist_docs_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @htmlplus/core/dist/docs.json */ "./node_modules/@htmlplus/core/dist/docs.json");
var _htmlplus_core_dist_docs_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! @htmlplus/core/dist/docs.json */ "./node_modules/@htmlplus/core/dist/docs.json", 1);
 // @ts-ignore

const components = _htmlplus_core_dist_docs_json__WEBPACK_IMPORTED_MODULE_0__.filter(component => !component.development);

/***/ }),

/***/ "./src/data/frameworks.ts":
/*!********************************!*\
  !*** ./src/data/frameworks.ts ***!
  \********************************/
/*! exports provided: frameworks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameworks", function() { return frameworks; });
const frameworks = [{
  key: 'javascript',
  logo: 'javascript.png',
  title: 'JavaScript'
}, {
  key: 'react',
  logo: 'react.png',
  title: 'React'
}, {
  key: 'vue',
  logo: 'vue.png',
  title: 'Vue'
}, {
  key: 'angular',
  logo: 'angular.svg',
  title: 'Angular',
  disabled: true
}, {
  key: 'svelte',
  logo: 'svelte.svg',
  title: 'Svelte',
  disabled: true
}, {
  key: 'ember',
  logo: 'ember.png',
  title: 'Ember',
  disabled: true
}, {
  key: 'preact',
  logo: 'TODO',
  title: 'Preact',
  disabled: true
}];

/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/*! exports provided: components, frameworks, sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/data/components.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["components"]; });

/* harmony import */ var _frameworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frameworks */ "./src/data/frameworks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frameworks", function() { return _frameworks__WEBPACK_IMPORTED_MODULE_1__["frameworks"]; });

/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/data/sidebar.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sidebar", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_2__["sidebar"]; });





/***/ }),

/***/ "./src/data/sidebar.ts":
/*!*****************************!*\
  !*** ./src/data/sidebar.ts ***!
  \*****************************/
/*! exports provided: sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebar", function() { return sidebar; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/data/components.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");


const sidebar = [{
  title: 'Introduction',
  icon: 'introduction',
  items: [{
    title: `What’s ${_app_constants__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_NAME"]}?`,
    route: {
      to: 'ROUTE:INTRODUCTION:WHAT'
    }
  }, {
    title: `Why ${_app_constants__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_NAME"]}?`,
    route: {
      to: 'ROUTE:INTRODUCTION:WHY'
    }
  }, // {
  //     title: 'Long-term Support',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  {
    title: 'Vision',
    route: {
      to: 'ROUTE:INTRODUCTION:VISION'
    }
  } // {
  //     title: 'Roadmap',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  // {
  //     title: 'Versions',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  // {
  //     title: 'Release notes',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  // {
  //     title: 'Licence',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  ]
}, {
  title: 'Getting started',
  icon: 'getting-started',
  items: [{
    title: 'Installation',
    route: {
      to: 'ROUTE:GETTINGSTARTED:INSTALLATION'
    }
  }, // {
  //     title: 'Frequently asked questions',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  {
    title: 'Browser support',
    route: {
      to: 'ROUTE:GETTINGSTARTED:BROWSERSUPPORT'
    }
  } // {
  //     title: 'Upgrade guide',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  // {
  //     title: 'Contributing',
  //     route: {
  //         to: 'ROUTE:INTRODUCTION:QUICKSTART',
  //     },
  // },
  ]
}, // {
//     title: 'Features',
//     icon: 'features',
//     items: [
//         {
//             title: 'Global config',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Display Breakpoint',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Framework Integrations',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Accessibility (a11y)',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Bidirectionality (LTR/RTL)',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'CSS Reset',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Server side rendering',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Cancelable event',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//     ]
// },
// {
//     title: 'Animations',
//     icon: 'animations',
//     items: [
//         {
//             title: 'Animation Guideline',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Transition',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//     ]
// },
{
  title: 'UI Containers',
  icon: 'components',
  items: _components__WEBPACK_IMPORTED_MODULE_0__["components"].filter(item => item.main).map(component => ({
    title: component.title,
    route: {
      to: 'ROUTE:COMPONENT:DETAILS',
      params: {
        key: component.key
      }
    }
  }))
} // {
//     title: 'About',
//     icon: 'htmlplus',
//     items: [
//         {
//             title: 'Meet the team',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//         {
//             title: 'Sponsors and backers',
//             route: {
//                 to: 'ROUTE:INTRODUCTION:QUICKSTART',
//             },
//         },
//     ]
// },
// TODO
// {
//     title: 'Framework Integrations',
//     items: [
//         {
//             title: 'Overview',
//             route: {
//                 to: 'ROUTE:FRAMEWORK:OVERVIEW',
//             },
//         },
//         {
//             title: 'React',
//             route: {
//                 to: 'ROUTE:FRAMEWORK:REACT',
//             },
//         },
//         {
//             title: 'Angular',
//             route: {
//                 to: 'ROUTE:FRAMEWORK:ANGULAR',
//             },
//         },
//         {
//             title: 'Vue',
//             route: {
//                 to: 'ROUTE:FRAMEWORK:VUE',
//             },
//         },
//         {
//             title: 'JavaScript',
//             route: {
//                 to: 'ROUTE:FRAMEWORK:JAVASCRIPT',
//             },
//         },
//     ],
// },
];

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/*! exports provided: useRouter, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-router */ "./src/hooks/use-router.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return _use_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"]; });

/* harmony import */ var _use_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-store */ "./src/hooks/use-store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return _use_store__WEBPACK_IMPORTED_MODULE_1__["useStore"]; });




/***/ }),

/***/ "./src/hooks/use-router.ts":
/*!*********************************!*\
  !*** ./src/hooks/use-router.ts ***!
  \*********************************/
/*! exports provided: useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services */ "./src/services/index.ts");


const useRouter = () => {
  const nextRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();

  nextRouter.isActive = (name, params) => {
    const path = _app_services__WEBPACK_IMPORTED_MODULE_1__["router"].path(name, params);
    if (!path) return;
    return nextRouter.asPath.startsWith(path);
  };

  return nextRouter;
};

/***/ }),

/***/ "./src/hooks/use-store.ts":
/*!********************************!*\
  !*** ./src/hooks/use-store.ts ***!
  \********************************/
/*! exports provided: useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/store */ "./src/store/index.ts");


const useStore = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_app_store__WEBPACK_IMPORTED_MODULE_1__["StoreContext"]);

/***/ }),

/***/ "./src/pages/component/[key].tsx":
/*!***************************************!*\
  !*** ./src/pages/component/[key].tsx ***!
  \***************************************/
/*! exports provided: default, getStaticProps, getStaticPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");
/* harmony import */ var _app_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/data */ "./src/data/index.ts");
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/hooks */ "./src/hooks/index.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");
/* harmony import */ var _htmlplus_examples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @htmlplus/examples */ "../examples/build/combine/index.js");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\pages\\component\\[key].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // TODO

 // TODO

const ComponentDetails = Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__["observer"])(props => {
  const {
    item
  } = props;
  const store = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_6__["useStore"])();
  const {
    0: selected,
    1: setSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(undefined);
  const parent = item;
  const children = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const result = [];
    result.push(parent);
    _app_data__WEBPACK_IMPORTED_MODULE_5__["components"].filter(component => !component.main && component.group === (parent === null || parent === void 0 ? void 0 : parent.group)).map(component => result.push(component));
    return result;
  }, [parent]);
  const current = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    return _app_data__WEBPACK_IMPORTED_MODULE_5__["components"].find(item => item.key === (selected || (parent === null || parent === void 0 ? void 0 : parent.key)));
  }, [parent, selected]);
  const tabs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const {
      properties,
      slots,
      events,
      styles,
      methods
    } = current;
    return [{
      key: 'properties',
      value: 'Properties',
      items: properties.map(property => _objectSpread(_objectSpread({}, property), {}, {
        name: _app_utils__WEBPACK_IMPORTED_MODULE_7__["getPropertyName"](store.ui.framework, property.name)
      }))
    }, {
      key: 'slots',
      value: 'Slots',
      items: slots
    }, {
      key: 'events',
      value: 'Events',
      items: events.map(event => _objectSpread(_objectSpread({}, event), {}, {
        value: event.detail,
        name: _app_utils__WEBPACK_IMPORTED_MODULE_7__["getEventName"](store.ui.framework, event.name)
      }))
    }, {
      key: 'styles',
      value: 'Styles',
      items: styles
    }, {
      key: 'methods',
      value: 'Methods',
      items: methods.map(method => _objectSpread(_objectSpread({}, method), {}, {
        value: method.signature
      }))
    }];
  }, [current, store.ui.framework]); // TODO:

  const examples = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => {
    const examples = [];
    const current = _htmlplus_examples__WEBPACK_IMPORTED_MODULE_8__["default"].find(example => example.key === parent.key);
    parent.examples.map(example => {
      var _example$codes$find;

      example = JSON.parse(JSON.stringify(example));
      const item = current.examples.find(x => x.key === example.key);
      const preview = item.ports.preview.script;
      const port = item.ports[store.ui.framework];
      const style = ((_example$codes$find = example.codes.find(code => code.key === 'style')) === null || _example$codes$find === void 0 ? void 0 : _example$codes$find.value) || '';
      example.code = _objectSpread(_objectSpread({
        preview
      }, port), {}, {
        style
      });
      examples.push(example);
    });
    return examples;
  }, [store.ui.framework, parent.key]);

  const isDisabled = key => !current[key].length;

  const isActive = key => {
    var _tabs$find;

    return ((_tabs$find = tabs.find(tab => !isDisabled(tab.key))) === null || _tabs$find === void 0 ? void 0 : _tabs$find.key) === key;
  };

  const hasApi = !!tabs.filter(tab => isActive(tab.key)).length;
  const hasExamples = !!examples.length;
  const hasReadme = !!parent.readme;
  if (!current) return null;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Page"], {
    layout: "default",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      size: "page",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusGrid"], {
        alignItems: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusGridItem"], {
          xs: "grow",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
            size: "1",
            children: parent.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusGridItem"], {
          xs: "auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusGrid"], {
            justify: "end",
            gutterX: "sm",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusGridItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                target: "_blank",
                to: `${_app_constants__WEBPACK_IMPORTED_MODULE_4__["SOCIAL_GITHUB_COMPONENTS"]}/${parent.key}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                  size: "sm",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                    name: "github"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 21
                  }, undefined), "Github"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusGridItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
                target: "_blank",
                to: _app_constants__WEBPACK_IMPORTED_MODULE_4__["SOCIAL_GITHUB"],
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
                  size: "sm",
                  outlined: true,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
                    name: "sandbox"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 21
                  }, undefined), "Try It on Sandbox"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      size: "page",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: 'justify'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
          children: parent.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }, undefined), hasReadme && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      size: "page",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
        children: parent.readme
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      size: "page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        size: "2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["TocItem"], {
          children: "Usage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        size: "body",
        children: ["Follow the tutorials\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          to: `ROUTE:FRAMEWORK:${store.ui.framework.toUpperCase()}`,
          children: "here"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, undefined), "\xA0 to use the ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
          children: _app_constants__WEBPACK_IMPORTED_MODULE_4__["PLATFORM_NAME"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 22
        }, undefined), " library on\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("code", {
          children: [_app_utils__WEBPACK_IMPORTED_MODULE_7__["toCapitalCase"](store.ui.framework), "-based"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, undefined), "\xA0 projects."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, undefined), hasApi && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      size: "page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusGrid"], {
        "align-items": "center",
        justify: "between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusGridItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
            dense: true,
            size: "2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["TocItem"], {
              children: "API"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusGridItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
            value: selected,
            disabled: children.length < 2,
            onChange: event => setSelected(event.target.value),
            children: children.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
              value: item.key,
              children: _app_utils__WEBPACK_IMPORTED_MODULE_7__["getComponentName"](store.ui.framework, item.tag)
            }, item.key, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        size: "paragraph",
        children: "Select your desired component from below and see the available properties, slots, events, styles and methods."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusTabs"], {
        value: "properties",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusTabsBar"], {
          grow: true,
          children: tabs.map(tab => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusTabsTab"], {
            disabled: isDisabled(tab.key),
            value: tab.key,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
              children: tab.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 19
            }, undefined)
          }, tab.key, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusTabsPanels"], {
          children: tabs.map(tab => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["PlusTabsPanel"], {
            value: tab.key,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Parameters"], {
              items: tab.items
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 19
            }, undefined)
          }, tab.key, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 17
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }, undefined), hasExamples && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      size: "page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        size: "2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["TocItem"], {
          children: "Examples"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        size: "body",
        children: "Below is a collection of simple to complex examples."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }, undefined), examples.map(example => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Section"], {
      size: "page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        size: "3",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["TocItem"], {
          children: example.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        size: "paragraph",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Markup"], {
          children: example.readme
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_3__["Example"], {
        value: example
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 11
      }, undefined)]
    }, example.key, true, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 9
    }, undefined))]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (ComponentDetails);
const getStaticProps = async ({
  params
}) => {
  const {
    key
  } = params;
  const component = _app_data__WEBPACK_IMPORTED_MODULE_5__["components"].find(item => item.key === key);
  return {
    props: {
      item: component
    }
  };
};
const getStaticPaths = async () => {
  return {
    paths: _app_data__WEBPACK_IMPORTED_MODULE_5__["components"].map(item => `/component/${item.key}`),
    fallback: false
  };
};

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: Router, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/services/router/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "router", function() { return _router__WEBPACK_IMPORTED_MODULE_0__["router"]; });



/***/ }),

/***/ "./src/services/router/index.ts":
/*!**************************************!*\
  !*** ./src/services/router/index.ts ***!
  \**************************************/
/*! exports provided: Router, router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/services/router/router.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/services/router/routes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "router", function() { return _routes__WEBPACK_IMPORTED_MODULE_1__["router"]; });




/***/ }),

/***/ "./src/services/router/router.ts":
/*!***************************************!*\
  !*** ./src/services/router/router.ts ***!
  \***************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Router {
  constructor() {
    _defineProperty(this, "routes", []);
  }

  all() {
    return this.routes;
  }

  find(name) {
    return this.routes.find(item => item.name === name);
  }

  path(name, params) {
    const route = this.find(name);
    if (!route) return;
    let path = route.path;
    Object.keys(params || {}).map(key => {
      path = path.replace(`[${key}]`, params[key]);
    });
    return path;
  }

  register(route) {
    this.routes.push(route);
    return route;
  }

}

/***/ }),

/***/ "./src/services/router/routes.ts":
/*!***************************************!*\
  !*** ./src/services/router/routes.ts ***!
  \***************************************/
/*! exports provided: router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/services/router/router.ts");


const router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"]();
router.register({
  name: 'ROUTE:HOME',
  path: '/'
}); // INTRODUCTION

router.register({
  name: 'ROUTE:INTRODUCTION:VISION',
  path: '/introduction/vision'
});
router.register({
  name: 'ROUTE:INTRODUCTION:WHAT',
  path: `/introduction/what-is-${_app_constants__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_KEY"]}`
});
router.register({
  name: 'ROUTE:INTRODUCTION:WHY',
  path: `/introduction/why-${_app_constants__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_KEY"]}`
}); // GETTINGSTARTED

router.register({
  name: 'ROUTE:GETTINGSTARTED:INSTALLATION',
  path: '/getting-started/installation'
});
router.register({
  name: 'ROUTE:GETTINGSTARTED:BROWSERSUPPORT',
  path: '/getting-started/browser-support'
}); // COMPONENT

router.register({
  name: 'ROUTE:COMPONENT:DETAILS',
  path: '/component/[key]'
}); // router.register({
//     name: 'ROUTE:FRAMEWORK:ANGULAR',
//     path: '/framework/angular'
// });
// router.register({
//     name: 'ROUTE:FRAMEWORK:JAVASCRIPT',
//     path: '/framework/javascript'
// });
// router.register({
//     name: 'ROUTE:FRAMEWORK:OVERVIEW',
//     path: '/framework/overview'
// });
// router.register({
//     name: 'ROUTE:FRAMEWORK:REACT',
//     path: '/framework/react'
// });
// router.register({
//     name: 'ROUTE:FRAMEWORK:VUE',
//     path: '/framework/vue'
// });

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store/store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["Store"]; });

/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.context */ "./src/store/store.context.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreContext", function() { return _store_context__WEBPACK_IMPORTED_MODULE_1__["StoreContext"]; });

/* harmony import */ var _store_ui_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.ui.types */ "./src/store/store.ui.types.ts");
/* harmony import */ var _store_ui_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_store_ui_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _store_ui_types__WEBPACK_IMPORTED_MODULE_2__) if(["default","Store","StoreContext"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _store_ui_types__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/store/store.context.ts":
/*!************************************!*\
  !*** ./src/store/store.context.ts ***!
  \************************************/
/*! exports provided: StoreContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreContext", function() { return StoreContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

/***/ }),

/***/ "./src/store/store.toc.ts":
/*!********************************!*\
  !*** ./src/store/store.toc.ts ***!
  \********************************/
/*! exports provided: TocStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TocStore", function() { return TocStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class TocStore {
  constructor(root) {
    this.root = root;

    _defineProperty(this, "items", []);

    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["makeAutoObservable"])(this, {
      root: false
    });
  }

  add(item) {
    this.items.push(item);
    if (item.key && `#${item.key}` !== window.location.hash) return;
    setTimeout(() => {
      item.active = true;
      item.scrollTo();
    }, 1000);
  }

  remove(key) {
    this.items = this.items.filter(item => item.key !== key);
  }

  update(key, entry) {
    const active = this.items.find(item => {
      var _item$entry;

      return (_item$entry = item.entry) === null || _item$entry === void 0 ? void 0 : _item$entry.isIntersecting;
    });
    const item = this.items.find(item => item.key === key);
    item.entry = entry;
    const entries = this.items.filter(item => {
      var _item$entry2;

      return (_item$entry2 = item.entry) === null || _item$entry2 === void 0 ? void 0 : _item$entry2.isIntersecting;
    });
    let next;

    if (entries.length) {
      next = entries[0];
    } else {
      if (!active || !active.entry) return;
      const top = active.entry.target.getBoundingClientRect().top;
      const toDown = top < 0;
      const index = this.items.findIndex(item => item.key === active.key);
      next = this.items[toDown ? index : index - 1];
    }

    if (!next) return;
    this.items.map(item => item.active = item.key === next.key);
  }

}

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_toc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store.toc */ "./src/store/store.toc.ts");
/* harmony import */ var _store_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.ui */ "./src/store/store.ui.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Store {
  constructor() {
    _defineProperty(this, "toc", void 0);

    _defineProperty(this, "ui", void 0);

    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["makeAutoObservable"])(this);
    this.toc = new _store_toc__WEBPACK_IMPORTED_MODULE_1__["TocStore"](this);
    this.ui = new _store_ui__WEBPACK_IMPORTED_MODULE_2__["UiStore"](this);
  }

}

/***/ }),

/***/ "./src/store/store.ui.ts":
/*!*******************************!*\
  !*** ./src/store/store.ui.ts ***!
  \*******************************/
/*! exports provided: UiStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiStore", function() { return UiStore; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class UiStore {
  constructor(root) {
    this.root = root;

    _defineProperty(this, "framework", 'react');

    _defineProperty(this, "layout", void 0);

    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["makeAutoObservable"])(this, {
      root: false
    }); // TODO

    this.setFramework(nookies__WEBPACK_IMPORTED_MODULE_1___default.a.get(null).framework || 'react');
  }

  setFramework(value) {
    this.framework = value; // TODO

    nookies__WEBPACK_IMPORTED_MODULE_1___default.a.set(null, 'framework', value, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    });
  }

  setLayout(value) {
    this.layout = value;
  }

}

/***/ }),

/***/ "./src/store/store.ui.types.ts":
/*!*************************************!*\
  !*** ./src/store/store.ui.types.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/classes.ts":
/*!******************************!*\
  !*** ./src/utils/classes.ts ***!
  \******************************/
/*! exports provided: classes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

const classes = (...input) => {
  const names = [];

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    const type = Object.prototype.toString.call(element);

    switch (type) {
      case '[object Array]':
        names.push(classes(element));
        break;

      case '[object Object]':
        const keys = Object.keys(element);

        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          const value = element[key];
          key = _app_utils__WEBPACK_IMPORTED_MODULE_0__["toKebabCase"](key);
          const type = Object.prototype.toString.call(value);

          switch (type) {
            case '[object Boolean]':
              value && names.push(`${key}`);
              break;

            case '[object Number]':
              names.push(`${key}-${value}`);
              break;

            case '[object String]':
              switch (value) {
                case '':
                case 'true':
                  names.push(`${key}`);
                  break;

                case 'false':
                  break;

                default:
                  names.push(`${key}-${value}`);
                  break;
              }

              break;
          }
        }

        break;

      case '[object String]':
        names.push(element);
        break;
    }
  }

  return names.join(' ');
};

/***/ }),

/***/ "./src/utils/copy-to-clipboard.ts":
/*!****************************************!*\
  !*** ./src/utils/copy-to-clipboard.ts ***!
  \****************************************/
/*! exports provided: copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
const copyToClipboard = text => {
  const input = document.createElement('textarea');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand('copy');
  input.remove();
};

/***/ }),

/***/ "./src/utils/get-component-name.ts":
/*!*****************************************!*\
  !*** ./src/utils/get-component-name.ts ***!
  \*****************************************/
/*! exports provided: getComponentName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentName", function() { return getComponentName; });
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

const getComponentName = (framework, input) => {
  if (framework !== 'react') return input;
  return _app_utils__WEBPACK_IMPORTED_MODULE_0__["toPascalCase"](input);
};

/***/ }),

/***/ "./src/utils/get-event-name.ts":
/*!*************************************!*\
  !*** ./src/utils/get-event-name.ts ***!
  \*************************************/
/*! exports provided: getEventName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventName", function() { return getEventName; });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/constants */ "./src/configs/constants.ts");
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");


const getEventName = (framework, input) => {
  if (framework !== 'react') return input;
  return `on${_app_constants__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_EVENT_PREFIX"]}${_app_utils__WEBPACK_IMPORTED_MODULE_1__["toCapitalCase"](input)}`;
};

/***/ }),

/***/ "./src/utils/get-property-name.ts":
/*!****************************************!*\
  !*** ./src/utils/get-property-name.ts ***!
  \****************************************/
/*! exports provided: getPropertyName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return getPropertyName; });
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

const getPropertyName = (framework, input) => {
  if (framework !== 'react') return input;
  return _app_utils__WEBPACK_IMPORTED_MODULE_0__["toCamelCase"](input);
};

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: classes, copyToClipboard, getComponentName, getEventName, getPropertyName, toCamelCase, toCapitalCase, toKebabCase, toPascalCase, toUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/utils/classes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return _classes__WEBPACK_IMPORTED_MODULE_0__["classes"]; });

/* harmony import */ var _copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy-to-clipboard */ "./src/utils/copy-to-clipboard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return _copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__["copyToClipboard"]; });

/* harmony import */ var _get_component_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-component-name */ "./src/utils/get-component-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComponentName", function() { return _get_component_name__WEBPACK_IMPORTED_MODULE_2__["getComponentName"]; });

/* harmony import */ var _get_event_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-event-name */ "./src/utils/get-event-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEventName", function() { return _get_event_name__WEBPACK_IMPORTED_MODULE_3__["getEventName"]; });

/* harmony import */ var _get_property_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-property-name */ "./src/utils/get-property-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return _get_property_name__WEBPACK_IMPORTED_MODULE_4__["getPropertyName"]; });

/* harmony import */ var _to_camel_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./to-camel-case */ "./src/utils/to-camel-case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", function() { return _to_camel_case__WEBPACK_IMPORTED_MODULE_5__["toCamelCase"]; });

/* harmony import */ var _to_capital_case__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./to-capital-case */ "./src/utils/to-capital-case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toCapitalCase", function() { return _to_capital_case__WEBPACK_IMPORTED_MODULE_6__["toCapitalCase"]; });

/* harmony import */ var _to_kebab_case__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./to-kebab-case */ "./src/utils/to-kebab-case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toKebabCase", function() { return _to_kebab_case__WEBPACK_IMPORTED_MODULE_7__["toKebabCase"]; });

/* harmony import */ var _to_pascal_case__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./to-pascal-case */ "./src/utils/to-pascal-case.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPascalCase", function() { return _to_pascal_case__WEBPACK_IMPORTED_MODULE_8__["toPascalCase"]; });

/* harmony import */ var _to_unit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./to-unit */ "./src/utils/to-unit.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toUnit", function() { return _to_unit__WEBPACK_IMPORTED_MODULE_9__["toUnit"]; });












/***/ }),

/***/ "./src/utils/to-camel-case.ts":
/*!************************************!*\
  !*** ./src/utils/to-camel-case.ts ***!
  \************************************/
/*! exports provided: toCamelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", function() { return toCamelCase; });
// TODO
const toCamelCase = input => {
  if (!input) return input;
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '').replace(/-/g, '');
};

/***/ }),

/***/ "./src/utils/to-capital-case.ts":
/*!**************************************!*\
  !*** ./src/utils/to-capital-case.ts ***!
  \**************************************/
/*! exports provided: toCapitalCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCapitalCase", function() { return toCapitalCase; });
const toCapitalCase = input => {
  if (!input) return input;
  return input.replace(/^\w/, char => char.toUpperCase());
};

/***/ }),

/***/ "./src/utils/to-kebab-case.ts":
/*!************************************!*\
  !*** ./src/utils/to-kebab-case.ts ***!
  \************************************/
/*! exports provided: toKebabCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toKebabCase", function() { return toKebabCase; });
const toKebabCase = input => {
  return input.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(char => char.toLowerCase()).join('-');
};

/***/ }),

/***/ "./src/utils/to-pascal-case.ts":
/*!*************************************!*\
  !*** ./src/utils/to-pascal-case.ts ***!
  \*************************************/
/*! exports provided: toPascalCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPascalCase", function() { return toPascalCase; });
/* harmony import */ var _app_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/utils */ "./src/utils/index.ts");

const toPascalCase = input => {
  if (!input) return input;
  return input.split('-').map(word => _app_utils__WEBPACK_IMPORTED_MODULE_0__["toCapitalCase"](word)).join('');
};

/***/ }),

/***/ "./src/utils/to-unit.ts":
/*!******************************!*\
  !*** ./src/utils/to-unit.ts ***!
  \******************************/
/*! exports provided: toUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUnit", function() { return toUnit; });
const toUnit = input => {
  if (input == null || input === '') return undefined;
  if (isNaN(+input)) return String(input);
  return `${Number(input)}px`;
};

/***/ }),

/***/ "@htmlplus/react":
/*!**********************************!*\
  !*** external "@htmlplus/react" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@htmlplus/react");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "mobx-react-lite":
/*!**********************************!*\
  !*** external "mobx-react-lite" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx-react-lite");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nookies");

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "prismjs/components/prism-jsx":
/*!***********************************************!*\
  !*** external "prismjs/components/prism-jsx" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-jsx");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });