const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
    }
});