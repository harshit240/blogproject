const BlogModel = require("../../models/Blog")

class BlogController{
    static blogs = async(req,res)=>{
        try{
            const blogs = await BlogModel.find()
            res.status(200).json({
                success:true,
                blogs
            })
        }catch(err){
            console.log(err);
        }
    }
}
module.exports = BlogController