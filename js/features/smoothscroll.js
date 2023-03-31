export function smoothScroll() {
    const header = document.querySelector(".header");
    const headerHeight = header.offsetHeight;

    document.documentElement.style.setProperty("--scroll-padding", headerHeight + 10 + "px")
}

smoothScroll();
