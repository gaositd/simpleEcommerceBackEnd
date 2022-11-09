const {Router} = require('express');
const allCategories = require('./controllers/getAllCategories');
const router = Router();

router.get('/allCategories', allCategories);

module.exports = router;