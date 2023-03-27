/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lozad/dist/lozad.min.js":
/*!**********************************************!*\
  !*** ./node_modules/lozad/dist/lozad.min.js ***!
  \**********************************************/
/***/ (function(module) {

/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!function(t,e){ true?module.exports=e():0}(this,function(){"use strict";
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */var g="undefined"!=typeof document&&document.documentMode,f={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var d=t.getAttribute("data-background-image-set").split(n),u=d[0].substr(0,d[0].indexOf(" "))||d[0];// Substring before ... 1x
u=-1===u.indexOf("url(")?"url("+u+")":u,1===d.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+d+"); background-image: image-set("+d+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function A(t){t.setAttribute("data-loaded",!0)}var m=function(t){return"true"===t.getAttribute("data-loaded")},v=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},f,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,g=e.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),m(t.target)||(r(t.target),A(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d}));for(var c,l=v(o,i),b=0;b<l.length;b++)(c=l[b]).getAttribute("data-placeholder-background")&&(c.style.background=c.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=v(o,i),e=0;e<t.length;e++)m(t[e])||(s?s.observe(t[e]):(u(t[e]),A(t[e]),g(t[e])))},triggerLoad:function(t){m(t)||(u(t),A(t),g(t))},observer:s}}});


/***/ }),

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class RequestApi {
    constructor() {
        this._buttonRequest = document.querySelector(".button-load");
        this._keyAPI = "AIzaSyCbJN6vx_NxrCKGjsVCVX7EjRLgzo1zKo4";
        this._bookBox = document.querySelector(".block__box");
        this._start = 0;
        this._basket = document.querySelector(".header__box-count-product");
        this._amountProduct = localStorage.length;
        this.placeholder = "../image/image/book-placeholder.jpg";
        this._arrCategories = [
            {
                name: "Architecture",
                url: "Architecture",
            },
            {
                name: "Art & Fashion",
                url: "Art",
            },
            {
                name: "Biography",
                url: "Biography & Autobiography",
            },
            {
                name: "Business",
                url: "Business",
            },
            {
                name: "Crafts & Hobbies",
                url: "Crafts & Hobbies",
            },
            {
                name: "Drama",
                url: "Drama",
            },
            {
                name: "Fiction",
                url: "Fiction",
            },
            {
                name: "Food & Drink",
                url: "Cooking",
            },
            {
                name: "Health & Wellbeing",
                url: "Health & Fitness",
            },
            {
                name: "History & Politics",
                url: "History",
            },
            {
                name: "Humor",
                url: "Humor",
            },
            {
                name: "Poetry",
                url: "Poetry",
            },
            {
                name: "Psychology",
                url: "Psychology",
            },
            {
                name: "Science",
                url: "Science",
            },
            {
                name: "Technology",
                url: "Technology",
            },
            {
                name: "Travel & Maps",
                url: "Travel",
            },
        ];
        this._navBox = document.querySelector(".block__nav");
        this._link;
        this._category = 0;
    }

    //запрос на сервер
    async request() {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q="subject:${this._arrCategories[this._category].url}"&key=${
                    this._keyAPI
                }&printType=books&startIndex=${this._start}&maxResults=20&langRestrict=ru`
            );
            const data = await response.json();
            return (this._result = data);
        } catch {
            console.log("error");
        }
    }
    //инициализация списка категорий
    initNavLink() {
        this._arrCategories.forEach((element, index) => {
            this._link = `<div class="block__nav-box">
            <div class="block__nav-circle n${index} ${index == 0 ? "active" : ""}" data-index=${index}></div>
            <h2 class="block__nav-link n${index} ${index == 0 ? "active" : ""}" data-index=${index}>${element.name}</h2>
        </div>`;
            this._navBox.innerHTML += this._link;
        });
        this._links = document.querySelectorAll(".block__nav-link");
        this._links.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault()
                this.linkClick(link.dataset.index);
                if (+this._category !== +link.dataset.index) {
                    this._category = link.dataset.index;
                    this._start = 0;
                    this._bookBox.innerHTML = "";
                    this.startRequest();
                }
            });
        });
    }
    linkClick(num) {
        this._navBox.querySelectorAll(".active").forEach((element) => {
            element.classList.remove("active");
        });
        this._navBox.querySelectorAll(`.n${num}`).forEach((element) => {
            element.classList.add("active");
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestApi);

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

// let bookNew = document.createElement("div");
// bookNew.ClassList.add("card-book");

// let imageDiv = document.createElement("div");
// imageDiv.ClassList.add("card-book__img");
// imageDiv.style.backgroundImage = `url(${image})`;

// let bookDiv = document.createElement("div");
// bookDiv.ClassList.add("card-book__box");

// let autorBook = document.createElement("p");
// autorBook.classList.add("card-book__box-autor");
// autorBook.textContent = autor ? autor : "";

// let titleBook = document.createElement("h2");
// titleBook.classList.add("card-book__box-title");
// titleBook.textContent = title;

// let raitingDiv = document.createElement("div");
// raitingDiv.classList.add("card-book__box-raiting");

// let raitingStarDiv = document.createElement("div");
// raitingStarDiv.classList.add("card-book__box-raiting--star");

// let raitingText = document.createElement("div");
// raitingText.classList.add("card-book__box-raiting--text");

// let descriptionBook = document.createElement("p");
// descriptionBook.classList.add("card-book__box-description");
// descriptionBook.textContent = description === undefined ? "" : description + "...";

// let priceBook = document.createElement("p");
// priceBook.classList.add("card-book__box-price");
// priceBook.textContent = priceN;

// let buttonBuy = document.createElement("button");
// buttonBuy.classList.add("card-book__box-button")`<div class="card-book">


/***/ }),

