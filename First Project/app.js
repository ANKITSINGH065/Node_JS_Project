const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const routes = require("./routes/task.js");
const notFound = require("./middleware/not-found");
require("dotenv").config();
const port = 3000;

app.use(notFound);
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is connected ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
