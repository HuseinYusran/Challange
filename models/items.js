const { Model, DataTypes } = require("sequelize")
const { Items } = require(".")
const connection = require("./sequelize")

class Items extends Model {}

Items.init(
  {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  },
  {
    sequelize: connection,
    timestamp: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "items",
  }
)

module.exports = Items