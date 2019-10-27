import React from 'react';
import Game from '../game'
import './win-message.css'

class WinMessage extends React.Component {
  // state = {
  //   backToMenu: false
  // }
  // handleClick = () => {
  //   this.setState({
  //     backToMenu: true
  //   })
  // }
  render() {
    const {numMoves,returnHome} = this.props;
    // const {backToMenu} = this.state;
    // const {numMoves} = this.props;
    // if(backToMenu) {
    //   return <Game/>
    // }
    return(
      <div className='win-message-container'>
        <h2 className="message-heading">Congratulate!</h2>
        <p className="message">You won the round in {numMoves} moves. Go you.</p>
        <button onClick={returnHome} className="turn-button">Play again?</button>
      </div>
    )
  }
}

export default WinMessage;
