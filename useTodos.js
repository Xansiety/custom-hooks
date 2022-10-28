import { useEffect, useReducer } from "react";

import { todoReducer } from "../todoReducer.js";

 

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => { 
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    // Con esto mandamos a llamar el reducer
    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    dispatchTodo({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToogleTodo = (id) => {
    const action = {
      type: "[TODO] Update Todo",
      payload: id,
    };
    console.log(id);
    dispatchTodo(action);
  };

  

  return {
    todos,
    total: todos.length,
    todosPendientes: todos.filter(todo => !todo.done).length, 
    handleNewTodo,
    handleDeleteTodo,
    handleToogleTodo,
  };
};
