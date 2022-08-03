const Joi = require("joi");

const createItemSchema = Joi.object({
    item_id: Joi.string().required(),
    item_name: Joi.string().required(),
    item_price: Joi.string().required(),
    stock: Joi.number().required(),
})