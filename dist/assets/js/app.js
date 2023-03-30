/*! For license information please see app.js.LICENSE.txt */
!function(){var t={2804:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(6124),n(2124);var o=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.modules={},this.names={},this.elements=new WeakMap}var e,o;return e=t,(o=[{key:"registerModules",value:function(t){var e=this;t.forEach((function(t){t.modules||(t.getAttribute("data-module")?t.getAttribute("data-module").split(/(\s|,)/g).filter((function(t){return t.trim().length&&!t.includes(",")})):[]).forEach((function(r){e.addModule(new(n(6647)("./".concat(r)).default)(t,r))}))}))}},{key:"addModule",value:function(t){if(this.modules[t.id]=t,this.names[t.name]||(this.names[t.name]=[]),this.names[t.name].push(t),!this.elements.has(t.el)){var e=(n={},o=t,(r=t.name)in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n);return this.elements.set(t.el,e),t}var n,r,o;return this.elements.get(t.el)[t.name]=t}},{key:"getModuleById",value:function(t){return this.modules[t]}},{key:"getModulesByEl",value:function(t){return this.elements.get(t)}},{key:"getModulesByName",value:function(t){return this.names[t]}}])&&r(e.prototype,o),t}());function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=i(document.querySelectorAll("[data-module]"));window.factory=o,document.addEventListener("DOMContentLoaded",(function(){o.registerModules(c),new MutationObserver((function(t){t.forEach((function(t){var e=[t.target].concat(i(t.addedNodes)),n=[];e.forEach((function(t){t.querySelectorAll&&(n=[].concat(i(n),i(t.querySelectorAll("[data-module]"))))}));var r=[].concat(i(e),i(n)).filter((function(t){return t.getAttribute&&t.getAttribute("data-module")&&!t.modules}));o.registerModules(r)}))})).observe(document,{subtree:!0,childList:!0})}))},6122:function(t,e){"use strict";var n={};e.Z=function(t,e){if(!n[t]){var r=[],o=e;n[t]={get:function(){return o},set:function(t){return t!==o&&(o=t,r.forEach((function(t){return t(o)})),[].concat(r))},onChange:function(t){return r.push(t)}}}return n[t]}},5729:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";function o(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,e="";t;)t--,e+=r[~~(Math.random()*r.length)];return e}var i=n(6122);function u(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var f={};function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"publish",value:function(t,e){!function(t,e,n){var r,o,i=(r=t.split(/\./g),o=3,function(t){if(Array.isArray(t))return t}(r)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(r,o)||c(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],l=i[1],s=i[2],p=f[a]||{default:[]},y=u(p.default);p[l]?(p=p[l],y=[].concat(u(y),u(p.default)),p[s]?(p=p[s],(y=[].concat(u(y),u(p))).forEach((function(t){return t.invoke(e,n)}))):y.forEach((function(t){return t.invoke(e,n)}))):y.forEach((function(t){return t.invoke(e,n)}))}("".concat(t,".").concat(this.name,".").concat(this.id),e,this)}}])&&l(e.prototype,n),t}(),p={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}},y=function(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"easeInOutQuad";console.log(o);var i=p[o]||p.easeInOutQuad;return i(t/r)*(n-e)+e};function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var m,g,w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.subscribers={},this.state={}}var e,n;return e=t,(n=[{key:"subscribe",value:function(t,e){this.subscribers[t]||(this.subscribers[t]=[]),this.subscribers[t].push(e)}},{key:"publish",value:function(t,e){this.subscribers[t]&&this.subscribers[t].forEach((function(t){return t(e)}))}},{key:"getWheelEvent",value:function(t){return"onwheel"in t?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll"}},{key:"easeInOutQuart",value:function(t,e,n,r){return t>r?e+n:(t/=r/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}},{key:"getOffset",value:function(t){var e=t.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+r,left:e.left+n}}},{key:"getScreenHeight",value:function(){var t=document.createElement("div");t.style.opacity=0,t.style.pointerEvents="none",t.style.position="fixed",t.style.top=0,t.style.height="100%",t.style.width="100%",document.body.appendChild(t);var e=window.getComputedStyle(t).height;return t.remove(),e}},{key:"getSiblings",value:function(t){var e=[];if(!t.parentNode)return e;for(var n=t.parentNode.firstChild;n;)1===n.nodeType&&n!==t&&e.push(n),n=n.nextSibling;return e}},{key:"isMobile",value:function(){return/Mobi|Android/i.test(navigator.userAgent)}},{key:"detectBrowser",value:function(){return{isFirefox:navigator.userAgent.toLowerCase().indexOf("firefox")>-1}}},{key:"scrollTo",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={duration:400,offset:0},o=t+(n=b(b({},r),n)).offset,i=window.pageYOffset||document.documentElement.scrollTop,u=(new Date).getTime();clearInterval(this.scrollTimer),this.scrollTimer=setInterval((function(){var t=(new Date).getTime()-u,r=y(t,i,o,n.duration);window.scrollTo(0,r),t>=n.duration&&(window.scrollTo(0,o),clearInterval(e.scrollTimer),n.onComplete&&"function"==typeof n.onComplete&&n.onComplete())}),1e3/60)}},{key:"scrollToEl",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t){var n=this.getOffset(t).top;this.scrollTo(n,e)}}}])&&v(e.prototype,n),t}(),O=function(t,e,n){return Object.defineProperty(t,e,{value:n,writable:!1})};function S(t){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?_(t):e}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}m={},(g=window.location.search.split("?")[1])&&g.split(/&(?!amp;)/g).forEach((function(t){var e=t.split("=");m[e[0]]=e[1]})),new w;var T=function(t,e){var n,r=e.name.toLowerCase();(n=t.attributes,function(t){if(Array.isArray(t))return k(t)}(n)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||function(t,e){if(t){if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(t,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){return[t.name,t.value]})).filter((function(t){return t[0].includes(r)})).forEach((function(t){var n=t[0].split("".concat(r,"-")).pop();(0,i.Z)("".concat(e.id,"#").concat(n),t[1])})),e.data=function(t,n,r){var o=(0,i.Z)("".concat(e.id,"#").concat(t));return r&&o.onChange(r),n&&o.set(n),o.get()},O(e,"data",e.data)},x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(i,t);var e,n,r=(e=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=A(e);if(n){var o=A(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return P(this,t)});function i(){var t;j(this,i),t=r.call(this);var e=Array.prototype.slice.call(arguments),n=e[0],u=e[1];return t.id=o(),t.name=u,t.el=n,t.el.modules=t.el.modules||{},t.el.modules[t.name]=t.id,O(_(t),"id",t.id),O(_(t),"name",t.name),O(_(t),"el",t.el),T(t.el,_(t)),t.register&&(t.register(),O(_(t),"register")),t}return i}(s)},1117:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return y}});var r=n(5729),o=n(9669),i=n.n(o);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n,r,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void n(t)}c.done?e(a):Promise.resolve(a).then(r,o)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(b,t);var e,n,r,o,u,y,d=(u=b,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(u);if(y){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function b(){return a(this,b),d.apply(this,arguments)}return e=b,(n=[{key:"register",value:function(){var t=this,e=~~this.el.getAttribute("data-refresh-api")||1e4;console.log("refresh API",e),this.callAPI(),setInterval((function(){t.callAPI()}),e)}},{key:"callAPI",value:(r=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i()({url:"https://us-central1-test-c1a7a.cloudfunctions.net/api/v1/leaderboard/0EejNWFdxllT92ZWmByW?top=10",method:"GET",headers:{"x-api-key":"2GB3VQI-KLQUVKI-QKXS67Q-KIKL55Q"}}).then((function(t){var e=t.data.users.sort((function(t,e){return e.score-t.score})),n="";e.forEach((function(t,e){e<10&&(n+=' <li>\n                <div><span class="number">'.concat(e+1,'</span></div>\n                <div class="inner">\n                  <div><span>').concat(t.username,'</span></div>\n                  <div class="country"><span>').concat(t.country||"-",'</span></div>\n                  <div class="speciality"><span>').concat(t.speciality||"-","</span></div>\n                  <div><span>").concat(t.score,"</span></div>\n                </div>\n              </li>"))})),document.querySelectorAll(".leader-list").forEach((function(t){t.innerHTML=n}))})).catch((function(t){console.log(t)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})),o=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function u(t){c(i,n,o,u,a,"next",t)}function a(t){c(i,n,o,u,a,"throw",t)}u(void 0)}))},function(){return o.apply(this,arguments)})}])&&f(e.prototype,n),b}(r.default)},1619:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,{default:function(){return f}});var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(s,t);var e,n,r,f,l=(r=s,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=a(r);if(f){var n=a(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return c(this,t)});function s(){return o(this,s),l.apply(this,arguments)}return e=s,(n=[{key:"register",value:function(){console.log(this)}}])&&i(e.prototype,n),s}(n(5729).default)},3253:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(5729),o=n(8988),i=n(7649);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(y,t);var e,n,r,u,p=(r=y,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=s(r);if(u){var n=s(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function y(){return c(this,y),p.apply(this,arguments)}return e=y,(n=[{key:"register",value:function(){var t,e=this;o.Z.use([i.Z]);var n=~~this.el.getAttribute("data-autoslide")||"";console.log("autoSlide",n),this.swiper=new o.Z(this.el,{slidesPerView:1,loop:!0,autoplay:{delay:n||1e4,disableOnInteraction:!1}}),null===(t=this.swiper)||void 0===t||t.on("slideChange",(function(t){var n=t.slides[t.previousIndex].querySelector("video");n&&(n.pause(),n.currentTime=0);var r=t.slides[t.activeIndex].querySelector("video"),o=~~(null==r?void 0:r.getAttribute("data-time-limit"))||"",i=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);r&&(r.play(),e.swiper.autoplay.stop(),e.isStopAutoplay=!0,window.innerWidth>1024&&!i&&(r.muted=!1),r.addEventListener("pause",(function(t){e.isStopAutoplay&&e.swiper.autoplay.start()})),r.addEventListener("ended",(function(t){e.handleVideoEnd()})),r.addEventListener("timeupdate",(function(t){o&&r.currentTime>=o&&e.handleVideoEnd(r)})))}))}},{key:"handleVideoEnd",value:function(t){var e=this;document.fullscreenElement?(console.log("fullscreenElement"),document.exitFullscreen().then((function(){e.swiper.slideNext(),e.swiper.autoplay.start(),t&&(t.pause(),t.currentTime=0)}))):(this.swiper.slideNext(),this.swiper.autoplay.start(),t&&(t.pause(),t.currentTime=0)),this.isStopAutoplay=!1}}])&&a(e.prototype,n),y}(r.default)},1382:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var r=n(5729),o=n(6122);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(p,t);var e,n,r,i,s=(r=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(r);if(i){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function p(){return u(this,p),s.apply(this,arguments)}return e=p,(n=[{key:"register",value:function(){console.log("RefState! ",this);var t=(0,o.Z)("myData","inited value");console.log(t.get),t.onChange(console.log),t.set("changed value")}}])&&c(e.prototype,n),p}(r.default)},6647:function(t,e,n){var r={"./BaseModule":5729,"./BaseModule.js":5729,"./DisplayLeaderBoard":1117,"./DisplayLeaderBoard.js":1117,"./HelloModule":1619,"./HelloModule.js":1619,"./Slider":3253,"./Slider.js":3253,"./examples/RefState":1382,"./examples/RefState.js":1382};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=6647}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t={143:0},e=[[2804,736]],r=function(){};function o(){for(var r,o=0;o<e.length;o++){for(var i=e[o],u=!0,c=1;c<i.length;c++){var a=i[c];0!==t[a]&&(u=!1)}u&&(e.splice(o--,1),r=n(n.s=i[0]))}return 0===e.length&&(n.x(),n.x=function(){}),r}n.x=function(){n.x=function(){},u=u.slice();for(var t=0;t<u.length;t++)i(u[t]);return(r=o)()};var i=function(o){for(var i,u,a=o[0],f=o[1],l=o[2],s=o[3],p=0,y=[];p<a.length;p++)u=a[p],n.o(t,u)&&t[u]&&y.push(t[u][0]),t[u]=0;for(i in f)n.o(f,i)&&(n.m[i]=f[i]);for(l&&l(n),c(o);y.length;)y.shift()();return s&&e.push.apply(e,s),r()},u=self.webpackChunkfe_starter_kit=self.webpackChunkfe_starter_kit||[],c=u.push.bind(u);u.push=i}(),n.x()}();
/* Thu Mar 30 2023 17:13:38 GMT+0700 (Indochina Time) */
/* v1.0.3 */