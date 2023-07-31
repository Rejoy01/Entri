const express = require('express');
const app = express();
const PORT = 3000
const path  = require('path')
const session = require('express-session');

const cookieParser = require('cookie-parser');

// to get data from request body
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
// to get data from session

app.use(session({
    secret : "mysecret",
    name:"my site",
    resave:false,
    saveUninitialized:true
}))



const users = [
    {
        username:"tom",password:"123"
    },
    {
        username:"ben",password:"123"
    }
]
   


app.get('/',(req,res)=>{

    if(req.session.isAuth){
        res.redirect("/profile")
    }else{
        res.sendFile(path.join(__dirname,"/login.html"));
    }
    
})

app.post('/login',(req,res)=>{

    const {username,password} = req.body;

    const user = users.find((data)=>{
        return data.username == username && data.password == password})
    if (!user){
        res.redirect("/")
        console.log("invalid password");
    }else{
        req.session.userId = username
        req.session.isAuth = true;

        res.sendFile(path.join(__dirname,"/profile.html"));;
    }
   
})


app.get('/profile',(req,res)=>{

    if(!req.session.isAuth){
        res.redirect("/")
    }

    res.sendFile(path.join(__dirname,"/profile.html"));
})






app.listen(PORT,() => {
    console.log(`Server is running ${PORT}`);
});