import React , { useState, useContext }from 'react'
import axios from 'axios';
import { UserContext } from '../App';
import { useHistory } from 'react-router-dom';

function LoginPage() {
    const {state, dispatch} = useContext(UserContext)
    const [userLogin, setuserLogin] = useState({username: "", password: ""})
    const history = useHistory()

    let name, value;
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setuserLogin({...userLogin, [name]:value})
    }

    const postLoginForm = async (e) => {
        console.log(userLogin.username);
        console.log(userLogin.password);
        e.preventDefault();
        const response = await axios.post('/login', {
                username: userLogin.username,
                password: userLogin.password  
        })
        const data = response.data;

        if(response.status === 400 || !data){
            window.alert("Invalid Creadentials")
        } else {
            const userLoggedIn = dispatch({type:"USER", payload: true})
            history.push('/postablog')
            window.alert("Logged In Successfully, Now You can write a blog! Click OK to continue")
        }
        
}
    return (
       <div className="container">
               <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input  onChange={handleInput} type="text" className="form-control" id="username" name="username" placeholder="Enter Username"></input>
               </div>
               <div className="form-group">
                   <label htmlFor="password">Password</label>
                   <input  onChange={handleInput} type="password" className="form-control" name="password" id="password" placeholder="Enter Password"></input>
               </div>
               <button className="btn btn-primary primary-bg relative" onClick={postLoginForm}>Submit</button>
       </div>
    )
}

export default LoginPage
