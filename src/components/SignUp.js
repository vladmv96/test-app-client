import React, { Component } from 'react';
import './SignUp.css';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
  super(props);
  this.state = {
    login: "", 
    firstName: "", 
    lastName: "", 
    password: "",
    attention: false
  }
}


handleUserInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  goToBack = () => {
      this.props.history.push('/');
  }

addUser = () => {
    const { login, firstName, lastName, password } = this.state;
    if( !login || !firstName || !lastName || !password ) {
        this.setState({attention: true})
        return
    }
    axios({
      method: "post",
      url: "http://localhost:3001/users",
      data: {
        login,
        firstName,
        lastName,
        password
      }
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    });
    this.setState({login: "", firstName: "", lastName: "", password: ""})
  }

  render() {
    return (
      <div className="signUp">
      <button onClick={this.goToBack}> Назад </button>
      <div className="form-container">
        <input className="login" placeholder="Логин" type="login" name="login" value={this.state.login} onChange={this.handleUserInput} />
        <input className="firstName" placeholder="Имя" type="text" name="firstName" value={this.state.firstName} onChange={this.handleUserInput} />
        <input className="lastName" placeholder="Фамилия" type="text" name="lastName" value={this.state.lastName} onChange={this.handleUserInput} />
        <input className="password" placeholder="Пароль" type="password" name="password" value={this.state.password} onChange={this.handleUserInput} />
        {this.state.attention && <p className="attention">Заполните все поля</p>}
        <button onClick={this.addUser}> Зарегистрироваться </button>
        </div>
      </div>
    );
  }
}

export default SignUp;