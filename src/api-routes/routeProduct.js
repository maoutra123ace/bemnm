const express = require('express');
const router = express.Router();
let productsCtrl = require('../controllers/product.js');

//lay tat ca
router.get('/', productsCtrl.getAll)

//lay theo Id
router.get('/:id', productsCtrl.getbyID)

// them san pham
router.post('/', productsCtrl.add)

// xoa san pham
router.delete('/:id', productsCtrl.delete)

// cap nhap
router.put('/:id', productsCtrl.update)


module.exports = router;