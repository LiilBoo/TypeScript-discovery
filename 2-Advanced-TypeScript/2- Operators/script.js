"use strict";
//* -------  Some sexy operators  -----------

//* ---- The : ! ; operator ------

//* It signifies to TypeScript (at compilation) that something will never be null

// const container = document.querySelector('.container')!;

//* It is preferable to use the Type Casting
//* Much preferred
const trueContainer = document.querySelector('.container');
const WILD_CODE_CODER = {
    title: "Dev FullStack",
    description: "Develops softwares",
    salaryInK: 54,
};

// also works without description

const WILD_CODE_CODING_GIRL = {
    title: "Dev FullStack",
    salaryInK: 60,
};

//* ----- optional chaining ------

console.log(WILD_CODE_CODING_GIRL?.description);

//* ------   Optional Parameter ----
function message(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log("No message was provided");
    }
};

message();
message("Goodbye world");


const littleHouseOnTheHill = {
    room: 1,
    priceInK: 2,
    // but no garage :c
};

//* ----- Nullish coalescing : operator ?? -----

const DATA = "";
const DISPLAY_DATA = DATA || "Goodbye world";
console.log(DISPLAY_DATA);

// returns "Goodbye world"

// Both 0 and empty strings "" are considered falsy
// To show falsy calues, we use ??

const DATA_2 = "";
const DISPLAY_DATA2 = DATA_2 ?? "Goodbye world";

//The ?? dodges null or undefined

console.log(DISPLAY_DATA);

//returns an empty string

//*  ----- Never  -------

function alertUSer(msg) {
    throw msg;
}
;
// specifies there is never a return
alertUSer("WARNING, Dangerous behavior");
