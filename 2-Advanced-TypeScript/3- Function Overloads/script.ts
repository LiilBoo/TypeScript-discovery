//* ----- Function Overloads ------

// Better handle what a function returns

type NumberOrString = number | string;

function combine(a: NumberOrString, b: NumberOrString) {

    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString();
    } else {
        return a + b;
    }
    
};

console.log(combine("string ", " + another string, so we return a string"));

console.log(combine(10,10));

// Or we handle the return with an overload
// All use cases
// Well specify return types
// All returns possible from our function

function combineOverload(a: number, b: number): number 
function combineOverload(a: number, b: string): string 
function combineOverload(a: string, b: number): string 
function combineOverload(a: string, b: string): string 
function combineOverload(a: NumberOrString, b: NumberOrString){

    if(typeof a === "string" || typeof b === "string"){
        return a.toString() + b.toString();
    } else {
        return a + b;
    }
    
};

// function combineOverload(a: NumberOrString, b: NumberOrString): number | string {

//     if(typeof a === "string" || typeof b === "string"){
//         return a.toString() + b.toString();
//     } else {
//         return a + b;
//     }
    
// };