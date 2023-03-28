/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize-css */ "./node_modules/normalize-css/index.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/Factory */ "./src/assets/js/libs/Factory.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



 // import './libs/Logger'
// import './libs/BrowserSyncAction'

var moduleElements = _toConsumableArray(document.querySelectorAll('[data-module]'));

window.factory = _libs_Factory__WEBPACK_IMPORTED_MODULE_2__.default;
document.addEventListener('DOMContentLoaded', function () {
  _libs_Factory__WEBPACK_IMPORTED_MODULE_2__.default.registerModules(moduleElements);
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      var rawElements = [m.target].concat(_toConsumableArray(m.addedNodes));
      var modifyElements = [];
      rawElements.forEach(function (e) {
        if (e.querySelectorAll) {
          modifyElements = [].concat(_toConsumableArray(modifyElements), _toConsumableArray(e.querySelectorAll('[data-module]')));
        }
      });
      var elements = [].concat(_toConsumableArray(rawElements), _toConsumableArray(modifyElements)).filter(function (e) {
        return e.getAttribute && e.getAttribute('data-module') && !e.modules;
      });
      _libs_Factory__WEBPACK_IMPORTED_MODULE_2__.default.registerModules(elements);
    });
  });
  observer.observe(document, {
    subtree: true,
    childList: true
  });
});

/***/ }),

/***/ "./src/assets/js/libs/EasingFunctions.js":
/*!***********************************************!*\
  !*** ./src/assets/js/libs/EasingFunctions.js ***!
  \***********************************************/
/*! namespace exports */
/*! export EasingFunctions [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getEaseValue [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EasingFunctions": function() { return /* binding */ EasingFunctions; },
/* harmony export */   "getEaseValue": function() { return /* binding */ getEaseValue; }
/* harmony export */ });
/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 */
var EasingFunctions = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity 
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};
var getEaseValue = function getEaseValue(time, from, to, duration) {
  var fn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'easeInOutQuad';
  console.log(fn);
  var easeFn = EasingFunctions[fn] || EasingFunctions['easeInOutQuad'];
  return easeFn(time / duration) * (to - from) + from;
};

/***/ }),

/***/ "./src/assets/js/libs/Factory.js":
/*!***************************************!*\
  !*** ./src/assets/js/libs/Factory.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Factory = /*#__PURE__*/function () {
  function Factory() {
    _classCallCheck(this, Factory);

    this.modules = {};
    this.names = {};
    this.elements = new WeakMap();
  }

  _createClass(Factory, [{
    key: "registerModules",
    value: function registerModules(elements) {
      var _this = this;

      elements.forEach(function (el) {
        if (el.modules) return;
        var modules = el.getAttribute('data-module') ? el.getAttribute('data-module').split(/(\s|,)/g).filter(function (s) {
          return s.trim().length && !s.includes(',');
        }) : [];
        modules.forEach(function (m) {
          _this.addModule(new (__webpack_require__("./src/assets/js/modules sync recursive ^\\.\\/.*$")("./".concat(m))["default"])(el, m));
        });
      });
    }
  }, {
    key: "addModule",
    value: function addModule(m) {
      this.modules[m.id] = m;

      if (!this.names[m.name]) {
        this.names[m.name] = [];
      }

      this.names[m.name].push(m);

      if (!this.elements.has(m.el)) {
        var newModule = _defineProperty({}, m.name, m);

        this.elements.set(m.el, newModule);
        return m;
      }

      var eleModules = this.elements.get(m.el);
      return eleModules[m.name] = m;
    }
  }, {
    key: "getModuleById",
    value: function getModuleById(id) {
      return this.modules[id];
    }
  }, {
    key: "getModulesByEl",
    value: function getModulesByEl(el) {
      return this.elements.get(el);
    }
  }, {
    key: "getModulesByName",
    value: function getModulesByName(name) {
      return this.names[name];
    }
  }]);

  return Factory;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Factory());

/***/ }),

