import React, { Component } from 'react';

class Login extends Component {

  render() {

    return (
      <div className="username">
        <div className="form-container">
            <h2>Введите свое имя</h2>
                <input className="username" placeholder="username" type="text" name="username" value={this.props.username} onChange={this.props.handleUserInput} />
            <div>
                <button onClick={this.props.signIn}> Войти </button>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;