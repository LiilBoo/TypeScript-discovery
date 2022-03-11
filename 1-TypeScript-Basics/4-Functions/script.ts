function multiply(num1: number, num2 = 10, action?: string): number {
	if (action) {
		console.log(action);
	}
	return num1 * num2;
}

console.log(multiply(6, 10));

//--------------

let foo: Function;

//* the type Function exists and writes with an Uppercase first letter;

foo = () => {};

//*Function signature
//* or model
//* Blueprint

let baz: (a:number, b:number) => number;

baz = (a,b) => a + b;

//------------
//Callback functions

function greetings(fn: (a:string) => void){
    fn("Hello World")
};

function printToConsole(msg: string) {

    console.log(msg);
    
};


//HOF function
// High Order Function
greetings(printToConsole);