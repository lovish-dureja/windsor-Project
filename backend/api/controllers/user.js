/*
 * User Controller
 * @description
 * The User controller is used for handling all the functions related to the user.
 */

var crypto = require('crypto');

const {
    errorResponse,
    successResponse,
} = require('../util/rest');
const Messages = require('../util/messages');
const httpCodes = require('../util/httpCodes');

const db = require('../../db/db');
const dbQueryObj = require('../../db/query');
const mongoDbObject = require("../../db/db");

// function for the create user
exports.sayHello = async function (req, res) {
    successResponse(res,'Hi', [])
};

exports.sayDBHello = async function (req, res) {
    await db.ExecuteQuery(dbQueryObj.users.all)
    successResponse(res, Messages.say('Hi'), [])
};

exports.fetchDataFromApi = async function (req, res) {
    console.log(mongoDbObject, '----object for the merting');
    successResponse(res, Messages.say('Hi'), [])
};