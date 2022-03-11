"use strict";
//* Tuple
//* Array with a defined length & type for all its elements 
//* More restrictive!
let tuple;
//* Inference : Only an array of length of 2,, where index 0 is a boolean et index 1 is a number
tuple = [false, 20]; //works
//tuple = [false,20, "false"] //! => error
//tuple = [false, 20, 21] //! => error
//! mais...
tuple.push(4); //*works...
console.log(tuple);
//*------- Enum --------
// const Roles = {
// 	JAVASCRIPT : 1,
// 	CSS : 2,
// 	REACT : 3,
// 	ADMIN : 4,
// 	PRESIDENT : 5,
// 	CAPITAINE : 6,
// 	TRAINER : 7,
// 	VISITEURS : 8,
// 	MODERATEUR : 9,
// }
//* Often useful when a website has roles ( Admin / President / Trainer / Captain); Then this kind of constants/objects with properties that have an ID;
// console.log(Roles.JAVASCRIPT); // 1
//* It allows ("conditional rendering") : "I will show this UI to roles who have ADMIN/PRESIDENT/TRAINER"
//* And to do that, there is a TypeScript functionnality that is to use enum
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["REACT"] = 1] = "REACT";
    Roles[Roles["CAPITAINE"] = 2] = "CAPITAINE";
    Roles[Roles["MODERATOR"] = 3] = "MODERATOR";
})(Roles || (Roles = {}));
;
var otherWayToWriteRoles;
(function (otherWayToWriteRoles) {
    otherWayToWriteRoles[otherWayToWriteRoles["ADMIN"] = 1] = "ADMIN";
    otherWayToWriteRoles[otherWayToWriteRoles["MODERATOR"] = 2] = "MODERATOR";
    otherWayToWriteRoles[otherWayToWriteRoles["REACT"] = 3] = "REACT";
})(otherWayToWriteRoles || (otherWayToWriteRoles = {}));
;
console.log(Roles);
console.log(otherWayToWriteRoles); // starts at  1
