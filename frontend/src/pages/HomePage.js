import React from 'react'
import "./HomePage.css"

function HomePage() {
    return (
        <div>
            <h1>Welcome to My Blogging Website</h1>
            <h3>Navigate from the Navbar to access the contents of my web</h3>

            <h1 className="m-10">This could be your Blog:</h1>

            <div className="container blog-temp">
                <h1 className="card">Your Blog's Title</h1>
                <h3 className="card">Your Name (Your are the author)</h3>
                <h4 className="card">Your Blogs's Content would be Here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta unde sed sunt iure non explicabo animi, deserunt aliquam numquam officiis eius repudiandae ratione quaerat natus saepe. Nostrum, accusamus expedita.</h4>
            </div>
        </div>
    )
}

export default HomePage
