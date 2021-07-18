import React from "react"
import {TodoItem} from '../TodoItem/TodoItem'

export function TodoListContainer() {
    return (
        <div>
            <h1>To-Do List</h1>
            <input />
            <button>Add</button>
            <TodoItem />
        </div>
    )
}