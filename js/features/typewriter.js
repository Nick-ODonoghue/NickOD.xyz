const textArray = ["Hi, I'm Nick"];
let textPosition = 0;
const speed = 100;

export function typewriter() {

    document.querySelector("#typewriter__text").innerHTML = textArray[0].substring(0, textPosition) + `<span class="blinker">\u25ae</span>`;

    if (textPosition++ != textArray[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);
