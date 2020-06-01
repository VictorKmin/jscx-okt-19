const db = require('../dataBase').getInstance();
const {modelNamesEnum: {PRODUCT}} = require('../constants')

module.exports = {
    getAllProducts: () => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.findAll({})
    },

    getProductById: (id) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.findByPk(id)
    },

    deleteByParams: (params) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.destroy({
            where: params
        })
    },

    createProduct: (product) => {
        const ProductModel = db.getModel(PRODUCT);

        return ProductModel.create(product);
    }
};
