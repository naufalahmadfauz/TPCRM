const express = require('express')
const session = require('express-session')
const userRouter = require('./router/user')
const {sequelize, User} = require('./models')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    cookie: {
        maxAge: 1800000,
        sameSite: 'lax'
    },
    resave: true,
}));


app.use(userRouter)
module.exports = app