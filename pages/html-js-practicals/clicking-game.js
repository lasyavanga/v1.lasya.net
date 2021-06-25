// Get References

// by id
// Score Items
const wrongClicksEl = document.getElementById("wrong-clicks-value");
const correctClicksEl = document.getElementById("correct-clicks-value");
const totalClicksEl = document.getElementById("total-clicks-value");
const scoreEl = document.getElementById("score-value");

// Main Elements
const circleDivEl = document.getElementById("circle-div");
const circleEl = document.getElementById("circle");

// content
let correctClicks = 0;
let score = 0;
let wrongClicks = 0;
let totalClicks = 0;

// functions

const repositionCircle = () => {
    const circleWidth = circleEl.offsetWidth;
    const circleHeight = circleEl.offsetHeight;

    const maxWidth = circleDivEl.offsetWidth - circleWidth;
    const maxHeight = circleDivEl.offsetHeight - circleHeight;

    const left = Math.random() * maxWidth;
    const top = Math.random() * maxHeight;

    circleEl.style.left = left + "px";
    circleEl.style.top = top + "px";
};

const clickEventHandler = (e) => {
    // console.log(e.target);

    const target = e.target;
    const clickedElementsId = target.getAttribute("id");

    // Check the id of the target
    // console.log(target.getAttribute("id"));

    if (clickedElementsId === "circle") {
        // console.log("Correct Click");
        correctClicks++;
        score++;
    } else {
        // console.log("Wrong Click");
        wrongClicks++;
        score--;
    }

    totalClicks++;

    // Update in UI
    correctClicksEl.textContent = correctClicks;
    wrongClicksEl.textContent = wrongClicks;
    totalClicksEl.textContent = totalClicks;
    scoreEl.textContent = score;

    // Reposition Circle
    repositionCircle();
};

// event listeners
circleDivEl.addEventListener("click", clickEventHandler);
