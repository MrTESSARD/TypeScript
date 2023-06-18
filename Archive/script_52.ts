// 52. Utility Type - NonNullable


class Car {
  color?:"green"|"black"| "white"|"red"
  paint(color:NonNullable<Car["color"]>){
    console.log(color);
  }
}

const ford = new Car()

ford.paint("green")
ford.paint(undefined)//ok sans NonNullable