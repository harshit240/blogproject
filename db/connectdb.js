const mongoose = require("mongoose");

const connectDB = () => {
  
  // return mongoose.connect('mongodb://localhost:27017/blog_project')

  return mongoose.connect("mongodb+srv://blogweb:blogweb123@cluster0.myiwucg.mongodb.net/PersonalBlog?retryWrites=true&w=majority")
    .then(() => {
      console.log("connected sucessfully");
    })
    .catch((err) => {
      console.log(err);
    });
  
};
module.exports = connectDB;
