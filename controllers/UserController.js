const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  
  static AdminRegister = async (req, res) => {
    res.render("admin/register", { message: req.flash("error") });
  };

  static Register = async (req, res) => {
    //    console.log(req.body);
    const { name, email, password, confirm_password } = req.body;
    const admin = await UserModel.findOne({ email: email });

    if (admin) {
      req.flash("error", "Email already exists");
      return res.redirect("/admin/register");
    } else {
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
            req.flash("message", "Registration Successful! Do login!");
            return res.redirect("/login");
          } catch (err) {
            console.log(err);
          }
        } else {
          req.flash("error", "Password and Confirm password doesn`t match");
          return res.redirect("/admin/register");
        }
      } else {
        req.flash("error", "All Fields are Required");
        return res.redirect("/admin/register");
      }
    }
  };

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
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY,{
              expiresIn:'20m'
            });
            // console.log(token);
            res.cookie("token", token);
            res.redirect("/admin/dashboard");
          } else {
            req.flash("error", "Email or Password is not valid");
            return res.redirect("/login");
          }
        } else {
          req.flash("error", "You are not a registered user");
          return res.redirect("/login");
        }
      } else {
        req.flash("error", "All Fields Required");
        return res.redirect("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  static Logout = async (req, res) => {
    try {
      res.clearCookie("token");
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  };
}
module.exports = UserController;
