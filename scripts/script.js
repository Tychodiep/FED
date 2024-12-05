
const menuButton = document.querySelector("nav button:nth-of-type(2)");
const deNav = document.querySelector("nav");


menuButton.addEventListener("click", toggleMenu);


function toggleMenu() {
    deNav.classList.toggle("toonMenu");
}