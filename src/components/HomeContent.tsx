import React from 'react'
import styled from 'styled-components'
import SignUpForm from './SignUpForm'

const ContentContainer = styled.section`
  width: 50vw;
  text-align: center;
  flex-basis: 50%;
`
const ContentTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 5%;
`
const Content = styled.p`
  padding: 0 20%;
  text-align: justify;
  margin-bottom: 3%;
`

const HomeContent = () => {
  return (
    <ContentContainer>
      <ContentTitle>Send Code's Monthly Challenge</ContentTitle>
      <Content>
        Hey developers and designers! This is an official invitation to our
        monthly challenge. By participatin, you are opening yourself up to
        several opportunities to collaborate with other people, develop your own
        skills and build some pretty cool projects.
      </Content>
      <Content>
        Each month we will work in cross disciplined teams towards planning,
        designing, building and deploying projects that will be based on a
        particular problem space.
      </Content>
      <Content>
        It is important to consider how much we are all able to commit to these
        projects as this will vary greatly. As such, there is no expectations in
        regards to how small or large each team's projects should be.
      </Content>
      <Content>
        <b>Sign Up Deadline: February 10, 2018</b>
      </Content>
      <Content>
        <b>This Month's Problem Space: TBD</b>
      </Content>
      <SignUpForm />
    </ContentContainer>
  )
}

export default HomeContent
