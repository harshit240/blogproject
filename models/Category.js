const mongoose = require('mongoose')

const Categoryschema = new mongoose.Schema({ // Categoryschema => object
    title:{   // Field
        type:String,
        Required:true
    },
    description:{  // Field
        type:String,
        Required:true
    },
    name:{  // Field
        type:String,
        Required:true
    },
    email:{  // Field
        type:String,
        Required:true
    }
})
const CategoryModel = mongoose.model('category',Categoryschema)  //CategoryModel => model and blog => collection 

module.exports=CategoryModel