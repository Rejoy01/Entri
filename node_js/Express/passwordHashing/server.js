const express = require('express');

const app = express();

const dotenv = require("dotenv");

const bodyParser = require("body-parser");

const bcrypt = require("bcrypt");

dotenv.config({ path: "./config/.env" })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//how many times we want encrypt
const saltround = 10;

const users = [                   //password
    {username: "tom", password: "$2b$10$TXMmoJbxk6j7m/tE2a8iiOnpqB1T/oclVVqYlMFoER7uK7o80go/u"},
                                    //123
    {username: "ben", password: "$2b$10$lLvLY8KimChW6Fhua1JbD.RPKZudQdoQorhiD9MK6n2OIUI6fqk0S"}
]


app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html")
})

app.post("/login", (req, res) => {
    const {username, password} = req.body

    const user = users.find((user) => user.username === username)
    if(!user){
        res.sendFile("Invalid User");
    }else{
        //compare user entered password and encrypted password from database
        bcrypt.compare(password, user.password,(err, result) => {
            console.log(result);
            ///if password is coorect it return true
            if(result){
                res.redirect("/profile")
                
            }else{
                res.send("Ivalid Password")
            }
        })
    }

    console.log("password", password);
})

app.post("/signup", (req, res) => {
    const { username, password } = req.body

    // For hashing passwords pass , saltround, callback fn(error, password)
    bcrypt.hash(password,saltround,(err,hash) => {
        if(err){
            res.send(err.message);
        }else{
            console.log(hash);
            res.redirect("/")
        }
    });


    console.log("userName :" + username, "password :" + password);
})

app.get("/profile", (req, res) => {
    res.sendFile(__dirname+"/profile.html")

})



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})