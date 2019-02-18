import React, { Component } from 'react';
import './Chat.css';
import axios from 'axios';

class Chat extends Component {
  constructor(props) {
  super(props);
  this.state = {
    data: [],
    message: ""
  }
}

  handleUserInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  componentWillMount = () => {

    setInterval(() => {
        this.getData();
    }, 10000);
  }

  getData = () => {
    axios({
      method: "get",
      url: "http://192.168.99.80:3001/test",
    }).then(response => {
      console.log(response.data);
      this.setState({data: response.data})
    }).catch(error => {
      console.log(error)
    });
  }

  renderItem = (item) => {
      console.log(item)
      return (<div key={item.text}>
          <h3>{item.text}</h3>
      </div>)
  }

  sendMessage = () => {
    const { message } = this.state;
    axios({
      method: "post",
      url: "http://192.168.99.80:3001/test",
      data: {
          text: message
      }
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    });
    this.setState({message: ""})
  }

  render() {

    const {data} = this.state;

    return (
      <div className="chat">
      <div className="chat-messages-container">
        <div className="chat-messages">
            {data.map(this.renderItem)}
         </div>
        </div>
        <div className="chat-input-container">
        <input className="message-input" placeholder="message" type="message" name="message" value={this.state.message} onChange={this.handleUserInput} />
        <button className="chat-button" onClick={this.sendMessage}> Отправить </button>
        </div>
      </div>
    );
  }
}

export default Chat;