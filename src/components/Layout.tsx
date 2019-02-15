import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1%;
`
const Layout = (props: any) => {
  return <Container>{props.children}</Container>
}

export default Layout
