import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import { MainNavBar } from './components/navs/MainNavBar'
import { BloodPactHeader } from './components/jumbotrons/BloodPactHeader';
import {SignUpView} from './components/views/SignUpView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavBar />
        <Switch>
          <Route exact path='/' component={BloodPactHeader} />
          <Route path='/signup/' component={SignUpView} />
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;
