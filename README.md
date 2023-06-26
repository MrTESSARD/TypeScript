1 - Exemple JavaScript Vs TypeScript + Compilateur
2 - IntelliSense dans Visual Studio Code
3 - Type Array
4 - Type Tuple
5 - enum
6 - Type Any // très depresié cas on peut faire ce qu'on veux et pas d'erreur 
20 - Type Unknown
21 - Type Void
22 - Type Function
23 - Paramètres facultatifs et par défaut
24 - Type Rest
25 - Callback Function Type
26 - Union Types 
27 - Type Aliases

# Exemples de TypeScript

## 1 - Exemple JavaScript Vs TypeScript + Compilateur:
```javascript
// JavaScript:
let message = "Bonjour, monde!";
console.log(message);

// TypeScript:
let message: string = "Bonjour, monde!";
console.log(message);
```
> Dans cet exemple, nous comparons le code JavaScript et TypeScript. Le code TypeScript est annoté avec un type (string), ce qui permet au compilateur de détecter d'éventuelles erreurs de type lors de la compilation.

## 2 - IntelliSense dans Visual Studio Code:
```typescript
// TypeScript:
let nom: string = "Alice";
console.log(nom.charAt(0));
```
> Dans cet exemple, en utilisant Visual Studio Code avec TypeScript, lorsque vous tapez "nom.", l'IntelliSense vous proposera des options, comme "charAt", qui est une méthode disponible pour les chaînes de caractères. Cela améliore la productivité du développeur en fournissant des suggestions contextuelles.

## 3 - Type Array:
```typescript
let nombres: number[] = [1, 2, 3, 4, 5];
console.log(nombres);
```
> Dans cet exemple, nous déclarons un tableau de nombres en utilisant le type "number[]". Cela indique que seules les valeurs numériques sont autorisées dans le tableau.

## 4 - Type Tuple:
```typescript
let coordonnees: [number, number] = [10, 20];
console.log(coordonnees);
```
> Dans cet exemple, nous déclarons un tuple en utilisant le type "[number, number]". Un tuple est un tableau de taille fixe où chaque élément peut avoir un type spécifique. Ici, le tuple contient deux nombres.

## 5 - enum:
```typescript
enum Couleur {
  Rouge,
  Vert,
  Bleu,
}

let couleurPreferee: Couleur = Couleur.Vert;
console.log(couleurPreferee);
```
> Dans cet exemple, nous définissons une énumération "Couleur" avec différentes valeurs. Ensuite, nous déclarons une variable "couleurPreferee" de type "Couleur" et lui attribuons la valeur "Vert". Les énumérations permettent de créer un ensemble de valeurs nommées.

## 6 - Type Any:
```typescript
let variable: any = "Bonjour";
console.log(variable);
```
> Dans cet exemple, nous utilisons le type "any" pour déclarer une variable "variable". Le type "any" permet d'affecter n'importe quelle valeur à cette variable, ce qui désactive la vérification de type statique de TypeScript.

** très depresié cas on peut faire ce qu'on veux et pas d'erreur  **
## 20 - Type Unknown:
```typescript
let valeur: unknown = 10;
console.log(valeur);
```
> Dans cet exemple, nous utilisons le type "unknown" pour déclarer une variable "valeur". Le type "unknown" est similaire au type "any", mais il impose des vérifications de type avant toute utilisation de la variable.

## 21 - Type Void:
```typescript
function afficherMessage(): void {
  console.log("Hello, world!");
}

afficherMessage();
```
> Dans cet exemple, nous définissons une fonction "afficherMessage" qui ne renvoie aucune valeur (void). Elle se contente d'afficher un message à l'écran à l'aide de la fonction "console.log".

## 22 - Type Function:
```typescript
let ajouter: (a: number, b: number) => number = function (a, b) {
  return a + b;
};

console.log(ajouter(2, 3));
```
> Dans cet exemple, nous déclarons une variable "ajouter" de type "function", qui prend deux paramètres de type "number" et renvoie un nombre.

## 23 - Paramètres facultatifs et par défaut
```typescript
// TypeScript:
function afficherMessage(message: string, prefixe: string = "Info: ") {
  console.log(prefixe + message);
}

afficherMessage("Bonjour!"); // Affiche "Info: Bonjour!"
afficherMessage("Bonjour!", "Alerte: "); // Affiche "Alerte: Bonjour!"
```
> Dans cet exemple, nous définissons une fonction "afficherMessage" qui prend un paramètre obligatoire "message" de type string, et un paramètre facultatif "prefixe" de type string avec une valeur par défaut "Info: ". Si aucun argument n'est fourni pour "prefixe", la valeur par défaut sera utilisée lors de l'appel de la fonction.

## 24 - Type Rest
```typescript
function afficherNombres(...nombres: number[]) {
  console.log(nombres);
}

afficherNombres(1, 2, 3, 4, 5); // Affiche [1, 2, 3, 4, 5]
afficherNombres(10, 20); // Affiche [10, 20]
```
> Dans cet exemple, nous utilisons le type Rest "..." pour déclarer un paramètre qui accepte un nombre variable d'arguments de type number. Les arguments fournis seront regroupés dans un tableau lors de l'appel de la fonction.

## 25 - Callback Function Type
```typescript
function effectuerOperation(nombre: number, operation: (num: number) => number) {
  const resultat = operation(nombre);
  console.log(resultat);
}

function doubler(nombre: number): number {
  return nombre * 2;
}

effectuerOperation(5, doubler); // Affiche 10
```
> Dans cet exemple, nous définissons une fonction "effectuerOperation" qui prend un nombre et une fonction de rappel "operation". La fonction de rappel "doubler" est définie séparément et accepte un nombre et renvoie le résultat de la multiplication par 2. Lors de l'appel de "effectuerOperation", nous passons le nombre 5 et la fonction "doubler" en tant que fonction de rappel.

## 26 - Union Types
```typescript
let identifiant: string | number;
identifiant = "abc";
console.log(identifiant); // Affiche "abc"

identifiant = 123;
console.log(identifiant); // Affiche 123
```
> Dans cet exemple, la variable "identifiant" peut être de type "string" ou "number". On peut lui assigner une valeur de l'un ou l'autre type.

## 27 - Type Aliases
```typescript
type Coordonnees = [number, number];

let point: Coordonnees = [10, 20];
console.log(point); // Affiche [10, 20]
```
> Dans cet exemple, nous utilisons un alias de type "Coordonnees" pour décrire un tuple contenant deux nombres. Ensuite, nous déclarons une variable "point" de type "Coordonnees" et lui attribuons une valeur.

## 28 Literal Types
```typescript
function direBonjour(langue: "francais" | "anglais"): void {
  if (langue === "francais") {
    console.log("Bonjour!");
  } else if (langue === "anglais") {
    console.log("Hello!");
  } else {
    console.log("Langue non prise en charge!");
  }
}

direBonjour("francais"); // Affiche "Bonjour!"
direBonjour("anglais"); // Affiche "Hello!"
direBonjour("espagnol"); // Affiche "Langue non prise en charge!"
```
> Dans cet exemple, la fonction "direBonjour" prend un paramètre "langue" de type "francais" ou "anglais" (des types littéraux). Selon la valeur passée en argument, la fonction affiche le message de salutation correspondant. Si une autre langue est spécifiée, un message indiquant que la langue n'est pas prise en charge est affiché.

