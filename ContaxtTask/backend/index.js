const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./Db/db.js");
const authRoute = require("./Routes/userAuth.js");
const app = express();
const PORT = 3000;
// Middleware
app.use(cors());
app.use(express.json());
// Database
dbConnect();
app.use("/api", authRoute);
app.listen(PORT, () => {
  console.log(`Server is runing at ${PORT}`);
});
