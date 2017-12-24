import React from 'react';
import Emoji from './Emoji.js'

const Library = ({emojis}) => (
  <div>
    {emojis.map(el => <Emoji key={el.id} props={el}/>)}
  </div>
);

export default Library;
