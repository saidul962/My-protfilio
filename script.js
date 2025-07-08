const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

let isMenuOpen = false;

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  isMenuOpen = !isMenuOpen;
  menuToggle.innerHTML = isMenuOpen ? "❌" : "&#9776;";
  // Change color & font-size using JavaScript
 menuToggle.style.color = "#DC143C";
menuToggle.style.fontSize = "22px";
});
 //home section 
 