import React from 'react'
import styled from 'styled-components'
import GemCard from './GemCard'

const GemsList = () => {
  return (
    <ListWrapper>
      <GemCard gemId={1} />
      <GemCard gemId={2} />
      <GemCard gemId={3} />
      <GemCard gemId={4} />
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  background: #eee5e9;
  height: 100vh;
  width: 30%;
  padding: 5px
`

export default GemsList