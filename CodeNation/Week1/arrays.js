let drinksOrder = [
    "Alkan - Coffee",
    "Bartok - Tea",
    "Chopin - Water"
]
// An ARRAY (OBJECT) is a data structure used to represent a list of [multiple items or elements]  

console.log(drinksOrder)
// Returns [the three items] contained within the array


console.log(drinksOrder[2]);
// Returns the element/item at [index position 2] of this array (Chopin - Water) 


drinksOrder[1] = "Berlioz - Wine";

console.log(drinksOrder)
// The element at [index 1] is replaced and the updated version of this array is returned


console.log(drinksOrder.length);
// Returns the number of elements in this array (3)


drinksOrder.push("Debussy - Beer", "Enescu - Schnapps");

console.log(drinksOrder);
// (Two) further items are added at the end of this array


drinksOrder.pop();

console.log(drinksOrder);
// The last item in this array is removed


// Other METHODS to use in arrays include: 
// .map(), .shift(), .unshift(), .splice(), .unsplice() - check out MDN


// +++++++++++
// ACTIVITY 1: 
// +++++++++++
// Make an array of 3 of your favourite songs. 3 of them. Log them to the console.

let austroGermanSymphonies = [
    "Haydn 97",
    "Mozart 41",
    "Beethoven 3"
];

console.log(austroGermanSymphonies);


// ++++++++
// STRETCH: 
// ++++++++
// Can you add another two songs to the list using a method and then remove the last one added?

austroGermanSymphonies.push("Brahms 1", "Bruckner 9");

console.log(austroGermanSymphonies);


austroGermanSymphonies.pop();

console.log(austroGermanSymphonies);


// +++++++++++
// ACTIVITY 2: 
// +++++++++++
// Using MDN choose one of the following methods: map(), shift(), unshift(), splice(), unsplice(). Create a program to demonstrate the use of the method. (Note: Not all methods would permanently update/make changes to the arrays themselves.

let GermanLanguageAuthors = [
    "J. W. von Goethe", 
    "Thoman Mann", 
    "Franz Kafka"
]

console.log(GermanLanguageAuthors);


GermanLanguageAuthors.unshift("Hermann Hesse", "Max Frisch");

console.log(GermanLanguageAuthors);
