const express = require("express");
const {
  register,
  login,
  logout,
  home,
} = require("../Controllers/user.controller");
const authentication = require("../middleware/authentication.js");
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/home", authentication, home);
router.post("/logout", logout);
module.exports = router;
