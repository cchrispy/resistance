import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
  general: state.general
});

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps)(App);