const express = require("express");
const { signUp, login, home } = require("../Controllers/Auth.con");
const authrization = require("../middleware/authentication");
const upload = require("../middleware/imageUploading");
const router = express.Router();
router.post("/signup", upload.single("avatar"), signUp);
router.post("/login", login);
router.get("/home", authrization, home);
router.post("/logout", (req, res) => {
  res.clearCookie("myToken").json({ message: "Logged out!" });
});
module.exports = router;
