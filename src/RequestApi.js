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
