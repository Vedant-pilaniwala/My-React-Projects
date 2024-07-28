import { useState } from "react";

function AddToDo({ onNewItem }) {

    const [newTask, setNewTask] = useState("");
    const [newDueDate, setNewDueDate] = useState("");

    const handleNewTask = (evt) => {
        setNewTask(evt.target.value);
    }

    const handleNewDate = (evt) => {
        setNewDueDate(evt.target.value);
    }
    
    const handleOnAdd = () => {
        onNewItem(newTask, newDueDate);
        setNewDueDate("");
        setNewTask("");
    }

    return (
        <center>
            <input
                className="
                border-2 border-gray-200 rounded-md m-4 p-2 w-5/12 bg-transparent font-semibold placeholder:text-sky-950
                "
                type="text"
                placeholder="Enter your task"
                value={newTask}
                onChange={handleNewTask}
            />
            <input
                className="
                border-2 border-gray-200 rounded-md m-4 p-2 w-3/12 bg-transparent font-semibold
                text-sky-950
                "
                type="date"
                value={newDueDate}
                onChange={handleNewDate}
            />
            <button
                className="
                rounded-md m-4 p-2 w-2/12 bg-gradient-to-r from-green-500 to-green-600 hover:brightness-110 active:brightness-125 text-2xl text-white
                "
                onClick={handleOnAdd}
                id="addBtn"
                disabled = {newTask === "" && newDueDate === "" || newDueDate === "" || newTask === "" ? true : false}
            >
                Add
            </button>
        </center>
    );
}

export default AddToDo