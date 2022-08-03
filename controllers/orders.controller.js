const { Op } = require('sequelize')
const {Items, sequelize, Orders,} = require('../models')

const createItems = async(req, res, next) => {
    try {
    
        const {Items} = req.body

        const itemIds = Items.map(item => {
            return item.item_id
        })

        const existItems = await item.findAll({
            where: {
                id: {
                    [Op.in]: itemIds
                }
            },
            include: [
                {
                    model: Stocks,
                    as: 'stock'
                }
            ]
        })

        if (existitems.length !== items.length) {
            throw {
                code: 400,
                message: 'ada item yang tidak ditemukan'
            }
        }

        await sequelize.order(async ord => {
            const order = await Orders.create({
                user_id: req.user_id,
                order_date: new Date(),
                status: 'Lunas'
            }, {
                order: ord
            })

            await Promise.all(
                existItems.map(async item => {
                    const selectedPayload = items.find(val => val.item_id === item.id)
    
                    // deduct stok buku
                    await Stocks.update({
                        available_stock: item.stock.available_stock - selectedPayload.qty,
                        rent_stock: selectedPayload.qty
                    }, {
                        where: {
                            item_id: item.id
                        },
                        order: ord 
                    })
    
                    
                })
            )
        })


        return res.status(200).json({
            message: 'success order'
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    createOrder
}