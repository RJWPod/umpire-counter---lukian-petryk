input.onButtonPressed(Button.A, function () {
    basic.showString("b")
    if (Balls > 4) {
        Balls = 4
        basic.showNumber(Balls)
    }
    if (Balls < 4) {
        Balls += 1
    }
    basic.showNumber(Balls)
    if (Balls == 4) {
        basic.pause(100)
        basic.showString(" Walk")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("b")
    basic.showNumber(Balls)
    basic.showString("s")
    basic.showNumber(Strikes)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("s")
    if (Strikes > 3) {
        Strikes = 3
        basic.showNumber(Strikes)
    }
    if (Strikes < 3) {
        Strikes += 1
        basic.showNumber(Strikes)
    }
    basic.showNumber(Strikes)
    if (Strikes == 3) {
        basic.pause(100)
        basic.showString(" Out")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("b")
    Balls = 0
    basic.showNumber(Balls)
    basic.showString("s")
    Strikes = 0
    basic.showNumber(Strikes)
    basic.clearScreen()
})
let Strikes = 0
let Balls = 0
basic.showString("b=#balls")
basic.showNumber(Balls)
basic.showString("s=#strikes")
basic.showNumber(Strikes)
Balls = 0
Strikes = 0
basic.showLeds(`
    # # # # #
    # . . . #
    . # . # .
    # . . . #
    # # # # #
    `)
