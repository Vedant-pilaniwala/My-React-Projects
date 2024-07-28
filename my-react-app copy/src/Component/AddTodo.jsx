import { useState } from "react";
import { useDispatchTasks } from "./TasksContext";

export default function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatchTasks();

  return (
    <section>
      <input
        className="ml-3 shadow appearance-none border rounded w-9/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Add Task"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={() => {
        dispatch({
          type: 'added',
          task: text,
        })
        setText('');
      }}
        className="mt-3 ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add
      </button>
    </section>
  );
}