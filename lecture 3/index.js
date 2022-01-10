const mongoose = require("mongoose");
const express = require("express");
const { User } = require("./model/user");

const app = express();

// middleware
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.find()
  res.json(users)
})

app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user)
})

app.post("/users", async (req, res) => {
  const newUser = new User(req.body)
  const result = await newUser.save()
  res.json(result)
});

app.put("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.name = req.body.name
  await user.save();
  res.json(user)
})

app.delete("/users/:id", async (req, res) => {
  const result = await User.findByIdAndDelete(req.params.id);
  res.json(result)
})

//connection to database
mongoose
  .connect("mongodb://localhost/node-quena")
  .then(async () => {
    console.log("successfully connected to mongodb");
    // start backend erver
    app.listen(3000, () => {
      console.log("Server listeing on port 3000");
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
