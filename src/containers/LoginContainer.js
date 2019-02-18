import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { setUsername } from '../actions/UserActions';

class LoginContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {
    username: ""
  }
}

  handleUserInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  signIn = () => {
    if (!this.state.username) this.setState({username: "Аноним"});
    this.props.setUsernameAction(this.state.username);
    this.props.history.push('/chat');
  }

  render() {

    return (
      <Login
        username={this.state.username}
        handleUserInput={this.handleUserInput}
        signIn={this.signIn}
      />
    );
  }
}

const mapStateToProps = store => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    setUsernameAction: username => dispatch(setUsername(username)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);