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

let shuffledOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i  in order) {
        let elementColor = order[i];
}


