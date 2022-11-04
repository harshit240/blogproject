const mongoose = require('mongoose')

const connectDB =()=>{
con ="mongodb+srv://Himanshu2409:Himanshu123@cluster0.8rkck54.mongodb.net/blog_upload?retryWrites=true&w=majority"

    // return mongoose.connect('mongodb://localhost:27017/blog_project')
    return mongoose.connect(con)
    .then(()=>{
        console.log('connected sucessfully');
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports=connectDB
