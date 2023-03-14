const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('../controller/Users-controller.js');
const login = require('../middleware/login');
const router = express();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', usersController.show);
router.post('/', login.required, usersController.created);
router.put('/', login.required, usersController.update);
router.delete('/', login.required, usersController.delete);
router.post('/login', usersController.login);

module.exports = router;