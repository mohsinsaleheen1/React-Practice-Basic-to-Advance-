const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const dbConnect = require("./Db/db.js");
const authRoute = require("./Routes/userAuth.js");
const app = express();
const PORT = 5000;
// Middleware

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
// Database
dbConnect();
app.use("/api", authRoute);
app.listen(PORT, () => {
  console.log(`Server is runing at ${PORT}`);
});
