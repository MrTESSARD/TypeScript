"use strict";
//Type Null et Undefined
let myName;
console.log(undefined === null); //false
console.log(undefined == null); //true
//typeof
console.log(typeof undefined); //undefined
console.log(typeof null); //null
//!
console.log(null); //null
console.log(!null); //true
console.log(!!null); //false
console.log(undefined); //undefined
console.log(!undefined); //true
console.log(!!undefined); //false
//return undefined|null
const myFunction = function foo(arg) {
    return arg;
};
const result = myFunction('hello');
console.log(result); //hello
const result = myFunction('');
console.log(result); //_
const result = myFunction();
console.log(result); //undefined
if (result != null) {
    console.log(typeof result);
}
console.log(null + 200); //0 200
console.log(undefined + 200); // NaN
let value; // voir "strictNullChecks": false,  dans tsconfig.json
value = null; //null et undefined s'attribue uniquement sur any avec strictNullChecks": true ou par défaut
value = undefined;
