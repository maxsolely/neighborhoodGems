import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGem } from '../actions/'
import styled from 'styled-components'

class GemCard extends Component {
  componentDidMount() {
    this.props.fetchGem(this.props.gemId)
  }

  render() {
    if (!this.props.gem) {
      return (
        <div>Loading Data</div>
      )
    }

    const { formatted_address, name, rating } = this.props.gem
    return (
      <CardWrapper>
        <h2>{name}</h2>
        <p>{formatted_address}</p>
        <p>{rating}</p>
      </CardWrapper>
    )
  }
}


const CardWrapper = styled.div`
  height: 15%;
  width: 98%;
  margin: auto;
  border: 2px solid;
  margin-bottom: 5px;
`
const mapStateToProps = (state, ownProps) => {
  return { gem: state.gems[ownProps.gemId] }
}

export default connect(mapStateToProps, { fetchGem })(GemCard)