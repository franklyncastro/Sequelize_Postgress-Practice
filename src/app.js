const express = require("express");
const app = express();
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes/Users.routes')

//Middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())




//Routes
app.use(router)

module.exports = app;
