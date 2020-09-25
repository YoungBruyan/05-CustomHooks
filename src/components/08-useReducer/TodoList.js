import React from 'react'
import { TodoLisItem } from './TodoLisItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo, i) => (
                <TodoLisItem 
                    key={todo.id}
                    todo={todo}
                    index={i}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
                ))
            }
        </ul>
    )
}
