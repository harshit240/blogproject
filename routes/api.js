const express = require('express')
const BlogController = require('../controllers/Api/BlogController')
const UsersController = require('../controllers/Api/UsersController')
const router = express.Router()










router.get('/blogs',BlogController.blogs)
router.post('/blogInsert',BlogController.BlogInsert)
router.get('/blogview/:id',BlogController.blogview)
router.post('/blogupdate/:id',BlogController.blogupdate)
router.get('/blogdelete/:id',BlogController.blogdelete)

//Usercontroller
router.post('/register',UsersController.Register)
router.post('/verifylogin',UsersController.Verify_login)
router.get('/logout',UsersController.Logout)

module.exports = router;