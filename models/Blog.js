const mongoose = require('mongoose')

const Blogschema = new mongoose.Schema({ // Blogschema => object
    title:{   // Field
        type:String,
        Required:true
    },
    description:{  // Field
        type:String,
        Required:true
    },
    image: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
      user:{
        type:String,
      }
},{timestamps:true})
const BlogModel = mongoose.model('blog',Blogschema)  //BlogModel => model and blog => collection 

module.exports=BlogModel