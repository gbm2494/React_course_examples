import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

//actions allowed by the dispatcher
export const FETCH_TYPES = 'FETCH_TYPES';
export const FETCH_STATUS = 'FETCH_STATUS';
export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const FETCH_TODO = 'FETCH_TODO';
export const DELETE_TODO = 'DELETE_TODO';

//Method to fetch all types of tasks available on the API
export function fetchTypes(){
  const request = axios.get(ROOT_URL + '/type_tasks');
  return{
    type : FETCH_TYPES,
    payload : request
  };
}

//Method to fetch all types of status available on the API
export function fetchStatus(){
  const request = axios.get(ROOT_URL + '/status_tasks');
  return{
    type : FETCH_STATUS,
    payload : request
  };
}

//Method to fetch all todos on the API
export function fetchTodos(){
  const request = axios.get(ROOT_URL + '/todos_all');
  return{
    type : FETCH_TODOS,
    payload : request
  };
}

//Method to create a new todo item on the API
export function createTodo(values,callback){
  const request = axios.post(ROOT_URL + '/create_todo', values).then(
    function(){
      callback();
    });

  return{
    type : CREATE_TODO,
    payload : request
  };
}

//Method to fetch a single todo item based on its ID
export function fetchTodo(id){
  const request = axios.get(ROOT_URL + '/get_todo/' + id);
  return{
    type : FETCH_TODO,
    payload : request
  };
}

//Method to delete a particular todo item based on its ID
export function deleteTodo(id, callback){
  const request = axios.delete(ROOT_URL + '/delete_todo/' + id).then(
    function(){
        callback();
    });

  return{
    type : DELETE_TODO,
    payload : request
  };
}
