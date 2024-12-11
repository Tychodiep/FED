
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



const headerShareButton = document.getElementById("header-share-button");
const articleShareButtons = document.querySelectorAll("article li button");

articleShareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      
        const Active = button.classList.contains("active");

      
        let currentCount = parseInt(headerShareButton.getAttribute("data-share-count"), 10); /*chatgbt*/

        if (Active) {
            button.classList.remove("active");
            currentCount--;} 
            else {
            button.classList.add("active");
            currentCount++;
        }

        headerShareButton.setAttribute("data-share-count", currentCount); /*chatgbt*/
        headerShareButton.innerHTML = `<img src="images/deel-button-ajax.svg" alt="deel icoontje">(${currentCount})`; /*chatgbt*/
    });
});