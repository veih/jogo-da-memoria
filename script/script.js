const { time } = require("console");
const { number } = require("prop-types");
const { createElement } = require("react");

let order = [];
let clickedOrder = [];
let score = 0;

//green = 0
//blue = 1
//red = 2
//yellow = 3

const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
//criando order aleatório
let shuffledOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i  in order) {
        let elementColor = createColorElement(order[i]);
        ligthColor(elementColor, number(i) + 1);
}}

//acende as cores
let ligthColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    });      
}

//checa bot]oes clicados
let checkedOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] !== order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length === order.length) {
        alert(`Pontuação: ${score}/n Você acertou! Iniciar proximo nível!`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add("selected");

    setTimeout(() => {
        createColorElement(color).classList.remove("selected");
    })
    checkedOrder();
}