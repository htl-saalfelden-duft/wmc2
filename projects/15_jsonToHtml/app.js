const usersElement = document.querySelector('#tbody')

const proceed = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const tr = document.createElement('tr')
            tr.innerHTML = `<td>${user.id}</td>
                            <td>${user.name}</td>`
            usersElement.appendChild(tr)
        });

    })
}


proceed()
