let weather = "sunny";

if (weather == "sunny") {
    console.log("Well, I'd better better put on some sunscreen");
} 
else if (weather == "rain") {
    console.log("I'd better take an umbrella");
} 
else {
    console.log("Hmmm, it could go either way!");
}
// Example of an If Else statement: the first condition is met and so the first string is returned 


// Basic structure of IF ELSE statement:
// if (this condition is met) {
//     do this thing
// }
// else if (this differentCondition is met) {
//     do this other thing
// }
// else {
//     as none of the above conditions have been met, do this thing
// } 


// COMPARISON OPERATORS
// == Equal (checks if values are equal REGARDLESS of type)
// === Strict Equal (checks if values AND type are equal)
// != Not Equal (checks if values are not equal REGARDLESS of type)
// !== Strict Not Equal (checks if values and type are not equal)
// >= Greater than or equal to
// > Greater than
// <= Less than or equal to
// < Less than
// % divisible by


if (1 === "1") {
    console.log(true);
}
else {
    console.log(false);
}
// Evaluates if value AND type are equal and, as data types are not equal, returns "false"


if (1 != "1") {
    console.log(true);
}
else {
    console.log(false);
}
// Evaluates if values are not equal (regardless of type) and, since data types are not considered and values are equal, returns "false"


let place = "Manc";
let weatherNow = "Cloudy";

if (place == "Manc" && weatherNow == "Sunny") {
    console.log("Check again");
}
else if (place == "Manc" && weatherNow == "Rain") {
    console.log("Obvs");
}
else {
    console.log("What ... it isn't raining?");
}
// As only one of the set two conditions in each of the first two if/else if statements are met, the string from the third and final statement is returned


// LOGICAL OPERATORS:
// && = both conditions have to be met in order for the code to run
// || = either condition can be met for the code to run


let day = "Saturday";

if (day == "Saturday" || day == "Sunday") {
    console.log("It's the weekend!");
}
else {
    console.log("When's the weekend?");
}
// One of the two conditions is met in this if statement and so the first string is returned


let car = "Peugeot";

if (car == "Ford" || car == "GM") {
    console.log("You've got an American car!");
}
else if (car == "Peugeot" || car == "Citroen") {
    console.log("You've got a voiture francaise!");
}
else if (car == "Honda" || car == "Toyota" || car == "Nissan") {
    console.log("You've got a Japanese car!");
}
else if (car == "BMW") {
    console.log("Du hast ein deutches Auto!");
}
else if (car == "VW" ) {
    console.log("Du hast ein zuverlaessiges deutsches Auto!");
}
else if (car == "Hyundai" || car == "Kia") {
    console.log("You've got a South Korean car!");
}
else {
    console.log("I never heard of that car manufacturer!");
}
// If if else statements drank Heineken ...


let carModel = "VW"

switch (carModel) {
    case "Ford":
    case "GM":
        console.log("You've got an American car!"); 
        break;
    case "Peugeot":
    case "Citroen":
        console.log("You've got a voiture francaise!");
        break;
    case "Honda":
    case "Toyota":
    case "Nissan":
        console.log("You've got a Japanese car!");
        break;
    case "BMW":
        console.log("Du hast ein deutches Auto!");
        break;
    case "VW":
        console.log("Du hast ein zuverlaessiges deutsches Auto!");
        break;
    case "Hyundai": 
    case "Kia":
        console.log("You've got a South Korean car!");
        break;
    default:
        console.log("I've never even heard of that car manufacturer!");
}
// if else simplified with the power of SWITCH


// Basic structure of a SWITCH statement
// switch (expressionToBeEvaluated) {
//     case x:
//         "your code here"
//         break;
//     case y:
//         "your code here"
//         break;
//     default: 
//         "your code here"
// } 


const grade = 87;

switch (true) {
    case grade >= 70:   
        console.log("Distinction");
        break;  
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:   
        console.log("Pass");
        break;
    default:
        console.log("Failed");    
}
// First case is evaluated as true and so "Distinction" is returned


