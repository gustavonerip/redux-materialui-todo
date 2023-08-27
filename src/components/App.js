import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// CSS
import '../styles/App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My Todo App</h1>
        <TodoForm />
        <TodoList />
        <footer>Developed by Gustavo Neri.</footer>
      </div>
    </Provider>
  );
}

export default App;
