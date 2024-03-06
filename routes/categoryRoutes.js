const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware.js");
const {
  createCategoryController,
  updateCategoryController,
} = require("../controllers/CategoryController.js");
const { updateMany } = require("../models/categoryModel.js");

const router = express.Router();

//routes

//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

module.exports = router;
