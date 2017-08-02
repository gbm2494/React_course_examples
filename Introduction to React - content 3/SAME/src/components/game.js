import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Game extends Component {

  constructor(props){
    super(props);
  }

  handleClick = (i,j) => {
    this.props.play(i,j);
  }

  render() {
    let result = [];
    for(var i = 0; i < this.props.data.length; i++){
      for(var j = 0; j < this.props.data[0].length; j++){

        result.push(
          <div
            key={i + '-' + j}
            className={"box " + "number" + this.props.data[i][j]}
            style={{top : (i * 2.5) + 10 + 'em' , left : (j * 2.5) + 32 + 'em' }}
            onClick={this.handleClick.bind(this,i,j)}
          >
          </div>
        );
    }
    }

    return (
      <div>
        {result}
      </div>
    );
  }
}

Game.propTypes = {
  play : PropTypes.func,
  data : PropTypes.array
};

export default Game;
