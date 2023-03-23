import RequestApi from "./RequestApi";

class WriteContent extends RequestApi {
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
