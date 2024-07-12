import Display from "./Components/Display"
import ButtonContainer from "./Components/ButtonContainer"
import { useState } from "react"

function App() {

  const [calVal, setCalVal] = useState("");

  const handleOnPress = (btnVal) => {
    if (btnVal === "AC") {
      setCalVal("");
    } else if (btnVal === " = ") {
      setCalVal(eval(calVal));
    } else {
      const expression = calVal + btnVal;
      setCalVal(expression);
    }
  }

  return (
    <div
      className="bg-gradient-to-r from-green-400 to-blue-500 ml-auto mr-auto mt-6 mb-auto w-2/6
       border-2 border-solid border-black"
    >
      <Display displayVal={calVal} />
      <ButtonContainer onPress={(evt) => handleOnPress(evt.target.innerHTML)} />
    </div>
  )
}

export default App
