"use strict";
const fruits = ["fruit", "apple"]; // inference : string[] => Array containing string elements;
//* fruits.push(4) => results in a error
//* fruits only accepts in its array : strings;
fruits.push("cherry");
const mixedArray = [1, "txt", [1, 2, 3]]; //inference : (string | number | number[])[] => string OR number OR Array containin numbers;
//hover variables to see its type on hover;
//* mixedArray.push([1,2,3,"4"])
// => returns an error, certainly, the array accepts strings but not arrays containing strings!
let nums;
//nums.push(1) 
// => returns an error, because the variable is initialized as receiving an array
// but at this instant, this array does not exist yet!
nums = [1, 2, 3];
let nums2 = [];
// Here, we type nums2 as receivin an array of numbers AND we instantiate it too! (as assigned an empty array)
nums2.push(2);
//* Now it works!
//? What if we wanted an array that receuves anything, any type ?
let random;
random = [1, true, 10]; //* works
random = 10; //* fonctionne aussi! Ah zut, ce n'est pas ce que l'on voulait ...
//* Also works! Oopsie, this isn't quite what we wanted
let random2;
//random2 = true 
// => returns an error!
random2 = [true, false, true, "1", 1,]; //*Works !
/**
 * OBJECTS
 */
const car = {
    name: "Audi",
    model: "A1",
    km: 7000
};
//inference 
// car : {
//     name: string,
//     model: string,
//     km: number
// }
// car.name = 4 //error
let profile;
profile = {
    name: "John",
    age: 35,
    hobbies: [],
};
//-----------------
// Another rarely seen and used syntax
// Because there is such things in TypeScript, that are named : Interfaces
let user = {
    name: "Elrick",
    age: 20,
    favFood: ['penne', 'lobster'],
    data: "Missing..."
};
//--------------------
let obj;
obj = { name: "Grrrrr" };
