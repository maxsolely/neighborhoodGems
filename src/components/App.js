import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGems } from '../actions'

import GoogleMap from './GoogleMap'
import GemsList from './GemsList'
import styled from 'styled-components'


class App extends Component {
  state = {
    lat: null,
    lng: null
  }

  componentDidMount() {
    // window.navigator.geolocation.getCurrentPosition(position => {
    //   this.setState({ lat: position.coords.latitude, lng: position.coords.longitude })
    // })

    this.props.fetchGems();
  }

  render() {
    if (!this.props.gems) {
      return <div>Something</div>
    }

    return (
      <Wrapper>
        {/* <GoogleMap 
          center={{lat: this.state.lat, lng: this.state.lng}}
          zoom={11}
          /> */}
        <GemsList />
      </Wrapper>
    )
  }
}

const Wrapper = styled.section`
width: 100vw;
height: 100vh;
display: flex;
`

const mapStateToProps = state => {
  return { gems: state.gems }
}

export default connect(mapStateToProps, { fetchGems })(App)

