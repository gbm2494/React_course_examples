import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchTypes, fetchStatus, fetchTodos, fetchTotalTasks, createTodo} from '../actions';

class NewTaskForm extends Component{
  componentDidMount(){
    this.props.fetchTypes();
    this.props.fetchStatus();
  }

  renderTypes(){
    return _.map(this.props.types, type => {
      return(
        <option key={type.name} value={type.id}>{type.name}</option>
      );
    });
  }

  renderStatus(){
    return _.map(this.props.status, status => {
      return(
        <option key={status.name} value={status.id}>{status.name}</option>
      );
    });
  }

  renderField(field){
    var className = 'form-group';

    if(field.meta.touched && field.meta.error){
      className += ' has-danger';
    }
    else{
      className += '';
    }

    return(
      <div className={className}>
        <label>{field.labelToShow}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    this.props.createTodo(values, () => {
      this.props.fetchTodos();
      this.props.fetchTotalTasks();
      
    });
  }

  render(){
    const {handleSubmit} = this.props;

    return (
      <div>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="col-md-4 form-style">
        <h3>New task</h3>
        <Field
          labelToShow="Name:"
          name="name"
          component={this.renderField}
        />

        <Field
          labelToShow="Description:"
          name="description"
          component={this.renderField}
        />

        <label>Priority:</label>
        <Field name="priority" component="input" type="number" value="1" min="1" max="5" className="form-control"/>

        <label>Type task:</label>
        <Field name="type_id" component="select" className="form-control">
          {this.renderTypes()}
        </Field>

        <label>Status:</label>
        <Field name="status_id" component="select" className="form-control">
          {this.renderStatus()}
        </Field>

        <div className="pull-xs-right">
          <button type="submit" className="btn btn-primary">Add task</button>
          <Link to="/todos" className="btn btn-danger">Cancel</Link>
        </div>
      </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.name){
    errors.name = "Enter a todo list item name, please.";
  }
  if(!values.description){
    errors.description = "Enter a description for your todo item, please.";
  }

  if(!values.priority){
    errors.priority = "Enter a priority for your task, please.";
  }

  if(!values.type){
    errors.type = "Enter a type for your task, please.";
  }

  if(!values.status){
    errors.status = "Enter a status for your task, please.";
  }
  return errors;
}

function mapStateToProps(state){
  return {
    types : state.types,
    status : state.status
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchTypes, fetchStatus, fetchTodos, fetchTotalTasks, createTodo},dispatch);
}

export default reduxForm({
    validate : validate,
    form : 'TodoNewForm' //has to be unique
  })(
    connect(mapStateToProps,mapDispatchToProps)(NewTaskForm)
  );
