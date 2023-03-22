/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/RequestApi.js":
/*!***************************!*\
  !*** ./src/RequestApi.js ***!
  \***************************/
/***/ (() => {

class RequestApi {
    constructor() {
        this._buttonRequest = document.querySelector(".button-load");
        this._keyAPI = "AIzaSyCbJN6vx_NxrCKGjsVCVX7EjRLgzo1zKo4";
    }

    request() {
        return fetch(
            `https://www.googleapis.com/books/v1/volumes?q="subject:Drama"&key=${this._keyAPI}&printType=books&startIndex=0&maxResults=1&langRestrict=ru`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return (this._result = data);
            })
            .catch(() => {
                console.log("error");
            });
    }
    async initHandler() {
        this._buttonRequest.addEventListener("click", async () => {
            this._result = await this.request();
            console.log(this._result.items[0]);
            let book = this._result.items[0];
            let autor = book.volumeInfo.authors;
            let imageS = book.volumeInfo.imageLinks.smallThumbnail;
            let image = book.volumeInfo.imageLinks.thumbnail;
            let title = book.volumeInfo.title;
            let price = book.saleInfo.retailPrice;
            let raiting = book.volumeInfo.averageRating;
            let grade = book.volumeInfo.raitingCount;
            console.log( autor, image, title, price, raiting, grade);
        });
    }
}
const requestApi = new RequestApi();
document.addEventListener("DOMContentLoaded", requestApi.initHandler());

// const res = async ()=>{
//     try {
//         const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyCbJN6vx_NxrCKGjsVCVX7EjRLgzo1zKo4&printType=books&startIndex=0&maxResults=2&langRestrict=en`);
//         const json = await response.json();
//         return json;
//     } catch {
//         console.log('error');
//     }
// }

// console.log();


/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ (() => {

class Slider {
    constructor() {
        this._arrImages = [
            {
                url: "..//image/image/banner.png",
            },
            {
                url: "..//image/image/banner2.png",
            },
            {
                url: "..//image/image/banner3.png",
            },
        ];
        this._sliderBox = document.querySelector(".advertising__slider");
        this._pointBox = document.querySelector(".advertising__pointer-box");
        this._slider;
    }
    initSlider() {
        console.log(56);
        this._arrImages.forEach((element, index) => {
            this._slider = `<div class="advertising__slider-image n${index} ${index === 0 ? "active" : ""}" style = 'background-image:url(${
                this._arrImages[index].url
            })' data-index="${index}"></div>`;
            this._point = `<div class="advertising__point n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
            this._sliderBox.innerHTML += this._slider;
            this._pointBox.innerHTML += this._point;
        });
        this._pointer = document.querySelectorAll(".advertising__point");
        this._pointer.forEach((point) => {
            point.addEventListener("click", () => {
                this.pointerClick(point.dataset.index);
            });
        });
    }
    pointerClick(num) {
        this._sliderBox.querySelector(".active").classList.remove("active");
        this._sliderBox.querySelector(`.n${num}`).classList.add("active");
        this._pointBox.querySelector(".active").classList.remove("active");
        this._pointBox.querySelector(`.n${num}`).classList.add("active");
    }
}

let slider = new Slider();
slider.initSlider();


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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _src_slider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/slider.js */ "./src/slider.js");
/* harmony import */ var _src_slider_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_slider_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_RequestApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/RequestApi.js */ "./src/RequestApi.js");
/* harmony import */ var _src_RequestApi_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_RequestApi_js__WEBPACK_IMPORTED_MODULE_2__);




})();

/******/ })()
;
//# sourceMappingURL=main.js.map