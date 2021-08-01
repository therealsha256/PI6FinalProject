const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecret = process.env.jwtSecret

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    if(!token) return res.status(401).json({ msg: "No Token, Authorization Failed" })

    try {
        const decoded = json.verify(token, jwtSecret)
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;