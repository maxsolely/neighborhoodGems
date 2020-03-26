import React, { Component } from 'react'
import GoogleMap from './GoogleMap'

class App extends Component {
  state = {
    lat: null,
    lng: null
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => {
      this.setState({ lat: position.coords.latitude, lng: position.coords.longitude })
    })
  }

  render() {
    if(!this.state.lat){
      return <div>Loading</div>
    }

    return (
      <div>
        <GoogleMap 
          center={{lat: this.state.lat, lng: this.state.lng}}
          zoom={11}
          />
      </div>
    )
  }
}

export default App