import React, {Component} from 'react';
import { Paper } from '@material-ui/core';

import Loading from '../components/global/Loading';

class RateContainer extends Component {
  render() {
    const terms = this.props.terms.slice(0, 3).map((term) => {
      return (
        <Paper className="rate" style={{background: "#3c6d9d"}}>
          <div style={{fontSize: '30px'}}>{term.Agency}</div>
          <div className="term-text">Type: {term.Type}</div>
          <div className="term-text">Length: {term.Years}</div>
          <div className="term-text"># of Payments: {term["# Payments"]}</div>
          <div className="term-text">IR: {(term["Interest Rate"] * 100).toFixed(1)}%</div>

        </Paper>
      );
    })
    return (
      <div className="rates-container">
        <div className="app-title">Rates</div>
        <div className="rate-container">
          {this.props.loading ? <Loading style={{margin: '0 auto'}}/> : terms}
        </div>
      </div>
    );
  }
}

export default RateContainer;