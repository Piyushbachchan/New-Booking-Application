const express = require('express');
const { getAllUser, signup } = require('../contollers/user-controller');

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.post("/signup", signup);

module.exports= userRouter;