let firstCard = 7
let secondCard = 8
let sum = firstCard + secondCard

// Now we need a way for JS to keep track of the
// game. Did the player score BlackJack or not?
// So, here's what we do:

let hasBlackJack = false
let isAlive = true
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl

let messageEl = document.getElementById("message-el")

// 2. Store the sum paragraph in a variable called sumEl

let sumEl = document.getElementById("sum-el")

// Now let's learn about the "Query Selector"

// let sumEl = document.querySelector("#sum-el") 
// With this method, we have to specify the element
// by identifying its selector, in this case using the 
// "#"

// 2. Store the cards paragraph in a variable called cardsEl

let cardsEl = document.getElementById("cards-el")

// Create the startGame() function

function startGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    
    // 3. Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        // now here, we need to reassign the 
        // hasBlackJack variable because in this
        // instance, the player does have it.
        // So, we do this:
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

     // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}



// First Challenge 

// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard

// if statement to explain to JS
// what the result could be

// if (sum < 21) {
    // console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
    // console.log("Woohoo! You've got Blackjack! 🥳")
// } else if (sum > 21) {
    // console.log("You're out of the game! 😭")
// }

// if (sum > 21), you don't need this 
// you can run the code and still get
// the same response because all other
// results have been satisfied


// Challenge 2

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 20

// if (age < 21) {
   // console.log("You can not enter the club!")
// } else {
    // console.log("Welcome!") // because they can either be "21" or not.
// }

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"



// Challenge 3

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

// if (age <= 99) {
    // console.log("Not eligible!")
// } else if (age === 100) {
    // console.log("Here is your birthday card from the KING!")
// } else {
    // console.log("Not eligible, you've already gotten one!")
// }



// Challenge 4 

// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard
// let hasBlackJack = false

// 1. Create a variable called isAlive and assign it to true

// let isAlive = true

// 2. Flip its value to false in the appropriate code block 

// if (sum <= 20) {
    // console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
    // console.log("Wohoo! You've got Blackjack! 🥳")
    // hasBlackJack = true
// } else {
   // console.log("You're out of the game! 😭")
   // isAlive = false
// }

// 3. Log it out to check that you're doing it right
// console.log(isAlive)


// Challenge 5 - True OR False?

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   // false



// Challenge 6


// let firstCard = 10
// let secondCard = 11
// let sum = firstCard + secondCard + 4
// let hasBlackJack = false
// let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string

// let message = "" // <-- this is an "empty string"

// 2. Reassign the message variable to the string we're logging out
// if (sum <= 20) {
    // console.log("Do you want to draw a new card? 🙂")
    // message = "Do you want to draw a new card? 🙂"
// } else if (sum === 21) {
    // console.log("Wohoo! You've got Blackjack! 🥳")
    // message = "Wohoo! You've got Blackjack! 🥳"
    // hasBlackJack = true
// } else {
    // console.log("You're out of the game! 😭")
    // message = "You're out of the game! 😭"
    // isAlive = false
// }

// 3. Log it out!
// console.log(message)

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Woohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

// if (sum <= 20) {
    // console.log("Do you want to draw a new card? 🙂")
// } else if (sum === 21) {
    // console.log("WOOHOO! YOU'VE GOT BLACKJACK!!! 🥳")
        // now here, we need to reassign the 
        // hasBlackJack variable because in this
        // instance, the player does have it.
        // So, we do this:
    // hasBlackJack = true
// } else {
    // console.log("You're out of the game, buddy! 😭")
    // isAlive = false
// }


// CASH OUT!
// console.log(hasBlackJack)

// Now we have an app that keeps sense, keeps a
// record of the data in a sensible way....