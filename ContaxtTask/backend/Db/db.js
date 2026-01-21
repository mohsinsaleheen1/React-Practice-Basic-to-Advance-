const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = () => {
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => console.log("DataBase Connected"))
    .catch((error) => console.log(error));
};
module.exports = dbConnect;
