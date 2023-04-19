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
            
            break

        case 2:

            break

        case 3:

            break

        case 4:

            break
    }
    /* move every one second
       Done in microsecond because stupid
    */
    control.waitMicros(1000000)
    led.unplot(posx, posy)
    if (posy == 4) {
    	
    } else {
        posy += 1
    }
    led.plot(posx, posy)
}