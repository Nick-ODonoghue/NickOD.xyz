export function animationsTech() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });
    const hiddentElements = document.querySelectorAll(".hidden");
    hiddentElements.forEach((el) => observer.observe(el));
}

export function animationsCard() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show__card");
            } else {
                entry.target.classList.remove("show__card");
            }
        });
    });
    const hiddentElements = document.querySelectorAll(".hidden__card");
    hiddentElements.forEach((el) => observer.observe(el));
}

animationsCard()

animationsTech()
