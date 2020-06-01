const {productService} = require('../../service')

module.exports = {
    getAllProducts: async (req, res) => {
        const products = await productService.getAllProducts();

        res.json(products)
    },

    getById: async (req, res) => {
        res.json(req.product)
    },

    deleteProduct: async (req, res) => {
        const {productId} = req.params;

        await productService.deleteByParams({id: productId});

        res.sendStatus(204);
    },

    // createUser: async (req, res) => {
    //     try {
    //         const {email, name, password} = req.body;
    //         await userService.createUser(email, name, password);
    //     } catch (e) {
    //         res.json(e)
    //     }
    //
    //     res.end()
    //     // res.redirect('/products')
    // }
};
