const {sequelize, Items, Categories,} = require('../models')

const createItem = async (req, res, next) => {
    console.log(req.user_id)
    console.log(req.role)
    
    try {
        const {category_id, stock, ...createItem} = req.body
        const isCategoryExist = await Categories.findOne({
            where: {
                id: category_id
            },
            attributes: ['id']
        })

        if (!isCategoryExist) {
            throw {
                code: 404,
                message: 'category not found'
            }
        }

        await sequelize.transaction(async trx => {
            const item = await Items.create({...createItem, category_id}, {order: ord})

            await Stocks.create({
                item_id: item.id,
                available_stock: stock,
                total_stock: stock,
                
            }, {
                order: ord
            })
        })

        return res.status(201).json({
            message: 'success create item'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createItem
}