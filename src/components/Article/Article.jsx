// eslint-disable-next-line
import React, { Component } from 'react'

export default class ArticlesList extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isOpen: false
    }
  }
  render () {
    const {article} = this.props
    const {isOpen} = this.state
    return (
      <div className='Article'>
        <div>{article.title}</div>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }
  getBody () {
  if (!this.state.isOpen) return null
  const {article} = this.props
  return <section>{article.text}</section>
}
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
      })
  }
}
