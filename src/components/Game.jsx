import React, { Component } from 'react';
import Card from './Card.jsx';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: 'Unknown',
      roomName: '',
      playerCount: 0,
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
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: {
        roomName: this.state.roomName,
        playerCount: this.state.playerCount
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log('Error: ', err);
    });

  }

  changeRoom(event) {
    // event.preventDefault();
    this.setState({ roomName: event.target.value });
    console.log(event.target.value)
  }

  changeCount(event) {
    // event.preventDefault();
    this.setState({ playerCount: event.target.value });
    console.log(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('A name was submitted: ' + this.state);

    fetch('/game/new', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: {
        roomName: this.state.roomName,
        playerCount: this.state.playerCount
      }
    }).then(res => {
      console.log(res)
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

    // post to game/new
    // headers: application.type = app json; body format
  }

  render() {
    return (
      <div id='game'>
        <button className='btn btn-default' onClick={ this.newGame.bind(this) } >
          New Game
        </button>

      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          Room Name:
          <input type="text" onChange={this.changeRoom.bind(this)} />
          Player Count:
          <input type="text" onChange={this.changeCount.bind(this)} />
        </label>
        <input type="submit" value="Submit" />
      </form>

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