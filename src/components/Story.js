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
  constructor() {
    super()
    this.state = {
      "user" : {
        emojis: allEmojis,
        points: 0,
      },
      "story": {
        text: "The mermaid gave the wizard a kiss",
        emojis: []
      }
    }
  }

//on click, word is replaced by an emoji, if user has a matching one
  gameplay = (e) => {
    //removes the empty space at the end of each word
    const word = e.target.innerHTML.slice(0, -1)
    const match = this.state.user.emojis.find(el => el.name === word)
    if(match) e.target.innerHTML = match.symbol
  }

//configures the gameplay based on the emoji count of the story and the emojis the user already has
  setTheStage = (story) => {
    const storyEmojis = this.findEmojis(story)
    if(storyEmojis.length === 0) console.log("Looks like you don't have any matching emojis. Do you want to try another story or get more emojis?")
    console.log(storyEmojis);
    //this.setState({story: {emojis: storyEmojis}})
  }

//checks which emojis in the story match user emojis
  findEmojis = (story) => {
    let result = []
    for (let i = 0; i < story.length; i++) {
      const match = this.state.user.emojis.find(el => el.name === story[i])
      if(match)result.push(match)
    }
    return result
  }

  render() {
    const storyArray = this.state.story.text.split(" ")
    this.setTheStage(storyArray)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Emoji Stories</h1>
        </header>

        <div className="sidebar">
          {this.state.user.emojis.map(el => <div key={el.id}>{el.symbol}</div> )}
        </div>
        <div className="story">
          {storyArray.map((el,i) => <span key={i} onClick ={(e) => this.gameplay(e)}>{el} </span>)}
        </div>
      </div>
    )
  }
}

export default Story;
