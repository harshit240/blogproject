const express = require('express')
const app = express()
const port = 2300
const web = require('./routes/web')

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


// ejs setup(template)
app.set('view engine','ejs')

//static file setup
app.use(express.static('public'))







// Server
app.listen(port,()=>{
    console.log(`Server is running localhost: ${port}`)
})