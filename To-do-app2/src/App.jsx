import TasksProvider from "./Component/TasksContext";
import AddTodo from "./Component/AddTodo";
import TasksList from "./Component/TaskList";

export default function App() {

  return(
    <TasksProvider>
      <h1 className="m-4 text-center text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">To-do-app</h1>
      <AddTodo />
      <TasksList />
    </TasksProvider>
  );
}