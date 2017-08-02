import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Score = function(props){
   return(
      <div>
         <h5>Points: {props.score}</h5>
      </div>
   );
}

Score.propTypes = {
  score : PropTypes.number.isRequired
};

export default Score;
