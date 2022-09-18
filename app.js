const express = require('express')
const AdminController = require('./controllers/admin/AdminController')
const app = express()
const port = 2300

//Body-Parse require
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const FrontendController = require('./controllers/FrontendController')

//Database connection
const connectDB = require('./db/connectdb')
const CategorController = require('./controllers/admin/CategoryController')
connectDB()



// ejs set
app.set('view engine','ejs')

//static file setup
app.use(express.static('public'))

//Front end controller
app.get('/',FrontendController.home)
app.get('/contact',FrontendController.contact)
app.get('/login',FrontendController.login)
app.get('/bloglist',FrontendController.bloglist)
app.get('/blogdetail',FrontendController.blogdetail)
app.get('/home',FrontendController.home)
app.get('/about',FrontendController.about)


//Admin controller
app.get('/admin/dashboard',AdminController.dashboard) // [ /=> Path ]
app.get('/admin/blog',AdminController.blogs)
app.get('/admin/addblogs',AdminController.addblogs)
app.post('/admin/insert_blog',AdminController.insertblog)
app.get('/admin/blog_view/:id',AdminController.BlogView)


//Admin category controller
app.get('/admin/category',CategorController.CategoryDisplay)
app.get('/admin/createcategory',CategorController.CreateCategory)
app.post('/admin/categoryinsert',CategorController.CategoryInsert)








// Server
app.listen(port,()=>{
    console.log(`Server is running localhost: ${port}`)
})