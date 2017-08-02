import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';

import {fetchTodos} from '../actions';

class TodoList extends Component{
  constructor(props){
      super(props);
      //binding of context between component and pagination method
      this.handleClickPagination = this.handleClickPagination.bind(this);
      //local state (component state) used for the pagination functionality
      this.state = {currentPage : 1, todosPerPage : 4};
  }

  //Method to load redux state after all component was mounted
  componentDidMount(){
    this.props.fetchTodos();
  }

  //Method to load color instructions above todo list
  renderColors(){
    return(
      <div>
        <div className="School instructions">School</div>
        <div className="Personal instructions">Personal</div>
        <div className="Home instructions">Home Chores</div>
        <div className="Work instructions">Work</div>
      </div>
    );
  }

  //Method to render currentTodos selected by the pagination
  renderTodos(currentTodos){
    return _.map(currentTodos, todo => {
      return(
        <div className={"todoItem " + todo.type} key={todo.task_id}>
            <div className="col-md-6 information">
              <Link to={`/todos/${todo.task_id}`}>{todo.name}</Link>
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

  //handler event for pagination clicked
  handleClickPagination(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  //Method to render to component on browser
  render(){
    const { currentPage, todosPerPage } = this.state;

    // Logic for displaying todos (calculations)
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = _.slice(this.props.todos, indexOfFirstTodo, indexOfLastTodo);

    //load render for the current todos
    const renderTodos = this.renderTodos(currentTodos);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    //render page numbers based on the length of the todo list
    const renderPageNumbers = pageNumbers.map(number => {
    return (
      <div
        key={number}
        id={number}
        onClick={this.handleClickPagination}
      >
        {number}
      </div>
    );
    });

    //final render for the browser
    return (
      <div className="col-md-6 pull-xs-right">
      <h3>TODO List ({this.props.todos.length})</h3>
          {this.renderColors()}
          {renderTodos}

          <div id="page-numbers">
            {renderPageNumbers}
          </div>
      </div>
    );
  }
}

//Method to map all state properties with component props
function mapStateToProps(state){
  return {
    todos : state.todos
  };
}

//Method to dispatch actions with component props
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchTodos},dispatch);
}

//connect component to redux
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
