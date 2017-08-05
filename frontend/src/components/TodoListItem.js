import React from 'react'
import { graphql } from 'react-apollo'

import deleteTodo from '../mutations/deleteTodo'

const TodoListItem = ({
  id,
  title,
  content,
  mutate,
  refetch
}) => (
  <article className='center mw5 mw6-ns hidden ba mv4' key={id}>
    <h1 className='f4 bg-near-black white mv0 pv2 ph3'>{title}</h1>
    <div className='pa3 bt'>
      <p className='f6 f5-ns lh-copy measure mv0'>
        {content}
      </p>
    </div>
    <div className='pa3 bt'>
      <button
        className='f6 grow no-underline br-pill bn pointer ph3 pv2 mb2 dib white bg-red'
        onClick={() => {
          mutate({
            variables: {
              id
            }
          }).then(res => {
            refetch()
          })
        }}
      >
        Delete
      </button>
    </div>
  </article>
)

export default graphql(deleteTodo)(TodoListItem)
