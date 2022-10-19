import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUsers } from '../actions/Actions';
import { withRouter } from './withRouter';

export class Login extends Component {
  
    constructor() {
        super();
        this.state = {
            email: "",
            pswd:""
          }
      }
     
  render() {
    return (
      <div className='form-wrapper'>
        <div className="container-wrapper">
        <form className='white'>
            <h1 className='login-form'>Login</h1>
             <div>
                <label htmlFor="email" >Email:</label>
                <input type="email"  name="email" onChange={ this.handleChange}  className="form-control" id="email" placeholder="Enter Email" />
          </div>
          <div className='input'>
          <label htmlFor="password">password:</label>
            <input type="password"  name="pswd" onChange= { this.handleChange}  className="form-control" id="password" placeholder="Enter Password" />
          </div>
            <button type="button" onClick={() => this.props.loginUsers(this.state.email,this.state.pswd,this.props.router.navigate)} className="button submitButton" >Submit</button>
            <Link to ="/">Sign Up </Link>
          </form>
        </div>

      </div>
    );
  }
  handleChange = event => {
    this.setState({ ...this.state, [event.target.name] : event.target.value });
  }
  
}
const mapDispatchToProps=(dispatch)=> {
  return{
    loginUsers: (email,pswd,navigate) => {dispatch(loginUsers(email,pswd,navigate))}
  }
}
 
export default connect(null,mapDispatchToProps)(withRouter(Login));