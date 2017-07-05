import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api';

export const FETCH_TYPES = 'FETCH_TYPES';
export const FETCH_STATUS = 'FETCH_STATUS';
export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const FETCH_TOTAL_TASKS = 'FETCH_TOTAL_TASKS';

export function fetchTypes(){
  const request = axios.get(ROOT_URL + '/type_tasks');
  return{
    type : FETCH_TYPES,
    payload : request
  };
}

export function fetchStatus(){
  const request = axios.get(ROOT_URL + '/status_tasks');
  return{
    type : FETCH_STATUS,
    payload : request
  };
}

export function fetchTodos(){
  const request = axios.get(ROOT_URL + '/todos_all');
  return{
    type : FETCH_TODOS,
    payload : request
  };
}

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

export function fetchTotalTasks(){
  const request = axios.get(ROOT_URL + '/total_tasks');
  return{
    type : FETCH_TOTAL_TASKS,
    payload : request
  };
}