## 29 - Type Never
```typescript
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
```
> Dans cet exemple, nous utilisons le type "never" pour décrire des situations où la fonction ne retourne jamais ou lance une exception. La fonction "throwError" lance une exception avec le message spécifié, tandis que la fonction "infiniteLoop" boucle indéfiniment. Ces fonctions ont un type de retour "never", car elles n'atteignent jamais la fin normale de l'exécution.

## 30 - Type Null et Undefined
```typescript
let valeur: null = null;
console.log(valeur); // Affiche null

let variable: undefined = undefined;
console.log(variable); // Affiche undefined
```
> Dans cet exemple, nous utilisons les types "null" et "undefined" pour déclarer des variables avec des valeurs nulles ou non définies. La variable "valeur" est de type "null" et la variable "variable" est de type "undefined". Ces types spéciaux sont utilisés pour représenter l'absence de valeur ou l'absence de définition.

## 31/32 - Type Assertions
```typescript
let valeur: any = "Bonjour";
let longueur: number = (valeur as string).length;
console.log(longueur); // Affiche la longueur de la chaîne
```
> Dans cet exemple, nous utilisons une "type assertion" pour indiquer au compilateur que la variable "valeur" est de type "string". En utilisant l'opérateur "as", nous effectuons une conversion de type et accédons ensuite à la propriété "length" pour obtenir la longueur de la chaîne. Les "type assertions" sont utilisées lorsque le développeur a une connaissance plus précise sur le type d'une variable par rapport à ce que le compilateur peut déduire automatiquement.

## 33 - Les classes
```typescript
class Animal {
  nom: string;
  age: number;

  constructor(nom: string, age: number) {
    this.nom = nom;
    this.age = age;
  }

  afficherDetails(): void {
    console.log(`Nom: ${this.nom}, Age: ${this.age}`);
  }
}

let animal1 = new Animal("Chien", 5);
animal1.afficherDetails(); // Affiche "Nom: Chien, Age: 5"
```
> Dans cet exemple, nous définissons une classe "Animal" avec deux propriétés : "nom" de type "string" et "age" de type "number". La classe possède également un constructeur qui initialise ces propriétés. La méthode "afficherDetails" affiche les détails de l'animal. Ensuite, nous créons une instance de la classe "Animal" appelée "animal1" et appelons sa méthode "afficherDetails".

## 34 - Type Array Object d'une Instance
```typescript
class Voiture {
  marque: string;
  annee: number;

  constructor(marque: string, annee: number) {
    this.marque = marque;
    this.annee = annee;
  }
}

let voitures: Voiture[] = [
  new Voiture("Toyota", 2018),
  new Voiture("Honda", 2020),
  new Voiture("Ford", 2019)
];

console.log(voitures); // Affiche le tableau d'objets Voiture
```
> Dans cet exemple, nous définissons une classe "Voiture" avec deux propriétés : "marque" de type "string" et "annee" de type "number". Ensuite, nous créons un tableau "voitures" de type "Voiture[]", et nous initialisons ce tableau avec des instances de la classe "Voiture". Finalement, nous affichons le tableau d'objets "voitures".

## 35 - Héritage et Polymorphisme
```typescript
class Animal {
  nom: string;

  constructor(nom: string) {
    this.nom = nom;
  }

  faireDuBruit(): void {
    console.log("Animal : Fait du bruit");
  }
}

class Chien extends Animal {
  faireDuBruit(): void {
    console.log("Chien : Fait Wouaf!");
  }
}

class Chat extends Animal {
  faireDuBruit(): void {
    console.log("Chat : Fait Miaou!");
  }
}

let animal: Animal = new Animal("Animal");
let chien: Animal = new Chien("Rex");
let chat: Animal = new Chat("Minou");

animal.faireDuBruit(); // Affiche "Animal : Fait du bruit"
chien.faireDuBruit(); // Affiche "Chien : Fait Wouaf!"
chat.faireDuBruit(); // Affiche "Chat : Fait Miaou!"
```
> Dans cet exemple, nous définissons une classe de base "Animal" avec une propriété "nom" et une méthode "faireDuBruit". Ensuite, nous créons deux classes dérivées : "Chien" et "Chat", qui héritent de la classe "Animal". Chacune de ces classes redéfinit la méthode "faireDuBruit" pour avoir un comportement spécifique.

> Nous créons ensuite des instances des classes "Animal", "Chien" et "Chat", et nous appelons la méthode "faireDuBruit" sur chaque instance. Grâce au polymorphisme, la méthode appropriée est appelée en fonction du type réel de l'instance, ce qui permet d'obtenir des résultats différents.

## 36/37 - Classes (Private, Public, Protected, Readonly)
```typescript
class Personne {
  public nom: string;
  private age: number;
  protected adresse: string;
  readonly numeroSecuriteSociale: string;

  constructor(nom: string, age: number, adresse: string, numeroSecuriteSociale: string) {
    this.nom = nom;
    this.age = age;
    this.adresse = adresse;
    this.numeroSecuriteSociale = numeroSecuriteSociale;
  }

  afficherDetails(): void {
    console.log(`Nom: ${this.nom}, Age: ${this.age}, Adresse: ${this.adresse}`);
  }
}

let personne = new Personne("Alice", 30, "Paris", "1234567890");
console.log(personne.nom); // Affiche "Alice"
personne.afficherDetails(); // Affiche "Nom: Alice, Age: 30, Adresse: Paris"
console.log(personne.age); // Erreur de compilation - Propriété "age" est privée
console.log(personne.adresse); // Erreur de compilation - Propriété "adresse" est protégée
personne.nom = "Bob"; // Modifie la valeur de la propriété "nom"
personne.numeroSecuriteSociale = "9876543210"; // Erreur de compilation - Propriété "numeroSecuriteSociale" est en lecture seule
```
> Dans cet exemple, nous définissons une classe "Personne" avec plusieurs propriétés ayant différents modificateurs d'accès :

- La propriété "nom" est publique (public) et peut être accédée à partir de n'importe où.
- La propriété "age" est privée (private) et ne peut être accédée qu'à l'intérieur de la classe.
- La propriété "adresse" est protégée (protected) et peut être accédée à l'intérieur de la classe ainsi que dans les classes dérivées.
- La propriété "numeroSecuriteSociale" est en lecture seule (readonly) et ne peut être modifiée une fois initialisée.

> Nous créons ensuite une instance de la classe "Personne" et accédons à ses propriétés. L'accès à la propriété "age" en dehors de la classe entraîne une erreur de compilation en raison de sa visibilité privée. De même, l'accès à la propriété "adresse" génère une erreur car elle est protégée. En revanche, la propriété "nom" est accessible et peut être modifiée. La tentative de modification de la propriété "numeroSecuriteSociale" entraîne également une erreur car elle est en lecture seule.


