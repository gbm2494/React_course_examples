import React, { Component } from 'react';
import PropTypes from 'prop-types';

const GameOver = function(props){
   return(
      <div className="game-over">
         <h2>Game Over</h2>
         <h5>Points: {props.points}</h5>
         <img src="http://cliparting.com/wp-content/uploads/2016/11/Pix-for-big-sad-face-clipart-free-to-use-clip-art-resource.png" alt="Sad face" style={{marginTop : '2em'}} height="90" width="90"/>
      </div>
   );
}

GameOver.propTypes = {
    points : PropTypes.number.isRequired
};

export default GameOver;
