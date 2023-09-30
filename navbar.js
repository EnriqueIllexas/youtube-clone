const navbarAside = document.querySelector(".seccion-aside--navbar")
const openNavbar = document.querySelector("#openNavabr")

openNavbar.addEventListener("click", toogleNavbar);

function toogleNavbar(){
    navbarAside.classList.toggle("inactive");
}