import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TodoForm = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      const newTodo = {
        id: new Date().getTime(),
        text: todoText,
      };
      addTodo(newTodo);
      setTodoText('');
    }
  };

  return (
    <div className='container flex-center'>
      <TextField
        label="New Todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddTodo}>
        +
      </Button>
    </div>
  );
};

export default connect(null, { addTodo })(TodoForm);
