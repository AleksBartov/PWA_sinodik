/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "chunks/" + ({"todo":"todo"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.component.js":
/*!**********************************!*\
  !*** ./src/app/app.component.js ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _app_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.template */ "./src/app/app.template.js");
/* harmony import */ var _app_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.model */ "./src/app/app.model.js");


var AppComponent = {
  init: function init() {
    this.appElement = document.querySelector('#app');
    this.initEvents();
    this.render();
  },
  initEvents: function initEvents() {
    var _this = this;

    this.appElement.addEventListener('click', function (event) {
      if (event.target.className === 'btn-todo') {
        __webpack_require__.e(/*! import() | todo */ "todo").then(__webpack_require__.bind(null, /*! ./todo/todo.module */ "./src/app/todo/todo.module.js")).then(function (lazyModule) {
          lazyModule.TodoModule.init();
        }).catch(function (error) {
          return 'An error occurred while loading Module';
        });
      }
    });
    document.querySelector('.banner').addEventListener('click', function (event) {
      event.preventDefault();

      _this.render();
    });
  },
  render: function render() {
    this.appElement.innerHTML = Object(_app_template__WEBPACK_IMPORTED_MODULE_0__["appTemplate"])(_app_model__WEBPACK_IMPORTED_MODULE_1__["AppModel"]);
  }
};

/***/ }),

/***/ "./src/app/app.model.js":
/*!******************************!*\
  !*** ./src/app/app.model.js ***!
  \******************************/
/*! exports provided: AppModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModel", function() { return AppModel; });
var AppModel = {
  title: 'Main Application'
};

/***/ }),

