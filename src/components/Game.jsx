import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  newGame() {
    fetch('/game/new', {
      method: 'GET',
    }).then(res => {
      res.json().then(json => {
        console.log(json);
      })
    }).catch(err => {
      console.log('Error: ', err);
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <button className='btn btn-default' onClick={ this.newGame.bind(this) } >
          New Game
        </button>
      </div>
    )
  }
}

export default Game;