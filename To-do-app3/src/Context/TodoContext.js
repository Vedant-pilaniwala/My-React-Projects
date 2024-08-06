import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "New-todo",
      completed: false,
    },
  ],

  addTodo: (todo) => {},
  toggleCompleted: (id) => {},
  deleteTodo: (id) => {},
  updateTodo: (todo, id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