## 38 - Interfaces
```typescript
interface Personne {
  nom: string;
  age: number;
  adresse?: string;
}

function afficherPersonne(personne: Personne): void {
  console.log(`Nom: ${personne.nom}, Age: ${personne.age}`);
  if (personne.adresse) {
    console.log(`Adresse: ${personne.adresse}`);
  }
}

let personne1: Personne = { nom: "Alice", age: 30 };
let personne2: Personne = { nom: "Bob", age: 25, adresse: "Paris" };

afficherPersonne(personne1); // Affiche "Nom: Alice, Age: 30"
afficherPersonne(personne2); // Affiche "Nom: Bob, Age: 25, Adresse: Paris"
```
> Dans cet exemple, nous définissons une interface "Personne" qui spécifie les propriétés attendues : "nom" de type "string" et "age" de type "number". La propriété "adresse" est facultative grâce à l'opérateur "?".

> Ensuite, nous déclarons une fonction "afficherPersonne" qui prend en paramètre un objet de type "Personne" et affiche ses détails. Si la propriété "adresse" est présente, elle est également affichée.

> Nous créons deux objets "personne1" et "personne2" qui correspondent à la structure de l'interface "Personne". Nous utilisons ensuite la fonction "afficherPersonne" pour afficher les détails de chaque personne.

> "Les interfaces permettent de définir des contrats ou des structures de données réutilisables, en spécifiant les propriétés et les méthodes attendues dans un objet. Cela facilite la création de structures de données cohérentes et l'interopérabilité entre différentes parties du code."


## 39 - Interfaces avec les classes
```typescript
interface Animal {
  faireDuBruit(): void;
}

class Chien implements Animal {
  faireDuBruit(): void {
    console.log("Chien : Fait Wouaf!");
  }
}

class Chat implements Animal {
  faireDuBruit(): void {
    console.log("Chat : Fait Miaou!");
  }
}

function faireDuBruitAnimaux(animaux: Animal[]): void {
  animaux.forEach(animal => animal.faireDuBruit());
}

let chien: Animal = new Chien();
let chat: Animal = new Chat();

faireDuBruitAnimaux([chien, chat]); // Affiche "Chien : Fait Wouaf!" suivi de "Chat : Fait Miaou!"
```
> Dans cet exemple, nous définissons une interface "Animal" avec une méthode "faireDuBruit" qui ne renvoie rien (void).

> Ensuite, nous définissons deux classes : "Chien" et "Chat", qui implémentent l'interface "Animal" en fournissant une implémentation pour la méthode "faireDuBruit".

> Nous déclarons également une fonction "faireDuBruitAnimaux" qui prend un tableau d'animaux de type "Animal[]" en paramètre. Cette fonction itère sur chaque animal du tableau et appelle la méthode "faireDuBruit".

> Nous créons des instances de "Chien" et "Chat" et les passons à la fonction "faireDuBruitAnimaux". Le résultat est l'affichage du bruit spécifique à chaque animal : "Chien : Fait Wouaf!" suivi de "Chat : Fait Miaou!".

> L'utilisation d'interfaces avec les classes permet de définir un contrat commun pour les méthodes que les classes doivent implémenter. Cela facilite le polymorphisme et l'utilisation de différentes classes de manière interchangeable.



## 41 - Classes Abstraites - Abstract
```typescript
abstract class Forme {
  abstract calculerSurface(): number;
  abstract calculerPerimetre(): number;

  afficherDetails(): void {
    console.log(`Surface: ${this.calculerSurface()}, Périmètre: ${this.calculerPerimetre()}`);
  }
}

class Carre extends Forme {
  constructor(private cote: number) {
    super();
  }

  calculerSurface(): number {
    return this.cote * this.cote;
  }

  calculerPerimetre(): number {
    return 4 * this.cote;
  }
}

let carre = new Carre(5);
carre.afficherDetails(); // Affiche "Surface: 25, Périmètre: 20"
```
> Dans cet exemple, nous utilisons le mot-clé "abstract" pour définir une classe abstraite "Forme". Une classe abstraite ne peut pas être instanciée directement, mais elle sert de classe de base pour d'autres classes qui en héritent.

> La classe abstraite "Forme" déclare deux méthodes abstraites : "calculerSurface" et "calculerPerimetre". Ces méthodes sont définies dans les classes dérivées, et chaque classe dérivée doit fournir une implémentation pour ces méthodes.

> La classe abstraite "Forme" fournit également une méthode concrète "afficherDetails" qui utilise les méthodes abstraites pour afficher la surface et le périmètre d'une forme.

> Nous créons une classe dérivée "Carre" qui étend la classe abstraite "Forme". Cette classe implémente les méthodes abstraites "calculerSurface" et "calculerPerimetre" en fonction des spécificités du carré.

> Nous créons ensuite une instance de "Carre" avec une longueur de côté de 5 et appelons la méthode "afficherDetails" pour afficher la surface et le périmètre du carré.

> Les classes abstraites sont utiles pour définir des modèles communs et des comportements généraux, tout en laissant les détails d'implémentation aux classes dérivées. Elles fournissent une structure de base solide pour l'héritage et le polymorphisme.


## 42 - Generics
```typescript
function premierElement<T>(tableau: T[]): T | undefined {
  if (tableau.length === 0) {
    return undefined;
  }
  return tableau[0];
}

let nombres: number[] = [1, 2, 3, 4, 5];
let premierNombre: number | undefined = premierElement(nombres);
console.log(premierNombre); // Affiche le premier élément du tableau : 1

let chaines: string[] = ["Bonjour", "monde"];
let premierMot: string | undefined = premierElement(chaines);
console.log(premierMot); // Affiche le premier élément du tableau : "Bonjour"
```
> Dans cet exemple, nous utilisons les generics pour créer une fonction générique "premierElement". Cette fonction prend un tableau de type "T[]" en paramètre et renvoie le premier élément du tableau de type "T" ou "undefined" si le tableau est vide.

> Nous déclarons deux tableaux : "nombres" contenant des nombres et "chaines" contenant des chaînes de caractères. En appelant la fonction "premierElement" avec ces tableaux, nous obtenons le premier élément de chaque tableau.

> L'utilisation des generics permet de créer des fonctions et des structures de données réutilisables et flexibles. Les generics permettent de créer du code générique qui peut fonctionner avec différents types de données, en évitant la duplication de code spécifique à chaque type.


## 43 - Generics avec Interfaces
```typescript
// TypeScript:
interface Boite<T> {
  contenu: T;
}

let boiteNombre: Boite<number> = { contenu: 42 };
console.log(boiteNombre.contenu); // Affiche le contenu de la boîte : 42

let boiteChaine: Boite<string> = { contenu: "Bonjour" };
console.log(boiteChaine.contenu); // Affiche le contenu de la boîte : "Bonjour"
```
> Dans cet exemple, nous utilisons les generics avec une interface "Boite". L'interface "Boite" est définie avec un type générique "T" qui représente le type du contenu de la boîte.

> Nous déclarons une variable "boiteNombre" de type "Boite<number>" qui contient le nombre 42. En accédant à la propriété "contenu" de la boîte, nous obtenons le nombre 42.

> De même, nous déclarons une variable "boiteChaine" de type "Boite<string>" qui contient la chaîne de caractères "Bonjour". En accédant à la propriété "contenu" de la boîte, nous obtenons la chaîne de caractères "Bonjour".

