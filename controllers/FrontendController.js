const BlogModel = require("../models/Blog")
const CategoryModel = require("../models/Category")

class FrontendController{
    
    static home = async(req,res)=>{
        try{
            const blog_data = await BlogModel.find()
            // console.log(blog_data);
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
        try{
            const category = await CategoryModel.find();
            // console.log(category);
            // console.log(req.params._id);
            const detail = await BlogModel.findById(req.params._id);
            res.render('front/blogdetail',{d:detail,c:category})
        }
        catch(err){
            console.log(err);
        }
    }
    static bloglist = async(req,res)=>{
        res.render('front/bloglist')
    }
    static login = async(req,res)=>{
        res.render('front/login')
    }
}
module.exports = FrontendController