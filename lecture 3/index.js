const mongoose = require("mongoose");
const express = require("express");
const userRouter = require("./routes/user")
const planRouter = require("./routes/plan")

const app = express();

// middleware
app.use(express.json());

//

app.use((req, res, next) => {
  // res.json({ message: "un-authorized" })
  console.log(req.method, req.url);
  next()
})

app.use("/users", userRouter);
app.use("/plans", planRouter)

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
