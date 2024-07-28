import { useTasks, useDispatchTasks } from './TasksContext';
import { useState } from 'react';

export default function TasksList() {
    const tasks = useTasks();

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className='flex'>
                    <List task={task} />
                </li>
            )
            )}
        </ul>
    );


    function List({ task }) {
        const [isEditing, setIsEditing] = useState(false);
        const [text, setText] = useState(task.text);
        const dispatch = useDispatchTasks();
        let textContent;

        if (isEditing) {
            textContent = (
                <>
                    <input
                        className='ml-3 mt-2 shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type="text"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <button onClick={() => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                text: text,
                            }
                        });
                        setIsEditing(false);
                    }}
                        className='ml-3 mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                    >
                        Save
                    </button>
                </>
            );
        } else {
            textContent = (
                <>
                    <p className='w-40 ml-3 mt-4 font-semibold text-lg'>{text}</p>
                    <button onClick={() => {
                        setIsEditing(true);
                    }}
                        className='ml-3 mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                    >
                        Edit
                    </button>
                </>
            );
        }

        return (
            <>
                <input
                    className='ml-3 mt-4'
                    type='checkbox'
                    checked={task.done}
                    onChange={(e) => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                done: e.target.checked,
                            }
                        })
                    }}
                />

                {textContent}

                <button
                    className='ml-3 mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => {
                        dispatch({
                            type: 'deleted',
                            id: task.id,
                        });
                    }}
                >
                    Delete
                </button>
            </>
        );
    }
}