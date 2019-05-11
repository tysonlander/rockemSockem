import React, {Component} from 'react';

function HeroImage(props) {
  return(
    <div>
      <img src="https://media.gq.com/photos/5aac26f0a980810c2d4f23d7/16:9/w_1280%2Cc_limit/rockem.gif" alt="super awesome gif"/>
      <button onClick={props.handleHeroImage}>Let's Rock'Em</button>
    </div>
  )
}

export default HeroImage;