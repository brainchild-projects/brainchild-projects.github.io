/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid_overlay_js__ = __webpack_require__(2);


// toggle overlay
const overlay = new __WEBPACK_IMPORTED_MODULE_0__grid_overlay_js__["a" /* default */]('.container');
overlay.listen();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function findElement(selector) {
  return document.querySelector(selector);
}

function ready(fn) {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function onKeypress(key, fn) {
  document.addEventListener("keypress", function(e) {
    console.log(e);
    if (e.isTrusted && key.key === e.key && e.ctrlKey === e.ctrlKey) {
      fn(e);
    }
  });
}

function dasherize(string) {
  return string.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);
}

function style(element, styles) {
  element.style.cssText = Object.entries(styles)
    .map(([prop, value]) => {
      return `${dasherize(prop)}:${value}`;
    })
    .join(";");
}

class OverlayElement {
  constructor(containerSelector) {
    this.containerSelector = containerSelector;
  }

  listen() {
    console.log("listening...");
    ready(() => {
      console.log("ready done");
      onKeypress({ key: "g", ctrlKey: true }, () => {
        this.toggleOverlay();
      });
    });
  }

  container() {
    return findElement(this.containerSelector);
  }

  overlay() {
    return findElement(`${this.containerSelector} .grid-overlay`);
  }

  showOverlay() {
    if (this.overlay()) {
      this.overlay().style.display = "block";
    } else {
      this.createOverlay();
    }
  }

  hideOverlay() {
    if (this.overlay()) {
      this.overlay().style.display = "none";
    }
  }

  toggleOverlay() {
    if (this.overlayIsVisible()) {
      this.hideOverlay();
    } else {
      this.showOverlay();
    }
  }

  overlayIsVisible() {
    const overlay = this.overlay();
    return overlay && overlay.style.display !== "none";
  }

  createOverlay() {
    const overlay = document.createElement("div");
    const container = this.container();
    overlay.classList.add("grid-overlay");
    container.style.position = "relative";
    container.appendChild(overlay);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (OverlayElement);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);