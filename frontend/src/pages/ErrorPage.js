import React from 'react';
import { useHistory } from 'react-router-dom'

function ErrorPage() {
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div>
            <h1 className="primary--color">Sorry, Page Not Found</h1>
            <button className="btn btn-primary primary-bg" onClick={handleClick}>Back To Home Page</button>
        </div>
    )
}

export default ErrorPage
