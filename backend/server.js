const express = require('express');
require('dotenv').config()
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogsRoutes')
const signUpRoutes = require('./routes/signUpRoutes')
const logInRoutes = require('./routes/logInRoutes')
const cookieParser = require('cookie-parser')
var cors = require('cors')
const logOutRoutes = require('./routes/logOutRoutes')

connectDB()
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser())
app.use('/api/blogs', blogRoutes);
app.use('/api/register', signUpRoutes)
app.use('/api/login', logInRoutes)
app.use('/api/logout', logOutRoutes)
app.use(cors())
app.use(cookieParser())

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Server Connected on port ${PORT}`);
})