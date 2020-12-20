
const express = require('express')
const routesAdmin = express.Router()
const authentication = require('../middleware/Login')

router.post('/login', (req, res) => {
    const { username, password } = req.body
    const token = authentication.generateAccessToken(username)
    res.status(200).send({ "message": "successful login!", "token": token })
})


router.post('/logout', (req, res) => {
    res.send('Logout successful')
})

module.exports = routesAdmin