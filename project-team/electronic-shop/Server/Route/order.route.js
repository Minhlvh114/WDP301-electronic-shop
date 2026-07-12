const express = require('express');
const router = express.Router();

const orderController = require('../Controller/order.controller')

//\\create user without ref
router.post('/create/user', orderController.createOrder);
router.get('/read/user/:id', orderController.getOrderById);
router.put('/update/user/:id', orderController.updateOrderById);
router.delete('/delete/user/:id', orderController.deleteOrderById);
// router.post('/', productDetail.addProductDetail);
// router.get('/:id', productDetail.getProductDetailById);
// // router.get('/product/:id', productDetail.getProductDetailByProductId);