const { Router } = require('express');
const AccountTable = require('../account/table');

const router = new Router();

router.post('/signup', (req, res, next) => {
  const { username, password } = req.body;

  AccountTable.storeAccount({ username, password })
    .then(() => res.json({ message: 'Success!' }))
    .catch((error) => next(error));
});

module.exports = router;
