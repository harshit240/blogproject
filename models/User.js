const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({ // Blogschema => object
    name:{   // Field
        type:String,
        Required:true
    },
    email:{  // Field
        type:String,
        Required:true
    },
    password:{  // Field
        type:String,
        Required:true
    }
},{timestamps:true})
const UserModel = mongoose.model('user',UserSchema)  //UserModel => model and blog => collection 

module.exports=UserModel

