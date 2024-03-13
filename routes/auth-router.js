const express = require("express");
const authcontroller = require("../controllers/authcontroller.js");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware.js");

// router object
const router = express.Router();

//routing for register
router.post("/register", authcontroller.registerControler);

// LOGIN || POST
router.post("/login", authcontroller.Loginrouter);

// forgot password
router.post("/forgot-password", authcontroller.forgotPasswordController);

// test routes
router.get("/test", requireSignIn, isAdmin, authcontroller.testController);

// protected user route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

// protected admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});

//update profile
router.put("/profile", requireSignIn, authcontroller.updateProfileController);

//orderse;
//orderse
router.get("/orders", requireSignIn, authcontroller.getOrdersController);

//all orders
router.get(
  "/all-orders",
  requireSignIn,
  isAdmin,
  authcontroller.getAllOrdersController
);
//order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  authcontroller.orderStatusController
);
module.exports = router;
