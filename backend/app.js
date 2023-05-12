const express = require('express');

const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
dotenv.config();
//midddleware
app.use(express.json());

app.use("/user", userRouter);

mongoose.connect("mongodb+srv://piyushbachchan2:G67ovdizjbLTClsU@movie-system.xzdybs6.mongodb.net/Movies?retryWrites=true&w=majority")

app.listen(3500, () => {

    console.log(`Connected to localhost port ${3500}`);
})
