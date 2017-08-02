import React, { Component } from 'react';
import PropTypes from 'prop-types';

const GameWin = function(props){
   return(
      <div className="game-over">
         <h2>You win! Congratulations!</h2>
         <h5>Points: {props.points}</h5>
         <img src="http://vignette1.wikia.nocookie.net/suburgatory/images/5/52/Happy_face.jpg/revision/latest?cb=20120412051836" alt="Happy face" style={{marginTop : '2em'}} height="90" width="130"/>
      </div>
   );
}

GameWin.propTypes = {
  points : PropTypes.number.isRequired
};

export default GameWin;
