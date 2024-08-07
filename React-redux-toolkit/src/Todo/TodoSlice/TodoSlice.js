import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      todo: "New-todo",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const id = action.payload.id;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return action.payload;
        } else {
          return todo;
        }
      });
    },
  },
});

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
