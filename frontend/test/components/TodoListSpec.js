import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

import TodoList from '../../src/components/TodoList'

const dummyProps = {
  todos: [
    {
      id: '1',
      title: 'test title',
      content: 'testing'
    }
  ]
}

describe('TodoList', () => {
  it('renders a todo list with the props', () => {
    const wrapper = render(<TodoList {...dummyProps} />)
    expect(wrapper.text()).to.contain(
      'test title'
    )
    expect(wrapper.text()).to.contain(
      'testing'
    )
  })
})
