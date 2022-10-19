const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const accountRouter = require('../app/api/account');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

app.use('/account', accountRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error',
    message: err.message,
  });
});

module.exports = app;
