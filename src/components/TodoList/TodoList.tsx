import React from "react";
import { Box } from "@mui/material";

import {TodoItem} from "./TodoItem/TodoItem"
import { Todo } from "../../App";
import { EditTodoItem } from "./EditTodoItem/EditTodoItem";

interface TodoListProps {
  editTodoId: Todo["id"] | null;
  todoList: Todo[];
  onDeleteTodo: (id: Todo["id"]) => void;
  onCheckTodo: (id: Todo["id"]) => void;
  onEdit: (id: Todo["id"]) => void;
  onChangeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void
}

export const TodoList: React.FC<TodoListProps> = ({
  todoList,
  onDeleteTodo,
  onCheckTodo,
  onEdit,
  editTodoId,
  onChangeTodo
}) => (
  <Box>
    {todoList.map((todo) => {
      if (todo.id === editTodoId)
        return <EditTodoItem key={todo.id} todo={todo} onChangeTodo={onChangeTodo} />;
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
          onEdit={onEdit}
        />
      );
    })}
  </Box>
);
