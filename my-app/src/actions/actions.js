const RENDER_CARDS = "RENDER_CARDS";
export const renderCards = ({showComp,cards,level,numTiles}) => {
  return {
    type: "RENDER_CARDS",
    showComp,
    cards,
    level,
    numTiles
  }
}
export const backHomePage = ({home,cards}) => {
  return {
    type: "BACK_HOME",
    home,
    cards
  }
}
export const firstFlip = ({card1flipped,card1,card1id}) => {
  return {
    type: "FIRST_FLIP",
    card1flipped,
    card1,
    card1id,

  }
}
export const secondFlip = ({card2flipped,card2,card2id}) => {
  return {
    type: "SECOND_FLIP",
    card2flipped,
    card2,
    card2id,
  }
}
export const hideMatchCards = ({card1,card2}) => {
  return {
    type: "HIDE_CARDS",
    card1,card2
  }
}
export const resetCards = () => {
  return {
    type: "HIDE_CARDS"
  }
}
export const turnCards = ({card1,card2}) => {
  return {
    type: "TURN_BACK_CARDS",
    card1,
    card2
  }
}
export const countCards = () => {
  return {
    type: "COUNT_CARDS"
  }
}
export const countFlipped = () => {
  return {
    type: "COUNT_FLIPPED"
  }
}
