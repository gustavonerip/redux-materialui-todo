import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Material UI Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
