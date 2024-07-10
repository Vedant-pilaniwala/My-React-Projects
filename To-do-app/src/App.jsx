import Header from "./Components/Header";
import AddToDo from "./Components/Add-To-do";
import ToDoLIst from "./Components/To-do-list";
import NoTaskMsg from "./Components/No-task-msg";
import { useState } from "react";

function App() {

  const [toDoList, setToDoList] = useState([])

  const handleOnNewItem = (newTask, newDueDate) => {
    const newItemList = [...toDoList,
    { task: newTask, date: newDueDate }
    ];
    setToDoList(newItemList);
  }

  return (
    <div className="ml-auto mr-auto mt-5 border-2 border-solid rounded-3xl w-6/12 h-auto p-3 bg-gradient-to-r from-green-400 to-blue-500">
      <Header />
      <AddToDo onNewItem={handleOnNewItem} />
      {toDoList.length === 0 && <NoTaskMsg></NoTaskMsg> }
      <ToDoLIst TodoItems={toDoList} />
    </div>
  );
}

export default App
