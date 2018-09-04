import React, { Component } from 'react';
import './App.css';

let tries = 0;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      tries: 0,
      highScore: 0,
      targetNumber: 1, 
      message: '',
    }

    this.standardGame = this.standardGame.bind(this);
    this.expertGame = this.expertGame.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.actualGame = this.actualGame.bind(this);
    this.compareNumbers = this.compareNumbers.bind(this);
    this.baseState = this.state;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  resetGame = () => {
    this.setState(this.baseState)
  }

  standardGame = () => {
    this.setState ({
      targetNumber: Math.floor(Math.random() * 10) + 1
    })
  }

  expertGame = () => {
    this.setState ({
      targetNumber: Math.floor(Math.random() * 100) + 1
    })
  }

  actualGame = () => {
    let newMessage;

    tries++;

    // eslint-disable-next-line
    if (this.state.value == this.state.targetNumber) {
      newMessage = "You win!";
    } else if (this.state.value > this.state.targetNumber) {
      newMessage = "Guess lower!"
    } else if (this.state.value < this.state.targetNumber) {
      newMessage = "Guess higher!"
    }

    this.setState ({
      message: newMessage,
      tries: tries
    })
  }

  compareNumbers = () => {
    let highScore = 100;

    if (this.tries <= highScore) {
      highScore = this.tries;
    }

    return highScore;
  }

    
  render () {
    return(
      <div className="App">
        <h1>Start Game</h1>
        <button onClick={this.standardGame}>Standard</button>
        <button onClick={this.expertGame}>Expert</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input guess:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.actualGame}/>
          <h2>{this.state.message}</h2>
          <h3>Your high score:</h3>
          <h4>{this.compareNumbers()}</h4>
        </form>
        <button onClick={this.resetGame}>Reset</button>
      </div>
    );
  }
}

export default App;