const mongoose = require("mongoose");

const connectDB = () => {
  
  // return mongoose.connect('mongodb://localhost:27017/blog_project')

  // return mongoose.connect(process.env.DB_URL)
  //   .then(() => {
  //     console.log("connected sucessfully");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

    return mongoose.connect("mongodb+srv://Himanshu2409:Himanshu123@cluster0.8rkck54.mongodb.net/blog_upload?retryWrites=true&w=majority", {
      useNewUrlParser: "true",
      useUnifiedTopology: "true"
    }).then(() => {
      console.log("connected sucessfully");
    })
    .catch((err) => {
      console.log(err);
    });
    
};
module.exports = connectDB;
