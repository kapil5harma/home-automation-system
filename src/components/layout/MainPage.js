import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';

class MainPage extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />>
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default MainPage;
