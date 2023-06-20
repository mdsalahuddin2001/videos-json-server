const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const videosRouter = require("./routers/videosRouter");
const app = express();
const MONGO_URI =
  "mongodb+srv://mdsalahuddinmongoose:aA1bB2cC3dD4@cluster0.44vmtdf.mongodb.net/ecommerce?retryWrites=true&w=majority";

const PORT = 5000;

// connect database
connectDB(MONGO_URI);

app.use("/videos", videosRouter);
// listen mongoose connection
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});

// when database connection fails
mongoose.connection.on("error", (err) => {
  console.log(err);
});
