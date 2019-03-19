'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users',
            [
                {
                    name: 'Ivan',
                    login: 'ivan@example.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'John',
                    login: 'john@example.com',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('People', null, {});
    }
};
