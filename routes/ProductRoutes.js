const express = require("express");
const {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFilterController,
} = require("../controllers/ProductController.js");

const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware.js");

const formidable = require("express-formidable");
const router = express.Router();

// creating product router
//to create product admin shold be logged in
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
//get products
router.get("/get-product", getProductController);
router.get("/get-product/:slug", getSingleProductController);

//get photo route
router.get("/product-photo/:pid", productPhotoController);

//delete product route
router.delete("/product-delete/:pid", deleteProductController);
//filter product
router.get("/product-filters", productFilterController);
module.exports = router;
