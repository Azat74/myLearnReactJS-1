import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange/DateRange'
import SelectFilter from './Select/Select'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    }

    render() {
        return (
            <div>
                <SelectFilter articles = {this.props.articles} />
                <DateRange />
            </div>
        )
    }
}

export default Filters 