import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../actions/todoActions';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEditTodo = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <ListItem>
      {isEditing ? (
        <>
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <IconButton edge="end" aria-label="save" onClick={handleSaveEdit}>
            <CheckIcon />
          </IconButton>
        </>
      ) : (
        <>
          <ListItemText primary={todo.text} />
          <IconButton edge="end" aria-label="edit" onClick={handleEditTodo}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={handleDeleteTodo}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
};

export default connect(null, { deleteTodo, editTodo })(TodoItem);