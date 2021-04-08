import React from 'react';
import { Button, Form, Nav, Navbar, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './Login.css';


function Login(props) {
    const goToUser = () => {
        props.history.push('/user');
    }
    const goToAdmin = () => {
        props.history.push('/admin');
    }
    return (
        <div>
            <Navbar bg="light" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>

                </Nav>

            </Navbar>
            <div class="center">
                <Button variant="primary" type="submit" onClick={goToUser} >
                    USER
  </Button>
<div class="separate"><Button variant="primary" type="submit" onClick={goToAdmin} >
                    ADMIN
  </Button></div>
                
            </div>

            <h2 className="text-center">Login Into Your Account Using your Credentials</h2>







        </div>


    )
}

export default Login;