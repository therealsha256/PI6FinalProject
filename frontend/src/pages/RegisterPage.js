import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

function RegisterPage() {
    const [userSignUp, setuserSignUp] = useState({username: "", password: "", fullname: ""})
    const history = useHistory()
    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuserSignUp({...userSignUp, [name]:value})
    }

    const postSignUpForm = async (e) => {
        e.preventDefault();
        const response = await axios.post('/register', {
                    username: userSignUp.username,
                    password: userSignUp.password ,
                    fullname: userSignUp.fullname 
        })
        const data = response.data;
        window.alert("You have been registered please login now")
        history.push('/login')
    }
    return (
       <div className="container">
               <div className="form-group">
                    <label htmlfor="username">Choose a Username</label>
                    <input  onChange={handleInput} type="email" name="username" className="form-control" id="username" placeholder="Enter username"></input>
               </div>
               <div className="form-group">
                    <label htmlfor="fullname">Enter Your FullName</label>
                    <input  onChange={handleInput} type="email" name="fullname" className="form-control" id="fullname" placeholder="Enter Full Name"></input>
               </div>
               <div className="form-group">
                   <label htmlfor="password">Choose a Password</label>
                   <input  onChange={handleInput} type="password" name="password" className="form-control" id="password" placeholder="Enter Password"></input>
               </div>
               <button className="btn btn-primary primary-bg relative" onClick={postSignUpForm} >Submit</button>
       </div>
    )
}

export default RegisterPage
