import Header from "./Components/Header";
import AddToDo from "./Components/Add-To-do";
import ToDoLIst from "./Components/To-do-list";

function App() {

  const toDoList = [
    {
      task: 'Buy Milk',
      date: '08/07/24'
    },
    {
      task: 'Complete the projects',
      date: '08/07/24'
    }
  ]

  return (
    <div className="ml-auto mr-auto mt-5 border-2 border-solid rounded-3xl w-6/12 h-auto p-3 bg-gradient-to-r from-green-400 to-blue-500">
      <Header />
      <AddToDo />
      <ToDoLIst TodoItems={toDoList}/>
    </div>
  );
}

export default App
