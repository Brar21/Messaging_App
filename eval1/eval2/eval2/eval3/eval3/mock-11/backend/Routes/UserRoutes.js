const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Usermodel } = require("../Modues/usermodel");

// require("dotenv").config();


const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    const { name, email, password,url,bio,phone } = req.body;
    try {
      bcrypt.hash(password, 8, async (err, pass) => {
        if (err) {
        //   console.log(err);
        } else {
          const user = new Usermodel({
            name,
            email,
            url,
            bio,
            phone,
            password: pass,
          });
          await user.save();
    // res.status(201).send("Registration Successful");

        }
      });
    } catch (error) {
    //   console.log(error);
    //   res.status(404).send("register have error")
    }
    res.status(201).send("Registration Successful");
  });
  
  //user login
  userRouter.post("/login",  async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await Usermodel.find({ email });
      const hashed_password = user[0].password;
      if (user.length > 0) {
        bcrypt.compare(password, hashed_password, (err, result) => {
          if (result) {
            const token = jwt.sign({ userID: user[0]._id }, "backend", {
              expiresIn: "1h",
            });
            res.status(201).send({ message: "Login Successful", token: token ,user:user[0]});
          } else {
            res.status(400).send("Wrong credentials");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
  userRouter.get("/getprofile/:id", async(req,res)=>{
    const { id } = req.params
    try{
        const user = await Usermodel.findOne({ _id:id })
res.send(user)
    }
    catch(err){
res.send("error getprofile")
    }
  })
  userRouter.patch("/edit/:id", async (req, res) => {
    const id = req.params.id;
    const { url, name, bio, phone, email, password } = req.body;
    try {
      bcrypt.hash(password, 8, async (err, secure_password) => {
        if (err) {
          console.log(err);
        } else {
          const user = await Usermodel.findByIdAndUpdate(id, {
            url,
            name,
            bio,
            phone,
            email,
            password: secure_password,
          });
          if (!user) {
            return res.status(400).json({ message: `User is not found` });
          }
          res.status(200).json({ message: "UserProfile updated successfully" });
        }
      });
    } catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  });
module.exports = { userRouter };
