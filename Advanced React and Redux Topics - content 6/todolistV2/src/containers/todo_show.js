import React, {Component} from 'react';
import {connect} from 'react-redux';
import Jumbotron from '../components/jumbotron';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import {fetchTodo, deleteTodo} from '../actions';

class TodoShow extends Component{
  //Method to load redux state after all component was mounted
  componentDidMount(){
    //react router provides URL information
    const {id} = this.props.match.params;
    this.props.fetchTodo(id);
  }

  //Method to handle deleteTodo action
  onDeleteTodo(){
  const {id} = this.props.match.params;

    this.props.deleteTodo(id, () => {
      this.props.history.push('/todos');
    });
  }

  //Method to render the component on the browser
  render(){
    const {selectedTodo} = this.props;

    if(!selectedTodo){
        return <div>Loading...</div>;
    }

    return (
      <div>
        <Jumbotron title="TODO List Application"/>
        <div className="todo_show">
          <div className={'todo_details ' + this.props.selectedTodo.type}>
            <h3>Task</h3>
            <div><label>Name:</label>{' ' + this.props.selectedTodo.name}</div>
            <div><label>Description:</label>{' ' + this.props.selectedTodo.description}</div>
            <div><label>Priority:</label>{' ' + this.props.selectedTodo.priority}</div>
            <div><label>Type:</label>{' ' + this.props.selectedTodo.type}</div>
            <div><label>Status:</label>{' ' + this.props.selectedTodo.status}</div>
          </div>
          <Link to="/todos" className="btn btn-primary btn-1">Back to List</Link>
          <button className="btn btn-danger btn-2" onClick={this.onDeleteTodo.bind(this)}>Delete Todo</button>
        </div>
      </div>
    );
  }
}

//Method to map all state properties with component props
function mapStateToProps(state){
  return {
    selectedTodo : state.currentTodo
  };
}

//Method to dispatch actions with component props
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchTodo, deleteTodo},dispatch);
}

//connect between component and redux
export default connect(mapStateToProps, mapDispatchToProps)(TodoShow);
