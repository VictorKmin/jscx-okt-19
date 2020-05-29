const {productService} = require('../../service')

module.exports = {
    getAllProducts: async (req, res) => {
        let products = await productService.getAllProducts();

        res.json(products)
    },

    getProductById: async (req, res) => {
        const {productId} = req.params;
        let product = await productService.getProductById(id);
        res.json(product)
    },

    deleteUser: (req, res) => {
        const params = req.params
        const query = req.query;

        res.json({params, query})
    },

    createUser: async (req, res) => {
        try {
            const {email, name, password} = req.body;
            await userService.createUser(email, name, password) ;
        } catch (e) {
            res.json(e)
        }

        res.end()
        // res.redirect('/products')
    }
};
