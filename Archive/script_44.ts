// 44 - Generics avec les classes

//Mission : Enregistrer type string
// class DataBase {//sans generics il faut à chaque fois intervenir sur la classe pour ajouter des type de données accepté
//   data:(string|number)[]=[]

//   saveData(val:string|number){
//     this.data.push(val)
//   }
//   getllData(){
//     return [...this.data]
//   }

// }

// const stringData=new DataBase()
// stringData.saveData("Marge")
// stringData.saveData("Homer")
// stringData.saveData(10)
// const result = stringData.getllData()
// console.log(result);


class DataBase<T> {//sans generics il faut à chaque fois intervenir sur la classe pour ajouter des type de données accepté
  data:T[]=[]

  saveData(val:T){
    this.data.push(val)
  }
  getllData(){
    return [...this.data]
  }

}
//sans type
const stringData=new DataBase()
stringData.saveData("Marge")
stringData.saveData("Homer")
stringData.saveData(10)
const result = stringData.getllData()
console.log(result);

const numberData1=new DataBase<number>()
numberData1.saveData(10)
const result1 = numberData1.getllData()
console.log(result1);

const objectData=new DataBase<object>()
objectData.saveData({Nom:"Marge"})
const result2 = objectData.getllData()
console.log(result2);


class DataBaseSansObjets<T extends string|number> {//Sans objets
  data:T[]=[]

  saveData(val:T){
    this.data.push(val)
  }
  getllData(){
    return [...this.data]
  }

}