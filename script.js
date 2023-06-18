// 52. Utility Type - NonNullable
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.paint = function (color) {
        console.log(color);
    };
    return Car;
}());
var ford = new Car();
ford.paint("green");
ford.paint(undefined); //ok sans NonNullable
