import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Chat from '../components/Chat';

class ChatContainer extends Component {
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
    }, 500);
  }

  getData = () => {
    axios({
      method: "get",
      url: `${this.props.host.host}/test`,
    }).then(response => {
      this.setState({data: response.data})
    }).catch(error => {
      console.log(error)
    });
  }

  renderItem = (item) => {
      return (<div key={item.text}>
          <h3><span>{item.username}: </span>{item.text}</h3>
      </div>)
  }

  sendMessage = () => {
    const { message } = this.state;
    const { username } = this.props.user;
    axios({
      method: "post",
      url: `${this.props.host.host}/test`,
      data: {
          text: message,
          username
      }
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    });
    this.setState({message: ""})
  }

  render() {

    return (
      <Chat 
        data={this.state.data}
        message={this.state.message}
        handleUserInput={this.handleUserInput}
        renderItem={this.renderItem}
        sendMessage={this.sendMessage}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    host: store.host
  }
}

export default connect(mapStateToProps)(ChatContainer);