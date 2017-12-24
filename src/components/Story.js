import React, { Component } from 'react'
import Library from './Library.js'
import '../App.css'

const allEmojis = [
        {id: 34, name: 'kiss', symbol: '💋', level: 1},
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
        text: "The mermaid gave the wizard a kiss"
      }
    }
  }

  gameplay = (e) => {
    //removes an empty space at the end of the word
    const word = e.target.innerHTML.slice(0, -1)
    const match = this.state.user.emojis.find(el => el.name === word)
    if(match) e.target.innerHTML = match.symbol
  }

  render() {
    const array = this.state.story.text.split(" ")

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Emoji Stories</h1>
        </header>

        <div className="sidebar">
          {this.state.user.emojis.map(el => <div key={el.id}>{el.symbol}</div> )}
        </div>
        <div className="story">
          {array.map((el,i) => <span key={i} onClick ={(e) => this.gameplay(e)}>{el + " "}</span>)}
        </div>
      </div>
    )
  }
}

export default Story;
