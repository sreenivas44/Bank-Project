import React, { Component } from 'react';
import { Button, Form ,Nav ,Navbar, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Prac1(){
    const joke=()=>{
        axios.get("http://localhost:3000/users").then(
            (response)=>{console.log(response)}
        );
    };
    return(
        <div>
            
        <h1>Hello</h1>
        <button onClick={joke}>Get</button>
        </div>
    )
}
export default Prac1;