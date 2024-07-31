import { useContext, useReducer, createContext } from "react";

const TasksDispatchContext = createContext(null);
const TasksContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return(
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        { children }
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );

}

function tasksReducer(tasks, action)  {
  switch (action.type) {
    case 'added': {
      return [
      ...tasks,
      {
        id: nextId++,
        text: action.task,
        done: false,
      }
    ]}
    case 'changed': {
      return tasks.map((t) => {
        if(t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      })
    }
    case 'deleted' : {
      return tasks.filter(task => 
        task.id !== action.id
      );
    }
    default: {
      throw new Error('Unknow action type:' + action.type);
    }
  }
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useDispatchTasks() {
  return useContext(TasksDispatchContext);
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];