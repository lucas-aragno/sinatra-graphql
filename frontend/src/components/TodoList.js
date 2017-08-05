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
    <button
      className='f6 grow no-underline br-pill bn pointer ph3 pv2 mb2 dib white bg-dark-blue'
      onClick={() => refetch()}
    >
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
