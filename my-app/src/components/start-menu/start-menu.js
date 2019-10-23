import React from 'react'
import { stylesHeading,rules} from '../styles-object';

const StartMenu = () => {
  return (
<div>
      <h2 className='start-screen-heading' style={stylesHeading}>Its my match-match game</h2>
      <p className='game-rules' style={rules}>
        Flip the tiles and try to match them up in pairs.
        Pair up all the tiles to win.
        Try to complete the game in as few moves as possible!
      </p>
</div>
  )
}
export default StartMenu;
