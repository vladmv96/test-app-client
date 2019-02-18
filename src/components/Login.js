import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    login: "",
    password: "",
    data: [],
    count: 1
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
      console.log(response.data)
      this.setState({data: response.data})
    }).catch(error => {
      console.log(error)
    });
  }

  signUp = () => {
    this.props.history.push('/registration')
  }

  render() {

    return (
      <div className="login">
      <button className="testButton" onClick={this.getData}> Test API </button>
      <div className="form-container">
        <input className="login" placeholder="Login" type="login" name="login" value={this.state.login} onChange={this.handleUserInput} />
        <input className="password" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleUserInput} />
        <div>
        <button> Войти </button>
        <button onClick={this.signUp}> Регистрация </button>
        </div>
        <p>{this.state.count}</p>
        </div>
      </div>
    );
  }
}

export default Login;