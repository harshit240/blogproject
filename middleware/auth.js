const jwt = require('jsonwebtoken')
const UserModel = require('../models/User')

const CheckUserAuth = async(req,res,next)=>{
    console.log('Not authorised user');
}

module.exports= CheckUserAuth