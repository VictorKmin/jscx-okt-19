const Joi = require('joi')

module.exports = Joi.object().keys({
    name: Joi.string().trim().alphanum().min(2).max(60).optional().allow('X Æ A-12'),
    age: Joi.number().integer().min(1).max(120).optional()
})
