const routeProduct = require('./routeProduct');
const routeSize = require('./routeSize');
const routeCategory = require('./routeCategory');
const routeMember = require('./routeAdmin');
const routeAdmin = require('./routeMember');


const { Router } = require('express');

module.exports = function(app) {
    // todoList Routes
    app.use('/product', routeProduct);
    app.use('/size', routeSize);
    app.use('/category', routeCategory);
    app.use('/member', routeMember);
    app.use('/admin', routeAdmin);
  

};
  //   app.route('/products/:productId')
  //     .get(productsCtrl.detail)
  //     .put(productsCtrl.update)
  //     .delete(productsCtrl.delete);
  //     let sizeCtrl = require('../controllers/size.js');

  //   app.route('/size')
  //     .get(sizeCtrl.get)
  //     .post(sizeCtrl.store);
  
  //   app.route('/sizes/:sizeId')
  //     .get(sizeCtrl.detail)
  //     .put(sizeCtrl.update)
  //     .delete(sizeCtrl.delete);
  // };