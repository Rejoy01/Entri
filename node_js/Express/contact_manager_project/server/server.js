const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const errorHandler = require('./middleware/errorHandler')
const dotenv = require('dotenv').config()


const port = process.env.PORT || 3000;

app.use(express.json());



app.use("/api/contact/",require("../server/routes/contactsRoutes"))
app.use(errorHandler);
console.log(process.env.PORT);
app.listen(port, () => {
    console.log(`server listening on port ${port}` );
})