import React, { Component, Fragment } from 'react';
import LoanContainer from './containers/LoanContainer';
import RateContainer from './containers/RateContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <Fragment>
      <LoanContainer />
      <RateContainer />
      </Fragment>
    );
  }
}

export default App;