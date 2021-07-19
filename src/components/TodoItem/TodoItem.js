import React from "react"
import "./styles.css"

export function TodoItem({todoText, handleDelete, index}) {

    function handleButtonClick() {
        handleDelete(index)
    }

    return (
        <div className="todo-wrapper">
          <p>{todoText}</p>
          <button onClick={handleButtonClick}>Remove</button>
        </div>
    )
}