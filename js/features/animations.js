export function animationsTech() {

  // Creates instance of IntersectionObserver and pass it a callback as a parameter
  const observer = new IntersectionObserver((entries) => {

    // Loop through each entry in the array passed to the callback function
    entries.forEach((entry) => {

      // Check if the entry is currently intersecting with the viewport
      if (entry.isIntersecting) {

        // Add CSS "show" to the target element of the entry
        entry.target.classList.add("show")
      } else {

        // Remove CSS "show" from the target element of the entry
        entry.target.classList.remove("show")
      }
    })
  })

  // Grab all elements with a class of "hidden" from the DOM
  const hiddentElements = document.querySelectorAll(".hidden")

  // Loop through each "hidden" element and attach the IntersectionObserver instance to each of them
  hiddentElements.forEach((el) => observer.observe(el))
}

export function animationsCard() {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show__card")
      } else {
        entry.target.classList.remove("show__card")
      }
    })
  })
  const hiddentElements = document.querySelectorAll(".hidden__card")
  hiddentElements.forEach((el) => observer.observe(el))
}

animationsTech()
animationsCard()
