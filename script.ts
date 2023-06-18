// 51 - Utility Type - Extract

type Colors="red"| "blue"| "orange"|"green"
type MyColors="red"| "purpre"| "green"
type AcceptedColors=Extract<Colors,MyColors>
function clgColors(arg:AcceptedColors) {
  console.log(arg);
  
}
clgColors("red")
clgColors("green")
// clgColors("blue")//nok
