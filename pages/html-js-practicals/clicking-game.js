var x = Math.round(50, 100);
var y = Math.ceil(Math.random(50, 100));

// Get References
let corretClicksEl = document.getElementById("correct-clicks-value");
let correctClicks = 0;

let funCirc = () => {
    correctClicks++;
    corretClicksEl.textContent = correctClicks;
    console.log("Clicked");
};

let wrongClicksEl = document.getElementById("wrong-clicks-value");
let wrongClicks = 0;

let wrongClicksCounter = () => {
    wrongClicks++;
    wrongClicksEl.textContent = wrongClicks;
};

let circle = document.getElementById("circle");
circle.addEventListener("click", funCirc);