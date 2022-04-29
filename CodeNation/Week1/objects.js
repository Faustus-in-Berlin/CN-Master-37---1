// An OBJECT is a data type used to store various keyed collections (or properties) and more complex entities. Think of an objact as a container where data and functions can be stored. KEY-VALUE pairs are used to store the data


const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot chocolate"
    ]
};
// const cafe : A variable "cafe" is created    
// = {} : {} determines that this is actually an OBJECT rather than a variable (or an array)
// "name", "seatingCapacity", "hasSpecialOffers" & "drinks" are all KEYS
// key: value - Keys and their values are seperated by a colon


const person = {
    name: "Thoams Mann",
    age: 80,
    isAuthor: true,
    children: [
        "Erika",
        "Klaus",
        "Golo",
        "Monika",
        "Elisabeth",
        "Michael"
    ]
};
// Values can be any data type, even arrays or functions 


cafe.name
person.name
console.log(cafe.name);
console.log(person.name);
console.log(`The youngest child of ${person.name} was called ${person.children[5]}.`);
// Accessing the data in an object with dot notation - object.property


cafe["drinks"];
person["isAuthor"];
console.log(cafe["drinks"]);
console.log(person["isAuthor"]);
console.log(`${person["name"]} lived to be ${person["age"]} years old.`);
// Accessing the data in an object with bracket notation - object["property"]


// Brackets allow us to use variables to select the keys of an object. Objects are mutable ... and so, once created, can be changed 

person.novels = ["Buddenbrooks", "The Magic Mountain", "Doctor Faustus"];
// New keys : values can be passed into an object 


person["isAuthor"] = "false";
// Values can be updated or replaced in an object


let offer = "none";
let time = 1200;

const cafeDeux = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot chocolate"
    ],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry, no offer",
};

if (time < 1100) {
    offer = cafeDeux.breakfastOffer;
    console.log(cafeDeux.breakfastOffer);
}
else if (time < 1500) {
    offer = cafeDeux.lunchOffer;
    console.log(cafeDeux.lunchOffer);
}
// If our fictitious cafe were to have different special offers based on the time of day, those offers could all be put in an object with different offers being selected at different times


// +++++++++
// ACTIVITY:
// +++++++++
// Let’s create an alarm. Create a key called weekendAlarm, with a value saying “no alarm needed” and a key called weekdayAlarm, with a value saying “get up at 7am”. Create a variable called day and one called alarm. If day is Saturday or Sunday, set alarm to weekendAlarm. If day is a weekday, set alarm to weekdayAlarm.

let day = "Sunday"; 
let alarm;

const alarmCall = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
};

if (day == "Saturday" || day == "Sunday" ) {
    alarm = alarmCall.weekendAlarm
    console.log(alarmCall.weekendAlarm);
}
else {
    alarm = alarmCall.weekdayAlarm
    console.log(alarmCall.weekdayAlarm)
}


person.favouriteComposers = ["Wagner", "Beethoven", "Mozart", "Schubert", "Mendelsson"];

console.log(person.favouriteComposers);


// openCafe: () => {
//         return "Come on in";
// },
// closeCafe: () => {
//     return "We are closed, come back tomorrow!"
// }
// Since ES6, it's easier to declare functions in objects: THE COLON & THE ARROW SYNTAX ARE NO LONGER REQUIRED

// openCafe() {
//         return "Come on in";
// },
// closeCafe() {
//     return "We are closed, come back tomorrow!"
// }


// offer = "none";
// time = 1200;

// cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry, no offer!",
//         openCafe() {
//             if (hasSpecialOffers) {
//                 return "Time for a special offer!";
//             }
//         },
//     closeCafe() {
//         return "We are closed, come back tomorrow!";
//     }
// };
// A function can operate on data within an object, but, here, the "hasSpecialOffers" key or property is outside of the scope of the "openCafe" function. In order for the code to run succesfully, "openCafe" needs to be told where "hasSpecialOffers" actually is, it needs to be given a keyword: "this" (ie this.cuttentObject)

