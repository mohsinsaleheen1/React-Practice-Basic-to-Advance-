const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const authrization = async (req, res, next) => {
  const token = req.cookies.myToken;
  if (!token) {
    return res.status(401).json({
      message: "Session expired ya token nahi mila, ustaad!",
    });
  }
  try {
    jwt.verify(token, process.env.JWTSECRETKEY, (err, user) => {
      if (err) {
        return res.sendStatus(403).json({ message: "Token valid nahi hai" });
      }
      req.user = user;
      console.log(req.user);
      next();
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error in authorization",
    });
  }
};
module.exports = authrization;
