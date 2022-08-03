const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

class Users extends Sequelize.Model {}

Users.init({
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    name: {
        type: Sequelize.DataTypes.STRING
    },
    address: {
        type: Sequelize.DataTypes.TEXT
    },
    password: {
        type: Sequelize.DataTypes.STRING
    },
    phone: {
        type: Sequelize.DataTypes.STRING
    },
    email: {
        type: Sequelize.DataTypes.STRING
    },
}, {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'users'
})

module.exports = Users