/***/ "./src/assets/js/libs/Helper.js":
/*!**************************************!*\
  !*** ./src/assets/js/libs/Helper.js ***!
  \**************************************/
/*! namespace exports */
/*! export $helper [provided] [no usage info] [missing usage info prevents renaming] */
/*! export constifyProp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export deThrottler [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getQueryValue [provided] [no usage info] [missing usage info prevents renaming] */
/*! export visibilityChangeDetect [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Helper; },
/* harmony export */   "constifyProp": function() { return /* binding */ constifyProp; },
/* harmony export */   "visibilityChangeDetect": function() { return /* binding */ visibilityChangeDetect; },
/* harmony export */   "deThrottler": function() { return /* binding */ deThrottler; },
/* harmony export */   "getQueryValue": function() { return /* binding */ getQueryValue; },
/* harmony export */   "$helper": function() { return /* binding */ $helper; }
/* harmony export */ });
/* harmony import */ var _EasingFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasingFunctions */ "./src/assets/js/libs/EasingFunctions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Helper = /*#__PURE__*/function () {
  function Helper(el) {
    _classCallCheck(this, Helper);

    this.el = el;
    this.subscribers = {};
    this.state = {};
  }

  _createClass(Helper, [{
    key: "subscribe",
    value: function subscribe(event, callback) {
      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }

      this.subscribers[event].push(callback);
    }
  }, {
    key: "publish",
    value: function publish(event, data) {
      if (!this.subscribers[event]) return;
      this.subscribers[event].forEach(function (subscriberCallback) {
        return subscriberCallback(data);
      });
    } // detect available wheel event

  }, {
    key: "getWheelEvent",
    value: function getWheelEvent(el) {
      if ('onwheel' in el) {
        // spec event type
        return 'wheel';
      } else if (el.onmousewheel !== undefined) {
        // legacy event type
        return 'mousewheel';
      } else {
        // older Firefox
        return 'DOMMouseScroll';
      }
    }
  }, {
    key: "easeInOutQuart",
    value: function easeInOutQuart(t, b, c, d) {
      if (t > d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    }
  }, {
    key: "getScreenHeight",
    value: function getScreenHeight() {
      var div = document.createElement("div");
      div.style.opacity = 0;
      div.style.pointerEvents = "none";
      div.style.position = "fixed";
      div.style.top = 0;
      div.style.height = "100%";
      div.style.width = "100%";
      document.body.appendChild(div);
      var height = window.getComputedStyle(div).height;
      div.remove();
      return height;
    }
  }, {
    key: "getSiblings",
    value: function getSiblings(el) {
      // for collecting siblings
      var siblings = []; // if no parent, return no sibling

      if (!el.parentNode) {
        return siblings;
      } // first child of the parent node


      var sibling = el.parentNode.firstChild; // collecting siblings

      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== el) {
          siblings.push(sibling);
        }

        sibling = sibling.nextSibling;
      }

      return siblings;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }
  }, {
    key: "detectBrowser",
    value: function detectBrowser() {
      // Opera 8.0+
      // const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0
      // Firefox 1.0+
      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1; // Safari 3.0+ "[object HTMLElementConstructor]"
      // const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))
      // Internet Explorer 6-11
      // const isIE = /*@cc_on!@*/false || !!document.documentMode
      // Edge 20+
      // const isEdge = !isIE && !!window.StyleMedia
      // Chrome 1 - 79
      // const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
      // Edge (based on chromium) detection
      // const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1)
      // Blink engine detection
      // const isBlink = (isChrome || isOpera) && !!window.CSS

      return {
        // isOpera,
        isFirefox: isFirefox // isSafari,
        // isIE,
        // isEdge,
        // isChrome,
        // isEdgeChromium,
        // isBlink

      };
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(top) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaultOptions = {
        duration: 400,
        offset: 0
      };
      options = _objectSpread(_objectSpread({}, defaultOptions), options);
      var to = top + options.offset;
      var from = window.pageYOffset || document.documentElement.scrollTop;
      var startTime = new Date().getTime();
      clearInterval(this.scrollTimer);
      this.scrollTimer = setInterval(function () {
        var time = new Date().getTime() - startTime;
        var step = (0,_EasingFunctions__WEBPACK_IMPORTED_MODULE_0__.getEaseValue)(time, from, to, options.duration);
        window.scrollTo(0, step);

        if (time >= options.duration) {
          window.scrollTo(0, to);
          clearInterval(_this.scrollTimer);
          options.onComplete && typeof options.onComplete == "function" && options.onComplete();
        }
      }, 1000 / 60);
    }
  }, {
    key: "scrollToEl",
    value: function scrollToEl(el) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!el) return;
      var to = this.getOffset(el).top;
      this.scrollTo(to, options);
    }
  }]);

  return Helper;
}();



