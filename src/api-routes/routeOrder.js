const express = require('express');
const router = express.Router();
let productsCtrl = require('../controllers/order.js');

//lay tat ca
router.get('/', productsCtrl.getAll)
//lay theo Id
router.get('/:orderId', productsCtrl.getbyID)

// create
// router.post('/', productsCtrl.add)

module.exports = router;