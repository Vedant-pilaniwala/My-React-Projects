
function ListItem({ task , date , onDeleteClick }) {

    return (
        <>
            <div className="flex">
                <p
                    className="ml-5 mb-4 p-2 w-5/12 font-sans text-xl font-semibold border-2 bg-white border-gray-200 rounded-md text-sky-950 hover:bg-slate-200"
                >
                    {task}
                </p>
                <p
                    className="ml-9 mb-4 p-2 w-3/12 font-sans text-xl font-semibold border-2 bg-white border-gray-200 rounded-md text-sky-950 hover:bg-slate-200"
                >
                    {date}
                </p>
                <button
                    className="rounded-md ml-8 mb-4 p-2 w-2/12 bg-gradient-to-r from-red-600 to-red-700 hover:brightness-110 active:brightness-125 text-white text-2xl"
                    onClick={() => {onDeleteClick(task)}}
                >
                    Delete
                </button>
            </div>
        </>
    );
}

export default ListItem