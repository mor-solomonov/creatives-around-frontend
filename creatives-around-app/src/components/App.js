import React from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/App.css';
import LoginContainer from './LoginContainer';
import DataService from '../context/DataService';

import Content from './Content';

class App extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    this.dataProvider = new DataService(this);
  }
  render() {
    return (
      <AppContext.Provider value={this.dataProvider}>
        {this.state.user ? <Content /> : <LoginContainer />}
      </AppContext.Provider>
    );
  }
}

export default App;
