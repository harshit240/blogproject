const UserModel = require('../../models/User')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UsersController{

    static Register = async (req, res) => {
        //    console.log(req.body);
        const { name, email, password, confirm_password } = req.body;
        const user = await UserModel.findOne({ email: email });
    
        if (user) {
            res.send({ status: "failed", message: "ᴛʜɪꜱ ᴇᴍᴀɪʟ ɪꜱ ᴀʟʀᴇᴀᴅʏ ᴇxɪᴛꜱ😓" });
        } 
        else {
          if (name && email && password && confirm_password) {
            if (password == confirm_password) {
              try {
                const hashpassword = await bcrypt.hash(password, 10);
                const result = await UserModel({
                  name: name,
                  email: email,
                  password: hashpassword,
                });
                await result.save();
                res.send({ status: 201, message: "Registration Successfully!😓" });
              }catch (err) {
                console.log(err);
              }
            } else {
                res.send({ status: "failed", message: "Password and Confirm_password doesn`t match😓" });
            }
          }
          else {
            res.send({ status: "failed", message: "All Fields are Required😓" });
          }
        }
      };

}

module.exports = UsersController