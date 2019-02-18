import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
      text: ""
  }
}

  handleUserInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  getData = () => {
    axios({
      method: "get",
      url: "http://localhost:3001/test",
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error)
    });
  }


  sendForm = () => {
    const { text } = this.state;
    axios({
      method: "post",
      url: "http://localhost:3001/test",
      data: {
          text
      }
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    });
    this.setState({text: ""})
  }

  render() {

    return (
      <div className="form">
      <button className="testButton" onClick={this.getData}> Test API </button>
      <div className="form-container">
        <textarea name="text" value={this.state.text} onChange={this.handleUserInput} />
        <div>
        <button onClick={this.sendForm}> Отправить </button>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;