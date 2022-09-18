const BlogModel = require('../../models/Blog') 
const TeacherModel = require('../../models/Teacher')

class AdminController{
    
    static dashboard = async(req,res)=>{
        res.render('admin/dashboard')
    }
    static blogs = async(req,res)=>{
        const data = await BlogModel.find()
        // console.log(data);
        res.render('admin/blog/blogdisplay',{d:data})
    }

    static addblogs = async(req,res)=>{
        res.render('admin/blog/addblogs')
    }
    static insertblog = async(req,res)=>{
        // console.log(req.body.title);
        try{
            const result = new BlogModel({
                title:req.body.title,
                description:req.body.description
            })
            await result.save()
            res.redirect('/admin/blog')  // ' ' => route url
        }catch(err){
            console.log(err);
        }
    }
    static BlogView = async(req,res)=>{
        // console.log(req.params.id); 
        const data = await BlogModel.findById(req.params.id)
        // console.log(data);
        res.render('admin/blog/blogview',{viewdata:data})
    }
}
module.exports=AdminController