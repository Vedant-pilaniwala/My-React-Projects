import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/TodoItem'

function App() {

  return (
    <div>
      <h1 className='text-5xl text-center font-bold m-10'>
        Learn Redux with react
      </h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
