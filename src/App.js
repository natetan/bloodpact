import React, { Component } from 'react';
import './App.css';

import { MainNavBar } from './components/navs/MainNavBar'
import { BloodPactHeader } from './components/jumbotrons/BloodPactHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavBar />
        <BloodPactHeader />
      </div>
    );
  }
}

export default App;
