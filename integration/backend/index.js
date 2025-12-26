const express = require("express");
const userRoute = require("./routes/user.route.js");
const { dbConnect } = require("./config/dbConnect.js");
const app = express();
const cors = require("cors");
// Port
const port = process.env.PORT || 3000;
// Database
dbConnect();
// MiddleWare
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
app.use("/api", userRoute);
app.listen(port, () => {
  console.log(`Server is runing at ${port}`);
});
