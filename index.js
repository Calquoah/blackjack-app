let firstCard = 7
let secondCard = 7

// Now we're going to create an "Array", or list of items, 
// to display all of the cards in the paragraph
// Also, take a peek at the bottom for a more
// in-depth look at what arrays are...

// To do that, do this: [] <-- this is the notation for an array

// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard]
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

// Now, since we have the startGame() in the 
// newCard (), it doesn't make sense to have it there
// so, it's best to:

// Create a new function called startGame() that calls renderGame()

function startGame() {
    renderGame()
}

function renderGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    
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

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard() {
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 4
    // 2. Add the new card to the sum variable
    sum += card
    // Push the card to the cards array
    cards.push(card)
    console.log(cards)
    // 3. Call startGame()
    renderGame()
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


// Intro to Arrays:
// Arrays - ordered lists of items

// let featuredPosts = [
    // "Check out my Netflix clone", 
    // "Here's the code for my project",
    // "I've just relaunched my portfolio"
// ]

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

// let experience = [
    // "Freelance Copyeditor", 
    // "Staff Writer", 
    // "English Second Language Teacher", 
    // "Assistant Language Teacher"
// ]

// Good to know, Arrays are "0 indexed", meaning
// that they start counting at 0. So the first
// item in your Array, or list, will be called 
// by labeling it with a 0.

// For example, if I want to call the "Freelance Copyeditor"
// from my Array, this is how I do it:

// console.log( experience[0] )

// Array Challenge:

// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba

// console.log( experience[1] )
// console.log( experience[2] )
// console.log( experience[0] )

// console.log( featuredPosts.length )

// The "length" property counts things normally 
// and so starts with 1. It is always one larger than 
// the final index...

// Second Array Challenge

// Array - ordered list of items - composite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

// let matt = [
//    "Matt Kogoy", 
//    33, 
//    true
// ]

// New Array Challenge

// let cards = [7, 4]
// cards.push(6)
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// SOLUTION:
// messages.push(newMessage)
// console.log(messages)

// Now, how do you remove a message
// from the array?

// CHALLENGE: // How can you remove the last item in an array? Try to google it!

// You would use the "pop()" property, as in:

// messages.pop()
// console.log(messages)


// Learning how to count in JavaScript

// // Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 1 )  {
    
//    console.log(count)

// }

// Now, modify the above loop so that it counts from 1 to 20
// Do that by doing this:

// for ( let count = 1; count < 21; count += 1 )

// Now, to count from 10 to 20, this is what you do:

// for ( let count = 10; count < 21; count += 1 )