// +++++++++++
// ACTIVITY 1:
// +++++++++++
// Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”.

let age = 25;

if (age > 17) {
    console.log("Yes, I can serve you.");
}
else {
    console.log("Sorry, you aren't old enough.");
}


// ++++++++
// STRETCH:
// ++++++++
// Take your if statement and add a variable called country in. Eg. if age > 17 and country == “UK”.
let country = "Germany";

if (age > 17 && country != "USA") {
    console.log("Luckily for you, this isn't the USA, so I can serve you!");
}
else {
    console.log("Sorry, you aren't old enough.");
}


// +++++++++++
// ACTIVITY 2:
// +++++++++++
// Create a variable for any pizza topping. Create a switch statement, if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log to the console “I don’t mind having ${topping} on my pizza. Finally, for any topping you don’t like log “${topping} should not be on a pizza.” 

let topping = "garlic";

switch (topping) {
    case "soppressata":
    case "pepperoni":
        console.log("That's an important ingredient on any pizza of mine.");
        break;
    case "green pepper":
    case "basil":
        console.log("I don't mind having that topping on a pizza");
        break;
    default: 
        console.log("That topping shouldn't be anywhere near a pizza!");
}


// +++++++++++
// ACTIVITY 3:
// +++++++++++
// Create a variable called password. Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.

let password = "Antartica";

if (password.length <= 8) {
    console.log("This password is too short");
}
else {
    console.log(password);
}


// +++++++++++
// ACTIVITY 4: 
// +++++++++++
// Create a variable called num. Check if the variable is divisible by 3 or 5. If it is, log “This number is divisible by 3 or 5”. Otherwise log something else.

let num = 101;

if (num % 3 === 0 || num % 5 === 0) {
    console.log("This number is divisible by 3 or 5");
} 
else {
    console.log("This number isn't divisible by 3 or 5");
}


// +++++++++++
// ACTIVITY 5: 
// +++++++++++
// Create a variable called num. If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.

num = 17;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizz buzz");
}
else if (num % 3 === 0) {
    console.log("fizz");
} 
else if (num % 5 === 0) {
    console.log("buzz");
} 
else {
    console.log(num);
}


// +++++++++++
// ACTIVITY 6: 
// +++++++++++
// Create a variable called num. Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).

num = 1991;

if (num == num.toString().split("").reverse().join("")) {
    console.log(`${num} is a palindrome`);
}
else {
    console.log(`${num} isn't a palindrome`);
}


// +++++++++++
// ACTIVITY 7:
// +++++++++++
// Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

let time = 8;
let placeOfWork = "Mephisto Inc.";
let townOfHome = "Berlin";

if (time <= 7 || time >= 21) {
    console.log(`I'm relaxing at home right now in ${townOfHome}.`);
}
else if (time < 9) {
    console.log(`I'm currently on my daily commute from ${townOfHome} to ${placeOfWork}.`);
}
else {
    console.log(`I'm hard at work at ${placeOfWork}`);
}


// +++++++++++
// ACTIVITY 8:
// +++++++++++ 
// Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.

let endlessString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowels = "aeiou";
let indexOfVowels = [
    endlessString.lastIndexOf("a"), 
    endlessString.lastIndexOf("e"), 
    endlessString.lastIndexOf("i"), 
    endlessString.lastIndexOf("o"), 
    endlessString.lastIndexOf("u")
];
let lastVowel = Math.max(...indexOfVowels);

console.log(lastVowel);

// +++++++++++
// ACTIVITY 9:
// +++++++++++
// Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false. 

let word = "disenfranchised";

if (word[0] === word[word.length - 1]) {
    console.log(true);
}
else {
    console.log(false);
}

// ++++++++++++
// ACTIVITY 10: 
// ++++++++++++
// Create two variables called num1 and num2. Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.

let num1 = 6;
let num2 = 25;

if ((num1 + num2) % 2 == 0) { 
    console.log(num1 + num2);
}
else {
    console.log(num1 * num2);
}