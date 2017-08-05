import React from 'react'

const TodoListItem = ({
  id,
  title,
  content
}) => (
  <article className='center mw5 mw6-ns hidden ba mv4' key={id}>
    <h1 className='f4 bg-near-black white mv0 pv2 ph3'>{title}</h1>
    <div className='pa3 bt'>
      <p className='f6 f5-ns lh-copy measure mv0'>
        {content}
      </p>
    </div>
  </article>
)

export default TodoListItem
