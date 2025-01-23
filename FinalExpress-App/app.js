const express = require("express");
const userRouter = require("./router/Auth");
const productRouter = require("./router/router");
const mongoose = require("mongoose");
const app = express();
mongoose.connect("mongodb://localhost:27017/booster-seminar", (err) => {
  if (err) {
    console.log("Error to connect: ", err.message);
  } else {
    console.log("connected to database");
  }
});

app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use((err, req, res, next) => {
  if (err && err.message) {
    res.send(err.message);
  } else res.send(" Error");
});
app.listen(3000, () => console.log("listening on 3000..."));
