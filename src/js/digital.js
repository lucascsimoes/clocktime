window.addEventListener("load", () => {
    let secondsValue = getSeconds()

    const lineSecondOne = document.querySelector("#digital .seconds > div:last-child").children
    const lineSecondTwo = document.querySelector("#digital .seconds > div:first-child").children

    const lineMinuteOne = document.querySelector("#digital .minutes > div:last-child").children
    const lineMinuteTwo = document.querySelector("#digital .minutes > div:first-child").children

    const lineHourOne = document.querySelector("#digital .hours > div:last-child").children
    const lineHourTwo = document.querySelector("#digital .hours > div:first-child").children

    setInterval(() => {
        secondsValue = getSeconds()
        minutesValue = getMinutes()
        hoursValue = getHours()

        firstSecondsDigit(secondsValue[1])
        secondSecondsDigit(secondsValue[0])

        firstMinutesDigit(minutesValue[1])
        secondMinutesDigit(minutesValue[0])

        firstHoursDigit(hoursValue[1])
        secondHoursDigit(hoursValue[0])
        
    }, 1000)
    
    function getSeconds() {
        const now = new Date();
        return now.getSeconds().toString().padStart(2, "0")
    }

    function getMinutes() {
        const now = new Date();
        return now.getMinutes().toString().padStart(2, "0")
    }

    function getHours() {
        const now = new Date();
        return now.getHours().toString().padStart(2, "0")
    }


    transitionAnimation(getSeconds()[0], lineSecondTwo)
    transitionAnimation(getMinutes()[1], lineMinuteOne)
    transitionAnimation(getMinutes()[0], lineMinuteTwo)
    transitionAnimation(getHours()[1], lineHourOne)
    transitionAnimation(getHours()[0], lineHourTwo)


    function firstSecondsDigit(value) {
        transitionAnimation(value, lineSecondOne)
    }

    function secondSecondsDigit(value) {
        if (getSeconds()[1] == 0) transitionAnimation(value, lineSecondTwo)
    }

    function firstMinutesDigit(value) {
        if (getSeconds() == "00") transitionAnimation(value, lineMinuteOne)
        
    }

    function secondMinutesDigit(value) {
        if (getMinutes()[1] == 0 && getSeconds() == "00") transitionAnimation(value, lineMinuteTwo)
    }

    function firstHoursDigit(value) {
        if (getMinutes() == "00" && getSeconds() == "00") transitionAnimation(value, lineHourOne)
    }

    function secondHoursDigit(value) {
        if (getHours()[1] == 0 && getMinutes() == "00" && getSeconds() == "00") transitionAnimation(value, lineHourTwo)
    }

    function transitionAnimation(value, element) {

        for (let i = 0; i < element.length; i++) element[i].classList.remove("active");

        if (value == "1") animationOne(element)
        if (value == "2") animationTwo(element)
        if (value == "3") animationThree(element)
        if (value == "4") animationFour(element)
        if (value == "5") animationFive(element)
        if (value == "6") animationSix(element)
        if (value == "7") animationSeven(element)
        if (value == "8") animationEight(element)
        if (value == "9") animationNine(element)
        if (value == "0") animationZero(element)
    }

    function animationOne(element) {
        let delay = -100;
        setTimeout(() => element[2].classList.add("active"), delay += 100)
        setTimeout(() => element[5].classList.add("active"), delay += 100)
    }

    function animationTwo(element) {
        let delay = -100;
        setTimeout(() => element[0].classList.add("active"), delay += 100)
        setTimeout(() => element[2].classList.add("active"), delay += 100)
        setTimeout(() => element[3].classList.add("active"), delay += 100)
        setTimeout(() => element[4].classList.add("active"), delay += 100)
        setTimeout(() => element[6].classList.add("active"), delay += 100)
    }

    function animationThree(element) {
        let delay = -100;
        setTimeout(() => element[0].classList.add("active"), delay += 100)
        setTimeout(() => element[2].classList.add("active"), delay += 100)
        setTimeout(() => element[3].classList.add("active"), delay += 100)
        setTimeout(() => element[5].classList.add("active"), delay += 100)
        setTimeout(() => element[6].classList.add("active"), delay += 100)
    }

    function animationFour(element) {
        let delay = -100;
        setTimeout(() => element[1].classList.add("active"), delay += 100)
        setTimeout(() => element[3].classList.add("active"), delay += 100)
        setTimeout(() => element[2].classList.add("active"), delay += 100)
        setTimeout(() => element[5].classList.add("active"), delay += 100)
    }

    function animationFive(element) {
        let delay = -100;
        setTimeout(() => element[0].classList.add("active"), delay += 100)
        setTimeout(() => element[1].classList.add("active"), delay += 100)
        setTimeout(() => element[3].classList.add("active"), delay += 100)
        setTimeout(() => element[5].classList.add("active"), delay += 100)
        setTimeout(() => element[6].classList.add("active"), delay += 100)
    }

    function animationSix(element) {
        let delay = -100;
        setTimeout(() => element[0].classList.add("active"), delay += 100)
        setTimeout(() => element[1].classList.add("active"), delay += 100)
        setTimeout(() => element[4].classList.add("active"), delay += 100)
        setTimeout(() => element[6].classList.add("active"), delay += 100)
        setTimeout(() => element[5].classList.add("active"), delay += 100)
        setTimeout(() => element[3].classList.add("active"), delay += 100)
    }

    function animationSeven(element) {
        let delay = -100;
        setTimeout(() => element[0].classList.add("active"), delay += 100)
        setTimeout(() => element[2].classList.add("active"), delay += 100)
        setTimeout(() => element[5].classList.add("active"), delay += 100)
    }

    function animationEight(element) {
        let delay = -100;
        setTimeout(() => element[0].classList.add("active"), delay += 100)
        setTimeout(() => element[1].classList.add("active"), delay += 100)
        setTimeout(() => element[3].classList.add("active"), delay += 100)
        setTimeout(() => element[5].classList.add("active"), delay += 100)
        setTimeout(() => element[6].classList.add("active"), delay += 100)
        setTimeout(() => element[4].classList.add("active"), delay += 100)
        setTimeout(() => element[2].classList.add("active"), delay += 100)
    }

    function animationNine(element) {
        let delay = -100;
        setTimeout(() => element[0].classList.add("active"), delay += 100)
        setTimeout(() => element[1].classList.add("active"), delay += 100)
        setTimeout(() => element[3].classList.add("active"), delay += 100)
        setTimeout(() => element[2].classList.add("active"), delay += 100)
        setTimeout(() => element[5].classList.add("active"), delay += 100)
        setTimeout(() => element[6].classList.add("active"), delay += 100)
    }

    function animationZero(element) {
        let delay = -100;
        setTimeout(() => element[0].classList.add("active"), delay += 100)
        setTimeout(() => element[2].classList.add("active"), delay += 100)
        setTimeout(() => element[5].classList.add("active"), delay += 100)
        setTimeout(() => element[6].classList.add("active"), delay += 100)
        setTimeout(() => element[4].classList.add("active"), delay += 100)
        setTimeout(() => element[1].classList.add("active"), delay += 100)
    }
})