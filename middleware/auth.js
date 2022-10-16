const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')

const CheckUserAuth = async(req,res,next)=>{
    const{token}=req.cookies;
    // console.log(token);
    if(!token){
        req.flash('error','Unauthorized user, Please Login!')
        return res.redirect('/login')
    }else{
        const verify_login = jwt.verify(token,'himanshu123')
        next()
    }
}

module.exports= CheckUserAuth
