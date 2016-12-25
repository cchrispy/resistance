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
          <button className='btn btn-primary' onClick={ this.newRoom.bind(this) } >
            Create a room
          </button>
          <button className='btn btn-success' onClick={ this.joinRoom.bind(this) } >
            Join a room
          </button>
        </div>
      </div>
    )
  }
}

export default General;