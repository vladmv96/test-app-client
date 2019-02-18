import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    login: ""
  }
}

  handleUserInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  getData = () => {
    axios({
      method: "get",
      url: "http://localhost:3001/users",
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error)
    });
  }
  

  signIn = () => {
    if (!this.state.login) return;
    this.props.history.push('/chat')
  }

  render() {

    return (
      <div className="login">
      <button className="testButton" onClick={this.getData}> Test API </button>
      <div className="form-container">
      <h2>Введите свое имя</h2>
        <input className="login" placeholder="Login" type="login" name="login" value={this.state.login} onChange={this.handleUserInput} />
        <div>
        <button onClick={this.signIn}> Войти </button>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;