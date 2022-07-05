import React from "react";
import { Paper,  TextField, Button } from "@mui/material";
import {  Edit } from "@mui/icons-material";
import { Todo } from "../../../App";

interface EditTodoItemProps {
  todo: Todo;
  onChangeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void;
}

export const EditTodoItem: React.FC<EditTodoItemProps> = ({ todo, onChangeTodo }) => {
    const [editTodo, setEditTodo] = React.useState({name: todo.name, description: todo.description});

const onClick = () => {
  onChangeTodo(editTodo);
};
 
const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { value, name } = event.target;
  setEditTodo({ ...todo, [name]: value });
};

  return (
    <Paper className="edit"
      elevation={2}
    >
      <TextField
        value={editTodo.name}
        onChange={onChange}
        variant="outlined"
        label="name"
        name="name"
      />
      <TextField
        value={editTodo.description}
        onChange={onChange}
        variant="outlined"
        label="description"
        name="description"
      />
      <Button startIcon={<Edit />} onClick={onClick} variant="outlined">
        Edit
      </Button>
    </Paper>
  );
};
