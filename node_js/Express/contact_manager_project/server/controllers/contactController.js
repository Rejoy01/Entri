//@desc get all contact
//@route Get /api/contact
//@acess public


const getContacts = (req, res) => {
    res.status(200).json({
        message:"Get all contacts"
    })
}

const createContact = (req, res) => {
    console.log("the request body is ", req.body);
    const {name, email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(404);
        throw new Error("all fields are required")
    }
    res.status(201).json({
        message:"create contacts"
    })
}
const updateContact = (req, res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`});

}
const deleteContact = (req, res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`});
}
const getContact = (req, res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
}
module.exports = {getContacts ,getContact,createContact,updateContact,deleteContact};