class Basket{
    constructor(){
        
    }
    initButtonBuy(){
        this._buttons = document.querySelectorAll('.card-book__box-button')
        this._buttons.forEach((element)=>{
            element.addEventListener('click',()=>{
                console.log('ok');
            })
        })
    }
}

