const square = document.querySelector("div");
let sqX = 150;
let sqY = 50;
square.style.left = `${sqX}px`;
square.style.top = `${sqY}px`;

let sqActive = false;

let inSqX;
let inSqY;

square.addEventListener('mousedown', (ev) => {
    square.style.backgroundColor = "grey";
    sqActive = true;
    inSqX = ev.offsetX;
    inSqY = ev.offsetY;
});

square.addEventListener('mousemove', (ev) => {

    if (sqActive) {
        sqX = ev.clientX - inSqX;
        sqY = ev.clientY - inSqY;
        square.style.left = `${sqX - 50}px`
        square.style.top = `${sqY - 50}px`
    }
});

square.addEventListener('mouseup', () => {
    square.style.backgroundColor = "black";
    sqActive = false;
});