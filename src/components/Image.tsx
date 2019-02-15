import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  flex-basis: 40%;
  width: 50%;
  margin-top: 2rem;
`
interface IProps {
  [field: string]: any
}

const Image = (props: IProps) => {
  return <Img src={props.image} />
}

export default Image
