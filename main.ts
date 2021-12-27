input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.clear()
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    OLED12864_I2C.showNumber(
    0,
    0,
    pins.analogReadPin(AnalogPin.P1),
    5
    )
    OLED12864_I2C.showNumber(
    0,
    10,
    input.lightLevel(),
    1
    )
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
})
input.onButtonPressed(Button.B, function () {
    OLED12864_I2C.clear()
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    OLED12864_I2C.showNumber(
    0,
    0,
    input.temperature(),
    3
    )
})
OLED12864_I2C.init(60)
music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
