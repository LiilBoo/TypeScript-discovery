"use strict";
//* Interfaces
;
//* Now the Interface Rocket, contains this 2 new properties, they have been merged with the original interface;
//! Properties are added ! No replacement
//* Types cannot do that
//* Generally, we use interface with classes
//* It can look like this
class RocketFactory {
    constructor(reactors, vMax, price, carburant) {
        this.reactors = reactors;
        this.vMax = vMax;
        this.price = price;
        this.carburant = carburant;
    }
    takeOff(action) {
        console.log(action);
    }
}
//* There also exists a shorthand syntax to write classes : to follow ... (Advanced TypeScript)
const Falkkon = new RocketFactory(12, 800, 3000000000, 7);
console.log(Falkkon);
Falkkon.takeOff('TAKE OOOOOOFF');
//* Interfaces represent objects, resembling types but attend only to objects. We only do objects with Interfaces
//* We can merge them together => unique feature to interfaces
//* We use them with classes in order to have parameters/fields/variables/properties to perfectly correspond to what we want and what we have defined
//* More functionnalities to be discovered in part "Advanced Type";
