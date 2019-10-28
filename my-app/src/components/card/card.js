import React from 'react'
import RenderBoard from '../render-board';
import RestartGame from '../restart-game';
import Counter from '../counter';
import WinMessage from '../win-message';
import Game from '../game';
import { firstFlip,secondFlip, hideMatchCards,countCards, turnCards, countFlipped, backHomePage, winGame} from '../../actions';
import { connect } from 'react-redux';

import './card.css';

class Card extends React.Component {
  gameCounter = () => {
    this.props.countCards();
  }
  renderCards = (arr) => {
    return arr.map(({id,img},index) => {
      return (
        <div
          key={index}
          className="tile"
          id={id}>
          <div className='backskirt'></div>
          <img alt="" src={img}/>
        </div>
      )
    })
  }
  goHome = () => {
    this.props.backHomePage();
  }
  gameCardsMissMatch = () => {
    this.props.turnCards();
    this.gameCounter();
  }
  gameCardsMatch = async () => {
    this.props.hideMatchCards();
    this.gameCounter();
    this.props.countFlipped();
    if(this.props.flippedTiles === this.props.numTiles) {
      this.gameWin();
    } else {
      console.log(this.props.flippedTiles,this.props.numTiles);
    }
  }
  gameWin = () => {
    this.props.winGame();
  }
  firstFlip = (card1,card1id) => {
    this.props.firstFlip({
      card1,
      card1id
    })
  }
  secondFlip = (card2,card2id) => {
     this.props.secondFlip({
      card2,
      card2id
    })
  }
  handleClick = async (event) => {
    const target = event.target;
    if(!target.closest('.tile')) {
      return;
    } else {
        const targetTile = event.target.closest('.tile');
        const targetTileId = targetTile.id;
        if(!targetTile.classList.contains('flipped')) {
          if(!this.props.card1flipped && !this.props.card2flipped) {
            targetTile.classList.add('flipped');
            await this.firstFlip(targetTile,targetTileId);
          } else if(this.props.card1flipped && !this.props.card2flipped) {
              targetTile.classList.add('flipped');
              await this.secondFlip(targetTile,targetTileId);
              if(this.props.card1id === this.props.card2id) {
                this.gameCardsMatch();
              }
              else {
                this.gameCardsMissMatch();
              }
            }
        }
      }
  }
  render() {
    const {tiles,level,home,win,numMoves} = this.props;
    if(home) {
      return <Game/>
    }
    let selectedLevel = level.classList.contains('level-one') ? "contents-game level-1":"contents-game level-2";
    if(win) {
      return <WinMessage
              returnHome={this.goHome}
              numMoves={numMoves}
              endGame={this.endGame} />
    }
    return (
      <div className='container'>
        <Counter />
        <RestartGame
          returnHome={this.goHome}/>
        <RenderBoard
          renderCards={this.renderCards}
          classLevel={selectedLevel}
          handleClick={this.handleClick}
          cards={tiles}
          />
      </div>
    )
  }
}
const mapStateToProps = ({
  showComp,
  cards,
  level,
  numTiles,
  card1,
  card2,
  card2id,
  card1id,
  card1flipped,
  card2flipped,
  flippedTiles,
  numMoves,
  home,
  endGame,
  win

}) => {
  return {
    showComp,
    cards,
    level,
    numTiles,
    card1,
    card2,
    card2id,
    card1id,
    card1flipped,
    card2flipped,
    flippedTiles,
    numMoves,
    home,
    endGame,
    win
  }
}
const mapDispatchToProps = {
  firstFlip,
  secondFlip,
  hideMatchCards,
  countCards,
  turnCards,
  countFlipped,
  backHomePage,
  winGame
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);
