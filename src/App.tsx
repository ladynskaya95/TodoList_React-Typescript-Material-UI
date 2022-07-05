import React from 'react';
import './App.css';
import Box from "@mui/material/Box";

import { Header, Panel, TodoList} from './components'

export type Todo = {
  id: number;
  name: string;
  description: string;
  checked: boolean;
};

export const App = () => {
  const [editTodoId, setEditTodoId] = React.useState<number | null>(null)
const [todoList, setTodoList] = React.useState([
  { id: 1, name: "ffff", description: "test", checked: false },
  { id: 2, name: "ffffffffff", description: "tebst", checked: false },
  { id: 3, name: "ffff", description: "tebbbbbst", checked: true },
]);

const onEdit = (id: Todo["id"]) => {
  setEditTodoId(id);
};

const onDeleteTodo = (id: Todo["id"]) => {
  setTodoList(todoList.filter(todo => todo.id !== id))
}

const onAddTodo = ({name, description}: Omit<Todo, "id" | "checked">) => {
  setTodoList([
    ...todoList, 
    {id: todoList[todoList.length - 1].id + 1, description, name, checked: false}])
}

const onCheckTodo = (id: Todo["id"]) => {
  setTodoList(todoList.map(todo => {
    if (todo.id === id) {
      return {...todo, checked: !todo.checked}
    }
    return todo
  }));
};


const onChangeTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
  setTodoList(
    todoList.map((todo) => {
      if (todo.id === editTodoId) {
        return { ...todo, name, description };
      }
      return todo;
    })
  );
  setEditTodoId(null)
};

  return (
    <div className="App">
      <Box className="container" component="div">
        <Header todoCount={todoList.length}/>
        <Panel onAddTodo={onAddTodo} />
        <TodoList
          editTodoId={editTodoId}
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
          onEdit={onEdit}
          onChangeTodo={onChangeTodo}
        />
      </Box>
    </div>
  );
}

