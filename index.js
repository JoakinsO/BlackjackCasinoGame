
let player = {
    name: "Jojo",
    chips: 100
}
let cards = [];
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
// let startBtn = document.getElementById("start-btn")
// let sumEl = document.querySelector("#sum-el")

playerEl.textContent = player.name + ": $" + player.chips;
// playerEl.textContent += player.chips;


function getRandomCard() {
    cardNumber = Math.floor(Math.random() * 13) + 1
    if (cardNumber === 1) {
        return 11
    } else if (cardNumber > 10) {
        // else if (cardNumber >= 11 && cardNumber <= 13)
        return 10
    } else {
        return cardNumber
    }
    // console.log(cardNumber)
    
}
// getRandomCard()

// }
let firstCard = getRandomCard();
let secondCard = getRandomCard();

function startGame() {
    isAlive = true
    
    if (cards.length <= 1) {
        cards.push(firstCard, secondCard)
        sum = firstCard + secondCard
        renderGame()
    } else if (cards.length >= 1) {
        cards = []
        firstCard = getRandomCard();
        secondCard = getRandomCard();
        cards.push(firstCard, secondCard)
        sum = firstCard + secondCard
        renderGame()
    }
}


// }



function renderGame() {
    // console.log("Game Started!")
    cardsEl.textContent = "Cards: "

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    // console.log(message)
    messageEl.textContent = message
}
// console.log(isAlive)


function newCard() {
    // console.log("Drawing a new card")
    if (isAlive === true && hasBlackJack != true) {
        let card = getRandomCard();
        sum += card
        cards.push(card)
        renderGame()
    }
    
}
