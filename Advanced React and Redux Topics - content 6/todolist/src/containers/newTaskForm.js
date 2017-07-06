import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchTypes, fetchStatus, fetchTodos, createTodo} from '../actions';

class NewTaskForm extends Component{
  //Method to load redux state after all component was mounted
  componentDidMount(){
    this.props.fetchTypes();
    this.props.fetchStatus();
  }

  //Method to render all type options inside type dropdownlist
  renderTypes(){
    return _.map(this.props.types, type => {
      return(
        <option key={type.name} value={type.id}>{type.name}</option>
      );
    });
  }

  //Method to render all status options inside type dropdownlist
  renderStatus(){
    return _.map(this.props.status, status => {
      return(
        <option key={status.name} value={status.id}>{status.name}</option>
      );
    });
  }

  //Method to render a generic input text field using redux-form and validation
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

  //Method to render a generic input number field using redux-form and validation
  renderNumberField(field){
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
          type="number"
          min={field.min}
          max={field.max}
          {...field.input}
        />

        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  //Method when the form is submitted
  onSubmit(values){
    console.log(values);
    this.props.createTodo(values, () => {
      this.props.fetchTodos();
    });
  }

  //Method to render the component on browser
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

        <Field
          labelToShow="priority:"
          name="priority"
          min="1"
          max="5"
          component={this.renderNumberField}
        />

        <label>Type task:</label>
        <Field name="type_id" component="select" className="form-control">
          {this.renderTypes()}
        </Field>

        <label>Status:</label>
        <Field name="status_id" component="select" className="form-control">
          {this.renderStatus()}
        </Field>

        <div className="pull-xs-right">
          <button type="submit" className="btn btn-primary form-button">Add task</button>
          <input type="reset" className="btn btn-danger form-button" value="Cancel"/>
        </div>
      </form>
      </div>
    );
  }
}

//Method used for redux-form to validate all form values
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

  if(!values.type_id){
    errors.type_id = "Enter a type for your task, please.";
  }

  if(!values.status_id){
    errors.status_id = "Enter a status for your task, please.";
  }

  return errors;
}

//Method to map all state properties with component props
function mapStateToProps(state){
  return {
    types : state.types,
    status : state.status
  };
}

//Method to dispatch actions with component props
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchTypes, fetchStatus, fetchTodos, createTodo},dispatch);
}

//Special connect to redux with redux form included
export default reduxForm({
    validate : validate,
    form : 'TodoNewForm' //has to be unique
  })(
    connect(mapStateToProps,mapDispatchToProps)(NewTaskForm)
  );
