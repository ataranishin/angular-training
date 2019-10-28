import {COUNT_CARDS,COUNT_FLIPPED,WIN_GAME,BACK_HOME,HIDE_CARDS,RENDER_CARDS,FIRST_FLIP,SECOND_FLIP,TURN_BACK_CARDS} from '../constants/game'

export const countCards = () => ({type: COUNT_CARDS});
export const countFlipped = () => ({type: COUNT_FLIPPED});
export const winGame = () => (dispatch)=> {
  setTimeout(() => dispatch({
    type: WIN_GAME,
  }),2000)
}
export const backHomePage = () => ({type: BACK_HOME});
export const renderCards = ({showComp,cards,level,numTiles}) => ({
    type: RENDER_CARDS,
    cards,
    level,
    numTiles
})
export const firstFlip = ({card1flipped,card1,card1id}) => ({
    type: FIRST_FLIP,
    card1flipped,
    card1,
    card1id,
})
export const secondFlip = ({card2flipped,card2,card2id}) => ({
    type: SECOND_FLIP,
    card2flipped,
    card2,
    card2id,
})
export const hideMatchCards = () => (dispatch) => {
  setTimeout(() => dispatch({
    type: HIDE_CARDS,
  }),2000)
}
export const turnCards = () => (dispatch) => {
  setTimeout(() => dispatch({
    type: TURN_BACK_CARDS,
  }),2000)
}
