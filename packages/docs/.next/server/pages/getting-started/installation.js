module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/getting-started/installation": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/getting-started/installation.tsx");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/content/en/getting-started lazy recursive ^\\.\\/installation\\..*\\.md$":
/*!*****************************************************************************************!*\
  !*** ./src/content/en/getting-started lazy ^\.\/installation\..*\.md$ namespace object ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./installation.angular.md": [
		"./src/content/en/getting-started/installation.angular.md",
		1
	],
	"./installation.javascript.md": [
		"./src/content/en/getting-started/installation.javascript.md",
		2
	],
	"./installation.react.md": [
		"./src/content/en/getting-started/installation.react.md",
		3
	],
	"./installation.vue.md": [
		"./src/content/en/getting-started/installation.vue.md",
		4
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/content/en/getting-started lazy recursive ^\\.\\/installation\\..*\\.md$";
module.exports = webpackAsyncContext;

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

/***/ "./src/pages/getting-started/installation.tsx":
/*!****************************************************!*\
  !*** ./src/pages/getting-started/installation.tsx ***!
  \****************************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components */ "./src/components/index.ts");

var _jsxFileName = "C:\\projects\\mine\\htmlplus\\core\\packages\\docs\\src\\pages\\getting-started\\installation.tsx";





const Installation = props => {
  const {
    content,
    data
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_4__["Page"], {
    layout: "default",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      children: data.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components__WEBPACK_IMPORTED_MODULE_4__["Markup"], {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

const getServerSideProps = async context => {
  const framework = nookies__WEBPACK_IMPORTED_MODULE_3___default.a.get(context).framework || 'react';
  const file = await __webpack_require__("./src/content/en/getting-started lazy recursive ^\\.\\/installation\\..*\\.md$")(`./installation.${framework}.md`);
  const {
    content,
    data
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(file.default) || {};
  return {
    props: {
      content,
      data
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Installation);

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

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hbGVydC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYW5uZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm94L2JveC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYm94L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb2RlL2NvZGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZXhhbXBsZS9leGFtcGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9leGFtcGxlL2V4YW1wbGUudHlwZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V4YW1wbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZyYW1ld29yay1zZWxlY3Rvci9mcmFtZXdvcmstc2VsZWN0b3IudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZyYW1ld29yay1zZWxlY3Rvci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbi9pY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29uL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2lucHV0L2lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saW5rL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpbmsvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFya3VwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcmt1cC9tYXJrdXAucmVuZGVyZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXJrdXAvbWFya3VwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2UvcGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFyYW1ldGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXJhbWV0ZXJzL3BhcmFtZXRlcnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc29jaWFscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzL3NvY2lhbHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RleHQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGV4dC90ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9jL3RvYy1pdGVtL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvYy90b2MtaXRlbS90b2MtaXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9jL3RvYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b2MvdG9jL3RvYy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3MvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2VuL2dldHRpbmctc3RhcnRlZCBsYXp5IF5cXC5cXC9pbnN0YWxsYXRpb25cXC4uKlxcLm1kJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbXBvbmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZnJhbWV3b3Jrcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zaWRlYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlLXJvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlLXN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9nZXR0aW5nLXN0YXJ0ZWQvaW5zdGFsbGF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3JvdXRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvcm91dGVyL3JvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3N0b3JlLmNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3N0b3JlLnRvYy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3N0b3JlLnVpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jbGFzc2VzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb3B5LXRvLWNsaXBib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2V0LWNvbXBvbmVudC1uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9nZXQtZXZlbnQtbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2V0LXByb3BlcnR5LW5hbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90by1jYW1lbC1jYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90by1jYXBpdGFsLWNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RvLWtlYmFiLWNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3RvLXBhc2NhbC1jYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90by11bml0LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBodG1scGx1cy9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXktbWF0dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9ieFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vYngtcmVhY3QtbGl0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9va2llc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaXNtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1hcmtkb3duXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsicHJlZmV0Y2hlZCIsInJvdXRlciIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwiY29uc29sZSIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJ2YWxpZGF0ZSIsInBhcnNlZERlc3RpbmF0aW9uIiwiaGFkTG9jYWxlIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInN0ck9yQXJyYXkiLCJjb21waWxlTm9uUGF0aCIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwiZnNQYXRobmFtZSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBbGVydCIsInR5cGUiLCJjbGFzc2VzIiwiVXRpbHMiLCJCYW5uZXIiLCJCb3giLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwic3R5bGUiLCJCdXR0b24iLCJjb2xvciIsImljb24iLCJvdXRsaW5lZCIsInNpemUiLCJDb2RlIiwiY29weSIsImxhbmd1YWdlIiwiZWxlbWVudCIsInVzZVJlZiIsInRvU3RyaW5nIiwidXNlRWZmZWN0IiwiUHJpc20iLCJoaWdobGlnaHRBbGxVbmRlciIsImN1cnJlbnQiLCJjbGFzc2VzQ29kZSIsIkV4YW1wbGUiLCJjb2RlIiwibGlua3MiLCJ1c2VNZW1vIiwiY29kZXNhbmRib3giLCJnaXRodWIiLCJ0aXRsZSIsInJ1bGVzIiwiY2xhc3NOYW1lIiwiY2xhc3NMZW4iLCJsZW5ndGgiLCJjaGFyIiwibmV4dENoYXIiLCJpc0F0IiwiaXNJbiIsInNsaWNlIiwiaW5kZXhPZiIsInRhYnMiLCJmaWx0ZXIiLCJ0YWIiLCJFeGFtcGxlTGFuZ3VhZ2UiLCJGb290ZXIiLCJpdGVtcyIsIkNvbnN0YW50cyIsImxhYmVsIiwiZ3JvdXAiLCJPcHRpb24iLCJTaW5nbGVWYWx1ZSIsIndpZHRoIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZGlzcGxheSIsImxvZ28iLCJGcmFtZXdvcmtTZWxlY3RvciIsInN0b3JlIiwidXNlU3RvcmUiLCJ1c2VSb3V0ZXIiLCJmcmFtZXdvcmtzIiwiZnJhbWV3b3JrIiwiY2hhbmdlIiwidWkiLCJzZXRGcmFtZXdvcmsiLCJmaW5kIiwiSGVhZGVyIiwibWVudSIsInRvIiwiSWNvbiIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJBbmNob3IiLCJmb3J3YXJkUmVmIiwiYXR0cmlidXRlcyIsInJlbCIsInJlbmRlcmVycyIsImJsb2NrcXVvdGUiLCJub2RlIiwidHJpbSIsInRva2VuIiwibWF0Y2giLCJoZWFkaW5nIiwibGV2ZWwiLCJwYXJhZ3JhcGgiLCJ0b2tlbml6ZXIiLCJ0b2tlbnMiLCJyYXciLCJzZWN0aW9ucyIsInNwbGl0IiwiTWFya3VwIiwiaWdub3JlUGFyYWdyYXBoIiwiUGFnZSIsImxheW91dCIsInNldExheW91dCIsIlBhcmFtZXRlcnMiLCJoYXNEZWZhdWx0IiwiZGVmYXVsdCIsImhhc1R5cGUiLCJoYXNWYWx1ZSIsImRlc2NyaXB0aW9uIiwiU2VjdGlvbiIsIlNpZGViYXIiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJhY3RpdmVzIiwicnVuIiwicGFyZW50IiwiaXNBcnJheSIsImlzQWN0aXZlIiwic29tZSIsImFjdGl2ZSIsImlzRXhwYW5kIiwidG9nZ2xlIiwicGFyZW50cyIsImZpbmRJbmRleCIsImlzQ29sbGFwc2VkIiwiZm9udFdlaWdodCIsIlNvY2lhbHMiLCJUZXh0IiwiYWxpZ24iLCJkZW5zZSIsImlubGluZSIsInRydW5jYXRlIiwid2VpZ2h0IiwiVGFnIiwidW5kZWZpbmVkIiwiVG9jSXRlbSIsInNjcm9sbFRvIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsImRlcHRoIiwicGFyZW50RWxlbWVudCIsImxvY2FsTmFtZSIsInRvYyIsImFkZCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwidXBkYXRlIiwiZGlzY29ubmVjdCIsInJlbW92ZSIsIlRvYyIsIlBMQVRGT1JNX0FCQlJFVklBVElPTiIsIlBMQVRGT1JNX0tFWSIsIlBMQVRGT1JNX05BTUUiLCJQTEFURk9STV9UQUdfUFJFRklYIiwiUExBVEZPUk1fRVZFTlRfUFJFRklYIiwiV0VCQ09NUE9ORU5UX1JFRkVSRU5DRSIsIldFQkNPTVBPTkVOVF9DT01QQVRJQklMSVRZIiwiUE9SVF9BTkdVTEFSX1BBQ0tBR0VfTkFNRSIsIlBPUlRfQU5HVUxBUl9QQUNLQUdFX0xPQURFUiIsIlBPUlRfSkFWQVNDUklQVF9QQUNLQUdFX05BTUUiLCJQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9MT0FERVIiLCJQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9DRE4iLCJQT1JUX0pBVkFTQ1JJUFRfUEFDS0FHRV9DRE5fTE9BREVSIiwiUE9SVF9SRUFDVF9QQUNLQUdFX05BTUUiLCJQT1JUX1JFQUNUX1BBQ0tBR0VfTE9BREVSIiwiUE9SVF9WVUVfUEFDS0FHRV9OQU1FIiwiUE9SVF9WVUVfUEFDS0FHRV9MT0FERVIiLCJQT1JUX1ZVRV9JR05PUkVEX0VMRU1FTlRTIiwiU09DSUFMX0ZBQ0VCT09LIiwiU09DSUFMX1lPVVRVQkUiLCJTT0NJQUxfSU5TVEFHUkFNIiwiU09DSUFMX1RXSVRURVIiLCJTT0NJQUxfTElOS0VESU4iLCJTT0NJQUxfR0lUSFVCIiwiU09DSUFMX0dJVEhVQl9DT01QT05FTlRTIiwiam9zbiIsImRldmVsb3BtZW50Iiwic2lkZWJhciIsIm1haW4iLCJuZXh0Um91dGVyIiwidXNlUm91dGVyTmV4dCIsInN0YXJ0c1dpdGgiLCJ1c2VDb250ZXh0IiwiU3RvcmVDb250ZXh0IiwiSW5zdGFsbGF0aW9uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsIm5vb2tpZXMiLCJmaWxlIiwibWF0dGVyIiwicmVnaXN0ZXIiLCJjcmVhdGVDb250ZXh0IiwiVG9jU3RvcmUiLCJyb290IiwibWFrZUF1dG9PYnNlcnZhYmxlIiwiaXNJbnRlcnNlY3RpbmciLCJuZXh0IiwidG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9Eb3duIiwiaW5kZXgiLCJTdG9yZSIsIlVpU3RvcmUiLCJtYXhBZ2UiLCJuYW1lcyIsInByb3RvdHlwZSIsImNhbGwiLCJqb2luIiwiY29weVRvQ2xpcGJvYXJkIiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsInNldFNlbGVjdGlvblJhbmdlIiwiZXhlY0NvbW1hbmQiLCJnZXRDb21wb25lbnROYW1lIiwiZ2V0RXZlbnROYW1lIiwiZ2V0UHJvcGVydHlOYW1lIiwidG9DYW1lbENhc2UiLCJ3b3JkIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInRvQ2FwaXRhbENhc2UiLCJ0b0tlYmFiQ2FzZSIsInRvUGFzY2FsQ2FzZSIsInRvVW5pdCIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdB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Ozs7Ozs7OztBQ0FQLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9nZXR0aW5nLXN0YXJ0ZWQvaW5zdGFsbGF0aW9uXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi8uLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9nZXR0aW5nLXN0YXJ0ZWQvaW5zdGFsbGF0aW9uLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9IGdldERvbWFpbkxvY2FsZShcbiAgICAgIGFzLFxuICAgICAgY3VyTG9jYWxlLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdElkbGVDYWxsYmFja1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG5mdW5jdGlvbiBpZGxlVGltZW91dDxUPihtczogbnVtYmVyLCBlcnI6IEVycm9yKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KGVyciksIG1zKSlcbiAgKVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICAgICAgY2IgJiYgY2IoKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIGlkbGVUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICAgICksXG4gIF0pXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgaWRsZVRpbWVvdXQ8Um91dGVMb2FkZXJFbnRyeT4oXG4gICAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxuICAgICAgbGV0IGNuXG4gICAgICBpZiAoKGNuID0gKG5hdmlnYXRvciBhcyBhbnkpLmNvbm5lY3Rpb24pKSB7XG4gICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICBpZiAoY24uc2F2ZURhdGEgfHwgLzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgLnRoZW4oKG91dHB1dCkgPT5cbiAgICAgICAgICBQcm9taXNlLmFsbChcbiAgICAgICAgICAgIGNhblByZWZldGNoXG4gICAgICAgICAgICAgID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpID0+IHByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpKVxuICAgICAgICAgICAgICA6IFtdXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHRoaXMubG9hZFJvdXRlKHJvdXRlKSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgIC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4gICAgICAgICAgKCkgPT4ge31cbiAgICAgICAgKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm91dGVMb2FkZXJcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG4gICdpc1JlYWR5Jyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAgICAgICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAoc2VnbWVudCkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICAgIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybDogc3RyaW5nKSB7XG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcblxuICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmxcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzPzogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKVxuICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcblxuICByZXR1cm4ge1xuICAgIHVybDogcHJlcGFyZWRVcmwsXG4gICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gICAgfCAnaXNSZWFkeSdcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc1JlYWR5OiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChcbiAgICAgICAgICBhZGRMb2NhbGUoZGVsQmFzZVBhdGgocGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUpLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwge1xuICAgICAgICAgICAgICBwYXRobmFtZTogbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgICAgICBoYXNCYXNlUGF0aChyZXNvbHZlZEFzKSA/IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICAgICAgKS5wYXRobmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUocmVzb2x2ZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fCAob3B0aW9ucy5zY3JvbGwgPyB7IHg6IDAsIHk6IDAgfSA6IG51bGwpXG4gICAgICApLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgfSlcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgICAgIHJvdXRlSW5mb0VycixcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlTm9uUGF0aCh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IHN0cmluZyB7XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoJzonKSkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyYW1zKSkge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcyhgOiR7a2V5fWApKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcKmAsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX1cXFxcP2AsICdnJyksXG4gICAgICAgICAgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT05gXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChgOiR7a2V5fVxcXFwrYCwgJ2cnKSwgYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUExVU2ApXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIG5ldyBSZWdFeHAoYDoke2tleX0oPyFcXFxcdylgLCAnZycpLFxuICAgICAgICAgIGAtLUVTQ0FQRURfUEFSQU1fQ09MT04ke2tleX1gXG4gICAgICAgIClcbiAgICB9XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZVxuICAgIC5yZXBsYWNlKC8oOnxcXCp8XFw/fFxcK3xcXCh8XFwpfFxce3xcXH0pL2csICdcXFxcJDEnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUExVUy9nLCAnKycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9DT0xPTi9nLCAnOicpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9RVUVTVElPTi9nLCAnPycpXG4gICAgLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9BU1RFUklTS1MvZywgJyonKVxuXG4gIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAvLyBjb3JyZWN0bHlcbiAgcmV0dXJuIHBhdGhUb1JlZ2V4cFxuICAgIC5jb21waWxlKGAvJHt2YWx1ZX1gLCB7IHZhbGlkYXRlOiBmYWxzZSB9KShwYXJhbXMpXG4gICAgLnN1YnN0cigxKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW5cbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgLy8gY2xvbmUgcXVlcnkgc28gd2UgZG9uJ3QgbW9kaWZ5IHRoZSBvcmlnaW5hbFxuICBxdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KVxuICBjb25zdCBoYWRMb2NhbGUgPSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuICBkZWxldGUgcXVlcnkuX19uZXh0RGVmYXVsdExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gY29tcGlsZU5vblBhdGgodmFsdWUsIHBhcmFtcylcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBsZXQgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIC8vIHJlbW92ZSBpbnRlcm5hbCBwYXJhbSBmb3IgaTE4blxuICBpZiAoaGFkTG9jYWxlKSB7XG4gICAgcGFyYW1LZXlzID0gcGFyYW1LZXlzLmZpbHRlcigobmFtZSkgPT4gbmFtZSAhPT0gJ25leHRJbnRlcm5hbExvY2FsZScpXG4gIH1cblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0cnkge1xuICAgIG5ld1VybCA9IGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgKHBhcnNlZERlc3RpbmF0aW9uIGFzIGFueSkuc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhub3JtYWxpemVMb2NhbGVQYXRoKGFzUGF0aCwgbG9jYWxlcykucGF0aG5hbWUpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgY29uc3QgZnNQYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSxcbiAgICAgICAgICBsb2NhbGVzXG4gICAgICAgICkucGF0aG5hbWVcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMoZnNQYXRobmFtZSkpIHtcbiAgICAgICAgICBhc1BhdGggPSBmc1BhdGhuYW1lXG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihmc1BhdGhuYW1lKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYXNQYXRoID0gZnNQYXRobmFtZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBBbGVydFByb3BzIH0gZnJvbSAnLi9hbGVydC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBBbGVydDogUmVhY3QuRkM8QWxlcnRQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGNoaWxkcmVuLCB0eXBlIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnYWxlcnQnLFxuICAgIHsgdHlwZSB9XG4gICk7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT57Y2hpbGRyZW59PC9kaXY+O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYWxlcnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hbGVydC50eXBlcyc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICdAYXBwL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IEJhbm5lciA9ICgpID0+IHtcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnYmFubmVyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgey8qIDxQbHVzR3JpZCBndXR0ZXI9XCJtZFwiPlxuICAgICAgICA8UGx1c0dyaWRJdGVtPlxuICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgQmV0aXNhXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgPFBsdXNHcmlkSXRlbSB4cz1cImdyb3dcIiAvPlxuICAgICAgICA8UGx1c0dyaWRJdGVtPlxuICAgICAgICAgIDxUZXh0IHNpemU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgU2VlIGhvdyB7Q29uc3RhbnRzLlBMQVRGT1JNX05BTUV9IGZpdHMgaW50byB0aGUgZW50aXJlIEJldGlzYSBFY29zeXN0ZW0gLSZndDtcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICA8UGx1c0dyaWRJdGVtIGhpZGUteHM+XG4gICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICB8XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgPFBsdXNHcmlkSXRlbT5cbiAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgIEJMQUNLIExJVkVTIE1BVFRFUlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICA8L1BsdXNHcmlkPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2Jhbm5lcic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBCb3hQcm9wcyB9IGZyb20gJy4vYm94LnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IEJveDogUmVhY3QuRkM8Qm94UHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgbWluV2lkdGgsIG1heFdpZHRoLCAuLi5hbGwgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdib3gnLFxuICAgIGFsbFxuICApO1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1pbldpZHRoOiBVdGlscy50b1VuaXQobWluV2lkdGgpLFxuICAgIG1heFdpZHRoOiBVdGlscy50b1VuaXQobWF4V2lkdGgpLFxuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfSBzdHlsZT17c3R5bGV9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9ib3gnO1xuZXhwb3J0ICogZnJvbSAnLi9ib3gudHlwZXMnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IEJ1dHRvblByb3BzIH0gZnJvbSAnLi9idXR0b24udHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxCdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGNoaWxkcmVuLCBjb2xvciwgZGlzYWJsZWQsIGljb24sIG91dGxpbmVkLCBzaXplID0gJ21kJywgdGV4dCwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ2J1dHRvbicsXG4gICAgeyBjb2xvciwgZGlzYWJsZWQsIGljb24sIG91dGxpbmVkLCBzaXplLCB0ZXh0IH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzfSBkaXNhYmxlZD17ZGlzYWJsZWR9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vYnV0dG9uJztcbmV4cG9ydCAqIGZyb20gJy4vYnV0dG9uLnR5cGVzJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzeCc7XG5pbXBvcnQgeyBCdXR0b24sIEljb24gfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBDb2RlUHJvcHMgfSBmcm9tICcuL2NvZGUudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQ29kZTogUmVhY3QuRkM8Q29kZVByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNvcHkgPSB0cnVlLCBsYW5ndWFnZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZWxlbWVudCA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBjb250ZW50ID0gKGNoaWxkcmVuIHx8ICcnKS50b1N0cmluZygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBQcmlzbS5oaWdobGlnaHRBbGxVbmRlcihlbGVtZW50LmN1cnJlbnQpKTtcblxuICBjb25zdCBjbGFzc2VzQ29kZSA9IGAke3Byb2Nlc3MuYnJvd3NlciA/ICcgJyA6ICcnfWxhbmd1YWdlLSR7bGFuZ3VhZ2V9YDtcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnY29kZSdcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtlbGVtZW50fSBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAge2NvcHkgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgIDxCdXR0b24gaWNvbiBvbkNsaWNrPXsoKSA9PiBVdGlscy5jb3B5VG9DbGlwYm9hcmQoY29udGVudCl9PlxuICAgICAgICAgICAgPEljb24gbmFtZT1cImNvcHlcIiAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8cHJlIGNsYXNzTmFtZT17Y2xhc3Nlc0NvZGV9PlxuICAgICAgICA8Y29kZSBjbGFzc05hbWU9e2NsYXNzZXNDb2RlfT5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9jb2RlPlxuICAgICAgPC9wcmU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9jb2RlJztcbmV4cG9ydCAqIGZyb20gJy4vY29kZS50eXBlcyc7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb2RlLCBJY29uLCBMaW5rLCBQbHVzR3JpZCwgUGx1c0dyaWRJdGVtLCBQbHVzVGFicywgUGx1c1RhYnNCYXIsIFBsdXNUYWJzVGFiLCBQbHVzVGFic1BhbmVscywgUGx1c1RhYnNQYW5lbCB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IEV4YW1wbGVQcm9wcywgRXhhbXBsZUxhbmd1YWdlIH0gZnJvbSAnLi9leGFtcGxlLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGU6IFJlYWN0LkZDPEV4YW1wbGVQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wcztcblxuICBjb25zdCBjb2RlID0gdmFsdWUuY29kZSB8fCB7fTtcblxuICBjb25zdCBsaW5rcyA9IHVzZU1lbW8oKCkgPT4ge1xuXG4gICAgcmV0dXJuIChjb2RlLmxpbmtzIHx8IFtdKVxuICAgICAgLm1hcCgobGluaykgPT4ge1xuXG4gICAgICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgICBjb2Rlc2FuZGJveDogJ0VkaXQgaW4gQ29kZVNhbmRib3gnLFxuICAgICAgICAgIGdpdGh1YjogJ1ZpZXcgb24gR2l0aHViJyxcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ubGluayxcbiAgICAgICAgICB0aXRsZTogbWFwW2xpbmsua2V5XSxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH0sIFtjb2RlLmxpbmtzXSk7XG5cbiAgY29uc3Qgc3R5bGUgPSB1c2VNZW1vKFxuICAgICgpID0+IHtcblxuICAgICAgaWYgKCFjb2RlLnN0eWxlKSByZXR1cm47XG5cbiAgICAgIGxldCBydWxlcyA9IGNvZGUuc3R5bGU7XG5cbiAgICAgIGxldCBjbGFzc05hbWUgPSBgLmV4LSR7dmFsdWUua2V5fWA7XG5cbiAgICAgIHRyeSB7IHZhciBjbGFzc0xlbiA9IGNsYXNzTmFtZS5sZW5ndGgsIGNoYXIsIG5leHRDaGFyLCBpc0F0LCBpc0luOyBjbGFzc05hbWUgKz0gJyAnOyBydWxlcyA9IHJ1bGVzLnJlcGxhY2UoL1xcL1xcKig/Oig/IVxcKlxcLylbXFxzXFxTXSkqXFwqXFwvfFtcXHJcXG5cXHRdKy9nLCAnJyk7IHJ1bGVzID0gcnVsZXMucmVwbGFjZSgvfShcXHMqKUAvZywgJ31AJyk7IHJ1bGVzID0gcnVsZXMucmVwbGFjZSgvfShcXHMqKX0vZywgJ319Jyk7IGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoIC0gMjsgaSsrKSB7IGNoYXIgPSBydWxlc1tpXTsgbmV4dENoYXIgPSBydWxlc1tpICsgMV07IGlmIChjaGFyID09PSAnQCcpIGlzQXQgPSB0cnVlOyBpZiAoIWlzQXQgJiYgY2hhciA9PT0gJ3snKSBpc0luID0gdHJ1ZTsgaWYgKGlzSW4gJiYgY2hhciA9PT0gJ30nKSBpc0luID0gZmFsc2U7IGlmICghaXNJbiAmJiBuZXh0Q2hhciAhPT0gJ0AnICYmIG5leHRDaGFyICE9PSAnfScgJiYgKGNoYXIgPT09ICd9JyB8fCBjaGFyID09PSAnLCcgfHwgKChjaGFyID09PSAneycgfHwgY2hhciA9PT0gJzsnKSAmJiBpc0F0KSkpIHsgcnVsZXMgPSBydWxlcy5zbGljZSgwLCBpICsgMSkgKyBjbGFzc05hbWUgKyBydWxlcy5zbGljZShpICsgMSk7IGkgKz0gY2xhc3NMZW47IGlzQXQgPSBmYWxzZTsgfSB9OyBpZiAocnVsZXMuaW5kZXhPZihjbGFzc05hbWUpICE9PSAwICYmIHJ1bGVzLmluZGV4T2YoJ0AnKSAhPT0gMCkgcnVsZXMgPSBjbGFzc05hbWUgKyBydWxlczsgcmV0dXJuIHJ1bGVzOyB9IGNhdGNoIHsgfVxuICAgIH0sXG4gICAgW3ZhbHVlLmtleSwgY29kZS5zdHlsZV1cbiAgKTtcblxuICBjb25zdCB0YWJzID0gdXNlTWVtbygoKSA9PiB7XG5cbiAgICBjb25zdCB0YWJzID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhjb2RlKVxuICAgICAgLmZpbHRlcigoa2V5KSA9PiBrZXkgIT09ICdsaW5rcycpXG4gICAgICAubWFwKChrZXkpID0+IHtcblxuICAgICAgICBjb25zdCB0YWI6IGFueSA9IHtcbiAgICAgICAgICBrZXksXG4gICAgICAgICAgdGl0bGU6IFV0aWxzLnRvQ2FwaXRhbENhc2Uoa2V5KSxcbiAgICAgICAgICBkaXNhYmxlZDogIWNvZGVba2V5XVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdwcmV2aWV3Jykge1xuXG4gICAgICAgICAgdGFiLmNvbnRlbnQgPSAoKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByZXZpZXctd3JhcHBlciBleC0ke3ZhbHVlLmtleX1gfT5cbiAgICAgICAgICAgICAge2NvZGVba2V5XSgpfVxuICAgICAgICAgICAgICB7c3R5bGUgJiYgPHN0eWxlPntzdHlsZX08L3N0eWxlPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgIGNvbnN0IGxhbmd1YWdlID0gRXhhbXBsZUxhbmd1YWdlW2tleSBhcyBrZXlvZiB0eXBlb2YgRXhhbXBsZUxhbmd1YWdlXTtcblxuICAgICAgICAgIHRhYi5jb250ZW50ID0gKCkgPT4gPENvZGUgbGFuZ3VhZ2U9e2xhbmd1YWdlfT57Y29kZVtrZXldfTwvQ29kZT5cbiAgICAgICAgfVxuXG4gICAgICAgIHRhYnMucHVzaCh0YWIpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGFicztcbiAgfSwgW2NvZGVdKTtcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnZXhhbXBsZSdcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIDxQbHVzVGFicyB2YWx1ZT1cInByZXZpZXdcIj5cbiAgICAgICAgPFBsdXNHcmlkIGNsYXNzTmFtZT1cInRvb2xiYXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeT1cImJldHdlZW5cIiBndXR0ZXJYPVwic21cIj5cbiAgICAgICAgICA8UGx1c0dyaWRJdGVtIHhzPVwiZ3Jvd1wiPlxuICAgICAgICAgICAgPFBsdXNUYWJzQmFyPlxuICAgICAgICAgICAgICB7dGFicy5tYXAoKGl0ZW06IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgIDxQbHVzVGFic1RhYiBrZXk9e2l0ZW0ua2V5fSBkaXNhYmxlZD17aXRlbS5kaXNhYmxlZH0gdmFsdWU9e2l0ZW0ua2V5fT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvUGx1c1RhYnNUYWI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9QbHVzVGFic0Jhcj5cbiAgICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgICB7bGlua3MubWFwKChsaW5rOiBhbnkpID0+IChcbiAgICAgICAgICAgIDxQbHVzR3JpZEl0ZW0ga2V5PXtsaW5rLmtleX0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgdG89e2xpbmsudmFsdWV9XG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17bGluay50aXRsZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJnaXRodWJcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9QbHVzR3JpZD5cbiAgICAgICAgPFBsdXNUYWJzUGFuZWxzIGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICB7dGFicy5tYXAoKGl0ZW06IGFueSkgPT4gKFxuICAgICAgICAgICAgPFBsdXNUYWJzUGFuZWwga2V5PXtpdGVtLmtleX0gdmFsdWU9e2l0ZW0ua2V5fT5cbiAgICAgICAgICAgICAge2l0ZW0uY29udGVudCAmJiA8aXRlbS5jb250ZW50IC8+fVxuICAgICAgICAgICAgPC9QbHVzVGFic1BhbmVsPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1BsdXNUYWJzUGFuZWxzPlxuICAgICAgPC9QbHVzVGFicz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJleHBvcnQgaW50ZXJmYWNlIEV4YW1wbGVQcm9wcyB7XG4gICAgdmFsdWU6IGFueVxufVxuXG5leHBvcnQgZW51bSBFeGFtcGxlTGFuZ3VhZ2Uge1xuICAgIHN0eWxlID0gJ2NzcycsXG4gICAgdGVtcGxhdGUgPSAnaHRtbCcsXG4gICAgc2NyaXB0ID0gJ2pzJ1xufSIsImV4cG9ydCAqIGZyb20gJy4vZXhhbXBsZSc7XG5leHBvcnQgKiBmcm9tICcuL2V4YW1wbGUudHlwZXMnOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFBsdXNHcmlkLCBQbHVzR3JpZEl0ZW0sIFRleHQsIFNvY2lhbHMsIExpbmsgfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJ0BhcHAvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBDb25zdGFudHMuUExBVEZPUk1fQUJCUkVWSUFUSU9OLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnVGVhbScsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0pvYnMnLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0NvbW11bml0eScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdHaXRodWInLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdTdGFjayBPdmVyZmxvdycsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0Jsb2cnLFxuICAgICAgICAgIHBhdGg6ICcjJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1Jlc291cmNlcycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdTdXBwb3J0JyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnUmVzb3VyY2VzJyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnTmV3c2xldHRlcicsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQ29udGFjdCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdDb21tb24gUXVlc3Rpb25zJyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnUmVwb3J0IGEgYnVnJyxcbiAgICAgICAgICBwYXRoOiAnIydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnUmVxdWVzdCBhIGNvbXBvbmVudCcsXG4gICAgICAgICAgcGF0aDogJyMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnZm9vdGVyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgPEJveCBoaWRkZW4gbWI9ezE2fSBtdD17NH0+XG4gICAgICAgIDxQbHVzR3JpZCBhbGlnbkl0ZW1zPVwic3RhcnRcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoZ3JvdXApID0+IChcbiAgICAgICAgICAgIDxQbHVzR3JpZEl0ZW0ga2V5PXtncm91cC50aXRsZX0geHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiM1wiIGxnPVwiMlwiPlxuICAgICAgICAgICAgICA8VGV4dCB3ZWlnaHQ9XCJzZW1pLWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7Z3JvdXAudGl0bGV9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtncm91cC5pdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17aXRlbVsncGF0aCddfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1BsdXNHcmlkPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IG1iPXsxMn0gbXQ9ezEyfT5cbiAgICAgICAgPFNvY2lhbHMgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPFRleHQgYWxpZ249XCJjZW50ZXJcIiBzaXplPVwibGFiZWxcIj5cbiAgICAgICAgJmNvcHk7IDIwMjAge0NvbnN0YW50cy5QTEFURk9STV9OQU1FfS4gUmVsZWFzZWQgdW5kZXIgTUlUIExpY2Vuc2UuXG4gICAgICA8L1RleHQ+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9mb290ZXInO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdC1saXRlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBTZWxlY3QsIHsgY29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCB7IEJveCwgUGx1c0dyaWQsIFBsdXNHcmlkSXRlbSwgVGV4dCB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBmcmFtZXdvcmtzIH0gZnJvbSAnQGFwcC9kYXRhJztcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnQGFwcC9ob29rcyc7XG5cbmNvbnN0IE9wdGlvbiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgT3B0aW9uIH0gPSBjb21wb25lbnRzO1xuXG4gIHJldHVybiAoXG4gICAgPE9wdGlvbiB7Li4ucHJvcHN9PlxuICAgICAgPFNpbmdsZVZhbHVlIHsuLi5wcm9wc30gLz5cbiAgICA8L09wdGlvbj5cbiAgKVxufVxuXG5jb25zdCBTaW5nbGVWYWx1ZSA9IChwcm9wcykgPT4gKFxuICA8UGx1c0dyaWQgYWxpZ25JdGVtcz1cImNlbnRlclwiIGd1dHRlclg9XCJzbVwiPlxuICAgIDxQbHVzR3JpZEl0ZW0+XG4gICAgICA8aW1nXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMS41cmVtJywgaGVpZ2h0OiAnMS41cmVtJywgb2JqZWN0Rml0OiAnY29udGFpbicsIGRpc3BsYXk6ICdibG9jaycgfX1cbiAgICAgICAgc3JjPXtgL2Fzc2V0cy9sb2dvLyR7cHJvcHMuZGF0YS5sb2dvfWB9XG4gICAgICAgIGFsdD17YCR7cHJvcHMuZGF0YS5sYWJlbH0gbG9nb2B9XG4gICAgICAvPlxuICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgIDxQbHVzR3JpZEl0ZW0+XG4gICAgICA8VGV4dD5cbiAgICAgICAge3Byb3BzLmRhdGEubGFiZWx9XG4gICAgICA8L1RleHQ+XG4gICAgPC9QbHVzR3JpZEl0ZW0+XG4gIDwvUGx1c0dyaWQ+XG4pXG5cbmV4cG9ydCBjb25zdCBGcmFtZXdvcmtTZWxlY3RvcjogUmVhY3QuRkM8YW55PiA9IG9ic2VydmVyKCgpID0+IHtcblxuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKCk7XG5cbiAgLy8gVE9ET1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBpdGVtcyA9IGZyYW1ld29ya3NcbiAgICAuZmlsdGVyKChmcmFtZXdvcmspID0+ICFmcmFtZXdvcmsuZGlzYWJsZWQpXG4gICAgLm1hcCgoZnJhbWV3b3JrKSA9PiAoe1xuICAgICAgdmFsdWU6IGZyYW1ld29yay5rZXksXG4gICAgICBsYWJlbDogZnJhbWV3b3JrLnRpdGxlLFxuICAgICAgbG9nbzogZnJhbWV3b3JrLmxvZ28sXG4gICAgfSkpO1xuXG4gIGNvbnN0IGNoYW5nZSA9IChmcmFtZXdvcms6IGFueSkgPT4ge1xuXG4gICAgc3RvcmUudWkuc2V0RnJhbWV3b3JrKGZyYW1ld29yay52YWx1ZSk7XG5cbiAgICAvLyBUT0RPXG4gICAgcm91dGVyLnJlcGxhY2Uocm91dGVyLmFzUGF0aCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IG1iPXszfT5cbiAgICAgICAgPFRleHQgY29sb3I9XCJtYWluLWxpZ2h0ZW4tMVwiIHNpemU9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgU0VMRUNUIFlPVVIgRlJBTUVXT1JLXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBvcHRpb25zPXtpdGVtc31cbiAgICAgICAgdmFsdWU9e2l0ZW1zLmZpbmQoKGZyYW1ld29yaykgPT4gZnJhbWV3b3JrLnZhbHVlID09PSBzdG9yZS51aS5mcmFtZXdvcmspfVxuICAgICAgICBjb21wb25lbnRzPXt7IE9wdGlvbiwgU2luZ2xlVmFsdWUgfX1cbiAgICAgICAgb25DaGFuZ2U9e2NoYW5nZX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59KTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZnJhbWV3b3JrLXNlbGVjdG9yJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBJY29uLFxuICBMaW5rLFxuICBQbHVzRHJhd2VyVG9nZ2xlcixcbiAgUGx1c0dyaWQsXG4gIFBsdXNHcmlkSXRlbSxcbn0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgSGVhZGVyUHJvcHMgfSBmcm9tICcuL2hlYWRlci50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBIZWFkZXI6IFJlYWN0LkZDPEhlYWRlclByb3BzPiA9ICh7IG1lbnUgfSkgPT4ge1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdoZWFkZXInXG4gICk7XG5cbiAgY29uc3QgbGlua3MgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdBYm91dCcsXG4gICAgICByb3V0ZToge1xuICAgICAgICB0bzogJ1JPVVRFOkZSQU1FV09SSzpPVkVSVklFVycsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdDb21wb25lbnRzJyxcbiAgICAgIHJvdXRlOiB7XG4gICAgICAgIHRvOiAnUk9VVEU6Q09NUE9ORU5UOkRFVEFJTFMnLFxuICAgICAgICBwYXJhbXM6IHsga2V5OiAnYXNwZWN0LXJhdGlvJyB9XG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdKb2luIG91ciB0ZWFtIScsXG4gICAgICByb3V0ZToge1xuICAgICAgICB0bzogJ1JPVVRFOkNPTVBPTkVOVDpERVRBSUxTJyxcbiAgICAgICAgcGFyYW1zOiB7IGtleTogJ3N3aXRjaCcgfVxuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgPFBsdXNHcmlkIGFsaWduSXRlbXM9XCJjZW50ZXJcIiB3cmFwPVwib2ZmXCI+XG4gICAgICAgIHttZW51ICYmIChcbiAgICAgICAgICA8UGx1c0dyaWRJdGVtIHhzPVwiYXV0b1wiIGhpZGVMZ1VwPlxuICAgICAgICAgICAgPFBsdXNEcmF3ZXJUb2dnbGVyIGNvbm5lY3Rvcj1cIm1haW5cIj5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cIm1lbnVcIiAvPlxuICAgICAgICAgICAgPC9QbHVzRHJhd2VyVG9nZ2xlcj5cbiAgICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgKX1cbiAgICAgICAgPFBsdXNHcmlkSXRlbT5cbiAgICAgICAgICA8TGluayB0bz1cIlJPVVRFOkhPTUVcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9sb2dvL2xvZ28uc3ZnXCIgd2lkdGg9XCIxMzVweFwiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgPFBsdXNHcmlkSXRlbSB4cz1cImdyb3dcIiAvPlxuICAgICAgICB7bGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgPFBsdXNHcmlkSXRlbSBrZXk9e2xpbmsudGl0bGV9IGhpZGVTbURvd24+XG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHRleHQ+XG4gICAgICAgICAgICAgIDxMaW5rIHsuLi5saW5rLnJvdXRlfT5cbiAgICAgICAgICAgICAgICB7bGluay50aXRsZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9QbHVzR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2hlYWRlcic7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5pbXBvcnQgeyBJY29uUHJvcHMgfSBmcm9tICcuL2ljb24udHlwZXMnO1xuXG5leHBvcnQgY29uc3QgSWNvbjogUmVhY3QuRkM8SWNvblByb3BzPiA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY29sb3IsIG5hbWUsIHNpemUgPSAnc20nIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnaWNvbicsXG4gICAge1xuICAgICAgW25hbWVdOiAhIW5hbWUsXG4gICAgICBjb2xvcixcbiAgICAgIHNpemVcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIDxpIGNsYXNzTmFtZT17Y2xhc3Nlc30gLz47XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9pY29uJztcbmV4cG9ydCAqIGZyb20gJy4vaWNvbi50eXBlcyc7IiwiZXhwb3J0ICogZnJvbSAnQGh0bWxwbHVzL3JlYWN0JztcblxuZXhwb3J0ICogZnJvbSAnLi9hbGVydCc7XG5leHBvcnQgKiBmcm9tICcuL2Jhbm5lcic7XG5leHBvcnQgKiBmcm9tICcuL2JveCc7XG5leHBvcnQgKiBmcm9tICcuL2J1dHRvbic7XG5leHBvcnQgKiBmcm9tICcuL2NvZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9leGFtcGxlJztcbmV4cG9ydCAqIGZyb20gJy4vZm9vdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZnJhbWV3b3JrLXNlbGVjdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vaGVhZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaWNvbic7XG5leHBvcnQgKiBmcm9tICcuL2lucHV0JztcbmV4cG9ydCAqIGZyb20gJy4vbGluayc7XG5leHBvcnQgKiBmcm9tICcuL21hcmt1cCc7XG5leHBvcnQgKiBmcm9tICcuL3BhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJhbWV0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3NpZGViYXInO1xuZXhwb3J0ICogZnJvbSAnLi9zb2NpYWxzJztcbmV4cG9ydCAqIGZyb20gJy4vdGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3RvYyc7XG4iLCJleHBvcnQgKiBmcm9tICcuL2lucHV0JztcbmV4cG9ydCAqIGZyb20gJy4vaW5wdXQudHlwZXMnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgSW5wdXRQcm9wcyB9IGZyb20gJ0BhcHAvY29tcG9uZW50cy9pbnB1dC9pbnB1dC50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBJbnB1dDogUmVhY3QuRkM8SW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IHBsYWNlaG9sZGVyLCB0eXBlID0gJ3RleHQnIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnaW5wdXQnLFxuICApO1xuXG4gIHJldHVybiA8aW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzfSB0eXBlPXt0eXBlfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vbGluayc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnQGFwcC9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBMaW5rUHJvcHMgfSBmcm9tICcuL2xpbmsudHlwZXMnO1xuXG5jb25zdCBBbmNob3I6IFJlYWN0LkZDPGFueT4gPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgLi4uYXJncyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8YSByZWY9e3JlZn0gey4uLmFyZ3N9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKVxufSk7XG5cbmV4cG9ydCBjb25zdCBMaW5rOiBSZWFjdC5GQzxMaW5rUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgcGFyYW1zLCB0bywgLi4uYXR0cmlidXRlcyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGF0aCA9IHVzZU1lbW8oKCkgPT4gcm91dGVyLnBhdGgodG8sIHBhcmFtcyksIFt0bywgcGFyYW1zXSk7XG5cbiAgaWYgKGF0dHJpYnV0ZXMudGFyZ2V0ID09PSAnX2JsYW5rJyAmJiAhYXR0cmlidXRlcy5yZWwpIHtcblxuICAgIGF0dHJpYnV0ZXMucmVsID0gJ25vb3BlbmVyIG5vcmVmZXJyZXInO1xuICB9XG5cbiAgaWYgKCFwYXRoKSByZXR1cm4gPEFuY2hvciBocmVmPXt0b30gey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L0FuY2hvcj47XG5cbiAgcmV0dXJuIChcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0gcGFzc0hyZWY+XG4gICAgICA8QW5jaG9yIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9BbmNob3I+XG4gICAgPC9OZXh0TGluaz5cbiAgKTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL21hcmt1cCc7XG5leHBvcnQgKiBmcm9tICcuL21hcmt1cC50eXBlcyc7IiwiaW1wb3J0IHsgQWxlcnQsIENvZGUsIExpbmssIFRleHQsIFRvY0l0ZW0gfSBmcm9tICdAYXBwL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJ0BhcHAvY29uc3RhbnRzJztcbmltcG9ydCB7IHJvdXRlciB9IGZyb20gJ0BhcHAvc2VydmljZXMnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXJzID0ge1xuICAgIGJsb2NrcXVvdGU6IChwcm9wcykgPT4ge1xuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHMubm9kZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgY29uc3QgdG9rZW4gPSAoKHZhbHVlLm1hdGNoKC9cXFtcXHcrXFxdLykgfHwgW10pWzBdIHx8ICcnKTtcblxuICAgICAgICBjb25zdCB0eXBlID0gdG9rZW4ucmVwbGFjZSgvXFxbfFxcXS9nLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIDxBbGVydCB0eXBlPXt0eXBlfT57dmFsdWUucmVwbGFjZSh0b2tlbiwgJycpfTwvQWxlcnQ+O1xuICAgIH0sXG4gICAgY29kZTogKHByb3BzKSA9PiA8Q29kZSBsYW5ndWFnZT17cHJvcHMubGFuZ3VhZ2V9Pntwcm9wcy52YWx1ZX08L0NvZGU+LFxuICAgIGhlYWRpbmc6IChwcm9wcykgPT4ge1xuXG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4sIGxldmVsIH0gPSBwcm9wcztcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gbGV2ZWwgPT09IDEgPyBjaGlsZHJlbiA6IDxUb2NJdGVtPntjaGlsZHJlbn08L1RvY0l0ZW0+O1xuXG4gICAgICAgIHJldHVybiA8VGV4dCBzaXplPXtsZXZlbC50b1N0cmluZygpfT57Y29udGVudH08L1RleHQ+O1xuICAgIH0sXG4gICAgbGluazogKHByb3BzKSA9PiA8TGluayB0bz17cHJvcHMuaHJlZn0+e3Byb3BzLmNoaWxkcmVufTwvTGluaz4sXG4gICAgcGFyYWdyYXBoOiAocHJvcHMpID0+IDxUZXh0IHNpemU9XCJwYXJhZ3JhcGhcIj57cHJvcHMuY2hpbGRyZW59PC9UZXh0Pixcbn07XG5cbmV4cG9ydCBjb25zdCB0b2tlbml6ZXIgPSAoaW5wdXQpID0+IHtcblxuICAgIGNvbnN0IHRva2VucyA9IGlucHV0Lm1hdGNoKC9cXHsoLio/KVxcfS9nKSB8fCBbXTtcblxuICAgIHRva2Vucy5tYXAoKHRva2VuKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmF3ID0gdG9rZW4ucmVwbGFjZSgvXFx7fFxcfS9nLCAnJyk7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSByYXcuc3BsaXQoJy4nKTtcblxuICAgICAgICBjb25zdCB0eXBlID0gc2VjdGlvbnNbMF07XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBzZWN0aW9uc1sxXTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSAnQ29uc3RhbnRzJzpcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UodG9rZW4sIENvbnN0YW50c1t2YWx1ZV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdSb3V0ZXInOlxuICAgICAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSh0b2tlbiwgcm91dGVyLnBhdGgodmFsdWUpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGlucHV0O1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XG5pbXBvcnQgeyByZW5kZXJlcnMsIHRva2VuaXplciB9IGZyb20gJy4vbWFya3VwLnJlbmRlcmVycyc7XG5pbXBvcnQgeyBNYXJrdXBQcm9wcyB9IGZyb20gJy4vbWFya3VwLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IE1hcmt1cDogUmVhY3QuRkM8TWFya3VwUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgaWdub3JlUGFyYWdyYXBoIH0gPSBwcm9wcztcblxuICBpZiAoaWdub3JlUGFyYWdyYXBoKSByZW5kZXJlcnMucGFyYWdyYXBoID0gKHByb3BzKSA9PiBwcm9wcy5jaGlsZHJlblxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0TWFya2Rvd24gcmVuZGVyZXJzPXtyZW5kZXJlcnN9PlxuICAgICAge3Rva2VuaXplcihjaGlsZHJlbi50b1N0cmluZygpKX1cbiAgICA8L1JlYWN0TWFya2Rvd24+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdlJztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ0BhcHAvaG9va3MnO1xuaW1wb3J0IHsgUGFnZVByb3BzIH0gZnJvbSAnLi9wYWdlLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFBhZ2U6IFJlYWN0LkZDPFBhZ2VQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGNoaWxkcmVuLCBsYXlvdXQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgc3RvcmUudWkuc2V0TGF5b3V0KGxheW91dCk7XG4gICAgfSxcbiAgICBbbGF5b3V0XVxuICApO1xuXG4gIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXJhbWV0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vcGFyYW1ldGVycy50eXBlcyc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvZGUsIE1hcmt1cCwgVGV4dCwgUGx1c0dyaWQsIFBsdXNHcmlkSXRlbSB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IFBhcmFtZXRlcnNQcm9wcyB9IGZyb20gJy4vcGFyYW1ldGVycy50eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBQYXJhbWV0ZXJzOiBSZWFjdC5GQzxQYXJhbWV0ZXJzUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBpdGVtcyA9IFtdIH0gPSBwcm9wcztcblxuICBjb25zdCBoYXNEZWZhdWx0ID0gISFpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHR5cGVvZiBpdGVtLmRlZmF1bHQgIT09ICd1bmRlZmluZWQnKS5sZW5ndGg7XG5cbiAgY29uc3QgaGFzVHlwZSA9ICEhaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB0eXBlb2YgaXRlbS50eXBlICE9PSAndW5kZWZpbmVkJykubGVuZ3RoO1xuXG4gIGNvbnN0IGhhc1ZhbHVlID0gISFpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHR5cGVvZiBpdGVtLnZhbHVlICE9PSAndW5kZWZpbmVkJykubGVuZ3RoO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdwYXJhbWV0ZXJzJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8UGx1c0dyaWQgY2xhc3NOYW1lPVwiaXRlbVwiIGtleT17aXRlbS5uYW1lfSBndXR0ZXJYPVwibWRcIj5cbiAgICAgICAgICA8UGx1c0dyaWRJdGVtIHhzPVwiZ3Jvd1wiPlxuICAgICAgICAgICAgPFRleHQgc2l6ZT1cImJvZHlcIj5OYW1lPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgc2l6ZT1cImJvZHlcIiBjb2xvcj1cImVycm9yXCI+e2l0ZW0ubmFtZX08L1RleHQ+XG4gICAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgICAgPFBsdXNHcmlkSXRlbSB4cz1cIjEyXCIgc209XCI2XCIgbGc9XCJncm93XCI+XG4gICAgICAgICAgICB7aGFzVHlwZSAmJiA8VGV4dCBzaXplPVwiYm9keVwiPlR5cGU8L1RleHQ+fVxuICAgICAgICAgICAge2hhc1R5cGUgJiYgKFxuICAgICAgICAgICAgICA8VGV4dCBzaXplPVwiYm9keVwiIHRydW5jYXRlPlxuICAgICAgICAgICAgICAgIHsvKiBUT0RPOiBzZWUgYWxsIHR5cGVzICovfVxuICAgICAgICAgICAgICAgIHtpdGVtLnR5cGV9XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICAgICAgPFBsdXNHcmlkSXRlbSBjbGFzc05hbWU9XCJkZWZhdWx0XCIgeHM9XCIxMlwiIGxnPVwiYXV0b1wiPlxuICAgICAgICAgICAge2hhc0RlZmF1bHQgJiYgPFRleHQgc2l6ZT1cImJvZHlcIj5EZWZhdWx0PC9UZXh0Pn1cbiAgICAgICAgICAgIHtoYXNEZWZhdWx0ICYmIDxUZXh0IHNpemU9XCJib2R5XCI+e2l0ZW0uZGVmYXVsdCB8fCAndW5kZWZpbmVkJ308L1RleHQ+fVxuICAgICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICAgIDxQbHVzR3JpZEl0ZW0geHM9XCIxMlwiPlxuICAgICAgICAgICAgPFRleHQgc2l6ZT1cImJvZHlcIj5EZXNjcmlwdGlvbjwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IHNpemU9XCJib2R5XCI+XG4gICAgICAgICAgICAgIDxNYXJrdXAgaWdub3JlUGFyYWdyYXBoPntpdGVtLmRlc2NyaXB0aW9ufTwvTWFya3VwPlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgICAgICAgIHtoYXNWYWx1ZSAmJiAoXG4gICAgICAgICAgICA8UGx1c0dyaWRJdGVtIHhzPVwiMTJcIj5cbiAgICAgICAgICAgICAgPFRleHQgc2l6ZT1cImJvZHlcIj5WYWx1ZTwvVGV4dD5cbiAgICAgICAgICAgICAgPENvZGUgbGFuZ3VhZ2U9XCJqc1wiIGNvcHk9e2ZhbHNlfT57aXRlbS52YWx1ZX08L0NvZGU+XG4gICAgICAgICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BsdXNHcmlkPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdGlvbi50eXBlcyc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgU2VjdGlvblByb3BzIH0gZnJvbSAnLi9zZWN0aW9uLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb246IFJlYWN0LkZDPFNlY3Rpb25Qcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7IGNoaWxkcmVuLCBzaXplIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAnc2VjdGlvbicsXG4gICAgeyBzaXplIH1cbiAgKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zaWRlYmFyJztcbmV4cG9ydCAqIGZyb20gJy4vc2lkZWJhci50eXBlcyc7IiwiLy8gVE9ET1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgVGV4dCB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICdAYXBwL2hvb2tzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgU2lkZWJhckl0ZW0sIFNpZGViYXJQcm9wcyB9IGZyb20gJy4vc2lkZWJhci50eXBlcyc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vaWNvbic7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyOiBSZWFjdC5GQzxTaWRlYmFyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBpdGVtcyA9IFtdIH0gPSBwcm9wcztcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYWN0aXZlcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4ge1xuXG4gICAgICBjb25zdCBydW4gPSAoaW5wdXQsIC4uLnBhcmVudCkgPT4ge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuXG4gICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgICAgICAgaW5wdXQubWFwKChpdGVtKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gcnVuKGl0ZW0sIC4uLnBhcmVudCk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHJlc3VsdCA9IGl0ZW1zO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbnB1dC5pdGVtcykge1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bihpbnB1dC5pdGVtcywgaW5wdXQsIC4uLnBhcmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICBjb25zdCByb3V0ZSA9IGlucHV0LnJvdXRlO1xuXG4gICAgICAgICAgaWYgKCFyb3V0ZSkgcmV0dXJuIFtdO1xuXG4gICAgICAgICAgaWYgKHJvdXRlci5pc0FjdGl2ZShyb3V0ZS50bywgcm91dGUucGFyYW1zKSkgcmV0dXJuIFtpbnB1dCwgLi4ucGFyZW50XTtcblxuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHQgPSBydW4oaXRlbXMsIG51bGwpLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XG5cbiAgICAgIHNldEN1cnJlbnQocmVzdWx0KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIFtpdGVtcywgcm91dGVyLmFzUGF0aF1cbiAgKTtcblxuICBjb25zdCBpc0FjdGl2ZSA9IChpdGVtKSA9PiBhY3RpdmVzLnNvbWUoKGFjdGl2ZSkgPT4gaXRlbSA9PT0gYWN0aXZlKTtcblxuICBjb25zdCBpc0V4cGFuZCA9IChwYXJlbnQpID0+IHtcblxuICAgIGlmICghcGFyZW50KSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBjdXJyZW50LnNvbWUoKGl0ZW0pID0+IGl0ZW0gPT09IHBhcmVudCk7XG4gIH1cblxuICBjb25zdCB0b2dnbGUgPSAoaXRlbSwgLi4ucGFyZW50cykgPT4ge1xuXG4gICAgY29uc3QgaW5kZXhPZiA9IGN1cnJlbnQuZmluZEluZGV4KCh4KSA9PiB4ID09PSBpdGVtKTtcblxuICAgIGlmIChpbmRleE9mICE9PSAtMSkge1xuXG4gICAgICBzZXRDdXJyZW50KFsuLi5jdXJyZW50LnNsaWNlKGluZGV4T2YgKyAxKV0pO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgc2V0Q3VycmVudChbaXRlbSwgLi4ucGFyZW50c10pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1lbnUgPSAoaXRlbXM6IEFycmF5PFNpZGViYXJJdGVtPiwgbGV2ZWwgPSAwLCAuLi5wYXJlbnRzKSA9PiB7XG5cbiAgICBjb25zdCBpc0NvbGxhcHNlZCA9ICFpc0V4cGFuZChwYXJlbnRzWzBdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dWxcbiAgICAgICAgY2xhc3NOYW1lPXtVdGlscy5jbGFzc2VzKHtcbiAgICAgICAgICBbJ21lbnUnXTogdHJ1ZSxcbiAgICAgICAgICBbYGxldmVsLSR7bGV2ZWx9YF06IHRydWUsXG4gICAgICAgICAgWydjb2xsYXBzZWQnXTogZmFsc2UgLy8gVE9ETyBpc0NvbGxhcHNlZFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxsaVxuICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtVdGlscy5jbGFzc2VzKHtcbiAgICAgICAgICAgICAgJ2l0ZW0nOiB0cnVlLFxuICAgICAgICAgICAgICAnYWN0aXZlJzogaXNBY3RpdmUoaXRlbSlcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0IHNpemU9XCJib2R5XCI+XG4gICAgICAgICAgICAgIHtpdGVtLnJvdXRlICYmIChcbiAgICAgICAgICAgICAgICA8TGluayB7Li4uaXRlbS5yb3V0ZX0+e2l0ZW0udGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7IWl0ZW0ucm91dGUgJiYgKFxuICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDQwMCB9fSBvbkNsaWNrPXsoKSA9PiB0b2dnbGUoaXRlbSwgLi4ucGFyZW50cyl9PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmljb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtpdGVtLmljb24gYXMgYW55fSBzaXplPVwic21cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgey8qIFRPRE8gKi99XG4gICAgICAgICAgICAgICAgICB7LyogPEljb24gbmFtZT17aXNFeHBhbmQoaXRlbSkgPyAnYW5pbWF0aW9ucycgOiAnYXNwZWN0LXJhdGlvJ30gLz4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7ISFpdGVtLml0ZW1zPy5sZW5ndGggJiYgbWVudShpdGVtLml0ZW1zLCBsZXZlbCArIDEsIGl0ZW0sIC4uLnBhcmVudHMpfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICdzaWRlYmFyJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAge21lbnUoaXRlbXMpfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc29jaWFscyc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvbiwgTGluaywgUGx1c0dyaWQsIFBsdXNHcmlkSXRlbSB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnQGFwcC9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgU29jaWFscyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGx1c0dyaWQgYWxpZ25JdGVtcz1cImNlbnRlclwiIGd1dHRlcj1cIm1kXCIganVzdGlmeT1cImNlbnRlclwiIHdyYXA9XCJvZmZcIj5cbiAgICAgIDxQbHVzR3JpZEl0ZW0+XG4gICAgICAgIDxMaW5rIHRvPXtDb25zdGFudHMuU09DSUFMX1RXSVRURVJ9PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJ0d2l0dGVyXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICA8UGx1c0dyaWRJdGVtPlxuICAgICAgICA8TGluayB0bz17Q29uc3RhbnRzLlNPQ0lBTF9MSU5LRURJTn0+XG4gICAgICAgICAgPEljb24gbmFtZT1cImxpbmtlZGluXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9QbHVzR3JpZEl0ZW0+XG4gICAgICA8UGx1c0dyaWRJdGVtPlxuICAgICAgICA8TGluayB0bz17Q29uc3RhbnRzLlNPQ0lBTF9JTlNUQUdSQU19PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJpbnN0YWdyYW1cIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L1BsdXNHcmlkSXRlbT5cbiAgICAgIDxQbHVzR3JpZEl0ZW0+XG4gICAgICAgIDxMaW5rIHRvPXtDb25zdGFudHMuU09DSUFMX0dJVEhVQn0+XG4gICAgICAgICAgPEljb24gbmFtZT1cImdpdGh1YlwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvUGx1c0dyaWRJdGVtPlxuICAgIDwvUGx1c0dyaWQ+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vdGV4dC50eXBlcyc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuaW1wb3J0IHsgVGV4dFByb3BzIH0gZnJvbSAnLi90ZXh0LnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFRleHQ6IFJlYWN0LkZDPFRleHRQcm9wcz4gPSAocHJvcHMpID0+IHtcblxuICBjb25zdCB7XG4gICAgYWxpZ24gPSAnc3RhcnQnLFxuICAgIGNoaWxkcmVuLFxuICAgIGNvbG9yLFxuICAgIGRlbnNlLFxuICAgIGlubGluZSxcbiAgICBzaXplID0gJ2JvZHknLFxuICAgIHRydW5jYXRlLFxuICAgIHdlaWdodCA9ICdub3JtYWwnXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gVXRpbHMuY2xhc3NlcyhcbiAgICAndGV4dCcsXG4gICAgeyBhbGlnbiwgY29sb3IsIGRlbnNlLCBpbmxpbmUsIHNpemUsIHRydW5jYXRlLCB3ZWlnaHQgfVxuICApO1xuXG4gIGxldCBUYWc7XG5cbiAgc3dpdGNoIChzaXplKSB7XG5cbiAgICBjYXNlICcxJzpcbiAgICBjYXNlICcyJzpcbiAgICBjYXNlICczJzpcbiAgICBjYXNlICc0JzpcbiAgICBjYXNlICc1JzpcbiAgICBjYXNlICc2JzpcbiAgICAgIFRhZyA9IGBoJHtzaXplfWAgYXMgYW55O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXJhZ3JhcGgnOlxuICAgICAgVGFnID0gJ3AnIGFzIGFueTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIFRhZyA9ICdkaXYnIGFzIGFueTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VGFnXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICB0aXRsZT17dHJ1bmNhdGUgPyBjaGlsZHJlbiA6IHVuZGVmaW5lZH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UYWc+XG4gICk7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi90b2MnO1xuZXhwb3J0ICogZnJvbSAnLi90b2MtaXRlbSc7IiwiZXhwb3J0ICogZnJvbSAnLi90b2MtaXRlbSc7XG5leHBvcnQgKiBmcm9tICcuL3RvYy1pdGVtLnR5cGVzJzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QtbGl0ZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnQGFwcC9ob29rcyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IFRvY0l0ZW1Qcm9wcyB9IGZyb20gJy4vdG9jLWl0ZW0udHlwZXMnO1xuXG5leHBvcnQgY29uc3QgVG9jSXRlbTogUmVhY3QuRkM8VG9jSXRlbVByb3BzPiA9IG9ic2VydmVyKChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGxldmVsIH0gPSBwcm9wcztcblxuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKCk7XG5cbiAgY29uc3QgZWxlbWVudCA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBrZXkgPSBVdGlscy50b0tlYmFiQ2FzZSgoY2hpbGRyZW5bMF0/LnByb3BzPy5jaGlsZHJlbiB8fCBjaGlsZHJlbiB8fCAnJykudG9TdHJpbmcoKSk7XG5cbiAgY29uc3Qgc2Nyb2xsVG8gPSAoKSA9PiB7XG5cbiAgICBpZiAoIWVsZW1lbnQuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgZWxlbWVudC5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgICAgaW5saW5lOiAnbmVhcmVzdCdcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcblxuICAgIGV2ZW50ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzY3JvbGxUbygpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGAjJHtrZXl9YCwgNTAwKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBsZXQgZGVwdGggPSBsZXZlbDtcblxuICAgIGlmICghZGVwdGgpIHtcblxuICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChlbGVtZW50LmN1cnJlbnQucGFyZW50RWxlbWVudC5sb2NhbE5hbWUucmVwbGFjZSgnaCcsICcnKSk7XG5cbiAgICAgIGlmICghaXNOYU4odmFsdWUpKSBkZXB0aCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHN0b3JlLnRvYy5hZGQoe1xuICAgICAga2V5LFxuICAgICAgbGV2ZWw6IGRlcHRoLFxuICAgICAgdmFsdWU6IGNoaWxkcmVuLFxuICAgICAgc2Nyb2xsVG86IG9uQ2xpY2tcbiAgICB9KTtcblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiBzdG9yZS50b2MudXBkYXRlKGtleSwgZW50cmllc1swXSkpO1xuXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LmN1cnJlbnQpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcblxuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXG4gICAgICBzdG9yZS50b2MucmVtb3ZlKGtleSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFV0aWxzLmNsYXNzZXMoXG4gICAgJ3RvYy1pdGVtJ1xuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiByZWY9e2VsZW1lbnR9PlxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICB0bz17YCMke2tleX1gfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdG9jJztcbmV4cG9ydCAqIGZyb20gJy4vdG9jLnR5cGVzJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0LWxpdGUnO1xuaW1wb3J0IHsgQm94LCBUZXh0IH0gZnJvbSAnQGFwcC9jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnQGFwcC9ob29rcyc7XG5pbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcbmltcG9ydCB7IFRvY1Byb3BzIH0gZnJvbSAnLi90b2MudHlwZXMnO1xuXG5leHBvcnQgY29uc3QgVG9jOiBSZWFjdC5GQzxUb2NQcm9wcz4gPSBvYnNlcnZlcigoKSA9PiB7XG5cbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpO1xuXG4gIGNvbnN0IGl0ZW1zID0gc3RvcmUudG9jLml0ZW1zO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBVdGlscy5jbGFzc2VzKFxuICAgICd0b2MnXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7ISFpdGVtcy5sZW5ndGggJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxCb3ggbWI9ezN9PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJtYWluLWxpZ2h0ZW4tMVwiIHNpemU9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgICAgIENPTlRFTlRTXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17VXRpbHMuY2xhc3Nlcyh7XG4gICAgICAgICAgICAgICAgICBbJ2FjdGl2ZSddOiBpdGVtLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgIFtgbGV2ZWwtJHtpdGVtLmxldmVsIHx8IDB9YF06IHRydWVcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpdGVtLnNjcm9sbFRvKCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIm1haW5cIiBzaXplPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnZhbHVlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufSk7XG4iLCJleHBvcnQgY29uc3QgUExBVEZPUk1fQUJCUkVWSUFUSU9OID0gJ0hUTUwrJztcbmV4cG9ydCBjb25zdCBQTEFURk9STV9LRVkgPSAnaHRtbHBsdXMnO1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX05BTUUgPSAnSFRNTFBMVVMnO1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX1RBR19QUkVGSVggPSAncGx1cyc7XG5leHBvcnQgY29uc3QgUExBVEZPUk1fRVZFTlRfUFJFRklYID0gJ1BsdXMnO1xuXG5leHBvcnQgY29uc3QgV0VCQ09NUE9ORU5UX1JFRkVSRU5DRSA9ICdodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9XZWJfQ29tcG9uZW50cy9Vc2luZ19jdXN0b21fZWxlbWVudHMnO1xuZXhwb3J0IGNvbnN0IFdFQkNPTVBPTkVOVF9DT01QQVRJQklMSVRZID0gJ2h0dHBzOi8vY3VzdG9tLWVsZW1lbnRzLWV2ZXJ5d2hlcmUuY29tJztcblxuZXhwb3J0IGNvbnN0IFBPUlRfQU5HVUxBUl9QQUNLQUdFX05BTUUgPSAnQGh0bWxwbHVzL2NvcmUnO1xuZXhwb3J0IGNvbnN0IFBPUlRfQU5HVUxBUl9QQUNLQUdFX0xPQURFUiA9ICdAaHRtbHBsdXMvY29yZS9sb2FkZXInO1xuXG5leHBvcnQgY29uc3QgUE9SVF9KQVZBU0NSSVBUX1BBQ0tBR0VfTkFNRSA9ICdAaHRtbHBsdXMvY29yZSc7XG5leHBvcnQgY29uc3QgUE9SVF9KQVZBU0NSSVBUX1BBQ0tBR0VfTE9BREVSID0gJ0BodG1scGx1cy9jb3JlL2xvYWRlcic7XG5leHBvcnQgY29uc3QgUE9SVF9KQVZBU0NSSVBUX1BBQ0tBR0VfQ0ROID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vQGh0bWxwbHVzL2NvcmUvZGlzdC9odG1scGx1cy5qcyc7XG5leHBvcnQgY29uc3QgUE9SVF9KQVZBU0NSSVBUX1BBQ0tBR0VfQ0ROX0xPQURFUiA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL0BodG1scGx1cy9jb3JlL2xvYWRlci9pbmRleC5lczIwMTcuanMnO1xuXG5leHBvcnQgY29uc3QgUE9SVF9SRUFDVF9QQUNLQUdFX05BTUUgPSAnQGh0bWxwbHVzL3JlYWN0JztcbmV4cG9ydCBjb25zdCBQT1JUX1JFQUNUX1BBQ0tBR0VfTE9BREVSID0gJ0BodG1scGx1cy9yZWFjdC9sb2FkZXInO1xuXG5leHBvcnQgY29uc3QgUE9SVF9WVUVfUEFDS0FHRV9OQU1FID0gJ0BodG1scGx1cy9jb3JlJztcbmV4cG9ydCBjb25zdCBQT1JUX1ZVRV9QQUNLQUdFX0xPQURFUiA9ICdAaHRtbHBsdXMvY29yZS9sb2FkZXInO1xuZXhwb3J0IGNvbnN0IFBPUlRfVlVFX0lHTk9SRURfRUxFTUVOVFMgPSAnaHR0cHM6Ly92dWVqcy5vcmcvdjIvYXBpLyNpZ25vcmVkRWxlbWVudHMnO1xuXG5leHBvcnQgY29uc3QgU09DSUFMX0ZBQ0VCT09LID0gJ1RPRE8nO1xuZXhwb3J0IGNvbnN0IFNPQ0lBTF9ZT1VUVUJFID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNzTmt4RG1MVTd2S19MMWpnU1ZXV0NBJztcbmV4cG9ydCBjb25zdCBTT0NJQUxfSU5TVEFHUkFNID0gJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaHRtbHBsdXMuaW8nO1xuZXhwb3J0IGNvbnN0IFNPQ0lBTF9UV0lUVEVSID0gJ2h0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL2h0bWxwbHVzaW8nO1xuZXhwb3J0IGNvbnN0IFNPQ0lBTF9MSU5LRURJTiA9ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9odG1scGx1cyc7XG5leHBvcnQgY29uc3QgU09DSUFMX0dJVEhVQiA9ICdodHRwczovL2dpdGh1Yi5jb20vaHRtbHBsdXMvY29yZSc7XG5leHBvcnQgY29uc3QgU09DSUFMX0dJVEhVQl9DT01QT05FTlRTID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9odG1scGx1cy9jb3JlL3RyZWUvbWFzdGVyL3BhY2thZ2VzL2NvcmUvc3JjL2NvbXBvbmVudHMnXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW5zdGFsbGF0aW9uLmFuZ3VsYXIubWRcIjogW1xuXHRcdFwiLi9zcmMvY29udGVudC9lbi9nZXR0aW5nLXN0YXJ0ZWQvaW5zdGFsbGF0aW9uLmFuZ3VsYXIubWRcIixcblx0XHQxXG5cdF0sXG5cdFwiLi9pbnN0YWxsYXRpb24uamF2YXNjcmlwdC5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24uamF2YXNjcmlwdC5tZFwiLFxuXHRcdDJcblx0XSxcblx0XCIuL2luc3RhbGxhdGlvbi5yZWFjdC5tZFwiOiBbXG5cdFx0XCIuL3NyYy9jb250ZW50L2VuL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24ucmVhY3QubWRcIixcblx0XHQzXG5cdF0sXG5cdFwiLi9pbnN0YWxsYXRpb24udnVlLm1kXCI6IFtcblx0XHRcIi4vc3JjL2NvbnRlbnQvZW4vZ2V0dGluZy1zdGFydGVkL2luc3RhbGxhdGlvbi52dWUubWRcIixcblx0XHQ0XG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9zcmMvY29udGVudC9lbi9nZXR0aW5nLXN0YXJ0ZWQgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC9pbnN0YWxsYXRpb25cXFxcLi4qXFxcXC5tZCRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJpbXBvcnQgam9zbiBmcm9tICdAaHRtbHBsdXMvY29yZS9kaXN0L2RvY3MuanNvbic7XG5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjb25zdCBjb21wb25lbnRzID0gam9zbi5maWx0ZXIoKGNvbXBvbmVudCkgPT4gIWNvbXBvbmVudC5kZXZlbG9wbWVudCk7XG4iLCJleHBvcnQgY29uc3QgZnJhbWV3b3JrcyA9IFtcbiAgICB7XG4gICAgICAgIGtleTogJ2phdmFzY3JpcHQnLFxuICAgICAgICBsb2dvOiAnamF2YXNjcmlwdC5wbmcnLFxuICAgICAgICB0aXRsZTogJ0phdmFTY3JpcHQnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ3JlYWN0JyxcbiAgICAgICAgbG9nbzogJ3JlYWN0LnBuZycsXG4gICAgICAgIHRpdGxlOiAnUmVhY3QnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ3Z1ZScsXG4gICAgICAgIGxvZ286ICd2dWUucG5nJyxcbiAgICAgICAgdGl0bGU6ICdWdWUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ2FuZ3VsYXInLFxuICAgICAgICBsb2dvOiAnYW5ndWxhci5zdmcnLFxuICAgICAgICB0aXRsZTogJ0FuZ3VsYXInLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAga2V5OiAnc3ZlbHRlJyxcbiAgICAgICAgbG9nbzogJ3N2ZWx0ZS5zdmcnLFxuICAgICAgICB0aXRsZTogJ1N2ZWx0ZScsXG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgICBrZXk6ICdlbWJlcicsXG4gICAgICAgIGxvZ286ICdlbWJlci5wbmcnLFxuICAgICAgICB0aXRsZTogJ0VtYmVyJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGtleTogJ3ByZWFjdCcsXG4gICAgICAgIGxvZ286ICdUT0RPJyxcbiAgICAgICAgdGl0bGU6ICdQcmVhY3QnLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICB9LFxuXTtcbiIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2ZyYW1ld29ya3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zaWRlYmFyJzsiLCJpbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICdAYXBwL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdJbnRyb2R1Y3Rpb24nLFxuICAgICAgICBpY29uOiAnaW50cm9kdWN0aW9uJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYFdoYXTigJlzICR7Q29uc3RhbnRzLlBMQVRGT1JNX05BTUV9P2AsXG4gICAgICAgICAgICAgICAgcm91dGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046V0hBVCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGBXaHkgJHtDb25zdGFudHMuUExBVEZPUk1fTkFNRX0/YCxcbiAgICAgICAgICAgICAgICByb3V0ZToge1xuICAgICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpXSFknLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAnTG9uZy10ZXJtIFN1cHBvcnQnLFxuICAgICAgICAgICAgLy8gICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmlzaW9uJyxcbiAgICAgICAgICAgICAgICByb3V0ZToge1xuICAgICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpWSVNJT04nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAnUm9hZG1hcCcsXG4gICAgICAgICAgICAvLyAgICAgcm91dGU6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdWZXJzaW9ucycsXG4gICAgICAgICAgICAvLyAgICAgcm91dGU6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdSZWxlYXNlIG5vdGVzJyxcbiAgICAgICAgICAgIC8vICAgICByb3V0ZToge1xuICAgICAgICAgICAgLy8gICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ0xpY2VuY2UnLFxuICAgICAgICAgICAgLy8gICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnR2V0dGluZyBzdGFydGVkJyxcbiAgICAgICAgaWNvbjogJ2dldHRpbmctc3RhcnRlZCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdJbnN0YWxsYXRpb24nLFxuICAgICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6R0VUVElOR1NUQVJURUQ6SU5TVEFMTEFUSU9OJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ0ZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25zJyxcbiAgICAgICAgICAgIC8vICAgICByb3V0ZToge1xuICAgICAgICAgICAgLy8gICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Jyb3dzZXIgc3VwcG9ydCcsXG4gICAgICAgICAgICAgICAgcm91dGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdG86ICdST1VURTpHRVRUSU5HU1RBUlRFRDpCUk9XU0VSU1VQUE9SVCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGl0bGU6ICdVcGdyYWRlIGd1aWRlJyxcbiAgICAgICAgICAgIC8vICAgICByb3V0ZToge1xuICAgICAgICAgICAgLy8gICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogJ0NvbnRyaWJ1dGluZycsXG4gICAgICAgICAgICAvLyAgICAgcm91dGU6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgdGl0bGU6ICdGZWF0dXJlcycsXG4gICAgLy8gICAgIGljb246ICdmZWF0dXJlcycsXG4gICAgLy8gICAgIGl0ZW1zOiBbXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdHbG9iYWwgY29uZmlnJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ0Rpc3BsYXkgQnJlYWtwb2ludCcsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdGcmFtZXdvcmsgSW50ZWdyYXRpb25zJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ0FjY2Vzc2liaWxpdHkgKGExMXkpJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ0JpZGlyZWN0aW9uYWxpdHkgKExUUi9SVEwpJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ0NTUyBSZXNldCcsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdTZXJ2ZXIgc2lkZSByZW5kZXJpbmcnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnQ2FuY2VsYWJsZSBldmVudCcsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgIF1cbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgdGl0bGU6ICdBbmltYXRpb25zJyxcbiAgICAvLyAgICAgaWNvbjogJ2FuaW1hdGlvbnMnLFxuICAgIC8vICAgICBpdGVtczogW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnQW5pbWF0aW9uIEd1aWRlbGluZScsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpJTlRST0RVQ1RJT046UVVJQ0tTVEFSVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdUcmFuc2l0aW9uJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOklOVFJPRFVDVElPTjpRVUlDS1NUQVJUJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgXVxuICAgIC8vIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1VJIENvbnRhaW5lcnMnLFxuICAgICAgICBpY29uOiAnY29tcG9uZW50cycsXG4gICAgICAgIGl0ZW1zOiBjb21wb25lbnRzXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLm1haW4pXG4gICAgICAgICAgICAubWFwKChjb21wb25lbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGNvbXBvbmVudC50aXRsZSxcbiAgICAgICAgICAgICAgICByb3V0ZToge1xuICAgICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOkNPTVBPTkVOVDpERVRBSUxTJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGNvbXBvbmVudC5rZXksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpLFxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICB0aXRsZTogJ0Fib3V0JyxcbiAgICAvLyAgICAgaWNvbjogJ2h0bWxwbHVzJyxcbiAgICAvLyAgICAgaXRlbXM6IFtcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ01lZXQgdGhlIHRlYW0nLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnU3BvbnNvcnMgYW5kIGJhY2tlcnMnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6SU5UUk9EVUNUSU9OOlFVSUNLU1RBUlQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICBdXG4gICAgLy8gfSxcbiAgICAvLyBUT0RPXG4gICAgLy8ge1xuICAgIC8vICAgICB0aXRsZTogJ0ZyYW1ld29yayBJbnRlZ3JhdGlvbnMnLFxuICAgIC8vICAgICBpdGVtczogW1xuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAnT3ZlcnZpZXcnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6RlJBTUVXT1JLOk9WRVJWSUVXJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ1JlYWN0JyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOkZSQU1FV09SSzpSRUFDVCcsXG4gICAgLy8gICAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGl0bGU6ICdBbmd1bGFyJyxcbiAgICAvLyAgICAgICAgICAgICByb3V0ZToge1xuICAgIC8vICAgICAgICAgICAgICAgICB0bzogJ1JPVVRFOkZSQU1FV09SSzpBTkdVTEFSJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ1Z1ZScsXG4gICAgLy8gICAgICAgICAgICAgcm91dGU6IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdG86ICdST1VURTpGUkFNRVdPUks6VlVFJyxcbiAgICAvLyAgICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICB0aXRsZTogJ0phdmFTY3JpcHQnLFxuICAgIC8vICAgICAgICAgICAgIHJvdXRlOiB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRvOiAnUk9VVEU6RlJBTUVXT1JLOkpBVkFTQ1JJUFQnLFxuICAgIC8vICAgICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICBdLFxuICAgIC8vIH0sXG5dIiwiZXhwb3J0ICogZnJvbSAnLi91c2Utcm91dGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlLXN0b3JlJztcbiIsImltcG9ydCB7IHVzZVJvdXRlciBhcyB1c2VSb3V0ZXJOZXh0LCBOZXh0Um91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnQGFwcC9zZXJ2aWNlcyc7XG5cbmludGVyZmFjZSBSb3V0ZXJIb29rIGV4dGVuZHMgTmV4dFJvdXRlciB7XG4gIGlzQWN0aXZlKG5hbWU6IHN0cmluZywgcGFyYW1zPzogb2JqZWN0KTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVJvdXRlciA9ICgpOiBSb3V0ZXJIb29rID0+IHtcblxuICBjb25zdCBuZXh0Um91dGVyOiBSb3V0ZXJIb29rID0gdXNlUm91dGVyTmV4dCgpIGFzIFJvdXRlckhvb2s7XG5cbiAgbmV4dFJvdXRlci5pc0FjdGl2ZSA9IChuYW1lOiBzdHJpbmcsIHBhcmFtcz86IG9iamVjdCkgPT4ge1xuXG4gICAgY29uc3QgcGF0aCA9IHJvdXRlci5wYXRoKG5hbWUsIHBhcmFtcyk7XG5cbiAgICBpZiAoIXBhdGgpIHJldHVybjtcblxuICAgIHJldHVybiBuZXh0Um91dGVyLmFzUGF0aC5zdGFydHNXaXRoKHBhdGgpO1xuICB9O1xuXG4gIHJldHVybiBuZXh0Um91dGVyO1xufTtcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdG9yZSwgU3RvcmVDb250ZXh0IH0gZnJvbSAnQGFwcC9zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCB1c2VTdG9yZSA9ICgpOiBTdG9yZSA9PiB1c2VDb250ZXh0KFN0b3JlQ29udGV4dCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7XG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcbmltcG9ydCB7IE1hcmt1cCwgUGFnZSwgVGV4dCB9IGZyb20gJ0BhcHAvY29tcG9uZW50cyc7XG5cbmNvbnN0IEluc3RhbGxhdGlvbiA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgeyBjb250ZW50LCBkYXRhIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlIGxheW91dD1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgIDxUZXh0PntkYXRhLnRpdGxlfTwvVGV4dD5cbiAgICAgICAgICAgIDxNYXJrdXA+e2NvbnRlbnR9PC9NYXJrdXA+XG4gICAgICAgIDwvUGFnZT5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXG4gICAgY29uc3QgZnJhbWV3b3JrID0gbm9va2llcy5nZXQoY29udGV4dCkuZnJhbWV3b3JrIHx8ICdyZWFjdCc7XG5cbiAgICBjb25zdCBmaWxlID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9jb250ZW50L2VuL2dldHRpbmctc3RhcnRlZC9pbnN0YWxsYXRpb24uJHtmcmFtZXdvcmt9Lm1kYCk7XG5cbiAgICBjb25zdCB7IGNvbnRlbnQsIGRhdGEgfSA9IG1hdHRlcihmaWxlLmRlZmF1bHQpIHx8IHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RhbGxhdGlvbjsiLCJleHBvcnQgKiBmcm9tICcuL3JvdXRlcic7XG4iLCJleHBvcnQgKiBmcm9tICcuL3JvdXRlcic7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRlcyc7XG4iLCJleHBvcnQgaW50ZXJmYWNlIFJvdXRlIHtcbiAgbmFtZTogc3RyaW5nLFxuICBwYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRlciB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXM6IFJvdXRlW10gPSBbXTtcblxuICBhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVzO1xuICB9XG5cbiAgZmluZChuYW1lOiBzdHJpbmcpOiBSb3V0ZSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG4gIH1cblxuICBwYXRoKG5hbWU6IHN0cmluZywgcGFyYW1zPzogb2JqZWN0KTogc3RyaW5nIHtcblxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5maW5kKG5hbWUpO1xuXG4gICAgaWYgKCFyb3V0ZSkgcmV0dXJuO1xuXG4gICAgbGV0IHBhdGggPSByb3V0ZS5wYXRoO1xuXG4gICAgT2JqZWN0LmtleXMocGFyYW1zIHx8IHt9KVxuICAgICAgLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoYFske2tleX1dYCwgcGFyYW1zW2tleV0pXG4gICAgICB9KTtcblxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgcmVnaXN0ZXIocm91dGU6IFJvdXRlKTogUm91dGUge1xuXG4gICAgdGhpcy5yb3V0ZXMucHVzaChyb3V0ZSk7XG5cbiAgICByZXR1cm4gcm91dGU7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICdAYXBwL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cbnJvdXRlci5yZWdpc3Rlcih7XG4gICAgbmFtZTogJ1JPVVRFOkhPTUUnLFxuICAgIHBhdGg6ICcvJ1xufSk7XG5cbi8vIElOVFJPRFVDVElPTlxuXG5yb3V0ZXIucmVnaXN0ZXIoe1xuICAgIG5hbWU6ICdST1VURTpJTlRST0RVQ1RJT046VklTSU9OJyxcbiAgICBwYXRoOiAnL2ludHJvZHVjdGlvbi92aXNpb24nXG59KTtcblxucm91dGVyLnJlZ2lzdGVyKHtcbiAgICBuYW1lOiAnUk9VVEU6SU5UUk9EVUNUSU9OOldIQVQnLFxuICAgIHBhdGg6IGAvaW50cm9kdWN0aW9uL3doYXQtaXMtJHtDb25zdGFudHMuUExBVEZPUk1fS0VZfWBcbn0pO1xuXG5yb3V0ZXIucmVnaXN0ZXIoe1xuICAgIG5hbWU6ICdST1VURTpJTlRST0RVQ1RJT046V0hZJyxcbiAgICBwYXRoOiBgL2ludHJvZHVjdGlvbi93aHktJHtDb25zdGFudHMuUExBVEZPUk1fS0VZfWBcbn0pO1xuXG4vLyBHRVRUSU5HU1RBUlRFRFxuXG5yb3V0ZXIucmVnaXN0ZXIoe1xuICAgIG5hbWU6ICdST1VURTpHRVRUSU5HU1RBUlRFRDpJTlNUQUxMQVRJT04nLFxuICAgIHBhdGg6ICcvZ2V0dGluZy1zdGFydGVkL2luc3RhbGxhdGlvbidcbn0pO1xuXG5yb3V0ZXIucmVnaXN0ZXIoe1xuICAgIG5hbWU6ICdST1VURTpHRVRUSU5HU1RBUlRFRDpCUk9XU0VSU1VQUE9SVCcsXG4gICAgcGF0aDogJy9nZXR0aW5nLXN0YXJ0ZWQvYnJvd3Nlci1zdXBwb3J0J1xufSk7XG5cbi8vIENPTVBPTkVOVFxuXG5yb3V0ZXIucmVnaXN0ZXIoe1xuICAgIG5hbWU6ICdST1VURTpDT01QT05FTlQ6REVUQUlMUycsXG4gICAgcGF0aDogJy9jb21wb25lbnQvW2tleV0nXG59KTtcblxuXG5cblxuXG5cblxuXG5cbi8vIHJvdXRlci5yZWdpc3Rlcih7XG4vLyAgICAgbmFtZTogJ1JPVVRFOkZSQU1FV09SSzpBTkdVTEFSJyxcbi8vICAgICBwYXRoOiAnL2ZyYW1ld29yay9hbmd1bGFyJ1xuLy8gfSk7XG5cbi8vIHJvdXRlci5yZWdpc3Rlcih7XG4vLyAgICAgbmFtZTogJ1JPVVRFOkZSQU1FV09SSzpKQVZBU0NSSVBUJyxcbi8vICAgICBwYXRoOiAnL2ZyYW1ld29yay9qYXZhc2NyaXB0J1xuLy8gfSk7XG5cbi8vIHJvdXRlci5yZWdpc3Rlcih7XG4vLyAgICAgbmFtZTogJ1JPVVRFOkZSQU1FV09SSzpPVkVSVklFVycsXG4vLyAgICAgcGF0aDogJy9mcmFtZXdvcmsvb3ZlcnZpZXcnXG4vLyB9KTtcblxuLy8gcm91dGVyLnJlZ2lzdGVyKHtcbi8vICAgICBuYW1lOiAnUk9VVEU6RlJBTUVXT1JLOlJFQUNUJyxcbi8vICAgICBwYXRoOiAnL2ZyYW1ld29yay9yZWFjdCdcbi8vIH0pO1xuXG4vLyByb3V0ZXIucmVnaXN0ZXIoe1xuLy8gICAgIG5hbWU6ICdST1VURTpGUkFNRVdPUks6VlVFJyxcbi8vICAgICBwYXRoOiAnL2ZyYW1ld29yay92dWUnXG4vLyB9KTtcblxuIiwiZXhwb3J0ICogZnJvbSAnLi9zdG9yZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0b3JlLmNvbnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi9zdG9yZS51aS50eXBlcyc7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8U3RvcmU+KG51bGwgYXMgYW55KTtcbiIsImltcG9ydCB7IG1ha2VBdXRvT2JzZXJ2YWJsZSB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCB7IFRvY0l0ZW0gfSBmcm9tICcuL3N0b3JlLnRvYy50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBUb2NTdG9yZSB7XG5cbiAgaXRlbXM6IEFycmF5PFRvY0l0ZW0+ID0gW107XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgcm9vdDogU3RvcmUpIHtcblxuICAgIG1ha2VBdXRvT2JzZXJ2YWJsZSh0aGlzLCB7IHJvb3Q6IGZhbHNlIH0pO1xuICB9XG5cbiAgYWRkKGl0ZW06IFRvY0l0ZW0pIHtcblxuICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcblxuICAgIGlmIChpdGVtLmtleSAmJiBgIyR7aXRlbS5rZXl9YCAhPT0gd2luZG93LmxvY2F0aW9uLmhhc2gpIHJldHVybjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgIGl0ZW0uc2Nyb2xsVG8oKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykge1xuXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSAhPT0ga2V5KTtcbiAgfVxuXG4gIHVwZGF0ZShrZXk6IHN0cmluZywgZW50cnkpIHtcblxuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5lbnRyeT8uaXNJbnRlcnNlY3RpbmcpO1xuXG4gICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXMuZmluZCgoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XG5cbiAgICBpdGVtLmVudHJ5ID0gZW50cnk7XG5cbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZW50cnk/LmlzSW50ZXJzZWN0aW5nKTtcblxuICAgIGxldCBuZXh0O1xuXG4gICAgaWYgKGVudHJpZXMubGVuZ3RoKSB7XG5cbiAgICAgIG5leHQgPSBlbnRyaWVzWzBdO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgaWYgKCFhY3RpdmUgfHwgIWFjdGl2ZS5lbnRyeSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB0b3AgPSBhY3RpdmUuZW50cnkudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgY29uc3QgdG9Eb3duID0gdG9wIDwgMDtcblxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGFjdGl2ZS5rZXkpO1xuXG4gICAgICBuZXh0ID0gdGhpcy5pdGVtc1t0b0Rvd24gPyBpbmRleCA6IGluZGV4IC0gMV07XG4gICAgfVxuXG4gICAgaWYgKCFuZXh0KSByZXR1cm47XG5cbiAgICB0aGlzLml0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS5hY3RpdmUgPSBpdGVtLmtleSA9PT0gbmV4dC5rZXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBtYWtlQXV0b09ic2VydmFibGUgfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IFRvY1N0b3JlIH0gZnJvbSAnLi9zdG9yZS50b2MnO1xuaW1wb3J0IHsgVWlTdG9yZSB9IGZyb20gJy4vc3RvcmUudWknO1xuXG5leHBvcnQgY2xhc3MgU3RvcmUge1xuXG4gIHRvYzogVG9jU3RvcmU7XG5cbiAgdWk6IFVpU3RvcmU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBtYWtlQXV0b09ic2VydmFibGUodGhpcyk7XG5cbiAgICB0aGlzLnRvYyA9IG5ldyBUb2NTdG9yZSh0aGlzKTtcblxuICAgIHRoaXMudWkgPSBuZXcgVWlTdG9yZSh0aGlzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbWFrZUF1dG9PYnNlcnZhYmxlIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyBGcmFtZXdvcmssIExheW91dCB9IGZyb20gJy4vc3RvcmUudWkudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVWlTdG9yZSB7XG5cbiAgZnJhbWV3b3JrOiBGcmFtZXdvcmsgPSAncmVhY3QnO1xuXG4gIGxheW91dD86IExheW91dDtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSByb290OiBTdG9yZSkge1xuXG4gICAgbWFrZUF1dG9PYnNlcnZhYmxlKHRoaXMsIHsgcm9vdDogZmFsc2UgfSk7XG5cbiAgICAvLyBUT0RPXG4gICAgdGhpcy5zZXRGcmFtZXdvcmsobm9va2llcy5nZXQobnVsbCkuZnJhbWV3b3JrIGFzIGFueSB8fCAncmVhY3QnKTtcbiAgfVxuXG4gIHNldEZyYW1ld29yayh2YWx1ZTogRnJhbWV3b3JrKSB7XG5cbiAgICB0aGlzLmZyYW1ld29yayA9IHZhbHVlO1xuXG4gICAgLy8gVE9ET1xuICAgIG5vb2tpZXMuc2V0KFxuICAgICAgbnVsbCxcbiAgICAgICdmcmFtZXdvcmsnLFxuICAgICAgdmFsdWUsXG4gICAgICB7XG4gICAgICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBzZXRMYXlvdXQodmFsdWU6IExheW91dCkge1xuICAgIHRoaXMubGF5b3V0ID0gdmFsdWU7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgY2xhc3NlcyA9ICguLi5pbnB1dCk6IHN0cmluZyA9PiB7XG5cbiAgICBjb25zdCBuYW1lcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbnB1dFtpXTtcblxuICAgICAgICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6XG4gICAgICAgICAgICAgICAgbmFtZXMucHVzaChjbGFzc2VzKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzpcblxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudFtrZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IFV0aWxzLnRvS2ViYWJDYXNlKGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgQm9vbGVhbl0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICYmIG5hbWVzLnB1c2goYCR7a2V5fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goYCR7a2V5fS0ke3ZhbHVlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RydWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXMucHVzaChgJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmYWxzZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZXMucHVzaChgJHtrZXl9LSR7dmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZXMuam9pbignICcpO1xufTsiLCJleHBvcnQgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKHRleHQ6IHN0cmluZykgPT4ge1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXG4gICAgaW5wdXQudmFsdWUgPSB0ZXh0O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBpbnB1dC5zZWxlY3QoKTtcblxuICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTk5KTtcblxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG5cbiAgICBpbnB1dC5yZW1vdmUoKTtcbn0iLCJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICdAYXBwL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudE5hbWUgPSAoZnJhbWV3b3JrLCBpbnB1dCkgPT4ge1xuXG4gICAgaWYgKGZyYW1ld29yayAhPT0gJ3JlYWN0JykgcmV0dXJuIGlucHV0O1xuXG4gICAgcmV0dXJuIFV0aWxzLnRvUGFzY2FsQ2FzZShpbnB1dCk7XG59IiwiaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJ0BhcHAvY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RXZlbnROYW1lID0gKGZyYW1ld29yaywgaW5wdXQpID0+IHtcblxuICAgIGlmIChmcmFtZXdvcmsgIT09ICdyZWFjdCcpIHJldHVybiBpbnB1dDtcblxuICAgIHJldHVybiBgb24ke0NvbnN0YW50cy5QTEFURk9STV9FVkVOVF9QUkVGSVh9JHtVdGlscy50b0NhcGl0YWxDYXNlKGlucHV0KX1gO1xufSIsImltcG9ydCAqIGFzIFV0aWxzIGZyb20gJ0BhcHAvdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvcGVydHlOYW1lID0gKGZyYW1ld29yaywgaW5wdXQpID0+IHtcblxuICAgIGlmIChmcmFtZXdvcmsgIT09ICdyZWFjdCcpIHJldHVybiBpbnB1dDtcblxuICAgIHJldHVybiBVdGlscy50b0NhbWVsQ2FzZShpbnB1dCk7XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jbGFzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vY29weS10by1jbGlwYm9hcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9nZXQtY29tcG9uZW50LW5hbWUnO1xuZXhwb3J0ICogZnJvbSAnLi9nZXQtZXZlbnQtbmFtZSc7XG5leHBvcnQgKiBmcm9tICcuL2dldC1wcm9wZXJ0eS1uYW1lJztcbmV4cG9ydCAqIGZyb20gJy4vdG8tY2FtZWwtY2FzZSc7XG5leHBvcnQgKiBmcm9tICcuL3RvLWNhcGl0YWwtY2FzZSc7XG5leHBvcnQgKiBmcm9tICcuL3RvLWtlYmFiLWNhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi90by1wYXNjYWwtY2FzZSc7XG5leHBvcnQgKiBmcm9tICcuL3RvLXVuaXQnO1xuIiwiLy8gVE9ET1xuZXhwb3J0IGNvbnN0IHRvQ2FtZWxDYXNlID0gKGlucHV0OiBzdHJpbmcpID0+IHtcblxuICAgIGlmICghaW5wdXQpIHJldHVybiBpbnB1dDtcblxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC8oPzpeXFx3fFtBLVpdfFxcYlxcdykvZywgKHdvcmQsIGluZGV4KSA9PiBpbmRleCA9PT0gMCA/IHdvcmQudG9Mb3dlckNhc2UoKSA6IHdvcmQudG9VcHBlckNhc2UoKSkucmVwbGFjZSgvXFxzKy9nLCAnJykucmVwbGFjZSgvLS9nLCAnJyk7XG59IiwiZXhwb3J0IGNvbnN0IHRvQ2FwaXRhbENhc2UgPSAoaW5wdXQ6IHN0cmluZykgPT4ge1xuXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuIGlucHV0O1xuXG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXHcvLCAoY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbn0iLCJleHBvcnQgY29uc3QgdG9LZWJhYkNhc2UgPSAoaW5wdXQ6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBpbnB1dFxuICAgICAgICAubWF0Y2goL1tBLVpdezIsfSg/PVtBLVpdW2Etel0rWzAtOV0qfFxcYil8W0EtWl0/W2Etel0rWzAtOV0qfFtBLVpdfFswLTldKy9nKVxuICAgICAgICAubWFwKChjaGFyKSA9PiBjaGFyLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIC5qb2luKCctJyk7XG59IiwiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnQGFwcC91dGlscyc7XG5cbmV4cG9ydCBjb25zdCB0b1Bhc2NhbENhc2UgPSAoaW5wdXQ6IHN0cmluZykgPT4ge1xuXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuIGlucHV0O1xuXG4gICAgcmV0dXJuIGlucHV0LnNwbGl0KCctJykubWFwKCh3b3JkKSA9PiBVdGlscy50b0NhcGl0YWxDYXNlKHdvcmQpKS5qb2luKCcnKTtcbn0iLCJleHBvcnQgY29uc3QgdG9Vbml0ID0gKGlucHV0OiBzdHJpbmcgfCBudW1iZXIpID0+IHtcblxuICAgIGlmIChpbnB1dCA9PSBudWxsIHx8IGlucHV0ID09PSAnJykgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIGlmIChpc05hTigraW5wdXQhKSkgcmV0dXJuIFN0cmluZyhpbnB1dCk7XG5cbiAgICByZXR1cm4gYCR7TnVtYmVyKGlucHV0KX1weGA7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGh0bWxwbHVzL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vYnhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieC1yZWFjdC1saXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tanN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hcmtkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==