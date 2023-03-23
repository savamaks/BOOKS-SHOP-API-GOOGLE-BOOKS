import Categories from "./categories";

class RequestApi extends Categories {
    constructor() {
        super();
        this._buttonRequest = document.querySelector(".button-load");
        this._keyAPI = "AIzaSyCbJN6vx_NxrCKGjsVCVX7EjRLgzo1zKo4";
        this._bookBox = document.querySelector(".block__box");
        this._start = 0;
        this._basket = document.querySelector(".header__box-count-product");
        this._amountProduct = localStorage.length;
        this.placeholder='../image/image/book-placeholder.jpg'
    }

    start() {
        this.initNavLink();
        this.initHandler();
        this.startRequest();
        this.basket();

        
    }
    async startRequest() {
       
        this._result = await this.request();

        this.writeBook(this._result.items);
    }

    request() {
        // console.log(this._category);
        // console.log(this._arrCategories[this._category].url)
        // console.log(`https://www.googleapis.com/books/v1/volumes?q="subject:${this._arrCategories[this._category].url}"&key=${
        //     this._keyAPI
        // }&printType=books&startIndex=${this._start}&maxResults=6&langRestrict=ru`);
        return fetch(
            `https://www.googleapis.com/books/v1/volumes?q="subject:${this._arrCategories[this._category].url}"&key=${
                this._keyAPI
            }&printType=books&startIndex=${this._start}&maxResults=6&langRestrict=ru`
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
            this._start += 6;
            this._result = await this.request();

            this.writeBook(this._result.items);
            

        });
    }
     writeBook(arrBook) {
        // console.log(arrBook);
        let count = 0
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

            if (document.getElementById(idBook)) {
                
                return;
            }
            // count++
            // if(count<=6){
            //     let r = 6-count
            //     await this.request(r)
            //     this.writeBook(this._result.items)
            // }
            // console.log(count);
            let bookNew = `
            <div class="card-book" id='${idBook}' attr = "${flagButton === true ? "buy" : "not-buy"}">
                <div class="card-book__img" style="background-image:url(${image?image:this.placeholder});"></div>
                <div class="card-book__box">
                    <p class="card-book__box-autor">${autor ? autor : ""}</p>
                    <h2 class="card-book__box-title">${title}</h2>
                    <div class="card-book__box-raiting">
                        <div class="card-book__box-raiting--star">
                            <img src="../image/icons/Star.svg" alt="" />
                            <img src="../image/icons/Star.svg" alt="" />
                            <img src="../image/icons/Star.svg" alt="" />
                            <img src="../image/icons/Star.svg" alt="" />
                            <img src="../image/icons/Star.svg" alt="" />
                        </div>
                    <p class="card-book__box-raiting--text">252 review</p>
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
    initButtonBuy() {
        this._buttons = document.querySelectorAll(".card-book__box-button");
        this._buttons.forEach((element) => {
            element.addEventListener("click", () => {
                this.bookBuy(element);
            });
        });
    }
    bookBuy(el) {
        // console.log(el.parentElement.parentElement.id);
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
        // console.log(book);
    }
    basket() {
        this._amountProduct = localStorage.length;
        this._basket.innerHTML = this._amountProduct;
        if (this._amountProduct > 0) {
            this._basket.classList.add("active");
        } else {
            this._basket.classList.remove("active");
        }
    }

    localMemory(book, id) {
        // console.log(book.children[1].children[4].textContent);
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
const requestApi = new RequestApi();
document.addEventListener("DOMContentLoaded", requestApi.start());

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
