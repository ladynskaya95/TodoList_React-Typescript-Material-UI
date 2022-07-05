import React from 'react'
import { Box, Paper, Typography, IconButton, Stack } from '@mui/material';
import {Delete, Edit} from '@mui/icons-material';
import { Todo } from '../../../App';


interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: Todo["id"]) => void;
  onCheckTodo: (id: Todo["id"]) => void;
  onEdit: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({todo, onDeleteTodo, onCheckTodo, onEdit}) => {
  return (
    <Paper className="todoItem"
      elevation={2}
      sx={{
        opacity: todo.checked ? 0.6 : 1,
      }}
    >
      <Box textAlign="left">
        <Typography
          onClick={() => onCheckTodo(todo.id)}
          sx={{
            cursor: "pointer",
            textDecorationLine: todo.checked ? "line-through" : "none",
          }}
          variant="h5"
          component="h5"
          gutterBottom
        >
          {todo.name}
        </Typography>
        <Typography variant="subtitle1" component="div" gutterBottom>
          {todo.description}
        </Typography>
      </Box>
      <Box className="todoItemBox">
        <Stack direction="row" spacing={1}>
          <IconButton 
          onClick={() => onEdit(todo.id)}
          aria-label="edit" color="primary">
            <Edit />
          </IconButton>
          <IconButton
            onClick={() => onDeleteTodo(todo.id)}
            aria-label="delete"
            color="error"
          >
            <Delete />
          </IconButton>
        </Stack>
      </Box>
    </Paper>
  );
}
