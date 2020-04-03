import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchGem, castVote } from '../actions/'

class GemCard extends Component {
  componentDidMount() {
    this.props.fetchGem(this.props.gemId)
  }

  onClickHandler = (increment) => {
    const { id, voteCount } = this.props.gem
    this.props.castVote(id, voteCount, increment)
  }

  render() {
    if (!this.props.gem) {
      return (
        <div>Loading Data</div>
      )
    }

    const { formatted_address, name, rating, voteCount, photos } = this.props.gem
    return (
      <div className="app-gem-card">
        <img className="app-gem-image" src={photos[0]} />
        <div className="app-gem-content-container">
          <div className="app-button-container">
            <FontAwesomeIcon
              className="app-vote-button"
              icon="sort-up" color="#e08c75"
              transform="grow-10"
              onClick={() => this.onClickHandler(1)}
            />
            <h4 className="app-vote-count">{voteCount}</h4>
            <FontAwesomeIcon
              className="app-vote-button"
              icon="sort-down"
              color="#e08c75"
              transform="grow-10"
              onClick={() => this.onClickHandler(-1)}
            />
          </div>
          <div className="app-gem-info-container">
            <h3 className="app-gem-name">{name}</h3>
            <div className="app-gem-desc-icons-container">
              <FontAwesomeIcon className="app-gem-type-icon" icon="coffee" color="#544931" />
              <FontAwesomeIcon icon="utensils" color="#544931" />
            </div>
            <p className="app-gem-desc">{formatted_address}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { gem: state.gems[ownProps.gemId] }
}

export default connect(mapStateToProps, { fetchGem, castVote })(GemCard)