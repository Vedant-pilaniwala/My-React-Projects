

function ButtonContainer({ onPress }) {

    const Buttons = [
        "AC",
        "00",
        " / ",
        "7",
        "8",
        "9",
        " * ",
        "4",
        "5",
        "6",
        " - ",
        "1",
        "2",
        "3",
        " + ",
        "0",
        ".",
        " = "
    ]

    return (
        <div className="buttonContainer grid grid-cols-4 gap-1">
            {Buttons.map((btn) => {
                if (btn === "AC" || btn === " = ") {
                    return (
                        <button 
                        className="p-4 bg-transparent border-2 border-solid border-white text-3xl text-white col-span-2 hover:backdrop-brightness-110 active:backdrop-brightness-125" 
                        key={btn}
                        onClick={(evt) => {onPress(evt)}}
                        >
                            {btn}
                        </button>
                    )
                } else {
                    return (
                        <button 
                        className="p-4 bg-transparent border-2 border-solid border-white text-3xl text-white hover:backdrop-brightness-110 active:backdrop-brightness-125"
                        key={btn}
                        onClick={(evt) => {onPress(evt)}}
                        >
                            {btn}
                        </button>
                    )
                }
            })}
        </div>
    )
}

export default ButtonContainer