var constifyProp = function constifyProp(obj, prop, value) {
  return Object.defineProperty(obj, prop, {
    value: value,
    writable: false
  });
};

var visibilityChangeDetect = function visibilityChangeDetect(callback) {
  var hidden = "hidden"; // Standards:

  if (hidden in document) document.addEventListener("visibilitychange", callback);else if ((hidden = "mozHidden") in document) document.addEventListener("mozvisibilitychange", callback);else if ((hidden = "webkitHidden") in document) document.addEventListener("webkitvisibilitychange", callback);else if ((hidden = "msHidden") in document) document.addEventListener("msvisibilitychange", callback); // All others:
  else window.onpageshow = window.onpagehide = window.onfocus = window.onblur = callback;
};

var deThrottler = function deThrottler(options) {
  var delay = options.delay || 200;
  var nextValid = Date.now() + delay;
  var callback = 0;

  var func = function func(e) {
    clearTimeout(callback);
    var timeStamp = Date.now();

    if (timeStamp > nextValid) {
      options.callback(e);
      nextValid = timeStamp + delay;
      return;
    }

    callback = setTimeout(function () {
      if (!options.skipLastCall) {
        options.callback(e);
      }
    }, delay);
  };

  (options.target || window).addEventListener(options.event, func);
  return func;
};

var getQueryValue = function () {
  var QUERY_STRING = {};
  var params = window.location.search.split('?')[1];

  if (params) {
    params.split(/&(?!amp;)/g).forEach(function (param) {
      var query = param.split('=');
      QUERY_STRING[query[0]] = query[1];
    });
  }

  return function (name) {
    return QUERY_STRING[name];
  };
}();

var $helper = new Helper();


/***/ }),

/***/ "./src/assets/js/libs/ModuleState.js":
/*!*******************************************!*\
  !*** ./src/assets/js/libs/ModuleState.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var storage = {};

var refState = function refState(name, initValue) {
  if (!storage[name]) {
    var subs = [];
    var currentValue = initValue;
    storage[name] = {
      get: function get() {
        return currentValue;
      },
      set: function set(value) {
        if (value !== currentValue) {
          currentValue = value;
          subs.forEach(function (s) {
            return s(currentValue);
          });
          return [].concat(subs);
        }

        return false;
      },
      onChange: function onChange(sub) {
        return subs.push(sub);
      }
    };
  }

  return storage[name];
};

/* harmony default export */ __webpack_exports__["default"] = (refState);

/***/ }),

/***/ "./src/assets/js/libs/Observer.js":
/*!****************************************!*\
  !*** ./src/assets/js/libs/Observer.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export invoker [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invoker": function() { return /* binding */ invoker; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./src/assets/js/libs/Subscriber.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var pool = {};

