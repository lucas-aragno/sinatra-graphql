import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

import TodoListItem from '../../src/components/TodoListItem'

const dummyProps = {
  id: '1',
  title: 'Testing Todo!',
  content: '####'
}

describe('TodoListItem', () => {
  it('renders a todo list item with the props', () => {
    const wrapper = render(<TodoListItem {...dummyProps} />)
    expect(wrapper.text()).to.contain(
      'Testing Todo'
    )
    expect(wrapper.text()).to.contain(
      '####'
    )
  })
})
