import React from 'react'
import Card from './Card'
import arr from './cards'
import image01 from './cards'
import './card.css'

const tiles = arr;
const stylesHeading = {
  marginBottom: "10px",
  color:'#282a2f',
  fontSize: '30px',
}
const rules = {
  marginBottom: '20px',
  fontSize: '30px',
  display: 'block'
}

const containerMenu = {
  textAlign: 'center',
  padding: '80px 20px'
}
const startButtonStyle = {
    display: 'inline-block',
    padding: '5px',
    color: '#fff',
    fontFamily: 'Indie Flower, cursive',
    fontSize: '14px',
    appearance: 'none',
    background: '#483D8B',
    border: 'none',
    borderRadius: '3px',
    boxShadow: 'none',
    cursor: 'pointer',
    width: '100px',
    height: '30px'
}
const levelSelect = {
    color: '#800080',
    fontSize: '30px',
    cursor: 'pointer',
}
class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComp: false,
      cards: [],
      level:"",
      home: false
    }
    this.renderCards = this.renderCards.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.multipliedCards = this.multipliedCards.bind(this);
    this.homePage = this.homePage.bind(this);
  }
  static getDerivedStateFromProps(props, state) {

  console.log(state)

}
  componentDidMount() {
    this.setState({
      cards: this.shuffle(this.multipliedCards(tiles))
    })
  }
  homePage(){
    this.setState({
      home: true,
      cards: ''
    })
  }
  multipliedCards(a) {
    let duplicatedArr = []
    a.forEach(tile => duplicatedArr.push(tile,tile))
    return duplicatedArr
  }
  shuffle(b) {
    for(var j, temp, i=b.length; i; j=parseInt(Math.random()*i),temp=b[--i],b[i]=b[j],b[j]=temp);
      return b;
  }
  renderCards(e) {
    if(e.target.classList.contains('level-one')) {
      let numCardsFirstLevel = [];
      for(let i = 0;i<4;i++) {
        numCardsFirstLevel.push(this.state.cards[i],this.state.cards[i])
      }
      this.setState({
        showComp: true,
        cards: this.shuffle(numCardsFirstLevel),
        level: e.target
      })
    }
    if(e.target.classList.contains('level-two')) {
      let numCardsSecondLevel = [];
      for(let i = 0;i<9;i++) {
        numCardsSecondLevel.push(this.state.cards[i],this.state.cards[i])
      }
      this.setState({
        showComp: true,
        cards: this.shuffle(numCardsSecondLevel),
        level: e.target
      })
    }
  }
  render() {
    if(this.state.home) {
      return <Game/>
    }
    if(this.state.showComp) {
      return <Card getBack={this.homePage} checkedLevel={this.state.level} tiles={this.state.cards}/>
    }
    const matchGame = <h2 className='start-screen-heading' style={stylesHeading}>Its my match-match game</h2>;
    const gameRules = <p className='game-rules' style={rules}>Flip the tiles and try to match them up in pairs. Pair up all the tiles to win. Try to complete the game in as few moves as possible!</p>
    const startButton = <button className='turn-button'  >Try again</button>
    return(
      <div className='start-screen' style={containerMenu}>
        {matchGame}
        {gameRules}
        <ul onClick={this.renderCards}>
          <li ><span className='level-one' style={levelSelect}>Level 1</span></li>
          <li ><span className='level-two' style={levelSelect}>Level 2</span></li>
        </ul>
      </div>
    )
  }
}

export default Game;
