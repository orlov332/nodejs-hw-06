'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        price: DataTypes.FLOAT
    }, {});
    Product.associate = function (models) {
        // associations can be defined here
    };
    return Product;
};