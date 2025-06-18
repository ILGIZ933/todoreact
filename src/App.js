import { useState } from "react";
import { TodoItem } from "./components/todoitem";



function App() {
  const [todos,setTodos] = useState([])
  const [inputValue,SetInputValue] = useState('')

  const createTodo = () => {
    setTodos([...todos,{text:inputValue}])
    SetInputValue('')
  }

  return (
    <div className="App">
      <div>
        <input type="text" 
        value={inputValue}
        onChange={(e)=>{
          SetInputValue(e.target.value)
        }}/>
        <button onClick={createTodo}>ADD</button>
      </div>
      <div>
        {
          todos.map((el,id)=> {
            return <TodoItem todo={el} key={id}/>
          })
        }
      </div>
    </div>
  );
}

export default App;