const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/admin/AdminController')
const FrontendController = require('../controllers/FrontendController')
const CategorController = require('../controllers/admin/CategoryController')
const UserController = require('../controllers/UserController')







//Front end controller
router.get('/',FrontendController.home)
router.get('/home',FrontendController.home)
router.get('/bloglist',FrontendController.bloglist)
router.get('/login',FrontendController.login)
router.get('/about',FrontendController.about)
router.get('/blogdetail/:_id',FrontendController.blogdetail)
router.get('/contact',FrontendController.contact)
router.post('/addcontact',FrontendController.addcontact)


//Admin controller
router.get('/admin/dashboard',AdminController.dashboard) // [ /=> Path ]
router.get('/admin/blog',AdminController.blogs)
router.get('/admin/addblogs',AdminController.addblogs)
router.post('/admin/insert_blog',AdminController.insertblog)
router.get('/admin/blog_view/:id',AdminController.BlogView)
router.get('/admin/blog_edit/:id',AdminController.BlogEdit)
router.post('/admin/blog_update/:id',AdminController.BlogUpdate)
router.get('/admin/delete_blog/:id',AdminController.DeleteBlog)



//Admin category controller
router.get('/admin/category',CategorController.CategoryDisplay)
router.get('/admin/createcategory',CategorController.CreateCategory)
router.post('/admin/categoryinsert',CategorController.CategoryInsert)
router.get('/admin/viewcategory/:id',CategorController.viewcategory)
router.get('/admin/Editcategory/:id',CategorController.EditCategory)
router.post('/admin/updatecategory/:id',CategorController.UpdateCategory)
router.get('/admin/deletecategory/:id',CategorController.DeleteCategory)

// UserController
router.get('/admin/register',UserController.AdminRegister)

module.exports = router