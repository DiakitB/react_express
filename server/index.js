const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const Tour = require("./model/tourModel");
const cors = require("cors");
const morgan = require("morgan");
dotenv.config({ path: "./config.env" });
//const app = require('./app');
const DB = process.env.MONGODB_CONNECTION_STRING;
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

/// CREATING OUR SCHEMA

//// CREATING AN INSTANCE OF OUR MODEL

app = express();
app.use(express.json({ limit: "10kb" }));
app.use(morgan("dev"));
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.get("/tours", async (req, res) => {
  const tours = await Tour.find();
  res.status(200).json({
    status: "successful",
    test: {
      data: tours,
    },
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`your app is listening at port ${port}`);
});
