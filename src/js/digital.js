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

    function firstSecondsDigit(value) {
        checkValuesForFirst(value, lineSecondOne[0])
        checkValuesForSecond(value, lineSecondOne[1])
        checkValuesForThird(value, lineSecondOne[2])
        checkValuesForFourth(value, lineSecondOne[3])
        checkValuesForFifth(value, lineSecondOne[4])
        checkValuesForSixth(value, lineSecondOne[5])
        checkValuesForSeventh(value, lineSecondOne[6])
    }

    function secondSecondsDigit(value) {
        checkValuesForFirst(value, lineSecondTwo[0])
        checkValuesForSecond(value, lineSecondTwo[1])
        checkValuesForThird(value, lineSecondTwo[2])
        checkValuesForFourth(value, lineSecondTwo[3])
        checkValuesForFifth(value, lineSecondTwo[4])
        checkValuesForSixth(value, lineSecondTwo[5])
        checkValuesForSeventh(value, lineSecondTwo[6])
    }

    function firstMinutesDigit(value) {
        checkValuesForFirst(value, lineMinuteOne[0])
        checkValuesForSecond(value, lineMinuteOne[1])
        checkValuesForThird(value, lineMinuteOne[2])
        checkValuesForFourth(value, lineMinuteOne[3])
        checkValuesForFifth(value, lineMinuteOne[4])
        checkValuesForSixth(value, lineMinuteOne[5])
        checkValuesForSeventh(value, lineMinuteOne[6])
    }

    function secondMinutesDigit(value) {
        checkValuesForFirst(value, lineMinuteTwo[0])
        checkValuesForSecond(value, lineMinuteTwo[1])
        checkValuesForThird(value, lineMinuteTwo[2])
        checkValuesForFourth(value, lineMinuteTwo[3])
        checkValuesForFifth(value, lineMinuteTwo[4])
        checkValuesForSixth(value, lineMinuteTwo[5])
        checkValuesForSeventh(value, lineMinuteTwo[6])
    }

    function firstHoursDigit(value) {
        checkValuesForFirst(value, lineHourOne[0])
        checkValuesForSecond(value, lineHourOne[1])
        checkValuesForThird(value, lineHourOne[2])
        checkValuesForFourth(value, lineHourOne[3])
        checkValuesForFifth(value, lineHourOne[4])
        checkValuesForSixth(value, lineHourOne[5])
        checkValuesForSeventh(value, lineHourOne[6])
    }

    function secondHoursDigit(value) {
        checkValuesForFirst(value, lineHourTwo[0])
        checkValuesForSecond(value, lineHourTwo[1])
        checkValuesForThird(value, lineHourTwo[2])
        checkValuesForFourth(value, lineHourTwo[3])
        checkValuesForFifth(value, lineHourTwo[4])
        checkValuesForSixth(value, lineHourTwo[5])
        checkValuesForSeventh(value, lineHourTwo[6])
    }

    function checkValuesForFirst(value, element) { switch (value) { case "1": case "4": element.classList.remove("active"); break; default: element.classList.add("active"); } }
    function checkValuesForSecond(value, element) { switch (value) { case "1": case "2": case "3": case "7": element.classList.remove("active"); break; default: element.classList.add("active"); } }
    function checkValuesForThird(value, element) { switch (value) { case "5": case "6": element.classList.remove("active"); break; default: element.classList.add("active"); } }
    function checkValuesForFourth(value, element) { switch (value) { case "1": case "7": case "0": element.classList.remove("active"); break; default: element.classList.add("active"); } }
    function checkValuesForFifth(value, element) { switch (value) { case "1": case "3": case "4": case "5": case "7": case "9": element.classList.remove("active"); break; default: element.classList.add("active"); } }
    function checkValuesForSixth(value, element) { switch (value) { case "2": element.classList.remove("active"); break; default: element.classList.add("active"); } }
    function checkValuesForSeventh(value, element) { switch (value) { case "1": case "4": case "7": element.classList.remove("active"); break; default: element.classList.add("active"); } }

})