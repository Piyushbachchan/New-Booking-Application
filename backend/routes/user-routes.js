const express = require('express');
const { getAllUser } = require('../contollers/user-controller');

const userRouter = express.Router();

userRouter.get("/", getAllUser);

export default userRouter;