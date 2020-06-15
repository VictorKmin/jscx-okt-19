const Joi = require('joi')

const {regexpEnum} = require('../../constants')

module.exports = Joi.object().keys({
    name: Joi.string().trim().alphanum().min(2).max(60).required().allow('X Æ A-12'),
    email: Joi.string().regex(regexpEnum.EMAIL).required(),
    password: Joi.string().trim().min(8).required()
})
