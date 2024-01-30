const usersElement = document.querySelector('#tbody')

const proceed = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(user)

            const tr = document.createElement('tr')

            tr.innerHTML = `<td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.address.city}</td>
                            <td>
                                <button class="btn btn-outline-primary"><i class="bi bi-pencil"></i></button>
                                <button class="btn btn-outline-danger"><i class="bi bi-x-lg"></i>
                                </button>
                            </td>`
            usersElement.appendChild(tr)
        });

    })
}


proceed()
