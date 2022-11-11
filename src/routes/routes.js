const {Router} = require('express');
const allCategories = require('./controllers/getAllCategoriesController');
const router = Router();

router.get('/allCategories', allCategories);

module.exports = router;