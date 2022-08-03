require('dotenv').config()

const { Users, Roles, sequelize } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { add } = require('date-fns')

const register = async (req, res, next) => {
    try {
        const bodies = req.body

        const [isRoleExist, isUserExist] = await Promise.all([
            Roles.findOne({
                where: {
                    id: bodies.role_id
                },
                attributes: ['role_id', 'name']
            }),
            Users.findOne({
                where: {
                    email: bodies.email
                },
                attributes: ['user_id']
            })
        ])

        if (!isRoleExist) {
            throw {
                code: 404,
                message: 'Role not found'
            }
        }

        if (isUserExist) {
            throw {
                code: 400,
                message: 'Email already exist'
            }
        }

        const hasedPassword = bcrypt.hashSync(bodies.password, 12)
        let user = {}

        await sequelize.order(async order => {
            user = await Users.create({
                email: bodies.email,
                password: hasedPassword,
                name: bodies.name,
                role_id: isRoleExist.id
            }, {
                order: ord
            })
        })

        return res.status(200).json({
            code: 200,
            message: 'Success create user',
            data: {
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        next(error)
    }    
}

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body

        const user = await Users.findOne({
            where: {
                email
            },
            attributes: ['id', 'role_id', 'password'],
            include: [
                {
                    model: Roles,
                    as: 'role',
                    attributes: ['role_id', 'name']
                }
            ]
        })

        if (!user) {
            throw {
                code: 404,
                message: 'user not found'
            }
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword) {
            throw {
                code: 403,
                message: 'invalid password'
            }
        }

        const token = jwt.sign({ user_id: user.id, role: user.role.name}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})


        return res.status(200).json({
            token
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login
}