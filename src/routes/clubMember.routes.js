const express = require('express');
const controller = require('../controllers/clubMember.controller');

const router = express.Router();

router.post('/', controller.create);

module.exports = router;