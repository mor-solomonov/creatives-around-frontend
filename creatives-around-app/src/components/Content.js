import React, { Component } from 'react';
import { AppContext } from '../context/AppContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Users from './Users';

export default class Content extends Component {
  static contextType = AppContext;
  render() {
    const { user } = this.context.data;
    return (
      <div>
        <p>{`Logged in as ${user.nickname}`}</p>
        <button onClick={this.context.logout}>Logout</button>
        <p>
          Coordinates fetched from browser:
          {`Latitude: ${user.location.lat}, Longitude: ${user.location.lon}`}
        </p>
        <p>
          Coordinates translated to address:
          {`${user.location.country}, ${user.location.city} ${user.location.code}, ${user.location.district}, ${user.location.street} ${user.location.house}`}
        </p>
        <Router>
          <Switch>
            <Route exact path='/users' component={Users} />
            <Route exact path='/' component={Homepage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
