function playNoise(noise) {
    // find the audio that is associated with the button that was clicked
    console.log(noise)
    console.log(noise.id)
    console.log(noise.className)
    if (noise.id == "random") {
        var audio = document.getElementById("randomAudio")
        console.log(audio)
        if(audio.paused) {
            var randomAudioUrl = "https://bigsoundbank.com/UPLOAD/ogg/" + Math.floor(Math.random() * 600).toString() + ".ogg"
            audio.src = "https://bigsoundbank.com/UPLOAD/ogg/" + "0" + Math.floor(150 + (Math.random() * 600)).toString() + ".ogg"
            audio.currentTime = 0
            audio.play()
        } else {
            audio.pause()
        }
    } else {
        var audio = document.getElementById(noise.id + "Noise")
        console.log("type: " + typeof audio)
        if(typeof audio == "undefined") {
            audio = document.getElementById(noise.className + "Noise")
        }
        if (typeof audio !== undefined) {
            if (audio.paused) {
                // reset current time and play
                audio.currentTime = 0
                audio.play()
            } else {
                // stop currently playing noise
                audio.pause()
            }
            // changing the volume
            audio.volume = 0.25

            // debug statements
            console.log(audio)
            console.log("duration: " + audio.duration)
            console.log("volume: " + audio.volume)
            console.log("paused: " + audio.paused)
            console.log("\n") // new line to create spacing in the console for readability
        }
    }
}