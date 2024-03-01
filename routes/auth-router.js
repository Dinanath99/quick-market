const express = require("express");
const authcontroller = require("../controllers/authcontroller.js");
const requireSignIn = require("../middlewares/authMiddleware.js");

// router object
const router = express.Router();

//routing for regiser
router.post("/register", authcontroller.registerControler);

//LOGIN || POST
router.post("/login", authcontroller.Loginrouter);

//test routes

router.get("/test", requireSignIn, authcontroller.testController);
module.exports = router;
