import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
import SingleBlog from './SingleBlog'


function BlogsPage() {
    const [blogs, setblogs] = useState([])
    const  getBlogs = async () => {
        const response = await axios.get('/blogs')
        setblogs(response.data)
    }
    useEffect(() => {
        getBlogs()
    }, [])

    const ShowBlogs = () => {
        if(blogs.length === 0){
            return <h1>No Blogs Found</h1>
        }else{
            return (
                <div className="container">
                {
                    blogs.map(blog => {
                        return <SingleBlog blog={blog} key={blog._id}/>
                    })
                }
            </div>        
            )
        }
    }

    return (
        <ShowBlogs/>

    )
}

export default BlogsPage
