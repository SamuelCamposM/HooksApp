import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onNewTodo = (todo) => {
    const action = {
      type: "[TODO] add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const onDeleteTodo = (id) => {
    const action = {
      type: "[TODO] remove Todo",
      payload: id,
    };
    dispatch(action);
  };
  const onToggleTodo = (id) => {
    const action = {
      type: "[TODO] toggle Todo",
      payload: id,
    };
    dispatch(action);
  };
  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
