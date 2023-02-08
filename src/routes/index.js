const express = require('express');
const clubsRoute = require('./clubs.routes');

const router = express.Router();

router.get('/status', (req, res) => {
    res.status(200).json({
        data: {},
        meta: {
            message: 'Better Book Club is Live',
            flag: "SUCESS",
            statusCode: 200
        }
    })
})

router.use('/clubs', clubsRoute);

module.exports = router;