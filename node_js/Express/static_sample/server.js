const express = require('express');
const app = express();

const path = require('path');

const PORT = 4000;

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public\\images")));

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, ()=>{
    console.log("Server listening on port");
})