const express = require("express");
const authcontroller = require("../controllers/authcontroller.js");

// router object
const router = express.Router();

//routing for regiser
router.post("/register", authcontroller.registerControler);
router.post("/login", authcontroller.Loginrouter);

module.exports = router;
