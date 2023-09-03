const express = require("express");

const router = express.Router();

const {userRegister,loginUser} = require("../controllers/userController")

router.post("/register",userRegister);

router.get("/login",loginUser);

module.exports = router;