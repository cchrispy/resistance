import React, { Component } from 'react';
import { connect } from 'react-redux';

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newRoomForm: false,
      joinRoomForm: false
    };
  }

  newRoom(e) {
    e.preventDefault();
    this.setState({
      newRoomForm: true,
      joinRoomForm: false
    })
  }

  joinRoom(e) {
    e.preventDefault();
    this.setState({
      newRoomForm: false,
      joinRoomForm: true
    })
  }

  render() {
    return (
      <div>
        <div>

          <button type='button' className='btn btn-lg btn-block btn-primary' onClick={ this.newRoom.bind(this) } >
            Create a room
          </button>
          { !this.state.newRoomForm ? null :
            <form className='form-inline'>
              <div className='form-group'>
                <label>Username </label>
                <input type='text' className='form-control' placeholder='Cauf E.' />
              </div>
              <div className='form-group'>
                <label>Room name </label>
                <input type='text' className='form-control' placeholder='Lala Land' />
              </div>
              <div className='form-group'>
                <label>Number of Players </label>
                <input type='text' className='form-control' placeholder='6' />
              </div>
            </form>
          }

          <button type='button' className='btn btn-lg btn-block btn-success' onClick={ this.joinRoom.bind(this) } >
            Join a room
          </button>

        </div>
      </div>
    )
  }
}

export default General;