import React, { Component } from 'react';
import { AppContext } from '../context/AppContext';

export default class Users extends Component {
  static contextType = AppContext;
  state = {
    users: [],
    filter: {
      pagination: {
        maxDistance: 0,
        pageIndex: 0,
        pageSize: 20,
      },
    },
  };
  async componentDidMount() {
    const users = await this.context.getUsers(this.state.filter);
    this.setState({ ...this.state, users });
  }
  render() {
    return (
      <div>
        List of all users
        {this.state.users.map((user) => (
          <p>{`Email: ${user.email}, Nickname:${user.nickname}`}</p>
        ))}
      </div>
    );
  }
}
