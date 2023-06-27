// 86. Mapped Types

// Définition d'un type union "Props" avec trois options possibles : "Prop1", "Prop2", "Prop3"
type Props = "Prop1" | "Prop2" | "Prop3";

// Définition d'un type "MyMappedTypes" qui utilise une boucle "for...in" pour créer un nouveau type avec des propriétés basées sur le type "Props" avec des valeurs de type "number"
type MyMappedTypes = {
  [P in Props]: number;
};

// Définition d'un type "MyMappedTypes1" qui utilise une boucle "for...in" pour créer un nouveau type avec des propriétés basées sur le type "Props" avec des valeurs de type "P" (les valeurs seront les mêmes que les propriétés)
type MyMappedTypes1 = {
  [P in Props]: P;
};

// Définition d'un type "MyMappedTypes2" générique qui prend en compte les types de propriétés "Props" pouvant être de type "string", "number" ou "symbol", puis utilise une boucle "for...in" pour créer un nouveau type avec des propriétés basées sur le type "Props" avec des valeurs de type "P"
type MyMappedTypes2<Props extends string | number | symbol> = {
  [P in Props]: P;
};

// Définition d'un type générique "MyMappedTypes3" qui prend un paramètre "T" et utilise une boucle "for...in" pour créer un nouveau type avec des propriétés basées sur les clés de "T" avec des valeurs de type "T[P] | null" (les valeurs peuvent être de type "T[P]" ou "null")
type MyMappedTypes3<T> = {
  readonly [P in keyof T]: T[P] | null;
};

// Alias de type "MyType" qui utilise le type "MyMappedTypes2" avec le type "Props" pour créer un nouveau type
type MyType = MyMappedTypes2<Props>;

// Alias de type "MyType2" qui utilise le type "MyMappedTypes1" pour créer un nouveau type
type MyType2 = MyMappedTypes1;

// Alias de type "MyType3" qui utilise le type "MyMappedTypes2" avec le type union "Prop4" | "Prop5" | "Prop6" pour créer un nouveau type
type MyType3 = MyMappedTypes2<"Prop4" | "Prop5" | "Prop6">;

// Alias de type "MyType4" qui utilise le type "MyMappedTypes3" avec un objet littéral {color: "green", price: 200} pour créer un nouveau type
type MyType4 = MyMappedTypes3<{ color: "green", price: 200 }>;

// Définition d'un type générique "MyPick" qui prend deux paramètres "T" et "Props" et crée un nouveau type avec des propriétés basées sur les clés de "T" qui sont présentes dans "Props" avec les mêmes valeurs que "T[P]"
type MyPick<T, Props extends keyof T> = {
  [P in Props]: T[P];
};

// Alias de type "NewType" qui utilise le type "MyPick" avec un objet littéral {color: "green", price: 200, name: "pen"} et la clé "price" pour créer un nouveau type contenant uniquement la propriété "price"
type NewType = MyPick<{ color: "green", price: 200, name: "pen" }, "price">;
