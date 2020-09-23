const express = require('express');
const router = express.Router();

    router.get('/', (request, response) => {
        response.send('Server working');
    });

    module.exports = router;