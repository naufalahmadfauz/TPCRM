const express = require('express')
const router = new express.Router()
const {sequelize, User} = require('../models')
const auth = require('../middleware/auth')
const errorHandler = require('../middleware/errorHandler')
router.get('/api/me',auth,async (req, res) => {
    try {
        res.send(`Hello,my email is ${req.session.email}`)
    }catch (e) {
        res.status(500).send(e)
    }
})

router.post('/api/users',async (req, res) => {
    try {
        const {email,password} = req.body
        const user = await User.create({email: email, password: password})
        res.send(user)
    }catch (e) {
        res.status(500).send(e)
    }
})

router.post('/api/login',async (req, res) => {
    try {
        const {email,password} = req.body
        const user = await User.findOne({
            where: {email: email,password: password}
        })
        req.session.email = user.email.toString()
        res.send(user)
    }catch (e) {
        res.status(500).send(e)
    }
})


module.exports = router
