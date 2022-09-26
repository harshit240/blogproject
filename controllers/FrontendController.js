const BlogModel = require("../models/Blog")

class FrontendController{
    
    static home = async(req,res)=>{
        try{
            const blog_data = await BlogModel.find()
            console.log(blog_data);
            res.render('front/home',{d:blog_data})
        }catch(err){
            console.log(err);
        }

    }
    static about = async(req,res)=>{
        res.render('front/about')
    }
    static contact = async(req,res)=>{
        res.render('front/contact')
    }
    static blogdetail = async(req,res)=>{
        res.render('front/blogdetail')
    }
    static bloglist = async(req,res)=>{
        res.render('front/bloglist')
    }
    static login = async(req,res)=>{
        res.render('front/login')
    }
}
module.exports = FrontendController