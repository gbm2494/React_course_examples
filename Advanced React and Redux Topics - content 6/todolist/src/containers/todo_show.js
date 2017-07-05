import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodoShow extends Component{
  render(){
    return (
      <div>Show</div>
    );
  }
}

export default connect(null)(TodoShow);
