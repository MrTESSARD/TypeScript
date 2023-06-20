"use strict";
//Unknown
let inputData;
/******************************* */
let inputData1;
inputData1 = true;
console.log(typeof inputData1);
let inputAge; //number 
// console.log(typeof inputAge);//bool
inputAge = inputData1; //ok
console.log(typeof inputAge); //bool
/******************************* */
let inputData2;
inputData2 = true;
console.log("inputData2", typeof inputData2);
let inputAge2; //number 
// console.log(typeof inputAge);//bool
// inputAge2=inputData2 //nok !!!!!!!!!!!!!!!!!!!!!
console.log("inputData2", typeof inputAge2); //bool
/******************************* */
let inputData3;
inputData3 = 25;
console.log("inputData3", typeof inputData3);
let inputAge3; //number 
// console.log(typeof inputAge);//bool
if (typeof inputData3 === "number") {
    inputAge3 = inputData3; //nok
    console.log("inputData3", typeof inputAge3); //bool
}
