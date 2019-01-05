import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import Settings from '../others/Settings';
import Visualize from '../others/Visualize';
import Report from '../others/Report';

class MainPage extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />>
        <Route path='/settings' exact component={Settings} />
        <Route path='/visualize' exact component={Visualize} />
        <Route path='/report' exact component={Report} />
        <Redirect to='/' />
      </Switch>
    );
  }
}

export default MainPage;
