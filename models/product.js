'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        brand: DataTypes.STRING,
        price: DataTypes.FLOAT
    }, {});
    Product.associate = function (models) {
        // associations can be defined here
    };
    return Product;
};