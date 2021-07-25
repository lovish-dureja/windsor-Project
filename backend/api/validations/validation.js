const Joi = require('@hapi/joi');   

const registerValidation = (data) => {
    const UserValidationSchema = Joi.object({
        firstName: Joi.string().min(4).required(),
        lastName:Joi.string().min(4).required(),
        email: Joi.string().min(4).required().email(),
        password : Joi.string().min(4).required(),
    })
    return UserValidationSchema.validate(data);
}

const loginValidation = (data) => {
    const UserLoginValidationSchema = Joi.object({
        email: Joi.string().min(4).required().email(),
        password : Joi.string().min(4).required(),
    })
    return UserLoginValidationSchema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
