'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            'orders', {
                order_id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false
                },
                item_id: {
                  type: Sequelize.INTEGER,
                  primaryKey: true,
                  autoIncrement: true,
                },
                user_id: {
                    type: Sequelize.INTEGER
                },
                order_date: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                total_item: {
                    type: Sequelize.INTEGER,
                },
                status: {
                    type: Sequelize.DataTypes.STRING,
                },
                created_at: {
                    type: Sequelize.DATE,
                    default: new Date()
                },
                updated_at: {
                    type: Sequelize.DATE,
                    default: new Date()
                },
                deleted_at: {
                    type: Sequelize.DATE
                },
            },
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('orders');
    }
};