/***/ "./src/WriteContent.js":
/*!*****************************!*\
  !*** ./src/WriteContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RequestApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RequestApi */ "./src/RequestApi.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_1__);



const observer = lozad__WEBPACK_IMPORTED_MODULE_1___default()(); // lazy loads elements with default selector as '.lozad'
class WriteContent extends _RequestApi__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor() {
        super();
    }
    start() {
        this.startRequest();
        this.initNavLink();
        this.initHandler();
        this.basket();
    }
    //при запуске отображение книг из категории по умолчанию
    async startRequest() {
        this._result = await this.request();
        this.writeBook(this._result.items);
    }

    //кнопка load more
    async initHandler() {
        this._buttonRequest.addEventListener("click", async () => {
            this._start += 6;
            this._result = await this.request();

            this.writeBook(this._result.items);
        });
    }

    // отображение книг по запросу
    writeBook(arrBook) {
        if (!arrBook) return

            arrBook.forEach(async (element, index) => {
                let book = element;
                let idBook = book.id;
                let autor = book.volumeInfo.authors;
                let description = book.volumeInfo.description?.slice(0, 82);
                let image = book.volumeInfo.imageLinks?.thumbnail;
                let title = book.volumeInfo.title;
                let price = book.saleInfo.retailPrice;
                let priceN = `${price?.amount ? price.amount : ""} ${price?.currencyCode ? price.currencyCode : ""}`;
                let raiting = book.volumeInfo.averageRating;
                let grade = book.volumeInfo.raitingCount;
                let flagButton = false;

                //проверка есть книга в корзине
                for (let index = 0; index < localStorage.length; index++) {
                    if (localStorage.key(index) === idBook) {
                        flagButton = true;
                    }
                }
                //проверка на повтор книг в списке, видимо из-за какого-то косяка апи выдает одинаковые книги
                if (document.getElementById(idBook)) {
                    return;
                }

                // отображение рейтинга
                let raitingStar = "";
                if (raiting) {
                    for (let index = 0; index < raiting; index++) {
                        let star = `<img src="../image/icons/Star.svg" alt="" />`;
                        raitingStar += star;
                    }
                }

                // создание карточки книги
                let bookNew = `
            <div class="card-book" id='${idBook}' attr = "${flagButton === true ? "buy" : "not-buy"}">
                <img  data-src="${image ? image : this.placeholder}" class="lozad card-book__img" src="${image ? image : this.placeholder}" alt="book-image">
                
                <div class="card-book__box">
                    <p class="card-book__box-autor">${autor ? autor : ""}</p>
                    <h2 class="card-book__box-title">${title}</h2>
                    <div class="card-book__box-raiting">
                        <div class="card-book__box-raiting--star">
                            ${raiting ? raitingStar : ""}
                        </div>
                    <p class="card-book__box-raiting--text">${grade ? grade + " review" : ""}</p>
                    </div>
                    <p class="card-book__box-description">${description === undefined ? "" : description + "..."}</p>
                    <p class="card-book__box-price">${priceN}</p>
                    <button class="card-book__box-button ${flagButton === true ? "in-the-cart" : ""}">${
                    flagButton === true ? "in the cart" : "buy now"
                }</button>
                </div>
            </div>`;
                this._bookBox.innerHTML += bookNew;
            });
            observer.observe();
        this.initButtonBuy();
    }
    //навешивание обработчика на кнопку купить в карточке книги
    initButtonBuy() {
        this._buttons = document.querySelectorAll(".card-book__box-button");
        this._buttons.forEach((element) => {
            element.addEventListener("click", (e) => {
                e.preventDefault()
                this.bookBuy(element);
            });
        });
    }
    //функция добавления книги в корзину и удалении из карзины
    bookBuy(el) {
        let book = document.getElementById(el.parentElement.parentElement.id);
        if (book.getAttribute("attr") === "not-buy") {
            book.setAttribute("attr", "buy");
            book.querySelector(".card-book__box-button").classList.toggle("in-the-cart");
            book.querySelector(".card-book__box-button").textContent = "in the cart";
            this.localMemory(book, el.parentElement.parentElement.id);
            this.basket();
        } else {
            book.setAttribute("attr", "not-buy");
            book.querySelector(".card-book__box-button").classList.toggle("in-the-cart");
            book.querySelector(".card-book__box-button").textContent = "buy now";
            localStorage.removeItem(el.parentElement.parentElement.id);
            this.basket();
        }
    }
    //отображение колличества товара в карзине
    basket() {
        this._amountProduct = localStorage.length;
        this._basket.innerHTML = this._amountProduct;
        if (this._amountProduct > 0) {
            this._basket.classList.add("active");
        } else {
            this._basket.classList.remove("active");
        }
    }
    // книги с корзины сохраняються в localStorage
    localMemory(book, id) {
        this._arrBook = {
            id: id,
            autor: book.children[1].children[0].textContent,
            title: book.children[1].children[1].textContent,
            description: book.children[1].children[3].textContent,
            price: book.children[1].children[4].textContent,
        };
        this._arrBookJson = JSON.stringify(this._arrBook);
        localStorage.setItem(id, this._arrBookJson);
    }
}
const writeContent = new WriteContent();
document.addEventListener("DOMContentLoaded", writeContent.start());


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
        this._count = 0
    }
    initSlider() {
        this._arrImages.forEach((element, index) => {
            this._slider = `<div data-src="image.png" class="lozad advertising__slider-image n${index} ${index === 0 ? "active" : ""}" style = 'background-image:url(${
                this._arrImages[index].url
            })' data-index="${index}"></div>`;
            this._sliderBox.innerHTML += this._slider;

            this._point = `<div class="advertising__point n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
            this._pointBox.innerHTML += this._point;
        });
        this._pointer = document.querySelectorAll(".advertising__point");
        this._pointer.forEach((point) => {
            point.addEventListener("click", () => {
                this.pointerClick(point.dataset.index);
                this._count = point.dataset.index
            });
        });
        this.interval();
    }
    interval() {
        
        setInterval(() => {
            this.pointerClick(this._count);
            this._count++;

            if (this._count === this._pointer.length) {
                this._count = 0;
            }
        }, 5000);
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/* harmony import */ var _src_WriteContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/WriteContent */ "./src/WriteContent.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map