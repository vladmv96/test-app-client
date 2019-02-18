import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Login from './Login';
import SignUp from './SignUp';


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
        <Route path='/' component={Login} />
        <Route path='/registration' component={SignUp}/>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;