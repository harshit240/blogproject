const express = require('express')
const app = express()
// const port = process.env.PORT || 3000
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config();
const web = require('./routes/web')
const api = require('./routes/api')
const fileUpload = require("express-fileupload");

//Temp file uploader
app.use(fileUpload({useTempFiles: true}));
//Required Cloudinary
const cloudinary = require('cloudinary');
const session = require('cookie-session')
const flash = require('connect-flash');

//cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser())
app.use(cors())

//messages
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  }));
//Flash messages
app.use(flash());

//Body-Parse require
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//Database connection
const connectDB = require('./db/connectdb')
connectDB()

//routing
app.use('/',web)
//localhost:2300

// API ROUTING
app.use('/api',api)
//localhost:2300/api

// ejs setup(template)
app.set('view engine','ejs')

//static file setup
app.use(express.static('public'))





// Server
app.listen(process.env.PORT,()=>{
    console.log(`listening to the port at ${process.env.PORT}`) //${port} ==> template literals, 
    // `` ==> Back ticks(use for multiline string)
})