"use strict";
//Type Aliases
const welcome = (username) => {
    console.log("bienvenue", username);
};
welcome('Dupont');
const getProfildata = (user) => {
    console.log(`
  id:${user.id}
  user:${user.userName}
  `);
};
getProfildata({ id: 1254, userName: 'Dupont' });
const invoice = (productName, user) => {
    console.log(`
  produit: ${productName.name}
  prix: ${productName.price} $
  id Client: ${user.id}
  Nom du client: ${user.userName}
  `);
};
let productDetails = {
    name: 'Formation PHP',
    price: 90
};
invoice(productDetails, { id: 1254, userName: 'Dupont' });
