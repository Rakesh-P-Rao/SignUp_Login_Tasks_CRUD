const express = require("express");
let app = express();
const connectToDB = require("./db_connect/connection");
require("dotenv").config();
const taskRoutes = require("./routes/task.routes");
const userRoutes = require("./routes/user.routes");
const loginRoutes = require("./routes/login.routes");

var cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/mock/user/", userRoutes);
app.use("/mock/task/", taskRoutes);
app.use("/mock/login/", loginRoutes);

let startServer = async () => {
  try {
    app.listen(process.env.DEV_PORT, () => {
      console.log(
        `*************SERVER RUNNING SUCCESSFULLY*********** PORT:${process.env.DEV_PORT}`
      );
    });
    await connectToDB(process.env.MONGO_URL);
    console.log(
      "**********CONNECTED TO MONGODB DATABASE SUCCESSFULLY************"
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
