import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import LoginContainer from './LoginContainer';
import ChatContainer from './ChatContainer';


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
            <Route exact path='/' component={LoginContainer}/>
            <Route path='/chat' component={ChatContainer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;