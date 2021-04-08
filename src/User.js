import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Form, Row, Alert, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';


const User = (props) => {
   
    useEffect(() => {
        loadUsers();
    }, []);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
 
    const usernameinputvalchange = (e) => {
 
        setUsername(e.target.value);
 
    }
    const passwordinputvalchange = (e) => {
        setPassword(e.target.value);
 
    }
    const [users, setUser] = useState([]);
    const loadUsers = async () => {
        await axios.get('http://localhost:3000/users')
            .then(response => {
                console.log(response.data);
                setUser(response.data);
            });
    }
 
    const onSubmit = () => {
 
        const usernameReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,13}$/;
        const isUserValid = usernameReg.test(username);
        const isPasswordValid = passwordReg.test(password);
 
        if (isUserValid && isPasswordValid) {
            for (let i = 0; i < users.length; i++) {
                debugger
                if (username == users[i].email && password == users[i].password && users[i].role == 'User') {
                    return props.history.push(`/profile/${users[i].id}`);                              
 
                } else {
                    if (i == users.length - 1) {
                        alert("User name and password not matched");
                    }
                }
            }
        }
        else {
            alert("Invalid Credentials");
        }
 
    }
    return (
        
      <section id="cover" class="min-vh-100">
      <div id="cover-caption">
          <div class="container">
              <div class="row text-white">
                  <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                      <h1 class="display-4 py-2 text-truncate">User Login</h1>
                      <div class="px-2">
                          <form action="" class="justify-content-center">
                              <div class="form-group">
                                  <label class="sr-only">Email</label>
                                  <input type="email" name="email" onChange={usernameinputvalchange} class="form-control"  placeholder="Enter Email" />
                              </div>
                              <div class="form-group">
                                  <label class="sr-only">Password</label>
                                  <input type="password" onChange={passwordinputvalchange} name="password" class="form-control"   placeholder="*****" />
                              </div>
                              <button type="submit" class="btn btn-primary btn-lg"  onClick={onSubmit}>Login</button><br></br>
                              <br></br>
                              <div><p><Link to="/">Back</Link></p></div>
                          </form>
                         
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
        
    )
}
 
export default User;