import React from 'react'
import styled from 'styled-components'
import PlacesCard from './PlacesCard'

const PlacesList = () => {
  return (
    <ListWrapper>
      <PlacesCard />
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  background: #eee5e9;
  height: 100vh;
  width: 30%
`

export default PlacesList