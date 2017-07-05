import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';

import {fetchTodos, fetchTotalTasks} from '../actions';

class TodoList extends Component{
  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {currentPage : 1, todosPerPage : 4};
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount(){
    this.props.fetchTodos();
    this.props.fetchTotalTasks();
  }

  renderTodos(currentTodos){
    return _.map(currentTodos, todo => {
      return(
        <div className={"todoItem " + todo.type} key={todo.task_id}>
            <div className="col-md-6 information">
              <h5>{todo.name}</h5>
              <p>{todo.description}</p>
            </div>
            <div className="col-md-6 information">
              <div>Status: {todo.status}</div>
              <div className="priority">Priority: {todo.priority}</div>
            </div>
        </div>
      );
    });
  }

  renderColors(){
    return(
      <div className="block">
        <div className="School instructions">School</div>
        <div className="Personal instructions">Personal</div>
        <div className="Home instructions">Home Chores</div>
        <div className="Work instructions">Work</div>
      </div>
    );
  }

  render(){

    const { currentPage, todosPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = _.slice(this.props.todos, indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = this.renderTodos(currentTodos);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.totalTasks / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
    return (
      <div
        key={number}
        id={number}
        onClick={this.handleClick}
      >
        {number}
      </div>
    );
    });

    return (
      <div className="col-md-6 pull-xs-right">
      <h3>TODO List ({this.props.totalTasks})</h3>
          {this.renderColors()}
          {renderTodos}

          <div id="page-numbers">
            {renderPageNumbers}
          </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todos : state.todos,
    totalTasks : state.totalTasks
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchTodos, fetchTotalTasks},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
