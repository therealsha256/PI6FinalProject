require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("MongoDB Connection SUCCESSFUL");
    } catch (error) {
        console.error('MongoDB Connection FAILED')
        process.exit(1)
    }
}

module.exports = connectDB;