const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Database Connected"))
    .catch((err) => {
      console.log("Database Not Connected", err);
    });
};
module.exports = { dbConnect };