var Observer = function Observer() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'eventName.ModuleName.ModuleId';
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };

  var _name$split = name.split(/\./g),
      _name$split2 = _slicedToArray(_name$split, 3),
      eventName = _name$split2[0],
      moduleName = _name$split2[1],
      moduleId = _name$split2[2];

  var sub = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.default(eventName, callback, name);
  var returnObject = {
    disconnect: function disconnect() {
      var _pool$eventName, _pool$eventName$defau, _pool$eventName2, _pool$eventName2$modu, _pool$eventName2$modu2, _pool$eventName3, _pool$eventName3$modu, _pool$eventName3$modu2;

      var index = (_pool$eventName = pool[eventName]) === null || _pool$eventName === void 0 ? void 0 : (_pool$eventName$defau = _pool$eventName["default"]) === null || _pool$eventName$defau === void 0 ? void 0 : _pool$eventName$defau.findIndex(function (s) {
        return s === sub;
      });

      if (index > -1) {
        pool[eventName]["default"].splice(index, 1);
        return;
      }

      index = (_pool$eventName2 = pool[eventName]) === null || _pool$eventName2 === void 0 ? void 0 : (_pool$eventName2$modu = _pool$eventName2[moduleName]) === null || _pool$eventName2$modu === void 0 ? void 0 : (_pool$eventName2$modu2 = _pool$eventName2$modu["default"]) === null || _pool$eventName2$modu2 === void 0 ? void 0 : _pool$eventName2$modu2.findIndex(function (s) {
        return s === sub;
      });

      if (index > -1) {
        pool[eventName][moduleName]["default"].splice(index, 1);
        return;
      }

      index = (_pool$eventName3 = pool[eventName]) === null || _pool$eventName3 === void 0 ? void 0 : (_pool$eventName3$modu = _pool$eventName3[moduleName]) === null || _pool$eventName3$modu === void 0 ? void 0 : (_pool$eventName3$modu2 = _pool$eventName3$modu[moduleId]) === null || _pool$eventName3$modu2 === void 0 ? void 0 : _pool$eventName3$modu2.findIndex(function (s) {
        return s === sub;
      });

      if (index > -1) {
        pool[eventName][moduleName][moduleId].splice(index, 1);
        return;
      }
    }
  };

  if (!pool[eventName]) {
    pool[eventName] = {
      "default": []
    };
  }

  var subject = pool[eventName];

  if (!moduleName) {
    subject["default"].push(sub);
    return returnObject;
  }

  if (!subject[moduleName]) {
    subject[moduleName] = {
      "default": []
    };
  }

  subject = subject[moduleName];
  subject["default"].push(sub);
  if (!moduleId) return returnObject;

  if (!subject[moduleId]) {
    subject[moduleId] = [];
  }

  subject[moduleId].push(sub);
  return returnObject;
};

var invoker = function invoker(name, data, publisher) {
  var _name$split3 = name.split(/\./g),
      _name$split4 = _slicedToArray(_name$split3, 3),
      eventName = _name$split4[0],
      moduleName = _name$split4[1],
      moduleId = _name$split4[2];

  var subject = pool[eventName] || {
    "default": []
  };

  var subs = _toConsumableArray(subject["default"]);

  if (!subject[moduleName]) {
    subs.forEach(function (sub) {
      return sub.invoke(data, publisher);
    });
    return;
  }

  subject = subject[moduleName];
  subs = [].concat(_toConsumableArray(subs), _toConsumableArray(subject["default"]));

  if (!subject[moduleId]) {
    subs.forEach(function (sub) {
      return sub.invoke(data, publisher);
    });
    return;
  }

  subject = subject[moduleId];
  subs = [].concat(_toConsumableArray(subs), _toConsumableArray(subject));
  subs.forEach(function (sub) {
    return sub.invoke(data, publisher);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Observer);


/***/ }),

/***/ "./src/assets/js/libs/Publisher.js":
/*!*****************************************!*\
  !*** ./src/assets/js/libs/Publisher.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Publisher; }
/* harmony export */ });
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ "./src/assets/js/libs/Observer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Publisher = /*#__PURE__*/function () {
  function Publisher() {
    _classCallCheck(this, Publisher);
  }

  _createClass(Publisher, [{
    key: "publish",
    value: function publish(name, data) {
      (0,_Observer__WEBPACK_IMPORTED_MODULE_0__.invoker)("".concat(name, ".").concat(this.name, ".").concat(this.id), data, this);
    }
  }]);

  return Publisher;
}();



/***/ }),

