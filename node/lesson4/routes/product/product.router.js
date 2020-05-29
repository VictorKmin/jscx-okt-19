const {Router} = require('express');

const {productController} = require('../../controllers')
const {productMiddleware} = require('../../middlewares')

const productRouter = Router();

productRouter.get('/', productController.getAllProducts);

productRouter.use('/:productId', productMiddleware.checkIsProductsExists);
productRouter.get('/:productId', productController.getById)
productRouter.delete('/:productId', productController.deleteProduct)


module.exports = productRouter;
