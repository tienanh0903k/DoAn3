const express = require('express');
const router = express.Router();
const cateController = require('../controller/categoriesController');
const categoryController = require('../controller/adminController/categoriesController');
const authAdmin = require('../middleware/AuthAdmin');
router.get('/:id', authAdmin.verifyAuthAdmin, cateController.getCateById);
router.get('/', categoryController.getAll);

module.exports = router;