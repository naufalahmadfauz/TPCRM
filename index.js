const app = require('./app')
const {sequelize} = require('./models')
const port = process.env.PORT
app.listen(port,()=>{
    sequelize.authenticate()
    console.log('Server is up and running on port ',port)
})