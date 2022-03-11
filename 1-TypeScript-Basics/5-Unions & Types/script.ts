
//* Unions & Types Aliases

let code: string | number;

code = 5;
code =  "5";

let beaucoupDeUnions : string | number | boolean | object | Function;

//------------------------------

let arr: boolean[];
arr = [true, false, true];

let arr2: (boolean|number)[];

//! not arr2: boolean|number[]
// otherwise it would mean boolean OR array of numbers

// what we want : is an array accepting both boolean and number;
arr2 = [true, 999];

//--------------

const foo = (param: number|string) => {
	console.log(param);
};

foo('Test');

//* --- Personnalized Types / Custom type ----
//or " Type Aliases "


//custom type
type mixedNumStr = number | string;

const baz = (param: mixedNumStr) => {
	console.log(param);
};

baz('test');

//another custom type
type booleanOrObject = boolean | object;

const whatTheFuck = (param: mixedNumStr | booleanOrObject) => {
	console.log(param);
}

whatTheFuck(true);

//Custom type

type Player = {
	Elo : number | string;
	name : string;
	lastname : string,
	vehicule : boolean;
}

//* The official TypeScript documentation writes its custom type objects with properties separated with ; semi-colons!

//* The commas do not return an error ! Your choice

const myself : Player = {
	Elo : 3126,
	name : "hehe",
	lastname : "tough",
	vehicule : false,
}