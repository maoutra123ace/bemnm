const express = require('express');
const router = express.Router();
let productsCtrl = require('../controllers/admin.js');

     //lay tat ca
router.get('/' , productsCtrl.getAll )
    //lay theo Id
router.get('/:adminId',
productsCtrl.getbyID )


module.exports = router;