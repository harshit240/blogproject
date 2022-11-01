const express = require('express')
const BlogController = require('../controllers/Api/BlogController')
const router = express.Router()





router.get('/blogs',BlogController.blogs)
router.post('/blogInsert',BlogController.BlogInsert)
router.get('/blogview/:id',BlogController.blogview)
router.post('/blogupdate/:id',BlogController.blogupdate)
router.post('/blogdelete/:id',BlogController. blogdelete)


module.exports = router;