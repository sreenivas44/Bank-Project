import React from 'react';
import { Button, Form ,Nav ,Navbar, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './AdminUser.css';


function AdminUser() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link> 
          <Link to="/">Home</Link> 
          </Nav.Link>
          <Nav.Link style= {{ color:"green"}}> <Link to="/login">Login</Link> </Nav.Link>
          <Nav.Link style= {{ color:"green"}}> <Link to="/register">Register</Link> </Nav.Link>
          <Nav.Link style= {{ color:"green"}}> <Link to="/about">About</Link> </Nav.Link>
          
        </Nav>
       
      </Navbar>
      
      <div  className="container">
          <h1>Welcome to our Bank Application</h1>
      <img src="https://www.doughroller.net/wp-content/uploads/2018/03/largest-banks-in-the-world-648x364-c-default.jpg"></img>
    </div>

    {/* <div id="image">
        <img src="https://i.pinimg.com/736x/9b/90/e5/9b90e5f21befd9e4fbc47be2957e3d04.jpg"></img>

    </div> */}
           
                            


             
            

                            </div>
        
        
    )
}

export default AdminUser;