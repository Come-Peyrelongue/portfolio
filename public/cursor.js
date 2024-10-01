/** DRAW CURSOR **/

const cursor = document.querySelector(".cursor");

let CURSOR_X = 0, CURSOR_Y = 0;
let OFFSET_X = 0, OFFSET_Y = 0;
function storeCursorPosition(event) {
    CURSOR_X = event.pageX;
    CURSOR_Y = event.pageY;
}
document.body.addEventListener("mousemove", storeCursorPosition, false);

function getCursorPosition() {
    return [
        CURSOR_X - OFFSET_X,
        CURSOR_Y - OFFSET_Y,
    ];
}
function step() {
    const [x, y] = getCursorPosition();
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);

/** STYLEIST **/

feather.replace()