let favouriteDrinks = [
    "Mineral Water", 
    "Fresh Orange Juice", 
    "Green Tea"]

console.log(favouriteDrinks[0]);
console.log(favouriteDrinks[1]);
console.log(favouriteDrinks[2]);
// Each of the three elements [inside of the array] are returned 


for (let i = 0; i < favouriteDrinks.length; i++) {
    console.log(favouriteDrinks[i]);
}
// A "for loop" achieves the same result only much more efficiently. Three parameters are passed in: 
// No. 1. (evaluated once before the loop begins) Loop iterator or variable "i" is initialized (assigned an initial or starting value of 0)
// No. 2. (evaluated before each loop iteration) Comparable condition (to be met) is set: for as long as the value of i is less than the length of the "favouriteDrinks" array keep executing the loop cycle
// No. 3. (evaluated at the end of each loop iteration and therefore BEFORE the next evaluation of the condition) Increment i variable by 1. 
// The for loop (process of iteration) will continue until the set condition is evaluated as no longer being true (ie when i actually is equal to the length of the favouriteDrinks array)


// Basic structure of a FOR LOOP statement (for loops run a finite or a limited number of times):
// for (initialExpression; condition; increment/decrementExpression) {
//     do stuff
// } 


let multiplesTwo = [];

for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
        multiplesTwo.push(i);
    } 
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);
// An empty array "multiplesTwo" is declared. Once more, three parameters are passed into a for loop: 1. Variable "i" is initialized (at 0) 2. Loop is conditioned to continue for as long as value is less than 20, and 3. variable is incremented by 1 after each loop cycle has been completed. An IF statement is incorporated into the for loop in order to evaluate, during the course of each loop, if each of the returned variable values give any remainder when divided by 2 (in other words whether those values are odd or even numbers). All even numbers less than 20 are "pushed" (added) into the previoulsy empty array and are then returned when the code is run


// Basic structure of a WHILE LOOP statement (runs while a condition is met ... or not): 
// while (condition) {
//     do stuff
// }


let age = 15;

while (age < 18) {
    console.log("You're a child!");
    age++;
}

console.log("You're an adult!");
// A "while loop" statement is different than a "for loop" in that the variable is set outside of the loop. A while loop returns specified data or a specified expression for as long as the set comparable condition evaluates to true (in this instance "You're a child" for as long as the value of the variable "age" is less than 18). Here, the condition having been met and the expression having been returned, the age variable is only then incremented by 1. When the set condition becomes false (when the age variable reaches 18) the loop ceases and the expression expressed after/outside of the loop, "You're an adult!", is returned


let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while (currentCard != "Spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard);
// The while loop evaluates the set comparable condition, that if the "currentCard" variable does not equal "Spade" return its value (which it does ("Club")). It then randomly extracts (selects) the new value of that variable through use of [bracket notation] and through the random integers generated by the appended .floor(.random() methods, those random integers (0-3) being the index positions of the multiple elements stored within the "cards" array, to which the "current card" variable is equal. The loop ends when the set condition is no longer true (so when the index position of "Spade" (1) is randomly generated)


// +++++++++++
// ACTIVITY 1: 
// +++++++++++ 
// Create an array that lists your favourite films, up to 5 elements. Add 2 more using a method. Use a loop to cycle through the array.

let someMovies = [
    "Solaris", 
    "Barry Lyndon", 
    "The Cabinet of Dr. Caligari", 
    "Brazil", 
    "The Enigma of Kasper Hauser"
]

someMovies.push("The Passion of Joan of Arc", "Memento");

for (let i = 0; i < someMovies.length; i++) {
    console.log(someMovies[i]);
}


// +++++++++++
// ACTIVITY 2: 
// +++++++++++
// Generate 6 random numbers between 1-50 and log them to the console.

let randomNumbers = [];

for (let i = 0; i <= 5; i++) {
    randomNumbers.push(Math.floor(Math.random()*50)+1);
}

console.log(randomNumbers);


// +++++++++++
// ACTIVITY 3:
// +++++++++++
// If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.

for (let i = 9; i >= 0; i--) {
    console.log(i);
}


// +++++++++++
// ACTIVITY 4: 
// +++++++++++
// Displays 4 films stored in an array. Use a for loop to show each film in the array. Use an if statement to check if the 3rd film in the array is Ghostbusters. If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!"

let fourFilms = [
    "Metropolis", 
    "M", 
    "Destiny", 
    "Spies"]

for (let i = 0; i < fourFilms.length; i++)
    console.log(fourFilms[i]); {
        if (fourFilms[2] == "Ghostbusters") {
            console.log("Yay it's Ghostbusters!");
        }
        else {
            console.log("Boo! we want Ghostbusters!");
        } 
    }


// +++++++++++    
// ACTIVITY 5: 
// +++++++++++
// Generate a random number between 1 and 30 six times. For each random number generated, check if this number is divisible by 7 or not. Log out a message to the console if it is divisible by 7 or not.

let randomNumber = []

for (let i = 0; i <=5 ; i++) {
    let random = Math.floor(Math.random()*30); 
        if (random % 7 == 0) {
            console.log(random + " is divisible by 7"); 
        }
        else {
            console.log(random + " is not divisible by 7");
        }
}


// +++++++++++
// ACTIVITY 6: 
// +++++++++++
// Imagine you’re a programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays. > Using a nested loop iterate over both arrays and console.log out the matching follower.

let ludwigsFollowers = [
    "Schubert", 
    "Schumann", 
    "Brahms", 
    "Bruckner"
]
let richardsFollowers = [
    "Bruckner", 
    "Mahler", 
    "Strauss", 
    "Schoenberg"
]

for (let i = 0; i < ludwigsFollowers.length; i++) {
    for (let j = 0; j < richardsFollowers.length; j++)
        if (ludwigsFollowers[i] === richardsFollowers[j]) {
            console.log(ludwigsFollowers[i] + " follows both Beethoven and Wagner");
        }
}


// +++++++++++
// ACTIVITY 7: 
// +++++++++++
// Research on do...while loop, findout about the difference between for loop, while loop and do...while loop. Give an example of each. What are the pros and cons?

let activityArray = [
    "HTML", 
    "CSS", 
    "JS"
];

for (let i = 0; i < 3; i++) {
    console.log(activityArray[i]);
}


let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}


i = 1;
do {
    console.log((i) + " is not greater than 5.");
    i++;
} while (i <= 5)


// Initialization, condition and iteration statements all come at the beginning of a "for" loop, wheras in a "while" loop only initialization and condition statements come at the beginning. A "for" loop is used only when the number of iterations is known beforehand, a "while" loop only when the number of iterations isn't known. If the condition is not mentioned in a "for" loop, the loop iterates an infinite number of times. Initialization of a "for loop" happens only once and is never repeated. If initialization is done when the condition is being evaluated in a "while" loop, then initialization occurs every time the loop is iterated through. As already noted, the iteration statement is placed (third) at the beginning of a "for loop", meaning that it executes once all statements in the loop have been executed, in a "while" loop, the iteration statement can be entered at any point inside of the loop.

// In a "while" loop (a so-called "entry-controlled" loop), the controlling condition appears at the beginning of the loop, in a "do...while" loop (an "exit-controlled" loop), the condition comes at the loop's end. In the case of a "while" loop, the iterations do not occur if the condition at the first iteration is evaluated as being false, but in a "do...while" loop the condition is executed at least once even if the condition is evaluated as being false during the first iteration.