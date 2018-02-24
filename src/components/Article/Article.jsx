// eslint-disable-next-line
import React, { Component } from 'react'

class Article extends Component {
  render () {
    const {article, isOpen, toggleOpen} = this.props
    return (
      <div className='Article'>
        <div>{article.title}</div>
        <button onClick={toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    )
  }
  getBody () {
  const {article, isOpen} = this.props
  if (!isOpen) return null
  return <section>{article.text}</section>
  }

}

export default Article