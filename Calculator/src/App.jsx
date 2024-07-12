import Display from "./Components/Display"
import ButtonContainer from "./Components/ButtonContainer"

function App() {

  return (
    <div
      className="bg-gradient-to-r from-green-400 to-blue-500 ml-auto mr-auto mt-6 mb-auto w-2/6
       border-2 border-solid border-black"
    >
      <Display />
      <ButtonContainer />
    </div>
  )
}

export default App
