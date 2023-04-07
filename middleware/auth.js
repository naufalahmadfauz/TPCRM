const {User} = require('../models')

const auth = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where:{
                email:req.session.email
            }
        })

        if (!user) {
            await req.session.destroy()
            return res.status(403).send({error: 'Please Login First.'})
        } else {
            req.user = user
            next()
        }
    } catch (e) {
        return res.status(401).send({error: 'Please Authenticate'})
    }
}

module.exports = auth