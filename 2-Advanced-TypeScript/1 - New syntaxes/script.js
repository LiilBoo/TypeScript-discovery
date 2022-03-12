"use strict";
//* -----  Intersections        -----------
// Mix 2 custom types
const sharkkie = {
    fin: 5,
    element: "water",
    gills: true,
    weight: 150,
    length: 200
};
const sharkkie2 = {
    fin: 5,
    element: "water",
    gills: true,
    weight: 150,
    length: 200,
    //we must now add , test:"abc";
    test: "abc"
};
let obj;
const RedRose = {
    pollen: true,
    type: "vegetal",
    color: "red",
    thorn: true,
};
const automaticResponse = (country) => {
    if (country.lang === "JP") {
        console.log("Hello from Japan");
    }
    else if (country.lang) {
        console.log("Hello from Italy");
    }
};
const mangaka = {
    lang: "JP",
    food: ["Sushis", "sake", "Sharks"]
};
automaticResponse(mangaka); // "Hello from Japan"
//* We can add as many properties we want, which can take objects
const randonnée = {
    "John": { id: 1 },
    "Jonah": { id: 2 },
    "Jemmie": { id: 3 }
};
