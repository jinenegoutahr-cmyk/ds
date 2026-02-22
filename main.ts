input.onGesture(Gesture.Shake, function () {
    basic.showNumber(0)
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
