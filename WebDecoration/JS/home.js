function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const header = document.getElementById("header");
    navLinks.classList.toggle("show"); 
    header.classList.toggle("show"); 
}
AOS.init({
  duration: 1000, 
  once: true   
});
