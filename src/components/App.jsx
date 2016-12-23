import React, { Component } from 'react';
import '../styles/styles.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='page-header text-center appTitle'>
          <h1><strong>Resistance</strong></h1>
        </div>
      </div>
    )
  }
}

export default App;