"use strict";
// 85. Conditional Types
function typeName(arg) {
    return typeof arg;
}
const strVal = typeName("Hello"); //string
const numVal = typeName(20); //number
const undefinedVal = typeName(undefined); //undefined
const funVal = typeName(() => console.log(("hello"))); //function
const objVal = typeName([]); //object
const nullVal = typeName(null); //null
console.log(typeName);
