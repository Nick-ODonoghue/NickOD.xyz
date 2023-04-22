export function smoothScroll() {

  // Grab the element with a class of "header"
  const header = document.querySelector(".header")

  // Get the offsetHeight property of the header element
  const headerHeight = header.offsetHeight

  // Set a CSS custom property called "--scroll-padding" on the document element
  // Set the value equal to the headerHeight plus 10 pixels
  // Regardless of the height of the navbar nothing will ever be hidden behind it when smoothScroll is used
  document.documentElement.style.setProperty("--scroll-padding", headerHeight + 10 + "px")
}

smoothScroll()
