class FrontendController{
    
    static home = async(req,res)=>{
        res.render('front/home')
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