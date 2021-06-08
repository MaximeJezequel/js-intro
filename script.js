let firstName = "Maxime";
let lastName = "Jezequel";

firstName = "Léa";
lastName = "Jezequel";

console.log(firstName, lastName);

let animals = [
    "cats","dogs","crocodile"
];

animals.push("racoon") //ajoute un élément

console.log(animals[0]); // 0 est le 1er élément du tableau
console.log(animals.length);
console.log(animals.sort());

const person = { //definition d'un objet
    name: "Maxime",
    height: 182,
    age: 38,
    sayHello: function() { //ajout d'une méthode
        return "Hello";
    }
};

console.log(person.age);
console.log(person.sayHello());
console.log(person["sayHello"]);

person.sex = "male"; //ajout d'une propriété

console.log(person);
console.table(person);
console.log(person["name"]);

const children = [
    {name: "Quentin", age: 11},
    {name: "Léa", age: 5}
];
console.log(children[1]);

let numerOne = 10;
let numerTwo = 40;

console.log(10 < 40); // 10 < 40 ? true
console.log(10 === 40); // strictement egal ? false
console.log(10 !== 40); // strictement egal ? true
console.log(10 === "10"); // strictement egal ? false
console.log(10 === 10); // egal ? true

const pseudo = prompt("Pseudo");

pseudo === "smarteez" ? console.log("Hello Max") : console.log("Hello");

for(let i = 0; i <= 10; i++){//incrément de i de 0 à 10 par pas de 1
    console.log(i);
}

let j = 0;
while(j < 100){
    j++;
}
console.log("Hello" + j);

let x = 0;
do{
    x++;
}
while(x < 100);
console.log("Hello" + x*2);