const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    datePublished: {
        type: Number,
        required: false
    },
    content: {
        type: String,
        required: true
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;