const User = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const createUser = async (req, res) => {
  const { username, fullname, password } = req.body;
  if (!username || !fullname || !password) {
    res.status(404).json({ message: "Please complete all fields" });
  }
  User.findOne({ username }).then((user) => {
    if (user) return res.status(404).json(" User Already Registered ");
  });
    const newUser = await new User({
    username: username,
    fullName: fullname,
    password: password,
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
            .then(user => {

                jwt.sign(
                    {
                        id: user.id,
                        username: user.username
                    },
                    process.env.jwtSecret,
                    { expiresIn: 3600}, 
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                username: user.username,
                                fullname: user.fullName
                            }
                        })
                    }
                )
            })
        })
    })
};

    

module.exports = createUser;
