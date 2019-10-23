import React from 'react';

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
export default RenderBoard;
