basic.forever(function () {
    start()
})

function start() {
    led.plot(4, 0)
    led.plot(4, 1)
    led.plot(4, 2)
    led.plot(4, 3)
    led.plot(4, 4)

    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(0, 4)
}