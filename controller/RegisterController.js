const User= require('../models/User');
const bcrypt = require('bcrypt');
const register= async (req,res) => {

    const {username,password}=req.body;
    try {
        let user=await User.findOne({username})
        if(user) {
            console.log('user already exists')
            return res.status(409).json({message:"user already registered"});

        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user=new User({username,password:hashedPassword});


        await user.save();
        console.log('user saved');
        res.status(200).json({message:"Registration sucess!!"});
    } catch (error) {
        console.error(error.message);
        res.status(400).json({message:'server error'});
    }
}
module.exports = register;