const express = require('express');
const { add, update } = require('./controller');
const router = express.Router();

/**
 * @method GET
 * @description Check the status of server is live or not
 */
router.get('/status', (req, res) => {
    res.send("Server is live");
})

/**
 * @method POST
 * @description Create a new data in the Note database with title and content.
 */
router.post('/add', add);
router.post('/update/:id', update);

module.exports = router;