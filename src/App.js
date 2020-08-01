import React from "react"
import TodoItem from "./components/Todoitem"
import todoDatas from "./components/todosData"

function App() {
  const todoComponents =
    todoDatas.map(item => <TodoItem key={item.id} todo={item} />)

  return (

    <div className="todo-list">

    {todoComponents}

    </div>
  )
}
export default App