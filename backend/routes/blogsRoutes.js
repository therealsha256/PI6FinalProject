const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

const { getAllBlogs, getBlogByID, updateBlogByID, postBlog } = require('../controllers/blogController')

router.get('/',getAllBlogs);

router.get('/:id',getBlogByID);

router.put('/update/:id', auth, updateBlogByID)

router.post('/post/', postBlog)

module.exports = router;