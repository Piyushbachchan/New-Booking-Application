const express = require('express');
const { addAdmin } = require('../contollers/admin-controller');

const adminRouter = express.Router();

adminRouter.post('/signup',addAdmin);
module.exports= adminRouter;