song = "";
function preload(){
    song = loadSong("NeKo Music - Za Warudo.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    Image(video, 0, 0, 600, 500);
}