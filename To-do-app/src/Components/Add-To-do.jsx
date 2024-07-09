

function AddToDo() {


    return (
        <center>
            <input
                className="border-2 border-gray-200 rounded-md m-4 p-2 w-5/12 bg-transparent font-semibold placeholder:text-sky-950" type="text" placeholder="Enter your task"
            />
            <input
                className="border-2 border-gray-200 rounded-md m-4 p-2 w-3/12 bg-transparent font-semibold text-sky-950" type="date"
            />
            <button
                className="rounded-md m-4 p-2 w-2/12 bg-gradient-to-r from-green-500 to-green-600 hover:brightness-110 active:brightness-125 text-2xl text-white"
            >
                Add
            </button>
        </center>
    );
}

export default AddToDo