// Custom Cursor code here:
var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', movecursor);

function movecursor(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
}

// Random Artist Generator code here:
const nicheTrackID = [
    "7tjVRlo5QYUpPOocaJb387",
    "7KAy8CJpjoSOVgRKUT6Vvq",
]

function spawnNextTrack() {
    num = Math.floor(Math.random() * nicheTrackID.length);
    document.getElementById("nicheTrack").src = `https://open.spotify.com/embed/track/${nicheTrackID[num]}?utm_source=generator`;
}