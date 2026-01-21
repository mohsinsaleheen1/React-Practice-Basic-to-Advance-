const userData = require("../Models/auth.js");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
const signUp = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const users = await userData.findOne({ email });
    if (users) {
      return res.send({
        status: 400,
        message: "User Already exist",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new userData({
      firstname,
      lastname,
      email,
      password: hashPassword,
    });
    const savedUser = await newUser.save();
    res.send({
      status: 201,
      message: "User registered Sucessfully",
      savedUser,
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message,
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await userData.findOne({ email });
    if (!findUser) {
      return res.send({
        status: 404,
        message: "User Nor exist",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, findUser.password);

    if (!isPasswordValid) {
      return res.send({
        status: 401,
        message: "Invalid password or email",
      });
    }
    const token = Jwt.sign(
      { id: findUser._id, email: findUser.email },
      process.env.JWTSECRETKEY,
      { expiresIn: "1h" },
    );
    res.send({
      status: 200,
      message: "Login Successful",
      token,
      user: {
        id: findUser._id,
        firstname: findUser.firstname,
        lastname: findUser.lastname,
        email: findUser.email,
      },
    });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message,
    });
  }
};
const home = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await userData.findById(userId).select("firstname lastname");

    if (!user) {
      return res.status(404).json({ message: "User nahi mila" });
    }
    res.send({
      status: 200,
      message: "Welcome user",
      userName: `${user.firstname} ${user.lastname}`,
    });
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: "sorry! server is not responding",
      error: err.message,
    });
  }
};
module.exports = { signUp, login, home };
