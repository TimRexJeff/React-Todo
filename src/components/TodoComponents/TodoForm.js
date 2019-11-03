import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'

const TodoForm = props => {
    return (
        <Form>
            <Input className="input"
                onChange={props.handleTodoChange}
                type="text"
                name="todos"
                value={props.value}
                placeholder="To Do..."
            />
            <div className='buttondiv'>
                <Button onClick={props.handleAddTodo}>Add to list</Button>
                <Button onClick={props.handleClearTodolist}>Clear completed</Button>
            </div>
        </Form>
    )
}

export default TodoForm
