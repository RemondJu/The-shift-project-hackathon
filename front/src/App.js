import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar';
import MyRooms from './containers/MyRooms';
import MonCompte from './components/MonCompte';
import MyHome from './components/MyHome';
import MyBadges from './components/MyBadges';
import PageRegist from './components/PageRegist';
import Community from './components/Community';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route path="/myHome" component={MyHome} />
          <Route path="/myRooms" component={MyRooms} />

          <Route path="/community" component={Community} />

          <Route path="/mon-compte" component={MonCompte} />

          <Route path="/myBadges" component={MyBadges} />
          <Route path="/pageRegister" component={PageRegist} />
        </Switch>
      </div>
    );
  }
}

export default App;