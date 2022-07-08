import {
    virtualPet,
    virtualPet2
} from "./virtualPetPrototype.js";
import VirtualPet from "./VirtualPet.js"

const petNameEl = document.querySelector("#petName");
const furColorEl = document.querySelector("#furColor");
const soundEl = document.querySelector("#sound");
const statusEl = document.querySelector("#status");

const jeremy = new VirtualPet(virtualPet.name, virtualPet.furColor, virtualPet.sound);


petNameEl.innerText = jeremy.name;
furColorEl.innerText = jeremy.furColor;
soundEl.innerText = jeremy.sound;

jeremy.tick();
jeremy.tick();
jeremy.tick();
jeremy.tick();

statusEl.innerText = jeremy.getStatus();

const feedBtn = document.querySelector("#feed");
feedBtn.addEventListener("click", () => {
    jeremy.feed();
    statusEl.innerText = jeremy.getStatus();
})

const drinkBtn = document.querySelector("#drink");
drinkBtn.addEventListener("click", () => {
    jeremy.drink();
    statusEl.innerText = jeremy.getStatus();
})

const playBtn = document.querySelector("#play");
playBtn.addEventListener("click", () => {
    jeremy.play();
    statusEl.innerText = jeremy.getStatus();
})

setInterval(() => {
    jeremy.tick();
    statusEl.innerText = jeremy.getStatus();
}, 1000);

let myFavoriteFruits = ["bananas", "oranges", "papaya", "mango", "pineapple"];
let myEmptyArray = new Array(5);
// myEmptyArray[0] = "bananas";
// myEmptyArray[1] = "oranges";
// myEmptyArray[2] = "papaya";
// myEmptyArray[3] = "mango";
// myEmptyArray[4] = "pineapple";
console.log(myFavoriteFruits);
console.log(myEmptyArray);
console.log(jeremy);


let poppedFruit = myFavoriteFruits.pop();
console.log(poppedFruit);
console.log(myFavoriteFruits);

myFavoriteFruits.push("apple");
console.log(myFavoriteFruits);


let splicedFruit = myFavoriteFruits.splice(2 /*index to start splicing at*/ , 1 /*nuber of items to splice*/ );
// myFavoriteFruits.splice(2, 0, splicedFruit[0], splicedFruit[1]);
console.log(splicedFruit);
console.log(myFavoriteFruits);


myFavoriteFruits.unshift("mango");
console.log(myFavoriteFruits);
myFavoriteFruits.shift("oranges");
console.log(myFavoriteFruits);

let numbers = [1.0, 2, 'three', 4, 'five'];
console.log(numbers);


let person = "Taylour";
let personFruit = "Star Fruit";
let nameMap = new Array(0);
nameMap["Rickie"] = ["apples", "pineapple", "Berries"];
nameMap["Alex"] = "Avocado";
nameMap["Chandan"] = "bananas";
nameMap[person] = personFruit;
console.log(nameMap);