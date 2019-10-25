import React from 'react'
import RenderBoard from '../render-board';
import RestartGame from '../restart-game';
import Counter from '../counter';
import WinMessage from '../win-message';
import Game from '../game';
import { firstFlip,secondFlip, hideMatchCards,resetCards,countCards, turnCards, countFlipped} from '../../actions';
import { connect } from 'react-redux';

import './card.css';

class Card extends React.Component {
  // state = {
  //   card1: null,
  //   card2: null,
  //   card2id: null,
  //   card1id: null,
  //   card1flipped: false,
  //   card2flipped: false,
  //   numTiles: 0,
  //   flippedTiles: 0,
  //   numMoves:0,
  //   home: false,
  //   endGame: false
  // }
  gameCounter = () => {
    this.props.countCards();
  }
  componentDidUpdate() {
    console.log(this.props.flippedTiles);
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
  compareFlippedAndNumTiles = (numTiles) => {
    if(this.state.flippedTiles === numTiles) {
      setTimeout(() => {
        this.gameWin();
    },2000)
    }
  }
  resetFlippedTiles = () => {
    this.setState({
      flippedTiles: 0
    })
    console.log(this.state);
  }
  endGame = () => {
    this.setState({
      winGame: true,
      flippedTiles: 0
    })
  }
  countFlippedTiles = () => {
    this.setState({
      flippedTiles: this.state.flippedTiles+2
    })
  }
  gameCardsMissMatch = () => {
    setTimeout(() => {
      this.props.turnCards({
        card1: this.props.card1,
        card2: this.props.card2
      })
    },1500)
    this.gameCounter();
  }
  gameCardsMatch = async () => {
     await setTimeout(() => {
      this.props.hideMatchCards({
        card1: this.props.card1,
        card2: this.props.card2
      })
      // this.resetState();
    },2000)
    this.gameCounter();
    this.props.countFlipped();
  }
  gameWin = () => {
    this.setState({
      win:true
    })
  }
  resetState = () => {
    this.props.resetCards()
  }
  handleClick = async (event) => {
    const targetTile = event.target.closest('.tile');
    const targetTileId = targetTile.id;
    if(!targetTile.classList.contains('flipped')) {
      if(!this.props.card1flipped && !this.props.card2flipped) {
        targetTile.classList.add('flipped');
        await this.props.firstFlip({
          card1flipped: true,
          card1: targetTile,
          card1id: targetTileId
        })
      } else if(this.props.card1flipped && !this.props.card2flipped) {
          targetTile.classList.add('flipped');
          await this.props.secondFlip({
              card2flipped: true,
              card2: targetTile,
              card2id: targetTileId
            })
          if(this.props.card1id === this.props.card2id) {
            this.gameCardsMatch();
          }
          else {
            this.gameCardsMissMatch();
          }
        }


    }
  }


  render() {
    const {tiles,getBack,checkedLevel} = this.props;
    // const {numMoves,win,endGame} = this.state
    let selectedLevel = this.props.level.classList.contains('level-one') ? "contents-game level-1":"contents-game level-2";
    // if(win) {
    //   return <WinMessage  endGame={this.endGame} stateCards={this.state} />
    // }
    // if(endGame) {
    //   return <Game/>
    // }
    return (
      <div className='container'>
        <Counter />
        <RestartGame
          returnHome={getBack}
          homePage={this.homePage}/>
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
    numTiles,
    flippedTiles,
    numMoves,
    home,
    endGame
  }
}
const mapDispatchToProps = {
  firstFlip,
  secondFlip,
  hideMatchCards,
  resetCards,
  countCards,
  turnCards,
  countFlipped
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);