> L'utilisation des generics avec les interfaces permet de créer des structures de données réutilisables qui peuvent contenir différents types de données. Cela offre une grande flexibilité dans la manipulation des données.


## 44 - Generics avec les classes
```typescript
class Boite<T> {
  contenu: T;

  constructor(contenu: T) {
    this.contenu = contenu;
  }

  afficherContenu(): void {
    console.log(this.contenu);
  }
}

let boiteNombre: Boite<number> = new Boite<number>(42);
boiteNombre.afficherContenu(); // Affiche le contenu de la boîte : 42

let boiteChaine: Boite<string> = new Boite<string>("Bonjour");
boiteChaine.afficherContenu(); // Affiche le contenu de la boîte : "Bonjour"
```
> Dans cet exemple, nous utilisons les generics avec une classe "Boite". La classe "Boite" est définie avec un type générique "T" qui représente le type du contenu de la boîte.

> La classe "Boite" possède une propriété "contenu" de type "T" et un constructeur qui prend en paramètre le contenu de la boîte.

> Nous créons ensuite une instance de la classe "Boite" en spécifiant le type générique. Par exemple, "Boite<number>" crée une boîte qui contient un nombre.

> En appelant la méthode "afficherContenu()" sur chaque instance de "Boite", nous affichons le contenu de la boîte, qui est spécifique au type générique utilisé.

> L'utilisation des generics avec les classes permet de créer des classes réutilisables qui peuvent être paramétrées avec différents types de données. Cela facilite la création de structures de données génériques et flexibles.

## 45 - Utility Types - Partial
```typescript
interface Utilisateur {
  nom: string;
  age: number;
  adresse: string;
}

function mettreAJourUtilisateur(utilisateur: Utilisateur, miseAJour: Partial<Utilisateur>): Utilisateur {
  return { ...utilisateur, ...miseAJour };
}

let utilisateur: Utilisateur = {
  nom: "Alice",
  age: 30,
  adresse: "123 rue Principale"
};

let miseAJourUtilisateur: Partial<Utilisateur> = {
  age: 31
};

let utilisateurMiseAJour: Utilisateur = mettreAJourUtilisateur(utilisateur, miseAJourUtilisateur);
console.log(utilisateurMiseAJour);
// Affiche l'utilisateur avec l'âge mis à jour : { nom: "Alice", age: 31, adresse: "123 rue Principale" }
```
> Dans cet exemple, nous utilisons l'utilitaire "Partial" fourni par TypeScript. L'utilitaire "Partial" permet de créer un type qui rend toutes les propriétés d'une interface optionnelles.

> Nous avons une interface "Utilisateur" avec plusieurs propriétés : "nom", "age" et "adresse".

> La fonction "mettreAJourUtilisateur" prend deux paramètres : "utilisateur" de type "Utilisateur" et "miseAJour" de type "Partial<Utilisateur>". La fonction fusionne les deux objets en utilisant l'opérateur de décomposition (...), ce qui permet de mettre à jour les propriétés spécifiées dans "miseAJour" sans affecter les autres propriétés de l'utilisateur.

> Nous créons un utilisateur initial avec un nom, un âge et une adresse. Ensuite, nous créons un objet "miseAJourUtilisateur" de type "Partial<Utilisateur>" qui contient uniquement l'âge mis à jour.

> En appelant la fonction "mettreAJourUtilisateur" avec l'utilisateur initial et l'objet de mise à jour, nous obtenons un nouvel utilisateur avec les propriétés mises à jour.

> L'utilitaire "Partial" est utile lorsque vous souhaitez mettre à jour partiellement un objet sans avoir à spécifier toutes ses propriétés.

## 46 - Utility Types - Readonly
```typescript
interface Utilisateur {
  readonly nom: string;
  readonly age: number;
}

let utilisateur: Readonly<Utilisateur> = {
  nom: "Alice",
  age: 30
};

// Tentative de modification des propriétés en lecture seule
utilisateur.nom = "Bob"; // Erreur : impossible de modifier une propriété en lecture seule
utilisateur.age = 31; // Erreur : impossible de modifier une propriété en lecture seule
```

> Dans cet exemple, nous utilisons l'utilitaire "Readonly" fourni par TypeScript. L'utilitaire "Readonly" permet de créer un type qui rend toutes les propriétés d'une interface en lecture seule.

> Nous avons une interface "Utilisateur" avec deux propriétés en lecture seule : "nom" et "age". Cela signifie que ces propriétés ne peuvent pas être modifiées une fois qu'elles ont été définies.

> Nous créons une variable "utilisateur" de type "Readonly<Utilisateur>" qui contient un utilisateur initial avec un nom et un âge.

> Ensuite, nous essayons de modifier les propriétés de l'utilisateur, ce qui génère des erreurs. Les propriétés en lecture seule ne peuvent pas être modifiées directement.

> L'utilitaire "Readonly" est utile lorsque vous souhaitez définir des objets immuables où les propriétés ne peuvent pas être modifiées après leur création.


## 47 - Utility Types - Record
```typescript
type Produit = "Chaise" | "Table" | "Lampe";

interface Inventaire {
  quantite: number;
  emplacement: string;
}

let inventaire: Record<Produit, Inventaire> = {
  Chaise: { quantite: 5, emplacement: "Salle à manger" },
  Table: { quantite: 2, emplacement: "Salon" },
  Lampe: { quantite: 10, emplacement: "Chambre" }
};

console.log(inventaire.Chaise); // Affiche l'inventaire de la chaise : { quantite: 5, emplacement: "Salle à manger" }
console.log(inventaire.Table); // Affiche l'inventaire de la table : { quantite: 2, emplacement: "Salon" }
console.log(inventaire.Lampe); // Affiche l'inventaire de la lampe : { quantite: 10, emplacement: "Chambre" }
```
> Dans cet exemple, nous utilisons l'utilitaire "Record" fourni par TypeScript. L'utilitaire "Record" permet de créer un type qui associe des clés à des valeurs d'un autre type.

> Nous définissons un type "Produit" qui représente les différents produits disponibles. Il s'agit d'une union de types avec les valeurs "Chaise", "Table" et "Lampe".

> Nous avons également une interface "Inventaire" qui représente la quantité et l'emplacement d'un produit dans l'inventaire.

> Ensuite, nous créons une variable "inventaire" de type "Record<Produit, Inventaire>" qui associe chaque produit à son inventaire correspondant.

> Nous accédons ensuite aux valeurs de l'inventaire en utilisant les clés "Chaise", "Table" et "Lampe". Chaque clé nous renvoie l'inventaire correspondant à ce produit.

> L'utilitaire "Record" est utile lorsque vous avez besoin de créer des associations clé-valeur avec des types spécifiques.


## 48 - Utility Types - Pick
```typescript
interface Utilisateur {
  nom: string;
  age: number;
  adresse: string;
  email: string;
}

type UtilisateurBasique = Pick<Utilisateur, "nom" | "age">;

let utilisateur: Utilisateur = {
  nom: "Alice",
  age: 30,
  adresse: "123 rue Principale",
  email: "alice@example.com"
};

let utilisateurBasique: UtilisateurBasique = {
  nom: utilisateur.nom,
  age: utilisateur.age
};

console.log(utilisateurBasique);
// Affiche les propriétés nom et age de l'utilisateur : { nom: "Alice", age: 30 }
```
> Dans cet exemple, nous utilisons l'utilitaire "Pick" fourni par TypeScript. L'utilitaire "Pick" permet de créer un type qui sélectionne uniquement les propriétés spécifiées d'une interface.

