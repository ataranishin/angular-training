import React from 'react';
import Game from '../game'
import { containerRestart, buttonRestart } from '../styles-object';
import { connect } from 'react-redux';
import { backHomePage } from '../../actions';
class RestartGame extends React.Component {
  backHomePage = () => {
    this.props.backHomePage();
  }
  render() {

  const {returnHome} = this.props;
  const restartText = 'Try again';
  return (
    <div style={containerRestart} className='restart-game'>
      <button
        onClick={returnHome}
        style={buttonRestart}
        className='restart-game'>
        {restartText}
      </button>
    </div>
  )
}
}
const mapStateToProps = ({home}) => {
  return {
    home
  }
}
const mapDispatchToProps = {
  backHomePage
}
export default connect(mapStateToProps,mapDispatchToProps)(RestartGame);
