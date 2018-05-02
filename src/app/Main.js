import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';

export default class Main extends Component {
  render() {
    return (
      <Switch>
        { routes.map( route => <Route key={ route.path } { ...route } />)}
      </Switch>
    )
  }
}