> Nous avons une interface "Utilisateur" avec plusieurs propriétés : "nom", "age", "adresse" et "email".

> Ensuite, nous utilisons l'utilitaire "Pick<Utilisateur, "nom" | "age">" pour créer un nouveau type "UtilisateurBasique" qui contient uniquement les propriétés "nom" et "age" de l'interface "Utilisateur".

> Nous créons un utilisateur initial avec toutes les propriétés. Ensuite, nous créons un objet "utilisateurBasique" de type "UtilisateurBasique" en sélectionnant uniquement les propriétés "nom" et "age" de l'utilisateur initial.

> En affichant "utilisateurBasique", nous obtenons un nouvel objet contenant uniquement les propriétés sélectionnées.

> L'utilitaire "Pick" est utile lorsque vous souhaitez extraire un sous-ensemble spécifique de propriétés d'une interface pour créer un nouveau type.


## 49 - Utility Type - Omit
```typescript
interface Utilisateur {
  nom: string;
  age: number;
  adresse: string;
  email: string;
}

type UtilisateurSansEmail = Omit<Utilisateur, "email">;

let utilisateur: Utilisateur = {
  nom: "Alice",
  age: 30,
  adresse: "123 rue Principale",
  email: "alice@example.com"
};

let utilisateurSansEmail: UtilisateurSansEmail = {
  nom: utilisateur.nom,
  age: utilisateur.age,
  adresse: utilisateur.adresse
};

console.log(utilisateurSansEmail);
// Affiche les propriétés nom, age et adresse de l'utilisateur : { nom: "Alice", age: 30, adresse: "123 rue Principale" }
```
> Dans cet exemple, nous utilisons l'utilitaire "Omit" fourni par TypeScript. L'utilitaire "Omit" permet de créer un type qui exclut les propriétés spécifiées d'une interface.

> Nous avons une interface "Utilisateur" avec plusieurs propriétés : "nom", "age", "adresse" et "email".

> Ensuite, nous utilisons l'utilitaire "Omit<Utilisateur, "email">" pour créer un nouveau type "UtilisateurSansEmail" qui exclut la propriété "email" de l'interface "Utilisateur".

> Nous créons un utilisateur initial avec toutes les propriétés. Ensuite, nous créons un objet "utilisateurSansEmail" de type "UtilisateurSansEmail" en excluant la propriété "email" de l'utilisateur initial.

> En affichant "utilisateurSansEmail", nous obtenons un nouvel objet contenant toutes les propriétés de l'utilisateur initial, à l'exception de "email".

> L'utilitaire "Omit" est utile lorsque vous souhaitez créer un nouveau type en excluant certaines propriétés spécifiques d'une interface.


## 50 - Utility Type - Exclude
```typescript
type Couleur = "Rouge" | "Vert" | "Bleu";
type CouleurPrimaire = "Rouge" | "Bleu";

type CouleurNonPrimaire = Exclude<Couleur, CouleurPrimaire>;

let couleur: CouleurNonPrimaire = "Vert";

console.log(couleur);
// Affiche la couleur non primaire : "Vert"
```

> Dans cet exemple, nous utilisons l'utilitaire "Exclude" fourni par TypeScript. L'utilitaire "Exclude" permet de créer un type qui exclut les types spécifiés d'une union de types.

> Nous définissons d'abord deux types : "Couleur" et "CouleurPrimaire". "Couleur" est une union de types représentant différentes couleurs, tandis que "CouleurPrimaire" est une union de types représentant les couleurs primaires.

> Ensuite, nous utilisons l'utilitaire "Exclude<Couleur, CouleurPrimaire>" pour créer un nouveau type "CouleurNonPrimaire" qui exclut les couleurs primaires de l'union de types "Couleur".

> Nous créons une variable "couleur" de type "CouleurNonPrimaire" qui peut contenir une couleur non primaire.

> En affichant "couleur", nous obtenons une couleur non primaire, dans ce cas "Vert".

> L'utilitaire "Exclude" est utile lorsque vous souhaitez créer un nouveau type en excluant certains types spécifiques d'une union de types.


## 51 - Utility Type - Extract
```typescript
type Couleur = "Rouge" | "Vert" | "Bleu";
type CouleurPrimaire = "Rouge" | "Bleu";

type CouleurExtraite = Extract<Couleur, CouleurPrimaire>;

let couleur: CouleurExtraite = "Rouge";

console.log(couleur);
// Affiche la couleur extraite : "Rouge"
```
> Dans cet exemple, nous utilisons l'utilitaire "Extract" fourni par TypeScript. L'utilitaire "Extract" permet de créer un type qui extrait les types spécifiés d'une union de types.

> Nous définissons d'abord deux types : "Couleur" et "CouleurPrimaire". "Couleur" est une union de types représentant différentes couleurs, tandis que "CouleurPrimaire" est une union de types représentant les couleurs primaires.

> Ensuite, nous utilisons l'utilitaire "Extract<Couleur, CouleurPrimaire>" pour créer un nouveau type "CouleurExtraite" qui extrait les couleurs primaires de l'union de types "Couleur".

> Nous créons une variable "couleur" de type "CouleurExtraite" qui peut contenir une couleur extraite, c'est-à-dire une couleur primaire.

> En affichant "couleur", nous obtenons une couleur extraite, dans ce cas "Rouge".

> L'utilitaire "Extract" est utile lorsque vous souhaitez créer un nouveau type en extrayant certains types spécifiques d'une union de types.


## 52 - Utility Type - NonNullable
```typescript
type Couleur = string | null | undefined;
type CouleurNonNullable = NonNullable<Couleur>;

let couleur: CouleurNonNullable = "Rouge";

console.log(couleur);
// Affiche la couleur non nullable : "Rouge"
```
> Dans cet exemple, nous utilisons l'utilitaire "NonNullable" fourni par TypeScript. L'utilitaire "NonNullable" permet de créer un type qui exclut les valeurs null et undefined d'un type donné.

> Nous définissons un type "Couleur" qui peut être une chaîne de caractères, null ou undefined.

> Ensuite, nous utilisons l'utilitaire "NonNullable<Couleur>" pour créer un nouveau type "CouleurNonNullable" qui exclut les valeurs null et undefined du type "Couleur".

> Nous créons une variable "couleur" de type "CouleurNonNullable" qui peut contenir une couleur non nullable.

> En affichant "couleur", nous obtenons une couleur non nullable, dans ce cas "Rouge".

> L'utilitaire "NonNullable" est utile lorsque vous souhaitez créer un nouveau type en excluant les valeurs null et undefined d'un type existant.


