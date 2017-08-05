import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import getTodos from '../query/getTodos'

import TodoList from './TodoList'
import NewTodo from './NewTodo'

import '../stylesheets/base.css'

class App extends Component {
  render () {
    const { data: { todos, refetch } } = this.props
    return (
      <div className='ph3 pv2 center'>
        <TodoList
          todos={todos}
          refetch={refetch}
        />
        <NewTodo
          refetch={refetch}
        />
      </div>
    )
  }
}

export default graphql(getTodos)(App)
