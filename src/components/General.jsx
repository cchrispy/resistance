import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      newRoomForm: {
        [input]: e.target.value
      }
    })
  }

  joinRoomForm(e, input) {
    e.preventDefault();
    this.setState({
      joinRoomForm: {
        [input]: e.target.value
      }
    })
  }

  newRoom(e) {
    e.preventDefault();
    console.log(this.state.newRoomForm);
  }

  joinRoom(e) {
    e.preventDefault();
    console.log(this.state.joinRoomForm);
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
            <form className='form-inline'>
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
              <button type='button' className='btn btn-default'>
                Join
              </button>
            </form>
          }

        </div>
      </div>
    )
  }
}

export default General;