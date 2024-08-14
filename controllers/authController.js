const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.register = async(req,res)=>{
    const {email, password, role} = req.body;
    try{
        const user =new User({email, password, role});
        await user.save();
        res.status(201).send('User registered');
    } catch (err) {
        res.status(400).json({error:err.message});
    }
};

exports.login = async (req, res) => {
    const {email, password } = req.body;
    try{
        const user = await User.findOne({email});
        if(!user || !(await user.comparePassword(password))) {
          return res.status(400).json({error: 'Invalid credential'});
        }
        const token = jwt.sign({id: user._id, role: user.role}, 'amar', {expiresIn:'1h'});
        res.json({token});
    } catch (err){
        res.status(500).json({error:err.message});
    }
};