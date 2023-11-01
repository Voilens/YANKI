/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/rainbows.js":
/*!****************************!*\
  !*** ./src/js/rainbows.js ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/unicorns.js":
/*!****************************!*\
  !*** ./src/js/unicorns.js ***!
  \****************************/
/***/ (() => {



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/base.scss */ "./src/scss/base.scss");
/* harmony import */ var _js_rainbows_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/rainbows.js */ "./src/js/rainbows.js");
/* harmony import */ var _js_rainbows_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_rainbows_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_unicorns_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/unicorns.js */ "./src/js/unicorns.js");
/* harmony import */ var _js_unicorns_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_unicorns_js__WEBPACK_IMPORTED_MODULE_2__);




let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menuBtnClose = document.querySelector('.menu-btn-close');

menuBtn.addEventListener('click', function() {
	menu.classList.toggle('active');
});

menuBtnClose.addEventListener('click', function() {
	menu.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(!e.target.closest('.menu') && !e.target.closest('.burger')
      ) {
        document.querySelector('.menu').classList.remove('active');
    }
});

//карусель

  /* этот код помечает картинки, для удобства разработки (пронумеровывает их)*/
let i = 1;
let carousel = document.querySelector('#carousel');
for (let li of carousel.querySelectorAll('li')) {
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}



let viewport = document.getElementById("viewport").offsetWidth; // Получаем видимую часть слайда
let btnNext = document.getElementById("next"); // Получаем кнопку вперёд
let slider = document.querySelector("ul.homepage-categories--carousel"); // Получаем элемент со всеми слайдами
let viewSliders = document.querySelectorAll('.homepage-categories--img'); // Получаем элементы показа слайда
let viewSlide = 0; // Объявляем переменную номера слайда

viewSliders[0].style.backgroundColor = "#E0BEA2"; // Назначаем цвет индикатор слайда зелёный

// Обработка клика на кнопку вперёд
btnNext.addEventListener('click', function() {
  
  viewSliders[viewSlide].style.backgroundColor = "#FFFFFF"; // Делаем индикатор слайда красный
  
  // Условие, если номер слайда меньше четырёх
  if (viewSlide < (viewSliders.length / 4) - 1) { // Если верно то    
      viewSlide++; // Увеличиваем номер слайда на один
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }

viewSliders[viewSlide].style.backgroundColor = "#E0BEA2"; // Закрашиваем индикатор слайда в зелёный

slider.style.left = -viewSlide * (viewport + 15)/2 + "px"; // Меняем позицию всего слайда
});



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map