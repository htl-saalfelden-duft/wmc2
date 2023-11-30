var myImage = document.getElementById('myImage')
var statusAlert = document.getElementById('status')

function bulb(status) {
    if(status == 'on') {
        myImage.src='./images/pic_bulbon.gif'
        statusAlert.innerHTML = "Das Licht ist an"
        statusAlert.classList.remove("alert-primary")
        statusAlert.classList.add("alert-warning")
    } else {
        myImage.src='./images/pic_bulboff.gif'
        statusAlert.innerHTML = "Das Licht ist aus"
        statusAlert.classList.remove("alert-warning")
        statusAlert.classList.add("alert-primary")      
    }
}
