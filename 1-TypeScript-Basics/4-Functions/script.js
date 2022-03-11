"use strict";
function multiply(num1, num2 = 10, action) {
    if (action) {
        console.log(action);
    }
    return num1 * num2;
}
console.log(multiply(6, 10));
//--------------
let foo;
//* the type Function exists and writes with an Uppercase first letter;
foo = () => { };
//*Function signature
//* or model
//* Blueprint
let baz;
baz = (a, b) => a + b;
//------------
//Callback functions
function greetings(fn) {
    fn("Hello World");
}
;
function printToConsole(msg) {
    console.log(msg);
}
;
//HOF function
// High Order Function
greetings(printToConsole);
