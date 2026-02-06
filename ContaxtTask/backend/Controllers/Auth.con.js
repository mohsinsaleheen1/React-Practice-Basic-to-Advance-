const userData = require("../Models/auth.js");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const cookieParser = require("cookie-parser");
dotenv.config();
const signUp = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const Useravatar = req.file ? req.file.filename : null;
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
      avatar: Useravatar,
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
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, findUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password or email" });
    }
    const token = Jwt.sign(
      { id: findUser._id, email: findUser.email },
      process.env.JWTSECRETKEY,
      { expiresIn: "1h" },
    );
    res.cookie("myToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 3600000,
    });
    res.send({
      status: 200,
      message: "Login Successful",
      token,
      user: {
        id: findUser._id,
        firstname: findUser.firstname,
        lastname: findUser.lastname,
        email: findUser.email,
        avatar: findUser.avatar,
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
    const user = await userData.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User nahi mila" });
    }

    res.status(200).json({
      success: true,
      message: "Welcome user",
      user: {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        avatar: findUser.avatar,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server issue",
      error: err.message,
    });
  }
};
async function mailSending(req, res) {
  try {
    // Create a reusable transporter object using SMTP transport.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // use false for STARTTLS; true for SSL on port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    const { name, subject, email, message } = req.body; // Destructure and retrieve data from request body.

    // Validate required fields.
    if (!name || !subject || !email || !message) {
      return res
        .status(400)
        .json({ status: "error", message: "Missing required fields" });
    }
    // Prepare the email message options.
    const mailOptions = {
      from: process.env.SENDER_EMAIL, // Sender address from environment variables.
      to: `${name} <${email}>`, // Recipient's name and email address.
      replyTo: process.env.REPLY_TO, // Sets the email address for recipient responses.
      subject: subject, // Subject line.
      text: message, // Plaintext body.
    };
    // Send email and log the response.
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res
      .status(200)
      .json({ status: "success", message: "Email sent successfully" });
  } catch (err) {
    res.send({
      status: 500,
      message: "user not authorized",
      err,
    });
  }
}
module.exports = { signUp, login, home, mailSending };
