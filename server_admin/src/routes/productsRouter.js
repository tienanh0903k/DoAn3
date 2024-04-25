const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/', productController.getProduct);
router.post('/create', productController.createProduct);
router.get('/gethome', productController.getInfoHome);
router.get('/getById/:id', productController.getProductById);

module.exports = router;