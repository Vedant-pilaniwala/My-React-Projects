

function Display({ displayVal }) {

    return (
        <input
            type="text"
            className="m-0 w-full bg-gray-950 pt-24 pr-4 text-white min-h-16 text-7xl
             outline-none text-end flex-wrap"
            value={displayVal}
            readOnly
        />
    )
}

export default Display