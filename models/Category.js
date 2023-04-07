const mongoose = require('mongoose')

const Categoryschema = new mongoose.Schema({ // Categoryschema => object
    title:{   // Fields
        type:String,
        Required:true
    },
    description:{  // Fields
        type:String,
        Required:true
    },
    name:{  // Fields
        type:String,
        Required:true
    },
    email:{  // Fields
        type:String,
        Required:true
    },
    user:{  // Fields
        type:String,
    }
},{timestamps:true})
const CategoryModel = mongoose.model('category',Categoryschema)  //CategoryModel => model and blog => collection 

module.exports=CategoryModel