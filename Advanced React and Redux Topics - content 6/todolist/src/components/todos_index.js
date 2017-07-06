import React, {Component} from 'react';
import NewTaskForm from '../containers/newTaskForm';
import TodoList from '../containers/todo_list';
import Jumbotron from './jumbotron';

class TodosIndex extends Component{
  render(){
    return (
      <div>
        <Jumbotron title="TODO List Application"/>
        <NewTaskForm/>
        <TodoList/>
      </div>
    );
  }
}

export default TodosIndex;
