radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
radio.setGroup(100)
basic.forever(function () {
    radio.sendString("Hello")
})
