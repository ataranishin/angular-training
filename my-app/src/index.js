import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game'
import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(<Provider store={store}><Game/></Provider>, document.getElementById('root'));
