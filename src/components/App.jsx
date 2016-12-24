import React, { Component } from 'react';

import Game from './Game.jsx';
import '../styles/styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div className='page-header text-center appTitle'>
          <h1><strong>Resistance</strong></h1>
        </div>

        <Game />
        
      </div>
    )
  }
}

export default App;