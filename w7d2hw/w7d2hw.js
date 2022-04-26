//===== Homework=====\\
//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i = 0; i < Object.keys(person3).length; i++){
    if (Array.isArray(Object.values(person3)[i])){
        Object.values(person3)[i].forEach(element => console.log(element))
    } else{
        console.log(Object.values(person3)[i])
    }
}


////=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Guy{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo = () =>{ return`My name is ${this.name} and i am ${this.age} years old`
    } 


    incrimentAge = (years) =>{return this.age + years}

}
let guy1 = new Guy("Guy", 22)
let guy2 = new Guy("Steven", 47)

console.log(guy1.printInfo())
console.log(guy1.incrimentAge(3))
console.log(guy2.printInfo())
console.log(guy2.incrimentAge(1))




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string 
    to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log 
    "Small Number"
*/

let checkString = string => {
    return new Promise( (big, small) => {
        string.length > 10 ? big(true) : small(false)
    })

}
checkString("Hootie")
.then( ()=>{
    console.log('Big Word')
})
.catch(()=>{
    console.log('Small Number')
})


// //Code wars problem 1: Capitalization and Mutibility
// //Your coworker was supposed to write a simple helper function to capitalize a string 
// (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. 
// Fix the helper function they wrote so that it works as intended 
// (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being 
// passed to the function. The string lengths will be from 1 character up to 10 characters, 
// but will never be empty.

function capital(word) {
    return word[0].toUpperCase() + word.slice(1);
  }


//   codewars problem 2: Opposites attract
//   Timmy & Sarah think they are in love, but around where they live, they will only know 
//   once they pick a flower each. If one of the flowers has an even number of petals 
//   and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true 
// if they are in love and false if they aren't.


  function love(f1, f2){
    return f1 % 2 !== f2 % 2;
  }

