import db from '../models';

export default class ProductRepository {

    findById(id) {
        return db.Product.findByPk(id);
    }

    fetchAll() {
        return db.Product.findAll();
    }

    save(product) {
        return db.Product.build(product).save();
    }
}