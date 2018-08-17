import React from 'react'
import styled from 'styled-components'

const Background = ({ image }) => {
  console.log(image);
  return (
    <Image image={image}/>
  )
}

const Image = styled.div`
  background: url('${props => props.image}') center center no-repeat;
  background-size: cover;
  filter: blur(10px);
  transform: scale(1.2);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%
  height: 100%;
`

export default Background
