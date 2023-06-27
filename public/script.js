"use strict";
// 88. Singleton Design Pattern - Private Constructor
class Company {
    totalEmployees;
    //private : Il s'agit d'un modificateur d'accès qui limite la visibilité de la variable instance à l'intérieur de la classe ou du contexte dans lequel elle est déclarée. Cela signifie que la variable instance ne peut pas être accédée ou modifiée directement en dehors de la classe ou du contexte où elle est déclarée.
    // static : Il s'agit d'un modificateur qui indique que la variable instance est une variable statique liée à la classe elle-même, et non à une instance spécifique de la classe. Cela signifie que la variable instance est partagée entre toutes les instances de la classe et qu'elle peut être accédée directement à partir de la classe sans avoir besoin d'instancier la classe.
    // instance : C'est simplement le nom donné à la variable. Vous pouvez la remplacer par le nom de variable de votre choix.
    // : Company : C'est la déclaration de type qui indique que la variable instance est de type Company, ce qui signifie qu'elle devrait contenir une instance de la classe Company.
    static instance;
    constructor(total) {
        this.totalEmployees = total;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Company(200);
        return this.instance;
    }
}
// const company = new Company(100) //impossible
// console.log(company);
// const company2 = new Company(200)
// console.log(company);
const company = Company.getInstance();
const company2 = Company.getInstance();
console.log(company); //200 impossible d'instancier et c'est toujour la même classe
console.log(company2); //200
