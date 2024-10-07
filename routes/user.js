const Joi = require('joi');
const userController = require('../controllers/user');

module.exports = [
    {
        method: 'POST',
        path: '/users',
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string().required(),
                    email: Joi.string().email().required(),
                    password: Joi.string().min(8).required()
                }),
                failAction: (request, h, error) => {
                    return h.response({
                        status: 400,
                        message: error.details[0].message
                    }).takeover();
                }
            },
        },
        handler: userController.createUser,
    },
    {
        method: 'POST',
        path: '/login',
        options: {
            validate: {
                payload: Joi.object({
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                }),
                failAction: (request, h, error) => {
                    return h.response({
                        status: 400,
                        message: error.details[0].message
                    }).takeover();
                }
            },
        },
        handler: userController.userLogin,
    },
    {
        method: 'GET',
        path: '/users',
        handler: userController.getAllUsers
    },
    {
        method: 'GET',
        path: '/users/{id}',
        handler: userController.getUserById,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().hex().length(24).required()
                }),
                failAction: (request, h, err) => {
                    return h.response({
                        status: 400,
                        message: err.details[0].message
                    }).takeover();
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: '/users/{id}',
        handler: userController.deleteUser,
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string().hex().length(24).required()
                }),
                failAction: (request, h, err) => {
                    return h.response({
                        status: 400,
                        message: err.details[0].message
                    }).takeover();
                }
            }
        }
    }
];
