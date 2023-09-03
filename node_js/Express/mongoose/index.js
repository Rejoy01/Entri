const express = require("express");

const app = express();

const mongoose = require("mongoose");


// const bodyParser = require("body-parser")

const PORT  = 4000

app.use(express.urlencoded({ extended: true }))

mongoose.connect(`mongodb://127.0.0.1:27017/Notes_B4`,{useNewUrlParser:true},{useUnifiedTopology:true})
.then((data) => console.log(`Database connected with ${data.connection.host}`))
.catch((err) => console.log(err.message))

const postSchema = new mongoose.Schema({
    title:String,
    content:String
})

let Post = mongoose.model('Post',postSchema);

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.post('/',(req,res)=>{

    let newPost = new Post({
        title:req.body.title,
        content:req.body.content
    });
    newPost.save();

    console.log(req.body);
    res.send("Submitted")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})