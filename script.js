class card{
    constructor(element, value, svgImage, suit){
        this.element = element;
        this.value = value;
        this.svgImage = svgImage;
        this.suit = suit;
    }

    displayCard (){

    }
}

const cardElement = document.querySelector(".content");

const card1Element = document.createElement("div");
cardElement.appendChild(card1Element);