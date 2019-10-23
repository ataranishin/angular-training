import React from 'react';
import './choose-level.css';

const ChooseLevel = (props) => {
  const {renderCardsBoard} = props;
  return (
    <ul onClick={renderCardsBoard}>
      <li >
        <span data-level='1' className='level-one'>Level 1</span>
      </li>
      <li>
        <span data-level='2' className='level-two'>Level 2</span>
      </li>
    </ul>
  )
}
export default ChooseLevel;
