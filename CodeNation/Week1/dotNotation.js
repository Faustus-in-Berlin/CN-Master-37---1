// console.log(i);
// objectName.propertyName(data);


// DATA TYPES 
// String : text 
// Number : floating points(decimals) & integers(whole numbers)
// Boolean : true & false
// Undefined : data type exists but is not determined (a value has not yet been assigned)
// Null : literally nothing
// Symbol : used as a WHOLLY UNIQUE identifier of an object property when that property is private/not intended to be in plain sight


// ALL data has PROPERTIES or additional available data/information (eg .length) & METHODS (a method is a FUNCTION associated with an OBJECT) that allow manipulation of the data type (eg .toLowerCase(), .trim(), .toUpperCase())
// NB - Methods HAVE parenthesis(), properties DO NOT 


// Some essential TERMINAL COMMANDS
// cd = change directory
// ls = list all files in current directory
// mkdir = create new directory
// touch = create new file
// rm = remove/delete file


console.log("Hello World!");
// A METHOD and a FUNCTION** that logs (data value) in the console
// **NB - ALL methods are functions, but NOT ALL functions are methods!


console.log("hello world".toUpperCase());
// Two methods combined! Returns "data value" in uppercase


console.log("     Hello Cruel World     ".trim());
// Returns "data value" having removed whitespace from both sides/ends 


console.log("HELLO WORLD".toLowerCase());
// Returns "DATA VALUE" in lowercase


console.log("     hello crazy world     ".trim().toUpperCase());
// Three methods combined! Returns "data value" in uppercase having removed surrounding whitespace


console.log(Math.random());
// Returns a random generated float (or floating point number) from 0 (inclusive) up to but not including 1 (exclusive)


console.log(Math.random()*10);
// Returns a random generated float from 0 (inclusive) up to 10 (exclusive)


console.log(Math.random()*100);
// Returns a random generated float from 0 (inclusive) up to 100 (exclusive)


console.log(Math.floor(1001.87));
// Returns the largest integer (whole number) less than or equal to the (specified) number


console.log(Math.ceil(1250.0001));
// Returns the smallest integer greater than or equal to the (specified) number


console.log(Math.round(1650.49));
// Returns a number rounded (up OR down) to the nearest integer 


console.log(Math.floor(Math.random()*10));
// Three methods that return a random integer less than or equal to random generated number (in this instance between 0 and 9)


console.log(Math.ceil(Math.random()*10));
// Returns a random integer between 0 and 9


console.log(Math.round(Math.random()*10));
// Returns a random integer between 0 and 9


// +++++++++
// ACTIVITY: 
// +++++++++
// Log a grid to the console

console.log(`
   |   |   
   |   |   
   |   |   
-----------
   |   |   
   |   |   
   |   |   
-----------
   |   |   
   |   |   
   |   |   
`)


// ++++++++
// STRETCH: 
// ++++++++
// Log a grid using arrays & loops.

let grid = [
   "   |   |   ",
   "-----------"
]

for (let v = 0; v <= 2; v++) {
   for (let h = 0; h <= 2; h++) {
       console.log(grid[0]); 
   }
   if(v < 2) {
       console.log(grid[1]);
   }
}


console.log("All Around the World".charAt(7).toUpperCase());
// Returns 8th character (index 0-7) of "the string" in upper case