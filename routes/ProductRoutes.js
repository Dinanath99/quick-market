const express = require("express");
const {
  createProductController,
} = require("../controllers/ProductController.js");

const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware.js");
const router = express.Router();

// creating product router
//to create product admin shold be logged in
router.post("/create-product", requireSignIn, isAdmin, createProductController);

module.exports = router;
