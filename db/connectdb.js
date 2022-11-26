const mongoose = require("mongoose");

const connectDB = () => {
  
  // return mongoose.connect('mongodb://localhost:27017/blog_project')

  return mongoose.connect("mongodb+srv://Himanshu2409:Himanshu123@cluster0.8rkck54.mongodb.net/blog_upload?retryWrites=true&w=majority")
    .then(() => {
      console.log("connected sucessfully");
    })
    .catch((err) => {
      console.log(err);
    });
    
    
};
module.exports = connectDB;
