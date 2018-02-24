// eslint-disable-next-line
import React, { Component } from 'react'
// eslint-disable-next-line
import Article from '../Article/Article'
import accordion from '../../decorators/accordion'

class ArticlesList extends Component {
  render () {
    const db = this.props.db
    const {openItemId, toggleOpenItem} = this.props
    return (
      <div className='ArticlesList'>
        {db.map((article, index) => {
          return <Article key={`${article.id}`} article={article}
          isOpen = {article.id === openItemId}
          toggleOpen = {toggleOpenItem(article.id)}
          />
        })}
      </div>
    )
  }
}

export default accordion(ArticlesList)