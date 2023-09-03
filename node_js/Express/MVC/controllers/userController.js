const User = require("../models/userModels")

exports.userRegister = async (req,res)=>{

    // let user = {
    //     username : req.body.username,
    //     password : req.body.password
    // }

    try {
        const user = await User.create(req.body)
        if (user) {
            res.status(201).json({
                success:"True",
                Message:"SignUp form submitted",
                user
            })
        }
    } catch (error) {
        res.status(201).json({
            success:"false",
            Message:"SignUp form falied "+ error.message,
        })
    }
    }


exports.loginUser = (req,res)=>{

    res.status(200).send({
        success: "true" ,
        message :"Login Successfull"
    })

}

// exports.userRegister = (req,res)=>{

//     let user = {
//         username : req.body.username,
//         password : req.body.password
//     }
    

//     res.status(201).send({
//         success:"True",
//         Message:"SignUp form submitted",
//         user
//     })
// }

// exports.loginUser = (req,res)=>{

//     res.status(200).send({
//         success: "true" ,
//         message :"Login Successfull"
//     })

// }