import React from 'react'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.scss'
import { Card } from 'semantic-ui-react'

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      todolist: [],
      todos: ''
    }
  }

  addTodo = event => {
    event.preventDefault();
    const newTodo = {task: this.state.todos, completed: false, id: Date.now()}
    this.setState({
      todolist: [...this.state.todolist, newTodo],
      todos: ''
    })
  }

  changeTodo = event => this.setState({[event.target.name]: event.target.value})

  toggleTodoComplete = id => {
    let todolist = this.state.todolist.slice().map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        return todo
      }
      else {
        return todo
      }
    })
    this.setState({todolist})
  }

  clearCompletedTodolist = event => {
    event.preventDefault()
    let todolist = this.state.todolist.filter(todo => !todo.completed)
    this.setState({todolist})
  }

  render() {
    return (
      <div className='container'>
        <Card raised className='card'>
          <h1>My To Do List</h1>
          <TodoForm
            value={this.state.todos}
            handleTodoChange={this.changeTodo}
            handleAddTodo={this.addTodo}
            handleClearTodolist={this.clearCompletedTodolist}
          />
          <TodoList
            handleToggleComplete={this.toggleTodoComplete}
            todolist={this.state.todolist}
          />
        </Card>
      </div>
    )
  }
}

export default App
