"use strict";
//les tuple
let tuple;
tuple = ["hello", 20];
console.log(tuple);
//un objet qui contient uniquement un string et un number
const member = {
    level: ["admin", 1]
};
member.level[0] = 5;
//un push prend le desus sur restriction de type
member.level.push(5);
