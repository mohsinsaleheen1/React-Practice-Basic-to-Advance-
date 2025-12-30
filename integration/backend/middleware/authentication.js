const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const authentication = (req, res, next) => {
  const header = req.header("Authorization");
  if (!header) {
    return res.send({
      status: 401,
      message: "headers are invalid",
    });
  }
  try {
    const token = header.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          status: 403,
          message: "Invalid or expired token",
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    res.send({
      status: 500,
      message: "user is not authorized",
    });
  }
};
module.exports = authentication;
