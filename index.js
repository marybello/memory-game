document.addEventListener('DOMContentLoaded', () => { 
// card options
const cardArrays = [
{
    name: "chicken",
    img: "images/food1.jpg"
},
{
    name: "chicken",
    img: "images/food1.jpg"
},
{
    name: "sausage",
    img: "images/food2.jpg"
},
{
    name: "sausage",
    img: "images/food2.jpg"
},
{
    name: "ice-cream",
    img: "images/food3.jpg"
},
{
    name: "ice-cream",
    img: "images/food3.jpg"
},
{
    name: "shawarma",
    img: "images/food4.jpg"
},
{
    name: "shawarma",
    img: "images/food4.jpg"
},
{
    name: "burger",
    img: "images/food5.jpg"
},
{
    name: "burger",
    img: "images/food5.jpg"
},
{
    name: "fries",
    img: "images/food6.jpg"
},
{
    name: "fries",
    img: "images/food6.jpg"
}
]

cardArrays.sort(() => 0.5 - Math.random() )

const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector("#Result")
var cardsChosen = []
var cardsChosenId= []

var cardsWon = []
// create your board
function createBoard(){
    for(let i = 0; i < cardArrays.length; i++){
        var card = document.createElement("img")
        card.setAttribute("src", "images/card.jpg")
        card.setAttribute("data-id", i)
       card.addEventListener("click", flipCard)
       grid.appendChild(card)
    }
}
//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        alert ("you found a match")
        cards[optionOneId].setAttribute("src", "images/plaincard.jpg")
        cards[optionTwoId].setAttribute("src", "images/plaincard.jpg")
        cardsWon.push(cardsChosen)

    } 
    else{
        cards[optionOneId].setAttribute("src", "images/card.jpg")
        cards[optionTwoId].setAttribute("src", "images/card.jpg")
        alert("sorry, try again")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length == cardArrays.length/2){
       resultDisplay.textContent = "congratulations, you found them all"
    }
}
// flip your card
function flipCard() {
    var cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArrays[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute("src", cardArrays[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}


createBoard()

} )