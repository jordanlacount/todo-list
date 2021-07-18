import React from "react"

export function TodoItem({todoText, handleDelete, index}) {

    function handleButtonClick() {
        handleDelete(index)
    }

    return (
        <div>
          <p>{todoText}</p>
          <button onClick={handleButtonClick}>Remove</button>
        </div>
    )
}