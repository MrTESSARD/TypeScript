"use strict";
// 87. Mixins
class Person {
    speak() { console.log("je parle"); }
    walk() { console.log("je marche"); }
}
class Alien {
    telepathy() { console.log("Je communique sans parler"); }
}
const test = {
    speak() { },
    walk() { },
    telepathy() { }
};
function PersonMixin(base) {
    return class extends base {
        speak() { console.log("je parle"); }
        walk() { console.log("je marche"); }
    };
}
function AlienMixin(base) {
    return class extends base {
        telepathy() { console.log(`Je communique sans parler. j'ai ${this.age}`); }
    };
}
const Roger = PersonMixin(AlienMixin(class {
    age = 5000; //je peux ajouter en plus des propriétés et des mthodes 
}));
const roger = new Roger();
roger.speak();
roger.telepathy();
console.log(roger.age);
console.log(roger);
