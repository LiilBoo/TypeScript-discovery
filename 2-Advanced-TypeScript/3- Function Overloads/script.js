"use strict";
//* ----- Function Overloads ------
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
;
console.log(combine("string ", " + another string, so we return a string"));
console.log(combine(10, 10));
function combineOverload(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
;
// function combineOverload(a: NumberOrString, b: NumberOrString): number | string {
//     if(typeof a === "string" || typeof b === "string"){
//         return a.toString() + b.toString();
//     } else {
//         return a + b;
//     }
// };
