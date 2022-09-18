const mongoose = require('mongoose')

const connectDB =()=>{

    return mongoose.connect('mongodb://localhost:27017/blog_project')
    .then(()=>{
        console.log('connected sucessfully');
    }).catch((err)=>{
        console.log(err);
    })
    
}
module.exports=connectDB