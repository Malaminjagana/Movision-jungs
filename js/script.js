function playPause() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function makeBig() {
    var video = document.getElementById("myVideo");
    video.width = 800;
}

function makeSmall() {
    var video = document.getElementById("myVideo");
    video.width = 320;
}

function makeNormal() {
    var video = document.getElementById("myVideo");
    video.width = 600;
}