offer = "none";
time = 1200;

cafeTrois = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: ["Cappuccino", 
            "Latte", 
            "Filter coffee", 
            "Tea", 
            "Hot chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry, no offer!",
        openCafe() {
            if (this.hasSpecialOffers) {
                return "Time for a special offer!";
            }
        },
    closeCafe() {
        return "We are closed, come back tomorrow!";
    }
};

console.log(cafeTrois.openCafe());
// Accessing this.hasSpecialOffers inside the object is THE SAME as cafe.hasSpecialOffers outside of it


// +++++++++++
// ACTIVITY 1:
// +++++++++++
// Let’s edit our person object to include… A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”.

const samePerson = {
    name: "Thoams Mann",
    age: 80,
    isAuthor: true,
    children: ["Erika", 
              "Klaus", 
              "Golo", 
              "Monika", 
              "Elisabeth", 
              "Michael"],
    novels : ["Buddenbrooks", 
             "The Magic Mountain", 
             "Doctor Faustus"],
    favouriteComposers : ["Wagner", 
                         "Beethoven", 
                         "Mozart", 
                         "Schubert", 
                         "Mendelsson"],
        sayHi () {
            console.log(`Hello, my name is ${this.name}.`);
        }
};

samePerson.sayHi();


// +++++++++++
// ACTIVITY 2:
// +++++++++++
// Create an object called pet with the key values of: name, typeOfPet, age, colour and methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking. 

const pet = {
    name: "Mephisto",
    typeOfPet: "dog",
    age: 30,
    colour: "jet black",
    eat() {
        console.log(`${this.name} is eating.`);
    },
    drink() {
        console.log(`${this.name} is drinking.`);
    }
};

pet.eat();

pet.drink();


// +++++++++++
// ACTIVITY 3:
// +++++++++++
// Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices and methods called drinksOrdered and foodOrdered. They should return a string saying [Your order] is … with all items chosen with costs and total costs.

let coffeeShop = {
    branch: "Spite Store",
    drinks: [
        ["espresso", 1.50],
        ["latte", 2.70],
        ["flat White", 2.20]
    ],
    food:[
        ["scone", 1.50],
        ["bagel", 2.00],
        ["Sausage Muffin", 3.00]
    ], 

    total: 0,
    drinksOrdered: function (...items) {
        let drinkTotal=0;
        let validDrinks=[]
        if (items.length<1) {
            return 'please select a drink'
        }
        for (let i=0; i<items.length; i++) {
            for (let j=0; j<this.drinks.length; j++) {
                if (items[i] == this.drinks[j][0]){
                    this.total += this.drinks[j][1];
                    drinkTotal += this.drinks[j][1];
                    validDrinks.push(this.drinks[j][0])
                }
            }
        }
        if (validDrinks.length<1) {
            return 'please select a drink from the menu'
        }
        return `Here is your drink order: ${validDrinks.join(', ')} Drinks cost: £${drinkTotal.toFixed(2)}`
    },
    foodOrdered: function (...items) {
        let foodTotal=0;
        let validFood=[]
        if (items.length<1) {
            return 'please select some food'
        }
        for (let i=0; i<items.length; i++) {
            for (let j=0; j<this.food.length; j++) {
                if (items[i] == this.food[j][0]){
                    this.total += this.food[j][1];
                    foodTotal += this.food[j][1];
                    validFood.push(this.food[j][0])
                }
            }
        }
        if (validFood.length<1) {
            return 'please select a food from the menu'
        }
        return `Here is your food order: ${validFood.join(', ')} Food cost: £${foodTotal.toFixed(2)}`
    },
    getBill: function() {
        return `Total bill : £${this.total.toFixed(2)}`
}}

console.log(coffeeShop.drinksOrdered("Espresso", "latte"))
console.log(coffeeShop.foodOrdered("scone", "bagel"))
