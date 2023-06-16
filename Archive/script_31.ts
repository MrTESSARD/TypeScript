//31. Type Assertions
//AS
let someValue:unknown='this is a string'
let strlength=(someValue as string).length
console.log(strlength);

//Angle-Braket
let someValue1:unknown='this is a string'
let strlength1=(<string> someValue1).length
console.log(strlength1);


//AS
const firstName =document.getElementById('firstName') 
console.log(firstName);
console.log(firstName.value);//NOK .value erreur sans "as"
console.log(typeof firstName);//object

const firstName3 =document.getElementById('firstName') as HTMLInputElement //on ne peut pas acceder sur value car ts ne sais pas que c'est un objet input dans id 'firstName'c'est pour ça q'uil faut donner "as"
console.log(firstName3);
console.log(firstName3.value);//.value OK
console.log(typeof firstName3.value);//string

const firstName1 =document.getElementById('toto') //si TS ne peut pas acceder à l'objet il ne peut pas savoir si il existe et donc ne peut pas afficher erreur 
console.log(firstName1);
console.log(typeof firstName1);

const firstName1 =document.getElementById('toto') //si TS ne peut pas acceder à l'objet il ne peut pas savoir si il existe et donc ne peut pas afficher erreur 
console.log(firstName1);
console.log(typeof firstName1);

//Angle-Braket
const firstName4 = <HTMLInputElement> document.getElementById('firstName')  //
console.log(firstName4.value);//.value OK
console.log(typeof firstName4.value);//string

//ou AS
const firstName5 = document.getElementById('firstName')  //
let inputValue = (firstName5 as HTMLInputElement).value
console.log(typeof  inputValue);

//Ou Angle-Braket
const firstName6 =  document.getElementById('firstName')  //
let inputValue1 = (<HTMLInputElement> firstName6).value
console.log(typeof firstName6.value);//string