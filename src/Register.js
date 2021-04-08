import React, { useState, useEffect} from 'react';
import { Button, Form, Nav, Navbar, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import axios from 'axios';
//import { propTypes } from 'react-bootstrap/esm/Image';

const Register = (props) => {
    
    const [user, setUser] = useState({
        name: "",
        email: "",
        password:"",
        phone: "",
        pan: "",
        role:""

    });

    const { name,email, password, phone , pan, role} = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3000/users", user);
        
        props.history.push('/login');
        
        
    };


    return(
        <div class="container">
<div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header">Register</div>
                            <div class="card-body">

                                <form class="form-horizontal" method="post" action="#">

                                    <div class="form-group">
                                        <label for="name" class="cols-sm-2 control-label">Your Name</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                                <input type="text" class="form-control" name="name" value={name}
                            onChange={e => onInputChange(e)} id="name" placeholder="Enter your Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="email" class="cols-sm-2 control-label">Your Email</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                                <input type="text" class="form-control" name="email" value={email}
                            onChange={e => onInputChange(e)} id="email" placeholder="Enter your Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="username" class="cols-sm-2 control-label">Your Role</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-users fa" aria-hidden="true"></i></span>
                                                <input type="text" class="form-control" name="role" value={role}
                            onChange={e => onInputChange(e)} id="username" placeholder="Enter your Role" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="cols-sm-2 control-label">Password</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                <input type="password" class="form-control" name="password" value={password}
                            onChange={e => onInputChange(e)} id="password" placeholder="Enter your Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="confirm" class="cols-sm-2 control-label">Phone</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                <input type="number" class="form-control" value={phone}
                            onChange={e => onInputChange(e)} name="phone" id="confirm" placeholder="Your Phone Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="confirm" class="cols-sm-2 control-label">PAN NUMBER</label>
                                        <div class="cols-sm-10">
                                            <div class="input-group">
                                                <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                                <input type="number" class="form-control" name="pan" value={pan}
                            onChange={e => onInputChange(e)}  id="confirm" placeholder="Your Pan Number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group ">
                                        <button type="button" class="btn btn-primary btn-lg btn-block login-button" onClick={e => onSubmit(e)} >Register</button>
                                    </div>
                                    <div class="login-register">
                                    <Link to="/login">Login</Link>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
</div>



    )
}
export default Register;