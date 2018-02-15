// eslint-disable-next-line
import React, { Component } from 'react'
// eslint-disable-next-line
import Article from '../Article/Article'
import Axios from 'axios'

export default class ArticlesList extends Component {
  constructor () {
    super()
    this.state = {
      db: ['']
    }
  }
  componentWillMount () {
    Axios.get('./db.json')
      .then(res => this.setState({db: res.data}))
  }
  render () {
    const db = this.state.db
    return (
      <div className='ArticlesList'>
        {db.map(function (article, index) {
          return <Article key={`${Math.random()}+${index}`} article={article}/>
        })}
      </div>
    )
  }
}
