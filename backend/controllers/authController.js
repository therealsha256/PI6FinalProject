const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const authUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(404).json({ message: "Please fill all the fields" });
  }else{
  User.findOne({ username }).then((user) => {
    if (!user) return res.status(404).json("User Isn't Registered");
    const isMatch = bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(404).json({msg: "Invalid Credentials"})
            jwt.sign(
              {
                  id: user.id,
                  username: user.username
              },
              process.env.jwtSecret,
              { expiresIn: 3600 }, 
              (err, token) => {
                  if(err) throw err;
                  res.cookie('jwt', token),
                  res.json({
                      user: {
                          id: user.id,
                          username: user.username,
                          fullname: user.fullName,
                      }
                  })

              }
          )
  });
}
};

    

module.exports = authUser;

