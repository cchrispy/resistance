import React, { Component } from 'react';
import { connect } from 'react-redux';

import General from './General.jsx';
import Card from './Card.jsx';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: 'Unknown',
      roomname: '',
      playerCount: 0,
    };
  }

  newGame(event) {
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

    event.preventDefault();

    /* Tells server to generate cards appropriate for the number of players */

    fetch('/game/new', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "roomname": this.state.roomname,
        "playerCount": this.state.playerCount
      })
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log('Error: ', err);
    });

  }

  revealCard() {

    /* Server selects a random card and sends it to the client */
    /* A user can only query the server for a card one time    */

    fetch('/game/new', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res);
      res.json().then(results => {
        console.log(results);
      })
    }).catch(err => {
      console.log('Error: ', err);
    });
  }

  change(event, parameter) {
    event.preventDefault();
    this.setState({ [parameter]: event.target.value });
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

        <General />

        <button className='btn btn-default' onClick={ this.newGame.bind(this) } >
          New Game
        </button>

        <button className='btn btn-default' onClick={ this.revealCard.bind(this) } >
          Reveal Card
        </button>

      <form onSubmit={ this.newGame.bind(this) }>
        <label>
          Room Name:
          <input type="text" onChange={event => { this.change(event, 'roomname')} }  />
          Player Count:
          <input type="text" onChange={event => { this.change(event, 'playerCount')} }  />
        </label>
        <input type="submit" value="Submit" />
      </form>

        <div className='container-fluid'>
          <div className='row'>
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

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default Game;
