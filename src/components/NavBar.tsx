import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.nav`
  width: 100%;
  min-height: 5vh;
  background-color: black;
`

const ItemWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
`
const Item = styled.li`
  position: relative;
  font-size: 2rem;
  color: #fff;
`

const NavBar = () => {
  return (
    <NavContainer>
      <ItemWrapper>
        <Item>Sendcode</Item>
      </ItemWrapper>
    </NavContainer>
  )
}
export default NavBar
