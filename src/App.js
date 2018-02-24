// eslint-disable-next-line
import React, { Component } from 'react'
import './App.css'
// eslint-disable-next-line
import ArticlesList from  './components/ArticlesList/ArticlesList'
import UserForm from './components/UserForm/UserForm'
import Filters from './components/Filters/index'
import 'react-select/dist/react-select.css'
import Axios from 'axios'

class App extends Component {
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
      <div>
        <UserForm />
        <Filters articles = {db}/>
        <ArticlesList db = {db} defaultOpenId = {db[0].id} />
      </div>
    )
  }
}

export default App
