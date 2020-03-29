import React, { Component } from 'react'
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

  }

  render() {
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

export default App

