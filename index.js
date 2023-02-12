// First Challenge 

// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

// if statement to explain to JS
// what the result could be

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Woohoo! You've got Blackjack! 🥳")
} else if (sum > 21) {
    console.log("You're out of the game! 😭")
}

// if (sum > 21), you don't need this 
// you can run the code and still get
// the same response because all other
// results have been satisfied


// Challenge 2

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 23

if (age < 21) {
    console.log("You can not enter the club!")
} else {
    console.log("Welcome!") // because they can either be "21" or not.
}

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"