basic.forever(function () {
    if (input.acceleration(Dimension.X) > 100 && input.acceleration(Dimension.X) < 500) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (input.acceleration(Dimension.X) > 500 && input.acceleration(Dimension.X) < 1000) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (input.acceleration(Dimension.X) > 1000 && input.acceleration(Dimension.X) < 1500) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else {
        basic.pause(100)
    }
})
