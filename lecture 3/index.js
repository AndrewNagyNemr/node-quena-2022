const mongoose = require("mongoose");
const express = require("express");
const { User } = require("./model/user");

const app = express();

app.use(express.json());

app.post("/users", async (req, res) => {
  const newUser = new User(req.body)
  const result = await newUser.save()
  res.json(result)
});

mongoose
  .connect("mongodb://localhost/node-quena")
  .then(async () => {
    console.log("successfully connected to mongodb");
    app.listen(3000, () => {
      console.log("Server listeing on port 3000");
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
