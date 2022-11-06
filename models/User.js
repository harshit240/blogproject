const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({ // UserSchema => object
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
const UserModel = mongoose.model('user',UserSchema)  //UserModel => model and user => collection 

module.exports=UserModel

