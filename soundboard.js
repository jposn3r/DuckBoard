function playNoise(noise) {
    // console.log(noise)
    // console.log(noise.id)
    // console.log(noise.className)
    if (noise.id == "random") {
        var audio = document.getElementById("randomAudio")
        // console.log(audio)
        if(audio.paused) {
            audio.src = "https://bigsoundbank.com/UPLOAD/ogg/0" + Math.floor(150 + (Math.random() * 600)).toString() + ".ogg"
            pauseAllNoises()
            audio.currentTime = 0
            audio.play()
        } else {
            audio.pause()
        }
    } else {
        var audio = document.getElementById(noise.id + "Noise")
        if(typeof audio == "undefined") {
            audio = document.getElementById(noise.className + "Noise")
        }
        if (typeof audio !== undefined) {
            if (audio.paused) {
                // reset current time and play
                pauseAllNoises()
                audio.currentTime = 0
                audio.play()
            } else {
                // stop currently playing noise
                audio.pause()
            }
            // changing the volume
            audio.volume = 0.25

            // debug statements
            // console.log(audio)
            // console.log("duration: " + audio.duration)
            // console.log("volume: " + audio.volume)
            // console.log("paused: " + audio.paused)
            // console.log("\n") // new line to create spacing in the console for readability
        }
    }
    var current = document.getElementsByClassName("active-button");
    current[0].className = current[0].className.replace(" active-button", "");
    noise.className += " active-button";
    console.log(noise)
    console.log(current)
}

var header = document.getElementById("button-grid");
var btns = header.getElementsByClassName("grid-item");
for (var i = 0; i < btns.length; i++) {btns[i].addEventListener("click", function() {

    });
}

function pauseAllNoises() {
    noises = document.querySelectorAll("audio");
    // console.log(noises)
    noises.forEach(noise => noise.pause());
}