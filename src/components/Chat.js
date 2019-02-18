import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component {

  render() {

    return (
      <div className="chat">
      <div className="chat-messages-container">
        <div className="chat-messages">
            {this.props.data.map(this.props.renderItem)}
         </div>
        </div>
        <div className="chat-input-container">
        <input className="message-input" placeholder="message" type="message" name="message" value={this.props.message} onChange={this.props.handleUserInput} />
        <button className="chat-button" onClick={this.props.sendMessage}> Отправить </button>
        </div>
      </div>
    );
  }
}


export default Chat;