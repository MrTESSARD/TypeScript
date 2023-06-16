// 33 Les classes

class Invoice {
  //propriétés 
  client:string;
  product:string;
  price:number;

  constructor(client:string, product:string, price:number) {
    this.client=client
    this.product=product
    this.price=price
    
  }
}
const invoice1= new Invoice('Dora', 'Template',45)
console.log(invoice1);//Invoice {client: 'Dora', product: 'Template', price: 45}
const invoice2:Invoice= {client:'Sam', product:'SIO',price:25}//un objet
console.log(invoice2);//{client: 'Sam', product: 'SIO', price: 25}

// 34 Type Array Object d'une Instance
let invoiceArray:Invoice[]=[]
invoiceArray.push({client:'Sam', product:'SIO',price:25})
invoiceArray.push(invoice1,invoice2)
console.log(invoiceArray);//0: {client: 'Sam', product: 'SIO', price: 25}1: Invoice {client: 'Dora', product: 'Template', price: 45}2:{client: 'Sam', product: 'SIO', price: 25}