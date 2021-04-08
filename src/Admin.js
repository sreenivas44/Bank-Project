import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Form, Row, Alert, Button } from 'react-bootstrap';
//import {useHistory} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
function Admin(props) {
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
 
        const usernameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isUsernameValid = usernameRegex.test(username);
        const isPasswordValid = passwordRegex.test(password);
 
        if (isUsernameValid && isPasswordValid) {
            for (let i = 0; i < users.length; i++) {
                debugger
                if (username == users[i].email && password == users[i].password && users[i].role == 'Admin') {
                    return props.history.push('/admin1');

                                
 
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
                            <h1 class="display-4 py-2 text-truncate">Admin Login</h1>
                            <div class="px-2">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" name="email" onChange={usernameinputvalchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" class="form-control" name="password" onChange={passwordinputvalchange} id="exampleInputPassword1" />
  </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
                                                <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button><br></br>
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
export default Admin;