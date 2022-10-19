const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const accountRouter = require('../app/api/account');

const app = express();

app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/account', accountRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error',
    message: err.message,
  });
});

module.exports = app;
