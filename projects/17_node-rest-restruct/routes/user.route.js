const express = require('express')
const router = express.Router()

const userService = require('../services/user.service')


router.get('/', (req, res) => {
    const users = userService.getAll()
    res.send(users)
})
  

module.exports = router
