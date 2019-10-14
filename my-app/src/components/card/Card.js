import React from 'react'
import ReactDOM from 'react-dom'
import arr from './cards'
import image01 from './cards'
import './card.css'
import Game from './Game'
const buttonRestart = {
  margin: 0,
  display: 'inline-block',
  padding: '5px',
  color:'#fff',
  fontFamily: 'Indie Flower, cursive',
  fontSize: '14px',
  appearance: 'none',
  background: '#483D8B',
  border: 'none',
  borderRadius: '3px',
  boxShadow: 'none',
  cursor: 'pointer',
}
const containerRestart = {
  position: 'absolute',
  top: '4%',
  right: '15%'
}
const counterStyle = {

}
class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shuffleArr: this.shuffle(arr),
      storageCards: {
        card1: null,
        card2: null,
        card2id: null,
        card1id: null,
        card1flipped: false,
        card2flipped: false,
        numTiles: 0,
        flippedTiles: 0,
        reset: function () {
          this.card1 = null;
          this.card2 = null;
          this.card2id = null;
          this.card1id = null;
          this.card1flipped = false;
          this.card2flipped = false;

          }
      },
      cards: arr,
      gridX: '',
      gridY:'',
      level:1,
      numMoves:0,
      flippedTiles:0,
      home: false
    }
    this.gameCounter = this.gameCounter.bind(this);
    this.gameCardsMatch = this.gameCardsMatch.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  shuffle(arr) {
    for(let j, temp, i=arr.length; i; j=parseInt(Math.random()*i),temp=arr[--i],arr[i]=arr[j],arr[j]=temp);
        return arr;
  }
  gameCounter() {
    this.setState(function(state) {
      return {
        numMoves: state.numMoves+1
      }
    })
  }
  gameCardsMatch() {
    const storage = this.state.storageCards;
    setTimeout(function() {
      storage.card1 = storage.card1.classList.add('hide');
      storage.card2 = storage.card2.classList.add('hide');
      storage.reset();
    },1000);

    this.setState(function(state){
      return {
      storageCards:storage,
      flippedTiles: state.flippedTiles+2
    }
  })
    this.gameCounter();
}
  gameCardsMissMatch() {
    const storage = this.state.storageCards
    setTimeout(function() {
      storage.card1 = storage.card1.classList.remove('flipped');
      storage.card2 = storage.card2.classList.remove('flipped');
      storage.reset();
    }, 900);
    this.setState({storageCards:storage})
    this.gameCounter();
  }
  handleClick(e) {
    e.preventDefault();
    const storage = this.state.storageCards;
    const targetTile = e.target.closest('.tile');
    if(!targetTile.classList.contains('flipped')) {
      if(storage.card1flipped===false && storage.card2flipped === false) {
        targetTile.classList.add('flipped');
        storage.card1flipped = true;
        storage.card1 = targetTile;
        storage.card1id = targetTile.id;
        this.setState({
          storageCards: storage
        })
      } else if(storage.card1flipped===true && storage.card2flipped===false) {
          targetTile.classList.add('flipped');
          storage.card2flipped = true;
          storage.card2 = targetTile;
          storage.card2id = targetTile.id;
          if(storage.card1id === storage.card2id) {
            this.gameCardsMatch();
          } else {
            this.gameCardsMissMatch();
          }
        this.setState({
          storageCards: storage
        })

      }
    }
  }

  render() {
  
    const cards = this.props.tiles;
    const getBack = this.props.getBack;
    console.log(getBack);
    let selectedLevel = this.props.checkedLevel.classList.contains('level-one') ? "contents-game level-1":"contents-game";
    let numMoves = this.state.numMoves;
    let counter = <div className='counter'>
                    <span className='moves'>
                      Moves: {this.state.numMoves}
                    </span>
                  </div>
    return (
      <div className='container'>
        <Counter numMoves={numMoves}/>
        <RestartGame returnHome={getBack} homePage={this.homePage}/>
        <RenderBoard class={selectedLevel} handleClick={this.handleClick} cards={cards}/>
      </div>
    )
  }
}
function RestartGame(props) {
  return(
  <div style={containerRestart} className='restart-game'>
    <button
      onClick={props.returnHome}
      style={buttonRestart}
      className='restart-game'>
      Try again
    </button>
  </div>
)
}
function Counter(props) {
  return (
  <div className='counter'>
    <span className='moves'>
      Moves: {props.numMoves}
    </span>
  </div>
)
}
function RenderBoard(props) {
  const cards = props.cards;
  const tileItems = cards.map((card,index) =>
    <div key={index}
         className='tile'
         id={card.id}
         onClick={props.handleClick}
         >
      <div className='backskirt'></div>
      <img src={card.img}/>
    </div>
  );
  return (
    <div className={props.class}>
      {tileItems}
    </div>
  )
}
export default Card
