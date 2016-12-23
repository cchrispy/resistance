import React, { Component } from 'react';
import Card from './Card.jsx';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: 'Unknown'
    };
  }

  newGame() {
    fetch('/game/new', {
      method: 'GET',
    }).then(res => {
      console.log('Status code: ', res.status);
      res.json().then(json => {
        this.setState({
          character: json.card
        })
      })
    }).catch(err => {
      console.log('Error: ', err);
    });
  }

  render() {
    return (
      <div id='game'>
        <button className='btn btn-default' onClick={ this.newGame.bind(this) } >
          New Game
        </button>

        <div className='container-fluid'>
          <div className='row'>
            <Card character={ this.state.character }/>
            <Card character={ this.state.character }/>
            <Card character={ this.state.character }/>
            <Card character={ this.state.character }/>
            <Card character={ this.state.character }/>
            <Card character={ this.state.character }/>
            <Card character={ this.state.character }/>
          </div>
        </div>

      </div>
    )
  }
}

export default Game;