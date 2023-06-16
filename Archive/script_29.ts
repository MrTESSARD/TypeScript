//Type Never

let count1 = 5
const verifycases:never=count1

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Faire quelque chose indéfiniment
  }
}

// Utilisation
throwError("Une erreur s'est produite"); // Lance une exception et ne retourne jamais
infiniteLoop(); // Boucle indéfiniment et ne retourne jamais
