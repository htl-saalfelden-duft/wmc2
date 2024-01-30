var container = document.querySelector(".container")
var myImage = document.getElementById('myImage')

export function showAlert(status) {
    var alert = document.createElement('div')
    alert.classList.add('alert')
    alert.classList.add('mt-4')

    if(status == 'on') {
        alert.classList.add('alert-warning')
        alert.innerHTML = "Die Lampe ist an"
    }
    if(status == 'off') {
        alert.classList.add('alert-primary')
        alert.innerHTML = "Die Lampe ist aus"
    }


    container.appendChild(alert)

    setTimeout(function() {
        alert.remove()
    }, 2000)
}

export function bulb(status) {
    if(status == 'on') {
        myImage.src='./images/pic_bulbon.gif'
    }
    if(status == 'off') {
        myImage.src='./images/pic_bulboff.gif'
    }
}