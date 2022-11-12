const { Router } = require("express");
const allCategories = require("./controllers/getAllCategoriesController");
const allProducts = require("./controllers/allProducts");
const getProductList = require("./controllers/getProductListController");
const productId = require("./controllers/getProductId");
const router = Router();

router.get("/allCategories", allCategories);
router.get("allproducts", allProducts);
router.get("getProductId/:id", productId);
router.get("/getProductList/:search", getProductList);

module.exports = router;
