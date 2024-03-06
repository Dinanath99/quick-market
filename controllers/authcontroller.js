const userModel = require("../models/userModel.js");
const { hashPassword, comparePassword } = require("../helpers/authHelper.js");
var jwt = require("jsonwebtoken");

//register controller
const registerControler = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    if (!name || !email || !password || !phone || !address || !answer) {
      return res.send("Please fill the data properly");
    }
    const user = await userModel.findOne({ email: email });
    //existin user
    if (user) {
      return res.status(200).send({
        success: false,
        message: "ALready register please login",
      });
    }

    //bcrypt password
    const hashedPassword = await hashPassword(password);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
    });
    await newUser.save();
    res.status(200).send({
      success: true,
      messege: "User registered successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).send(console.log(error));
    console.log(error);
  }
};

// login controller
const Loginrouter = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.send("Please fill the data properly");
    }
    const user = await userModel.findOne({ email: email });

    //matching the password
    if (user) {
      const isMatch = await comparePassword(password, user.password);
      const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      if (isMatch) {
        res.status(200).send({
          success: true,
          messege: "login successfull",
          user: {
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
          },
          token: token,
        });
      } else {
        res.send({ messege: "ivalid password" });
      }
    }
  } catch (error) {
    res.status(500).send({ messege: "error" });
  }
};

// forgot forgotPasswordController

const forgotPasswordController = async (req, res) => {
  try {
    cosnt[(email, answer, newPassword)] = req.body;
    if (!email || !answer || !newPassword) {
      return res.status(400).send({
        message: "Please fill the data properly",
      });
    }

    //check user email and answer
    const user = await userModel.findOne({ email, answer });
    // validation
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Wrong email or answer",
      });
    }

    const hashed = await hashedPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      messege: "Something went wrong",
      error,
    });
  }
};
// test controller

const testController = (req, res) => {
  res.send("Protected route");
};

module.exports = {
  registerControler,
  Loginrouter,
  testController,
  forgotPasswordController,
};
