import React, { Component } from 'react';
import './App.css';
import FlipFormComponent from './FlipFormComponent';
import { connect } from 'react-redux'
import { restartGame } from './store/flip';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(restartGame())
  }
  render() {
    const { bets } = this.props
    return (
      <div >
        test
        <form>
          <button >RESTART GAME</button>
          <FlipFormComponent />
          <ul>
            {bets.map((b, index) => (
              <li key={index}>
                {b}
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  flipResult: state.flip.flipResult,
  bets: state.flip.bets
})
export default connect(mapStateToProps)(App)
