var cloudinary = require('cloudinary').v2;
const BlogModel = require('../../models/Blog') 

cloudinary.config({ 
    cloud_name: 'dqowaxfln', 
    api_key: '456697836426261', 
    api_secret: 'Fnb8mKrkYZrTaeS71e-YpnssgDo',
    secure: true
  });

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
        // console.log(req.body);
        // console.log(req.files);
        const imagefile = req.files.blog_image
        // console.log(imagefile);
        const image_upload = await cloudinary.uploader.upload(imagefile.tempFilePath,{
            folder:'blog_image',
            width:400,
        })
        try{
            const{title,description}=req.body
            const result = new BlogModel({
                title:req.body.title,
                description:req.body.description,
                image:image_upload.secure_url
            })
            //saving data
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