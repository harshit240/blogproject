const BlogModel = require("../models/Blog")
const CategoryModel = require("../models/Category")

class FrontendController{
    
    static home = async(req,res)=>{
        try{
            const blog_data = await BlogModel.find().sort({_id:-1}).limit(8)
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
        // console.log(req.body);
        res.render('front/contact')
    }
    
    static blogdetail = async(req,res)=>{
        try{
            const category = await CategoryModel.find();
            const recentblog = await BlogModel.find().sort({_id:-1}).limit(4)
            // console.log(category);
            // console.log(req.params._id);
            const detail = await BlogModel.findById(req.params._id);
            res.render('front/blogdetail',{d:detail,c:category,r:recentblog})
        }
        catch(err){
            console.log(err);
        }
    }
    static bloglist = async(req,res)=>{
        try{
            const blogs = await BlogModel.find()
            // console.log(blogs);
            res.render('front/bloglist',{r:blogs})
        }catch(err){
            console.log(err);
        }
    }
    static login = async(req,res)=>{
        if (req.cookies.token) {
            res.redirect("/admin/dashboard");
        } else {
            res.render('front/login',{message:req.flash('message'),error:req.flash('error')}) //chngd
        }
    }
    
}
module.exports = FrontendController