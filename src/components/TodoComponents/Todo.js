import React from 'react'
import { List } from 'semantic-ui-react'

const Todo = props => {
    return (
        <List.Item as='div'
            style={props.todo.completed ? {textDecoration: 'line-through', color: 'gray'}: null}
            onClick={() => props.handleToggleComplete(props.todo.id)}
        >
            <List.Content>{props.todo.task}</List.Content>
        </List.Item>
    )
}

export default Todo