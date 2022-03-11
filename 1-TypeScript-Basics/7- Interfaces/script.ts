//* Interfaces


//*Resembles a lot to Custom typess, in the sense that we can create objects who have certain properties that are going to take a certain type;

//* Interfaces represent objects

interface Rocket {
    reactors: number;
    vMax: number,
    takeOff: (action: string) => void;
}

//* =

type Rocket2 = {
    reactors: number;
    vMax: number;
    takeOff: (action: string) => void
};

//* It resembles a lot to types, except that types can be primitive values OR mix of primitives values OR Unions
//* Except Interfaces will always be objects

//* 2nd difference : we will be able to do : merging;

interface Rocket {
    price: number;
    carburant: number;
};

//* Now the Interface Rocket, contains this 2 new properties, they have been merged with the original interface;
//! Properties are added ! No replacement

//* Types cannot do that

//* Generally, we use interface with classes
//* It can look like this

class RocketFactory implements Rocket {
    reactors: number;
    vMax: number;
    price: number;
    carburant: number;
    

    constructor(reactors: number, vMax: number, price: number, carburant: number){
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }

    takeOff(action: string){
        console.log(action);
        
    }
}

//* There also exists a shorthand syntax to write classes : to follow ... (Advanced TypeScript)

const Falkkon = new RocketFactory(12,800,3000000000,7)
console.log(Falkkon);

Falkkon.takeOff('TAKE OOOOOOFF');

//* Interfaces represent objects, resembling types but attend only to objects. We only do objects with Interfaces
//* We can merge them together => unique feature to interfaces

//* We use them with classes in order to have parameters/fields/variables/properties to perfectly correspond to what we want and what we have defined

//* More functionnalities to be discovered in part "Advanced Type";