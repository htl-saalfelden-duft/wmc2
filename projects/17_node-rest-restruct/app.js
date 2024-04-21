const express = require('express')
const uuid = require('uuid')

const userRouter = require('./routes/user.route')

const app = express()
const port = 3000

app.use(express.json());

app.use('/api_v2/users', userRouter)


let users = [
  { id: uuid.v4(), firstName: "jane", lastName: "doe" },
  { id: uuid.v4(), firstName: "John", lastName: "Mayr" },
  { id: uuid.v4(), firstName: "Max", lastName: "Muster" }
]

// test with: curl http://localhost:3000/users
app.get('/users', (req, res) => {
  res.send(users)
})

// test with: curl -X POST --json '{"firstname": "John", "lastname": "Doe"}' http://localhost:3000/users
// or curl -X POST --header "Content-Type: application/json" --data '{"firstname": "Johnny", "lastname": "Doe"}' http://localhost:3000/users/fa09e3ec-be38-4e9e-bb60-d738195f6c03

app.post('/users', (req, res) => {
  const { firstName, lastName } = req.body

  const newUser = {
    id: uuid.v4(),
    firstName,
    lastName
  }

  users.push(newUser)

  res.send(newUser)
})

// test with: curl -X PUT --json '{"firstName": "John", "lastName": "Doe"}' http://localhost:3000/users/123
app.put('/users/:id', (req, res) => {
  const id = req.params.id
  const { firstName, lastName } = req.body

  const user = users.find(u => u.id = id)
  if (user) {
    user.firstName = firstName
    user.lastName = lastName

    res.send(user)
  } else {
    res.status(404).send({ message: "User not found" })
  }
})

// test with: curl -X DELETE http://localhost:3000/users/123
app.delete('/users/:id', (req, res) => {
  const id = req.params.id

  const user = users.find(u => u.id = id)

  if (user) {
    users = users.filter(u => u.id != id)
    res.status(200).send({ message: "User removed" })
  } else {
    res.status(404).send({ message: "User not found" })
  }

  res.send(req.params.id)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})