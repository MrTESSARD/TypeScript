"use strict";
// 33 Les classes
class Invoice {
    //propriétés 
    client;
    product;
    price;
    constructor(client, product, price) {
        this.client = client;
        this.product = product;
        this.price = price;
    }
}
const invoice1 = new Invoice('Dora', 'Template', 45);
console.log(invoice1); //Invoice {client: 'Dora', product: 'Template', price: 45}
const invoice2 = { client: 'Sam', product: 'SIO', price: 25 };
console.log(invoice2); //{client: 'Sam', product: 'SIO', price: 25}
