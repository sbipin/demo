const colors = ["red", "green", "blue", "yellow"];

const color = document.querySelector(".color")
const btn = document.getElementById("btn");
const body = document.querySelector(".body")

btn.addEventListener("click", function () {
    let randomNumber = getRandomNumber();
    body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}