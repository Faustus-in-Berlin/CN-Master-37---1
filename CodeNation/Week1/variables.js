// VARIABLES = temporary storage locations for data
// (written in camelCase : eg myName / customerAge / accountNumber / drinksOrder)


// DECLARING a variable (creating a variable for use): 
// let : declares a changable value
// const : decalres a non-changable value 
// var : NOW LEGACY, but would decalre a changable value


// ARITHMETIC OPERATORS (for calculations)
// +, -, *, **, /, %, ++, -;
// & ASSIGNMENT OPERATORS (for storing values)
// =, *=, +=, /=, -=, ++, -- 


// DATA : VALUE TYPES or PRIMITIVES (as opposed to REFERENCE TYPES (Objects, Functions, Arrays)
// NB - Primitives are directly assigned to memory and so are NOT a resource! 
// String : const myName = "John Doe";
// Number : let myAge = 18; / const pie = 3.14;
// Boolean : let isCold = true; / let isOpen = false; 
// Undefined : const y = undefined; or let z;
// Null : let z = null
// Symbol : const symbol1 = Symbol() / const symbol2 = Symbol() 


let i = 10; 
// Declares variable "i" and initializes it with a value of 10

console.log(i);
// Returns the data stored within the variable "i"


i = i + 2;
// Adds 2 to the initial(ized) value of the variable "i" and stores the result in that variable (ARITHMETIC OPERATOR)

i += 2;
// Compund ASSIGNMENT OPERATOR performs the same task more succinctly

console.log(i);
// Returns the new, updated value of i (the sum of i + 2)


let favouriteDrink = "coffee"; 
// Assigns the variable favouriteDrink to the specified string  

console.log(favouriteDrink);
// Returns the value stored inside the variable (coffee)


console.log("My favourite drink is " + favouriteDrink);
// Returns the "quoted string" and(+) the value (contents) of the favouriteDrink variable (This process of linking groups of things together is called CONCATENATION)


let firstName = "Chris";
let age = 27;
let drinkOfChoice = "coffee";
// Variables declared and assigned various values

console.log("Hi, my name is " +firstName + ". I am " +age + " and my favourite drink is " +drinkOfChoice + ".");
// Multiple concatenation can quickly become unduly cumbersome (not to mention unsightly) 

console.log(`Hi, my name is ${firstName}. I am ${age} and my favourite drink is ${drinkOfChoice}.`);
// But TEMPLATE LITERALS or placemats - ${nameOfVariable} - make the process much more streamlined. (NOTE the use of backticks instead of quotation marks at the beginning and at the end of the data)


firstName = "Solveig";
age = 35;
drinkOfChoice = "mineral water";
// When let is used to declare a variable, that variable can subsequently be UPDATED! 

console.log(`Hi, my name is ${firstName}. I am ${age} and my favourite drink is ${drinkOfChoice}.`);
// String is returned with the newly updated variable(s) data  


// +++++++++++
// ACTIVITY 1:
// +++++++++++ 
// Create a program that stores someone’s name, age and favourite colour and log it to the console in a complete sentence using Template Literals.

let activityName = "Gretchen";
let activityAge = 18;
let favouriteColour = "white";

console.log(`Hello, I am ${activityName}. I am ${activityAge} years of age and my favourite colour is ${favouriteColour}.`);


// ++++++++
// STRETCH: 
// ++++++++
// Update all of your variables and write out a new sentence underneath your original.

activityName = "Faust";
activityAge = 65;
favouriteColour = "black";

console.log(`Hello, my name is ${activityName}. I am ${activityAge} years old and the colour of my soul is ${favouriteColour}!`);


// +++++++++++
// ACTIVITY 2: 
// +++++++++++
// Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console. 

let day = "Today";
let breakfast = "muesli";
let lunch = "yogurt";
let dinner = "pasta";

console.log(`${day} I am having ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);


// ++++++++
// STRETCH: 
// ++++++++
// Update each of these variables to what you will eat tomorrow. Log these to the console.

day = "Tomorrow";
breakfast = "cereal";
lunch = "pineapple";
dinner = "paella";

console.log(`${day} I will be having ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`);


// +++++++++++
// ACTIVITY 3: 
// +++++++++++
// Create a program that calculates the number of days from today to your birth date.

let oneDay = 1000*60*60*24;
let today = new Date("2022, 04, 12");
let birthDate = new Date("2022, 12, 23");
let remainingDays = ((birthDate - today) / oneDay);

console.log(Math.floor(remainingDays));


// +++++++++++
// ACTIVITY 4: 
// +++++++++++
// Create 9 variables: space1, space2… space9. Assign either the value ‘x’,’o’,’ ‘, to each of these variables. Insert the variables into your board using the ${varName} syntax and make it look like the displayed board.

let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x"; 
let space6 = " "; 
let space7 = "o"; 
let space8 = " ";
let space9 = " ";

let grid = `  
   |   |   
 ${space1} | ${space2} | ${space3} 
   |   |   
-----------
   |   |   
 ${space4} | ${space5} | ${space6} 
   |   |   
-----------  
   |   |   
 ${space7} | ${space8} | ${space9} 
   |   |   
`
console.log(grid);