/*
 * User Controller
 * @description
 * The User controller is used for handling all the functions related to the user.
 */

var crypto = require('crypto');
const User = require('../models/UserModels');

const {
    errorResponse,
    successResponse,
} = require('../util/rest');
const Messages = require('../util/messages');
const httpCodes = require('../util/httpCodes');
const jwt = require('jsonwebtoken');
const db = require('../../db/db');
const dbQueryObj = require('../../db/query');
const mongoDbObject = require("../../db/db");
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../validations/validation');
// function for the create user
exports.sayHello = async function (req, res) {
    successResponse(res,'Hi', [])
};

exports.sayDBHello = async function (req, res) {
    await db.ExecuteQuery(dbQueryObj.users.all)
    successResponse(res, Messages.say('Hi'), [])
};

exports.fetchDataFromApi = async function (req, res) {
    successResponse(res, Messages.say('Hi'), [])
};

exports.register = async function (req, res) {
    try{
        // api validations
        const { error } = registerValidation(req.body)
        if(error){
            return errorResponse(res, httpCodes.badReq,error.details[0].message);
        }

        // checking if the user already existed in the database
        const emailExist = await User.findOne({email:req.body.email}) 
        if(emailExist){
            return errorResponse(res, httpCodes.badReq,Messages.emailAlreadyExist);
        }

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword  = await bcrypt.hash(req.body.password, salt);

        // create a new user
        const user = new User({
            firstName: req.body.firstName,
            lastName : req.body.lastName,
            email: req.body.email,
            password: hashedPassword
        })
        const savedUser = await user.save();
        successResponse(res, Messages.say('User Saved'), savedUser);
    }catch(err){
        console.log(err)
        errorResponse(res, httpCodes.serverError,Messages.systemError);
    }
}

// api for the login 
exports.login = async function(req, res) {
    try{
        // api va;idations
        const { error } = loginValidation(req.body)
        if(error){
            return errorResponse(res, httpCodes.badReq,error.details[0].message);
        }

        // checking if the user already existed in the database
        const user = await User.findOne({email:req.body.email}) 
        if(!user){
            return errorResponse(res, httpCodes.badReq,Messages.emailNotExist);
        }

        //Password is correct or not
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return errorResponse(res, httpCodes.badReq,Messages.emailNotExist);
        }

        // create and assign a token
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
        res.header('Authorization', token);
        successResponse(res,Messages.success, token);
    }catch(error){
        console.log(error) 
        errorResponse(res, httpCodes.serverError,Messages.systemError);
    }
}