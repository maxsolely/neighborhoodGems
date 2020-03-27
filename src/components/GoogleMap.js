import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'

class GoogleMap extends Component {

  render() {
    return (
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </MapWrapper>
    );
  }
}

const MapWrapper = styled.div`
  height: 100vh;
  width: 70%
`

export default GoogleMap