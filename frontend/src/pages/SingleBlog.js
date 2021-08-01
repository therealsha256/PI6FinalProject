import React from 'react';
import { Link } from 'react-router-dom';

function SingleBlogPage(props) {
    const onShowPost = () => {
        window.location.pathname = `/blogs/${props.blog._id}`
    }

    return (
        <div>
            <div className="singleBlog-outer">
            <Link onClick={onShowPost}>
                <h1 className="primary--color" >{props.blog.title}</h1>
                <h4>Author: {props.blog.author}</h4>
                <p>{props.blog.content.slice(0, 200)}</p>
            </Link>
            </div>
        </div>
    )
}

export default SingleBlogPage
