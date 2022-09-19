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

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime (93)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.14.1\n    at module.exports (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (node:internal/modules/cjs/loader:1105:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Module.require (node:internal/modules/cjs/loader:1005:19)\n    at require (node:internal/modules/cjs/helpers:102:18)\n    at Object.<anonymous> (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (node:internal/modules/cjs/loader:1105:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)\n    at Module.load (node:internal/modules/cjs/loader:981:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n    at Module.require (node:internal/modules/cjs/loader:1005:19)\n    at require (node:internal/modules/cjs/helpers:102:18)\n    at loadLoader (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/Compilation.js:157:10)\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/Compilation.js:460:10\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModuleFactory.js:243:5\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModuleFactory.js:94:13\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModule.js:195:19\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:172:11\n    at loadLoader (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/loadLoader.js:32:11)\n    at iteratePitchingLoaders (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/Compilation.js:157:10)\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/Compilation.js:460:10\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModuleFactory.js:243:5\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModuleFactory.js:94:13\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/tapable/lib/Tapable.js:272:13)\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModuleFactory.js:69:10\n    at /home/wayne/Projects/BrainchildProjects/brainchild-projects/node_modules/webpack/lib/NormalModuleFactory.js:196:7\n    at processTicksAndRejections (node:internal/process/task_queues:78:11)");

/***/ })
/******/ ]);