const express = require("express");
const dotenv = require("dotenv");
const morgan=require('morgan');
const app =new express;
const cors=require('cors')

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());


const food = require("./routes/food");
app.use("/api/food",food);

const user = require("./routes/user");
app.use("/api/user",user);

const medicine =require("./routes/medicine");
app.use("/api/medicine",medicine);

const dress=require("./routes/dress")
app.use("/api/dress",dress);

const stationary=require("./routes/stationary")
app.use("/api/stationary",stationary)

const contact=require("./routes/contact")
app.use('/',require('./routes/contact'));

require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection');

app.listen(PORT,()=>{console.log(`Server is initiated on PORT ${PORT}`);})

