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
        try{
            const data = await BlogModel.findById(req.params.id)
            // console.log(data);
            res.render('admin/blog/blogview',{viewdata:data})
        }catch(err){
            console.log(err);
        }
    }
    static BlogEdit = async(req,res)=>{
        // console.log(req.params.id); 
        const data = await BlogModel.findById(req.params.id)
        // console.log(data);
        res.render('admin/blog/blogedit',{editdata:data})
    }
    static BlogUpdate = async(req,res)=>{
        // console.log(req.body);
        // console.log(req.params.id);
        try{
            const data = await BlogModel.findByIdAndUpdate(req.params.id,{
                title:req.body.title,
                description:req.body.description
            })
            await data.save()
            res.redirect('/admin/blog')   // ' ' => route url
        }catch(err){
            console.log(err);  
        }
    }
    static DeleteBlog = async(req,res)=>{
        // console.log(req.params.id);
        const result = await BlogModel.findByIdAndDelete(req.params.id)
        res.redirect('/admin/blog')
    }
}
module.exports = AdminController