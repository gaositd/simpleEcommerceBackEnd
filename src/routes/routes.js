const {Router} = require('express');
const allCategories = require('./controllers/getAllCategoriesController');
const getProductList = require('./controllers/getProductListController');
const router = Router();

router.get('/allCategories', allCategories);
router.get('/getProductList/:search',getProductList);

module.exports = router;