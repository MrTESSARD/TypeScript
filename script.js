// 50 - Utility Type - Exclude
// class UIElement {
//   animate(x:number,y:number, easing:Easing){
//     if (easing==="ease_in") {
//       console.log("ease_in");
//     }
//     if (easing==="ease_out") {
//       console.log("ease_out");
//     }
//     if (easing==="ease_in_out") {
//       console.log("ease_in_out");
//     }
//   }
// }
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (x, y, easing) {
        // if (easing==="ease_in") {//Exclude
        //   console.log("ease_in");
        // }
        if (easing === "ease_out") {
            console.log("ease_out");
        }
        if (easing === "ease_in_out") {
            console.log("ease_in_out");
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease_in");
