var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', movecursor);

function movecursor(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
}