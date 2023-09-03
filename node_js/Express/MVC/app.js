const express = require("express")

const app = express();

const {userRegister} = require("./controllers/userController");

const {loginUser} = require("./controllers/userController")

const userRoutes = require("./routes/userRoutes")

app.use(express.urlencoded({extended:true}))

app.use("/api/v1",userRoutes)

// app.post("/api/v1/register",userRegister)

module.exports = app;