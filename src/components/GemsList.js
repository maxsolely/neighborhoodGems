import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGems } from '../actions'
import GemCard from './GemCard'

class GemsList extends Component {

  componentDidMount() {
    this.props.fetchGems()
  }

  renderCards = () => {
    let swapped
    let gemsArray = Object.values(this.props.gems)
    do {
      swapped = false
      for (let i = 0; i < gemsArray.length - 1; i++) {
        if (gemsArray[i].voteCount > gemsArray[i + 1].voteCount) {
          let temp = gemsArray[i]
          gemsArray[i] = gemsArray[i + 1]
          gemsArray[i + 1] = temp
          swapped = true
        }
      }
    } while (swapped)

    return gemsArray.reverse().map(gem => <GemCard gemId={gem.id} />)
  }

  render() {
    return (
      <div className="gems-list">
        {this.renderCards()}
      </div>
    )
  }
}

// const ListWrapper = styled.div`
//   background: #eee5e9;
//   height: 95vh;
//   width: 30%;
//   padding: 5px;
//   overflow: auto
// `

const mapStateToProps = state => {
  return { gems: state.gems }
}

export default connect(mapStateToProps, { fetchGems })(GemsList)