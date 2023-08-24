const express = require('express');
const validateLoginInfo = require('../middlewares/validateLoginInfo');
const login = require('../controllers/userControllers.js/login');


const router = express.Router();

router.post('/login', validateLoginInfo, login)

module.exports = router;
