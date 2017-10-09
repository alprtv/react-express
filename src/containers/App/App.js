import React, { Component } from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
import TodayWidget from 'components/TodayWidget';

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    const today = new Date();

    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React express</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/conrainers/App.js</code> and save to reload.
        </p>
        <TodayWidget today={today}/>
      </div>
    );
  }
}

export default App;
