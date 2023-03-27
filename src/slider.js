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
