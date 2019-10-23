import React from 'react';
import Card from '../card';
import StartMenu from '../start-menu';
import ChooseLevel from '../choose-level';
import './game.css';
import { initialCards } from '../card';

export default class Game extends React.Component {
  state = {
    showComp: false,
    cards: initialCards,
    level:"",
    home: false,
    numTiles: null
  }
  homePage = () => {
    this.setState({
      home: true,
      cards: ''
    })
  }
  shuffle = (arr) => {
    const last = arr.length-1;
    for(let i = last; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  renderCardsBoard = (e) => {
    const targetLevel = e.target.getAttribute('data-level');
    const gridX = targetLevel * 2 + 2;
    const gridY = gridX / 2;
    const numTiles = gridX * gridY;
    const halfNumTiles = numTiles / 2;
    let newCards = [];
    for(let i = 0; i < halfNumTiles;i++) {
      newCards.push(this.state.cards[i],this.state.cards[i]);
    }
    newCards = this.shuffle(newCards);
    this.setState({
      showComp: true,
      cards: newCards,
      level: e.target,
      numTiles: numTiles
    })
  }
  render() {
    const {numTiles} = this.state;
    if(this.state.home) {
      return <Game/>
    }
    if(this.state.showComp) {
      return <Card numTiles={numTiles} getBack={this.homePage} checkedLevel={this.state.level} tiles={this.state.cards}/>
    }
    return (
      <div className='start-screen'>
        <StartMenu/>
        <ChooseLevel renderCardsBoard={this.renderCardsBoard}/>
      </div>
    )
  }
}
