import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">

            <input type="checkbox" checked={props.todo.completed}/>

        {props.todo.text}

        </div>

    )
}

export default TodoItem