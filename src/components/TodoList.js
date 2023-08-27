import React from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);