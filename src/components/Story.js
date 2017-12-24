import React, { Component } from 'react';
import Library from './Library.js'

const allEmojis = [
        {id: 40, name: 'zombie', symbol: '🧟‍', level: 3},
        {id: 41, name: 'wizard', symbol: '🧙‍', level: 3},
        {id: 42, name: 'mermaid', symbol: '🧜‍♀️', level: 3},
        {id: 43, name: 'dance', symbol: '💃', level: 3},
        {id: 44, name: 'run', symbol: '🏃‍', level: 1},
        {id: 45, name: 'socks', symbol: '🧦', level: 2},
        {id: 46, name: 'gloves', symbol: '🧤', level: 2},
        {id: 47, name: 'hat', symbol: '🧢', level: 1},
        {id: 48, name: 'dragon', symbol: '🐉', level: 2},
        {id: 50, name: 'flower', symbol: '🌻', level: 2},
      ]

class Story extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "user" : {
        emojis: allEmojis,
        points: 0,
      },
      "story": {
        text: "The mermaid gave the wizard a kiss",
        guesses: 0,
        remaining: 0
      }
    }
  }

  gameplay = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Emoji Stories</h1>
        </header>
        <div className="sidebar">
          <Library emojis={this.state.user.emojis}/>
        </div>

      </div>
    )
  }
}

export default Story;
