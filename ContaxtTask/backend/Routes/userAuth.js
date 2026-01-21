const express = require("express");
const { signUp, login, home } = require("../Controllers/Auth.con");
const authrization = require("../middleware/authentication");
const router = express.Router();
router.post("/signup", signUp);
router.post("/login", login);
router.post("/home", authrization, home);
module.exports = router;
