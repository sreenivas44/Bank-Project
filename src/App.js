import logo from './logo.svg';
import './App.css';
import { Button, Form ,Nav ,Navbar, FormControl} from 'react-bootstrap';
import React from 'react';
//import Prac from './Prac';
import AdminUser from './AdminUser';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import User from './User';
import User1 from './User1';
import Register from './Register';
import Profile from './Profile';
import About from './About';

import Admin from './Admin';
import Admin1 from './Admin1';
import Login from './Login';


function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path="/" component={AdminUser} />
          <Route exact path="/home" component={AdminUser} />
          <Route exact path="/login" component={Login} />


          <Route path="/admin" component={Admin} />
          <Route path="/user" component={User} />
          <Route exact path="/user1" component={User1} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/admin1" component={Admin1} />
          <Route exact path="/about" component={About} />



        </Switch>
      </Router>

    {/* <Prac/> */}
    </div>
  );
}

export default App;
