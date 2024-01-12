var myImage = document.getElementById('myImage')
var lampeAlert = document.getElementById('lampeAlert')
var container = document.querySelector(".container")

function bulb(status) {
    if(status == 'on') {
        myImage.src='./images/pic_bulbon.gif'
        showAlert('on', "Die Lampe ist an")
    }
    if(status == 'off') {
        myImage.src='./images/pic_bulboff.gif'
        showAlert('off', "Die Lampe ist aus")
    }
}

function showAlert(status, text) {
    var alert = document.createElement('div')
    alert.classList.add('alert')
    alert.classList.add('mt-4')

    alert.innerHTML = text
    
    if(status == 'on') {
        alert.classList.add('alert-warning')
    }
    if(status == 'off') {
        alert.classList.add('alert-primary')
    }


    container.appendChild(alert)

    setTimeout(function() {
        alert.remove()
    }, 2000)
}


{/* <div id="lampeAlert" class="alert alert-primary mt-4" role="alert">
    Die Lampe ist aus
</div> */}