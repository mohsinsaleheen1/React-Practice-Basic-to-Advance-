const users = require("../models/user.js");
const bcrypt = require("bcryptjs");
const register = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;
    const getuser = await users.findOne({ userEmail });
    console.log("Users", getuser);
    if (getuser)
      return res.send({ status: 409, message: "User Already Exist" });
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    const saveUser = new users({
      userName,
      userEmail,
      userPassword: hashedPassword,
    });
    const savedUsers = await saveUser.save();
    res.send({
      status: 200,
      user: savedUsers,
      message: "User Registered Sucessfully",
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
    const { userEmail, userPassword } = req.body;
    const findUser = await users.findOne({ userEmail });
    if (!findUser) return res.send({ status: 404, message: "User Not Found" });
    const machpass = bcrypt.compare(userPassword, findUser.userPassword);
    if (!machpass)
      return res.send({ status: 401, message: "Inavlid Email or password" });
    res.send({ status: 200, message: "User Login Sucessfully" });
  } catch (err) {
    res.send({
      status: 500,
      message: err.message,
    });
  }
};
const logout = async (req, res) => {
  try {
  } catch (err) {
    res.send({
      status: 500,
      message: err.message,
      message: err.message,
    });
  }
};
module.exports = { register, login, logout };
