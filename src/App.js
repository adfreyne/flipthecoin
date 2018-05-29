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
        <p>account: {account}</p>
        <h3>List of flips</h3>
        <ul>
          {flips.map((b, index) => (
            <li key={index}>
              {b}
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  flipResult: state.flip.flipResult,
  flips: state.flip.flips,
  account: state.flip.account,
  choice: state.flip.choice
})
export default connect(mapStateToProps)(App)
