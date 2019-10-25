import React from 'react';
import { connect } from 'react-redux';

const RenderBoard = (props) => {
  const {cards,handleClick,renderCards,classLevel} = props;
  const tileItems = renderCards(cards);
  return (
    <div
      key={tileItems.id}
      className={classLevel}
      onClick={handleClick} >
      {tileItems}
    </div>
  )
}
const mapStateToProps = ({cards}) => {
  return  {
  cards
  }
}
export default connect(mapStateToProps)(RenderBoard);
