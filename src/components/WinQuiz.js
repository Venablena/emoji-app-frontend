import React from 'react'

// const happy = ['🌟', '✨', '⭐️', '⚡️', '💥', '🌈', '💫']

const hooray = ['🌟', 'H','o','o','r','a','y','!','🌟']

const WinQuiz = () => (
    hooray.map((emoji, index) => <span className='animated tada' key={index}>{emoji}</span>)
)

export default WinQuiz
