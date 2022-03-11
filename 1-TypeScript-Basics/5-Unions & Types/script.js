"use strict";
//* Unions & Types Aliases
let code;
code = 5;
code = "5";
let beaucoupDeUnions;
//------------------------------
let arr;
arr = [true, false, true];
let arr2;
//! not arr2: boolean|number[]
// otherwise it would mean boolean OR array of numbers
// what we want : is an array accepting both boolean and number;
arr2 = [true, 999];
//--------------
const foo = (param) => {
    console.log(param);
};
foo('Test');
const baz = (param) => {
    console.log(param);
};
baz('test');
const whatTheFuck = (param) => {
    console.log(param);
};
whatTheFuck(true);
//* The official TypeScript documentation writes its custom type objects with properties separated with ; semi-colons!
//* The commas do not return an error ! Your choice
const myself = {
    Elo: 3126,
    name: "hehe",
    lastname: "tough",
    vehicule: false,
};
