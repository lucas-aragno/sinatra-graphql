import React, { Component } from 'react'

import TodoList from './TodoList'
import NewTodo from './NewTodo'

import '../stylesheets/base.css'

export default class App extends Component {
  render () {
    return (
      <div className='ph3 pv2 center'>
        <TodoList />
        <NewTodo />
      </div>
    )
  }
}
