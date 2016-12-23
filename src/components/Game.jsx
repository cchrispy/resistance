import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clicked() {
    fetch('/game', {
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
        <button className='btn btn-default' onClick={ this.clicked.bind(this) } >
          click dis button
        </button>
      </div>
    )
  }
}

export default Game;