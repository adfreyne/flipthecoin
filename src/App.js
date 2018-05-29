import React, { Component } from 'react';
import './App.css';
import FlipFormComponent from './FlipFormComponent';
import { connect } from 'react-redux'

class App extends Component {

  render() {
    const { flips, account } = this.props
    return (
      <div >
        <FlipFormComponent />
        <h3>List of flips</h3>
        <ul>
          {flips.map((b, index) => (
            <li key={index}>
              {b}
            </li>
          ))}
        </ul>
        <p>account: {account}</p>

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  flipResult: state.flip.flipResult,
  flips: state.flip.flips,
  account: state.flip.account,
})
export default connect(mapStateToProps)(App)
