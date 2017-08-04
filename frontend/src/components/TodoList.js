import React from 'react'
import { graphql } from 'react-apollo'
import getTodos from '../query/getTodos'

const TodoList = ({
  data: {
    todos,
    refetch
  }
}) => (
  <div>
    <button onClick={() => refetch()}>
      Refresh
    </button>
    <ul>
      {
        (todos || []).map(todo => (
          <li>
            {todo.title}
          </li>
        ))
      }
    </ul>
  </div>
)

export default graphql(getTodos)(TodoList)
