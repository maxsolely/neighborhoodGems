import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUtensils, faCoffee, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

import Navbar from './Navbar'
import GoogleMap from './GoogleMap'
import GemsList from './GemsList'


library.add(faUtensils, faCoffee, faSortDown, faSortUp)

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
    return (
      <div>
        <Navbar />
        <div className="app-main-section">
          {/* <GoogleMap
            center={{ lat: this.state.lat, lng: this.state.lng }}
            zoom={11}
          /> */}
        </div>
        <GemsList />
      </div>
    )
  }
}

export default App

