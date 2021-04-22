const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navigation");
let menuAction = "show";

menuToggle.addEventListener('click', (e) => {
    if (menuAction === "show") {
        nav.style.display = "block";
        menuToggle.classList.add("hide");
        menuAction = "hide";
    }
    else {
        nav.style.display = "none";
        menuToggle.classList.remove("hide");
        menuAction = "show";
    }
})

console.log("LOADED");