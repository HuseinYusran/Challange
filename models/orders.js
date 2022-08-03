const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

class Orders extends Sequelize.Model {}

Orders.init({
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
}, {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'orders'
})

module.exports = Orders