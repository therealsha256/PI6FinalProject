import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Blog(props) {
    const [blog, setBlog] = useState({})
    const getBlog = async () => {
        const blog = await axios.get(`/blogs/${props.match.params.id}`)
           setBlog(blog.data)
    }

    useEffect(() => {
        getBlog()
    })
    return (
        <div className="singleBlog container">
            <h1 className="primary--color">{blog.title}</h1>
            <h4>Author: {blog.author}</h4>
            <h5>{blog.content}</h5>
        </div>
    )
}

export default Blog
