const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const cors = require('cors');

/*CORS*/
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
  allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));


app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Import Routes
const productRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');
const usersRouter = require('./routes/users');

//Use Routes
app.use('/api/products', productRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/users', usersRouter);


module.exports = app;
