import { bulb, showAlert } from "./ui11.js"

var btnOn = document.querySelector('#btnOn')
var btnOff = document.querySelector('#btnOff')

var url = "http://10.10.1.83"

btnOn.addEventListener('click', async function() {
    bulb('on')
    zeigeAlarm('on')

    await fetch(`${url}?led=on`)
})

btnOff.addEventListener('click', async function() {
    bulb('off')
    zeigeAlarm('off')

    await fetch(`${url}?led=off`)
})
