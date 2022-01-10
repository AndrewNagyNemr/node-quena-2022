const express = require('express');

const app = express()

const users = [
    { id: 1, name: "Ahmed" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Andrew" },
    { id: 4, name: "Merna" },
]

//middleware
app.use(express.json());

app.get("/users", (req, res) => {
    res.json(users)
})

app.get("/users/:id", (req, res) => {
    res.json(users.find(user => user.id === +req.params.id))
})

app.post("/users", (req, res) => {
    users.push(req.body);
    res.json(users);
})

app.delete("/users/:id", (req, res) => {

});

app.put("/users/:id", (req, res) => {

})

app.listen(3000)