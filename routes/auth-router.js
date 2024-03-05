const express = require("express");
const authcontroller = require("../controllers/authcontroller.js");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware.js");

// router object
const router = express.Router();

//routing for regiser
router.post("/register", authcontroller.registerControler);

//LOGIN || POST
router.post("/login", authcontroller.Loginrouter);

//forgot passsword
router.post("/forgot-password", authcontroller.forgotPasswordController);
//test routes

router.get("/test", requireSignIn, isAdmin, authcontroller.testController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
module.exports = router;
