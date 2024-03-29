const express = require("express");
const {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductcontroller,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController,
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
router.post("/product-filters", productFilterController);

//product count route
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);
//search product
router.get("/search/:keyword", searchProductController);

// similar product
router.get("/related-product/:pid/:cid", relatedProductcontroller);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments route
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, braintreePaymentController);

module.exports = router;
