import React, { Component } from 'react';
import { Button, Form ,Nav ,Navbar, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Prac extends React.Component{

  constructor(props){

    super(props);
    this.state={
      tchiename:"Angular",
      duration:"10",
      output:"Failure",
      array:["Intro","Instra","hguh"]
    }
  }
  

  handleEmail=(e)=> {
    this.setState({email:e.target.value});
 }
 handlePassword=(e)=> {
    this.setState({password:e.target.value});
 }
 handleLogin=()=>{
  //  <div>
  //  <h1>Email:{this.state.email}</h1> 
   
  //  <h1>Password:{this.state.password}</h1>
  //  </div>
  console.log("Email:"+this.state.email);
  console.log("Email:"+this.state.password);
  
}


// async componentDidMount() {
//   this.setState({ isLoading: true })
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   if (response.ok) {
//       var users = await response.json()
//       this.setState({ users, isLoading: false })
//       console.log(users);
//       if(users[0].email==this.state.email){
//           console.log("true")}
//           else{
//               console.log("false")
//           }
      
  
  
  
// } 
//   else {
//       this.setState({ isError: true, isLoading: false })
      
//   }
// }

const [users, setUser] = useState([]);
 loadUsers = async () => {
  await axios.get('http://localhost:3003/users')
      .then(response => {
          setUser(response.data);
      });
}


  render(){
    return(

      <div>
      <form>
          <input class="text-center" type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
          <button type="button" onClick={this.handleLogin}>Login</button>
        </form>
    <h1>Email:{this.state.email}</h1>

      {/* <div>
      <h1>Practicing class component.</h1>
      <h1>Parent component.</h1>
      <h1>{this.state.tchiename}</h1>
      <h1>{this.state.duration}</h1>
      <h1>{this.state.output}</h1>
      <h1>{this.state.array.join(',')}</h1>

      <Child tchiename={this.state.tchiename} duration={this.state.duration} output={this.state.output} array={this.state.array}/>
      </div>*/}

      </div>
    )
  }
}

//     async componentDidMount() {
//         this.setState({ isLoading: true })
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         if (response.ok) {
//             var users = await response.json()
//             this.setState({ users, isLoading: false })
//             console.log(users);
//             if(users[0].role==this.state.email){
//                 console.log("true")}
//                 else{
//                     console.log("false")
//                 }
            
        
        
        
//     } 
//         else {
//             this.setState({ isError: true, isLoading: false })
            
//         }
//     }
   
   

    
//     render() {
//         // var name=document.getElementById("exampleInputEmail1").value
//         // console.log(name);
        
//        return(
//         <div>
//             <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" value={this.state.email} onChange={this.onInputChange} name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" value={this.state.password} onChange={this.handlePassword} name="password" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" onClick={this.handleSubmit} class="btn btn-primary">Submit</button>
// </form>
            
//         </div>


//        )
// }
// }

export default Prac;