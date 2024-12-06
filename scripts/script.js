
const menuButton = document.querySelector("nav button:nth-of-type(2)");
const deNav = document.querySelector("nav");


menuButton.addEventListener("click", toggleMenu);


function toggleMenu() {
    deNav.classList.toggle("toonMenu");
}

const zoekButton = document.querySelector("nav button:nth-of-type(1)");
const deZoek = document.querySelector("nav");

zoekButton.addEventListener("click", toggleZoeken);

function toggleZoeken() {
    deZoek.classList.toggle("toonZoek");
}
