const { createItem } = require('../controllers/items.controller')
const { authorization } = require('../middlewares/authorization.middleware')

const validation = require('../middlewares/validation.middleware')

const createItemSchema = require('../validation/create.item.schema')

const router = require('express').Router()

router.post('', authorization('Admin'), validation(createItemSchema), createItem)

module.exports = router