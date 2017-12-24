import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/Keyboard.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      "quiz" :{
        emoji: {id: 18, name: 'cow', symbol: '🐮', level: 1},
        guesses: 3,
        remaining: 'cow'
      }
    }
  }

  gameplay = () => {
    let situation = Object.assign({}, this.state.quiz)
    situation.guesses --
    situation.remaining = situation.remaining.slice(1)
    if(situation.guesses === 0) console.log("You got it!")
    this.setState({"quiz": situation})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Emoji Quiz</h1>
        </header>
        <div className="container">
        {this.state.quiz.emoji.symbol}
        </div>
        <Keyboard
          emoji={this.state.quiz.emoji}
          gameplay={this.gameplay}
          remaining={this.state.quiz.remaining}/>
      </div>
    );
  }
}

export default App;
