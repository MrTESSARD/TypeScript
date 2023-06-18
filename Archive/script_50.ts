// 50 - Utility Type - Exclude

// type T0=Exclude<"a"| "b"| "c"| (()=>void), Function>
type Easing="ease_in"| "ease_out"| "ease_in_out"
type Animate=Exclude<Easing,"ease_in">

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
class UIElement {
  animate(x:number,y:number, easing:Animate){
    // if (easing==="ease_in") {//Exclude
    //   console.log("ease_in");
      
    // }
    if (easing==="ease_out") {
      console.log("ease_out");
      
    }
    if (easing==="ease_in_out") {
      console.log("ease_in_out");
      
    }
  }
}

let button=new UIElement()
button.animate(0,0,"ease_in")