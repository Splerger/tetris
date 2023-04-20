// make starting barriers on right
led.plot(4, 0)
led.plot(4, 1)
led.plot(4, 2)
led.plot(4, 3)
led.plot(4, 4)


// make starting barriers on left
led.plot(0, 0)
led.plot(0, 1)
led.plot(0, 2)
led.plot(0, 3)
led.plot(0, 4)

// draw first object
led.plot(2, 0)

let posx = 2
let posy = 0

basic.forever(function () {
    main()
})

function main () {
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
            if (posx == 3) {
                led.unplot(posx, posy)
                led.plot(posx, posy)
            } else {
                posx++
                led.plot(posx, posy)
            }
    })

    switch (posy) {
        case 1:
            if (led.plot(posx, posy++)) {
                control.waitMicros(50000)
                led.plot(posx, posy)
                posx = 2
                posy = 0
                led.plot(posx, posy)
            }
            break

        case 2:
            if (led.plot(posx, posy++)) {
                control.waitMicros(50000)
                led.plot(posx, posy)
                posx = 2
                posy = 0
                led.plot(posx, posy)
            }
            break

        case 3:
            if (led.plot(posx, posy++)) {
                control.waitMicros(50000)
                led.plot(posx, posy)
                posx = 2
                posy = 0
                led.plot(posx, posy)
            }
            break

        case 4:
            led.plot(posx, posy)
            posx = 2
            posy = 0
            led.plot(posx, posy)
            break
    }
    /* move every 2 seconds
       Done in microsecond because stupid
    */
    control.waitMicros(2000000)
    led.unplot(posx, posy)
    if (posy == 4) {
    	
    } else {
        posy += 1
    }
    led.plot(posx, posy)
}