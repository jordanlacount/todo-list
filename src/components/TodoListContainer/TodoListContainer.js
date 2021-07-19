import React, {useState} from "react"
import {TodoItem} from '../TodoItem/TodoItem'

export function TodoListContainer() {
    const [value, setValue] = useState("")

    const [todoItems, setTodoItems] = useState([])

    function handleInputChange(e) {
        setValue(e.target.value)
    }

    function handleButtonClick(e) {
        e.preventDefault()
        setTodoItems([...todoItems, value])
        setValue("")
    }

    function handleDelete(index) {
        setTodoItems(todoItems.filter((_, itemIndex) => itemIndex !== index))
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={handleButtonClick}>
                <input value={value} onChange={handleInputChange} />
                <button>Add</button>
            </form>
            {todoItems.map((todoText, index) => <TodoItem todoText={todoText} key={index} handleDelete={handleDelete} index={index}/>)}
        </div>
    )
}