import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

class GoogleMap extends Component {

  render() {
    return (
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}


export default GoogleMap