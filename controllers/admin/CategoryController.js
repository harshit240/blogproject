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
    
}
module.exports = CategoryController