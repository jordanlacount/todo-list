import React, {useState} from "react"
import {TodoItem} from '../TodoItem/TodoItem'

export function TodoListContainer() {
    const [value, setValue] = useState("no")

    const [todoItems, setTodoItems] = useState(["anything", "cool", "another"])

    function handleInputChange(e) {
        setValue(e.target.value)
    }

    function handleButtonClick() {
        setTodoItems([...todoItems, value])
        setValue("")
    }

    function handleDelete(index) {
        setTodoItems(todoItems.filter((_, itemIndex) => itemIndex !== index))
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <input value={value} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Add</button>
            {todoItems.map((todoText, index) => <TodoItem todoText={todoText} key={index} handleDelete={handleDelete} index={index}/>)}
        </div>
    )
}