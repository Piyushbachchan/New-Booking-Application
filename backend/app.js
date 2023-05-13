const express = require('express');

const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
dotenv.config();
//midddleware
app.use(express.json());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);

mongoose.connect("mongodb+srv://piyushbachchan2:G67ovdizjbLTClsU@movie-system.xzdybs6.mongodb.net/Movies?retryWrites=true&w=majority")

app.listen(3500, () => {

    console.log(`Connected to localhost port ${3500}`);
})
