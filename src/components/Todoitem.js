import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">

            <input type="checkbox" onChange={()=> console.log("Checked")} checked={props.todo.completed} />

            {props.todo.text}

        </div>

    )
}

export default TodoItem