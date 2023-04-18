basic.forever(function () {
    checkbuttoninput()
})

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

led.plot(2, 0)

let posx = 2
let posy = 0

function checkbuttoninput() {
    input.onButtonPressed(Button.A, function() {
        led.unplot(posx, posy)
        if (posx == 1) {
            led.unplot(posx, posy)
            led.plot(posx, posy)
        } else {
            posx--
            led.plot(posx, posy)
        }
    })

    input.onButtonPressed(Button.B, function () {
        led.unplot(posx, posy)
        if (posx == 4) {
            led.unplot(posx, posy)
            led.plot(posx, posy)
        } else {
            posx++
            led.plot(posx, posy)
        }
    })

    control.waitMicros(3000000)
    switch (posy) {
        case 4:
            posy == 4
            led.plot(posx, posy)
            posx = 2
            posy = 0
            led.plot(posx, posy)
            break
        
    }
    led.unplot(posx, posy)
    if (posy == 4) {
        
    } else {
        posy++
    }
    led.plot(posx, posy)
}