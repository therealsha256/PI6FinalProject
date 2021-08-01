const Blog = require('../models/Blog')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({})
        res.json(blogs)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'})
    }
};

const getBlogByID = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"})
    }
}

const updateBlogByID = async (req, res) => {
    try {
        console.log(req.body.title);
        console.log(req.body.author);
        console.log(req.body.content);
        console.log(req.params.id);
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            author: req.body.author,
            content: req.body.content
        })
        res.json(req.body)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Cannot Update Server Error (500)"})
    }
}

const postBlog = (req, res) => {
    try {
        const blogToPost = new Blog(
            {
                title: req.body.title,
                author: req.body.author,
                content: req.body.content
        }
 )
    blogToPost.save()          
    res.json(req.body)
    } catch (error) {
        console.log(error);
        res.status(404).send({message: "Cannot Post Internal Error"})
    }
}

module.exports = {
    getBlogByID, getAllBlogs, updateBlogByID, postBlog
}