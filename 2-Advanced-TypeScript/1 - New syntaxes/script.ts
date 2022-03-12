
//* -----  Intersections        -----------
// Mix 2 custom types

type Fish = {
    fin: number;
    gills: true;
    element: "water";
};

type Shark = {
    weight: number;
    length: number;
};

type HammerheadShark = Fish & Shark;

const sharkkie: HammerheadShark = {
    fin: 5,
    element: "water",
    gills: true,
    weight: 150,
    length: 200
};

type HammerheadShark2 = Fish & Shark & {
    test: "abc"
};

const sharkkie2: HammerheadShark2 = {
    fin: 5,
    element: "water",
    gills: true,
    weight: 150,
    length: 200,
    //we must now add , test:"abc";
    test: "abc"
};

let obj: {
    propriété1 : "a";
} & {
    propriété2 : "b";
};

//*--------- Link interfaces ------------
// Often used with classes
// Class interface from which to instantiate objects


interface Flower {
    pollen: true;
    type : "vegetal";
}

interface Rose extends Flower {
    color: string;
    thorn: boolean;
}

const RedRose : Rose = {
    pollen: true,
    type : "vegetal",
    color: "red",
    thorn: true,
}

//*--------- Discrimated Union -------------

type Japan = {
    lang: "JP";
    food: string[];
};

type Italy = {
    lang: "IT";
    food: string[];
}

type Country = Japan | Italy;

const automaticResponse = (country: Country) => {
    if (country.lang === "JP"){
        console.log("Hello from Japan");
        
    } else if (country.lang){
        console.log("Hello from Italy");
    }
}

const mangaka : Country = {
    lang: "JP",
    food: ["Sushis", "sake","Sharks"]
}

automaticResponse(mangaka) // "Hello from Japan"

//* ---- Unknown number of properties -----

//In the example of a Event-Planning app
//We do not know how many people in the Group in advance

interface Group {
    [name: string] : object;
}

//* We can add as many properties we want, which can take objects

const randonnée : Group = {
    "John": {id: 1},
    "Jonah": {id: 2},
    "Jemmie": {id: 3}
}
