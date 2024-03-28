const Joi = require('joi')

const schema = Joi.object({
    CompanyName : Joi.string().min(3).required(),
    CarName : Joi.string().min(3).required(),
    Engine : Joi.string().min(3),
    GearBox : Joi.string(),
    PerformanceCar : Joi.string(),
    DriveWheel : Joi.string(),
    TopSpeed : Joi.string().min(3).required(),
    Price : Joi.string().min(5).required(),
    Acceleration : Joi.string(),
    door : Joi.number()
})

module.exports = schema;