/***/ "./src/app/app.module.js":
/*!*******************************!*\
  !*** ./src/app/app.module.js ***!
  \*******************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.js");

var App = {
  init: function init() {
    this.initComponents();
    this.initServiceWorker();
  },
  initComponents: function initComponents() {
    var sTop = document.getElementsByClassName('sandwich')[0],
        sMiddle = document.getElementsByClassName('sandwich')[1],
        sBottom = document.getElementsByClassName('sandwich')[2],
        sandwichClicked = false;

    sandwich.onclick = function (e) {
      sandwichClicked = !sandwichClicked;
      pause.hidden = true;
      play.hidden = false;
      clearInterval(autoscrolling);

      if (sandwichClicked) {
        sTop.classList.add("sandwichTopOpened");
        sMiddle.classList.add("sandwichMiddleOpened");
        sBottom.classList.add("sandwichBottomOpened");
        hiddenMenu.classList.add("openedMenu");
        startPray.classList.add("heightAuto");
        newSinodik.classList.add("heightAuto");
        newName.classList.add("heightAuto");
        allSinodiks.classList.add("heightAuto");
        logo.style.color = "rgba(45,45,45,1)";
      } else {
        sTop.classList.remove("sandwichTopOpened");
        sMiddle.classList.remove("sandwichMiddleOpened");
        sBottom.classList.remove("sandwichBottomOpened");
        hiddenMenu.classList.remove("openedMenu");
        startPray.classList.remove("heightAuto");
        newSinodik.classList.remove("heightAuto");
        newName.classList.remove("heightAuto");
        allSinodiks.classList.remove("heightAuto");
        logo.style.color = "snow";
      }
    };

    allSinodiks.addEventListener('click', function (ev) {
      ev.preventDefault();
      startPray.classList.remove("heightAuto");
      newSinodik.classList.remove("heightAuto");
      newName.classList.remove("heightAuto");
      allSinodiks.classList.remove("heightAuto");
      setTimeout(function () {
        sTop.classList.remove("sandwichTopOpened");
        sMiddle.classList.remove("sandwichMiddleOpened");
        sBottom.classList.remove("sandwichBottomOpened");
        hiddenMenu.classList.remove("openedMenu");
        logo.style.color = "snow";
      }, 1500);
      setTimeout(function () {
        hiddenList.classList.add("openedList");
        hiddenList.innerHTML = "<center>+</center><h1>\u043E \u0437\u0434\u0440\u0430\u0432\u0438\u0438</h1>".concat(names.reverse().map(function (n) {
          return n.name;
        }).join('</br>'));
      }, 2000);
    }, false);
    var counter = 0;

    function createDivForName(name) {
      var div = document.createElement('div');
      div.id = "person_".concat(counter);
      div.className = 'personDiv';
      div.innerHTML = "".concat(name.name, "</br><p class='comments-for-name'>(").concat(name.comments, ")</p>");
      container.append(div);
      counter++;
    }

    var names = [{
      name: "археп. Амвросия",
      comments: "Ермаков"
    }, {
      name: "арх. Никиты",
      comments: "духовник"
    }, {
      name: "Елисаветы",
      comments: "супруга"
    }, {
      name: "мл. Варвары",
      comments: "дочь"
    }, {
      name: "мл. Иоанна",
      comments: "сын"
    }, {
      name: "мл. Бориса",
      comments: "сын"
    }, {
      name: "мл. Любови",
      comments: "дочь"
    }, {
      name: "мл. Стефана",
      comments: "крестник"
    }, {
      name: "мл. Иоанна",
      comments: "крестник"
    }, {
      name: "археп. Амвросия",
      comments: "Ермаков"
    }, {
      name: "арх. Никиты",
      comments: "духовник"
    }, {
      name: "Елисаветы",
      comments: "супруга"
    }, {
      name: "мл. Варвары",
      comments: "дочь"
    }, {
      name: "мл. Иоанна",
      comments: "сын"
    }, {
      name: "мл. Бориса",
      comments: "сын"
    }, {
      name: "мл. Любови",
      comments: "дочь"
    }, {
      name: "мл. Стефана",
      comments: "крестник"
    }, {
      name: "мл. Иоанна",
      comments: "крестник"
    }, {
      name: "мл. Александра",
      comments: "крестник"
    }, {
      name: "мл. Леонида",
      comments: "крестник"
    }];
    names.reverse().forEach(function (n) {
      return createDivForName(n);
    });
    document.body.addEventListener('touchstart', stopAutoScroll, true);

    function stopAutoScroll(ev) {
      if (ev.target.className == 'personDiv') {
        pause.hidden = true;
        play.hidden = false;
        clearInterval(autoscrolling);
      }
    }

    document.body.addEventListener('touchmove', move, true);

    function move(ev) {
      // clearInterval(autoscrolling);
      for (var i = 0; i < counter; i++) {
        getNameAndShowIt("person_".concat(i));
      }
    }

    function getNameAndShowIt(ID) {
      // 1.нашел имя
      var firstName = document.getElementById(ID); // 2. определил растояние сверху

      var fromTop = firstName.getBoundingClientRect().top; //forPoints.value = fromTop;
      // 3. поставил условия

      if (fromTop > 0 && fromTop < 260) {
        firstName.style.opacity = 1; // firstName.style.transform = 'translateZ(0px)';
      } else {
        firstName.style.opacity = 0; // firstName.style.transform = 'translateZ(-50px)';
      }

      if (fromTop > 30 && fromTop < 190) {
        firstName.style.filter = 'blur(0px)';
      } else {
        firstName.style.filter = 'blur(8px)';
      }
    }

    var autoscrolling;
    var counterFor = 0;

    play.onclick = function (ev) {
      ev.target.hidden = true;
      pause.hidden = false;
      autoscrolling = setInterval(function () {
        container.style.top = "".concat(counterFor, "px");

        for (var i = 0; i < counter; i++) {
          getNameAndShowIt("person_".concat(i));
        }

        counterFor += 1;

        if (container.getBoundingClientRect().top > 50) {
          clearInterval(autoscrolling);
          pause.hidden = true;
          counterFor = 0;
        }
      }, 8);
    };

    pause.onclick = function (ev) {
      pause.hidden = true;
      play.hidden = false;
      clearInterval(autoscrolling);
    };

    reloadList.onclick = function (ev) {
      clearInterval(autoscrolling);
      container.scrollIntoView(false);
      pause.hidden = false;
      counterFor = 0;
      autoscrolling = setInterval(function () {
        container.style.top = "".concat(counterFor, "px");

        for (var i = 0; i < counter; i++) {
          getNameAndShowIt("person_".concat(i));
        }

        counterFor += 1;

        if (container.getBoundingClientRect().top > 50) {
          clearInterval(autoscrolling);
          container.scrollIntoView(false);
          pause.hidden = true;
          counterFor = 0;
        }
      }, 8);
    };

    container.scrollIntoView(false);
  },
  initServiceWorker: function initServiceWorker() {
    if (!navigator.serviceWorker) {
      return;
    }

    navigator.serviceWorker.register('./sw.js').then(function () {
      console.log('sw registered successfully!');
    }).catch(function (error) {
      console.log('Some error while registering sw:', error);
    });
  }
};

/***/ }),

/***/ "./src/app/app.template.js":
/*!*********************************!*\
  !*** ./src/app/app.template.js ***!
  \*********************************/
/*! exports provided: appTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appTemplate", function() { return appTemplate; });
var appTemplate = function appTemplate(model) {
  return "\n    <section class=\"app\">\n        <h3> ".concat(model.title, " </h3>\n        <section class=\"button\">\n            <button class=\"btn-todo\"> Todo Module </button>\n        </section>\n    </section>\n");
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.js");

_app_app_module__WEBPACK_IMPORTED_MODULE_0__["App"].init();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map