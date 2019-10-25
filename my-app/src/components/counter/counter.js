import React from 'react';
import {connect} from 'react-redux';
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
const mapStateToProps = ({numMoves}) => {
  return {
    numMoves
  }
}
export default connect(mapStateToProps)(Counter);
