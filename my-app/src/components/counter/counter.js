import React from 'react';

const Counter = (props) => {
  const {numMoves} = props;
  return (
    <div className='counter'>
      <span className='moves'>
        Moves: {numMoves}
      </span>
    </div>
  )
}
export default Counter;
