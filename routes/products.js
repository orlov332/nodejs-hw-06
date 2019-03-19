import express from 'express';
import ProductRepository from '../controllers/product-repository';

const router = express.Router();
const repository = new ProductRepository();

router.param('id', (req, res, next, idStr) => {
    console.debug(`Finding product with id ${idStr}...`);
    req.productId = idStr;
    repository.findById(parseInt(idStr))
        .then((prod) => {
            req.product = prod;
            if (req.product === undefined) {
                req.status(404)
                    .json({message: `Product with id ${idStr} not found`});
                console.error(`Product with id ${idStr} not found`);
            }
            console.debug(req.product);
            next();
        });
});

router.get('/products', (req, res) => {
    repository.fetchAll()
        .then((prods) => res.status(200).json(prods));
});

router.post('/products', (req, res) => {
    repository.save(req.body)
        .then((prod) => res.status(200).json(prod));
});

router.get('/products/:id', (req, res) => {
    res.status(200).json(req.product);
});

router.get('/products/:id/reviews', (req, res) => {
    res.status(200).json(req.product.reviews);
});


export default router;