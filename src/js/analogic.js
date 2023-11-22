window.addEventListener("load", () => {
    const analogicContainer = document.querySelector("#analogic > .marks")
    const styleSheet = document.styleSheets[1];
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    for (let i = 0; i < 6; i++) {
        const hour = document.createElement("div")
        hour.classList.add("mark")
        hour.classList.add(`h${i + 1}`)
        analogicContainer.appendChild(hour)

        for (let j = 0; j < 4; j++) {
            const minute = document.createElement("div")
            minute.classList.add("mark")
            minute.classList.add(`m${i + 1}-${j + 1}`)
            analogicContainer.appendChild(minute)
        }
    }

    function rotateSeconds() {
        const degrees = (seconds / 60) * 360
        setKeyFrameSeconds(degrees)
    }

    function rotateMinutes() {
        const degrees = ((minutes / 60) * 360) + ((seconds / 60) * 6)
        setKeyFrameMinutes(degrees)
    }

    function rotateHours() {
        const degrees = ((hours / 12) * 360) + ((minutes / 60) * 30)
        setKeyFrameHours(degrees)
    }

    rotateSeconds()
    rotateMinutes()
    rotateHours()

    function setKeyFrameSeconds(value) {
        const keyframe = `@keyframes rotationSeconds {
            from { transform: rotate(${value}deg) }
            to { transform: rotate(${value + 360}deg) }
        }`;

        styleSheet.insertRule(keyframe);
    }

    function setKeyFrameMinutes(value) {
        const keyframe = `@keyframes rotationMinutes {
            from { transform: rotate(${value}deg) }
            to { transform: rotate(${value + 360}deg) }
        }`;

        styleSheet.insertRule(keyframe);
    }

    function setKeyFrameHours(value) {
        const keyframe = `@keyframes rotationHours {
            from { transform: rotate(${value}deg) }
            to { transform: rotate(${value + 360}deg) }
        }`;

        styleSheet.insertRule(keyframe);
    }

})