## 53 - Utility Type - Parameters
```typescript
type Fonction = (nom: string, age: number) => void;
type ParametresFonction = Parameters<Fonction>;

function afficherUtilisateur(nom: string, age: number) {
  console.log(`Utilisateur: ${nom}, Age: ${age}`);
}

let parametres: ParametresFonction = ["Alice", 30];

afficherUtilisateur(...parametres);
// Affiche: Utilisateur: Alice, Age: 30
```
> Dans cet exemple, nous utilisons l'utilitaire "Parameters" fourni par TypeScript. L'utilitaire "Parameters" permet d'obtenir le type des paramètres d'une fonction donnée.

> Nous définissons un type "Fonction" qui représente une fonction prenant deux paramètres : "nom" de type string et "age" de type number, et ne renvoyant rien (void).

> Ensuite, nous utilisons l'utilitaire "Parameters<Fonction>" pour créer un nouveau type "ParametresFonction" qui correspond au type des paramètres de la fonction "Fonction".

> Nous définissons une fonction "afficherUtilisateur" qui prend deux paramètres : "nom" et "age", et affiche les informations de l'utilisateur.

> Nous créons une variable "parametres" de type "ParametresFonction" en fournissant les valeurs des paramètres de la fonction "afficherUtilisateur".

> En utilisant l'opérateur de décomposition (...), nous passons les paramètres de "parametres" à la fonction "afficherUtilisateur".

> L'appel de la fonction affichera les informations de l'utilisateur avec les valeurs fournies.

> L'utilitaire "Parameters" est utile lorsque vous souhaitez obtenir le type des paramètres d'une fonction et les réutiliser dans d'autres parties de votre code.

## 54 - Utility Type - ReturnType
```typescript
type Fonction = () => string;
type TypeRetour = ReturnType<Fonction>;

function obtenirMessage(): string {
  return "Bonjour, monde!";
}

let message: TypeRetour = obtenirMessage();

console.log(message);
// Affiche: Bonjour, monde!
```
> Dans cet exemple, nous utilisons l'utilitaire "ReturnType" fourni par TypeScript. L'utilitaire "ReturnType" permet d'obtenir le type de retour d'une fonction donnée.

> Nous définissons un type "Fonction" qui représente une fonction ne prenant aucun paramètre et renvoyant une chaîne de caractères.

> Ensuite, nous utilisons l'utilitaire "ReturnType<Fonction>" pour créer un nouveau type "TypeRetour" qui correspond au type de retour de la fonction "Fonction".

> Nous définissons une fonction "obtenirMessage" qui ne prend aucun paramètre et renvoie une chaîne de caractères "Bonjour, monde!".

> Nous créons une variable "message" de type "TypeRetour" qui récupère la valeur de retour de la fonction "obtenirMessage".

> En affichant "message", nous obtenons le message "Bonjour, monde!".

> L'utilitaire "ReturnType" est utile lorsque vous souhaitez obtenir le type de retour d'une fonction et l'utiliser dans d'autres parties de votre code.


