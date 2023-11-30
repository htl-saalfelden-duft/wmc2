var container = document.querySelector('.container')
var myImage = document.getElementById('myImage')
var statusAlert = document.getElementById('status')

function bulb(status) {
    if(status == 'on') {
        myImage.src='./images/pic_bulbon.gif'
    } else {
        myImage.src='./images/pic_bulboff.gif'    
    }
    showAlert(status)
}

function showAlert(status) {
    var alert = document.createElement("div")
    alert.classList.add("alert")
    alert.classList.add("mt-4")

    if(status == 'on') {
        alert.innerHTML = "Das Licht ist an"
        alert.classList.add("alert-warning")
    } else {
        alert.innerHTML = "Das Licht ist aus"
        alert.classList.add("alert-primary")
    }

    container.appendChild(alert)

    setTimeout(function() {
        alert.remove()
    }, 2000)
}
