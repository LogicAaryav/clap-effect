input.onSound(DetectedSound.Loud, function () {
    clap = !(clap)
})
let clap = false
clap = true
basic.forever(function () {
    if (clap) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
