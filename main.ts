input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "lights off") {
        basic.clearScreen()
    } else if (receivedString == "lights on") {
        basic.showIcon(IconNames.Angry)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    }
})
radio.setGroup(5)
