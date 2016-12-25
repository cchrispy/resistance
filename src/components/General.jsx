import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeRoom, changePlayerCount, changePlayerName } from '../actions/generalAction';

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newRoomFormVisibility: false,
      joinRoomFormVisibility: false,
      newRoomForm: {
        username: '',
        roomname: '',
        playerCount: 5
      },
      joinRoomForm: {
        username: '',
        roomname: ''
      }
    };
  }

  newRoomToggle(e) {
    e.preventDefault();
    this.setState({
      newRoomFormVisibility: !this.state.newRoomFormVisibility,
      joinRoomFormVisibility: false
    })
  }

  joinRoomToggle(e) {
    e.preventDefault();
    this.setState({
      newRoomFormVisibility: false,
      joinRoomFormVisibility: !this.state.joinRoomFormVisibility
    })
  }

  newRoomForm(e, input) {
    e.preventDefault();
    this.setState({
      newRoomForm: Object.assign(this.state.newRoomForm, {
        [input]: e.target.value
      })
    })
  }

  joinRoomForm(e, input) {
    e.preventDefault();
    this.setState({
      joinRoomForm: Object.assign(this.state.joinRoomForm, {
        [input]: e.target.value
      })
    })
  }

  newRoom(e) {
    e.preventDefault();

    /*
    ** Send username, roomname, playerCount to server to generate the cards
    */
    fetch('/game/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.newRoomForm.username,
        roomname: this.state.newRoomForm.roomname,
        playerCount: this.state.newRoomForm.playerCount
      })
    }).then(response => {
      response.json().then(res => {
        if (response.status === 201) {

          console.log('Room created. Cards generated.', res);

          /*
          ** Update the redux store with the username, roomname, playerCount
          */
          this.props.changeUser(this.state.newRoomForm.username);
          this.props.changeRoom(this.state.newRoomForm.roomname);
          this.props.changePlayerCount(this.state.newRoomForm.playerCount);

        } else {
          console.log('Failed to create room. Try again.');
        }
      }).catch(err => {
        console.log('Failure: ', err);
      })
    })
  }

  joinRoom(e) {
    e.preventDefault();

    /*
    ** Sends username, roomname to server to check if the room exists
    */
    fetch('/game/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.joinRoomForm.username,
        roomname: this.state.joinRoomForm.roomname
      })
    }).then(response => {
      response.json().then(res => {
        if (response.status === 200) {

          console.log('Room joined successfully.');

          /*
          ** Update the redux store with the username and roomname
          */
          this.props.changeUser(this.state.joinRoomForm.username);
          this.props.changeRoom(this.state.joinRoomForm.roomname);
        } else {
          console.log('Failed to join room. Try again.');
        }
      })
    }).catch(err => {
      console.log('Failure: ', err);
    })

  }

  render() {
    return (
      <div id='general'>
        <div>

          <button type='button' className='btn btn-lg btn-block btn-primary' onClick={ this.newRoomToggle.bind(this) } >
            Create a room
          </button>
          { !this.state.newRoomFormVisibility ? null :
            <form className='form-inline' onSubmit={ this.newRoom.bind(this) }>
              <div className='form-group'>
                <label>Username: </label>
                <input type='text' 
                       className='form-control' 
                       placeholder={ Math.random() > 0.25 ? 'Schwarzenegger' : 'Keanu Reeves' } 
                       onChange={ (e) => this.newRoomForm(e, 'username') } />
              </div>
              <div className='form-group'>
                <label>Room name: </label>
                <input type='text' 
                       className='form-control' 
                       placeholder={ Math.random() > 0.25 ? 'Planet Earth' : 'Lala Land' }
                       onChange={ (e) => this.newRoomForm(e, 'roomname') } />
              </div>
              <div className='form-group'>
                <label>Number of Players: </label>
                <select className='form-control' 
                        placeholder='5' 
                        onChange={ (e) => this.newRoomForm(e, 'playerCount') } >
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <button type='submit' className='btn btn-default'>
                  Create
                </button>
              </div>
            </form>
          }

          <button type='button' className='btn btn-lg btn-block btn-success' onClick={ this.joinRoomToggle.bind(this) } >
            Join a room
          </button>
          {
            !this.state.joinRoomFormVisibility ? null :
            <form className='form-inline' onSubmit={ this.joinRoom.bind(this) } >
              <div className='form-group'>
                <label>Username: </label>
                <input type='text' 
                       className='form-control' 
                       placeholder={ Math.random() > 0.05 ? 'Schwarzenegger' : 'Keanu Reeves' }
                       onChange={ (e) => this.joinRoomForm(e, 'username') } />
              </div>
              <div className='form-group'>
                <label>Room name: </label>
                <input type='text' 
                       className='form-control' 
                       placeholder={ Math.random() > 0.05 ? 'Planet Earth' : 'Lala Land' }
                       onChange={ (e) => this.joinRoomForm(e, 'roomname') } />
              </div>
              <button type='submit' className='btn btn-default'>
                Join
              </button>
            </form>
          }

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  username: state.general.username,
  roomname: state.general.roomname,
  playerCount: state.general.playerCount
})

const mapDispatchToProps = dispatch => ({
  changeUser: username => {
    dispatch(changePlayerName(username));
  },
  changeRoom: roomname => {
    dispatch(changeRoom(roomname));
  },
  changePlayerCount: playerCount => {
    dispatch(changePlayerCount(playerCount));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(General);