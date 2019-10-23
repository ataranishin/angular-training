import React from 'react'
import RenderBoard from '../render-board';
import RestartGame from '../restart-game';
import Counter from '../counter';
import WinMessage from '../win-message';
import Game from '../game';

import './card.css';

export default class Card extends React.Component {
  state = {
    card1: null,
    card2: null,
    card2id: null,
    card1id: null,
    card1flipped: false,
    card2flipped: false,
    numTiles: 0,
    flippedTiles: 0,
    numMoves:0,
    home: false,
    endGame: false
  }
  gameCounter = () => {
    this.setState({
      numMoves: this.state.numMoves + 1
    })
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
  gameCardsMatch = async () => {
    const {numTiles} = this.props;
    await setTimeout(() => {
      this.setState({
        card1: this.state.card1.classList.add('hide'),
        card2: this.state.card2.classList.add('hide'),
      });
      this.resetState();
    },2000);
    this.countFlippedTiles();
    this.compareFlippedAndNumTiles(numTiles);
    this.gameCounter();
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
      this.setState({
        card1: this.state.card1.classList.remove('flipped'),
        card2: this.state.card2.classList.remove('flipped'),
      })
      this.resetState();
    },2000);
      this.gameCounter();
  }
  gameWin = () => {
    this.setState({
      win:true
    })
  }
  resetState = () => {
    this.setState({
      card1: null,
      card2: null,
      card2id: null,
      card1id: null,
      card1flipped: false,
      card2flipped: false,
    });
  }
  handleClick = async (event) => {
    const targetTile = event.target.closest('.tile');
    const targetTileId = targetTile.id;
    if(!targetTile.classList.contains('flipped')) {
      if(!this.state.card1flipped && !this.state.card2flipped) {
        targetTile.classList.add('flipped');
        await this.setState(prevState => ({
          card1flipped: true,
          card1: targetTile,
          card1id: targetTileId
        }))
      } else if(this.state.card1flipped && !this.state.card2flipped) {
          targetTile.classList.add('flipped');
          await this.setState(prevState => ({
            card2: targetTile,
            card2flipped: true,
            card2id: targetTileId
          }))
          if(this.state.card1id === this.state.card2id) {
            this.gameCardsMatch()
          } else {
            this.gameCardsMissMatch();
          }
        }
    }
  }
  render() {
    const {tiles,getBack,checkedLevel} = this.props;
    const {numMoves,win,endGame} = this.state
    let selectedLevel = checkedLevel.classList.contains('level-one') ? "contents-game level-1":"contents-game level-2";
    if(win) {
      return <WinMessage numMoves={numMoves} endGame={this.endGame} stateCards={this.state} />
    }
    if(endGame) {
      return <Game/>
    }
    return (
      <div className='container'>
        <Counter numMoves={numMoves}/>
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
