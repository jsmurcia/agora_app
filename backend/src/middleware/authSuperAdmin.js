const User = require('../db/models/user')

const authSuperAdmin = async (req, res, next) => {
    try {
        console.log('ingreso2')

        const user = await User.findOne({_id: req.user.id})

        if(user.role !== 3) 
            return res.status(500).json({msg: "Admin resources access denied."})

        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authSuperAdmin