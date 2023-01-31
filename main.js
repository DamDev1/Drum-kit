window.addEventListener("keydown", (e) =>{
    if(e.key === "a"){
        const boom = new Audio('./sound/boom.wav')
        boom.play() 
    }

    if(e.key === "s"){
        const clap = new Audio('./sound/01 - JavaScript Drum Kit_sounds_clap.wav')
        clap.play()
    }

    if(e.key === "d"){
        const hihat = new Audio('./sound/01 - JavaScript Drum Kit_sounds_hihat.wav')
        hihat.play()
    }

    if(e.key === "f"){
        const kick = new Audio('./sound/01 - JavaScript Drum Kit_sounds_kick.wav')
        kick.play()
    }

    if(e.key === "g"){
        const openhat = new Audio('./sound/01 - JavaScript Drum Kit_sounds_openhat.wav')
        openhat.play()
    }

    if(e.key === "h"){
        const ride = new Audio('./sound/01 - JavaScript Drum Kit_sounds_ride.wav')
        ride.play()
    }

    if(e.key === "j"){
        const snare = new Audio('./sound/01 - JavaScript Drum Kit_sounds_snare (1).wav')
        snare.play()
    }

    if(e.key === "k"){
        const tink = new Audio('./sound/01 - JavaScript Drum Kit_sounds_tink.wav')
        tink.play()
    }

    if(e.key === "l"){
        const tom = new Audio('./sound/01 - JavaScript Drum Kit_sounds_tom.wav')
        tom.play()
    }
})