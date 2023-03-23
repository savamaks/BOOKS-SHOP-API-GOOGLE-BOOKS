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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class RequestApi{
    constructor() {
        this._buttonRequest = document.querySelector(".button-load");
        this._keyAPI = "AIzaSyCbJN6vx_NxrCKGjsVCVX7EjRLgzo1zKo4";
        this._bookBox = document.querySelector(".block__box");
        this._start = 0;
        this._basket = document.querySelector(".header__box-count-product");
        this._amountProduct = localStorage.length;
        this.placeholder='../image/image/book-placeholder.jpg'
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
        this._navBox = document.querySelector('.block__nav')
        this._link 
        this._category = 0
    }

    
    //запрос на сервер
    async request() {
        
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q="subject:${this._arrCategories[this._category].url}"&key=${this._keyAPI}&printType=books&startIndex=${this._start}&maxResults=6&langRestrict=ru`
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
            this._link = `<h2 class="block__nav-link n${index} ${index == 0 ? "active" : ""}" data-index=${index}>${element.name}</h2>`;
            this._navBox.innerHTML += this._link;
        });
        this._links = document.querySelectorAll(".block__nav-link");
        this._links.forEach((link) => {
            link.addEventListener("click", () => {
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
        this._navBox.querySelector(".active").classList.remove("active");
        this._navBox.querySelector(`.n${num}`).classList.add("active");
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


class WriteContent extends _RequestApi__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
        let count = 0;
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

            // count++
            // if(count<=6){
            //     let r = 6-count
            //     await this.request(r)
            //     this.writeBook(this._result.items)
            // }
            // console.log(count);

            // создание карточки книги
            let bookNew = `
            <div class="card-book" id='${idBook}' attr = "${flagButton === true ? "buy" : "not-buy"}">
                <div class="card-book__img" style="background-image:url(${image ? image : this.placeholder});"></div>
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
        this.initButtonBuy();
    }
    //навешивание обработчика на кнопку купить в карточке книги
    initButtonBuy() {
        this._buttons = document.querySelectorAll(".card-book__box-button");
        this._buttons.forEach((element) => {
            element.addEventListener("click", () => {
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
            this._slider = `<div class="advertising__slider-image n${index} ${index === 0 ? "active" : ""}" style = 'background-image:url(${
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
/* harmony import */ var _src_WriteContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/WriteContent */ "./src/WriteContent.js");




})();

/******/ })()
;
//# sourceMappingURL=main.js.map