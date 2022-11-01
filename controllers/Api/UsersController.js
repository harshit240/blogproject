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
                })

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
    }

    static Verify_login = async (req, res) => {
        try {
          const { email, password } = req.body;
          if (email && password) {
            const user = await UserModel.findOne({ email: email });
            // console.log(user.password);
            if (user != null) {
              const isMatched = await bcrypt.compare(password, user.password);
              if (user.email === email && isMatched) {
                //verfiy token
                const token = jwt.sign({ userId: user._id }, "himanshu123");
                // console.log(token);
                res.cookie("token", token);
                res.send({ status: "success", message: "login successfully with web token 😃🍻", "Token": token });
              } else {
                res.send({ status: "failed", message: "Email or Password is not Valid😓" });
              }
            } else {
                res.send({ status: "failed", message: "You are not registered user😓" });
            }
          } else {
            res.send({ status: "failed", message: "All Fiels are required😓" });
          }
        } catch (err) {
          console.log(err);
        }
      }

      static Logout = async (req, res) => {
        try {
          res.clearCookie("token");
          res.send({ status: "success", message: "Logout successfully" });
        } catch (err) {
          console.log(err);
        }
      };
}

module.exports = UsersController