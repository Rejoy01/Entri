const cookieParser = require('cookie-parser');
const express = require('express');
const dotenv = require('dotenv').config({path:"./config/.env"});
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const PORT = process.env.PORT || 3000;


const users = [
    {username:"tom",password:"123"},
    {username:"ben",password:"101"}
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req,res)=>{

    const {token} = req.cookies
    if(token){
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,result)=>{
            // res.sendFile(__dirname + '/login.html');
            res.redirect('/profile')
        })
    }
    res.sendFile(__dirname + '/login.html');
})




app.post('/login', (req,res)=>{
    

    // console.log(req.body);
    const {username,password} = req.body;
    var user =users.find((c)=> c.username === username && c.password === password)
    console.log(user);
    if(user){
        const data = {
            username,
            date:Date(),
        }

        const token = jwt.sign(data,process.env.JWT_SECRET_KEY,{expiresIn:"10min"});

        

       

        res.cookie("token",token).redirect("/profile")
        
        
    }else{
        res.send("Invalid username or password")
       
    }
    
})

app.get('/profile',(req,res)=>{
    const {token} = req.cookies

    console.log(token);

    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,result)=>{

            if(err){
                res.redirect("/");
            }else{
                res.sendFile(__dirname+"/profile.html");
            }


    });

//     jwt.verify(token,process.env.JWT_SECRET_KEY,(err,result)=>{
//         if(err){
//             res.send({
//                 login:false,
//                 message : err.message
//             }).redirect("/login")
//         }else{
//             res.json({
//                 login: true,
//                 result
//         })
//     }
// })    
    // res.sendFile(__dirname+'/profile.html');
   
})


app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})