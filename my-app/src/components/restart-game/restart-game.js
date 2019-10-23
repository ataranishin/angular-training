import React from 'react';
import { containerRestart, buttonRestart } from '../styles-object';
const RestartGame = (props) => {
  const {returnHome} = props;
  const restartText = 'Try again';
  return (
    <div style={containerRestart} className='restart-game'>
      <button
        onClick={returnHome}
        style={buttonRestart}
        className='restart-game'>
        {restartText}
      </button>
    </div>
  )
}
export default RestartGame;
