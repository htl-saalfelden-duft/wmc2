let counter = 0
let numberToGuess
const TOTAL_GUESSES = 10
const MAX_NUMBER = 100


const contentLoaded = () => {
    UI.showMessage("Guess a number between 1 and 100. You have 10 guesses, lets start!", "info", 8000)
    newNumber()
}

const newNumber = () => {
    numberToGuess = Math.floor(Math.random() * (MAX_NUMBER + 1));
}


class UI {
    static showMessage(message, className, duration=3000) {
        const parent = document.querySelector("#messages")
        const alertDiv = document.createElement('div')

        alertDiv.className = `alert alert-${className}`
        alertDiv.appendChild(document.createTextNode(message))
        parent.appendChild(alertDiv)

        setTimeout(() => parent.removeChild(alertDiv), duration)
    }

    static setIcon(type) {
        document.querySelector("#guess-icon").className = `fa-solid fa-${type}`
    }

    static showFirework(duration=5000) {
        const fireworkDiv = document.createElement('div')
        fireworkDiv.className = 'firework'
        document.body.appendChild(fireworkDiv)
        document.body.className = "firework-dark"
    
    
        setTimeout(() => {
            document.body.removeChild(fireworkDiv)
            document.body.className = ""
        }, duration)
    }

    static blinkInput(duration=5000) {
        document.querySelector("#guess").classList.add('blink-bg')
        setTimeout(() => document.querySelector("#guess").classList.remove('blink-bg'), duration)
    }

    static resetInput() {
        document.querySelector("#guess").value = ''
    }
}

document.addEventListener('DOMContentLoaded', contentLoaded)

document.querySelector('#guess-form').addEventListener('submit', event => {
    event.preventDefault()

    counter += 1

    const guess = parseInt(document.querySelector("#guess").value)

    if(numberToGuess == undefined) {
        UI.showMessage("Please start a new game!", "warning")
    } else if(isNaN(guess)) {
        UI.showMessage("No input provided", "warning")
        counter -= 1
    } else if(guess > numberToGuess) {
        UI.showMessage(`Guess to high! You have ${TOTAL_GUESSES - counter} left.`, "danger")
        UI.setIcon('arrow-down')
        UI.resetInput()
    } else if(guess < numberToGuess) {
        UI.showMessage(`Guess to low! You have ${TOTAL_GUESSES - counter} left.`, "danger")
        UI.setIcon('arrow-up')
        UI.resetInput()
    } else {
        UI.showMessage(`Woooow, perfect! The number was ${numberToGuess}`, "success", 5000)
        UI.setIcon('face-rocket')
        UI.showFirework(10000)
        UI.blinkInput(10000)
    }

    if(counter == TOTAL_GUESSES) {
        UI.showMessage("Ooooh no! You have lost!", "primary")
        numberToGuess = undefined
    }
})

document.querySelector('#new-game').addEventListener('click', event => {
    UI.showMessage("OK, lets go!", "primary")
    newNumber()
})

document.querySelector('#guess').addEventListener('input', event => {
    const input = document.querySelector('#guess')
    const guess = parseInt(input.value)
    if(guess > MAX_NUMBER) {
        input.value = 100
    }
    if(guess < 0) {
        input.value = 0
    }
})

document.querySelector('#magic').addEventListener('click', event => {
    UI.showFirework(10000)
    UI.blinkInput(10000)
})