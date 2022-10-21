const express = require('express');
const router = express.Router();
let productsCtrl = require('../controllers/member.js');

     //lay tat ca
router.get('/' , productsCtrl.getAll )
    //lay theo Id
router.get('/:memberId',
productsCtrl.getbyID )


module.exports = router;