const mongoose = require('mongoose')

const Contactschema = new mongoose.Schema({ // Blogschema => object
    name:{   // Field
        type:String,
        Required:true
    },
    email:{  // Field
        type:String,
        Required:true
    },
    phone:{  // Field
        type:String,
        Required:true
    },
    message:{  // Field
        type:String,
        Required:true
    },
    
},{timestamps:true})
const ContactModel = mongoose.model('contact',Contactschema)  //ContactModel => model and contact => collection 

module.exports=ContactModel