const express = require('express')
const router = new express.Router()
const {sequelize, User} = require('../models')
const auth = require('../middleware/auth')


// router.post('/api/signup',async (req, res) => {
//     try {
//         const {email,password} = req.body
//         const user = await User.create({email: email, password: password})
//         res.send(user)
//     }catch (e) {
//         res.status(500).send(e)
//     }
// })
router.get('/api/me',auth,async (req, res) => {
    try {
        const emailSession =`Hello,my email in the session is ${req.session.email},`
        const savedEmail = `Hello,my email in the database is ${req.user.email},`
        const myRole = `Hello,my role is ${req.user.role},`
        res.send({
            emailSession,
            savedEmail,
            myRole
        })
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
        if (!user) {
            res.status(404).send({message: 'User not found'})
        }else{
            req.session.email = user.email.toString()
            res.send(user)
        }
    }catch (e) {
        res.status(500).send(e)
    }
})

router.post('/api/logout',auth,async (req, res) => {
    try {
       req.session.destroy()
        res.send({message: 'Log out successfully'})
    }catch (e) {
        res.status(500).send(e)
    }
})

router.get('/*',async (req, res) => {
    try {
        res.status(404).send({message: 'Not Found'})
    }catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router
