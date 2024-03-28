const Joi = require('joi')

schema = Joi.object({
    CompanyName : Joi.string().min(3),
    CarName : Joi.string().min(3),
})

module.exports = schema;