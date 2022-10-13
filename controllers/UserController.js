const UserModel = require("../models/User")
const bcrypt = require('bcrypt');

class UserController{
    static AdminRegister=async(req,res)=>{

        res.render('admin/register',{message:req.flash('error')})

    }
    static Register=async(req,res)=>{
    //    console.log(req.body);
    const{name,email,password,confirm_password}=req.body
    const admin = await UserModel.findOne({email:email})

    if(admin){
        req.flash('error','Email already exists')
        return res.redirect('/admin/register')
    }
    else{
        if(name && email && password && confirm_password){
            if(password==confirm_password){
                try{
                    const hashpassword = await bcrypt.hash(password,10)
                    const result =await UserModel({
                        name:name,
                        email:email,
                        password:hashpassword
                    })
                    await result.save()
                    req.flash('error','Registration Successful! Do login!')
                    return res.redirect('/login')
                }catch(err){
                    console.log(err);
                }
            }else{
                req.flash('error','Password and Confirm password doesn`t match')
                return res.redirect('/admin/register')
            }
        }
        else{
            req.flash('error','All Fields are Required')
            return res.redirect('/admin/register')
        }
    }

    }

    static Verify_login = async(req,res)=>{
        try{
            const{email,password}=req.body;
            if(email && password){

            }else{
                req.flash('error','All Fields Required')
                    return res.redirect('/login')
            }
        }catch(err){
            console.log(err);
        }
    }
}
module.exports=UserController

