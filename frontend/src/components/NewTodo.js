import React, { PureComponent } from 'react'

export default class NewTodo extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }

    this.handleUpdate = ::this.handleUpdate
  }

  handleUpdate ({ target: { name, value } }) {
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div className='tc'>
        <div className='w-50 center'>
          <div className='f6 b db mb2'>Title <span className='normal black-60'>(required)</span></div>
          <input
            name='title'
            className='input-reset ba b--black-20 pa2 mb2 db w-100'
            type='text'
            onChange={this.handleUpdate}
          />
        </div>
        <div className='w-50 center'>
          <div className='f6 b db mb2'>Content <span className='normal black-60'>(optional)</span></div>
          <input
            name='content'
            className='input-reset ba b--black-20 pa2 mb2 db w-100'
            type='text'
            onChange={this.handleUpdate}
          />
        </div>
        <div className='w-50 center'>
          <div className='w-100'>
            <div className='f6 fl grow no-underline pointer br-pill ph3 pv2 mb2 dib white bg-green'>
              New
            </div>
          </div>
        </div>
      </div>
    )
  }
}