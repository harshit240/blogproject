const BlogModel = require('../../models/Blog')
const CategoryModel = require('../../models/Category')

class CategoryController{
    static CategoryDisplay = async(req,res)=>{
        const data = await CategoryModel.find()
        // console.log(data);
        res.render('admin/category/categorydisplay',{d:data})
    }
    static CreateCategory = async(req,res)=>{
        res.render('admin/category/createcategory')
    }
    static viewcategory = async(req,res)=>{
        
        // console.log(req.params.id); 
        const data = await CategoryModel.findById(req.params.id)
        // console.log(data);
        res.render('admin/category/viewcategory',{viewdata:data})
    }

    static CategoryInsert = async(req,res)=>{
        // console.log(req.body);
        try{
            const result = new CategoryModel({
                title:req.body.title,
                description:req.body.description,
                name:req.body.name,
                email:req.body.email
            })
            
            await result.save()
            res.redirect('/admin/category')  // ' ' => route url
        }catch(err){
            console.log(err);
        }
    }
    static EditCategory = async(req,res)=>{
        // console.log(req.params.body);
        const data = await CategoryModel.findById(req.params.id)
        // console.log(data);
        res.render('admin/category/categoryedit',{editdata:data})        
    }
    static UpdateCategory = async(req,res)=>{
        // console.log(req.body);
        try{
            const result = await CategoryModel.findByIdAndUpdate(req.params.id,{
                title:req.body.title,
                description:req.body.description,
                name:req.body.name,
                email:req.body.email
            })
            
            await result.save()
            res.redirect('/admin/category')  
        }catch(err){
            console.log(err);
        }
    }
    static DeleteCategory = async(req,res)=>{
        // console.log(req.body);
        const data = await CategoryModel.findByIdAndDelete(req.params.id)
        res.redirect('/admin/category')
    }

    
}
module.exports = CategoryController