## 56 - tsconfig - RootDir - OutDir
```markdown
Le fichier de configuration tsconfig.json est utilisé pour spécifier les options de configuration du compilateur TypeScript. Parmi ces options, nous avons notamment "rootDir" et "outDir".

- "rootDir" : L'option "rootDir" permet de spécifier le répertoire racine où se trouvent les fichiers TypeScript à compiler. Cela permet d'organiser efficacement les fichiers sources TypeScript dans une structure hiérarchique.

Voici un exemple de configuration tsconfig.json avec l'option "rootDir" :
```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```
"Dans cet exemple, le répertoire racine des fichiers TypeScript est défini comme "./src". Cela signifie que tous les fichiers TypeScript à compiler doivent être situés dans le répertoire "./src".

"outDir" : L'option "outDir" permet de spécifier le répertoire de sortie où les fichiers JavaScript générés par le compilateur TypeScript seront placés.
Dans l'exemple de configuration tsconfig.json ci-dessus, le répertoire de sortie est défini comme "./dist". Cela signifie que les fichiers JavaScript résultants seront placés dans le répertoire "./dist".

Lorsque vous exécutez le compilateur TypeScript avec cette configuration, il analysera tous les fichiers TypeScript situés dans le répertoire racine ("rootDir") et générera les fichiers JavaScript correspondants dans le répertoire de sortie ("outDir").

Cela permet d'organiser facilement les fichiers sources et les fichiers générés dans des répertoires distincts, ce qui facilite la gestion et le déploiement de votre projet TypeScript."

## 57 - tsconfig - Include - Exclude
Le fichier de configuration tsconfig.json offre également les options "include" et "exclude" qui permettent de spécifier les fichiers TypeScript à inclure ou exclure lors de la compilation.

- "include" : L'option "include" permet de spécifier les fichiers TypeScript à inclure dans le processus de compilation. Vous pouvez utiliser des motifs de correspondance de fichiers (globs) pour définir les fichiers à inclure. Par exemple :
```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": [
    "./src/**/*.ts"
  ]
}
```
Dans cet exemple, tous les fichiers TypeScript présents dans le répertoire "./src" et ses sous-répertoires seront inclus dans la compilation.

"exclude" : L'option "exclude" permet de spécifier les fichiers TypeScript à exclure de la compilation. Vous pouvez également utiliser des motifs de correspondance de fichiers (globs) pour définir les fichiers à exclure. Par exemple :
```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "exclude": [
    "./src/test/**/*.ts"
  ]
}
```
Dans cet exemple, tous les fichiers TypeScript présents dans le répertoire "./src/test" et ses sous-répertoires seront exclus de la compilation.

En utilisant les options "include" et "exclude", vous pouvez spécifier précisément quels fichiers TypeScript doivent être inclus ou exclus lors du processus de compilation. Cela vous permet de gérer efficacement les dépendances et les fichiers sources dans votre projet TypeScript.

## 58 - tsconfig - Lib
Le fichier de configuration tsconfig.json offre l'option "lib" qui permet de spécifier les bibliothèques TypeScript à inclure lors de la compilation.

Les bibliothèques TypeScript fournissent des définitions de types pour les fonctionnalités et les objets JavaScript courants. Lorsque vous utilisez l'option "lib", vous spécifiez les bibliothèques que vous souhaitez utiliser dans votre projet TypeScript.

Voici un exemple de configuration tsconfig.json avec l'option "lib" :
```json
{
  "compilerOptions": {
    "lib": ["es6", "dom"]
  }
}
```
Dans cet exemple, les bibliothèques "es6" et "dom" sont spécifiées. Cela signifie que les définitions de types correspondantes seront incluses lors de la compilation, ce qui vous permettra d'accéder aux fonctionnalités ES6 (par exemple, les classes, les fonctions fléchées) ainsi qu'aux fonctionnalités DOM (par exemple, les objets Document, Element).

Vous pouvez spécifier différentes bibliothèques en fonction des besoins de votre projet. Les bibliothèques les plus couramment utilisées incluent "es5", "es6", "dom", "webworker", "scripthost", etc.

Il est important de choisir les bibliothèques appropriées en fonction des fonctionnalités que vous utilisez dans votre projet. Cela garantit que le compilateur TypeScript dispose des définitions de types nécessaires pour valider votre code correctement.

## 59 - tsconfig - Options de base
Le fichier de configuration tsconfig.json offre de nombreuses options de configuration pour personnaliser le comportement du compilateur TypeScript. Voici quelques-unes des options de base les plus couramment utilisées :

- "target" : L'option "target" spécifie la version ECMAScript cible pour la compilation. Par exemple, vous pouvez utiliser "es5" pour cibler ECMAScript 5, ou "es6" pour cibler ECMAScript 2015 (ES6). La valeur par défaut est "es3".

- "module" : L'option "module" spécifie le système de modules à utiliser lors de la génération du code. Les valeurs courantes sont "commonjs" pour les modules CommonJS, "amd" pour les modules Asynchronous Module Definition (AMD), "es2015" pour les modules ECMAScript 2015, etc. La valeur par défaut est "commonjs".

- "outDir" : L'option "outDir" spécifie le répertoire de sortie où les fichiers JavaScript générés seront placés. Par exemple, vous pouvez définir "outDir" sur "./dist" pour générer les fichiers JavaScript dans le répertoire "dist".

- "rootDir" : L'option "rootDir" spécifie le répertoire racine où se trouvent les fichiers TypeScript à compiler. Cela permet d'organiser efficacement les fichiers sources TypeScript dans une structure hiérarchique.

- "strict" : L'option "strict" active un ensemble de vérifications de type strictes. Lorsque "strict" est activé, TypeScript effectue des vérifications supplémentaires pour garantir un code plus sûr. Par exemple, il vérifie l'utilisation des types, l'affectation de valeurs null et undefined, etc.
- "allowJs" : L'option "allowJs" permet la compilation de fichiers JavaScript dans votre projet TypeScript. Lorsqu'elle est activée, TypeScript accepte les fichiers JavaScript et les compile en JavaScript.

- "checkJs" : L'option "checkJs" permet de vérifier les fichiers JavaScript pendant la compilation TypeScript. Elle active des vérifications supplémentaires pour détecter les erreurs potentielles dans les fichiers JavaScript.

- "declarationMap" : L'option "declarationMap" génère des fichiers de mappage (.map) pour les fichiers de déclaration (.d.ts). Ces fichiers de mappage facilitent le débogage du code TypeScript à l'aide des outils de développement.

- "sourceMap" : L'option "sourceMap" génère des fichiers de mappage (.map) pour les fichiers JavaScript générés. Ces fichiers de mappage permettent de relier le code JavaScript au code TypeScript d'origine lors du débogage.

- "removeComments" : L'option "removeComments" supprime les commentaires des fichiers JavaScript générés lors de la compilation. Cela permet de réduire la taille des fichiers de sortie.

- "noEmit" : L'option "noEmit" indique au compilateur TypeScript de ne pas générer les fichiers JavaScript en sortie. Utile lorsque vous souhaitez uniquement effectuer des vérifications de type sans générer de code JavaScript.

- "declaration" : L'option "declaration" génère des fichiers de déclaration (.d.ts) correspondant aux fichiers TypeScript compilés. Les fichiers de déclaration permettent d'utiliser votre code TypeScript depuis d'autres projets ou langages qui prennent en charge les fichiers de déclaration.


Ces options de base vous permettent de personnaliser le comportement du compilateur TypeScript en fonction des besoins de votre projet. Vous pouvez les spécifier dans votre fichier tsconfig.json pour configurer le projet.

## 60 - tsconfig - Le reste des options
Le fichier de configuration tsconfig.json propose également d'autres options pour affiner le comportement du compilateur TypeScript. Voici quelques-unes de ces options supplémentaires :

- "esModuleInterop" : L'option "esModuleInterop" permet l'utilisation d'interopérabilité entre les modules ECMAScript et CommonJS. Elle simplifie l'utilisation de modules ECMAScript dans un projet utilisant CommonJS.

- "strictNullChecks" : L'option "strictNullChecks" active des vérifications de type strictes pour les valeurs null et undefined. Elle aide à éviter les erreurs courantes liées à l'accès à des variables potentiellement nulles ou non définies.

- "noImplicitThis" : L'option "noImplicitThis" signale une erreur lorsque le mot-clé "this" est utilisé dans un contexte qui n'a pas de type défini. Cela aide à éviter les erreurs liées à l'utilisation incorrecte du mot-clé "this".

- "noUnusedLocals" : L'option "noUnusedLocals" signale une erreur lorsque des variables locales sont déclarées mais jamais utilisées. Cela aide à détecter les variables inutiles dans votre code.

- "noUnusedParameters" : L'option "noUnusedParameters" signale une erreur lorsque des paramètres de fonction sont déclarés mais jamais utilisés. Cela permet de repérer les paramètres inutilisés dans vos fonctions.

- "strictFunctionTypes" : L'option "strictFunctionTypes" applique une vérification de type stricte pour les fonctions et leurs types de paramètres. Elle aide à garantir une correspondance stricte des types pour les fonctions.

- "noImplicitReturns" : L'option "noImplicitReturns" signale une erreur lorsque toutes les branches d'une fonction n'ont pas de déclaration de retour explicite. Cela aide à éviter les oublis de déclaration de retour dans vos fonctions.

- "noImplicitAny" : L'option "noImplicitAny" signale une erreur lorsque TypeScript ne peut pas déduire le type d'une variable et que le type "any" est implicite. Cela vous encourage à spécifier explicitement les types des variables plutôt que de les laisser non typées.

- "strictBindCallApply" : L'option "strictBindCallApply" applique des vérifications strictes pour les fonctions bind, call et apply. Elle vous encourage à utiliser ces fonctions avec les types de paramètres appropriés.

- "strictPropertyInitialization" : L'option "strictPropertyInitialization" signale une erreur si une propriété de classe n'est pas initialisée dans le constructeur ou avec une valeur par défaut. Cela garantit que toutes les propriétés de classe sont correctement initialisées avant leur utilisation.

- "alwaysStrict" : L'option "alwaysStrict" indique au compilateur TypeScript de générer du code JavaScript en mode strict. Cela active les vérifications strictes de type et de syntaxe pour garantir un code plus sûr.

## 61 - Modules Namespaces

En TypeScript, les modules permettent d'organiser le code en compartiments logiques et d'éviter les collisions entre les noms. Les modules peuvent être utilisés à l'aide de deux approches : les modules basés sur les fichiers et les modules basés sur les espaces de noms (namespaces).

Les modules basés sur les fichiers utilisent des fichiers physiques pour définir des modules et des dépendances entre eux. Ils sont largement utilisés dans les projets TypeScript modernes, et leur utilisation est recommandée.

Les espaces de noms (namespaces) permettent également d'organiser le code en compartiments logiques, mais ils sont principalement utilisés dans des scénarios de migration depuis du code JavaScript existant vers TypeScript. Les espaces de noms sont définis à l'aide du mot-clé `namespace`.

Voici un exemple illustrant l'utilisation d'un espace de noms :

```typescript
// Déclaration d'un espace de noms
namespace MonEspaceDeNoms {
  // Déclaration d'une classe à l'intérieur de l'espace de noms
  export class MaClasse {
    // ...
  }

  // Déclaration d'une fonction à l'intérieur de l'espace de noms
  export function maFonction() {
    // ...
  }
}

