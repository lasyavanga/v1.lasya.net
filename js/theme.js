// Get reference to switch theme button
const btnSwitchTheme = document.getElementById("switch-theme");

// Handler
const updateTheme = function () {
    // Get reference to body
    const body = document.body;

    // Toggle dark theme
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.removeItem("theme");
    }
};

// Add Event Listener
btnSwitchTheme.addEventListener("click", updateTheme);

// On Load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
