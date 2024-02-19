const userModel = require("../models/userModel.js");
const { hashPassword, comparePassword } = require("../helpers/authHelper.js");

//register controller
const registerControler = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    if (!name || !email || !password || !phone || !address) {
      return res.send("Please fill the data properly");
    }
    const user = await userModel.findOne({ email: email });
    if (user) {
      return res.send("User already exist");
    }

    //bcrypt password
    const hashedPassword = await hashPassword(password);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });
    await newUser.save();
    res.status(200).send({
      success: true,
      messege: "User registered successfully",
      newUser,
    });
  } catch (error) {
    res.status(500).send(console.log(error));
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
      if (isMatch) {
        res.status(200).send("Login successfull");
      } else {
        res.send({ messege: "ivalid password" });
      }
    }
  } catch (error) {
    res.status(500).send({ messege: "error" });
  }
};

module.exports = { registerControler, Loginrouter };
