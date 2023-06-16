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

Ensuite, nous déclarons une fonction "afficherPersonne" qui prend en paramètre un objet de type "Personne" et affiche ses détails. Si la propriété "adresse" est présente, elle est également affichée.

Nous créons deux objets "personne1" et "personne2" qui correspondent à la structure de l'interface "Personne". Nous utilisons ensuite la fonction "afficherPersonne" pour afficher les détails de chaque personne.

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

Ensuite, nous définissons deux classes : "Chien" et "Chat", qui implémentent l'interface "Animal" en fournissant une implémentation pour la méthode "faireDuBruit".

Nous déclarons également une fonction "faireDuBruitAnimaux" qui prend un tableau d'animaux de type "Animal[]" en paramètre. Cette fonction itère sur chaque animal du tableau et appelle la méthode "faireDuBruit".

Nous créons des instances de "Chien" et "Chat" et les passons à la fonction "faireDuBruitAnimaux". Le résultat est l'affichage du bruit spécifique à chaque animal : "Chien : Fait Wouaf!" suivi de "Chat : Fait Miaou!".

L'utilisation d'interfaces avec les classes permet de définir un contrat commun pour les méthodes que les classes doivent implémenter. Cela facilite le polymorphisme et l'utilisation de différentes classes de manière interchangeable.



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

La classe abstraite "Forme" déclare deux méthodes abstraites : "calculerSurface" et "calculerPerimetre". Ces méthodes sont définies dans les classes dérivées, et chaque classe dérivée doit fournir une implémentation pour ces méthodes.

La classe abstraite "Forme" fournit également une méthode concrète "afficherDetails" qui utilise les méthodes abstraites pour afficher la surface et le périmètre d'une forme.

Nous créons une classe dérivée "Carre" qui étend la classe abstraite "Forme". Cette classe implémente les méthodes abstraites "calculerSurface" et "calculerPerimetre" en fonction des spécificités du carré.

Nous créons ensuite une instance de "Carre" avec une longueur de côté de 5 et appelons la méthode "afficherDetails" pour afficher la surface et le périmètre du carré.

Les classes abstraites sont utiles pour définir des modèles communs et des comportements généraux, tout en laissant les détails d'implémentation aux classes dérivées. Elles fournissent une structure de base solide pour l'héritage et le polymorphisme.


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

Nous déclarons deux tableaux : "nombres" contenant des nombres et "chaines" contenant des chaînes de caractères. En appelant la fonction "premierElement" avec ces tableaux, nous obtenons le premier élément de chaque tableau.

L'utilisation des generics permet de créer des fonctions et des structures de données réutilisables et flexibles. Les generics permettent de créer du code générique qui peut fonctionner avec différents types de données, en évitant la duplication de code spécifique à chaque type.
