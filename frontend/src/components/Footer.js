import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
    <div>
        <footer class="page-footer">
            <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <Link to="/">MyBlogginWeb</Link>
            </div>

        </footer>
    </div>
    )
}

export default Footer
