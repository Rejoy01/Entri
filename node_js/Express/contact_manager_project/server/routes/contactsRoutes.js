const express   = require('express');
const router = express.Router();

const {updateContact,getContacts , createContact,getContact,deleteContact} = require("../controllers/contactController")

router.route("/").get(getContacts).post(createContact);

router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);




module.exports = router;