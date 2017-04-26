import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Search, Grid, Header, Label } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, result) => this.setState({ value: result.name })

  handleSearchChange = (e, value) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.parks, isMatch),
      })
    }, 500)
  }

  resultRenderer = (result) => (
    <Label as={Link} to={`park/${result.parkcode}/`} content={result.name} />
  )

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            resultRenderer={this.resultRenderer}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect()(SearchBar);