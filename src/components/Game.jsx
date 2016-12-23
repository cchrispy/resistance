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
    /*
    ** Should trigger a prompt to ask 
    ** for the room name and
    ** the number of players.
    */


    /*
    ** TEMPORARY SERVER REQUEST                 ****
    ** JUST TO SEE IF THINGS WORK               ****
    ** REMOVE LATER                             ****
    ************************************************
    ** This function should prompt users to
    ** create a room and input the # of players
    */
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

  prompt() {
    /*
    ** Prompt the user to specify a room name
    ** and enter the number of players to join
    ** Send the results to the server
    */
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