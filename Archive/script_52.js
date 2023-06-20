"use strict";
// 52. Utility Type - NonNullable
class Car {
    color;
    paint(color) {
        console.log(color);
    }
}
const ford = new Car();
ford.paint("green");
ford.paint(undefined); //ok sans NonNullable