/***/ "./src/assets/js/libs/RandomString.js":
/*!********************************************!*\
  !*** ./src/assets/js/libs/RandomString.js ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ random; }
/* harmony export */ });
var alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var str = '';

  while (length) {
    length--;
    str += alphabet[~~(Math.random() * alphabet.length)];
  }

  return str;
}

/***/ }),

/***/ "./src/assets/js/libs/Subscriber.js":
/*!******************************************!*\
  !*** ./src/assets/js/libs/Subscriber.js ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Subscriber; }
/* harmony export */ });
/* harmony import */ var _RandomString__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RandomString */ "./src/assets/js/libs/RandomString.js");
/* harmony import */ var _ModuleState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModuleState */ "./src/assets/js/libs/ModuleState.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Subscriber = /*#__PURE__*/function () {
  function Subscriber(name, action, refName) {
    var _this = this;

    _classCallCheck(this, Subscriber);

    this.name = name;
    this.action = action;
    this.id = (0,_RandomString__WEBPACK_IMPORTED_MODULE_1__.default)();
    this.refState = (0,_ModuleState__WEBPACK_IMPORTED_MODULE_0__.default)(refName);
    this.refState.onChange(function (value) {
      return _this.action && _this.action(value, _this.publisher);
    });
  }

  _createClass(Subscriber, [{
    key: "invoke",
    value: function invoke(data, publisher) {
      if (!this.publisher) {
        this.publisher = publisher;
      }

      if (publisher !== this.publisher) {
        console.warn('it seems this event is published from multiple publisher. ', this.publisher, publisher);
      }

      this.refState.set(data);
    }
  }]);

  return Subscriber;
}();



/***/ }),

/***/ "./src/assets/js/modules/BaseModule.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/BaseModule.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BaseModule; }
/* harmony export */ });
/* harmony import */ var _libs_RandomString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/RandomString */ "./src/assets/js/libs/RandomString.js");
/* harmony import */ var _libs_Publisher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/Publisher */ "./src/assets/js/libs/Publisher.js");
/* harmony import */ var _libs_ModuleState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/ModuleState */ "./src/assets/js/libs/ModuleState.js");
/* harmony import */ var _libs_Helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/Helper */ "./src/assets/js/libs/Helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var setupInitAttr = function setupInitAttr(el, currentModule) {
  var name = currentModule.name.toLowerCase();

  var attrs = _toConsumableArray(el.attributes);

  attrs.map(function (a) {
    return [a.name, a.value];
  }).filter(function (a) {
    return a[0].includes(name);
  }).forEach(function (a) {
    var aName = a[0].split("".concat(name, "-")).pop();
    (0,_libs_ModuleState__WEBPACK_IMPORTED_MODULE_1__.default)("".concat(currentModule.id, "#").concat(aName), a[1]);
  });

  currentModule.data = function (name, value, subscribe) {
    var state = (0,_libs_ModuleState__WEBPACK_IMPORTED_MODULE_1__.default)("".concat(currentModule.id, "#").concat(name));
    if (subscribe) state.onChange(subscribe);
    if (value) state.set(value);
    return state.get();
  };

  (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_2__.constifyProp)(currentModule, 'data', currentModule.data);
};

