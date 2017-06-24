import React, { Component } from 'react';

/*export default class Counter extends Component {
	constructor(props){
		super(props);
		this.state={value : 0};
  }

  render(){
      	return(
      		<div>
          Now the counter value is: {this.state.value}
      		<button onClick={this.incrementValue.bind(this)} className="btn btn-primary">Increment</button>
          </div>
      );
  }

  incrementValue(){
  this.setState({ value: this.state.value + 1 })
  }
}
*/

const List = function(props){
  return(
    <div>
    <h1>Technologies {props.name} have learned</h1>
      <ul>
        <li>ReactJS</li>
        <li>Angular</li>
        <li>Java</li>
        <li>Spring</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>SQL</li>
      </ul>
    </div>
  );
}

export default List;
