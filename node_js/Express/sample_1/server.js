const express = require('express');
const app = express();
const router = express.Router();


const printConsole =(req,res,next)=>{
    console.log("app use middleware");
    next();
}

router.get('/rootRouter', printConsole,(req, res) =>{ //--route 
    res.send("root Router");
})

//Asyc errors handled by error middleware when error occure app.use(eroohnadkers definded below eill executed)
app.get('/user/id',async(req,res,next)=>{
   try {
     const user = await getUserById(req.params.id);
   } catch (error) {
        next(error);
   }
})

//Asyc errors handled by error middleware when error occure app.use(eroohnadkers definded below eill executed)
app.get('/asyncError',printConsole,(req,res,next)=>{
    fs.readFile('\file-does-not-exist',(err, data)=>{
        if(err){
            next(err);
        }else{
            res.send(data)
        }

    })
   
})

//error middleware 
app.use((err,req,res,next)=>{
    console.log(err.message);
    //console.log(err.stack); defines path
    res.status(500).send("Something went wrong")
})

app.use('/',router); //intializing router middleware

//available for all routes
// app.use(printConsole);
// Appplication level middleware - app.get(), app.use()


//error middleware 


// oru specific routeil mathrm ee method use chayn vendi second arg ayitt pass chytha mathy
app.get('/', printConsole,(req, res,next) => {
   console.log("root rote print");
    next()
})

app.get('/error',(req,res)=>{
    throw new Error("Sync  error are handled by express itself app continue running");
})

app.get('/', (req, res) => {
    res.send("Root route")
})

app.get("/profile",(req, res) => {

    res.send("Profile")

})

app.get("/contact", (req, res) => {
    res.send("Contact")
})


app.listen(4000,()=>{
    console.log("Server started running on port 4000");
});