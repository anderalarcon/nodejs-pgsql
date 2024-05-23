const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/elementos');

router.get('/products', ProductController.getProducts);
router.post('/products', ProductController.createProduct);

module.exports = router;