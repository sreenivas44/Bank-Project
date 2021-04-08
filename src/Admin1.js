import React ,{Component} from 'react';
import { Container, Form, Row, Nav, Navbar,Alert, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './Admin1.css';

class Admin1 extends Component {
    constructor(props) {
      super(props)
      this.state = {
        users: [],
        isLoading: false,
        isError: false,
        
      }
    }
    // const deleteUser = async id => {
    //     await axios.delete(`http://localhost:3003/users/${id}`);
    //     loadUsers();
    
    //  deleteUser(id) {
    //     this.setState({ isLoading: true })
    //     const response =  delete(`http://localhost:3000/users/users/${id}`)
    //     componentDidMount();
    // }
    
  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('http://localhost:3000/users')
    if (response.ok) {
      const users = await response.json()
      this.setState({ users, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }

  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  renderTableRows = () => {
    return this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.role}</td>
          <td>{user.password}</td>
         <td>{user.email}</td>
         <td>{user.phone}</td>
         <td>{user.balance}</td>
         <td>{user.currentbalance}</td>
         <td>{user.pan}</td>
         <td>{user.account}</td>
         <td>{user.cType}</td>
         <td>{user.sType}</td>
         <td>
                                <Link class="btn btn-primary mr-2" to={`/view/${user.id}`}>View</Link>
                                <Link class="btn btn-outline-primary mr-2" to={`/edit/${user.id}`}>Edit</Link>
                                {/* <Link class="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link> */}
                            </td>
        
        </tr>
        
         
      )
    })
    
  }
  render() {
     
            
        
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return users.length > 0
      ? (
        
        <table>
           
          <thead>
            <tr>
              {this.renderTableHeader()}
              
            </tr>
          </thead>
          
          <tbody>
            {this.renderTableRows()}
          </tbody>
          <Link to="/">Home</Link>
        </table>
        
      ) : (
        <div>
          No users.
      </div>
      )
  }
 


}
export default Admin1;