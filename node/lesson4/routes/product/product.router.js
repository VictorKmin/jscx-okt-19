const {Router} = require('express');

const productRouter = Router();


productRouter.post('/', (req, res) => {
    console.log(req.body);
    res.end('POST products')
});

productRouter.get('/', (req, res) => {
    res.end('GTE products')
})

productRouter.put('/', (req, res) => {
    res.end('PUT products')
});

productRouter.delete('/:name', (req, res) => {
    const params = req.params
    const query = req.query;

    res.json({params, query})
})


module.exports = productRouter;
