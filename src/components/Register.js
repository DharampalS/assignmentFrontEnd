import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUsers } from '../actions/Actions';
import { withRouter } from './withRouter';

export class Register extends Component {
  
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
            <h1 className='login-form'>Sign Up</h1>
             <div>
                <label htmlFor="email" >Email:</label>
                <input type="email"  name="email" onChange={ this.handleChange}  className="form-control" id="email" placeholder="Enter Email" />
          </div>
          <div className='input'>
          <label htmlFor="password">password:</label>
            <input type="password"  name="pswd" onChange= { this.handleChange}  className="form-control" id="password" placeholder="Enter Password" />
          </div>
            <button type="button" onClick={() => this.props.signUpUsers(this.state.email,this.state.pswd,this.props.router.navigate)} className="button submitButton" >Submit</button>
            <Link to ="/login">Login </Link>
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
    signUpUsers: (email,pswd,navigate) => {dispatch(signUpUsers(email,pswd,navigate))}
  }
}

export default connect(null,mapDispatchToProps)(withRouter(Register));