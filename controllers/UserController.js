const UserMOdel = require("../models/User")

class UserController{
    static AdminRegister=async(req,res)=>{
        res.render('admin/register')
    }
}
module.exports=UserController