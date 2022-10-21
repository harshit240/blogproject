const express = require('express')
const BlogController = require('../controllers/Api/BlogController')
const router = express.Router()





router.get('/blogs',BlogController.blogs)
router.post('/blogInsert',BlogController.BlogInsert)


module.exports = router;