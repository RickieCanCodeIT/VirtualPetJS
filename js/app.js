import {
    virtualPet,
    virtualPet2
} from "./virtualPetPrototype.js";
import VirtualPet from "./VirtualPet.js"

const petNameEl = document.querySelector("#petName");
const furColorEl = document.querySelector("#furColor");
const soundEl = document.querySelector("#sound");
const statusEl = document.querySelector("#status");

const jeremy = new VirtualPet("Jeremy", "Brown", "Woof");


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
    jeremy.tick();
    statusEl.innerText = jeremy.getStatus();
})

const drinkBtn = document.querySelector("#drink");
drinkBtn.addEventListener("click", () => {
    jeremy.drink();
    jeremy.tick();
    statusEl.innerText = jeremy.getStatus();
})

const playBtn = document.querySelector("#play");
playBtn.addEventListener("click", () => {
    jeremy.play();
    jeremy.tick();
    statusEl.innerText = jeremy.getStatus();
})