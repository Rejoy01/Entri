const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// const PORT = 4000;
const path = require('path');
dotenv.config({path: path.join(__dirname, '/config/config.env')});

app.use(bodyParser.urlencoded({ extended: true }));


app.post("/",(req, res) => {
    console.log(req.body);

    res.send("signup successfully")
})

// to access this file we need to just call localhost 5000
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/register.html');
})

app.listen(process.env.PORT,() => {
    console.log(`port connected on ${process.env.PORT}`);
})