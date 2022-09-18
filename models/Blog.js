const mongoose = require('mongoose')

const Blogschema = new mongoose.Schema({ // Blogschema => object
    title:{   // Field
        type:String,
        Required:true
    },
    description:{  // Field
        type:String,
        Required:true
    }
})
const BlogModel = mongoose.model('blog',Blogschema)  //BlogModel => model and blog => collection 

module.exports=BlogModel