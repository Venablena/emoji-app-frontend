import React, { Component } from 'react'
import Library from './Library.js'
import '../App.css'

class Story extends Component {
  constructor() {
    super()
    this.state = {
      "user" : {
        emojis: [],
        points: 0,
      },
      "story": {
        text: ["The", "mermaid", "gave", "the", "wizard", "a", "kiss"],
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

//checks which emojis in the story match user emojis
  findEmojis = (story, user_emojis) => {
    let result = []
    for (let i = 0; i < story.length; i++) {
      const match = user_emojis.find(el => el.name === story[i])
      if(match)result.push(match)
    }
    return result
  }

//will need to update when the stories are in the database, currently just hard-coded
  async componentDidMount(){
    const allEmojis = await this.getEmojis()
    const storyEmojis = this.findEmojis(this.state.story.text, allEmojis)
    this.setState({
      user: {
        emojis: allEmojis
      },
      story: {
        text: ["The", "mermaid", "gave", "the", "wizard", "a", "kiss"],
        emojis: storyEmojis
      }
    })
  }

  async getEmojis() {
    const emojis = await fetch("http://localhost:3030/api/emoji")
    const response = await emojis.json()
    return response.results
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Emoji Stories</h1>
        </header>

        <div className="sidebar">
          {this.state.user.emojis.map(el => <div key={el.id}>{el.symbol}</div> )}
        </div>
        <div className="story">
          {this.state.story.text.map((el,i) => <span key={i} onClick ={(e) => this.gameplay(e)}>{el} </span>)}
        </div>
      </div>
    )
  }
}

export default Story;
