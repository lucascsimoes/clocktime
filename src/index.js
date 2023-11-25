window.addEventListener("load", () => {
    const btnToDigital = document.querySelector(".changeClock.to-digital")
    const btnToAnalogic = document.querySelector(".changeClock.to-analogic")
    const digitalClock = document.getElementById("digital")
    const analogicClock = document.getElementById("analogic")
    const transitionContainer = document.getElementById("transitionContainer")

    btnToAnalogic.onclick = () => transition("left")
    btnToDigital.onclick = () => transition("right")

    checkBtnShow()

    function checkBtnShow() {
        if (digitalClock.classList.contains("active")) {
            btnToDigital.style.display = "none"
            btnToAnalogic.style.display = "flex"
        } else {
            btnToDigital.style.display = "flex"
            btnToAnalogic.style.display = "none"
        }
    }

    function changeToAnalogic() {
        digitalClock.classList.remove("active")
        analogicClock.classList.add("active")
    }

    function changeToDigital() {
        analogicClock.classList.remove("active")
        digitalClock.classList.add("active")
    }

    function transition(direction) {
        transitionContainer.classList.add("start")
        
        if (direction == "left") {
            transitionContainer.querySelector("& img.digital-img").style.display = "none"
            transitionContainer.querySelector("& img.analogic-img").style.display = "block"

            setTimeout(() => {
                changeToAnalogic()
                checkBtnShow()
            }, 1000)
            
        } else {
            transitionContainer.querySelector("& img.digital-img").style.display = "block"
            transitionContainer.querySelector("& img.analogic-img").style.display = "none"
            
            setTimeout(() => {
                changeToDigital()
                checkBtnShow()
            }, 1000)
        }

        setTimeout(() => {
            transitionContainer.classList.remove("start")
        }, 2000)
    }
})