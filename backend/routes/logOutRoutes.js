const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.clearCookie('token', {path: '/'})
    res.status(200).json("LOGGED OUT SUCCESSFULLY")
})

module.exports = router;