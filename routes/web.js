const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin/AdminController');
const FrontendController = require('../controllers/FrontendController');
const CategorController = require('../controllers/admin/CategoryController');
const UserController = require('../controllers/UserController');
const CheckUserAuth = require('../middleware/auth');










//Front end controller
router.get('/',FrontendController.home);
router.get('/home',FrontendController.home);
router.get('/bloglist',FrontendController.bloglist);
router.get('/login',FrontendController.login);
router.get('/about',FrontendController.about);
router.get('/blogdetail/:_id',FrontendController.blogdetail);
router.get('/contact',FrontendController.contact);


//Admin controller
router.get('/admin/dashboard',CheckUserAuth,AdminController.dashboard); // [ /=> Path ]
router.get('/admin/blog',CheckUserAuth,AdminController.blogs);
router.get('/admin/addblogs',CheckUserAuth,AdminController.addblogs);
router.post('/admin/insert_blog',CheckUserAuth,AdminController.insertblog);
router.get('/admin/blog_view/:id',CheckUserAuth,AdminController.BlogView);
router.get('/admin/blog_edit/:id',CheckUserAuth,AdminController.BlogEdit);
router.post('/admin/blog_update/:id',CheckUserAuth,AdminController.BlogUpdate);
router.get('/admin/delete_blog/:id',CheckUserAuth,AdminController.DeleteBlog);

//Contact
router.post('/admin/addcontact',AdminController.addcontact);
router.get('/admin/display_contact',AdminController.ContactDisplay);

//Admin category controller
router.get('/admin/category',CategorController.CategoryDisplay);
router.get('/admin/createcategory',CategorController.CreateCategory);
router.post('/admin/categoryinsert',CategorController.CategoryInsert)
router.get('/admin/viewcategory/:id',CategorController.viewcategory);
router.get('/admin/Editcategory/:id',CategorController.EditCategory);
router.post('/admin/updatecategory/:id',CategorController.UpdateCategory);
router.get('/admin/deletecategory/:id',CategorController.DeleteCategory);

// UserController
router.get('/admin/register',UserController.AdminRegister);
router.post('/register',UserController.Register);
router.post('/verify_login',UserController.Verify_login);
router.get('/logout',UserController.Logout);


// router.get('*',(req,res)=>{
//     res.render('front/pagenotfound')
// })

module.exports = router;