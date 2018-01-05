import React from 'react'
import {Button, Chip, Col, Row, Card, CardPanel} from 'react-materialize'


const ProfileAvatars = ({allEmoji, postAvatar}) => 
    (
    <Col className="container">
        {allEmoji.map((emoji, i) => {
            return <span onClick={(e) => postAvatar(e)} 
            className="emoji emoji-small animated fadeDown 1s" 
            key={i}>{emoji.image}</span>
        })}
    </Col>
)

export default ProfileAvatars