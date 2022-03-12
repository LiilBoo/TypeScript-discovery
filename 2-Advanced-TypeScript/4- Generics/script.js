"use strict";
//* ----- Generics ------

// Re-usable Interfaces

//* An Interface will show us the property of a city, there will be an additional data that will be anything we want. So we can't do infinite Unions.

//* We use a Generic (called 'T' by convention). We recongnize it at its syntaxe <>
//* When I use an object that references its Interfaces, I will also must pass a type withins the <>, it'll be the type of my Generic

const London = {
    name: "London",
    population: 10,
    additionalData: { area: 1572 } // {object}
};

//* It's like passing an argument

//* As we would pass a parameter in argument, except here, it's a type and a obliged parameter
//* It can be different from an object to another, it really is : anything we want.

const Paris = {
    name: "Paris",
    population: 5,
    additionalData: [
        { underground: true, lines: 17 },
        { restaurants: true, number: 14000 }
    ], // Array of objects // object[];
};

//* -----  Generics with functions    -----

// With Functions, it responds to a precise problem

const addRepairDate = (obj) => {
    const lastRepair = new Date();
    return { ...obj, lastRepair };
};
const auto1 = addRepairDate({ model: "A1", km: 7000, priceInK: 80 });
console.log(auto1);

// That precise problem, it's that if we try to access to the properties of auto1, that we pass (in argument) to execute in the function.

//We wait an object but we do not know this object, neither its number of properties or its types.

//console.log(auto1.model)

//! property model does not exist ?!

//* For the Function to catch the properties and types of the object given in argument, and put it in the variabled created : We need a Generics.

const addRepairDate2 = (obj) => {
    const lastRepair = new Date();
    return { ...obj, lastRepair };
};

// We can now hover the variable with the mouse, the variables et see the difference. The properties and types were saved.

const auto2 = addRepairDate2({ model: "A1", km: 7000, priceInK: 80 });
const auto3 = addRepairDate2({ model: "A1", km: 7000, priceInK: 80, color: "rose" });
console.log(auto2.model);

//* Except that ...
//* A Generics, it's generic. And accept everything...

const auto4 = addRepairDate2("Test");

//*So it also works, There's no errors

//BUT we're not Javascripters, we, we're doing TypeScript. We want to type
// We really do want an object, with our LastRepair

//*So our Generics, is too generic.
//* So we then restrain the function so that it'd only accept objects in argument.

const addRepairDate3 = (obj) => {
    const lastRepair = new Date();
    return { ...obj, lastRepair };
};
const auto5 = addRepairDate3({ model: "A1", km: 7000, priceInK: 80, color: "rose" });
