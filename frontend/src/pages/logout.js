import React, { useEffect, useContext } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

function Logout() {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
            dispatch({type:"USER", payload: false})
            history.push('/login', { replace: true });
    return (
        <div>
            <p>LogOut Page</p>
        </div>
    )
}

export default Logout
