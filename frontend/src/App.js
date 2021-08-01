import React, { createContext, useReducer } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Blog from './pages/Blog';
import createBlog from './pages/createBlog';
import { initialState, reducer} from './__reducers/userReducer';
import logout from './pages/logout';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer'


export const UserContext = createContext()

const Routing = () => {
  return <Switch>
    <Route path='/' exact component={HomePage}></Route>
    <Route path='/blogs/:id' exact component={Blog}></Route>
    <Route path='/blogs' exact component={BlogsPage}></Route>
    <Route path="/login" exact component={LoginPage}></Route>
    <Route path="/register" exact component={RegisterPage}></Route>
    <Route path="/postablog" exact component={createBlog}></Route>
    <Route path="/logout" exact component={logout}></Route>
    <Route exact component={ErrorPage}></Route>
  </Switch>
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <Router>
        <div className="App">
            <Navbar/>
            <Routing/>
            <Footer/>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