var BaseModule = /*#__PURE__*/function (_Publisher) {
  _inherits(BaseModule, _Publisher);

  var _super = _createSuper(BaseModule);

  function BaseModule() {
    var _this;

    _classCallCheck(this, BaseModule);

    _this = _super.call(this);

    var _arguments = Array.prototype.slice.call(arguments),
        el = _arguments[0],
        name = _arguments[1];

    _this.id = (0,_libs_RandomString__WEBPACK_IMPORTED_MODULE_3__.default)();
    _this.name = name;
    _this.el = el;
    _this.el.modules = _this.el.modules || {};
    _this.el.modules[_this.name] = _this.id;
    (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_2__.constifyProp)(_assertThisInitialized(_this), 'id', _this.id);
    (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_2__.constifyProp)(_assertThisInitialized(_this), 'name', _this.name);
    (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_2__.constifyProp)(_assertThisInitialized(_this), 'el', _this.el);
    setupInitAttr(_this.el, _assertThisInitialized(_this));

    if (_this.register) {
      _this.register();

      (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_2__.constifyProp)(_assertThisInitialized(_this), 'register');
    }

    return _this;
  }

  return BaseModule;
}(_libs_Publisher__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/assets/js/modules/DisplayLeaderBoard.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/modules/DisplayLeaderBoard.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DisplayLeaderBoard; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var DisplayLeaderBoard = /*#__PURE__*/function (_BaseModule) {
  _inherits(DisplayLeaderBoard, _BaseModule);

  var _super = _createSuper(DisplayLeaderBoard);

  function DisplayLeaderBoard() {
    _classCallCheck(this, DisplayLeaderBoard);

    return _super.apply(this, arguments);
  }

  _createClass(DisplayLeaderBoard, [{
    key: "register",
    value: function register() {
      var _this = this;

      var refreshTime = ~~this.el.getAttribute('data-refresh-api') || 10000;
      console.log('refresh API', refreshTime);
      this.callAPI();
      setInterval(function () {
        _this.callAPI();
      }, refreshTime);
    }
  }, {
    key: "callAPI",
    value: function () {
      var _callAPI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default()({
                  url: 'https://us-central1-test-c1a7a.cloudfunctions.net/api/v1/leaderboard/0EejNWFdxllT92ZWmByW?top=10',
                  method: 'GET',
                  headers: {
                    "x-api-key": "2GB3VQI-KLQUVKI-QKXS67Q-KIKL55Q"
                  }
                }).then(function (result) {
                  var users = result.data.users;
                  var sortedUsers = users.sort(function (a, b) {
                    return b.score - a.score;
                  });
                  var listHtml = '';
                  sortedUsers.forEach(function (user, idx) {
                    if (idx < 10) {
                      listHtml += " <li>\n              <div><span class=\"number\">".concat(idx + 1, "</span></div>\n              <div class=\"inner\">\n                <div><span>").concat(user.username, "</span></div>\n                <div class=\"country\"><span>").concat(user.country || '-', "</span></div>\n                <div class=\"speciality\"><span>").concat(user.speciality || '-', "</span></div>\n                <div><span>").concat(user.score, "</span></div>\n              </div>\n            </li>");
                    }
                  });
                  document.querySelectorAll('.leader-list').forEach(function (list) {
                    list.innerHTML = listHtml;
                  });
                })["catch"](function (error) {
                  console.log(error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function callAPI() {
        return _callAPI.apply(this, arguments);
      }

      return callAPI;
    }()
  }]);

  return DisplayLeaderBoard;
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/assets/js/modules/HelloModule.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/HelloModule.js ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HelloModule; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var HelloModule = /*#__PURE__*/function (_BaseModule) {
  _inherits(HelloModule, _BaseModule);

  var _super = _createSuper(HelloModule);

  function HelloModule() {
    _classCallCheck(this, HelloModule);

    return _super.apply(this, arguments);
  }

  _createClass(HelloModule, [{
    key: "register",
    value: function register() {
      console.log(this);
    }
  }]);

  return HelloModule;
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/assets/js/modules/Slider.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/Slider.js ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/esm/components/autoplay/autoplay.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Slider = /*#__PURE__*/function (_BaseModule) {
  _inherits(Slider, _BaseModule);

  var _super = _createSuper(Slider);

  function Slider() {
    _classCallCheck(this, Slider);

    return _super.apply(this, arguments);
  }

  _createClass(Slider, [{
    key: "register",
    value: function register() {
      var _this$swiper,
          _this = this;

      swiper__WEBPACK_IMPORTED_MODULE_1__.default.use([swiper__WEBPACK_IMPORTED_MODULE_2__.default]);
      var autoSlide = ~~this.el.getAttribute('data-autoslide') || '';
      console.log('autoSlide', autoSlide); // const videos = this.el.querySelectorAll('video')
      // if(window.innerWidth > 1024) {
      //   videos.forEach(video => {
      //     video.muted= false
      //   });
      // }

      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__.default(this.el, {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: autoSlide || 10000
        }
      });
      (_this$swiper = this.swiper) === null || _this$swiper === void 0 ? void 0 : _this$swiper.on('slideChange', function (event) {
        var previousSlide = event.slides[event.previousIndex];
        var previousVideo = previousSlide.querySelector('video');

        if (previousVideo) {
          previousVideo.pause();
          previousVideo.currentTime = 0;
        }

        var currentSlide = event.slides[event.activeIndex];
        var currentVideo = currentSlide.querySelector('video');
        var videoTimeLimit = ~~(currentVideo === null || currentVideo === void 0 ? void 0 : currentVideo.getAttribute('data-time-limit')) || ''; // const btnMuted = currentSlide.querySelector('button');

        if (currentVideo) {
          // Check if the device is a mobile device
          var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

          if (isMobile) {
            // Mute the video and enable autoplay to prevent user interaction
            currentVideo.muted = true;
            currentVideo.autoplay = true;
            currentVideo.setAttribute('playsinline', '');
            currentVideo.setAttribute('muted', '');
          } else {
            // Play the video with sound
            currentVideo.play();
          }

          currentVideo.addEventListener('ended', function (e) {
            _this.swiper.slideNext();
          }); // btnMuted.setAttribute('data-mute', currentVideo.muted)
          // btnMuted.addEventListener('click', (e) => {
          //   btnMuted.setAttribute('data-mute', !currentVideo.muted)
          //   currentVideo.muted = !currentVideo.muted;
          // });

          currentVideo.addEventListener('timeupdate', function (e) {
            if (videoTimeLimit && currentVideo.currentTime >= videoTimeLimit) {
              _this.swiper.slideNext();

              currentVideo.pause();
              currentVideo.currentTime = 0;
            }
          });
        }
      });
    }
  }]);

  return Slider;
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/assets/js/modules/examples/RefState.js":
/*!****************************************************!*\
  !*** ./src/assets/js/modules/examples/RefState.js ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RefState; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var _libs_ModuleState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/ModuleState */ "./src/assets/js/libs/ModuleState.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var RefState = /*#__PURE__*/function (_BaseModule) {
  _inherits(RefState, _BaseModule);

  var _super = _createSuper(RefState);

  function RefState() {
    _classCallCheck(this, RefState);

    return _super.apply(this, arguments);
  }

  _createClass(RefState, [{
    key: "register",
    value: function register() {
      console.log('RefState! ', this); //

      var myData = (0,_libs_ModuleState__WEBPACK_IMPORTED_MODULE_1__.default)('myData', 'inited value');
      console.log(myData.get);
      myData.onChange(console.log);
      myData.set('changed value');
    }
  }]);

  return RefState;
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/assets/js/modules sync recursive ^\\.\\/.*$":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/ sync ^\.\/.*$ ***!
  \**********************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./BaseModule": "./src/assets/js/modules/BaseModule.js",
	"./BaseModule.js": "./src/assets/js/modules/BaseModule.js",
	"./DisplayLeaderBoard": "./src/assets/js/modules/DisplayLeaderBoard.js",
	"./DisplayLeaderBoard.js": "./src/assets/js/modules/DisplayLeaderBoard.js",
	"./HelloModule": "./src/assets/js/modules/HelloModule.js",
	"./HelloModule.js": "./src/assets/js/modules/HelloModule.js",
	"./Slider": "./src/assets/js/modules/Slider.js",
	"./Slider.js": "./src/assets/js/modules/Slider.js",
	"./examples/RefState": "./src/assets/js/modules/examples/RefState.js",
	"./examples/RefState.js": "./src/assets/js/modules/examples/RefState.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/js/modules sync recursive ^\\.\\/.*$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/assets/js/app.js","vendor"]
/******/ 		];
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
/******/ 		var checkDeferredModules = function() {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = function() {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfe_starter_kit"] = self["webpackChunkfe_starter_kit"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=app.js.map