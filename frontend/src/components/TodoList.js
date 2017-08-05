import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({
  todos,
  refetch
}) => (
  <div>
    <button
      className='f6 grow no-underline br-pill bn pointer ph3 pv2 mb2 dib white bg-dark-blue'
      onClick={() => refetch()}
    >
      Refresh
    </button>
    <ul className='list'>
      {
        (todos || []).map(todo => (
          <li key={todo.id}>
            <TodoListItem
              id={todo.id}
              refetch={refetch}
              title={todo.title}
              content={todo.content}
            />
          </li>
        ))
      }
    </ul>
  </div>
)

export default TodoList
