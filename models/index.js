
const Users = require('./users');
const sequelize = require('./sequelize');
const Items = require('./items');
const Orders = require('./orders')
const Roles = require('./roles')
const Categories = require('./categories')


Users.hasMany(Items, {
    as: 'item',
    foreignKey: 'item_id'
});
Items.belongsTo(Users, {
    as: 'user',
    foreignKey: 'user_id'
});
Orders.belongsTo(Users, {
    as: 'user',
    foreignKey: 'user_id',
});
Roles.hasMany(Users, {
    as: 'user',
    foreignKey: 'role_id'
});
Users.belongsTo(Roles, {
    as: 'role',
    foreignKey: 'role_id'
})
Categories.hasMany(Items, {
    as: 'item',
    foreignKey: 'category_id'
});

Items.belongsTo(Categories, {
    as: 'category',
    foreignKey: 'category_id'
});

module.exports = {
    sequelize,
    Users,
    Orders,
    Items,
    Roles,
    Categories,
};