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
                }&printType=books&startIndex=${this._start}&maxResults=6&langRestrict=ru`
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

export default RequestApi;

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
