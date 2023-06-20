"use strict";
//Type Never
let count1 = 5;
const verifycases = count1;
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        // Faire quelque chose indéfiniment
    }
}
// Utilisation
throwError("Une erreur s'est produite"); // Lance une exception et ne retourne jamais
infiniteLoop(); // Boucle indéfiniment et ne retourne jamais
