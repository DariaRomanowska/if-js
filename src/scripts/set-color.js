import { getColor } from "./main.js";

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

function setColor(element) {
    element.style.color = getColor(element.style.color);
}

text1.addEventListener("click", () => setColor(text1));
text2.addEventListener("click", () => setColor(text2));
text3.addEventListener("click", () => setColor(text3));