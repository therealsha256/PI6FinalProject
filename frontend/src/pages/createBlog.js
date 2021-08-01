import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function CreateBlog() {
    const [postBlog, setpostBlog] = useState({title: "", content: "", authorName: ""})
    const history = useHistory()
    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setpostBlog({...postBlog, [name]:value})
    }
    const postheBlog = async (e) => {
        e.preventDefault();
        const response = await axios.post('/blogs/post/', {
                title: postBlog.title,
                content: postBlog.content ,
                author: postBlog.authorName 
        })
        const data = response.data;
        window.alert("Your Blog has been posted Succesfully")
        history.push('/blogs')
        console.log(data);
    }
    return (
        <div className="container">
            <div className="form-group">
                <label htmlfor="title">Enter Your Blog's Title</label>
                <input  name="title" type="email" className="form-control" id="title" placeholder="Blog Title" onChange={handleInput}></input>
            </div>
            <div className="form-group">
                <label htmlfor="content">Write Your Blog Here</label>
                <textarea name="content" onChange={handleInput} rows="25" type="text" className="form-control textarea_blog" id="content" placeholder="Blog Content"></textarea>
            </div>
            <div className="form-group">
                <label htmlfor="authorName">Author's Name (Your Name)</label>
                <input  name="authorName" onChange={handleInput} type="text" className="form-control" id="authorName" placeholder="Author's Name"></input>
            </div>
            <button className="btn btn-primary primary-bg relative" onClick={postheBlog}>Post Blog</button>
        </div>
    )
}

export default CreateBlog
