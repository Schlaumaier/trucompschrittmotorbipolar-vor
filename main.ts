/**
 * Ein bipolarer Schrittmotor soll sich im Vollschrittbetrieb drehen. Benötigt werden 2 H Brücken
 */
/**
 * Tabelle Schrittmotor
 * 
 * Spule 1    Spule 2
 * 
 * 0   1           1    0
 * 
 * 0   1           0    1
 * 
 * 1   0           0    1
 * 
 * 1   0           1    0
 */
function Schritt1 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Schritt4 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Schritt3 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function Schritt2 () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
/**
 * TRU Components Adapterplatine mit 2h-Brücken
 * 
 * Pin 14 auf 1 setzen, sonst H-Brücke ausser Betrieb
 */
let TempoMotor = 0
let TempoAnalog = 0
led.enable(true)
pins.digitalWritePin(DigitalPin.P14, 1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    TempoAnalog = pins.analogReadPin(AnalogPin.P0)
    TempoMotor = TempoAnalog / 4
    Schritt1()
    basic.pause(TempoMotor)
    Schritt2()
    basic.pause(TempoMotor)
    Schritt3()
    basic.pause(TempoMotor)
    Schritt4()
    basic.pause(TempoMotor)
})
