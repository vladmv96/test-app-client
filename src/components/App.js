import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Login from './Login';
import SignUp from './SignUp';
import Form from './Form';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Form}/>
        <Route path='/login' component={Login} />
        <Route path='/registration' component={SignUp}/>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;