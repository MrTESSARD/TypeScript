// 42. Generics
var colors = ["red", "green", "blue"];
var colors2 = [];
// let list :number[]=[1,2,3,] //la même chose 
// let list: Array<number>=[1,2,3,]//la même chose 
function identity(arg) {
    return arg;
}
console.log(identity(200));
function identity2(arg) {
    return arg;
}
var output = identity2("hello");
console.log(identity2("Hello"));
console.log(identity2(true));
function identity3(arg) {
    return arg;
}
var output1 = identity3("hello");
var output2 = identity3(200);
function identity4(arg) {
    return arg;
}
var output3 = identity4({ title: "Hello World" });
var objOne = { name: "bart" };
var objTwo = { age: 8 };
function objInArray(n, a) {
    var data = [];
    data.push(n, a);
    return data;
}
var user = objInArray(objOne, objTwo);
console.log(user); //un array d'objets 
