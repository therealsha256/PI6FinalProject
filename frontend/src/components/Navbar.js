import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../App'

function Navbar() {
    const {state, dispatch} = useContext(UserContext)
    const DisplayMenu = () => {
            if(state){
                return(
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to='/postablog'>PostABlog</Link></li>
                    </ul>
                    </div>        
                )
            }else {
                return <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
                </div>    
            }
    }
    return (
    <>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/" style={{color: "wheat"}}>MyBloggingWeb</a>
            </div>
            <DisplayMenu/>
        </div>
        </nav>
    </>
    )
}

export default Navbar
