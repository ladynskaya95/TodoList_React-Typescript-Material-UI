import React from 'react';
import {TextField, Paper, Button} from "@mui/material";
import { Add } from "@mui/icons-material";
import { Todo } from '../../App';

const DEFAULT_TODO = {name: "", description: ""};

interface PanelProps {
    onAddTodo: ({name, description}: Omit<Todo, "id" | "checked">) => void
}

export const Panel: React.FC<PanelProps> = ({onAddTodo}) => {
const [todo, setTodo] = React.useState(DEFAULT_TODO);

const onClick = () => {
    onAddTodo(todo)
    setTodo(DEFAULT_TODO)
}

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };


  return (
    <Paper className="panel"
      elevation={1}
    >
      <TextField
        value={todo.name}
        onChange={onChange}
        variant="outlined"
        label="name"
        name='name'
      />
      <TextField
        value={todo.description}
        onChange={onChange}
        variant="outlined"
        label="description"
        name="description"
      />
      <Button startIcon={<Add />} onClick={onClick} variant="outlined">
        Add
      </Button>
    </Paper>
  );
}

