const Users = require('../models/userModel')

const autheAdmin = async(req,res,next)=>{
    try {
        //get infomation by id
        const user = await Users.findOne({
            _id: req.user._id
        })
        if(user.role==0){
            return res.status(400).json({msg:"Admin resource access denied"})
        }
        next()
    } catch (err) {
        return res.status(500).json({msg:err.message})
    }
}

module.exports =autheAdmin