const express = require('express');
const { addAdmin, adminLogin } = require('../contollers/admin-controller');

const adminRouter = express.Router();

adminRouter.post('/signup',addAdmin);
adminRouter.post('/login', adminLogin);
module.exports= adminRouter;