// Utilisation de la classe et de la fonction à partir de l'espace de noms
const instance = new MonEspaceDeNoms.MaClasse();
MonEspaceDeNoms.maFonction();
```
> Dans cet exemple, nous définissons un espace de noms appelé MonEspaceDeNoms, dans lequel nous déclarons une classe MaClasse et une fonction maFonction. Ces éléments sont accessibles à l'extérieur de l'espace de noms grâce à l'utilisation du mot-clé export. Ensuite, nous utilisons la classe et la fonction en les préfixant avec le nom de l'espace de noms.

> Il est recommandé d'utiliser les modules basés sur les fichiers plutôt que les espaces de noms pour organiser votre code TypeScript, car les modules offrent une meilleure encapsulation, une meilleure gestion des dépendances et une meilleure extensibilité.

> Modifications au niveau du tsconfig : 
"outFile": "./public/bundle.js",   
"module": "amd", 

## 62 - Modules ES6 : Importation et Exportation

En TypeScript, vous pouvez utiliser les modules ES6 pour organiser votre code et gérer les dépendances entre les différents fichiers. Les modules ES6 offrent une syntaxe simple et expressive pour importer et exporter du code.

Voici un exemple d'importation et d'exportation de modules ES6 en TypeScript :

**Fichier moduleA.ts**
```typescript
// Exportation d'une fonction
export function maFonction() {
  // ...
}

// Exportation d'une constante
export const maConstante = "Valeur";
```
**Fichier moduleB.ts**

```typescript
// Importation de la fonction et de la constante depuis moduleA.ts
import { maFonction, maConstante } from "./moduleA";

// Utilisation de la fonction et de la constante
maFonction();
console.log(maConstante);
```
> Dans cet exemple, le fichier moduleA.ts exporte une fonction maFonction et une constante maConstante à l'aide du mot-clé export. Le fichier moduleB.ts importe ensuite ces éléments spécifiques depuis moduleA.ts en utilisant la syntaxe import { ... } from "chemin/vers/moduleA". Vous pouvez ensuite utiliser les éléments importés normalement dans le fichier moduleB.ts.

> Il existe également d'autres formes d'importation et d'exportation dans les modules ES6, telles que l'importation/exportation par défaut (default) et l'importation/exportation groupée (* as). Ces fonctionnalités permettent une plus grande flexibilité dans la gestion des modules.

> Les modules ES6 offrent une méthode moderne et standardisée pour organiser votre code TypeScript et gérer les dépendances entre les fichiers. Ils sont largement utilisés dans les projets TypeScript actuels.


## 74 - Introduction aux Decorators

Les decorators sont une fonctionnalité avancée de TypeScript qui permet d'ajouter des métadonnées et de modifier le comportement des classes, méthodes, propriétés et paramètres de fonction. Les decorators sont souvent utilisés dans le développement d'applications basées sur des frameworks tels que Angular.

Voici un exemple simple d'utilisation d'un decorator :

```typescript
// Définition d'un decorator
function log(target: any, key: string) {
  // Logique du decorator
  console.log(`Le decorator log a été appliqué à la méthode ${key} de la classe ${target.constructor.name}`);
}//Le decorator log a été appliqué à la méthode maMethode de la classe MaClasse

// Utilisation du decorator
class MaClasse {
  @log
  maMethode() {
    // ...
  }
}
```
> Dans cet exemple, nous définissons un decorator appelé log. Le decorator prend deux paramètres : target qui représente la classe ou l'objet cible, et key qui représente le nom de la méthode ou de la propriété cible. Dans la logique du decorator, nous affichons un message indiquant quelle méthode a été décorée et à quelle classe elle appartient.

> En utilisant le decorator log avec l'annotation @log au-dessus de la méthode maMethode, nous appliquons le decorator à cette méthode. Ainsi, chaque fois que la méthode est appelée, le message défini dans le decorator sera affiché.

> Les decorators offrent une grande flexibilité et peuvent être utilisés pour ajouter des fonctionnalités supplémentaires aux classes et aux objets, telles que la validation des entrées, la journalisation, l'injection de dépendances, etc.

> Il existe plusieurs types de decorators en TypeScript, tels que les decorators de classe, de méthode, de propriété et de paramètre de fonction. Chaque type de decorator a une signature et un comportement spécifiques.

## 75 - Decorators Factories

Les decorators factories sont une fonctionnalité avancée de TypeScript qui permet de créer des decorators paramétrisés. Les decorators factories sont des fonctions qui retournent des decorators, ce qui permet de les configurer avec des paramètres.

Voici un exemple d'utilisation d'un decorator factory :

```typescript
// Définition d'un decorator factory
function log(message: string) {
  // Définition du decorator
  return function (target: any, key: string) {
    // Logique du decorator
    console.log(`[${message}] - Le decorator log a été appliqué à la méthode ${key} de la classe ${target.constructor.name}`);
  };
}

// Utilisation du decorator factory
class MaClasse {
  @log("Message de log")
  maMethode() {
    // ...
  }
}
```

> Dans cet exemple, nous définissons un decorator factory appelé log. Le decorator factory prend un paramètre message qui représente le message de log à afficher. À l'intérieur du decorator factory, nous retournons une fonction qui définit le decorator réel.

> En utilisant le decorator factory log("Message de log") avec l'annotation @log, nous appliquons le decorator à la méthode maMethode. Le message spécifié dans le decorator factory sera affiché chaque fois que la méthode est appelée.

> Les decorators factories permettent de créer des decorators flexibles et réutilisables, car ils peuvent être configurés avec différents paramètres. Cela permet d'appliquer des logiques spécifiques en fonction des besoins.

> Il est important de noter que les decorators factories sont appelés une seule fois lors de la déclaration de la classe, contrairement aux decorators eux-mêmes qui sont appelés à chaque utilisation du decorator.

## 76 - Decorator Factories - Exemple Angular Component

Dans le contexte d'Angular, les decorator factories sont couramment utilisés pour définir les composants. Un composant Angular est une classe décorée avec le decorator `@Component`, qui est un decorator factory fourni par le framework.

Voici un exemple simplifié de la définition d'un composant Angular à l'aide d'un decorator factory :

```typescript
import { Component } from '@angular/core';

// Définition du decorator factory pour un composant Angular
function CustomComponent(config: { selector: string, template: string }) {
  return function (target: any) {
    // Logique du decorator
    Component(config)(target);
  };
}

// Utilisation du decorator factory pour définir un composant
@CustomComponent({
  selector: 'app-mon-component',
  template: '<h1>Mon composant personnalisé</h1>'
})
export class MonComponent {
  // ...
}
```
> Dans cet exemple, nous définissons un decorator factory appelé CustomComponent. Le decorator factory prend un paramètre config qui représente la configuration du composant, comprenant le sélecteur et le template. À l'intérieur du decorator factory, nous retournons une fonction qui appelle le decorator Component fourni par Angular avec la configuration fournie.

> En utilisant le decorator factory @CustomComponent({...}), nous appliquons le decorator Component au-dessus de la classe MonComponent. Cela définit le composant avec le sélecteur et le template spécifiés.

> Les decorator factories permettent de créer des decorators personnalisés pour étendre les fonctionnalités d'Angular ou pour ajouter des comportements spécifiques aux composants.