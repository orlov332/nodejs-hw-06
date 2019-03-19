'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products',
            [
                {
                    'id': 1,
                    'name': 'Supreme T-Shirt',
                    'brand': 'Supreme',
                    'price': 99.99,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    'id': 2,
                    'name': 'NoName T-Shirt',
                    'brand': 'NoName',
                    'price': 9.99,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('People', null, {});
    }
};
