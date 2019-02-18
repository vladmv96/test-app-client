import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Login from './Login';
import Chat from './Chat';


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
        <Route exact path='/' component={Login}/>
        <Route path='/chat' component={Chat}/>
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;