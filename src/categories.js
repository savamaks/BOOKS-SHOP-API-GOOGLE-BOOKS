class Categories {
    constructor() {
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

    initNavLink() {
        this._arrCategories.forEach((element, index) => {
            this._link = `<h2 class="block__nav-link n${index} ${index == 0 ? "active" : ""}" data-index=${index}>${element.name}</h2>`;
            this._navBox.innerHTML += this._link
        });
        this._links = document.querySelectorAll(".block__nav-link");
        this._links.forEach((link) => {
            link.addEventListener("click", () => {
                this.linkClick(link.dataset.index);
                if(+this._category !== +link.dataset.index ){
                    this._category = link.dataset.index
                    this._start = 0
                    this._bookBox.innerHTML = ''
                    this.startRequest()
                    
                }
            });
        });
    }
    linkClick(num) {
        this._navBox.querySelector(".active").classList.remove("active");
        this._navBox.querySelector(`.n${num}`).classList.add("active");
    }
}

export default Categories;



