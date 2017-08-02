import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers';
import TodosIndex from './components/todos_index';
import TodoShow from './containers/todo_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/todos/:id" component={TodoShow}/>
        <Route path="/todos" component={TodosIndex}/>
      </Switch>
    </div>
</BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
