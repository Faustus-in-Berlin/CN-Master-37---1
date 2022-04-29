// FUNCTIONS = Sets of statements that perform tasks or calculate values, taking some input and returning an output where there is some obvious relationship between the input and the output


const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}
// const pressGrindBeans : function declared with variable (declared with const, so value can not be changed)
// = : assignment operator
// () : parameter(s) of the function 
// => : arrow function syntax 
// {} : body of the function where statements defining function are added 

pressGrindBeans();
// Calling the function performs the specified actions with the indicated perameters
// REMEMBER : Methods HAVE parenthesis() 
// ALSO REMEMBER : ALL methods are functions, but NOT ALL functions are methods!


let coffeeIsGrinding = false;

const pressGrindBeansAgain = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } 
    else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeansAgain();
// An if else statement can be incorporated into the body of a function


// Parameters give functions flexibility giving them the ability to act based on data inputs


const cashWithdrawal = (amount, accNum) => {
    console.log(`Withdrawing ${amount} from account ${accNum}`);
}

cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);
// The parameters of the cashWithdrawal function (amont & accNum) are essentially variables that receive their values from or, more accurately, have their values passed to them by the arguments (values input inside the parentheses) to the function, once the function is called


accNum = 50449921;

const nextCashWithdrawal = (amount, accNum) => {
    console.log(`Withdrawing ${amount} from account ${accNum}`);
}

nextCashWithdrawal(300, accNum);
// Global variables can be used in functions


const addUp = (num1, num2) => {
    return num1 + num2;
}

addUp(7,3);
// Input is taken and task is performed, BUT the return statement prevents the calculated result from being returned/displayed in the terminal 

console.log(addUp(2,5));
// Input taken, task performed and result returned/displayed in the terminal


const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
}

const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
}

console.log(`The temperature is ${getFahrenheit(15) + "°F"}`);
// A Function can call on another function to achieve its goal
// First function returns the value of celsius multiplied by 9/5. Second function takes the result of that calculation and adds 32 to it. Value of celcius is declared when we call the function, that argument being passed to the parameter of the fist function to begin the entire process.


// FUNCTION DECLARATAIONS & FUNCTION EXPRESSIONS

function square(number) {
    return number * number;
};

square(5);
// Declaration

const anotherSquare = function(number) {
    return number * number;
};

anotherSquare(5);
// Expression: Here we have the keyword "function", but, unlike in a Declaration, the function has no name - it is anonymous 

const oneLastSquare = (number) => {
    return number * number;
};

oneLastSquare(5);
// Arrow function Syntax


// +++++++++++
// ACTIVITY 1:
// +++++++++++
// Take this code and turn it into arrow function syntax:
// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     }
//     else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));


const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    }
    else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));


// +++++++++++
// ACTIVITY 2:
// +++++++++++
// Edit the below snippet to include two parameters and a running order count updated when the function is called:
// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");


let orderCount = 1;

const takeOrder = (type, topping, sideDish) => {
    console.log(`${orderCount}. ${type} with ${topping} and ${sideDish}.`);
    orderCount++
}

takeOrder("Neapolitan", "pineapple", "bruschetta");
takeOrder("Sicilian", "pepperoni", "salad");
takeOrder("Greek", "chicken", "garlic bread", )

// +++++++++++
// ACTIVITY 3: 
// +++++++++++
// Create a cash machine that dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw

let pinNumber = 246810;
let balance = 1000;

const withdrawal = (pin, amount) => {
    if (pin == pinNumber && amount <= balance) {
        balance = balance - amount;
        console.log(`Your cash is being counted and will be dispensed shortly. You have withdrawn ${amount}. Your balance is ${balance}.`);
    }
    else if (pin != pinNumber) {
        console.log("The PIN number you have entered is incorrect. Please try again.");
    }
    else if (amount > balance) {
        console.log("You have insuffient funds in your account.");
    }
}

withdrawal(246812, 1000);

withdrawal(246810, 1000);

withdrawal(246810, 1);