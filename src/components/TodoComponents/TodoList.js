import React from 'react'
import Todo from './Todo'
import { List } from 'semantic-ui-react'

const TodoList = props => {
    return (
        <List divided verticalAlign='middle'>
            {props.todolist.map(todo => (
                <Todo
                    handleToggleComplete={props.handleToggleComplete}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </List>
    )
}

export default TodoList
