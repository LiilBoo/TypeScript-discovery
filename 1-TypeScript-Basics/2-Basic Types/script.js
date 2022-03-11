"use strict";
let str = "str"; // inference of : string;
let num = 5; // inference of : number;
let array = []; //inference of any[];
let obj = {
    a: 5,
};
// inference of obect where property a : number;
let toggle = true;
let anything;
let any; // type any
let randomNumber;
randomNumber = 78;
const conversion = (celsius) => {
    return ((celsius * 9 / 5) + 32);
};
console.log(conversion(10));
