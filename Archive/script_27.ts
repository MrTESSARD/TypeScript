//Type Aliases

type NumStr= number|string
type ObjIdUser= {
  id: number, 
  userName:NumStr
}
type ObjInvoice= {
  name:string, 
  price:number
}

  


const welcome = (username:NumStr)=>{
  console.log("bienvenue", username);
}
welcome('Dupont')


const getProfildata = (user:ObjIdUser)=>{
  console.log(`
  id:${user.id}
  user:${user.userName}
  `)
}
getProfildata({id:1254, userName:'Dupont'})

const invoice = (productName:ObjInvoice, user:ObjIdUser)=>{
  console.log(`
  produit: ${productName.name}
  prix: ${productName.price} $
  id Client: ${user.id}
  Nom du client: ${user.userName}
  `);
}

let productDetails={
  name : 'Formation PHP',
  price : 90
}
invoice(productDetails, {id:1254, userName:'Dupont'})