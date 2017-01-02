import React, { Component } from 'react';

const Card = props => (
  
  <div className='col-lg-3 col-md-3 col-sm-4 text-center'>
    <div className='thumbnail'>

      <img src='http://bit.ly/2h7Hlin'/>
      <div className='caption'>
        <h4>You are { props.character } </h4>
        <p>And here is a description of you!! :O</p>
      </div>

    </div>
  </div>

)

export default Card;