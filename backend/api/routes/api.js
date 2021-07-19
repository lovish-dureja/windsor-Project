/*
 * Api.js
 * @description
 * This file is used for storing all the routes related to the project.
 */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const User = require('../models/UserModels');


router.get('/ping', userController.sayHello)
router.get('/fetchDataFromApi', userController.fetchDataFromApi);

router.post('/register', userController.register);
router.post('/login', userController.login)
module.exports = router;