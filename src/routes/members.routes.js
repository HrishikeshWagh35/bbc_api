const express = require('express');
const controller = require('../controllers/members.controller');

const router = express.Router();

router.post('/', controller.create);

module.exports = router;