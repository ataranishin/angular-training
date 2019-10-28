import { initialCards } from '../components/card';
import {
  COUNT_CARDS,
  COUNT_FLIPPED,
  WIN_GAME,BACK_HOME,
  HIDE_CARDS,
  RENDER_CARDS,
  FIRST_FLIP,
  SECOND_FLIP,
  TURN_BACK_CARDS
} from '../constants/game';

const initialState = {
  showComp: false,
  cards: initialCards,
  level:"",
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
  endGame: false,
  win: false
}

const reducer = (state=initialState,action) => {
  switch(action.type) {
    case RENDER_CARDS:
      const {cards,level,numTiles} = action
      return {
        ...state,
        cards,
        level,
        numTiles,
        showComp: true,
        home: false
      }
    case BACK_HOME:
      return {
        ...state,
        home: true,
        showComp: false,
        cards:initialCards,
        win:false,
        numMoves:0,
        flippedTiles: 0
      }
    case FIRST_FLIP:
      return {
        ...state,
        card1flipped:true,
        card1: action.card1,
        card1id:action.card1id,
      }
    case SECOND_FLIP:
      return {
        ...state,
        card2flipped:true,
        card2:action.card2,
        card2id: action.card2id,
      }
    case HIDE_CARDS:
      return {
        ...state,
        card1: state.card1.classList.add('hide'),
        card2: state.card2.classList.add('hide'),
        card1flipped: false,
        card2flipped: false,
        card1id: null,
        card2id: null,
      }
    case TURN_BACK_CARDS:
      return {
        ...state,
        card1: state.card1.classList.remove('flipped'),
        card2: state.card2.classList.remove('flipped'),
        card1flipped: false,
        card2flipped: false,
        card1id: null,
        card2id: null
      }

    case COUNT_CARDS:
      return {
        ...state,
        numMoves: state.numMoves+1
      }
    case COUNT_FLIPPED:
      return {
        ...state,
        flippedTiles: state.flippedTiles+2
      }
    case WIN_GAME:
      return {
        ...state,
        win: true
      }
    default:
      return state
  }
}
export default reducer;
