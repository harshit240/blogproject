const cloudinary = require('cloudinary').v2;
const BlogModel = require('../../models/Blog') 
const ContactModel = require('../../models/Contact')
cloudinary.config({ 
    cloud_name: 'dqowaxfln', 
    api_key: '456697836426261', 
    api_secret: 'Fnb8mKrkYZrTaeS71e-YpnssgDo',
    secure: true
  });

class AdminController{
    
    static dashboard = async(req,res)=>{
        const{name,email}=req.data1;
        res.render('admin/dashboard',{n:name,e:email})
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
                image: {
                    public_id: image_upload.public_id,
                    url: image_upload.secure_url,
                },
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
            const user = await BlogModel.findById(req.params.id)
            const image_id = user.image.public_id;
            // console.log(image_id);
            await cloudinary.uploader.destroy(image_id)
            const imagefile = req.files.blog_image

            const image_upload = await cloudinary.uploader.upload(imagefile.tempFilePath,{
                folder:'blog_image',
                width:400,
            })
            const data = await BlogModel.findByIdAndUpdate(req.params.id,{
                title:req.body.title,
                description:req.body.description,
                image: {
                    public_id: image_upload.public_id,
                    url: image_upload.secure_url,
                },
            })
            await data.save()
            res.redirect('/admin/blog')   // ' ' => route url
        }catch(err){
            console.log(err);  
        }
    }
    static DeleteBlog = async(req,res)=>{
        try{
            const user = await BlogModel.findById(req.params.id)
            const image_id = user.image.public_id;
            // console.log(image_id);
            await cloudinary.uploader.destroy(image_id)
            const result = await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/blog')
        }catch(err){
            console.log(err);
        }
    }

    // =================
    //Contacts

    static addcontact = async(req,res)=>{
        try{
            const result = new ContactModel({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                message:req.body.message,
            })
            await result.save()
            // console.log(req.body);
            res.redirect('/')
            
        }catch(err){
            console.log(err);
        }
    }
    
    static ContactDisplay = async(req,res)=>{
        const data = await ContactModel.find()
        // console.log(data);
        res.render('admin/contact/displaycontact',{d:data})
    }

    
}
module.exports = AdminController