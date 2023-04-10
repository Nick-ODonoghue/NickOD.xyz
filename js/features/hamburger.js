export function hamburger() {
    // Grab the element with a class of "hamburger"
    const hamburger = document.querySelector(".hamburger");
    // Grab the element with a class of "nav__menu"
    const navMenu = document.querySelector(".nav__menu");

    // Add a click event listener to the hamburger element that toggles the "active" class on both the hamburger and navMenu elements
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    // Loops through all elements with a class of "nav__link"
    // For each element, add a click event listener that removes the "active" class from both the hamburger and navMenu elements
    document.querySelectorAll(".nav__link").forEach(link => link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
}

hamburger()
