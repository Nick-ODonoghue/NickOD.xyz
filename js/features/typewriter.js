// Create an array with only 1 value, a string
const textArray = ["Hi, I'm Nick"]

// Initialize "textPosition" and sets it zero
let textPosition = 0

// Initialize "speed" and set it to 125ms
const speed = 125

export function typewriter() {

  // Query the DOM for the element with the ID "typewriter__text" and set its innerHTML property to the first element in the "textArray" array up to the current "textPosition"
  document.querySelector("#typewriter__text").innerHTML = textArray[0].substring(0,
    textPosition)

  // Check if "textPosition" is not equal to the length of the first element in the "textArray" array
  if (textPosition++ != textArray[0].length)

    // If true and it is not equal, then setTimeout calling typewriter function again adding the "speed" variable for the setTimeout delay
    setTimeout(typewriter, speed)
}

// Set an event listener on the window object to listen for the load event and call the typewriter function
window.addEventListener("load", typewriter)
